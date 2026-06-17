---
type: Process
title: Schedule Change
description: 'A change made by an airline to a previously published flight schedule, such as a revised departure or arrival time, equipment change, flight number change, or flight cancellation, that affects already-booked passengers. Schedule changes are distributed to selling systems and require reaccommodation or notification of affected bookings.'
tags:
  - air-partner
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: schedule-change
vertical: air
category: air-partner
conceptType: process
status: active
term_ko: 스케줄 변경(운항 일정 변경)
definition_ko: '항공사가 이미 예약한 승객에게 영향을 미치는, 이전에 게시된 항공편 스케줄에 가하는 변경으로, 출발 또는 도착 시간 변경, 기재(equipment) 변경, 편명 변경, 항공편 취소 등이 이에 해당한다. 스케줄 변경은 판매 시스템에 배포되며, 영향을 받는 예약에 대해 재수용(reaccommodation)이나 통지가 필요하다.'
longDef: 'Schedule changes are communicated via standardized schedule messaging (for example SSIM-based SSM and ASM formats) and propagate to GDSs and airline reservation systems, often landing affected PNRs on queues for agent or automated action. Depending on the magnitude of the change and fare conditions, passengers may be entitled to rebooking, involuntary reissue, or refund. Schedule changes differ from same-day operational disruptions, which fall under irregular operations (IROPS).'
longDef_ko: '스케줄 변경은 표준화된 스케줄 메시지(예: SSIM 기반 SSM 및 ASM 포맷)를 통해 전달되며, GDS와 항공사 예약 시스템으로 전파되어 영향을 받는 PNR이 상담원 또는 자동 처리를 위해 큐(queue)에 올라오는 경우가 많다. 변경의 정도와 운임 조건에 따라 승객은 재예약, 비자발적 재발권(involuntary reissue) 또는 환불을 받을 권리가 있을 수 있다. 스케줄 변경은 당일 운영 중단과는 다르며, 당일 중단은 비정상 운항(IROPS)에 해당한다.'
standardBody: IATA
aliases:
  - Schedule Adjustment
  - Schedule Change Notification
  - Time Change
relationships:
  - type: related
    targetTerm: IROPS
  - type: related
    targetTerm: Queue
  - type: related
    targetTerm: Involuntary Reissue
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Slot
distinctions:
  - targetTerm: IROPS
    explanation: 'Schedule change is a planned amendment to the published schedule communicated in advance; IROPS is unplanned day-of-operations disruption (delays, cancellations, diversions).'
    explanation_ko: '스케줄 변경은 사전에 통지되는, 게시된 스케줄에 대한 계획된 수정이고, IROPS는 계획되지 않은 당일 운영 중단(지연, 취소, 회항)이다.'
  - targetTerm: Involuntary Reissue
    explanation: Schedule change is the triggering event; involuntary reissue is the resulting ticket action to reaccommodate the passenger at no additional fare.
    explanation_ko: '스케줄 변경은 촉발 사건이고, 비자발적 재발권은 추가 운임 없이 승객을 재수용하기 위해 그 결과로 이루어지는 항공권 처리다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="26" height="26" rx="2"/><path d="M8 17h26M14 7v6M28 7v6"/><circle cx="36" cy="34" r="8"/><path d="M36 30v4l3 2"/><path d="M30 30l-2-2v3h3"/></svg>
---

> A change made by an airline to a previously published flight schedule, such as a revised departure or arrival time, equipment change, flight number change, or flight cancellation, that affects already-booked passengers. Schedule changes are distributed to selling systems and require reaccommodation or notification of affected bookings.

Schedule changes are communicated via standardized schedule messaging (for example SSIM-based SSM and ASM formats) and propagate to GDSs and airline reservation systems, often landing affected PNRs on queues for agent or automated action. Depending on the magnitude of the change and fare conditions, passengers may be entitled to rebooking, involuntary reissue, or refund. Schedule changes differ from same-day operational disruptions, which fall under irregular operations (IROPS).

**한국어 / Korean** — **스케줄 변경(운항 일정 변경)** — 항공사가 이미 예약한 승객에게 영향을 미치는, 이전에 게시된 항공편 스케줄에 가하는 변경으로, 출발 또는 도착 시간 변경, 기재(equipment) 변경, 편명 변경, 항공편 취소 등이 이에 해당한다. 스케줄 변경은 판매 시스템에 배포되며, 영향을 받는 예약에 대해 재수용(reaccommodation)이나 통지가 필요하다.

스케줄 변경은 표준화된 스케줄 메시지(예: SSIM 기반 SSM 및 ASM 포맷)를 통해 전달되며, GDS와 항공사 예약 시스템으로 전파되어 영향을 받는 PNR이 상담원 또는 자동 처리를 위해 큐(queue)에 올라오는 경우가 많다. 변경의 정도와 운임 조건에 따라 승객은 재예약, 비자발적 재발권(involuntary reissue) 또는 환불을 받을 권리가 있을 수 있다. 스케줄 변경은 당일 운영 중단과는 다르며, 당일 중단은 비정상 운항(IROPS)에 해당한다.

**Aliases:** `Schedule Adjustment`, `Schedule Change Notification`, `Time Change`

# Related
- [IROPS](/air/air-partner/irops.md) — related
- [Queue](/air/air-ops/queue.md) — related
- [Involuntary Reissue](/air/air-ticket/involuntary-reissue.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [Slot](/air/air-partner/slot.md) — related

# Distinctions
- **Schedule Change** vs [IROPS](/air/air-partner/irops.md) — Schedule change is a planned amendment to the published schedule communicated in advance; IROPS is unplanned day-of-operations disruption (delays, cancellations, diversions).
- **Schedule Change** vs [Involuntary Reissue](/air/air-ticket/involuntary-reissue.md) — Schedule change is the triggering event; involuntary reissue is the resulting ticket action to reaccommodate the passenger at no additional fare.

# Citations
[1] IATA — Standard Schedules Information Manual (SSIM)
