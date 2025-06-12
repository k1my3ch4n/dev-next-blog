## 패치노트

버저닝을 진행했다면 , 버전만 찍는 것이 아니라 그 버전에 어떤 작업이 진행되었는지 패치노트를 작성해서 남겨두어야 한다. 단순히 버전만 찍으면 어떤 작업을 진행했는지 , 어떤 변경점이 있는지 알 수 없으므로 버전을 찍은 후 , 어떤 변경사항이 있는지를 남겨두어야 다음에 그 버전에 대한 것을 확인할 때 제대로 확인할 수 있다. 패치노트를 남기는 방법에는 여러 방법이 있지만 , 요즘 가장 많이 사용하는 `Notion` 을 이용하려고 한다. `Notion` 은 `Notion API` 제공하고 있고 , 이를 이용해서 PR이 merge 되었을 때 버전을 등록하고 패치노트도 자동화하려고 한다.
<br>

## Notion API

`Notion API`는 notion이 제공해주는 api로 , [공식 사이트](https://developers.notion.com/) 에서 확인할 수 있다. notion이 제공하는 데이터베이스나 , 여러 기능들을 사용할 수 있다. 여기서는 github와 연결해서 workflow 자동화를 이용하려고 사용했다. ( 추후에는 데이터베이스 기능도 사용해보고 싶다 )
<br>

## 사용 경험

이전 회사에서 통합적으로 같은 버저닝을 사용했는데 , 노션에 자동화로 모두 연결되어 있어서 특정 서비스가 배포될 때 쉽게 확인할 수 있다는 장점이 있었다. 이번 배포에 어떤 작업이 진행되었는지 , 어떤 버그픽스가 있는지 등등을 한번에 확인할 수 있고 이전 버전에 대한 관리 또한 잘 진행되어서 좋은 경험이었다. 그 경험을 떠올리면서 이번에 개인 노션에 자동화를 진행했다.
<br>

## notion API key 발급

가장 먼저 notion api key를 발급해야 한다. key는 [사이트](https://www.notion.so/my-integrations) 에서 발급할 수 있다. 가장 먼저 페이지에 로그인 후 들어가게 되면 아래와 같은 화면이 나타난다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/ea69c14a-d429-45b5-b7f1-13b79e710ea0/image.png)

여기서 **새 API 통합 만들기** 를 누르게 되면 워크스페이스 선택 후 이름 설정하고 발급 가능하다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/c140d092-8e91-4742-88ac-69246cd8bfa8/image.png)
![](https://velog.velcdn.com/images/k1my3ch4n/post/9bf321b5-eba7-4ae5-9c79-4cf3dd5fc25d/image.png)

<br>

## notion database 생성

패치노트로 사용할 페이지를 생성하고 , 데이터베이스 인라인을 통해 새로운 데이터베이스를 생성한다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/6e7655dd-8b89-4e45-9836-b0b237bffd7f/image.png)

그 후 데이터베이스 페이지로 이동하면 주소가 `https://www.notion.so/username/name1?v=name2` 의 형식으로 작성되게 되는데, 여기서 `name1` 이 `database id` , `name2` 가 `view id` 로 정해진다. 여기서 우리는 **`database id` 인`name1` 을 사용할 예정이다 ( 중요 )**

또한 데이터의 타입도 선언해주어야 하는데 , 기본적인 정보로 `배포 상태` , `배포 일시` , `개정 버전` 의 3가지 정보를 추가하려고 한다. 만약 이 타입이 일치하지 않으면 제대로 추가되지 않을 수 있다. 각각 속성 추가에서 추가할 수 있다.

- `배포 상태` : 속성 추가에서 `상태` 클릭 후 , 속성의 이름을 변경해준다.![](https://velog.velcdn.com/images/k1my3ch4n/post/0b05d966-24a3-4fa5-9c30-987fa2a49f4f/image.png)
- `배포 일시` : 속성 추가에서 `날짜` 클릭 후 , 속성의 이름을 변경해준다.![](https://velog.velcdn.com/images/k1my3ch4n/post/a49a4f13-42b2-4fc5-8147-e193f647ebdf/image.png)
- `개정 버전` : 기본 속성 중 제목의 이름을 변경해준다.![](https://velog.velcdn.com/images/k1my3ch4n/post/1e6e5d33-55ca-4681-9d02-28bcfcec7722/image.png)

<br>

## notion과 github 연동

이제 github와 notion을 연동할 차례다. 좌측 상단에 `설정과 멤버` 내부에 `내 연결` 을 들어가게 되면
![](https://velog.velcdn.com/images/k1my3ch4n/post/a20ee053-32ea-4dce-8684-15d1a2f78caf/image.png)

의 형식으로 되어있는데 , 여기서 위 사진처럼 github 를 찾아서 연동해주면 된다.
<br>

### 추가 : Make sure the relevant pages and databases are shared with your integration 에러

연동 후에 ` Make sure the relevant pages and databases are shared with your integration` 에러가 등장했다. 찾아보니 본인이 데이터베이스에 연결되어 있지 않아서 발생하는 현상이라고 한다.

[참고 링크](https://stackoverflow.com/a/75537092)

따라서 데이터 베이스 페이지에서 본인을 추가해주면 된다. 우측 최상단 `···` 버튼을 클릭 후 , `연결 항목` 에서 본인을 찾아서 추가해주면 된다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/f179b0a4-184c-46d1-96b4-66cd7d5e48b3/image.png)
<br>

## github secrets 추가

아까 발급받은 `notion api key` 를 github secrets에 추가해야 한다. api key 같이 중요하고 , 탈취되었을 때 위험이 있는 변수들은 secrets로 등록해서 숨겨야 한다. github는 workflow에서 사용되는 key 들을 `environment variables ( 환경변수 )` 또는 `secrets` 로 저장할 수 있도록 지원하고 있다.

github repo 로 들어가서 `settings > 좌측 Secrets and variables > actions` 에 들어가서 `new repository secrets` 를 클릭하면 아래와 같은 화면이 등장한다.
![](https://velog.velcdn.com/images/k1my3ch4n/post/496bc7a9-da0f-4af4-aec4-4fe002834e07/image.png)

![](https://velog.velcdn.com/images/k1my3ch4n/post/987dfb7c-3cf5-4041-8bf4-3338ac7dd129/image.png)

이후 사용할 변수명을 `Name` 에 , 발급받은 api key 를 `Secret` 에 입력 후 저장하면
![](https://velog.velcdn.com/images/k1my3ch4n/post/669d8a43-69cc-47ed-86fd-da63b1ff3851/image.png)

위처럼 Secrets가 추가되었다 !

<br>

## github workflow 추가

이전 글처럼 actions 폴더 안에 `notion_versioning` 폴더를 추가하고 `action.yml` 파일을 아래처럼 추가한다.

```yaml
name: notion_versioning

inputs:
  version:
    required: true
  api_key:
    required: true

runs:
  using: composite
  steps:
    - id: get-current-date
      shell: bash
      run: |
        sudo timedatectl set-timezone Asia/Seoul
        echo "date=$(date +"%Y-%m-%dT%H:%M:%SZ")" >> $GITHUB_OUTPUT

    - name: Use Notion API
      shell: bash
      run: |
        curl -X POST 'https://api.notion.com/v1/pages' \
          -H 'Authorization: Bearer ${{ inputs.api_key }}' \
          -H "Content-Type: application/json" \
          -H "Notion-Version: 2022-06-28" \
          --data '{
            "parent": {
              "database_id": "{databaseId}"
            },
            "properties": {
              "배포 상태": {
                "status": {
                  "name": "완료"
                }
              },
              "배포 일시": {
                "date": {
                  "start": "${{ steps.get-current-date.outputs.date }}",
                  "time_zone": "Asia/Seoul"
                }
              },
              "개정 버전": {
                "title": [
                  {
                    "type": "text",
                    "text": {
                      "content": "${{ inputs.version }}"
                    }
                  }
                ]
              }
            }
          }'
```

- `inputs` : `version` 은 패치노트에 작성될 새로운 버전을 , `api_keys` 는 저장한 api key 다.
- `get-current-date` : 패치노트에 시간 저장을 위해서 현재 시간을 계산해주는 단계이다. 추후에 패치노트에 작성될 때 시간을 함께 입력해주기 위해서 추가했다.
- `Use Notion API` : notion api 를 이용해서 데이터베이스에 추가하는 단계이다. `{databaseId}` 에 개인 `database id` 를 입력해주면 된다. 쉽게 생각하면 해당 url로 post하는 과정인데 , 토큰과 타입 입력 후 데이터를 추가해주는 과정이다. [공식 명세서](https://developers.notion.com/docs/working-with-databases) 를 참고하면 여러 rest api 형식으로 crud 실행이 가능하다.

그 후 , 이전 `auto_versioning.yml` 파일 아래에 다음을 추가해준다.

```yaml
- id: notion-versioning
  uses: ./.github/actions/notion_versioning
  with:
    version: ${{ steps.versioning.outputs.new_version }}
    api_key: ${{ secrets.NOTIONAPIKEY }}
```

- `notion-versioning` : 새로운 버전과 api key 를 변수로 전달해서 notion versioning을 진행합니다.

## pr 생성 후 merge

이후 pr을 생성 후 , merge 하게 되면
![](https://velog.velcdn.com/images/k1my3ch4n/post/c4e35bd8-f62c-4176-ba59-2546478d7e83/image.png)

위와 같이 성공하게 되고 , 노션 패치노트를 확인하면
![](https://velog.velcdn.com/images/k1my3ch4n/post/b97e5d1f-bbe6-4fbe-afa5-a048406db2bb/image.png)

새로운 버전이 자동으로 찍힌 것을 볼 수 있습니다.

## 후기

![](https://velog.velcdn.com/images/k1my3ch4n/post/60133bc0-2da9-4d93-8f10-18b7e01e9df1/image.png)
사실 merge 할때마다 꼭 하나씩 이슈가 생겨서 ... 생각보다 하나씩 풀다보니 git flow가 꼬이긴 했습니다. notion database 에서도 약간씩 다른 부분이 있어서 생각보다 어려운 작업이었지만 , 한번 자동화를 진행하면 다음부터는 신경쓰지 않아도 되어서 편리하다는 생각입니다. 추가로 패치노트에 태스크도 연결하게 된다면 더 편리하게 사용이 가능합니다. 아마 github actions는 이번이 마지막일 것 같고 , 다음에는 notion database가 재미있어 보여서 그쪽도 공부해보려고 합니다.

위 github actions가 있는 repo는 [여기](https://github.com/k1my3ch4n/Github-Actions) 에서 확인하실 수 있습니다.

## 출처

[notion developer](https://developers.notion.com/)
[공식 명세서](https://developers.notion.com/docs/working-with-databases)
[버그 수정 링크](https://stackoverflow.com/a/75537092)
