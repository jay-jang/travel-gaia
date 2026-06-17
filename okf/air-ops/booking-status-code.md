---
type: Code
title: Booking Status Code
description: 'A Booking Status Code is a standardized two-letter code attached to a PNR air segment that indicates the segment''s reservation state or the action/advice exchanged between systems — for example HK (holds confirmed), HL (waitlisted), or UN (unable, flight not operating). The codes drive how segments are sold, confirmed, changed, and cancelled across GDS and airline hosts.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: booking-status-code
category: air-ops
conceptType: code
status: active
term_ko: Booking Status Code (예약 status 코드 / segment status 코드)
definition_ko: 'Booking Status Code는 PNR 항공 segment에 붙는 표준 2자리 코드로, 해당 segment의 예약 상태 또는 시스템 간 교환되는 action/advice를 나타낸다. 예: HK(확약 보유), HL(waitlist), UN(불가, 미운항). 이 코드들은 GDS와 항공사 호스트 전반에서 segment의 판매·확약·변경·취소 방식을 좌우한다.'
longDef: 'Status codes split into action/request codes used when selling or messaging (e.g., NN need, SS sold, HN have requested) and advice/reply or holding codes returned or held in the PNR (e.g., HK confirmed, HL waitlisted, KK confirming, UC unable, UN flight not operating, HX cancelled by carrier, TK/TL schedule-change advices). Inactive codes such as UN, UC, HX and NO are moved to PNR history. The codes are an interline teletype/EDIFACT convention so that any carrier or GDS interprets a segment''s state identically; agents must action certain codes (e.g., respond to schedule-change codes) before ticketing.'
longDef_ko: 'status 코드는 판매·메시징 시 쓰는 action/request 코드(예: NN need, SS sold, HN have requested)와 PNR에 반환·보유되는 advice/reply 또는 holding 코드(예: HK 확약, HL waitlist, KK confirming, UC 불가, UN 미운항, HX 항공사 취소, TK/TL 스케줄 변경 advice)로 나뉜다. UN, UC, HX, NO 같은 비활성 코드는 PNR history로 이동한다. 이 코드는 interline teletype/EDIFACT 관례로, 어떤 항공사·GDS든 segment 상태를 동일하게 해석하게 한다. 발권 전 특정 코드(예: 스케줄 변경 코드)에는 agent가 반드시 조치해야 한다.'
aliases:
  - Segment Status Code
  - Status Code
  - Action Code
  - Advice Code
providerTerms:
  - provider: GDS (industry)
    term: HK / HL / SS / UC / UN / HX / KK
    context: 'Common segment status codes: confirmed, waitlisted, sold, unable, not operating, carrier-cancelled, confirming.'
    context_ko: '일반 segment status 코드: 확약, waitlist, 판매됨, 불가, 미운항, 항공사 취소, confirming.'
    relationship: same
  - provider: Travelport
    term: PNR Status Codes
    context: Universal API documented air status/advice codes for segment state.
    context_ko: segment 상태를 나타내는 Universal API의 항공 status/advice 코드.
    relationship: same
relationships:
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Waitlist
  - type: related
    targetTerm: Schedule Change
  - type: related
    targetTerm: Availability
distinctions:
  - targetTerm: RBD
    explanation: An RBD (booking/class code) is a single-letter inventory class that prices and allocates the fare; a Booking Status Code is a two-letter code describing the reservation state of a segment regardless of which RBD it is booked in.
    explanation_ko: 'RBD(예약 클래스 코드)는 운임을 매기고 배정하는 1자리 inventory 클래스이고, Booking Status Code는 어떤 RBD로 예약됐든 segment의 예약 상태를 나타내는 2자리 코드다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM) / AIRIMP
    version: ''
    section: ''
    url: ''
  - org: Travelport
    name: Universal API — Air Status Codes
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="13" width="34" height="22" rx="3"/><path d="M13 24h5l3 5 4-10 3 5h7"/></svg>
---

> A Booking Status Code is a standardized two-letter code attached to a PNR air segment that indicates the segment's reservation state or the action/advice exchanged between systems — for example HK (holds confirmed), HL (waitlisted), or UN (unable, flight not operating). The codes drive how segments are sold, confirmed, changed, and cancelled across GDS and airline hosts.

Status codes split into action/request codes used when selling or messaging (e.g., NN need, SS sold, HN have requested) and advice/reply or holding codes returned or held in the PNR (e.g., HK confirmed, HL waitlisted, KK confirming, UC unable, UN flight not operating, HX cancelled by carrier, TK/TL schedule-change advices). Inactive codes such as UN, UC, HX and NO are moved to PNR history. The codes are an interline teletype/EDIFACT convention so that any carrier or GDS interprets a segment's state identically; agents must action certain codes (e.g., respond to schedule-change codes) before ticketing.

**한국어 / Korean** — **Booking Status Code (예약 status 코드 / segment status 코드)** — Booking Status Code는 PNR 항공 segment에 붙는 표준 2자리 코드로, 해당 segment의 예약 상태 또는 시스템 간 교환되는 action/advice를 나타낸다. 예: HK(확약 보유), HL(waitlist), UN(불가, 미운항). 이 코드들은 GDS와 항공사 호스트 전반에서 segment의 판매·확약·변경·취소 방식을 좌우한다.

status 코드는 판매·메시징 시 쓰는 action/request 코드(예: NN need, SS sold, HN have requested)와 PNR에 반환·보유되는 advice/reply 또는 holding 코드(예: HK 확약, HL waitlist, KK confirming, UC 불가, UN 미운항, HX 항공사 취소, TK/TL 스케줄 변경 advice)로 나뉜다. UN, UC, HX, NO 같은 비활성 코드는 PNR history로 이동한다. 이 코드는 interline teletype/EDIFACT 관례로, 어떤 항공사·GDS든 segment 상태를 동일하게 해석하게 한다. 발권 전 특정 코드(예: 스케줄 변경 코드)에는 agent가 반드시 조치해야 한다.

**Aliases:** `Segment Status Code`, `Status Code`, `Action Code`, `Advice Code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| GDS (industry) | `HK / HL / SS / UC / UN / HX / KK` | same | Common segment status codes: confirmed, waitlisted, sold, unable, not operating, carrier-cancelled, confirming. |
| Travelport | `PNR Status Codes` | same | Universal API documented air status/advice codes for segment state. |

# Related
- [Segment](/air-ops/segment.md) — related
- [PNR](/air-ops/pnr.md) — related
- [Waitlist](/air-ops/waitlist.md) — related
- [Schedule Change](/air-partner/schedule-change.md) — related
- [Availability](/air-shop/availability.md) — related

# Distinctions
- **Booking Status Code** vs [RBD](/air-shop/rbd.md) — An RBD (booking/class code) is a single-letter inventory class that prices and allocates the fare; a Booking Status Code is a two-letter code describing the reservation state of a segment regardless of which RBD it is booked in.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM) / AIRIMP
[2] Travelport — Universal API — Air Status Codes
