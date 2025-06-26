## GITHUB PACKAGE PUBLISH

[공식 문서](https://docs.github.com/en/packages/learn-github-packages/publishing-a-package)

이전 NPM publish 의 경우 , 돈을 내지 않으면 private 한 publish 는 불가능 했는데 , github 에서 제공하는 github package 의 경우 , 일정 크기만큼 private 하게 제공하고 있습니다. 만약 공통 파일의 크기가 크지 않고 , private 하게 관리해야 한다면 github package publish 가 그 해답이 될 수 있습니다.

## 사용 경험

이전 글에서도 작성했지만 , 전 회사에서 공통 파일의 크기가 그렇게 크지 않았고 private 하게 배포하고 싶은 마음이 있었기 때문에 github package가 좋은 선택이 되었습니다. github action 과 연결도 가능했고 , 공통 파일 관리가 쉬워져서 결과적으로는 가장 좋은 선택이 되었습니다. 다만 공통 파일의 크기가 큰 경우 비용을 지불할 수 있어서 그런 경우에는 NPM 에서 돈을 내고 private 서비스를 이용하는 경우와 비교해야 할 수도 있을 것 같습니다.

## github package 설정

### 토큰 발급

가장 먼저 github 토큰을 발급받아야 합니다. github 설정에 들어가서 `settings` > `developer settings` > `personal access tokens` > `tokens` 의 경로로 들어갑니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/105e1542-0dbb-4a70-bd03-90e7ddfc1a70/image.png)_settings 의 가장 아래에 developer settings가 존재합니다._

![](https://velog.velcdn.com/images/k1my3ch4n/post/0b84fdb2-5193-46ed-bbc0-0ea4c2ba867d/image.png)

그 후 , `generate new token` 을 클릭해서 새로운 토큰을 발급합니다. 여기서 가장 중요한 부분은 `read:package` `write:package` 권한이 있어야 한다는 점입니다. 물론 추후에 수정도 가능합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/1b5c67e6-d593-4955-8ada-08ccb1402626/image.png)

- `note` 는 토큰을 알아볼 수 있도록 간단한 설명을 입력해주면 좋습니다.
- `expiration` 의 경우 토큰 유효 기간인데 , `no expiration` 의 경우는 기간 제한 없는 토큰을 생성할 수 있습니다. 유효기간이 있다면 토큰이 계속 변경되어야 하는 점이 있어서 해당 방법도 괜찮은 것 같습니다. 다만 유효기간이 없는 만큼 해킹 등으로 취약할 수도 있어서 주의깊게 사용이 필요합니다.
- `write:packages` 를 클릭하면 다른 조건들이 자동으로 체크됩니다. 현재가 기본 옵션이고 , 다른 조건들이 필요하다면 맞춰서 체크하면 될 것 같습니다. 관련 정보는 [여기](https://docs.github.com/ko/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) 를 참고해 주세요.

그 후 , 토큰을 발급하면 됩니다.

### common `package.json` 수정

package 배포를 위해서 `package.json` 을 아래와 같이 수정합니다.

```json
{
  "name": "@{username}/common",
  ...
  "repository": {
    "type": "git",
    "url": "https://github.com/{username}/{repo-name}.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  },
  ...
}
```

- `name` : 배포를 위해서 이름을 수정해야 합니다. `@{username}/{package-name}` 의 형태로 작성하는데 , 만약 조직이라면 `username` 대신에 `organization-name` 을 추가해야 합니다.
- `repository` : 배포될 repogitory 의 정보를 나타냅니다. git 을 사용중이므로 type은 git , url 은 배포할 `username` 또는 `organization-name` 과 `repo-name` 을 차례로 입력해줍니다.
- `publishConfig` : 그냥 npm 이 아닌 , github 배포이므로 해당 url을 추가해줍니다.

### yarnrc 파일 수정

배포를 위해서 `.yarnrc` 파일도 수정해줘야 합니다.

```yml
---
npmRegistries:
  'https://npm.pkg.github.com':
    npmAuthToken: { github token }
    npmAlwaysAuth: true

npmScopes:
  { username }:
    npmAlwaysAuth: true
    npmAuthToken: { github token }
    npmRegistryServer: 'https://npm.pkg.github.com'
```

- `npmRegistries` : 특정 registry 에서 받아올 때 추가하는 설정입니다. github 배포이므로 url 을 github 로 지정해주고 , 토큰과 인증을 추가합니다. [공식문서](https://yarnpkg.com/configuration/yarnrc#npmAlwaysAuth)
- `npmScopes` : 특정 패키지를 가져오기 위한 설정입니다. 마찬가지로 `username` 에는 `organization-name` 이 추가될 수 있습니다.

그 외 , 패키지의 이름이 변경되었으므로 root 에서 경로도 수정해 줍니다.

### npm 로그인

배포를 위해서 npm 로그인이 선행되야 합니다. [공식문서](https://docs.github.com/ko/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages) 에서는 아래와 같이 로그인하도록 설정하고 있습니다.

```shell
$ npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
```

namespace 에는 본인의 github 를 추가합니다. 그 후 , 로그인할 때 username 은 본인의 name , password 에는 아까 발급한 토큰을 추가하면 됩니다.

### 배포

배포는 동일합니다. npm 과 같이 `publish` 명령어를 통해 배포합니다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/88e211a3-9b23-43c0-914e-0146eb1ceac2/image.png)_성공_
![](https://velog.velcdn.com/images/k1my3ch4n/post/8802a2df-f07a-4f51-8f08-71a89aa920c4/image.png)_실패_

같은 버전이 올라가 있거나 , 여러 이유로 실패하면 아래 사진처럼 에러가 발생합니다.

그 후 , github package 를 확인해보면

![](https://velog.velcdn.com/images/k1my3ch4n/post/86a52459-1827-4f50-9340-00b5b79834e8/image.png)

이와같이 추가되었고 , 버전이 찍힌 것을 알 수 있습니다.

### import

이후 p1 으로 돌아와서 , import 를 위해 `package.json` 을 수정합니다.

```json
"dependencies": {
  ...
  "@{username}/{package-name}": "0.0.1",
  ...
},
```

또한 , import 한 파일에서도 경로를 수정해줍니다.

```
import { useCount } from '@{username}/{package-name}/hooks';
```

위와같은 형식으로 import 후 실행해보면 정상적으로 실행되는 것을 볼 수 있습니다.

## 후기

github package 배포의 장점은

1. npm 배포가 되어서 버전관리가 되면서 ,
2. 무료로 private 하게 배포 가능하다

는 점입니다. 다만 크기가 커질 경우에는 돈을 내야해서 npm 에서 지불하는 것이 나을 수도 있습니다. 하지만 이 조건을 만족한다면 충분히 사용할만한 가치가 있는 것 같습니다.

저는 monorepo로 배포하기 위해서 package 를 사용했지만 , 다시 생각해보면 굳이 monorepo 를 사용해야 했나 ? 라는 생각이 듭니다. 오히려 package 배포를 위한 repo 를 만들었다면 monorepo 의 어려운 세팅을 적용하지 않아도 되어서 더 편리할 것 같습니다. 만약 다음에 작업을 하게 된다면 분리해서 작업할 것 같네요.

잘못된 부분, 추가해야 하는 부분이 있다면 말씀해주시면 감사드리겠습니다 .
해당 repo는 [여기](https://github.com/k1my3ch4n/Vite-monorepo)에서 확인 가능합니다 .
