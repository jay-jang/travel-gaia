---
type: Standard Term
title: Pricing Unit
description: 'A Pricing Unit is a journey or portion of a journey that is priced as a single entity, made up of one or more fare components. It has a defined unit origin (its starting point) and unit destination, and its type (one-way, round trip, circle trip, open jaw) governs which fare-construction checks and rules apply.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: pricing-unit
vertical: air
category: air-shop
conceptType: standard-term
status: active
abbreviation: PU
term_ko: 프라이싱 유닛 (Pricing Unit)
definition_ko: 'Pricing Unit은 하나의 단위로 운임이 책정되는 여정 또는 여정의 일부로, 하나 이상의 fare component로 구성된다. 정해진 unit origin(시작점)과 unit destination(끝점)을 가지며, 그 유형(편도, 왕복, circle trip, open jaw)에 따라 적용되는 운임 산출 점검과 규정이 달라진다.'
longDef: 'In IATA/ATPCO fare construction, fare components are grouped into pricing units (also called priceable units) before fares are validated and combined. Each pricing unit is classified by type, for example one-way (OW), round trip (RT), circle trip (CT), or open jaw, and this type determines minimum-fare checks (such as Circle Trip Minimum or Higher Intermediate Point checks), combinability rules, and stopover/transfer counting. The total fare for a journey is the sum of its pricing units, each constructed and rule-checked independently before aggregation. Distinguishing the pricing unit from the fare component is essential because some rule provisions (e.g., minimum stay, combinations) apply at the pricing-unit level rather than the individual component level.'
longDef_ko: 'IATA/ATPCO 운임 산출에서 fare component는 운임이 검증·결합되기 전에 pricing unit(priceable unit이라고도 함)으로 묶인다. 각 pricing unit은 편도(OW), 왕복(RT), circle trip(CT), open jaw 등 유형으로 분류되며, 이 유형은 최저운임 점검(Circle Trip Minimum, Higher Intermediate Point 점검 등), 결합(combinability) 규정, stopover/transfer 계산 방식을 결정한다. 여정의 총운임은 각 pricing unit의 합이며, 각 unit은 합산 전에 독립적으로 산출·규정 점검된다. 일부 규정 조항(예: 최소 체류, 결합)은 개별 component가 아니라 pricing unit 단위로 적용되므로 pricing unit과 fare component를 구분하는 것이 필수적이다.'
standardBody: IATA
aliases:
  - Priceable Unit
  - Priceable-Unit
relationships:
  - type: parent
    targetTerm: Fare Component
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Journey
  - type: related
    targetTerm: NUC
distinctions:
  - targetTerm: Fare Component
    explanation: A Fare Component is a single fare and the flights it covers; a Pricing Unit groups one or more fare components into the entity that is actually priced and rule-checked together.
    explanation_ko: 'Fare Component는 단일 운임과 그 운임이 적용되는 비행 구간이고, Pricing Unit은 하나 이상의 fare component를 묶어 실제로 함께 가격이 책정되고 규정이 점검되는 단위다.'
  - targetTerm: Journey
    explanation: 'A Journey is the whole travel from start to end; a Pricing Unit is a sub-portion of the journey priced as one entity, and a journey may contain several pricing units.'
    explanation_ko: 'Journey는 시작부터 끝까지의 전체 여행이고, Pricing Unit은 한 단위로 가격이 책정되는 여정의 하위 부분이며, 한 journey는 여러 pricing unit을 포함할 수 있다.'
sources:
  - org: IATA
    name: Fundamental Skills in Journey Pricing and Ticketing
    version: ''
    section: Pricing units
    url: 'https://www.iata.org/en/training/courses/journey-pricing-ticketing/tttg14/en/'
  - org: IATA
    name: Passenger Fares and Ticketing - Advanced
    version: ''
    section: Pricing unit construction
    url: 'https://www.iata.org/en/training/courses/passenger-fares-advanced/talf24/en/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="13" width="30" height="22" rx="3"/><line x1="19" y1="13" x2="19" y2="35" stroke-dasharray="3 3"/><circle cx="14" cy="24" r="2"/><circle cx="29" cy="24" r="2"/><line x1="23" y1="24" x2="34" y2="24"/></svg>
---

> A Pricing Unit is a journey or portion of a journey that is priced as a single entity, made up of one or more fare components. It has a defined unit origin (its starting point) and unit destination, and its type (one-way, round trip, circle trip, open jaw) governs which fare-construction checks and rules apply.

In IATA/ATPCO fare construction, fare components are grouped into pricing units (also called priceable units) before fares are validated and combined. Each pricing unit is classified by type, for example one-way (OW), round trip (RT), circle trip (CT), or open jaw, and this type determines minimum-fare checks (such as Circle Trip Minimum or Higher Intermediate Point checks), combinability rules, and stopover/transfer counting. The total fare for a journey is the sum of its pricing units, each constructed and rule-checked independently before aggregation. Distinguishing the pricing unit from the fare component is essential because some rule provisions (e.g., minimum stay, combinations) apply at the pricing-unit level rather than the individual component level.

**한국어 / Korean** — **프라이싱 유닛 (Pricing Unit)** — Pricing Unit은 하나의 단위로 운임이 책정되는 여정 또는 여정의 일부로, 하나 이상의 fare component로 구성된다. 정해진 unit origin(시작점)과 unit destination(끝점)을 가지며, 그 유형(편도, 왕복, circle trip, open jaw)에 따라 적용되는 운임 산출 점검과 규정이 달라진다.

IATA/ATPCO 운임 산출에서 fare component는 운임이 검증·결합되기 전에 pricing unit(priceable unit이라고도 함)으로 묶인다. 각 pricing unit은 편도(OW), 왕복(RT), circle trip(CT), open jaw 등 유형으로 분류되며, 이 유형은 최저운임 점검(Circle Trip Minimum, Higher Intermediate Point 점검 등), 결합(combinability) 규정, stopover/transfer 계산 방식을 결정한다. 여정의 총운임은 각 pricing unit의 합이며, 각 unit은 합산 전에 독립적으로 산출·규정 점검된다. 일부 규정 조항(예: 최소 체류, 결합)은 개별 component가 아니라 pricing unit 단위로 적용되므로 pricing unit과 fare component를 구분하는 것이 필수적이다.

**Aliases:** `Priceable Unit`, `Priceable-Unit`

# Related
- [Fare Component](/air/air-shop/fare-component.md) — parent
- [Fare Construction](/air/air-shop/fare-construction.md) — related
- [Journey](/air/air-shop/journey.md) — related
- [NUC](/air/air-shop/nuc.md) — related

# Distinctions
- **Pricing Unit** vs [Fare Component](/air/air-shop/fare-component.md) — A Fare Component is a single fare and the flights it covers; a Pricing Unit groups one or more fare components into the entity that is actually priced and rule-checked together.
- **Pricing Unit** vs [Journey](/air/air-shop/journey.md) — A Journey is the whole travel from start to end; a Pricing Unit is a sub-portion of the journey priced as one entity, and a journey may contain several pricing units.

# Citations
[1] [IATA — Fundamental Skills in Journey Pricing and Ticketing — Pricing units](https://www.iata.org/en/training/courses/journey-pricing-ticketing/tttg14/en/)
[2] [IATA — Passenger Fares and Ticketing - Advanced — Pricing unit construction](https://www.iata.org/en/training/courses/passenger-fares-advanced/talf24/en/)
