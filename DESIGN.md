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
