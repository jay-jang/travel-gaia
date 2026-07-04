---
type: Business Term
title: Stopover
description: 'A deliberate interruption of a journey at an intermediate point that exceeds the stopover threshold defined by the applicable fare rules — generally more than 24 hours at an intermediate point on international itineraries. A stopover is distinguished from a connection (transit), which is a short transfer below the threshold, and carries separate pricing treatment in fare construction under ATPCO Fare Rule Category 8.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-07-04T00:00:00Z'
id: stopover
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 스톱오버(Stopover)
definition_ko: '스톱오버(Stopover)는 적용 운임 규칙에서 정의한 임계값을 초과하는 여정 중간 지점에서의 의도적인 여정 중단이다. 국제 여정에서는 일반적으로 중간 지점에서 24시간 초과 체류가 스톱오버로 정의된다. 스톱오버는 임계값 미만의 짧은 환승인 연결편(connection, transit)과 구별되며, ATPCO 운임 규칙 카테고리 8에 따라 운임 산정에서 별도의 가격 처리를 받는다.'
longDef: 'The IATA/ATPCO framework distinguishes between a stopover and a connection by time thresholds that vary by fare type and routing: on international itineraries the threshold is more than 24 hours; on pure US domestic fares it is more than 4 hours; and on US domestic segments within an international itinerary the ATPCO Category 8 implementation applies a 12-hour threshold. Whether a stop is a permitted stopover (allowed by the fare with or without surcharge) or an unpermitted stopover (forcing a separate fare component) is governed by the Stopover rules (ATPCO Category 8). Stopovers can be permitted free, permitted with a surcharge, or not permitted at all under a given fare. When a stopover is not permitted, the traveler must either purchase a separate round-trip or one-way fare for the side trip or use a fare that allows stopovers. The concept is fundamental to fare construction in the GDS and NDC environments.'
longDef_ko: 'IATA/ATPCO 체계는 운임 유형과 노선에 따라 달라지는 시간 임계값으로 스톱오버와 연결편을 구분한다. 국제 여정에서는 24시간 초과, 순수 미국 국내 운임에서는 4시간 초과, 국제 여정 내 미국 국내 구간에서는 ATPCO 카테고리 8 구현에 따라 12시간 임계값을 적용한다. 중간 기착이 허용된 스톱오버(스톱오버 허용 운임, 추가 요금 유무 포함)인지 미허용 스톱오버(별도 운임 구성 요소 강제)인지는 스톱오버 규칙(ATPCO 카테고리 8)이 결정한다. 스톱오버는 무료 허용, 추가 요금 부과 허용, 또는 전혀 불허의 세 가지 처리 중 하나를 받을 수 있다. 스톱오버가 허용되지 않으면 여행자는 왕복 또는 단방향 운임을 별도로 구매하거나 스톱오버를 허용하는 운임을 사용해야 한다. 이 개념은 GDS 및 NDC 환경에서 운임 산정의 근간이다.'
standardBody: IATA
aliases:
  - Permitted Stopover
  - Stopover Rule
  - Transit Stop
relationships:
  - type: contrasts
    targetTerm: Connection
  - type: related
    targetTerm: Itinerary
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: MCT
distinctions:
  - targetTerm: Connection
    explanation: 'A connection is a short transfer below the stopover time threshold (under 24 hours international; under 4 hours domestic); it is priced as part of a through itinerary. A stopover exceeds that threshold — it is a deliberate stay — and is subject to separate stopover rules that may permit it freely, with a surcharge, or not at all.'
    explanation_ko: '연결편(Connection)은 스톱오버 시간 임계값 미만(국제선 24시간 미만, 국내선 4시간 미만)의 짧은 환승으로, 일관 여정의 일부로 가격이 책정된다. 스톱오버는 그 임계값을 초과하는 의도적인 체류로, 무료 허용·추가 요금 부과·불허 중 하나를 정하는 별도 스톱오버 규칙이 적용된다.'
  - targetTerm: MCT
    explanation: 'MCT (Minimum Connecting Time) defines the shortest legally bookable transfer window at an airport — it applies to connections, not stopovers. Stopovers by definition exceed the connection threshold; MCT has no bearing on their pricing.'
    explanation_ko: 'MCT(최소 연결 시간)는 공항에서 법적으로 예약 가능한 최단 환승 시간을 정의하며 연결편에 적용된다. 스톱오버는 정의상 연결 임계값을 초과하므로 MCT는 스톱오버 가격 산정에 영향을 미치지 않는다.'
  - targetTerm: Fare Component
    explanation: 'A stopover can trigger a fare-component break: if a fare does not permit the stopover, the fare construction must split into separate fare components at that stop. A permitted stopover stays within a single fare component; an unpermitted stopover creates a break point.'
    explanation_ko: '스톱오버는 운임 구성 요소 분리를 촉발할 수 있다. 운임이 스톱오버를 허용하지 않으면 해당 중간 기착에서 별도의 운임 구성 요소로 분리해야 한다. 허용된 스톱오버는 단일 운임 구성 요소 내에 머물고, 불허된 스톱오버는 분리 지점을 생성한다.'
sources:
  - name: 'Passenger Tariff Coordinating Conference Composite Manual (PTCCM)'
    org: IATA
    version: ''
    section: 'Fare construction — Stopovers'
    url: 'https://www.iata.org/en/publications/store/passenger-tariffs-conference-composite-manual/'
    tier: association
  - name: 'ATPCO Fare Rule Category 8 (Stopovers)'
    org: ATPCO
    version: ''
    section: 'Category 8 — Stopovers'
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="18" r="6"/><path d="M24 24v8"/><path d="M24 36l-4-4h8z"/><path d="M8 38h14M26 38h14"/><path d="M8 38l4-6M40 38l-4-6"/></svg>
---

> A deliberate interruption of a journey at an intermediate point that exceeds the stopover threshold defined by the applicable fare rules — generally more than 24 hours at an intermediate point on international itineraries. A stopover is distinguished from a connection (transit), which is a short transfer below the threshold, and carries separate pricing treatment in fare construction under ATPCO Fare Rule Category 8.

The IATA/ATPCO framework distinguishes between a stopover and a connection by time thresholds that vary by fare type and routing: on international itineraries the threshold is more than 24 hours; on pure US domestic fares it is more than 4 hours; and on US domestic segments within an international itinerary the ATPCO Category 8 implementation applies a 12-hour threshold. Whether a stop is a permitted stopover (allowed by the fare with or without surcharge) or an unpermitted stopover (forcing a separate fare component) is governed by the Stopover rules (ATPCO Category 8). Stopovers can be permitted free, permitted with a surcharge, or not permitted at all under a given fare. When a stopover is not permitted, the traveler must either purchase a separate round-trip or one-way fare for the side trip or use a fare that allows stopovers. The concept is fundamental to fare construction in the GDS and NDC environments.

**한국어 / Korean** — **스톱오버(Stopover)** — 스톱오버(Stopover)는 적용 운임 규칙에서 정의한 임계값을 초과하는 여정 중간 지점에서의 의도적인 여정 중단이다. 국제 여정에서는 일반적으로 중간 지점에서 24시간 초과 체류가 스톱오버로 정의된다. ATPCO 운임 규칙 카테고리 8에 따라 운임 산정에서 별도의 가격 처리를 받는다.

IATA/ATPCO 체계는 운임 유형과 노선에 따라 달라지는 시간 임계값으로 스톱오버와 연결편을 구분한다. 국제 여정에서는 24시간 초과, 순수 미국 국내 운임에서는 4시간 초과, 국제 여정 내 미국 국내 구간에서는 ATPCO 카테고리 8 구현에 따라 12시간 임계값을 적용한다. 스톱오버는 무료 허용, 추가 요금 부과 허용, 또는 전혀 불허의 세 가지 처리 중 하나를 받을 수 있다.

**Aliases:** `Permitted Stopover`, `Stopover Rule`, `Transit Stop`

# Related
- [Connection](/air/air-partner/connection.md) — contrasts
- [Itinerary](/air/air-ops/itinerary.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [MCT](/air/air-ops/mct.md) — related

# Distinctions
- **Stopover** vs [Connection](/air/air-partner/connection.md) — A connection is a short transfer below the stopover time threshold (under 24 hours international; under 4 hours domestic); it is priced as part of a through itinerary. A stopover exceeds that threshold — it is a deliberate stay — and is subject to separate stopover rules that may permit it freely, with a surcharge, or not at all.
- **Stopover** vs [MCT](/air/air-ops/mct.md) — MCT (Minimum Connecting Time) defines the shortest legally bookable transfer window at an airport — it applies to connections, not stopovers. Stopovers by definition exceed the connection threshold; MCT has no bearing on their pricing.
- **Stopover** vs [Fare Component](/air/air-shop/fare-component.md) — A stopover can trigger a fare-component break: if a fare does not permit the stopover, the fare construction must split into separate fare components at that stop. A permitted stopover stays within a single fare component; an unpermitted stopover creates a break point.

# Citations
[1] [IATA — Passenger Tariff Coordinating Conference Composite Manual (PTCCM)](https://www.iata.org/en/publications/store/passenger-tariffs-conference-composite-manual/)
[2] [ATPCO — ATPCO Fare Rule Category 8 (Stopovers)](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
