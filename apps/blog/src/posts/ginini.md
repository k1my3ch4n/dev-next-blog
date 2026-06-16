# 내 사진을 기니피그로 — Ginini 개발기

## 개요

SNS 프로필 사진 하나를 바꾸는 것만으로도 피드 분위기가 달라진다. 그런데 막상 귀여운 프로필 이미지를 직접 만들려면 디자인 툴을 열어야 하고, 아이패드가 있어야 하고, 시간이 필요하다. 그냥 내 얼굴을 넣으면 알아서 귀여운 캐릭터로 바꿔줬으면 좋겠다는 생각이 계속 들었다.

마침 AI 이미지 생성 모델이 비약적으로 발전하면서 "이게 지금 가능하겠다"는 타이밍이 왔다. 단순히 사진을 카툰화하는 서비스는 이미 많다. 차별화 포인트가 필요했다. 그러다 "동물상"이라는 키워드가 떠올랐다.

"고양이상이에요", "강아지상이에요" — 우리가 사람 인상을 묘사할 때 쓰는 이 표현을 그대로 기니피그 캐릭터에 녹여주면 어떨까? 단순한 카툰 변환이 아니라, **"내 느낌이 살아있는 기니피그 프로필"** 을 만들어주는 서비스. 그것이 **Ginini**의 출발점이었다.

이 글은 Ginini를 기획하고 개발하면서 겪은 기술적 의사결정들, 특히 AI 파이프라인 설계와 프롬프트 엔지니어링 과정을 정리한 기록이다.

---

### 서비스 개요

Ginini는 사용자가 자신의 사진을 업로드하면 AI가 얼굴 특징을 분석하고, 선택한 동물상(고양이상, 강아지상 등)을 반영한 귀여운 기니피그 프로필 캐릭터를 생성해주는 웹 서비스다.

플로우는 간단하다.

```
사진 업로드 → 원형 크롭 → 성별 + 동물상 선택 → AI 변환 → 결과 확인/공유
```

핵심 포지셔닝은 **"정확한 변환"이 아닌 "특징을 반영한 기니피그 프로필 캐릭터 생성기"** 다. 완벽하게 똑같이 만들려는 시도보다, 내 분위기와 인상이 담긴 귀여운 캐릭터를 만드는 것이 목표였다.

---

### 기술 스택

| 항목             | 선택                                       |
| ---------------- | ------------------------------------------ |
| Framework        | Next.js 16 (App Router)                    |
| Language         | TypeScript                                 |
| Styling          | Tailwind CSS v3                            |
| State Management | Zustand                                    |
| Data Fetching    | TanStack Query                             |
| Architecture     | Feature-Sliced Design (FSD)                |
| AI 분석          | Google Gemini 2.5 Flash Lite               |
| AI 생성          | Replicate — `black-forest-labs/flux-2-pro` |
| Rate Limit       | Upstash Redis                              |
| 이미지 저장      | Vercel Blob                                |
| 배포             | Vercel                                     |

---

### 아키텍처 — Feature-Sliced Design

프로젝트가 작아도 처음부터 구조를 잡고 시작했다. 선택한 방식은 **FSD(Feature-Sliced Design)** 이다.

FSD는 레이어를 `app → views → widgets → features → entities → shared` 순으로 명확하게 나누고, 상위 레이어만 하위 레이어를 참조할 수 있다는 단방향 의존성 규칙을 갖는다. 덕분에 "이 코드는 어디에 있어야 하지?"라는 질문의 답이 항상 명확하다.

```
src/
├── app/          # 라우팅 + API Routes (백엔드 프록시)
├── views/        # 라우트별 화면 조립
├── widgets/      # 독립적인 UI 블록 (ConverterWidget 등)
├── features/     # 사용자 상호작용 단위 (convert-to-guinea, image-upload)
├── entities/     # 비즈니스 도메인 모델 (image-session Zustand Store)
└── shared/       # 공용 컴포넌트, 유틸, API 클라이언트
```

중반부에 리팩토링을 거치면서 `route.ts`에 몰려있던 로직을 각 레이어로 분리했다. `analyzeFace`, `buildPrompt`, `generateImage`, `persistResult`가 각각 독립 모듈로 나뉘었고, `route.ts`는 이들을 오케스트레이션하는 얇은 레이어로 남았다.

---

### AI 파이프라인 — img2img에서 text2img로

초기 설계는 `flux-kontext-pro` 모델을 사용한 **img2img** 방식이었다. 사진을 직접 모델에 입력해서 기니피그로 변환하는 아이디어였는데, 결과 품질 편차가 너무 컸다. 같은 사진을 넣어도 결과가 들쭉날쭉했고, 실패율도 높았다.

핵심 문제는 img2img 방식이 "사람 얼굴"이라는 컨텍스트를 그대로 받아 처리하다 보니 모델이 무엇을 보존하고 무엇을 변환해야 하는지 명확한 가이드가 없다는 것이었다.

이를 해결하기 위해 **2단계 파이프라인**으로 전환했다.

```
[1단계] 분석: 사진 → Gemini Vision → 구조화된 얼굴 특징(JSON)
[2단계] 생성: JSON + 기니피그 프롬프트 + 동물상 → Flux 2 Pro → 이미지
```

이미지를 직접 넣는 대신, 먼저 얼굴 특징을 텍스트로 추출하고 그 텍스트를 기반으로 이미지를 생성하는 방식이다. 모델에게 "사람 얼굴을 보고 기니피그로 변환해"가 아니라, "이 특징들을 가진 기니피그를 그려줘"라고 말하는 것이다.

---

### Gemini Vision 얼굴 분석

1단계에서는 `gemini-2.5-flash-lite` 모델에 사진을 인라인 데이터로 넘기고, Structured Output(JSON Schema)으로 얼굴 특징을 추출한다.

추출하는 필드는 다음과 같다.

```typescript
interface FaceFeatures {
  faceSilhouette: string; // 얼굴형, 볼, 턱선
  eyes: string; // 눈 크기·형태·기울기·색감
  eyebrows: string; // 눈썹 두께·아치·각도
  hairstyle: string; // 헤어스타일 전체
  hairArchitecture: string; // 가르마·흐름·뱅·볼륨 구조
  hairColor: string; // 헤어 색상 (구체적 명칭)
  noseMouth: string; // 코·입 인상 (해부학적 묘사 금지)
  expression: string; // 전체적인 분위기
  accessories: string; // 안경·귀걸이·헤어핀 등
  headPose: string; // 카메라 각도, 고개 방향
  signatureFeatures: string[]; // 닮음새를 잡아주는 핵심 특징 3가지
  likenessAnchor: string; // 닮음새 핵심 요약 한 문장
  genderPresentation: string; // 스타일링 기준 성별 표현
  guineaPigTranslation: string; // 기니피그로 번역하는 방법론
}
```

분석 프롬프트에서 특히 신경 쓴 부분은 두 가지였다.

첫째, **신원 식별 방지**다. "이 사람을 묘사하라"가 아니라 "캐릭터 생성에 필요한 시각적 특징만 추출하라"는 방향을 명확히 했다. 나이, 민족, 국적 같은 정보는 추출하지 않도록 프롬프트에서 명시적으로 차단했다.

둘째, **구체적인 언어**를 유도하는 것이다. "brown eyes" 대신 "warm hazel-brown eyes"처럼, 이미지 생성에 실제로 도움이 되는 묘사를 요청했다. `temperature: 0.1`, `topP: 0.1`로 출력 결정성을 높여 같은 사진에 대해 항상 동일한 분석 결과가 나오도록 했다.

그리고 모델이 얼굴을 제대로 인식하지 못했을 때 그냥 빈 값이 오는 것보다 확실하게 탐지 실패를 판단하기 위해 핵심 필드 6개 중 4개 이상이 "unclear" 또는 "not visible"이면 `FaceNotDetectedError`를 던지도록 했다.

---

### 성별 선택과 스타일링 분기

Gemini는 얼굴 분석 결과에 `genderPresentation` 필드를 포함한다. 헤어스타일, 메이크업, 스타일링 단서를 기반으로 `"masculine"`, `"feminine"`, `"neutral"` 세 가지 중 하나를 반환한다.

이 값은 이미지 생성 프롬프트에서 캐릭터 스타일링 지침으로 쓰인다.

```typescript
const GENDER_STYLING_MAP = {
  masculine: "Style the guinea pig with a masculine-leaning presentation:
              no eyelashes, no lipstick or lip tint, no blush, and a simple
              unisex hairstyle silhouette.",
  feminine:  "Style the guinea pig with a feminine-leaning presentation:
              subtle eyelashes and soft natural blush are okay, kept cute
              rather than heavily made up.",
  neutral:   "Keep the guinea pig's styling gender-neutral: no eyelashes,
              no lipstick or lip tint, no gendered makeup cues.",
};
```

처음엔 Gemini 분석 결과만 사용했는데, 문제가 생겼다. 사진에서 분석된 `genderPresentation`이 사용자의 실제 의도와 다를 수 있다는 것이다. 예를 들어 중성적인 스타일의 여성이 여성스러운 기니피그를 원할 수도 있다.

해결책은 **사용자가 직접 선택한 성별이 Gemini 분석 결과를 덮어쓰도록** 하는 것이었다. "남자 / 여자" 선택이 필수 입력이 되었고, 선택값은 `route.ts`에서 `faceFeatures.genderPresentation`을 직접 교체한다.

```typescript
if (USER_GENDER_VALUES.has(gender)) {
  faceFeatures.genderPresentation = gender;
}
```

AI가 분석한 결과를 사용자 의도로 보정하는 단순한 패턴이지만, 결과물의 만족도에 직접적인 영향을 준다.

---

### 프롬프트 엔지니어링 — 수많은 시도 끝에 남은 것들

이미지 생성 프롬프트는 초기에 단순한 단락 형태로 시작했다. "Create a cute guinea pig character that looks like a person with [features]..." 수준이었다. 결과는 예측 불가능했다.

반복 테스트를 통해 여러 문제를 발견했다.

**문제 1 — 모피 색상 오염**: 기니피그 모피가 밝은 크림색이어야 하는데, 인물 사진의 피부톤을 따라가며 tan, orange, brown 패치가 생겼다.

**문제 2 — 머리색 불안정**: 헤어컬러가 black → dark brown → 거의 흰색/금발까지 흔들렸다. 같은 사진을 입력해도 결과마다 머리 색상이 달랐다.

**문제 3 — 입 모양 일관성**: 입을 벌리고 혀가 보이는 변종이 간헐적으로 발생했다. 기니피그 캐릭터는 항상 단정하게 입을 닫고 있어야 하는데.

이 문제들을 해결하기 위해 프롬프트를 **문장 단위의 명시적 지침 배열**로 재설계했다. 각 지침이 하나의 구체적인 제약을 담당하고, 중요한 제약은 끝부분에서 한 번 더 리마인더로 반복하는 구조다.

핵심 해결책은 세 가지였다.

```
// 1. 모피 색상: 귀·볼·주둥이까지 명시하고 negative 표현 추가
"Use a single uniform warm ivory or light cream fur color across the entire head,
including the ears, cheeks, muzzle, and chin fur. Do not add tan, orange, brown,
or two-tone patches anywhere on the fur or ears."

// 2. 머리색: 모피 색상과 명시적으로 분리
"This hairstyle color (${features.hairColor}) is fixed and independent from the
guinea pig's fur color — never lighten, whiten, or blend the hair toward the
cream fur tone."

// 3. 입 모양: 허용하지 않는 상태를 구체적으로 나열
"keep the mouth fully closed in a curved guinea pig smile — no open mouth,
no visible tongue, no wide laughing mouth"
```

그리고 프롬프트 끝부분에 이 세 가지를 한 번 더 요약해서 앵커링했다.

```
"Reminder: the entire fur — including both ears — must stay one uniform light
cream or ivory color, with no tan, orange, or brown patches. The hairstyle stays
in its own ${features.hairColor} color, separate from the fur. The mouth stays
fully closed, with no tongue visible."
```

동일 사진으로 보강 전후를 비교했을 때, 보강 전에는 8회 샘플에서 머리색이 black~거의 흰색~금발까지 분산됐지만, 보강 후에는 2회 연속 black hair / 균일 cream fur / 닫힌 입으로 안정적으로 재현됐다.

또한 동물상 트레잇은 "보조 힌트"로만 작동하도록 설계했다. 고양이상이라고 해서 결과물이 고양이처럼 보여서는 안 된다. 어디까지나 기니피그여야 하고, 고양이 인상은 눈 형태와 표정에서만 살짝 느껴지면 충분하다.

```typescript
const traitPart = traitDescription
  ? ` Subtle animal-impression cue for the eyes, expression, and cheek/jaw shape
      — apply gently without overriding the primary likeness anchor: ${traitDescription}.`
  : "";
```

---

### API 안정성 — 재시도와 환경변수 검증

서비스를 운영하다 보면 외부 API가 일시적으로 응답하지 않는 상황이 발생한다. Gemini API에서 503(서비스 불가)이나 429(과부하) 응답이 오는 경우가 실제로 있었다.

첫 시도에서 이런 오류가 나면 사용자 입장에서는 아무 잘못도 없는데 변환이 실패한다. **재시도 로직**을 추가했다.

```typescript
for (let attempt = 0; ; attempt++) {
  try {
    response = await getGenAI().models.generateContent({ ... });
    break;
  } catch (error) {
    if (attempt >= MAX_RETRIES || !isRetryableError(error)) {
      throw error;
    }
    await sleep(RETRY_DELAY_MS * (attempt + 1)); // 선형 지연 (1배 → 2배 → 3배)
  }
}
```

503과 429만 재시도 대상으로 한정했다. 다른 오류(잘못된 입력, 인증 실패 등)를 재시도하면 오히려 문제를 악화시킬 수 있다.

환경변수 누락도 초기에 문제였다. 배포 후 `GEMINI_API_KEY`가 빠져있으면 첫 요청 때서야 런타임 에러가 발생한다. `getRequiredEnv` 헬퍼로 **빌드 시점에 환경변수를 검증**하도록 바꿨다.

```typescript
export function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`환경변수 ${name}이(가) 설정되지 않았습니다.`);
  }
  return value;
}
```

클라이언트 초기화 시점에 이 함수를 호출하므로, 빠진 환경변수가 있으면 서버가 뜨면서 바로 알 수 있다.

---

### 결과 이미지 영속화와 공유 기능

Replicate가 반환하는 URL은 약 1시간 후 만료된다. SNS 공유를 핵심 기능으로 잡은 서비스에서 공유 링크가 1시간 뒤에 깨지면 의미가 없다.

해결책은 **Vercel Blob**을 이용한 결과 이미지 영속화다. 생성 직후 Replicate 임시 URL에서 이미지를 가져와 Blob 스토리지에 `results/{nanoid}.jpg`로 저장한다. API 응답에는 영구 URL과 함께 랜덤 12자리 `resultId`를 함께 반환한다.

`resultId`는 `/r/[id]` 공유 페이지의 키가 된다. 공유 페이지에 진입하면 Blob에 함께 저장해둔 `results/{id}.json` 메타데이터를 읽어 결과 이미지와 동물상 정보를 렌더링한다. 동적 OG 이미지도 생성해서 카카오톡이나 트위터로 공유했을 때 썸네일이 제대로 뜨도록 했다.

결과 이미지는 30일 후 자동 삭제된다. Vercel Cron을 이용해 매일 자정 30일 경과 결과물을 정리하는 작업을 등록했다.

---

### Rate Limit — 비용 방어

무료 서비스는 악용 가능성을 처음부터 고려해야 한다. Replicate API 비용이 누군가의 반복 요청으로 폭주할 수 있다.

초기에는 서버 메모리 `Map`을 이용한 단순 IP 기반 제한을 사용했다. 문제는 Vercel 같은 서버리스 환경에서 인스턴스마다 메모리가 분리되어 실제 제한이 제대로 동작하지 않는다는 것이다.

**Upstash Redis** 기반의 `@upstash/ratelimit`으로 교체하면서 두 겹의 방어막을 만들었다.

- **IP 레이트 리밋**: 슬라이딩 윈도우로 IP당 분당 3회 제한
- **일일 총량 캡**: 고정 윈도우로 하루 전체 요청 수 상한 (`DAILY_TOTAL_CAP`, 기본 500회)

IP 제한을 먼저 확인해서 남용 IP가 일일 총량 카운터를 소진하지 못하도록 순서를 잡았다. 총량 초과 시에는 IP 제한 메시지가 아닌 "오늘 준비된 기니피그가 모두 소진됐어요"라는 별도 안내로 분기했다.

```typescript
// IP 제한을 먼저 확인 — 남용 IP를 일일 총량 카운터 소진 전에 차단
const ipResult = await ipLimiter.limit(ip);
if (!ipResult.success) {
  return { allowed: false, remaining: 0, reason: "ip" };
}

const dailyResult = await dailyLimiter.limit("global");
if (!dailyResult.success) {
  return { allowed: false, remaining: 0, reason: "daily" };
}
```

Upstash 자격증명은 직접 설정한 `UPSTASH_REDIS_REST_*` 환경변수와 Vercel-Upstash 연동이 자동 주입하는 `KV_*` 변수 모두를 지원하도록 폴백 처리했다. Upstash 미설정 시에는 in-memory 폴백으로 동작하되, 프로덕션에서는 경고를 출력한다.

---

### 개인정보 처리 — 얼굴 사진을 다루는 서비스의 책임

얼굴 사진을 외부 AI API로 보내는 서비스인 만큼, 개인정보 처리방침은 선택이 아니라 필수였다.

구체적으로 명시해야 할 내용이 두 가지였다. 첫째는 사진이 어디로 전송되는가이다. Ginini는 업로드된 사진을 Google Gemini(얼굴 분석)와 Replicate(이미지 생성) 두 외부 서비스로 전달한다. 사용자가 이를 알고 동의할 수 있어야 한다.

둘째는 데이터 보관 기간이다. 결과 이미지를 Vercel Blob에 저장하는 구조상 "언제 삭제되는가"를 약속해야 한다. **최대 30일 보관 후 자동 삭제**로 정책을 정하고, 개인정보처리방침 페이지에 명시했다.

초기 개발 중에는 얼굴 분석 결과(`faceFeatures`)를 서버 로그에 출력하고 있었다. 분석 내용이 헤어스타일, 눈 형태, 표정 등 외모 묘사를 담고 있어 PII(개인식별정보)에 준하는 데이터다. 배포 전에 해당 로그를 모두 제거했다.

---

### 운영 자동화 — Cron과 CI

**30일 TTL Cron 정리**

Vercel Blob에 쌓이는 결과 이미지는 방치하면 스토리지 비용이 계속 늘어난다. 개인정보처리방침에 "30일 보관" 을 약속했으니 실제로 삭제하는 로직이 필요하다.

Vercel Cron을 이용해 `/api/cron/cleanup` 엔드포인트를 매일 자정에 호출하도록 등록했다. 로직은 단순하다. Blob 스토리지의 `results/` 프리픽스를 페이지네이션으로 순회하면서 업로드 시각이 30일을 넘은 파일을 모아 한 번에 삭제한다.

```typescript
const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
const staleUrls: string[] = [];
let cursor: string | undefined;

do {
  const result = await list({ prefix: "results/", cursor, limit: 1000 });
  for (const blob of result.blobs) {
    if (blob.uploadedAt.getTime() < cutoff) {
      staleUrls.push(blob.url);
    }
  }
  cursor = result.hasMore ? result.cursor : undefined;
} while (cursor);

if (staleUrls.length > 0) {
  await del(staleUrls);
}
```

이미지(`results/{id}.jpg`)와 메타데이터(`results/{id}.json`)가 같은 프리픽스 아래 있어서 별도 처리 없이 함께 정리된다. Cron 엔드포인트는 `CRON_SECRET` 헤더로 인증하며, 미설정 시 경고만 출력하고 동작은 허용해 로컬 테스트를 막지 않도록 했다.

**GitHub Actions CI**

`main` 브랜치 push와 PR에 대해 세 단계가 자동으로 돌아간다.

```yaml
- run: npm run lint # ESLint
- run: npx tsc --noEmit # 타입 체크
- run: npm run build # Next.js 빌드
```

별도 테스트 러너는 없지만, 타입 체크와 빌드가 통과하면 최소한 런타임 에러를 유발하는 코드가 머지되는 것은 막을 수 있다. `curly: ["error", "all"]` lint 규칙도 CI에서 강제되어, 중괄호 없는 단일 문장 if가 코드베이스에 들어오지 못한다.

---

### 다크모드 고려 → 라이트모드 통일

개발 초반에 다크모드를 기본으로 지원하는 방향을 검토했다. Next.js + Tailwind 조합에서 `dark:` 유틸리티만 붙이면 되는 것처럼 보였다.

그런데 이 서비스의 핵심 경험을 생각해봤다. 결과 화면에서 기니피그 캐릭터가 하얀 배경 위에 등장한다. 라이트박스 스타일의 결과 화면도 흰색 배경 기반이다. 다크모드로 전환하면 이 경험이 자연스럽지 않다.

또 브랜드 컬러 팔레트도 warm ivory, 크림, 브라운 계열로 설정했는데, 이 톤은 라이트 모드에서 훨씬 잘 살아난다.

결론적으로 `globals.css`에서 다크 모드를 명시적으로 제거하고 라이트 모드 전용으로 고정했다. CSS 변수도 단일 세트만 관리하면 되니 코드가 단순해졌다.

---

### 모바일에 최적화된 디자인

이 서비스의 주요 사용 시나리오는 카카오톡 프로필 교체다. 대부분 스마트폰으로 접속해서 직접 사진을 찍거나 갤러리에서 고르고, 결과를 카카오톡으로 공유한다. 데스크탑 레이아웃이 주가 될 이유가 없었다.

**모바일 앱처럼 느껴지는 UX**를 목표로 잡고 전체 구조를 재설계했다.

- `h-dvh`로 뷰포트 전체를 채우는 풀스크린 step 기반 레이아웃
- 헤더(고정) / 콘텐츠(스크롤) / 푸터(고정) 3단 구조의 `ScreenLayout` 공용 컴포넌트
- `FullscreenSheet`으로 크롭 화면과 결과 라이트박스를 오버레이 처리
- 버튼과 터치 영역은 `min-h-[44px]`를 기준으로 확보

데스크탑에서는 모바일 너비(`max-w-sm`)를 중앙에 카드처럼 배치했다. 서비스 특성상 데스크탑 레이아웃을 따로 설계하는 것보다 "폰 안에서 보는 느낌"을 데스크탑에서도 그대로 유지하는 것이 더 자연스럽다고 판단했다.

이미지 크롭도 자유형 사각형 크롭에서 **원형 크롭**으로 바꿨다. 프로필 사진 활용 목적에 원형이 직관적이고, 크롭 완료 후 썸네일도 원형으로 보여줘서 최종 결과물을 미리 상상할 수 있게 했다.

`Chip`, `IconButton`, `ScreenHeader` 같은 작은 공통 컴포넌트들도 터치 영역을 우선으로 설계했다. 손가락으로 탭했을 때 빠짐없이 반응하도록 하는 것이 작은 화면에서의 사용감을 크게 좌우한다.

---

### 생성 시드 고정과 재현성

동일한 사진으로 여러 번 변환했을 때 매번 완전히 다른 결과가 나오면 "내 기니피그"라는 느낌이 줄어든다. 어느 정도 일관성을 가지면서도 디테일은 조금씩 다른 결과를 목표로 했다.

입력 이미지 바이트를 SHA-256으로 해싱해서 생성 시드로 사용했다. 같은 사진을 올리면 같은 시드로 생성이 시작되어 결과의 일관성이 높아진다.

```typescript
function getStableGenerationSeed(arrayBuffer: ArrayBuffer): number {
  const hash = createHash("sha256").update(Buffer.from(arrayBuffer)).digest();
  return (hash.readUInt32BE(0) % 2147483647) + 1;
}
```

다만 Replicate 모델이 seed 파라미터를 지원하지 않거나 validation 에러를 내는 경우도 있어서, 그럴 때는 seed 없이 재시도하는 폴백 로직도 함께 추가했다.

---

## 마치면서

Ginini를 만들면서 가장 많이 배운 건 AI 프롬프트 엔지니어링이다. 처음엔 "좋은 프롬프트를 한 번 쓰면 끝"이라고 생각했다. 실제로는 달랐다. 결과물에서 문제를 발견하고, 그 문제가 프롬프트의 어느 부분에서 비롯됐는지 파악하고, 그 부분을 명확하게 수정하는 반복 작업이었다.

"~하지 말 것" 같은 negative 지침이 의외로 효과적이었다. "아이보리 크림색 모피를 사용하라"보다 "tan, orange, brown 패치를 절대 추가하지 말라"가 모델을 더 정확하게 제어했다. 중요한 제약일수록 프롬프트 앞에 한 번, 끝에 한 번 더 명시해서 앵커링하는 패턴도 효과가 있었다.

아키텍처 측면에서는 FSD가 작은 프로젝트에서도 충분히 가치가 있다는 걸 확인했다. "이 코드는 어디에 있어야 하지?"라는 질문에 FSD 레이어 규칙이 일관된 답을 주고, 리팩토링할 때 어디를 건드려야 하는지도 명확하다.

그리고 서버리스 환경에서의 상태 관리는 주의가 필요하다. in-memory Rate Limit이 프로덕션에서 의도한 대로 동작하지 않는다는 걸 직접 겪고 나서야 외부 스토어(Upstash Redis)의 필요성을 제대로 이해했다.

아직 닮은꼴 분석 카드, 커플 모드, 시즌 테마 같은 기능들이 로드맵에 남아있다. 지금의 코드 구조 위에 차근차근 쌓아갈 계획이다.

---

## 참고문헌

- [Google Gemini API — Structured Output (JSON Schema)](https://ai.google.dev/gemini-api/docs/structured-output)
- [Replicate — black-forest-labs/flux-2-pro](https://replicate.com/black-forest-labs/flux-2-pro)
- [Feature-Sliced Design 공식 문서](https://feature-sliced.design/)
- [Upstash Ratelimit](https://github.com/upstash/ratelimit)
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
- [Next.js App Router — Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [TanStack Query — Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations)
- [Zustand](https://github.com/pmndrs/zustand)
