---
type: Business Term
title: ARNK
description: ARNK ('Arrival Unknown') is a non-air itinerary element inserted into a PNR to indicate a surface (non-flown) break between the arrival point of one flight segment and the departure point of the next. It tells the system the gap is intentional rather than an error and is not a bookable flight.
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: arnk
vertical: air
category: air-ops
conceptType: business-term
status: active
abbreviation: ARNK
term_ko: '지상 구간 표시(ARNK, 도착지 미상)'
definition_ko: 'ARNK(''Arrival Unknown'', 도착지 미상)는 한 항공 segment의 도착 지점과 다음 segment의 출발 지점 사이의 지상(비운항) 단절을 나타내기 위해 PNR에 삽입되는 비항공 여정 요소다. 해당 공백이 오류가 아니라 의도된 것이며 예약 가능한 항공편이 아님을 시스템에 알린다.'
longDef: 'An ARNK element is added when a passenger flies into one city and departs from a different city (an open-jaw or surface sector), bridging the gap so the itinerary remains continuous for ticketing and fare construction. It carries no flight, holds no inventory, and is non-revenue; many GDSs warn or require an ARNK when off-points do not match so the agent confirms the surface segment is deliberate.'
longDef_ko: 'ARNK 요소는 승객이 한 도시로 입국하여 다른 도시에서 출발할 때(오픈조 또는 지상 구간) 추가되며, 그 공백을 연결하여 발권 및 운임 구성을 위해 여정이 연속성을 유지하도록 한다. 항공편을 포함하지 않고, 재고를 점유하지 않으며, 수익이 발생하지 않는다. 많은 GDS는 하기지가 일치하지 않을 때 ARNK를 경고하거나 요구하여, 에이전트가 해당 지상 구간이 의도된 것임을 확인하도록 한다.'
aliases:
  - Arrival Unknown
  - Arunk
  - Surface Segment
  - Off-Point Segment
providerTerms:
  - provider: Sabre
    term: ARNK
    context: Sabre inserts an ARNK segment to mark a surface break in the itinerary
    context_ko: Sabre는 여정의 지상 구간 단절을 표시하기 위해 ARNK segment를 삽입한다
    relationship: same
  - provider: Amadeus
    term: ARNK
    context: Amadeus uses ARNK to denote an arrival-unknown surface sector
    context_ko: Amadeus는 도착지 미상 지상 구간을 나타내기 위해 ARNK를 사용한다
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Segment
  - type: related
    targetTerm: Passive Segment
  - type: related
    targetTerm: Journey
  - type: related
    targetTerm: Origin & Destination
distinctions:
  - targetTerm: Passive Segment
    explanation: 'ARNK marks a surface (non-flown) gap with no flight at all, whereas a passive segment is an informational air segment for a flight confirmed outside the active inventory.'
    explanation_ko: 'ARNK는 항공편이 전혀 없는 지상(비운항) 공백을 표시하는 반면, passive segment는 능동 재고 외부에서 확약된 항공편에 대한 정보성 항공 segment다.'
  - targetTerm: Leg
    explanation: 'ARNK is a non-flown placeholder bridging a surface break, while a leg is an actual physical flown hop of an aircraft.'
    explanation_ko: 'ARNK는 지상 구간 단절을 연결하는 비운항 자리표시자인 반면, leg은 항공기의 실제 물리적 운항 구간이다.'
  - targetTerm: Open Segment
    explanation: ARNK marks a non-air ('arrival unknown') surface gap so the itinerary's continuity is acknowledged; an Open Segment is an actual air sector the passenger intends to fly but without a fixed date/flight yet. ARNK is never flown; an open segment is meant to be confirmed and flown.
    explanation_ko: 'ARNK는 비항공(''arrival unknown'') surface 구간을 표시해 여정 연속성을 인정하는 것이고, Open Segment는 승객이 실제로 비행할 의도가 있으나 아직 날짜/편명이 없는 항공 구간이다. ARNK는 결코 비행하지 않지만 open segment는 확약 후 비행하기로 한 구간이다.'
sources:
  - name: Sabre Format Finder — ARNK
    org: Sabre
    version: ''
    section: ''
    url: 'https://developer.sabre.com/docs/soap_apis/management/itinerary/Add_Arrival_Unknown_Segment'
  - name: Amadeus Functional Documentation — Itinerary Elements
    org: Amadeus
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="24" r="3"/><circle cx="40" cy="24" r="3"/><line x1="13" y1="24" x2="19" y2="24"/><line x1="29" y1="24" x2="35" y2="24"/><path d="M21 19 L27 29 M27 19 L21 29"/></svg>
---

> ARNK ('Arrival Unknown') is a non-air itinerary element inserted into a PNR to indicate a surface (non-flown) break between the arrival point of one flight segment and the departure point of the next. It tells the system the gap is intentional rather than an error and is not a bookable flight.

An ARNK element is added when a passenger flies into one city and departs from a different city (an open-jaw or surface sector), bridging the gap so the itinerary remains continuous for ticketing and fare construction. It carries no flight, holds no inventory, and is non-revenue; many GDSs warn or require an ARNK when off-points do not match so the agent confirms the surface segment is deliberate.

**한국어 / Korean** — **지상 구간 표시(ARNK, 도착지 미상)** — ARNK('Arrival Unknown', 도착지 미상)는 한 항공 segment의 도착 지점과 다음 segment의 출발 지점 사이의 지상(비운항) 단절을 나타내기 위해 PNR에 삽입되는 비항공 여정 요소다. 해당 공백이 오류가 아니라 의도된 것이며 예약 가능한 항공편이 아님을 시스템에 알린다.

ARNK 요소는 승객이 한 도시로 입국하여 다른 도시에서 출발할 때(오픈조 또는 지상 구간) 추가되며, 그 공백을 연결하여 발권 및 운임 구성을 위해 여정이 연속성을 유지하도록 한다. 항공편을 포함하지 않고, 재고를 점유하지 않으며, 수익이 발생하지 않는다. 많은 GDS는 하기지가 일치하지 않을 때 ARNK를 경고하거나 요구하여, 에이전트가 해당 지상 구간이 의도된 것임을 확인하도록 한다.

**Aliases:** `Arrival Unknown`, `Arunk`, `Surface Segment`, `Off-Point Segment`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre | `ARNK` | same | Sabre inserts an ARNK segment to mark a surface break in the itinerary |
| Amadeus | `ARNK` | same | Amadeus uses ARNK to denote an arrival-unknown surface sector |

# Related
- [Segment](/air/air-ops/segment.md) — contrasts
- [Passive Segment](/air/air-ops/passive-segment.md) — related
- [Journey](/air/air-shop/journey.md) — related
- [Origin & Destination](/air/air-shop/origin-destination.md) — related

# Distinctions
- **ARNK** vs [Passive Segment](/air/air-ops/passive-segment.md) — ARNK marks a surface (non-flown) gap with no flight at all, whereas a passive segment is an informational air segment for a flight confirmed outside the active inventory.
- **ARNK** vs [Leg](/air/air-ops/leg.md) — ARNK is a non-flown placeholder bridging a surface break, while a leg is an actual physical flown hop of an aircraft.
- **ARNK** vs [Open Segment](/air/air-ops/open-segment.md) — ARNK marks a non-air ('arrival unknown') surface gap so the itinerary's continuity is acknowledged; an Open Segment is an actual air sector the passenger intends to fly but without a fixed date/flight yet. ARNK is never flown; an open segment is meant to be confirmed and flown.

# Citations
[1] [Sabre — Sabre Format Finder — ARNK](https://developer.sabre.com/docs/soap_apis/management/itinerary/Add_Arrival_Unknown_Segment)
[2] Amadeus — Amadeus Functional Documentation — Itinerary Elements
