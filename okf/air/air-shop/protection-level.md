---
type: Standard Term
title: Protection Level
description: 'A protection level is the number of seats a revenue-management system reserves (protects) for higher-value fare classes so they are not sold to lower-value demand that books earlier. It is the seat-inventory-control quantity that, in a nested structure, is the complement of the booking limit.'
tags:
  - air-shop
  - active
timestamp: '2026-06-17T00:00:00Z'
id: protection-level
vertical: air
category: air-shop
conceptType: standard-term
status: active
term_ko: 보호 좌석 수 (Protection Level)
definition_ko: Protection level(보호 좌석 수)은 더 일찍 예약하는 낮은 가치 수요에 판매되지 않도록 revenue management 시스템이 상위 가치 운임 클래스를 위해 예약(protect)하는 좌석 수이다. nested 구조에서 booking limit의 보완 개념이 되는 좌석 인벤토리 통제 수량이다.
longDef: 'Protection levels answer how many seats to hold back for future, higher-yielding bookings. In a two-class example, protecting p seats for the higher class means the lower class may sell at most capacity minus p. With more classes, nested protection levels are computed cumulatively for each class and all higher classes. The classic method for setting them is Littlewood''s rule for two classes, generalized by Expected Marginal Seat Revenue (EMSR and EMSRb, Belobaba), which protect a seat for a higher class whenever its fare times the probability of selling it exceeds the lower fare. Protection levels are recalculated as demand forecasts and remaining capacity evolve, and they drive the class open/close behavior a seller observes as availability.'
longDef_ko: 'Protection level은 향후의 더 높은 수익 예약을 위해 좌석을 얼마나 남겨둘지를 결정한다. 2클래스 예에서 상위 클래스에 p석을 protect하면 하위 클래스는 최대 capacity에서 p를 뺀 만큼 판매할 수 있다. 클래스가 여러 개이면 각 클래스와 그 상위 클래스들에 대해 nested protection level이 누적적으로 계산된다. 이를 설정하는 고전적 방법은 2클래스에 대한 Littlewood''s rule이며, EMSR 및 EMSRb(Belobaba)로 일반화되어, 상위 클래스 운임에 판매 확률을 곱한 값이 하위 운임을 초과할 때마다 좌석을 상위 클래스에 protect한다. protection level은 수요 예측과 잔여 capacity가 변할 때 재계산되며, 판매자가 availability로 관찰하는 클래스의 open/close 동작을 구동한다.'
aliases:
  - Protection Levels
  - Protected Seats
  - Seat Protection
relationships:
  - type: broader
    targetTerm: Revenue Management
  - type: contrasts
    targetTerm: Booking Limit
  - type: contrasts
    targetTerm: Bid Price
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: RBD
distinctions:
  - targetTerm: Booking Limit
    explanation: 'A protection level reserves seats for higher classes; a booking limit caps what a class may sell. They are two sides of the same nested control: lower-class booking limit = capacity minus the higher classes'' protection level.'
    explanation_ko: 'Protection level은 상위 클래스를 위해 좌석을 예약하고, booking limit은 한 클래스의 판매 상한을 정한다. 동일한 nested 통제의 양면으로, 하위 클래스 booking limit = capacity − 상위 클래스들의 protection level이다.'
  - targetTerm: Overbooking
    explanation: Protection levels allocate real capacity among fare classes; overbooking authorizes selling beyond physical capacity to offset no-shows. They are distinct RM controls that operate together.
    explanation_ko: 'Protection level은 실제 capacity를 운임 클래스 간에 배분하고, overbooking은 no-show를 상쇄하기 위해 물리적 capacity를 넘는 판매를 승인한다. 함께 작동하는 별개의 RM 통제이다.'
  - targetTerm: Expected Marginal Seat Revenue (EMSR)
    explanation: 'A protection level is the quantity of seats reserved for higher classes; EMSR is the computational method that calculates that quantity. EMSR produces protection levels (and hence booking limits), it is not itself the reservation.'
    explanation_ko: 'Protection level은 상위 클래스를 위해 예약된 좌석의 수량이고, EMSR은 그 수량을 산출하는 계산 방법이다. EMSR은 protection level(따라서 booking limit)을 만들어내는 것이지, 그 자체가 예약은 아니다.'
  - targetTerm: Spill and Spoilage
    explanation: A protection level is the control quantity that is set; spill and spoilage are the realized error outcomes of having set it too low (spill of high-yield demand) or too high (spoilage of empty seats).
    explanation_ko: 'Protection level은 설정되는 통제 수량이고, spill과 spoilage는 그것을 너무 낮게(고수익 수요의 spill) 또는 너무 높게(빈 좌석의 spoilage) 설정한 데서 실현되는 오류 결과이다.'
sources:
  - org: MIT
    name: Airline Revenue Management I (protection levels and EMSR)
    version: ''
    section: EMSR / protection levels
    url: 'https://ocw.mit.edu/courses/16-75j-airline-management-spring-2006/'
    tier: secondary
  - org: INFORMS
    name: 'Revenue Management: Models and Methods'
    version: ''
    section: Protection levels
    url: 'https://www.informs-sim.org/wsc09papers/013.pdf'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6l14 6v9c0 9-6 15-14 19-8-4-14-10-14-19v-9z"/><rect x="19" y="20" width="10" height="8" rx="1.5"/><path d="M21 20v-3a3 3 0 016 0v3"/></svg>
---

> A protection level is the number of seats a revenue-management system reserves (protects) for higher-value fare classes so they are not sold to lower-value demand that books earlier. It is the seat-inventory-control quantity that, in a nested structure, is the complement of the booking limit.

Protection levels answer how many seats to hold back for future, higher-yielding bookings. In a two-class example, protecting p seats for the higher class means the lower class may sell at most capacity minus p. With more classes, nested protection levels are computed cumulatively for each class and all higher classes. The classic method for setting them is Littlewood's rule for two classes, generalized by Expected Marginal Seat Revenue (EMSR and EMSRb, Belobaba), which protect a seat for a higher class whenever its fare times the probability of selling it exceeds the lower fare. Protection levels are recalculated as demand forecasts and remaining capacity evolve, and they drive the class open/close behavior a seller observes as availability.

**한국어 / Korean** — **보호 좌석 수 (Protection Level)** — Protection level(보호 좌석 수)은 더 일찍 예약하는 낮은 가치 수요에 판매되지 않도록 revenue management 시스템이 상위 가치 운임 클래스를 위해 예약(protect)하는 좌석 수이다. nested 구조에서 booking limit의 보완 개념이 되는 좌석 인벤토리 통제 수량이다.

Protection level은 향후의 더 높은 수익 예약을 위해 좌석을 얼마나 남겨둘지를 결정한다. 2클래스 예에서 상위 클래스에 p석을 protect하면 하위 클래스는 최대 capacity에서 p를 뺀 만큼 판매할 수 있다. 클래스가 여러 개이면 각 클래스와 그 상위 클래스들에 대해 nested protection level이 누적적으로 계산된다. 이를 설정하는 고전적 방법은 2클래스에 대한 Littlewood's rule이며, EMSR 및 EMSRb(Belobaba)로 일반화되어, 상위 클래스 운임에 판매 확률을 곱한 값이 하위 운임을 초과할 때마다 좌석을 상위 클래스에 protect한다. protection level은 수요 예측과 잔여 capacity가 변할 때 재계산되며, 판매자가 availability로 관찰하는 클래스의 open/close 동작을 구동한다.

**Aliases:** `Protection Levels`, `Protected Seats`, `Seat Protection`

# Related
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [Booking Limit](/air/air-shop/booking-limit.md) — contrasts
- [Bid Price](/air/air-shop/bid-price.md) — contrasts
- [Availability](/air/air-shop/availability.md) — related
- [RBD](/air/air-shop/rbd.md) — related

# Distinctions
- **Protection Level** vs [Booking Limit](/air/air-shop/booking-limit.md) — A protection level reserves seats for higher classes; a booking limit caps what a class may sell. They are two sides of the same nested control: lower-class booking limit = capacity minus the higher classes' protection level.
- **Protection Level** vs [Overbooking](/air/air-shop/overbooking.md) — Protection levels allocate real capacity among fare classes; overbooking authorizes selling beyond physical capacity to offset no-shows. They are distinct RM controls that operate together.
- **Protection Level** vs [Expected Marginal Seat Revenue (EMSR)](/air/air-shop/expected-marginal-seat-revenue.md) — A protection level is the quantity of seats reserved for higher classes; EMSR is the computational method that calculates that quantity. EMSR produces protection levels (and hence booking limits), it is not itself the reservation.
- **Protection Level** vs [Spill and Spoilage](/air/air-shop/spill-and-spoilage.md) — A protection level is the control quantity that is set; spill and spoilage are the realized error outcomes of having set it too low (spill of high-yield demand) or too high (spoilage of empty seats).

# Citations
[1] [MIT — Airline Revenue Management I (protection levels and EMSR) — EMSR / protection levels](https://ocw.mit.edu/courses/16-75j-airline-management-spring-2006/)
[2] [INFORMS — Revenue Management: Models and Methods — Protection levels](https://www.informs-sim.org/wsc09papers/013.pdf)
