---
type: Standard Term
title: OrderCreate
description: 'OrderCreate is the NDC message that converts a selected, priced Offer into a confirmed Order, returning the booked Order (typically via an OrderView response). It is the canonical create-booking transaction in the NDC offer-and-order model, capturing passenger data, payment and the agreed offer items.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: ordercreate
vertical: common
category: standards
conceptType: standard-term
status: active
term_ko: OrderCreate (NDC 주문 생성 메시지)
definition_ko: 'OrderCreate는 선택·가격확정된 Offer를 확정된 Order로 전환하는 NDC 메시지로, 예약 완료된 Order를 (보통 OrderView 응답을 통해) 반환한다. NDC 오퍼-주문 모델에서 예약을 생성하는 표준(canonical) 트랜잭션으로, 승객 정보·결제·합의된 오퍼 항목을 담는다.'
longDef: 'OrderCreate references the OfferID(s) returned by OfferPrice, supplies passenger details and form of payment, and instructs the airline''s order management system to create an Order with a unique OrderID. The response (OrderView) reflects the order state, order items, prices and any documents. OrderCreate is the NDC successor to the EDIFACT/GDS sell-and-create-PNR step, but it produces a single Order object that holds both the flight and ancillary content rather than separate PNR and ticket records, aligning with ONE Order.'
longDef_ko: 'OrderCreate는 OfferPrice가 반환한 OfferID를 참조하고 승객 상세정보와 지불수단(form of payment)을 제공하여, 항공사의 주문 관리 시스템(OMS)이 고유한 OrderID를 가진 Order를 생성하도록 지시한다. 응답(OrderView)은 주문 상태, 주문 항목, 가격, 발행 문서를 반영한다. OrderCreate는 EDIFACT/GDS의 sell 및 PNR 생성 단계를 잇는 NDC 후계자이지만, 별도의 PNR과 티켓 레코드 대신 항공편과 부가 콘텐츠를 함께 담는 단일 Order 객체를 생성하여 ONE Order와 정합을 이룬다.'
standardBody: IATA
aliases:
  - OrderCreate/OrderView
  - OrderCreateRQ/RS
relationships:
  - type: child
    targetTerm: NDC
  - type: related
    targetTerm: Order
  - type: related
    targetTerm: Offer
  - type: related
    targetTerm: ONE Order
  - type: related
    targetTerm: Order Management System (OMS)
  - type: related
    targetTerm: AirShopping
distinctions:
  - targetTerm: Order
    explanation: 'An Order is the resulting record (the booked product, payment and service state); OrderCreate is the transaction that creates it.'
    explanation_ko: 'Order는 결과물인 레코드(예약된 상품·결제·서비스 상태)이고, OrderCreate는 그것을 생성하는 트랜잭션이다.'
  - targetTerm: PNR
    explanation: 'A PNR is the legacy reservation record split from the ticket; OrderCreate produces a single NDC Order that unifies booking, ancillaries and (with ONE Order) accountable documents.'
    explanation_ko: 'PNR은 티켓과 분리된 레거시 예약 레코드이고, OrderCreate는 예약·부가서비스와 (ONE Order에서는) 회계 문서까지 통합한 단일 NDC Order를 생성한다.'
sources:
  - org: IATA
    name: Distribution with Offers and Orders (NDC) Fact Sheet
    version: ''
    section: ''
    url: 'https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-ndc/'
  - org: IATA
    name: Enhanced and Simplified Distribution Implementation Guide
    version: ''
    section: ''
    url: 'https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="7" width="24" height="30" rx="3"/><path d="M15 15h12M15 21h12M15 27h7"/><circle cx="33" cy="33" r="9"/><path d="M33 29v8M29 33h8"/></svg>
---

> OrderCreate is the NDC message that converts a selected, priced Offer into a confirmed Order, returning the booked Order (typically via an OrderView response). It is the canonical create-booking transaction in the NDC offer-and-order model, capturing passenger data, payment and the agreed offer items.

OrderCreate references the OfferID(s) returned by OfferPrice, supplies passenger details and form of payment, and instructs the airline's order management system to create an Order with a unique OrderID. The response (OrderView) reflects the order state, order items, prices and any documents. OrderCreate is the NDC successor to the EDIFACT/GDS sell-and-create-PNR step, but it produces a single Order object that holds both the flight and ancillary content rather than separate PNR and ticket records, aligning with ONE Order.

**한국어 / Korean** — **OrderCreate (NDC 주문 생성 메시지)** — OrderCreate는 선택·가격확정된 Offer를 확정된 Order로 전환하는 NDC 메시지로, 예약 완료된 Order를 (보통 OrderView 응답을 통해) 반환한다. NDC 오퍼-주문 모델에서 예약을 생성하는 표준(canonical) 트랜잭션으로, 승객 정보·결제·합의된 오퍼 항목을 담는다.

OrderCreate는 OfferPrice가 반환한 OfferID를 참조하고 승객 상세정보와 지불수단(form of payment)을 제공하여, 항공사의 주문 관리 시스템(OMS)이 고유한 OrderID를 가진 Order를 생성하도록 지시한다. 응답(OrderView)은 주문 상태, 주문 항목, 가격, 발행 문서를 반영한다. OrderCreate는 EDIFACT/GDS의 sell 및 PNR 생성 단계를 잇는 NDC 후계자이지만, 별도의 PNR과 티켓 레코드 대신 항공편과 부가 콘텐츠를 함께 담는 단일 Order 객체를 생성하여 ONE Order와 정합을 이룬다.

**Aliases:** `OrderCreate/OrderView`, `OrderCreateRQ/RS`

# Related
- [NDC](/common/standards/ndc.md) — child
- [Order](/common/standards/order.md) — related
- [Offer](/common/standards/offer.md) — related
- [ONE Order](/common/standards/one-order.md) — related
- [Order Management System (OMS)](/common/standards/order-management-system-oms.md) — related
- [AirShopping](/common/standards/airshopping.md) — related

# Distinctions
- **OrderCreate** vs [Order](/common/standards/order.md) — An Order is the resulting record (the booked product, payment and service state); OrderCreate is the transaction that creates it.
- **OrderCreate** vs [PNR](/air/air-ops/pnr.md) — A PNR is the legacy reservation record split from the ticket; OrderCreate produces a single NDC Order that unifies booking, ancillaries and (with ONE Order) accountable documents.

# Citations
[1] [IATA — Distribution with Offers and Orders (NDC) Fact Sheet](https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-ndc/)
[2] [IATA — Enhanced and Simplified Distribution Implementation Guide](https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf)
