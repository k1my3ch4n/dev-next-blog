# Monorepo - blog

<div align="center">

<a href='https://blog.k1my3ch4n.xyz/' target="_blank">
   <img src='https://img.shields.io/badge/monorepo-blog-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

Monorepo 의 Blog 패키지 입니다. 학습하고 경험한 것들을 남기는 블로그 입니다. 메인 페이지와 블로그 목록 페이지 , post 페이지로 이루어져 있습니다. 서버에서 게시글 데이터를 가져와 사용합니다.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🔧 아키텍처 변경사항

### Apollo Client - SchemaLink 적용

서버 사이드 렌더링 시 불필요한 HTTP 요청을 제거하고, GCP PostgreSQL에 직접 접근하도록 개선했습니다.

#### 변경 전 (HTTP 요청 방식)

- 서버가 자기 자신에게 HTTP 요청을 보내는 비효율적인 구조
- 배포 환경에서 PORT 불일치로 인한 연결 오류 발생 가능

#### 변경 후 (SchemaLink 방식)

- 서버 사이드: SchemaLink를 통해 GraphQL 스키마를 직접 실행
- 클라이언트 사이드: 기존과 동일하게 /api/graphql API 라우트 사용
- 네트워크 오버헤드 제거로 SSR 성능 향상

#### 코드 구조 (src/client/client.ts)

서버 사이드에서는 SchemaLink로 직접 실행하고, 클라이언트 사이드에서는 HttpLink로 API 라우트를 호출합니다.

### Middleware 라우팅 수정

블로그 경로(/blog, /blog/[postKey])에 대한 접근을 허용하도록 middleware를 수정했습니다.

#### 허용 경로

| 경로 | 설명 |
|------|------|
| / | 메인 페이지 |
| /blog | 블로그 목록 페이지 |
| /blog/* | 개별 포스트 페이지 |
| /api/* | API 라우트 |
| /_next/* | Next.js 정적 파일 |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🔍 SEO 설정

### SEO 상수 (src/constants/seo.ts)

모든 SEO 관련 값을 중앙에서 관리합니다.

| 속성 | 값 |
|------|------|
| siteName | 김예찬's Blog |
| siteUrl | https://blog.k1my3ch4n.xyz |
| description | 프론트엔드 개발자 김예찬의 기술 블로그입니다. |
| author | 김예찬 |
| locale | ko_KR |
| twitterHandle | @k1my3ch4n |

### 페이지별 메타데이터

#### 루트 레이아웃 (src/app/layout.tsx)

- metadataBase 설정
- title template: 하위 페이지명 | 김예찬's Blog
- OpenGraph, Twitter Cards 설정
- robots: index, follow

#### 블로그 목록 페이지 (src/app/blog/layout.tsx)

- title: 게시글 목록
- OpenGraph type: website
- canonical URL 설정

#### 개별 포스트 페이지 (src/app/blog/[postKey]/layout.tsx)

- 동적 메타데이터 생성 (generateMetadata)
- OpenGraph type: article
- 포스트 태그 포함
- canonical URL 설정

### Sitemap (src/app/sitemap.ts)

동적으로 모든 포스트를 포함한 sitemap을 생성합니다.

| URL | Priority |
|-----|----------|
| / (홈) | 1.0 |
| /blog (목록) | 0.8 |
| /blog/[postKey] | 0.7 |

### Robots (src/app/robots.ts)

- userAgent: * (모든 크롤러 허용)
- allow: /
- sitemap: https://blog.k1my3ch4n.xyz/sitemap.xml

### SEO 체크리스트

| 항목 | 상태 | 설명 |
|------|------|------|
| Meta Title | ✅ | 페이지별 동적 타이틀 |
| Meta Description | ✅ | 페이지별 설명 |
| Open Graph | ✅ | Facebook/LinkedIn 공유 최적화 |
| Twitter Cards | ✅ | Twitter 공유 최적화 |
| Canonical URL | ✅ | 중복 콘텐츠 방지 |
| Sitemap | ✅ | 동적 sitemap 생성 |
| Robots.txt | ✅ | 크롤러 접근 허용 |
| JSON-LD | ✅ | 구조화된 데이터 (별도 설정) |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🌙 다크모드

Blog는 다크모드를 지원합니다. @repo/components 패키지의 공용 테마 컴포넌트를 사용합니다.

### 사용된 공용 컴포넌트

| 컴포넌트 | 설명 |
|---------|------|
| ThemeProvider | 테마 상태 관리 및 Context 제공 |
| ThemeToggle | 다크/라이트 모드 토글 버튼 (우측 상단) |
| ThemeContext | Theme 타입 및 Context 정의 |
| useTheme | 테마 Context를 사용하는 커스텀 훅 |

### 테마 적용 방식

1. **서버 사이드**: cookies()를 통해 저장된 테마를 읽어 초기 렌더링
2. **클라이언트 사이드**: ThemeProvider가 테마 상태 관리 및 토글 기능 제공
3. **쿠키 저장**: 테마 변경 시 blog-theme 쿠키에 저장하여 새로고침 후에도 유지

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 📦 공용 컴포넌트 (from @repo/components)

Portfolio와 동일한 UI 컴포넌트를 사용하여 일관된 디자인을 유지합니다.

| 컴포넌트 | 사용처 |
|---------|--------|
| PageBox | Projects, Blog, Extra 섹션의 카드 |
| GRID_LAYOUT.responsive2Cols | 2열 반응형 그리드 레이아웃 |
| Title, Divider | 섹션 헤더 |
| Layout | 전체 페이지 레이아웃 (max-width: 920px) |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## ⚙️ 환경 설정

### 필수 환경변수

| 변수명 | 설명 |
|--------|------|
| DB_USER | PostgreSQL 사용자명 |
| DB_HOST | PostgreSQL 호스트 (GCP) |
| DB_NAME | 데이터베이스명 |
| DB_PASSWORD | PostgreSQL 비밀번호 |
| DB_PORT | PostgreSQL 포트 (기본: 5432) |
| VALIDATED_API_KEY | 서버 사이드 API 키 |
| NEXT_PUBLIC_VALIDATED_API_KEY | 클라이언트 사이드 API 키 |

### 요구사항

- 노드 버전: >= 20.0.0
- PNPM 버전: 9.0.0

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🎨 Tailwind CSS v4 마이그레이션

Tailwind CSS v4로 업그레이드하면서 다음 사항들이 변경되었습니다.

### 주요 변경사항

| 항목 | 변경 전 | 변경 후 |
|------|---------|---------|
| Tailwind 버전 | v3.x | v4.1.8 |
| 설정 파일 | tailwind.config.js | CSS 기반 설정 (@theme, @source) |
| PostCSS 플러그인 | tailwindcss | @tailwindcss/postcss |
| 커스텀 유틸리티 | @layer utilities | @utility |

### CSS 설정 구조 (globals.css)

```css
/* 1. Reset을 먼저 import (Tailwind보다 낮은 우선순위) */
@import "./reset.css";
@import "tailwindcss";

/* 2. 외부 패키지 클래스 스캔 */
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

1. **@source 경로**: 모노레포에서 외부 패키지의 Tailwind 클래스를 사용하려면 `@source`로 경로 지정 필요
2. **@utility vs 일반 CSS**: 커스텀 유틸리티는 `@utility` 지시문으로 정의해야 Tailwind 시스템과 통합됨
3. **reset.css 순서**: `@import "./reset.css"`를 `@import "tailwindcss"` 보다 먼저 선언해야 Tailwind 유틸리티가 우선 적용됨
4. **CSS 변수**: `var(--theme-*)` 형태로 테마 변수 사용, `bg-[var(--theme-bg)]` 형식으로 Tailwind와 함께 사용

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

| 폴더 | 설명 |
|------|------|
| src/apis | React Query 훅 |
| src/app | Next.js App Router |
| src/app/api | GraphQL API 라우트 |
| src/app/blog | 블로그 페이지 |
| src/client | Apollo Client 설정 |
| src/components | 공용 컴포넌트 |
| src/constants | 상수 (SEO 등) |
| src/fixtures | 타입 정의 |
| src/graphql | GraphQL 쿼리 |
| src/hooks | 커스텀 훅 |
| src/lib | DB, GraphQL 스키마 |
| src/posts | MDX 포스트 파일 |
| src/prefetcher | 서버 사이드 데이터 프리페칭 |
