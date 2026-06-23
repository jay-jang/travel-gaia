---
type: Process
title: Exchange
description: 'An exchange is the process of surrendering an existing ticket (or EMD) and applying its value toward a new ticket that reflects a changed itinerary, fare, cabin, or routing, with any fare difference, taxes, and penalties collected or refunded as applicable. In GDS and BSP/ARC workflows the exchange is the financial and document transaction that drives a reissue.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: exchange
vertical: air
category: air-ticket
conceptType: process
status: active
term_ko: Exchange (항공권 교환)
definition_ko: 'Exchange(교환)는 기존 항공권(또는 EMD)을 반납하고 그 가치를 변경된 여정·운임·좌석 등급·여정 경로가 반영된 새 항공권에 적용하는 절차이며, 운임 차액·세금·위약금을 상황에 따라 추가 징수하거나 환불한다. GDS 및 BSP/ARC 흐름에서 교환은 재발행(reissue)을 유발하는 재무·서류 거래이다.'
longDef: 'An exchange uses the value of one or more original documents as full or partial payment for a newly issued document. It is required when the change goes beyond a simple revalidation (date/flight/time only) — for example a change of routing, origin/destination, cabin, or fare basis — because such changes invoke a new fare calculation. The exchange transaction determines the additional collection (ADC) when the new ticket is more expensive, or produces a residual value (refundable or forfeited per fare rules) when it is cheaper, plus any applicable change penalty and tax differences. In practice ''exchange'' and ''reissue'' are used together (often ''exchange/reissue''): the exchange is the value-and-payment side of the transaction and the reissue is the production of the replacement document.'
longDef_ko: 'Exchange는 하나 이상의 원본 서류의 가치를 새로 발행되는 서류의 전부 또는 일부 결제 수단으로 사용한다. 단순 revalidation(날짜·항공편·시간만 변경)을 넘어서는 변경(여정 경로, 출발·도착지, 좌석 등급, fare basis 변경 등)에서 필요하며, 이러한 변경은 새로운 운임 계산을 유발하기 때문이다. 교환 거래는 새 항공권이 더 비쌀 때의 추가 징수액(ADC, Additional Collection)을 결정하거나, 더 쌀 때는 잔여 가치(residual value, 운임 규정에 따라 환불 또는 소멸)를 산출하며, 적용되는 변경 위약금과 세금 차액도 처리한다. 실무에서 ''exchange''와 ''reissue''는 흔히 함께(''exchange/reissue'') 쓰인다. 교환은 거래의 가치·결제 측면이고, 재발행은 대체 서류의 생성 측면이다.'
standardBody: IATA
aliases:
  - Ticket Exchange
  - Exchange/Reissue
providerTerms:
  - provider: Travelport
    term: Exchange
    context: 'Travelport''s Exchange, Refund, and Void guide treats exchange as the transaction that applies the value of an existing ticket toward a reissued ticket.'
    context_ko: Travelport의 Exchange/Refund/Void 가이드는 교환을 기존 항공권의 가치를 재발행 항공권에 적용하는 거래로 다룬다.
    relationship: same
  - provider: Amadeus
    term: ATC Reissue (Amadeus Ticket Changer)
    context: 'Amadeus performs ticket exchanges through Amadeus Ticket Changer (ATC), which reprices the changed itinerary and produces the reissued document with additional collection or residual in a single transaction (TTP/EXCH).'
    context_ko: 'Amadeus는 Amadeus Ticket Changer(ATC)로 항공권 교환을 수행하며, 변경된 여정을 재산정해 추가징수 또는 잔여가치를 단일 트랜잭션(TTP/EXCH)에서 재발행 서류로 생성한다.'
    relationship: same
  - provider: Sabre
    term: WETR (Ticket Exchange/Reissue)
    context: Sabre initiates a ticket exchange with the WETR command against a ticket number; the priced result is stored as a Price Quote Reissue Record (PQR) before the new document is issued.
    context_ko: 'Sabre는 항공권 번호에 대해 WETR 명령으로 교환을 시작하며, 산정 결과는 새 서류 발행 전에 Price Quote Reissue Record(PQR)로 저장된다.'
    relationship: same
relationships:
  - type: sameAs
    targetTerm: Reissue
  - type: narrower
    targetTerm: Residual Value
  - type: related
    targetTerm: Penalty Fee
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: Fare Component
distinctions:
  - targetTerm: Reissue
    explanation: 'Exchange is the value/payment transaction (surrendering old value, collecting difference or generating residual); reissue is the issuance of the replacement document. They typically occur together, but a reissue can also follow an involuntary change without a passenger-initiated exchange.'
    explanation_ko: 'Exchange는 가치·결제 거래(기존 가치 반납, 차액 징수 또는 잔여 가치 발생)이고, reissue는 대체 서류의 발행이다. 보통 함께 일어나지만, 재발행은 승객이 시작하지 않은 비자발적 변경에 따라 이루어질 수도 있다.'
  - targetTerm: Refund
    explanation: An exchange applies the document's value to a new document; a refund returns the value (less penalties) as money to the form of payment. An exchange may produce a residual value that is then either refunded or forfeited.
    explanation_ko: 'Exchange는 서류 가치를 새 서류에 적용하지만, Refund는 가치를(위약금 제외) 결제 수단으로 돌려준다. 교환은 잔여 가치를 발생시킬 수 있으며, 이는 이후 환불되거나 소멸된다.'
sources:
  - org: IATA
    name: Ticketing Handbook
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
    tier: association
  - org: Travelport
    name: 'Exchange, Refund, and Void Guide'
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/JSONAPIs/Airv11/Content/Air11/General/ExchangeRefundGuide.htm'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17h20"/><path d="M27 12l5 5-5 5"/><path d="M36 31H16"/><path d="M21 26l-5 5 5 5"/></svg>
---

> An exchange is the process of surrendering an existing ticket (or EMD) and applying its value toward a new ticket that reflects a changed itinerary, fare, cabin, or routing, with any fare difference, taxes, and penalties collected or refunded as applicable. In GDS and BSP/ARC workflows the exchange is the financial and document transaction that drives a reissue.

An exchange uses the value of one or more original documents as full or partial payment for a newly issued document. It is required when the change goes beyond a simple revalidation (date/flight/time only) — for example a change of routing, origin/destination, cabin, or fare basis — because such changes invoke a new fare calculation. The exchange transaction determines the additional collection (ADC) when the new ticket is more expensive, or produces a residual value (refundable or forfeited per fare rules) when it is cheaper, plus any applicable change penalty and tax differences. In practice 'exchange' and 'reissue' are used together (often 'exchange/reissue'): the exchange is the value-and-payment side of the transaction and the reissue is the production of the replacement document.

**한국어 / Korean** — **Exchange (항공권 교환)** — Exchange(교환)는 기존 항공권(또는 EMD)을 반납하고 그 가치를 변경된 여정·운임·좌석 등급·여정 경로가 반영된 새 항공권에 적용하는 절차이며, 운임 차액·세금·위약금을 상황에 따라 추가 징수하거나 환불한다. GDS 및 BSP/ARC 흐름에서 교환은 재발행(reissue)을 유발하는 재무·서류 거래이다.

Exchange는 하나 이상의 원본 서류의 가치를 새로 발행되는 서류의 전부 또는 일부 결제 수단으로 사용한다. 단순 revalidation(날짜·항공편·시간만 변경)을 넘어서는 변경(여정 경로, 출발·도착지, 좌석 등급, fare basis 변경 등)에서 필요하며, 이러한 변경은 새로운 운임 계산을 유발하기 때문이다. 교환 거래는 새 항공권이 더 비쌀 때의 추가 징수액(ADC, Additional Collection)을 결정하거나, 더 쌀 때는 잔여 가치(residual value, 운임 규정에 따라 환불 또는 소멸)를 산출하며, 적용되는 변경 위약금과 세금 차액도 처리한다. 실무에서 'exchange'와 'reissue'는 흔히 함께('exchange/reissue') 쓰인다. 교환은 거래의 가치·결제 측면이고, 재발행은 대체 서류의 생성 측면이다.

**Aliases:** `Ticket Exchange`, `Exchange/Reissue`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Travelport | `Exchange` | same | Travelport's Exchange, Refund, and Void guide treats exchange as the transaction that applies the value of an existing ticket toward a reissued ticket. |
| Amadeus | `ATC Reissue (Amadeus Ticket Changer)` | same | Amadeus performs ticket exchanges through Amadeus Ticket Changer (ATC), which reprices the changed itinerary and produces the reissued document with additional collection or residual in a single transaction (TTP/EXCH). |
| Sabre | `WETR (Ticket Exchange/Reissue)` | same | Sabre initiates a ticket exchange with the WETR command against a ticket number; the priced result is stored as a Price Quote Reissue Record (PQR) before the new document is issued. |

# Related
- [Reissue](/air/air-ticket/reissue.md) — sameAs
- [Residual Value](/air/air-ticket/residual-value.md) — narrower
- [Penalty Fee](/air/air-ticket/penalty-fee.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related

# Distinctions
- **Exchange** vs [Reissue](/air/air-ticket/reissue.md) — Exchange is the value/payment transaction (surrendering old value, collecting difference or generating residual); reissue is the issuance of the replacement document. They typically occur together, but a reissue can also follow an involuntary change without a passenger-initiated exchange.
- **Exchange** vs [Refund](/air/air-ticket/refund.md) — An exchange applies the document's value to a new document; a refund returns the value (less penalties) as money to the form of payment. An exchange may produce a residual value that is then either refunded or forfeited.

# Citations
[1] [IATA — Ticketing Handbook](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
[2] [Travelport — Exchange, Refund, and Void Guide](https://support.travelport.com/webhelp/JSONAPIs/Airv11/Content/Air11/General/ExchangeRefundGuide.htm)
