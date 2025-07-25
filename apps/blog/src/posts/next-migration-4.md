## 개요

이번 Next 를 적용하면서 기존 Sass 대신 Tailwindcss 를 적용하게 되었습니다. 이에 적용하는 과정과 적용하면서 느낀점을 적어보려고 합니다.

## Tailwindcss 란 ?

[Tailwindcss](https://tailwindcss.com/) 는 많은 유틸리티 클래스로 이루어진 CSS 프레임워크 입니다. 기존 css 프레임워크들이 미리 정의된 컴포넌트 자체를 추가하는 방식이었다면, tailwindcss 는 보다 저수준의 유틸리티 클래스를 제공해 해당 클래스를 HTML 마크업 내부에 추가해서 디자인을 구성하는 방식입니다.

저수준의 유틸리티 클래스를 제공하다 보니 개발자가 css 파일을 직접 작성하지 않고 HTML 내부에서 빠르게 효율적인 UI를 완성할 수 있습니다. 일관적으로 정해진 디자인 시스템을 유지하기도 쉬울 뿐만 아니라, `tailwind.config.js` 파일 등으로 커스터마이징을 제공합니다. 또한 css 파일을 작성하지 않다 보니 HTML 내부에서 빠르게 스타일을 수정할 수 있어 편리합니다.

다만 많은 유틸리티 클래스를 사용하기 때문에 초반에 러닝커브가 존재합니다. 또한 복잡한 디자인을 만들어야 하는 경우 HTML 코드가 길어질 수 있어 가독성이 떨어질 수 있다는 점이 존재합니다. 하지만 익숙해지면 굉장히 편리하고 효율적으로 느껴집니다.

## Tailwindcss 초기 설정

[Next.js Tailwind docs](https://v3.tailwindcss.com/docs/guides/nextjs) 를 참고해서 초기 설정을 진행했습니다.

### 의존성 설치

```shell
// tailwind 3.4.17 버전 사용
pnpm add -D tailwindcss@3.4.17 postcss autoprefixer
```

- [postcss](https://postcss.org/) : postcss 는 JS 플러그인을 통해서 css 를 변화시키는 툴입니다. 실제 적용될 때 작동하는 css 후처리기 입니다. 여기에 여러 플러그인들을 조합해서 변화 과정을 설정할 수 있습니다.
- [autoprefixer](https://www.npmjs.com/package/autoprefixer) : Autoprefixer 는 많은 플러그인들 중 가장 많이 사용되는 플러그인으로, css 속성에 벤더 프리픽스를 자동으로 추가해줘서 여러 브라우저에서 css 속성이 도입되기 전에도 설정할 수 있도록 해줍니다.

### tailwind.config.js 설정

tailwind.config.js 를 사용하면 css 의 기본 동작 방식을 변경하고 커스텀 디자인을 구축할 수 있습니다.

```js
// tailwind.config.js
const config = {
  content: [
    ...
  ],
  theme: {
    extend: {},
	colors: {},
  },
  plugins: [],
};

export default config;
```

- `content` : tailwind 가 css 생성하기 위해 스캔할 파일 경로를 지정합니다. 해당 파일 경로가 아니라면 tailwind 가 적용되지 않습니다.
- `theme` : 기존 tailwind 테마를 확장하거나 , 커스텀 스타일을 지정할 수 있습니다.
  - `extend` : 기존 테마를 두고, 추가로 테마를 지정할 때 사용합니다.
  - `colors` : 기존 테마를 덮어씁니다. 만약 잘못 지정하게 되면 이전 다른 테마가 모두 사라지기 때문에, 주의가 필요합니다.
- `plugins` : tailwind 에 추가적인 기능을 사용할 수 있는 플러그인들을 추가할 수 있습니다.

### global css 설정

tailwind 를 사용하기 위해서 global css 파일에 아래와 같이 선언해 주어야 합니다.

```css
@tailwind base;

// css reset 파일
@include "./reset.css";

@tailwind components;
@tailwind utilities;
```

- `base` : tailwind 가 제공하는 베이스 스타일을 설정합니다. 웹 브라우저의 기본 스타일을 리셋해서 일관적으로 시작될 수 있도록 합니다.
- `components` : 사용자가 `@apply` 등으로 정의한 컴포넌트 클래스가 사용될 수 있도록 추가합니다. 중복으로 사용되는 것을 줄이고, 재사용성을 높일 수 있습니다.
- `utilities` : tailwind 가 제공하는 핵심 유틸리티 클래스를 제공합니다. 이 지시문이 없으면 tailwind 가 작동하지 않습니다.

이 때, 개인적인 reset 파일을 추가하고 싶다면 `base` 와 `components` 사이에 작성되어야 합니다. 만약 reset 파일이 base 이전에 추가되었다면 , base 로 인해서 다시 리셋되어 변경될 가능성이 있습니다.

## css 작성

이것만 완료하면 설정은 끝입니다 ! 이제 HTML 파일에 직접 추가해서 실행할 수 있습니다 .

```js
const Bold = ({ children }: { children: React.ReactNode }) => {
  const classNames = "py-[3px] px-[2px] font-semibold";

  return <span className={classNames}>{children}</span>;
};

export default Bold;
```

간단한 예시인데, `Bold` 라는 컴포넌트에 className 을 추가한 모습입니다.

- `py-[3px]` : 상하 padding 을 3px 로 설정합니다.
- `px-[2px]` : 좌우 padding 을 2px 로 설정합니다.
- `font-semibold` : 폰트를 굵기를 semibold ( 600 ) 로 설정합니다

위처럼 className 에 추가하기만 하면 css 가 설정됩니다. 정말 간편합니다 !

## 후기

이번에 처음으로 tailwind 를 사용해 보았는데, 굉장히 혁신적이고 편리해서 놀랐습니다. 초기 러닝커브가 있긴 하지만 css 작업을 많이 했다면 금방 적응할 수 있었고, css 작업 시간이 많이 줄었습니다. 앞으로 다른 프로젝트를 진행하더라도 tailwind 를 사용해 작업할 것 같습니다.
