## 개요

Vite Monorepo 에서 Next + Turborepo 를 적용하게 되면서 추가하거나 삭제된 부분, 변경한 부분을 적어보고자 한다.

## Monorepo 구성

기존 Vite 를 사용할 때는 Blog, Portfolio 패키지와 core 공용 패키지로 나누어져 있었는데, NextJS 로 마이그레이션 하면서 Blog, Portfolio 의 apps 와 components, hooks 의 공용 패키지로 달라지게 되었습니다.

```sh
// 변경 전
packages
├── core
├── blog
└── portfolio

// 변경 후
monorepo
│   apps
│   ├── blog
│   └── portfolio
└── packages
    ├── components
    └── hooks
```

또한 기존에 `yarn workspaces` 를 사용했다면 이번에는 `pnpm` 과 `Turborepo` 를 사용해서 monorepo 를 구현했습니다.

### pnpm + Turborepo

`pnpm` 과 `Turborepo` 를 사용하게 된 이유는 아주 간단하고 자연스러웠는데, NextJS 를 사용하게 되면서 같은 회사에서 개발하는 Turborepo 가 추천되어서 채택하게 되었습니다. 또한 Turborepo 공식문서에서도 자연스럽게 pnpm 을 추천하고 있어서 채택하게 되었습니다.

기존 Vite Monorepo 를 사용할 때는 각각 개별적인 패키지들을 yarn workspaces 로 단순히 묶어놓은 느낌을 받았습니다. 물론 core 를 가져와서 사용하는 등의 장점은 많이 있었지만, 다른 패키지 두개를 한 레포 안에 넣어두고, yarn workspaces 의 명령어 등을 사용해 접근하지만 각각 빌드/실행하게 되어서 나누어져 있다는 느낌을 받았습니다.

변경된 Turborepo 를 사용하게 되면서 보다 Monorepo 라는 의미에 가까워졌다는 생각을 많이 하게 되었습니다. 패키지가 분리되어있고, 공용 패키지를 가져와서 사용하는 것은 동일하지만 병렬 작업이 실행되는 부분이 인상적이었습니다. 예를 들면 빌드를 실행할 때, 기존에는 각각 하나씩 선택해서 진행해야 했지만 Turborepo 는 한 번에 모든 패키지 빌드 실행이 가능해서 빌드 시간이 많이 줄어들었습니다.

또한 기존 yarn berry pnp 를 사용했을 때는 의존성에서 여러 어려움을 겪었는데, pnpm 의 경우 monorepo 를 강력하게 지원하다보니 해당 부분을 효율적으로 처리해주어 큰 어려움이 없었습니다.

## Router 과 Layout

기존 Vite를 사용할 때와 변경된 Next 를 사용할 때 각각 라우팅하는 방법에 많은 차이가 있었습니다.

### 기존 Vite

기존 Vite 에서는 `createBrowserRouter` 를 사용해서 아래처럼 경로를 설정했습니다.

```ts
// createBrowserRouter 예시

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "",
        Component: lazy(() => import("./pages/Main")),
      },
      {
        path: "/",
        children: [
          {
            path: "blog",
            Component: lazy(() => import("./pages/Blog")),
          },
          {
            path: "blog/:postKey",
            Component: lazy(() => import("./pages/BlogPost")),
          },
        ],
      },
    ],
  },
]);
```

각각 페이지와 경로를 지정해서 명시하고, `Component` 로 각각의 Layout 을 설정해 줄 수 있었습니다. 또한 `loader` 등을 사용해서 로딩 등을 추가로 설정할 수 있습니다.

제가 느낀 위 방법의 장점은 경로가 한번에 명시되어 있어서 페이지의 전체적인 경로를 확인할 때 가독성이 좋습니다. 또한 라우팅이 한 곳에 모아져 있어서 설정을 추가하거나 수정할 때 용이합니다.

### 변경된 Next

Next 13 버전부터는 App Router 를 사용해서 라우팅이 가능해졌습니다. App Router 의 기본적인 구조는 app 디렉토리 내부의 폴더 구조가 자동으로 URL 경로가 되는 구조입니다.

```sh
// 변경되 폴더 구조 예시

blog
└── src
    └── app
          ├── page.tsx		// 1. /	 ( main 페이지 )
          ├── layout.tsx
          └── blog
		   		├── page.tsx	// 2	/blog	( blog 게시글 목록 페이지 )
		   		├── layout.tsx
                └── [postKey]
                		├── page.tsx	// 3	/blog/:postKey ( blog 게시글 페이지 )
                        └── layout.tsx
```

위 처럼 작성되는 구조인데, 각각 폴더 내부의 `page.tsx` 가 페이지를 표시합니다. `layout.tsx` 의 경우 해당 페이지 하위 경로에 모두 적용됩니다. 정적 페이지의 경우 만들고 싶은 경로의 이름을 상위 폴더 구조로 적용시킬 수 있습니다. 동적 페이지의 경우, `[]` 내부에 적용하고 싶은 값을 넣어 해당 값을 key 로 사용해서 지정할 수 있습니다. 또한 `createBrowserRouter` 처럼 `loading.tsx` `error.tsx` 를 사용해서 로딩/에러 ui도 함께 구현할 수 있습니다.

위 구조의 장점은 폴더 구조로 되어있어서 내가 작성하고 싶은 페이지에 바로바로 수정하고, 적용할 수 있습니다. 해당 페이지에 로딩/에러 등도 바로바로 적용할 수 있다는 장점이 있습니다. 또한 SSR 을 기본적으로 지원하기에 `metadata` 설정 등이 편리하고, SEO 설정에 최적화되어있다는 장점이 있습니다. 다만 단점으로는 라우팅을 변경해야 할 때 폴더 자체가 수정되어야 하므로 복잡하다는 단점이 있습니다. 또한 폴더 라우팅이 깊어질수록 가독성이 살짝 떨어지는 부분이 있습니다.

### 결론

App Router 를 처음 적용하면서 살짝 러닝커브가 있어서 어려움이 있었지만, 적용하면서 많이 익숙해졌습니다. 라우팅이 너무 깊지 않아서인지 가독성 부분에서는 큰 어려움은 없었지만 깊어지면 어려울 것 같다는 느낌을 받았습니다. 현재는 로딩/에러 처리는 따로 되어있지는 않지만 추후에 추가 예정입니다.

## 서버 컴포넌트와 클라이언트 컴포넌트

기존 Vite 의 경우, 모두 CSR 이었기 때문에 따로 컴포넌트를 구분할 필요가 크게 없었습니다. 하지만 Next 의 경우 기본적으로 SSR 과 서버 컴포넌트를 지원하고, 추가적인 설정으로 클라이언트 컴포넌트를 지원하기 때문에 이를 분리할 필요성이 있습니다.

### 클라이언트 컴포넌트

클라이언트 컴포넌트는 기존의 컴포넌트들과 가장 유사하다고 볼 수 있습니다. 사용자 이벤트에 응답하고, 상태를 관리하고 React hooks 를 사용할 수 있습니다. 또한 브라우저 API ( window, document ) 등에 접근하고 사용할 수 있습니다. 이 컴포넌트들은 JS 번들에 포함되어서 브라우저에서 다운로드된 후 사용됩니다. 컴포넌트 최상단에 `use client` 지시어를 추가하면 클라이언트 컴포넌트로 인식됩니다.

### 서버 컴포넌트

서버 컴포넌트는 JS 번들로 다운로드 되지 않고, 서버에서 렌더링되어 전달되는 컴포넌트입니다. 데이터를 가져오고 api 를 호출하거나 정적인 컨텐츠들을 서버에서 담당합니다. React Hook, 상태관리 등을 사용할 수 없으며, Next 는 모든 컴포넌트를 기본적으로 서버 컴포넌트로 인식합니다. 초기에 빠르게 보여줘야 하는 페이지의 대부분을 서버 컴포넌트로 작성하게 됩니다.

### 결론

결과적으로 Next의 가장 큰 장점은 클라이언트 컴포넌트와 서버 컴포넌트를 적절히 조합해서 사용할 수 있다는 점입니다. 기본적으로 SSR 을 지원하는 서버 컴포넌트를 사용하면서도, 상태관리나 이벤트 관리는 클라이언트 컴포넌트를 사용해서 적절히 조절할 수 있습니다.

## 후기

Next 를 처음 적용하면서 모르는 부분도 많았고 새로 적용한 부분도 많았는데 적용하고 나니 많이 익숙해진 것 같습니다. 무엇보다 SSR 을 처음 적용해 본 것이라 뿌듯하고, 아직은 더 공부해야겠지만 다음에는 새로운 것도 더 시도해보고 싶습니다.
