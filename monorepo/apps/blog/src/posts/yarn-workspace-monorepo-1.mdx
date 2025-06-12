## monorepo

monorepo 는 repo 를 구성하는 여러 방법중에 하나로 , 한 repository 내부에 여러 project 가 독립적으로 구성된 환경을 말합니다.

## 사용 경험

이전 회사에서 통합적으로 개발하던 프로젝트가 있었는데 , 그 프로젝트가 개별적인 두 프로젝트로 나누어지는 경우가 생겼습니다. 하지만 분리되는 경우에도 비슷한 디자인과 비슷하게 사용되는 코드가 존재해서 고민하던 와중에 monorepo를 선택하게 되었습니다. 사용해본 결과로는 아래와 같은 장단점이 존재했습니다.

### 장점

1. 비슷한 component, 비슷한 hook을 재사용할 수 있습니다. project1, project2 (이하 p1, p2 ) 에서 모두 사용되는 것들을 common 이라는 workspace에 두고 , 필요한 곳에서 재사용 가능해서 불필요하게 두번 선언할 필요가 없어져서 편리합니다.

2. 코드 컨벤션 통일에 용이합니다. p1, p2 가 한 repository 안에 존재하다보니 다른 프로젝트에서도 일정한 컨벤션으로 코드를 작성하기 쉬워지고 , 여러 프로젝트가 일정한 컨벤션을 유지하므로 개발팀 내부에서 코드를 이해하기도 쉬워지는 장점이 있습니다. 또 프로젝트를 옮겨가면서 일을 해야 하는 경우에도 그 간극을 넘나들기 쉬워집니다.

3. 공통으로 사용되는 모듈은 한번에 설치해서 사용가능합니다. 다만 단점에도 말하겠지만 동일하지 않은 버전의 모듈을 사용하는 경우에는 충돌이 발생할 수 있습니다. 따라서 이 부분에는 주의가 필요합니다.

### 단점

1. 동일하지 않은 버전의 모듈을 사용할 경우 충돌 문제가 있습니다. 만약 같은 모듈을 사용하지 않는 경우에는 프로젝트별로 합의가 필요할 수 있습니다.

2. 처음 설정 및 사용에 시간이 필요하고 , 이해 및 학습에 시간이 투자됩니다. 바쁘게 돌아가는 프로젝트의 경우 , 설치 및 적용이 힘들 수 있습니다.

여러 장단점이 존재하고 프로젝트의 규모에 따라서 사용이 힘들 수도 있지만 , 사용해본 경험으로는 굉장히 편리한 점이 더 많았습니다. 제 경험으로는 공통인 component 와 hook 을 만들 수 있다는 점이 가장 큰 장점으로 다가왔고 , dependency 가 하나만 설치되어도 된다는 점도 큰 장점이었습니다. 처음 적용할 때는 물론 여러 어려움이 있었지만 한번 적용을 잘 해두면 굉장히 편리하게 사용이 가능했습니다.

## yarn workspaces

[공식문서](https://classic.yarnpkg.com/lang/en/docs/workspaces/)

yarn 에서 monorepo를 사용하기 편리하도록 제공해주는 기능입니다. 하나의 repo에서 여러 project 를 관리할 수 있게 해주고 , dependency 를 관리해주어 편리하게 monorepo 세팅이 가능합니다.

## 설정 방법

- monorepo 설정시 yarn berry를 사용합니다. yarn berry 설정은 [문서](https://velog.io/@k1my3ch4n/vite-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-yarn-berry-pnp-%EC%A0%81%EC%9A%A9) 를 참고해 주세요.
- 이전에는 기존 파일에서 migration을 진행했었지만 , 이번 글에서는 새로 monorepo를 생성하는 과정을 담고 있습니다. 추후에 기회가 된다면 multirepo 에서 monorepo 로 전환하는 과정을 진행해보려고 합니다.

### 1. 기본 파일 설치

monorepo 를 생성하려는 폴더 내부에 아래와 같은 명령어를 통해 기본 파일을 생성합니다.

```shell
yarn init -y
```

위 명령어를 실행하면 기본 파일들이 설치되고 , `package.json` 파일에 아래와 같이 생성됩니다.

```json
{
  "name": {ProjectName},
  "packageManager": "yarn@4.1.1"
}
```

### 2. 패키지 추가

root의 `package.json` 파일에 아래와 같이 추가합니다.

```json
{
  ...
  "workspaces": {
    "packages": [
      "packages/**"
    ]
  }
  ...
}
```

monorepo 로 사용할 workspace 를 지정하는데 , packages 라는 폴더를 생성해서 그 안에 있는 파일을 monorepo로 관리한다는 의미입니다. 따라서 `packages` 폴더 생성 후 , 그 안에monorepo 로 사용할 파일들을 추가합니다. 저는 project1 , project2 를 vite로 추가했습니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/301ee895-b848-4ee7-af02-344d412f2137/image.png)

추가로 , 생성된 project 들의 `package.json` 내부의 관리할 프로젝트의 이름을 반드시 지정해주어야 합니다.

### 3. script 수정

root 에서 project를 실행하거나 빌드 등등의 작업을 할 때마다 `yarn workspace {project name} build` 의 형식으로 작성해야 하는 귀찮음이 있다. 또는 `cd ~` 를 이용해 접속해야한다. 이를 root 에서 진행하기 위해서 script를 수정해 주어야 한다.

```shell
  "scripts": {
    "p1": "yarn workspace project1",
    "p2": "yarn workspace project2"
  }
```

project1,2 에 접속하기 위해서 p1,p2 명령어를 지정해 주었다. 이렇게 지정해두면, 아래와 같은 방법으로 사용할 수 있다.

```shell
yarn p1 build	# project1 빌드
yarn p2 dev		# project2 실행
```

![](https://velog.velcdn.com/images/k1my3ch4n/post/95f855d8-0039-4e4b-ad65-68cd5a50a1fd/image.png)

![](https://velog.velcdn.com/images/k1my3ch4n/post/000acc67-92a8-43c7-ad64-9fa43ad5b5f0/image.png)

각각 프로젝트의 root 에서 간편하게 실행되는 모습이다.

### 4. `tsconfig.json` 수정

각 파일마다 개별로 `tsconfig.json` 을 설정할 수도 있지만 , 공통되는 부분이 있다면 `root` 에 지정해두고 가져와서 사용하는 방법도 있다. 여기서는 공통되는 부분을 `root`에 지정해두고 , 가져와서 사용하는 방법을 사용한다.

`root` 에 `tsconfig.json` 파일을 생성하고 , 아래처럼 입력한다.

```json
// root tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "references": [
    {
      "path": "./packages/project1"
    },
    {
      "path": "./packages/project2"
    }
  ]
}
```

- `compilerOptions` : `project1` `project2` 내부에서 공통인 부분을 추출해서 추가한다.
- `references` : `root` 에서 하위 package 내부의 `tsconfig` 가 어디에 존재하는지 알려주는 정보이다. 하위 root에서 하위 `tsconfig.json` 의 위치를 추가하면 된다.
- (선택) `exclude` : 컴파일러가 컴파일 하지 않을 파일을 추가한다.

이후 하위 폴더의 `tsconfig.json` 파일에서 `extends` 를 통해서 추가한다.

```json
{
  ...
  "extends": "../../tsconfig.json",
  "include": ["src"],
  ...
}
```

## 후기

기본 설정의 경우 크게 어려움이 없었지만 , 이후 라이브러리 설치 등의 과정에서 여러 오류가 있었던 기억이 있다. 이후 2편에서는 prettier , eslint 등 개발을 시작하기 전에 설정해야 하는 것들을 작성하려고 한다.

잘못된 부분이 있으면 알려주시면 감사드리겠습니다.
위 작업이 있는 repo 는 [여기](https://github.com/k1my3ch4n/Vite-monorepo)를 확인해주세요 !
