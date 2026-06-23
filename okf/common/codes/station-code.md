---
type: Code
title: Station Code
description: 'An operational term for the 3-letter IATA location code used to identify the airport or city where an airline maintains a presence (a ''station''), as used in ground handling, schedules, and operational communications (e.g., ''the JFK station''). In practice it is the IATA airport/city code applied in an operational context.'
tags:
  - codes
  - ambiguous
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: station-code
vertical: common
category: codes
conceptType: code
status: ambiguous
term_ko: 스테이션 코드(공항/지점 코드)
definition_ko: '항공사가 거점(스테이션)을 두고 있는 공항이나 도시를 식별하는 3자리 IATA 위치 코드를 가리키는 운영상의 용어로, 지상 조업, 스케줄, 운항 통신 등에서 사용된다(예: ''JFK 스테이션''). 실제로는 운영 맥락에서 적용되는 IATA 공항/도시 코드이다.'
longDef: '''Station'' is airline operations vocabulary for a location an airline serves and where it has staff or handling; the station code is therefore the IATA 3-letter location code (airport or city) used to address that location in rosters, ground operations, baggage routing, and crew/aircraft scheduling. Because it is not a separate coding scheme but a usage of the IATA location code, the term is ambiguous: depending on context it may mean a specific airport (airport code) or a metropolitan area (city code), and intermodal stations (rail/bus terminals) may also carry IATA location codes.'
longDef_ko: '''스테이션(station)''은 항공사가 취항하며 직원이나 조업 체계를 둔 위치를 가리키는 항공 운영 용어이다. 따라서 스테이션 코드는 근무표, 지상 조업, 수하물 라우팅, 승무원·항공기 스케줄링에서 해당 위치를 지칭하는 데 쓰이는 IATA 3자리 위치 코드(공항 또는 도시)이다. 별도의 코드 체계가 아니라 IATA 위치 코드의 한 용법이므로 이 용어는 모호하다. 맥락에 따라 특정 공항(공항 코드) 또는 대도시권(도시 코드)을 의미할 수 있으며, 복합운송 스테이션(철도·버스 터미널)도 IATA 위치 코드를 가질 수 있다.'
standardBody: IATA
aliases:
  - Station
  - Airport Station Code
  - Outstation Code
relationships:
  - type: contrasts
    targetTerm: Airport Code
  - type: related
    targetTerm: City Code
  - type: related
    targetTerm: IATA Code
  - type: related
    targetTerm: IROPS
distinctions:
  - targetTerm: Airport Code
    explanation: A station code is the same IATA location code used operationally to mean an airline's location/presence; 'airport code' names the code itself as the identifier of an airport regardless of operational use.
    explanation_ko: '스테이션 코드는 항공사의 위치·거점을 뜻하는 운영상 용법으로 사용되는 동일한 IATA 위치 코드이고, ''공항 코드''는 운영 용도와 무관하게 공항을 식별하는 코드 자체를 가리킨다.'
  - targetTerm: City Code
    explanation: 'A station code may resolve to a single airport or, loosely, a metro area; a city code specifically denotes the metropolitan area aggregating multiple airports.'
    explanation_ko: '스테이션 코드는 단일 공항으로 해석되거나 느슨하게 대도시권을 가리킬 수 있고, 도시 코드는 여러 공항을 묶는 대도시권을 명확히 지칭한다.'
  - targetTerm: RICS Code (Company Code)
    explanation: 'RICS identifies the company (an organisation such as a railway undertaking or distributor); a station/location code identifies a physical point such as a station. RICS is a company identifier, not a place identifier — the rail place identifier is the UIC location code held in the CRD/ENEE.'
    explanation_ko: 'RICS는 회사(철도사업자·유통사 같은 조직)를 식별하고, station/location code는 역과 같은 물리적 지점을 식별한다. RICS는 장소가 아니라 회사 식별자이며, 철도의 장소 식별자는 CRD/ENEE에 담긴 UIC location code다.'
sources:
  - org: IATA
    name: IATA Location Codes (fact sheet)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-iata-location-codes/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 43c8-9 13-16 13-23a13 13 0 10-26 0c0 7 5 14 13 23z"/><path d="M19 22l4-7 4 7M20.5 19.5h5"/></svg>
---

> An operational term for the 3-letter IATA location code used to identify the airport or city where an airline maintains a presence (a 'station'), as used in ground handling, schedules, and operational communications (e.g., 'the JFK station'). In practice it is the IATA airport/city code applied in an operational context.

'Station' is airline operations vocabulary for a location an airline serves and where it has staff or handling; the station code is therefore the IATA 3-letter location code (airport or city) used to address that location in rosters, ground operations, baggage routing, and crew/aircraft scheduling. Because it is not a separate coding scheme but a usage of the IATA location code, the term is ambiguous: depending on context it may mean a specific airport (airport code) or a metropolitan area (city code), and intermodal stations (rail/bus terminals) may also carry IATA location codes.

**한국어 / Korean** — **스테이션 코드(공항/지점 코드)** — 항공사가 거점(스테이션)을 두고 있는 공항이나 도시를 식별하는 3자리 IATA 위치 코드를 가리키는 운영상의 용어로, 지상 조업, 스케줄, 운항 통신 등에서 사용된다(예: 'JFK 스테이션'). 실제로는 운영 맥락에서 적용되는 IATA 공항/도시 코드이다.

'스테이션(station)'은 항공사가 취항하며 직원이나 조업 체계를 둔 위치를 가리키는 항공 운영 용어이다. 따라서 스테이션 코드는 근무표, 지상 조업, 수하물 라우팅, 승무원·항공기 스케줄링에서 해당 위치를 지칭하는 데 쓰이는 IATA 3자리 위치 코드(공항 또는 도시)이다. 별도의 코드 체계가 아니라 IATA 위치 코드의 한 용법이므로 이 용어는 모호하다. 맥락에 따라 특정 공항(공항 코드) 또는 대도시권(도시 코드)을 의미할 수 있으며, 복합운송 스테이션(철도·버스 터미널)도 IATA 위치 코드를 가질 수 있다.

**Aliases:** `Station`, `Airport Station Code`, `Outstation Code`

# Related
- [Airport Code](/common/codes/airport-code.md) — contrasts
- [City Code](/common/codes/city-code.md) — related
- [IATA Code](/common/codes/iata-code.md) — related
- [IROPS](/air/air-partner/irops.md) — related

# Distinctions
- **Station Code** vs [Airport Code](/common/codes/airport-code.md) — A station code is the same IATA location code used operationally to mean an airline's location/presence; 'airport code' names the code itself as the identifier of an airport regardless of operational use.
- **Station Code** vs [City Code](/common/codes/city-code.md) — A station code may resolve to a single airport or, loosely, a metro area; a city code specifically denotes the metropolitan area aggregating multiple airports.
- **Station Code** vs [RICS Code (Company Code)](/ground/rail/rics-code.md) — RICS identifies the company (an organisation such as a railway undertaking or distributor); a station/location code identifies a physical point such as a station. RICS is a company identifier, not a place identifier — the rail place identifier is the UIC location code held in the CRD/ENEE.

# Citations
[1] [IATA — IATA Location Codes (fact sheet)](https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-iata-location-codes/)
