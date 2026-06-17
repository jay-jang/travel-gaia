---
type: Process
title: Waitlist
description: 'A Waitlist is a holding list for a flight and booking class that has no immediate confirmed Availability, on which a passenger''s request is queued pending seats opening up. The segment is held in a waitlist status (e.g., HL) and is cleared to confirmed (HK) automatically or manually if and when space becomes available.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: waitlist
vertical: air
category: air-ops
conceptType: process
status: active
term_ko: Waitlist (대기 예약 / 웨이팅)
definition_ko: 'Waitlist는 즉시 확약 Availability가 없는 항공편·예약 클래스에 대해 승객 요청을 대기열에 올려 두는 목록으로, 좌석이 생기기를 기다린다. 해당 segment는 대기 status(예: HL)로 유지되며, 좌석이 확보되면 자동 또는 수동으로 확약(HK)으로 clear된다.'
longDef: 'Waitlisting lets agents request a sell on a closed or full class; the host returns or sets a waitlist advice/status code such as HL (''have waitlisted''). Clearance can be triggered at the segment level or at the Origin & Destination level by revenue-management and inventory logic, and is communicated by a status change and PNR/Queue notification. Waitlist priority and limits are carrier-controlled, and unconfirmed waitlisted segments generally cannot be ticketed; they may be auto-cancelled if not cleared by a deadline.'
longDef_ko: 'Waitlist는 마감되거나 만석인 클래스에 sell을 요청할 수 있게 하며, 호스트는 HL(''have waitlisted'') 같은 대기 advice/status 코드를 설정·반환한다. clear는 segment 단위 또는 Origin & Destination 단위로 수익관리·inventory 로직에 의해 트리거되며 status 변경과 PNR/Queue 알림으로 전달된다. 대기 우선순위와 한도는 항공사가 통제하고, 확약되지 않은 waitlist segment는 일반적으로 발권할 수 없으며 마감 시한까지 clear되지 않으면 자동 취소될 수 있다.'
aliases:
  - Wait List
  - Waitlisting
  - Waitlisted
providerTerms:
  - provider: GDS (industry)
    term: HL
    context: Segment status code meaning 'have waitlisted' — held on the waiting list.
    context_ko: '''have waitlisted''를 의미하는 segment status 코드로 대기 목록에 보류된 상태.'
    relationship: related
relationships:
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: RBD
  - type: related
    targetTerm: Booking Status Code
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Overbooking
distinctions:
  - targetTerm: Overbooking
    explanation: 'Overbooking is the carrier deliberately confirming more bookings than seats to offset no-shows; a Waitlist holds unconfirmed requests awaiting space. Waitlisted passengers are not confirmed, whereas overbooked passengers hold confirmed status that may exceed capacity.'
    explanation_ko: 'Overbooking은 no-show를 상쇄하려 좌석보다 많은 예약을 의도적으로 확약하는 것이고, Waitlist는 좌석을 기다리는 미확약 요청을 보유하는 것이다. waitlist 승객은 미확약 상태인 반면 overbooking 승객은 정원을 초과할 수 있는 확약 상태를 보유한다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: ''
    section: ''
    url: ''
  - org: Travelport
    name: Smartpoint Cloud Help — Waitlist flights
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8h16M16 40h16"/><path d="M18 8c0 8 12 10 12 16s-12 8-12 16"/><path d="M30 8c0 8-12 10-12 16s12 8 12 16"/><path d="M21 36h6"/></svg>
---

> A Waitlist is a holding list for a flight and booking class that has no immediate confirmed Availability, on which a passenger's request is queued pending seats opening up. The segment is held in a waitlist status (e.g., HL) and is cleared to confirmed (HK) automatically or manually if and when space becomes available.

Waitlisting lets agents request a sell on a closed or full class; the host returns or sets a waitlist advice/status code such as HL ('have waitlisted'). Clearance can be triggered at the segment level or at the Origin & Destination level by revenue-management and inventory logic, and is communicated by a status change and PNR/Queue notification. Waitlist priority and limits are carrier-controlled, and unconfirmed waitlisted segments generally cannot be ticketed; they may be auto-cancelled if not cleared by a deadline.

**한국어 / Korean** — **Waitlist (대기 예약 / 웨이팅)** — Waitlist는 즉시 확약 Availability가 없는 항공편·예약 클래스에 대해 승객 요청을 대기열에 올려 두는 목록으로, 좌석이 생기기를 기다린다. 해당 segment는 대기 status(예: HL)로 유지되며, 좌석이 확보되면 자동 또는 수동으로 확약(HK)으로 clear된다.

Waitlist는 마감되거나 만석인 클래스에 sell을 요청할 수 있게 하며, 호스트는 HL('have waitlisted') 같은 대기 advice/status 코드를 설정·반환한다. clear는 segment 단위 또는 Origin & Destination 단위로 수익관리·inventory 로직에 의해 트리거되며 status 변경과 PNR/Queue 알림으로 전달된다. 대기 우선순위와 한도는 항공사가 통제하고, 확약되지 않은 waitlist segment는 일반적으로 발권할 수 없으며 마감 시한까지 clear되지 않으면 자동 취소될 수 있다.

**Aliases:** `Wait List`, `Waitlisting`, `Waitlisted`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| GDS (industry) | `HL` | related | Segment status code meaning 'have waitlisted' — held on the waiting list. |

# Related
- [Availability](/air/air-shop/availability.md) — related
- [RBD](/air/air-shop/rbd.md) — related
- [Booking Status Code](/air/air-ops/booking-status-code.md) — related
- [Segment](/air/air-ops/segment.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related

# Distinctions
- **Waitlist** vs [Overbooking](/air/air-shop/overbooking.md) — Overbooking is the carrier deliberately confirming more bookings than seats to offset no-shows; a Waitlist holds unconfirmed requests awaiting space. Waitlisted passengers are not confirmed, whereas overbooked passengers hold confirmed status that may exceed capacity.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
[2] Travelport — Smartpoint Cloud Help — Waitlist flights
