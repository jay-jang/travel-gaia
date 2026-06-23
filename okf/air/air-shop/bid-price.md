---
type: Standard Term
title: Bid Price
description: 'A bid price is a revenue-management control representing the minimum acceptable revenue (the opportunity cost, or marginal value, of the next seat) below which a booking request is rejected. A request to sell a seat or itinerary is accepted only if its fare meets or exceeds the sum of the bid prices of the capacity it consumes.'
tags:
  - air-shop
  - active
timestamp: '2026-06-17T00:00:00Z'
id: bid-price
vertical: air
category: air-shop
conceptType: standard-term
status: active
term_ko: 비드 프라이스 (Bid Price)
definition_ko: 'Bid price는 다음 좌석의 기회비용(또는 한계 가치)을 나타내는 revenue management 통제값으로, 이 값 미만이면 예약 요청이 거절되는 최소 수용 가능 수익이다. 좌석이나 여정 판매 요청은 그 운임이 소비하는 좌석(capacity)의 bid price 합계 이상일 때만 수락된다.'
longDef: 'Bid-price control is an alternative to class-level booking limits: instead of counting seats per fare class, the system stores a threshold value per leg (or per unit of network capacity) and accepts any request whose fare clears the relevant threshold(s). In network/O&D revenue management, an itinerary spanning several legs must clear the sum of those legs'' bid prices, so the same fare can be accepted on one routing and rejected on another depending on each leg''s marginal value. Bid prices are recomputed as demand and remaining capacity change, typically derived from network optimization such as the duals of a deterministic or randomized linear program, or approximations of the dynamic program. They make a seat''s acceptability depend on its contribution relative to displacement, rather than on a fixed class allocation as in single-leg protection-level methods like EMSR.'
longDef_ko: 'Bid-price 통제는 클래스 단위 booking limit의 대안이다. 운임 클래스별 좌석을 세는 대신, 시스템은 leg(또는 네트워크 capacity 단위)별 임계값을 저장하고 운임이 해당 임계값(들)을 넘는 요청을 수락한다. 네트워크/O&D revenue management에서는 여러 leg에 걸친 여정이 그 leg들의 bid price 합계를 넘어야 하므로, 동일한 운임이라도 각 leg의 한계 가치에 따라 어떤 routing에서는 수락되고 다른 routing에서는 거절될 수 있다. bid price는 수요와 잔여 capacity가 변할 때 재계산되며, 보통 결정론적 또는 무작위화 선형계획법(LP)의 쌍대값이나 동적계획법 근사 같은 네트워크 최적화에서 도출된다. 이는 좌석의 수락 가능 여부를, EMSR 같은 단일 leg 보호수준 방식의 고정된 클래스 배분이 아니라 displacement 대비 기여도에 따라 결정하게 한다.'
aliases:
  - Bid-Price Control
  - Displacement Cost
  - Opportunity Cost Threshold
providerTerms:
  - provider: PROS
    term: Bid price (deterministic / heuristic)
    context: In PROS RM bid prices are the leg optimization output; the heuristic bid price uses EMSR-derived displacement cost while the deterministic bid price uses LP shadow prices.
    context_ko: 'PROS RM에서 bid price는 레그 최적화 산출물로, heuristic bid price는 EMSR 기반 displacement cost를, deterministic bid price는 LP shadow price를 사용한다.'
    relationship: same
relationships:
  - type: broader
    targetTerm: Revenue Management
  - type: contrasts
    targetTerm: Booking Limit
  - type: contrasts
    targetTerm: Protection Level
  - type: related
    targetTerm: Origin & Destination Control (O&D Control)
  - type: related
    targetTerm: Availability
distinctions:
  - targetTerm: Booking Limit
    explanation: 'A booking limit caps the number of seats sellable in a class; a bid price is a value threshold a fare must beat. They are two interchangeable ways to express the same seat-allocation control, but bid-price control scales naturally to network/O&D decisions where class limits do not.'
    explanation_ko: 'Booking limit은 한 클래스에서 판매 가능한 좌석 수의 상한이고, bid price는 운임이 넘어야 하는 값 임계치이다. 둘은 동일한 좌석 배분 통제를 표현하는 상호 교환 가능한 방식이지만, bid-price 통제는 클래스 한도로는 다루기 어려운 네트워크/O&D 의사결정에 자연스럽게 확장된다.'
  - targetTerm: Revenue Management
    explanation: Revenue Management is the overall discipline; the bid price is one specific control mechanism it uses to accept or reject bookings.
    explanation_ko: 'Revenue Management는 전체 업무 영역이고, bid price는 그 영역이 예약을 수락·거절하는 데 사용하는 하나의 구체적 통제 메커니즘이다.'
  - targetTerm: Expected Marginal Seat Revenue (EMSR)
    explanation: EMSR is a leg- and class-based heuristic that sets fixed protection levels per class boundary; bid-price control instead stores a continuous value threshold per unit of capacity and scales to network/O&D decisions where EMSR's fixed class allocations do not.
    explanation_ko: 'EMSR은 클래스 경계마다 고정된 protection level을 설정하는 leg·클래스 기반 휴리스틱이고, bid-price 통제는 대신 capacity 단위마다 연속적 값 임계치를 저장하여 EMSR의 고정 클래스 배분으로는 다루기 어려운 네트워크/O&D 의사결정에 확장된다.'
  - targetTerm: Hurdle Rate
    explanation: 'Bid price is the general revenue-management threshold (the marginal value / opportunity cost of the last unit of capacity) that originated in airline and network RM; the hurdle rate is the same idea applied to a hotel room-night and expressed as a minimum acceptable room rate. In hotel systems the two are often used interchangeably, with the bid-price value commonly surfaced as the Last Room Value (LRV) from which the rate hurdle is derived.'
    explanation_ko: 'Bid price는 마지막 용량 단위의 한계 가치(기회비용)를 나타내는 레비뉴 매니지먼트의 일반적 임계값으로 항공·네트워크 RM에서 비롯되었고, 허들 레이트는 같은 개념을 호텔 객실-박에 적용해 최저 수용 요금으로 표현한 것이다. 호텔 시스템에서는 둘이 사실상 혼용되며, bid-price 값이 흔히 Last Room Value(LRV)로 표시되고 그로부터 레이트 허들이 도출된다.'
  - targetTerm: Net Yield
    explanation: Bid Price is a revenue-management control — the marginal value threshold an availability request must clear — used to decide whether to sell. Net Yield is an ex-post performance result measuring realized net revenue per APCD. One steers the booking decision; the other scores how well pricing performed.
    explanation_ko: 'Bid Price는 수익관리 통제 장치로, 가용성 요청이 넘어야 하는 한계 가치 임계값이며 판매 여부를 결정하는 데 쓰인다. Net Yield는 사후 성과 결과로, 실현된 APCD당 순수익을 측정한다. 하나는 예약 결정을 조정하고, 다른 하나는 가격 성과를 평가한다.'
  - targetTerm: Virtual Nesting
    explanation: 'Both are network RM controls, but virtual nesting keeps discrete nested buckets and booking limits per leg, whereas bid-price control replaces buckets with a continuous value threshold an itinerary''s fare must clear across all its legs.'
    explanation_ko: '둘 다 네트워크 RM 통제이지만, virtual nesting은 leg별로 이산적인 nested 버킷과 booking limit을 유지하는 반면, bid-price 통제는 버킷을 여정의 운임이 모든 leg에 걸쳐 넘어야 하는 연속적 값 임계치로 대체한다.'
sources:
  - org: INFORMS
    name: 'Talluri, van Ryzin, Karaesmen & Vulcano, ''Revenue Management: Models and Methods'', Proceedings of the 2009 Winter Simulation Conference'
    version: ''
    section: Bid-price control
    url: 'https://www.informs-sim.org/wsc09papers/013.pdf'
    tier: secondary
  - org: INFORMS / Management Science
    name: 'Talluri & van Ryzin, ''An Analysis of Bid-Price Controls for Network Revenue Management'', Management Science 44(11), 1998'
    version: ''
    section: ''
    url: 'https://pubsonline.informs.org/doi/10.1287/mnsc.44.11.1577'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="28" x2="40" y2="28" stroke-dasharray="3 3"/><path d="M14 36V24"/><path d="M24 36V18"/><path d="M34 36V28"/><path d="M11 22h6M21 16h6"/></svg>
---

> A bid price is a revenue-management control representing the minimum acceptable revenue (the opportunity cost, or marginal value, of the next seat) below which a booking request is rejected. A request to sell a seat or itinerary is accepted only if its fare meets or exceeds the sum of the bid prices of the capacity it consumes.

Bid-price control is an alternative to class-level booking limits: instead of counting seats per fare class, the system stores a threshold value per leg (or per unit of network capacity) and accepts any request whose fare clears the relevant threshold(s). In network/O&D revenue management, an itinerary spanning several legs must clear the sum of those legs' bid prices, so the same fare can be accepted on one routing and rejected on another depending on each leg's marginal value. Bid prices are recomputed as demand and remaining capacity change, typically derived from network optimization such as the duals of a deterministic or randomized linear program, or approximations of the dynamic program. They make a seat's acceptability depend on its contribution relative to displacement, rather than on a fixed class allocation as in single-leg protection-level methods like EMSR.

**한국어 / Korean** — **비드 프라이스 (Bid Price)** — Bid price는 다음 좌석의 기회비용(또는 한계 가치)을 나타내는 revenue management 통제값으로, 이 값 미만이면 예약 요청이 거절되는 최소 수용 가능 수익이다. 좌석이나 여정 판매 요청은 그 운임이 소비하는 좌석(capacity)의 bid price 합계 이상일 때만 수락된다.

Bid-price 통제는 클래스 단위 booking limit의 대안이다. 운임 클래스별 좌석을 세는 대신, 시스템은 leg(또는 네트워크 capacity 단위)별 임계값을 저장하고 운임이 해당 임계값(들)을 넘는 요청을 수락한다. 네트워크/O&D revenue management에서는 여러 leg에 걸친 여정이 그 leg들의 bid price 합계를 넘어야 하므로, 동일한 운임이라도 각 leg의 한계 가치에 따라 어떤 routing에서는 수락되고 다른 routing에서는 거절될 수 있다. bid price는 수요와 잔여 capacity가 변할 때 재계산되며, 보통 결정론적 또는 무작위화 선형계획법(LP)의 쌍대값이나 동적계획법 근사 같은 네트워크 최적화에서 도출된다. 이는 좌석의 수락 가능 여부를, EMSR 같은 단일 leg 보호수준 방식의 고정된 클래스 배분이 아니라 displacement 대비 기여도에 따라 결정하게 한다.

**Aliases:** `Bid-Price Control`, `Displacement Cost`, `Opportunity Cost Threshold`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| PROS | `Bid price (deterministic / heuristic)` | same | In PROS RM bid prices are the leg optimization output; the heuristic bid price uses EMSR-derived displacement cost while the deterministic bid price uses LP shadow prices. |

# Related
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [Booking Limit](/air/air-shop/booking-limit.md) — contrasts
- [Protection Level](/air/air-shop/protection-level.md) — contrasts
- [Origin & Destination Control (O&D Control)](/air/air-shop/origin-destination-control.md) — related
- [Availability](/air/air-shop/availability.md) — related

# Distinctions
- **Bid Price** vs [Booking Limit](/air/air-shop/booking-limit.md) — A booking limit caps the number of seats sellable in a class; a bid price is a value threshold a fare must beat. They are two interchangeable ways to express the same seat-allocation control, but bid-price control scales naturally to network/O&D decisions where class limits do not.
- **Bid Price** vs [Revenue Management](/air/air-shop/revenue-management.md) — Revenue Management is the overall discipline; the bid price is one specific control mechanism it uses to accept or reject bookings.
- **Bid Price** vs [Expected Marginal Seat Revenue (EMSR)](/air/air-shop/expected-marginal-seat-revenue.md) — EMSR is a leg- and class-based heuristic that sets fixed protection levels per class boundary; bid-price control instead stores a continuous value threshold per unit of capacity and scales to network/O&D decisions where EMSR's fixed class allocations do not.
- **Bid Price** vs [Hurdle Rate](/lodging/hotel-rate/hurdle-rate.md) — Bid price is the general revenue-management threshold (the marginal value / opportunity cost of the last unit of capacity) that originated in airline and network RM; the hurdle rate is the same idea applied to a hotel room-night and expressed as a minimum acceptable room rate. In hotel systems the two are often used interchangeably, with the bid-price value commonly surfaced as the Last Room Value (LRV) from which the rate hurdle is derived.
- **Bid Price** vs [Net Yield](/cruise/cruise/net-yield.md) — Bid Price is a revenue-management control — the marginal value threshold an availability request must clear — used to decide whether to sell. Net Yield is an ex-post performance result measuring realized net revenue per APCD. One steers the booking decision; the other scores how well pricing performed.
- **Bid Price** vs [Virtual Nesting](/air/air-shop/virtual-nesting.md) — Both are network RM controls, but virtual nesting keeps discrete nested buckets and booking limits per leg, whereas bid-price control replaces buckets with a continuous value threshold an itinerary's fare must clear across all its legs.

# Citations
[1] [INFORMS — Talluri, van Ryzin, Karaesmen & Vulcano, 'Revenue Management: Models and Methods', Proceedings of the 2009 Winter Simulation Conference — Bid-price control](https://www.informs-sim.org/wsc09papers/013.pdf)
[2] [INFORMS / Management Science — Talluri & van Ryzin, 'An Analysis of Bid-Price Controls for Network Revenue Management', Management Science 44(11), 1998](https://pubsonline.informs.org/doi/10.1287/mnsc.44.11.1577)
