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

<br>

<br>

<a href='https://server-384003056882.asia-northeast1.run.app/graphql' target="_blank">
   <img src='https://img.shields.io/badge/server-site-skyblue?style=for-the-badge&labelColor=4C566A'>
</a>
<a href='https://github.com/k1my3ch4n/dev-blog-server/blob/main/README.md' target="_blank">
    <img src='https://img.shields.io/badge/server-readme-633DE5?style=for-the-badge&labelColor=4C566A'>
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

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" alt="rainbow" />

## 🌵 Folder Structure

```sh
monorepo
│   apps
│   ├── blog
│   │   ├── src
│   │   │   ├── apis
│   │   │   ├── app
│   │   │   ├── assets
│   │   │   ├── client
│   │   │   ├── components
│   │   │   ├── constants
│   │   │   ├── fixtures
│   │   │   ├── graphql
│   │   │   ├── hooks
│   │   │   ├── posts
│   │   │   ├── prefetcher
│   │   │   ├── utils
│   │   │   └── svgr.d.ts
│   └── portfolio
│   │   ├── src
│   │   │   ├── app
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   └── svgr.d.ts
└── packages
    ├── components
    │   └── src
    └── hooks
        └── src
```
