# Monorepo - blog

<div align="center">

<a href='https://blog.k1my3ch4n.xyz/' target="_blank">
   <img src='https://img.shields.io/badge/monorepo-blog-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

Monorepo 의 Blog 패키지 입니다. 학습하고 경험한 것들을 남기는 블로그 입니다. 메인 페이지와 블로그 목록 페이지, post 페이지로 이루어져 있습니다. 서버에서 PostgreSQL 데이터베이스에 직접 접근하여 게시글 데이터를 가져옵니다.

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
- [PostgreSQL](https://www.postgresql.org/)

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🚀 업데이트 내역

<details open>
<summary><strong>FSD 아키텍처 도입 및 직접 DB 조회</strong></summary>

### 변경 사항 개요

GraphQL / Apollo 스택을 완전히 제거하고, FSD(Feature Sliced Design) 아키텍처를 도입했습니다. 데이터 페칭은 PostgreSQL에 직접 쿼리하는 방식으로 전환했습니다.

### 주요 변경 내용

#### 1. GraphQL / Apollo 제거

| 제거 항목 | 내용 |
|-----------|------|
| `src/app/api/graphql` | Apollo Server API Route 삭제 |
| Apollo Client | `src/client/` 폴더 삭제 |
| GraphQL 스키마 / 리졸버 | `src/lib/graphql/` 폴더 삭제 |
| `src/graphql` | GQL 쿼리 파일 삭제 |

#### 2. PostgreSQL 직접 쿼리 전환

`src/shared/lib/db.ts`에서 `unstable_cache`를 활용한 캐시 레이어와 함께 직접 쿼리합니다.

```typescript
export const getPosts = unstable_cache(
  async (tag: string, orderBy: string = "DESC"): Promise<PostRow[]> => {
    const { rows } = await pool.query(`SELECT * FROM posts ORDER BY id ${order}`, params);
    return rows;
  },
  ["get-posts"],
  { tags: ["posts"] },
);
```

#### 3. FSD 구조 도입

| 레이어 | 경로 | 역할 |
|--------|------|------|
| entities | `src/entities/post`, `src/entities/project` | 도메인 엔티티 및 유틸리티 |
| features | `src/features/post-list`, `src/features/tag-filter` | 기능 단위 모듈 |
| shared | `src/shared/api`, `src/shared/lib`, `src/shared/ui` 등 | 공통 재사용 모듈 |
| widgets | `src/widgets/home-*`, `src/widgets/maintenance` | 페이지 섹션 컴포넌트 |

#### 4. 데이터 페칭 함수

`src/shared/api/`에 서버 사이드 데이터 페칭 함수를 분리했습니다.

| 함수 | 역할 |
|------|------|
| `getHomeData` | 홈 페이지용 게시글 목록 조회 |
| `getBlogData` | 블로그 목록 페이지용 게시글 + 태그 조회 |
| `getPostData` | 개별 포스트 데이터 조회 |

</details>

<details>
<summary><strong>On-demand ISR 적용</strong></summary>

### 변경 사항 개요

`revalidate = 60` 방식에서 `revalidate = false` + 온디맨드 재검증으로 전환하여 불필요한 재빌드를 제거하고, 게시글 추가 시에만 캐시를 갱신하도록 개선했습니다.

### 캐싱 전략

| 페이지 | 변경 전 | 변경 후 |
|--------|---------|---------|
| 홈 / 블로그 목록 | `revalidate = 60` | `revalidate = false` |
| 개별 포스트 | `revalidate = 60` | `revalidate = 3600` |
| 캐시 갱신 방식 | 60초마다 자동 갱신 | `/api/revalidate` 호출 시 갱신 |

### On-demand Revalidation 엔드포인트

- **위치**: `src/app/api/revalidate/route.ts`
- `VALIDATED_API_KEY` 헤더 인증 후 `revalidatePath("/", "layout")` 호출
- 새 게시글 추가 시 이 엔드포인트를 호출하여 전체 캐시 갱신

```typescript
export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.VALIDATED_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  revalidatePath("/", "layout");
  return NextResponse.json({ revalidated: true });
}
```

</details>

<details>
<summary><strong>Tailwind CSS v4 마이그레이션</strong></summary>

### 주요 변경사항

| 항목 | 변경 전 | 변경 후 |
|------|---------|---------|
| Tailwind 버전 | v3.x | v4.x |
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

/* 5. 커스텀 유틸리티 */
@utility bg-highlight-background {
  background-color: var(--theme-highlight-bg);
}
```

### 주의사항

1. **@source 경로**: 모노레포에서 외부 패키지의 Tailwind 클래스를 사용하려면 `@source`로 경로 지정 필요
2. **@utility vs 일반 CSS**: 커스텀 유틸리티는 `@utility` 지시문으로 정의해야 Tailwind 시스템과 통합됨
3. **reset.css 순서**: `@import "./reset.css"`를 `@import "tailwindcss"` 보다 먼저 선언해야 Tailwind 유틸리티가 우선 적용됨

</details>

<details>
<summary><strong>다크모드</strong></summary>

### 개요

Blog는 다크모드를 지원합니다. `@repo/components` 패키지의 공용 테마 컴포넌트를 사용합니다.

### 사용된 공용 컴포넌트

| 컴포넌트 | 설명 |
|---------|------|
| ThemeProvider | 테마 상태 관리 및 Context 제공 |
| ThemeToggle | 다크/라이트 모드 토글 버튼 (우측 상단) |
| ThemeContext | Theme 타입 및 Context 정의 |
| useTheme | 테마 Context를 사용하는 커스텀 훅 |

### 테마 적용 방식

1. **서버 사이드**: `cookies()`를 통해 저장된 테마를 읽어 초기 렌더링
2. **클라이언트 사이드**: ThemeProvider가 테마 상태 관리 및 토글 기능 제공
3. **쿠키 저장**: 테마 변경 시 `blog-theme` 쿠키에 저장하여 새로고침 후에도 유지

</details>

<details>
<summary><strong>SEO 설정</strong></summary>

### SEO 상수 (src/shared/config)

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

| 페이지 | 내용 |
|--------|------|
| 루트 레이아웃 | metadataBase, title template, OpenGraph, Twitter Cards, robots |
| 블로그 목록 | title: 게시글 목록, OpenGraph type: website, canonical URL |
| 개별 포스트 | 동적 메타데이터 (generateMetadata), OpenGraph type: article, 포스트 태그 포함 |

### SEO 체크리스트

| 항목 | 상태 |
|------|------|
| Meta Title | ✅ |
| Meta Description | ✅ |
| Open Graph | ✅ |
| Twitter Cards | ✅ |
| Canonical URL | ✅ |
| Sitemap | ✅ |
| Robots.txt | ✅ |
| JSON-LD | ✅ |

</details>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## ⚙️ 환경 설정

### 필수 환경변수

| 변수명 | 설명 |
|--------|------|
| DB_USER | PostgreSQL 사용자명 |
| DB_HOST | PostgreSQL 호스트 (GCP Cloud SQL) |
| DB_NAME | 데이터베이스명 |
| DB_PASSWORD | PostgreSQL 비밀번호 |
| DB_PORT | PostgreSQL 포트 (기본: 5432) |
| VALIDATED_API_KEY | On-demand ISR 인증 키 |

### 요구사항

- 노드 버전: >= 20.0.0
- PNPM 버전: 9.0.0

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🌵 Folder Structure

| 폴더 | 설명 |
|------|------|
| src/app | Next.js App Router |
| src/app/api/revalidate | On-demand ISR 엔드포인트 |
| src/app/blog | 블로그 페이지 |
| src/entities | 도메인 엔티티 (post, project) |
| src/features | 기능 모듈 (post-list, tag-filter) |
| src/shared/api | 서버 사이드 데이터 페칭 함수 |
| src/shared/lib | DB 연결 및 유틸리티 |
| src/shared/ui | 공통 UI 컴포넌트 |
| src/shared/types | 타입 정의 |
| src/shared/config | SEO 등 설정 상수 |
| src/widgets | 페이지 섹션 컴포넌트 |
| src/posts | MDX 게시글 파일 |
| src/proxy.ts | Next.js Proxy (라우팅 제어) |
