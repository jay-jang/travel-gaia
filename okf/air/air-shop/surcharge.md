---
type: Standard Term
title: Surcharge
description: 'A Surcharge is an additional amount added to the base fare during fare construction under specific rule conditions, such as a mileage surcharge for exceeding Maximum Permitted Mileage, a peak/seasonal or day-of-week surcharge, or a fare-rule-filed Q surcharge. It increases the fare component amount and is expressed in the same construction units (NUC) as the fare.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: surcharge
vertical: air
category: air-shop
conceptType: standard-term
status: active
term_ko: 할증료 (Surcharge)
definition_ko: 'Surcharge는 특정 규정 조건에 따라 fare construction 과정에서 기본 운임에 더해지는 추가 금액으로, Maximum Permitted Mileage 초과에 대한 마일리지 할증, 성수기/시즌/요일 할증, 또는 fare rule에 파일링된 Q surcharge 등이 있다. fare component 금액을 증가시키며 운임과 동일한 산출 단위(NUC)로 표시된다.'
longDef: 'Surcharges in airline fare construction are governed by fare rules and the mileage system. A mileage surcharge (e.g., 5M, 10M, 15M, 20M, 25M) is applied as a percentage uplift when an itinerary''s Ticketed Point Mileage exceeds the Maximum Permitted Mileage within published tolerances. Rule-based surcharges (often filed under ATPCO Category 12, Surcharges, and historically labeled with a ''Q'' such as Q-surcharges) add fixed or percentage amounts for conditions like specific flights, dates, or directions of travel. Unlike YQ/YR carrier-imposed amounts that sit in the tax box, fare-construction surcharges are part of the fare itself and therefore affect commissions, proration, and minimum-fare checks.'
longDef_ko: '항공 운임 산출에서 surcharge는 fare rule과 마일리지 시스템에 의해 규율된다. 마일리지 할증(예: 5M, 10M, 15M, 20M, 25M)은 여정의 Ticketed Point Mileage가 공시된 허용 범위 내에서 Maximum Permitted Mileage를 초과할 때 백분율 가산으로 적용된다. 규정 기반 할증(흔히 ATPCO Category 12 Surcharges로 파일링되며, 역사적으로 ''Q''를 붙인 Q-surcharge로 표기됨)은 특정 항공편, 날짜, 여행 방향 같은 조건에 대해 정액 또는 정률 금액을 더한다. 세금란에 위치하는 YQ/YR carrier-imposed 금액과 달리, fare-construction surcharge는 운임 자체의 일부이므로 커미션, proration, 최저운임 점검에 영향을 미친다.'
standardBody: ATPCO
aliases:
  - Fare Surcharge
  - Q Surcharge
relationships:
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: NUC
distinctions:
  - targetTerm: Tax (YQ/YR)
    explanation: 'YQ/YR are carrier-imposed amounts carried in the ticket''s tax box, separate from the fare; a fare-construction Surcharge is added into the fare amount itself and is treated as fare for commission and proration.'
    explanation_ko: 'YQ/YR은 운임과 분리되어 항공권 세금란에 기재되는 carrier-imposed 금액이고, fare-construction Surcharge는 운임 금액 자체에 가산되어 커미션과 proration에서 운임으로 취급된다.'
  - targetTerm: Concession Recovery Fee
    explanation: 'A surcharge is the generic category of any added charge; the concession recovery fee is a specific, named airport pass-through recovering the operator''s airport concession costs.'
    explanation_ko: 'Surcharge(부가요금)는 추가 부과 항목 전반을 가리키는 일반 범주이고, concession recovery fee는 사업자의 공항 영업권 비용을 회수하는, 특정하게 명명된 공항 전가 항목이다.'
  - targetTerm: Daily Service Charge
    explanation: 'A surcharge (or a cruise fuel supplement) is a cost-recovery add-on tied to the fare; the daily service charge is a per-guest-per-day gratuity that funds crew compensation rather than recovering an operating cost, and is conventionally adjustable by the guest at guest relations, which a true surcharge is not.'
    explanation_ko: '할증료(또는 크루즈 fuel supplement)는 운임에 연동된 원가 회수성 가산금인 반면, 일일 서비스 차지는 운영 원가 회수가 아니라 승무원 보상을 충당하는 1인당·1일당 봉사료이며 관행상 guest relations에서 승객이 조정할 수 있는데, 본래의 할증료는 그렇지 않다.'
  - targetTerm: Fuel Supplement
    explanation: 'A surcharge is the general category of a fare-add cost-recovery amount; the cruise fuel supplement is a specific, contractually conditional surcharge keyed to an oil-price trigger and capped per guest per day, with the unusual feature that it can apply to fully paid bookings.'
    explanation_ko: '할증료는 운임에 더해지는 원가 회수성 금액의 일반 범주이고, 크루즈 fuel supplement는 유가 트리거에 연동되고 승객당·일당 상한이 있는 계약상 조건부 할증료로, 전액 지불된 예약에도 적용될 수 있다는 특이점이 있다.'
  - targetTerm: Maximum Permitted Mileage (MPM)
    explanation: MPM is the distance threshold; the mileage surcharge is the percentage uplift to the fare that results when summed TPMs exceed the MPM.
    explanation_ko: 'MPM은 거리 임계값이고, 마일리지 surcharge는 TPM 합계가 MPM을 초과할 때 운임에 가산되는 백분율 할증이다.'
  - targetTerm: Single Supplement
    explanation: 'A single supplement is a specific kind of fare surcharge applied because of solo occupancy, distinct from generic fuel, tax, or fee surcharges; it is calculated as a percentage of the per-person cruise fare.'
    explanation_ko: '싱글 서플먼트는 1인 점유 때문에 적용되는 특정 종류의 운임 할증으로, 일반적인 유류·세금·수수료 할증과 구별되며 1인당 크루즈 운임의 일정 비율로 산정된다.'
sources:
  - org: ATPCO
    name: ATPCO Fare Rules Categories
    version: ''
    section: Category 12 Surcharges
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
  - org: IATA
    name: Fundamental Skills in Journey Pricing and Ticketing
    version: ''
    section: Mileage surcharges
    url: 'https://www.iata.org/en/training/courses/journey-pricing-ticketing/tttg14/en/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="24" y1="10" x2="24" y2="38"/><line x1="14" y1="24" x2="34" y2="24"/><circle cx="24" cy="24" r="16"/></svg>
---

> A Surcharge is an additional amount added to the base fare during fare construction under specific rule conditions, such as a mileage surcharge for exceeding Maximum Permitted Mileage, a peak/seasonal or day-of-week surcharge, or a fare-rule-filed Q surcharge. It increases the fare component amount and is expressed in the same construction units (NUC) as the fare.

Surcharges in airline fare construction are governed by fare rules and the mileage system. A mileage surcharge (e.g., 5M, 10M, 15M, 20M, 25M) is applied as a percentage uplift when an itinerary's Ticketed Point Mileage exceeds the Maximum Permitted Mileage within published tolerances. Rule-based surcharges (often filed under ATPCO Category 12, Surcharges, and historically labeled with a 'Q' such as Q-surcharges) add fixed or percentage amounts for conditions like specific flights, dates, or directions of travel. Unlike YQ/YR carrier-imposed amounts that sit in the tax box, fare-construction surcharges are part of the fare itself and therefore affect commissions, proration, and minimum-fare checks.

**한국어 / Korean** — **할증료 (Surcharge)** — Surcharge는 특정 규정 조건에 따라 fare construction 과정에서 기본 운임에 더해지는 추가 금액으로, Maximum Permitted Mileage 초과에 대한 마일리지 할증, 성수기/시즌/요일 할증, 또는 fare rule에 파일링된 Q surcharge 등이 있다. fare component 금액을 증가시키며 운임과 동일한 산출 단위(NUC)로 표시된다.

항공 운임 산출에서 surcharge는 fare rule과 마일리지 시스템에 의해 규율된다. 마일리지 할증(예: 5M, 10M, 15M, 20M, 25M)은 여정의 Ticketed Point Mileage가 공시된 허용 범위 내에서 Maximum Permitted Mileage를 초과할 때 백분율 가산으로 적용된다. 규정 기반 할증(흔히 ATPCO Category 12 Surcharges로 파일링되며, 역사적으로 'Q'를 붙인 Q-surcharge로 표기됨)은 특정 항공편, 날짜, 여행 방향 같은 조건에 대해 정액 또는 정률 금액을 더한다. 세금란에 위치하는 YQ/YR carrier-imposed 금액과 달리, fare-construction surcharge는 운임 자체의 일부이므로 커미션, proration, 최저운임 점검에 영향을 미친다.

**Aliases:** `Fare Surcharge`, `Q Surcharge`

# Related
- [Fare Construction](/air/air-shop/fare-construction.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [NUC](/air/air-shop/nuc.md) — related

# Distinctions
- **Surcharge** vs [Tax (YQ/YR)](/air/air-shop/tax-yq-yr.md) — YQ/YR are carrier-imposed amounts carried in the ticket's tax box, separate from the fare; a fare-construction Surcharge is added into the fare amount itself and is treated as fare for commission and proration.
- **Surcharge** vs [Concession Recovery Fee](/ground/car/concession-recovery-fee.md) — A surcharge is the generic category of any added charge; the concession recovery fee is a specific, named airport pass-through recovering the operator's airport concession costs.
- **Surcharge** vs [Daily Service Charge](/cruise/cruise/daily-service-charge.md) — A surcharge (or a cruise fuel supplement) is a cost-recovery add-on tied to the fare; the daily service charge is a per-guest-per-day gratuity that funds crew compensation rather than recovering an operating cost, and is conventionally adjustable by the guest at guest relations, which a true surcharge is not.
- **Surcharge** vs [Fuel Supplement](/cruise/cruise/fuel-supplement.md) — A surcharge is the general category of a fare-add cost-recovery amount; the cruise fuel supplement is a specific, contractually conditional surcharge keyed to an oil-price trigger and capped per guest per day, with the unusual feature that it can apply to fully paid bookings.
- **Surcharge** vs [Maximum Permitted Mileage (MPM)](/air/air-shop/maximum-permitted-mileage.md) — MPM is the distance threshold; the mileage surcharge is the percentage uplift to the fare that results when summed TPMs exceed the MPM.
- **Surcharge** vs [Single Supplement](/cruise/cruise/single-supplement.md) — A single supplement is a specific kind of fare surcharge applied because of solo occupancy, distinct from generic fuel, tax, or fee surcharges; it is calculated as a percentage of the per-person cruise fare.

# Citations
[1] [ATPCO — ATPCO Fare Rules Categories — Category 12 Surcharges](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
[2] [IATA — Fundamental Skills in Journey Pricing and Ticketing — Mileage surcharges](https://www.iata.org/en/training/courses/journey-pricing-ticketing/tttg14/en/)
