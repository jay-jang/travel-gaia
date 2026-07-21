---
type: Business Term
title: Guaranteed Reservation
description: 'A guaranteed reservation is a hotel booking secured by the guest''s credit card, advance deposit, or approved corporate account, under which the hotel commits to holding the room until checkout time on the day following arrival — regardless of when the guest arrives. In exchange, the hotel may charge a no-show fee (typically one night''s room and tax) if the guest fails to arrive and has not cancelled by the property''s stated cancellation deadline, commonly 6:00 PM on the arrival date.'
tags:
  - hotel-dist
  - active
  - OpenTravel Alliance
timestamp: '2026-07-21T00:00:00Z'
id: guaranteed-reservation
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
term_ko: 보증 예약(Guaranteed Reservation)
definition_ko: '보증 예약(Guaranteed Reservation)은 투숙객의 신용카드, 사전 보증금, 또는 승인된 법인 계정으로 담보된 호텔 예약으로, 호텔은 투숙객의 도착 시각과 무관하게 다음 날 체크아웃 시각까지 객실을 유지할 의무를 진다. 그 대가로 투숙객이 도착하지 않고 호텔이 정한 취소 마감(흔히 도착일 오후 6시) 전에 취소하지 않으면 호텔은 통상 1박 요금에 세금을 더한 노쇼 요금을 청구할 수 있다.'
longDef: 'A guaranteed reservation provides the guest with certainty of accommodation regardless of arrival time, which is particularly important for late arrivals (after the hotel''s standard 6 PM hold cut-off). Guarantee types accepted by most properties include: credit-card guarantee (the most common form — the card is charged only if the guest no-shows), advance deposit (typically one night''s room rate collected at booking), and corporate billing account (an approved company guarantee in lieu of individual payment). Mastercard''s hotel-guarantee programme — to which all Mastercard-accepting lodging merchants are automatically enrolled — specifies that a guaranteed reservation must be held until checkout time on the day following arrival, and that a no-show charge may not exceed one night''s room rate; the cardholder must cancel before 18:00 local hotel time on the arrival date to avoid the charge. In OpenTravel Alliance (OTA) XML messaging, the guarantee requirement is a structured field (GuaranteeType) within the hotel reservation message set, enabling CRS, PMS, and OTA systems to communicate guarantee type and amount in a standardised way. A guaranteed reservation differs from the guarantee policy — the property-level rules defining which guarantee methods are accepted and the associated deadlines and penalties — which governs the reservation type.'
longDef_ko: '보증 예약은 특히 호텔의 표준 오후 6시 보류 마감 이후에 도착하는 경우에 도착 시각과 무관하게 숙박을 보장받는다는 확신을 투숙객에게 제공한다. 대부분의 숙박 시설이 수용하는 보증 유형으로는 신용카드 보증(가장 일반적인 형태 — 노쇼 시에만 청구됨), 사전 보증금(예약 시 일반적으로 1박 요금 선불), 법인 계정(개인 결제를 대신하는 승인된 법인 보증)이 있다. Mastercard의 호텔 보증 프로그램은 — Mastercard를 받는 모든 숙박업체가 자동 등록된다 — 보증 예약이 도착일 다음 날 체크아웃 시각까지 유지되어야 하고 노쇼 요금이 1박 요금을 초과할 수 없다고 규정하며, 투숙객은 도착일 현지 오후 6시 전에 취소해야 요금을 면한다. OpenTravel Alliance(OTA) XML 메시징에서 보증 요구 사항은 호텔 예약 메시지 세트 내 구조화된 필드(GuaranteeType)로, CRS·PMS·OTA 시스템이 보증 유형 및 금액을 표준화된 방식으로 통신할 수 있게 한다. 보증 예약은 개런티 정책(Guarantee Policy) — 어떤 보증 방법이 수용되는지, 관련 마감 및 위약금을 정의하는 숙박 시설 수준의 규칙 — 과 구별된다.'
aliases:
  - Guaranteed Hotel Reservation
  - Credit Card Guaranteed Reservation
  - Secured Reservation
relationships:
  - type: related
    targetTerm: Guarantee Policy
  - type: related
    targetTerm: No-Show
  - type: related
    targetTerm: Cancellation Policy
  - type: related
    targetTerm: Overbooking
  - type: related
    targetTerm: Hotel Walk
distinctions:
  - targetTerm: Guarantee Policy
    explanation: 'A guaranteed reservation is the specific type of booking that has been secured by a credit card or deposit; the guarantee policy is the property-level ruleset that defines what forms of guarantee are accepted, when cancellation must occur to avoid penalty, and what the no-show charge will be. One is a booking type; the other is the policy framework that governs it.'
    explanation_ko: '보증 예약은 신용카드 또는 보증금으로 담보된 특정 예약 유형이고, 개런티 정책(guarantee policy)은 어떤 보증 방법을 수용하는지, 위약금 없는 취소 기한은 언제인지, 노쇼 요금이 얼마인지를 정의하는 숙박 시설 수준의 규칙 체계다. 하나는 예약 유형이고, 다른 하나는 그것을 규율하는 정책 체계다.'
  - targetTerm: No-Show
    explanation: 'A no-show is the event that triggers the guaranteed reservation''s penalty clause — the guest neither arrives nor cancels within the allowed window, so the hotel charges the guarantee. Without a guarantee, a no-show results only in the room being released with no financial consequence for the guest.'
    explanation_ko: '노쇼는 보증 예약의 위약금 조항을 발동시키는 사건으로, 투숙객이 허용 기간 내에 도착하지도 취소하지도 않아 호텔이 보증 요금을 청구한다. 보증이 없는 예약의 경우 노쇼는 단지 객실 해제로 이어질 뿐 투숙객에게 금전적 결과가 없다.'
sources:
  - name: Guaranteed Reservation (Wex Legal Dictionary)
    org: Cornell Law School / Legal Information Institute (LII)
    version: ''
    section: ''
    url: 'https://www.law.cornell.edu/wex/guaranteed_reservation'
    tier: secondary
  - name: Hotel 2.0 Availability and Reservation — GuaranteeType
    org: OpenTravel Alliance Developers Network
    version: '2.0'
    section: GuaranteeType
    url: 'https://www.opentraveldevelopersnetwork.com/hotel-20-availability-and-reservation'
    tier: association
  - name: Mastercard Hotel Guarantees
    org: Mastercard
    version: ''
    section: ''
    url: 'https://travel.mastercard.com/product/page/hotel-guarantees'
    tier: secondary
icon: '<svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="14" width="28" height="20" rx="3"/><path d="M18 24l4 4 8-8"/><path d="M10 20h28"/><path d="M16 30v6M32 30v6"/></svg>'
---

> A guaranteed reservation is a hotel booking secured by the guest's credit card, advance deposit, or approved corporate account, under which the hotel commits to holding the room until checkout time on the day following arrival — regardless of when the guest arrives. In exchange, the hotel may charge a no-show fee (typically one night's room and tax) if the guest fails to arrive and has not cancelled by the property's stated cancellation deadline, commonly 6:00 PM on the arrival date.

A guaranteed reservation provides the guest with certainty of accommodation regardless of arrival time — particularly important for late arrivals after the hotel's standard 6 PM hold cut-off. Guarantee types accepted by most properties include: credit-card guarantee (the most common form — the card is charged only if the guest no-shows), advance deposit (typically one night's room rate collected at booking), and corporate billing account. Mastercard's hotel-guarantee programme specifies that a guaranteed reservation must be held until checkout time on the day following arrival, and that a no-show charge may not exceed one night's room rate; the cardholder must cancel before 18:00 local hotel time on the arrival date to avoid the charge. In OpenTravel Alliance XML messaging, the guarantee requirement is a structured field (GuaranteeType) within the hotel reservation message set, enabling CRS, PMS, and OTA systems to communicate guarantee type and amount in a standardised way.

**한국어 / Korean** — **보증 예약(Guaranteed Reservation)** — 보증 예약(Guaranteed Reservation)은 투숙객의 신용카드, 사전 보증금, 또는 승인된 법인 계정으로 담보된 호텔 예약으로, 호텔은 투숙객의 도착 시각과 무관하게 다음 날 체크아웃 시각까지 객실을 유지할 의무를 진다. 그 대가로 투숙객이 도착하지 않고 호텔이 정한 취소 마감 전에 취소하지 않으면 호텔은 통상 1박 요금에 세금을 더한 노쇼 요금을 청구할 수 있다.

보증 예약은 특히 오후 6시 보류 마감 이후 도착하는 경우에도 숙박을 보장받는 확신을 투숙객에게 제공한다. Mastercard의 호텔 보증 프로그램은 도착일 다음 날 체크아웃 시각까지 객실이 유지되어야 하고 노쇼 요금이 1박을 초과할 수 없다고 규정한다. OpenTravel Alliance XML 메시징에서 보증 요구 사항은 호텔 예약 메시지 세트 내 구조화된 필드(GuaranteeType)로 표준화된다.

**Aliases:** `Guaranteed Hotel Reservation`, `Credit Card Guaranteed Reservation`, `Secured Reservation`

# Related
- [Guarantee Policy](/lodging/hotel-dist/guarantee-policy.md) — related
- [No-Show](/lodging/hotel-dist/no-show.md) — related
- [Cancellation Policy](/lodging/hotel-dist/cancellation-policy.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related
- Hotel Walk — related

# Distinctions
- **Guaranteed Reservation** vs [Guarantee Policy](/lodging/hotel-dist/guarantee-policy.md) — A guaranteed reservation is the specific type of booking that has been secured by a credit card or deposit; the guarantee policy is the property-level ruleset that defines what forms of guarantee are accepted, when cancellation must occur to avoid penalty, and what the no-show charge will be. One is a booking type; the other is the policy framework that governs it.
- **Guaranteed Reservation** vs [No-Show](/lodging/hotel-dist/no-show.md) — A no-show is the event that triggers the guaranteed reservation's penalty clause — the guest neither arrives nor cancels within the allowed window, so the hotel charges the guarantee. Without a guarantee, a no-show results only in the room being released with no financial consequence for the guest.

# Citations
[1] [Cornell Law School / LII — Guaranteed Reservation](https://www.law.cornell.edu/wex/guaranteed_reservation)
[2] [OpenTravel Alliance Developers Network — Hotel 2.0 Availability and Reservation](https://www.opentraveldevelopersnetwork.com/hotel-20-availability-and-reservation)
[3] [Mastercard — Hotel Guarantees](https://travel.mastercard.com/product/page/hotel-guarantees)
