---
type: Metric
title: Expected Marginal Seat Revenue (EMSR)
description: 'Expected Marginal Seat Revenue (EMSR) is the heuristic method used to compute protection levels and booking limits for nested fare classes by comparing each fare to the expected revenue of holding a seat for higher-value demand. It generalizes Littlewood''s two-class rule to multiple classes through Belobaba''s EMSRa and the more widely used EMSRb approximation, and remains the backbone of most single-leg airline revenue-management systems.'
tags:
  - air-shop
  - active
timestamp: '2026-06-18T00:00:00Z'
id: expected-marginal-seat-revenue
vertical: air
category: air-shop
conceptType: metric
status: active
abbreviation: EMSR
term_ko: '기대 한계 좌석 수익 (Expected Marginal Seat Revenue, EMSR)'
definition_ko: 'Expected Marginal Seat Revenue(EMSR)는 각 운임을 더 높은 가치의 수요를 위해 좌석을 남겨둘 때의 기대 수익과 비교하여, nested 운임 클래스의 protection level과 booking limit을 산출하는 휴리스틱 방법이다. 2클래스에 대한 Littlewood''s rule을 여러 클래스로 일반화한 것으로, Belobaba의 EMSRa와 더 널리 쓰이는 EMSRb 근사를 통해 구현되며, 대부분의 단일 leg 항공사 revenue management 시스템의 근간으로 남아 있다.'
longDef: 'EMSR builds on Littlewood''s rule, which says a seat should be protected for a higher class as long as that class''s fare times its probability of selling exceeds the lower class''s fare. Belobaba extended this to many nested classes in two forms: EMSRa, which sums pairwise protection levels and tends to over-protect, and EMSRb, which aggregates the demand of all higher classes into a single weighted-average fare and computes one protection level per class boundary. EMSRb''s protection level for the classes above a boundary is found where the aggregated higher-class revenue equals the next lower fare, using the demand forecast (typically normal) for those classes. The resulting nested protection levels and booking limits are recomputed as forecasts and remaining capacity change, driving the opening and closing of classes that a seller observes as availability. EMSR is a leg/class-based control; network and O&D systems instead lean on bid prices and virtual nesting, though many of those still use EMSR-style logic to value seats within a leg.'
longDef_ko: 'EMSR는 Littlewood''s rule에 기반한다. 이 규칙은 상위 클래스 운임에 판매 확률을 곱한 값이 하위 클래스 운임을 초과하는 한 좌석을 상위 클래스를 위해 protect해야 한다고 본다. Belobaba는 이를 다수의 nested 클래스로 두 가지 형태로 확장했다. EMSRa는 쌍별 protection level을 합산하여 과보호 경향이 있고, EMSRb는 모든 상위 클래스의 수요를 하나의 가중평균 운임으로 집계하여 클래스 경계마다 하나의 protection level을 계산한다. EMSRb에서 경계 위 클래스들의 protection level은, 그 클래스들에 대한 수요 예측(보통 정규분포)을 사용하여 집계된 상위 클래스 수익이 바로 아래 운임과 같아지는 지점에서 결정된다. 그 결과로 나오는 nested protection level과 booking limit은 예측과 잔여 capacity가 변할 때 재계산되어, 판매자가 availability로 관찰하는 클래스의 open/close를 구동한다. EMSR은 leg/클래스 기반 통제이며, 네트워크 및 O&D 시스템은 대신 bid price와 virtual nesting에 의존하지만, 그중 다수는 여전히 leg 내 좌석 가치를 평가하는 데 EMSR 방식의 논리를 사용한다.'
aliases:
  - EMSR
  - EMSRa
  - EMSRb
  - Expected Marginal Seat Revenue
relationships:
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: Protection Level
  - type: related
    targetTerm: Booking Limit
  - type: related
    targetTerm: Bid Price
  - type: related
    targetTerm: Virtual Nesting
distinctions:
  - targetTerm: Protection Level
    explanation: 'A protection level is the quantity of seats reserved for higher classes; EMSR is the computational method that calculates that quantity. EMSR produces protection levels (and hence booking limits), it is not itself the reservation.'
    explanation_ko: 'Protection level은 상위 클래스를 위해 예약된 좌석의 수량이고, EMSR은 그 수량을 산출하는 계산 방법이다. EMSR은 protection level(따라서 booking limit)을 만들어내는 것이지, 그 자체가 예약은 아니다.'
  - targetTerm: Bid Price
    explanation: EMSR is a leg- and class-based heuristic that sets fixed protection levels per class boundary; bid-price control instead stores a continuous value threshold per unit of capacity and scales to network/O&D decisions where EMSR's fixed class allocations do not.
    explanation_ko: 'EMSR은 클래스 경계마다 고정된 protection level을 설정하는 leg·클래스 기반 휴리스틱이고, bid-price 통제는 대신 capacity 단위마다 연속적 값 임계치를 저장하여 EMSR의 고정 클래스 배분으로는 다루기 어려운 네트워크/O&D 의사결정에 확장된다.'
  - targetTerm: Revenue Management
    explanation: Revenue Management is the overall discipline; EMSR is one specific seat-allocation optimization method within it.
    explanation_ko: 'Revenue Management는 전체 업무 영역이고, EMSR은 그 안의 구체적인 좌석 배분 최적화 방법 중 하나이다.'
sources:
  - org: INFORMS / Operations Research
    name: 'Belobaba, P. P. (1989), ''OR Practice—Application of a Probabilistic Decision Model to Airline Seat Inventory Control'', Operations Research, 37(2), 183-197'
    version: ''
    section: EMSR / nested booking limits
    url: 'https://pubsonline.informs.org/doi/10.1287/opre.37.2.183'
  - org: MIT OpenCourseWare
    name: '16.75J Airline Management (Spring 2006, MIT ICAT / Belobaba): Airline Revenue Management — Littlewood''s rule and EMSR'
    version: ''
    section: EMSR and protection levels
    url: 'https://ocw.mit.edu/courses/16-75j-airline-management-spring-2006/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 38h32"/><path d="M8 38V8"/><path d="M10 30C18 30 20 14 38 12"/><line x1="24" y1="21" x2="24" y2="38" stroke-dasharray="3 3"/><line x1="8" y1="21" x2="24" y2="21" stroke-dasharray="3 3"/><circle cx="24" cy="21" r="2" fill="currentColor"/></svg>
---

> Expected Marginal Seat Revenue (EMSR) is the heuristic method used to compute protection levels and booking limits for nested fare classes by comparing each fare to the expected revenue of holding a seat for higher-value demand. It generalizes Littlewood's two-class rule to multiple classes through Belobaba's EMSRa and the more widely used EMSRb approximation, and remains the backbone of most single-leg airline revenue-management systems.

EMSR builds on Littlewood's rule, which says a seat should be protected for a higher class as long as that class's fare times its probability of selling exceeds the lower class's fare. Belobaba extended this to many nested classes in two forms: EMSRa, which sums pairwise protection levels and tends to over-protect, and EMSRb, which aggregates the demand of all higher classes into a single weighted-average fare and computes one protection level per class boundary. EMSRb's protection level for the classes above a boundary is found where the aggregated higher-class revenue equals the next lower fare, using the demand forecast (typically normal) for those classes. The resulting nested protection levels and booking limits are recomputed as forecasts and remaining capacity change, driving the opening and closing of classes that a seller observes as availability. EMSR is a leg/class-based control; network and O&D systems instead lean on bid prices and virtual nesting, though many of those still use EMSR-style logic to value seats within a leg.

**한국어 / Korean** — **기대 한계 좌석 수익 (Expected Marginal Seat Revenue, EMSR)** — Expected Marginal Seat Revenue(EMSR)는 각 운임을 더 높은 가치의 수요를 위해 좌석을 남겨둘 때의 기대 수익과 비교하여, nested 운임 클래스의 protection level과 booking limit을 산출하는 휴리스틱 방법이다. 2클래스에 대한 Littlewood's rule을 여러 클래스로 일반화한 것으로, Belobaba의 EMSRa와 더 널리 쓰이는 EMSRb 근사를 통해 구현되며, 대부분의 단일 leg 항공사 revenue management 시스템의 근간으로 남아 있다.

EMSR는 Littlewood's rule에 기반한다. 이 규칙은 상위 클래스 운임에 판매 확률을 곱한 값이 하위 클래스 운임을 초과하는 한 좌석을 상위 클래스를 위해 protect해야 한다고 본다. Belobaba는 이를 다수의 nested 클래스로 두 가지 형태로 확장했다. EMSRa는 쌍별 protection level을 합산하여 과보호 경향이 있고, EMSRb는 모든 상위 클래스의 수요를 하나의 가중평균 운임으로 집계하여 클래스 경계마다 하나의 protection level을 계산한다. EMSRb에서 경계 위 클래스들의 protection level은, 그 클래스들에 대한 수요 예측(보통 정규분포)을 사용하여 집계된 상위 클래스 수익이 바로 아래 운임과 같아지는 지점에서 결정된다. 그 결과로 나오는 nested protection level과 booking limit은 예측과 잔여 capacity가 변할 때 재계산되어, 판매자가 availability로 관찰하는 클래스의 open/close를 구동한다. EMSR은 leg/클래스 기반 통제이며, 네트워크 및 O&D 시스템은 대신 bid price와 virtual nesting에 의존하지만, 그중 다수는 여전히 leg 내 좌석 가치를 평가하는 데 EMSR 방식의 논리를 사용한다.

**Aliases:** `EMSR`, `EMSRa`, `EMSRb`, `Expected Marginal Seat Revenue`

# Related
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [Protection Level](/air/air-shop/protection-level.md) — related
- [Booking Limit](/air/air-shop/booking-limit.md) — related
- [Bid Price](/air/air-shop/bid-price.md) — related
- [Virtual Nesting](/air/air-shop/virtual-nesting.md) — related

# Distinctions
- **Expected Marginal Seat Revenue (EMSR)** vs [Protection Level](/air/air-shop/protection-level.md) — A protection level is the quantity of seats reserved for higher classes; EMSR is the computational method that calculates that quantity. EMSR produces protection levels (and hence booking limits), it is not itself the reservation.
- **Expected Marginal Seat Revenue (EMSR)** vs [Bid Price](/air/air-shop/bid-price.md) — EMSR is a leg- and class-based heuristic that sets fixed protection levels per class boundary; bid-price control instead stores a continuous value threshold per unit of capacity and scales to network/O&D decisions where EMSR's fixed class allocations do not.
- **Expected Marginal Seat Revenue (EMSR)** vs [Revenue Management](/air/air-shop/revenue-management.md) — Revenue Management is the overall discipline; EMSR is one specific seat-allocation optimization method within it.

# Citations
[1] [INFORMS / Operations Research — Belobaba, P. P. (1989), 'OR Practice—Application of a Probabilistic Decision Model to Airline Seat Inventory Control', Operations Research, 37(2), 183-197 — EMSR / nested booking limits](https://pubsonline.informs.org/doi/10.1287/opre.37.2.183)
[2] [MIT OpenCourseWare — 16.75J Airline Management (Spring 2006, MIT ICAT / Belobaba): Airline Revenue Management — Littlewood's rule and EMSR — EMSR and protection levels](https://ocw.mit.edu/courses/16-75j-airline-management-spring-2006/)
