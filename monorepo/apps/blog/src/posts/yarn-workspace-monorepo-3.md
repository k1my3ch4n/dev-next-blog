## monorepo 의 장점

monorepo의 또 하나의 장점이라면 , 여러 project에서 공통으로 사용되는 파일을 생성 후 재사용 가능하다는 점 입니다. 공통으로 사용되는 hook , component 를 생성해두고 원하는 프로젝트에서 가져다 사용할 수 있습니다. 이로 인해 불필요하게 코드가 낭비되지 않고 , 관리도 편리해집니다.

## common 폴더 생성

기본적으로 사용되는 hook 과 component 를 생성합니다. 기본적으로 `yarn create vite` 를 사용해서 생성하면 , 버튼과 그 버튼을 눌렀을 때 count가 증가하는 코드가 생성됩니다. 여기에 따라서 기본 Button component 와 count 를 증가시키는 useCount hook 을 생성해 보겠습니다.

그 전에 common project를 생성해야 합니다. 간편히 생성하기 위해 먼저 packages 내부에 `yarn create vite` 로 `common` 폴더 생성 후 , 아래 파일을 제외하고 삭제합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/f606e937-ac8e-4969-93fe-73dc2665dc01/image.png)

### 1. useCount hook 생성

src 안에 hooks 폴더를 생성하고 , `useCount` 폴더를 생성합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/c7238d96-78bf-46cf-87df-b0a12677a312/image.png)

그 후 아래와 같이 count 를 증가시켜주는 hook 을 생성합니다.

```ts
// index.ts
import { useState } from 'react';

export const useCount = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return {
    count,
    handleCount,
  };
};
```

### 2. commone project 수정

common project의 경우 , library 로써의 역할을 하기 때문에 이에 따른 설정을 해주어야 합니다. [공식 문서](https://ko.vitejs.dev/guide/build.html#library-mode)

가장 먼저 `vite.config.ts` 파일을 아래와 같이 수정해줍니다.

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: {
        hooks: './src/hooks/index.ts',
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
```

여기서 중요하게 봐야 하는 것은 `vite-plugin-dts` , `entry` 입니다.

- `vite-plugin-dts` : 타입스크립트 모듈로써 타입을 알려주기 위한 library입니다.
- `entry` : 라이브러리 경로를 위한 작업입니다. `hooks` 와 `components` 를 사용할 때 , `common/hooks` `common/components` 등으로 나누기 위해 각각 설정해 주었습니다.

이제 `yarn common build` 를 진행하면 정상적으로 `build` 되고 , `dist` 파일이 생성됩니다.

그 다음으로는 타입 지정 파일을 생성합니다. root 위치에 `index.d.ts` `hook.d.ts` 파일을 생성합니다.

```ts
// hook.d.ts
export * from './dist/hooks';
```

```ts
// index.d.ts
import './hooks.d.ts';
```

`hook.d.ts` 는 `hook` 에 대한 타입을 , `index.d.ts` 는 `hook` 과 추후 추가될 `component` 의 타입을 나타냅니다.

다음으로는 `package.json` 파일도 아래와 같이 수정해줍니다.

```json
{
  "name": "common",
  "type": "module",
  "version": "0.0.0",
  ...
  "exports": {
    "./hooks": {
      "import": "./dist/hooks.js",
      "types": "./dist/hooks/index.d.ts"
    }
  },
  "files": [
    "dist/*",
    "index.d.ts",
    "hooks.d.ts"
  ]
  ...
}
```

- `type` : 이 package가 module 로써 작동하도록 `module` 을 추가해 줍니다.
- `version` : package의 버전입니다. 변경시마다 변경해주어야 합니다.
- `types` : 이 라이브러리 전체의 `types` 를 지정해 줍니다.
- `exports` : 모듈의 하위 경로를 나타냅니다. 라이브러리를 import 시 , `{libraryName}/hooks` 의 형태로 가져올 수 있습니다.
  - `import` : library 에서 가져올 파일을 선택합니다.
  - `types` : 가져온 파일의 타입을 지정해준 파일입니다.
- `files` : 패키지가 설치될 때 , 포함될 파일을 선택합니다. 여기에서는 빌드 파일 , 타입 파일이 포함됩니다.

### 3. common project 적용

다른 project 로 돌아와서 , `package.json` 의 dependency에 common 을 추가해야 합니다.

```json
// package.json
...
"dependencies": {
  ...
  "common": "workspace:^",
  ...
},
...
```

버전을 직접 입력해주어도 되고 , 위처럼 워크스페이스에서 바로 가져와도 됩니다.

이후 App.tsx 에서 아래와 같은 방법으로 import가 가능합니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/38c40354-12d0-47bd-91b0-f81590c65f50/image.png)

`common/hooks` 에서 `useCount` hook 을 가져오고 , 아래에서 불러온 모습입니다. 그 후 , 실행해서 버튼을 눌러보면 이전처럼 정상적으로 작동하는 것을 볼 수 있습니다.

## 후기

이전에도 쉽지 않았는데 , 이번에도 쉽지 않았던 것 같습니다. 빌드 후 가져오는 것이 힘들었고 , 생각보다 대충 알고있던 부분도 많이 있었던 것 같습니다. 그 부분들은 조금씩 더 추가해서 작성해두어야 할 것 같습니다.

추가로 , 이전 경험으로 위 방법을 최종적으로 사용하지는 않았는데 , 그 이유는 common 에서 수정이 일어나면 , 모든 프로젝트에 영향을 주기 때문입니다. common 에서 수정이 일어나면 다른 곳에서 버전에 따라서 각각 다르게 사용하고 싶었기 때문에 , 다음 게시글에서는 해당 common 을 publish 해 두고 , 버전에 맞춰서 사용하는 두가지 방법을 작성해 보려고 합니다.

잘못된 부분, 추가해야 하는 부분이 있다면 말씀해주시면 감사드리겠습니다 .
해당 repo는 [여기](https://github.com/k1my3ch4n/Vite-monorepo)에서 확인 가능합니다 .
