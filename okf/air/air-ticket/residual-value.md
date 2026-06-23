---
type: Business Term
title: Residual Value
description: 'Residual value is the amount left over when a ticket (or EMD) is exchanged for a new document of lower total value, after deducting any applicable penalties and fare differences. Depending on the fare rules and document type, the residual may be refunded, retained as a credit on a standalone EMD/MCO, or forfeited.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: residual-value
vertical: air
category: air-ticket
conceptType: business-term
status: active
term_ko: Residual Value (잔여 가치)
definition_ko: 'Residual Value(잔여 가치)는 항공권(또는 EMD)을 총 가치가 더 낮은 새 서류로 교환할 때, 해당 위약금과 운임 차액을 공제하고 남는 금액이다. 운임 규정과 서류 종류에 따라 잔여 가치는 환불되거나, 독립형 EMD/MCO에 크레딧으로 보존되거나, 소멸될 수 있다.'
longDef: 'Residual value arises in exchange transactions: when the value of the surrendered document exceeds the price of the new ticket plus penalties and taxes, the surplus is the residual. For refundable fares the residual is typically returned to the form of payment, while for non-refundable fares it is often forfeited or held as a non-refundable credit. When the residual must be preserved rather than refunded, it is commonly issued on a standalone EMD (EMD-S) or, historically, an MCO, which records the leftover value for future use within the original ticket''s validity and rules. GDS pricing must match the residual value against the reissue pricing record for the exchange to complete.'
longDef_ko: 'Residual value는 교환 거래에서 발생한다. 반납한 서류의 가치가 새 항공권 가격에 위약금·세금을 더한 금액을 초과하면 그 잉여분이 잔여 가치이다. 환불 가능 운임의 경우 잔여 가치는 보통 결제 수단으로 반환되지만, 비환불 운임의 경우 흔히 소멸되거나 비환불 크레딧으로 보존된다. 잔여 가치를 환불하지 않고 보존해야 할 때는 일반적으로 독립형 EMD(EMD-S) 또는 과거에는 MCO에 발행하여, 원본 항공권의 유효기간과 규정 범위 내에서 향후 사용을 위해 남은 가치를 기록한다. 교환을 완료하려면 GDS 가격 산출 시 잔여 가치가 재발행 가격 산출 레코드와 일치해야 한다.'
standardBody: IATA
aliases:
  - Residual Amount
  - Leftover Value
providerTerms:
  - provider: Amadeus
    term: Residual value EMD
    context: Amadeus describes a standalone EMD issued for residual value resulting from the exchange of a non-refundable old document of higher value than the new document.
    context_ko: Amadeus는 새 서류보다 가치가 높은 비환불 원본 서류를 교환할 때 발생하는 잔여 가치에 대해 독립형 EMD를 발행하는 것으로 설명한다.
    relationship: narrower
  - provider: Sabre
    term: Residual to EMD
    context: 'In a Sabre WETR exchange where the new ticket is of lower value, the leftover amount (after penalties and fare difference) is automatically refunded as residual value onto an EMD rather than to the original ticket.'
    context_ko: 'Sabre WETR 교환에서 새 항공권 가치가 더 낮을 때, 페널티·운임차액 차감 후 남는 금액은 원본 항공권이 아니라 EMD로 자동 잔여가치 환급된다.'
    relationship: same
  - provider: NDC/IATA
    term: EMD-S (residual value)
    context: IATA designates the Standalone EMD (EMD-S) as the document type that holds residual value left over from an exchange to a lower-value ticket.
    context_ko: IATA는 더 낮은 가치의 항공권으로 교환 시 남은 잔여가치를 보관하는 서류 유형으로 Standalone EMD(EMD-S)를 지정한다.
    relationship: related
relationships:
  - type: related
    targetTerm: Exchange
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: MCO (Miscellaneous Charges Order)
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: Penalty Fee
distinctions:
  - targetTerm: Refund
    explanation: A refund is the return of value to the passenger; residual value is the leftover surplus from an exchange that may or may not be refundable — it can instead be forfeited or carried on an EMD/MCO.
    explanation_ko: 'Refund는 승객에게 가치를 반환하는 것이고, residual value는 교환에서 남은 잉여분으로 환불될 수도 아닐 수도 있다. 환불 대신 소멸되거나 EMD/MCO에 보존될 수 있다.'
  - targetTerm: Additional Collection (ADC)
    explanation: ADC is collected when the new itinerary is worth more than the original (passenger pays the difference); Residual Value arises when the new itinerary is worth less (value is left over). They are the two opposite outcomes of an exchange.
    explanation_ko: ADC는 새 여정이 원본보다 가치가 높을 때 징수된다(승객이 차액을 지불). Residual Value는 새 여정이 더 낮을 때 가치가 남는 경우이다. 둘은 교환의 상반된 두 결과이다.
  - targetTerm: Loss of Use
    explanation: 'Residual value is the vehicle''s expected worth at the end of its fleet life; loss of use is short-term lost rental income during repair, not a measure of the asset''s depreciated value.'
    explanation_ko: 'Residual value(잔존가치)는 차량의 운용 종료 시 예상 가치이고, loss of use는 수리 기간 동안의 단기 대여 수익 손실로, 자산의 감가 가치를 나타내는 척도가 아니다.'
  - targetTerm: Penalty Fee
    explanation: A penalty fee is a charge deducted during a change or refund; residual value is the surplus that may remain after the penalty and fare difference are applied in an exchange.
    explanation_ko: 'Penalty fee는 변경·환불 시 차감되는 비용이고, residual value는 교환에서 위약금과 운임 차액을 적용한 뒤 남을 수 있는 잉여분이다.'
sources:
  - org: Amadeus
    name: 'EMD: Frequently Asked Questions'
    version: ''
    section: ''
    url: 'https://servicehub.amadeus.com/c/portal/view-solution/837116/en_US/emd-frequently-asked-questions'
  - org: IATA
    name: Ticketing Handbook
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="15"/><path d="M24 9a15 15 0 0 1 13 7.5L24 24z" fill="currentColor" stroke="none"/><path d="M19 26h10"/><path d="M24 21v3"/><path d="M21 30h6"/></svg>
---

> Residual value is the amount left over when a ticket (or EMD) is exchanged for a new document of lower total value, after deducting any applicable penalties and fare differences. Depending on the fare rules and document type, the residual may be refunded, retained as a credit on a standalone EMD/MCO, or forfeited.

Residual value arises in exchange transactions: when the value of the surrendered document exceeds the price of the new ticket plus penalties and taxes, the surplus is the residual. For refundable fares the residual is typically returned to the form of payment, while for non-refundable fares it is often forfeited or held as a non-refundable credit. When the residual must be preserved rather than refunded, it is commonly issued on a standalone EMD (EMD-S) or, historically, an MCO, which records the leftover value for future use within the original ticket's validity and rules. GDS pricing must match the residual value against the reissue pricing record for the exchange to complete.

**한국어 / Korean** — **Residual Value (잔여 가치)** — Residual Value(잔여 가치)는 항공권(또는 EMD)을 총 가치가 더 낮은 새 서류로 교환할 때, 해당 위약금과 운임 차액을 공제하고 남는 금액이다. 운임 규정과 서류 종류에 따라 잔여 가치는 환불되거나, 독립형 EMD/MCO에 크레딧으로 보존되거나, 소멸될 수 있다.

Residual value는 교환 거래에서 발생한다. 반납한 서류의 가치가 새 항공권 가격에 위약금·세금을 더한 금액을 초과하면 그 잉여분이 잔여 가치이다. 환불 가능 운임의 경우 잔여 가치는 보통 결제 수단으로 반환되지만, 비환불 운임의 경우 흔히 소멸되거나 비환불 크레딧으로 보존된다. 잔여 가치를 환불하지 않고 보존해야 할 때는 일반적으로 독립형 EMD(EMD-S) 또는 과거에는 MCO에 발행하여, 원본 항공권의 유효기간과 규정 범위 내에서 향후 사용을 위해 남은 가치를 기록한다. 교환을 완료하려면 GDS 가격 산출 시 잔여 가치가 재발행 가격 산출 레코드와 일치해야 한다.

**Aliases:** `Residual Amount`, `Leftover Value`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Residual value EMD` | narrower | Amadeus describes a standalone EMD issued for residual value resulting from the exchange of a non-refundable old document of higher value than the new document. |
| Sabre | `Residual to EMD` | same | In a Sabre WETR exchange where the new ticket is of lower value, the leftover amount (after penalties and fare difference) is automatically refunded as residual value onto an EMD rather than to the original ticket. |
| NDC/IATA | `EMD-S (residual value)` | related | IATA designates the Standalone EMD (EMD-S) as the document type that holds residual value left over from an exchange to a lower-value ticket. |

# Related
- [Exchange](/air/air-ticket/exchange.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [MCO (Miscellaneous Charges Order)](/air/air-ticket/mco-miscellaneous-charges-order.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [Penalty Fee](/air/air-ticket/penalty-fee.md) — related

# Distinctions
- **Residual Value** vs [Refund](/air/air-ticket/refund.md) — A refund is the return of value to the passenger; residual value is the leftover surplus from an exchange that may or may not be refundable — it can instead be forfeited or carried on an EMD/MCO.
- **Residual Value** vs [Additional Collection (ADC)](/air/air-ticket/additional-collection-adc.md) — ADC is collected when the new itinerary is worth more than the original (passenger pays the difference); Residual Value arises when the new itinerary is worth less (value is left over). They are the two opposite outcomes of an exchange.
- **Residual Value** vs [Loss of Use](/ground/car/loss-of-use.md) — Residual value is the vehicle's expected worth at the end of its fleet life; loss of use is short-term lost rental income during repair, not a measure of the asset's depreciated value.
- **Residual Value** vs [Penalty Fee](/air/air-ticket/penalty-fee.md) — A penalty fee is a charge deducted during a change or refund; residual value is the surplus that may remain after the penalty and fare difference are applied in an exchange.

# Citations
[1] [Amadeus — EMD: Frequently Asked Questions](https://servicehub.amadeus.com/c/portal/view-solution/837116/en_US/emd-frequently-asked-questions)
[2] [IATA — Ticketing Handbook](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
