## MSW ( Mock Service Worker )

[공식 문서](https://mswjs.io/)

![](https://velog.velcdn.com/images/k1my3ch4n/post/b8203f86-44aa-4e7e-9e18-9e987599b9ea/image.png)

msw 는 [service worker](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API) 를 이용해서 API 를 mocking 하는 라이브러리 입니다. 네트워크 요청을 가로채도록 설계된 Service Worker API를 활용하기 때문에 Mock 사용 여부 관계 없이 동일한 애플리케이션 동작을 보장하게 됩니다.

- browser 와 node 환경에서 동일한 request handler 를 공유함
- service worker api 는 네트워크상에서 실제 요청을 가로채서 mock 데이터를 제공하기 때문에 , 실제 서버 측 API 와 상호 작용하는 경험에 가깝고 mocking이 필요한 환경에서만 msw 인스턴스를 실행하면 됨
- rest API 뿐만 아니라 graphQL 도 지원

## 사용 경험

이전 회사에서 크게 2가지의 불편함을 느껴서 msw 를 도입하게 되었습니다.

1. 기능을 개발하는 과정에서 서버의 API 를 기다리는 일이 잦아졌고 , 어쩔 수 없이 병목현상이 발생하게 되었습니다. 그리고 기다린 후에 받은 API 가 예상했던 부분과 달라지는 경우가 다반사였고 , 기능 개발의 앞뒤로 불필요한 시간이 낭비되어서 해당 부분을 줄이기 위해서 도입을 시도했습니다.

2. 테스트에 대한 필요성이 늘어나면서 코드를 작성하기 시작했는데 , 필요한 데이터를 직접 mocking 해서 화면에 추가했습니다. 이게 처음에는 구현이 쉽고 빨라서 도입했는데 , 점점 프로젝트의 볼륨이 커지게 되면서 중복되는 mocking이 늘어나고 네트워크 응답 상태에 따라서 대응하는 경우에 대응이 힘들어지게 되었습니다. 이 시기에 storybook 또한 함께 도입하기로 했는데 , storybook 에서도 mocking에 관련해 비슷한 문제가 발생했습니다.

위 두 가지의 불편한 점으로 msw 도입하게 되었고 , 실제 API 가 동작하는 것처럼 mocking이 가능해서 http method 나 응답 상태에 따라서 각각 대응하기가 쉬워졌습니다. 또한 불필요하게 중복되는 mocking 들이 제거되고 , 하나로 합쳐지다보니 코드가 간결하고 쉬워졌습니다. 다만 초기에 서버를 구축하는데 공수가 많이 들어가긴 하지만 , 한번 구축하게 되면 그 이후에 적용이 쉬워서 오히려 공수를 아낀 것 같다는 생각이 듭니다.

## MSW 기본 설정

### 설치

```shell
// msw 설치
npm install -D msw
또는
yarn add -D msw

// 브라우저에서 사용할 수 있는 서비스 워커 코드를 만들기 위함
npx msw init public/ --save
```

`npx msw init public/ --save` 를 진행하게 되면 `root` 경로에 아래와 같이 `mockServiceWorker.js` 파일이 생기게 됩니다. 해당 파일은 브라우저에서 mocking 을 위해 사용할 수 있는 `serviceWorker` 로 사용됩니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/6a87d13a-2343-42f0-b33a-402b9acea66a/image.png)

### 기본 폴더 구조

기본적으로 msw 의 구조는 3가지로 나누어집니다.

- handlers : API mocking 을 지정하는 파일들의 모음
- server.ts : node 환경 에서 실행하기 위한 server의 구성
- browsers.ts : browser 또는 storybook 등에서 실행하기 위한 worker의 구성

### handlers

[rest API started](https://mswjs.io/docs/network-behavior/rest)
[graphQL started](https://mswjs.io/docs/network-behavior/graphql)

API mocking 을 지정하는 파일들 입니다. mocking 할 method , url , response 값 등을 설정할 수 있습니다.

```ts
// src/mock/handlers/mock.ts

import { HttpResponse, http } from 'msw'; // <- graphQL 사용시 graphQL 사용

export const mockHandler = [
  http.get('/fake', () => {
    return HttpResponse.json({
      data: 'data1',
    });
  }),
];

const handlers = [...mockHandler];

export default handlers;
```

- `http` : rest API 시 사용되는 함수입니다. ( 이전 버전에서는 rest 로 사용되었지만 , 현재는 http 로 수정되었습니다. ) 그 뒤에 method 와 url 을 상황에 맞춰 설정할 수 있습니다.
- `HttpResponse` : response 를 mocking 할 수 있습니다. 상황에 맞춰 원하는 data를 수정할 수 있습니다.

그 외의 post , delete 등등도 mocking 가능합니다. 해당 부분은 공식문서에서 확인가능합니다. 위 파일들 중 browser 또는 server 에서 msw 사용 시 필요한 부분만 가져와서 사용가능합니다.

### server.ts

```ts
// src/mock/server.ts

import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
```

node 환경에서 실행되도록 설정합니다. 위 handlers 에 있는 mock API 들이 실행됩니다. 대부분 테스트 환경 ( jest , vitest 등 ) 에서 실행됩니다. 이후 `jest.setup.tsx` 파일 등에서 server 를 연결 후 테스트에서 mock api 를 사용할 수 있습니다.

### browers.ts

```ts
// src/mock/browsers.ts

import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

- `setupWorker` : browser 에서 사용 가능하도록 worker를 설정합니다. ( 이전 버전에서는 `msw` 에서 바로 import 가능했지만 , 현재 버전에서는 `msw/browser` 에서 import 합니다. )
- `handlers` : 위에서 설정한 handlers 중 필요한 부분은 `setupWorker` 에 넣어서 실행 가능합니다. 해당 worker 내부로 들어간 handlers 는 browser 또는 storybook 실행 시 mocking 됩니다.

이후 파일 실행되는 main 파일에서 worker 를 실행해 줍니다.

```ts
// src/main.tsx
const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
```

APP이 실행될 때 msw 가 실행되도록 설정할 수 있습니다. [공식 문서](https://mswjs.io/docs/integrations/browser#conditionally-enable-mocking) 에서는 service worker 등록은 비동기식이므로 위 방법을 추천하고 있습니다. 이후 앱을 실행하게 되면
![](https://velog.velcdn.com/images/k1my3ch4n/post/663ebc56-c523-429c-af31-a2c6b6033906/image.png)

콘솔에 위처럼 `[MSW] Mocking enabled` 가 등장했다면 , 정상적으로 연결된 것을 알 수 있습니다.

## 후기

이전에 적용했을 때와 버전이 달라서 약간 헤멘 부분이 있었지만 , 공식문서에서 잘 설명해주고 있어서 쉽게 답을 찾을 수 있었습니다. 다음 글에서는 msw 를 이용한 test 와 storybook 작성을 이야기 하려고 합니다.

잘못된 부분이 있으면 알려주시면 감사드리겠습니다.
위 작업이 있는 repo 는 [여기](https://github.com/k1my3ch4n/msw)를 확인해주세요 !

## 참고 문서

[공식 문서](https://mswjs.io/docs/getting-started)
