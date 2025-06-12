## Storybook

[공식 문서](https://storybook.js.org/)

Storybook 은 UI 컴포넌트를 독립적인 환경에서 테스트하고 개발할 수 있는 도구로 , 프론트엔드 프레임워크와 함께 사용됩니다. 페이지 단위로도 많이 사용되지만 , 컴포넌트 단위로 사용될 때 다양한 상태나 조합에서 테스트가 가능해서 개발의 속도도 빨라지고 , 특정 상황마다 확인도 가능하며 재사용되는 컴포넌트를 생성할 때 특히 편리합니다. 이로 인해 디자인팀과 개발팀 사이의 협업이 편리해집니다.

## 사용 경험

monorepo 로 전환하게 되면서 재사용하는 컴포넌트를 만들어야 했고 그러다보니 컴포넌트를 더 많이 테스트해야 했습니다. 또한 API 가 늘어가면서 그 API 를 사용하는 페이지에 UI 테스트를 진행해야 하는 경우도 생겼습니다. 이 경우에 직접 개발서버에서도 테스트가 가능했지만 , 모든 경우에 데이터를 생성해서 테스트하는데 큰 불편함이 있었습니다. 또한, api 로딩 중 / 서버 에러 등등은 찰나의 시간이라 테스트하기 어려운 부분이 있었습니다. 디자인팀 역시 이런 데이터 세팅에서 어려움을 느끼는 경우가 많았기 때문에 테스트가 힘든 부분이 있었습니다.

이런 단점들을 제거해준 부분이 storybook 이었습니다. 처음에는 단순 mocking으로 진행해서 복잡한 부분과 원하는대로 진행되지 않는 부분이 있었지만 , msw 전환 후 테스트 handler 와 같이 사용하면서 편리하게 조작이 가능했습니다. 게다가 디자인 팀 역시 데이터를 직접 넣을 필요 없이 storybook 페이지에서 테스트가 가능해서 UI 테스트 시간이 획기적으로 단축되었습니다. 서버에 영향을 받지 않고 테스트하는 부분도 큰 장점이었습니다. 이로 인해 디자인팀과 협업 시 의견을 나누기 편리하고 , 검수나 확인 부분에서 시간이 많이 줄어들어서 효율적으로 개발이 가능했습니다.

## Storybook 설정

### 설치 및 설정

[공식 문서](https://storybook.js.org/docs/get-started)

이전에 사용했던 버전은 7버전이었는데 , 8버전이 업데이트 되면서 더욱 쉽게 실행이 가능해진 것 같다. 공식 문서에 따라 아래 명령어로 설치해준다.

```shell
npx storybook@latest init
```

vite 에서는 그냥 react 에서와는 다르게 설정을 변경할 부분이 존재한다. 해당 부분은 [참고 링크](https://storybook.js.org/docs/get-started/react-vite) 에서 수정할 수 있다.

그 후 , script 에 storybook 을 추가해준다.

```json
"storybook": "storybook dev -p 6006", 	# port 는 커스텀 가능한데 , 6006을 많이 사용한다.
"build-storybook": "storybook build"
```

그 후 , 자연스럽게 실행하면 storybook이 실행된다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/fe58458c-20aa-4c35-98db-a672c397b239/image.png)

### msw 설정

storybook 에서 msw 를 사용하기 위해서는 [msw-storybook-addon](https://storybook.js.org/addons/msw-storybook-addon) 이 필요하다.

```bash
yarn add -D msw-storybook-addon
```

그 후 , `preview.ts` 에서 addon 설정을 추가 후 msw 를 연결해준다.

```ts
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

export const decorators = [mswDecorator];
```

### Troubleshooting #1

설정 후 storybook 을 실행하려고 하면 아래와 같은 에러가 등장하면서 실행되지 않는다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/ef132555-3523-487a-8dc5-075a55a556d4/image.png)

화면에 나오는 [링크](https://github.com/storybookjs/storybook/issues/22431#issuecomment-1630086092) 를 따라가게 되면 에러의 원인이 나오게 되는데 , 요약하면 `yarn` 버전 1 에서 발생하는 문제였다. yarn 버전이 최신인 경우 ( 4 이상 ) 에서는 문제가 없지만 , 그 이하의 버전에서는 오류가 발생한다. 해결하기 위해서는 `package.json` 에 아래 코드를 추가해주면 된다.

```json
  "resolutions": {
    "jackspeak": "2.1.1"
  }
```

### Troubleshooting #2

그 후 실행하면 , storybook이 실행은 되지만 아래와 같은 에러가 등장한다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/28b8d947-45d6-4075-aba1-365d68bb6fac/image.png)

해당 에러에 대해서는 찾아봐도 그 오류에 대해서 나오지 않아서 굉장히 애를 먹었다. 도대체 뭐가 문제일 지 몰라서 한참 찾던 도중 , addon 의 `d.ts` 파일에 들어가면서 그 답을 알 수 있었다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/75994a0c-50e6-4b47-9c9a-e6efb24138b0/image.png)

이전 게시글에서 msw v2 에서 오류로 인해서 v1으로 다운그레이드 했었는데 , 해당 부분에서 오류가 발생했다. `msw-storybook-addon` 은 `2.0.2` 를 사용하고 있었는데 해당 버전에서는 msw v2 를 사용하면서 문법이 바뀌어 `msw/browser` 를 사용했지만 , 실제로 적용된 msw v1 에서는 그냥 `msw` 를 사용하고 있어서 해당 부분에서 충돌이 있었다. 따라서 `msw-storybook-addon` 역시 버전 `1.10.0` 으로 다운그레이드를 해주었다. 그 후 , 실행을 하게 되면 정상적으로 storybook 이 실행되는 모습을 볼 수 있다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/92f97d23-c7cf-4d16-b309-50ff3526aacd/image.png)

![](https://velog.velcdn.com/images/k1my3ch4n/post/e357a524-9f2f-43ae-9980-4cf506d3c0cf/image.png)_msw가 연결된 모습_

## storybook 작성

### Button Component story 작성

버튼 컴포넌트에 대한 간단한 story 를 작성했습니다.

```tsx
// Button.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    size: 'l',
    color: 'outlined',
    children: '버튼',
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Outlined = Template.bind({});

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
};
```

`default`

- `title` : storybook 좌측에 나타나는 title 을 설정할 수 있습니다. `/` 를 이용해서 폴더 구조로 작성할 수 있습니다.
- `component` : 작성할 storybook 의 component 를 불러올 수 있습니다.
- `args` : 컴포넌트에 들어갈 props 들을 설정할 수 있습니다. 기본으로 설정할 수도 있지만 , 아래에서 story Template 에서 정할 수도 있습니다.

`Template` : rendering 할 컴포넌트를 정의합니다. 이후 , props 에 따라서 디자인이 다르게 구현됩니다.

- `bind` : Template 함수를 새 arg 를 할당해서 rendering하는 역할을 합니다. arg 는 bind 내부에서 정의할 수도 있지만 , 따로 빼서 정의할 수도 있습니다.

### storybook 활용

![](https://velog.velcdn.com/images/k1my3ch4n/post/5ce52362-d7cc-4da6-9953-77ce38190e00/image.png)

작성한 storybook을 확인해보면 , 위 사진처럼 보입니다. 좌측은 설정한 기본 story 들이 , 우측에는 설정한 args 에 따라서 컴포넌트가 렌더링됩니다. 그리고 그 아래에 설정할 수 있는 controls가 있는데 , 여기서 또 상태에 따라서 args를 수정할 수 있습니다. 수정한 정보에 따라서 즉시 렌더링되고 , 우측 상단에서 확인할 수 있습니다. 이 controls 를 통해서 상황 / 상태에 따라서 렌더링되는 디자인을 확인할 수 있습니다.

### msw 를 사용한 story 작성

기본 페이지에 버튼을 추가하고 , 버튼을 누르면 데이터를 요청해서 표출해주는 컴포넌트를 생성했습니다. 그리고 해당 버튼을 눌렀을 때 , `1. 정상 표출` `2. 로딩 중` `3. 에러 발생` 의 3가지를 storybook 으로 작성했습니다.

```ts
import { Meta, StoryFn } from "@storybook/react";
import App from "./App";
import { rest } from "msw";
import { GET_CHAMPION_DATA_RESPONSE, TFT_CHAMP_URL } from "@fixtures/tft";

export default {
  title: "Pages/App",
  component: App,
} as Meta<typeof App>;

const Template: StoryFn<typeof App> = () => <App />;

export const Default = Template.bind({});
Default.storyName = "기본 상태";
Default.parameters = {
  msw: {
    handlers: [
      rest.get(TFT_CHAMP_URL, (_, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ data: GET_CHAMPION_DATA_RESPONSE })
        );
      }),
    ],
  },
};

export const Loading = Template.bind({});
Loading.storyName = "로딩 중";
Loading.parameters = {
  msw: {
    handlers: [
      rest.get(TFT_CHAMP_URL, (req, res, ctx) => {
        return res(ctx.delay("infinite"));
      }),
    ],
  },
};

export const Error = Template.bind({});
Error.storyName = "에러 발생";
Error.parameters = {
  msw: {
    handlers: [
      rest.get(TFT_CHAMP_URL, (req, res, ctx) => {
        return res(ctx.status(400));
      }),
    ],
  },
};
```

msw 연동은 parameter 의 msw 속성으로 연결할 수 있습니다. 해당 handler 에 각각 원하는 상태를 연결해 주면 됩니다.

`정상` : status 는 200, 데이터는 설정한 mock 데이터로 출력됩니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/1727e3d7-3fa8-4abd-a257-b53946139e19/image.png)

`로딩 중` : 응답의 딜레이를 무제한으로 설정해서 로딩 상태를 출력합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/da023004-bdbb-41ac-8fb6-d9eeac39f36d/image.png)

`에러` : status 를 400 으로 설정해서 에러 상태를 유발합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/c7d57f2d-88cc-488a-932b-b3dae8b36cc3/image.png)

## 후기

storybook 작성했을 때 버전과 현재 신버전간에 차이가 있어서 해당 dependency 해결에 시간이 많이 걸렸던 것 같습니다. 또한 storybook 작성을 위해 컴포넌트를 구성하는데도 시간이 걸려서 최대한 단순하게 작성했습니다. 오랜만에 작성해서 헷갈리고 어려운 부분이 많이 있었지만 , 다음번에는 조금 더 자세한 페이지를 추가해서 신 버전으로도 작성해보고 싶은 마음도 들었습니다.

잘못된 부분이 있으면 알려주시면 감사드리겠습니다.
위 작업이 있는 repo 는 [여기](https://github.com/k1my3ch4n/msw)를 확인해주세요 !
