## Jest

[공식 문서](https://jestjs.io/)

Jest 는 자바스크립트 테스트 프레임워크로 , 공식 문서에서는 단순성에 초점이 맞춰져 있다고 가장 먼저 소개하고 있습니다. 이 말처럼 대부분의 자바스크립트 프로젝트에서 큰 설정 없이 바로 실행할 수 있으며 , mocking 등이 쉽고 테스트가 빠르게 실행되어 많은 프로젝트에서 사랑받고 있습니다.

이와 비교되는 프레임워크로 vite 에서는 [vitest](https://vitest.dev/) 가 떠오르고 있습니다. 이름에서 보이듯 vite 와 굉장히 좋은 호환성을 자랑하며 , 공식 문서에서도 `It's fast!` 라고 적혀있듯 빠르다고 소개하고 있습니다. 역시 많은 사랑을 받고 있으며 vite 가 더 많이 사용된다면 , vitest 도 같이 사랑받을 것 같습니다. 다만 여러 이유로 인해서 아직은 jest가 많이 사용되고 있는데 , 사용 경험에서 같이 적도록 하겠습니다.

## 사용 경험

이전 회사에서 테스트 코드를 채워넣기 시작할 때 부터 자연스럽게 Jest 를 사용했던 것 같습니다. 사실 처음 사용할 때는 이렇다 할 대체 프레임워크가 존재하지 않았습니다. 그러던 중 CRA 에서 Vite 로 마이그레이션 후 , monorepo 도 적용하는 과정에서 Vitest 를 발견해서 자연스럽게 적용해 보려고 시도한 경험이 있습니다. 하지만 결국은 다시 Jest 로 돌아왔는데 여러 비교점에서 Jest 가 **아직은** 사용하기 편리하다는 생각이 들어서였습니다. 적용해 본 후 장단점을 적어보면,

1. Vite 환경에서는 Vitest 설정이 더 쉬웠습니다. Jest 의 특성상 Babel 설정 등 여러 설정을 곁들여야 하지만 , vitest 는 그런 설정이 필요 없이 vite 와 호환되도록 개발된 점이 좋았습니다.

2. `@vitest/ui` 를 통해서 대시보드 형태로 테스트에 대해 볼 수 있는 부분이 편리했습니다. 물론 jest 에서도 가능하고 shell에서 보는 것도 가능하지만 , 훨씬 직관적으로 볼 수 있는 부분이 있었습니다.

3. 다만 기존 Jest 의 mocking에 익숙해져 있다면 , vitest 에서는 더 섬세하기 mocking을 해주어야 하는 부분이 있습니다. jest 가 조금 더 널널하게 보는 느낌 ? 하지만 이 부분은 vitest 의 테스트가 더 단단하기 때문에 오히려 더 견고한 테스트 코드가 작성되는 느낌도 있었습니다. 하지만 처음에는 적응이 어렵고 , 기존 코드를 수정하는 부분에서 시간이 많이 드는 단점이 있었습니다.

4. 적용을 시도한 때에는 vitest 에 대한 정보가 많이 부족해서 , 적용하다 오류가 나는 경우 정보를 찾기가 굉장히 힘들었습니다. 세팅이 필요한 부분에서도 오류가 난다면 , 적용하기 굉장히 힘들었습니다.

5. 가장 중요한 이유로 , vitest 의 첫 도입 목적은 테스트 실행 속도 향상이었습니다. 테스트 코드의 크기가 커져서 테스트 코드를 한번 실행하면 5 ~ 10분동안 돌아가는 상황이었기 때문에 시간 단축이 간절했습니다. 그래서 vitest 를 적용시켰는데 , 실제로는 오히려 jest가 더 빠른 상황이 되었습니다.
   [Vitest는 스레드를 사용하여 Jest보다 3배 느리게 테스트를 실행합니다.](https://github.com/vitest-dev/vitest/issues/579)
   [Vitest는 Jest를 대체할 준비가 되어 있지 않습니다.](https://uglow.medium.com/vitest-is-not-ready-to-replace-jest-and-may-never-be-5ae264e0e24a)

4번과 5번의 이유가 가장 큰 이유였는데 , 결국은 vitest 를 도입하지 못하고 jest 로 돌아온 경험이 있습니다. 다만 현재는 vitest 의 생태계도 많이 발전한 것 같아서 기회가 된다면 vitest 를 적용해보고 싶은 마음도 있습니다.

## msw 버전 수정

현재 msw 의 최신 버전은 v2 버전인데 , v2 버전으로 적용 중 기존과 호환되지 않아서 발생하는 에러가 많이 있었습니다. ( ex. [msw/node module can't find error](https://github.com/mswjs/msw/issues/1786#issuecomment-1782559851) 등 ) 따라서 이전 게시글에서는 v2 버전이었지만 , 기존에 사용하던 v1 버전으로 수정해서 적용했습니다.

## msw 버전 다운그레이드

### 버전 다운

`package.json` 에서 기존 msw 의 버전이 2.x.x 였는데 ( 저는 2.3.1 사용중이었습니다. ) , 해당 버전을 `1.2.1` 버전으로 수정해서 `install` 합니다.

```json
"msw": "^2.3.1" -> "msw": "^1.2.1",
```

### 파일 수정

`browser.ts` 에서 `setupWorker` 의 import 를 수정합니다. v2 에서는 `msw/browser` 에서 가져왔지만 , v1 버전에서는 `msw` 에서 바로 import 합니다.

```ts
// import { setupWorker } from "msw/browser"; <- v2
import { setupWorker } from 'msw'; // <- v1
```

또한 v2 에서는 rest API mocking 을 위해서 `http, HttpResponse` 를 사용했지만 v1 에서는 `rest` 를 사용합니다. 이에 따라서 코드를 수정합니다.

```ts
// v2
http.get("/fake", () => {
  return HttpResponse.json({
    data: "data1",
  });
}),

// v1
rest.get("/fake", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: "data1" }));
}),
```

## Jest 설정

### dependency 다운로드

```shell
# jest 설치
yarn add -D jest @types/jest

# react testing library 다운로드
yarn add -D @testing-library/jest-dom @testing-library/react @testing-library/user-event @testing-library/react-hooks jest-environment-jsdom @testing-library/dom
```

- `@testing-library/jest-dom` : Dom 노드를 테스트할 때 사용가능한 matcher 들을 제공합니다. ( ex. `toBeInTheDocument` 등 )
- `@testing-library/react` : React 컴포넌트를 테스트하기 위한 도구들을 제공합니다. ( ex. `render` 등 )
- `@testing-library/user-event` : 발생하는 이벤트 등을 테스트하기 위한 도구들을 제공합니다. ( ex. `click` `type` 등 )
- ~~`@testing-library/react-hooks` : React hooks 를 테스트하기 위한 도구들을 제공합니다. ( ex. `renderHook` , `act` 등 )~~ **해당 라이브러리는 `@testing-library/react` 로 통합되었습니다.**
- `jest-environment-jsdom` : 테스트 환경을 jsdom 으로 설정하기 위한 라이브러리입니다.
- ( 추가 ) `@testing-library/dom` : dom 테스트에 대한 matcher , util 등을 제공합니다. ( ex. `getByText` 등 )

이후 `package.json` 에서 테스트를 실행하기 위한 `script` 를 작성합니다.

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "test": "jest"
  },
```

위 설정 후 간단한 테스트를 작성 후에 테스트를 실행하면 아래와 같은 에러가 발생합니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/a40eafc4-e9dd-431e-a9b3-30877a67c6f6/image.png)

위 에러는 jest 테스트 실행 시 Babel 세팅이 되어있지 않아서 발생하는 문제입니다. Vite 는 ESM ( ES module ) 을 사용하지만 , Jest 는 CommonJS 를 기본으로 사용하기 때문에 Babel 을 사용해서 ES module 을 CommonJS 로 변환해야 Jest 가 인식하고 실행 가능합니다. 따라서 Babel 세팅을 추가해줘야 합니다.

```shell
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```

- `@babel/core` : javascript 코드를 트랜스파일링 합니다. babel의 핵심 모듈입니다.
- `@babel/preset-env` : 최신 javascript와 구형 javascript 사이에서 버전이 호환되도록 설정해줍니다.
- `@babel/preset-react` : jsx 등의 react 문법을 javascript로 변환해주는 역할을 합니다.
- `@babel/preset-typescript` : typescript가 적용되도록 설정해 줍니다.

이후 root 에 `babel.config.cjs` 파일을 만들어서 아래와 같이 작성해 줍니다.

```js
module.exports = {
  presets: [['@babel/preset-env'], ['@babel/preset-react'], '@babel/preset-typescript'],
};
```

추가로 `jest.config.cjs` 파일도 작성해 줍니다. [참고 문서](https://jestjs.io/docs/configuration) 에서 필요한 설정을 추가해 줍니다. 여기서는 테스트 환경과 mock clear 처리만 추가했습니다.

```js
module.exports = {
  testEnvironment: 'jsdom', // 기본값이 jsdom 이라 추가하지 않아도 무관함
  clearMocks: true, // mock clear 처리 추가
};
```

### jest setup file setting

이제 msw 사용을 위해서 setup file 을 생성해야 합니다. 물론 setup file 없이 각 테스트 내부에서 설정해줄 수 있지만 , 그렇게 되면 모든 테스트에서 일일히 선언해야 하므로 setup file 을 통해서 한번에 설정해 줄 수 있습니다.

root 위치에 setupFile 을 생성합니다. 이름은 원하는 이름으로 작성하면 되는데 , 저는 `setupTests.ts` 를 사용했습니다.

```ts
import '@testing-library/jest-dom';
import { server } from './src/mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
```

- `import "@testing-library/jest-dom"` : jest-dom 환경에서 테스트하기 위해 import 합니다.
- `import { server } from "./src/mocks/server"` : 작성한 msw 서버를 불러옵니다. 그 이후
  - 시작 전 모든 곳 ( `beforeAll` ) 에 서버를 연결시켜 주고
  - 각 테스트 케이스가 끝날 때 ( `afterEach` ) 마다 handler 를 초기화해주고
  - 모든 테스트가 끝난 후 ( `afterAll` 서버를 닫습니다. )

그 이후 이 파일을 jest 설정에 넣어야 하는데 , `jest.config.cjs` 파일에 `setupFilesAfterEnv` 옵션과 함께 추가합니다.

```js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  clearMocks: true,
};
```

### 간단한 hook 테스트 작성

이제 테스트를 위해서 간단한 hook 을 만들어 보겠습니다. Riot games 의 Team Fight Tactics 의 open API 를 사용해서 챔피언 정보를 불러오는 hook을 만들었습니다. 자세한 코드는 [여기](https://github.com/k1my3ch4n/msw) 에서 확인하실 수 있습니다.

```ts
// useGetChampionData.ts

const useGetChampionData = () => {
  const [dataChampionData, setChampionData] = useState<Record<string, GetChampionData>>();

  const fetchGetChampionData = async () => {
    try {
      const response = await axios.create().get(TFT_CHAMP_URL);

      const { data } = response;

      setChampionData(adapter(data.data));
    } catch (error) {
      console.error('useGetChampData Error : ', error);
    }
  };

  return {
    data: dataChampionData,
    fetchGetChampionData,
  };
};
```

데이터를 불러온 후 , `adapter` 를 통해서 특정 필요한 값만 `dataChampionData` 에 저장하는 패턴을 사용했습니다. ( 개인적으로 fetch 등에서 `adapter` 를 사용하는 것을 선호합니다. ) 기존 가져오는 데이터에는 필요하지 않은 값이나 , 과다한 정보가 있어서 이를 추려내는 과정을 `adapter` 를 통해서 진행했습니다.

```ts
// useGetChampionData.test.ts

import { renderHook, act } from '@testing-library/react-hooks';
import useGetChampionData, { TFT_CHAMP_URL, adapter } from './useGetChampionData';
import { GET_CHAMPION_DATA_RESPONSE } from '../../fixtures/tft';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('useGetChampionData', () => {
  it('fetchGetChampionData 가 실행되면 , data 를 갱신한다.', async () => {
    const { result } = renderHook(useGetChampionData);

    expect(result.current.data).toBeUndefined();

    await act(async () => {
      await result.current.fetchGetChampionData();
    });

    expect(result.current.data).toEqual(adapter(GET_CHAMPION_DATA_RESPONSE));
  });

  it('fetchGetChampionData 가 실패하면 , console error 가 호출된다. ', async () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementationOnce(() => undefined);

    server.use(
      rest.get(TFT_CHAMP_URL, (_, res, ctx) => {
        return res(ctx.status(400));
      }),
    );

    const { result } = renderHook(useGetChampionData);

    expect(result.current.data).toBeUndefined();

    await act(async () => {
      await result.current.fetchGetChampionData();
    });

    expect(mockConsoleError).toHaveBeenCalled();
  });
});
```

`@testing-library/react-hooks`

- `renderHook` : hook을 독립적으로 렌더링하고 테스트할 수 있게 해주는 함수입니다. hook 의 상태나 반환값을 검사할 수 있게 해줍니다.
- `act` : 상태 업데이트를 동기적으로 처리하게 해주는 함수입니다. 테스트 상에서 업데이트 처리 후 상태를 확인하도록 도와줍니다.

`함수 mocking`

- `spyOn` : 특정 method 에 대해 호출이 되었는지 , 몇번 호출 되었는지 , 반환값은 무엇인지 등을 설정하고 감시하는 역할을 합니다. 위에서는 에러가 나는 경우 `console.error` 를 반환하게 되는데 , 해당 `console.error` 를 감시하는 역할을 합니다.
- `mockImplementationOnce` : mocking 한 함수를 구현하고 , 그 결과를 설정하는 역할을 합니다. 해당 함수는 1번만 실행됩니다.

`msw`

- `server.use` : 설정된 server 의 특정 method 를 mocking 합니다. 위의 경우 , fetch 의 return status 를 400으로 조정해서 `error` 를 유도했습니다. 400 외에도 여러 status 나 , return 값을 수정해서 원하는 테스트가 가능합니다.

### Troubleshooting #1

위 상황에서 테스트를 실행하면 정상적으로 실행되지만 , 아래와 같은 warning 몇개가 발생하게 됩니다.

1.

```
Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`.
Import `act` from `react` instead of `react-dom/test-utils`.
See https://react.dev/warnings/react-dom-test-utils for more info.
```

2.

```
Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead.
Until you switch to the new API, your app will behave as if it's running React 17.
Learn more: https://reactjs.org/link/switch-to-createroot
```

3.

```
Warning: unmountComponentAtNode is deprecated and will be removed in the next major release.
Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot
```

해당 에러들을 찾아보니 , 이미 이전 버전에서 발생 후 해결된 문제들이라고 하는데 갑자기 발생하지 ? 라는 생각이 들었다. 그래서 `renderHook` 과 `act` 에서 발생한 문제라고 생각해서 `@testing-library/react-hooks` 에 대해 찾아봤는데 , 해당 라이브러리는 이미 `@testing-library/react` 로 통합되었다는 것을 알 수 있었다 ! 그래서 `react-hooks` 를 삭제 후 , 다시 테스트를 진행했다.

```shell
yarn remove @testing-library/react-hooks

# 추가로 , 기존 테스트 파일에서도 아래와 같이 수정합니다.
# import { renderHook, act } from "@testing-library/react-hooks"; 	에서
# import { renderHook, act } from "@testing-library/react"; 		로 수정합니다.
```

![](https://velog.velcdn.com/images/k1my3ch4n/post/67f6a43e-11fa-4339-bfee-084cea2002ff/image.png)

그 후 이 에러가 등장한다면 , `@testing-library/dom` 을 추가로 설치해준다.

```shell
yarn add -D @testing-library/dom
```

그 후 테스트를 진행하면 , 정상적으로 진행된다 !

## Jest report

테스트를 진행하다보면 전체 테스트가 어떤지 , 커버리지는 얼마인지 등을 확인해야 할 때가 있습니다. 물론 shell 에도 나오지만 , 이를 전체적으로 확인하면 더 좋지 않을까요 ? 그럴 때 사용가능한 라이브러리 중에 `jest-html-reporters` 가 있습니다. 해당 라이브러리는 테스트에 대한 종합을 대시보드로 정리해서 html 파일로 제공합니다.

### 설치

```shell
yarn add -D jest-html-reporters
```

### jest.config 설정

해당 report 에 대한 설정을 jest config 파일에서 진행합니다. 항목별 내용은 [공식 문서](https://github.com/Hazyzh/jest-html-reporters) 에서 확인 가능합니다. 제가 설정한 부분은 다음과 같습니다.

```js
  coverageDirectory: "<rootDir>/reports/coverage/",
  collectCoverageFrom: [
    "**/src/**/*.[jt]s?(x)",
    "!**/src/fixtures/**",
    "!**/src/mocks/**",
    "!**/src/*.[jt]s?(x)",
  ],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./reports",
        filename: "test_report.html",
        pageTitle: "Test Report",
        openReport: false,
        inlineSource: true,
        hideIcon: true,
      },
    ],
  ],
```

- `coverageDirectory` : coverage 설정했을 때 저장되는 파일의 경로를 나타냅니다.
- `collectCoverageFrom` : coverage 에 포함될 / 제외될 파일을 설정할 수 있습니다.
- `publicPath` : report 가 저장될 경로를 나타냅니다.
- `filename` : 저장된 파일의 이름을 나타냅니다.
- `pageTitle` : 페이지의 Title 입니다.
- `openReport` : 테스트 후 자동으로 파일이 열리는 지 여부입니다.
- `inlineSource` : 하나의 파일로 저장하는지 여부입니다.
- `hideIcon` : 숨김 아이콘이 존재하는 지 여부입니다.

그 후 , 평소처럼 테스트를 진행하게 되면 root 경로에 `reports` 폴더가 생기고 , 안에 파일이 생기게 되는데 그 파일을 열면 아래와 같은 화면이 등장합니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/cec92549-dbf8-43a8-bbb1-19e7b01fb367/image.png)

![](https://velog.velcdn.com/images/k1my3ch4n/post/7d0cd725-c5d1-4ec3-9000-d8eb2a038e67/image.png)

만약 여기서 coverage 까지 확인하고 싶다면 , `package.json` 에 script로 아래 항목을 추가합니다. 또는 바로 `yarn test --coverage` 를 사용해도 괜찮습니다.

```json
	"coverage" : "jest --coverage"
```

이후 , `yarn coverage` 를 실행하게 되면 우측 상단에 `coverage` 버튼이 추가된 화면을 볼 수 있습니다. 해당 버튼을 눌러 들어가면 테스트별로 하나하나 볼 수 있습니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/c30b8e39-3883-45e3-9460-974c9a255c95/image.png)

![](https://velog.velcdn.com/images/k1my3ch4n/post/39983744-34d0-48f3-a969-7203a2210c05/image.png)

테스트되지 않은 부분은 이런 식으로 빨간 하이라이트가 추가됩니다. 이 coverage를 보고 테스트가 되지 않은 부분은 어디인지 , 된 부분은 어디인지 확인이 가능합니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/a63d5c9a-d709-4ffe-bfb4-db83ce5b6a34/image.png)

![](https://velog.velcdn.com/images/k1my3ch4n/post/45a1a0d2-7ffb-4ca6-bcbf-bc3206972602/image.png)

테스트 추가 후 coverage 를 채우고 빨간 하이라이트가 없어진 모습입니다. 물론 coverage 를 채우는데 급급한 테스트 코드가 되어서는 안되겠지만 , 위 데이터를 확인해서 테스트 코드에 대한 전반적인 점검 , 분석 등을 진행할 수 있어서 편리한 라이브러리인 것 같습니다.

## 후기

테스트에 대해 굉장히 많이 알고 있다고 자부했는데 , 생각보다 겉핥기 느낌으로 많이 알고 있었고 잘 모르고 사용한 부분도 많이 있었던 것 같습니다. 또한 오랜 시간 사용되다보니 관성적으로 사용하고 있었는데 , 새로 변경된 부분도 많이 알게 되어서 좋았던 것 같습니다. 아마 다음에는 스토리북 관련 작업을 진행하면서 추가할 예정인데 , 그 때 component 테스트도 함께 추가하도록 하겠습니다.

잘못된 부분이 있으면 알려주시면 감사드리겠습니다.
위 작업이 있는 repo 는 [여기](https://github.com/k1my3ch4n/msw)를 확인해주세요 !
