---
type: Business Term
title: Advance Deposit
description: 'An Advance Deposit is a partial or full payment collected from the guest at the time of booking, or by a specified date before arrival, to secure the reservation. It shifts cancellation risk from the hotel to the guest, guarantees committed revenue ahead of the stay, and is distinct from a security/damage deposit collected at check-in.'
tags:
  - hotel-rate
  - active
timestamp: '2026-07-08T00:00:00Z'
id: advance-deposit
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: 사전 보증금(Advance Deposit)
definition_ko: '사전 보증금(Advance Deposit)은 예약 시 또는 지정 기한까지 예약 보증을 위해 고객으로부터 징수하는 부분 또는 전액 결제금이다. 취소 위험을 호텔에서 고객에게 이전하고, 투숙 전 확정 매출을 확보하며, 체크인 시 징수하는 보안/파손 보증금과는 구별된다.'
longDef: 'Advance deposits are a revenue-protection tool widely used for leisure bookings, peak seasons, long stays, and high-value rooms. Common structures include a first-night deposit, a percentage of the total stay (e.g. 25–50 %), or full prepayment. In distribution systems, three payment types are typically modelled: guarantee (secures the room but no charge until arrival or no-show), deposit (partial advance payment), and prepay (full payment at booking). The deposit amount, due date, and forfeiture rules on cancellation are components of the rate plan''s Cancellation Policy. International hotel distribution systems — including Travelport uAPI and the OpenTravel Hotel Rate Plan standard — define deposit requirements as structured attributes on rate plans so that OTAs and TMCs can display them to customers at the time of booking. If the guest cancels after the deposit deadline, the deposit is typically forfeited according to the Cancellation Policy terms.'
longDef_ko: '사전 보증금은 레저 예약, 성수기, 장기 투숙, 고가 객실에 널리 사용되는 매출 보호 수단이다. 일반적 구조로는 첫째 날치 요금, 총 숙박비의 일정 비율(예: 25~50%), 전액 선불이 있다. 유통 시스템에서는 통상 세 가지 결제 유형이 모델링된다: guarantee(객실 확보, 도착 전 또는 노쇼 시까지 청구 없음), deposit(부분 사전 결제), prepay(예약 시 전액 결제). 보증금 금액, 납부 기한, 취소 시 환불 불가 규정은 요금제의 Cancellation Policy 구성 요소이다. Travelport uAPI 및 OpenTravel Hotel Rate Plan 표준을 포함한 국제 호텔 유통 시스템은 보증금 요건을 요금제의 구조화된 속성으로 정의하여 OTA와 TMC가 예약 시점에 고객에게 표시할 수 있도록 한다. 고객이 보증금 마감일 이후 취소하면 Cancellation Policy 조건에 따라 보증금은 통상 환불되지 않는다.'
aliases:
  - Booking Deposit
  - Room Deposit
  - Advance Payment
providerTerms:
  - provider: Travelport uAPI
    term: Deposit (Hotel Payment Type)
    context: 'Travelport uAPI models hotel payment as Guarantee, Deposit, or Pre-Pay; Deposit requires a partial advance payment by a specified due date.'
    context_ko: 'Travelport uAPI는 호텔 결제를 Guarantee, Deposit, Pre-Pay로 모델링하며, Deposit은 지정 납부 기한까지 부분 사전 결제를 요구한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Cancellation Policy
  - type: related
    targetTerm: Guarantee Policy
  - type: related
    targetTerm: No-Show
  - type: child
    targetTerm: Rate Plan
distinctions:
  - targetTerm: Guarantee Policy
    explanation: 'A Guarantee Policy secures the booking against a credit card but typically charges nothing until the guest no-shows or cancels within the penalty window; an Advance Deposit requires actual partial or full payment to be transferred before arrival to hold the reservation.'
    explanation_ko: 'Guarantee Policy는 신용카드로 예약을 담보하되 노쇼 또는 위약금 기간 내 취소 전까지 실제 청구가 없는 방식이고, Advance Deposit은 예약을 유지하기 위해 도착 전 실제 부분 또는 전액 결제 이전을 요구한다.'
  - targetTerm: Cancellation Policy
    explanation: 'A Cancellation Policy is the broader set of rules governing when and how a booking can be cancelled and what penalties apply; an Advance Deposit is a specific payment mechanism defined within that policy that is forfeited if the cancellation conditions are breached.'
    explanation_ko: 'Cancellation Policy는 예약 취소 시기·방법 및 위약금을 규율하는 포괄적 규칙 집합이고, Advance Deposit은 취소 조건 위반 시 몰취되는, 해당 정책 내에 정의된 특정 결제 메커니즘이다.'
  - targetTerm: No-Show
    explanation: 'A No-Show occurs when a guest fails to arrive without cancelling; an Advance Deposit is the financial mechanism that protects the hotel from the revenue loss a No-Show would otherwise cause.'
    explanation_ko: 'No-Show는 고객이 취소 없이 나타나지 않는 상황이고, Advance Deposit은 No-Show로 인한 매출 손실로부터 호텔을 보호하는 금융 메커니즘이다.'
sources:
  - name: 'Hotel Booking with Guarantee, Deposit, or Pre-Payment'
    org: Travelport
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/uapi/Content/Hotel/Hotel_Booking/Hotel_Booking_with_Deposit_or_Guarantee.htm'
    tier: vendor-doc
  - name: Hotel Deposit Policies — A Practical Guide for Hoteliers
    org: Mews
    version: ''
    section: ''
    url: 'https://www.mews.com/en/blog/hotel-deposit'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="18" width="28" height="20" rx="3"/><path d="M16 18v-4a8 8 0 0 1 16 0v4"/><circle cx="24" cy="28" r="3"/><line x1="24" y1="31" x2="24" y2="34"/></svg>
---

> An Advance Deposit is a partial or full payment collected from the guest at the time of booking, or by a specified date before arrival, to secure the reservation. It shifts cancellation risk from the hotel to the guest, guarantees committed revenue ahead of the stay, and is distinct from a security/damage deposit collected at check-in.

Advance deposits are a revenue-protection tool widely used for leisure bookings, peak seasons, long stays, and high-value rooms. Common structures include a first-night deposit, a percentage of the total stay (e.g. 25–50 %), or full prepayment. In distribution systems, three payment types are typically modelled: guarantee (secures the room but no charge until arrival or no-show), deposit (partial advance payment), and prepay (full payment at booking). The deposit amount, due date, and forfeiture rules on cancellation are components of the rate plan's Cancellation Policy. International hotel distribution systems — including Travelport uAPI and the OpenTravel Hotel Rate Plan standard — define deposit requirements as structured attributes on rate plans so that OTAs and TMCs can display them to customers at the time of booking. If the guest cancels after the deposit deadline, the deposit is typically forfeited according to the Cancellation Policy terms.

**한국어 / Korean** — **사전 보증금(Advance Deposit)** — 사전 보증금(Advance Deposit)은 예약 시 또는 지정 기한까지 예약 보증을 위해 고객으로부터 징수하는 부분 또는 전액 결제금이다. 취소 위험을 호텔에서 고객에게 이전하고, 투숙 전 확정 매출을 확보하며, 체크인 시 징수하는 보안/파손 보증금과는 구별된다.

사전 보증금은 레저 예약, 성수기, 장기 투숙, 고가 객실에 널리 사용되는 매출 보호 수단이다. 일반적 구조로는 첫째 날치 요금, 총 숙박비의 일정 비율(예: 25~50%), 전액 선불이 있다. 유통 시스템에서는 통상 세 가지 결제 유형이 모델링된다: guarantee(객실 확보, 도착 전 또는 노쇼 시까지 청구 없음), deposit(부분 사전 결제), prepay(예약 시 전액 결제). 보증금 금액, 납부 기한, 취소 시 환불 불가 규정은 요금제의 Cancellation Policy 구성 요소이다.

**Aliases:** `Booking Deposit`, `Room Deposit`, `Advance Payment`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Travelport uAPI | `Deposit (Hotel Payment Type)` | same | Travelport uAPI models hotel payment as Guarantee, Deposit, or Pre-Pay; Deposit requires a partial advance payment by a specified due date. |

# Related
- [Cancellation Policy](/lodging/hotel-dist/cancellation-policy.md) — related
- [Guarantee Policy](/lodging/hotel-dist/guarantee-policy.md) — related
- [No-Show](/common/customer/no-show.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — child

# Distinctions
- **Advance Deposit** vs [Guarantee Policy](/lodging/hotel-dist/guarantee-policy.md) — A Guarantee Policy secures the booking against a credit card but typically charges nothing until the guest no-shows or cancels within the penalty window; an Advance Deposit requires actual partial or full payment to be transferred before arrival to hold the reservation.
- **Advance Deposit** vs [Cancellation Policy](/lodging/hotel-dist/cancellation-policy.md) — A Cancellation Policy is the broader set of rules governing when and how a booking can be cancelled and what penalties apply; an Advance Deposit is a specific payment mechanism defined within that policy that is forfeited if the cancellation conditions are breached.
- **Advance Deposit** vs [No-Show](/common/customer/no-show.md) — A No-Show occurs when a guest fails to arrive without cancelling; an Advance Deposit is the financial mechanism that protects the hotel from the revenue loss a No-Show would otherwise cause.

# Citations
[1] [Travelport — Hotel Booking with Guarantee, Deposit, or Pre-Payment](https://support.travelport.com/webhelp/uapi/Content/Hotel/Hotel_Booking/Hotel_Booking_with_Deposit_or_Guarantee.htm)
[2] [Mews — Hotel Deposit Policies — A Practical Guide for Hoteliers](https://www.mews.com/en/blog/hotel-deposit)
