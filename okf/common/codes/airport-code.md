---
type: Code
title: Airport Code
description: 'A short alphabetic code identifying an airport. The 3-letter IATA airport code (e.g., JFK, LHR) is used for tickets, baggage tags, and schedules, while the 4-letter ICAO location indicator (e.g., KJFK, EGLL) is used for operations and air traffic control.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: airport-code
vertical: common
category: codes
conceptType: code
status: active
term_ko: 공항 코드
definition_ko: '공항을 식별하는 짧은 알파벳 코드. 3자리 IATA 공항 코드(예: JFK, LHR)는 항공권, 수하물 태그, 스케줄에 사용되고, 4자리 ICAO 위치 지시자(예: KJFK, EGLL)는 운항 및 항공교통관제에 사용된다.'
longDef: 'IATA airport codes are 3 letters and are unique across the IATA system but are assigned for airports with commercial service. ICAO airport codes are 4 letters, regionally structured, and assigned to a much broader set of aerodromes. A single metropolitan area may have multiple airports with distinct airport codes that roll up to a shared city code (e.g., JFK, LGA, EWR under NYC).'
longDef_ko: 'IATA 공항 코드는 3자리로 IATA 체계 내에서 고유하지만, 상업 운항이 있는 공항에만 부여된다. ICAO 공항 코드는 4자리로 지역별로 구조화되어 있으며 훨씬 더 광범위한 비행장에 부여된다. 하나의 대도시권에 여러 공항이 있을 수 있으며, 각각 별개의 공항 코드를 가지면서 하나의 공통 도시 코드로 묶일 수 있다(예: JFK, LGA, EWR가 NYC로 묶임).'
standardBody: IATA
aliases:
  - Airport Identifier
  - IATA Airport Code
  - ICAO Airport Code
  - Aerodrome Code
relationships:
  - type: narrower
    targetTerm: IATA Code
  - type: broader
    targetTerm: ICAO Code
  - type: contrasts
    targetTerm: City Code
  - type: related
    targetTerm: Origin & Destination
distinctions:
  - targetTerm: City Code
    explanation: 'An airport code identifies a single airport, whereas a city code identifies a metropolitan area that may aggregate several airports.'
    explanation_ko: '공항 코드는 단일 공항을 식별하는 반면, 도시 코드는 여러 공항을 묶을 수 있는 대도시권을 식별한다.'
  - targetTerm: SITA Teletype Address
    explanation: An airport code is just the 3-letter location component; a SITA teletype address embeds that code as its first three characters but adds a 2-letter department and a 2-character airline designator to form a complete 7-character routing address.
    explanation_ko: '공항 코드는 3자리 위치 요소일 뿐이지만, SITA 텔레타이프 주소는 그 코드를 앞 3자리로 포함하면서 2자리 부서 코드와 2자리 항공사 지정 코드를 더해 완전한 7자리 라우팅 주소를 만든다.'
  - targetTerm: Station Code
    explanation: A station code is the same IATA location code used operationally to mean an airline's location/presence; 'airport code' names the code itself as the identifier of an airport regardless of operational use.
    explanation_ko: '스테이션 코드는 항공사의 위치·거점을 뜻하는 운영상 용법으로 사용되는 동일한 IATA 위치 코드이고, ''공항 코드''는 운영 용도와 무관하게 공항을 식별하는 코드 자체를 가리킨다.'
  - targetTerm: UN/LOCODE
    explanation: 'UN/LOCODE is a 5-character trade/transport location code (CC+LLL) covering ports, terminals and airports; an airport code is an aviation-specific IATA/ICAO identifier.'
    explanation_ko: 'UN/LOCODE는 항만, 터미널, 공항을 포괄하는 5자리 무역/운송 위치 코드(CC+LLL)인 반면, 공항 코드는 항공 전용 IATA/ICAO 식별자이다.'
sources:
  - name: IATA Airline and Airport Code Search
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/directories/code-search/'
    tier: association
  - name: Doc 7910 — Location Indicators
    org: ICAO
    version: Doc 7910/199
    section: ''
    url: 'https://store.icao.int/en/location-indicators-doc-7910'
    tier: standard-body
    verifyQuote: Location Indicators (Doc 7910/199)
    verified: true
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 30V12l4-4 4 4v18"/><path d="M22 8l-1-3M26 8l1-3"/><path d="M14 42l6-12h8l6 12z"/><path d="M20 36h8"/></svg>
---

> A short alphabetic code identifying an airport. The 3-letter IATA airport code (e.g., JFK, LHR) is used for tickets, baggage tags, and schedules, while the 4-letter ICAO location indicator (e.g., KJFK, EGLL) is used for operations and air traffic control.

IATA airport codes are 3 letters and are unique across the IATA system but are assigned for airports with commercial service. ICAO airport codes are 4 letters, regionally structured, and assigned to a much broader set of aerodromes. A single metropolitan area may have multiple airports with distinct airport codes that roll up to a shared city code (e.g., JFK, LGA, EWR under NYC).

**한국어 / Korean** — **공항 코드** — 공항을 식별하는 짧은 알파벳 코드. 3자리 IATA 공항 코드(예: JFK, LHR)는 항공권, 수하물 태그, 스케줄에 사용되고, 4자리 ICAO 위치 지시자(예: KJFK, EGLL)는 운항 및 항공교통관제에 사용된다.

IATA 공항 코드는 3자리로 IATA 체계 내에서 고유하지만, 상업 운항이 있는 공항에만 부여된다. ICAO 공항 코드는 4자리로 지역별로 구조화되어 있으며 훨씬 더 광범위한 비행장에 부여된다. 하나의 대도시권에 여러 공항이 있을 수 있으며, 각각 별개의 공항 코드를 가지면서 하나의 공통 도시 코드로 묶일 수 있다(예: JFK, LGA, EWR가 NYC로 묶임).

**Aliases:** `Airport Identifier`, `IATA Airport Code`, `ICAO Airport Code`, `Aerodrome Code`

# Related
- [IATA Code](/common/codes/iata-code.md) — narrower
- [ICAO Code](/common/codes/icao-code.md) — broader
- [City Code](/common/codes/city-code.md) — contrasts
- [Origin & Destination](/air/air-shop/origin-destination.md) — related

# Distinctions
- **Airport Code** vs [City Code](/common/codes/city-code.md) — An airport code identifies a single airport, whereas a city code identifies a metropolitan area that may aggregate several airports.
- **Airport Code** vs [SITA Teletype Address](/common/codes/sita-teletype-address.md) — An airport code is just the 3-letter location component; a SITA teletype address embeds that code as its first three characters but adds a 2-letter department and a 2-character airline designator to form a complete 7-character routing address.
- **Airport Code** vs [Station Code](/common/codes/station-code.md) — A station code is the same IATA location code used operationally to mean an airline's location/presence; 'airport code' names the code itself as the identifier of an airport regardless of operational use.
- **Airport Code** vs [UN/LOCODE](/common/codes/un-locode.md) — UN/LOCODE is a 5-character trade/transport location code (CC+LLL) covering ports, terminals and airports; an airport code is an aviation-specific IATA/ICAO identifier.

# Citations
[1] [IATA — IATA Airline and Airport Code Search](https://www.iata.org/en/publications/directories/code-search/)
[2] [ICAO — Doc 7910 — Location Indicators — Doc 7910/199](https://store.icao.int/en/location-indicators-doc-7910)
