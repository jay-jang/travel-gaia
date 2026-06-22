---
type: Code
title: Pseudo City Code
description: 'An alphanumeric identifier assigned by a GDS/CRS to a subscriber such as a travel agency or corporate travel department, used to associate bookings with the agency, access private (negotiated) fares, and control privileges. Despite the name it does not identify a geographic city.'
tags:
  - codes
  - active
timestamp: '2026-06-15T00:00:00Z'
id: pseudo-city-code
vertical: common
category: codes
conceptType: code
status: active
abbreviation: PCC
term_ko: 의사 도시 코드(PCC)
definition_ko: 'GDS/CRS가 여행사나 기업 출장 부서 같은 가입자에게 부여하는 영숫자 식별자로, 예약을 해당 여행사와 연결하고, 비공개(협상) 운임에 접근하며, 권한을 통제하는 데 사용된다. 명칭과 달리 지리적 도시를 식별하지 않는다.'
longDef: 'A PCC scopes ownership and visibility of PNRs/bookings within a GDS: agents normally can only access reservations created under their own PCC. It also governs entitlements such as agency-specific negotiated (private) fares, queues, and ticketing authority. Format and length vary by vendor (Sabre/Travelport typically 3-4 characters; Amadeus uses a longer Office ID of up to nine characters), and across systems the concept is variously called Pseudo City Code, Office ID, or Subscriber ID.'
longDef_ko: 'PCC는 GDS 내에서 PNR/예약의 소유권과 가시성을 한정한다. 대개 직원은 자신의 PCC로 생성된 예약만 접근할 수 있다. 또한 여행사별 협상(비공개) 운임, 큐(queue), 발권 권한 같은 권한을 관리한다. 형식과 길이는 사업자별로 다르며(Sabre/Travelport는 일반적으로 3~4자리, Amadeus는 최대 9자리의 더 긴 Office ID를 사용), 시스템에 따라 이 개념은 Pseudo City Code, Office ID, Subscriber ID 등으로 다양하게 불린다.'
aliases:
  - Office ID
  - OID
  - Subscriber ID
  - Agency Pseudo City Code
providerTerms:
  - provider: Amadeus
    term: Office ID
    context: 'Amadeus identifier for an agency/office, analogous to a PCC'
    context_ko: 여행사/사무소를 식별하는 Amadeus의 식별자로 PCC에 해당한다
    relationship: same
  - provider: Sabre
    term: Pseudo City Code (PCC)
    context: Sabre agency identifier scoping bookings and fares
    context_ko: 예약과 운임의 범위를 한정하는 Sabre의 여행사 식별자
    relationship: same
  - provider: Travelport
    term: Pseudo City Code (PCC)
    context: Travelport agency/office identifier
    context_ko: Travelport의 여행사/사무소 식별자
    relationship: same
relationships:
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Queue
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: City Code
    explanation: A City Code is an IATA geographic metro-area code; a Pseudo City Code identifies a GDS subscriber/agency and is not geographic despite the name.
    explanation_ko: '도시 코드는 IATA의 지리적 대도시권 코드인 반면, 의사 도시 코드(PCC)는 GDS 가입자/여행사를 식별하며 명칭과 달리 지리적 의미가 없다.'
  - targetTerm: IATA Number
    explanation: 'An IATA Number is the agency''s industry accreditation/settlement identifier (7-8 digits); a Pseudo City Code / Office ID is a GDS-internal subscriber identifier scoping bookings, fares, and privileges within one GDS.'
    explanation_ko: 'IATA 번호는 여행사의 업계 인가·정산 식별자(7~8자리)이고, Pseudo City Code / Office ID는 하나의 GDS 내부에서 예약·운임·권한 범위를 한정하는 GDS 가입자 식별자이다.'
  - targetTerm: TIDS Code
    explanation: A Pseudo City Code identifies an agency office within a specific GDS host; a TIDS code is an IATA-wide identity recognized across suppliers and systems regardless of GDS.
    explanation_ko: 'Pseudo City Code는 특정 GDS 호스트 내부에서 대리점 사무소를 식별하는 반면, TIDS 코드는 GDS와 무관하게 여러 공급자·시스템에 걸쳐 통용되는 IATA 차원의 식별자다.'
sources:
  - name: Pseudo city code
    org: Wikipedia
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Pseudo_city_code'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 28h6V14l4-3 4 3v14"/><path d="M22 28V18h8v10"/><path d="M8 38c2-3 5-3 7 0s5 3 7 0 5-3 7 0 5 3 7 0"/></svg>
---

> An alphanumeric identifier assigned by a GDS/CRS to a subscriber such as a travel agency or corporate travel department, used to associate bookings with the agency, access private (negotiated) fares, and control privileges. Despite the name it does not identify a geographic city.

A PCC scopes ownership and visibility of PNRs/bookings within a GDS: agents normally can only access reservations created under their own PCC. It also governs entitlements such as agency-specific negotiated (private) fares, queues, and ticketing authority. Format and length vary by vendor (Sabre/Travelport typically 3-4 characters; Amadeus uses a longer Office ID of up to nine characters), and across systems the concept is variously called Pseudo City Code, Office ID, or Subscriber ID.

**한국어 / Korean** — **의사 도시 코드(PCC)** — GDS/CRS가 여행사나 기업 출장 부서 같은 가입자에게 부여하는 영숫자 식별자로, 예약을 해당 여행사와 연결하고, 비공개(협상) 운임에 접근하며, 권한을 통제하는 데 사용된다. 명칭과 달리 지리적 도시를 식별하지 않는다.

PCC는 GDS 내에서 PNR/예약의 소유권과 가시성을 한정한다. 대개 직원은 자신의 PCC로 생성된 예약만 접근할 수 있다. 또한 여행사별 협상(비공개) 운임, 큐(queue), 발권 권한 같은 권한을 관리한다. 형식과 길이는 사업자별로 다르며(Sabre/Travelport는 일반적으로 3~4자리, Amadeus는 최대 9자리의 더 긴 Office ID를 사용), 시스템에 따라 이 개념은 Pseudo City Code, Office ID, Subscriber ID 등으로 다양하게 불린다.

**Aliases:** `Office ID`, `OID`, `Subscriber ID`, `Agency Pseudo City Code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Office ID` | same | Amadeus identifier for an agency/office, analogous to a PCC |
| Sabre | `Pseudo City Code (PCC)` | same | Sabre agency identifier scoping bookings and fares |
| Travelport | `Pseudo City Code (PCC)` | same | Travelport agency/office identifier |

# Related
- [GDS](/common/standards/gds.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [Queue](/air/air-ops/queue.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **Pseudo City Code** vs [City Code](/common/codes/city-code.md) — A City Code is an IATA geographic metro-area code; a Pseudo City Code identifies a GDS subscriber/agency and is not geographic despite the name.
- **Pseudo City Code** vs [IATA Number](/common/codes/iata-number.md) — An IATA Number is the agency's industry accreditation/settlement identifier (7-8 digits); a Pseudo City Code / Office ID is a GDS-internal subscriber identifier scoping bookings, fares, and privileges within one GDS.
- **Pseudo City Code** vs [TIDS Code](/common/codes/tids-code.md) — A Pseudo City Code identifies an agency office within a specific GDS host; a TIDS code is an IATA-wide identity recognized across suppliers and systems regardless of GDS.

# Citations
[1] [Wikipedia — Pseudo city code](https://en.wikipedia.org/wiki/Pseudo_city_code)
