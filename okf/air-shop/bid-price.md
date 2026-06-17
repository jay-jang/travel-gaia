---
type: Standard Term
title: Bid Price
description: 'A bid price is a revenue-management control representing the minimum acceptable revenue (the opportunity cost, or marginal value, of the next seat) below which a booking request is rejected. A request to sell a seat or itinerary is accepted only if its fare meets or exceeds the sum of the bid prices of the capacity it consumes.'
tags:
  - air-shop
  - active
timestamp: '2026-06-17T00:00:00Z'
id: bid-price
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
relationships:
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: Booking Limit
  - type: related
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
sources:
  - org: INFORMS
    name: 'Talluri, van Ryzin, Karaesmen & Vulcano, ''Revenue Management: Models and Methods'', Proceedings of the 2009 Winter Simulation Conference'
    version: ''
    section: Bid-price control
    url: 'https://www.informs-sim.org/wsc09papers/013.pdf'
  - org: INFORMS / Management Science
    name: 'Talluri & van Ryzin, ''An Analysis of Bid-Price Controls for Network Revenue Management'', Management Science 44(11), 1998'
    version: ''
    section: ''
    url: 'https://pubsonline.informs.org/doi/10.1287/mnsc.44.11.1577'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="28" x2="40" y2="28" stroke-dasharray="3 3"/><path d="M14 36V24"/><path d="M24 36V18"/><path d="M34 36V28"/><path d="M11 22h6M21 16h6"/></svg>
---

> A bid price is a revenue-management control representing the minimum acceptable revenue (the opportunity cost, or marginal value, of the next seat) below which a booking request is rejected. A request to sell a seat or itinerary is accepted only if its fare meets or exceeds the sum of the bid prices of the capacity it consumes.

Bid-price control is an alternative to class-level booking limits: instead of counting seats per fare class, the system stores a threshold value per leg (or per unit of network capacity) and accepts any request whose fare clears the relevant threshold(s). In network/O&D revenue management, an itinerary spanning several legs must clear the sum of those legs' bid prices, so the same fare can be accepted on one routing and rejected on another depending on each leg's marginal value. Bid prices are recomputed as demand and remaining capacity change, typically derived from network optimization such as the duals of a deterministic or randomized linear program, or approximations of the dynamic program. They make a seat's acceptability depend on its contribution relative to displacement, rather than on a fixed class allocation as in single-leg protection-level methods like EMSR.

**한국어 / Korean** — **비드 프라이스 (Bid Price)** — Bid price는 다음 좌석의 기회비용(또는 한계 가치)을 나타내는 revenue management 통제값으로, 이 값 미만이면 예약 요청이 거절되는 최소 수용 가능 수익이다. 좌석이나 여정 판매 요청은 그 운임이 소비하는 좌석(capacity)의 bid price 합계 이상일 때만 수락된다.

Bid-price 통제는 클래스 단위 booking limit의 대안이다. 운임 클래스별 좌석을 세는 대신, 시스템은 leg(또는 네트워크 capacity 단위)별 임계값을 저장하고 운임이 해당 임계값(들)을 넘는 요청을 수락한다. 네트워크/O&D revenue management에서는 여러 leg에 걸친 여정이 그 leg들의 bid price 합계를 넘어야 하므로, 동일한 운임이라도 각 leg의 한계 가치에 따라 어떤 routing에서는 수락되고 다른 routing에서는 거절될 수 있다. bid price는 수요와 잔여 capacity가 변할 때 재계산되며, 보통 결정론적 또는 무작위화 선형계획법(LP)의 쌍대값이나 동적계획법 근사 같은 네트워크 최적화에서 도출된다. 이는 좌석의 수락 가능 여부를, EMSR 같은 단일 leg 보호수준 방식의 고정된 클래스 배분이 아니라 displacement 대비 기여도에 따라 결정하게 한다.

**Aliases:** `Bid-Price Control`, `Displacement Cost`, `Opportunity Cost Threshold`

# Related
- [Revenue Management](/air-shop/revenue-management.md) — broader
- [Booking Limit](/air-shop/booking-limit.md) — related
- [Protection Level](/air-shop/protection-level.md) — related
- [Origin & Destination Control (O&D Control)](/air-shop/origin-destination-control.md) — related
- [Availability](/air-shop/availability.md) — related

# Distinctions
- **Bid Price** vs [Booking Limit](/air-shop/booking-limit.md) — A booking limit caps the number of seats sellable in a class; a bid price is a value threshold a fare must beat. They are two interchangeable ways to express the same seat-allocation control, but bid-price control scales naturally to network/O&D decisions where class limits do not.
- **Bid Price** vs [Revenue Management](/air-shop/revenue-management.md) — Revenue Management is the overall discipline; the bid price is one specific control mechanism it uses to accept or reject bookings.

# Citations
[1] [INFORMS — Talluri, van Ryzin, Karaesmen & Vulcano, 'Revenue Management: Models and Methods', Proceedings of the 2009 Winter Simulation Conference — Bid-price control](https://www.informs-sim.org/wsc09papers/013.pdf)
[2] [INFORMS / Management Science — Talluri & van Ryzin, 'An Analysis of Bid-Price Controls for Network Revenue Management', Management Science 44(11), 1998](https://pubsonline.informs.org/doi/10.1287/mnsc.44.11.1577)
