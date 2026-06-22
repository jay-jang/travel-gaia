---
type: Standard
title: ONE Order
description: 'ONE Order is an IATA standard and industry initiative that establishes a single, consolidated customer Order record to replace the separate legacy constructs of PNR, e-ticket, and EMD. It streamlines order management, delivery, and accounting across the order lifecycle.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: one-order
vertical: common
category: standards
conceptType: standard
status: active
term_ko: ONE Order(원 오더)
definition_ko: 'ONE Order는 PNR, e-ticket, EMD로 분리된 레거시 구조를 대체하기 위해 단일 통합 고객 주문(Order) 기록을 확립하는 IATA 표준이자 산업 이니셔티브이다. 주문 전체 주기에 걸쳐 주문 관리, 이행, 회계를 간소화한다.'
longDef: 'Complementing NDC (which standardizes Offer creation and shopping/booking), ONE Order defines the Order Management messages and data model so that all products and services purchased are tracked in one record with order-level accounting, removing reliance on coupon-based ticket/EMD documents and BSP/ARC document-based settlement over time.'
longDef_ko: '오퍼 생성과 조회/예약을 표준화하는 NDC를 보완하여, ONE Order는 Order Management 메시지와 데이터 모델을 정의함으로써 구매한 모든 상품과 서비스가 주문 단위 회계와 함께 하나의 기록에서 추적되도록 한다. 이로써 시간이 지나면서 쿠폰 기반 항공권/EMD 문서와 BSP/ARC의 문서 기반 정산에 대한 의존을 없앤다.'
standardBody: IATA
aliases:
  - ONE Order
  - IATA ONE Order
relationships:
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Order
  - type: related
    targetTerm: Offer
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
  - type: replaces
    targetTerm: PNR
  - type: replaces
    targetTerm: E-ticket
  - type: replaces
    targetTerm: EMD
distinctions:
  - targetTerm: NDC
    explanation: ONE Order standardizes the single post-sale Order record and its management; NDC standardizes the shopping/offer and booking messaging that creates it.
    explanation_ko: 'ONE Order는 판매 이후의 단일 주문 기록과 그 관리를 표준화하고, NDC는 그것을 생성하는 조회/오퍼 및 예약 메시징을 표준화한다.'
  - targetTerm: Order
    explanation: ONE Order is the IATA standard/initiative; Order is the underlying single-record data object it defines and promotes.
    explanation_ko: 'ONE Order는 IATA 표준이자 이니셔티브이고, Order는 그것이 정의하고 확산시키는 기반 단일 기록 데이터 객체이다.'
  - targetTerm: E-ticket
    explanation: ONE Order's single Order record is designed to replace document-based e-tickets (and EMDs) with order-level accounting and fulfillment.
    explanation_ko: ONE Order의 단일 주문 기록은 주문 단위의 회계와 이행을 통해 문서 기반 e-ticket(및 EMD)을 대체하도록 설계되었다.
  - targetTerm: Airline Retailing Maturity (ARM)
    explanation: ARM is the assessment/registry framework (which replaced the separate NDC and ONE Order certification registries); ONE Order is one of the standards whose maturity ARM measures.
    explanation_ko: 'ARM은 (별도의 NDC·ONE Order 인증 등록제를 대체한) 평가·등록 프레임워크이고, ONE Order는 ARM이 성숙도를 측정하는 대상 표준 중 하나이다.'
  - targetTerm: Order Management System (OMS)
    explanation: ONE Order is the IATA standard/initiative defining the single Order record and its messages; an Order Management System is the platform that implements and operates it.
    explanation_ko: 'ONE Order는 단일 주문 기록과 그 메시지를 정의하는 IATA 표준·이니셔티브이고, 주문 관리 시스템은 그것을 구현·운영하는 플랫폼이다.'
  - targetTerm: Settlement with Orders (SwO)
    explanation: ONE Order standardizes the single order record and its management/accounting; SwO standardizes the inter-party financial settlement of the funds arising from those orders.
    explanation_ko: 'ONE Order는 단일 주문 기록과 그 관리·회계를 표준화하고, SwO는 그 주문에서 발생하는 자금의 당사자 간 재무 정산을 표준화한다.'
sources:
  - name: ONE Order
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/one-order/'
  - name: ONE Order Standards
    org: IATA
    version: ''
    section: ''
    url: 'https://developer.iata.org/en/one-order/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="15"/><path d="M20 16h6a4 4 0 0 1 0 8h-6zM20 16v16M20 24h3l4 8"/><path d="M14 13l3-3 3 3"/></svg>
---

> ONE Order is an IATA standard and industry initiative that establishes a single, consolidated customer Order record to replace the separate legacy constructs of PNR, e-ticket, and EMD. It streamlines order management, delivery, and accounting across the order lifecycle.

Complementing NDC (which standardizes Offer creation and shopping/booking), ONE Order defines the Order Management messages and data model so that all products and services purchased are tracked in one record with order-level accounting, removing reliance on coupon-based ticket/EMD documents and BSP/ARC document-based settlement over time.

**한국어 / Korean** — **ONE Order(원 오더)** — ONE Order는 PNR, e-ticket, EMD로 분리된 레거시 구조를 대체하기 위해 단일 통합 고객 주문(Order) 기록을 확립하는 IATA 표준이자 산업 이니셔티브이다. 주문 전체 주기에 걸쳐 주문 관리, 이행, 회계를 간소화한다.

오퍼 생성과 조회/예약을 표준화하는 NDC를 보완하여, ONE Order는 Order Management 메시지와 데이터 모델을 정의함으로써 구매한 모든 상품과 서비스가 주문 단위 회계와 함께 하나의 기록에서 추적되도록 한다. 이로써 시간이 지나면서 쿠폰 기반 항공권/EMD 문서와 BSP/ARC의 문서 기반 정산에 대한 의존을 없앤다.

**Aliases:** `ONE Order`, `IATA ONE Order`

# Related
- [NDC](/common/standards/ndc.md) — related
- [Order](/common/standards/order.md) — related
- [Offer](/common/standards/offer.md) — related
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related
- [PNR](/air/air-ops/pnr.md) — replaces
- [E-ticket](/air/air-ticket/e-ticket.md) — replaces
- [EMD](/air/air-ticket/emd.md) — replaces

# Distinctions
- **ONE Order** vs [NDC](/common/standards/ndc.md) — ONE Order standardizes the single post-sale Order record and its management; NDC standardizes the shopping/offer and booking messaging that creates it.
- **ONE Order** vs [Order](/common/standards/order.md) — ONE Order is the IATA standard/initiative; Order is the underlying single-record data object it defines and promotes.
- **ONE Order** vs [E-ticket](/air/air-ticket/e-ticket.md) — ONE Order's single Order record is designed to replace document-based e-tickets (and EMDs) with order-level accounting and fulfillment.
- **ONE Order** vs [Airline Retailing Maturity (ARM)](/common/standards/airline-retailing-maturity-arm.md) — ARM is the assessment/registry framework (which replaced the separate NDC and ONE Order certification registries); ONE Order is one of the standards whose maturity ARM measures.
- **ONE Order** vs [Order Management System (OMS)](/common/standards/order-management-system-oms.md) — ONE Order is the IATA standard/initiative defining the single Order record and its messages; an Order Management System is the platform that implements and operates it.
- **ONE Order** vs [Settlement with Orders (SwO)](/common/standards/settlement-with-orders-swo.md) — ONE Order standardizes the single order record and its management/accounting; SwO standardizes the inter-party financial settlement of the funds arising from those orders.

# Citations
[1] [IATA — ONE Order](https://www.iata.org/en/programs/airline-distribution/retailing/one-order/)
[2] [IATA — ONE Order Standards](https://developer.iata.org/en/one-order/)
