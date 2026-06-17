---
type: Code
title: City Code
description: 'A 3-letter IATA code identifying a city or metropolitan area served by air transport (e.g., NYC, LON, TYO). When a city has multiple airports, the city code aggregates them so a search on the city code returns options across all served airports.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: city-code
vertical: common
category: codes
conceptType: code
status: active
term_ko: 도시 코드
definition_ko: '항공 운송이 이루어지는 도시 또는 대도시권을 식별하는 3자리 IATA 코드(예: NYC, LON, TYO). 한 도시에 여러 공항이 있는 경우 도시 코드가 이를 통합하므로, 도시 코드로 검색하면 운항하는 모든 공항의 옵션이 함께 조회된다.'
longDef: 'City codes are part of the IATA location coding system and are sometimes identical to the airport code when a city has a single primary airport (e.g., a code can serve as both city and airport identifier). For multi-airport cities the city code is distinct (e.g., LON for London covers LHR, LGW, STN, LCY, LTN, SEN). In schedule and shopping systems, an origin/destination expressed as a city code expands to all underlying airports.'
longDef_ko: '도시 코드는 IATA 위치 코드 체계의 일부이며, 도시에 주요 공항이 하나뿐인 경우 공항 코드와 동일할 수 있다(즉, 하나의 코드가 도시 식별자와 공항 식별자 역할을 동시에 할 수 있다). 다공항 도시의 경우 도시 코드는 별개로 존재한다(예: 런던의 LON은 LHR, LGW, STN, LCY, LTN, SEN을 포괄한다). 스케줄 및 조회(shopping) 시스템에서 도시 코드로 표현된 출발지/도착지는 그에 속한 모든 공항으로 확장된다.'
standardBody: IATA
aliases:
  - IATA City Code
  - Metropolitan Area Code
  - Multi-Airport City Code
relationships:
  - type: narrower
    targetTerm: IATA Code
  - type: related
    targetTerm: Airport Code
  - type: related
    targetTerm: Origin & Destination
distinctions:
  - targetTerm: Airport Code
    explanation: A city code denotes a metropolitan area (possibly several airports); an airport code denotes one specific airport.
    explanation_ko: '도시 코드는 (여러 공항을 포함할 수 있는) 대도시권을 나타내고, 공항 코드는 하나의 특정 공항을 나타낸다.'
sources:
  - name: IATA Airline and Airport Code Search
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/directories/code-search/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 30h8V14l5-4 5 4v16"/><path d="M24 30V20h12v10"/><path d="M9 22h2M18 18h2M30 24h2"/><rect x="6" y="34" width="36" height="8" rx="2"/><path d="M11 38h2M16 38h2M21 38h2"/></svg>
---

> A 3-letter IATA code identifying a city or metropolitan area served by air transport (e.g., NYC, LON, TYO). When a city has multiple airports, the city code aggregates them so a search on the city code returns options across all served airports.

City codes are part of the IATA location coding system and are sometimes identical to the airport code when a city has a single primary airport (e.g., a code can serve as both city and airport identifier). For multi-airport cities the city code is distinct (e.g., LON for London covers LHR, LGW, STN, LCY, LTN, SEN). In schedule and shopping systems, an origin/destination expressed as a city code expands to all underlying airports.

**한국어 / Korean** — **도시 코드** — 항공 운송이 이루어지는 도시 또는 대도시권을 식별하는 3자리 IATA 코드(예: NYC, LON, TYO). 한 도시에 여러 공항이 있는 경우 도시 코드가 이를 통합하므로, 도시 코드로 검색하면 운항하는 모든 공항의 옵션이 함께 조회된다.

도시 코드는 IATA 위치 코드 체계의 일부이며, 도시에 주요 공항이 하나뿐인 경우 공항 코드와 동일할 수 있다(즉, 하나의 코드가 도시 식별자와 공항 식별자 역할을 동시에 할 수 있다). 다공항 도시의 경우 도시 코드는 별개로 존재한다(예: 런던의 LON은 LHR, LGW, STN, LCY, LTN, SEN을 포괄한다). 스케줄 및 조회(shopping) 시스템에서 도시 코드로 표현된 출발지/도착지는 그에 속한 모든 공항으로 확장된다.

**Aliases:** `IATA City Code`, `Metropolitan Area Code`, `Multi-Airport City Code`

# Related
- [IATA Code](/common/codes/iata-code.md) — narrower
- [Airport Code](/common/codes/airport-code.md) — related
- [Origin & Destination](/air/air-shop/origin-destination.md) — related

# Distinctions
- **City Code** vs [Airport Code](/common/codes/airport-code.md) — A city code denotes a metropolitan area (possibly several airports); an airport code denotes one specific airport.

# Citations
[1] [IATA — IATA Airline and Airport Code Search](https://www.iata.org/en/publications/directories/code-search/)
