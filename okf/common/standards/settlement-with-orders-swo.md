---
type: Standard
title: Settlement with Orders (SwO)
description: 'Settlement with Orders is an IATA program and lean XML data-exchange standard for settling the funds owed between airlines and sellers directly from order data, using the existing BSP agency framework. It completes the offer-and-order value chain after NDC and ONE Order by removing dependence on ticket-based settlement, and it is also applicable to ticketless carriers.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: settlement-with-orders-swo
vertical: common
category: standards
conceptType: standard
status: active
abbreviation: SwO
term_ko: '주문 기반 정산(Settlement with Orders, SwO)'
definition_ko: 'Settlement with Orders(SwO)는 기존 BSP 대리점 프레임워크를 활용하여 주문 데이터로부터 항공사와 판매자 간 채권·채무를 직접 정산하기 위한 IATA 프로그램이자 간결한(lean) XML 데이터 교환 표준이다. 항공권 기반 정산에 대한 의존을 없앰으로써 NDC와 ONE Order 이후 offer-and-order 가치사슬을 완성하며, 무발권(ticketless) 항공사에도 적용된다.'
longDef: 'Built on a sales agreement and commitment to pay between two parties, SwO lets funds clearing be triggered by a simple clearance request carrying minimal data, avoiding the complexity of ticket/coupon-based reconciliation. Together with NDC (shopping and ordering) and ONE Order (order management and accounting), SwO gives airlines and sellers a full order-based framework spanning distribution through settlement of payables and receivables.'
longDef_ko: '두 당사자 간 판매 합의와 지급 약정을 토대로, SwO는 최소한의 데이터만 담은 단순한 정산 요청으로 자금 청산을 개시할 수 있게 하여 항공권/쿠폰 기반 대사(reconciliation)의 복잡성을 없앤다. NDC(조회·주문)와 ONE Order(주문 관리·회계)와 함께, SwO는 항공사와 판매자에게 유통부터 채권·채무 정산까지 아우르는 완전한 주문 기반 프레임워크를 제공한다.'
standardBody: IATA
aliases:
  - SwO
  - Settlement with Orders
relationships:
  - type: related
    targetTerm: ONE Order
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Order
  - type: related
    targetTerm: BSP
  - type: contrasts
    targetTerm: BSP
distinctions:
  - targetTerm: BSP
    explanation: BSP is the established neutral billing-and-settlement clearing system built around tickets/documents; SwO is the newer order-based settlement standard that clears funds from order data within that same BSP framework.
    explanation_ko: 'BSP는 항공권/문서를 중심으로 구축된 확립된 중립 청산 시스템이고, SwO는 동일한 BSP 프레임워크 안에서 주문 데이터로부터 자금을 청산하는 더 새로운 주문 기반 정산 표준이다.'
  - targetTerm: ONE Order
    explanation: ONE Order standardizes the single order record and its management/accounting; SwO standardizes the inter-party financial settlement of the funds arising from those orders.
    explanation_ko: 'ONE Order는 단일 주문 기록과 그 관리·회계를 표준화하고, SwO는 그 주문에서 발생하는 자금의 당사자 간 재무 정산을 표준화한다.'
sources:
  - org: IATA
    name: Settlement with Orders (SwO)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/settlement-orders-swo/'
  - org: IATA
    name: Fact Sheet - Distribution with Offers and Orders
    version: ''
    section: ''
    url: 'https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-ndc/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="10"/><path d="M24 18v12M21 21h4a2 2 0 0 1 0 4h-2a2 2 0 0 0 0 4h4"/><path d="M8 14l5-3 5 3M40 34l-5 3-5-3"/><path d="M13 11v9M35 37v-9"/></svg>
---

> Settlement with Orders is an IATA program and lean XML data-exchange standard for settling the funds owed between airlines and sellers directly from order data, using the existing BSP agency framework. It completes the offer-and-order value chain after NDC and ONE Order by removing dependence on ticket-based settlement, and it is also applicable to ticketless carriers.

Built on a sales agreement and commitment to pay between two parties, SwO lets funds clearing be triggered by a simple clearance request carrying minimal data, avoiding the complexity of ticket/coupon-based reconciliation. Together with NDC (shopping and ordering) and ONE Order (order management and accounting), SwO gives airlines and sellers a full order-based framework spanning distribution through settlement of payables and receivables.

**한국어 / Korean** — **주문 기반 정산(Settlement with Orders, SwO)** — Settlement with Orders(SwO)는 기존 BSP 대리점 프레임워크를 활용하여 주문 데이터로부터 항공사와 판매자 간 채권·채무를 직접 정산하기 위한 IATA 프로그램이자 간결한(lean) XML 데이터 교환 표준이다. 항공권 기반 정산에 대한 의존을 없앰으로써 NDC와 ONE Order 이후 offer-and-order 가치사슬을 완성하며, 무발권(ticketless) 항공사에도 적용된다.

두 당사자 간 판매 합의와 지급 약정을 토대로, SwO는 최소한의 데이터만 담은 단순한 정산 요청으로 자금 청산을 개시할 수 있게 하여 항공권/쿠폰 기반 대사(reconciliation)의 복잡성을 없앤다. NDC(조회·주문)와 ONE Order(주문 관리·회계)와 함께, SwO는 항공사와 판매자에게 유통부터 채권·채무 정산까지 아우르는 완전한 주문 기반 프레임워크를 제공한다.

**Aliases:** `SwO`, `Settlement with Orders`

# Related
- [ONE Order](/common/standards/one-order.md) — related
- [NDC](/common/standards/ndc.md) — related
- [Order](/common/standards/order.md) — related
- [BSP](/common/pay/bsp.md) — related
- [BSP](/common/pay/bsp.md) — contrasts

# Distinctions
- **Settlement with Orders (SwO)** vs [BSP](/common/pay/bsp.md) — BSP is the established neutral billing-and-settlement clearing system built around tickets/documents; SwO is the newer order-based settlement standard that clears funds from order data within that same BSP framework.
- **Settlement with Orders (SwO)** vs [ONE Order](/common/standards/one-order.md) — ONE Order standardizes the single order record and its management/accounting; SwO standardizes the inter-party financial settlement of the funds arising from those orders.

# Citations
[1] [IATA — Settlement with Orders (SwO)](https://www.iata.org/en/programs/airline-distribution/retailing/settlement-orders-swo/)
[2] [IATA — Fact Sheet - Distribution with Offers and Orders](https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-ndc/)
