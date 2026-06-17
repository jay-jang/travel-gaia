# Travel Gaia 🌐

**여행 산업 용어 백과사전** — 항공·호텔·유통·정산·표준에 흩어진 용어를 **공급자/표준 간 통일**해
정리한 wiki 형태의 콘텐츠 서비스. 의존성 0의 **standalone 단일 HTML**로, 더블클릭만으로 오프라인에서
바로 열립니다.

> 여행 서비스 데이터의 "레퍼런스"가 목표입니다. 핵심 가치는 단순 정의가 아니라
> **같은 개념의 서로 다른 이름(Amadeus vs Sabre vs Booking.com vs IATA)을 한자리에서 비교/통일**하고,
> 헷갈리는 개념(예: `OTA(여행사)` vs `OpenTravel Alliance`, `Segment` 항공/호텔)을 명확히 구분하는 데 있습니다.

## 바로 쓰기
`index.html`을 브라우저에서 열면 됩니다. 서버·빌드·네트워크 불필요(오프라인 동작).

- 상단 검색창에서 용어 검색(약어/영문/한글). 단축키 `/` 로 검색 포커스.
- **한/영 토글**: 우측 상단 `KO/EN` 버튼으로 전체 UI·정의를 한국어/영어로 전환(설정은 브라우저에 저장).
- **관계 그래프**: 좌측 `🕸 관계 그래프`(`#/graph`) — 용어 간 관계를 force-directed Knowledge Graph로 시각화(180노드). 노드 드래그/클릭(이동), 카테고리 범례 필터, 실선=관련/점선=혼동 주의.
- **전체 색인**: 좌측 `📇 전체 색인`(`#/index`) — 전체 180개 표제어를 가나다·ABC / 카테고리별로 한 번에 색인. A-Z 점프바.
- **용어별 일러스트**: 모든 표제어에 개념을 표현하는 SVG 라인아트 아이콘(카테고리 색).
- 좌측에서 카테고리 탐색(카테고리당 18개, 총 180).
- 표제어 페이지의 관련 용어/혼동 주의/공급자 대응표는 모두 클릭 가능.
- URL deep-link: `index.html#/term/pnr`, `index.html#/category/air-ops`, `index.html#/graph` 형태로 공유 가능.

## 카테고리 (10)
Air(운영·예약 / 운임·재고 / 발권·주문 / 공동운항·연계), Hotel(재고·요금 / 유통·예약),
Payments & Settlement, Identifiers & Codes, Customer·Loyalty, Distribution Standards & APIs.

## 구조 (OKF 아키텍처)

데이터 정본은 **OKF v0.1 Knowledge Bundle**(`okf/`)입니다 — 개념 1개 = 마크다운 파일 1개
(YAML frontmatter + body). 빌드가 이 번들을 **소비(consume)**해 단일 `index.html`로 컴파일합니다.
콘텐츠 추가·수정은 `okf/<category>/<concept>.md` 를 직접 편집합니다.

```
travel-gaia/
├── index.html                # ★ 산출물: standalone 백과사전(OKF 번들 컴파일, 데이터 인라인)
├── okf/                       # ★ 데이터 정본: OKF v0.1 Knowledge Bundle
│   ├── index.md              #   루트 목차 (okf_version: "0.1")
│   ├── log.md                #   변경 이력
│   └── <category>/           #   카테고리 디렉터리 (standards/, air-ops/, …)
│       ├── index.md          #     카테고리 목차(progressive disclosure)
│       └── <concept>.md      #     개념=파일: frontmatter(type/title/description/tags/timestamp
│                             #     + 무손실 확장키) + body(정의·표·번들상대 링크·# Citations)
├── data/
│   └── glossary.json         # 빌드 산출물(okf/ 로드→병합·교차참조 해석)
├── build/
│   ├── template.html         # HTML/CSS/JS 템플릿(편집형 UI + D3 Knowledge Graph)
│   ├── okf-load.mjs          # OKF 번들 로더(frontmatter→entries) — build·검증 공용
│   ├── build.mjs             # okf/ 로드→교차참조 해석→검증→index.html 생성
│   ├── to-okf.mjs            # 마이그레이션: glossary.json→okf/ 변환
│   ├── okf-validate.mjs      # OKF 적합성 + 라운드트립 검증
│   ├── verify-ui.mjs         # jsdom UI 테스트
│   └── vendor/d3.min.js      # d3 v7.8.5 — 빌드 시 index.html에 인라인(그래프 오프라인 유지)
├── serve.py                  # no-cache 데모 서버(터널용)
├── DESIGN.md · notes/ · mock/ # 설계 기록, 자문 로그, UI 목업
└── README.md
```

> 데이터 모델은 [Open Knowledge Format (OKF) v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)
> 을 따릅니다. 적합성·무손실 라운드트립은 `node build/okf-validate.mjs` 로 검증합니다.

## 재빌드
OKF 번들(`okf/**/*.md`)이나 템플릿을 수정한 뒤:
```bash
node build/build.mjs
```
→ `data/glossary.json`과 `index.html`을 재생성하고, 표제어 수·미해석 교차참조·출처 누락 등
**검증 리포트**를 출력합니다.

## 데이터 모델 & 정확성
스키마와 환각 방지 원칙은 [DESIGN.md](DESIGN.md) 참조. 모든 표제어는 출처(공개 산업표준/공급자 문서)를
근거로 한 편집 요약이며, 빌드 단계에서 교차참조 해석·출처 존재 여부를 검증합니다.
정의는 1차 출처로 검증 후 사용하시기 바랍니다.

**한/영 이중 언어**: 표제어 영문 정의(`definition`, `longDef`, `distinctions[].explanation`,
`providerTerms[].context`)에 대응하는 한국어 필드(`*_ko`)와 한국어 표제어 풀이(`term_ko`)를 두며,
산업 약어/코드는 한국어 문장 안에서도 영문을 유지합니다. UI 토글이 언어별 필드를 선택하고, `_ko`가
없으면 영문으로 폴백합니다.

## 만든 방식
[andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) 규칙(Think Before
Coding / Simplicity First / Surgical Changes / Goal-Driven Execution)을 따르며, 설계는 두 AI
어시스턴트(**codex**, **agy**)에 자문 → 상호 토론 → 결론 도출 과정을 거쳤습니다(기록: `notes/`, `DESIGN.md`).
