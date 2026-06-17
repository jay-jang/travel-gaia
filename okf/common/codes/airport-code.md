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
  - type: related
    targetTerm: ICAO Code
  - type: related
    targetTerm: City Code
  - type: related
    targetTerm: Origin & Destination
distinctions:
  - targetTerm: City Code
    explanation: 'An airport code identifies a single airport, whereas a city code identifies a metropolitan area that may aggregate several airports.'
    explanation_ko: '공항 코드는 단일 공항을 식별하는 반면, 도시 코드는 여러 공항을 묶을 수 있는 대도시권을 식별한다.'
sources:
  - name: IATA Airline and Airport Code Search
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/directories/code-search/'
  - name: Doc 7910 — Location Indicators
    org: ICAO
    version: ''
    section: ''
    url: 'https://store.icao.int/en/location-indicators-doc-7910'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 30V12l4-4 4 4v18"/><path d="M22 8l-1-3M26 8l1-3"/><path d="M14 42l6-12h8l6 12z"/><path d="M20 36h8"/></svg>
---

> A short alphabetic code identifying an airport. The 3-letter IATA airport code (e.g., JFK, LHR) is used for tickets, baggage tags, and schedules, while the 4-letter ICAO location indicator (e.g., KJFK, EGLL) is used for operations and air traffic control.

IATA airport codes are 3 letters and are unique across the IATA system but are assigned for airports with commercial service. ICAO airport codes are 4 letters, regionally structured, and assigned to a much broader set of aerodromes. A single metropolitan area may have multiple airports with distinct airport codes that roll up to a shared city code (e.g., JFK, LGA, EWR under NYC).

**한국어 / Korean** — **공항 코드** — 공항을 식별하는 짧은 알파벳 코드. 3자리 IATA 공항 코드(예: JFK, LHR)는 항공권, 수하물 태그, 스케줄에 사용되고, 4자리 ICAO 위치 지시자(예: KJFK, EGLL)는 운항 및 항공교통관제에 사용된다.

IATA 공항 코드는 3자리로 IATA 체계 내에서 고유하지만, 상업 운항이 있는 공항에만 부여된다. ICAO 공항 코드는 4자리로 지역별로 구조화되어 있으며 훨씬 더 광범위한 비행장에 부여된다. 하나의 대도시권에 여러 공항이 있을 수 있으며, 각각 별개의 공항 코드를 가지면서 하나의 공통 도시 코드로 묶일 수 있다(예: JFK, LGA, EWR가 NYC로 묶임).

**Aliases:** `Airport Identifier`, `IATA Airport Code`, `ICAO Airport Code`, `Aerodrome Code`

# Related
- [IATA Code](/common/codes/iata-code.md) — narrower
- [ICAO Code](/common/codes/icao-code.md) — related
- [City Code](/common/codes/city-code.md) — related
- [Origin & Destination](/air/air-shop/origin-destination.md) — related

# Distinctions
- **Airport Code** vs [City Code](/common/codes/city-code.md) — An airport code identifies a single airport, whereas a city code identifies a metropolitan area that may aggregate several airports.

# Citations
[1] [IATA — IATA Airline and Airport Code Search](https://www.iata.org/en/publications/directories/code-search/)
[2] [ICAO — Doc 7910 — Location Indicators](https://store.icao.int/en/location-indicators-doc-7910)
