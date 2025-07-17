## 계기

기존 Vite + Monorepo 로 Blog 와 Portfolio 페이지를 만드는 프로젝트를 진행했었는데 , 해당 Monorepo 가 Vite 로 이루어져 있어서 검색 등에서 불리한 부분이 있었다. ( Blog 인데 검색이 안된다면 ... )

따라서 이를 해결하고 , 또 추가로 Nextjs 를 적용해보고자 하는 마음이 있어서 NextJs + Turborepo 를 사용해서 마이그레이션 하기로 했다 .

## CSR vs SSR

Vite + Monorepo 프로젝트는 기본적으로 CSR 을 지원하고 있었고 , 변경될 프로젝트는 기본적으로 SSR 을 지원하도록 설정하고자 했다. 그 전에 , CSR 과 SSR 의 차이는 무엇인지 간단하게 정리하려고 한다.

### CSR ( Client Side Rendering )

CSR 은 기본적으로 웹 페이지에 접속했을 때 실제 콘텐츠가 거의 없는 상태입니다. 이 때 서버로부터 기본적인 HTML 뼈대와 JS 파일들을 받습니다. 필요한 데이터를 서버에 API 요청을 통해서 비동기적으로 가져온 후 JS 파일들을 실행해서 DOM ( Document Object Model ) 을 생성 및 조작해서 렌더링된 웹 페이지가 제공됩니다.

CSR 의 장점으로는 최초 로딩 이후에 필요한 데이터만 서버에서 받아와서 클라이언트에서 업데이트 하기 때문에 빠르게 업데이트되고 , 사용자 경험이 부드럽습니다. 또한 서버 부하가 적고, 동적이고 인터랙티브한 UI 구현에 유리합니다.

다만 단점으로는 초기에 많은 데이터를 받아오다보니 초기 로딩이 느린 점이 있습니다. 또한 초기 HTML 에 콘텐츠가 거의 없기 때문에 검색에 불리하게 되고 따라서 SEO ( Searce Engine Optimization ) 에 불리합니다. 또한 요즘은 거의 없긴 하지만 , JS 가 실행되지 않는 환경이라면 콘텐츠를 볼 수 없습니다.

### SSR ( Server Side Rendering )

SSR 은 기본적으로 웹 페이지에 접속했을 때 서버로부터 `완전히 렌더링된 HTML` 과 `필요한 JS 파일` 을 전달받습니다. 브라우저는 이 HTML 을 즉시 화면에 표시합니다. 그 후 , JS 파일을 실행해서 HTML 에 추가로 부착해 기능을 활성화합니다. ( Hydration )

SSR 의 장점으로는 서버에서 완전히 렌더링된 HTML 을 받기 때문에 초기 로딩이 빨라서 사용자가 콘텐츠를 빠르게 확인할 수 있습니다. 또한 검색 엔진 크롤러가 이미 렌더링된 HTML 을 확인할 수 있기 때문에 SEO 에 유리합니다. 또 JS 가 실행되지 않는 환경에서도 HTML 이 존재하기 때문에 콘텐츠를 확인할 수 있습니다.

다만 단점으로는 페이지가 전환될 때 마다 서버에서 HTML 을 받아야 하기 때문에 전환 속도가 느릴 수 있습니다. 또한 서버가 모든 렌더링을 수행하기 때문에 서버 부하가 있고, 클라이언트와 서버측 코드를 나누어서 관리해야 해서 복잡해질 수도 있습니다.

### 결론

결국 블로그는 외부에서 게시글이 검색이 잘 되어야 하기 때문에 SSR 을 사용하는 것이 유리합니다. 따라서 SSR 을 사용하기 위해 Next + monorepo 형태로 마이그레이션 하기로 결정했습니다.

## SEO 를 위한 설정

Nextjs 를 적용한다고 해서 바로 설정이 완료되는 것이 아니라, 검색이 잘 되게 하기 위해서 따로 여러가지 설정을 추가해야 합니다.

### Metadata 설정

Nextjs 13+ App Router 에서부터는 layout.js 또는 page.js 파일에 `metadata` 객체를 선언해서 메타데이터를 설정할 수 있습니다. 또한 `generateMetadata` 함수를 통해서 동적 라우팅으로 생성되는 페이지에서 동적으로 메타데이터를 설정할 수 있습니다.

이 메타데이터는 검색 엔진 크롤러에게 정보를 제공해서 어떤 사이트인지 , 어떤 내용을 담고 있는지를 알려주는 역할을 합니다. 그래서 검색 결과 화면에서 해당 데이터를 표출해 줍니다. 따라서 사용자가 검색 엔진을 사용할 때 원하는 정보를 빠르고 정확하게 찾을 수 있도록 도와줍니다.

```js
// 정적 화면 예시
export const metadata: Metadata = {
  title: "김예찬's Blog",
  description: "김예찬's Blog",
};

// 동적 화면 예시
export async function generateMetadata({ params }: { params: BlogPostParams }) {
  const { postKey } = await params;

  const { data } = await prefetchPostData(postKey);

  if (!data || !data.post) {
    return {
      title: "게시글을 찾을 수 없습니다.",
      description: "요청하신 게시글을 찾을 수 없습니다.",
    };
  }

  const postData = data.post;

  return {
    title: `${postData.title}`,
    openGraph: {
      title: `${postData.title}`,
      type: "article",
    },
  };
}
```

### Sitemap 설정

사이트맵은 웹 사이트 내의 모든 페이지를 나열해 놓은 파일로, 검색 엔진이 효율적으로 크롤링하도록 돕는 역할을 합니다. 웹사이트의 모든 페이지를 알려줄 뿐만 아니라 불필요한 페이지를 방분하는 것을 줄이고, 업데이트된 것을 확인해서 다시 크롤링하도록 유도합니다.

NextJS 에서 App Router 를 사용하는 경우 , app 디렉토리 내부에 `sitemap.ts` 파일을 직접적으로 생성해서 적용할 수 있습니다 .

```js
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 동적 페이지
  const { data } = await prefetchHomeData();

  const dynamicUrls: MetadataRoute.Sitemap = data.posts.map(({ postKey }) => ({
    url: `${BASE_URL}/blog/${postKey}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // 정적 페이지
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return [...staticUrls, ...dynamicUrls];
}
```

기본적으로 생성되어 있는 정적 페이지와 key에 따라서 다르게 생성되는 동적 페이지 모두 sitemap 설정이 가능합니다. 해당 파일로 생성된 sitemap 은 `www.BASE_URL/sitemap.xml` 에서 확인할 수 있습니다.

### robot.txt 설정

`robot.txt` 파일은 검색 엔진 봇에게 사이트에서 어느 부분에 접근해야 하는지, 어느 부분에 접근하면 안되는지를 알려주는 역할을 합니다. 이는 웹사이트의 특정 페이지가 노출되는 것을 제어하는 역할을 합니다.

NextJS 에서 App Router 를 사용하는 경우 , app 디렉토리 내부에 `robots.ts` 파일을 직접적으로 생성해서 적용할 수 있습니다 .

```js
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: BASE_URL,
  };
}
```

- `userAgent` : 어느 검색 엔진 봇에 적용할 지를 선택합니다. `*` 의 경우, 모든 봇에 적용됩니다.
- `allow` : 어떤 페이지를 허용할지 선택합니다. `/` 의 경우, 모든 페이지에 크롤링을 허용합니다.
- `disallow` : 어떤 페이지를 접근 불가하게 할지 선택합니다.
- `sitemap` : sitemap 의 url 을 명시해 알려줍니다.

### 웹 사이트 설정 추가 ( Google Search Console )

이제 만든 사이트를 검색 엔진에 등록해서 검색될 수 있도록 해야 합니다. 대표적인 검색 엔진으로는 구글의 [Google Search Console](https://search.google.com/search-console/about) 과 네이버의 [Naver Search Adviser](https://searchadvisor.naver.com/) 가 있습니다. 해당 페이지에서 설정을 추가해서 검색 엔진 봇에서 이런 사이트가 있으니 검색시 나올 수 있도록 해달라고 요청하는 과정입니다. 해당 과정은 추후에 게시글로 추가하도록 하겠습니다.

## 후기

Next 를 사용하기로 마음먹고 가장 기대하고 관심있게 찾아본 부분이 바로 이 SEO 설정입니다. 어떻게 하면 이게 검색되고 사람들에게 보여줄 수 있는지 설정하면서 많은 재미를 느꼈고 즐겁게 작업했던 것 같습니다. 다음 게시글로 웹사이트 검색엔진 설정, 코드적 마이그레이션 등등을 작성해 보도록 하겠습니다.
