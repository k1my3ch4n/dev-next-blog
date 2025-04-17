## versioning

개발을 진행하다 보면 커밋이 쌓이고, 그러다가 예전에 어떻게 작업했는지 찾아야 하는 경우가 생긴다. 또는 개발 버전과 실제 배포 ( 서비스 ) 버전이 다른 경우가 있어서 , 그 경우에 따라서 다르게 관리해야할 필요성이 있다. 이때 사용하는 것이 versioning 인데 , 각 커밋이나 특정 장소에 버전을 입력해두고 , 각 서비스별로 버전을 관리한다. 각 서비스별 , 프로젝트별로 다른 버저닝을 사용하지만 가장 대중적으로 많이 사용되는 것이 SemVer ( Semantic Versioning ) 다.

## SemVer

[공식문서](https://semver.org/)
![](https://velog.velcdn.com/images/k1my3ch4n/post/426b7f54-6598-4e2b-b696-165227e15d54/image.png)

Semantic Versioning ( 이하 semver ) 은 major , minor , patch 로 나눌 수 있다. 각각 변경사항에 따라서 버전을 수정하지만, 기본적인 틀은 벗어나지 않는다. 하지만 결국 버전업의 상태 / 상황은 프로젝트별, 서비스별로 달라질 수 있다. 실제로 회사를 다닐때 해당 버저닝의 규칙만 3 ~ 4번정도 변경했던 것 같다. 마지막에 최적화된 방법은 아래와 같았다.

- major : 이전 버전과 호환되지 않는 새로운 버전으로 변경사항이 생길 경우 , 1 올린다.
- minor : 배포되기 전 확인 ( QA ) 되는 과정이 있었는데 , 해당 서버로 배포되는 경우 1 올린다.
- patch : 확인 서버로 배포된 버전에 fix가 필요한 경우 , 해당 변경사항을 수정하고 1 올린다.

## auto versioning

말 그대로 위의 과정을 자동화한 것이다. 아이디어는 배포가 진행되면 마지막 버전을 가져오고 , 특정 flag ( branch 이름 등 ) 을 이용해서 minor와 patch를 확인해서 증가시킨다. 버저닝의 경우 굉장히 자주 일어나고 , 그러다보니 개발자가 직접 등록하는 경우 귀찮기도 하고 실수도 많이 생긴다. 이러한 과정을 자동화하면 실수도 줄일 수 있고 , 귀찮지 않아서 매우 편한 경험이었다. 아래에서는 이 자동화 과정을 적용하는 것을 적어보려 한다.

## 사용 경험

이전 회사에서 굉장히 잦은 버저닝 회의를 진행했었는데 , 그 배경에는 크게 2가지가 있었다. 처음에는 모노레포로 전환하면서 각각 다르게 버저닝을 관리해야하는 부분이었고 , 두번째로는 전사적으로 일정한 버전을 가져가기 위해서 회의를 진행했었다. 중간중간에도 변경되는 부분이 있었는데 그때마다 팀원들끼리 모여서 몇시간동안 회의한 경험들이 있다. 그 후 방향이 정해지면 자동화를 통해서 버저닝을 진행했는데 , 버저닝 관련해서 신경쓰지 않아도 되어서 너무 편리했다. 추후에는 자동으로 노션에 추가해주는 부분도 진행했는데 모두가 버전을 확인하기 쉬워서 굉장히 좋은 경험이었다.

## github actions 추가 방법

2 단계로 나누어서 추가한다. 첫번째는 이전 버전을 가져오는 action , 두번째는 그 버전에서 1올려서 버전을 추가하는 과정이다.

### 1. 이전 버전을 가져오는 action

`.github` 폴더에 `actions` 폴더 만들고 , action을 추가한다. 이전 버전을 가져오므로 , `get_latest_version` 이라는 폴더 생성 후 내부에 `action.yml` 파일을 생성하고 , 아래와 같이 입력한다.

```yaml
name: get_latest_version

outputs:
  version:
    value: ${{ steps.get-tag.outputs.result }}

runs:
  using: composite
  steps:
    - id: get-tag
      shell: bash
      run: |
        git fetch --all --tags

        tag=$(echo `git tag -l --sort -v:refname "v*" --merged HEAD | head -n 1` | cut -d/ -f2)

        echo latest tag: $tag

        echo "result=$tag" >> $GITHUB_OUTPUT
```

- `outputs` : 해당 action을 수행하고 version이라는 값을 다른 action에서 쓸 수 있도록 저장한다.
- `using: composite` : 여러 단계를 수행하기 위한 명령어
- `shell: bash` : bash 쉘을 이용해서 명령을 수행한다는 의미

run 의 경우는 다음과 같다.

- 가장 먼저, 모든 태그를 가져온다.
- 그 후 , 역순으로 정렬하고 `v ~ ` 형태의 태그를 가져와서 가장 최신 태그를 가져와서 tag에 저장한다.
- 터미널에 가장 최근의 태그를 출력한다.
- tag를 output 에 저장하도록 전달한다.

### 2. 이전 버전에서 증가한 버전을 만들기

마찬가지로 actions 폴더에 `versioning` 폴더를 추가하고 , `action.yml` 파일 생성 후 아래와 같이 입력한다.

```yaml
name: versioning

inputs:
  segment:
    required: true
  previous:
    required: true
  description:
    required: true

outputs:
  new_version:
    value: ${{ steps.versioning.outputs.new_version }}

runs:
  using: composite
  steps:
    - id: commit-info
      shell: bash
      run: |
        echo "commit_id=$(echo `git log -n 1 --pretty=format:%H` | cut -c -12)" >> $GITHUB_OUTPUT
        echo "username=$(echo `git log -n 1 --pretty=format:%an`)" >> $GITHUB_OUTPUT
        echo "email=$(echo `git log -n 1 --pretty=format:%ae`)" >> $GITHUB_OUTPUT

    - id: versioning
      shell: bash
      run: |
        version=$(echo ${{ inputs.previous }} | cut -d 'v' -f2)
        major=$(echo $version | cut -d '.' -f1 )
        minor=$(echo $version | cut -d '.' -f2 )
        patch=$(echo $version | cut -d '.' -f3 )

        if [[ ${{ inputs.segment }} == 'minor' ]]
        then
          _new_version=$(echo v$major.$((minor+1)).0)
        elif [[ ${{ inputs.segment }} == 'patch' ]]
        then
          _new_version=$(echo v$major.$minor.$((patch+1)))
        else
          exit 1
        fi

        echo "new version: $_new_version"
        echo "new_version=$_new_version" >> $GITHUB_OUTPUT

    - id: push-tags
      shell: bash
      run: |
        git config --global user.name "${{ steps.commit-info.outputs.username }}"
        git config --global user.email ${{ steps.commit-info.outputs.email }}
        git tag -a ${{ steps.versioning.outputs.new_version }} -m "${{inputs.description}}"
        git push origin --tags
```

- `inputs` : versioning에 사용되는 3개의 변수다.
  - `segment` : `minor` 인지 , `patch` 인지를 결정한다.
  - `previous` : 이전 버전을 나타낸다.
  - `description` : PR 의 title 을 가져온다.
- `outputs` : 새 버전을 가져온다.
- `commit-info` : merge commit이 가장 마지막에 붙게 되는데 , 해당 merge commit 의 `id , username , email` 을 가져온다. 해당 정보는 다음 버저닝에 사용된다.
- `versioning` : 이전 버전을 가져온 후 , `segment` 에 따라서 버저닝을 진행한다.
- `push-tags` : 새로운 버저닝을 진행한다.

### 3. PR이 머지될때 , 해당 버저닝을 수행하는 actions 생성

`.github` 의 `workflows` 폴더 내부에 `auto_versioning.yml` 파일을 생성 후 아래와 같이 입력한다.

```yml
name: auto_versioning

on:
  pull_request:
    types:
      - closed

jobs:
  changes:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
      - id: get-tags
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - id: get-latest-version
        uses: ./.github/actions/get_latest_version

      - id: versioning
        uses: ./.github/actions/versioning
        with:
          segment: patch
          previous: ${{ steps.get-latest-version.outputs.version }}
          description: ${{ github.event.pull_request.title }}
```

pull-request 가 닫히고 , merged event가 발생하면 해당 action이 동작한다.

- `get-tags` : 소스코드를 가져오기 위해 checkout을 진행한다. 이때 , `fetch-depth: 0` 으로 모든 기록을 가져온다. 추가하지 않으면 , 가장 최근 커밋만 가져온다.
- `get-latest-version` : 위에서 만든 `get_latest_version` 를 사용해서 최근 버전을 가져온다.
- `versioning` : 변수들과 함께 버저닝을 진행한다. 일단은 `patch` 버전만 증가시키기 위해서 `segment` 에 `patch`를 넣어주고 , 이전 버전과 `description` 도 추가해준다.

## PR 생성 후 merge

위 변경사항을 push 후 , pr 을 생성한다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/d52ba789-ff93-426b-bd7a-6e116962a1a1/image.png)

그 후 , `merge pull request` 를 누르게 되면
![](https://velog.velcdn.com/images/k1my3ch4n/post/1319f54c-ff29-48c1-bb79-225878c4b2de/image.png)

아래와 같은 에러가 발생한다 ! 해당 오류에 대해서 찾아보니 , workflow에 권한이 추가되어있지 않아서 발생하는 현상이라고 한다. [참고 링크](https://stackoverflow.com/questions/72851548/permission-denied-to-github-actionsbot)

따라서 `settings > actions > general > Workflow permissions` 에서 `Read and write permissions` 을 선택해준다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/ed91e99e-a51a-4c52-9388-014636bee1c4/image.png)

그후 actions에서 실패한 action 클릭 후 , `Re-run jobs` 를 클릭하면

![](https://velog.velcdn.com/images/k1my3ch4n/post/e43226d4-ed47-42ec-97d2-9aace1256b4c/image.png)

성공적으로 versioning이 진행되고 tag가 찍힌 모습을 볼 수 있다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/604300aa-6da0-485e-b217-0bb9352b7646/image.png)

## 후기

이전에 버저닝이 너무 자주 바뀌어서 헷갈리고 복잡한 부분이 많이 있었는데 , 간단한 방법으로 정리할 수 있어서 좋은 시간이었던 것 같다. 특히 혼자 개발할 때도 버전을 잘 정리하고 싶었는데 , 그 목표도 이룬 것 같아서 뿌듯하다. 다음 작업으로는 notion에 버저닝을 추가하는 작업을 진행하려고 한다. 그렇게 되면 패치노트도 작성할 수 있을 것 같아서 더 본격적인 프로젝트가 진행될 것 같다.

위 github actions가 있는 repo는 [여기](https://github.com/k1my3ch4n/Github-Actions) 에서 확인하실 수 있습니다.
