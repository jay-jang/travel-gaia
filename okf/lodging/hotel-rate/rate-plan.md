---
type: Business Term
title: Rate Plan
description: 'A named, sellable pricing offer attached to one or more room types that defines the price and the commercial conditions under which a room is sold, such as inclusions, cancellation rules, payment terms, and eligibility. Examples include a Best Available Rate, an advance-purchase non-refundable rate, or a corporate negotiated rate.'
tags:
  - hotel-rate
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: rate-plan
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: 요금제(Rate Plan)
definition_ko: '하나 이상의 객실 유형에 연결되어 객실이 판매되는 가격과 상업적 조건(포함 항목, 취소 규정, 결제 조건, 적용 대상 등)을 정의하는 명명된 판매용 가격 상품이다. BAR(Best Available Rate), 사전 구매형 환불 불가 요금, 기업 협상 요금 등이 그 예이다.'
longDef: 'A rate plan bundles a price (or pricing logic) together with rules and restrictions: board basis, cancellation/guarantee policy, minimum/maximum length of stay, advance booking and stay-date windows, market segment or qualification (e.g. corporate, member, opaque), and whether the rate is commissionable or net. In a CRS/PMS a rate plan is identified by a rate code and mapped to room types and date ranges; the same physical room can be sold under many rate plans at different prices and conditions.'
longDef_ko: '요금제는 가격(또는 가격 산정 로직)을 식사 조건, 취소/보증 정책, 최소/최대 숙박일수, 사전 예약 및 투숙일 기간, 시장 세그먼트나 자격 조건(예: 기업, 회원, 비공개), 수수료 지급 여부 또는 net 여부 등의 규칙·제약과 함께 묶은 것이다. CRS/PMS에서 요금제는 rate code로 식별되며 객실 유형과 날짜 범위에 매핑된다. 동일한 실제 객실이라도 여러 요금제 아래 서로 다른 가격과 조건으로 판매될 수 있다.'
standardBody: OpenTravel Alliance
aliases:
  - Rate Code
  - Rate Type
  - Tariff
providerTerms:
  - provider: OpenTravel / HTNG
    term: RatePlan / RatePlanCode
    context: 'OTA messages identify a sellable pricing offer via RatePlanCandidate/RatePlan elements carrying a RatePlanCode, mapped between PMS, CRS and channels.'
    context_ko: OTA 메시지는 RatePlanCode를 담은 RatePlanCandidate/RatePlan 요소로 판매 가능한 요금 오퍼를 식별하며 PMS·CRS·채널 간 매핑된다.
    relationship: same
  - provider: Oracle OPERA
    term: Rate Code
    context: 'OPERA represents a rate plan as a Rate Code defining prices per room type over a date range/season plus rules, the core of its yield and reservation processes.'
    context_ko: OPERA는 요금제를 룸타입별·시즌별 가격과 규칙을 정의하는 Rate Code로 표현하며 이는 yield·예약 프로세스의 핵심이다.
    relationship: same
  - provider: Amadeus
    term: Rate Type / rate type code
    context: 'Amadeus Hospitality defines rate plans as rate types with unique 8-character codes, groupings, rules and restrictions for different bookers and markets.'
    context_ko: Amadeus Hospitality는 요금제를 8자 고유 코드·그룹·규칙·제한을 가진 rate type으로 정의하며 booker·시장별로 구성한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Room Type
  - type: narrower
    targetTerm: Board Basis
  - type: narrower
    targetTerm: BAR
  - type: related
    targetTerm: Cancellation Policy
  - type: narrower
    targetTerm: Net Rate
  - type: narrower
    targetTerm: Commissionable Rate
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Length of Stay
distinctions:
  - targetTerm: Room Type
    explanation: A rate plan is the price/conditions; a room type is the physical product being priced — the same room type is sold under many rate plans.
    explanation_ko: '요금제는 가격·조건을 의미하고, 객실 유형은 가격이 매겨지는 실제 상품을 의미한다. 동일한 객실 유형이 여러 요금제 아래 판매된다.'
  - targetTerm: BAR
    explanation: 'BAR is one specific kind of rate plan (the best unrestricted publicly available one), whereas Rate Plan is the general concept covering all offer types.'
    explanation_ko: 'BAR은 요금제의 한 특정 유형(제약 없이 일반에 공개되는 최저 요금)인 반면, 요금제는 모든 상품 유형을 아우르는 일반 개념이다.'
  - targetTerm: Board Basis
    explanation: 'Board basis is one inclusion attribute carried within a rate plan; a rate plan also defines price, cancellation, and other conditions beyond meals.'
    explanation_ko: '식사 조건은 요금제에 포함된 하나의 포함 속성이다. 요금제는 식사 외에도 가격, 취소 규정 등 여러 조건을 함께 정의한다.'
  - targetTerm: Derived Rate
    explanation: 'Every derived rate is a rate plan, but a derived rate is specifically one whose values are computed from a parent rate; a standalone (master) rate plan holds its own independently maintained values.'
    explanation_ko: '모든 Derived Rate는 요금제이지만, Derived Rate는 특히 모 요금으로부터 값이 계산되는 요금제다. 독립형(master) 요금제는 자체적으로 별도 관리되는 값을 가진다.'
  - targetTerm: Length of Stay
    explanation: Length of Stay is a restriction/control that can gate a rate plan; the rate plan is the broader offer that the LOS rule conditions.
    explanation_ko: '숙박일수는 요금제를 제한할 수 있는 제약/통제이고, 요금제는 LOS 규칙이 조건을 거는 더 넓은 범위의 상품이다.'
  - targetTerm: Rate Code
    explanation: 'Rate Plan is the conceptual commercial product (e.g. Best Available Rate, room-only); Rate Code is the system identifier that implements and labels that product so it can be loaded, sold and exchanged electronically.'
    explanation_ko: 'Rate Plan은 개념적 상품(예: BAR, 객실 단독)이고, Rate Code는 그 상품을 시스템에 적재·판매·전자교환할 수 있도록 구현하고 라벨링하는 식별자다.'
  - targetTerm: Rate Fence
    explanation: 'A rate plan is the sellable, named price product a guest books; rate fences are the eligibility rules and restrictions that differentiate one rate plan (or tier) from another.'
    explanation_ko: '레이트 플랜은 고객이 실제 예약하는 이름이 붙은 판매 가능한 가격 상품이고, 레이트 펜스는 한 레이트 플랜(또는 단계)을 다른 것과 구분 짓는 자격 규칙과 제약이다.'
sources:
  - name: 'OpenTravel Specification (Hotel messages, RatePlan)'
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
  - name: HTNG distribution and messaging specifications
    org: HTNG
    version: ''
    section: ''
    url: 'https://www.ahla.com/htng-technical-specifications'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="6" width="28" height="36" rx="3"/><line x1="16" y1="15" x2="32" y2="15"/><line x1="16" y1="22" x2="28" y2="22"/><path d="M19 31h7a3 3 0 0 1 0 6h-5l3 3"/><line x1="22" y1="28" x2="22" y2="40"/></svg>
---

> A named, sellable pricing offer attached to one or more room types that defines the price and the commercial conditions under which a room is sold, such as inclusions, cancellation rules, payment terms, and eligibility. Examples include a Best Available Rate, an advance-purchase non-refundable rate, or a corporate negotiated rate.

A rate plan bundles a price (or pricing logic) together with rules and restrictions: board basis, cancellation/guarantee policy, minimum/maximum length of stay, advance booking and stay-date windows, market segment or qualification (e.g. corporate, member, opaque), and whether the rate is commissionable or net. In a CRS/PMS a rate plan is identified by a rate code and mapped to room types and date ranges; the same physical room can be sold under many rate plans at different prices and conditions.

**한국어 / Korean** — **요금제(Rate Plan)** — 하나 이상의 객실 유형에 연결되어 객실이 판매되는 가격과 상업적 조건(포함 항목, 취소 규정, 결제 조건, 적용 대상 등)을 정의하는 명명된 판매용 가격 상품이다. BAR(Best Available Rate), 사전 구매형 환불 불가 요금, 기업 협상 요금 등이 그 예이다.

요금제는 가격(또는 가격 산정 로직)을 식사 조건, 취소/보증 정책, 최소/최대 숙박일수, 사전 예약 및 투숙일 기간, 시장 세그먼트나 자격 조건(예: 기업, 회원, 비공개), 수수료 지급 여부 또는 net 여부 등의 규칙·제약과 함께 묶은 것이다. CRS/PMS에서 요금제는 rate code로 식별되며 객실 유형과 날짜 범위에 매핑된다. 동일한 실제 객실이라도 여러 요금제 아래 서로 다른 가격과 조건으로 판매될 수 있다.

**Aliases:** `Rate Code`, `Rate Type`, `Tariff`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OpenTravel / HTNG | `RatePlan / RatePlanCode` | same | OTA messages identify a sellable pricing offer via RatePlanCandidate/RatePlan elements carrying a RatePlanCode, mapped between PMS, CRS and channels. |
| Oracle OPERA | `Rate Code` | same | OPERA represents a rate plan as a Rate Code defining prices per room type over a date range/season plus rules, the core of its yield and reservation processes. |
| Amadeus | `Rate Type / rate type code` | same | Amadeus Hospitality defines rate plans as rate types with unique 8-character codes, groupings, rules and restrictions for different bookers and markets. |

# Related
- [Room Type](/lodging/hotel-rate/room-type.md) — related
- [Board Basis](/lodging/hotel-rate/board-basis.md) — narrower
- [BAR](/lodging/hotel-rate/bar.md) — narrower
- [Cancellation Policy](/lodging/hotel-dist/cancellation-policy.md) — related
- [Net Rate](/lodging/hotel-dist/net-rate.md) — narrower
- [Commissionable Rate](/lodging/hotel-dist/commissionable-rate.md) — narrower
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Length of Stay](/lodging/hotel-rate/length-of-stay.md) — related

# Distinctions
- **Rate Plan** vs [Room Type](/lodging/hotel-rate/room-type.md) — A rate plan is the price/conditions; a room type is the physical product being priced — the same room type is sold under many rate plans.
- **Rate Plan** vs [BAR](/lodging/hotel-rate/bar.md) — BAR is one specific kind of rate plan (the best unrestricted publicly available one), whereas Rate Plan is the general concept covering all offer types.
- **Rate Plan** vs [Board Basis](/lodging/hotel-rate/board-basis.md) — Board basis is one inclusion attribute carried within a rate plan; a rate plan also defines price, cancellation, and other conditions beyond meals.
- **Rate Plan** vs [Derived Rate](/lodging/hotel-rate/derived-rate.md) — Every derived rate is a rate plan, but a derived rate is specifically one whose values are computed from a parent rate; a standalone (master) rate plan holds its own independently maintained values.
- **Rate Plan** vs [Length of Stay](/lodging/hotel-rate/length-of-stay.md) — Length of Stay is a restriction/control that can gate a rate plan; the rate plan is the broader offer that the LOS rule conditions.
- **Rate Plan** vs [Rate Code](/lodging/hotel-rate/rate-code.md) — Rate Plan is the conceptual commercial product (e.g. Best Available Rate, room-only); Rate Code is the system identifier that implements and labels that product so it can be loaded, sold and exchanged electronically.
- **Rate Plan** vs [Rate Fence](/lodging/hotel-rate/rate-fence.md) — A rate plan is the sellable, named price product a guest books; rate fences are the eligibility rules and restrictions that differentiate one rate plan (or tier) from another.

# Citations
[1] [OpenTravel Alliance — OpenTravel Specification (Hotel messages, RatePlan)](https://opentravel.org/download-specs/)
[2] [HTNG — HTNG distribution and messaging specifications](https://www.ahla.com/htng-technical-specifications)
