---
type: Standard Term
title: Order
description: 'In IATA''s Offer and Order model, an Order is the single record that captures everything a customer has purchased, including products, services, prices, payment, and fulfillment status, created when a customer accepts an Offer. It is intended to consolidate and eventually replace the PNR, e-ticket, and EMD.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: order
vertical: common
category: standards
conceptType: standard-term
status: active
term_ko: 주문(Order)
definition_ko: 'IATA의 Offer and Order 모델에서 주문(Order)은 고객이 구매한 모든 내용, 즉 상품, 서비스, 가격, 결제, 이행 상태를 담는 단일 기록으로, 고객이 오퍼를 수락할 때 생성된다. PNR, e-ticket, EMD를 통합하고 궁극적으로 대체하는 것을 목표로 한다.'
longDef: 'The Order is the central data object in NDC OrderCreate/OrderManagement and is the foundation of the ONE Order initiative, which aims to make the Order the single source of truth across the booking and delivery lifecycle, simplifying accounting and settlement compared with separate PNR/document constructs.'
longDef_ko: '주문은 NDC OrderCreate/OrderManagement의 핵심 데이터 객체이자 ONE Order 이니셔티브의 기반으로, 예약부터 이행에 이르는 전체 주기에 걸쳐 주문을 단일 진실 공급원(single source of truth)으로 삼는 것을 목표로 하며, 별도의 PNR/문서 구조에 비해 회계와 정산을 단순화한다.'
standardBody: IATA
aliases:
  - Air Order
  - NDC Order
  - Customer Order
relationships:
  - type: contrasts
    targetTerm: Offer
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: ONE Order
  - type: replaces
    targetTerm: PNR
  - type: replaces
    targetTerm: E-ticket
  - type: replaces
    targetTerm: EMD
distinctions:
  - targetTerm: Offer
    explanation: An Order is the committed purchase record; an Offer is the priced proposal the customer accepts to create the Order.
    explanation_ko: '주문은 확정된 구매 기록이고, 오퍼는 고객이 수락하여 주문을 생성하는 가격이 책정된 제안이다.'
  - targetTerm: PNR
    explanation: An Order is the modern single sales/fulfillment record intended to replace the legacy PNR plus separate e-ticket/EMD documents.
    explanation_ko: 주문은 레거시 PNR과 별도의 e-ticket/EMD 문서를 대체하기 위한 현대적 단일 판매/이행 기록이다.
  - targetTerm: ONE Order
    explanation: Order is the data object; ONE Order is the IATA standard/initiative defining and promoting that single Order record.
    explanation_ko: 'Order는 데이터 객체이고, ONE Order는 그 단일 주문 기록을 정의하고 확산시키는 IATA 표준이자 이니셔티브이다.'
  - targetTerm: OrderChangeNotification (OCN)
    explanation: 'The Order is the record being changed; OCN is the asynchronous notification about a change to that Order, not the Order itself.'
    explanation_ko: 'Order는 변경 대상인 레코드이고, OCN은 그 Order의 변경을 알리는 비동기 알림이지 Order 자체가 아니다.'
  - targetTerm: OrderCreate
    explanation: 'An Order is the resulting record (the booked product, payment and service state); OrderCreate is the transaction that creates it.'
    explanation_ko: 'Order는 결과물인 레코드(예약된 상품·결제·서비스 상태)이고, OrderCreate는 그것을 생성하는 트랜잭션이다.'
sources:
  - name: Offer and Order (Airline Retailing)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/consulting/airlines/airline-retailing-order-and-offer-management/'
    tier: association
  - name: ONE Order
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/one-order/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6h18l8 8v28a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M30 6v8h8"/><path d="M16 22l2 2 3-3"/><path d="M25 23h8"/><path d="M16 30l2 2 3-3"/><path d="M25 31h8"/></svg>
---

> In IATA's Offer and Order model, an Order is the single record that captures everything a customer has purchased, including products, services, prices, payment, and fulfillment status, created when a customer accepts an Offer. It is intended to consolidate and eventually replace the PNR, e-ticket, and EMD.

The Order is the central data object in NDC OrderCreate/OrderManagement and is the foundation of the ONE Order initiative, which aims to make the Order the single source of truth across the booking and delivery lifecycle, simplifying accounting and settlement compared with separate PNR/document constructs.

**한국어 / Korean** — **주문(Order)** — IATA의 Offer and Order 모델에서 주문(Order)은 고객이 구매한 모든 내용, 즉 상품, 서비스, 가격, 결제, 이행 상태를 담는 단일 기록으로, 고객이 오퍼를 수락할 때 생성된다. PNR, e-ticket, EMD를 통합하고 궁극적으로 대체하는 것을 목표로 한다.

주문은 NDC OrderCreate/OrderManagement의 핵심 데이터 객체이자 ONE Order 이니셔티브의 기반으로, 예약부터 이행에 이르는 전체 주기에 걸쳐 주문을 단일 진실 공급원(single source of truth)으로 삼는 것을 목표로 하며, 별도의 PNR/문서 구조에 비해 회계와 정산을 단순화한다.

**Aliases:** `Air Order`, `NDC Order`, `Customer Order`

# Related
- [Offer](/common/standards/offer.md) — contrasts
- [NDC](/common/standards/ndc.md) — related
- [ONE Order](/common/standards/one-order.md) — related
- [PNR](/air/air-ops/pnr.md) — replaces
- [E-ticket](/air/air-ticket/e-ticket.md) — replaces
- [EMD](/air/air-ticket/emd.md) — replaces

# Distinctions
- **Order** vs [Offer](/common/standards/offer.md) — An Order is the committed purchase record; an Offer is the priced proposal the customer accepts to create the Order.
- **Order** vs [PNR](/air/air-ops/pnr.md) — An Order is the modern single sales/fulfillment record intended to replace the legacy PNR plus separate e-ticket/EMD documents.
- **Order** vs [ONE Order](/common/standards/one-order.md) — Order is the data object; ONE Order is the IATA standard/initiative defining and promoting that single Order record.
- **Order** vs [OrderChangeNotification (OCN)](/common/standards/orderchangenotification-ocn.md) — The Order is the record being changed; OCN is the asynchronous notification about a change to that Order, not the Order itself.
- **Order** vs [OrderCreate](/common/standards/ordercreate.md) — An Order is the resulting record (the booked product, payment and service state); OrderCreate is the transaction that creates it.

# Citations
[1] [IATA — Offer and Order (Airline Retailing)](https://www.iata.org/en/services/consulting/airlines/airline-retailing-order-and-offer-management/)
[2] [IATA — ONE Order](https://www.iata.org/en/programs/airline-distribution/retailing/one-order/)
