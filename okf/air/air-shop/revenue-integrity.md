---
type: Process
title: Revenue Integrity
description: 'Revenue Integrity is the systematic airline process of detecting and eliminating invalid, duplicate, or abusive bookings — such as phantom PNRs, churned reservations, and unticketed seats held past their Ticketing Time Limit — to ensure that inventory reflects genuine demand, prevent revenue dilution, and maintain accurate seat availability for real customers.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-07-10T00:00:00Z'
id: revenue-integrity
vertical: air
category: air-shop
conceptType: process
status: active
term_ko: 수익 무결성 관리(Revenue Integrity)
definition_ko: '수익 무결성 관리(Revenue Integrity)는 팬텀 PNR, 반복 예약(churning), 발권 시한(TTL)을 초과해 보유된 미발권 좌석 등 무효·중복·악용 예약을 탐지·제거하는 항공사의 체계적 프로세스다. 이를 통해 재고가 실제 수요를 반영하도록 보장하고, 수익 희석을 방지하며, 실제 고객에 대한 정확한 좌석 가용성을 유지한다.'
longDef: 'Revenue Integrity (RI) addresses a core tension in airline distribution: seats are simultaneously held in reservation systems for speculative or abusive purposes while genuine demand is turned away as sold-out. Key RI activities include enforcing Ticketing Time Limits (TTL) — canceling unticketed bookings after the agreed deadline; removing duplicate bookings (the same passenger holding multiple reservations on the same flight); eliminating passive segments placed by intermediaries for informational or space-holding purposes; and detecting "churning," where an agent repeatedly cancels and re-books the same itinerary to reset the TTL and defer payment. Airlines operate automated RI systems (sometimes provided by vendors such as Amadeus, PROS, or ATPCO) that scan the PNR database, queue violating bookings for auto-cancel or agent action, and release recovered inventory back to sale. IATA publishes Revenue Integrity guidelines under its Distribution Standards and Passenger Agency Programme, which define permissible booking behaviors and outline BSP-related debit memo triggers for RI violations.'
longDef_ko: '수익 무결성 관리(RI)는 항공사 유통의 핵심 모순을 해결한다. 투기적 또는 악의적 목적으로 예약 시스템에 좌석이 잡혀 있는 동안 실제 수요는 매진으로 거절되는 상황이다. 주요 RI 활동에는 발권 시한(TTL) 집행(합의된 기한 이후 미발권 예약 취소), 중복 예약 제거(동일 항공편에 여러 예약을 보유한 동일 승객), 중간 유통사가 정보 목적 또는 좌석 확보 목적으로 입력한 패시브 세그먼트 제거, 그리고 "처닝(churning)" 탐지(대리점이 발권과 결제를 미루려고 동일 여정을 반복 취소·재예약하는 행위) 등이 포함된다. 항공사는 Amadeus, PROS, ATPCO 등 공급업체가 제공하는 자동화 RI 시스템을 운영하여 PNR 데이터베이스를 스캔하고, 위반 예약을 자동 취소 또는 상담원 처리 큐로 보내며, 회수된 재고를 판매로 돌린다. IATA는 유통 기준 및 여객 대리점 프로그램 내에서 수익 무결성 지침을 발간하며, 허용 가능한 예약 행위를 정의하고 RI 위반에 대한 BSP 관련 청구 메모(debit memo) 유발 요인을 명시한다.'
standardBody: IATA
aliases:
  - RI
  - Booking Integrity
  - PNR Integrity
relationships:
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: Passive Segment
  - type: related
    targetTerm: Overbooking
  - type: related
    targetTerm: Ticketing Time Limit
  - type: related
    targetTerm: Queue
  - type: related
    targetTerm: Booking Status Code
distinctions:
  - targetTerm: Revenue Management
    explanation: Revenue Management is the broader discipline of forecasting demand and setting seat availability/price controls to maximize revenue; Revenue Integrity is a specific operational process within that ecosystem that cleans inventory of invalid bookings so that RM controls act on accurate data.
    explanation_ko: 'Revenue Management는 수익 극대화를 위해 수요를 예측하고 좌석 가용성·가격 통제를 설정하는 더 넓은 영역이고, Revenue Integrity는 RM 통제가 정확한 데이터에 기반해 작동할 수 있도록 무효 예약으로부터 재고를 정리하는 그 생태계 내의 구체적 운영 프로세스다.'
  - targetTerm: Overbooking
    explanation: Overbooking is the deliberate practice of accepting more reservations than physical seats, relying on statistical no-show rates; Revenue Integrity removes phantom and abusive bookings so that the overbooking model is calibrated against real demand rather than artificially inflated reservation counts.
    explanation_ko: '초과예약(Overbooking)은 통계적 노쇼율에 의존하여 물리적 좌석 수보다 많은 예약을 의도적으로 수락하는 관행이고, Revenue Integrity는 오버부킹 모델이 인위적으로 부풀려진 예약 건수가 아닌 실제 수요에 따라 조정될 수 있도록 팬텀·악용 예약을 제거한다.'
  - targetTerm: Passive Segment
    explanation: A Passive Segment is the booking construct created in the GDS for informational purposes without actually requesting inventory from the airline; Revenue Integrity is the process that identifies and removes passive segments — along with other booking abuses — that hold inventory without genuine intent to travel.
    explanation_ko: 'Passive Segment는 실제로 항공사에 재고를 요청하지 않고 GDS에서 정보 목적으로 생성된 예약 구조이고, Revenue Integrity는 실제 여행 의도 없이 재고를 점유하는 패시브 세그먼트를 비롯한 예약 악용 행위를 식별·제거하는 프로세스다.'
sources:
  - name: Revenue Integrity — IATA Programme Overview
    org: IATA
    version: ''
    section: ''
    url: https://www.iata.org/en/programs/distribution/revenue-integrity/
    tier: association
  - name: Passenger Agency Programme — IATA Resolution 824 (Reservation and Ticketing Practices)
    org: IATA
    version: ''
    section: ''
    url: https://www.iata.org/en/programs/passenger/resolution-824/
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6l14 5v10c0 9-6 16-14 19C16 37 10 30 10 21V11z"/><polyline points="17,24 22,29 31,18"/></svg>
---

> Revenue Integrity is the systematic airline process of detecting and eliminating invalid, duplicate, or abusive bookings — such as phantom PNRs, churned reservations, and unticketed seats held past their Ticketing Time Limit — to ensure that inventory reflects genuine demand, prevent revenue dilution, and maintain accurate seat availability for real customers.

Revenue Integrity (RI) addresses a core tension in airline distribution: seats are simultaneously held in reservation systems for speculative or abusive purposes while genuine demand is turned away as sold-out. Key RI activities include enforcing Ticketing Time Limits (TTL) — canceling unticketed bookings after the agreed deadline; removing duplicate bookings (the same passenger holding multiple reservations on the same flight); eliminating passive segments placed by intermediaries for informational or space-holding purposes; and detecting "churning," where an agent repeatedly cancels and re-books the same itinerary to reset the TTL and defer payment. Airlines operate automated RI systems (sometimes provided by vendors such as Amadeus, PROS, or ATPCO) that scan the PNR database, queue violating bookings for auto-cancel or agent action, and release recovered inventory back to sale. IATA publishes Revenue Integrity guidelines under its Distribution Standards and Passenger Agency Programme, which define permissible booking behaviors and outline BSP-related debit memo triggers for RI violations.

**한국어 / Korean** — **수익 무결성 관리(Revenue Integrity)** — 수익 무결성 관리(Revenue Integrity)는 팬텀 PNR, 반복 예약(churning), 발권 시한(TTL)을 초과해 보유된 미발권 좌석 등 무효·중복·악용 예약을 탐지·제거하는 항공사의 체계적 프로세스다. 이를 통해 재고가 실제 수요를 반영하도록 보장하고, 수익 희석을 방지하며, 실제 고객에 대한 정확한 좌석 가용성을 유지한다.

수익 무결성 관리(RI)는 항공사 유통의 핵심 모순을 해결한다. 투기적 또는 악의적 목적으로 예약 시스템에 좌석이 잡혀 있는 동안 실제 수요는 매진으로 거절되는 상황이다. 주요 RI 활동에는 발권 시한(TTL) 집행(합의된 기한 이후 미발권 예약 취소), 중복 예약 제거(동일 항공편에 여러 예약을 보유한 동일 승객), 중간 유통사가 정보 목적 또는 좌석 확보 목적으로 입력한 패시브 세그먼트 제거, 그리고 "처닝(churning)" 탐지(대리점이 발권과 결제를 미루려고 동일 여정을 반복 취소·재예약하는 행위) 등이 포함된다. 항공사는 Amadeus, PROS, ATPCO 등 공급업체가 제공하는 자동화 RI 시스템을 운영하여 PNR 데이터베이스를 스캔하고, 위반 예약을 자동 취소 또는 상담원 처리 큐로 보내며, 회수된 재고를 판매로 돌린다. IATA는 유통 기준 및 여객 대리점 프로그램 내에서 수익 무결성 지침을 발간하며, 허용 가능한 예약 행위를 정의하고 RI 위반에 대한 BSP 관련 청구 메모(debit memo) 유발 요인을 명시한다.

**Aliases:** `RI`, `Booking Integrity`, `PNR Integrity`

# Related
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [Passive Segment](/air/air-ops/passive-segment.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related
- [Ticketing Time Limit](/air/air-ticket/ticketing-time-limit.md) — related
- [Queue](/air/air-ops/queue.md) — related
- [Booking Status Code](/air/air-ops/booking-status-code.md) — related

# Distinctions
- **Revenue Integrity** vs [Revenue Management](/air/air-shop/revenue-management.md) — Revenue Management is the broader discipline of forecasting demand and setting seat availability/price controls to maximize revenue; Revenue Integrity is a specific operational process within that ecosystem that cleans inventory of invalid bookings so that RM controls act on accurate data.
- **Revenue Integrity** vs [Overbooking](/air/air-shop/overbooking.md) — Overbooking is the deliberate practice of accepting more reservations than physical seats, relying on statistical no-show rates; Revenue Integrity removes phantom and abusive bookings so that the overbooking model is calibrated against real demand rather than artificially inflated reservation counts.
- **Revenue Integrity** vs [Passive Segment](/air/air-ops/passive-segment.md) — A Passive Segment is the booking construct created in the GDS for informational purposes without actually requesting inventory from the airline; Revenue Integrity is the process that identifies and removes passive segments — along with other booking abuses — that hold inventory without genuine intent to travel.

# Citations
[1] [IATA — Revenue Integrity — IATA Programme Overview](https://www.iata.org/en/programs/distribution/revenue-integrity/)
[2] [IATA — Passenger Agency Programme — IATA Resolution 824 (Reservation and Ticketing Practices)](https://www.iata.org/en/programs/passenger/resolution-824/)
