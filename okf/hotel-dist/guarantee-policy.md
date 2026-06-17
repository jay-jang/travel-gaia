---
type: Business Term
title: Guarantee Policy
description: 'A guarantee policy defines how a hotel reservation must be secured so the room is held for the guest, for example by credit card guarantee, advance deposit, prepayment, or company/travel-agent guarantee. It determines what is required at booking and the hotel''s recourse (such as charging a no-show fee) if the guest does not arrive.'
tags:
  - hotel-dist
  - active
  - OpenTravel
timestamp: '2026-06-17T00:00:00Z'
id: guarantee-policy
category: hotel-dist
conceptType: business-term
status: active
term_ko: 개런티 정책(예약 보장 정책)
definition_ko: '개런티 정책은 객실이 고객을 위해 유지되도록 호텔 예약을 어떻게 확보해야 하는지를 정의한다. 예를 들어 신용카드 보증, 사전 보증금, 선결제, 또는 회사/여행사 보증 등이 있다. 예약 시 무엇이 요구되는지, 그리고 고객이 도착하지 않을 경우 호텔의 구제 수단(예: 노쇼 요금 청구)을 결정한다.'
longDef: 'Guarantee types commonly include credit-card guarantee (room held all night, no-show charge applies), deposit/prepayment guarantee, and ''hold until'' (e.g., 6 PM) arrangements where an unguaranteed room may be released. In distribution standards the guarantee requirement is carried as a structured element of the rate/reservation. The guarantee policy governs securing and holding the booking, which is distinct from the cancellation policy that governs penalties when the booking is cancelled.'
longDef_ko: '개런티 유형에는 일반적으로 신용카드 보증(객실을 밤새 유지하며 노쇼 요금 부과), 보증금/선결제 보증, 그리고 보장되지 않은 객실이 해제될 수 있는 ''특정 시각까지 보류''(예: 오후 6시) 방식이 포함된다. 분배 표준에서는 개런티 요구사항이 요금/예약의 구조화된 요소로 전달된다. 개런티 정책은 예약의 확보와 보장을 규율하며, 이는 예약 취소 시의 위약금을 규율하는 취소 정책과 구별된다.'
standardBody: OpenTravel
aliases:
  - Reservation Guarantee
  - Booking Guarantee
  - Deposit/Guarantee Policy
relationships:
  - type: related
    targetTerm: Cancellation Policy
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: VCC
  - type: related
    targetTerm: 3-D Secure
  - type: related
    targetTerm: Overbooking
distinctions:
  - targetTerm: Cancellation Policy
    explanation: A guarantee policy defines how a booking is secured/held and no-show recourse; a cancellation policy defines deadlines and penalties for cancelling.
    explanation_ko: '개런티 정책은 예약을 어떻게 확보·보장하는지와 노쇼 구제 수단을 정의하고, 취소 정책은 취소에 대한 기한과 위약금을 정의한다.'
sources:
  - name: OpenTravel Specification
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4l16 6v10c0 11-7 18-16 22-9-4-16-11-16-22V10l16-6z"/><path d="M17 23l5 5 9-10"/></svg>
---

> A guarantee policy defines how a hotel reservation must be secured so the room is held for the guest, for example by credit card guarantee, advance deposit, prepayment, or company/travel-agent guarantee. It determines what is required at booking and the hotel's recourse (such as charging a no-show fee) if the guest does not arrive.

Guarantee types commonly include credit-card guarantee (room held all night, no-show charge applies), deposit/prepayment guarantee, and 'hold until' (e.g., 6 PM) arrangements where an unguaranteed room may be released. In distribution standards the guarantee requirement is carried as a structured element of the rate/reservation. The guarantee policy governs securing and holding the booking, which is distinct from the cancellation policy that governs penalties when the booking is cancelled.

**한국어 / Korean** — **개런티 정책(예약 보장 정책)** — 개런티 정책은 객실이 고객을 위해 유지되도록 호텔 예약을 어떻게 확보해야 하는지를 정의한다. 예를 들어 신용카드 보증, 사전 보증금, 선결제, 또는 회사/여행사 보증 등이 있다. 예약 시 무엇이 요구되는지, 그리고 고객이 도착하지 않을 경우 호텔의 구제 수단(예: 노쇼 요금 청구)을 결정한다.

개런티 유형에는 일반적으로 신용카드 보증(객실을 밤새 유지하며 노쇼 요금 부과), 보증금/선결제 보증, 그리고 보장되지 않은 객실이 해제될 수 있는 '특정 시각까지 보류'(예: 오후 6시) 방식이 포함된다. 분배 표준에서는 개런티 요구사항이 요금/예약의 구조화된 요소로 전달된다. 개런티 정책은 예약의 확보와 보장을 규율하며, 이는 예약 취소 시의 위약금을 규율하는 취소 정책과 구별된다.

**Aliases:** `Reservation Guarantee`, `Booking Guarantee`, `Deposit/Guarantee Policy`

# Related
- [Cancellation Policy](/hotel-dist/cancellation-policy.md) — related
- [Rate Plan](/hotel-rate/rate-plan.md) — related
- [VCC](/pay/vcc.md) — related
- [3-D Secure](/pay/3-d-secure.md) — related
- [Overbooking](/air-shop/overbooking.md) — related

# Distinctions
- **Guarantee Policy** vs [Cancellation Policy](/hotel-dist/cancellation-policy.md) — A guarantee policy defines how a booking is secured/held and no-show recourse; a cancellation policy defines deadlines and penalties for cancelling.

# Citations
[1] OpenTravel Alliance — OpenTravel Specification
