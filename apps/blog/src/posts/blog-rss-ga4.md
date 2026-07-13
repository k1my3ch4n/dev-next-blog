## 개요

블로그에 글이 어느 정도 쌓이면서, "글을 쓰는 것" 다음 단계인 "블로그를 운영하는 것"에 필요한 인프라를 갖추기로 했습니다. 이번 글에서는 그 첫 단계로 진행한 두 가지 작업을 정리합니다.

1. **RSS 피드**: 독자가 구독할 수 있는 채널 만들기
2. **Google Analytics(GA4)**: 방문자 데이터 수집하기

두 작업 모두 Next.js App Router 환경에서 외부 라이브러리 의존을 최소화하며 구현했습니다.

## 1. RSS 피드 추가하기

RSS는 오래된 기술이지만, 기술 블로그 생태계에서는 여전히 현역입니다. RSS 리더로 블로그를 구독하는 개발자가 많고, 여러 블로그 큐레이션 서비스들도 RSS 피드를 기반으로 글을 수집합니다. 피드가 없으면 이런 채널에서 아예 발견되지 않습니다.

### Route Handler로 feed.xml 만들기

Next.js App Router에서는 `app/feed.xml/route.ts` 파일 하나로 `/feed.xml` 경로를 만들 수 있습니다. RSS 생성 라이브러리(`feed`, `rss` 등)를 쓸 수도 있지만, RSS 2.0 스펙에서 실제로 필요한 부분은 얼마 되지 않아서 의존성 추가 없이 직접 XML 문자열을 조립했습니다.

```ts
// app/feed.xml/route.ts
export const dynamic = "force-static";

export function GET() {
  const items = getPosts()
    .filter((post) => post.postKey !== null || post.externalUrl !== null)
    .map((post) => {
      const link = post.externalUrl ?? `${SEO.siteUrl}/blog/${post.postKey}`;
      return toRssItem(link, post.title, post.tags);
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SEO.title)}</title>
    <link>${SEO.siteUrl}</link>
    <description>${escapeXml(SEO.description)}</description>
    <language>ko</language>
    <atom:link href="${SEO.siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
```

구현하면서 챙긴 포인트들입니다.

### force-static으로 빌드 타임에 생성

게시글은 배포 시점에 정해지므로, 요청마다 피드를 생성할 이유가 없습니다. `export const dynamic = "force-static"`을 선언하면 빌드 타임에 XML이 한 번 생성되어 정적 파일처럼 서빙됩니다.

### XML 이스케이프는 직접 챙겨야 한다

라이브러리 없이 XML을 조립할 때 가장 놓치기 쉬운 부분입니다. 게시글 제목에 `&`, `<`, `>` 같은 문자가 들어가면 피드 전체가 깨진 XML이 됩니다. 특히 기술 블로그는 제목에 `<Suspense>`, `A & B` 같은 표기가 흔하므로 이스케이프 함수를 반드시 거치도록 했습니다.

```ts
const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
```

### 외부 게시글도 피드에 포함

제 블로그에는 자체 호스팅 글 외에 Notion 등 외부 플랫폼에 작성한 글도 목록에 노출됩니다. 피드에서도 동일하게, 외부 글은 `externalUrl`을 링크로 사용해 구독자가 모든 글을 받아볼 수 있게 했습니다. `guid`는 링크를 그대로 사용하고 `isPermaLink="true"`를 명시했습니다.

### 피드 자동 발견(auto-discovery) 등록

주소창에 `/feed.xml`을 직접 입력하는 구독자는 거의 없습니다. RSS 리더가 블로그 주소만으로 피드를 찾아낼 수 있도록, 레이아웃 메타데이터의 `alternates.types`에 피드를 등록했습니다. 이렇게 하면 `<link rel="alternate" type="application/rss+xml">` 태그가 head에 추가되어, RSS 리더에 블로그 URL만 넣어도 피드를 자동으로 발견합니다.

```ts
// app/layout.tsx
alternates: {
  canonical: SEO.siteUrl,
  types: {
    "application/rss+xml": `${SEO.siteUrl}/feed.xml`,
  },
},
```

## 2. Google Analytics(GA4) 연동하기

방문자가 어떤 글을 많이 읽는지, 어디서 유입되는지를 알아야 다음에 어떤 글을 쓸지 판단할 수 있습니다. GA4를 블로그와 포트폴리오 두 앱에 연동했습니다.

### @next/third-parties 사용

예전에는 GA를 붙이려면 `<Script>` 태그로 gtag 스니펫을 직접 삽입하고 초기화 코드를 작성해야 했습니다. 지금은 Next.js 공식 패키지인 `@next/third-parties`가 이 작업을 컴포넌트 하나로 제공합니다. 스크립트 로딩 전략(성능 최적화)도 패키지가 알아서 처리합니다.

```tsx
// app/layout.tsx
import { GoogleAnalytics } from "@next/third-parties/google";

<body>
  {/* ... */}
  {process.env.NODE_ENV === "production" && GA_MEASUREMENT_ID && (
    <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
  )}
</body>;
```

### 프로덕션에서만 렌더링

로컬 개발 중의 새로고침이 전부 방문 데이터에 잡히면 통계가 오염됩니다. `process.env.NODE_ENV === "production"` 조건으로 개발 환경에서는 GA 스크립트 자체가 렌더링되지 않도록 했습니다. 측정 ID가 빈 문자열인 경우에도 렌더링하지 않아, ID 발급 전 배포에서도 안전합니다.

### 측정 ID는 shared/config로 분리

측정 ID를 레이아웃에 하드코딩하지 않고 `shared/config/analytics.ts`로 분리했습니다. FSD 구조에서 이런 설정값은 shared 레이어의 config 세그먼트가 담당하는 것이 자연스럽고, 나중에 ID가 바뀌거나 앱별로 달라져도 수정 지점이 한 곳입니다.

```ts
// shared/config/analytics.ts
// GA4 측정 ID (Google Analytics > 관리 > 데이터 스트림에서 발급)
// 빈 문자열이면 GA 스크립트를 렌더링하지 않는다
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

## 마치면서

두 작업 모두 코드 자체는 크지 않지만, "글을 쓰는 블로그"에서 "운영하는 블로그"로 넘어가는 데 필요한 기반이었습니다.

- RSS는 라이브러리 없이도 충분히 구현할 수 있을 만큼 단순한 스펙이지만, XML 이스케이프와 auto-discovery 등록처럼 놓치면 조용히 실패하는 디테일이 있습니다.
- GA4는 `@next/third-parties` 덕분에 연동 자체는 간단해졌고, 오히려 중요한 건 "개발 환경 데이터를 오염시키지 않는 것" 같은 운영 관점의 처리였습니다.

다음 단계로는 GA 데이터가 쌓이면 어떤 글이 많이 읽히는지 분석해보고, 그 결과를 글감 선정에 활용해 볼 계획입니다.

## 참고문헌

- [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)
- [Route Handlers - Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [generateMetadata: alternates - Next.js Docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#alternates)
- [Third Party Libraries: Google Analytics - Next.js Docs](https://nextjs.org/docs/app/guides/third-party-libraries#google-analytics)
- [GA4 데이터 스트림 - Google Analytics 고객센터](https://support.google.com/analytics/answer/9304153)
