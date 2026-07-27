---
type: Standard Term
title: Maximum Stay
description: 'Maximum Stay is ATPCO fare rule Category 7 — a condition that limits how long a traveler may remain at the turnaround point before the return journey must commence, expressed as a number of days, calendar months, or a specific day-of-week boundary. Fares that carry a maximum stay restriction are rejected during pricing if the return date falls outside the permitted window, forcing the traveler into a longer-validity (and usually higher-priced) fare.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-07-27T00:00:00Z'
id: maximum-stay
vertical: air
category: air-shop
conceptType: standard-term
status: active
term_ko: 최대 체류 기간 제한(Maximum Stay)
definition_ko: 'Maximum Stay는 ATPCO 운임 규정 Category 7로, 여행자가 귀환 여정을 시작하기 전에 환승·목적지에서 체류할 수 있는 최대 기간(일 수, 월 수, 또는 특정 요일 기준)을 제한하는 조건이다. maximum stay 제한이 있는 운임은 귀환 날짜가 허용 기간을 초과하면 pricing 단계에서 거절되어, 더 긴 유효기간(보통 더 높은 가격)의 운임을 사용해야 한다.'
longDef: 'The maximum stay condition is defined in ATPCO Category 7 and specifies the outermost date by which the first return flight coupon must be used. Common expressions include "must return within 30 days", "must return within 3 months", or, on long-haul open-jaw fares, "12-month validity". Historically, some discounted fares used a day-of-week maximum stay as a revenue management fence — for example, requiring the return journey to begin on or before a specified day relative to outbound departure — but absolute day-count maximums are now far more prevalent. When both minimum stay (Category 6) and maximum stay (Category 7) conditions are filed together, the permitted travel window is bounded on both ends: the traveler must stay at least the minimum period and no more than the maximum. GDS pricing systems evaluate all applicable Category 7 records during fare construction and surface a rule advisory to agents when a maximum stay limit is relevant. Fare families for short-haul markets often carry 30-day maximums to segment leisure from business travel, while fully flexible fares carry no maximum stay restriction.'
longDef_ko: 'ATPCO Category 7에 정의된 maximum stay 조건은 첫 번째 귀환 항공권 쿠폰을 사용해야 하는 최종 날짜를 지정한다. 일반적인 표현으로는 "30일 이내 귀환", "3개월 이내 귀환", 장거리 open-jaw 운임의 경우 "12개월 유효기간" 등이 있다. 과거에는 할인 운임이 요일 기준 maximum stay를 수익 관리 펜스로 사용했으나(예: 출발일 기준 특정 요일 이전에 귀환 여정 시작 의무), 현재는 절대 일수 최대치가 훨씬 일반적이다. minimum stay(Category 6)와 maximum stay(Category 7) 조건이 함께 파일링된 경우, 허용 여행 기간은 양쪽에서 경계가 생긴다. GDS pricing 시스템은 운임 구성 중 모든 해당 Category 7 레코드를 평가하고, maximum stay 한도가 관련된 경우 상담원에게 규정 안내를 표시한다. 단거리 노선의 요금 패밀리는 레저와 비즈니스 여행을 구분하는 목적으로 30일 최대치를 두는 경우가 많고, 완전 유연 운임에는 maximum stay 제한이 없다.'
standardBody: ATPCO
aliases:
  - Maximum Stay Restriction
  - Maximum Stay Rule
  - Cat 7
  - ATPCO Category 7
providerTerms:
  - provider: ATPCO
    term: Category 7 (Maximum Stay)
    context: ATPCO Category 7 defines the maximum stay condition as a structured rule record filed alongside fare amounts in ATPCO Tariff 100.
    context_ko: ATPCO Category 7은 maximum stay 조건을 ATPCO Tariff 100의 운임 금액과 함께 파일링되는 구조화된 규정 레코드로 정의한다.
    relationship: same
  - provider: Amadeus / Sabre / Travelport
    term: Maximum Stay (Fare Rule display)
    context: GDS systems retrieve and display the maximum stay rule text as part of the full fare rule (FQ/FQN) output for agents.
    context_ko: GDS 시스템은 상담원을 위한 전체 운임 규정(FQ/FQN) 조회 결과의 일부로 maximum stay 규정 텍스트를 조회·표시한다.
    relationship: same
relationships:
  - type: parent
    targetTerm: Fare Rule
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Advance Fare
distinctions:
  - targetTerm: Fare Rule
    explanation: 'A Fare Rule is the complete set of conditions (all categories) attached to a fare; Maximum Stay is specifically ATPCO Category 7 — one of those condition categories that restricts the outbound duration.'
    explanation_ko: 'Fare Rule은 운임에 첨부된 전체 조건(모든 카테고리) 집합이고, Maximum Stay는 특히 ATPCO Category 7로, 출발지 이탈 기간을 제한하는 조건 카테고리 중 하나이다.'
  - targetTerm: Advance Fare
    explanation: 'An Advance Fare is a rail-industry discounted ticket requiring pre-purchase of a specific service; Maximum Stay is an airline fare rule condition limiting how long the traveler may remain at the destination before returning.'
    explanation_ko: 'Advance Fare는 특정 서비스를 사전 구매해야 하는 철도 할인 티켓이고, Maximum Stay는 여행자가 귀환 전 목적지에 머물 수 있는 기간을 제한하는 항공 운임 규정 조건이다.'
sources:
  - name: 'ATPCO Encoding Air Fares — Rule Categories Reference'
    org: ATPCO
    version: ''
    section: 'Category 7: Maximum Stay'
    url: 'https://www.atpco.net/resources/library'
    tier: standard-body
  - name: 'IATA Fare Rules and Conditions'
    org: IATA
    version: ''
    section: 'Fare Rule Categories'
    url: 'https://www.iata.org/en/services/finance/revenue-accounting/atpco/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="30" rx="3"/><line x1="8" y1="18" x2="40" y2="18"/><line x1="16" y1="6" x2="16" y2="14"/><line x1="32" y1="6" x2="32" y2="14"/><line x1="24" y1="26" x2="34" y2="26"/><line x1="34" y1="22" x2="34" y2="32"/></svg>
---

> Maximum Stay is ATPCO fare rule Category 7 — a condition that limits how long a traveler may remain at the turnaround point before the return journey must commence, expressed as a number of days, calendar months, or a specific day-of-week boundary. Fares that carry a maximum stay restriction are rejected during pricing if the return date falls outside the permitted window, forcing the traveler into a longer-validity (and usually higher-priced) fare.

The maximum stay condition is defined in ATPCO Category 7 and specifies the outermost date by which the first return flight coupon must be used. Common expressions include "must return within 30 days", "must return within 3 months", or, on long-haul open-jaw fares, "12-month validity". When both minimum stay (Category 6) and maximum stay (Category 7) conditions are filed together, the permitted travel window is bounded on both ends. GDS pricing systems evaluate all applicable Category 7 records during fare construction and surface a rule advisory to agents when a maximum stay limit is relevant. Fare families for short-haul markets often carry 30-day maximums to segment leisure from business travel, while fully flexible fares carry no maximum stay restriction.

**한국어 / Korean** — **최대 체류 기간 제한(Maximum Stay)** — Maximum Stay는 ATPCO 운임 규정 Category 7로, 여행자가 귀환 여정을 시작하기 전에 환승·목적지에서 체류할 수 있는 최대 기간(일 수, 월 수, 또는 특정 요일 기준)을 제한하는 조건이다. maximum stay 제한이 있는 운임은 귀환 날짜가 허용 기간을 초과하면 pricing 단계에서 거절되어, 더 긴 유효기간(보통 더 높은 가격)의 운임을 사용해야 한다.

ATPCO Category 7에 정의된 maximum stay 조건은 첫 번째 귀환 항공권 쿠폰을 사용해야 하는 최종 날짜를 지정한다. 일반적인 표현으로는 "30일 이내 귀환", "3개월 이내 귀환", 장거리 open-jaw 운임의 경우 "12개월 유효기간" 등이 있다. minimum stay(Category 6)와 maximum stay(Category 7) 조건이 함께 파일링된 경우, 허용 여행 기간은 양쪽에서 경계가 생긴다. GDS pricing 시스템은 운임 구성 중 모든 해당 Category 7 레코드를 평가하고, maximum stay 한도가 관련된 경우 상담원에게 규정 안내를 표시한다.

**Aliases:** `Maximum Stay Restriction`, `Maximum Stay Rule`, `Cat 7`, `ATPCO Category 7`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Category 7 (Maximum Stay)` | same | ATPCO Category 7 defines the maximum stay condition as a structured rule record filed alongside fare amounts in ATPCO Tariff 100. |
| Amadeus / Sabre / Travelport | `Maximum Stay (Fare Rule display)` | same | GDS systems retrieve and display the maximum stay rule text as part of the full fare rule (FQ/FQN) output for agents. |

# Related
- [Fare Rule](/air/air-shop/fare-rule.md) — parent
- [ATPCO](/air/air-shop/atpco.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Advance Fare](/ground/rail/advance-fare.md) — related

# Distinctions
- **Maximum Stay** vs [Fare Rule](/air/air-shop/fare-rule.md) — A Fare Rule is the complete set of conditions (all categories) attached to a fare; Maximum Stay is specifically ATPCO Category 7 — one of those condition categories that restricts the outbound duration.
- **Maximum Stay** vs [Advance Fare](/ground/rail/advance-fare.md) — An Advance Fare is a rail-industry discounted ticket requiring pre-purchase of a specific service; Maximum Stay is an airline fare rule condition limiting how long the traveler may remain at the destination before returning.

# Citations
[1] [ATPCO — ATPCO Encoding Air Fares — Rule Categories Reference](https://www.atpco.net/resources/library)
[2] [IATA — IATA Fare Rules and Conditions](https://www.iata.org/en/services/finance/revenue-accounting/atpco/)
