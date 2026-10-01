---
type: Business Term
title: Fare Ladder
description: 'A fare ladder is the sequential ordering of booking classes (RBDs) and their associated fares from the lowest-priced to the highest-priced on a route, used in revenue management to control when cheaper seats become unavailable and more expensive classes must be purchased. It represents the structured progression through which an airline moves demand from low to high fare levels as the flight fills.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-10-01T00:00:00Z'
id: fare-ladder
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 운임 사다리(Fare Ladder)
definition_ko: 'Fare Ladder(운임 사다리)는 한 노선에서 예약 클래스(RBD)와 관련 운임을 최저가부터 최고가 순으로 나열한 순서 구조로, 수익 관리에서 저렴한 좌석이 언제 매진되어 더 비싼 클래스를 구매해야 하는지를 제어하는 데 사용된다. 항공기 탑승률이 높아질수록 수요를 낮은 운임에서 높은 운임 수준으로 이동시키는 구조화된 진행 경로를 나타낸다.'
longDef: 'A typical fare ladder for an economy cabin might progress from Q (lowest discount) through V, K, M, B, Y (full fare) in ascending price order. Revenue management systems open and close booking classes on the ladder based on demand forecasts, booking curves, and bid-price thresholds: when low-fare classes fill, the system closes them, forcing subsequent bookings into higher rungs. The ladder concept is closely linked to EMSR (Expected Marginal Seat Revenue) methods, which calculate the optimal booking limit for each class as a function of remaining capacity and forecast unconstrained demand. In ATPCO-based distribution, fare classes on the ladder correspond to specific ATPCO-filed fares with booking conditions including minimum stay, advance purchase, and changeability rules. Revenue management systems use nested, serial, or parallel nesting of the ladder classes to prevent lower-class bookings from displacing high-value demand.'
longDef_ko: '전형적인 이코노미 객실의 운임 사다리는 가장 낮은 할인 클래스(Q)에서 V, K, M, B, Y(정상 운임) 순으로 가격이 상승한다. 수익 관리 시스템은 수요 예측, 예약 곡선, 입찰가(bid price) 임계값을 기반으로 사다리의 예약 클래스를 개방하고 폐쇄한다. 저가 클래스가 매진되면 시스템은 이를 폐쇄하여 이후 예약이 더 높은 단계로 이동하게 한다. 사다리 개념은 EMSR(Expected Marginal Seat Revenue) 방법과 긴밀히 연결되어 있으며, 이 방법은 남은 좌석 수와 수요 예측에 따라 각 클래스의 최적 예약 한도를 계산한다. ATPCO 기반 유통에서 사다리의 운임 클래스는 최소 체류, 사전 구매, 변경 규정 등 예약 조건이 포함된 ATPCO 게재 운임에 대응된다. 수익 관리 시스템은 저가 예약이 고가 수요를 대체하지 않도록 사다리 클래스의 중첩, 연속, 병렬 중첩을 활용한다.'
standardBody: IATA
aliases:
  - Booking Class Ladder
  - Fare Class Hierarchy
  - Class Hierarchy
relationships:
  - type: related
    targetTerm: RBD
  - type: related
    targetTerm: Booking Limit
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Bid Price
  - type: related
    targetTerm: Yield Management
  - type: related
    targetTerm: Protection Level
  - type: related
    targetTerm: Load Factor
distinctions:
  - targetTerm: RBD
    explanation: 'An RBD (Reservation Booking Designator) is the single letter code identifying one booking class; a fare ladder is the ordered collection of multiple RBDs ranked by price, showing how they relate to each other as an availability progression.'
    explanation_ko: 'RBD(Reservation Booking Designator)는 하나의 예약 클래스를 식별하는 단일 문자 코드이고, 운임 사다리는 여러 RBD를 가격 순으로 정렬한 집합으로, 이들이 가용성 진행 순서로 서로 어떻게 관련되는지를 보여준다.'
  - targetTerm: Revenue Management
    explanation: 'A fare ladder is the structural representation of the booking-class hierarchy on a specific route; revenue management is the broader discipline of forecasting demand, setting booking limits, and opening/closing classes on that ladder to maximize total flight revenue.'
    explanation_ko: '운임 사다리는 특정 노선의 예약 클래스 계층 구조 표현이고, 수익 관리는 수요를 예측하고 예약 한도를 설정하며, 전체 항공편 수익을 극대화하기 위해 해당 사다리의 클래스를 개폐하는 더 광범위한 전문 분야이다.'
  - targetTerm: Bid Price
    explanation: 'A bid price is the minimum revenue threshold above which a seat can be sold at a given point in time; the fare ladder provides the set of discrete fare levels from which the system selects the lowest available class still above the bid price.'
    explanation_ko: '입찰가(bid price)는 특정 시점에 좌석을 판매할 수 있는 최소 수익 임계값이고, 운임 사다리는 시스템이 입찰가 이상의 이용 가능한 최저 클래스를 선택하는 이산 운임 수준 집합을 제공한다.'
sources:
  - name: Airline Revenue Management — Seat Inventory Control
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/training/courses/airline-revenue-management-fundamentals/'
    tier: association
  - name: Revenue Management and Pricing — Booking Class Structures
    org: ATPCO
    version: ''
    section: ''
    url: 'https://www.atpco.net/solutions/automated-pricing-and-shopping'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="38" x2="38" y2="38"/><rect x="10" y="28" width="6" height="10"/><rect x="21" y="20" width="6" height="18"/><rect x="32" y="11" width="6" height="27"/><polyline points="13,28 24,20 35,11"/><polyline points="32,14 35,11 38,14"/></svg>
---

> A fare ladder is the sequential ordering of booking classes (RBDs) and their associated fares from the lowest-priced to the highest-priced on a route, used in revenue management to control when cheaper seats become unavailable and more expensive classes must be purchased. It represents the structured progression through which an airline moves demand from low to high fare levels as the flight fills.

A typical fare ladder for an economy cabin might progress from Q (lowest discount) through V, K, M, B, Y (full fare) in ascending price order. Revenue management systems open and close booking classes on the ladder based on demand forecasts, booking curves, and bid-price thresholds: when low-fare classes fill, the system closes them, forcing subsequent bookings into higher rungs. The ladder concept is closely linked to EMSR (Expected Marginal Seat Revenue) methods, which calculate the optimal booking limit for each class as a function of remaining capacity and forecast unconstrained demand. In ATPCO-based distribution, fare classes on the ladder correspond to specific ATPCO-filed fares with booking conditions including minimum stay, advance purchase, and changeability rules. Revenue management systems use nested, serial, or parallel nesting of the ladder classes to prevent lower-class bookings from displacing high-value demand.

**한국어 / Korean** — **운임 사다리(Fare Ladder)** — Fare Ladder(운임 사다리)는 한 노선에서 예약 클래스(RBD)와 관련 운임을 최저가부터 최고가 순으로 나열한 순서 구조로, 수익 관리에서 저렴한 좌석이 언제 매진되어 더 비싼 클래스를 구매해야 하는지를 제어하는 데 사용된다. 항공기 탑승률이 높아질수록 수요를 낮은 운임에서 높은 운임 수준으로 이동시키는 구조화된 진행 경로를 나타낸다.

전형적인 이코노미 객실의 운임 사다리는 가장 낮은 할인 클래스(Q)에서 V, K, M, B, Y(정상 운임) 순으로 가격이 상승한다. 수익 관리 시스템은 수요 예측, 예약 곡선, 입찰가(bid price) 임계값을 기반으로 사다리의 예약 클래스를 개방하고 폐쇄한다. 저가 클래스가 매진되면 시스템은 이를 폐쇄하여 이후 예약이 더 높은 단계로 이동하게 한다. ATPCO 기반 유통에서 사다리의 운임 클래스는 최소 체류, 사전 구매, 변경 규정 등 예약 조건이 포함된 ATPCO 게재 운임에 대응된다.

**Aliases:** `Booking Class Ladder`, `Fare Class Hierarchy`, `Class Hierarchy`

# Related
- [RBD](/air/air-shop/rbd.md) — related
- [Booking Limit](/air/air-shop/booking-limit.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related
- [Bid Price](/air/air-shop/bid-price.md) — related
- [Yield Management](/air/air-shop/yield-management.md) — related
- [Protection Level](/air/air-shop/protection-level.md) — related
- [Load Factor](/air/air-shop/load-factor.md) — related

# Distinctions
- **Fare Ladder** vs [RBD](/air/air-shop/rbd.md) — An RBD (Reservation Booking Designator) is the single letter code identifying one booking class; a fare ladder is the ordered collection of multiple RBDs ranked by price, showing how they relate to each other as an availability progression.
- **Fare Ladder** vs [Revenue Management](/air/air-shop/revenue-management.md) — A fare ladder is the structural representation of the booking-class hierarchy on a specific route; revenue management is the broader discipline of forecasting demand, setting booking limits, and opening/closing classes on that ladder to maximize total flight revenue.
- **Fare Ladder** vs [Bid Price](/air/air-shop/bid-price.md) — A bid price is the minimum revenue threshold above which a seat can be sold at a given point in time; the fare ladder provides the set of discrete fare levels from which the system selects the lowest available class still above the bid price.

# Citations
[1] [IATA — Airline Revenue Management — Seat Inventory Control](https://www.iata.org/en/training/courses/airline-revenue-management-fundamentals/)
[2] [ATPCO — Revenue Management and Pricing — Booking Class Structures](https://www.atpco.net/solutions/automated-pricing-and-shopping)
