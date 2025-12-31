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

## 🚀 최근 업데이트 : GraphQL 서버 통합 (monorepo-server)

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
- **Query**
  - `posts`: 태그 필터링 및 정렬 지원하는 게시글 목록 조회
  - `post`: postKey로 특정 게시글 조회
  - `allTags`: 모든 태그 목록 조회
- **Mutation**
  - `addPost`: 새 게시글 추가
  - `deletePost`: 게시글 삭제

#### 4. Apollo Client 설정 업데이트

- **서버 사이드**: 환경변수(`GRAPHQL_URL`) 또는 절대 URL 사용
- **클라이언트 사이드**: 상대 URL(`/api/graphql`) 사용
- API Key 헤더 자동 첨부

#### 5. GitHub Actions 배포 파이프라인 수정

- 데이터베이스 환경변수 추가 (`DB_USER`, `DB_HOST`, `DB_NAME`, `DB_PASSWORD`, `DB_PORT`)
- Cloud Run 배포 시 환경변수 자동 설정

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🤔 기술 선택 이유

### Next.js API Route를 선택한 이유

| 비교 항목 | 별도 서버 (기존) | Next.js API Route (선택) |
|-----------|------------------|--------------------------|
| **인프라 비용** | 서버 2개 운영 필요 | 단일 서버로 통합 |
| **배포 복잡도** | 2개의 CI/CD 파이프라인 관리 | 1개의 파이프라인으로 단순화 |
| **Cold Start** | 서버 간 네트워크 지연 발생 | 동일 프로세스 내 호출로 지연 최소화 |
| **코드 공유** | 별도 패키지 또는 복사 필요 | 동일 프로젝트 내 직접 import |
| **환경변수 관리** | 2곳에서 관리 | 1곳에서 통합 관리 |

**선택 이유**:
- 블로그 규모의 트래픽에서는 별도 서버가 오버 엔지니어링
- Vercel/Cloud Run 등에서 서버리스로 배포 시 비용 효율적
- 개발 환경에서 단일 `pnpm dev`로 전체 스택 실행 가능

### Apollo Server를 선택한 이유

| 비교 항목 | graphql-yoga | Apollo Server (선택) |
|-----------|--------------|----------------------|
| **생태계** | 상대적으로 작음 | 가장 큰 커뮤니티와 문서 |
| **클라이언트 통합** | 별도 설정 필요 | Apollo Client와 자연스러운 통합 |
| **타입 안전성** | 기본 제공 | codegen 등 풍부한 도구 지원 |
| **성능** | 경량 | 약간 무거움 (블로그 규모에서는 무관) |

**선택 이유**:
- 이미 Apollo Client를 사용 중이므로 일관된 스택 유지
- 풍부한 문서와 예제로 빠른 개발 가능
- `@as-integrations/next` 패키지로 Next.js App Router와 간편한 통합

### PostgreSQL을 선택한 이유

| 비교 항목 | SQLite | MongoDB | PostgreSQL (선택) |
|-----------|--------|---------|-------------------|
| **배열 타입** | 미지원 | 문서 기반 | 네이티브 지원 (`TEXT[]`) |
| **확장성** | 제한적 | 높음 | 높음 |
| **SQL 표준** | 부분 지원 | NoSQL | 완벽 지원 |
| **GCP 지원** | Cloud Storage 필요 | Atlas 또는 자체 운영 | Cloud SQL 완벽 지원 |

**선택 이유**:
- 태그 시스템에서 배열 타입(`TEXT[]`)이 필요하여 네이티브 지원하는 PostgreSQL 선택
- GCP Cloud SQL과의 완벽한 통합
- 추후 복잡한 쿼리(전문 검색 등) 확장에 유리

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

# GraphQL URL (서버 사이드 렌더링용)
GRAPHQL_URL=https://your-domain.com/api/graphql
```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🌵 Folder Structure

```sh
monorepo
│   apps
│   ├── blog
│   │   ├── src
│   │   │   ├── apis
│   │   │   ├── app
│   │   │   │   └── api
│   │   │   │       └── graphql        # GraphQL API Route (Apollo Server)
│   │   │   ├── assets
│   │   │   ├── client                 # Apollo Client 설정
│   │   │   ├── components
│   │   │   ├── constants
│   │   │   ├── fixtures
│   │   │   ├── graphql
│   │   │   ├── hooks
│   │   │   ├── lib
│   │   │   │   ├── db.ts              # PostgreSQL 연결 설정
│   │   │   │   └── graphql
│   │   │   │       └── schema.ts      # GraphQL 스키마 및 리졸버
│   │   │   ├── posts
│   │   │   ├── prefetcher
│   │   │   ├── utils
│   │   │   └── svgr.d.ts
│   └── portfolio
│   │   ├── src
│   │   │   ├── app
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   └── svgr.d.ts
└── packages
    ├── components
    │   └── src
    └── hooks
        └── src
```
