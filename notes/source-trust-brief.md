# Travel Gaia — 출처 신뢰도 업그레이드 설계 자문

너는 시니어 데이터/지식엔지니어다. 아래 작업의 **설계**를 검증·보완해 달라. 결론 지향, 구체적으로.

## 제품/현황
Travel Gaia = 여행산업 용어 백과사전(407개). 데이터 정본은 OKF 마크다운 번들(`okf/<vertical>/<sub>/<id>.md`, frontmatter). 빌드가 단일 오프라인 `index.html`로 컴파일. 각 표제어에 `sources:[{org,name,version,section,url}]`.
실측(802 citations): URL 92%(완료) / **1차(권위) 도메인 48%**(나머지는 altexsoft·wikipedia·squaremouth·xotels 등 2차) / **version 4% · section 7%**(표준 조문/버전 거의 없음) / 단일출처 엔트리 15%.

## 하려는 것 (2가지)
- **① 1차 출처 교체/분류**: 2차(블로그/위키)를 표준 원문으로 교체(EU261→eur-lex, 3DS→EMVCo/EBA, NDC→IATA, ACRISS→acriss.org 등). source에 `tier`(예: standard-body/regulation/vendor-doc/association/encyclopedia/press) 분류.
- **② 조문·버전 정밀화**: 표준/규정 인용에 **정확한 조항+버전** 채움(예: IATA Resolution 830a, EU 261/2004 Art. 7, NDC 21.3, ATPCO Cat 31, Montreal Convention Art. 19).

## 핵심 리스크 (반드시 다뤄라)
**조문번호·버전·Resolution 번호 환각.** 이 프로젝트의 1원칙은 "조문/번호 상상 금지". 잘못된 조항번호는 출처 없음보다 더 나쁘다(거짓 권위). 설계가 이걸 어떻게 보장하나?

## 제약
- 단일 HTML·0의존성·오프라인 유지. OKF 스키마 확장은 가능(확장키 허용).
- 구현은 **카테고리별 웹 리서치 워크플로우**(WebSearch/WebFetch) + 적용 스크립트 + `okf-validate` 게이트(이전 trust-relabel/provider-backfill과 동일 패턴).

## 질문 (이대로 답하라)
```
[검증전략] 조문/버전 환각을 막는 구체적 방법 (예: 반드시 WebFetch로 1차문서 본문 확인 후에만 기입? 못 찾으면? 2단계 verify?)
[tier 분류] source tier 분류 체계(값 목록 + 판정 기준 1줄씩)
[스키마] OKF source에 추가할 필드(이름=설명), 후방호환 고려
[게이트] okf-validate에 넣을 검증 규칙 3~5개 (warn/fail)
[워크플로 설계] 카테고리 에이전트의 입력/출력/프롬프트 핵심 + 적용시 충돌/중복 처리
[스킵 기준] 어떤 출처/용어는 손대지 말아야 하나
[리스크/함정] 이 작업의 최대 함정 2~3개
[한줄 총평] 가장 중요한 한 가지
```
일반론 말고 **이 제품에 특정된** 구체안으로.
