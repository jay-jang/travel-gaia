---
type: Business Term
title: Hidden City Ticketing
description: 'A fare-construction practice in which a traveler intentionally books a ticket to a destination beyond their actual intended destination, planning to disembark at an intermediate stop or connection point (the ''hidden city''). The through-fare to the further destination is sometimes lower than the point-to-point fare directly to the connection, creating a price arbitrage that carriers prohibit under their conditions of carriage.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-07-18T00:00:00Z'
id: hidden-city-ticketing
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 숨겨진 도시 발권(Hidden City Ticketing)
definition_ko: '여행자가 실제 목적지보다 더 먼 도착지로 항공권을 예약한 뒤, 중간 환승 지점(''숨겨진 도시'')에서 하기하는 운임 조합 관행. 더 먼 목적지로 가는 통과 운임이 환승지까지의 직접 편도 운임보다 저렴한 경우가 있어 가격 차익이 발생하며, 항공사는 운송 약관으로 이를 금지한다.'
longDef: 'Hidden city ticketing exploits a structural price anomaly where the lowest available fare between two cities routes through a third city at a lower price than the direct fare to that intermediate city. The traveler disembarks at the connection and abandons the remaining coupon. Carriers prohibit the practice through their general conditions of carriage because it misrepresents the traveler''s actual routing, potentially strands other passengers in waitlist queues, and undermines the revenue management model that prices each route independently. Checked baggage is typically routed to the final destination, so hidden city ticketing is only practical with carry-on luggage only. Carriers have pursued legal remedies against systematic commercial facilitation of the practice (e.g. Skiplagged.com). The practice is related to, but distinct from, back-to-back ticketing (buying two one-way tickets to exploit a change-of-direction discount).'
longDef_ko: '숨겨진 도시 발권은 두 도시 간 최저 운임이 제3의 도시를 경유하는 루트에서 형성되며, 이 경유지까지의 직접 운임보다 낮은 가격 이상 현상을 이용하는 것이다. 여행자는 환승지에서 하기한 뒤 나머지 탑승권을 포기한다. 항공사는 일반 운송 약관으로 이를 금지하는데, 이 관행이 여행자의 실제 루트를 잘못 표시하고, 대기자 명단의 다른 승객에게 불이익을 줄 수 있으며, 각 노선을 독립적으로 가격 책정하는 수익 관리 모델을 훼손하기 때문이다. 위탁 수하물은 일반적으로 최종 목적지로 수송되므로, 숨겨진 도시 발권은 기내 반입 수하물만 있을 때만 실용적이다. 항공사는 이러한 관행의 체계적 상업적 조장(예: Skiplagged.com)에 대해 법적 조치를 취한 바 있다. 이 관행은 왕복 할인 혜택을 이용하기 위해 단방향 항공권 두 장을 구매하는 back-to-back 발권과 관련은 있으나 구별된다.'
standardBody: ATPCO
aliases:
  - Skiplagging
  - Point-Beyond Ticketing
  - Throwaway Ticketing
relationships:
  - type: related
    targetTerm: Routing
  - type: related
    targetTerm: Stopover
  - type: related
    targetTerm: Through Fare
  - type: related
    targetTerm: Fare Basis Code
distinctions:
  - targetTerm: Through Fare
    explanation: 'A through fare is a legitimately priced fare for the full routing including all intermediate stops; hidden city ticketing exploits the price differential of a through fare by abandoning the second coupon at the intermediate point.'
    explanation_ko: '통과 운임은 모든 중간 기착을 포함한 전체 루트에 대해 정당하게 책정된 운임이고, 숨겨진 도시 발권은 중간 지점에서 두 번째 탑승권을 포기함으로써 통과 운임의 가격 차이를 이용하는 것이다.'
  - targetTerm: Open Jaw
    explanation: 'An open jaw is an itinerary where the return journey begins from a city different from the outbound destination, or ends at a city different from the outbound origin — a legitimate and carrier-permitted booking pattern. Hidden city ticketing involves intentionally not flying a ticketed segment without carrier authorisation.'
    explanation_ko: '오픈 조는 귀국 여정이 왕복 목적지가 아닌 다른 도시에서 시작하거나, 출발지가 아닌 다른 도시에서 끝나는 여정으로, 정당하고 항공사가 허용하는 예약 패턴이다. 숨겨진 도시 발권은 항공사 승인 없이 발권된 구간을 의도적으로 탑승하지 않는 것이다.'
  - targetTerm: Split Ticketing
    explanation: 'Split ticketing combines two or more separately purchased tickets for a single journey to obtain a lower total fare; it is legal though sometimes restricted by fare rules. Hidden city ticketing purchases a single through-ticket and intentionally disembarks at an intermediate stop, violating conditions of carriage.'
    explanation_ko: '분할 발권은 단일 여정에 대해 별도로 구매한 두 장 이상의 항공권을 조합해 총 운임을 낮추는 것으로, 때로 운임 규정에 의해 제한되지만 합법적이다. 숨겨진 도시 발권은 단일 통과 항공권을 구매하고 중간 기착지에서 의도적으로 하기하여 운송 약관을 위반하는 것이다.'
sources:
  - name: 'ATPCO Fare Filing — General Booking Rules and Carrier Conditions of Carriage (prohibit intentional no-fly of a segment)'
    org: ATPCO
    version: ''
    section: ''
    url: 'https://www.atpco.net/'
    tier: association
  - name: 'IATA Conditions of Carriage for International Passenger Services — Clause on passengers travelling on connecting flights'
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/passenger/conditions-of-carriage/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="36" r="3"/><circle cx="36" cy="12" r="3"/><circle cx="24" cy="24" r="3"/><path d="M14.5 34 22 26"/><path d="M26 22 33.5 14.5"/><path d="M12 33V20"/><path d="M12 20h24"/><path d="M36 20v-5"/></svg>
---

> A fare-construction practice in which a traveler intentionally books a ticket to a destination beyond their actual intended destination, planning to disembark at an intermediate stop or connection point (the 'hidden city'). The through-fare to the further destination is sometimes lower than the point-to-point fare directly to the connection, creating a price arbitrage that carriers prohibit under their conditions of carriage.

Hidden city ticketing exploits a structural price anomaly where the lowest available fare between two cities routes through a third city at a lower price than the direct fare to that intermediate city. The traveler disembarks at the connection and abandons the remaining coupon. Carriers prohibit the practice through their general conditions of carriage because it misrepresents the traveler's actual routing, potentially strands other passengers in waitlist queues, and undermines the revenue management model that prices each route independently. Checked baggage is typically routed to the final destination, so hidden city ticketing is only practical with carry-on luggage only. Carriers have pursued legal remedies against systematic commercial facilitation of the practice (e.g. Skiplagged.com). The practice is related to, but distinct from, back-to-back ticketing (buying two one-way tickets to exploit a change-of-direction discount).

**한국어 / Korean** — **숨겨진 도시 발권(Hidden City Ticketing)** — 여행자가 실제 목적지보다 더 먼 도착지로 항공권을 예약한 뒤, 중간 환승 지점('숨겨진 도시')에서 하기하는 운임 조합 관행. 더 먼 목적지로 가는 통과 운임이 환승지까지의 직접 편도 운임보다 저렴한 경우가 있어 가격 차익이 발생하며, 항공사는 운송 약관으로 이를 금지한다.

숨겨진 도시 발권은 두 도시 간 최저 운임이 제3의 도시를 경유하는 루트에서 형성되며, 이 경유지까지의 직접 운임보다 낮은 가격 이상 현상을 이용하는 것이다. 여행자는 환승지에서 하기한 뒤 나머지 탑승권을 포기한다. 항공사는 일반 운송 약관으로 이를 금지하는데, 이 관행이 여행자의 실제 루트를 잘못 표시하고, 대기자 명단의 다른 승객에게 불이익을 줄 수 있으며, 각 노선을 독립적으로 가격 책정하는 수익 관리 모델을 훼손하기 때문이다. 위탁 수하물은 일반적으로 최종 목적지로 수송되므로, 숨겨진 도시 발권은 기내 반입 수하물만 있을 때만 실용적이다. 항공사는 이러한 관행의 체계적 상업적 조장(예: Skiplagged.com)에 대해 법적 조치를 취한 바 있다.

**Aliases:** `Skiplagging`, `Point-Beyond Ticketing`, `Throwaway Ticketing`

# Related
- [Routing](/air/air-shop/routing.md) — related
- [Stopover](/air/air-shop/stopover.md) — related
- [Through Fare](/air/air-partner/through-fare.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related

# Distinctions
- **Hidden City Ticketing** vs [Through Fare](/air/air-partner/through-fare.md) — A through fare is a legitimately priced fare for the full routing including all intermediate stops; hidden city ticketing exploits the price differential of a through fare by abandoning the second coupon at the intermediate point.
- **Hidden City Ticketing** vs [Open Jaw](/air/air-shop/open-jaw.md) — An open jaw is an itinerary where the return journey begins from a city different from the outbound destination, or ends at a city different from the outbound origin — a legitimate and carrier-permitted booking pattern. Hidden city ticketing involves intentionally not flying a ticketed segment without carrier authorisation.
- **Hidden City Ticketing** vs [Split Ticketing](/ground/rail/split-ticketing.md) — Split ticketing combines two or more separately purchased tickets for a single journey to obtain a lower total fare; it is legal though sometimes restricted by fare rules. Hidden city ticketing purchases a single through-ticket and intentionally disembarks at an intermediate stop, violating conditions of carriage.

# Citations
[1] [ATPCO — ATPCO Fare Filing — General Booking Rules and Carrier Conditions of Carriage (prohibit intentional no-fly of a segment)](https://www.atpco.net/)
[2] [IATA — IATA Conditions of Carriage for International Passenger Services — Clause on passengers travelling on connecting flights](https://www.iata.org/en/programs/passenger/conditions-of-carriage/)
