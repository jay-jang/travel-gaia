---
type: Document
title: Conjunction Ticket
description: 'A conjunction ticket is a set of two or more tickets issued together and cross-referenced to a passenger, which together constitute a single contract of carriage. They are used when an itinerary requires more flight coupons than a single ticket can hold (traditionally a maximum of four coupons per ticket).'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: conjunction-ticket
vertical: air
category: air-ticket
conceptType: document
status: active
term_ko: Conjunction Ticket (연결 항공권)
definition_ko: 'Conjunction Ticket(연결 항공권)은 한 승객에게 함께 발행되어 상호 참조되는 둘 이상의 항공권 묶음으로, 이들이 합쳐져 하나의 운송 계약을 구성한다. 단일 항공권이 담을 수 있는 항공편 쿠폰 수(전통적으로 항공권당 최대 4매)를 초과하는 여정일 때 사용된다.'
longDef: 'Because a single airline ticket can carry only a limited number of flight coupons (historically four), an itinerary with more segments is documented across multiple tickets issued in conjunction with one another. These tickets are numbered consecutively and cross-referenced (each shows the others'' numbers) so that, although physically separate documents, they are treated as one ticket and one contract of carriage for fare, validity, and rule purposes. In e-ticketing the conjunction relationship is recorded in the ticket data so the linked coupons are processed, exchanged, and refunded together.'
longDef_ko: '단일 항공권은 제한된 수의 항공편 쿠폰(과거 기준 4매)만 담을 수 있으므로, 그보다 많은 구간을 가진 여정은 서로 연결(in conjunction)되어 발행된 여러 항공권에 걸쳐 기록된다. 이 항공권들은 연속 번호가 매겨지고 상호 참조(각 항공권에 다른 항공권의 번호가 표시)되어, 물리적으로는 별개 서류이지만 운임·유효기간·규정 목적상 하나의 항공권이자 하나의 운송 계약으로 취급된다. 전자 발권에서는 연결 관계가 항공권 데이터에 기록되어 연결된 쿠폰들이 함께 처리·교환·환불된다.'
standardBody: IATA
aliases:
  - Conjunction Tickets
  - Conjunctive Ticket
relationships:
  - type: broader
    targetTerm: E-ticket
  - type: child
    targetTerm: Flight Coupon
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Journey
  - type: related
    targetTerm: Fare Component
distinctions:
  - targetTerm: Flight Coupon
    explanation: 'A flight coupon is one segment-level portion of a single ticket; a conjunction ticket is a grouping of multiple whole tickets, used when an itinerary needs more coupons than one ticket can hold.'
    explanation_ko: 'Flight Coupon은 단일 항공권 내의 구간 단위 부분이고, conjunction ticket은 여러 항공권 전체를 묶은 것으로, 여정이 한 항공권에 담을 수 있는 쿠폰 수를 초과할 때 사용된다.'
sources:
  - org: IATA
    name: Ticketing Handbook
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
    tier: association
  - org: IATA
    name: Conditions of Contract and Other Important Notices
    version: ''
    section: ''
    url: 'https://www.iatatravelcentre.com/tickets.htm'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="13" width="22" height="15" rx="2"/><rect x="19" y="20" width="22" height="15" rx="2"/><path d="M24 20v8"/><path d="M13 20h5"/><path d="M30 27h5"/></svg>
---

> A conjunction ticket is a set of two or more tickets issued together and cross-referenced to a passenger, which together constitute a single contract of carriage. They are used when an itinerary requires more flight coupons than a single ticket can hold (traditionally a maximum of four coupons per ticket).

Because a single airline ticket can carry only a limited number of flight coupons (historically four), an itinerary with more segments is documented across multiple tickets issued in conjunction with one another. These tickets are numbered consecutively and cross-referenced (each shows the others' numbers) so that, although physically separate documents, they are treated as one ticket and one contract of carriage for fare, validity, and rule purposes. In e-ticketing the conjunction relationship is recorded in the ticket data so the linked coupons are processed, exchanged, and refunded together.

**한국어 / Korean** — **Conjunction Ticket (연결 항공권)** — Conjunction Ticket(연결 항공권)은 한 승객에게 함께 발행되어 상호 참조되는 둘 이상의 항공권 묶음으로, 이들이 합쳐져 하나의 운송 계약을 구성한다. 단일 항공권이 담을 수 있는 항공편 쿠폰 수(전통적으로 항공권당 최대 4매)를 초과하는 여정일 때 사용된다.

단일 항공권은 제한된 수의 항공편 쿠폰(과거 기준 4매)만 담을 수 있으므로, 그보다 많은 구간을 가진 여정은 서로 연결(in conjunction)되어 발행된 여러 항공권에 걸쳐 기록된다. 이 항공권들은 연속 번호가 매겨지고 상호 참조(각 항공권에 다른 항공권의 번호가 표시)되어, 물리적으로는 별개 서류이지만 운임·유효기간·규정 목적상 하나의 항공권이자 하나의 운송 계약으로 취급된다. 전자 발권에서는 연결 관계가 항공권 데이터에 기록되어 연결된 쿠폰들이 함께 처리·교환·환불된다.

**Aliases:** `Conjunction Tickets`, `Conjunctive Ticket`

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — broader
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — child
- [Reissue](/air/air-ticket/reissue.md) — related
- [Journey](/air/air-shop/journey.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related

# Distinctions
- **Conjunction Ticket** vs [Flight Coupon](/air/air-ticket/flight-coupon.md) — A flight coupon is one segment-level portion of a single ticket; a conjunction ticket is a grouping of multiple whole tickets, used when an itinerary needs more coupons than one ticket can hold.

# Citations
[1] [IATA — Ticketing Handbook](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
[2] [IATA — Conditions of Contract and Other Important Notices](https://www.iatatravelcentre.com/tickets.htm)
