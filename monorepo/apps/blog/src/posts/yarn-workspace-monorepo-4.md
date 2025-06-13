## NPM publish

NPM publish 란 , 자신의 프로젝트 또는 패키지를 NPM ( Node Package Manager ) 에 배포하는 것을 말합니다. 이전 글에서 workspace 에서 common 패키지를 가져오는 방식을 사용했는데 , 해당 방법은 두가지의 문제점을 가지고 있었습니다.

1. common 을 업데이트 하는 순간 , common 을 사용하고 있던 모든 프로젝트에 변경점이 생기게 됩니다. 만약 다른 버전을 사용하고 싶어도 자동을 변경이 되어버리기 때문에 불가능합니다.
2. 또한 common 이 변경되어서 기존 project에서 오류가 발생했을 때 , 기존 project 에서는 변경사항이 없으므로 오류 추적에 어려움이 생길 수 있습니다.

따라서 , common 패키지를 npm 에 배포해두고 버전으로 관리하고 , workspace 의 다른 프로젝트들은 npm 버전을 가져와서 사용한다면 자동으로 변경되지도 않고 , 배포 시점에 common 의 버전을 올리게 되어서 오류 추적이 용이합니다.

## NPM 가입 및 토큰 발급

NPM 에 배포하기 위해서는 NPM 아이디와 토큰이 필요합니다.

https://www.npmjs.com/

위 페이지에 접속해서 가입 후 , 프로필 클릭 후 Access Tokens 를 클릭합니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/1a2b6c23-702f-4b28-8eef-0da705547880/image.png)

그 후 , `Generate New Token` > `classic` 선택 후 , 이름을 지정하고 아래 타입에서 `publish` 를 클릭하고 생성합니다.

## 로컬 npm 로그인

local shell 에서 아래 명령어를 입력합니다.

```shell
npm login
```

그 후 , 엔터를 입력하면 아래와 같은 창이 등장하는데 , 이메일로 온 otp 를 입력해주시면 됩니다.

로그인이 되었는지 확인하는 방법은 , shell 에 아래와 같은 명령어를 입력합니다.

```shell
npm whoami # who am i ?
```

![](https://velog.velcdn.com/images/k1my3ch4n/post/4a2a4e3b-d22e-4df4-8490-516e9766b0b5/image.png)

## package 이름 변경 , private 설정 제거

project의 이름으로 package 가 publish 되는데 , 기존 publish 되어있는 package 와 이름이 겹치면 배포할 수 없다. 따라서 package 의 이름을 변경해 주어야 한다.

package 의 이름이 겹치는지 여부는 아래 명령어로 확인할 수 있다.

```shell
npm info {package_name}
```

![](https://velog.velcdn.com/images/k1my3ch4n/post/8565ab1b-cbbe-404e-89a7-c8897a6ea4fd/image.png)

만약 이미 publish 되어있는 이름이라면 , 이처럼 그 package에 대한 정보가 나온다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/00ab1509-64e5-4b7f-bf27-cfc68a94d3b6/image.png)

하지만 이처럼 중복되지 않는다면 , 이런 식으로 에러가 발생하니 그 이름으로 수정하면 된다.

또한 , `package.json` 에서 `private : true` 옵션을 제거해야 한다.

## NPM publish

이제 `yarnrc` 파일에서 토큰을 지정해줄 차례이다. 아까 발급한 토큰을 `yarnrc` 파일에 추가한다.

```yaml
npmAuthToken: '{token}'
```

그후 배포할 폴더에 들어가서 `npm publish` 를 입력하는 방법도 있지만 , 계속 들어가야 하는 귀찮음이 있으므로 배포할 폴더에 script 를 추가해준다.

```json
...
"scripts": {
    ...
    "publish": "npm publish",
    ...
  },
...
```

그 후 , `yarn {package_name} publish` 를 입력하면 ..

![](https://velog.velcdn.com/images/k1my3ch4n/post/51974f1b-5a75-4dcb-abb8-9bd8bda48115/image.png)

이런식의 메시지가 등장하면 성공이다. npm 에서 본인 package 확인해보면

![](https://velog.velcdn.com/images/k1my3ch4n/post/842d2f77-6c47-4c71-b3cc-9e74dee010f7/image.png)

이렇게 추가가 된 것을 볼 수 있다.

## package import 및 버전 업데이트

이제는 기존에 사용하던 것 대신 , npm 에서 import 해줘야 한다.
import 할 package 에 들어가서 `{package_name} : {version}` 의 형식으로 입력 후 , `yarn install` 을 진행한다. 그 후 , 가져오는 곳에서 이름을 변경해주면 ...
![](https://velog.velcdn.com/images/k1my3ch4n/post/71116920-ccc9-4ec0-965e-9edf17eb08dc/image.png)

이런식으로 추가되게 되고 , 정상적으로 실행 및 작동된다.

만약 버전을 업데이트 하고 싶다면 , 똑같이 공통 파일을 수정한 후 , 버전을 변경해서 publish 를 진행해야 한다. 이때도 편하게 명령어를 사용해서 버전을 업데이트 할 수 있는데 ,

```shell
yarn {package_name} version {patch | minor | major}
```

위 명령어를 통해서 직접 `package.json` 을 수정하지 않고도 버전을 올릴 수 있다. 이후 똑같이 publish 를 진행하면 새로운 버전이 publish 된다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/1846c83c-8518-42b2-a31f-011a22039115/image.png)

## 후기

오랜만에 npm publish 다 보니 헷갈리는 부분이 있어서 헤멘 부분이 있었지만 , 결과적으로는 잘 마무리되어서 다행이다. 이전 workspace 의 여러 단점으로 인해 npm 을 사용해서 버전을 관리하는 방법을 추가했지만 , 결과적으로는 이 방법을 실무에서 사용할 수는 없었다. 그 이유는 **돈 문제**인데, 돈을 내지 않으면 public 으로만 관리할 수 있다. 물론 안전한 상태로 배포가 된다고는 하지만 public 이라는 점이 부담이 되었고 , 결국은 이 방법을 사용하지 않았다. 하지만 내 개인 프로젝트 등등으로 boilerplate 를 생성하는데는 좋은 방법일 것 같아서 따로 개인 component 등을 만드는 작업은 진행할 것 같다.

npm publish 를 사용하지 못하고 다른 방법을 찾던 와중에 그 대체안으로 `github` 에서 제공하는 `github package publish` 를 사용하게 되었다. 아마 다음 글로 작성이 될 것 같은데 , github에서 일정 공간 private 하게 배포 지원을 해준다. 때문에 돈을 내지 않고도 private 한 배포가 되어서 유용하게 사용 가능하다.

잘못된 부분, 추가해야 하는 부분이 있다면 말씀해주시면 감사드리겠습니다 .
해당 repo는 [여기](https://github.com/k1my3ch4n/Vite-monorepo)에서 확인 가능합니다 .
