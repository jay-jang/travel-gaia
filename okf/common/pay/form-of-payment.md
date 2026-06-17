---
type: Standard Term
title: Form of Payment
description: 'Form of Payment (FOP) is the method by which a travel transaction is paid, recorded on a ticket, EMD, or order, such as cash, credit card, customer card, or miscellaneous charge order. In airline ticketing the FOP is stored as a coded element and drives how the sale is reported and settled.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: form-of-payment
vertical: common
category: pay
conceptType: standard-term
status: active
abbreviation: FOP
term_ko: '지불수단 (Form of Payment, FOP)'
definition_ko: 'Form of Payment(FOP)은 항공권, EMD 또는 주문(order)에 기록되는 여행 거래의 결제 방법으로, 현금·신용카드·고객카드·MCO 등이 있다. 항공 발권에서 FOP는 코드화된 요소로 저장되어 판매가 보고·정산되는 방식을 결정한다.'
longDef: 'Form of Payment is a core element of an airline ticket and EMD, identifying how the customer paid so that the transaction can be correctly reported through BSP or ARC and settled with the validating carrier. Common FOP types include cash (CA), credit card (CC) with the card type and masked number, and miscellaneous forms such as IATA EasyPay or government transportation requests. The FOP affects merchant fees, chargeback exposure, and whether funds flow through an agency settlement system versus the airline''s own merchant acquiring. In NDC and ONE Order flows, payment details are carried in the order rather than only on a paper or e-ticket coupon, and a single order may combine multiple forms of payment.'
longDef_ko: 'Form of Payment은 항공권과 EMD의 핵심 요소로, 고객이 어떻게 결제했는지를 식별해 거래가 BSP 또는 ARC를 통해 올바르게 보고되고 Validating Carrier와 정산되도록 한다. 일반적인 FOP 유형으로는 현금(CA), 카드종류와 마스킹된 번호를 포함한 신용카드(CC), IATA EasyPay나 정부 운송 요청서 같은 기타 형태가 있다. FOP는 가맹점 수수료, Chargeback 위험, 자금이 여행사 정산 시스템을 거치는지 항공사 자체 매입(acquiring)을 거치는지에 영향을 준다. NDC 및 ONE Order 흐름에서는 결제 정보가 종이·e-ticket 쿠폰뿐 아니라 주문 안에 담기며, 하나의 주문에 여러 지불수단이 결합될 수 있다.'
standardBody: IATA
aliases:
  - FOP
  - Form of Payment (FOP)
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
  - type: related
    targetTerm: IATA EasyPay
  - type: related
    targetTerm: ONE Order
distinctions:
  - targetTerm: VCC
    explanation: 'A VCC is one specific instrument that can be used as a form of payment, whereas Form of Payment is the general ticketing element that records whichever instrument or method was used.'
    explanation_ko: 'VCC는 지불수단으로 사용될 수 있는 하나의 특정 결제 수단인 반면, Form of Payment은 어떤 수단·방법이 사용되었든 그것을 기록하는 일반적인 발권 요소다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="13" width="28" height="18" rx="2.5"/><line x1="6" y1="19" x2="34" y2="19"/><line x1="11" y1="26" x2="18" y2="26"/><circle cx="34" cy="32" r="7"/><path d="M34 28.5v3.5l2.5 1.5"/></svg>
---

> Form of Payment (FOP) is the method by which a travel transaction is paid, recorded on a ticket, EMD, or order, such as cash, credit card, customer card, or miscellaneous charge order. In airline ticketing the FOP is stored as a coded element and drives how the sale is reported and settled.

Form of Payment is a core element of an airline ticket and EMD, identifying how the customer paid so that the transaction can be correctly reported through BSP or ARC and settled with the validating carrier. Common FOP types include cash (CA), credit card (CC) with the card type and masked number, and miscellaneous forms such as IATA EasyPay or government transportation requests. The FOP affects merchant fees, chargeback exposure, and whether funds flow through an agency settlement system versus the airline's own merchant acquiring. In NDC and ONE Order flows, payment details are carried in the order rather than only on a paper or e-ticket coupon, and a single order may combine multiple forms of payment.

**한국어 / Korean** — **지불수단 (Form of Payment, FOP)** — Form of Payment(FOP)은 항공권, EMD 또는 주문(order)에 기록되는 여행 거래의 결제 방법으로, 현금·신용카드·고객카드·MCO 등이 있다. 항공 발권에서 FOP는 코드화된 요소로 저장되어 판매가 보고·정산되는 방식을 결정한다.

Form of Payment은 항공권과 EMD의 핵심 요소로, 고객이 어떻게 결제했는지를 식별해 거래가 BSP 또는 ARC를 통해 올바르게 보고되고 Validating Carrier와 정산되도록 한다. 일반적인 FOP 유형으로는 현금(CA), 카드종류와 마스킹된 번호를 포함한 신용카드(CC), IATA EasyPay나 정부 운송 요청서 같은 기타 형태가 있다. FOP는 가맹점 수수료, Chargeback 위험, 자금이 여행사 정산 시스템을 거치는지 항공사 자체 매입(acquiring)을 거치는지에 영향을 준다. NDC 및 ONE Order 흐름에서는 결제 정보가 종이·e-ticket 쿠폰뿐 아니라 주문 안에 담기며, 하나의 주문에 여러 지불수단이 결합될 수 있다.

**Aliases:** `FOP`, `Form of Payment (FOP)`

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related
- [IATA EasyPay](/common/pay/iata-easypay.md) — related
- [ONE Order](/common/standards/one-order.md) — related

# Distinctions
- **Form of Payment** vs [VCC](/common/pay/vcc.md) — A VCC is one specific instrument that can be used as a form of payment, whereas Form of Payment is the general ticketing element that records whichever instrument or method was used.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
