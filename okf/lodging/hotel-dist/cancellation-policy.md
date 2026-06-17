---
type: Business Term
title: Cancellation Policy
description: 'A cancellation policy defines the conditions, deadlines, and penalties that apply when a guest cancels or modifies a hotel reservation, such as a free-cancellation cutoff time/date and the fee (for example, the first night or the full stay) charged for a late or no-show cancellation. It is attached to a rate plan and disclosed at booking.'
tags:
  - hotel-dist
  - active
  - OpenTravel
timestamp: '2026-06-17T00:00:00Z'
id: cancellation-policy
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
term_ko: 취소 정책
definition_ko: '취소 정책은 고객이 호텔 예약을 취소하거나 변경할 때 적용되는 조건, 기한, 위약금을 정의한다. 예를 들어 무료 취소 마감 시각/날짜와, 지연 취소나 노쇼(no-show) 시 부과되는 요금(예: 첫날 숙박료 또는 전체 숙박료) 등이 이에 해당한다. 취소 정책은 요금제에 연결되며 예약 시 고지된다.'
longDef: 'Cancellation policies are typically expressed as a deadline relative to arrival (e.g., free until 24/48/72 hours before check-in) plus a penalty amount or formula if cancelled after the deadline or in non-refundable rates. In distribution standards they are carried as structured policy/penalty elements alongside the rate so channels can display and enforce them. A cancellation policy governs what happens when a booking is cancelled, which is distinct from a guarantee policy that governs how the booking is secured/held.'
longDef_ko: '취소 정책은 일반적으로 도착 기준 상대적 기한(예: 체크인 24/48/72시간 전까지 무료)과, 기한 이후 취소하거나 환불 불가 요금일 경우의 위약금 금액 또는 산정식으로 표현된다. 분배 표준에서는 채널이 이를 표시하고 시행할 수 있도록 요금과 함께 구조화된 정책/위약금 요소로 전달된다. 취소 정책은 예약이 취소될 때 어떻게 되는지를 규율하며, 이는 예약을 어떻게 확보·보장하는지를 규율하는 개런티 정책(guarantee policy)과 구별된다.'
standardBody: OpenTravel
aliases:
  - Cancel Policy
  - Cancellation Terms
  - Cancellation Penalty Policy
relationships:
  - type: related
    targetTerm: Guarantee Policy
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: VCC
  - type: related
    targetTerm: Chargeback
distinctions:
  - targetTerm: Guarantee Policy
    explanation: 'A cancellation policy sets the penalties/deadlines for cancelling; a guarantee policy sets how the reservation is secured and held (e.g., credit card or deposit).'
    explanation_ko: '취소 정책은 취소에 대한 위약금/기한을 정하고, 개런티 정책은 예약을 어떻게 확보하고 보장하는지를(예: 신용카드 또는 보증금) 정한다.'
sources:
  - name: OpenTravel Specification
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4h16l8 8v14"/><path d="M12 4a2 2 0 00-2 2v36a2 2 0 002 2h12"/><path d="M28 4v8h8"/><path d="M16 18h12M16 24h8"/><circle cx="34" cy="35" r="8"/><path d="M31 32l6 6M37 32l-6 6"/></svg>
---

> A cancellation policy defines the conditions, deadlines, and penalties that apply when a guest cancels or modifies a hotel reservation, such as a free-cancellation cutoff time/date and the fee (for example, the first night or the full stay) charged for a late or no-show cancellation. It is attached to a rate plan and disclosed at booking.

Cancellation policies are typically expressed as a deadline relative to arrival (e.g., free until 24/48/72 hours before check-in) plus a penalty amount or formula if cancelled after the deadline or in non-refundable rates. In distribution standards they are carried as structured policy/penalty elements alongside the rate so channels can display and enforce them. A cancellation policy governs what happens when a booking is cancelled, which is distinct from a guarantee policy that governs how the booking is secured/held.

**한국어 / Korean** — **취소 정책** — 취소 정책은 고객이 호텔 예약을 취소하거나 변경할 때 적용되는 조건, 기한, 위약금을 정의한다. 예를 들어 무료 취소 마감 시각/날짜와, 지연 취소나 노쇼(no-show) 시 부과되는 요금(예: 첫날 숙박료 또는 전체 숙박료) 등이 이에 해당한다. 취소 정책은 요금제에 연결되며 예약 시 고지된다.

취소 정책은 일반적으로 도착 기준 상대적 기한(예: 체크인 24/48/72시간 전까지 무료)과, 기한 이후 취소하거나 환불 불가 요금일 경우의 위약금 금액 또는 산정식으로 표현된다. 분배 표준에서는 채널이 이를 표시하고 시행할 수 있도록 요금과 함께 구조화된 정책/위약금 요소로 전달된다. 취소 정책은 예약이 취소될 때 어떻게 되는지를 규율하며, 이는 예약을 어떻게 확보·보장하는지를 규율하는 개런티 정책(guarantee policy)과 구별된다.

**Aliases:** `Cancel Policy`, `Cancellation Terms`, `Cancellation Penalty Policy`

# Related
- [Guarantee Policy](/lodging/hotel-dist/guarantee-policy.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [VCC](/common/pay/vcc.md) — related
- [Chargeback](/common/pay/chargeback.md) — related

# Distinctions
- **Cancellation Policy** vs [Guarantee Policy](/lodging/hotel-dist/guarantee-policy.md) — A cancellation policy sets the penalties/deadlines for cancelling; a guarantee policy sets how the reservation is secured and held (e.g., credit card or deposit).

# Citations
[1] OpenTravel Alliance — OpenTravel Specification
