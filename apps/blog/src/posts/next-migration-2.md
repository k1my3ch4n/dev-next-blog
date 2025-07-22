## 개요

SEO 설정을 위해 `sitemap` `robots` 를 생성 후 , 웹 사이트 검색 엔진에서도 설정을 추가할 수 있습니다. 이 설정을 추가하면 검색 결과 페이지로 이동할 수 있는 링크를 표시하거나 웹 사이트가 제대로 크롤링되고 색인되는지 확인하고 관리할 수 있습니다. 또한 분석 도구들을 이용해서 어떤 검색어로 사용자들이 유입되는지 등을 분석해 SEO 전략을 개선할 수 있습니다.

## Google Search Console 설정

[Google Search Console](https://search.google.com/search-console/about) 은 구글에서 제공하는 검색 엔진 도구로, 사이트의 검색 트래픽 및 실적을 측정하고, 문제를 해결하며, Google 검색결과에서 사이트가 돋보이게 할 수 있다고 소개하고 있습니다. 각 검색 엔진마다 도구가 있고, 저는 구글을 통한 검색시 페이지가 나오도록 설정하고 싶어서 위 도구를 사용했습니다.

### 웹 사이트 등록

먼저 [Google Search Console](https://search.google.com/search-console/about) 에 들어가 로그인합니다. 그 후 좌측 상단의 속성 추가를 선택합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/36625417-27f7-4313-ba27-3913bd797718/image.png)

그 후 제시된 방법을 사용해 웹 사이트 소유권을 확인합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/f49e802b-da97-4f62-b47a-ae2efa3f7bdc/image.png)

이후 좌측 상단에서 등록된 도메인으로 웹 사이트 선택 가능합니다.

### 사이트맵 제출

이후 좌측 사이드바의 `색인 - 사이트맵` 을 선택하고 사이트맵 URL 을 제출합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/6bbbe883-8da8-486b-866b-b47864baf29e/image.png)

### ! 사이트맵 에러

위 사진처럼 현재 사이트맵 추가 시 `가져올 수 없음` 으로 등장하는 에러가 발생했습니다. 검색 및 Google Search Console 커뮤니티 를 확인해본 결과 위 상황이 생각보다 자주 발생하는 것으로 보입니다.

[Google Search Console 커뮤니티 1](https://support.google.com/webmasters/thread/283494820/%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%A7%B5-%EA%B0%80%EC%A0%B8%EC%98%AC-%EC%88%98-%EC%97%86%EC%9D%8C-%EB%AA%87-%EB%8B%AC%EC%9D%B4-%EC%A7%80%EB%82%98%EB%8F%84-%EA%B0%99%EC%9D%80-%EC%83%81%ED%99%A9?hl=ko)

[Google Search Console 커뮤니티 2](https://support.google.com/webmasters/thread/282179767/sitemap-%EA%B0%80%EC%A0%B8%EC%98%AC-%EC%88%98-%EC%97%86%EC%9D%8C-%EB%AA%87%EB%8B%AC%EC%A7%B8-%ED%95%B4%EA%B2%B0%EC%9D%B4-%EC%95%88%EB%8F%BC%EB%84%A4%EC%9A%94?sjid=5693265810737969060-NC)

[Google Search Console 커뮤니티 3](https://support.google.com/webmasters/thread/325010177/%EA%B5%AC%EA%B8%80-%EC%84%9C%EC%B9%98-%EC%BD%98%EC%86%94%EC%97%90-sitemap%EC%9D%84-%EB%93%B1%EB%A1%9D%ED%95%98%EB%A9%B4-%EA%B0%80%EC%A0%B8%EC%98%AC-%EC%88%98-%EC%97%86%EC%9D%8C-%EC%9D%B4%EB%9D%BC%EB%8A%94-%EC%97%90%EB%9F%AC%EB%A7%8C-%EB%9C%B9%EB%8B%88%EB%8B%A4?hl=ko)

위 결과 정상적으로 색인 생성되고, 접근이 가능하다면 무시해도 괜찮다는 의견이 있습니다. 오랜 기간이 걸쳐서 해결된다고는 하지만, 주기적으로 확인해야 할 것 같습니다.

### URL 검사 및 색인 요청

사이트맵이 등록되지 않았거나 , 혹은 더 빨리 색인을 요청할 수도 있습니다. 상단 검색창에서 특정 URL 을 입력하여 해당 페이지의 색인 상태, 모바일 친화성 등등 여러 정보를 확인할 수 있습니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/4566ad76-8362-4f57-b669-dc80e307aaba/image.png)

등록되지 않은 페이지의 경우 위처럼 나오게 되고, 아래 `크롤링 허용 여부` `색인 생성 허용 여부` 가 예로 나와있다면 색인 생성 요청이 가능합니다.

![](https://velog.velcdn.com/images/k1my3ch4n/post/17829c6b-9b7b-497a-a5d2-a9265066fbcc/image.png)

이처럼 색인 생성을 요청 후 , 시간이 지나면 색인 등록이 완료됩니다.

### 분석

좌측 실적 또는 페이지에서 페이지가 얼마나 노출되었는지 , 어떻게 클릭되었는지 등을 확인할 수 있습니다. 해당 데이터를 통해서 SEO 전략을 개선해 더 많이 노출시키고 접속할 수 있도록 할 수 있습니다.

## 후기

SEO 설정도 처음이었고 웹 사이트 설정도 처음이었는데 어떤 구조로 어떻게 등록되는지 알 수 있게 되어서 의미있는 시간이었습니다. 다음에는 마이그레이션하면서 변경된 구조에 대해서 작성해보도록 하겠습니다.
