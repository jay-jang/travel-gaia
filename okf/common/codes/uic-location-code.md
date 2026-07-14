---
type: Code
title: UIC Location Code
description: 'A UIC location code is a 7-digit numeric identifier assigned by the International Union of Railways (UIC) to railway stations, freight terminals, and other transport locations, where the first two digits encode the UIC country code and the remaining five identify the specific site. The authoritative register is the UIC Central Reference File Database (CRD), also known as ENEE, and these codes are the standard place-identifiers used across European rail distribution systems including OSDM and NeTEx.'
tags:
  - codes
  - active
  - UIC
timestamp: '2026-07-14T00:00:00Z'
id: uic-location-code
vertical: common
category: codes
conceptType: code
status: active
abbreviation: UIC
term_ko: UIC 위치 코드(철도역 코드)
definition_ko: 'UIC 위치 코드는 국제철도연맹(UIC)이 철도역·화물 터미널·기타 운송 거점에 부여하는 7자리 숫자 식별자로, 앞 두 자리는 UIC 국가 코드, 나머지 다섯 자리는 특정 위치를 식별한다. 공식 등록부는 UIC 중앙 참조 파일 데이터베이스(CRD, ENEE라고도 함)이며, 이 코드는 OSDM과 NeTEx를 포함한 유럽 철도 유통 시스템 전반에서 표준 위치 식별자로 사용된다.'
longDef: 'UIC location codes underpin rail distribution interoperability: they are the de facto identifiers used in ticket data, timetable exchange (e.g. TAP TSI Annex C), journey planners, and the OSDM open distribution standard for passenger railways. The UIC country code embedded in the first two digits follows a continent-based numbering scheme (e.g. 10–19: Finland/Sweden/Norway; 20–28: France; 80: Germany; 87: France SNCF under legacy numbering). The CRD/ENEE database is updated by UIC member operators and can be queried via the UIC IT portal. In linked-data contexts, the code is exposed as the uic_ref attribute, and in NeTEx documents as a StopPlace identifier. The equivalent for rail companies (not locations) is the RICS code.'
longDef_ko: 'UIC 위치 코드는 철도 유통 상호운용성의 기반이다: 발권 데이터, 시각표 교환(예: TAP TSI 부속서 C), 여정 계획기, 여객 철도용 OSDM 개방 유통 표준에서 사실상의 식별자로 사용된다. 앞 두 자리에 내재된 UIC 국가 코드는 대륙 기반 번호 체계를 따른다(예: 10~19: 핀란드/스웨덴/노르웨이; 20~28: 프랑스; 80: 독일; 87: 구 번호 체계의 SNCF 프랑스). CRD/ENEE 데이터베이스는 UIC 회원 운영사가 갱신하고 UIC IT 포털을 통해 조회할 수 있다. 링크드 데이터 환경에서 이 코드는 uic_ref 속성으로, NeTEx 문서에서는 StopPlace 식별자로 노출된다. 철도 회사(위치가 아님)의 동등 코드는 RICS 코드다.'
standardBody: UIC
aliases:
  - UIC Station Code
  - uic_ref
  - ENEE Location Code
  - CRD Code
  - Railway Location Code
relationships:
  - type: contrasts
    targetTerm: RICS Code (Company Code)
  - type: contrasts
    targetTerm: Station Code
  - type: related
    targetTerm: NeTEx
  - type: related
    targetTerm: Airport Code
distinctions:
  - targetTerm: Station Code
    explanation: 'The station code in travel-industry parlance is the IATA 3-letter location code identifying an airline''s operational presence (airport or city); the UIC location code is the 7-digit numeric identifier for railway stations and freight terminals used across European rail distribution. The two schemes are entirely separate and serve different transport modes.'
    explanation_ko: '여행 업계에서 station code는 항공사의 운영 거점(공항 또는 도시)을 식별하는 IATA 3자리 위치 코드이고, UIC 위치 코드는 유럽 철도 유통에서 사용되는 철도역 및 화물 터미널의 7자리 숫자 식별자다. 두 체계는 완전히 별개이며 서로 다른 교통 수단에 적용된다.'
  - targetTerm: RICS Code (Company Code)
    explanation: 'RICS identifies a rail company or organisation (e.g. a train operating company or distributor); UIC location code identifies a physical place such as a station. The two codes are complementary — a booking system uses the RICS of the TOC and the UIC code of the departure and arrival stations.'
    explanation_ko: 'RICS는 철도 회사나 조직(예: 열차 운행사 또는 유통사)을 식별하고, UIC 위치 코드는 역과 같은 물리적 장소를 식별한다. 두 코드는 상호 보완적으로, 예약 시스템은 TOC의 RICS와 출발·도착역의 UIC 코드를 함께 사용한다.'
sources:
  - name: UIC Location Codes (ENEE)
    org: UIC (International Union of Railways)
    version: ''
    section: ''
    url: 'https://uic.org/support-activities/it/location-codes-enee'
    tier: standard-body
  - name: TAP TSI — Technical Specification for Interoperability relating to Telematic Applications for Passenger Services
    org: European Union Agency for Railways
    version: Commission Regulation (EU) 2023/1695
    section: Annex C
    url: 'https://www.era.europa.eu/domains/interoperability/tap_en'
    tier: regulation
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="30" width="32" height="8" rx="2"/><path d="M14 30V18h20v12"/><path d="M18 18v-6h12v6"/><line x1="24" y1="12" x2="24" y2="6"/><line x1="8" y1="38" x2="8" y2="42"/><line x1="40" y1="38" x2="40" y2="42"/></svg>
---

> A UIC location code is a 7-digit numeric identifier assigned by the International Union of Railways (UIC) to railway stations, freight terminals, and other transport locations, where the first two digits encode the UIC country code and the remaining five identify the specific site. The authoritative register is the UIC Central Reference File Database (CRD), also known as ENEE, and these codes are the standard place-identifiers used across European rail distribution systems including OSDM and NeTEx.

UIC location codes underpin rail distribution interoperability: they are the de facto identifiers used in ticket data, timetable exchange (e.g. TAP TSI Annex C), journey planners, and the OSDM open distribution standard for passenger railways. The UIC country code embedded in the first two digits follows a continent-based numbering scheme (e.g. 10–19: Finland/Sweden/Norway; 20–28: France; 80: Germany; 87: France SNCF under legacy numbering). The CRD/ENEE database is updated by UIC member operators and can be queried via the UIC IT portal. In linked-data contexts, the code is exposed as the uic_ref attribute, and in NeTEx documents as a StopPlace identifier. The equivalent for rail companies (not locations) is the RICS code.

**한국어 / Korean** — **UIC 위치 코드(철도역 코드)** — UIC 위치 코드는 국제철도연맹(UIC)이 철도역·화물 터미널·기타 운송 거점에 부여하는 7자리 숫자 식별자로, 앞 두 자리는 UIC 국가 코드, 나머지 다섯 자리는 특정 위치를 식별한다. 공식 등록부는 UIC 중앙 참조 파일 데이터베이스(CRD, ENEE라고도 함)이며, 이 코드는 OSDM과 NeTEx를 포함한 유럽 철도 유통 시스템 전반에서 표준 위치 식별자로 사용된다.

UIC 위치 코드는 철도 유통 상호운용성의 기반이다: 발권 데이터, 시각표 교환(예: TAP TSI 부속서 C), 여정 계획기, 여객 철도용 OSDM 개방 유통 표준에서 사실상의 식별자로 사용된다. 앞 두 자리에 내재된 UIC 국가 코드는 대륙 기반 번호 체계를 따른다(예: 10~19: 핀란드/스웨덴/노르웨이; 20~28: 프랑스; 80: 독일; 87: 구 번호 체계의 SNCF 프랑스). CRD/ENEE 데이터베이스는 UIC 회원 운영사가 갱신하고 UIC IT 포털을 통해 조회할 수 있다. 링크드 데이터 환경에서 이 코드는 uic_ref 속성으로, NeTEx 문서에서는 StopPlace 식별자로 노출된다. 철도 회사(위치가 아님)의 동등 코드는 RICS 코드다.

**Aliases:** `UIC Station Code`, `uic_ref`, `ENEE Location Code`, `CRD Code`, `Railway Location Code`

# Related
- [NeTEx](/ground/rail/netex.md) — related
- [Airport Code](/common/codes/airport-code.md) — related
- [RICS Code (Company Code)](/ground/rail/rics-code.md) — contrasts
- [Station Code](/common/codes/station-code.md) — contrasts

# Distinctions
- **UIC Location Code** vs [Station Code](/common/codes/station-code.md) — The station code in travel-industry parlance is the IATA 3-letter location code identifying an airline's operational presence (airport or city); the UIC location code is the 7-digit numeric identifier for railway stations and freight terminals used across European rail distribution. The two schemes are entirely separate and serve different transport modes.
- **UIC Location Code** vs [RICS Code (Company Code)](/ground/rail/rics-code.md) — RICS identifies a rail company or organisation (e.g. a train operating company or distributor); UIC location code identifies a physical place such as a station. The two codes are complementary — a booking system uses the RICS of the TOC and the UIC code of the departure and arrival stations.

# Citations
[1] [UIC (International Union of Railways) — UIC Location Codes (ENEE)](https://uic.org/support-activities/it/location-codes-enee)
[2] [European Union Agency for Railways — TAP TSI — Technical Specification for Interoperability relating to Telematic Applications for Passenger Services](https://www.era.europa.eu/domains/interoperability/tap_en)
