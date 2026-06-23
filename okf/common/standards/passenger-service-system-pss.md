---
type: Provider Term
title: Passenger Service System (PSS)
description: 'A Passenger Service System is the core airline platform that manages passenger-facing operations, typically comprising a reservations system, an inventory/availability system, and a departure control system (DCS). It is the legacy architectural backbone against which modern offer and order management systems are defined and which they aim to replace.'
tags:
  - standards
  - active
timestamp: '2026-06-17T00:00:00Z'
id: passenger-service-system-pss
vertical: common
category: standards
conceptType: provider-term
status: active
abbreviation: PSS
term_ko: 여객 서비스 시스템(PSS)
definition_ko: '여객 서비스 시스템(PSS)은 여객 관련 운영을 관리하는 항공사의 핵심 플랫폼으로, 보통 예약 시스템, 재고/가용성 시스템, 출발 통제 시스템(DCS)으로 구성된다. 현대적 offer·order 관리 시스템이 정의되는 기준이 되는 레거시 아키텍처의 근간이며, 그러한 시스템이 대체하고자 하는 대상이다.'
longDef: 'The reservations component holds schedules, fares, and PNRs and issues tickets; the inventory component controls seat availability and fare classes (RBDs); and the DCS handles check-in, baggage, and boarding. Full-service carriers run complex suites such as Amadeus Altea or SabreSonic, while many low-cost carriers use streamlined ticketless platforms. As airlines transition to IATA''s offer-and-order retailing, Offer Management Systems and Order Management Systems progressively take over functions traditionally locked inside the PSS.'
longDef_ko: '예약 구성요소는 스케줄·운임·PNR을 보유하고 항공권을 발행하며, 재고 구성요소는 좌석 가용성과 운임 등급(RBD)을 통제하고, DCS는 체크인·수하물·탑승을 처리한다. 풀서비스 항공사는 Amadeus Altea나 SabreSonic 같은 복합 스위트를 운용하고, 많은 저비용 항공사는 간소화된 무발권 플랫폼을 사용한다. 항공사가 IATA의 offer-and-order 리테일링으로 전환함에 따라, Offer Management System과 Order Management System이 전통적으로 PSS 내부에 갇혀 있던 기능을 점진적으로 넘겨받는다.'
aliases:
  - PSS
  - Passenger Service System
providerTerms:
  - provider: Amadeus
    term: Altea
    context: Amadeus's full-service-carrier PSS suite
    context_ko: Amadeus의 풀서비스 항공사 PSS 스위트
    relationship: narrower
  - provider: Sabre
    term: SabreSonic
    context: Sabre's passenger service system for airlines
    context_ko: Sabre의 항공사용 여객 서비스 시스템
    relationship: narrower
relationships:
  - type: related
    targetTerm: Order Management System (OMS)
  - type: related
    targetTerm: Offer Management System
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: RBD
distinctions:
  - targetTerm: CRS
    explanation: A CRS (reservations system) is one component within a PSS; the PSS is the broader platform that also includes inventory and departure control alongside reservations.
    explanation_ko: 'CRS(예약 시스템)는 PSS 안의 한 구성요소이고, PSS는 예약과 함께 재고와 출발 통제까지 포함하는 더 넓은 플랫폼이다.'
  - targetTerm: Order Management System (OMS)
    explanation: The PSS is the legacy PNR/ticket-centric platform; an OMS is the modern order-centric system that progressively replaces PSS functions in offer-and-order retailing.
    explanation_ko: 'PSS는 PNR/항공권 중심의 레거시 플랫폼이고, OMS는 offer-and-order 리테일링에서 PSS 기능을 점진적으로 대체하는 현대적 주문 중심 시스템이다.'
sources:
  - org: IATA
    name: Offers and Orders Transformation Strategic Partnerships Program
    version: ''
    section: ''
    url: ''
    tier: association
  - org: Wikipedia
    name: Passenger service system
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Passenger_service_system'
    tier: encyclopedia
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="32" height="10" rx="2"/><rect x="8" y="20" width="32" height="10" rx="2"/><rect x="8" y="32" width="32" height="8" rx="2"/><path d="M13 13h.01M13 25h.01M13 36h.01"/><path d="M18 13h14M18 25h14M18 36h10"/></svg>
---

> A Passenger Service System is the core airline platform that manages passenger-facing operations, typically comprising a reservations system, an inventory/availability system, and a departure control system (DCS). It is the legacy architectural backbone against which modern offer and order management systems are defined and which they aim to replace.

The reservations component holds schedules, fares, and PNRs and issues tickets; the inventory component controls seat availability and fare classes (RBDs); and the DCS handles check-in, baggage, and boarding. Full-service carriers run complex suites such as Amadeus Altea or SabreSonic, while many low-cost carriers use streamlined ticketless platforms. As airlines transition to IATA's offer-and-order retailing, Offer Management Systems and Order Management Systems progressively take over functions traditionally locked inside the PSS.

**한국어 / Korean** — **여객 서비스 시스템(PSS)** — 여객 서비스 시스템(PSS)은 여객 관련 운영을 관리하는 항공사의 핵심 플랫폼으로, 보통 예약 시스템, 재고/가용성 시스템, 출발 통제 시스템(DCS)으로 구성된다. 현대적 offer·order 관리 시스템이 정의되는 기준이 되는 레거시 아키텍처의 근간이며, 그러한 시스템이 대체하고자 하는 대상이다.

예약 구성요소는 스케줄·운임·PNR을 보유하고 항공권을 발행하며, 재고 구성요소는 좌석 가용성과 운임 등급(RBD)을 통제하고, DCS는 체크인·수하물·탑승을 처리한다. 풀서비스 항공사는 Amadeus Altea나 SabreSonic 같은 복합 스위트를 운용하고, 많은 저비용 항공사는 간소화된 무발권 플랫폼을 사용한다. 항공사가 IATA의 offer-and-order 리테일링으로 전환함에 따라, Offer Management System과 Order Management System이 전통적으로 PSS 내부에 갇혀 있던 기능을 점진적으로 넘겨받는다.

**Aliases:** `PSS`, `Passenger Service System`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Altea` | narrower | Amadeus's full-service-carrier PSS suite |
| Sabre | `SabreSonic` | narrower | Sabre's passenger service system for airlines |

# Related
- [Order Management System (OMS)](/common/standards/order-management-system-oms.md) — related
- [Offer Management System](/common/standards/offer-management-system.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [RBD](/air/air-shop/rbd.md) — related

# Distinctions
- **Passenger Service System (PSS)** vs [CRS](/lodging/hotel-dist/crs.md) — A CRS (reservations system) is one component within a PSS; the PSS is the broader platform that also includes inventory and departure control alongside reservations.
- **Passenger Service System (PSS)** vs [Order Management System (OMS)](/common/standards/order-management-system-oms.md) — The PSS is the legacy PNR/ticket-centric platform; an OMS is the modern order-centric system that progressively replaces PSS functions in offer-and-order retailing.

# Citations
[1] IATA — Offers and Orders Transformation Strategic Partnerships Program
[2] [Wikipedia — Passenger service system](https://en.wikipedia.org/wiki/Passenger_service_system)
