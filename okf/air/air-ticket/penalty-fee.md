---
type: Business Term
title: Penalty Fee
description: 'A penalty fee is a charge imposed under a fare''s rules when a ticket is changed (reissued/exchanged) or cancelled/refunded, over and above any fare difference and taxes. The applicable penalties and conditions are defined in the fare rule, traditionally ATPCO Category 16 (Penalties) and, for automated processing, Category 31 (Voluntary Changes) and Category 33 (Voluntary Refunds).'
tags:
  - air-ticket
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: penalty-fee
vertical: air
category: air-ticket
conceptType: business-term
status: active
term_ko: Penalty Fee (위약금)
definition_ko: 'Penalty Fee(위약금)는 운임 규정에 따라 항공권을 변경(재발행/교환)하거나 취소/환불할 때, 운임 차액 및 세금과 별도로 부과되는 비용이다. 적용 위약금과 조건은 운임 규정에 정의되며, 전통적으로 ATPCO Category 16(Penalties), 그리고 자동 처리의 경우 Category 31(자발적 변경)과 Category 33(자발적 환불)에 담긴다.'
longDef: 'Penalty fees express the cost a passenger incurs to modify or cancel a purchased ticket, as set by the fare''s filed rules. In the ATPCO fare-rule structure, Category 16 (Penalties) carries the textual terms describing change and refund penalties, while automated change and refund processing is driven by Category 31 (Voluntary Changes) and Category 33 (Voluntary Refunds). Penalty amounts can be fixed, per-direction, per fare component, or percentage-based, and may differ for changes versus cancellations and by fare family or cabin. In an exchange, the penalty is collected alongside any additional fare collection and tax difference; in a refund, the penalty is deducted from the amount returned. Penalty fees are distinct from carrier service fees and from agency-imposed service charges.'
longDef_ko: 'Penalty fee는 구매한 항공권을 변경하거나 취소할 때 승객이 부담하는 비용으로, 운임의 등록 규정에 따라 정해진다. ATPCO 운임 규정 구조에서 Category 16(Penalties)은 변경·환불 위약금을 기술하는 텍스트 조건을 담고, 자동 변경·환불 처리는 Category 31(자발적 변경)과 Category 33(자발적 환불)이 구동한다. 위약금 금액은 정액, 방향별, fare component별, 또는 비율 기반일 수 있으며, 변경과 취소에 따라, fare family나 좌석 등급에 따라 다를 수 있다. 교환 시에는 추가 운임 징수액 및 세금 차액과 함께 위약금이 징수되고, 환불 시에는 반환 금액에서 차감된다. 위약금은 항공사 서비스 수수료나 대리점 부과 서비스 차지와는 구별된다.'
standardBody: ATPCO
aliases:
  - Change Fee
  - Cancellation Penalty
  - Change Penalty
providerTerms:
  - provider: ATPCO
    term: Category 16 (Penalties)
    context: ATPCO Category 16 describes penalties and charges for ticket changes and refunds; automated processing uses Category 31 (changes) and Category 33 (refunds).
    context_ko: 'ATPCO Category 16은 항공권 변경·환불에 대한 위약금과 비용을 기술하며, 자동 처리에는 Category 31(변경)과 Category 33(환불)이 사용된다.'
    relationship: narrower
relationships:
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Exchange
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Fare Family
distinctions:
  - targetTerm: Residual Value
    explanation: A penalty fee is a charge deducted during a change or refund; residual value is the surplus that may remain after the penalty and fare difference are applied in an exchange.
    explanation_ko: 'Penalty fee는 변경·환불 시 차감되는 비용이고, residual value는 교환에서 위약금과 운임 차액을 적용한 뒤 남을 수 있는 잉여분이다.'
  - targetTerm: Additional Collection (ADC)
    explanation: 'A penalty fee is the change/cancellation charge defined by the fare rule; the ADC is the total amount actually collected, which typically includes the fare and tax difference plus that penalty.'
    explanation_ko: 'Penalty Fee는 운임 규정이 정한 변경/취소 수수료이고, ADC는 실제로 징수되는 총액으로 보통 운임·세금 차액에 그 위약금을 더한 값이다.'
sources:
  - org: ATPCO
    name: What are ATPCO fare rules categories?
    version: ''
    section: Category 16 / 31 / 33
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
    tier: vendor-doc
  - org: Travelport
    name: Fare Rules Guide
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/JSONAPIs/Airv11/Content/Air11/Price/FareRulesGuide.htm'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="15"/><line x1="24" y1="16" x2="24" y2="26"/><circle cx="24" cy="31" r="0.5" fill="currentColor"/><line x1="24" y1="31" x2="24" y2="31"/></svg>
---

> A penalty fee is a charge imposed under a fare's rules when a ticket is changed (reissued/exchanged) or cancelled/refunded, over and above any fare difference and taxes. The applicable penalties and conditions are defined in the fare rule, traditionally ATPCO Category 16 (Penalties) and, for automated processing, Category 31 (Voluntary Changes) and Category 33 (Voluntary Refunds).

Penalty fees express the cost a passenger incurs to modify or cancel a purchased ticket, as set by the fare's filed rules. In the ATPCO fare-rule structure, Category 16 (Penalties) carries the textual terms describing change and refund penalties, while automated change and refund processing is driven by Category 31 (Voluntary Changes) and Category 33 (Voluntary Refunds). Penalty amounts can be fixed, per-direction, per fare component, or percentage-based, and may differ for changes versus cancellations and by fare family or cabin. In an exchange, the penalty is collected alongside any additional fare collection and tax difference; in a refund, the penalty is deducted from the amount returned. Penalty fees are distinct from carrier service fees and from agency-imposed service charges.

**한국어 / Korean** — **Penalty Fee (위약금)** — Penalty Fee(위약금)는 운임 규정에 따라 항공권을 변경(재발행/교환)하거나 취소/환불할 때, 운임 차액 및 세금과 별도로 부과되는 비용이다. 적용 위약금과 조건은 운임 규정에 정의되며, 전통적으로 ATPCO Category 16(Penalties), 그리고 자동 처리의 경우 Category 31(자발적 변경)과 Category 33(자발적 환불)에 담긴다.

Penalty fee는 구매한 항공권을 변경하거나 취소할 때 승객이 부담하는 비용으로, 운임의 등록 규정에 따라 정해진다. ATPCO 운임 규정 구조에서 Category 16(Penalties)은 변경·환불 위약금을 기술하는 텍스트 조건을 담고, 자동 변경·환불 처리는 Category 31(자발적 변경)과 Category 33(자발적 환불)이 구동한다. 위약금 금액은 정액, 방향별, fare component별, 또는 비율 기반일 수 있으며, 변경과 취소에 따라, fare family나 좌석 등급에 따라 다를 수 있다. 교환 시에는 추가 운임 징수액 및 세금 차액과 함께 위약금이 징수되고, 환불 시에는 반환 금액에서 차감된다. 위약금은 항공사 서비스 수수료나 대리점 부과 서비스 차지와는 구별된다.

**Aliases:** `Change Fee`, `Cancellation Penalty`, `Change Penalty`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Category 16 (Penalties)` | narrower | ATPCO Category 16 describes penalties and charges for ticket changes and refunds; automated processing uses Category 31 (changes) and Category 33 (refunds). |

# Related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [Exchange](/air/air-ticket/exchange.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related

# Distinctions
- **Penalty Fee** vs [Residual Value](/air/air-ticket/residual-value.md) — A penalty fee is a charge deducted during a change or refund; residual value is the surplus that may remain after the penalty and fare difference are applied in an exchange.
- **Penalty Fee** vs [Additional Collection (ADC)](/air/air-ticket/additional-collection-adc.md) — A penalty fee is the change/cancellation charge defined by the fare rule; the ADC is the total amount actually collected, which typically includes the fare and tax difference plus that penalty.

# Citations
[1] [ATPCO — What are ATPCO fare rules categories? — Category 16 / 31 / 33](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
[2] [Travelport — Fare Rules Guide](https://support.travelport.com/webhelp/JSONAPIs/Airv11/Content/Air11/Price/FareRulesGuide.htm)
