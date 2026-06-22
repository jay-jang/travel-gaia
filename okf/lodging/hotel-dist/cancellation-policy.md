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
  - targetTerm: Guest Ticket Contract
    explanation: 'A cancellation policy is one set of commercial terms; the guest ticket contract is the overarching legal document that contains the cancellation policy along with liability limits, surcharge rights, forum-selection and time-bar provisions. The cancellation policy is binding because the ticket contract incorporates it.'
    explanation_ko: '취소 정책은 상업 조건의 한 묶음일 뿐이고, 게스트 티켓 컨트랙트는 그 취소 정책과 더불어 책임 한도·할증료 권리·관할 선택·제소기간 조항을 담은 포괄적 법률 문서다. 취소 정책이 구속력을 갖는 것은 티켓 컨트랙트가 이를 편입하기 때문이다.'
  - targetTerm: No-Show
    explanation: 'A cancellation is an active notice from the guest before the deadline (often penalty-free); a no-show is the absence of both arrival and cancellation, which normally incurs the full guarantee charge.'
    explanation_ko: '취소는 마감 전 투숙객의 능동적 통지(흔히 위약금 없음)이고, 노쇼는 도착과 취소가 모두 없는 상태로 보통 전액 보증 요금이 청구된다.'
  - targetTerm: Non-Refundable Rate
    explanation: A Cancellation Policy is the set of rules defining if and when a booking can be cancelled and any penalty; a Non-Refundable Rate is a product whose cancellation policy is the strictest case - no cancellation or refund permitted at all.
    explanation_ko: 'Cancellation Policy는 예약을 언제 취소할 수 있고 위약금이 어떻게 되는지를 정하는 규칙 집합이고, Non-Refundable Rate는 그 취소 정책이 가장 엄격한 경우(취소·환불 전면 불가)인 상품이다.'
  - targetTerm: Trip Cancellation
    explanation: A cancellation policy is the supplier's own refund/penalty rules for a booking; trip cancellation insurance is a third-party indemnity that reimburses the traveler for amounts those rules make non-refundable.
    explanation_ko: 'Cancellation Policy는 예약에 대한 공급자 자체의 환불/위약 규정이고, Trip Cancellation 보험은 그 규정상 환불 불가가 된 금액을 여행자에게 보상하는 제3자 손해보전이다.'
sources:
  - name: OpenTravel Specification
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
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
- **Cancellation Policy** vs [Guest Ticket Contract](/cruise/cruise/guest-ticket-contract.md) — A cancellation policy is one set of commercial terms; the guest ticket contract is the overarching legal document that contains the cancellation policy along with liability limits, surcharge rights, forum-selection and time-bar provisions. The cancellation policy is binding because the ticket contract incorporates it.
- **Cancellation Policy** vs [No-Show](/lodging/hotel-dist/no-show.md) — A cancellation is an active notice from the guest before the deadline (often penalty-free); a no-show is the absence of both arrival and cancellation, which normally incurs the full guarantee charge.
- **Cancellation Policy** vs [Non-Refundable Rate](/lodging/hotel-rate/non-refundable-rate.md) — A Cancellation Policy is the set of rules defining if and when a booking can be cancelled and any penalty; a Non-Refundable Rate is a product whose cancellation policy is the strictest case - no cancellation or refund permitted at all.
- **Cancellation Policy** vs [Trip Cancellation](/common/insurance/trip-cancellation.md) — A cancellation policy is the supplier's own refund/penalty rules for a booking; trip cancellation insurance is a third-party indemnity that reimburses the traveler for amounts those rules make non-refundable.

# Citations
[1] [OpenTravel Alliance — OpenTravel Specification](https://opentravel.org/download-specs/)
