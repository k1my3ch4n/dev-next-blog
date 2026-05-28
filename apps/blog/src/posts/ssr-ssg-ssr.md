## 개요

블로그를 Next.js + Cloud Run 환경에서 운영하면서 렌더링 전략을 SSR → ISR/SSG → SSR 로 바꾸는 과정을 겪었습니다. 처음에는 단순하게 SSR 로 운영했고, 이후에 성능 개선을 위해 ISR 및 SSG 를 적용해봤지만, Cloud Run 의 특성과 맞지 않아 결국 다시 SSR 로 돌아오게 됐습니다. 이 과정에서 마주친 문제들과 이유들을 정리해보려고 합니다.

## Next.js 렌더링 방식 정리

본격적으로 설명하기 전에 이번 여정에서 다룬 렌더링 방식들을 간단히 정리합니다.

### SSR ( Server Side Rendering )

요청이 들어올 때마다 서버에서 HTML 을 생성합니다. Next.js App Router 에서는 `dynamic = "force-dynamic"` 으로 설정하거나, 데이터 페칭에 `cache: "no-store"` 를 사용하면 됩니다.

- **장점** : 항상 최신 데이터를 반환한다. 빌드 시점에 데이터가 필요 없다.
- **단점** : 매 요청마다 DB 조회가 발생해서 서버 부하가 있다.

### ISR ( Incremental Static Regeneration )

빌드 시점에 페이지를 정적으로 생성하고, 설정한 주기(`revalidate`) 마다 또는 온디맨드로 재생성합니다.

- **장점** : 캐시된 페이지를 제공하므로 응답이 빠르다. 주기적으로 또는 원할 때 갱신할 수 있다.
- **단점** : 캐시가 유효한 동안에는 오래된 데이터가 노출될 수 있다. 캐시 상태 관리가 복잡해진다.

### SSG ( Static Site Generation )

빌드 시점에 모든 페이지를 정적으로 생성합니다. Next.js 에서 `generateStaticParams` 와 `revalidate = false` 를 함께 사용하는 방식입니다.

- **장점** : CDN 이나 서버에서 정적 파일을 그대로 제공하므로 가장 빠르다.
- **단점** : 빌드 시점에 모든 데이터를 확보해야 한다. 배포 없이는 새 콘텐츠를 추가할 수 없다.

## 1단계 : SSR 로 시작

블로그 초기 구성 당시 렌더링 방식은 SSR 이었습니다. App Router 에서는 `dynamic = "force-dynamic"` 을 명시하면 매 요청마다 서버에서 DB 를 조회해서 페이지를 렌더링합니다.

```ts
// apps/blog/src/app/blog/[postKey]/page.tsx
export const dynamic = "force-dynamic";
```

블로그이기 때문에 게시글이 자주 바뀌지 않지만, 일단 가장 단순한 방식으로 운영을 시작했습니다. 매 요청마다 DB 를 조회하니 항상 최신 데이터를 보여줄 수 있었고, 복잡한 캐시 설정도 필요 없었습니다.

## 2단계 : ISR → SSG 로 전환

SSR 로 운영하던 중 "게시글은 자주 바뀌지 않는데 매 요청마다 DB 를 조회해야 할까?" 라는 생각이 들었습니다. 그래서 캐싱을 도입하기로 했습니다.

### ISR 적용

먼저 ISR 을 적용했습니다. 1시간마다 페이지를 재생성하도록 `revalidate = 3600` 으로 설정했습니다.

```ts
export const revalidate = 3600;
```

그러나 1시간 캐시는 블로그 특성상 너무 자주 재생성되는 것 같았고, 배포할 때마다 캐시를 즉시 무효화하고 싶었습니다.

### 온디맨드 ISR 로 변경

배포 직후 캐시를 즉시 갱신하기 위해 온디맨드 ISR 방식으로 변경했습니다. `revalidate = false` 로 설정해 자동 재생성을 끄고, 배포 후 API 를 직접 호출해서 캐시를 무효화하는 방식입니다.

```ts
// apps/blog/src/app/api/revalidate/route.ts
export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");

  if (apiKey !== process.env.VALIDATED_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/", "layout");

  return NextResponse.json({ revalidated: true });
}
```

GitHub Actions 에서 배포가 완료된 후 이 API 를 호출하도록 CI 파이프라인에도 추가했습니다.

### generateStaticParams 로 완전한 SSG 시도

캐시를 완전히 활용하기 위해 `generateStaticParams` 를 추가해서 빌드 시점에 모든 게시글 페이지를 정적으로 생성하도록 했습니다.

```ts
export const revalidate = false;

export async function generateStaticParams() {
  try {
    const posts = await getPosts("", "DESC");
    return posts
      .filter((post) => isPostVisible(post) && post.postKey !== null)
      .map((post) => ({ postKey: post.postKey as string }));
  } catch {
    return [];
  }
}
```

## 3단계 : SSG 에서 마주친 문제들

완전한 SSG 로 전환하면서 예상치 못한 문제들이 연달아 발생했습니다.

### 문제 1 : 빌드 시점에 DB 연결 불가

첫 번째 문제는 Docker 빌드 환경에서 DB 에 연결할 수 없다는 것이었습니다.

블로그 DB 는 GCP 내부 네트워크에서만 접근 가능합니다. GitHub Actions 에서 Docker 이미지를 빌드할 때는 GCP 네트워크 외부에서 실행되기 때문에 DB 에 연결이 되지 않았습니다. 결과적으로 `generateStaticParams` 가 빈 배열을 반환해서 어떤 게시글 페이지도 정적으로 생성되지 않았고, 모든 게시글 URL 에서 404 가 발생했습니다.

이를 해결하기 위해 빌드 시점에만 GCP 방화벽을 임시로 열고, DB 접속 정보를 Docker 빌드 인자로 전달하는 방식으로 우회했습니다.

```yaml
# .github/actions/auto_deploy/action.yml
- name: Build Docker image
  run: |
    DB_USER=$(gcloud secrets versions access latest --secret=db-user)
    # ... 다른 시크릿들도 동일하게 가져옴

    docker build \
      --build-arg DB_USER="$DB_USER" \
      # ... 다른 빌드 인자들
      -t $IMAGE_NAME:latest -f apps/blog/Dockerfile .
```

```dockerfile
# apps/blog/Dockerfile
ARG DB_USER
ARG DB_HOST
# ...
ENV DB_USER=$DB_USER
ENV DB_HOST=$DB_HOST

RUN turbo run build --filter=blog
```

이 방식으로 빌드 시점에 DB 에 연결해서 게시글 목록을 가져오고, 각 게시글 페이지를 정적으로 생성하는 데는 성공했습니다. 하지만 다른 문제가 기다리고 있었습니다.

### 문제 2 : Cloud Run scale-to-zero 후 포스트 누락

Cloud Run 은 트래픽이 없으면 컨테이너를 0 으로 줄이는 scale-to-zero 기능이 있습니다. 비용 절감과 자원 효율화를 위한 기능인데, SSG 방식과 충돌하는 문제가 있었습니다.

SSG 로 생성된 정적 페이지들은 빌드 시점에 생성되어 컨테이너 이미지 내부의 `.next/` 디렉토리에 포함됩니다. scale-to-zero 이후 새 컨테이너가 시작되면 이미지의 `.next/` 파일은 그대로 있습니다. 그러나 **빌드 이후에 DB 에 새로 추가된 게시글**은 `generateStaticParams` 에 포함되지 않았기 때문에 정적 파일이 없습니다.

새 게시글의 경우 `notFound()` 를 반환하게 되어 있어서 404 가 발생했습니다. 온디맨드 ISR 로 `revalidatePath` 를 호출해서 캐시를 갱신하는 방식을 시도했지만, 배포 직후에는 작동했어도 이후 scale-to-zero 로 인해 컨테이너가 재시작되면 ISR 캐시가 초기화되어 동일한 문제가 반복됐습니다.

```
배포 완료
  → revalidatePath("/", "layout") 호출
  → 캐시 갱신 성공
  → 트래픽 없음 → scale-to-zero 발동
  → 새 컨테이너 시작 → 캐시 초기화
  → 새 게시글 요청 → 404
```

핵심 문제는 **Cloud Run 은 컨테이너 기반이라 상태를 유지하지 않는다** 는 점입니다. Next.js 의 ISR 캐시는 컨테이너 내부 메모리와 파일 시스템에 저장되는데, scale-to-zero 로 컨테이너가 재시작되면 캐시가 초기화됩니다. 따라서 ISR 의 이점이 사실상 사라집니다.

## 4단계 : 다시 SSR 로 복귀

여러 번의 시도 끝에 결론을 내렸습니다. Cloud Run 환경에서는 SSG 나 ISR 을 유지하는 것이 오히려 복잡성을 높일 뿐이라는 것입니다.

- 빌드 시점에 DB 연결이 필요하다는 것 자체가 복잡성을 높임
- scale-to-zero 로 캐시가 초기화되어 ISR 의 이점이 없음
- 새 게시글을 추가했을 때 정적 경로가 없어서 404 가 발생하는 문제는 근본적으로 해결하기 어려움

결국 `generateStaticParams` 와 온디맨드 revalidate API 를 모두 제거하고, 다시 `dynamic = "force-dynamic"` 으로 돌아왔습니다.

```ts
// 최종 상태
export const dynamic = "force-dynamic";
```

이렇게 하면 매 요청마다 DB 를 조회하지만, 항상 최신 데이터를 보여주고, 새 게시글도 즉시 반영되며, 빌드 시점에 DB 연결도 필요 없습니다. CI 파이프라인도 단순해졌습니다.

## 마치면서

렌더링 전략은 "어떤 방식이 더 좋은가" 가 아니라 **"어떤 인프라 환경에서 운영하는가"** 에 따라 달라진다는 것을 이번 경험으로 배웠습니다.

SSG 는 Vercel 처럼 Next.js 에 최적화된 플랫폼에서는 매우 강력합니다. ISR 캐시가 영구적으로 유지되고, 온디맨드 revalidation 도 안정적으로 작동합니다. 하지만 Cloud Run 처럼 컨테이너를 scale-to-zero 로 관리하는 환경에서는 캐시가 날아가기 때문에 ISR 의 이점이 반감됩니다.

블로그의 게시글 수가 그렇게 많지 않고 트래픽도 크지 않은 상황에서 SSR 의 성능 비용은 허용 가능한 수준입니다. 오히려 단순한 SSR 이 유지보수 측면에서 더 나은 선택이었습니다. 때로는 가장 단순한 방법이 가장 좋은 방법이라는 것을 다시 한번 느꼈습니다.

## 참고문헌

- [Next.js 공식 문서 - Rendering](https://nextjs.org/docs/app/building-your-application/rendering)
- [Next.js 공식 문서 - generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- [Next.js 공식 문서 - revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
- [Cloud Run 공식 문서 - Scale to zero](https://cloud.google.com/run/docs/configuring/min-instances)
