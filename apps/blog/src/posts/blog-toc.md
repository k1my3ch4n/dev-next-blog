## 개요

블로그 게시글이 점점 길어지면서, 글을 읽는 중에 "지금 어디쯤 읽고 있는지"와 "전체 구조가 어떻게 되는지"를 한눈에 보여줄 장치가 필요해졌습니다. 기술 블로그에서 흔히 볼 수 있는 사이드바 목차(TOC, Table of Contents)가 바로 그 역할을 합니다. 이번 글에서는 Next.js App Router 기반 블로그에 스크롤 스파이가 적용된 목차 사이드바를 직접 구현한 과정을 정리합니다.

구현은 크게 두 단계로 나뉩니다.

1. 마크다운 본문에서 헤딩(h2, h3)을 추출하는 것
2. 스크롤 위치에 따라 현재 읽고 있는 섹션을 하이라이트하는 것 (스크롤 스파이)

## 1. 마크다운에서 헤딩 추출하기

목차를 만들려면 먼저 게시글 본문에서 헤딩 목록을 뽑아야 합니다. 저는 게시글을 마크다운 파일로 관리하고 있기 때문에, 마크다운 파서인 `remark`로 AST(추상 구문 트리)를 만들고 순회하는 방식을 선택했습니다.

```ts
import { remark } from "remark";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";

export interface TocHeading {
  id: string;
  text: string;
  depth: 2 | 3;
}

const extractHeadings = (markdown: string): TocHeading[] => {
  const tree = remark().parse(markdown);
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];

  visit(tree, "heading", (node) => {
    if (node.depth !== 2 && node.depth !== 3) {
      return;
    }

    const text = toString(node);
    const id = slugger.slug(text);

    headings.push({ id, text, depth: node.depth });
  });

  return headings;
};
```

여기서 중요한 포인트가 두 가지 있습니다.

### h1은 제외하고 h2, h3만 추출

h1은 게시글 제목이 이미 담당하고 있고, h4 이하까지 목차에 넣으면 오히려 목차가 복잡해집니다. 목차의 목적은 "글의 구조를 한눈에 보여주는 것"이므로 h2(대분류)와 h3(소분류)까지만 추출했습니다.

### github-slugger로 id 생성 규칙 맞추기

목차 링크(`#id`)가 실제 본문의 헤딩 요소와 연결되려면, 목차에서 생성한 id와 본문 헤딩에 붙는 id가 **정확히 같은 규칙**으로 만들어져야 합니다. 본문 렌더링에 사용하는 rehype 플러그인이 내부적으로 `github-slugger`를 사용하기 때문에, 헤딩 추출에서도 같은 라이브러리를 사용해 id 생성 규칙을 통일했습니다. 한글 헤딩, 중복 헤딩(같은 텍스트가 두 번 나오면 `-1`이 붙는 규칙)까지 동일하게 처리됩니다.

## 2. 서버에서 추출하고, 클라이언트에서 하이라이트

Next.js App Router에서는 이 작업을 자연스럽게 서버/클라이언트로 나눌 수 있습니다.

- **헤딩 추출은 서버 컴포넌트에서**: 게시글 페이지는 서버 컴포넌트이므로, 마크다운 파일을 읽은 뒤 바로 `extractHeadings`를 실행해 결과만 props로 내려줍니다. remark, github-slugger 같은 파싱 라이브러리가 클라이언트 번들에 포함되지 않습니다.
- **스크롤 스파이는 클라이언트 컴포넌트에서**: 스크롤 이벤트는 브라우저에서만 발생하므로, 목차 UI(`TocSidebar`)만 `"use client"`로 분리했습니다.

```tsx
// 게시글 페이지 (서버 컴포넌트)
const headings = extractHeadings(fileContents ?? "");

return (
  <div className="flex gap-12 lg:justify-center items-start">
    <article className="max-w-[760px] w-full mx-auto lg:mx-0">
      {/* 본문 */}
    </article>
    {headings.length > 0 && (
      <aside className="hidden lg:block sticky top-[80px] w-[200px] shrink-0">
        <TocSidebar headings={headings} />
      </aside>
    )}
  </div>
);
```

목차는 `aside` + `sticky`로 배치해 스크롤을 내려도 화면에 고정되고, 화면이 좁은 모바일에서는 숨겨서 본문 가독성을 우선했습니다.

## 3. 스크롤 스파이 구현: IntersectionObserver 대신 기준선 방식

스크롤 스파이라고 하면 보통 `IntersectionObserver`를 먼저 떠올립니다. 저도 처음에는 IntersectionObserver로 접근했지만, 실제로 적용해 보니 목차 하이라이트 용도로는 애매한 부분이 있었습니다.

그래서 더 단순하고 예측 가능한 **기준선(activation line) 방식**으로 구현했습니다. 화면 상단에서 일정 거리(96px) 지점에 가상의 기준선을 두고, "기준선을 통과한 마지막 헤딩"을 현재 섹션으로 판단하는 방식입니다.

```tsx
const ACTIVE_LINE_OFFSET = 96;
const THRESHOLD_TOLERANCE = 4;

const updateActiveHeading = () => {
  const isAtBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;

  if (isAtBottom) {
    setActiveId(headingElements[headingElements.length - 1].id);
    return;
  }

  let currentId = headingElements[0].id;

  for (const element of headingElements) {
    if (
      element.getBoundingClientRect().top >
      ACTIVE_LINE_OFFSET + THRESHOLD_TOLERANCE
    ) {
      break;
    }

    currentId = element.id;
  }

  setActiveId(currentId);
};
```

로직 자체는 단순하지만, 실제로 만들다 보면 만나는 엣지 케이스가 두 가지 있습니다.

### 엣지 케이스 1: 페이지 맨 아래에 도달했을 때

마지막 섹션이 짧으면, 스크롤을 끝까지 내려도 마지막 헤딩이 기준선에 도달하지 못합니다. 이러면 글을 다 읽었는데도 목차는 이전 섹션을 가리키는 어색한 상태가 됩니다. 그래서 스크롤이 문서 끝에 도달하면 무조건 마지막 헤딩을 활성화하는 분기를 먼저 두었습니다.

### 엣지 케이스 2: 앵커 이동 시 서브픽셀 오차

목차를 클릭하면 `scroll-margin-top`에 의해 헤딩이 기준선 근처로 이동하는데, 브라우저의 서브픽셀 렌더링 때문에 헤딩의 `top` 값이 기준선을 0.5px 정도 살짝 넘는 경우가 있습니다. 이러면 방금 클릭한 항목이 아니라 이전 항목이 활성화되는 버그가 생깁니다. 4px의 여유값(`THRESHOLD_TOLERANCE`)을 더해 이 문제를 해결했습니다.

### 스크롤 이벤트 성능

스크롤 이벤트는 매우 자주 발생하므로 `{ passive: true }` 옵션을 붙여 스크롤 성능에 영향을 주지 않도록 했습니다. 핸들러 내부도 `getBoundingClientRect` 순회 정도의 가벼운 연산이라 별도의 스로틀링 없이도 문제가 없었습니다.

## 4. 목차 UI

활성 항목은 왼쪽 보더와 글자 색으로 표시하고, h3는 들여쓰기로 계층을 표현했습니다. 시멘틱하게는 `nav` 태그와 `aria-label`로 목차임을 명시했습니다.

```tsx
<nav aria-label="목차" className="text-[13px]">
  <ul className="flex flex-col gap-2">
    {headings.map((heading) => {
      const isActive = heading.id === activeId;

      return (
        <li key={heading.id} className={heading.depth === 3 ? "pl-[14px]" : ""}>
          <a
            href={`#${heading.id}`}
            className={`block border-l-2 pl-[14px] transition-colors ${
              isActive
                ? "border-[var(--accent)] text-[var(--accent)] font-medium"
                : "border-[var(--border)] text-[var(--ink-muted)] hover:text-[var(--ink)]"
            }`}
          >
            {heading.text}
          </a>
        </li>
      );
    })}
  </ul>
</nav>
```

## 마치면서

목차 사이드바는 겉보기에 단순한 기능이지만, 직접 만들어 보니 배운 점이 많았습니다.

- **id 생성 규칙의 일관성**이 목차 기능의 핵심입니다. 목차와 본문이 서로 다른 slug 규칙을 쓰면 링크가 조용히 깨집니다.
- 스크롤 스파이는 IntersectionObserver가 정답이 아닐 수 있습니다. "뷰포트 교차"와 "현재 읽는 섹션"은 다른 문제이고, 기준선 방식이 더 단순하고 예측 가능했습니다.
- 페이지 하단 도달, 서브픽셀 오차 같은 엣지 케이스는 만들어 보기 전에는 알기 어렵습니다. 라이브러리를 쓰지 않고 직접 구현하면서 이런 디테일을 이해하게 된 것이 가장 큰 수확이었습니다.

## 참고문헌

- [remark - unified](https://github.com/remarkjs/remark)
- [unist-util-visit](https://github.com/syntax-tree/unist-util-visit)
- [github-slugger](https://github.com/Flet/github-slugger)
- [Element.getBoundingClientRect() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [scroll-margin-top - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top)
