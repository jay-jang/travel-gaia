---
type: Standard
title: NeTEx
description: 'NeTEx (Network Timetable Exchange) is CEN Technical Specification CEN/TS 16614, an XML-based standard for exchanging public transport network topology, scheduled timetable, and fare data between transport authorities, operators, and traveler-information or booking systems. It is the primary European standard for publishing structured rail and public transport data, and its fare part (Part 3) underpins the distribution data requirements of the TAP TSI and several OSDM fare-data profiles.'
tags:
  - rail
  - active
  - CEN
timestamp: '2026-07-10T00:00:00Z'
id: netex
vertical: ground
category: rail
conceptType: standard
status: active
abbreviation: NeTEx
term_ko: 네텍스(NeTEx) — 네트워크 시간표 교환 표준
definition_ko: 'NeTEx(Network Timetable Exchange)는 CEN 기술 사양 CEN/TS 16614로, 교통 당국·운영사·여행자 정보 또는 예약 시스템 간 대중교통 네트워크 위상(topology)·예정 시간표·운임 데이터를 교환하기 위한 XML 기반 표준이다. 유럽의 구조화된 철도·대중교통 데이터 공개의 주요 표준으로, 운임 부분(Part 3)은 TAP TSI 및 여러 OSDM 운임 데이터 프로파일의 유통 데이터 요건을 뒷받침한다.'
longDef: 'NeTEx is a profile of Transmodel (EN 12896), the European conceptual reference data model for public transport. It is published in five parts: Part 1 (CEN/TS 16614-1) covers network topology (stops, lines, routes, networks, operators); Part 2 (CEN/TS 16614-2) covers scheduled timetables (service journeys, vehicle journeys, passing times); Part 3 (CEN/TS 16614-3) covers fare data (distance-based, zone-based, product/pass structures, discount rules, railcard validities); Part 4 (CEN/TS 16614-4) covers passenger information and accessibility; Part 5 (CEN/TS 16614-5) provides an alternative fare structure profile (NeTEx-FHS). NeTEx has been adopted as the mandatory data format by the European Union for the National Access Point (NAP) datasets required under Commission Delegated Regulation (EU) 2017/1926 (Multimodal Travel Information Services), and by the ERA for TAP TSI fare-data reporting. National implementations include the UK DfT''s NeTEx profile for National Rail open data, Norway''s ENTUR national public transport data hub, and the Netherlands'' KV1/BISON-to-NeTEx migration. OSDM references NeTEx Part 3 fare data types as the exchange format for structured fare data between rail distribution systems.'
longDef_ko: 'NeTEx는 유럽 대중교통 개념적 참조 데이터 모델인 Transmodel(EN 12896)의 프로파일이다. 다섯 부분으로 발간된다. Part 1(CEN/TS 16614-1)은 네트워크 위상(정류장·노선·경로·네트워크·운영사), Part 2(CEN/TS 16614-2)는 예정 시간표(서비스 여정·차량 여정·통과 시간), Part 3(CEN/TS 16614-3)은 운임 데이터(거리 기반·구역 기반·상품·패스 구조·할인 규칙·레일카드 유효성), Part 4(CEN/TS 16614-4)는 여객 정보·접근성, Part 5(CEN/TS 16614-5)는 대안 운임 구조 프로파일(NeTEx-FHS)을 다룬다. 유럽연합은 NeTEx를 위원회 위임 규정 (EU) 2017/1926(다중 교통수단 여행 정보 서비스)에 따른 국가접근포인트(NAP) 데이터셋의 필수 데이터 형식으로 채택했으며, ERA도 TAP TSI 운임 데이터 보고에 채택했다. 국가별 구현 사례로는 영국 DfT의 National Rail 개방 데이터용 NeTEx 프로파일, 노르웨이 ENTUR 국가 대중교통 데이터 허브, 네덜란드의 KV1/BISON-to-NeTEx 마이그레이션 등이 있다. OSDM은 철도 유통 시스템 간 구조화된 운임 데이터 교환 형식으로 NeTEx Part 3 운임 데이터 유형을 참조한다.'
standardBody: CEN
aliases:
  - Network Timetable Exchange
  - CEN/TS 16614
relationships:
  - type: related
    targetTerm: OSDM
  - type: related
    targetTerm: TAP TSI
  - type: related
    targetTerm: Through-Ticketing
  - type: related
    targetTerm: Railcard
distinctions:
  - targetTerm: OSDM
    explanation: OSDM (Open Sales and Distribution Model) is the rail industry API/schema standard governing the sale and distribution of rail products end-to-end (offer, order, fulfilment); NeTEx is a data exchange format for publishing static or scheduled network and fare data from authorities and operators. OSDM references NeTEx Part 3 fare data structures for interoperable fare data exchange, making them complementary rather than competing.
    explanation_ko: 'OSDM(Open Sales and Distribution Model)은 철도 상품의 판매·유통 전 과정(제안·주문·이행)을 관장하는 철도 산업 API/스키마 표준이고, NeTEx는 당국·운영사로부터 정적 또는 예정된 네트워크·운임 데이터를 공개하는 데이터 교환 형식이다. OSDM은 상호운용 가능한 운임 데이터 교환을 위해 NeTEx Part 3 운임 데이터 구조를 참조하므로 양자는 경쟁이 아닌 상호 보완 관계다.'
  - targetTerm: TAP TSI
    explanation: TAP TSI (Telematics Applications for Passengers Technical Specification for Interoperability) is the EU regulatory framework mandating data exchange standards for rail passenger systems; NeTEx is one of the specific data formats TAP TSI mandates for fare and timetable data publication. TAP TSI is the regulatory mandate; NeTEx is a technical tool that satisfies part of it.
    explanation_ko: 'TAP TSI(여객 텔레매틱스 응용 상호운용성 기술 사양)는 철도 여객 시스템의 데이터 교환 표준을 의무화하는 EU 규제 프레임워크이고, NeTEx는 TAP TSI가 운임 및 시간표 데이터 공개에 의무화하는 구체적인 데이터 형식 중 하나다. TAP TSI는 규제적 의무이고, NeTEx는 그 일부를 충족하는 기술적 도구다.'
sources:
  - name: 'CEN/TS 16614-1:2014 — Public transport — Network and Timetable Exchange (NeTEx) — Part 1: Public transport network topology exchange format'
    org: CEN
    version: '2014'
    section: ''
    url: https://www.cen.eu/work/areas/transport/pages/cen-ts-16614.aspx
    tier: standard-body
  - name: 'Commission Delegated Regulation (EU) 2017/1926 — Multimodal Travel Information Services — NeTEx as mandatory NAP format'
    org: European Commission
    version: '2017'
    section: Annex
    url: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1926
    tier: regulation
  - name: NeTEx — the CEN standard for exchanging Public Transport schedules and related data
    org: ERA / NeTEx community
    version: ''
    section: ''
    url: https://netex-cen.eu/
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="13" height="9" rx="2"/><rect x="30" y="9" width="13" height="9" rx="2"/><rect x="5" y="30" width="13" height="9" rx="2"/><rect x="30" y="30" width="13" height="9" rx="2"/><path d="M18 13.5h12M18 34.5h12M11.5 18v12M36.5 18v12"/></svg>
---

> NeTEx (Network Timetable Exchange) is CEN Technical Specification CEN/TS 16614, an XML-based standard for exchanging public transport network topology, scheduled timetable, and fare data between transport authorities, operators, and traveler-information or booking systems. It is the primary European standard for publishing structured rail and public transport data, and its fare part (Part 3) underpins the distribution data requirements of the TAP TSI and several OSDM fare-data profiles.

NeTEx is a profile of Transmodel (EN 12896), the European conceptual reference data model for public transport. It is published in five parts: Part 1 (CEN/TS 16614-1) covers network topology (stops, lines, routes, networks, operators); Part 2 (CEN/TS 16614-2) covers scheduled timetables (service journeys, vehicle journeys, passing times); Part 3 (CEN/TS 16614-3) covers fare data (distance-based, zone-based, product/pass structures, discount rules, railcard validities); Part 4 (CEN/TS 16614-4) covers passenger information and accessibility; Part 5 (CEN/TS 16614-5) provides an alternative fare structure profile (NeTEx-FHS). NeTEx has been adopted as the mandatory data format by the European Union for the National Access Point (NAP) datasets required under Commission Delegated Regulation (EU) 2017/1926 (Multimodal Travel Information Services), and by the ERA for TAP TSI fare-data reporting. National implementations include the UK DfT's NeTEx profile for National Rail open data, Norway's ENTUR national public transport data hub, and the Netherlands' KV1/BISON-to-NeTEx migration. OSDM references NeTEx Part 3 fare data types as the exchange format for structured fare data between rail distribution systems.

**한국어 / Korean** — **네텍스(NeTEx) — 네트워크 시간표 교환 표준** — NeTEx(Network Timetable Exchange)는 CEN 기술 사양 CEN/TS 16614로, 교통 당국·운영사·여행자 정보 또는 예약 시스템 간 대중교통 네트워크 위상(topology)·예정 시간표·운임 데이터를 교환하기 위한 XML 기반 표준이다. 유럽의 구조화된 철도·대중교통 데이터 공개의 주요 표준으로, 운임 부분(Part 3)은 TAP TSI 및 여러 OSDM 운임 데이터 프로파일의 유통 데이터 요건을 뒷받침한다.

NeTEx는 유럽 대중교통 개념적 참조 데이터 모델인 Transmodel(EN 12896)의 프로파일이다. 다섯 부분으로 발간된다. Part 1(CEN/TS 16614-1)은 네트워크 위상(정류장·노선·경로·네트워크·운영사), Part 2(CEN/TS 16614-2)는 예정 시간표(서비스 여정·차량 여정·통과 시간), Part 3(CEN/TS 16614-3)은 운임 데이터(거리 기반·구역 기반·상품·패스 구조·할인 규칙·레일카드 유효성), Part 4(CEN/TS 16614-4)는 여객 정보·접근성, Part 5(CEN/TS 16614-5)는 대안 운임 구조 프로파일(NeTEx-FHS)을 다룬다. 유럽연합은 NeTEx를 위원회 위임 규정 (EU) 2017/1926(다중 교통수단 여행 정보 서비스)에 따른 국가접근포인트(NAP) 데이터셋의 필수 데이터 형식으로 채택했으며, ERA도 TAP TSI 운임 데이터 보고에 채택했다. 국가별 구현 사례로는 영국 DfT의 National Rail 개방 데이터용 NeTEx 프로파일, 노르웨이 ENTUR 국가 대중교통 데이터 허브, 네덜란드의 KV1/BISON-to-NeTEx 마이그레이션 등이 있다. OSDM은 철도 유통 시스템 간 구조화된 운임 데이터 교환 형식으로 NeTEx Part 3 운임 데이터 유형을 참조한다.

**Aliases:** `Network Timetable Exchange`, `CEN/TS 16614`

# Related
- [OSDM](/ground/rail/osdm.md) — related
- [TAP TSI](/ground/rail/tap-tsi.md) — related
- [Through-Ticketing](/ground/rail/through-ticketing.md) — related
- [Railcard](/ground/rail/railcard.md) — related

# Distinctions
- **NeTEx** vs [OSDM](/ground/rail/osdm.md) — OSDM (Open Sales and Distribution Model) is the rail industry API/schema standard governing the sale and distribution of rail products end-to-end (offer, order, fulfilment); NeTEx is a data exchange format for publishing static or scheduled network and fare data from authorities and operators. OSDM references NeTEx Part 3 fare data structures for interoperable fare data exchange, making them complementary rather than competing.
- **NeTEx** vs [TAP TSI](/ground/rail/tap-tsi.md) — TAP TSI (Telematics Applications for Passengers Technical Specification for Interoperability) is the EU regulatory framework mandating data exchange standards for rail passenger systems; NeTEx is one of the specific data formats TAP TSI mandates for fare and timetable data publication. TAP TSI is the regulatory mandate; NeTEx is a technical tool that satisfies part of it.

# Citations
[1] [CEN — CEN/TS 16614-1:2014 — Public transport — Network and Timetable Exchange (NeTEx) — Part 1: Public transport network topology exchange format — 2014](https://www.cen.eu/work/areas/transport/pages/cen-ts-16614.aspx)
[2] [European Commission — Commission Delegated Regulation (EU) 2017/1926 — Multimodal Travel Information Services — NeTEx as mandatory NAP format — 2017](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1926)
[3] [ERA / NeTEx community — NeTEx — the CEN standard for exchanging Public Transport schedules and related data](https://netex-cen.eu/)
