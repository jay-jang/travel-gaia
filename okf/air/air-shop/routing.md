---
type: Standard Term
title: Routing
description: 'Routing is a fare-construction method in which a published fare is valid only when travel follows one of a defined list of approved paths (specified intermediate points and/or carriers) between the fare''s origin and destination, rather than being validated by distance. It is the principal alternative to the mileage system (MPM/TPM) for determining whether an itinerary may use a given through fare.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-06-18T00:00:00Z'
id: routing
vertical: air
category: air-shop
conceptType: standard-term
status: active
term_ko: 라우팅 (Routing)
definition_ko: 'Routing(라우팅)은 공시된 운임이 거리로 검증되는 대신, 운임의 출발지와 목적지 사이에서 미리 정해진 승인 경로 목록(지정된 중간 지점 및/또는 운송사) 중 하나를 따를 때에만 유효한 운임 산출 방법이다. 여정이 특정 through fare를 사용할 수 있는지를 판단하는 데 있어 mileage system(MPM/TPM)의 주된 대안이다.'
longDef: 'Under the mileage system, a through fare is valid for any path whose summed Ticketed Point Mileage (TPM) does not exceed the Maximum Permitted Mileage (MPM), with mileage surcharges applied for modest excesses. A routing (or routing fare) instead ties the fare to explicit maps: the fare is filed against one or more routing numbers, each of which lists the permitted sequence of cities and, often, the specific carriers that may operate each portion. Travel is valid only if the actual itinerary matches one of these approved routings, with no mileage check and no mileage surcharge; if it does not match any approved routing, that fare cannot be used and the passenger must price over a different (often mileage-based or higher) fare. Routings are published and distributed through ATPCO alongside fares and rules, and a single market may offer both mileage-based and routing-based fares. Routing fares let carriers steer traffic onto preferred connecting hubs and partners and are common on connecting itineraries where the airline wants to permit specific paths only.'
longDef_ko: 'Mileage system에서는 through fare가, 합산한 Ticketed Point Mileage(TPM)가 Maximum Permitted Mileage(MPM)를 초과하지 않는 모든 경로에 대해 유효하며, 적당한 초과에는 mileage surcharge가 적용된다. Routing(또는 routing fare)은 대신 운임을 명시적 경로표에 묶는다. 운임은 하나 이상의 routing number에 대해 filing되며, 각 routing number는 허용되는 도시의 순서와, 흔히 각 구간을 운항할 수 있는 특정 운송사를 나열한다. 실제 여정이 이 승인된 routing 중 하나와 일치할 때에만 운임이 유효하고, mileage 검사도 mileage surcharge도 없다. 어떤 승인 routing과도 일치하지 않으면 그 운임은 사용할 수 없고 승객은 다른(흔히 mileage 기반이거나 더 높은) 운임으로 산출해야 한다. Routing은 운임 및 규정과 함께 ATPCO를 통해 공시·배포되며, 한 시장에 mileage 기반 운임과 routing 기반 운임이 모두 제공될 수 있다. Routing fare는 운송사가 선호하는 연결 허브와 파트너로 트래픽을 유도할 수 있게 하며, 항공사가 특정 경로만 허용하고자 하는 연결 여정에서 흔하다.'
standardBody: ATPCO
aliases:
  - Routing Fare
  - Routing System
  - Approved Routing
  - Specified Routing
providerTerms:
  - provider: ATPCO
    term: Routings
    context: ATPCO publishes and distributes Routings data (routing maps tied to fares) as a category of fare-construction data alongside Fares and Rules.
    context_ko: ATPCO는 Fares 및 Rules와 함께 운임 산출 데이터의 한 범주로서 Routings 데이터(운임에 연결된 routing 경로표)를 공시·배포한다.
    relationship: same
relationships:
  - type: broader
    targetTerm: Fare Construction
  - type: contrasts
    targetTerm: Maximum Permitted Mileage (MPM)
  - type: related
    targetTerm: Ticketed Point Mileage (TPM)
  - type: related
    targetTerm: Through Fare
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Fare Component
distinctions:
  - targetTerm: Maximum Permitted Mileage (MPM)
    explanation: 'MPM validates a fare by distance: any path within the permitted mileage qualifies (with surcharges for excess). A routing validates a fare by an explicit approved path list, with no distance check or mileage surcharge. They are the two mutually exclusive ways a given fare is checked for itinerary validity.'
    explanation_ko: 'MPM은 운임을 거리로 검증한다. 허용 mileage 안의 모든 경로가 자격을 얻는다(초과 시 surcharge). Routing은 운임을 명시적 승인 경로 목록으로 검증하며, 거리 검사나 mileage surcharge가 없다. 둘은 특정 운임의 여정 유효성을 검사하는 상호 배타적인 두 방식이다.'
  - targetTerm: Through Fare
    explanation: A through fare is the single fare covering the whole origin-destination journey; routing is the rule set that determines which physical paths that through fare may be applied over.
    explanation_ko: 'Through fare는 전체 출발지-목적지 여정을 포괄하는 단일 운임이고, routing은 그 through fare가 어떤 물리적 경로에 적용될 수 있는지를 결정하는 규정 집합이다.'
sources:
  - org: ATPCO
    name: ATPCO Routings - fare-construction data
    version: ''
    section: Routings
    url: 'https://atpco.net/atpco-faremanager/'
    tier: vendor-doc
  - org: IATA
    name: 'IATA fare construction: Mileage System and Routing System'
    version: ''
    section: Routing system
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="3"/><circle cx="24" cy="30" r="3"/><circle cx="39" cy="14" r="3"/><path d="M11 14l11 14M27 28l11-12"/><path d="M9 16v18a3 3 0 003 3h27" stroke-dasharray="3 3"/></svg>
---

> Routing is a fare-construction method in which a published fare is valid only when travel follows one of a defined list of approved paths (specified intermediate points and/or carriers) between the fare's origin and destination, rather than being validated by distance. It is the principal alternative to the mileage system (MPM/TPM) for determining whether an itinerary may use a given through fare.

Under the mileage system, a through fare is valid for any path whose summed Ticketed Point Mileage (TPM) does not exceed the Maximum Permitted Mileage (MPM), with mileage surcharges applied for modest excesses. A routing (or routing fare) instead ties the fare to explicit maps: the fare is filed against one or more routing numbers, each of which lists the permitted sequence of cities and, often, the specific carriers that may operate each portion. Travel is valid only if the actual itinerary matches one of these approved routings, with no mileage check and no mileage surcharge; if it does not match any approved routing, that fare cannot be used and the passenger must price over a different (often mileage-based or higher) fare. Routings are published and distributed through ATPCO alongside fares and rules, and a single market may offer both mileage-based and routing-based fares. Routing fares let carriers steer traffic onto preferred connecting hubs and partners and are common on connecting itineraries where the airline wants to permit specific paths only.

**한국어 / Korean** — **라우팅 (Routing)** — Routing(라우팅)은 공시된 운임이 거리로 검증되는 대신, 운임의 출발지와 목적지 사이에서 미리 정해진 승인 경로 목록(지정된 중간 지점 및/또는 운송사) 중 하나를 따를 때에만 유효한 운임 산출 방법이다. 여정이 특정 through fare를 사용할 수 있는지를 판단하는 데 있어 mileage system(MPM/TPM)의 주된 대안이다.

Mileage system에서는 through fare가, 합산한 Ticketed Point Mileage(TPM)가 Maximum Permitted Mileage(MPM)를 초과하지 않는 모든 경로에 대해 유효하며, 적당한 초과에는 mileage surcharge가 적용된다. Routing(또는 routing fare)은 대신 운임을 명시적 경로표에 묶는다. 운임은 하나 이상의 routing number에 대해 filing되며, 각 routing number는 허용되는 도시의 순서와, 흔히 각 구간을 운항할 수 있는 특정 운송사를 나열한다. 실제 여정이 이 승인된 routing 중 하나와 일치할 때에만 운임이 유효하고, mileage 검사도 mileage surcharge도 없다. 어떤 승인 routing과도 일치하지 않으면 그 운임은 사용할 수 없고 승객은 다른(흔히 mileage 기반이거나 더 높은) 운임으로 산출해야 한다. Routing은 운임 및 규정과 함께 ATPCO를 통해 공시·배포되며, 한 시장에 mileage 기반 운임과 routing 기반 운임이 모두 제공될 수 있다. Routing fare는 운송사가 선호하는 연결 허브와 파트너로 트래픽을 유도할 수 있게 하며, 항공사가 특정 경로만 허용하고자 하는 연결 여정에서 흔하다.

**Aliases:** `Routing Fare`, `Routing System`, `Approved Routing`, `Specified Routing`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Routings` | same | ATPCO publishes and distributes Routings data (routing maps tied to fares) as a category of fare-construction data alongside Fares and Rules. |

# Related
- [Fare Construction](/air/air-shop/fare-construction.md) — broader
- [Maximum Permitted Mileage (MPM)](/air/air-shop/maximum-permitted-mileage.md) — contrasts
- [Ticketed Point Mileage (TPM)](/air/air-shop/ticketed-point-mileage.md) — related
- [Through Fare](/air/air-partner/through-fare.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related

# Distinctions
- **Routing** vs [Maximum Permitted Mileage (MPM)](/air/air-shop/maximum-permitted-mileage.md) — MPM validates a fare by distance: any path within the permitted mileage qualifies (with surcharges for excess). A routing validates a fare by an explicit approved path list, with no distance check or mileage surcharge. They are the two mutually exclusive ways a given fare is checked for itinerary validity.
- **Routing** vs [Through Fare](/air/air-partner/through-fare.md) — A through fare is the single fare covering the whole origin-destination journey; routing is the rule set that determines which physical paths that through fare may be applied over.

# Citations
[1] [ATPCO — ATPCO Routings - fare-construction data — Routings](https://atpco.net/atpco-faremanager/)
[2] [IATA — IATA fare construction: Mileage System and Routing System — Routing system](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
