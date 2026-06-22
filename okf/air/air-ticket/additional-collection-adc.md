---
type: Business Term
title: Additional Collection (ADC)
description: 'Additional Collection (ADC) is the difference-in-fare-and-tax amount collected from the passenger when a ticket is reissued or exchanged for a higher-value itinerary. When the new itinerary is equal or lower in value so that nothing is due, the transaction is shown as NOADC (no additional collection).'
tags:
  - air-ticket
  - active
timestamp: '2026-06-17T00:00:00Z'
id: additional-collection-adc
vertical: air
category: air-ticket
conceptType: business-term
status: active
abbreviation: ADC
term_ko: 추가 징수 (ADC)
definition_ko: 'Additional Collection(ADC)은 항공권이 더 높은 가치의 여정으로 재발권·교환될 때 승객으로부터 징수하는 운임·세금 차액이다. 새 여정의 가치가 같거나 낮아 징수할 금액이 없으면 거래는 NOADC(no additional collection, 추가 징수 없음)로 표시된다.'
longDef: 'In an exchange/reissue, systems compare the value of the original ticket against the new fare plus any applicable change penalty and tax differences. If the new total exceeds the original, the shortfall is the additional collection (ADC, also called add collect) charged to the passenger''s form of payment; if the new total is zero against the credit, it is recorded as NOADC. ADC is the central output of every fare-difference exchange and the complement to Residual Value, which is what remains when the new document is worth less than the original.'
longDef_ko: '교환/재발권에서 시스템은 원 항공권의 가치를 새 운임에 적용 가능한 변경 위약금과 세금 차액을 더한 값과 비교한다. 새 합계가 원 합계를 초과하면 그 부족분이 승객의 결제 수단에 청구되는 추가 징수액(ADC, add collect)이다. 크레딧 대비 새 합계가 0이면 NOADC로 기록된다. ADC는 모든 운임 차액 교환의 핵심 산출물이며, 새 서류가 원본보다 가치가 낮을 때 남는 Residual Value의 보완 개념이다.'
aliases:
  - Add Collect
  - Additional Collection
  - ADC
  - NOADC
providerTerms:
  - provider: Travelport
    term: Exchange Ticket with Add Collect
    context: Smartpoint's Ticket Assistant exchanges tickets with add collect by comparing the original ticket value to the stored fare and charging the difference.
    context_ko: Smartpoint의 Ticket Assistant는 원 항공권 가치를 저장 운임과 비교하여 차액을 청구하는 add collect 교환을 수행한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Exchange
  - type: contrasts
    targetTerm: Residual Value
  - type: contrasts
    targetTerm: Penalty Fee
  - type: related
    targetTerm: Form of Payment
distinctions:
  - targetTerm: Residual Value
    explanation: ADC is collected when the new itinerary is worth more than the original (passenger pays the difference); Residual Value arises when the new itinerary is worth less (value is left over). They are the two opposite outcomes of an exchange.
    explanation_ko: ADC는 새 여정이 원본보다 가치가 높을 때 징수된다(승객이 차액을 지불). Residual Value는 새 여정이 더 낮을 때 가치가 남는 경우이다. 둘은 교환의 상반된 두 결과이다.
  - targetTerm: Penalty Fee
    explanation: 'A penalty fee is the change/cancellation charge defined by the fare rule; the ADC is the total amount actually collected, which typically includes the fare and tax difference plus that penalty.'
    explanation_ko: 'Penalty Fee는 운임 규정이 정한 변경/취소 수수료이고, ADC는 실제로 징수되는 총액으로 보통 운임·세금 차액에 그 위약금을 더한 값이다.'
sources:
  - org: Travelport
    name: 'Assisted Ticketing: Exchanging Tickets with Add Collect (ARC)'
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/Smartpoint1G1V/Content/Air/Ticketing/TicketAssistant/TicketAssistant_VolChange_ExchTkt-AddCollect-ARC.htm'
  - org: Amadeus
    name: How to exchange an e-ticket (manual reissue) - NO ADC
    version: ''
    section: ''
    url: 'https://servicehub.amadeus.com/c/portal/view-solution/856106/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="20" height="14" rx="2"/><path d="M12 19h12"/><circle cx="34" cy="30" r="9"/><path d="M34 26v8M30 30h8"/></svg>
---

> Additional Collection (ADC) is the difference-in-fare-and-tax amount collected from the passenger when a ticket is reissued or exchanged for a higher-value itinerary. When the new itinerary is equal or lower in value so that nothing is due, the transaction is shown as NOADC (no additional collection).

In an exchange/reissue, systems compare the value of the original ticket against the new fare plus any applicable change penalty and tax differences. If the new total exceeds the original, the shortfall is the additional collection (ADC, also called add collect) charged to the passenger's form of payment; if the new total is zero against the credit, it is recorded as NOADC. ADC is the central output of every fare-difference exchange and the complement to Residual Value, which is what remains when the new document is worth less than the original.

**한국어 / Korean** — **추가 징수 (ADC)** — Additional Collection(ADC)은 항공권이 더 높은 가치의 여정으로 재발권·교환될 때 승객으로부터 징수하는 운임·세금 차액이다. 새 여정의 가치가 같거나 낮아 징수할 금액이 없으면 거래는 NOADC(no additional collection, 추가 징수 없음)로 표시된다.

교환/재발권에서 시스템은 원 항공권의 가치를 새 운임에 적용 가능한 변경 위약금과 세금 차액을 더한 값과 비교한다. 새 합계가 원 합계를 초과하면 그 부족분이 승객의 결제 수단에 청구되는 추가 징수액(ADC, add collect)이다. 크레딧 대비 새 합계가 0이면 NOADC로 기록된다. ADC는 모든 운임 차액 교환의 핵심 산출물이며, 새 서류가 원본보다 가치가 낮을 때 남는 Residual Value의 보완 개념이다.

**Aliases:** `Add Collect`, `Additional Collection`, `ADC`, `NOADC`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Travelport | `Exchange Ticket with Add Collect` | same | Smartpoint's Ticket Assistant exchanges tickets with add collect by comparing the original ticket value to the stored fare and charging the difference. |

# Related
- [Reissue](/air/air-ticket/reissue.md) — related
- [Exchange](/air/air-ticket/exchange.md) — related
- [Residual Value](/air/air-ticket/residual-value.md) — contrasts
- [Penalty Fee](/air/air-ticket/penalty-fee.md) — contrasts
- [Form of Payment](/common/pay/form-of-payment.md) — related

# Distinctions
- **Additional Collection (ADC)** vs [Residual Value](/air/air-ticket/residual-value.md) — ADC is collected when the new itinerary is worth more than the original (passenger pays the difference); Residual Value arises when the new itinerary is worth less (value is left over). They are the two opposite outcomes of an exchange.
- **Additional Collection (ADC)** vs [Penalty Fee](/air/air-ticket/penalty-fee.md) — A penalty fee is the change/cancellation charge defined by the fare rule; the ADC is the total amount actually collected, which typically includes the fare and tax difference plus that penalty.

# Citations
[1] [Travelport — Assisted Ticketing: Exchanging Tickets with Add Collect (ARC)](https://support.travelport.com/webhelp/Smartpoint1G1V/Content/Air/Ticketing/TicketAssistant/TicketAssistant_VolChange_ExchTkt-AddCollect-ARC.htm)
[2] [Amadeus — How to exchange an e-ticket (manual reissue) - NO ADC](https://servicehub.amadeus.com/c/portal/view-solution/856106/)
