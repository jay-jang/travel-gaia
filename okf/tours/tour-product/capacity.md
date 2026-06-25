---
type: Business Term
title: Capacity
description: >-
  The finite number of spaces an activity, timeslot, or resource can sell — the
  core inventory primitive of experiences, which are slot-constrained rather
  than rate-constrained.
tags:
  - tour-product
  - active
  - Tours & Activities
timestamp: '2026-06-25T00:00:00Z'
id: capacity
vertical: tours
category: tour-product
conceptType: business-term
status: active
term_ko: 정원·캐파시티(Capacity)
definition_ko: '액티비티·타임슬롯·자원이 판매할 수 있는 한정된 자리 수로, 요금이 아니라 슬롯에 제약되는 익스피리언스의 핵심 재고 단위다.'
longDef: >-
  Unlike air seats or hotel rooms managed as rate-loaded inventory, tours sell
  capacity against timeslots and shared resources. Capacity may be a fixed
  per-departure cap, an allotment contracted to a reseller, or a pooled count
  drawn down by several products that share one guide, vehicle or boat. Accurate
  live capacity is what enables instant confirmation and prevents oversell, and
  it is released back to the pool when a booking is cancelled — the hinge
  between availability, resource management and post-sale.
longDef_ko: >-
  항공 좌석이나 호텔 객실이 요금 적재형 재고로 관리되는 것과 달리, 투어는 타임슬롯과 공유 자원을 상대로 정원을 판매한다. 정원은 출발 편당
  고정 상한일 수도, 리셀러에게 계약된 할당(allotment)일 수도, 한 가이드·차량·선박을 공유하는 여러 상품이 함께 소진하는 풀
  카운트일 수도 있다. 정확한 실시간 정원이 즉시확정을 가능케 하고 초과판매를 막으며, 예약이 취소되면 풀로 반환된다 — 가용성·리소스
  관리·사후처리를 잇는 경첩이다.
aliases:
  - Slot Capacity
  - Pooled Capacity
  - Availability Count
  - Allotment (Tours)
relationships:
  - type: related
    targetTerm: Timeslot
  - type: related
    targetTerm: Resource Management
  - type: related
    targetTerm: Instant Confirmation
  - type: related
    targetTerm: Allotment
distinctions:
  - targetTerm: Timeslot
    explanation: >-
      A timeslot is the dated start time being sold; capacity is how many places
      that timeslot (or the resources behind it) can actually sell.
    explanation_ko: '타임슬롯은 판매되는 날짜별 시작 시각이고, 정원은 그 타임슬롯(또는 그 뒤의 자원)이 실제로 팔 수 있는 자리 수다.'
  - targetTerm: Allotment
    explanation: >-
      In hotels an allotment is a block of rooms released to a channel; tours
      capacity is the live, resource-driven sellable count per slot that
      depletes and is released in real time.
    explanation_ko: >-
      호텔에서 allotment는 채널에 풀어주는 객실 블록이고, 투어 정원은 슬롯별로 자원에 따라 실시간으로 소진·반환되는 판매 가능
      수량이다.
sources:
  - name: OCTO — Availability & capacity model
    org: OCTO
    version: ''
    section: ''
    url: 'https://octo.travel/'
    tier: association
  - name: Rezdy — Capacity and availability
    org: Rezdy
    version: ''
    section: ''
    url: 'https://www.rezdy.com/'
    tier: vendor-doc
icon: >-
  <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none"
  stroke-linecap="round" stroke-linejoin="round"><path d="M10 34a14 14 0 1 1 28
  0"/><line x1="24" y1="34" x2="32" y2="22"/><circle cx="24" cy="34"
  r="2.5"/></svg>
---

> The finite number of spaces an activity, timeslot, or resource can sell — the core inventory primitive of experiences, which are slot-constrained rather than rate-constrained.

Unlike air seats or hotel rooms managed as rate-loaded inventory, tours sell capacity against timeslots and shared resources. Capacity may be a fixed per-departure cap, an allotment contracted to a reseller, or a pooled count drawn down by several products that share one guide, vehicle or boat. Accurate live capacity is what enables instant confirmation and prevents oversell, and it is released back to the pool when a booking is cancelled — the hinge between availability, resource management and post-sale.

**한국어 / Korean** — **정원·캐파시티(Capacity)** — 액티비티·타임슬롯·자원이 판매할 수 있는 한정된 자리 수로, 요금이 아니라 슬롯에 제약되는 익스피리언스의 핵심 재고 단위다.

항공 좌석이나 호텔 객실이 요금 적재형 재고로 관리되는 것과 달리, 투어는 타임슬롯과 공유 자원을 상대로 정원을 판매한다. 정원은 출발 편당 고정 상한일 수도, 리셀러에게 계약된 할당(allotment)일 수도, 한 가이드·차량·선박을 공유하는 여러 상품이 함께 소진하는 풀 카운트일 수도 있다. 정확한 실시간 정원이 즉시확정을 가능케 하고 초과판매를 막으며, 예약이 취소되면 풀로 반환된다 — 가용성·리소스 관리·사후처리를 잇는 경첩이다.

**Aliases:** `Slot Capacity`, `Pooled Capacity`, `Availability Count`, `Allotment (Tours)`

# Related
- Timeslot — related
- Resource Management — related
- Instant Confirmation — related
- Allotment — related

# Distinctions
- **Capacity** vs Timeslot — A timeslot is the dated start time being sold; capacity is how many places that timeslot (or the resources behind it) can actually sell.
- **Capacity** vs Allotment — In hotels an allotment is a block of rooms released to a channel; tours capacity is the live, resource-driven sellable count per slot that depletes and is released in real time.

# Citations
[1] [OCTO — OCTO — Availability & capacity model](https://octo.travel/)
[2] [Rezdy — Rezdy — Capacity and availability](https://www.rezdy.com/)
