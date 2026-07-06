---
type: Business Term
title: Open Jaw
description: 'An Open Jaw is an air itinerary in which the two endpoints of a surface journey are not the same city: the outbound and inbound air journeys are connected by an implied surface gap (the "jaw"). A single open jaw has one mismatched city (e.g., fly A→B, surface to C, return C→A), while a double open jaw has two mismatched cities (fly A→B, surface gap, return C→D). The gap segment carries no flown mileage but is counted in certain distance-based fare checks.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-07-06T00:00:00Z'
id: open-jaw
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 오픈조(Open Jaw)
definition_ko: '오픈조(Open Jaw)는 지상 구간의 양 끝 도시가 동일하지 않은 항공 여정이다. 출발지와 도착지 사이에 항공편이 없는 지상 이동 구간(gap, 즉 "jaw")이 존재하며, 이 구간은 실제 운항되지 않는다. 단일 오픈조(Single Open Jaw)는 불일치 도시가 한 곳(예: A→B 항공, 지상 이동, C→A 항공)이고, 이중 오픈조(Double Open Jaw)는 두 곳이 불일치한다(A→B 항공, 지상 이동, C→D 항공). Gap 구간은 실제 비행 마일이 없지만 일부 거리 기반 운임 계산 시 반영된다.'
longDef: 'Open jaw itineraries arise commonly when a traveler flies into one city and out of a different city, with surface transport bridging the gap. IATA fare construction principles classify international round-trip itineraries into four types: round trip (RT), open jaw (OJ), circle trip (CT), and one-way (OW). For an OJ, the applicable fare is typically half the round-trip fare for each leg, with the gap city pair determining which half is used. The surface gap distance may be included in mileage calculation: for the TPM (Ticketed Point Mileage) check, if the gap city is geographically close it may be ignored, but the rules depend on the applicable tariff and region. Many pricing engines today compute open-jaw fares automatically from ATPCO-filed round-trip fares, splitting them by the highest applicable one-way combination. Open jaw bookings require two separate origin-destination fare components that together form a single pricing unit.'
longDef_ko: '오픈조 여정은 여행자가 한 도시에 도착 후 다른 도시에서 출발하고, 그 사이를 지상 교통으로 이동할 때 흔히 발생한다. IATA 운임 산출 원칙은 국제 왕복 여정을 네 가지 유형, 즉 round trip(RT)·open jaw(OJ)·circle trip(CT)·one-way(OW)로 분류한다. OJ의 경우 적용 운임은 일반적으로 각 구간에 대한 왕복 운임의 절반이며, gap 도시 쌍이 어느 절반을 적용할지를 결정한다. 지상 gap 거리는 마일리지 계산에 포함될 수 있다. TPM(Ticketed Point Mileage) 점검 시, gap 도시가 지리적으로 인접하면 무시될 수도 있으나 규칙은 적용 운임표와 지역에 따라 다르다. 오늘날 대부분의 pricing 엔진은 ATPCO에 파일된 왕복 운임을 기반으로 오픈조 운임을 자동 산출하고, 적용 가능한 최고 편도 조합으로 분할한다. 오픈조 예약은 단일 pricing unit을 구성하는 두 개의 별도 origin-destination 운임 컴포넌트를 필요로 한다.'
standardBody: IATA
aliases:
  - Open-Jaw Trip
  - Open Jaw Fare
  - OJ
  - Single Open Jaw
  - Double Open Jaw
relationships:
  - type: broader
    targetTerm: Journey
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Pricing Unit
  - type: related
    targetTerm: Origin & Destination
  - type: related
    targetTerm: Stopover
distinctions:
  - targetTerm: Stopover
    explanation: 'A Stopover is a deliberate stop of more than 24 hours at an intermediate point within a single flown journey; an Open Jaw gap is a surface portion between two separate air legs that are not connected by any flight at all.'
    explanation_ko: 'Stopover는 단일 비행 여정 내 중간 지점에서의 24시간 초과 체류이고, 오픈조의 gap은 항공편으로 전혀 연결되지 않는 두 별도 항공 구간 사이의 지상 구간이다.'
  - targetTerm: Journey
    explanation: 'A Journey is the complete end-to-end trip concept; an Open Jaw is a specific journey type defined by the surface gap between its two air legs, as distinct from a round trip (same endpoints) or one-way (single direction) journey.'
    explanation_ko: 'Journey는 출발지부터 목적지까지의 전체 여행 개념이고, 오픈조는 두 항공 구간 사이의 지상 gap으로 정의되는 특정 여정 유형으로, 같은 출발·도착 도시를 사용하는 round trip이나 편도(one-way) 여정과 구별된다.'
sources:
  - name: IATA Ticket Services Guide (Fare Construction Principles)
    org: IATA
    version: ''
    section: 'Fare Construction — Journey Types'
    url: 'https://www.iata.org/en/publications/manuals/'
    tier: association
  - name: ATPCO Fares — Journey Type Definitions
    org: ATPCO
    version: ''
    section: ''
    url: 'https://www.atpco.net/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16 Q16 8 24 16 Q32 24 42 16"/><path d="M6 32 Q16 24 24 32 Q32 40 42 32"/><line x1="6" y1="16" x2="8" y2="14"/><line x1="6" y1="16" x2="8" y2="18"/><line x1="42" y1="32" x2="40" y2="30"/><line x1="42" y1="32" x2="40" y2="34"/><line x1="24" y1="16" x2="24" y2="32" stroke-dasharray="3,3"/></svg>
---

> An Open Jaw is an air itinerary in which the two endpoints of a surface journey are not the same city: the outbound and inbound air journeys are connected by an implied surface gap (the "jaw"). A single open jaw has one mismatched city (e.g., fly A→B, surface to C, return C→A), while a double open jaw has two mismatched cities (fly A→B, surface gap, return C→D).

Open jaw itineraries arise commonly when a traveler flies into one city and out of a different city, with surface transport bridging the gap. IATA fare construction principles classify international round-trip itineraries into four types: round trip (RT), open jaw (OJ), circle trip (CT), and one-way (OW). For an OJ, the applicable fare is typically half the round-trip fare for each leg, with the gap city pair determining which half is used. The surface gap distance may be included in mileage calculation: for the TPM (Ticketed Point Mileage) check, if the gap city is geographically close it may be ignored, but the rules depend on the applicable tariff and region. Many pricing engines today compute open-jaw fares automatically from ATPCO-filed round-trip fares, splitting them by the highest applicable one-way combination. Open jaw bookings require two separate origin-destination fare components that together form a single pricing unit.

**한국어 / Korean** — **오픈조(Open Jaw)** — 오픈조(Open Jaw)는 지상 구간의 양 끝 도시가 동일하지 않은 항공 여정이다. 출발지와 도착지 사이에 항공편이 없는 지상 이동 구간(gap, 즉 "jaw")이 존재하며, 이 구간은 실제 운항되지 않는다. 단일 오픈조(Single Open Jaw)는 불일치 도시가 한 곳(예: A→B 항공, 지상 이동, C→A 항공)이고, 이중 오픈조(Double Open Jaw)는 두 곳이 불일치한다(A→B 항공, 지상 이동, C→D 항공). Gap 구간은 실제 비행 마일이 없지만 일부 거리 기반 운임 계산 시 반영된다.

오픈조 여정은 여행자가 한 도시에 도착 후 다른 도시에서 출발하고, 그 사이를 지상 교통으로 이동할 때 흔히 발생한다. IATA 운임 산출 원칙은 국제 왕복 여정을 네 가지 유형, 즉 round trip(RT)·open jaw(OJ)·circle trip(CT)·one-way(OW)로 분류한다. OJ의 경우 적용 운임은 일반적으로 각 구간에 대한 왕복 운임의 절반이며, gap 도시 쌍이 어느 절반을 적용할지를 결정한다. 지상 gap 거리는 마일리지 계산에 포함될 수 있다. TPM(Ticketed Point Mileage) 점검 시, gap 도시가 지리적으로 인접하면 무시될 수도 있으나 규칙은 적용 운임표와 지역에 따라 다르다. 오늘날 대부분의 pricing 엔진은 ATPCO에 파일된 왕복 운임을 기반으로 오픈조 운임을 자동 산출하고, 적용 가능한 최고 편도 조합으로 분할한다. 오픈조 예약은 단일 pricing unit을 구성하는 두 개의 별도 origin-destination 운임 컴포넌트를 필요로 한다.

**Aliases:** `Open-Jaw Trip`, `Open Jaw Fare`, `OJ`, `Single Open Jaw`, `Double Open Jaw`

# Related
- [Journey](/air/air-shop/journey.md) — broader
- [Fare Construction](/air/air-shop/fare-construction.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Pricing Unit](/air/air-shop/pricing-unit.md) — related
- [Origin & Destination](/air/air-shop/origin-destination.md) — related
- [Stopover](/air/air-shop/stopover.md) — related

# Distinctions
- **Open Jaw** vs [Stopover](/air/air-shop/stopover.md) — A Stopover is a deliberate stop of more than 24 hours at an intermediate point within a single flown journey; an Open Jaw gap is a surface portion between two separate air legs that are not connected by any flight at all.
- **Open Jaw** vs [Journey](/air/air-shop/journey.md) — A Journey is the complete end-to-end trip concept; an Open Jaw is a specific journey type defined by the surface gap between its two air legs, as distinct from a round trip (same endpoints) or one-way (single direction) journey.

# Citations
[1] [IATA — IATA Ticket Services Guide (Fare Construction Principles)](https://www.iata.org/en/publications/manuals/)
[2] [ATPCO — ATPCO Fares — Journey Type Definitions](https://www.atpco.net/)
