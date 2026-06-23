---
type: Process
title: Void
description: 'The cancellation of a newly issued ticket or EMD within the permitted void window (typically the same sales day, before the BSP/ARC sales reporting cutoff) so that no sale is reported and no value is collected. A voided document''s coupons are set to status VOID and cannot be used.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: void
vertical: air
category: air-ticket
conceptType: process
status: active
term_ko: 보이드/발권 취소 (Void)
definition_ko: 허용된 Void 기한(일반적으로 BSP/ARC 판매 보고 마감 이전의 당일 판매일) 내에 새로 발행된 항공권 또는 EMD를 취소하여 판매가 보고되지 않고 가치가 징수되지 않도록 하는 것이다. Void 처리된 서류의 쿠폰은 VOID 상태로 설정되어 사용할 수 없다.
longDef: 'Voiding removes the transaction from the agent''s sales report before it is billed through BSP/ARC, making it the cleanest way to reverse an erroneous or unwanted issuance without incurring a refund transaction or penalties. The void window is constrained by the local BSP/ARC sales reporting period (commonly the day of issue, subject to the reporting period close); once the window passes, reversal must be handled as a refund instead. Void applies only to documents that have not been used.'
longDef_ko: 'Void 처리는 BSP/ARC를 통해 청구되기 전에 대리점의 판매 보고서에서 거래를 제거하므로, 환불 거래나 위약금 없이 잘못되었거나 원치 않는 발권을 되돌리는 가장 깔끔한 방법이다. Void 기한은 현지 BSP/ARC 판매 보고 기간(일반적으로 발행 당일이며 보고 기간 마감에 따름)에 의해 제한된다. 기한이 지나면 되돌리기는 대신 환불로 처리해야 한다. Void는 사용되지 않은 서류에만 적용된다.'
standardBody: IATA
aliases:
  - Voiding
  - Same-Day Void
  - Ticket Void
providerTerms:
  - provider: Amadeus
    term: TRDC (formerly TWX)
    context: 'Amadeus voids a newly issued e-ticket or EMD within the same sales day using the TRDC transaction, which replaced the older TWX void entry effective January 2014.'
    context_ko: 'Amadeus는 새로 발행한 전자항공권/EMD를 동일 판매일 내에 TRDC 트랜잭션으로 보이드하며, 이는 2014년 1월부로 기존 TWX 보이드 입력을 대체했다.'
    relationship: same
  - provider: Sabre
    term: WV (Void)
    context: 'Sabre voids a ticket or exchange with the WV command referencing the item number from the *T document list; when an exchange is voided, the original coupon status returns to REAC (reactivated).'
    context_ko: 'Sabre는 *T 서류 목록의 항목 번호를 참조하는 WV 명령으로 항공권/교환을 보이드하며, 교환을 보이드하면 원본 쿠폰 상태가 REAC(재활성화)로 되돌아간다.'
    relationship: same
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: EMD
  - type: contrasts
    targetTerm: Refund
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
distinctions:
  - targetTerm: Refund
    explanation: Void reverses an issuance within the same sales period so it is never billed; refund returns value after the document has been reported/settled.
    explanation_ko: 'Void는 동일한 판매 기간 내에 발권을 되돌려 청구되지 않게 하며, 환불은 서류가 보고/정산된 이후에 가치를 반환한다.'
  - targetTerm: Reissue
    explanation: Void nullifies the document entirely; reissue keeps the value and exchanges it for a new document.
    explanation_ko: 'Void는 서류를 완전히 무효화하며, 재발행은 가치를 유지하면서 새 서류로 교환한다.'
  - targetTerm: Coupon Status
    explanation: 'Void is one specific coupon/ticket status (cancellation of issuance, typically same-day); coupon status is the broader set of all possible lifecycle states a coupon can hold.'
    explanation_ko: 'Void는 특정한 하나의 쿠폰/항공권 상태(발행 취소, 보통 당일)이고, coupon status는 쿠폰이 가질 수 있는 모든 생애주기 상태의 더 넓은 집합이다.'
sources:
  - name: BSP / ARC sales reporting and void procedures
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/bsp/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="10" width="26" height="22" rx="3"/><path d="M15 17h14M15 22h10"/><circle cx="31" cy="32" r="9"/><path d="M25 26l12 12"/></svg>
---

> The cancellation of a newly issued ticket or EMD within the permitted void window (typically the same sales day, before the BSP/ARC sales reporting cutoff) so that no sale is reported and no value is collected. A voided document's coupons are set to status VOID and cannot be used.

Voiding removes the transaction from the agent's sales report before it is billed through BSP/ARC, making it the cleanest way to reverse an erroneous or unwanted issuance without incurring a refund transaction or penalties. The void window is constrained by the local BSP/ARC sales reporting period (commonly the day of issue, subject to the reporting period close); once the window passes, reversal must be handled as a refund instead. Void applies only to documents that have not been used.

**한국어 / Korean** — **보이드/발권 취소 (Void)** — 허용된 Void 기한(일반적으로 BSP/ARC 판매 보고 마감 이전의 당일 판매일) 내에 새로 발행된 항공권 또는 EMD를 취소하여 판매가 보고되지 않고 가치가 징수되지 않도록 하는 것이다. Void 처리된 서류의 쿠폰은 VOID 상태로 설정되어 사용할 수 없다.

Void 처리는 BSP/ARC를 통해 청구되기 전에 대리점의 판매 보고서에서 거래를 제거하므로, 환불 거래나 위약금 없이 잘못되었거나 원치 않는 발권을 되돌리는 가장 깔끔한 방법이다. Void 기한은 현지 BSP/ARC 판매 보고 기간(일반적으로 발행 당일이며 보고 기간 마감에 따름)에 의해 제한된다. 기한이 지나면 되돌리기는 대신 환불로 처리해야 한다. Void는 사용되지 않은 서류에만 적용된다.

**Aliases:** `Voiding`, `Same-Day Void`, `Ticket Void`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `TRDC (formerly TWX)` | same | Amadeus voids a newly issued e-ticket or EMD within the same sales day using the TRDC transaction, which replaced the older TWX void entry effective January 2014. |
| Sabre | `WV (Void)` | same | Sabre voids a ticket or exchange with the WV command referencing the item number from the *T document list; when an exchange is voided, the original coupon status returns to REAC (reactivated). |

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [Refund](/air/air-ticket/refund.md) — contrasts
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related

# Distinctions
- **Void** vs [Refund](/air/air-ticket/refund.md) — Void reverses an issuance within the same sales period so it is never billed; refund returns value after the document has been reported/settled.
- **Void** vs [Reissue](/air/air-ticket/reissue.md) — Void nullifies the document entirely; reissue keeps the value and exchanges it for a new document.
- **Void** vs [Coupon Status](/air/air-ticket/coupon-status.md) — Void is one specific coupon/ticket status (cancellation of issuance, typically same-day); coupon status is the broader set of all possible lifecycle states a coupon can hold.

# Citations
[1] [IATA — BSP / ARC sales reporting and void procedures](https://www.iata.org/en/services/finance/bsp/)
