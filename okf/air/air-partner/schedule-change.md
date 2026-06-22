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
  - targetTerm: OrderChangeNotification (OCN)
    explanation: A schedule change is the operational event (the flight time/routing changed); OCN is the NDC message that notifies the seller that the Order was affected by such an event.
    explanation_ko: '스케줄 변경은 운영상의 사건(항공편 시각/경로가 바뀜)이고, OCN은 그 사건으로 Order가 영향받았음을 판매자에게 알리는 NDC 메시지이다.'
  - targetTerm: Slot
    explanation: 'A slot is the right to use the airport at a given time; a schedule change is an alteration to a published flight''s timing or routing, which may require obtaining or returning slots.'
    explanation_ko: '슬롯은 특정 시간에 공항을 사용할 권리이고, 스케줄 변경은 게시된 항공편의 시간이나 노선을 변경하는 것으로, 슬롯의 취득이나 반납이 필요할 수 있다.'
  - targetTerm: Standard Schedules Message
    explanation: 'A schedule change is the business event of altering a published flight; the SSM is the standardized IATA message format that actually carries that creation, change, or cancellation to GDSs and partners.'
    explanation_ko: '스케줄 변경은 게시된 항공편을 변경하는 비즈니스 사건이고, SSM은 그 생성·변경·취소를 실제로 GDS와 파트너에게 전달하는 표준화된 IATA 메시지 포맷이다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
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
- **Schedule Change** vs [OrderChangeNotification (OCN)](/common/standards/orderchangenotification-ocn.md) — A schedule change is the operational event (the flight time/routing changed); OCN is the NDC message that notifies the seller that the Order was affected by such an event.
- **Schedule Change** vs [Slot](/air/air-partner/slot.md) — A slot is the right to use the airport at a given time; a schedule change is an alteration to a published flight's timing or routing, which may require obtaining or returning slots.
- **Schedule Change** vs [Standard Schedules Message](/air/air-partner/standard-schedules-message.md) — A schedule change is the business event of altering a published flight; the SSM is the standardized IATA message format that actually carries that creation, change, or cancellation to GDSs and partners.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM)](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
