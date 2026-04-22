# Monorepo - portfolio

<div align="center">

<a href='https://portfolio.k1my3ch4n.xyz/' target="_blank">
   <img src='https://img.shields.io/badge/monorepo-portfolio-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

Monorepo 의 Portfolio 패키지 입니다. 개인 프로필, 진행한 프로젝트 등이 담겨있습니다.

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

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🚀 업데이트 내역

<details open>
<summary><strong>FSD 아키텍처 도입</strong></summary>

### 변경 사항 개요

기존 `src/app/_components/`, `src/data/`, `src/components/` 중심의 구조에서 FSD(Feature Sliced Design) 아키텍처로 전환했습니다.

### 주요 변경 내용

#### 1. 동적 라우트 → ProjectModal 전환

기존 `src/app/project/[projectId]` 개별 상세 페이지를 제거하고, 같은 페이지에서 모달로 프로젝트 상세를 표시하도록 변경했습니다.

| 항목 | 변경 전 | 변경 후 |
|------|---------|---------|
| 프로젝트 상세 | 동적 라우트 페이지 (`/project/[projectId]`) | 모달 (`ProjectModal` feature) |
| 라우팅 | 페이지 이동 | 현재 페이지 내 모달 오픈 |
| 코드 위치 | `src/app/project/_contents/` | `src/features/ProjectModal/` |

#### 2. FSD 레이어 구조

| 레이어 | 경로 | 역할 |
|--------|------|------|
| features | `src/features/ProjectFilter` | 프로젝트 타입 필터링 |
| features | `src/features/ProjectModal` | 프로젝트 상세 모달 |
| shared | `src/shared/data` | 중앙화된 데이터 (도메인별 파일 분리) |
| shared | `src/shared/ui` | 공통 UI 컴포넌트 |
| shared | `src/shared/hooks` | 공통 훅 (useScrollSpy 등) |
| widgets | `src/widgets/Hero` | 히어로 섹션 |
| widgets | `src/widgets/ProjectSection` | 프로젝트 목록 섹션 |
| widgets | `src/widgets/AboutSection` | 경력/학력 섹션 |
| widgets | `src/widgets/SkillSection` | 기술 스택 섹션 |
| widgets | `src/widgets/SectionNav` | 섹션 네비게이션 |
| widgets | `src/widgets/ContactSection` | 연락처 섹션 |

#### 3. 데이터 파일 분리

기존 단일 파일(`src/data/index.ts`)을 도메인별로 분리했습니다.

| 파일 | 내용 |
|------|------|
| `src/shared/data/projects.ts` | 프로젝트 목록 및 상세 정보 |
| `src/shared/data/skills.ts` | 기술 스택 데이터 |
| `src/shared/data/experience.ts` | 경력 및 학력 |
| `src/shared/data/links.ts` | 외부 링크 (Github, Blog 등) |
| `src/shared/data/navigation.ts` | 섹션 네비게이션 항목 |

#### 4. SectionNav + useScrollSpy

스크롤 위치를 감지하여 현재 섹션을 하이라이트하는 네비게이션을 추가했습니다.

- `src/shared/hooks/useScrollSpy.ts`: IntersectionObserver 기반 스크롤 감지
- `src/widgets/SectionNav/`: 섹션 목록 렌더링 및 활성 섹션 표시

</details>

<details>
<summary><strong>Tailwind CSS 4 업데이트</strong></summary>

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

```css
/* globals.css */
@import "./reset.css";
@import "tailwindcss";

@source "../../components/**/*.{ts,tsx}";
@source "../../../../packages/components/src/**/*.{ts,tsx}";

@variant dark (&:where(.dark, .dark *));

@theme {
  --shadow-inner-border: 0 2px 2px 2px rgba(0, 0, 0, 0.16);
  --shadow-tag: 0 0 0 1px #264db1 inset;
}

@utility bg-highlight-background {
  background-color: var(--theme-highlight-bg);
}
```

### 주의사항

1. **@source 경로**: 모노레포에서 외부 패키지 Tailwind 클래스를 사용하려면 `@source`로 경로 지정 필요. `.ts` 파일도 포함해야 스타일 상수가 스캔됨.
2. **reset.css 순서**: `@import "./reset.css"`를 `@import "tailwindcss"` 보다 먼저 선언해야 Tailwind 유틸리티가 우선 적용됨.

</details>

<details>
<summary><strong>접근성 (A11y)</strong></summary>

### 개요

스크린 리더 사용자와 키보드 사용자를 위한 접근성을 개선했습니다.

### 키보드 접근성

| 컴포넌트 | 추가된 속성 |
|----------|-------------|
| `Link` | `tabIndex={0}`, `role="link"`, `onKeyDown` (Enter/Space) |
| `PageBox` | `tabIndex={0}`, `role="button"`, `onKeyDown` (Enter/Space) |

### Focus 스타일

```css
button:focus-visible,
a:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--theme-text);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### ARIA 레이블

| 컴포넌트 | aria-label |
|----------|------------|
| `HomeButton` | "홈으로 이동" |
| `ScrollToTopButton` | "페이지 맨 위로 스크롤" |
| `PageBox` | "{title} 열기" |
| `Divider` | `role="separator"`, `aria-hidden="true"` |

### 테이블 접근성

`div`로 구현된 테이블에 ARIA role을 추가하여 스크린 리더가 테이블로 인식하도록 했습니다.

| 컴포넌트 | 추가된 속성 |
|----------|-------------|
| `Table` | `role="table"` |
| `TableRow` | `role="row"` |
| `TableCell` | `role="cell"` (본문), `role="columnheader"` (헤더) |

### 로딩 상태 알림

`Loading` 컴포넌트에 `role="status"`, `aria-live="polite"` 추가로 스크린 리더 지원.

</details>

<details>
<summary><strong>코드 품질 개선</strong></summary>

### 1. 스타일 상수화

`packages/components/src/styles/index.ts`에 반복되는 스타일 패턴을 상수로 정의했습니다.

```typescript
export const TEXT_SIZE = {
  sm: "text-[16px]",
  lg: "text-[20px]",
  xl: "text-[24px]",
  "2xl": "text-[30px]",
} as const;

export const GRID_LAYOUT = {
  responsive2Cols: "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",
} as const;
```

### 2. 날짜 형식 통일

프로젝트 전반에서 날짜 형식을 `YYYY.MM ~ YYYY.MM` 형식으로 통일했습니다.

| 변경 전 | 변경 후 |
|---------|---------|
| `2022.4 - 2024.4` | `2022.04 ~ 2024.04` |
| `2015.3 - 2022.2` | `2015.03 ~ 2022.02` |

### 3. 색상 CSS 변수화

하드코딩된 색상들을 CSS 변수로 변경하여 다크모드 지원 및 테마 일관성을 확보했습니다.

| 컴포넌트 | 변경 전 | 변경 후 |
|----------|---------|---------|
| `Divider` | `bg-black` | `bg-[var(--theme-divider)]` |
| `PageBox` | `bg-white` | `bg-[var(--theme-card-bg)]` |
| `TableRow` | `bg-[#cfcfcfc9]` | `bg-[var(--theme-header-bg)]` |

</details>

<details>
<summary><strong>SEO 및 소셜 미디어 메타데이터</strong></summary>

### 적용된 메타데이터

| 항목 | 설명 |
|------|------|
| `og:type` | 홈: `website` |
| `og:locale` | `ko_KR` |
| `og:site_name` | `김예찬's Portfolio` |
| `twitter:card` | `summary_large_image` |

### title 템플릿

```tsx
title: {
  default: "김예찬's Portfolio",
  template: "%s | 김예찬's Portfolio",
}
```

### Sitemap 동적 생성

`src/shared/data/projects.ts`의 프로젝트 데이터에서 동적으로 생성합니다.

```typescript
const projectPages = PROJECTS.map((project) => ({
  url: `${BASE_URL}/project/${project.id}`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
}));
```

### JSON-LD 구조화 데이터

| 페이지 | 스키마 타입 | 포함 정보 |
|--------|-------------|-----------|
| 홈페이지 | `Person` | 이름, 직업, 기술 스택, 소셜 링크 |
| 홈페이지 | `WebSite` | 사이트명, URL, 설명, 저자 |

관련 파일: `src/shared/lib/jsonLd.ts`

</details>

<details>
<summary><strong>성능 최적화</strong></summary>

### 폰트 최적화

`next/font/local`을 사용하여 커스텀 폰트(Paperlogy)를 셀프 호스팅합니다.

| 옵션 | 값 | 효과 |
|------|-----|------|
| `display` | `"swap"` | FOIT 방지 |
| `preload` | `true` | 렌더링 차단 최소화 |
| `fallback` | `["system-ui", "sans-serif"]` | 폰트 로드 실패 시 대체 |
| `variable` | `"--font-paperlogy"` | CSS 변수로 접근 |

관련 파일: `src/app/fonts/index.ts`

### 이미지 최적화

Portfolio의 모든 이미지는 **SVG(벡터)** 형식을 사용합니다. SVGR을 통해 React 컴포넌트로 변환하여 사용합니다.

```typescript
import { MainLogo, TwinnyLogo } from "@images";

<MainLogo width="100%" height="auto" />
```

관련 파일: `src/shared/assets/images/`, `next.config.ts`

</details>

<details>
<summary><strong>UI/UX 개선</strong></summary>

### 다크모드

Cookie 기반의 SSR 다크모드를 지원합니다. 우측 상단 토글 버튼으로 테마를 전환할 수 있습니다.

| 방식 | 깜빡임 |
|------|--------|
| localStorage + useEffect | O |
| localStorage + 인라인 스크립트 | X |
| **Cookie + SSR (현재)** | **X** |

```tsx
// layout.tsx (서버 컴포넌트)
const cookieStore = await cookies();
const theme = cookieStore.get("portfolio-theme")?.value === "dark" ? "dark" : "light";

<html className={theme === "dark" ? "dark" : ""}>
```

### 반응형 카드 레이아웃

| 화면 크기 | 동작 |
|-----------|------|
| 모바일 (~640px) | 1열 |
| 태블릿/데스크탑 (640px~) | 2열 |

### 로딩 스켈레톤

스피너 대신 레이아웃을 유지하는 스켈레톤 UI를 적용했습니다.

관련 파일: `src/app/loading.tsx`

### 에러 페이지

런타임 에러 발생 시 사용자 친화적인 에러 페이지를 표시합니다.

| 기능 | 설명 |
|------|------|
| 다시 시도 | `reset()` 함수로 컴포넌트 재렌더링 |
| 홈으로 이동 | 홈페이지로 리다이렉트 |
| 개발 모드 상세 정보 | 개발 환경에서만 에러 스택 표시 |

관련 파일: `src/app/error.tsx`, `src/app/not-found.tsx`

</details>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🌵 Folder Structure

```sh
portfolio
├── src
│   ├── app                         # Next.js App Router
│   ├── features
│   │   ├── ProjectFilter           # 프로젝트 타입 필터링
│   │   └── ProjectModal            # 프로젝트 상세 모달
│   ├── shared
│   │   ├── assets/images           # SVG 이미지
│   │   ├── data                    # 중앙화된 데이터 (projects, skills, experience 등)
│   │   ├── hooks                   # 공통 훅 (useScrollSpy)
│   │   ├── lib                     # 유틸리티 (jsonLd)
│   │   └── ui                      # 공통 UI 컴포넌트
│   └── widgets
│       ├── Hero
│       ├── ProjectSection
│       ├── AboutSection
│       ├── SkillSection
│       ├── SectionNav
│       └── ContactSection
├── Dockerfile
├── next.config.ts
├── package.json
└── tsconfig.json
```
