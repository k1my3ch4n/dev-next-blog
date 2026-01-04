# Monorepo - portfolio

<div align="center">

<a href='https://portfolio.k1my3ch4n.xyz/' target="_blank">
   <img src='https://img.shields.io/badge/monorepo-portfolio-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

Monorepo 의 Portfolio 패키지 입니다. 개인 프로필 , 진행한 프로젝트 등이 담겨있습니다.

1. **노드 버전 (>= 20.0.0)**

   ```sh
   node --version
   ```

2. **PNPM 버전 (9.0.0)**
   ```sh
   pnpm --version
   ```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🔶 Technology Stack

- [Typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Next](https://nextjs.org/)
- [TurboRepo](https://turborepo.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [Github action](https://github.com/features/actions)
- [Google Cloud Platform](https://cloud.google.com/?hl=ko)
- [Docker](https://www.docker.com/)

## 📋 주요 변경사항 요약

<details>
<summary><strong>🎨 UI/UX 개선</strong></summary>

| 항목 | 설명 | 관련 섹션 |
|------|------|-----------|
| 반응형 카드 레이아웃 | 모바일 1열, 태블릿+ 2열 그리드 | [📱 반응형 카드 레이아웃](#-반응형-카드-레이아웃) |
| 다크 모드 | Cookie 기반 SSR 다크모드 (깜빡임 없음) | [🌙 Dark Mode](#-dark-mode) |
| 로딩 스켈레톤 | 스피너 대신 레이아웃 유지하는 스켈레톤 UI | [💀 로딩 스켈레톤](#-로딩-스켈레톤) |
| 에러 페이지 | 사용자 친화적 에러 페이지 + 재시도 기능 | [⚠️ 에러 페이지](#️-에러-페이지) |

</details>

<details>
<summary><strong>🔍 SEO 최적화</strong></summary>

| 항목 | 설명 | 관련 섹션 |
|------|------|-----------|
| OpenGraph / Twitter Card | 소셜 미디어 공유 시 미리보기 지원 | [🔗 SEO 및 소셜 미디어 메타데이터](#-seo-및-소셜-미디어-메타데이터) |
| Sitemap 동적 생성 | 프로젝트 데이터에서 자동 생성 | [🗺️ Sitemap 동적 생성](#️-sitemap-동적-생성) |
| JSON-LD 구조화 데이터 | Person, WebSite, Article 스키마 | [📊 JSON-LD 구조화 데이터](#-json-ld-구조화-데이터) |

</details>

<details>
<summary><strong>⚡ 성능 최적화</strong></summary>

| 항목 | 설명 | 관련 섹션 |
|------|------|-----------|
| 폰트 최적화 | next/font로 셀프 호스팅, preload, fallback | [🔤 폰트 최적화](#-폰트-최적화) |
| 이미지 최적화 | SVG + SVGR 사용 (래스터 이미지 없음) | [🖼️ 이미지 최적화](#️-이미지-최적화) |
| Tailwind CSS 4 | CSS-first 설정, 번들 최적화 | [🎨 Tailwind CSS 4 업데이트](#-tailwind-css-4-업데이트) |

</details>

<details>
<summary><strong>♿ 접근성 (A11y)</strong></summary>

| 항목 | 설명 | 관련 섹션 |
|------|------|-----------|
| 키보드 접근성 | Link, PageBox에 키보드 네비게이션 지원 | [♿ 접근성](#-접근성-accessibility) |
| ARIA 레이블 | 스크린 리더를 위한 설명 추가 | [♿ 접근성](#-접근성-accessibility) |
| 테이블 접근성 | div 테이블에 ARIA role 추가 | [♿ 접근성](#-접근성-accessibility) |
| Focus 스타일 | 키보드 포커스 시 시각적 피드백 | [♿ 접근성](#-접근성-accessibility) |

</details>

<details>
<summary><strong>🛠️ 코드 품질</strong></summary>

| 항목 | 설명 | 관련 섹션 |
|------|------|-----------|
| 데이터 중앙화 | 상수/데이터를 src/data/index.ts로 통합 | [📦 데이터 중앙화](#-데이터-중앙화) |
| 동적 라우트 | 프로젝트 페이지 중복 제거 | [🔀 동적 라우트](#-동적-라우트-프로젝트-페이지) |
| 스타일 상수화 | 반복 스타일을 상수로 추출 | [🎯 하드코딩 제거 및 스타일 상수화](#-하드코딩-제거-및-스타일-상수화) |
| 날짜 형식 통일 | YYYY.MM ~ YYYY.MM 형식 | [📅 날짜 형식 통일](#-날짜-형식-통일) |

</details>

## 🌵 Folder Structure

```sh
portfolio
├── src
│   ├── app
│   ├── assets
│   ├── components
│   └── svgr.d.ts
├── Dockerfile
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── postcss.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 📱 반응형 카드 레이아웃

### 개요

프로젝트 카드(PageBox)가 화면 크기에 따라 자동으로 레이아웃이 조절됩니다.

### 반응형 동작

| 화면 크기 | 동작 |
|-----------|------|
| 모바일 (~640px) | 1열 (카드 1개씩) |
| 태블릿/데스크탑 (640px~) | 2열 (카드 2개씩) |

### PageBox 컴포넌트

```tsx
// 고정 비율로 일관된 카드 크기 유지
const imageWrapperClassName =
  "aspect-[4/3] flex items-center justify-center bg-white";

// 이미지가 비율 유지하며 영역에 맞춤
const imageClassName = "w-full h-full object-contain p-4";
```

### 적용된 효과

| 항목 | 설명 |
|------|------|
| `aspect-[4/3]` | 모든 카드 이미지 영역이 4:3 비율로 고정 |
| `object-contain` | 이미지가 비율 유지하며 영역에 맞춤 |
| `grid-cols-1 sm:grid-cols-2` | 반응형 그리드 레이아웃 |

### 관련 파일

| 파일 | 역할 |
|------|------|
| `packages/components/src/PageBox.tsx` | 카드 컴포넌트 (aspect-ratio 적용) |
| `src/app/_components/Projects/Projects.tsx` | 프로젝트 카드 그리드 |
| `src/app/_components/AboutMe/AboutMe.tsx` | About Me 카드 그리드 |

## 📦 데이터 중앙화

### 개요

프로젝트 전반에 흩어져 있던 상수와 데이터를 `src/data/index.ts` 파일 하나로 중앙화하여 관리합니다.

### 구조

```
src/data/
└── index.ts    # 모든 상수 및 데이터
```

### 포함된 데이터

| 항목 | 설명 |
|------|------|
| `LINKS` | URL/링크 상수 (Resume, Github, Blog 등) |
| `SKILL_HEADER` | 스킬 테이블 헤더 |
| `SKILL_DATA` | 스킬 카테고리별 데이터 |
| `PROJECT_DETAILS` | 프로젝트 상세 정보 (메타데이터, 기간, 링크) |
| `PROJECTS` | 프로젝트 목록 배열 |
| `getProjectsByType()` | 프로젝트 타입별 필터링 유틸 |
| `getProjectById()` | ID로 프로젝트 조회 유틸 |

### 사용 예시

```tsx
import { LINKS, SKILL_DATA, getProjectsByType } from "@data";

// URL 사용
<Link href={LINKS.GITHUB}>Github</Link>

// 프로젝트 필터링
const careerProjects = getProjectsByType("career");
```

### Path Alias

`tsconfig.json`에 `@data` alias가 설정되어 있습니다:

```json
{
  "paths": {
    "@data": ["./src/data/index.ts"]
  }
}
```

## 🔀 동적 라우트 (프로젝트 페이지)

### 개요

프로젝트 상세 페이지는 동적 라우트 `[projectId]`를 사용하여 하나의 템플릿으로 모든 프로젝트를 렌더링합니다.

### 구조

```
src/app/project/
├── layout.tsx              # 공통 레이아웃 (홈 버튼, 스크롤 버튼)
├── [projectId]/
│   └── page.tsx            # 동적 라우트 페이지
└── _contents/              # 프로젝트별 컨텐츠 컴포넌트
    ├── index.ts
    ├── UserRobotContent.tsx
    ├── ManagerRobotContent.tsx
    ├── MonorepoContent.tsx
    ├── NextMonorepoContent.tsx
    └── HackerRankAiHelperContent.tsx
```

### 작동 방식

1. **메타데이터**: `src/data/index.ts`의 `PROJECT_DETAILS`에서 title, period, links 등을 가져옴
2. **컨텐츠**: `_contents/` 폴더의 컴포넌트에서 "작업 및 성과" 내용을 렌더링
3. **정적 생성**: `generateStaticParams()`로 빌드 시 모든 프로젝트 페이지를 미리 생성

### 새 프로젝트 추가 방법

1. `src/data/index.ts`의 `PROJECT_DETAILS`에 프로젝트 정보 추가
2. `src/app/project/_contents/`에 컨텐츠 컴포넌트 생성
3. `_contents/index.ts`에 컴포넌트 등록

### 이점

- **중복 제거**: 5개의 개별 페이지 파일 → 1개의 동적 라우트
- **일관성**: 모든 프로젝트 페이지가 동일한 레이아웃 보장
- **유지보수**: 레이아웃 변경 시 한 곳만 수정

## 🔗 SEO 및 소셜 미디어 메타데이터

### 개요

소셜 미디어 공유 시 썸네일, 제목, 설명이 올바르게 표시되도록 OpenGraph 및 Twitter Card 메타데이터를 설정합니다.

### 적용된 메타데이터

| 항목 | 설명 |
|------|------|
| `og:type` | 홈: `website`, 프로젝트: `article` |
| `og:locale` | `ko_KR` |
| `og:site_name` | `김예찬's Portfolio` |
| `og:title` | 페이지별 제목 |
| `og:description` | 페이지별 설명 |
| `og:url` | 페이지 URL |
| `twitter:card` | `summary_large_image` |

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/app/layout.tsx` | 전역 메타데이터 (기본값) |
| `src/app/project/[projectId]/page.tsx` | 프로젝트별 메타데이터 |

### title 템플릿

```tsx
title: {
  default: "김예찬's Portfolio",
  template: "%s | 김예찬's Portfolio",
}
```

- 홈페이지: `김예찬's Portfolio`
- 프로젝트 페이지: `프로젝트 제목 | 김예찬's Portfolio`

### 페이지별 메타데이터 비교

| 항목 | 홈페이지 | 프로젝트 페이지 |
|------|----------|----------------|
| `og:type` | website | article |
| `og:locale` | ko_KR | ko_KR |
| `og:title` | 김예찬's Portfolio | 프로젝트 제목 |
| `og:description` | 전역 설명 | 프로젝트별 설명 |
| `twitter:card` | summary_large_image | summary_large_image |

### 결과

소셜 미디어(카카오톡, 슬랙, 페이스북, 트위터 등)에서 URL 공유 시 제목과 설명이 올바르게 표시됩니다.

## 🎨 Tailwind CSS 4 업데이트

### 개요

Portfolio는 Tailwind CSS 4.x 버전을 사용합니다. Tailwind 4는 기존 3.x와 달리 **CSS-first 설정 방식**을 채택하여 `tailwind.config.js` 파일이 필요 없습니다.

### 주요 변경 사항

| 항목 | Tailwind 3.x | Tailwind 4.x |
|------|--------------|--------------|
| 설정 파일 | `tailwind.config.js` | CSS 파일 내 설정 |
| PostCSS 플러그인 | `tailwindcss` | `@tailwindcss/postcss` |
| 클래스 감지 | `content` 배열 | `@source` 지시어 |
| 다크모드 설정 | `darkMode: "class"` | `@variant dark` |
| CSS 임포트 | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| 커스텀 유틸리티 | `@layer utilities` | `@utility` |

### 설정 파일

#### postcss.config.mjs

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

#### globals.css

```css
/* 1. Reset을 먼저 import (Tailwind보다 낮은 우선순위) */
@import "./reset.css";
@import "tailwindcss";

/* 2. 외부 패키지 클래스 스캔 */
@source "../../components/**/*.{ts,tsx}";
@source "../../../../packages/components/src/**/*.{ts,tsx}";

/* 3. 다크모드 설정 */
@variant dark (&:where(.dark, .dark *));

/* 4. 커스텀 테마 확장 */
@theme {
  --shadow-inner-border: 0 2px 2px 2px rgba(0, 0, 0, 0.16);
  --shadow-tag: 0 0 0 1px #264db1 inset;
}

/* 5. 커스텀 유틸리티 (@utility 지시문 사용) */
@utility bg-highlight-background {
  background-color: var(--theme-highlight-bg);
}
```

### reset.css 간소화

Tailwind v4의 Preflight가 대부분의 reset을 처리하므로, 커스텀 reset은 최소한으로 유지합니다.

```css
/* 필요한 항목만 유지 */
ol, ul { list-style: none; }
button { background: none; border: none; /* ... */ }
```

### 주의사항

1. **@source 경로**: 모노레포에서 외부 패키지의 Tailwind 클래스를 사용하려면 `@source`로 경로 지정 필요. `.ts` 파일도 포함해야 스타일 상수가 스캔됨.

2. **@utility vs 일반 CSS**: 커스텀 유틸리티는 `@utility` 지시문으로 정의해야 Tailwind 시스템과 통합됨.

3. **reset.css 순서**: `@import "./reset.css"`를 `@import "tailwindcss"` 보다 먼저 선언해야 Tailwind 유틸리티가 우선 적용됨.

4. **CSS 변수**: `var(--theme-*)` 형태로 테마 변수 사용, `bg-[var(--theme-bg)]` 형식으로 Tailwind와 함께 사용.

5. **button reset 주의**: `all: unset`이나 `font: inherit`은 Tailwind 유틸리티를 덮어쓰므로 사용 자제.

### 관련 파일

| 파일 | 역할 |
|------|------|
| `postcss.config.mjs` | PostCSS 플러그인 설정 |
| `src/app/globals.css` | Tailwind 임포트 및 설정 |
| `src/app/reset.css` | 최소한의 커스텀 reset |

## 🌙 Dark Mode

### 개요

Portfolio는 Cookie 기반의 서버 사이드 다크모드를 지원합니다. 우측 상단의 토글 버튼(🌙/☀️)으로 테마를 전환할 수 있습니다.

### 왜 Cookie 기반인가?

다크모드 구현에는 크게 3가지 방식이 있습니다:

| 방식 | 저장소 | 테마 적용 시점 | 깜빡임 |
|------|--------|----------------|--------|
| localStorage + useEffect | localStorage | 클라이언트 (JS 로드 후) | O |
| localStorage + 인라인 스크립트 | localStorage | 클라이언트 (HTML 파싱 중) | X |
| **Cookie + SSR** | Cookie | **서버 (SSR 시점)** | **X** |

#### localStorage + useEffect 방식의 문제

```
1. 서버에서 HTML 렌더링 (라이트 모드)
2. 브라우저에 HTML 전송 → 라이트 모드로 화면 표시
3. JavaScript 로드
4. React hydration
5. useEffect 실행 → localStorage에서 테마 읽기
6. dark 클래스 추가 → 다크 모드로 전환
          ↑
    여기서 화면이 번쩍임 (Flash of Unstyled Content)
```

다크모드 사용자는 **라이트 → 다크**로 전환되면서 화면이 깜빡이는 현상을 경험합니다.

#### 인라인 스크립트 방식

```tsx
const themeInitScript = `
  (function() {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  })();
`;

<head>
  <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
</head>
```

이 방식은 깜빡임을 해결하지만, **인라인 스크립트**를 사용해야 합니다. CSP(Content Security Policy) 설정에 따라 보안 이슈가 될 수 있고, 코드가 다소 지저분해집니다.

#### Cookie + SSR 방식 (현재 사용 중)

```tsx
// layout.tsx (서버 컴포넌트)
export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("portfolio-theme")?.value === "dark" ? "dark" : "light";

  return (
    <html className={theme === "dark" ? "dark" : ""}>
      ...
    </html>
  );
}
```

서버에서 쿠키를 읽어 **SSR 시점에 올바른 테마가 적용된 HTML**을 생성합니다. 클라이언트에 전송되는 HTML이 처음부터 올바른 테마를 가지고 있으므로 깜빡임이 없습니다.

### 이 방식의 이점

1. **깜빡임 없음**: SSR 시점에 테마가 결정되므로 FOUC(Flash of Unstyled Content)가 발생하지 않습니다.

2. **인라인 스크립트 불필요**: `dangerouslySetInnerHTML`을 사용하지 않아 코드가 깔끔하고 CSP 호환성이 좋습니다.

3. **SEO 친화적**: 검색 엔진 크롤러가 올바른 테마가 적용된 HTML을 받습니다.

4. **서버-클라이언트 상태 동기화**: 서버와 클라이언트가 동일한 테마 상태를 공유하여 hydration 불일치가 발생하지 않습니다.

5. **외부 의존성 없음**: next-themes 같은 외부 라이브러리 없이 Next.js 기본 기능만으로 구현됩니다.

### 구현 구조

```
┌─────────────────────────────────────────────────────────────┐
│                        Server                                │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ layout.tsx                                           │    │
│  │   const cookieStore = await cookies();               │    │
│  │   const theme = cookieStore.get("portfolio-theme");  │    │
│  │   <html className={theme === "dark" ? "dark" : ""}>  │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ HTML with correct theme class
┌─────────────────────────────────────────────────────────────┐
│                        Client                                │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ ThemeProvider                                        │    │
│  │   - initialTheme props로 서버 테마 전달받음           │    │
│  │   - useState로 테마 상태 관리                         │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ ThemeToggle                                          │    │
│  │   - 토글 클릭 시:                                     │    │
│  │     1. document.cookie에 새 테마 저장                 │    │
│  │     2. document.documentElement.classList 업데이트    │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/app/layout.tsx` | 서버에서 쿠키 읽어 html 태그에 클래스 적용 |
| `src/app/globals.css` | CSS 변수 및 `@variant dark` 설정 |
| `src/components/ThemeProvider/` | 테마 상태 관리 및 쿠키 저장 |
| `src/components/ThemeToggle/` | 토글 버튼 UI |

## 📅 날짜 형식 통일

### 개요

프로젝트 전반에서 날짜 형식을 `YYYY.MM ~ YYYY.MM` 형식으로 통일했습니다.

### 통일 형식

| 항목 | 형식 | 예시 |
|------|------|------|
| 연도 | 4자리 | `2024` |
| 월 | 2자리 (0 패딩) | `01`, `12` |
| 구분자 | ` ~ ` (앞뒤 공백) | `2022.04 ~ 2024.04` |

### 변경된 날짜

| 변경 전 | 변경 후 |
|---------|---------|
| `2022.4 - 2024.4` | `2022.04 ~ 2024.04` |
| `2015.3 - 2022.2` | `2015.03 ~ 2022.02` |

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/app/_components/Profile/Profile.tsx` | 경력 및 학력 기간 |
| `src/data/index.ts` | 프로젝트별 기간 (PROJECT_DETAILS) |

## 🎯 하드코딩 제거 및 스타일 상수화

### 개요

packages/components에서 하드코딩된 색상과 반복되는 스타일 패턴을 CSS 변수와 상수로 추출하여 유지보수성을 개선했습니다.

### 1. 색상 CSS 변수화

하드코딩된 색상들을 CSS 변수로 변경하여 다크모드 지원 및 테마 일관성을 확보했습니다.

| 컴포넌트 | 변경 전 | 변경 후 |
|----------|---------|---------|
| `Divider` | `bg-black` | `bg-[var(--theme-divider)]` |
| `PageBox` | `bg-white`, `bg-black text-white` | `bg-[var(--theme-card-bg)]`, `bg-[var(--theme-card-title-bg)]` |
| `TableCell` | `border-black` | `border-[var(--theme-border)]` |
| `TableRow` | `bg-[#cfcfcfc9]` | `bg-[var(--theme-header-bg)]` |
| `Loading` | `text-[#343a40]`, `text-[#6c757d]` | `text-[var(--theme-text-secondary)]`, `text-[var(--theme-text-muted)]` |
| `NotFound` | `text-[#343a40]`, `text-[#6c757d]` | `text-[var(--theme-text-secondary)]`, `text-[var(--theme-text-muted)]` |

### 2. 스타일 상수 파일

`packages/components/src/styles/index.ts`에 반복되는 스타일 패턴을 상수로 정의했습니다.

```typescript
// 공통 텍스트 패딩
export const TEXT_PADDING = "py-[3px] px-[2px]";

// 리스트 마커 스타일
export const LIST_MARKER = "flex items-center justify-center min-w-[24px] h-[30px] mr-[3px]";

// 텍스트 크기
export const TEXT_SIZE = {
  sm: "text-[16px]",
  lg: "text-[20px]",
  xl: "text-[24px]",
  "2xl": "text-[30px]",
} as const;

// 헤더 마진
export const HEADER_MARGIN = {
  l: "mt-[32px] mb-[4px]",
  m: "mt-[22px] mb-[1px]",
  s: "mt-[16px]",
} as const;

// 반응형 그리드
export const GRID_LAYOUT = {
  responsive2Cols: "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",
} as const;
```

### 3. 적용된 컴포넌트

| 상수 | 적용 컴포넌트 |
|------|---------------|
| `TEXT_PADDING` | Bold, Header, Text, Title, List, NumberList |
| `LIST_MARKER` | List, NumberList |
| `TEXT_SIZE` | Header, Text, List, NumberList |
| `HEADER_MARGIN` | Header |
| `GRID_LAYOUT` | Projects, AboutMe |

### 이점

1. **중복 제거**: 6개 이상의 컴포넌트에서 반복되던 패턴 통합
2. **일관성**: 스타일 변경 시 한 곳만 수정하면 전체 적용
3. **다크모드**: CSS 변수 사용으로 테마 전환 시 자동 적용
4. **가독성**: 의미 있는 상수명으로 코드 이해도 향상

## ♿ 접근성 (Accessibility)

### 개요

스크린 리더 사용자와 키보드 사용자를 위한 접근성을 개선했습니다.

### 1. 키보드 접근성

인터랙티브 요소들에 키보드 지원을 추가했습니다.

| 컴포넌트 | 추가된 속성 |
|----------|-------------|
| `Link` | `tabIndex={0}`, `role="link"`, `onKeyDown` (Enter/Space) |
| `PageBox` | `tabIndex={0}`, `role="button"`, `onKeyDown` (Enter/Space) |

### 2. Focus 스타일

`reset.css`에서 `all: unset`으로 제거된 focus 스타일을 복원했습니다.

```css
button:focus-visible,
a:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--theme-text);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### 3. ARIA 레이블

스크린 리더를 위한 설명을 추가했습니다.

| 컴포넌트 | aria-label |
|----------|------------|
| `HomeButton` | "홈으로 이동" |
| `ScrollToTopButton` | "페이지 맨 위로 스크롤" |
| `PageBox` | "{title} 열기" |
| `Link` | 선택적 ariaLabel prop 지원 |
| `Divider` | `role="separator"`, `aria-hidden="true"` |

### 4. 장식용 이미지 처리

`PageBox`의 썸네일 이미지와 `ImageBox`에 `aria-hidden="true"`를 추가하여 스크린 리더가 장식용 이미지를 무시하도록 했습니다.

### 5. 테이블 접근성

`div`로 구현된 테이블에 ARIA role을 추가하여 스크린 리더가 테이블로 인식하도록 했습니다.

| 컴포넌트 | 추가된 속성 |
|----------|-------------|
| `Table` | `role="table"` |
| `TableRow` | `role="row"` |
| `TableCell` | `role="cell"` (본문), `role="columnheader"` (헤더) |

### 6. 로딩 상태 알림

`Loading` 컴포넌트에 `role="status"`와 `aria-live="polite"`를 추가하여 로딩 상태 변경을 스크린 리더가 자동으로 읽어주도록 했습니다.

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/app/reset.css` | 전역 focus 스타일 |
| `packages/components/src/Link.tsx` | 키보드 접근성 |
| `packages/components/src/PageBox.tsx` | 키보드 접근성, ARIA |
| `packages/components/src/HomeButton.tsx` | aria-label |
| `packages/components/src/ScrollToTopButton.tsx` | aria-label |
| `packages/components/src/Divider.tsx` | role, aria-hidden |
| `packages/components/src/Table.tsx` | role="table" |
| `packages/components/src/TableRow.tsx` | role="row" |
| `packages/components/src/TableCell.tsx` | role="cell" / "columnheader" |
| `packages/components/src/Loading.tsx` | role="status", aria-live |
| `packages/components/src/ImageBox.tsx` | aria-hidden |

## 🗺️ Sitemap 동적 생성

### 개요

sitemap.xml을 `PROJECT_DETAILS` 데이터에서 동적으로 생성하여 새 프로젝트 추가 시 자동으로 sitemap에 반영됩니다.

### 이전 방식 (하드코딩)

```typescript
// 프로젝트 추가 시 수동으로 URL 추가 필요
return [
  { url: "https://portfolio.k1my3ch4n.xyz/project/managerRobot", ... },
  { url: "https://portfolio.k1my3ch4n.xyz/project/userRobot", ... },
  // 새 프로젝트 추가 시 여기에 수동 추가...
];
```

### 현재 방식 (동적 생성)

```typescript
import { PROJECTS } from "@data";

const BASE_URL = "https://portfolio.k1my3ch4n.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = PROJECTS.map((project) => ({
    url: `${BASE_URL}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, priority: 1, ... },
    ...projectPages,
  ];
}
```

### 이점

1. **자동 반영**: `PROJECT_DETAILS`에 프로젝트 추가 시 sitemap에 자동 포함
2. **중복 제거**: URL 하드코딩 불필요
3. **일관성**: 데이터 소스가 단일화되어 불일치 방지
4. **유지보수**: 프로젝트 ID 변경 시 sitemap도 자동 업데이트

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/app/sitemap.ts` | sitemap 동적 생성 |
| `src/data/index.ts` | 프로젝트 데이터 (PROJECTS) |

## 📊 JSON-LD 구조화 데이터

### 개요

검색엔진이 페이지 콘텐츠를 더 잘 이해할 수 있도록 Schema.org 기반의 JSON-LD 구조화 데이터를 추가했습니다. 이를 통해 Google Rich Results에 표시될 가능성이 높아집니다.

### 왜 필요한가?

#### 1. 검색엔진은 HTML만으로 내용을 정확히 이해하기 어려움

```html
<!-- 검색엔진 입장에서 이게 누구인지 알기 어려움 -->
<h1>김예찬</h1>
<p>Frontend Developer</p>
```

```json
// JSON-LD로 명확하게 "이 사람은 프론트엔드 개발자다"라고 알려줌
{
  "@type": "Person",
  "name": "김예찬",
  "jobTitle": "Frontend Developer"
}
```

#### 2. Google Rich Results (풍부한 검색 결과)

| 구분 | 검색 결과 표시 |
|------|----------------|
| **일반** | 제목, URL, 설명만 표시 |
| **JSON-LD 적용** | 직업, 기술 스택, 소셜 링크 등 풍부한 정보 표시 가능 |

#### 3. 실제 효과

| 항목 | 설명 |
|------|------|
| **CTR 향상** | 풍부한 정보로 클릭률 증가 |
| **SEO 점수** | 구조화 데이터는 SEO 랭킹 요소 중 하나 |
| **AI 검색** | ChatGPT, Bing AI 등이 정보를 더 정확하게 인용 |
| **소셜 공유** | 링크 공유 시 더 정확한 정보 표시 |

#### 4. 포트폴리오에 특히 유용

| 스키마 | 효과 |
|--------|------|
| `Person` | "김예찬"이 사람이고 프론트엔드 개발자임을 명시 |
| `knowsAbout` | React, Next.js 등 기술 스택 명시 → 관련 검색 노출 가능성 증가 |
| `sameAs` | GitHub, 블로그 연결 → 신뢰도 향상 |

### 적용된 스키마

| 페이지 | 스키마 타입 | 포함 정보 |
|--------|-------------|-----------|
| 홈페이지 | `Person` | 이름, 직업, 기술 스택, 소셜 링크 |
| 홈페이지 | `WebSite` | 사이트명, URL, 설명, 저자 |
| 프로젝트 페이지 | `Article` | 제목, 설명, URL, 작성일, 저자 |

### 홈페이지 JSON-LD 예시

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "김예찬",
  "url": "https://portfolio.k1my3ch4n.xyz",
  "jobTitle": "Frontend Developer",
  "sameAs": ["https://github.com/k1my3ch4n", "https://blog.k1my3ch4n.xyz/"],
  "knowsAbout": ["React", "Next.js", "TypeScript", ...]
}
```

### 프로젝트 페이지 JSON-LD 예시

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "🤖 관리자용 로봇 관제 웹 프로젝트",
  "description": "프로젝트 설명...",
  "url": "https://portfolio.k1my3ch4n.xyz/project/managerRobot",
  "author": {
    "@type": "Person",
    "name": "김예찬"
  },
  "datePublished": "2022-04-01"
}
```

### 이점

1. **SEO 향상**: 검색엔진이 콘텐츠를 더 정확하게 이해
2. **Rich Results**: Google 검색 결과에 풍부한 정보 표시 가능
3. **소셜 공유**: 구조화된 데이터로 일관된 정보 제공

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/lib/jsonLd.ts` | JSON-LD 생성 유틸리티 함수 |
| `src/app/page.tsx` | 홈페이지 (Person + WebSite) |
| `src/app/project/[projectId]/page.tsx` | 프로젝트 페이지 (Article) |

## 🔤 폰트 최적화

### 개요

`next/font/local`을 사용하여 커스텀 폰트(Paperlogy)를 최적화합니다. Next.js의 폰트 시스템은 빌드 시 폰트를 자동으로 최적화하고 셀프 호스팅합니다.

### 적용된 최적화

| 옵션 | 값 | 효과 |
|------|-----|------|
| `display` | `"swap"` | 폰트 로딩 중 시스템 폰트 표시 → FOIT(Flash of Invisible Text) 방지 |
| `preload` | `true` | 폰트 파일을 미리 로드하여 렌더링 차단 최소화 |
| `fallback` | `["system-ui", "sans-serif"]` | 폰트 로드 실패 시 대체 폰트 |
| `variable` | `"--font-paperlogy"` | CSS 변수로 폰트 접근 가능 |

### next/font의 이점

1. **셀프 호스팅**: 외부 요청 없이 폰트를 자체 서버에서 제공
2. **자동 최적화**: 사용하지 않는 글리프 제거, 서브셋 생성
3. **레이아웃 시프트 방지**: `size-adjust` 자동 적용
4. **프라이버시**: Google Fonts 등 외부 서비스에 사용자 데이터 전송 안함

### 설정 코드

```typescript
import localFont from "next/font/local";

const PaperLogyFont = localFont({
  src: [
    { path: "./Paperlogy-4Regular.woff2", weight: "400", style: "normal" },
    { path: "./Paperlogy-7Bold.woff2", weight: "700", style: "normal" },
    // ... 다른 weight들
  ],
  display: "swap",
  variable: "--font-paperlogy",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});
```

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/app/fonts/index.ts` | 폰트 설정 |
| `src/app/layout.tsx` | 폰트 적용 |

## 🖼️ 이미지 최적화

### 현재 상태

Portfolio의 모든 이미지는 **SVG(벡터)** 형식을 사용하고 있어 별도의 이미지 최적화가 필요하지 않습니다.

### SVG 사용의 이점

| 항목 | 설명 |
|------|------|
| **해상도 독립적** | 어떤 크기에서도 선명함 (Retina 디스플레이 대응) |
| **작은 파일 크기** | 래스터 이미지(PNG, JPG)보다 용량이 작음 |
| **스타일링 가능** | CSS로 색상, 크기 등 변경 가능 |
| **애니메이션** | CSS/JS로 애니메이션 적용 가능 |

### SVGR 사용

SVG 파일을 React 컴포넌트로 변환하여 사용합니다:

```typescript
// SVG를 컴포넌트로 import
import { MainLogo, TwinnyLogo } from "@images";

// JSX에서 사용
<MainLogo width="100%" height="auto" />
```

### next/image가 필요한 경우

만약 PNG, JPG 등 래스터 이미지를 추가하게 된다면 `next/image`를 사용해야 합니다:

```typescript
import Image from "next/image";

<Image
  src="/photo.jpg"
  alt="설명"
  width={800}
  height={600}
  priority  // LCP 이미지인 경우
/>
```

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/assets/images/` | SVG 이미지 파일들 |
| `src/assets/images/index.ts` | 이미지 export |
| `next.config.ts` | SVGR 설정 |

## ⚠️ 에러 페이지

### 개요

런타임 에러 발생 시 사용자 친화적인 에러 페이지를 표시합니다. Next.js의 `error.tsx`를 사용하여 에러 바운더리를 구현했습니다.

### 기능

| 기능 | 설명 |
|------|------|
| **에러 메시지** | 사용자 친화적인 에러 안내 |
| **다시 시도** | `reset()` 함수로 컴포넌트 재렌더링 |
| **홈으로 이동** | 홈페이지로 리다이렉트 |
| **개발 모드 상세 정보** | 개발 환경에서만 에러 스택 표시 |

### 구현 코드

```tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>오류가 발생했습니다</h1>
      <button onClick={reset}>다시 시도</button>
      <button onClick={() => window.location.href = "/"}>홈으로 이동</button>

      {/* 개발 모드에서만 에러 상세 정보 표시 */}
      {process.env.NODE_ENV === "development" && (
        <details>
          <summary>오류 상세 정보</summary>
          <pre>{error.message}</pre>
        </details>
      )}
    </div>
  );
}
```

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/app/error.tsx` | 전역 에러 페이지 |
| `src/app/not-found.tsx` | 404 페이지 |

## 💀 로딩 스켈레톤

### 개요

페이지 로딩 중 콘텐츠 레이아웃을 미리 보여주는 스켈레톤 UI를 적용했습니다. 이를 통해 사용자에게 로딩 상태를 시각적으로 알려주고, 레이아웃 시프트를 방지합니다.

### 스켈레톤 vs 스피너

| 방식 | 장점 | 단점 |
|------|------|------|
| **스피너** | 구현 간단 | 콘텐츠 위치 예측 불가, CLS 발생 |
| **스켈레톤** | 레이아웃 유지, UX 향상 | 구현 복잡 |

### 제공되는 스켈레톤 컴포넌트

```tsx
import Skeleton, {
  SkeletonCard,    // 카드 형태
  SkeletonText,    // 여러 줄 텍스트
  SkeletonTitle,   // 제목
  SkeletonProfile, // 프로필 (아바타 + 텍스트)
} from "@components/Skeleton";

// 기본 사용
<Skeleton width="200px" height="20px" />

// 카드 스켈레톤
<SkeletonCard />

// 텍스트 스켈레톤 (3줄)
<SkeletonText lines={3} />
```

### 적용된 페이지

| 페이지 | 스켈레톤 구성 |
|--------|---------------|
| 홈페이지 | 타이틀, 프로필, 스킬 테이블, 프로젝트 카드 |
| 프로젝트 상세 | 타이틀, 썸네일, 기간, 컨텐츠, 링크 |

### 애니메이션

Tailwind의 `animate-pulse` 클래스를 사용하여 부드러운 펄스 애니메이션을 적용했습니다.

```tsx
<div className="animate-pulse bg-[var(--theme-header-bg)]" />
```

### 관련 파일

| 파일 | 역할 |
|------|------|
| `src/components/Skeleton/index.tsx` | 스켈레톤 컴포넌트 |
| `src/app/loading.tsx` | 홈페이지 로딩 |
| `src/app/project/[projectId]/loading.tsx` | 프로젝트 페이지 로딩 |
