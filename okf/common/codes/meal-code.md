---
type: Code
title: Meal Code
description: 'A standardized four-letter IATA code identifying a special or dietary in-flight meal, such as VGML (vegetarian), KSML (kosher), MOML (Muslim), DBML (diabetic), or CHML (child). It is added to a PNR as a Special Service Request (SSR) so the airline can cater the requested meal.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: meal-code
vertical: common
category: codes
conceptType: code
status: active
term_ko: 기내식 코드(특별 기내식 코드)
definition_ko: '특별식 또는 식이 기내식을 식별하는 표준화된 4자리 IATA 코드. 예로 VGML(채식), KSML(코셔), MOML(무슬림), DBML(당뇨식), CHML(유아·아동식) 등이 있다. PNR에 특별 서비스 요청(SSR)으로 추가되어 항공사가 요청된 식사를 준비한다.'
longDef: 'IATA maintains standardized special meal codes so that requests pass consistently between airlines, GDSs, and caterers regardless of language. Each code is communicated as an SSR (e.g., SSR VGML) in the passenger record and may require confirmation by the operating carrier; some codes also need advance notice deadlines. Meal codes are distinct from the meal-service indicator in schedules (whether a flight serves food at all), addressing instead the specific dietary/religious/medical meal a named passenger should receive.'
longDef_ko: 'IATA는 항공사·GDS·케이터링 업체 간에 언어와 무관하게 요청이 일관되게 전달되도록 표준화된 특별식 코드를 관리한다. 각 코드는 승객 기록에 SSR(예: SSR VGML)로 전달되며 운항 항공사의 확인이 필요할 수 있고, 일부 코드는 사전 통보 마감 시한을 요구한다. 기내식 코드는 스케줄상의 기내식 제공 여부 표시자(해당 편이 식사를 제공하는지 자체)와는 구별되며, 특정 승객이 받아야 할 식이·종교·의료상의 구체적 식사를 지정한다.'
standardBody: IATA
aliases:
  - Special Meal Code
  - IATA Meal Code
  - Special Meal Request Code
providerTerms:
  - provider: Amadeus
    term: SSR special meal
    context: Special meals are requested in Amadeus by adding the IATA meal code as an SSR to the PNR
    context_ko: Amadeus에서는 IATA 기내식 코드를 SSR로 PNR에 추가하여 특별식을 요청한다
    relationship: related
  - provider: Travelport
    term: SSR meal codes
    context: Travelport documents IATA meal codes among its SSR codes for meals and special services
    context_ko: Travelport는 식사·특별 서비스용 SSR 코드에 IATA 기내식 코드를 포함하여 문서화한다
    relationship: related
relationships:
  - type: related
    targetTerm: SSR
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Ancillary Service
  - type: related
    targetTerm: PRM
distinctions:
  - targetTerm: SSR
    explanation: 'SSR is the general mechanism for special service requests in a PNR; a meal code is a specific 4-letter value (e.g., VGML) carried within a meal SSR.'
    explanation_ko: 'SSR은 PNR 내 특별 서비스 요청을 위한 일반적 수단이고, 기내식 코드는 식사 SSR에 담기는 구체적 4자리 값(예: VGML)이다.'
  - targetTerm: Open Seating Dining
    explanation: 'An airline/GDS Meal Code identifies the type of meal served on a flight; open seating dining is a cruise dining-arrangement attribute about when and how guests dine, not a coded meal-content selection.'
    explanation_ko: '항공/GDS의 Meal Code는 항공편에서 제공되는 기내식 유형을 식별하고, 오픈 시팅 다이닝은 선객이 언제·어떻게 식사하는지에 관한 크루즈 다이닝 배정 속성으로 코드화된 식사 내용 선택이 아니다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM) — special meal codes
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
  - org: Travelport
    name: SSR Codes for Meals and Special Services
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/GWS/Content/XML_Select_Web_Service/Codes/ssr_codes.htm'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 6v14a3 3 0 006 0V6M17 6v34"/><path d="M32 6c-3 0-5 4-5 10s2 8 5 8v16"/><circle cx="24" cy="24" r="21"/></svg>
---

> A standardized four-letter IATA code identifying a special or dietary in-flight meal, such as VGML (vegetarian), KSML (kosher), MOML (Muslim), DBML (diabetic), or CHML (child). It is added to a PNR as a Special Service Request (SSR) so the airline can cater the requested meal.

IATA maintains standardized special meal codes so that requests pass consistently between airlines, GDSs, and caterers regardless of language. Each code is communicated as an SSR (e.g., SSR VGML) in the passenger record and may require confirmation by the operating carrier; some codes also need advance notice deadlines. Meal codes are distinct from the meal-service indicator in schedules (whether a flight serves food at all), addressing instead the specific dietary/religious/medical meal a named passenger should receive.

**한국어 / Korean** — **기내식 코드(특별 기내식 코드)** — 특별식 또는 식이 기내식을 식별하는 표준화된 4자리 IATA 코드. 예로 VGML(채식), KSML(코셔), MOML(무슬림), DBML(당뇨식), CHML(유아·아동식) 등이 있다. PNR에 특별 서비스 요청(SSR)으로 추가되어 항공사가 요청된 식사를 준비한다.

IATA는 항공사·GDS·케이터링 업체 간에 언어와 무관하게 요청이 일관되게 전달되도록 표준화된 특별식 코드를 관리한다. 각 코드는 승객 기록에 SSR(예: SSR VGML)로 전달되며 운항 항공사의 확인이 필요할 수 있고, 일부 코드는 사전 통보 마감 시한을 요구한다. 기내식 코드는 스케줄상의 기내식 제공 여부 표시자(해당 편이 식사를 제공하는지 자체)와는 구별되며, 특정 승객이 받아야 할 식이·종교·의료상의 구체적 식사를 지정한다.

**Aliases:** `Special Meal Code`, `IATA Meal Code`, `Special Meal Request Code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `SSR special meal` | related | Special meals are requested in Amadeus by adding the IATA meal code as an SSR to the PNR |
| Travelport | `SSR meal codes` | related | Travelport documents IATA meal codes among its SSR codes for meals and special services |

# Related
- [SSR](/air/air-ops/ssr.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related
- [PRM](/common/customer/prm.md) — related

# Distinctions
- **Meal Code** vs [SSR](/air/air-ops/ssr.md) — SSR is the general mechanism for special service requests in a PNR; a meal code is a specific 4-letter value (e.g., VGML) carried within a meal SSR.
- **Meal Code** vs [Open Seating Dining](/cruise/cruise/open-seating-dining.md) — An airline/GDS Meal Code identifies the type of meal served on a flight; open seating dining is a cruise dining-arrangement attribute about when and how guests dine, not a coded meal-content selection.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — special meal codes](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [Travelport — SSR Codes for Meals and Special Services](https://support.travelport.com/webhelp/GWS/Content/XML_Select_Web_Service/Codes/ssr_codes.htm)
