---
type: Business Term
title: Origin & Destination
description: 'Origin & Destination (O&D) is the city or airport pair representing where a passenger''s journey or priced portion begins and ends, irrespective of intermediate connecting points. It is the unit airlines use for availability requests, revenue management, and pricing rather than individual flight legs.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: origin-destination
vertical: air
category: air-shop
conceptType: business-term
status: active
abbreviation: O&D
term_ko: 출발지 및 도착지 (O&D)
definition_ko: 'Origin & Destination(O&D, 출발지 및 도착지)은 중간 연결 지점과 무관하게 승객의 여정 또는 운임 산정 구간이 시작되고 끝나는 도시 또는 공항 쌍을 의미한다. 이는 항공사가 개별 비행 구간(leg) 대신 가용성 요청, 수익 관리, 운임 산정에 사용하는 단위이다.'
longDef: 'O&D pricing and inventory control treat the full market between the true origin and true destination as the optimization unit, so that a connecting itinerary BOS-ORD-LAX is managed as the O&D BOS-LAX rather than as two separate legs. O&D-based availability (often combined with married-segment logic) lets carriers offer different class availability to a through passenger than to local passengers on the same legs. The concept underlies fare construction, where a journey is broken into fare components each defined by an O&D.'
longDef_ko: 'O&D 기반 운임 산정 및 재고 관리는 실제 출발지와 실제 도착지 사이의 전체 시장을 최적화 단위로 취급한다. 따라서 BOS-ORD-LAX 연결 여정은 두 개의 개별 구간이 아니라 BOS-LAX라는 하나의 O&D로 관리된다. O&D 기반 가용성(흔히 결합 구간 로직과 결합됨)을 통해 항공사는 동일 구간이라도 통과 승객과 로컬 승객에게 서로 다른 등급 가용성을 제공할 수 있다. 이 개념은 운임 산정의 기반이 되며, 여기서 여정은 각각 O&D로 정의되는 운임 컴포넌트로 분할된다.'
standardBody: IATA
aliases:
  - Origin and Destination
  - O&D
  - OnD
providerTerms:
  - provider: Sabre
    term: O&D / Origin and Destination
    context: Sabre availability and revenue-management documentation uses O&D as the market unit.
    context_ko: Sabre의 가용성 및 수익 관리 문서는 O&D를 시장 단위로 사용한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Journey
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Married Segment
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Leg
distinctions:
  - targetTerm: Leg
    explanation: 'A leg is a single nonstop flight operation; an O&D is the full market between true origin and destination, possibly spanning multiple legs.'
    explanation_ko: '레그(leg)는 하나의 직항 비행 운항이고, O&D는 실제 출발지와 도착지 사이의 전체 시장으로 여러 레그에 걸칠 수 있다.'
  - targetTerm: Journey
    explanation: 'A journey is the passenger''s entire travel arc; an O&D is a directional point-pair, and a round trip contains two O&Ds.'
    explanation_ko: '여정(journey)은 승객의 전체 여행 흐름이고, O&D는 방향성을 가진 지점 쌍이며, 왕복 여행은 두 개의 O&D를 포함한다.'
  - targetTerm: Fare Component
    explanation: An O&D is a market point-pair; a fare component is the priced unit defined over an O&D with one fare and rule set.
    explanation_ko: 'O&D는 시장의 지점 쌍이고, 운임 컴포넌트는 하나의 운임과 규정 집합을 갖고 O&D 단위로 정의되는 가격 산정 단위이다.'
  - targetTerm: Origin & Destination Control (O&D Control)
    explanation: Origin & Destination is the geographic point-pair (the market unit); O&D control is the revenue-management technique that values seats over that full O&D rather than per leg.
    explanation_ko: 'Origin & Destination은 지리적 지점 쌍(시장 단위)이고, O&D control은 좌석을 leg 단위가 아니라 그 전체 O&D에 걸쳐 평가하는 revenue management 기법이다.'
  - targetTerm: Repositioning Cruise
    explanation: 'In air pricing Origin & Destination frames a journey''s true endpoints for fare construction; a repositioning cruise is the maritime analogue of a genuinely different-origin/different-destination journey, contrasting with the round-trip itineraries that dominate cruise.'
    explanation_ko: '항공 가격 책정에서 Origin & Destination은 운임 구성을 위해 여정의 실제 출발·도착점을 규정하고, 리포지셔닝 크루즈는 출발지와 도착지가 실제로 다른 여정의 해상 대응 개념으로 크루즈에서 주류인 왕복 일정과 대비된다.'
sources:
  - name: IATA fare construction / pricing principles
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
  - name: Airline revenue management literature on O&D control
    org: ''
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="34" r="4"/><path d="M16 32c8-2 12-6 16-16"/><path d="M34 11l3 1 1 3"/><path d="M33 8a4 4 0 11-1 8 4 4 0 011-8z"/></svg>
---

> Origin & Destination (O&D) is the city or airport pair representing where a passenger's journey or priced portion begins and ends, irrespective of intermediate connecting points. It is the unit airlines use for availability requests, revenue management, and pricing rather than individual flight legs.

O&D pricing and inventory control treat the full market between the true origin and true destination as the optimization unit, so that a connecting itinerary BOS-ORD-LAX is managed as the O&D BOS-LAX rather than as two separate legs. O&D-based availability (often combined with married-segment logic) lets carriers offer different class availability to a through passenger than to local passengers on the same legs. The concept underlies fare construction, where a journey is broken into fare components each defined by an O&D.

**한국어 / Korean** — **출발지 및 도착지 (O&D)** — Origin & Destination(O&D, 출발지 및 도착지)은 중간 연결 지점과 무관하게 승객의 여정 또는 운임 산정 구간이 시작되고 끝나는 도시 또는 공항 쌍을 의미한다. 이는 항공사가 개별 비행 구간(leg) 대신 가용성 요청, 수익 관리, 운임 산정에 사용하는 단위이다.

O&D 기반 운임 산정 및 재고 관리는 실제 출발지와 실제 도착지 사이의 전체 시장을 최적화 단위로 취급한다. 따라서 BOS-ORD-LAX 연결 여정은 두 개의 개별 구간이 아니라 BOS-LAX라는 하나의 O&D로 관리된다. O&D 기반 가용성(흔히 결합 구간 로직과 결합됨)을 통해 항공사는 동일 구간이라도 통과 승객과 로컬 승객에게 서로 다른 등급 가용성을 제공할 수 있다. 이 개념은 운임 산정의 기반이 되며, 여기서 여정은 각각 O&D로 정의되는 운임 컴포넌트로 분할된다.

**Aliases:** `Origin and Destination`, `O&D`, `OnD`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre | `O&D / Origin and Destination` | same | Sabre availability and revenue-management documentation uses O&D as the market unit. |

# Related
- [Journey](/air/air-shop/journey.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [Married Segment](/air/air-ops/married-segment.md) — related
- [Segment](/air/air-ops/segment.md) — related
- [Leg](/air/air-ops/leg.md) — related

# Distinctions
- **Origin & Destination** vs [Leg](/air/air-ops/leg.md) — A leg is a single nonstop flight operation; an O&D is the full market between true origin and destination, possibly spanning multiple legs.
- **Origin & Destination** vs [Journey](/air/air-shop/journey.md) — A journey is the passenger's entire travel arc; an O&D is a directional point-pair, and a round trip contains two O&Ds.
- **Origin & Destination** vs [Fare Component](/air/air-shop/fare-component.md) — An O&D is a market point-pair; a fare component is the priced unit defined over an O&D with one fare and rule set.
- **Origin & Destination** vs [Origin & Destination Control (O&D Control)](/air/air-shop/origin-destination-control.md) — Origin & Destination is the geographic point-pair (the market unit); O&D control is the revenue-management technique that values seats over that full O&D rather than per leg.
- **Origin & Destination** vs [Repositioning Cruise](/cruise/cruise/repositioning-cruise.md) — In air pricing Origin & Destination frames a journey's true endpoints for fare construction; a repositioning cruise is the maritime analogue of a genuinely different-origin/different-destination journey, contrasting with the round-trip itineraries that dominate cruise.

# Citations
[1] [IATA — IATA fare construction / pricing principles](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
[2] Airline revenue management literature on O&D control
