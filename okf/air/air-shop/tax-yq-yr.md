---
type: Code
title: Tax (YQ/YR)
description: 'YQ and YR are tax/fee codes carried in the tax box of a ticket that represent carrier-imposed surcharges (commonly described historically as fuel or insurance surcharges) rather than government or airport taxes. They are set by the airline, filed and collected like taxes through ATPCO/IATA tax data, but are airline revenue.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: tax-yq-yr
vertical: air
category: air-shop
conceptType: code
status: active
abbreviation: YQ/YR
term_ko: YQ/YR 세금·요금 (Tax/Surcharge)
definition_ko: 'YQ와 YR은 항공권 세금란에 기재되는 세금/요금 코드로, 정부나 공항이 부과하는 세금이 아니라 항공사가 부과하는 carrier-imposed surcharge(역사적으로 흔히 유류 또는 보험 할증료로 표현됨)를 나타낸다. 항공사가 금액을 정하고 ATPCO/IATA tax 데이터를 통해 세금처럼 파일링·징수하지만, 실제로는 항공사 수입이다.'
longDef: 'Although they occupy tax fields and use ISO-style two-letter tax codes, YQ and YR are commercial charges levied by the marketing or operating carrier, not statutory taxes imposed by a government or airport authority. The split between YQ and YR is largely conventional and carrier-specific; both function identically as carrier-imposed surcharges. Originally introduced to recover volatile jet-fuel costs, many carriers later relabeled them simply as carrier-imposed international surcharges decoupled from actual fuel prices. Because they are technically taxes/fees rather than fare, YQ/YR amounts are often what makes ''free'' award redemptions still cost cash, and they are handled separately from the base fare in fare construction and refunds.'
longDef_ko: '세금 필드를 차지하고 ISO식 두 글자 tax code를 사용하지만, YQ와 YR은 정부나 공항 당국이 부과하는 법정 세금이 아니라 marketing 또는 operating carrier가 부과하는 상업적 요금이다. YQ와 YR의 구분은 대체로 관행적이고 항공사별로 다르며, 둘 다 carrier-imposed surcharge로서 동일하게 기능한다. 본래 변동성이 큰 항공유 비용을 회수하기 위해 도입되었으나, 이후 많은 항공사가 실제 유가와 무관하게 단순히 carrier-imposed international surcharge로 명칭을 바꾸었다. 기술적으로 운임이 아닌 세금/요금이므로, YQ/YR 금액은 ''무료'' 마일리지 보상 발권에서도 현금 비용이 발생하는 주된 이유가 되며, fare construction과 환불에서 기본 운임과 별도로 처리된다.'
standardBody: IATA
aliases:
  - Carrier-Imposed Surcharge
  - Carrier-Imposed Fee
  - YQ
  - YR
  - Fuel Surcharge
providerTerms:
  - provider: Travelport
    term: YQ-YR
    context: Travelport documents YQ/YR as carrier-imposed surcharges shown in the tax portion of a fare.
    context_ko: Travelport는 YQ/YR을 운임의 세금 부분에 표시되는 carrier-imposed surcharge로 문서화한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Surcharge
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Refund
distinctions:
  - targetTerm: Surcharge
    explanation: 'A Surcharge in fare construction (e.g., a mileage or peak-day surcharge) increases the fare amount itself; YQ/YR are carrier-imposed amounts carried in the tax box separate from the base fare, even though both are airline-set add-ons.'
    explanation_ko: 'Fare construction의 Surcharge(예: 마일리지·성수기 할증)는 운임 금액 자체를 증가시키는 반면, YQ/YR은 기본 운임과 분리되어 세금란에 기재되는 carrier-imposed 금액이다. 둘 다 항공사가 정하는 추가 금액이라는 점은 같다.'
  - targetTerm: Fuel Supplement
    explanation: 'YQ/YR are airline-filed carrier-imposed fee/surcharge codes carried in the fare construction and ticketed at sale; a cruise fuel supplement is a contractually reserved, oil-price-triggered charge that can be levied separately from (and even after) the fare quote, and is not part of any filed tariff code system.'
    explanation_ko: 'YQ/YR은 항공사가 신고한 운송인 부과 요금/할증료 코드로 운임 산출에 포함되어 판매 시 발권된다. 크루즈 fuel supplement는 계약상 유보된 유가 트리거 기반 요금으로, 운임 견적과 별개로(심지어 견적 후에도) 부과될 수 있고 어떤 신고 운임 코드 체계의 일부도 아니다.'
  - targetTerm: Non-Commissionable Fare (NCF)
    explanation: 'Airline YQ/YR carrier-imposed charges are a fare-construction tax/surcharge concept in ATPCO filings; cruise NCFs are a commercial commission-exclusion concept — both reduce what reaches the seller, but NCF is defined by commissionability, not by tax codes.'
    explanation_ko: '항공의 YQ/YR 항공사 부과 요금은 ATPCO 등록상의 운임 구성 세금/할증 개념이고, 크루즈 NCF는 상업적 수수료 제외 개념이다. 둘 다 판매자에게 돌아가는 몫을 줄이지만 NCF는 세금 코드가 아니라 수수료 지급 가능 여부로 정의된다.'
sources:
  - org: Travelport
    name: YQ-YR Support article
    version: ''
    section: Carrier-imposed surcharges
    url: 'https://support.travelport.com/webhelp/FaresAndPricing/Content/YQ-YR.htm'
    tier: vendor-doc
  - org: IATA
    name: Passenger Fares and Ticketing
    version: ''
    section: 'Taxes, fees and charges'
    url: 'https://www.iata.org/en/training/subject-areas/fares-ticketing-courses/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6l16 8v6c0 11-7 18-16 22C15 38 8 31 8 20v-6z"/><path d="M20 23l3 3 6-7"/></svg>
---

> YQ and YR are tax/fee codes carried in the tax box of a ticket that represent carrier-imposed surcharges (commonly described historically as fuel or insurance surcharges) rather than government or airport taxes. They are set by the airline, filed and collected like taxes through ATPCO/IATA tax data, but are airline revenue.

Although they occupy tax fields and use ISO-style two-letter tax codes, YQ and YR are commercial charges levied by the marketing or operating carrier, not statutory taxes imposed by a government or airport authority. The split between YQ and YR is largely conventional and carrier-specific; both function identically as carrier-imposed surcharges. Originally introduced to recover volatile jet-fuel costs, many carriers later relabeled them simply as carrier-imposed international surcharges decoupled from actual fuel prices. Because they are technically taxes/fees rather than fare, YQ/YR amounts are often what makes 'free' award redemptions still cost cash, and they are handled separately from the base fare in fare construction and refunds.

**한국어 / Korean** — **YQ/YR 세금·요금 (Tax/Surcharge)** — YQ와 YR은 항공권 세금란에 기재되는 세금/요금 코드로, 정부나 공항이 부과하는 세금이 아니라 항공사가 부과하는 carrier-imposed surcharge(역사적으로 흔히 유류 또는 보험 할증료로 표현됨)를 나타낸다. 항공사가 금액을 정하고 ATPCO/IATA tax 데이터를 통해 세금처럼 파일링·징수하지만, 실제로는 항공사 수입이다.

세금 필드를 차지하고 ISO식 두 글자 tax code를 사용하지만, YQ와 YR은 정부나 공항 당국이 부과하는 법정 세금이 아니라 marketing 또는 operating carrier가 부과하는 상업적 요금이다. YQ와 YR의 구분은 대체로 관행적이고 항공사별로 다르며, 둘 다 carrier-imposed surcharge로서 동일하게 기능한다. 본래 변동성이 큰 항공유 비용을 회수하기 위해 도입되었으나, 이후 많은 항공사가 실제 유가와 무관하게 단순히 carrier-imposed international surcharge로 명칭을 바꾸었다. 기술적으로 운임이 아닌 세금/요금이므로, YQ/YR 금액은 '무료' 마일리지 보상 발권에서도 현금 비용이 발생하는 주된 이유가 되며, fare construction과 환불에서 기본 운임과 별도로 처리된다.

**Aliases:** `Carrier-Imposed Surcharge`, `Carrier-Imposed Fee`, `YQ`, `YR`, `Fuel Surcharge`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Travelport | `YQ-YR` | same | Travelport documents YQ/YR as carrier-imposed surcharges shown in the tax portion of a fare. |

# Related
- [Surcharge](/air/air-shop/surcharge.md) — related
- [Fare Construction](/air/air-shop/fare-construction.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Refund](/air/air-ticket/refund.md) — related

# Distinctions
- **Tax (YQ/YR)** vs [Surcharge](/air/air-shop/surcharge.md) — A Surcharge in fare construction (e.g., a mileage or peak-day surcharge) increases the fare amount itself; YQ/YR are carrier-imposed amounts carried in the tax box separate from the base fare, even though both are airline-set add-ons.
- **Tax (YQ/YR)** vs [Fuel Supplement](/cruise/cruise/fuel-supplement.md) — YQ/YR are airline-filed carrier-imposed fee/surcharge codes carried in the fare construction and ticketed at sale; a cruise fuel supplement is a contractually reserved, oil-price-triggered charge that can be levied separately from (and even after) the fare quote, and is not part of any filed tariff code system.
- **Tax (YQ/YR)** vs [Non-Commissionable Fare (NCF)](/cruise/cruise/non-commissionable-fare-ncf.md) — Airline YQ/YR carrier-imposed charges are a fare-construction tax/surcharge concept in ATPCO filings; cruise NCFs are a commercial commission-exclusion concept — both reduce what reaches the seller, but NCF is defined by commissionability, not by tax codes.

# Citations
[1] [Travelport — YQ-YR Support article — Carrier-imposed surcharges](https://support.travelport.com/webhelp/FaresAndPricing/Content/YQ-YR.htm)
[2] [IATA — Passenger Fares and Ticketing — Taxes, fees and charges](https://www.iata.org/en/training/subject-areas/fares-ticketing-courses/)
