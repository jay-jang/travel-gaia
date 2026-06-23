---
type: Business Term
title: Overbooking
description: 'Overbooking is the deliberate practice of selling more seats on a flight than the aircraft physically has, to offset expected no-shows and cancellations and maximize load factor and revenue. When more passengers show up than there are seats, the carrier must deny boarding, usually offering compensation or rebooking.'
tags:
  - air-shop
  - active
timestamp: '2026-06-17T00:00:00Z'
id: overbooking
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 초과 예약 (오버부킹)
definition_ko: 'Overbooking(초과 예약)은 예상되는 노쇼(no-show)와 취소를 상쇄하고 탑승률과 수익을 극대화하기 위해, 항공기가 물리적으로 보유한 좌석보다 더 많은 좌석을 의도적으로 판매하는 관행이다. 좌석 수보다 많은 승객이 나타나면 항공사는 탑승을 거부해야 하며, 보통 보상이나 재예약을 제공한다.'
longDef: 'Revenue management systems set overbooking levels per flight and class using forecasts of no-show and cancellation rates, balancing the cost of spoiled (empty) seats against the cost of denied boarding. Overbooking directly affects availability, since authorized booking levels can exceed physical capacity. Denied boarding that results from oversell is regulated in many jurisdictions (for example US DOT oversales rules and EU air passenger rights regulation), which mandate compensation and care, and it often triggers involuntary rebooking and IROPS-style handling.'
longDef_ko: '수익 관리 시스템은 노쇼 및 취소율 예측을 사용해 항공편 및 등급별 초과 예약 수준을 설정하며, 빈 좌석(spoiled seat) 비용과 탑승 거부 비용 사이의 균형을 맞춘다. 승인된 예약 수준이 물리적 수용 능력을 초과할 수 있으므로, Overbooking은 가용성에 직접적인 영향을 미친다. 초과 판매로 인한 탑승 거부는 여러 관할권에서 규제되며(예: 미국 DOT 초과 판매 규정 및 EU 항공 승객 권리 규정), 이들 규정은 보상과 편의 제공을 의무화한다. 또한 이는 흔히 비자발적 재예약과 IROPS 방식의 처리를 유발한다.'
aliases:
  - Oversell
  - Overselling
relationships:
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Involuntary Reissue
  - type: related
    targetTerm: IROPS
  - type: related
    targetTerm: RBD
distinctions:
  - targetTerm: Availability
    explanation: Availability is the seats currently sellable; overbooking is the policy that can push that count above physical capacity.
    explanation_ko: '가용성은 현재 판매 가능한 좌석이고, 초과 예약은 그 수를 물리적 수용 능력 이상으로 끌어올릴 수 있는 정책이다.'
  - targetTerm: Free Sale
    explanation: Free sale lets a seller book without real-time confirmation; overbooking is the carrier intentionally selling beyond capacity.
    explanation_ko: '프리세일(free sale)은 판매자가 실시간 확인 없이 예약할 수 있게 하는 것이고, 초과 예약은 항공사가 수용 능력을 넘어 의도적으로 판매하는 것이다.'
  - targetTerm: Involuntary Denied Boarding
    explanation: Overbooking is the revenue-management practice of selling more seats than exist; IDB is the regulated event that may follow when overbooking results in an oversale at the gate.
    explanation_ko: 'Overbooking은 실제 좌석보다 많이 판매하는 수익 관리 관행이고, IDB는 overbooking이 게이트에서 초과 판매로 이어질 때 발생할 수 있는 규제된 사건이다.'
  - targetTerm: No-Show
    explanation: Overbooking is the deliberate practice of selling more rooms than available to offset expected no-shows and cancellations; no-show is one of the underlying events that overbooking is calibrated against.
    explanation_ko: 'Overbooking은 예상 노쇼·취소를 상쇄하기 위해 가용 객실보다 많이 판매하는 의도적 관행이고, 노쇼는 overbooking이 보정 기준으로 삼는 기저 사건 중 하나다.'
  - targetTerm: Protection Level
    explanation: Protection levels allocate real capacity among fare classes; overbooking authorizes selling beyond physical capacity to offset no-shows. They are distinct RM controls that operate together.
    explanation_ko: 'Protection level은 실제 capacity를 운임 클래스 간에 배분하고, overbooking은 no-show를 상쇄하기 위해 물리적 capacity를 넘는 판매를 승인한다. 함께 작동하는 별개의 RM 통제이다.'
  - targetTerm: Spill and Spoilage
    explanation: 'Spoilage is empty seats from over-protecting or under-selling against real capacity; overbooking is the deliberate authorization to sell beyond physical capacity to offset no-shows and thereby reduce spoilage. Overbooking is a control that combats spoilage, not a synonym for it.'
    explanation_ko: 'Spoilage는 실제 capacity 대비 과보호나 과소 판매로 생기는 빈 좌석이고, overbooking은 no-show를 상쇄하여 spoilage를 줄이기 위해 물리적 capacity를 넘겨 판매하도록 의도적으로 승인하는 것이다. Overbooking은 spoilage에 대응하는 통제 수단이지 그 동의어가 아니다.'
  - targetTerm: Waitlist
    explanation: 'Overbooking is the carrier deliberately confirming more bookings than seats to offset no-shows; a Waitlist holds unconfirmed requests awaiting space. Waitlisted passengers are not confirmed, whereas overbooked passengers hold confirmed status that may exceed capacity.'
    explanation_ko: 'Overbooking은 no-show를 상쇄하려 좌석보다 많은 예약을 의도적으로 확약하는 것이고, Waitlist는 좌석을 기다리는 미확약 요청을 보유하는 것이다. waitlist 승객은 미확약 상태인 반면 overbooking 승객은 정원을 초과할 수 있는 확약 상태를 보유한다.'
sources:
  - name: Airline revenue management literature on overbooking and denied boarding
    org: ''
    version: ''
    section: ''
    url: ''
    tier: secondary
  - name: US DOT oversales / denied boarding compensation rules
    org: US DOT
    version: ''
    section: ''
    url: 'https://www.transportation.gov/individuals/aviation-consumer-protection/bumping-oversales'
    tier: regulator-guidance
  - name: EU air passenger rights regulation (denied boarding compensation)
    org: European Union
    version: ''
    section: ''
    url: 'https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng'
    tier: regulation
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="15" r="5"/><path d="M8 34v-2a8 8 0 0116 0v2z"/><circle cx="33" cy="17" r="4"/><path d="M27 34v-1a6 6 0 0112 0v1z"/></svg>
---

> Overbooking is the deliberate practice of selling more seats on a flight than the aircraft physically has, to offset expected no-shows and cancellations and maximize load factor and revenue. When more passengers show up than there are seats, the carrier must deny boarding, usually offering compensation or rebooking.

Revenue management systems set overbooking levels per flight and class using forecasts of no-show and cancellation rates, balancing the cost of spoiled (empty) seats against the cost of denied boarding. Overbooking directly affects availability, since authorized booking levels can exceed physical capacity. Denied boarding that results from oversell is regulated in many jurisdictions (for example US DOT oversales rules and EU air passenger rights regulation), which mandate compensation and care, and it often triggers involuntary rebooking and IROPS-style handling.

**한국어 / Korean** — **초과 예약 (오버부킹)** — Overbooking(초과 예약)은 예상되는 노쇼(no-show)와 취소를 상쇄하고 탑승률과 수익을 극대화하기 위해, 항공기가 물리적으로 보유한 좌석보다 더 많은 좌석을 의도적으로 판매하는 관행이다. 좌석 수보다 많은 승객이 나타나면 항공사는 탑승을 거부해야 하며, 보통 보상이나 재예약을 제공한다.

수익 관리 시스템은 노쇼 및 취소율 예측을 사용해 항공편 및 등급별 초과 예약 수준을 설정하며, 빈 좌석(spoiled seat) 비용과 탑승 거부 비용 사이의 균형을 맞춘다. 승인된 예약 수준이 물리적 수용 능력을 초과할 수 있으므로, Overbooking은 가용성에 직접적인 영향을 미친다. 초과 판매로 인한 탑승 거부는 여러 관할권에서 규제되며(예: 미국 DOT 초과 판매 규정 및 EU 항공 승객 권리 규정), 이들 규정은 보상과 편의 제공을 의무화한다. 또한 이는 흔히 비자발적 재예약과 IROPS 방식의 처리를 유발한다.

**Aliases:** `Oversell`, `Overselling`

# Related
- [Availability](/air/air-shop/availability.md) — related
- [Involuntary Reissue](/air/air-ticket/involuntary-reissue.md) — related
- [IROPS](/air/air-partner/irops.md) — related
- [RBD](/air/air-shop/rbd.md) — related

# Distinctions
- **Overbooking** vs [Availability](/air/air-shop/availability.md) — Availability is the seats currently sellable; overbooking is the policy that can push that count above physical capacity.
- **Overbooking** vs [Free Sale](/lodging/hotel-dist/free-sale.md) — Free sale lets a seller book without real-time confirmation; overbooking is the carrier intentionally selling beyond capacity.
- **Overbooking** vs [Involuntary Denied Boarding](/common/disruption/involuntary-denied-boarding.md) — Overbooking is the revenue-management practice of selling more seats than exist; IDB is the regulated event that may follow when overbooking results in an oversale at the gate.
- **Overbooking** vs [No-Show](/lodging/hotel-dist/no-show.md) — Overbooking is the deliberate practice of selling more rooms than available to offset expected no-shows and cancellations; no-show is one of the underlying events that overbooking is calibrated against.
- **Overbooking** vs [Protection Level](/air/air-shop/protection-level.md) — Protection levels allocate real capacity among fare classes; overbooking authorizes selling beyond physical capacity to offset no-shows. They are distinct RM controls that operate together.
- **Overbooking** vs [Spill and Spoilage](/air/air-shop/spill-and-spoilage.md) — Spoilage is empty seats from over-protecting or under-selling against real capacity; overbooking is the deliberate authorization to sell beyond physical capacity to offset no-shows and thereby reduce spoilage. Overbooking is a control that combats spoilage, not a synonym for it.
- **Overbooking** vs [Waitlist](/air/air-ops/waitlist.md) — Overbooking is the carrier deliberately confirming more bookings than seats to offset no-shows; a Waitlist holds unconfirmed requests awaiting space. Waitlisted passengers are not confirmed, whereas overbooked passengers hold confirmed status that may exceed capacity.

# Citations
[1] Airline revenue management literature on overbooking and denied boarding
[2] [US DOT — US DOT oversales / denied boarding compensation rules](https://www.transportation.gov/individuals/aviation-consumer-protection/bumping-oversales)
[3] [European Union — EU air passenger rights regulation (denied boarding compensation)](https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng)
