---
type: Document
title: Deck Plan
description: 'A diagrammatic representation of a cruise ship showing the layout of each deck, including cabin categories and numbers, public spaces, amenities, lifeboats, and structural features. Deck plans are the primary tool passengers use to choose a specific cabin location prior to booking, and they are a standard data component distributed through cruise reservation systems and online booking platforms.'
tags:
  - cruise
  - active
  - CLIA
timestamp: '2026-07-18T00:00:00Z'
id: deck-plan
vertical: cruise
category: cruise
conceptType: document
status: active
term_ko: 갑판 배치도(Deck Plan)
definition_ko: '크루즈 선박의 각 갑판 레이아웃을 보여주는 도표로, 선실 등급 및 번호, 공용 공간, 편의 시설, 구명정, 구조물 등을 포함한다. 갑판 배치도는 승객이 예약 전 특정 선실 위치를 선택하는 데 사용하는 주요 도구이며, 크루즈 예약 시스템 및 온라인 예약 플랫폼을 통해 배포되는 표준 데이터 구성 요소이다.'
longDef: 'A deck plan shows each horizontal level of the ship from bow to stern, typically in a bird''s-eye view, with each cabin represented by its number and colour-coded to indicate its category (e.g. inside, ocean view, balcony, suite). Public amenity decks show restaurants, pools, entertainment venues, the lido deck, the spa, and navigation/bridge areas. Deck plans also indicate muster station locations as required by SOLAS, and the position of lifeboats and tenders relevant to evacuation procedures. In cruise distribution, deck plans are provided by the cruise line to GDSs, travel agencies, and consumer websites so that passengers can evaluate cabin placement factors such as deck level, proximity to elevators or the bow/stern (affecting motion sensitivity), and adjacency to public venues. The OpenTravel Alliance cruise schemas include structured data elements for deck number and cabin location, enabling downstream systems to display deck-plan-level information programmatically.'
longDef_ko: '갑판 배치도는 선박의 각 수평 층을 선수부터 선미까지 일반적으로 조감도로 보여주며, 각 선실은 번호와 등급(예: 내향, 오션뷰, 발코니, 스위트)을 나타내는 색상 코드로 표시된다. 공용 편의 시설 갑판에는 레스토랑, 수영장, 공연장, 리도 갑판, 스파, 항법/선교 구역이 표시된다. 갑판 배치도에는 SOLAS가 요구하는 집합 지점 위치와 대피 절차와 관련된 구명정 및 텐더 위치도 포함된다. 크루즈 유통에서 갑판 배치도는 선사가 GDS, 여행사, 소비자 웹사이트에 제공하여, 승객이 갑판 층, 엘리베이터나 선수/선미까지의 거리(흔들림 민감도에 영향), 공용 시설 인접성 등 선실 위치 요소를 평가할 수 있도록 한다. OpenTravel Alliance 크루즈 스키마에는 갑판 번호와 선실 위치에 대한 구조화된 데이터 요소가 포함되어 있어, 하위 시스템이 프로그래밍 방식으로 갑판 배치도 수준의 정보를 표시할 수 있다.'
standardBody: CLIA
aliases:
  - Ship Deck Plan
  - Stateroom Deck Plan
  - Cabin Deck Plan
relationships:
  - type: parent
    targetTerm: Cabin Category
  - type: related
    targetTerm: SOLAS
  - type: related
    targetTerm: Guarantee Cabin (GTY)
distinctions:
  - targetTerm: Cabin Category
    explanation: 'A cabin category is the classification tier (inside, ocean-view, balcony, suite, etc.) that groups cabins by features and price; a deck plan is the physical layout document that shows where each specific cabin — within all categories — is located on the ship.'
    explanation_ko: '선실 등급은 특성과 가격에 따라 선실을 묶는 분류 계층(내향, 오션뷰, 발코니, 스위트 등)이고, 갑판 배치도는 모든 등급의 각 특정 선실이 선박 어디에 위치하는지를 보여주는 물리적 레이아웃 문서이다.'
  - targetTerm: SOLAS
    explanation: 'SOLAS (Safety of Life at Sea) is the IMO convention that mandates safety equipment, fire protection, and muster stations; deck plans graphically indicate the muster station locations and lifeboat/tender positions required by SOLAS, translating regulatory requirements into a navigable passenger reference.'
    explanation_ko: 'SOLAS(해상인명안전협약)는 안전 장비, 화재 방호, 집합 지점을 의무화하는 IMO 협약이고, 갑판 배치도는 SOLAS가 요구하는 집합 지점 위치와 구명정/텐더 위치를 그래픽으로 표시하여 규제 요건을 승객이 탐색할 수 있는 참조 자료로 변환한다.'
sources:
  - name: 'CLIA Cruise Industry Overview — Distribution and booking tools for cruise cabins'
    org: Cruise Lines International Association (CLIA)
    version: ''
    section: ''
    url: 'https://cruising.org/research-and-advocacy/research'
    tier: association
  - name: 'OpenTravel Alliance Cruise Specification — OTA_CruiseSailAvailRQ/RS (DeckNumber, CabinLocation elements)'
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="40" height="10" rx="1"/><rect x="4" y="20" width="40" height="10" rx="1"/><rect x="4" y="34" width="40" height="10" rx="1"/><rect x="8" y="8" width="6" height="6" rx="1"/><rect x="16" y="8" width="6" height="6" rx="1"/><rect x="24" y="8" width="6" height="6" rx="1"/><rect x="8" y="22" width="6" height="6" rx="1"/><rect x="16" y="22" width="6" height="6" rx="1"/><rect x="24" y="22" width="6" height="6" rx="1"/><rect x="32" y="22" width="6" height="6" rx="1"/></svg>
---

> A diagrammatic representation of a cruise ship showing the layout of each deck, including cabin categories and numbers, public spaces, amenities, lifeboats, and structural features. Deck plans are the primary tool passengers use to choose a specific cabin location prior to booking, and they are a standard data component distributed through cruise reservation systems and online booking platforms.

A deck plan shows each horizontal level of the ship from bow to stern, typically in a bird's-eye view, with each cabin represented by its number and colour-coded to indicate its category (e.g. inside, ocean view, balcony, suite). Public amenity decks show restaurants, pools, entertainment venues, the lido deck, the spa, and navigation/bridge areas. Deck plans also indicate muster station locations as required by SOLAS, and the position of lifeboats and tenders relevant to evacuation procedures. In cruise distribution, deck plans are provided by the cruise line to GDSs, travel agencies, and consumer websites so that passengers can evaluate cabin placement factors such as deck level, proximity to elevators or the bow/stern (affecting motion sensitivity), and adjacency to public venues. The OpenTravel Alliance cruise schemas include structured data elements for deck number and cabin location, enabling downstream systems to display deck-plan-level information programmatically.

**한국어 / Korean** — **갑판 배치도(Deck Plan)** — 크루즈 선박의 각 갑판 레이아웃을 보여주는 도표로, 선실 등급 및 번호, 공용 공간, 편의 시설, 구명정, 구조물 등을 포함한다. 갑판 배치도는 승객이 예약 전 특정 선실 위치를 선택하는 데 사용하는 주요 도구이며, 크루즈 예약 시스템 및 온라인 예약 플랫폼을 통해 배포되는 표준 데이터 구성 요소이다.

갑판 배치도는 선박의 각 수평 층을 선수부터 선미까지 일반적으로 조감도로 보여주며, 각 선실은 번호와 등급(예: 내향, 오션뷰, 발코니, 스위트)을 나타내는 색상 코드로 표시된다. 공용 편의 시설 갑판에는 레스토랑, 수영장, 공연장, 리도 갑판, 스파, 항법/선교 구역이 표시된다. 갑판 배치도에는 SOLAS가 요구하는 집합 지점 위치와 대피 절차와 관련된 구명정 및 텐더 위치도 포함된다. 크루즈 유통에서 갑판 배치도는 선사가 GDS, 여행사, 소비자 웹사이트에 제공하여, 승객이 갑판 층, 엘리베이터나 선수/선미까지의 거리(흔들림 민감도에 영향), 공용 시설 인접성 등 선실 위치 요소를 평가할 수 있도록 한다.

**Aliases:** `Ship Deck Plan`, `Stateroom Deck Plan`, `Cabin Deck Plan`

# Related
- [Cabin Category](/cruise/cruise/cabin-category.md) — parent
- [SOLAS](/cruise/cruise/solas.md) — related
- [Guarantee Cabin (GTY)](/cruise/cruise/guarantee-cabin-gty.md) — related

# Distinctions
- **Deck Plan** vs [Cabin Category](/cruise/cruise/cabin-category.md) — A cabin category is the classification tier (inside, ocean-view, balcony, suite, etc.) that groups cabins by features and price; a deck plan is the physical layout document that shows where each specific cabin — within all categories — is located on the ship.
- **Deck Plan** vs [SOLAS](/cruise/cruise/solas.md) — SOLAS (Safety of Life at Sea) is the IMO convention that mandates safety equipment, fire protection, and muster stations; deck plans graphically indicate the muster station locations and lifeboat/tender positions required by SOLAS, translating regulatory requirements into a navigable passenger reference.

# Citations
[1] [Cruise Lines International Association (CLIA) — CLIA Cruise Industry Overview — Distribution and booking tools for cruise cabins](https://cruising.org/research-and-advocacy/research)
[2] [OpenTravel Alliance — OpenTravel Alliance Cruise Specification — OTA_CruiseSailAvailRQ/RS (DeckNumber, CabinLocation elements)](https://opentravel.org/download-specs/)
