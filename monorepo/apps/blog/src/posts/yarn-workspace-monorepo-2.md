## prettier , eslint 세팅

monorepo 에서 prettier , eslint 세팅하는 방법은 3가지가 존재합니다.

1. root 에서 한번에 설정
2. root 에서 기본적인 설정 후 , 내부에서 상세 설정
3. 내부에서 각각 상세 설정

개인적으로는 monorepo 를 사용한다면 , 불가피한 경우를 제외하고는 root에서 설정하는 것이 좋다는 의견입니다. 이전 글에서 말했듯이 , 코드 컨벤션 등을 맞추고 한번에 설정한다는 장점이 크게 다가와서 입니다. 다만 여러 프로젝트 사이에서 큰 차이 등이 존재한다면 , 2번을 이용해서 기본적인 설정 후 내부에서 설정하는 방법을 택할 수도 있을 것 같습니다. 다만 이 경우에는 추가적인 설정이 필요할 수도 있습니다. 이번 글에서는 root에서 한번에 설정하는 방법을 알아보려고 합니다.

## prettier 설정 과정

### `yarn plugin import typescript`

이 명령어는 타입 없는 dependency 의 `@type` 패키지를 자동으로 설치해주는 플러그인이다.
( yarn 4버전 이상부터는 기본적으로 설치되어 있다. )

### `yarn dlx @yarnpkg/sdks vscode`

vscode 에서 `pnp` 를 사용할 때 , 타입스크립트 동작을 위해서 필요하다. 아무런 설치가 되어있지 않은 상태에서 , monorepo 내부에 tsx, ts 파일을 들어가게 되면

![](https://velog.velcdn.com/images/k1my3ch4n/post/acbc1e14-2fa9-4a66-b893-5b0edb7ea753/image.png)

이런식으로 에러가 발생하게 된다. 타입스크립트가 있지만 pnp 모드에서 인식하지 못해서 발생하는 문제라 연결해 주어야 한다.

가장 먼저 , root 에 타입스크립트를 설치해준다.

```shell
yarn add typescript
```

그 후 , `@yarnpkg/sdks` 를 설치해준다. [공식문서](https://yarnpkg.com/getting-started/editor-sdks)

```shell
yarn dlx @yarnpkg/sdks vscode
```

그 후 , tsx 또는 ts 파일에서 `ctrl + shift + p` 를 입력 후 , `typescript 버전 선택` -> `작업 영역 버전 사용` 클릭하면

![](https://velog.velcdn.com/images/k1my3ch4n/post/997a82d6-c1a4-4a33-ad51-d6f51ee1b4bf/image.png)

![](https://velog.velcdn.com/images/k1my3ch4n/post/506617f4-13ee-43aa-86d2-b8f47804f44f/image.png)

정상적으로 출력된다.

### 1. prettier 설치

root 에서 prettier 를 설치한다.

```shell
yarn add -D prettier
```

그 후 , `.prettierrc.cjs` 파일을 추가한다. 나는 다음과 같이 추가했다.

```js
module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'always',
};
```

- `singleQuote` : `'` 를 사용할지 여부이다. `false` 인 경우 , `"` 를 기본으로 사용한다.
- `semi` : 세미콜론을 끝에 붙이는지 여부이다.
- `useTabs` : 스페이스 대신 tab을 사용할지 여부이다.
- `tabwidth` : 탭 너비 설정이다. ( 기본 2 )
- `trailingComma` : 여러 줄을 사용할 때 , 후행 콤마 사용하는 방식이다.
- `printWidth` : 줄 바꿈이 일어날 폭 너비를 지정한다.
- `braketSpacing` : 객체에서 괄호에 공백을 삽입하는지 여부이다.
- `arrowParens` : 화살표 함수에서 괄호를 사용하는 방식이다. 기본값이 `always` 다.

( 추가 )
만약 위 방법을 했는데 `prettier` 가 적용되지 않는다면 , `@yarnpkg/sdks` 재설치 후 타입스크립트를 다시 설정한다.

### 2. eslint 설치

`eslint` 의 경우 , `prettier` 보다는 프로젝트마다 변경되는 부분이 많다보니 2번처럼 root에 설정 후 , 내부에서 추가로 설정하는 경우도 많이 있다. 이번에는 root 에서 공통적으로 설정한다.

root 에서 `eslint` 를 설치한다.

```shell
yarn add -D eslint
```

그 후 , 프로젝트 내부에 공통적으로 존재하는 `.eslintrc.cjs` 파일을 root로 이동시킨다. 만약 없다면 , root에 파일을 생성하기만 하면 끝이다.

### 3. 빌드 및 실행

`yarn p1 build`
![](https://velog.velcdn.com/images/k1my3ch4n/post/7cf6f1be-3c2f-4a4c-b0c7-29a3dc7db50f/image.png)

`yarn p2 dev`
![](https://velog.velcdn.com/images/k1my3ch4n/post/d2ce952d-5b5a-421b-b3d3-f2a47f5992cf/image.png)

## 후기

monorepo에서 prettier 나 eslint의 경우 , 프로젝트마다 설정하지 않고 한번에 설정할 수 있어서 큰 장점이 되는 것 같다. 다음편에서는 공통의 component , hook 을 설정하는 경우를 작성해보려고 한다.

잘못된 부분이 있으면 알려주시면 감사드리겠습니다.
위 작업이 있는 repo 는 [여기](https://github.com/k1my3ch4n/Vite-monorepo)를 확인해주세요 !
