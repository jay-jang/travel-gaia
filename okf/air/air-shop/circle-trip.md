---
type: Business Term
title: Circle Trip
description: 'An IATA fare-construction concept in which a passenger departs from an origin, visits one or more intermediate points, and returns to that same origin city via a different routing or via different intermediate cities than the outbound. Unlike a round trip, the outbound and inbound sectors do not retrace the same path, and unlike an open jaw, the origin and final destination are the same city.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-07-18T00:00:00Z'
id: circle-trip
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 일주 여행(Circle Trip)
definition_ko: 'IATA 운임 구성 개념으로, 승객이 출발지에서 출발해 하나 이상의 중간 지점을 방문한 뒤 왕복 경로와 다른 루트 또는 다른 중간 도시를 경유해 같은 출발지로 돌아오는 여정. 왕복 여행과 달리 왕복 구간이 같은 경로를 역순으로 거슬러 가지 않으며, 오픈 조와 달리 출발지와 최종 목적지가 동일한 도시이다.'
longDef: 'Circle trips are priced using either a round-trip (RT) fare applied to the whole journey where permitted by the tariff, or by building each fare component individually and combining them under the general fare construction rules (Global Indicators, maximum permitted mileage / MPM, etc.). IATA''s Travel Agent Tariff Rules define circle trips as one of the principal journey types alongside one-way, round trip, and open jaw. Circle trips are common for multi-destination trips such as a transatlantic journey that departs from and returns to the same city but visits different intermediate hubs on each direction (e.g. London–New York–Chicago–Los Angeles–Tokyo–London). Airlines and GDSs model circle trips in PNRs as a sequence of segments where the first and last points are the same.'
longDef_ko: '일주 여행은 운임 규정이 허용하는 경우 전체 여정에 왕복(RT) 운임을 적용하거나, 일반 운임 구성 규칙(Global Indicators, 최대 허용 마일리지/MPM 등)에 따라 각 운임 구성 요소를 개별 산출한 뒤 결합하여 가격을 책정한다. IATA의 Travel Agent Tariff Rules는 일주 여행을 단방향, 왕복, 오픈 조와 함께 주요 여정 유형 중 하나로 정의한다. 일주 여행은 같은 도시에서 출발·도착하지만 각 방향에서 서로 다른 중간 허브를 경유하는 다중 목적지 여행(예: 런던-뉴욕-시카고-로스앤젤레스-도쿄-런던)에 흔하다. 항공사와 GDS는 PNR에서 첫 지점과 마지막 지점이 동일한 구간의 연속으로 일주 여행을 모델링한다.'
standardBody: IATA
aliases:
  - CT
  - Circle Journey
relationships:
  - type: contrasts
    targetTerm: Open Jaw
  - type: related
    targetTerm: Routing
  - type: related
    targetTerm: Stopover
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Ticketed Point Mileage (TPM)
distinctions:
  - targetTerm: Open Jaw
    explanation: 'A circle trip departs from and returns to the same city, completing a geographic loop; an open jaw has a gap in the routing — either the return journey begins at a city different from the outbound destination, or the return ends at a city different from the outbound origin.'
    explanation_ko: '일주 여행은 같은 도시에서 출발하고 돌아와 지리적 루프를 완성하는 반면, 오픈 조는 루트에 구간 공백이 있어 귀국 여정이 왕복 목적지가 아닌 도시에서 시작하거나, 출발지가 아닌 도시에서 끝난다.'
  - targetTerm: Stopover
    explanation: 'A stopover is a deliberate intermediate stop at a city during a journey; a circle trip is a journey type defined by its routing shape (departure = final destination). Circle trips routinely contain stopovers at intermediate cities.'
    explanation_ko: '경유 스탑오버는 여정 중 도시에서의 의도적인 중간 기착이고, 일주 여행은 루트 형태(출발지 = 최종 목적지)로 정의되는 여정 유형이다. 일주 여행에는 통상적으로 중간 도시에서의 스탑오버가 포함된다.'
sources:
  - name: 'IATA Travel Agent Tariff Rules — Journey Types (One-Way, Round Trip, Open Jaw, Circle Trip)'
    org: IATA
    version: ''
    section: 'Journey Types'
    url: 'https://www.iata.org/en/publications/manuals/'
    tier: association
  - name: 'ATPCO Fare Filing Rules — Fare Construction Principles (Global Indicators, Circle Trip provisions)'
    org: ATPCO
    version: ''
    section: ''
    url: 'https://www.atpco.net/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="10" r="3"/><circle cx="40" cy="28" r="3"/><circle cx="14" cy="38" r="3"/><path d="M26 11.5 37.5 26"/><path d="M38 31 16 37"/><path d="M13 35 22 12"/></svg>
---

> An IATA fare-construction concept in which a passenger departs from an origin, visits one or more intermediate points, and returns to that same origin city via a different routing or via different intermediate cities than the outbound. Unlike a round trip, the outbound and inbound sectors do not retrace the same path, and unlike an open jaw, the origin and final destination are the same city.

Circle trips are priced using either a round-trip (RT) fare applied to the whole journey where permitted by the tariff, or by building each fare component individually and combining them under the general fare construction rules (Global Indicators, maximum permitted mileage / MPM, etc.). IATA's Travel Agent Tariff Rules define circle trips as one of the principal journey types alongside one-way, round trip, and open jaw. Circle trips are common for multi-destination trips such as a transatlantic journey that departs from and returns to the same city but visits different intermediate hubs on each direction (e.g. London–New York–Chicago–Los Angeles–Tokyo–London). Airlines and GDSs model circle trips in PNRs as a sequence of segments where the first and last points are the same.

**한국어 / Korean** — **일주 여행(Circle Trip)** — IATA 운임 구성 개념으로, 승객이 출발지에서 출발해 하나 이상의 중간 지점을 방문한 뒤 왕복 경로와 다른 루트 또는 다른 중간 도시를 경유해 같은 출발지로 돌아오는 여정. 왕복 여행과 달리 왕복 구간이 같은 경로를 역순으로 거슬러 가지 않으며, 오픈 조와 달리 출발지와 최종 목적지가 동일한 도시이다.

일주 여행은 운임 규정이 허용하는 경우 전체 여정에 왕복(RT) 운임을 적용하거나, 일반 운임 구성 규칙(Global Indicators, 최대 허용 마일리지/MPM 등)에 따라 각 운임 구성 요소를 개별 산출한 뒤 결합하여 가격을 책정한다. IATA의 Travel Agent Tariff Rules는 일주 여행을 단방향, 왕복, 오픈 조와 함께 주요 여정 유형 중 하나로 정의한다. 일주 여행은 같은 도시에서 출발·도착하지만 각 방향에서 서로 다른 중간 허브를 경유하는 다중 목적지 여행(예: 런던-뉴욕-시카고-로스앤젤레스-도쿄-런던)에 흔하다.

**Aliases:** `CT`, `Circle Journey`

# Related
- [Open Jaw](/air/air-shop/open-jaw.md) — contrasts
- [Routing](/air/air-shop/routing.md) — related
- [Stopover](/air/air-shop/stopover.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Ticketed Point Mileage (TPM)](/air/air-shop/ticketed-point-mileage.md) — related

# Distinctions
- **Circle Trip** vs [Open Jaw](/air/air-shop/open-jaw.md) — A circle trip departs from and returns to the same city, completing a geographic loop; an open jaw has a gap in the routing — either the return journey begins at a city different from the outbound destination, or the return ends at a city different from the outbound origin.
- **Circle Trip** vs [Stopover](/air/air-shop/stopover.md) — A stopover is a deliberate intermediate stop at a city during a journey; a circle trip is a journey type defined by its routing shape (departure = final destination). Circle trips routinely contain stopovers at intermediate cities.

# Citations
[1] [IATA — IATA Travel Agent Tariff Rules — Journey Types (One-Way, Round Trip, Open Jaw, Circle Trip) — Journey Types](https://www.iata.org/en/publications/manuals/)
[2] [ATPCO — ATPCO Fare Filing Rules — Fare Construction Principles (Global Indicators, Circle Trip provisions)](https://www.atpco.net/)
