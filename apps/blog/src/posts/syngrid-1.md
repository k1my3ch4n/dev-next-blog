## 개요

[프로젝트 싱긋](https://syngrid.k1my3ch4n.xyz/) 은 여러 디바이스 뷰포트를 캔버스에 배치하고, 외부 웹사이트를 각 뷰포트에 동시에 로드하여 반응형 디자인을 비교할 수 있는 툴입니다. 개발을 진행하면서 크게 두 가지 기술적 도전이 있었습니다.

첫 번째는 **외부 웹사이트를 iframe 안에서 어떻게 로드할 것인가** 였습니다. 대부분의 웹사이트는 보안 정책으로 iframe 로딩을 차단하고 있어, 단순히 `<iframe src={url} />` 으로는 아무것도 보이지 않습니다.

두 번째는 **여러 뷰포트 간의 스크롤을 어떻게 동기화할 것인가** 였습니다. 프록시를 통해 same-origin으로 전환하더라도, 실시간으로 뷰포트 간 상태를 연동하는 구조가 필요했습니다.

이 게시글에서는 두 문제를 해결하기 위해 구현한 **HTTP 리버스 프록시 서버**와 **postMessage 기반 스크롤 동기화** 구조를 정리합니다.

---

## iframe의 보안 제약

브라우저는 외부 사이트의 iframe 로딩을 막기 위해 두 가지 보안 헤더를 사용합니다.

- **X-Frame-Options**: `DENY` 또는 `SAMEORIGIN` 으로 설정된 경우 해당 사이트는 iframe에서 렌더링되지 않습니다.
- **Content-Security-Policy (CSP)**: `frame-ancestors` 지시어로 허용된 출처만 iframe 삽입이 가능합니다.

또한 iframe의 출처가 부모 페이지와 다를 경우, DOM 접근과 스크롤 이벤트 수신이 cross-origin 정책에 의해 차단됩니다. 스크롤 동기화를 구현하려면 iframe 내부의 스크롤 이벤트를 부모 페이지가 감지할 수 있어야 하는데, 이 부분이 핵심 문제였습니다.

## HTTP 리버스 프록시 구현

### 요청 흐름

문제를 해결하기 위해 서버 측 리버스 프록시를 구축했습니다. 클라이언트는 외부 URL에 직접 접근하는 대신, 자체 서버의 프록시 엔드포인트를 경유합니다.

```
브라우저 iframe
  │
  ├─ GET /api/proxy?url=https://example.com
  │
  ▼
server.ts (HTTP 서버)
  │  pathname이 "/api/proxy"로 시작하면
  │  Next.js 대신 프록시 핸들러로 라우팅
  │
  ▼
proxy.ts — handleProxyRequest()
  │
  ├─ 1. URL 파라미터 추출
  ├─ 2. SSRF 보안 검증
  ├─ 3. fetch()로 원격 콘텐츠 가져오기
  ├─ 4. 차단 헤더 제거 (x-frame-options, CSP)
  ├─ 5. Content-Type별 분기 처리
  └─ 6. 클라이언트에 응답
```

클라이언트 측에서는 단 한 줄의 변경으로 적용됩니다.

```tsx
// 변경 전: 직접 URL 로딩 (CORS/CSP 차단)
<iframe src={url} />

// 변경 후: 프록시 경유 (same-origin)
<iframe src={`/api/proxy?url=${encodeURIComponent(url)}`} />
```

프록시를 통해 외부 콘텐츠가 자체 도메인(`/api/proxy`)으로 서빙되므로, 브라우저 입장에서는 same-origin 요청이 됩니다. 이로써 차단 헤더를 제거할 수 있고, DOM과 스크롤 이벤트에도 접근이 가능해집니다.

### SSRF 방지

프록시 서버는 외부에서 임의의 URL을 전달받아 서버가 요청을 대신 보내는 구조이기 때문에, **SSRF(Server-Side Request Forgery)** 공격에 취약할 수 있습니다. 공격자가 `http://192.168.1.1` 같은 내부 네트워크 주소를 URL로 전달하면, 서버가 내부 인프라에 접근하는 경로로 악용될 수 있습니다.

이를 방지하기 위해 `validateProxyUrl()` 함수를 구현했습니다.

```ts
async function validateProxyUrl(raw: string): Promise<URL | null> {
  // 1. URL 파싱 — 유효하지 않으면 null 반환
  // 2. 프로토콜 검사 — http: 또는 https: 만 허용
  // 3. 호스트명 검사 — localhost 차단
  // 4. DNS 조회 — 실제 IP 확인
  // 5. 내부 IP 차단 (127.x, 10.x, 172.16-31.x, 192.168.x, 169.254.x 등)
}
```

URL 파라미터만 검사하는 것이 아니라 DNS 조회 후 실제 IP를 확인하는 것이 핵심입니다. DNS 리바인딩 공격처럼, 외부처럼 보이는 도메인이 내부 IP를 가리키는 경우까지 차단할 수 있습니다.

### URL 재작성

프록시를 통해 HTML을 서빙하면 새로운 문제가 생깁니다. HTML 안의 리소스 경로들(`src`, `href`, `url()` 등)이 원본 도메인을 기준으로 작성되어 있기 때문에, 프록시를 거치지 않고 원본 서버에 직접 요청을 보내게 됩니다. 이렇게 되면 다시 CORS 에러가 발생합니다.

이를 해결하기 위해 HTML과 CSS 내의 URL을 프록시 경로로 재작성합니다.

```
원본 URL                          → 변환 결과
─────────────────────────────────────────────────────
data:, blob:, javascript:, #      → 변환 안 함 (스킵)
//cdn.example.com/style.css       → /api/proxy?url=https://cdn.example.com/style.css
https://example.com/img.png       → /api/proxy?url=https://example.com/img.png
/assets/logo.svg                  → /api/proxy?url=https://example.com/assets/logo.svg
./main.js                         → /api/proxy?url=https://example.com/page/main.js
```

재작성 대상은 HTML 속성(`src`, `href`, `action`, `poster`), `srcset`, 인라인 스타일, `<style>` 태그, 별도 CSS 파일의 `url()` 참조입니다.

한 가지 주의할 점이 있었습니다. 정규식 기반 재작성은 `<script>` 내부 JavaScript 코드도 패턴에 매칭될 수 있어, JS 코드가 의도치 않게 손상될 위험이 있습니다. 이를 방지하기 위해 **스크립트 보호** 방식을 적용했습니다.

```
① <script>...</script> 블록을 플레이스홀더로 치환  (추출)
② HTML 속성 / CSS url() 리라이팅                  (안전한 영역만)
③ 플레이스홀더를 원래 <script> 블록으로 복원       (복원)
```

또한 `<base>` 태그는 사용하지 않았습니다. `<base href="https://example.com">` 을 추가하면 상대 경로 문제는 해결되지만, 이미 재작성된 `/api/proxy?url=...` 경로가 `<base>` 태그에 의해 원본 도메인으로 다시 해석되어 CORS 에러를 유발했기 때문입니다.

### Content-Type별 처리

응답 타입에 따라 처리 방식을 다르게 했습니다.

| Content-Type               | 처리 방식                                     |
| -------------------------- | --------------------------------------------- |
| `text/html`                | 전체 읽기 → URL 재작성 + 스크립트 주입 → 응답 |
| `text/css`                 | 전체 읽기 → `url()` 참조 재작성 → 응답        |
| 기타 (JS, 이미지, 폰트 등) | 스트리밍 패스스루                             |

JS, 이미지, 폰트 같은 바이너리 리소스는 변환이 불필요하므로 스트리밍으로 바로 전달합니다. HTML과 CSS만 전체를 읽어서 재작성 후 응답합니다.

## postMessage 기반 스크롤 동기화

프록시를 통해 same-origin 으로 전환되더라도, iframe 내부와 외부는 여전히 별도의 window 컨텍스트입니다. 스크롤 이벤트를 부모 페이지로 전달하려면 `postMessage` API를 사용해야 합니다.

### 브릿지 스크립트 주입

프록시가 HTML을 재작성할 때, `</head>` 앞에 브릿지 스크립트를 주입합니다.

```js
// 스크롤 이벤트 → 부모에 postMessage
window.addEventListener("scroll", () => {
  window.parent.postMessage(
    {
      type: "proxy:scroll",
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight: document.documentElement.clientHeight,
    },
    "*",
  );
});

// 콘텐츠 크기 변경 감지
new ResizeObserver(() => {
  window.parent.postMessage(
    {
      type: "proxy:resize",
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    },
    "*",
  );
}).observe(document.documentElement);
```

이 스크립트가 iframe 내부에서 실행되면서, 스크롤이 발생할 때마다 부모 페이지로 스크롤 위치와 콘텐츠 크기를 전달합니다.

추가로 `history.pushState` / `replaceState` 를 패치하여 프록시된 페이지 내부에서 SPA 라우팅이 발생할 때의 cross-origin `SecurityError` 를 방지했습니다.

### 부모 페이지의 수신 처리

부모 페이지의 `useScrollSync` 훅에서 `message` 이벤트를 수신하여 다른 뷰포트에 동기화합니다.

```ts
window.addEventListener("message", (event) => {
  if (event.data.type === "proxy:scroll") {
    // 스크롤 비율 계산 후 다른 뷰포트에 동기화
  }
});
```

스크롤 위치를 절댓값이 아닌 **비율**로 동기화한다는 점이 중요합니다. 각 뷰포트의 콘텐츠 높이가 다를 수 있기 때문에, 절댓값 동기화는 뷰포트마다 다른 위치를 보여주게 됩니다. 비율 기반으로 처리하면 모든 뷰포트가 상대적으로 같은 위치를 보여줄 수 있습니다.

## Socket.IO 실시간 협업

스크롤 동기화 외에도 Socket.IO 기반으로 실시간 협업 기능을 구현했습니다.

- **커서 공유**: 참여자들의 커서 위치를 실시간으로 공유합니다.
- **뷰포트/URL 동기화**: 한 참여자가 뷰포트를 추가하거나 URL을 변경하면 모든 참여자에게 동기화됩니다.
- **역할 시스템**: `OWNER` / `EDITOR` / `VIEWER` 세 가지 역할로 권한을 관리합니다. VIEWER는 URL 변경이나 뷰포트 조작이 불가능합니다.
- **초대 시스템**: 디스코드 스타일의 초대 확인 페이지를 통해 참여자를 초대할 수 있습니다.

## 마치면서

이 프로젝트에서 가장 인상 깊었던 부분은 **문제가 연쇄적으로 이어진다**는 점이었습니다. iframe 차단을 해결하기 위해 프록시를 만들었고, 프록시를 만드니 URL 재작성 문제가 생겼고, URL 재작성을 하니 JS 코드 손상 문제가 생겼습니다. 한 문제를 해결할 때마다 다음 문제가 드러나는 방식으로 구현이 진행됐습니다.

그 과정에서 **보안**을 항상 함께 고려해야 한다는 점도 새삼 실감했습니다. 단순히 프록시를 열어두는 것만으로는 SSRF 취약점이 생기고, 이를 막기 위해 DNS 조회까지 포함한 검증 로직이 필요했습니다.

postMessage와 비율 기반 스크롤 동기화는 생각보다 깔끔한 해결책이었습니다. cross-origin 제약을 피하면서도 실시간 동기화를 구현할 수 있었고, 비율 기반 처리 덕분에 뷰포트 크기가 달라도 일관된 동기화가 가능했습니다.

## 참고문헌

- [X-Frame-Options - MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/X-Frame-Options)
- [Content-Security-Policy - MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy)
- [Window.postMessage() - MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/postMessage)
- [ResizeObserver - MDN](https://developer.mozilla.org/ko/docs/Web/API/ResizeObserver)
- [SSRF Prevention Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
- [Socket.IO 공식 문서](https://socket.io/docs/v4/)
