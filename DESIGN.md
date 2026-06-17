# Travel Gaia — Design & Decision Record

여행 산업의 **데이터 레퍼런스**가 되는 콘텐츠 서비스. 1차 산출물: 각 여행 업체/표준의 spec을
분석해 **용어를 통일**한 **wiki 형태 백과사전**을, 항상 접근 가능한 **standalone 단일 HTML**로 제공.

개발 규칙: [andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)
— Think Before Coding / Simplicity First / Surgical Changes / Goal-Driven Execution.

## 자문 & 상호 토론 (codex ↔ agy)

1라운드 자문(`notes/consult-codex.raw.txt`, `notes/consult-agy.raw.txt`) → 쟁점 도출
→ 2라운드 상호 토론(`notes/round2-*.txt`) → 아래 결론으로 **수렴**.

### 결론 1 — 카테고리(10개)
codex(축 확장) ↔ agy(통합 단순화)의 중간. MVP ~100 표제어 기준.

| id | 카테고리 |
|----|----------|
| air-ops | Air — Operations & Reservation |
| air-shop | Air — Shopping, Pricing & Availability |
| air-ticket | Air — Ticketing & Orders |
| air-partner | Air — Codeshare, Interline & Schedules |
| hotel-rate | Hotel — Inventory & Rates |
| hotel-dist | Hotel — Distribution & Booking |
| pay | Payments & Settlement |
| codes | Identifiers & Codes |
| customer | Customer, Loyalty & Profiles |
| standards | Distribution Standards & APIs |

### 결론 2 — 검색
**의존성 0 자체 가중치 토큰 검색**(term/abbr/aliases/providerTerms/definition 필드별 가중 +
prefix·substring 매칭). standalone·단일 파일·단순성 최우선 → 외부 검색 라이브러리는 MVP 이후.

### 결론 3 — entry 스키마 (양측 통합)
```jsonc
{
  "id": "pnr",                         // kebab-case 안정 식별자(hash route)
  "term": "PNR (Passenger Name Record)",
  "abbreviation": "PNR",              // 선택
  "aliases": ["Passenger Name Record", "Booking Record"],
  "category": "air-ops",
  "conceptType": "acronym",          // acronym|standard-term|business-term|provider-term|code|metric|process|role|document
  "status": "active",                // active|deprecated|ambiguous
  "definition": "…1~3문장…",
  "longDef": "…선택, 확장 설명…",
  "standardBody": "IATA",            // 선택: 기준 기관
  "providerTerms": [                  // 공급자별 대응어(확신할 때만)
    { "provider": "Amadeus", "term": "…", "context": "…", "relationship": "same" }
  ],
  "relationships": [                  // 내부 교차링크(빌드시 targetTerm→targetId 해석)
    { "type": "related", "targetTerm": "Segment" }
  ],
  "distinctions": [                   // 혼동 쌍 구분
    { "targetTerm": "Segment", "explanation": "…" }
  ],
  "sources": [                        // ≥1 필수. 조문번호 환각 금지(확신 없으면 생략)
    { "name": "…", "org": "IATA", "version": "", "section": "" }
  ],
  "notes": "…선택…",
  "lastReviewed": "2026-06-15"
}
```
`relationship` / `relationships.type`: `same|narrower|broader|related|conflicting` /
`sameAs|broader|narrower|parent|child|related|conflicts|replaces|contrasts`.

## 환각 방지 (양측 공통 강조)
- 모든 entry에 출처 ≥1. **조문/Resolution 번호는 확신할 때만**, 아니면 기관·문서명만.
- providerTerms는 **확신할 때만**(추측 금지, 비우는 게 낫다).
- 정의(definition) ↔ 해석(notes) ↔ 공급자차이(providerTerms) 분리.
- 충돌 숨기지 않기: `OTA(여행사)` vs `OpenTravel Alliance`, `Segment`(항공/호텔), `Order`(NDC) 등은
  conflicts/distinctions로 명시.
- LLM 역할: 요약·비교·중복탐지·교차링크 제안. 금지: 출처 없는 정의, spec 번호 상상.
- 빌드 단계 **검증**: 모든 교차참조 해석 가능 여부 / source 존재 / 중복 id 리포트.
- UI 고지: 정의는 공개 산업표준 기반 편집 요약이며 1차 출처로 검증 권장.

## 아키텍처
- 소스: `data/cat-*.json`(카테고리별, 워크플로 생성) → `node build/build.mjs`가 병합·교차참조
  해석·검증 후 `data/glossary.json` 생성 및 `build/template.html`에 인라인 임베드 → **`index.html`**.
- `index.html`: 의존성 0, CSS/JS/JSON 전부 인라인, 오프라인·더블클릭 동작, hash 라우팅 deep-link.
- 생성 파이프라인(자문→토론→author→adversarial verify→build→검증)으로 정확성 확보.

## 성공 기준 (Goal-Driven)
1. `index.html` 단독으로 브라우저에서 콘솔 에러 없이 렌더 → verify: headless chromium.
2. 10개 카테고리 / ~100 표제어 / 모든 entry에 출처 → verify: build 검증 리포트.
3. 검색·카테고리 네비·표제어 교차링크·공급자 동의어표 동작 → verify: chromium DOM 점검.
4. 모든 교차참조 targetId 해석(미해석 0 또는 리포트) → verify: build 리포트.

## 확장 v2 — 한/영 토글 & Knowledge Graph
- **이중 언어(KO/EN)**: 각 entry에 `term_ko`, `definition_ko`, `longDef_ko`,
  `distinctions[].explanation_ko`, `providerTerms[].context_ko`를 추가(번역 워크플로 `translate-workflow.mjs`,
  카테고리별 병렬). 산업 약어/코드(PNR·IATA·NDC 등)는 한국어 문장 내 영문 유지. UI는 i18n 문자열 테이블 +
  `conceptType`/`relationship`/`status`/관계 라벨 한국어 매핑. 우상단 `KO/EN` 버튼(localStorage 저장),
  `_ko` 없으면 영문 폴백. `notes` 필드는 데이터에 존재하지 않아 번역 대상 없음.
- **Knowledge Graph(`#/graph`)**: 의존성 0 vanilla canvas force-directed 그래프. 노드=표제어(카테고리 색),
  엣지=relationships(실선)+distinctions(점선). 드래그/클릭(이동), 카테고리 범례 필터, 허브 라벨, 고DPI.
- 검증: KO/EN 양 모드 dump-dom 렌더 확인(본문·섹션·배지 언어 전환), 그래프 시각 캡처(100노드 렌더).
  주의: snap chromium은 `/tmp` 경로 JS 미실행 → 검증 파일은 HOME 경로에 두어야 함.

## 확장 v3 — 모던 디자인 (agy 자문)
- **agy**에 현재 CSS+클래스 인벤토리를 주고 "기존 셀렉터/CSS변수명 유지, 외부 의존성 0, 다크모드 유지"
  제약으로 모던 재디자인 CSS를 받아(`notes/design-brief-agy.md`, `notes/agy-design.raw.txt`)
  `template.html`의 `<style>` 블록만 교체 → 마크업/JS 무변경, surgical 적용.
- 결과: blur 헤더, pill 검색창, 라운드 카드/그라데이션 hero, color-mix·backdrop-filter, 강조색 통계,
  라이트/다크 양호. 검증: 필수 변수 18개·셀렉터·다크·`@media 880`·외부의존성 0 정적 점검 + 4뷰 시각 캡처.

## 확장 v4 — 과감한 디자인 + 이미지 + 용어 확장 + 색인
- **과감한 디자인**: 디스플레이 폰트(Archivo 800 / Space Grotesk)를 **base64 woff2로 임베드**(빌드가
  `build/fonts/*.woff2` → `/*__FONTS__*/` 마커에 @font-face 주입, ~53KB, standalone 유지). 그라데이션
  hero/통계 텍스트, 대담한 컬러(보라→마젠타 그라데이션), 큰 타이포 스케일.
- **용어별 이미지**: 래스터 생성 도구가 없어 **LLM이 용어별 SVG 라인아트 아이콘 생성**(viewBox 48,
  currentColor로 카테고리색 적용). 전 표제어 180/180 보유. 안전 필터(`<script`/`on*` 제거).
- **dynamic**: 진입 fadeUp(stagger), 통계 count-up, hero 그라데이션 drift, hover 트랜스폼,
  View Transition(지원 시), prefers-reduced-motion 존중.
- **용어 확장**: 카테고리당 10→**18(총 180)**. `build/gen-expand.mjs`가 기존용어·로스터·신규후보를
  baked한 `expand-workflow.mjs` 생성 → 카테고리별 author(+8, 이중언어+SVG)·icon(기존10) 병렬 에이전트
  → `build/merge-expand.mjs`가 결과(JSON)를 cat 파일에 병합. 교차참조 미해석 0.
- **전체 색인 페이지**(`#/index`): 가나다·ABC / 카테고리별 토글, A-Z 점프바, 아이콘+용어+한글명 그리드(180).
- **worktree**: 세션이 git 비저장소로 시작되어(harness 시작시점 기록) Workflow 런타임이 worktree 격리를
  켜지 못함(WorktreeCreate hook 필요) → 동일 효과의 **병렬 실행**으로 대체(에이전트가 독립 데이터 반환).
- 검증: build 리포트(180·중복0·미해석0·출처0·아이콘180/180)·KO 180/180·그래프 180노드·외부의존성 0·
  헤드리스 렌더(홈/표제어/색인/그래프) 캡처.

---

# UI 전면 재설계 — 최종 합의안 (v5, 2026-06-17)

claude code / codex(gpt-5.5) / agy 3자 라운드1 제안 → 라운드2 상호 비평 수렴(notes/redesign-*.raw.txt). 원문 브리프 notes/redesign-brief.md.

**컨셉**: "여행 산업 편람(field manual)" — 인쇄 레퍼런스북의 밀도·권위 + Matuschak 스택 칼럼 탐색 + Tufte 주석. 오프라인 전문 용어 아틀라스. (3자 만장)

**확정 사항(라운드2 합의)**
- 세리프: **Source Serif 4**(2/3 + 소자 본문 안정·표준문서 권위; 대안 Newsreader/Lora). 산세리프 **IBM Plex Sans/Inter**, 모노 **IBM Plex Mono**.
- 악센트: **단일 oxblood `#7a2520`**(만장). 카테고리색 16개는 스와치/키라인만, 큰 채움 금지.
- 팔레트: paper `#f7f4ee` · ink `#1e1d1a` · muted `#6f6a5f` · rule `#d8d0c2`. dark `#14130f`/`#ece7d8`.
- 레이아웃: **2단**(좌 디렉터리 사이드바 + 우 콘텐츠/스택). 3분할 기각(사이드노트·스택과 폭 중복).
- 보더/그림자: 헤어라인 괘선만, 그림자 0, radius 0~2px. 모션 ~150ms 절제(스택 진입 슬라이드/페이드 + scroll-snap), `prefers-reduced-motion` 준수, 카운트업·글로우·리프트 제거.
- 그래픽 내비: (1) Matuschak **스택 칼럼**(링크→우측 패널 적층) (2) Tufte **우측 마진 사이드노트**(related/distinctions/sources) (3) 표제어별 **inline-SVG 로컬 ego 미니그래프** (4) 전체 **Knowledge Atlas**(모노톤, 카테고리 스와치 노드, hover peek, 클릭→스택 칼럼).
- distinctions = **4열 에디토리얼 표**(A / B / 구분 기준 / 실무 혼동) — 제품 핵심 가치 노출.

**리스크 완화(합의)**
- 스택 깊이 캡(~6), 닫힌 패널 DOM 즉시 제거, 히스토리는 상태(JSON)만 보존.
- 상단 스택 점프 레일 + 이전/다음 + scroll-snap + 키보드 좌우.
- Source Serif 4 **라틴 subset(regular+semibold)만** base64 임베드. 산세리프/모노는 시스템 우선.
- 한글은 시스템 폴백(Apple SD Gothic Neo / Malgun Gothic / Noto KR) — KR 폰트 용량 추가 0.

**총평(수렴)**: 화려한 그래프 앱이 아니라, 종이 편람의 밀도 위에 스택 탐색·주석을 얹은 오프라인 전문 용어 아틀라스.
