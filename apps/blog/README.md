# Monorepo - blog

<div align="center">

<a href='https://blog.k1my3ch4n.xyz/' target="_blank">
   <img src='https://img.shields.io/badge/monorepo-blog-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

Monorepo 의 Blog 패키지 입니다. 학습하고 경험한 것들을 남기는 블로그 입니다. 메인 페이지와 블로그 목록 페이지 , post 페이지로 이루어져 있습니다. 서버에서 게시글 데이터를 가져와 사용합니다.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🌙 다크모드

Blog는 다크모드를 지원합니다. `@repo/components` 패키지의 공용 테마 컴포넌트를 사용합니다.

### 사용된 공용 컴포넌트

| 컴포넌트 | 설명 |
|---------|------|
| `ThemeProvider` | 테마 상태 관리 및 Context 제공 |
| `ThemeToggle` | 다크/라이트 모드 토글 버튼 (우측 상단) |
| `ThemeContext` | Theme 타입 및 Context 정의 |
| `useTheme` | 테마 Context를 사용하는 커스텀 훅 |

### 테마 CSS 변수

`globals.css`에서 라이트/다크 모드별 CSS 변수를 정의합니다:

```css
/* Light Mode (Default) */
:root {
  --theme-bg: #ffffff;
  --theme-text: #000000;
  --theme-card-bg: #ffffff;
  --theme-card-title-bg: #000000;
  /* ... */
}

/* Dark Mode */
.dark {
  --theme-bg: #1a1a2e;
  --theme-text: #eaeaea;
  --theme-card-bg: #25253a;
  --theme-card-title-bg: #3d3d5c;
  /* ... */
}
```

### 테마 적용 방식

1. **서버 사이드**: `cookies()`를 통해 저장된 테마를 읽어 초기 렌더링
2. **클라이언트 사이드**: `ThemeProvider`가 테마 상태 관리 및 토글 기능 제공
3. **쿠키 저장**: 테마 변경 시 `blog-theme` 쿠키에 저장하여 새로고침 후에도 유지

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 📦 공용 컴포넌트 (from @repo/components)

Portfolio와 동일한 UI 컴포넌트를 사용하여 일관된 디자인을 유지합니다.

| 컴포넌트 | 사용처 |
|---------|--------|
| `PageBox` | Projects, Blog, Extra 섹션의 카드 |
| `GRID_LAYOUT.responsive2Cols` | 2열 반응형 그리드 레이아웃 |
| `Title`, `Divider` | 섹션 헤더 |
| `Layout` | 전체 페이지 레이아웃 (max-width: 920px) |

### Tailwind CSS 설정

`globals.css`에서 `@repo/components`의 클래스를 감지하도록 설정:

```css
@source "../../../../packages/components/src/**/*.tsx";
@source "../../../../packages/components/src/**/*.ts";
```

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
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)

## 🌵 Folder Structure

```sh
blog
├── src
│   ├── apis
│   ├── app
│   ├── assets
│   ├── client
│   ├── components
│   ├── constants
│   ├── fixtures
│   ├── graphql
│   ├── hooks
│   ├── posts
│   ├── prefetcher
│   ├── utils
│   └── svgr.d.ts
├── Dockerfile
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── postcss.config.cjs
├── tailwind.config.js
├── package.json
├── tsconfig.json
└── README.md
```
