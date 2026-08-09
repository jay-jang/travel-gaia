---
type: Business Term
title: Through Flight
description: 'A scheduled air service that operates under a single flight number between an origin and a destination but makes one or more commercial stops at intermediate airports where passengers may board or deplane. Unlike a nonstop flight, an intermediate landing occurs; unlike a connecting flight, passengers are not required to change aircraft. Marketed in some regions as a "direct flight", though technically distinct from a true nonstop.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-08-09T00:00:00Z'
id: through-flight
vertical: air
category: air-ops
conceptType: business-term
status: active
term_ko: 중간 기착 직항편(Through Flight)
definition_ko: '단일 편명으로 출발지에서 목적지까지 운항하지만 중간 공항에서 한 번 이상 상업적으로 기착하여 승객이 탑승하거나 하기할 수 있는 정기 항공 서비스. 무착륙 편(nonstop)과 달리 중간 착륙이 있고, 환승 편과 달리 항공기 교체가 필요 없다. 일부 지역에서 "direct flight"으로 마케팅되지만 기술적으로는 완전한 무착륙과 구별된다.'
longDef: 'In IATA SSIM terminology a through service is one where a single flight number is maintained across one or more intermediate stops; passengers on a through flight remain on the same aircraft (or board an equivalent replacement aircraft) and are not required to collect baggage or re-check in at the intermediate point. The intermediate stop is a commercial stop: local passengers may join or leave at that city. Through flights create operational complexity for DCS because the same flight number handles multiple origin-destination pairs; boarding passes must indicate the through-flight status, and load control must account for passengers for each leg. In airline marketing the label "direct flight" is commonly applied to through flights, which often misleads consumers who associate "direct" with "nonstop".'
longDef_ko: 'IATA SSIM 용어에서 직항 서비스(through service)는 하나 이상의 중간 기착지에 걸쳐 단일 편명이 유지되는 서비스다. 직항 편의 여객은 동일한 항공기(또는 동급 대체 항공기)에 탑승한 상태를 유지하며 중간 기착지에서 수하물을 찾거나 재탑승 수속을 할 필요가 없다. 중간 기착은 상업적 기착이므로 현지 여객이 해당 도시에서 탑승하거나 하기할 수 있다. 직항편은 DCS에서 같은 편명이 여러 출발지-목적지 쌍을 처리하기 때문에 운영상 복잡성을 야기한다. 항공사 마케팅에서 "direct flight"라는 표현이 흔히 직항 편에 사용되는데, 이는 소비자들이 "direct"를 "nonstop"으로 혼동하도록 오해를 불러일으키는 경우가 많다.'
standardBody: IATA
aliases:
  - Direct Flight
  - Through Service
  - Direct Service
relationships:
  - type: contrasts
    targetTerm: Nonstop Flight
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Flight Number
  - type: related
    targetTerm: Technical Stop
  - type: related
    targetTerm: Stopover
  - type: related
    targetTerm: Connection
distinctions:
  - targetTerm: Nonstop Flight
    explanation: 'A nonstop flight has no intermediate landings at all; a through flight makes one or more commercial stops under the same flight number where passengers may board or deplane.'
    explanation_ko: '무착륙 편은 중간 착륙이 전혀 없고, 직항 편(through flight)은 같은 편명 하에 한 번 이상 상업적 기착이 있으며 여객이 탑승하거나 하기할 수 있다.'
  - targetTerm: Connection
    explanation: 'A connecting flight requires passengers to change aircraft and flight numbers at the intermediate airport; a through flight maintains the same flight number and aircraft throughout, so no re-boarding is required.'
    explanation_ko: '환승 편은 중간 공항에서 항공기와 편명을 바꿔야 하지만, 직항 편(through flight)은 전 구간 동일 편명과 항공기를 유지하므로 재탑승이 필요 없다.'
  - targetTerm: Technical Stop
    explanation: 'A technical stop lands for operational reasons only (fuel, crew) and no passengers board or deplane; a through flight commercial stop allows passenger boarding and deplaning at the intermediate city.'
    explanation_ko: '기술적 기착은 운항 목적(연료, 승무원)으로만 착륙하며 여객이 탑승하거나 하기하지 않는 반면, 직항 편(through flight)의 기착은 중간 도시에서 여객의 탑승과 하기를 허용하는 상업적 기착이다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: '2024 Edition'
    section: Chapter 2 — Schedule Data Definitions
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information-manual/'
    tier: association
  - name: IATA Glossary of International Aviation Terms
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/ops-infra/ops-safety/glossary/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 28l8-14 5 7 9-9 3 3-9 9 2 7-5 3-3-7-6 6z"/><circle cx="30" cy="38" r="3.5"/><line x1="6" y1="44" x2="44" y2="44"/></svg>
---

> A scheduled air service that operates under a single flight number between an origin and a destination but makes one or more commercial stops at intermediate airports where passengers may board or deplane. Unlike a nonstop flight, an intermediate landing occurs; unlike a connecting flight, passengers are not required to change aircraft. Marketed in some regions as a "direct flight", though technically distinct from a true nonstop.

In IATA SSIM terminology a through service is one where a single flight number is maintained across one or more intermediate stops; passengers on a through flight remain on the same aircraft (or board an equivalent replacement aircraft) and are not required to collect baggage or re-check in at the intermediate point. The intermediate stop is a commercial stop: local passengers may join or leave at that city. Through flights create operational complexity for DCS because the same flight number handles multiple origin-destination pairs; boarding passes must indicate the through-flight status, and load control must account for passengers for each leg. In airline marketing the label "direct flight" is commonly applied to through flights, which often misleads consumers who associate "direct" with "nonstop".

**한국어 / Korean** — **중간 기착 직항편(Through Flight)** — 단일 편명으로 출발지에서 목적지까지 운항하지만 중간 공항에서 한 번 이상 상업적으로 기착하여 승객이 탑승하거나 하기할 수 있는 정기 항공 서비스. 무착륙 편(nonstop)과 달리 중간 착륙이 있고, 환승 편과 달리 항공기 교체가 필요 없다. 일부 지역에서 "direct flight"으로 마케팅되지만 기술적으로는 완전한 무착륙과 구별된다.

IATA SSIM 용어에서 직항 서비스(through service)는 하나 이상의 중간 기착지에 걸쳐 단일 편명이 유지되는 서비스다. 직항 편의 여객은 동일한 항공기에 탑승한 상태를 유지하며 중간 기착지에서 수하물을 찾거나 재탑승 수속을 할 필요가 없다. 항공사 마케팅에서 "direct flight"라는 표현이 흔히 직항 편에 사용되는데, 이는 소비자들이 "direct"를 "nonstop"으로 혼동하도록 오해를 불러일으키는 경우가 많다.

**Aliases:** `Direct Flight`, `Through Service`, `Direct Service`

# Related
- Nonstop Flight — contrasts
- Segment — related
- Flight Number — related
- Technical Stop — related
- Stopover — related
- Connection — related

# Distinctions
- **Through Flight** vs Nonstop Flight — A nonstop flight has no intermediate landings at all; a through flight makes one or more commercial stops under the same flight number where passengers may board or deplane.
- **Through Flight** vs Connection — A connecting flight requires passengers to change aircraft and flight numbers at the intermediate airport; a through flight maintains the same flight number and aircraft throughout, so no re-boarding is required.
- **Through Flight** vs Technical Stop — A technical stop lands for operational reasons only (fuel, crew) and no passengers board or deplane; a through flight commercial stop allows passenger boarding and deplaning at the intermediate city.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM) — 2024 Edition](https://www.iata.org/en/publications/manuals/standard-schedules-information-manual/)
[2] [IATA — IATA Glossary of International Aviation Terms](https://www.iata.org/en/programs/ops-infra/ops-safety/glossary/)
