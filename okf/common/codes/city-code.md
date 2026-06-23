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
providerTerms:
  - provider: IATA
    term: Metropolitan area code
    context: 'IATA term for a multi-airport city code (e.g., NYC, LON, TYO) that aggregates the airports serving a metro area in schedules and availability.'
    context_ko: '여러 공항을 가진 도시 코드(예: NYC, LON, TYO)를 가리키는 IATA 용어로, 스케줄·좌석조회에서 대도시권 공항들을 묶는다.'
    relationship: same
relationships:
  - type: narrower
    targetTerm: IATA Code
  - type: contrasts
    targetTerm: Airport Code
  - type: related
    targetTerm: Origin & Destination
distinctions:
  - targetTerm: Airport Code
    explanation: A city code denotes a metropolitan area (possibly several airports); an airport code denotes one specific airport.
    explanation_ko: '도시 코드는 (여러 공항을 포함할 수 있는) 대도시권을 나타내고, 공항 코드는 하나의 특정 공항을 나타낸다.'
  - targetTerm: Pseudo City Code
    explanation: A City Code is an IATA geographic metro-area code; a Pseudo City Code identifies a GDS subscriber/agency and is not geographic despite the name.
    explanation_ko: '도시 코드는 IATA의 지리적 대도시권 코드인 반면, 의사 도시 코드(PCC)는 GDS 가입자/여행사를 식별하며 명칭과 달리 지리적 의미가 없다.'
  - targetTerm: Station Code
    explanation: 'A station code may resolve to a single airport or, loosely, a metro area; a city code specifically denotes the metropolitan area aggregating multiple airports.'
    explanation_ko: '스테이션 코드는 단일 공항으로 해석되거나 느슨하게 대도시권을 가리킬 수 있고, 도시 코드는 여러 공항을 묶는 대도시권을 명확히 지칭한다.'
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

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `Metropolitan area code` | same | IATA term for a multi-airport city code (e.g., NYC, LON, TYO) that aggregates the airports serving a metro area in schedules and availability. |

# Related
- [IATA Code](/common/codes/iata-code.md) — narrower
- [Airport Code](/common/codes/airport-code.md) — contrasts
- [Origin & Destination](/air/air-shop/origin-destination.md) — related

# Distinctions
- **City Code** vs [Airport Code](/common/codes/airport-code.md) — A city code denotes a metropolitan area (possibly several airports); an airport code denotes one specific airport.
- **City Code** vs [Pseudo City Code](/common/codes/pseudo-city-code.md) — A City Code is an IATA geographic metro-area code; a Pseudo City Code identifies a GDS subscriber/agency and is not geographic despite the name.
- **City Code** vs [Station Code](/common/codes/station-code.md) — A station code may resolve to a single airport or, loosely, a metro area; a city code specifically denotes the metropolitan area aggregating multiple airports.

# Citations
[1] [IATA — IATA Airline and Airport Code Search](https://www.iata.org/en/publications/directories/code-search/)
