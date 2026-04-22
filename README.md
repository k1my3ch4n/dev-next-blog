# Monorepo 로 블로그 , 포트폴리오 구현 프로젝트 ( Next )

<div align="center">

<a href='https://blog.k1my3ch4n.xyz/' target="_blank">
   <img src='https://img.shields.io/badge/blog-site-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>
<a href='https://github.com/k1my3ch4n/dev-next-blog/blob/main/apps/blog/README.md' target="_blank">
   <img src='https://img.shields.io/badge/blog-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
</a>

<br>

<a href='https://portfolio.k1my3ch4n.xyz/' target="_blank">
   <img src='https://img.shields.io/badge/portfolio-site-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>
<a href='https://github.com/k1my3ch4n/dev-next-blog/blob/main/apps/portfolio/README.md' target="_blank">
   <img src='https://img.shields.io/badge/portfolio-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
</a>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

</div>

- Monorepo 를 사용해서 블로그와 포트폴리오 페이지를 구현한 프로젝트입니다.
- Vite 와 yarn workspace 를 사용했던 프로젝트를 Next 와 Turborepo 를 사용해 마이그레이션 진행했습니다.
- css 도구로 tailwindcss 를 사용했습니다.
- Docker 와 Google Cloud Platform 을 사용해 페이지 배포 진행했습니다.

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
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [PostgreSQL](https://www.postgresql.org/)

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🚀 업데이트 내역

<details open>
<summary><strong>On-demand ISR 적용</strong></summary>

### 변경 사항 개요

`revalidate = 60` 방식에서 `revalidate = false` + 온디맨드 재검증으로 전환하여 불필요한 재빌드를 제거하고, 게시글 추가 시에만 캐시를 갱신하도록 개선했습니다.

### 주요 변경 내용

#### 캐싱 전략 변경

| 구분 | 변경 전 | 변경 후 |
|------|---------|---------|
| 홈 / 블로그 목록 페이지 | `revalidate = 60` | `revalidate = false` |
| 개별 포스트 페이지 | `revalidate = 60` | `revalidate = 3600` |
| 캐시 갱신 방식 | 60초마다 자동 갱신 | `/api/revalidate` 호출 시 갱신 |

#### On-demand Revalidation 엔드포인트

- **위치**: `apps/blog/src/app/api/revalidate/route.ts`
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
<summary><strong>코드 품질 개선</strong></summary>

### 변경 사항 개요

Blog, Portfolio, Components 전반에 걸쳐 타입 안전성, 에러 처리, 성능, 반응형 지원을 개선했습니다.

### 주요 변경 내용

#### 1. Blog - 정렬 로직 버그 수정

- **위치**: `apps/blog/src/app/blog/_components/PostList/PostList.tsx`
- 기존 `reverse()` 사용 → `sort()` 기반 정렬로 변경

```typescript
// 기존 (부정확)
if (orderBy === "ASC") {
  result = result.reverse();
}

// 변경 (정확)
result.sort((a, b) =>
  orderBy === "DESC" ? b.id - a.id : a.id - b.id
);
```

#### 2. Blog - 404 처리 개선

- **위치**: `apps/blog/src/app/blog/[postKey]/page.tsx`
- 커스텀 div 대신 Next.js `notFound()` 사용

```typescript
// 기존
if (error) {
  return <div>게시글을 찾을 수 없습니다.</div>;
}

// 변경
if (error) {
  notFound();
}
```

#### 3. Blog - MdxWrapper 타입 안전성 강화

- **위치**: `apps/blog/src/components/MdxWrapper/MdxWrapper.tsx`
- `any` 타입 제거 → `MDXRemoteSerializeResult` 명시적 타입 적용

#### 4. Blog - MdxComponents 메모이제이션

- **위치**: `apps/blog/src/components/MdxComponents/MdxComponents.tsx`
- 함수 반환 → 상수 객체로 변경하여 매 렌더링마다 새 객체 생성 방지

#### 5. Portfolio - 날짜 파싱 유효성 검사

- **위치**: `apps/portfolio/src/lib/jsonLd.ts`
- `parsePeriodDate()` 함수 추가로 잘못된 날짜 형식 방어 처리

#### 6. Portfolio - PROJECT_CONTENTS 타입 동기화

- **위치**: `apps/portfolio/src/app/project/_contents/index.ts`
- `PROJECT_DETAILS` 키와 `PROJECT_CONTENTS` 키 타입 연동으로 누락 시 컴파일 에러 감지

#### 7. Components - Layout 반응형 지원

- **위치**: `packages/components/src/Layout.tsx`
- `min-w-[800px]` 제거로 모바일 가로 스크롤 문제 해결

#### 8. Components - ErrorBoundary 추가

- **위치**: `packages/components/src/ErrorBoundary.tsx`
- 컴포넌트 트리 에러 경계 처리, 재시도 버튼 및 커스텀 fallback UI 지원

### 변경 파일 요약

| 영역 | 파일 | 변경 내용 |
|------|------|-----------|
| Blog | `PostList.tsx` | 정렬 로직 수정 |
| Blog | `[postKey]/page.tsx` | notFound() 적용 |
| Blog | `MdxWrapper.tsx` | 타입 안전성 강화 |
| Blog | `MdxComponents.tsx` | 메모이제이션 |
| Portfolio | `jsonLd.ts` | 날짜 파싱 검증 |
| Portfolio | `_contents/index.ts` | 타입 동기화 |
| Components | `Layout.tsx` | 반응형 지원 |
| Components | `ErrorBoundary.tsx` | 신규 추가 |

</details>

<details>
<summary><strong>Server Component 아키텍처 마이그레이션</strong></summary>

### 변경 사항 개요

기존 Prefetch + Client Component 패턴에서 Server Component 패턴으로 데이터 페칭 아키텍처를 전면 개선했습니다.

### 주요 변경 내용

#### 1. 데이터 페칭 패턴 변경

**기존 방식 (Prefetch + useQuery)**
```
Server: prefetchHomeData() → QueryClient에 캐시
Client: useQuery() → 캐시에서 데이터 조회 (중복 요청 가능)
```

**변경된 방식 (Server Component + Props)**
```
Server: getHomeData() → 데이터 조회
Server Component: props로 데이터 전달 → 클라이언트에서 추가 요청 없음
```

#### 2. 폴더 구조 변경

- `prefetcher/` → `data/` 폴더로 이름 변경
- `prefetchHomeData` → `getHomeData`
- `prefetchBlogData` → `getBlogData`
- `prefetchPostData` → `getPostData`
- 사용하지 않는 `apis/` 폴더 및 hooks 삭제

#### 3. 에러 핸들링 개선

모든 데이터 페칭 함수에 try-catch 적용:

```typescript
const getHomeData = async () => {
  try {
    const { data } = await getClient().query<PostsResponseData>({
      query: GET_POSTS,
      variables: { tag: "", orderBy: "DESC" },
    });
    return { data, error: null };
  } catch (error) {
    console.error("getHomeData error:", error);
    return { data: { posts: [] } as PostsResponseData, error };
  }
};
```

#### 4. DB 연결 타임아웃 설정

```typescript
const pool = new Pool({
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
  max: 10,
});
```

#### 5. Cloud SQL 연결 (배포 환경)

```sh
# 로컬 환경
DB_HOST=localhost

# Cloud Run 환경
DB_HOST=/cloudsql/PROJECT_ID:REGION:INSTANCE_NAME
```

#### 6. 로딩 UI 개선

FadeLoader에서 Skeleton UI로 변경하여 레이아웃 시프트 최소화

</details>

<details>
<summary><strong>GraphQL 서버 통합 (monorepo-server)</strong></summary>

### 변경 사항 개요

기존에 별도의 서버 프로젝트([dev-blog-server](https://github.com/k1my3ch4n/dev-blog-server))에서 운영하던 GraphQL API를 Next.js 애플리케이션 내부로 통합했습니다.

### 주요 변경 내용

#### 1. Next.js API Route로 GraphQL 서버 이전

- **위치**: `apps/blog/src/app/api/graphql/route.ts`
- Apollo Server를 Next.js App Router의 API Route에 통합
- GET/POST 요청 모두 지원
- API Key 기반 인증 구현

#### 2. PostgreSQL 데이터베이스 연결 설정

- **위치**: `apps/blog/src/lib/db.ts`
- node-postgres(pg) 라이브러리를 사용한 Connection Pool 관리
- 환경변수를 통한 데이터베이스 설정

#### 3. GraphQL 스키마 정의

- **위치**: `apps/blog/src/lib/graphql/schema.ts`
- **Query**: `posts`, `post`, `allTags`
- **Mutation**: `addPost`, `deletePost`

#### 4. GitHub Actions 배포 파이프라인 수정

- 데이터베이스 환경변수 추가 (`DB_USER`, `DB_HOST`, `DB_NAME`, `DB_PASSWORD`, `DB_PORT`)
- Cloud Run 배포 시 환경변수 자동 설정

### 기술 선택 이유

<details>
<summary>Next.js API Route를 선택한 이유</summary>

| 비교 항목 | 별도 서버 (기존) | Next.js API Route (선택) |
|-----------|------------------|--------------------------|
| **인프라 비용** | 서버 2개 운영 필요 | 단일 서버로 통합 |
| **배포 복잡도** | 2개의 CI/CD 파이프라인 관리 | 1개의 파이프라인으로 단순화 |
| **Cold Start** | 서버 간 네트워크 지연 발생 | 동일 프로세스 내 호출로 지연 최소화 |
| **코드 공유** | 별도 패키지 또는 복사 필요 | 동일 프로젝트 내 직접 import |

</details>

<details>
<summary>PostgreSQL을 선택한 이유</summary>

| 비교 항목 | SQLite | MongoDB | PostgreSQL (선택) |
|-----------|--------|---------|-------------------|
| **배열 타입** | 미지원 | 문서 기반 | 네이티브 지원 (`TEXT[]`) |
| **GCP 지원** | Cloud Storage 필요 | Atlas 또는 자체 운영 | Cloud SQL 완벽 지원 |

- 태그 시스템에서 배열 타입(`TEXT[]`)이 필요하여 PostgreSQL 선택
- GCP Cloud SQL과의 완벽한 통합

</details>

</details>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🔧 환경변수 설정

```sh
# 데이터베이스 설정
DB_USER=your_db_user
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432

# API 인증
VALIDATED_API_KEY=your_api_key
```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🌵 Folder Structure

```sh
monorepo
├── apps
│   ├── blog
│   │   └── src
│   │       ├── app
│   │       │   ├── api
│   │       │   │   ├── graphql         # GraphQL API Route (Apollo Server)
│   │       │   │   └── revalidate      # On-demand ISR 엔드포인트
│   │       │   └── blog                # 블로그 페이지
│   │       ├── entities                # 도메인 엔티티 (post, project)
│   │       ├── features                # 기능 모듈 (post-list, tag-filter)
│   │       ├── shared                  # 공통 모듈 (api, assets, config, lib, types, ui)
│   │       ├── posts                   # MDX 게시글 파일
│   │       └── proxy.ts                # Next.js Proxy (라우팅 제어)
│   └── portfolio
│       └── src
│           ├── app                     # Next.js App Router
│           ├── features                # 기능 모듈 (ProjectFilter, ProjectModal)
│           ├── shared                  # 공통 모듈 (assets, data, hooks, lib, ui)
│           └── widgets                 # 페이지 섹션 (Hero, ProjectSection, AboutSection 등)
└── packages
    ├── components                      # 공통 UI 컴포넌트 (@repo/components)
    └── hooks                           # 공통 훅
```
