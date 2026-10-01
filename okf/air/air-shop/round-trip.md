---
type: Business Term
title: Round Trip
description: 'A round trip is an IATA fare-construction journey type in which a passenger departs from an origin city, travels to one or more destination cities, and returns to the same origin city via a routing that is the reverse or mirror of the outbound, using a single applicable round-trip (RT) or half round-trip (HRT) fare. It is one of the four principal journey types defined in IATA tariff rules alongside one-way, open jaw, and circle trip.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-10-01T00:00:00Z'
id: round-trip
vertical: air
category: air-shop
conceptType: business-term
status: active
abbreviation: RT
term_ko: 왕복 여행(Round Trip)
definition_ko: 'Round Trip(왕복 여행)은 IATA 운임 구성 여정 유형으로, 승객이 출발지 도시에서 출발해 하나 이상의 목적지를 방문한 후 왕복(RT) 또는 절반 왕복(HRT) 운임을 적용하여 동일한 경로의 역순이나 대칭 루트로 출발지로 돌아오는 여정이다. IATA 운임 규칙에서 단방향(One-Way), 오픈 조(Open Jaw), 일주 여행(Circle Trip)과 함께 4대 주요 여정 유형 중 하나이다.'
longDef: 'A round trip uses a single round-trip fare (or two half round-trip fares summing to the full RT base) to price the entire outbound-and-return itinerary. ATPCO publishes RT fares in the tariff; fare construction rules require the outbound and inbound to use the same or symmetrically-applicable fare basis codes. Round-trip pricing is distinguished from pricing two back-to-back one-way fares (which may be cheaper or more expensive depending on carrier and route). Where a round trip passes through the same intermediate cities in reverse order on the return leg, it is a pure round trip; if the return uses a different routing through different intermediate cities, it becomes a circle trip. Minimum-stay and maximum-stay rules under ATPCO Category 6 and Category 7 are central to the economics of round-trip fares and are used by airlines to fence leisure demand from business demand.'
longDef_ko: 'Round Trip은 왕복 전체 여정을 단일 RT 운임(또는 두 개의 HRT 운임 합계)으로 가격을 책정한다. ATPCO는 관세에 RT 운임을 게재하며, 운임 구성 규칙은 왕복 구간이 동일하거나 대칭적으로 적용 가능한 운임 기준 코드를 사용하도록 요구한다. 왕복 운임 책정은 두 개의 편도 운임을 연속으로 결합하는 방식(항공사·노선에 따라 더 저렴하거나 비쌀 수 있음)과 구별된다. 왕복 여정에서 귀국 구간이 동일한 중간 도시를 역순으로 통과하면 순수 왕복 여행이고, 귀국 구간이 다른 중간 도시를 경유하는 다른 루트를 사용하면 일주 여행(Circle Trip)이 된다. ATPCO Category 6 및 Category 7의 최소 체류 및 최대 체류 규칙은 왕복 운임 경제성의 핵심이며, 항공사가 레저 수요와 비즈니스 수요를 분리하는 데 활용된다.'
standardBody: IATA
aliases:
  - Return Journey
  - Return Fare
  - RT Fare
  - Return Trip
relationships:
  - type: contrasts
    targetTerm: Circle Trip
  - type: contrasts
    targetTerm: Open Jaw
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Journey
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Fare Construction
distinctions:
  - targetTerm: Circle Trip
    explanation: 'A round trip returns to the origin via a reverse or mirror of the outbound routing; a circle trip also returns to the same origin city but uses a different set of intermediate cities or a different routing on the return, meaning the sectors do not simply retrace the outbound path.'
    explanation_ko: '왕복 여행은 왕복 경로의 역순 또는 대칭 루트로 출발지에 돌아오는 반면, 일주 여행도 같은 출발지로 돌아오지만 귀국 구간에서 다른 중간 도시 또는 다른 루트를 사용하여 단순히 왕복 경로를 역순으로 거슬러 가지 않는다.'
  - targetTerm: Open Jaw
    explanation: 'A round trip departs from and returns to the same city by a matched routing; an open jaw has a surface sector gap — either the outbound destination differs from the inbound origin, or the inbound destination differs from the outbound origin.'
    explanation_ko: '왕복 여행은 대칭 루트로 같은 도시에서 출발하고 돌아오는 반면, 오픈 조는 지상 구간 공백이 있어 왕복 목적지와 귀국 출발지가 다르거나, 귀국 목적지가 출발지와 다르다.'
  - targetTerm: Fare Construction
    explanation: 'A round trip is a journey-type concept (the shape of the itinerary); fare construction is the rule set and calculation method for arriving at the applicable fare for that itinerary, including determining whether RT or HRT bases are used.'
    explanation_ko: '왕복 여행은 여정 유형 개념(여정의 형태)이고, 운임 구성은 RT 또는 HRT 기준을 사용할지를 포함하여 해당 여정에 적용할 운임을 산출하는 규칙 집합 및 계산 방법이다.'
sources:
  - name: IATA Travel Agent Tariff Rules — Journey Types (One-Way, Round Trip, Open Jaw, Circle Trip)
    org: IATA
    version: ''
    section: Journey Types
    url: 'https://www.iata.org/en/publications/manuals/'
    tier: association
  - name: ATPCO Fare Filing Rules — Category 6 (Minimum Stay) and Category 7 (Maximum Stay)
    org: ATPCO
    version: ''
    section: 'Categories 6 & 7'
    url: 'https://www.atpco.net/solutions/automated-pricing-and-shopping'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="24" r="4"/><circle cx="36" cy="24" r="4"/><path d="M16 21 32 18"/><path d="M16 27 32 30"/><polyline points="28,14 32,18 28,22"/><polyline points="20,26 16,30 20,34"/></svg>
---

> A round trip is an IATA fare-construction journey type in which a passenger departs from an origin city, travels to one or more destination cities, and returns to the same origin city via a routing that is the reverse or mirror of the outbound, using a single applicable round-trip (RT) or half round-trip (HRT) fare. It is one of the four principal journey types defined in IATA tariff rules alongside one-way, open jaw, and circle trip.

A round trip uses a single round-trip fare (or two half round-trip fares summing to the full RT base) to price the entire outbound-and-return itinerary. ATPCO publishes RT fares in the tariff; fare construction rules require the outbound and inbound to use the same or symmetrically-applicable fare basis codes. Round-trip pricing is distinguished from pricing two back-to-back one-way fares (which may be cheaper or more expensive depending on carrier and route). Where a round trip passes through the same intermediate cities in reverse order on the return leg, it is a pure round trip; if the return uses a different routing through different intermediate cities, it becomes a circle trip. Minimum-stay and maximum-stay rules under ATPCO Category 6 and Category 7 are central to the economics of round-trip fares and are used by airlines to fence leisure demand from business demand.

**한국어 / Korean** — **왕복 여행(Round Trip)** — Round Trip(왕복 여행)은 IATA 운임 구성 여정 유형으로, 승객이 출발지 도시에서 출발해 하나 이상의 목적지를 방문한 후 왕복(RT) 또는 절반 왕복(HRT) 운임을 적용하여 동일한 경로의 역순이나 대칭 루트로 출발지로 돌아오는 여정이다. IATA 운임 규칙에서 단방향(One-Way), 오픈 조(Open Jaw), 일주 여행(Circle Trip)과 함께 4대 주요 여정 유형 중 하나이다.

왕복 여행은 왕복 전체 여정을 단일 RT 운임(또는 두 개의 HRT 운임 합계)으로 가격을 책정한다. ATPCO는 관세에 RT 운임을 게재하며, 운임 구성 규칙은 왕복 구간이 동일하거나 대칭적으로 적용 가능한 운임 기준 코드를 사용하도록 요구한다. 왕복 운임 책정은 두 개의 편도 운임을 연속으로 결합하는 방식(항공사·노선에 따라 더 저렴하거나 비쌀 수 있음)과 구별된다. ATPCO Category 6 및 Category 7의 최소 체류 및 최대 체류 규칙은 왕복 운임 경제성의 핵심이며, 항공사가 레저 수요와 비즈니스 수요를 분리하는 데 활용된다.

**Aliases:** `Return Journey`, `Return Fare`, `RT Fare`, `Return Trip`

# Related
- [Circle Trip](/air/air-shop/circle-trip.md) — contrasts
- [Open Jaw](/air/air-shop/open-jaw.md) — contrasts
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Journey](/air/air-ops/journey.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Fare Construction](/air/air-shop/fare-construction.md) — related

# Distinctions
- **Round Trip** vs [Circle Trip](/air/air-shop/circle-trip.md) — A round trip returns to the origin via a reverse or mirror of the outbound routing; a circle trip also returns to the same origin city but uses a different set of intermediate cities or a different routing on the return, meaning the sectors do not simply retrace the outbound path.
- **Round Trip** vs [Open Jaw](/air/air-shop/open-jaw.md) — A round trip departs from and returns to the same city by a matched routing; an open jaw has a surface sector gap — either the outbound destination differs from the inbound origin, or the inbound destination differs from the outbound origin.
- **Round Trip** vs [Fare Construction](/air/air-shop/fare-construction.md) — A round trip is a journey-type concept (the shape of the itinerary); fare construction is the rule set and calculation method for arriving at the applicable fare for that itinerary, including determining whether RT or HRT bases are used.

# Citations
[1] [IATA — IATA Travel Agent Tariff Rules — Journey Types (One-Way, Round Trip, Open Jaw, Circle Trip) — Journey Types](https://www.iata.org/en/publications/manuals/)
[2] [ATPCO — ATPCO Fare Filing Rules — Category 6 (Minimum Stay) and Category 7 (Maximum Stay) — Categories 6 & 7](https://www.atpco.net/solutions/automated-pricing-and-shopping)
