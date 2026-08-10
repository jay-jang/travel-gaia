---
type: Business Term
title: Hidden-City Ticketing
description: 'A ticketing practice in which a passenger deliberately books a multi-segment itinerary and disembarks at an intermediate city rather than the stated final destination, because the multi-leg fare is cheaper than a direct or one-stop fare to the actual desired city. Airlines prohibit this in their Conditions of Carriage; it is not illegal but voids the ticket from that point onward and may result in frequent-flyer account suspension or legal action.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-08-10T00:00:00Z'
id: hidden-city-ticketing
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 히든 시티 티켓팅(Hidden-City Ticketing)
definition_ko: '승객이 실제 목적지로 가는 직항 또는 단순 경유 운임보다 가격이 저렴하다는 이유로, 의도적으로 해당 도시를 경유지로 포함하는 여정을 예약한 뒤 중간 기착지에서 내리는 발권 관행. 항공사 이용 약관(Conditions of Carriage)에서 금지하며, 불법은 아니지만 그 지점 이후의 항공권을 무효화하고 상용고객 계정 정지 또는 법적 조치로 이어질 수 있다.'
longDef: 'Hidden-city ticketing (also called ''point-beyond ticketing'') exploits yield-management pricing anomalies where a through-fare A→B→C is priced below the A→B direct fare, because the airline optimises revenue on the full route rather than the sub-segment. Platforms such as Skiplagged (US) algorithmically surface such fares. Airlines argue the practice causes seat inventory distortion, empty seats on the B→C leg, and baggage handling complications (checked bags always travel to C). In their Conditions of Carriage, airlines typically void all subsequent coupons and may seek to recover the fare difference; Lufthansa famously sued Skiplagged in 2015. The practice is only viable with carry-on luggage, one-way bookings (return tickets are typically cancelled if the outbound leg is missed), and no loyalty programme use. IATA does not endorse hidden-city ticketing; it conflicts with airline fare construction rules codified in the ATPCO tariff database.'
longDef_ko: '히든 시티 티켓팅(point-beyond ticketing이라고도 한다)은 수익 관리 가격 책정의 이상 현상을 이용한다. 항공사가 전체 노선 A→B→C 운임을 A→B 직항 운임보다 낮게 책정하는 것은, 세그먼트가 아닌 전체 노선 기준으로 수익을 최적화하기 때문이다. Skiplagged(미국) 같은 플랫폼이 알고리즘으로 이런 운임을 탐색해 제공한다. 항공사들은 이 관행이 좌석 재고 왜곡, B→C 구간 빈 좌석, 수하물 처리 복잡성(위탁 수하물은 항상 C로 간다)을 야기한다고 주장한다. 항공사 이용 약관은 통상 이후 쿠폰을 모두 무효로 하고 운임 차액 회수를 추구할 수 있으며, 루프트한자는 2015년 Skiplagged를 상대로 소송을 제기했다. 이 관행은 기내 수화물만 사용하고, 편도 예약이며(왕복 항공권은 출발편을 이용하지 않으면 대개 취소됨), 상용고객 프로그램을 사용하지 않는 경우에만 현실적으로 가능하다.'
aliases:
  - Point-Beyond Ticketing
  - Point-Beyond Booking
  - Skiplagging
relationships:
  - type: contrasts
    targetTerm: Open Jaw
  - type: contrasts
    targetTerm: Circle Trip
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: ATPCO
distinctions:
  - targetTerm: Open Jaw
    explanation: 'An open jaw is a legitimately priced itinerary where departure and return cities differ (e.g., fly into Paris, return from Rome), fully disclosed to and priced by the airline; hidden-city ticketing deliberately misrepresents the passenger''s true final destination to exploit a cheaper fare.'
    explanation_ko: '오픈 조(open jaw)는 출발지와 귀환지가 다른 정식 가격 책정 여정(예: 파리 도착, 로마 출발 귀환)으로 항공사에 완전히 공개되고 가격 책정된다. 히든 시티 티켓팅은 더 저렴한 운임을 이용하기 위해 승객의 실제 최종 목적지를 의도적으로 허위 표시한다.'
  - targetTerm: Circle Trip
    explanation: 'A circle trip is a legitimately constructed round-trip routing where outbound and inbound routes differ, priced transparently by the carrier; hidden-city ticketing is an undisclosed exploitation of intermediate pricing, not a valid fare construction.'
    explanation_ko: '서클 트립(circle trip)은 출발 및 귀환 경로가 다른 합법적으로 구성된 왕복 여정으로 항공사가 투명하게 가격 책정한다. 히든 시티 티켓팅은 유효한 운임 구성이 아닌 중간 구간 가격 책정의 비공개 이용이다.'
sources:
  - name: 'ATPCO — Fare Rules and Conditions of Carriage'
    org: ATPCO
    version: ''
    section: 'Rule Category 14 — Travel Restrictions'
    url: 'https://www.atpco.net/'
    tier: standard-body
  - name: 'IATA — Conditions of Carriage: Industry Guidance'
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/passenger/coc/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 38l10-18 10 10 10-14 6 8"/><circle cx="16" cy="20" r="3" fill="currentColor" stroke="none"/><path d="M12 38h8" stroke-width="1.5"/><circle cx="16" cy="38" r="2"/><line x1="16" y1="23" x2="16" y2="36" stroke-dasharray="3 3"/></svg>
---

> A ticketing practice in which a passenger deliberately books a multi-segment itinerary and disembarks at an intermediate city rather than the stated final destination, because the multi-leg fare is cheaper than a direct or one-stop fare to the actual desired city. Airlines prohibit this in their Conditions of Carriage.

Hidden-city ticketing (also called 'point-beyond ticketing') exploits yield-management pricing anomalies where a through-fare A→B→C is priced below the A→B direct fare, because the airline optimises revenue on the full route rather than the sub-segment. Platforms such as Skiplagged (US) algorithmically surface such fares. Airlines argue the practice causes seat inventory distortion, empty seats on the B→C leg, and baggage handling complications (checked bags always travel to C). In their Conditions of Carriage, airlines typically void all subsequent coupons and may seek to recover the fare difference; Lufthansa famously sued Skiplagged in 2015. The practice is only viable with carry-on luggage, one-way bookings, and no loyalty programme use.

**한국어 / Korean** — **히든 시티 티켓팅(Hidden-City Ticketing)** — 승객이 실제 목적지로 가는 직항 또는 단순 경유 운임보다 가격이 저렴하다는 이유로, 의도적으로 해당 도시를 경유지로 포함하는 여정을 예약한 뒤 중간 기착지에서 내리는 발권 관행. 항공사 이용 약관에서 금지하며, 불법은 아니지만 그 지점 이후의 항공권을 무효화하고 상용고객 계정 정지 또는 법적 조치로 이어질 수 있다.

히든 시티 티켓팅(point-beyond ticketing이라고도 한다)은 수익 관리 가격 책정의 이상 현상을 이용한다. Skiplagged(미국) 같은 플랫폼이 알고리즘으로 이런 운임을 탐색해 제공한다. 항공사들은 이 관행이 좌석 재고 왜곡, 빈 좌석, 수하물 처리 복잡성을 야기한다고 주장한다.

**Aliases:** `Point-Beyond Ticketing`, `Point-Beyond Booking`, `Skiplagging`

# Related
- [Open Jaw](/air/air-shop/open-jaw.md) — contrasts
- [Circle Trip](/air/air-shop/circle-trip.md) — contrasts
- [Fare Basis Code](/common/codes/fare-basis-code.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related

# Distinctions
- **Hidden-City Ticketing** vs [Open Jaw](/air/air-shop/open-jaw.md) — An open jaw is a legitimately priced itinerary where departure and return cities differ, fully disclosed to and priced by the airline; hidden-city ticketing deliberately misrepresents the passenger's true final destination to exploit a cheaper fare.
- **Hidden-City Ticketing** vs [Circle Trip](/air/air-shop/circle-trip.md) — A circle trip is a legitimately constructed round-trip routing where outbound and inbound routes differ, priced transparently by the carrier; hidden-city ticketing is an undisclosed exploitation of intermediate pricing, not a valid fare construction.

# Citations
[1] [ATPCO — Fare Rules and Conditions of Carriage — Rule Category 14 — Travel Restrictions](https://www.atpco.net/)
[2] [IATA — Conditions of Carriage: Industry Guidance](https://www.iata.org/en/programs/passenger/coc/)
