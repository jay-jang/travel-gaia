---
type: Code
title: Aircraft Registration
description: 'The unique alphanumeric mark assigned to an individual airframe, comprising a nationality mark (prefix indicating the State of Registry) and a registration mark, as governed by ICAO Annex 7 to the Chicago Convention. Commonly called the tail number (e.g., N-, G-, D-, HL-), it identifies one specific physical aircraft.'
tags:
  - codes
  - active
  - ICAO
timestamp: '2026-06-18T00:00:00Z'
id: aircraft-registration
vertical: common
category: codes
conceptType: code
status: active
term_ko: 항공기 등록기호(테일 넘버)
definition_ko: '개별 기체(airframe)에 부여되는 고유 영숫자 기호로, 국적기호(prefix, 등록국을 나타냄)와 등록기호로 구성되며 시카고협약 부속서 7(ICAO Annex 7)의 규율을 받는다. 흔히 테일 넘버(tail number, 예: N-, G-, D-, HL-)라 불리며, 하나의 특정 실제 항공기를 식별한다.'
longDef: 'Under ICAO Annex 7, the nationality mark is drawn from the radio call-sign series the ITU allocates to each State, and it precedes the registration mark (separated by a hyphen in most states; the United States uses ''N'' immediately followed by the registration with no hyphen). The registration is tied to the airframe rather than to a route, flight, or operator: a single aircraft holds one registration in one jurisdiction at a time, but it can be re-registered — including to a different country with a new prefix — when sold or transferred. In schedules, operations, and tracking, the registration pinpoints the exact aircraft assigned to a leg, which is why it differs from the generic aircraft type code (a class of aircraft) and from the flight number (a commercial service that any eligible airframe can operate).'
longDef_ko: 'ICAO Annex 7에 따라 국적기호는 ITU가 각 국가에 배정한 무선 호출부호 계열에서 정해지며, 등록기호 앞에 온다(대부분의 국가는 하이픈으로 구분하나, 미국은 ''N'' 뒤에 하이픈 없이 등록기호가 바로 이어진다). 등록기호는 노선·항공편·운항사가 아니라 기체 자체에 결속된다. 한 항공기는 동시에 한 관할권에서 하나의 등록기호만 가지지만, 매각·이전 시 다른 국가의 새 prefix로 재등록될 수 있다. 스케줄·운영·추적에서 등록기호는 특정 구간(leg)에 배정된 정확한 항공기를 짚어내며, 그래서 (기종 부류를 나타내는) 항공기 기종 코드나 (자격을 갖춘 어떤 기체든 운항할 수 있는 상업 서비스인) 편명과는 구별된다.'
standardBody: ICAO
aliases:
  - Tail Number
  - Registration Mark
  - Nationality and Registration Marks
  - Reg
  - Aircraft Tail Number
providerTerms:
  - provider: Industry / OAG / Cirium
    term: Tail number
    context: 'Common operational and fleet-tracking term for the same airframe registration mark (e.g., N12345, G-XWBA).'
    context_ko: '동일한 기체 등록부호를 가리키는 운항·기단 추적 현장 용어(예: N12345, G-XWBA).'
    relationship: same
  - provider: ICAO Annex 7
    term: Nationality mark + registration mark
    context: 'ICAO-defined structure: a nationality/common mark (State of Registry prefix) followed by the registration mark, typically hyphen-separated.'
    context_ko: 'ICAO가 정의한 구조로, 국적/공통 부호(등록국 프리픽스) 뒤에 등록부호가 오며 보통 하이픈으로 구분된다.'
    relationship: broader
relationships:
  - type: related
    targetTerm: Aircraft Type Code
  - type: related
    targetTerm: ICAO Code
  - type: related
    targetTerm: Flight Number
  - type: related
    targetTerm: Operating Carrier
distinctions:
  - targetTerm: Aircraft Type Code
    explanation: 'An aircraft type code names a class/variant of aircraft (e.g., 738 / B738 for a 737-800); the aircraft registration names one specific airframe of that type (e.g., G-EUYA). Type is shared by many aircraft; the registration is unique to one.'
    explanation_ko: '항공기 기종 코드는 항공기의 부류/형식(예: 737-800에 대한 738 / B738)을 가리키지만, 항공기 등록기호는 그 기종에 속한 하나의 특정 기체(예: G-EUYA)를 가리킨다. 기종은 여러 항공기가 공유하지만, 등록기호는 한 대에만 고유하다.'
  - targetTerm: ICAO Code
    explanation: The ICAO 24-bit aircraft address (used by Mode S / ADS-B transponders) is a separate hardware identifier; the registration is the human-readable Annex 7 mark on the airframe. The two are mapped to each other but are not the same value.
    explanation_ko: '(Mode S / ADS-B 트랜스폰더가 쓰는) ICAO 24비트 항공기 주소는 별개의 하드웨어 식별자이고, 등록기호는 기체에 표기되는 Annex 7의 사람이 읽을 수 있는 기호다. 둘은 서로 매핑되지만 같은 값은 아니다.'
  - targetTerm: Flight Number
    explanation: A flight number is a commercial service identifier reused daily; the aircraft registration identifies the physical aircraft that happens to operate that flight on a given day.
    explanation_ko: '편명은 매일 재사용되는 상업 서비스 식별자이고, 항공기 등록기호는 특정 날짜에 그 항공편을 운항하는 물리적 항공기를 식별한다.'
sources:
  - org: ICAO
    name: Annex 7 — Aircraft Nationality and Registration Marks
    version: ''
    section: ''
    url: 'https://www.icao.int/sites/default/files/postalhistory/annex_7_aircraft_nationality_and_registration_marks.htm'
  - org: Wikipedia
    name: Aircraft registration
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Aircraft_registration'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8c2 0 3 3 3 8v6l12 7v3l-12-4v6l4 3v2l-7-2-7 2v-2l4-3v-6l-12 4v-3l12-7v-6c0-5 1-8 3-8z"/><rect x="15" y="40" width="18" height="6" rx="1.5"/><path d="M19 43h2M24 43h1M28 43h1"/></svg>
---

> The unique alphanumeric mark assigned to an individual airframe, comprising a nationality mark (prefix indicating the State of Registry) and a registration mark, as governed by ICAO Annex 7 to the Chicago Convention. Commonly called the tail number (e.g., N-, G-, D-, HL-), it identifies one specific physical aircraft.

Under ICAO Annex 7, the nationality mark is drawn from the radio call-sign series the ITU allocates to each State, and it precedes the registration mark (separated by a hyphen in most states; the United States uses 'N' immediately followed by the registration with no hyphen). The registration is tied to the airframe rather than to a route, flight, or operator: a single aircraft holds one registration in one jurisdiction at a time, but it can be re-registered — including to a different country with a new prefix — when sold or transferred. In schedules, operations, and tracking, the registration pinpoints the exact aircraft assigned to a leg, which is why it differs from the generic aircraft type code (a class of aircraft) and from the flight number (a commercial service that any eligible airframe can operate).

**한국어 / Korean** — **항공기 등록기호(테일 넘버)** — 개별 기체(airframe)에 부여되는 고유 영숫자 기호로, 국적기호(prefix, 등록국을 나타냄)와 등록기호로 구성되며 시카고협약 부속서 7(ICAO Annex 7)의 규율을 받는다. 흔히 테일 넘버(tail number, 예: N-, G-, D-, HL-)라 불리며, 하나의 특정 실제 항공기를 식별한다.

ICAO Annex 7에 따라 국적기호는 ITU가 각 국가에 배정한 무선 호출부호 계열에서 정해지며, 등록기호 앞에 온다(대부분의 국가는 하이픈으로 구분하나, 미국은 'N' 뒤에 하이픈 없이 등록기호가 바로 이어진다). 등록기호는 노선·항공편·운항사가 아니라 기체 자체에 결속된다. 한 항공기는 동시에 한 관할권에서 하나의 등록기호만 가지지만, 매각·이전 시 다른 국가의 새 prefix로 재등록될 수 있다. 스케줄·운영·추적에서 등록기호는 특정 구간(leg)에 배정된 정확한 항공기를 짚어내며, 그래서 (기종 부류를 나타내는) 항공기 기종 코드나 (자격을 갖춘 어떤 기체든 운항할 수 있는 상업 서비스인) 편명과는 구별된다.

**Aliases:** `Tail Number`, `Registration Mark`, `Nationality and Registration Marks`, `Reg`, `Aircraft Tail Number`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Industry / OAG / Cirium | `Tail number` | same | Common operational and fleet-tracking term for the same airframe registration mark (e.g., N12345, G-XWBA). |
| ICAO Annex 7 | `Nationality mark + registration mark` | broader | ICAO-defined structure: a nationality/common mark (State of Registry prefix) followed by the registration mark, typically hyphen-separated. |

# Related
- [Aircraft Type Code](/common/codes/aircraft-type-code.md) — related
- [ICAO Code](/common/codes/icao-code.md) — related
- [Flight Number](/common/codes/flight-number.md) — related
- [Operating Carrier](/air/air-partner/operating-carrier.md) — related

# Distinctions
- **Aircraft Registration** vs [Aircraft Type Code](/common/codes/aircraft-type-code.md) — An aircraft type code names a class/variant of aircraft (e.g., 738 / B738 for a 737-800); the aircraft registration names one specific airframe of that type (e.g., G-EUYA). Type is shared by many aircraft; the registration is unique to one.
- **Aircraft Registration** vs [ICAO Code](/common/codes/icao-code.md) — The ICAO 24-bit aircraft address (used by Mode S / ADS-B transponders) is a separate hardware identifier; the registration is the human-readable Annex 7 mark on the airframe. The two are mapped to each other but are not the same value.
- **Aircraft Registration** vs [Flight Number](/common/codes/flight-number.md) — A flight number is a commercial service identifier reused daily; the aircraft registration identifies the physical aircraft that happens to operate that flight on a given day.

# Citations
[1] [ICAO — Annex 7 — Aircraft Nationality and Registration Marks](https://www.icao.int/sites/default/files/postalhistory/annex_7_aircraft_nationality_and_registration_marks.htm)
[2] [Wikipedia — Aircraft registration](https://en.wikipedia.org/wiki/Aircraft_registration)
