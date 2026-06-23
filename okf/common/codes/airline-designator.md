---
type: Code
title: Airline Designator
description: 'A code identifying an airline. The 2-character IATA airline designator (e.g., AA, BA, LH) is used in reservations, ticketing, and flight numbers, while the 3-letter ICAO airline designator (e.g., AAL, BAW, DLH) is used operationally and is paired with a radio call sign.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: airline-designator
vertical: common
category: codes
conceptType: code
status: active
term_ko: 항공사 지정 코드
definition_ko: '항공사를 식별하는 코드. 2자리 IATA 항공사 지정 코드(예: AA, BA, LH)는 예약, 발권, 편명에 사용되고, 3자리 ICAO 항공사 지정 코드(예: AAL, BAW, DLH)는 운항에 사용되며 무선 호출 부호(콜사인)와 짝을 이룬다.'
longDef: 'IATA airline designators are two characters (alphabetic or alphanumeric) and form the prefix of a flight number (e.g., ''AA100''). Because the 2-character space is limited, IATA also issues controlled-duplicate and numeric/alpha-numeric designators. ICAO 3-letter designators are unique and accompanied by a telephony designator (call sign) for ATC. The marketing carrier designator on a ticket may differ from the operating carrier designator under codeshare arrangements.'
longDef_ko: 'IATA 항공사 지정 코드는 2자리(알파벳 또는 영숫자 혼합)이며 편명의 접두어를 이룬다(예: ''AA100''). 2자리 공간이 제한적이기 때문에 IATA는 통제된 중복(controlled-duplicate) 코드와 숫자/영숫자 혼합 코드도 발급한다. ICAO의 3자리 지정 코드는 고유하며 ATC를 위한 전화 호출 부호(콜사인)를 동반한다. 공동운항(codeshare) 약정에서는 항공권에 표시되는 마케팅 항공사 지정 코드가 실제 운항 항공사 지정 코드와 다를 수 있다.'
standardBody: IATA
aliases:
  - Airline Code
  - Carrier Code
  - IATA Airline Designator
  - Two-Letter Airline Code
  - Marketing Carrier Code
providerTerms:
  - provider: NDC/IATA
    term: AirlineID
    context: 'NDC schema element carrying the carrier code (IATA 2-char per Resolution 762, or ICAO 3-letter) for marketing/operating carrier.'
    context_ko: 'NDC 스키마 요소로, 마케팅/운항 항공사의 항공사 코드(Resolution 762에 따른 IATA 2자리 또는 ICAO 3자리)를 담는다.'
    relationship: same
  - provider: ICAO (Doc 8585)
    term: ICAO three-letter designator
    context: '3-letter airline designator from ICAO Doc 8585 (e.g., AAL, BAW, DLH) used in ATC, flight plans and telephony, distinct from the IATA 2-char code.'
    context_ko: 'ICAO Doc 8585의 3자리 항공사 지정자(예: AAL, BAW, DLH)로 ATC·비행계획·통신에 사용되며 IATA 2자리 코드와 구별된다.'
    relationship: related
relationships:
  - type: narrower
    targetTerm: IATA Code
  - type: broader
    targetTerm: ICAO Code
  - type: related
    targetTerm: Marketing Carrier
  - type: related
    targetTerm: Operating Carrier
  - type: related
    targetTerm: Validating Carrier
distinctions:
  - targetTerm: ICAO Code
    explanation: The IATA airline designator is 2 characters for commercial use; the ICAO airline designator is 3 letters with a call sign for operational/ATC use.
    explanation_ko: 'IATA 항공사 지정 코드는 상업적 용도의 2자리이고, ICAO 항공사 지정 코드는 운항/ATC 용도의 3자리로 콜사인을 동반한다.'
  - targetTerm: Airline Accounting Code
    explanation: 'The accounting code is a 3-digit numeric airline identifier used in ticket/document numbers and settlement; the airline designator is the 2-character alphanumeric code (e.g., AA) used in reservations and flight numbers.'
    explanation_ko: '정산 코드는 항공권/서류 번호와 정산에 쓰이는 3자리 숫자 항공사 식별자이고, 항공사 지정 코드는 예약과 편명에 쓰이는 2자리 영숫자 코드(예: AA)이다.'
  - targetTerm: Chain Code
    explanation: A chain code (2 letters) identifies a hotel chain/brand in distribution; an airline designator (2 characters) identifies an air carrier — different domains despite both being short codes.
    explanation_ko: '체인 코드(2자리)는 유통에서 호텔 체인/브랜드를 식별하고, 항공사 지정 코드(2자리)는 항공 운송 사업자를 식별한다. 둘 다 짧은 코드이지만 서로 다른 영역에 속한다.'
  - targetTerm: RICS Code (Company Code)
    explanation: 'The RICS code is the four-digit numeric identifier for a railway undertaking or distributor in rail data exchange; an airline designator is the two-character IATA code identifying an airline. Both identify the carrier/actor in their mode''s distribution and messaging, but RICS is rail-specific and numeric while the designator is air-specific and alphanumeric.'
    explanation_ko: 'RICS 코드는 철도 데이터 교환에서 철도사업자·유통사를 식별하는 4자리 숫자 식별자이고, airline designator는 항공사를 식별하는 2자 IATA 코드다. 둘 다 각 교통수단의 유통·메시징에서 운송인/주체를 식별하지만, RICS는 철도 고유의 숫자 코드, designator는 항공 고유의 영숫자 코드다.'
  - targetTerm: Standard Carrier Alpha Code
    explanation: 'An IATA/ICAO airline designator identifies an air carrier for passenger and cargo aviation; the SCAC identifies a surface/ocean carrier (motor, rail, water) for freight EDI and customs. They name carriers in different transport modes and are issued by different bodies (IATA/ICAO vs. NMFTA).'
    explanation_ko: 'IATA/ICAO 항공사 지정 코드는 여객·화물 항공의 항공 운송사를 식별하지만, SCAC는 화물 EDI·세관용으로 지상/해상 운송사(도로·철도·해상)를 식별한다. 서로 다른 운송 수단의 운송사를 지칭하며 발급 기관도 다르다(IATA/ICAO 대 NMFTA).'
sources:
  - name: IATA Airline and Airport Code Search
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/directories/code-search/'
    tier: association
  - name: 'Doc 8585 — Designators for Aircraft Operating Agencies, Aeronautical Authorities and Services'
    org: ICAO
    version: ''
    section: ''
    url: 'https://www.icao.int/operational-safety/Designators-and-indicators'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14h22a6 6 0 0 1 0 12H10z"/><path d="M32 14l8-4M32 26l8 4"/><path d="M15 20h2M21 20h2"/></svg>
---

> A code identifying an airline. The 2-character IATA airline designator (e.g., AA, BA, LH) is used in reservations, ticketing, and flight numbers, while the 3-letter ICAO airline designator (e.g., AAL, BAW, DLH) is used operationally and is paired with a radio call sign.

IATA airline designators are two characters (alphabetic or alphanumeric) and form the prefix of a flight number (e.g., 'AA100'). Because the 2-character space is limited, IATA also issues controlled-duplicate and numeric/alpha-numeric designators. ICAO 3-letter designators are unique and accompanied by a telephony designator (call sign) for ATC. The marketing carrier designator on a ticket may differ from the operating carrier designator under codeshare arrangements.

**한국어 / Korean** — **항공사 지정 코드** — 항공사를 식별하는 코드. 2자리 IATA 항공사 지정 코드(예: AA, BA, LH)는 예약, 발권, 편명에 사용되고, 3자리 ICAO 항공사 지정 코드(예: AAL, BAW, DLH)는 운항에 사용되며 무선 호출 부호(콜사인)와 짝을 이룬다.

IATA 항공사 지정 코드는 2자리(알파벳 또는 영숫자 혼합)이며 편명의 접두어를 이룬다(예: 'AA100'). 2자리 공간이 제한적이기 때문에 IATA는 통제된 중복(controlled-duplicate) 코드와 숫자/영숫자 혼합 코드도 발급한다. ICAO의 3자리 지정 코드는 고유하며 ATC를 위한 전화 호출 부호(콜사인)를 동반한다. 공동운항(codeshare) 약정에서는 항공권에 표시되는 마케팅 항공사 지정 코드가 실제 운항 항공사 지정 코드와 다를 수 있다.

**Aliases:** `Airline Code`, `Carrier Code`, `IATA Airline Designator`, `Two-Letter Airline Code`, `Marketing Carrier Code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `AirlineID` | same | NDC schema element carrying the carrier code (IATA 2-char per Resolution 762, or ICAO 3-letter) for marketing/operating carrier. |
| ICAO (Doc 8585) | `ICAO three-letter designator` | related | 3-letter airline designator from ICAO Doc 8585 (e.g., AAL, BAW, DLH) used in ATC, flight plans and telephony, distinct from the IATA 2-char code. |

# Related
- [IATA Code](/common/codes/iata-code.md) — narrower
- [ICAO Code](/common/codes/icao-code.md) — broader
- [Marketing Carrier](/air/air-partner/marketing-carrier.md) — related
- [Operating Carrier](/air/air-partner/operating-carrier.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related

# Distinctions
- **Airline Designator** vs [ICAO Code](/common/codes/icao-code.md) — The IATA airline designator is 2 characters for commercial use; the ICAO airline designator is 3 letters with a call sign for operational/ATC use.
- **Airline Designator** vs [Airline Accounting Code](/common/codes/airline-accounting-code.md) — The accounting code is a 3-digit numeric airline identifier used in ticket/document numbers and settlement; the airline designator is the 2-character alphanumeric code (e.g., AA) used in reservations and flight numbers.
- **Airline Designator** vs [Chain Code](/common/codes/chain-code.md) — A chain code (2 letters) identifies a hotel chain/brand in distribution; an airline designator (2 characters) identifies an air carrier — different domains despite both being short codes.
- **Airline Designator** vs [RICS Code (Company Code)](/ground/rail/rics-code.md) — The RICS code is the four-digit numeric identifier for a railway undertaking or distributor in rail data exchange; an airline designator is the two-character IATA code identifying an airline. Both identify the carrier/actor in their mode's distribution and messaging, but RICS is rail-specific and numeric while the designator is air-specific and alphanumeric.
- **Airline Designator** vs [Standard Carrier Alpha Code](/common/codes/standard-carrier-alpha-code.md) — An IATA/ICAO airline designator identifies an air carrier for passenger and cargo aviation; the SCAC identifies a surface/ocean carrier (motor, rail, water) for freight EDI and customs. They name carriers in different transport modes and are issued by different bodies (IATA/ICAO vs. NMFTA).

# Citations
[1] [IATA — IATA Airline and Airport Code Search](https://www.iata.org/en/publications/directories/code-search/)
[2] [ICAO — Doc 8585 — Designators for Aircraft Operating Agencies, Aeronautical Authorities and Services](https://www.icao.int/operational-safety/Designators-and-indicators)
