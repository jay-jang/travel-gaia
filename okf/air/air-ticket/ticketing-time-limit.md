---
type: Business Term
title: Ticketing Time Limit
description: The deadline by which a booked reservation must be ticketed (paid and issued) or the airline may automatically cancel the held space. It may be set by the airline/GDS or imposed by the applicable fare rule (advance reservation/ticketing requirement).
tags:
  - air-ticket
  - active
  - ATPCO
timestamp: '2026-06-15T00:00:00Z'
id: ticketing-time-limit
vertical: air
category: air-ticket
conceptType: business-term
status: active
abbreviation: TTL
term_ko: 발권 시한 (TTL)
definition_ko: '예약된 건이 발권(지불 및 발행)되어야 하는 기한으로, 이를 넘기면 항공사가 확보된 좌석을 자동으로 취소할 수 있다. 이 기한은 항공사/GDS에 의해 설정되거나 해당 운임 규정(사전 예약/발권 요건)에 의해 부과될 수 있다.'
longDef: 'Ticketing time limits arise from two main sources: carrier/GDS-imposed limits managed via queues and option/timer elements in the PNR, and fare-rule-driven limits (ATPCO Category 5, Advance Reservations/Ticketing, which can require ticketing within a number of days of booking or by a fixed date before departure). Failure to ticket by the TTL typically results in auto-cancellation of the segments and may forfeit the booked fare. TTL handling is a core part of agency and airline ticketing workflows, often monitored through GDS queues.'
longDef_ko: '발권 시한은 두 가지 주요 출처에서 발생한다. 하나는 PNR의 큐(queue) 및 옵션/타이머 요소를 통해 관리되는 항공사/GDS 부과 시한이고, 다른 하나는 운임 규정에 의한 시한(ATPCO Category 5, 사전 예약/발권으로, 예약 후 일정 일수 이내 또는 출발 전 특정 날짜까지 발권을 요구할 수 있음)이다. TTL까지 발권하지 못하면 일반적으로 해당 구간이 자동 취소되며 예약된 운임이 소멸될 수 있다. TTL 처리는 대리점 및 항공사 발권 업무의 핵심 요소로, 흔히 GDS 큐를 통해 모니터링된다.'
standardBody: ATPCO
aliases:
  - Time Limit
  - Time to Ticket
  - Last Ticketing Date
  - TTL
relationships:
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Queue
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: ATPCO
distinctions:
  - targetTerm: Queue
    explanation: A queue is the GDS workflow bucket where pending-ticketing PNRs are placed; the ticketing time limit is the deadline itself.
    explanation_ko: '큐(queue)는 발권 대기 중인 PNR이 배치되는 GDS 업무 처리 버킷이며, 발권 시한은 기한 그 자체이다.'
sources:
  - name: ATPCO Fare Rules — Category 5 (Advance Reservations/Ticketing)
    org: ATPCO
    version: ''
    section: ''
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="24" height="16" rx="3"/><path d="M11 18h8M11 22h5"/><circle cx="34" cy="32" r="9"/><path d="M34 27v5l3 3"/></svg>
---

> The deadline by which a booked reservation must be ticketed (paid and issued) or the airline may automatically cancel the held space. It may be set by the airline/GDS or imposed by the applicable fare rule (advance reservation/ticketing requirement).

Ticketing time limits arise from two main sources: carrier/GDS-imposed limits managed via queues and option/timer elements in the PNR, and fare-rule-driven limits (ATPCO Category 5, Advance Reservations/Ticketing, which can require ticketing within a number of days of booking or by a fixed date before departure). Failure to ticket by the TTL typically results in auto-cancellation of the segments and may forfeit the booked fare. TTL handling is a core part of agency and airline ticketing workflows, often monitored through GDS queues.

**한국어 / Korean** — **발권 시한 (TTL)** — 예약된 건이 발권(지불 및 발행)되어야 하는 기한으로, 이를 넘기면 항공사가 확보된 좌석을 자동으로 취소할 수 있다. 이 기한은 항공사/GDS에 의해 설정되거나 해당 운임 규정(사전 예약/발권 요건)에 의해 부과될 수 있다.

발권 시한은 두 가지 주요 출처에서 발생한다. 하나는 PNR의 큐(queue) 및 옵션/타이머 요소를 통해 관리되는 항공사/GDS 부과 시한이고, 다른 하나는 운임 규정에 의한 시한(ATPCO Category 5, 사전 예약/발권으로, 예약 후 일정 일수 이내 또는 출발 전 특정 날짜까지 발권을 요구할 수 있음)이다. TTL까지 발권하지 못하면 일반적으로 해당 구간이 자동 취소되며 예약된 운임이 소멸될 수 있다. TTL 처리는 대리점 및 항공사 발권 업무의 핵심 요소로, 흔히 GDS 큐를 통해 모니터링된다.

**Aliases:** `Time Limit`, `Time to Ticket`, `Last Ticketing Date`, `TTL`

# Related
- [PNR](/air/air-ops/pnr.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [Queue](/air/air-ops/queue.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related

# Distinctions
- **Ticketing Time Limit** vs [Queue](/air/air-ops/queue.md) — A queue is the GDS workflow bucket where pending-ticketing PNRs are placed; the ticketing time limit is the deadline itself.

# Citations
[1] [ATPCO — ATPCO Fare Rules — Category 5 (Advance Reservations/Ticketing)](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
[2] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
