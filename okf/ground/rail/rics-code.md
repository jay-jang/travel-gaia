---
type: Code
title: RICS Code (Company Code)
description: 'The RICS (Railway Interchange Coding System) code is a four-digit numeric code issued by the UIC that uniquely identifies a railway undertaking, infrastructure manager, distributor or other organisation operating in the railway sector. It is the core company identifier used across rail data exchange, ticketing and OSDM/TAP-TSI messaging, functioning as the rail analogue of an airline designator or IATA airline accounting code.'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-06-18T00:00:00Z'
id: rics-code
vertical: ground
category: rail
conceptType: code
status: active
abbreviation: RICS
term_ko: RICS 코드(철도 회사코드)
definition_ko: 'RICS(Railway Interchange Coding System) 코드는 UIC가 발급하는 4자리 숫자 코드로, 철도 부문에서 활동하는 철도사업자·인프라관리자·유통사 등 조직을 고유 식별한다. 철도 데이터 교환·발권·OSDM/TAP-TSI 메시징 전반에서 쓰이는 핵심 회사 식별자로, 항공의 airline designator나 IATA airline accounting code에 대응하는 역할을 한다.'
longDef: 'RICS company codes are allocated and maintained by the UIC (contact via its code office) and published in a regularly updated allocation table sorted by code. The four-digit numeric value identifies the actor in inter-company data exchange — for timetables, reservations, ticketing, settlement and the OSDM distribution roles — so that fares, bookings and messages can be unambiguously attributed to a carrier, distributor or fare provider. Companies involved in TAF/TAP data exchange and those cooperating with OSJD members obtain a four-digit RICS code from UIC. In the EU, the ERA-operated Organisation Code Register (OCR) is a related but separate register: every entity interacting with ERA-hosted registers needs an ERA Organisation Code, and where a company already holds a UIC RICS code, ERA allocates an Organisation Code with the same value.'
longDef_ko: 'RICS 회사코드는 UIC(코드 담당 부서를 통해)가 배정·관리하며, 코드순으로 정렬되어 정기 갱신되는 배정표로 공표된다. 4자리 숫자 값은 시각표·예약·발권·정산 및 OSDM 유통 역할에서의 회사 간 데이터 교환에서 주체를 식별하여, 운임·예약·메시지를 특정 운송인·유통사·fare provider에 모호함 없이 귀속시킨다. TAF/TAP 데이터 교환에 참여하는 회사와 OSJD 회원과 협력하는 회사는 UIC로부터 4자리 RICS 코드를 받는다. EU에서는 ERA가 운영하는 조직코드등록부(OCR)가 관련은 있으나 별개의 등록부로, ERA 호스팅 등록부와 상호작용하는 모든 주체는 ERA Organisation Code가 필요하며, 이미 UIC RICS 코드를 보유한 회사에는 ERA가 동일 값의 Organisation Code를 배정한다.'
standardBody: UIC
aliases:
  - RICS
  - RICS Company Code
  - Railway Interchange Coding System
  - UIC Company Code
providerTerms:
  - provider: ERA (EU Agency for Railways)
    term: Organisation Code (OCR)
    context: 'ERA''s Organisation Code Register assigns each entity a code; for companies holding a UIC RICS code, ERA allocates an Organisation Code with the same value.'
    context_ko: 'ERA의 조직코드등록부(OCR)는 각 주체에 코드를 배정하며, UIC RICS 코드를 보유한 회사에는 동일 값의 Organisation Code를 배정한다.'
    relationship: related
relationships:
  - type: related
    targetTerm: Airline Designator
  - type: related
    targetTerm: Airline Accounting Code
  - type: related
    targetTerm: OSDM
  - type: related
    targetTerm: TAP TSI
  - type: related
    targetTerm: UN/LOCODE
  - type: contrasts
    targetTerm: Station Code
distinctions:
  - targetTerm: Airline Designator
    explanation: 'The RICS code is the four-digit numeric identifier for a railway undertaking or distributor in rail data exchange; an airline designator is the two-character IATA code identifying an airline. Both identify the carrier/actor in their mode''s distribution and messaging, but RICS is rail-specific and numeric while the designator is air-specific and alphanumeric.'
    explanation_ko: 'RICS 코드는 철도 데이터 교환에서 철도사업자·유통사를 식별하는 4자리 숫자 식별자이고, airline designator는 항공사를 식별하는 2자 IATA 코드다. 둘 다 각 교통수단의 유통·메시징에서 운송인/주체를 식별하지만, RICS는 철도 고유의 숫자 코드, designator는 항공 고유의 영숫자 코드다.'
  - targetTerm: Station Code
    explanation: 'RICS identifies the company (an organisation such as a railway undertaking or distributor); a station/location code identifies a physical point such as a station. RICS is a company identifier, not a place identifier — the rail place identifier is the UIC location code held in the CRD/ENEE.'
    explanation_ko: 'RICS는 회사(철도사업자·유통사 같은 조직)를 식별하고, station/location code는 역과 같은 물리적 지점을 식별한다. RICS는 장소가 아니라 회사 식별자이며, 철도의 장소 식별자는 CRD/ENEE에 담긴 UIC location code다.'
sources:
  - org: UIC
    name: Company Codes (RICS)
    version: ''
    section: ''
    url: ''
  - org: UIC
    name: List of numeric codes for railway companies (RICS Code)
    version: ''
    section: ''
    url: ''
  - org: ERA (European Union Agency for Railways)
    name: Organisation Code Register (OCR)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="14" width="32" height="20" rx="3"/><path d="M14 22h4M14 26h7M22 22h4M28 22h6M28 26h4"/><path d="M19 34v4M29 34v4"/></svg>
---

> The RICS (Railway Interchange Coding System) code is a four-digit numeric code issued by the UIC that uniquely identifies a railway undertaking, infrastructure manager, distributor or other organisation operating in the railway sector. It is the core company identifier used across rail data exchange, ticketing and OSDM/TAP-TSI messaging, functioning as the rail analogue of an airline designator or IATA airline accounting code.

RICS company codes are allocated and maintained by the UIC (contact via its code office) and published in a regularly updated allocation table sorted by code. The four-digit numeric value identifies the actor in inter-company data exchange — for timetables, reservations, ticketing, settlement and the OSDM distribution roles — so that fares, bookings and messages can be unambiguously attributed to a carrier, distributor or fare provider. Companies involved in TAF/TAP data exchange and those cooperating with OSJD members obtain a four-digit RICS code from UIC. In the EU, the ERA-operated Organisation Code Register (OCR) is a related but separate register: every entity interacting with ERA-hosted registers needs an ERA Organisation Code, and where a company already holds a UIC RICS code, ERA allocates an Organisation Code with the same value.

**한국어 / Korean** — **RICS 코드(철도 회사코드)** — RICS(Railway Interchange Coding System) 코드는 UIC가 발급하는 4자리 숫자 코드로, 철도 부문에서 활동하는 철도사업자·인프라관리자·유통사 등 조직을 고유 식별한다. 철도 데이터 교환·발권·OSDM/TAP-TSI 메시징 전반에서 쓰이는 핵심 회사 식별자로, 항공의 airline designator나 IATA airline accounting code에 대응하는 역할을 한다.

RICS 회사코드는 UIC(코드 담당 부서를 통해)가 배정·관리하며, 코드순으로 정렬되어 정기 갱신되는 배정표로 공표된다. 4자리 숫자 값은 시각표·예약·발권·정산 및 OSDM 유통 역할에서의 회사 간 데이터 교환에서 주체를 식별하여, 운임·예약·메시지를 특정 운송인·유통사·fare provider에 모호함 없이 귀속시킨다. TAF/TAP 데이터 교환에 참여하는 회사와 OSJD 회원과 협력하는 회사는 UIC로부터 4자리 RICS 코드를 받는다. EU에서는 ERA가 운영하는 조직코드등록부(OCR)가 관련은 있으나 별개의 등록부로, ERA 호스팅 등록부와 상호작용하는 모든 주체는 ERA Organisation Code가 필요하며, 이미 UIC RICS 코드를 보유한 회사에는 ERA가 동일 값의 Organisation Code를 배정한다.

**Aliases:** `RICS`, `RICS Company Code`, `Railway Interchange Coding System`, `UIC Company Code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ERA (EU Agency for Railways) | `Organisation Code (OCR)` | related | ERA's Organisation Code Register assigns each entity a code; for companies holding a UIC RICS code, ERA allocates an Organisation Code with the same value. |

# Related
- [Airline Designator](/common/codes/airline-designator.md) — related
- [Airline Accounting Code](/common/codes/airline-accounting-code.md) — related
- [OSDM](/ground/rail/osdm.md) — related
- [TAP TSI](/ground/rail/tap-tsi.md) — related
- [UN/LOCODE](/common/codes/un-locode.md) — related
- [Station Code](/common/codes/station-code.md) — contrasts

# Distinctions
- **RICS Code (Company Code)** vs [Airline Designator](/common/codes/airline-designator.md) — The RICS code is the four-digit numeric identifier for a railway undertaking or distributor in rail data exchange; an airline designator is the two-character IATA code identifying an airline. Both identify the carrier/actor in their mode's distribution and messaging, but RICS is rail-specific and numeric while the designator is air-specific and alphanumeric.
- **RICS Code (Company Code)** vs [Station Code](/common/codes/station-code.md) — RICS identifies the company (an organisation such as a railway undertaking or distributor); a station/location code identifies a physical point such as a station. RICS is a company identifier, not a place identifier — the rail place identifier is the UIC location code held in the CRD/ENEE.

# Citations
[1] UIC — Company Codes (RICS)
[2] UIC — List of numeric codes for railway companies (RICS Code)
[3] ERA (European Union Agency for Railways) — Organisation Code Register (OCR)
