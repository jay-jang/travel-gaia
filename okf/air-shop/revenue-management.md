---
type: Process
title: Revenue Management
description: 'Revenue Management is the airline discipline of dynamically controlling seat availability and pricing across booking classes to maximize total revenue for each flight. It forecasts demand by class and applies seat-allocation controls (e.g., booking limits, nesting, bid prices) so that higher-yield demand is not displaced by early low-fare bookings.'
tags:
  - air-shop
  - active
timestamp: '2026-06-17T00:00:00Z'
id: revenue-management
category: air-shop
conceptType: process
status: active
abbreviation: RM
term_ko: 수익 관리 (Revenue Management)
definition_ko: 'Revenue Management는 항공편별 총수익을 극대화하기 위해 booking class 전반의 좌석 가용성과 가격을 동적으로 통제하는 항공사 업무 영역이다. 클래스별 수요를 예측하고 좌석 배분 통제(예약 한도, 네스팅, bid price 등)를 적용하여, 수익성 높은 수요가 조기 저가 예약에 밀려나지 않도록 한다.'
longDef: 'Revenue Management (historically called Yield Management) emerged after US deregulation as carriers learned to segment perishable seat inventory by willingness to pay. An RM system forecasts demand for each Reservation Booking Designator (RBD) on a flight or origin-and-destination (O&D) market, then sets availability controls that open or close classes over time. Leg-based and O&D (network) RM approaches use techniques such as Expected Marginal Seat Revenue (EMSR), virtual nesting, and bid-price thresholds. RM is tightly coupled with pricing (which sets the fare ladder) and overbooking (which compensates for no-shows), and increasingly with dynamic and continuous pricing that blur the line between fixed fare buckets and demand-driven prices.'
longDef_ko: 'Revenue Management(과거 Yield Management로 불림)는 미국 규제 완화 이후 항공사가 지불 의향에 따라 소멸성 좌석 인벤토리를 세분화하는 법을 익히면서 등장했다. RM 시스템은 항공편 또는 O&D(출발지·목적지) 시장에서 각 RBD에 대한 수요를 예측한 뒤, 시간에 따라 클래스를 열고 닫는 가용성 통제를 설정한다. 구간(leg) 기반과 O&D(네트워크) 기반 RM 방식은 EMSR(Expected Marginal Seat Revenue), 가상 네스팅, bid-price 임계값 같은 기법을 사용한다. RM은 운임 사다리를 설정하는 pricing 및 no-show를 보완하는 overbooking과 긴밀히 연결되며, 고정 운임 버킷과 수요 기반 가격의 경계를 흐리는 dynamic/continuous pricing과도 점점 더 결합된다.'
aliases:
  - Yield Management
  - Inventory Management
relationships:
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: RBD
  - type: related
    targetTerm: Overbooking
  - type: related
    targetTerm: Origin & Destination
  - type: related
    targetTerm: Continuous Pricing
distinctions:
  - targetTerm: Continuous Pricing
    explanation: Revenue Management is the broader discipline of demand forecasting and inventory control; Continuous Pricing is one modern pricing technique that lets RM offer prices across a continuous range rather than fixed fare buckets.
    explanation_ko: 'Revenue Management는 수요 예측과 인벤토리 통제를 아우르는 더 넓은 영역이며, Continuous Pricing은 RM이 고정 운임 버킷 대신 연속적 범위로 가격을 제시할 수 있게 하는 현대적 가격 책정 기법 중 하나다.'
sources:
  - org: OAG
    name: The Story of Airline Pricing Strategies
    version: ''
    section: Revenue/yield management
    url: 'https://www.oag.com/blog/the-story-of-airline-pricing-strategies'
  - org: ATPCO
    name: What are dynamic offers?
    version: ''
    section: Revenue management and pricing
    url: 'https://atpco.net/single-blog/what-are-dynamic-offers/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 38h32"/><path d="M8 38V10"/><rect x="13" y="26" width="5" height="12"/><rect x="22" y="18" width="5" height="20"/><rect x="31" y="12" width="5" height="26"/><path d="M12 20l6-6 5 4 9-9"/></svg>
---

> Revenue Management is the airline discipline of dynamically controlling seat availability and pricing across booking classes to maximize total revenue for each flight. It forecasts demand by class and applies seat-allocation controls (e.g., booking limits, nesting, bid prices) so that higher-yield demand is not displaced by early low-fare bookings.

Revenue Management (historically called Yield Management) emerged after US deregulation as carriers learned to segment perishable seat inventory by willingness to pay. An RM system forecasts demand for each Reservation Booking Designator (RBD) on a flight or origin-and-destination (O&D) market, then sets availability controls that open or close classes over time. Leg-based and O&D (network) RM approaches use techniques such as Expected Marginal Seat Revenue (EMSR), virtual nesting, and bid-price thresholds. RM is tightly coupled with pricing (which sets the fare ladder) and overbooking (which compensates for no-shows), and increasingly with dynamic and continuous pricing that blur the line between fixed fare buckets and demand-driven prices.

**한국어 / Korean** — **수익 관리 (Revenue Management)** — Revenue Management는 항공편별 총수익을 극대화하기 위해 booking class 전반의 좌석 가용성과 가격을 동적으로 통제하는 항공사 업무 영역이다. 클래스별 수요를 예측하고 좌석 배분 통제(예약 한도, 네스팅, bid price 등)를 적용하여, 수익성 높은 수요가 조기 저가 예약에 밀려나지 않도록 한다.

Revenue Management(과거 Yield Management로 불림)는 미국 규제 완화 이후 항공사가 지불 의향에 따라 소멸성 좌석 인벤토리를 세분화하는 법을 익히면서 등장했다. RM 시스템은 항공편 또는 O&D(출발지·목적지) 시장에서 각 RBD에 대한 수요를 예측한 뒤, 시간에 따라 클래스를 열고 닫는 가용성 통제를 설정한다. 구간(leg) 기반과 O&D(네트워크) 기반 RM 방식은 EMSR(Expected Marginal Seat Revenue), 가상 네스팅, bid-price 임계값 같은 기법을 사용한다. RM은 운임 사다리를 설정하는 pricing 및 no-show를 보완하는 overbooking과 긴밀히 연결되며, 고정 운임 버킷과 수요 기반 가격의 경계를 흐리는 dynamic/continuous pricing과도 점점 더 결합된다.

**Aliases:** `Yield Management`, `Inventory Management`

# Related
- [Availability](/air-shop/availability.md) — related
- [RBD](/air-shop/rbd.md) — related
- [Overbooking](/air-shop/overbooking.md) — related
- [Origin & Destination](/air-shop/origin-destination.md) — related
- [Continuous Pricing](/air-shop/continuous-pricing.md) — related

# Distinctions
- **Revenue Management** vs [Continuous Pricing](/air-shop/continuous-pricing.md) — Revenue Management is the broader discipline of demand forecasting and inventory control; Continuous Pricing is one modern pricing technique that lets RM offer prices across a continuous range rather than fixed fare buckets.

# Citations
[1] [OAG — The Story of Airline Pricing Strategies — Revenue/yield management](https://www.oag.com/blog/the-story-of-airline-pricing-strategies)
[2] [ATPCO — What are dynamic offers? — Revenue management and pricing](https://atpco.net/single-blog/what-are-dynamic-offers/)
