---
type: System
title: Order Management System (OMS)
description: 'An Order Management System is the airline-retailing platform that creates, stores, and services the customer Order across its lifecycle, acting as the single source of truth for all purchased air and non-air products, payments, fulfillment, and changes. It is the ''order'' side counterpart to the Offer Management System and the operational foundation of IATA''s ONE Order.'
tags:
  - standards
  - active
timestamp: '2026-06-17T00:00:00Z'
id: order-management-system-oms
category: standards
conceptType: system
status: active
abbreviation: OMS
term_ko: '주문 관리 시스템(Order Management System, OMS)'
definition_ko: '주문 관리 시스템(Order Management System)은 고객 주문(Order)을 전체 주기에 걸쳐 생성·저장·서비스하는 항공 리테일링 플랫폼으로, 구매한 모든 항공/비항공 상품, 결제, 이행, 변경에 대한 단일 진실 공급원(single source of truth) 역할을 한다. 오퍼 관리 시스템에 대응하는 ''주문(order)'' 측 시스템이며 IATA ONE Order의 운영 기반이다.'
longDef: 'Supported by IATA''s ONE Order initiative, an OMS provides a unified, single-record view of an Order and every change to it, handling payment, fulfillment, delivery, servicing, and order-level accounting. It is designed to consolidate and eventually replace the legacy PNR, e-ticket, and EMD constructs and their document-based settlement. Vendors and airlines frequently market a combined ''Offer & Order Management System'', so ''OMS'' may denote the order half or the whole platform depending on context.'
longDef_ko: 'IATA의 ONE Order 이니셔티브가 뒷받침하는 OMS는 주문과 그에 대한 모든 변경에 대해 통합된 단일 기록 관점을 제공하며, 결제·이행·전달·서비스·주문 단위 회계를 처리한다. 레거시 PNR, e-ticket, EMD 구조와 문서 기반 정산을 통합하고 궁극적으로 대체하도록 설계되었다. 벤더와 항공사는 흔히 통합 ''Offer & Order Management System''으로 마케팅하므로, ''OMS''는 맥락에 따라 주문 절반 또는 전체 플랫폼을 가리킬 수 있다.'
aliases:
  - Order Management System
  - Airline OMS
  - Offer and Order Management System
relationships:
  - type: related
    targetTerm: Order
  - type: related
    targetTerm: Offer Management System
  - type: related
    targetTerm: ONE Order
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: EMD
distinctions:
  - targetTerm: Offer Management System
    explanation: 'The Order Management System owns the post-sale Order (creation, servicing, accounting); the Offer Management System owns pre-sale Offer construction and pricing. Both are commonly bundled as one ''Offer & Order'' platform.'
    explanation_ko: '주문 관리 시스템은 판매 이후의 주문(생성·서비스·회계)을 담당하고, 오퍼 관리 시스템은 판매 이전의 오퍼 구성과 가격책정을 담당한다. 둘은 흔히 하나의 ''Offer & Order'' 플랫폼으로 묶여 제공된다.'
  - targetTerm: ONE Order
    explanation: ONE Order is the IATA standard/initiative defining the single Order record and its messages; an Order Management System is the platform that implements and operates it.
    explanation_ko: 'ONE Order는 단일 주문 기록과 그 메시지를 정의하는 IATA 표준·이니셔티브이고, 주문 관리 시스템은 그것을 구현·운영하는 플랫폼이다.'
  - targetTerm: PNR
    explanation: An OMS centers on the modern single Order record; the PNR is the legacy reservation construct an OMS aims to consolidate and replace.
    explanation_ko: 'OMS는 현대적 단일 주문 기록을 중심에 두고, PNR은 OMS가 통합·대체하려는 레거시 예약 구조이다.'
sources:
  - org: IATA
    name: Airline Retailing - Order and Offer Management
    version: ''
    section: ''
    url: ''
  - org: IATA
    name: ONE Order
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14h28l-3 24a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2z"/><path d="M17 14a7 7 0 0 1 14 0"/><path d="M19 26l3 3 6-6"/></svg>
---

> An Order Management System is the airline-retailing platform that creates, stores, and services the customer Order across its lifecycle, acting as the single source of truth for all purchased air and non-air products, payments, fulfillment, and changes. It is the 'order' side counterpart to the Offer Management System and the operational foundation of IATA's ONE Order.

Supported by IATA's ONE Order initiative, an OMS provides a unified, single-record view of an Order and every change to it, handling payment, fulfillment, delivery, servicing, and order-level accounting. It is designed to consolidate and eventually replace the legacy PNR, e-ticket, and EMD constructs and their document-based settlement. Vendors and airlines frequently market a combined 'Offer & Order Management System', so 'OMS' may denote the order half or the whole platform depending on context.

**한국어 / Korean** — **주문 관리 시스템(Order Management System, OMS)** — 주문 관리 시스템(Order Management System)은 고객 주문(Order)을 전체 주기에 걸쳐 생성·저장·서비스하는 항공 리테일링 플랫폼으로, 구매한 모든 항공/비항공 상품, 결제, 이행, 변경에 대한 단일 진실 공급원(single source of truth) 역할을 한다. 오퍼 관리 시스템에 대응하는 '주문(order)' 측 시스템이며 IATA ONE Order의 운영 기반이다.

IATA의 ONE Order 이니셔티브가 뒷받침하는 OMS는 주문과 그에 대한 모든 변경에 대해 통합된 단일 기록 관점을 제공하며, 결제·이행·전달·서비스·주문 단위 회계를 처리한다. 레거시 PNR, e-ticket, EMD 구조와 문서 기반 정산을 통합하고 궁극적으로 대체하도록 설계되었다. 벤더와 항공사는 흔히 통합 'Offer & Order Management System'으로 마케팅하므로, 'OMS'는 맥락에 따라 주문 절반 또는 전체 플랫폼을 가리킬 수 있다.

**Aliases:** `Order Management System`, `Airline OMS`, `Offer and Order Management System`

# Related
- [Order](/standards/order.md) — related
- [Offer Management System](/standards/offer-management-system.md) — related
- [ONE Order](/standards/one-order.md) — related
- [NDC](/standards/ndc.md) — related
- [PNR](/air-ops/pnr.md) — related
- [EMD](/air-ticket/emd.md) — related

# Distinctions
- **Order Management System (OMS)** vs [Offer Management System](/standards/offer-management-system.md) — The Order Management System owns the post-sale Order (creation, servicing, accounting); the Offer Management System owns pre-sale Offer construction and pricing. Both are commonly bundled as one 'Offer & Order' platform.
- **Order Management System (OMS)** vs [ONE Order](/standards/one-order.md) — ONE Order is the IATA standard/initiative defining the single Order record and its messages; an Order Management System is the platform that implements and operates it.
- **Order Management System (OMS)** vs [PNR](/air-ops/pnr.md) — An OMS centers on the modern single Order record; the PNR is the legacy reservation construct an OMS aims to consolidate and replace.

# Citations
[1] IATA — Airline Retailing - Order and Offer Management
[2] IATA — ONE Order
