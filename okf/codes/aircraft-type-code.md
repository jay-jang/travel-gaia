---
type: Code
title: Aircraft Type Code
description: 'A short code identifying the type/variant of aircraft operating a flight. The IATA aircraft type designator is 3 characters and reflects commercial differences (e.g., 738 for Boeing 737-800, 388 for Airbus A380-800); the ICAO designator is up to 4 characters and reflects operational/performance differences (e.g., B738, A388).'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: aircraft-type-code
category: codes
conceptType: code
status: active
term_ko: 항공기 기종 코드(장비 코드)
definition_ko: '항공편을 운항하는 항공기의 기종/형식을 식별하는 짧은 코드. IATA 항공기 기종 지정 코드는 3자리로 상업적 차이를 반영하고(예: Boeing 737-800은 738, Airbus A380-800은 388), ICAO 지정 코드는 최대 4자리로 운항·성능상의 차이를 반영한다(예: B738, A388).'
longDef: 'IATA aircraft type designators are 3 characters and are used in schedules, displays, and reservation systems to distinguish types and variants that matter commercially (size, role, cabin configuration). ICAO type designators run up to 4 characters and are used for air traffic control and flight planning, distinguishing variants by performance. Because the two systems are built for different purposes, a single physical aircraft can map to one ICAO code but multiple IATA codes (or vice versa). Schedule data providers such as OAG carry both and may publish a recommended value.'
longDef_ko: 'IATA 항공기 기종 지정 코드는 3자리이며, 스케줄·표시 화면·예약 시스템에서 상업적으로 의미 있는(크기, 용도, 객실 구성) 기종 및 형식을 구분하는 데 쓰인다. ICAO 기종 지정 코드는 최대 4자리이며, 항공교통관제와 비행 계획에 사용되어 성능에 따라 형식을 구분한다. 두 체계가 서로 다른 목적으로 만들어졌기 때문에, 하나의 실제 항공기가 ICAO 코드는 하나이면서 IATA 코드는 여러 개에 대응(또는 그 반대)할 수 있다. OAG 같은 스케줄 데이터 제공사는 두 코드를 모두 보유하며 권장 값을 제공하기도 한다.'
standardBody: IATA
aliases:
  - Equipment Code
  - Aircraft Type Designator
  - Equipment Type Code
  - IATA Aircraft Type Code
  - ICAO Aircraft Type Designator
providerTerms:
  - provider: OAG
    term: Equipment / Aircraft Type
    context: OAG schedule data carries IATA (3-char) and ICAO (4-char) equipment codes plus an OAG recommended type
    context_ko: OAG 스케줄 데이터는 IATA(3자리)·ICAO(4자리) 장비 코드와 OAG 권장 기종을 함께 제공한다
    relationship: related
relationships:
  - type: related
    targetTerm: IATA Code
  - type: related
    targetTerm: ICAO Code
  - type: related
    targetTerm: Flight Number
  - type: related
    targetTerm: Operating Carrier
distinctions:
  - targetTerm: ICAO Code
    explanation: 'The IATA aircraft type code is 3 characters for commercial/schedule use; the ICAO aircraft type designator is up to 4 characters for ATC and flight planning, reflecting performance rather than commercial differences.'
    explanation_ko: 'IATA 항공기 기종 코드는 상업·스케줄 용도의 3자리이고, ICAO 항공기 기종 지정 코드는 ATC·비행 계획용의 최대 4자리로 상업적 차이가 아니라 성능 차이를 반영한다.'
sources:
  - org: IATA
    name: Standard Schedules Information Manual (SSIM)
    version: ''
    section: ''
    url: ''
  - org: OAG
    name: 'Master Data: Equipment Data Fields Explained'
    version: ''
    section: ''
    url: 'https://knowledge.oag.com/docs/master-data-equipment-data-fields-explained'
  - org: Wikipedia
    name: List of aircraft type designators
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/List_of_aircraft_type_designators'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6c2.5 0 3.5 4 3.5 9v6l13 8v3l-13-4v7l4 3v2l-7.5-2L17 50v-2l4-3v-7l-13 4v-3l13-8v-6c0-5 1-9 3-9z" transform="translate(0 -4)"/></svg>
---

> A short code identifying the type/variant of aircraft operating a flight. The IATA aircraft type designator is 3 characters and reflects commercial differences (e.g., 738 for Boeing 737-800, 388 for Airbus A380-800); the ICAO designator is up to 4 characters and reflects operational/performance differences (e.g., B738, A388).

IATA aircraft type designators are 3 characters and are used in schedules, displays, and reservation systems to distinguish types and variants that matter commercially (size, role, cabin configuration). ICAO type designators run up to 4 characters and are used for air traffic control and flight planning, distinguishing variants by performance. Because the two systems are built for different purposes, a single physical aircraft can map to one ICAO code but multiple IATA codes (or vice versa). Schedule data providers such as OAG carry both and may publish a recommended value.

**한국어 / Korean** — **항공기 기종 코드(장비 코드)** — 항공편을 운항하는 항공기의 기종/형식을 식별하는 짧은 코드. IATA 항공기 기종 지정 코드는 3자리로 상업적 차이를 반영하고(예: Boeing 737-800은 738, Airbus A380-800은 388), ICAO 지정 코드는 최대 4자리로 운항·성능상의 차이를 반영한다(예: B738, A388).

IATA 항공기 기종 지정 코드는 3자리이며, 스케줄·표시 화면·예약 시스템에서 상업적으로 의미 있는(크기, 용도, 객실 구성) 기종 및 형식을 구분하는 데 쓰인다. ICAO 기종 지정 코드는 최대 4자리이며, 항공교통관제와 비행 계획에 사용되어 성능에 따라 형식을 구분한다. 두 체계가 서로 다른 목적으로 만들어졌기 때문에, 하나의 실제 항공기가 ICAO 코드는 하나이면서 IATA 코드는 여러 개에 대응(또는 그 반대)할 수 있다. OAG 같은 스케줄 데이터 제공사는 두 코드를 모두 보유하며 권장 값을 제공하기도 한다.

**Aliases:** `Equipment Code`, `Aircraft Type Designator`, `Equipment Type Code`, `IATA Aircraft Type Code`, `ICAO Aircraft Type Designator`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OAG | `Equipment / Aircraft Type` | related | OAG schedule data carries IATA (3-char) and ICAO (4-char) equipment codes plus an OAG recommended type |

# Related
- [IATA Code](/codes/iata-code.md) — related
- [ICAO Code](/codes/icao-code.md) — related
- [Flight Number](/codes/flight-number.md) — related
- [Operating Carrier](/air-partner/operating-carrier.md) — related

# Distinctions
- **Aircraft Type Code** vs [ICAO Code](/codes/icao-code.md) — The IATA aircraft type code is 3 characters for commercial/schedule use; the ICAO aircraft type designator is up to 4 characters for ATC and flight planning, reflecting performance rather than commercial differences.

# Citations
[1] IATA — Standard Schedules Information Manual (SSIM)
[2] [OAG — Master Data: Equipment Data Fields Explained](https://knowledge.oag.com/docs/master-data-equipment-data-fields-explained)
[3] [Wikipedia — List of aircraft type designators](https://en.wikipedia.org/wiki/List_of_aircraft_type_designators)
