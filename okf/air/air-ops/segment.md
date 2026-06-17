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
relationships:
  - type: parent
    targetTerm: Leg
  - type: child
    targetTerm: PNR
  - type: related
    targetTerm: Married Segment
  - type: related
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
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="34" r="3.5"/><circle cx="38" cy="14" r="3.5"/><line x1="12.6" y1="31.4" x2="35.4" y2="16.6"/></svg>
---

> A segment is a single bookable air transportation unit between a board point and an off point as marketed and sold under one flight number, regardless of how many physical takeoffs and landings (legs) it contains. It is the unit of inventory that is sold, ticketed, and stored as an itinerary element in a PNR.

A segment corresponds to a flight number and a booking class (RBD) from origin to destination as offered for sale. A direct flight that makes an intermediate stop without a change of flight number is one segment but two legs. Segments are the basis for availability requests, fare component construction, and flight coupons; each ticketed segment normally maps to one flight coupon.

**한국어 / Korean** — **구간(Segment)** — segment(구간)은 하나의 편명으로 마케팅되고 판매되는, 탑승지(board point)와 하기지(off point) 사이의 단일 예약 가능 항공 운송 단위로, 물리적인 이착륙(leg)이 몇 번이든 관계없이 하나의 단위로 본다. 이는 판매·발권되고 PNR에 여정 요소로 저장되는 좌석 재고(inventory) 단위다.

segment는 판매를 위해 제공되는 출발지에서 도착지까지의 편명과 예약 등급(RBD)에 대응한다. 편명 변경 없이 중간 기착하는 직항편은 하나의 segment이지만 두 개의 leg이다. segment는 좌석 가용성 조회, 운임 구성 요소(fare component) 구성, 항공권 쿠폰의 기준이 되며, 발권된 각 segment는 일반적으로 하나의 flight coupon에 대응한다.

**Aliases:** `Booking Segment`, `Flight Segment`, `Air Segment`

# Related
- [Leg](/air/air-ops/leg.md) — parent
- [PNR](/air/air-ops/pnr.md) — child
- [Married Segment](/air/air-ops/married-segment.md) — related
- [Passive Segment](/air/air-ops/passive-segment.md) — related
- [RBD](/air/air-shop/rbd.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related

# Distinctions
- **Segment** vs [Leg](/air/air-ops/leg.md) — A segment is the marketed origin-to-destination flight under one flight number; a leg is a single physical takeoff-to-landing hop, so one segment can contain multiple legs.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
[2] IATA — Standard Schedules Information Manual (SSIM)
