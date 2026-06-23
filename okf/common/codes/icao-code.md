---
type: Code
title: ICAO Code
description: 'An umbrella term for codes assigned by the International Civil Aviation Organization (ICAO), principally the 4-letter location indicator for airports/aerodromes and the 3-letter airline designator. ICAO codes are used primarily for air traffic control, flight planning, and operational communications.'
tags:
  - codes
  - ambiguous
  - ICAO
timestamp: '2026-06-15T00:00:00Z'
id: icao-code
vertical: common
category: codes
conceptType: code
status: ambiguous
abbreviation: ICAO
term_ko: ICAO 코드
definition_ko: '국제민간항공기구(ICAO)가 부여하는 코드를 포괄적으로 일컫는 용어로, 주로 공항/비행장을 위한 4자리 위치 지시자와 3자리 항공사 지정 코드를 가리킨다. ICAO 코드는 주로 항공교통관제, 비행 계획, 운항 통신에 사용된다.'
longDef: 'ICAO 4-letter location indicators are structured regionally: the first one or two letters denote a region and country (e.g., ''K'' for the contiguous USA, ''EG'' for the UK), making them globally unique. ICAO 3-letter airline designators are paired with a telephony/call sign for radio communication. Unlike IATA codes, ICAO codes cover aerodromes that have no commercial air service and are oriented toward operations rather than ticketing or consumer display.'
longDef_ko: 'ICAO의 4자리 위치 지시자는 지역별로 구조화되어 있다. 첫 한두 글자가 지역과 국가를 나타내며(예: 미국 본토는 ''K'', 영국은 ''EG''), 이로써 전 세계적으로 고유성을 갖는다. ICAO의 3자리 항공사 지정 코드는 무선 통신을 위한 전화 호출 부호(콜사인)와 짝을 이룬다. IATA 코드와 달리 ICAO 코드는 상업 항공 서비스가 없는 비행장까지 포괄하며, 발권이나 소비자 대상 표시보다 운항에 초점이 맞춰져 있다.'
standardBody: ICAO
aliases:
  - ICAO Location Indicator
  - ICAO Designator
  - ICAO Airport Code
  - ICAO Airline Designator
relationships:
  - type: contrasts
    targetTerm: IATA Code
  - type: narrower
    targetTerm: Airport Code
  - type: narrower
    targetTerm: Airline Designator
distinctions:
  - targetTerm: IATA Code
    explanation: 'ICAO codes are 4-letter (airport) / 3-letter (airline), globally unique and operations-focused; IATA codes are shorter and used for commercial booking and display.'
    explanation_ko: 'ICAO 코드는 4자리(공항)/3자리(항공사)로 전 세계적으로 고유하며 운항 중심인 반면, IATA 코드는 더 짧고 상업적 예약 및 표시에 사용된다.'
  - targetTerm: Aircraft Registration
    explanation: The ICAO 24-bit aircraft address (used by Mode S / ADS-B transponders) is a separate hardware identifier; the registration is the human-readable Annex 7 mark on the airframe. The two are mapped to each other but are not the same value.
    explanation_ko: '(Mode S / ADS-B 트랜스폰더가 쓰는) ICAO 24비트 항공기 주소는 별개의 하드웨어 식별자이고, 등록기호는 기체에 표기되는 Annex 7의 사람이 읽을 수 있는 기호다. 둘은 서로 매핑되지만 같은 값은 아니다.'
  - targetTerm: Aircraft Type Code
    explanation: 'The IATA aircraft type code is 3 characters for commercial/schedule use; the ICAO aircraft type designator is up to 4 characters for ATC and flight planning, reflecting performance rather than commercial differences.'
    explanation_ko: 'IATA 항공기 기종 코드는 상업·스케줄 용도의 3자리이고, ICAO 항공기 기종 지정 코드는 ATC·비행 계획용의 최대 4자리로 상업적 차이가 아니라 성능 차이를 반영한다.'
  - targetTerm: Airline Designator
    explanation: The IATA airline designator is 2 characters for commercial use; the ICAO airline designator is 3 letters with a call sign for operational/ATC use.
    explanation_ko: 'IATA 항공사 지정 코드는 상업적 용도의 2자리이고, ICAO 항공사 지정 코드는 운항/ATC 용도의 3자리로 콜사인을 동반한다.'
sources:
  - name: Doc 7910 — Location Indicators
    org: ICAO
    version: Doc 7910/199
    section: ''
    url: 'https://store.icao.int/en/location-indicators-doc-7910'
    tier: standard-body
    verifyQuote: Location Indicators (Doc 7910/199)
    verified: true
  - name: 'Doc 8585 — Designators for Aircraft Operating Agencies, Aeronautical Authorities and Services'
    org: ICAO
    version: ''
    section: ''
    url: 'https://www.icao.int/operational-safety/Designators-and-indicators'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="20" r="13"/><path d="M11 20h26M24 7c5 4 5 22 0 26M24 7c-5 4-5 22 0 26"/><rect x="8" y="36" width="32" height="8" rx="2"/><path d="M13 40h2M18 40h2M23 40h2M28 40h2"/></svg>
---

> An umbrella term for codes assigned by the International Civil Aviation Organization (ICAO), principally the 4-letter location indicator for airports/aerodromes and the 3-letter airline designator. ICAO codes are used primarily for air traffic control, flight planning, and operational communications.

ICAO 4-letter location indicators are structured regionally: the first one or two letters denote a region and country (e.g., 'K' for the contiguous USA, 'EG' for the UK), making them globally unique. ICAO 3-letter airline designators are paired with a telephony/call sign for radio communication. Unlike IATA codes, ICAO codes cover aerodromes that have no commercial air service and are oriented toward operations rather than ticketing or consumer display.

**한국어 / Korean** — **ICAO 코드** — 국제민간항공기구(ICAO)가 부여하는 코드를 포괄적으로 일컫는 용어로, 주로 공항/비행장을 위한 4자리 위치 지시자와 3자리 항공사 지정 코드를 가리킨다. ICAO 코드는 주로 항공교통관제, 비행 계획, 운항 통신에 사용된다.

ICAO의 4자리 위치 지시자는 지역별로 구조화되어 있다. 첫 한두 글자가 지역과 국가를 나타내며(예: 미국 본토는 'K', 영국은 'EG'), 이로써 전 세계적으로 고유성을 갖는다. ICAO의 3자리 항공사 지정 코드는 무선 통신을 위한 전화 호출 부호(콜사인)와 짝을 이룬다. IATA 코드와 달리 ICAO 코드는 상업 항공 서비스가 없는 비행장까지 포괄하며, 발권이나 소비자 대상 표시보다 운항에 초점이 맞춰져 있다.

**Aliases:** `ICAO Location Indicator`, `ICAO Designator`, `ICAO Airport Code`, `ICAO Airline Designator`

# Related
- [IATA Code](/common/codes/iata-code.md) — contrasts
- [Airport Code](/common/codes/airport-code.md) — narrower
- [Airline Designator](/common/codes/airline-designator.md) — narrower

# Distinctions
- **ICAO Code** vs [IATA Code](/common/codes/iata-code.md) — ICAO codes are 4-letter (airport) / 3-letter (airline), globally unique and operations-focused; IATA codes are shorter and used for commercial booking and display.
- **ICAO Code** vs [Aircraft Registration](/common/codes/aircraft-registration.md) — The ICAO 24-bit aircraft address (used by Mode S / ADS-B transponders) is a separate hardware identifier; the registration is the human-readable Annex 7 mark on the airframe. The two are mapped to each other but are not the same value.
- **ICAO Code** vs [Aircraft Type Code](/common/codes/aircraft-type-code.md) — The IATA aircraft type code is 3 characters for commercial/schedule use; the ICAO aircraft type designator is up to 4 characters for ATC and flight planning, reflecting performance rather than commercial differences.
- **ICAO Code** vs [Airline Designator](/common/codes/airline-designator.md) — The IATA airline designator is 2 characters for commercial use; the ICAO airline designator is 3 letters with a call sign for operational/ATC use.

# Citations
[1] [ICAO — Doc 7910 — Location Indicators — Doc 7910/199](https://store.icao.int/en/location-indicators-doc-7910)
[2] [ICAO — Doc 8585 — Designators for Aircraft Operating Agencies, Aeronautical Authorities and Services](https://www.icao.int/operational-safety/Designators-and-indicators)
