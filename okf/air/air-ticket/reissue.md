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
vertical: air
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
providerTerms:
  - provider: Amadeus
    term: Amadeus Ticket Changer (ATC)
    context: 'Amadeus brands its automated reissue/exchange engine as Amadeus Ticket Changer (ATC), which reprices and issues the new ticket while marking original coupons EXCHANGED (voluntary FXP/TTP, involuntary FXI).'
    context_ko: 'Amadeus는 자동 재발행/교환 엔진을 Amadeus Ticket Changer(ATC)로 브랜딩하며, 재산정 후 새 항공권을 발행하고 원본 쿠폰을 EXCHANGED 처리한다(자발적 FXP/TTP, 비자발적 FXI).'
    relationship: same
  - provider: Sabre
    term: WETR / PQR
    context: 'Sabre reissues are processed via the WETR exchange flow, storing the recomputed fare as a Price Quote Reissue Record (PQR) until the new ticket is issued; original coupons move to EXCHANGED.'
    context_ko: 'Sabre 재발행은 WETR 교환 흐름으로 처리되어 재산정 운임을 새 항공권 발행 시까지 Price Quote Reissue Record(PQR)로 저장하며, 원본 쿠폰은 EXCHANGED로 전환된다.'
    relationship: same
  - provider: NDC/IATA
    term: OrderChange
    context: 'In NDC, a reissue is expressed as an OrderChange that replaces affected OrderItems with new OfferItems; the airline''s order management system reprices and reissues underlying documents.'
    context_ko: 'NDC에서 재발행은 영향받는 OrderItem을 새 OfferItem으로 교체하는 OrderChange로 표현되며, 항공사 주문관리시스템이 재산정·재발행한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Flight Coupon
  - type: related
    targetTerm: Refund
  - type: contrasts
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
  - targetTerm: Endorsements / Restrictions Box
    explanation: 'Reissue is the act of issuing a replacement ticket; endorsement/restriction codes (e.g., NON-ENDORSABLE) constrain whether and onto which carrier a coupon may be reissued or accepted.'
    explanation_ko: 'Reissue는 대체 항공권을 발행하는 행위이고, endorsement/restriction 코드(예: NON-ENDORSABLE)는 쿠폰을 reissue하거나 어느 항공사가 인수할 수 있는지를 제약한다.'
  - targetTerm: Exchange
    explanation: 'Exchange is the value/payment transaction (surrendering old value, collecting difference or generating residual); reissue is the issuance of the replacement document. They typically occur together, but a reissue can also follow an involuntary change without a passenger-initiated exchange.'
    explanation_ko: 'Exchange는 가치·결제 거래(기존 가치 반납, 차액 징수 또는 잔여 가치 발생)이고, reissue는 대체 서류의 발행이다. 보통 함께 일어나지만, 재발행은 승객이 시작하지 않은 비자발적 변경에 따라 이루어질 수도 있다.'
  - targetTerm: Name Change
    explanation: A name change is a data correction that may require ticket action; a reissue is the broader ticketing transaction (often triggered by such changes) that produces a new e-ticket.
    explanation_ko: '이름 변경은 항공권 조치가 필요할 수 있는 데이터 정정이고, 재발행(Reissue)은 이러한 변경으로 흔히 유발되어 새 전자 항공권을 생성하는 보다 포괄적인 발권 거래이다.'
  - targetTerm: Voluntary Changes (ATPCO Category 31)
    explanation: Reissue is the operational process of producing a new ticket; Category 31 is the underlying ATPCO rule data that tells systems whether and how that reissue may be priced.
    explanation_ko: 'Reissue는 새 항공권을 만들어내는 운영 절차이고, Category 31은 그 재발권이 가능한지와 어떻게 가격을 산정할지를 시스템에 알려주는 ATPCO 규정 데이터이다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="12" width="28" height="18" rx="3"/><path d="M16 18h10M16 23h6"/><path d="M38 38a14 14 0 01-22-3"/><path d="M16 41v-6h6"/><path d="M10 33a14 14 0 0122 3"/><path d="M32 30v6h-6"/></svg>
---

> The process of exchanging an existing ticket for a new one to reflect a change in itinerary, fare, or travel dates, computing any additional collection (ADC) or residual value. The original coupons are marked EXCHANGED and a new ticket with new coupons is issued.

A voluntary reissue is initiated at the passenger's request (e.g., a date or routing change) and is governed by the fare rules of the applicable fare, which determine change penalties, fare difference recalculation, and whether residual value can be retained (often via an EMD). The reissue records the original ticket number in the new document's origin/issue data and shows fare/tax recalculation and any add-collect amount. Reissue contrasts with refund (returning value to the customer) and void (same-day cancellation of an unused issuance).

**한국어 / Korean** — **재발행 (Reissue)** — 여정, 운임 또는 여행 날짜의 변경을 반영하기 위해 기존 항공권을 새 항공권으로 교환하는 절차로, 추가 징수액(ADC) 또는 잔여 가치를 계산한다. 원래의 쿠폰은 EXCHANGED로 표시되고 새로운 쿠폰을 가진 새 항공권이 발행된다.

자발적 재발행은 승객의 요청(예: 날짜 또는 노선 변경)에 의해 시작되며, 변경 위약금, 운임 차액 재계산, 그리고 잔여 가치를 (흔히 EMD를 통해) 보존할 수 있는지 여부를 결정하는 해당 운임의 운임 규정(fare rule)에 따른다. 재발행은 새 서류의 origin/issue 데이터에 원래 항공권 번호를 기록하고 운임/세금 재계산과 추가 징수액(add-collect)을 표시한다. 재발행은 환불(고객에게 가치를 반환)이나 Void(미사용 발권의 당일 취소)와 구별된다.

**Aliases:** `Exchange`, `Ticket Exchange`, `Reissuance`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Amadeus Ticket Changer (ATC)` | same | Amadeus brands its automated reissue/exchange engine as Amadeus Ticket Changer (ATC), which reprices and issues the new ticket while marking original coupons EXCHANGED (voluntary FXP/TTP, involuntary FXI). |
| Sabre | `WETR / PQR` | same | Sabre reissues are processed via the WETR exchange flow, storing the recomputed fare as a Price Quote Reissue Record (PQR) until the new ticket is issued; original coupons move to EXCHANGED. |
| NDC/IATA | `OrderChange` | same | In NDC, a reissue is expressed as an OrderChange that replaces affected OrderItems with new OfferItems; the airline's order management system reprices and reissues underlying documents. |

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [Void](/air/air-ticket/void.md) — contrasts
- [Involuntary Reissue](/air/air-ticket/involuntary-reissue.md) — contrasts
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related

# Distinctions
- **Reissue** vs [Involuntary Reissue](/air/air-ticket/involuntary-reissue.md) — Voluntary reissue is passenger-requested and subject to fare-rule penalties; involuntary reissue results from airline-caused changes and typically waives penalties.
- **Reissue** vs [Refund](/air/air-ticket/refund.md) — Reissue exchanges the ticket for new travel; refund returns the ticket's value rather than re-issuing transportation.
- **Reissue** vs [Void](/air/air-ticket/void.md) — Void cancels an issuance within the same sales period leaving no reportable sale; reissue creates a new document and marks the old coupons as exchanged.
- **Reissue** vs [Endorsements / Restrictions Box](/air/air-ticket/endorsements-restrictions-box.md) — Reissue is the act of issuing a replacement ticket; endorsement/restriction codes (e.g., NON-ENDORSABLE) constrain whether and onto which carrier a coupon may be reissued or accepted.
- **Reissue** vs [Exchange](/air/air-ticket/exchange.md) — Exchange is the value/payment transaction (surrendering old value, collecting difference or generating residual); reissue is the issuance of the replacement document. They typically occur together, but a reissue can also follow an involuntary change without a passenger-initiated exchange.
- **Reissue** vs [Name Change](/common/customer/name-change.md) — A name change is a data correction that may require ticket action; a reissue is the broader ticketing transaction (often triggered by such changes) that produces a new e-ticket.
- **Reissue** vs [Voluntary Changes (ATPCO Category 31)](/air/air-ticket/voluntary-changes-atpco-category-31.md) — Reissue is the operational process of producing a new ticket; Category 31 is the underlying ATPCO rule data that tells systems whether and how that reissue may be priced.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
