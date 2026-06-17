---
type: Document
title: Itinerary
description: 'An Itinerary is the ordered list of travel segments — flights and any surface/non-air elements — that make up a passenger''s journey as recorded in a PNR. The Itinerary/Receipt is also the passenger-facing document that summarizes these segments together with dates, times, booking status, and ticketing information.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: itinerary
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
relationships:
  - type: related
    targetTerm: PNR
  - type: broader
    targetTerm: Segment
  - type: related
    targetTerm: Journey
  - type: related
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
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="11" y="7" width="26" height="34" rx="3"/><circle cx="18" cy="15" r="1.6" fill="currentColor" stroke="none"/><circle cx="18" cy="24" r="1.6" fill="currentColor" stroke="none"/><circle cx="18" cy="33" r="1.6" fill="currentColor" stroke="none"/><path d="M24 15h7M24 24h7M24 33h7"/></svg>
---

> An Itinerary is the ordered list of travel segments — flights and any surface/non-air elements — that make up a passenger's journey as recorded in a PNR. The Itinerary/Receipt is also the passenger-facing document that summarizes these segments together with dates, times, booking status, and ticketing information.

Within a PNR the itinerary holds the air Segments (and their Legs), any ARNK surface gaps, and connecting points, in chronological sequence; it underpins fare construction over the Origin & Destination and journey. The combined Itinerary/Receipt document (for electronic tickets, the e-ticket Itinerary/Receipt) is what the traveller carries and presents, listing flight numbers, carriers, times, fare/ticketing details and conditions. The order and continuity of itinerary segments matter for ticketing validity and for minimum connection time checks.

**한국어 / Korean** — **Itinerary (여정)** — Itinerary는 PNR에 기록된 승객 여정을 구성하는 여행 segment(항공편 및 surface/비항공 요소)의 순서화된 목록이다. Itinerary/Receipt는 이 segment들을 날짜·시간·예약 status·발권 정보와 함께 요약한 승객용 문서이기도 하다.

PNR 안에서 itinerary는 항공 Segment(및 그 Leg), ARNK surface 구간, 환승점을 시간 순서로 담으며, Origin & Destination과 journey 단위의 운임 산출 기반이 된다. 결합된 Itinerary/Receipt 문서(전자항공권의 경우 e-ticket Itinerary/Receipt)는 승객이 소지·제시하는 것으로 편명, 항공사, 시간, 운임/발권 상세, 조건을 나열한다. itinerary segment의 순서와 연속성은 발권 유효성과 최소 연결시간(MCT) 점검에 중요하다.

**Aliases:** `Travel Itinerary`, `Itinerary Receipt`, `Trip Itinerary`

# Related
- [PNR](/air-ops/pnr.md) — related
- [Segment](/air-ops/segment.md) — broader
- [Journey](/air-shop/journey.md) — related
- [ARNK](/air-ops/arnk.md) — related
- [E-ticket](/air-ticket/e-ticket.md) — related

# Distinctions
- **Itinerary** vs [Journey](/air-shop/journey.md) — A Journey is the fare/pricing concept describing the overall trip (e.g., one-way, round-trip, open-jaw) used in fare construction; the Itinerary is the concrete ordered list of booked segments. One itinerary realizes a journey but adds specific flights, dates and times.
- **Itinerary** vs [E-ticket](/air-ticket/e-ticket.md) — The e-ticket is the electronic record of the contract of carriage and coupons; the Itinerary/Receipt is the human-readable summary issued alongside it. They are related documents, not the same artifact.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
