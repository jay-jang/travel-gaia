---
type: Standard Term
title: Booking Limit
description: 'A booking limit is the maximum number of seats a revenue-management system will sell in a given fare class or inventory bucket on a flight. It is the operational output of seat inventory control that, class by class, governs how many seats are released and therefore what availability a seller sees.'
tags:
  - air-shop
  - active
timestamp: '2026-06-17T00:00:00Z'
id: booking-limit
vertical: air
category: air-shop
conceptType: standard-term
status: active
term_ko: 예약 한도 (Booking Limit)
definition_ko: 'Booking limit(예약 한도)은 항공편의 특정 운임 클래스 또는 인벤토리 버킷에서 revenue management 시스템이 판매할 최대 좌석 수이다. 좌석 인벤토리 통제의 운영상 산출물로서, 클래스별로 몇 석을 풀지를 좌우하며 따라서 판매자가 보는 availability를 결정한다.'
longDef: 'Booking limits are typically nested: the limit for a lower-value class is constrained so that selling it does not consume seats protected for higher-value classes. In a standard nested structure the highest class can access the full cabin (or the relevant pool), while each lower class is capped at the cabin total minus the protection levels of the classes above it. As bookings accumulate and forecasts update, the revenue-management system raises or lowers these limits, opening and closing classes over time. A class is closed when its remaining booking limit reaches zero, which is what a seller experiences as that RBD showing no availability.'
longDef_ko: 'Booking limit은 일반적으로 nesting(네스팅)된다. 즉 낮은 가치 클래스의 한도는 그 클래스를 판매해도 상위 가치 클래스를 위해 protect된 좌석을 소비하지 않도록 제약된다. 표준 nested 구조에서 최상위 클래스는 전체 객실(또는 해당 풀)에 접근할 수 있는 반면, 각 하위 클래스는 객실 총량에서 상위 클래스들의 protection level을 뺀 값으로 제한된다. 예약이 누적되고 예측이 갱신되면 revenue management 시스템은 이 한도를 올리거나 내려 시간에 따라 클래스를 열고 닫는다. 잔여 booking limit이 0에 도달하면 클래스가 닫히며, 이는 판매자에게 해당 RBD에 availability가 없는 것으로 나타난다.'
aliases:
  - Booking Limits
  - Authorization Level
  - AU
relationships:
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: Protection Level
  - type: related
    targetTerm: Bid Price
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: RBD
distinctions:
  - targetTerm: Protection Level
    explanation: 'A protection level is the number of seats reserved for higher-value classes; a booking limit is the maximum a class may sell. In a nested two-class scheme they are complementary: the lower class''s booking limit equals capacity minus the higher class''s protection level.'
    explanation_ko: 'Protection level은 상위 가치 클래스를 위해 예약(reserve)되는 좌석 수이고, booking limit은 한 클래스가 판매할 수 있는 최대치이다. nested 2클래스 구조에서는 상호 보완적이어서, 하위 클래스의 booking limit은 capacity에서 상위 클래스의 protection level을 뺀 값과 같다.'
  - targetTerm: Availability
    explanation: Availability is what the seller sees per class at query time; the booking limit is the internal control whose remaining headroom produces that availability.
    explanation_ko: 'Availability는 조회 시점에 판매자가 클래스별로 보는 값이고, booking limit은 그 잔여 여유분이 해당 availability를 만들어내는 내부 통제값이다.'
sources:
  - org: MIT OpenCourseWare
    name: '16.75J Airline Management - Introduction to Revenue Management (MIT ICAT, Belobaba)'
    version: ''
    section: Booking limits and nested seat inventory control
    url: 'https://ocw.mit.edu/courses/16-75j-airline-management-spring-2006/2e0689d14860f52fbd0ea84a07d48048_lect18.pdf'
  - org: SSRN
    name: 'Nesting Booking Limits in Revenue Management: The Good, the Bad and the Ugly (Jean Michel Chapuis, 2008)'
    version: ''
    section: ''
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1124707'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="12" width="28" height="24" rx="3"/><line x1="10" y1="27" x2="38" y2="27"/><path d="M14 31h4M22 31h4M30 31h4"/><path d="M15 19l3 3 6-6"/></svg>
---

> A booking limit is the maximum number of seats a revenue-management system will sell in a given fare class or inventory bucket on a flight. It is the operational output of seat inventory control that, class by class, governs how many seats are released and therefore what availability a seller sees.

Booking limits are typically nested: the limit for a lower-value class is constrained so that selling it does not consume seats protected for higher-value classes. In a standard nested structure the highest class can access the full cabin (or the relevant pool), while each lower class is capped at the cabin total minus the protection levels of the classes above it. As bookings accumulate and forecasts update, the revenue-management system raises or lowers these limits, opening and closing classes over time. A class is closed when its remaining booking limit reaches zero, which is what a seller experiences as that RBD showing no availability.

**한국어 / Korean** — **예약 한도 (Booking Limit)** — Booking limit(예약 한도)은 항공편의 특정 운임 클래스 또는 인벤토리 버킷에서 revenue management 시스템이 판매할 최대 좌석 수이다. 좌석 인벤토리 통제의 운영상 산출물로서, 클래스별로 몇 석을 풀지를 좌우하며 따라서 판매자가 보는 availability를 결정한다.

Booking limit은 일반적으로 nesting(네스팅)된다. 즉 낮은 가치 클래스의 한도는 그 클래스를 판매해도 상위 가치 클래스를 위해 protect된 좌석을 소비하지 않도록 제약된다. 표준 nested 구조에서 최상위 클래스는 전체 객실(또는 해당 풀)에 접근할 수 있는 반면, 각 하위 클래스는 객실 총량에서 상위 클래스들의 protection level을 뺀 값으로 제한된다. 예약이 누적되고 예측이 갱신되면 revenue management 시스템은 이 한도를 올리거나 내려 시간에 따라 클래스를 열고 닫는다. 잔여 booking limit이 0에 도달하면 클래스가 닫히며, 이는 판매자에게 해당 RBD에 availability가 없는 것으로 나타난다.

**Aliases:** `Booking Limits`, `Authorization Level`, `AU`

# Related
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [Protection Level](/air/air-shop/protection-level.md) — related
- [Bid Price](/air/air-shop/bid-price.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [RBD](/air/air-shop/rbd.md) — related

# Distinctions
- **Booking Limit** vs [Protection Level](/air/air-shop/protection-level.md) — A protection level is the number of seats reserved for higher-value classes; a booking limit is the maximum a class may sell. In a nested two-class scheme they are complementary: the lower class's booking limit equals capacity minus the higher class's protection level.
- **Booking Limit** vs [Availability](/air/air-shop/availability.md) — Availability is what the seller sees per class at query time; the booking limit is the internal control whose remaining headroom produces that availability.

# Citations
[1] [MIT OpenCourseWare — 16.75J Airline Management - Introduction to Revenue Management (MIT ICAT, Belobaba) — Booking limits and nested seat inventory control](https://ocw.mit.edu/courses/16-75j-airline-management-spring-2006/2e0689d14860f52fbd0ea84a07d48048_lect18.pdf)
[2] [SSRN — Nesting Booking Limits in Revenue Management: The Good, the Bad and the Ugly (Jean Michel Chapuis, 2008)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1124707)
