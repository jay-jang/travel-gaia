# 출처 신뢰도 업그레이드 — 3자 종합 (2026-06-23)

자문: notes/source-trust-{claude,codex}.raw.txt, agy=.gemini/.../source-trust-design.md. 3자 강수렴.

## 확정 설계
- **환각 차단 (핵심)**: `version`/`section`은 **WebFetch로 1차 원문 본문에서 직접 확인**한 경우에만 기입. 근거 발췌를 **`verifyQuote`**(≤200자)에 저장. 못 찾으면 빈 채로(`verified:false`). **빈 필드 > 틀린 필드**.
- **결정론적 게이트** (codex): version/section의 핵심 토큰(숫자 포함)이 `verifyQuote`에 실제로 존재해야 통과 — apply 스크립트와 okf-validate **양쪽**에서 검사. 상상 번호를 빌드타임에 차단.
- **tier 분류**: regulation > standard-body > regulator-guidance > association > vendor-doc > encyclopedia > secondary. 도메인 단축규칙(eur-lex→regulation, developer.iata.org→standard-body, **iata.org/programs→association(함정)**, atpco.net→vendor-doc, wikipedia→encyclopedia, altexsoft/xotels/squaremouth→secondary).
- **환각 고위험 도메인 정본 URL**(agy 표, 프롬프트에 baking): EU261→eur-lex CELEX:32004R0261, NDC→developer.iata.org/ndc, ATPCO Cat→atpco.net(공개 스펙 부재→번호 신중), Montreal→ICAO/eur-lex, 3DS→emvco.com. **IATA Resolution 번호는 iata.org 공식 페이지 제목/URL에 명시된 경우만**(NEWGENISS 로그인 장벽).
- **보존 원칙**: 출처 삭제 금지 — 1차 출처 추가 + 기존 2차는 tier 강등(읽기용 유지). 지배 조문 없는 일반 업무용어엔 억지 version 금지(tier만).
- **충돌 가드**(agy): 기존 section과 새 추출값 불일치 시 자동 덮어쓰기 금지.

## 스키마 (source 확장, 후방호환)
`{org,name,version,section,url, tier, verifyQuote, verified}` — tier/verifyQuote/verified 추가(확장키).

## okf-validate 게이트
1. WARN: version|section 있는데 verifyQuote 없음 또는 url 없음(검증불가)
2. WARN: section/version 토큰이 verifyQuote에 없음(환각 의심)
3. WARN: 모든 출처가 secondary/encyclopedia인 엔트리(1차 없음)
4. WARN: conceptType=standard|regulation인데 1차 출처 없음
5. INFO: 1차tier %, version %, section %

## 우선순위(agy 실측): standards(36, version 0) → disruption(모범사례) → pay → air-ticket → 나머지.

## 한줄
"있음"이 아니라 **fetch된 1차 원문에 묶인 검증가능성**이 신뢰 — 모든 조문/버전을 verifyQuote에 고정.
