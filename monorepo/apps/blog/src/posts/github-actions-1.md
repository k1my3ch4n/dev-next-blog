## github action과 ci/cd

github 에서는 github actions 라는 서비스를 이용해 ci/cd 를 실행해주고 있습니다. ci/cd 는 쉽게 말하면 한 프로젝트에서 코드가 추가/삭제 등 변경되었을 때 지속적으로 `통합 ( Continuous Integration )` 해주고 `배포 ( Continuous Deployment )` 해주는 것으로 , 코드 빌드에 이상이 없는지 , 테스트에는 이상이 없는지 , 배포과정에서 문제는 없는지 등등을 체크해 줍니다.

이 과정을 물론 사람이 진행할 수 있지만, 매번 해줘야 해서 귀찮고 실수할 가능성이 있기 때문에 github actions를 이용해서 pull request 시 ci 자동화하는 방법을 소개합니다.

## 사용 경험

요즘은 github actions를 이용한 ci/cd 가 많이 대중화되어있는 것 같습니다. 이전 회사를 다닐 때도 많이 사용했는데 , actions를 이용해서 테스트 / 빌드 / 배포 모두 자동화로 진행했습니다. 추가로 auto versioning , tagging , fail message 등도 자동화로 진행했습니다. 이전에는 직접 수동으로 진행했었는데 , 사람이 진행하다보니 빼먹거나 잘못 등록하는 경우가 생겨서 수정해야 하는 경우가 생기고 , 그러다보니 더 신경쓸게 많아지는 느낌이 들었습니다. 그래서 자동화를 도입했는데 , 나중에는 패치노트 작성도 노션으로 자동화해서 진행했습니다. 자동화 하는 과정이 어렵지만 한번 진행해두면 그 이후에는 신경쓸게 없어서 오히려 시간 등등을 단축시킬 수 있었습니다.

## github actions 추가 방법

### 1. `.github` 폴더 추가

프로젝트의 맨 상위 폴더에 `.github` 폴더를 추가하고 , 그 안에 `workflows` 폴더를 추가한다.

### 2. `.github/workflows` 내부에 yml 파일 생성

`.github/workflows` 내부에 yml 파일을 생성한다. 나는 ci만 진행한다는 의미로 `ci.yml` 로 작성했다. 작성해야 하는 것은 크게 3가지로 나눌 수 있다.

- name : workflow의 이름을 지정할 수 있다.
- on : workflow가 시작되는 조건을 지정할 수 있다.
- jobs : workflow가 어떤 일을 하는지 명시해 줄 수 있다.

## pull request 에 ci 자동화 추가

- github actions는 기본적으로

### on 설정

pull request 가 열렸을 때 `( opened )` , 닫혔다가 다시 열렸을 때 `( reopened )` , 코드가 변경되었을 때 `( synchronize )` ci가 돌고 싶으므로 , 아래와 같이 추가했다.

```yaml
on:
  pull_request:
    types:
      - opened
      - reopened
      - synchronize
```

### jobs 설정

jobs의 경우 한번에 기본적으로는 여러 job들을 실행시킬 수 있다.

```yaml
jobs:
  job1: ~~
  job2: ~~
  job3: ~~
```

물론 특정한 방법으로 순서를 제어할 수도 있다. 다만 이번 경우에는 1가지만 사용한다.

```yaml
jobs:
  changes:
    if: github.event.pull_request.state != 'closed'
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        id: git_checkout
        uses: actions/checkout@v4

      - name: Setup node
        id: setup_node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: yarn

      - name: Install dependency
        id: install_dependency
        run: yarn install 2> >(tee log_${{ github.run_id }}.txt)

      - name: Run Build
        id: run_build
        run: yarn build 2> >(tee log_${{ github.run_id }}.txt)
```

- `changes`: job 의 이름으로 , 변경되었을 때 actions가 실행되게 하기 위해서 changes로 지어주었다.
- `if` : pr 이 closed가 아닌 경우에 actions가 진행되도록 설정했다.
- `runs-on` : actions 가 실행되는 환경을 설정한다. `ubuntu` , `macOS` 등등이 있는데 이번에는 `ubuntu-latest` 로 진행했다.
- `steps` : 각 작업에서 실행될 내용을 단계별로 설정한다.
  - `Checkout` : checkout 의 경우 빌드하거나 , 테스트하기 위해서 코드를 가져오는 과정이다.
  - `Setup node` : 가져온 코드를 실행하도록 Node.js 환경을 설정하는데 사용한다. 이번 경우 node 20 버전을 사용해서 20으로 설정했다. cache의 경우 yarn 패키지 매니저를 캐싱해서 , dependency를 중복으로 설치하는 것을 방지해서 실행 시간을 줄인다.
  - `Install dependency` : dependency를 설치한다.
  - `Run Build` : build 를 실행한다.

### github actions 실행

해당 변경사항을 push 후 , 간이 pr을 생성하면
![](https://velog.velcdn.com/images/k1my3ch4n/post/9b990a7e-99a9-4d26-9452-42b00af11e5d/image.png)

위와 같이 생성되고, github actions가 추가되게 된다. 커밋이 추가될 때마다 actions가 돌게 되고 , 위처럼 실패하는 경우와 성공하는 경우 각각 알려주게 된다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/20bf9db0-5dea-478c-8904-1d9cd04d02c8/image.png)

각 커밋 옆 아이콘 또는 actions에 들어가서 상세 내용을 볼 수 있는데 위 사진처럼 상세로 나오게 된다.

### 후기

실제 사용할 때는 그때그때 급하게 추가하느라 잘 모르는 부분이 많이 있었는데 , 이번 기회로 보다 상세히 어떤 작업을 하는지 알 수 있어서 좋았다. 앞으로 여기 위에 점점 쌓아가면서 여러 ci/cd 를 추가하고자 한다. 또한 [marketplace](https://github.com/marketplace?type=actions) 에 여러 사람들이 올려놓은 actions도 확인해 보려고 한다.

위 github actions가 있는 repo는 [여기](https://github.com/k1my3ch4n/Github-Actions) 에서 확인하실 수 있습니다.

### 출처

[공식 문서](https://docs.github.com/ko/actions/learn-github-actions/understanding-github-actions)
[GitHub Actions의 소개와 핵심 개념](https://www.daleseo.com/github-actions-basics/)
