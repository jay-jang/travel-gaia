---
type: Business Term
title: Segment
description: 'A segment is a single bookable air transportation unit between a board point and an off point as marketed and sold under one flight number, regardless of how many physical takeoffs and landings (legs) it contains. It is the unit of inventory that is sold, ticketed, and stored as an itinerary element in a PNR.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: segment
vertical: air
category: air-ops
conceptType: business-term
status: active
term_ko: 구간(Segment)
definition_ko: 'segment(구간)은 하나의 편명으로 마케팅되고 판매되는, 탑승지(board point)와 하기지(off point) 사이의 단일 예약 가능 항공 운송 단위로, 물리적인 이착륙(leg)이 몇 번이든 관계없이 하나의 단위로 본다. 이는 판매·발권되고 PNR에 여정 요소로 저장되는 좌석 재고(inventory) 단위다.'
longDef: 'A segment corresponds to a flight number and a booking class (RBD) from origin to destination as offered for sale. A direct flight that makes an intermediate stop without a change of flight number is one segment but two legs. Segments are the basis for availability requests, fare component construction, and flight coupons; each ticketed segment normally maps to one flight coupon.'
longDef_ko: 'segment는 판매를 위해 제공되는 출발지에서 도착지까지의 편명과 예약 등급(RBD)에 대응한다. 편명 변경 없이 중간 기착하는 직항편은 하나의 segment이지만 두 개의 leg이다. segment는 좌석 가용성 조회, 운임 구성 요소(fare component) 구성, 항공권 쿠폰의 기준이 되며, 발권된 각 segment는 일반적으로 하나의 flight coupon에 대응한다.'
standardBody: IATA
aliases:
  - Booking Segment
  - Flight Segment
  - Air Segment
providerTerms:
  - provider: NDC/IATA
    term: Flight Segment / Service (in OrderItem)
    context: 'NDC retains the flight segment as a routing unit, but the commercial unit becomes the per-passenger-per-segment Service inside an OrderItem rather than a sold segment in a PNR.'
    context_ko: 'NDC는 flight segment를 routing 단위로 유지하되, 상업 단위는 PNR의 판매 segment 대신 OrderItem 내 승객×segment 단위 Service가 된다.'
    relationship: related
relationships:
  - type: parent
    targetTerm: Leg
  - type: child
    targetTerm: PNR
  - type: narrower
    targetTerm: Married Segment
  - type: narrower
    targetTerm: Passive Segment
  - type: related
    targetTerm: RBD
  - type: related
    targetTerm: Flight Coupon
  - type: related
    targetTerm: Fare Component
distinctions:
  - targetTerm: Leg
    explanation: 'A segment is the marketed origin-to-destination flight under one flight number; a leg is a single physical takeoff-to-landing hop, so one segment can contain multiple legs.'
    explanation_ko: 'segment는 하나의 편명으로 마케팅되는 출발지에서 도착지까지의 항공편이며, leg은 단일 물리적 이착륙 구간이므로 하나의 segment가 여러 개의 leg을 포함할 수 있다.'
  - targetTerm: Connection
    explanation: A segment is a single marketed flight portion of an itinerary; a connection is the relationship between two consecutive segments where the passenger transfers between flights.
    explanation_ko: '세그먼트는 여정에서 판매되는 단일 항공편 부분이고, connection은 승객이 두 항공편 사이를 환승하는, 연속된 두 세그먼트 간의 관계다.'
  - targetTerm: Fare Component
    explanation: A segment is one booked flight portion; a fare component is a priced span bounded by fare breaks and may cover several segments.
    explanation_ko: '세그먼트는 예약된 하나의 비행 구간이고, 운임 컴포넌트는 운임 분기로 경계가 정해진 가격 산정 구간으로 여러 세그먼트를 포함할 수 있다.'
  - targetTerm: Flight Coupon
    explanation: A segment is the reservation/operational unit of travel; a flight coupon is the corresponding revenue/entitlement portion of the ticket.
    explanation_ko: 'Segment는 여행의 예약/운항 단위이며, Flight Coupon은 이에 대응하는 항공권의 수익/권리 부분이다.'
  - targetTerm: Flight Number
    explanation: A flight number identifies a scheduled flight; a segment is the booked flight number plus a specific date and origin/destination held in a PNR.
    explanation_ko: '편명은 정기 항공편을 식별하고, 세그먼트(segment)는 PNR에 보관되는 특정 날짜·출발지/도착지가 결합된 예약된 편명이다.'
  - targetTerm: Journey
    explanation: A segment is one priced/booked flight portion within a journey; the journey is the full set of segments end to end.
    explanation_ko: '세그먼트는 여정 내에서 가격이 매겨지거나 예약된 하나의 비행 구간이고, 여정은 처음부터 끝까지의 전체 세그먼트 집합이다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: 46th Edition (2026)
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
    verifyQuote: 'Significant Changes and Amendments to the 46th edition (2026) of the IATA Passenger Services Conference Resolution Manual include:'
    verified: true
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: 36th Edition (2026)
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
    tier: association
    verifyQuote: 'Significant Changes and Amendments to the 36th edition (2026) of the Standard Schedules Information Manual (SSIM) include:'
    verified: true
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="34" r="3.5"/><circle cx="38" cy="14" r="3.5"/><line x1="12.6" y1="31.4" x2="35.4" y2="16.6"/></svg>
---

> A segment is a single bookable air transportation unit between a board point and an off point as marketed and sold under one flight number, regardless of how many physical takeoffs and landings (legs) it contains. It is the unit of inventory that is sold, ticketed, and stored as an itinerary element in a PNR.

A segment corresponds to a flight number and a booking class (RBD) from origin to destination as offered for sale. A direct flight that makes an intermediate stop without a change of flight number is one segment but two legs. Segments are the basis for availability requests, fare component construction, and flight coupons; each ticketed segment normally maps to one flight coupon.

**한국어 / Korean** — **구간(Segment)** — segment(구간)은 하나의 편명으로 마케팅되고 판매되는, 탑승지(board point)와 하기지(off point) 사이의 단일 예약 가능 항공 운송 단위로, 물리적인 이착륙(leg)이 몇 번이든 관계없이 하나의 단위로 본다. 이는 판매·발권되고 PNR에 여정 요소로 저장되는 좌석 재고(inventory) 단위다.

segment는 판매를 위해 제공되는 출발지에서 도착지까지의 편명과 예약 등급(RBD)에 대응한다. 편명 변경 없이 중간 기착하는 직항편은 하나의 segment이지만 두 개의 leg이다. segment는 좌석 가용성 조회, 운임 구성 요소(fare component) 구성, 항공권 쿠폰의 기준이 되며, 발권된 각 segment는 일반적으로 하나의 flight coupon에 대응한다.

**Aliases:** `Booking Segment`, `Flight Segment`, `Air Segment`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `Flight Segment / Service (in OrderItem)` | related | NDC retains the flight segment as a routing unit, but the commercial unit becomes the per-passenger-per-segment Service inside an OrderItem rather than a sold segment in a PNR. |

# Related
- [Leg](/air/air-ops/leg.md) — parent
- [PNR](/air/air-ops/pnr.md) — child
- [Married Segment](/air/air-ops/married-segment.md) — narrower
- [Passive Segment](/air/air-ops/passive-segment.md) — narrower
- [RBD](/air/air-shop/rbd.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related

# Distinctions
- **Segment** vs [Leg](/air/air-ops/leg.md) — A segment is the marketed origin-to-destination flight under one flight number; a leg is a single physical takeoff-to-landing hop, so one segment can contain multiple legs.
- **Segment** vs [Connection](/air/air-partner/connection.md) — A segment is a single marketed flight portion of an itinerary; a connection is the relationship between two consecutive segments where the passenger transfers between flights.
- **Segment** vs [Fare Component](/air/air-shop/fare-component.md) — A segment is one booked flight portion; a fare component is a priced span bounded by fare breaks and may cover several segments.
- **Segment** vs [Flight Coupon](/air/air-ticket/flight-coupon.md) — A segment is the reservation/operational unit of travel; a flight coupon is the corresponding revenue/entitlement portion of the ticket.
- **Segment** vs [Flight Number](/common/codes/flight-number.md) — A flight number identifies a scheduled flight; a segment is the booked flight number plus a specific date and origin/destination held in a PNR.
- **Segment** vs [Journey](/air/air-shop/journey.md) — A segment is one priced/booked flight portion within a journey; the journey is the full set of segments end to end.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — 46th Edition (2026)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [IATA — Standard Schedules Information Manual (SSIM) — 36th Edition (2026)](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
