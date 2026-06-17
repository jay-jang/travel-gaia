---
type: Standard Term
title: Open Segment
description: 'An Open Segment is an air segment entered in a PNR with a routing and carrier but no fixed flight number or date (an ''open'' booking), used when a passenger holds the right to travel a sector without a committed date. It carries no confirmed reservation status and must later be date-stamped and confirmed before the passenger can fly.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: open-segment
vertical: air
category: air-ops
conceptType: standard-term
status: active
term_ko: Open Segment (오픈 구간 / open-dated segment)
definition_ko: 'Open Segment는 PNR에 routing과 항공사는 있으나 확정된 편명·날짜가 없는(''open'') 항공 segment로, 승객이 날짜를 확정하지 않은 채 특정 구간을 이용할 권리를 보유할 때 쓰인다. 확약 예약 status가 없으며, 탑승 전에 날짜를 지정하고 확약해야 한다.'
longDef: 'Open segments preserve itinerary continuity and ticket coupon sequence when a future sector''s date is undecided, and historically supported open-dated tickets. They are not actively held seats and many carriers restrict or refuse them (some treat open-dated GDS bookings as a violation subject to fees); fare rules govern whether a coupon may be issued open and how it is later confirmed. They differ from an ARNK, which marks a deliberate surface gap rather than an unscheduled air sector still to be flown on the validating itinerary.'
longDef_ko: 'Open segment는 미래 구간의 날짜가 미정일 때 여정 연속성과 항공권 coupon 순서를 유지하며, 과거 open-dated ticket을 뒷받침했다. 실제로 좌석을 보유하는 것이 아니어서 많은 항공사가 이를 제한·거부한다(일부는 open-dated GDS 예약을 위반으로 보고 수수료를 부과). coupon을 open으로 발권할 수 있는지와 이후 확약 방법은 운임 규정이 정한다. ARNK가 검증 여정상 surface 구간을 의도적으로 표시하는 것인 반면, open segment는 아직 일정이 정해지지 않았으나 향후 비행할 항공 구간이라는 점에서 다르다.'
aliases:
  - Open-dated Segment
  - Open Date Segment
  - Open Air Segment
providerTerms:
  - provider: GDS (industry)
    term: Open segment
    context: Air segment booked with carrier and routing but no flight/date; typically requires at least one confirmed segment in the PNR.
    context_ko: '항공사와 routing만 있고 편명/날짜가 없는 항공 segment로, 보통 PNR에 확약 segment가 최소 1개 필요.'
    relationship: same
relationships:
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: ARNK
  - type: related
    targetTerm: Flight Coupon
  - type: related
    targetTerm: Booking Status Code
distinctions:
  - targetTerm: ARNK
    explanation: ARNK marks a non-air ('arrival unknown') surface gap so the itinerary's continuity is acknowledged; an Open Segment is an actual air sector the passenger intends to fly but without a fixed date/flight yet. ARNK is never flown; an open segment is meant to be confirmed and flown.
    explanation_ko: 'ARNK는 비항공(''arrival unknown'') surface 구간을 표시해 여정 연속성을 인정하는 것이고, Open Segment는 승객이 실제로 비행할 의도가 있으나 아직 날짜/편명이 없는 항공 구간이다. ARNK는 결코 비행하지 않지만 open segment는 확약 후 비행하기로 한 구간이다.'
  - targetTerm: Passive Segment
    explanation: 'A Passive Segment is a non-active segment created to mirror a booking confirmed elsewhere (e.g., for ticketing), holding no live inventory; an Open Segment is undated and unconfirmed by design rather than a copy of an external confirmation.'
    explanation_ko: 'Passive Segment는 다른 곳에서 확약된 예약을 (예: 발권 목적으로) 반영하려 만든 비활성 segment로 실제 inventory를 보유하지 않는다. Open Segment는 외부 확약의 사본이 아니라 본래 날짜 없이 미확약 상태로 설계된 구간이다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: ''
    section: ''
    url: ''
  - org: Travelport
    name: Travelport+ (Galileo) Format Guide
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="24" r="3"/><circle cx="37" cy="24" r="3"/><path d="M15 24h4M22 24h4M29 24h4"/><path d="M37 14v-3M37 37v-3"/></svg>
---

> An Open Segment is an air segment entered in a PNR with a routing and carrier but no fixed flight number or date (an 'open' booking), used when a passenger holds the right to travel a sector without a committed date. It carries no confirmed reservation status and must later be date-stamped and confirmed before the passenger can fly.

Open segments preserve itinerary continuity and ticket coupon sequence when a future sector's date is undecided, and historically supported open-dated tickets. They are not actively held seats and many carriers restrict or refuse them (some treat open-dated GDS bookings as a violation subject to fees); fare rules govern whether a coupon may be issued open and how it is later confirmed. They differ from an ARNK, which marks a deliberate surface gap rather than an unscheduled air sector still to be flown on the validating itinerary.

**한국어 / Korean** — **Open Segment (오픈 구간 / open-dated segment)** — Open Segment는 PNR에 routing과 항공사는 있으나 확정된 편명·날짜가 없는('open') 항공 segment로, 승객이 날짜를 확정하지 않은 채 특정 구간을 이용할 권리를 보유할 때 쓰인다. 확약 예약 status가 없으며, 탑승 전에 날짜를 지정하고 확약해야 한다.

Open segment는 미래 구간의 날짜가 미정일 때 여정 연속성과 항공권 coupon 순서를 유지하며, 과거 open-dated ticket을 뒷받침했다. 실제로 좌석을 보유하는 것이 아니어서 많은 항공사가 이를 제한·거부한다(일부는 open-dated GDS 예약을 위반으로 보고 수수료를 부과). coupon을 open으로 발권할 수 있는지와 이후 확약 방법은 운임 규정이 정한다. ARNK가 검증 여정상 surface 구간을 의도적으로 표시하는 것인 반면, open segment는 아직 일정이 정해지지 않았으나 향후 비행할 항공 구간이라는 점에서 다르다.

**Aliases:** `Open-dated Segment`, `Open Date Segment`, `Open Air Segment`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| GDS (industry) | `Open segment` | same | Air segment booked with carrier and routing but no flight/date; typically requires at least one confirmed segment in the PNR. |

# Related
- [Segment](/air/air-ops/segment.md) — related
- [ARNK](/air/air-ops/arnk.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Booking Status Code](/air/air-ops/booking-status-code.md) — related

# Distinctions
- **Open Segment** vs [ARNK](/air/air-ops/arnk.md) — ARNK marks a non-air ('arrival unknown') surface gap so the itinerary's continuity is acknowledged; an Open Segment is an actual air sector the passenger intends to fly but without a fixed date/flight yet. ARNK is never flown; an open segment is meant to be confirmed and flown.
- **Open Segment** vs [Passive Segment](/air/air-ops/passive-segment.md) — A Passive Segment is a non-active segment created to mirror a booking confirmed elsewhere (e.g., for ticketing), holding no live inventory; an Open Segment is undated and unconfirmed by design rather than a copy of an external confirmation.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
[2] Travelport — Travelport+ (Galileo) Format Guide
