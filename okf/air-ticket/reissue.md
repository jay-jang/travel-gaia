---
type: Process
title: Reissue
description: 'The process of exchanging an existing ticket for a new one to reflect a change in itinerary, fare, or travel dates, computing any additional collection (ADC) or residual value. The original coupons are marked EXCHANGED and a new ticket with new coupons is issued.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: reissue
category: air-ticket
conceptType: process
status: active
term_ko: 재발행 (Reissue)
definition_ko: '여정, 운임 또는 여행 날짜의 변경을 반영하기 위해 기존 항공권을 새 항공권으로 교환하는 절차로, 추가 징수액(ADC) 또는 잔여 가치를 계산한다. 원래의 쿠폰은 EXCHANGED로 표시되고 새로운 쿠폰을 가진 새 항공권이 발행된다.'
longDef: 'A voluntary reissue is initiated at the passenger''s request (e.g., a date or routing change) and is governed by the fare rules of the applicable fare, which determine change penalties, fare difference recalculation, and whether residual value can be retained (often via an EMD). The reissue records the original ticket number in the new document''s origin/issue data and shows fare/tax recalculation and any add-collect amount. Reissue contrasts with refund (returning value to the customer) and void (same-day cancellation of an unused issuance).'
longDef_ko: '자발적 재발행은 승객의 요청(예: 날짜 또는 노선 변경)에 의해 시작되며, 변경 위약금, 운임 차액 재계산, 그리고 잔여 가치를 (흔히 EMD를 통해) 보존할 수 있는지 여부를 결정하는 해당 운임의 운임 규정(fare rule)에 따른다. 재발행은 새 서류의 origin/issue 데이터에 원래 항공권 번호를 기록하고 운임/세금 재계산과 추가 징수액(add-collect)을 표시한다. 재발행은 환불(고객에게 가치를 반환)이나 Void(미사용 발권의 당일 취소)와 구별된다.'
standardBody: IATA
aliases:
  - Exchange
  - Ticket Exchange
  - Reissuance
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Flight Coupon
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: Void
  - type: contrasts
    targetTerm: Involuntary Reissue
  - type: related
    targetTerm: Fare Basis Code
distinctions:
  - targetTerm: Involuntary Reissue
    explanation: Voluntary reissue is passenger-requested and subject to fare-rule penalties; involuntary reissue results from airline-caused changes and typically waives penalties.
    explanation_ko: '자발적 재발행은 승객 요청에 의한 것으로 운임 규정상의 위약금이 적용되며, 비자발적 재발행은 항공사 사유에 의한 변경에서 비롯되어 일반적으로 위약금이 면제된다.'
  - targetTerm: Refund
    explanation: Reissue exchanges the ticket for new travel; refund returns the ticket's value rather than re-issuing transportation.
    explanation_ko: '재발행은 항공권을 새로운 여행으로 교환하며, 환불은 운송을 재발행하는 대신 항공권의 가치를 반환한다.'
  - targetTerm: Void
    explanation: Void cancels an issuance within the same sales period leaving no reportable sale; reissue creates a new document and marks the old coupons as exchanged.
    explanation_ko: 'Void는 동일한 판매 기간 내에 발권을 취소하여 보고할 판매 내역을 남기지 않으며, 재발행은 새 서류를 생성하고 기존 쿠폰을 교환됨(exchanged)으로 표시한다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="12" width="28" height="18" rx="3"/><path d="M16 18h10M16 23h6"/><path d="M38 38a14 14 0 01-22-3"/><path d="M16 41v-6h6"/><path d="M10 33a14 14 0 0122 3"/><path d="M32 30v6h-6"/></svg>
---

> The process of exchanging an existing ticket for a new one to reflect a change in itinerary, fare, or travel dates, computing any additional collection (ADC) or residual value. The original coupons are marked EXCHANGED and a new ticket with new coupons is issued.

A voluntary reissue is initiated at the passenger's request (e.g., a date or routing change) and is governed by the fare rules of the applicable fare, which determine change penalties, fare difference recalculation, and whether residual value can be retained (often via an EMD). The reissue records the original ticket number in the new document's origin/issue data and shows fare/tax recalculation and any add-collect amount. Reissue contrasts with refund (returning value to the customer) and void (same-day cancellation of an unused issuance).

**한국어 / Korean** — **재발행 (Reissue)** — 여정, 운임 또는 여행 날짜의 변경을 반영하기 위해 기존 항공권을 새 항공권으로 교환하는 절차로, 추가 징수액(ADC) 또는 잔여 가치를 계산한다. 원래의 쿠폰은 EXCHANGED로 표시되고 새로운 쿠폰을 가진 새 항공권이 발행된다.

자발적 재발행은 승객의 요청(예: 날짜 또는 노선 변경)에 의해 시작되며, 변경 위약금, 운임 차액 재계산, 그리고 잔여 가치를 (흔히 EMD를 통해) 보존할 수 있는지 여부를 결정하는 해당 운임의 운임 규정(fare rule)에 따른다. 재발행은 새 서류의 origin/issue 데이터에 원래 항공권 번호를 기록하고 운임/세금 재계산과 추가 징수액(add-collect)을 표시한다. 재발행은 환불(고객에게 가치를 반환)이나 Void(미사용 발권의 당일 취소)와 구별된다.

**Aliases:** `Exchange`, `Ticket Exchange`, `Reissuance`

# Related
- [E-ticket](/air-ticket/e-ticket.md) — related
- [Flight Coupon](/air-ticket/flight-coupon.md) — related
- [Refund](/air-ticket/refund.md) — related
- [Void](/air-ticket/void.md) — related
- [Involuntary Reissue](/air-ticket/involuntary-reissue.md) — contrasts
- [Fare Basis Code](/air-shop/fare-basis-code.md) — related

# Distinctions
- **Reissue** vs [Involuntary Reissue](/air-ticket/involuntary-reissue.md) — Voluntary reissue is passenger-requested and subject to fare-rule penalties; involuntary reissue results from airline-caused changes and typically waives penalties.
- **Reissue** vs [Refund](/air-ticket/refund.md) — Reissue exchanges the ticket for new travel; refund returns the ticket's value rather than re-issuing transportation.
- **Reissue** vs [Void](/air-ticket/void.md) — Void cancels an issuance within the same sales period leaving no reportable sale; reissue creates a new document and marks the old coupons as exchanged.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
