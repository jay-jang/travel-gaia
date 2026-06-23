---
type: Process
title: Refund
description: The return of all or part of a ticket's or EMD's value to the passenger or form of payment for unused or partially used coupons. Refund eligibility and any penalties are determined by the applicable fare rules (voluntary) or by involuntary refund provisions when the carrier fails to provide carriage.
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: refund
vertical: air
category: air-ticket
conceptType: process
status: active
term_ko: 환불 (Refund)
definition_ko: '미사용 또는 부분 사용된 쿠폰에 대해 항공권 또는 EMD 가치의 전부 또는 일부를 승객 또는 지불 수단으로 반환하는 것이다. 환불 자격 여부와 위약금은 해당 운임 규정(자발적인 경우)에 의해, 또는 항공사가 운송을 제공하지 못한 경우 비자발적 환불 규정에 의해 결정된다.'
longDef: 'Refunds are categorized as voluntary (passenger-initiated, subject to refundability and cancellation penalties in the fare rule) or involuntary (carrier-caused cancellation/schedule failure, generally full and penalty-free). Refunded coupons are set to status REFUNDED so value cannot be reused, and unused taxes/fees may be refundable even on non-refundable fares depending on jurisdiction. For BSP/ARC sales, refunds are processed through the settlement system and netted against the agent''s billing.'
longDef_ko: '환불은 자발적 환불(승객 주도이며 운임 규정상의 환불 가능 여부 및 취소 위약금 적용)과 비자발적 환불(항공사 사유에 의한 결항/운항 실패로, 일반적으로 전액이며 위약금 없음)로 구분된다. 환불된 쿠폰은 가치가 재사용되지 못하도록 REFUNDED 상태로 설정되며, 미사용 세금/수수료는 관할 지역에 따라 환불 불가 운임에서도 환불될 수 있다. BSP/ARC 판매의 경우 환불은 정산 시스템을 통해 처리되어 대리점 청구액과 상계된다.'
standardBody: IATA
aliases:
  - Ticket Refund
  - Refund Application
providerTerms:
  - provider: Amadeus
    term: ATC Refund (TRF / TRFP)
    context: 'Amadeus processes automated refunds through Amadeus Ticket Changer Refund, where the pricing engine calculates the refundable amount (TRF to display/redisplay, TRFP to process, TRFU to update).'
    context_ko: 'Amadeus는 Amadeus Ticket Changer Refund로 자동 환불을 처리하며, 가격 엔진이 환불 가능액을 계산한다(TRF 표시/재표시, TRFP 처리, TRFU 갱신).'
    relationship: same
  - provider: Sabre
    term: WETRR / RFND
    context: 'Sabre processes refunds via the automated refund flow (WETRR) or RFND, and also offers the Quick Refunds and Exchanges (QREX) tool; cancel-refund must be done by midnight on the processing day.'
    context_ko: Sabre는 자동 환불 흐름(WETRR) 또는 RFND로 환불을 처리하며 Quick Refunds and Exchanges(QREX) 도구도 제공한다. 환불 취소는 처리 당일 자정까지 가능하다.
    relationship: same
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: Flight Coupon
  - type: contrasts
    targetTerm: Void
  - type: contrasts
    targetTerm: Reissue
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
distinctions:
  - targetTerm: Void
    explanation: 'Void cancels an issuance within the same sales period at zero cost; a refund returns value after the sales/void window, typically with applicable penalties.'
    explanation_ko: 'Void는 동일한 판매 기간 내에 무비용으로 발권을 취소하며, 환불은 판매/Void 기한 이후에 가치를 반환하되 통상 적용 가능한 위약금이 따른다.'
  - targetTerm: Reissue
    explanation: Refund returns value to the customer; reissue exchanges the ticket for new transportation.
    explanation_ko: '환불은 고객에게 가치를 반환하며, 재발행은 항공권을 새로운 운송으로 교환한다.'
  - targetTerm: Chargeback
    explanation: A refund is a merchant-initiated return of funds; a chargeback is a cardholder-initiated dispute forced through the card network.
    explanation_ko: '환불은 가맹점이 주도하는 자금 반환이며, 지불 거절(chargeback)은 카드 소지자가 주도하여 카드 네트워크를 통해 강제되는 분쟁이다.'
  - targetTerm: Agency Credit Memo (ACM)
    explanation: 'A refund returns value for an unused ticket; an ACM is the back-office BSP/ARC credit document between airline and agent, which may be the vehicle for passing a refund or correction back to the agent.'
    explanation_ko: 'Refund는 미사용 항공권의 가치를 돌려주는 것이고, ACM은 항공사와 대리점 사이의 후선 업무 BSP/ARC 대변 문서로, 환불이나 정정을 대리점에 전달하는 수단이 될 수 있다.'
  - targetTerm: Agency Debit Memo (ADM)
    explanation: 'A refund returns value to a customer for an unused or partially used ticket; an ADM is a back-office claim from the airline against the agent for a billing discrepancy, settled through the BSP rather than to a passenger.'
    explanation_ko: 'Refund는 미사용·부분 사용 항공권에 대해 고객에게 가치를 돌려주지만, ADM은 청구 불일치에 대해 항공사가 대리점을 상대로 제기하는 후선 업무 청구로, 승객이 아니라 BSP를 통해 정산된다.'
  - targetTerm: Automatic Refund Rule
    explanation: 'Refund is the generic return of unused ticket value; the Automatic Refund Rule is the specific US regulation dictating that such refunds be automatic, in cash/original form, and within set deadlines.'
    explanation_ko: 'Refund는 미사용 항공권 가치를 반환하는 일반 개념이고, Automatic Refund Rule은 그러한 환불을 자동으로, 현금/원래 수단으로, 정해진 기한 내에 하도록 규정하는 구체적 미국 규정이다.'
  - targetTerm: Denied Boarding Compensation
    explanation: A refund returns the unused ticket value; DBC is a separate penalty paid on top of (or alongside re-routing of) the passenger regardless of any refund.
    explanation_ko: 'Refund는 미사용 항공권 가치를 반환하는 것이고, DBC는 환불 여부와 무관하게 승객에게 추가로(또는 re-routing과 함께) 지급되는 별도의 보상이다.'
  - targetTerm: Exchange
    explanation: An exchange applies the document's value to a new document; a refund returns the value (less penalties) as money to the form of payment. An exchange may produce a residual value that is then either refunded or forfeited.
    explanation_ko: 'Exchange는 서류 가치를 새 서류에 적용하지만, Refund는 가치를(위약금 제외) 결제 수단으로 돌려준다. 교환은 잔여 가치를 발생시킬 수 있으며, 이는 이후 환불되거나 소멸된다.'
  - targetTerm: Future Cruise Credit (FCC)
    explanation: 'A refund returns money to the original form of payment; an FCC deliberately substitutes a brand-locked, time-limited credit for that cash, keeping the value inside the cruise line. Many flexible programs offer an FCC of equal or greater value in lieu of a cash refund.'
    explanation_ko: '환불은 원결제 수단으로 돈을 돌려주는 것이지만, FCC는 그 현금을 브랜드에 묶인 기한부 크레딧으로 의도적으로 대체해 가치를 선사 내부에 유지한다. 많은 유연 프로그램이 현금 환불 대신 동등하거나 더 큰 가치의 FCC를 제공한다.'
  - targetTerm: Residual Value
    explanation: A refund is the return of value to the passenger; residual value is the leftover surplus from an exchange that may or may not be refundable — it can instead be forfeited or carried on an EMD/MCO.
    explanation_ko: 'Refund는 승객에게 가치를 반환하는 것이고, residual value는 교환에서 남은 잉여분으로 환불될 수도 아닐 수도 있다. 환불 대신 소멸되거나 EMD/MCO에 보존될 수 있다.'
  - targetTerm: Right to Re-routing
    explanation: Reimbursement is one of the two branches of the Article 8 choice; the Right to Re-routing is the broader entitlement framing reimbursement and re-routing as alternatives the passenger selects between.
    explanation_ko: '환불(reimbursement)은 Article 8 선택지의 두 갈래 중 하나이고, Right to Re-routing은 환불과 재경로를 승객이 선택하는 대안으로 묶는 상위 권리이다.'
  - targetTerm: Voluntary Refunds (ATPCO Category 33)
    explanation: Refund is the outcome of returning value to the passenger; Category 33 is the ATPCO rule data that machine-determines whether and how much of a voluntary refund is due.
    explanation_ko: 'Refund는 승객에게 가치를 반환하는 결과이고, Category 33은 자발적 환불이 가능한지와 금액을 기계적으로 결정하는 ATPCO 규정 데이터이다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
  - name: BSP Refund procedures
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/bsp/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="16" width="30" height="20" rx="3"/><path d="M6 22h30"/><path d="M40 14a10 10 0 11-3 14"/><path d="M37 28v-5h5"/></svg>
---

> The return of all or part of a ticket's or EMD's value to the passenger or form of payment for unused or partially used coupons. Refund eligibility and any penalties are determined by the applicable fare rules (voluntary) or by involuntary refund provisions when the carrier fails to provide carriage.

Refunds are categorized as voluntary (passenger-initiated, subject to refundability and cancellation penalties in the fare rule) or involuntary (carrier-caused cancellation/schedule failure, generally full and penalty-free). Refunded coupons are set to status REFUNDED so value cannot be reused, and unused taxes/fees may be refundable even on non-refundable fares depending on jurisdiction. For BSP/ARC sales, refunds are processed through the settlement system and netted against the agent's billing.

**한국어 / Korean** — **환불 (Refund)** — 미사용 또는 부분 사용된 쿠폰에 대해 항공권 또는 EMD 가치의 전부 또는 일부를 승객 또는 지불 수단으로 반환하는 것이다. 환불 자격 여부와 위약금은 해당 운임 규정(자발적인 경우)에 의해, 또는 항공사가 운송을 제공하지 못한 경우 비자발적 환불 규정에 의해 결정된다.

환불은 자발적 환불(승객 주도이며 운임 규정상의 환불 가능 여부 및 취소 위약금 적용)과 비자발적 환불(항공사 사유에 의한 결항/운항 실패로, 일반적으로 전액이며 위약금 없음)로 구분된다. 환불된 쿠폰은 가치가 재사용되지 못하도록 REFUNDED 상태로 설정되며, 미사용 세금/수수료는 관할 지역에 따라 환불 불가 운임에서도 환불될 수 있다. BSP/ARC 판매의 경우 환불은 정산 시스템을 통해 처리되어 대리점 청구액과 상계된다.

**Aliases:** `Ticket Refund`, `Refund Application`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `ATC Refund (TRF / TRFP)` | same | Amadeus processes automated refunds through Amadeus Ticket Changer Refund, where the pricing engine calculates the refundable amount (TRF to display/redisplay, TRFP to process, TRFU to update). |
| Sabre | `WETRR / RFND` | same | Sabre processes refunds via the automated refund flow (WETRR) or RFND, and also offers the Quick Refunds and Exchanges (QREX) tool; cancel-refund must be done by midnight on the processing day. |

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Void](/air/air-ticket/void.md) — contrasts
- [Reissue](/air/air-ticket/reissue.md) — contrasts
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related

# Distinctions
- **Refund** vs [Void](/air/air-ticket/void.md) — Void cancels an issuance within the same sales period at zero cost; a refund returns value after the sales/void window, typically with applicable penalties.
- **Refund** vs [Reissue](/air/air-ticket/reissue.md) — Refund returns value to the customer; reissue exchanges the ticket for new transportation.
- **Refund** vs [Chargeback](/common/pay/chargeback.md) — A refund is a merchant-initiated return of funds; a chargeback is a cardholder-initiated dispute forced through the card network.
- **Refund** vs [Agency Credit Memo (ACM)](/air/air-ticket/agency-credit-memo-acm.md) — A refund returns value for an unused ticket; an ACM is the back-office BSP/ARC credit document between airline and agent, which may be the vehicle for passing a refund or correction back to the agent.
- **Refund** vs [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — A refund returns value to a customer for an unused or partially used ticket; an ADM is a back-office claim from the airline against the agent for a billing discrepancy, settled through the BSP rather than to a passenger.
- **Refund** vs [Automatic Refund Rule](/common/disruption/automatic-refund-rule.md) — Refund is the generic return of unused ticket value; the Automatic Refund Rule is the specific US regulation dictating that such refunds be automatic, in cash/original form, and within set deadlines.
- **Refund** vs [Denied Boarding Compensation](/common/disruption/denied-boarding-compensation.md) — A refund returns the unused ticket value; DBC is a separate penalty paid on top of (or alongside re-routing of) the passenger regardless of any refund.
- **Refund** vs [Exchange](/air/air-ticket/exchange.md) — An exchange applies the document's value to a new document; a refund returns the value (less penalties) as money to the form of payment. An exchange may produce a residual value that is then either refunded or forfeited.
- **Refund** vs [Future Cruise Credit (FCC)](/cruise/cruise/future-cruise-credit-fcc.md) — A refund returns money to the original form of payment; an FCC deliberately substitutes a brand-locked, time-limited credit for that cash, keeping the value inside the cruise line. Many flexible programs offer an FCC of equal or greater value in lieu of a cash refund.
- **Refund** vs [Residual Value](/air/air-ticket/residual-value.md) — A refund is the return of value to the passenger; residual value is the leftover surplus from an exchange that may or may not be refundable — it can instead be forfeited or carried on an EMD/MCO.
- **Refund** vs [Right to Re-routing](/common/disruption/right-to-re-routing.md) — Reimbursement is one of the two branches of the Article 8 choice; the Right to Re-routing is the broader entitlement framing reimbursement and re-routing as alternatives the passenger selects between.
- **Refund** vs [Voluntary Refunds (ATPCO Category 33)](/air/air-ticket/voluntary-refunds-atpco-category-33.md) — Refund is the outcome of returning value to the passenger; Category 33 is the ATPCO rule data that machine-determines whether and how much of a voluntary refund is due.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [IATA — BSP Refund procedures](https://www.iata.org/en/services/finance/bsp/)
