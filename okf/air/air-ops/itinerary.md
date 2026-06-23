---
type: Document
title: Itinerary
description: 'An Itinerary is the ordered list of travel segments — flights and any surface/non-air elements — that make up a passenger''s journey as recorded in a PNR. The Itinerary/Receipt is also the passenger-facing document that summarizes these segments together with dates, times, booking status, and ticketing information.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: itinerary
vertical: air
category: air-ops
conceptType: document
status: active
term_ko: Itinerary (여정)
definition_ko: Itinerary는 PNR에 기록된 승객 여정을 구성하는 여행 segment(항공편 및 surface/비항공 요소)의 순서화된 목록이다. Itinerary/Receipt는 이 segment들을 날짜·시간·예약 status·발권 정보와 함께 요약한 승객용 문서이기도 하다.
longDef: 'Within a PNR the itinerary holds the air Segments (and their Legs), any ARNK surface gaps, and connecting points, in chronological sequence; it underpins fare construction over the Origin & Destination and journey. The combined Itinerary/Receipt document (for electronic tickets, the e-ticket Itinerary/Receipt) is what the traveller carries and presents, listing flight numbers, carriers, times, fare/ticketing details and conditions. The order and continuity of itinerary segments matter for ticketing validity and for minimum connection time checks.'
longDef_ko: 'PNR 안에서 itinerary는 항공 Segment(및 그 Leg), ARNK surface 구간, 환승점을 시간 순서로 담으며, Origin & Destination과 journey 단위의 운임 산출 기반이 된다. 결합된 Itinerary/Receipt 문서(전자항공권의 경우 e-ticket Itinerary/Receipt)는 승객이 소지·제시하는 것으로 편명, 항공사, 시간, 운임/발권 상세, 조건을 나열한다. itinerary segment의 순서와 연속성은 발권 유효성과 최소 연결시간(MCT) 점검에 중요하다.'
aliases:
  - Travel Itinerary
  - Itinerary Receipt
  - Trip Itinerary
providerTerms:
  - provider: NDC/IATA
    term: Order / OrderItem (flight services)
    context: 'In NDC an itinerary is expressed as an Order composed of OrderItems whose services map to passenger-per-segment deliverables, replacing the PNR itinerary segments.'
    context_ko: 'NDC에서 itinerary는 OrderItem들로 구성된 Order로 표현되며, 그 서비스는 승객×segment 단위 deliverable에 매핑되어 PNR의 itinerary segment를 대체한다.'
    relationship: related
relationships:
  - type: parent
    targetTerm: PNR
  - type: broader
    targetTerm: Segment
  - type: related
    targetTerm: Journey
  - type: narrower
    targetTerm: ARNK
  - type: related
    targetTerm: E-ticket
distinctions:
  - targetTerm: Journey
    explanation: 'A Journey is the fare/pricing concept describing the overall trip (e.g., one-way, round-trip, open-jaw) used in fare construction; the Itinerary is the concrete ordered list of booked segments. One itinerary realizes a journey but adds specific flights, dates and times.'
    explanation_ko: 'Journey는 운임 산출에서 쓰는 전체 여행의 운임 개념(편도, 왕복, open-jaw 등)이고, Itinerary는 예약된 segment의 구체적 순서 목록이다. 하나의 itinerary가 journey를 실현하되 구체적 편명·날짜·시간을 더한다.'
  - targetTerm: E-ticket
    explanation: 'The e-ticket is the electronic record of the contract of carriage and coupons; the Itinerary/Receipt is the human-readable summary issued alongside it. They are related documents, not the same artifact.'
    explanation_ko: 'E-ticket은 운송계약과 coupon의 전자 기록이고, Itinerary/Receipt는 그와 함께 발행되는 사람이 읽을 수 있는 요약본이다. 관련 문서이지 동일한 산출물은 아니다.'
  - targetTerm: Port of Call
    explanation: 'The itinerary is the full ordered plan of the voyage; a port of call is one stop within it, alongside sea days and the turnaround ports.'
    explanation_ko: 'Itinerary는 항해의 전체 순서 계획이고, port of call은 그 안의 한 기항지로 항해일과 회항(turnaround) 항구와 함께 구성된다.'
  - targetTerm: Repositioning Cruise
    explanation: An itinerary is any planned sequence of ports; a repositioning cruise is a specific kind of itinerary defined by different start and end ports because the ship is being moved between regions.
    explanation_ko: 'Itinerary는 계획된 항구의 순서 일반을 뜻하고, 리포지셔닝 크루즈는 선박을 지역 간 이동시키느라 출발·종료 항구가 다른 특정 종류의 일정이다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: 46th Edition (2026)
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
    verifyQuote: 'Significant Changes and Amendments to the 46th edition (2026) of the IATA Passenger Services Conference Resolution Manual include:'
    verified: true
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="11" y="7" width="26" height="34" rx="3"/><circle cx="18" cy="15" r="1.6" fill="currentColor" stroke="none"/><circle cx="18" cy="24" r="1.6" fill="currentColor" stroke="none"/><circle cx="18" cy="33" r="1.6" fill="currentColor" stroke="none"/><path d="M24 15h7M24 24h7M24 33h7"/></svg>
---

> An Itinerary is the ordered list of travel segments — flights and any surface/non-air elements — that make up a passenger's journey as recorded in a PNR. The Itinerary/Receipt is also the passenger-facing document that summarizes these segments together with dates, times, booking status, and ticketing information.

Within a PNR the itinerary holds the air Segments (and their Legs), any ARNK surface gaps, and connecting points, in chronological sequence; it underpins fare construction over the Origin & Destination and journey. The combined Itinerary/Receipt document (for electronic tickets, the e-ticket Itinerary/Receipt) is what the traveller carries and presents, listing flight numbers, carriers, times, fare/ticketing details and conditions. The order and continuity of itinerary segments matter for ticketing validity and for minimum connection time checks.

**한국어 / Korean** — **Itinerary (여정)** — Itinerary는 PNR에 기록된 승객 여정을 구성하는 여행 segment(항공편 및 surface/비항공 요소)의 순서화된 목록이다. Itinerary/Receipt는 이 segment들을 날짜·시간·예약 status·발권 정보와 함께 요약한 승객용 문서이기도 하다.

PNR 안에서 itinerary는 항공 Segment(및 그 Leg), ARNK surface 구간, 환승점을 시간 순서로 담으며, Origin & Destination과 journey 단위의 운임 산출 기반이 된다. 결합된 Itinerary/Receipt 문서(전자항공권의 경우 e-ticket Itinerary/Receipt)는 승객이 소지·제시하는 것으로 편명, 항공사, 시간, 운임/발권 상세, 조건을 나열한다. itinerary segment의 순서와 연속성은 발권 유효성과 최소 연결시간(MCT) 점검에 중요하다.

**Aliases:** `Travel Itinerary`, `Itinerary Receipt`, `Trip Itinerary`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `Order / OrderItem (flight services)` | related | In NDC an itinerary is expressed as an Order composed of OrderItems whose services map to passenger-per-segment deliverables, replacing the PNR itinerary segments. |

# Related
- [PNR](/air/air-ops/pnr.md) — parent
- [Segment](/air/air-ops/segment.md) — broader
- [Journey](/air/air-shop/journey.md) — related
- [ARNK](/air/air-ops/arnk.md) — narrower
- [E-ticket](/air/air-ticket/e-ticket.md) — related

# Distinctions
- **Itinerary** vs [Journey](/air/air-shop/journey.md) — A Journey is the fare/pricing concept describing the overall trip (e.g., one-way, round-trip, open-jaw) used in fare construction; the Itinerary is the concrete ordered list of booked segments. One itinerary realizes a journey but adds specific flights, dates and times.
- **Itinerary** vs [E-ticket](/air/air-ticket/e-ticket.md) — The e-ticket is the electronic record of the contract of carriage and coupons; the Itinerary/Receipt is the human-readable summary issued alongside it. They are related documents, not the same artifact.
- **Itinerary** vs [Port of Call](/cruise/cruise/port-of-call.md) — The itinerary is the full ordered plan of the voyage; a port of call is one stop within it, alongside sea days and the turnaround ports.
- **Itinerary** vs [Repositioning Cruise](/cruise/cruise/repositioning-cruise.md) — An itinerary is any planned sequence of ports; a repositioning cruise is a specific kind of itinerary defined by different start and end ports because the ship is being moved between regions.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — 46th Edition (2026)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
