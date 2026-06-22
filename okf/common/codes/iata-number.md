---
type: Code
title: IATA Number
description: 'A unique numeric code (typically 7 or 8 digits for passenger agencies) assigned by IATA to identify an accredited travel agency or location. It accredits the agency to issue airline tickets and settle through the BSP, and is recognized by airlines and other suppliers.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: iata-number
vertical: common
category: codes
conceptType: code
status: active
term_ko: IATA 번호(여행사 인가 번호)
definition_ko: 'IATA가 인가받은 여행사 또는 지점을 식별하기 위해 부여하는 고유 숫자 코드(여객 여행사는 일반적으로 7~8자리). 해당 여행사가 항공권을 발권하고 BSP를 통해 정산할 수 있도록 인가하며, 항공사 및 기타 공급사가 인정한다.'
longDef: 'The IATA Number (IATA Numeric Code) identifies the accredited agency entity/location used for reporting, commission tracking, and BSP settlement; leading digits encode the location so different branches of one agency are distinguishable. It is distinct from the U.S. ARC number (Airline Reporting Corporation), though IATAN and ARC share the same location numbering so a dually appointed agency carries one number. Separate cargo agency numbers exist with different lengths. The IATA Number identifies the accredited business, whereas a GDS Pseudo City Code / Office ID identifies the agency''s working profile inside a specific GDS.'
longDef_ko: 'IATA 번호(IATA Numeric Code)는 보고, 수수료 추적, BSP 정산에 사용되는 인가 여행사 주체/지점을 식별한다. 앞자리에 위치 정보가 인코딩되어 동일 여행사의 여러 지점을 구분할 수 있다. 미국의 ARC 번호(Airline Reporting Corporation)와는 구별되지만, IATAN과 ARC는 동일한 위치 번호 체계를 공유하므로 양쪽에 모두 지정된 여행사는 하나의 번호를 갖는다. 화물 여행사 번호는 별도로 존재하며 자릿수가 다르다. IATA 번호는 인가된 사업 주체를 식별하는 반면, GDS의 Pseudo City Code / Office ID는 특정 GDS 내부에서의 여행사 작업 프로파일을 식별한다.'
standardBody: IATA
aliases:
  - IATA Numeric Code
  - Agency IATA Number
  - IATA Accreditation Number
  - IATAN Number
relationships:
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
  - type: related
    targetTerm: Pseudo City Code
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: Pseudo City Code
    explanation: 'An IATA Number is the agency''s industry accreditation/settlement identifier (7-8 digits); a Pseudo City Code / Office ID is a GDS-internal subscriber identifier scoping bookings, fares, and privileges within one GDS.'
    explanation_ko: 'IATA 번호는 여행사의 업계 인가·정산 식별자(7~8자리)이고, Pseudo City Code / Office ID는 하나의 GDS 내부에서 예약·운임·권한 범위를 한정하는 GDS 가입자 식별자이다.'
  - targetTerm: ARC
    explanation: 'ARC is the U.S. settlement/accreditation body; the IATA Number is the IATA-assigned accreditation code used for BSP markets, though IATAN and ARC share location numbering.'
    explanation_ko: 'ARC는 미국의 정산·인가 기관이고, IATA 번호는 BSP 시장에서 사용되는 IATA 부여 인가 코드이다. 다만 IATAN과 ARC는 위치 번호 체계를 공유한다.'
  - targetTerm: TIDS Code
    explanation: 'An IATA Number is issued only to financially accredited agencies and grants ticketing/BSP settlement authority; a TIDS code merely identifies a non-accredited point of sale for recognition, reporting and commission, with no settlement rights.'
    explanation_ko: 'IATA Number는 재정 공인을 받은 대리점에만 발급되어 발권·BSP 정산 권한을 부여하는 반면, TIDS 코드는 비공인 판매 지점을 인식·보고·커미션 목적으로 식별만 할 뿐 정산 권한이 없다.'
sources:
  - org: IATA
    name: Travel Agent Accreditation
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/travel-agency-program/accreditation-travel/'
  - org: AltexSoft
    name: IATA number (glossary)
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/glossary/iata-number/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="8" width="30" height="32" rx="3"/><circle cx="24" cy="19" r="4"/><path d="M17 32c0-4 3.5-6 7-6s7 2 7 6"/><path d="M14 12h4M30 12h4"/></svg>
---

> A unique numeric code (typically 7 or 8 digits for passenger agencies) assigned by IATA to identify an accredited travel agency or location. It accredits the agency to issue airline tickets and settle through the BSP, and is recognized by airlines and other suppliers.

The IATA Number (IATA Numeric Code) identifies the accredited agency entity/location used for reporting, commission tracking, and BSP settlement; leading digits encode the location so different branches of one agency are distinguishable. It is distinct from the U.S. ARC number (Airline Reporting Corporation), though IATAN and ARC share the same location numbering so a dually appointed agency carries one number. Separate cargo agency numbers exist with different lengths. The IATA Number identifies the accredited business, whereas a GDS Pseudo City Code / Office ID identifies the agency's working profile inside a specific GDS.

**한국어 / Korean** — **IATA 번호(여행사 인가 번호)** — IATA가 인가받은 여행사 또는 지점을 식별하기 위해 부여하는 고유 숫자 코드(여객 여행사는 일반적으로 7~8자리). 해당 여행사가 항공권을 발권하고 BSP를 통해 정산할 수 있도록 인가하며, 항공사 및 기타 공급사가 인정한다.

IATA 번호(IATA Numeric Code)는 보고, 수수료 추적, BSP 정산에 사용되는 인가 여행사 주체/지점을 식별한다. 앞자리에 위치 정보가 인코딩되어 동일 여행사의 여러 지점을 구분할 수 있다. 미국의 ARC 번호(Airline Reporting Corporation)와는 구별되지만, IATAN과 ARC는 동일한 위치 번호 체계를 공유하므로 양쪽에 모두 지정된 여행사는 하나의 번호를 갖는다. 화물 여행사 번호는 별도로 존재하며 자릿수가 다르다. IATA 번호는 인가된 사업 주체를 식별하는 반면, GDS의 Pseudo City Code / Office ID는 특정 GDS 내부에서의 여행사 작업 프로파일을 식별한다.

**Aliases:** `IATA Numeric Code`, `Agency IATA Number`, `IATA Accreditation Number`, `IATAN Number`

# Related
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related
- [Pseudo City Code](/common/codes/pseudo-city-code.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **IATA Number** vs [Pseudo City Code](/common/codes/pseudo-city-code.md) — An IATA Number is the agency's industry accreditation/settlement identifier (7-8 digits); a Pseudo City Code / Office ID is a GDS-internal subscriber identifier scoping bookings, fares, and privileges within one GDS.
- **IATA Number** vs [ARC](/common/pay/arc.md) — ARC is the U.S. settlement/accreditation body; the IATA Number is the IATA-assigned accreditation code used for BSP markets, though IATAN and ARC share location numbering.
- **IATA Number** vs [TIDS Code](/common/codes/tids-code.md) — An IATA Number is issued only to financially accredited agencies and grants ticketing/BSP settlement authority; a TIDS code merely identifies a non-accredited point of sale for recognition, reporting and commission, with no settlement rights.

# Citations
[1] [IATA — Travel Agent Accreditation](https://www.iata.org/en/services/travel-agency-program/accreditation-travel/)
[2] [AltexSoft — IATA number (glossary)](https://www.altexsoft.com/glossary/iata-number/)
