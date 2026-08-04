---
type: Standard
title: GTFS
description: 'GTFS (General Transit Feed Specification) is an open data standard, governed by MobilityData, for publishing public transit and rail network schedules and associated geographic information as a set of plain-text CSV files packaged in a ZIP archive. It is the de-facto global interoperability standard that enables journey-planning apps, trip aggregators, and multimodal booking platforms to consume timetable data from any rail or transit operator in a uniform format.'
tags:
  - rail
  - active
  - MobilityData
timestamp: '2026-08-04T00:00:00Z'
id: gtfs
vertical: ground
category: rail
conceptType: standard
status: active
abbreviation: GTFS
term_ko: 일반 대중교통 피드 명세(GTFS)
definition_ko: 'GTFS(General Transit Feed Specification)는 MobilityData가 관리하는 개방형 데이터 표준으로, 대중교통·철도 네트워크의 운행 시간표와 지리 정보를 일반 텍스트 CSV 파일 묶음(ZIP 아카이브)으로 게시하기 위한 규격이다. 철도·대중교통 사업자가 제공하는 시간표 데이터를 여정 계획 앱·여정 집계자·복합운송 예약 플랫폼이 균일한 형식으로 소비할 수 있게 하는 사실상의 글로벌 상호운용 표준이다.'
longDef: 'GTFS was originally developed in 2005 as a collaboration between Google and TriMet (Portland, Oregon) under the name "Google Transit Feed Specification"; governance was transferred to the non-profit MobilityData in 2019 and the name broadened to "General Transit Feed Specification". The standard has two complementary components: GTFS Schedule (previously GTFS Static) defines the planned network — agencies, routes, stops, trips, stop times, calendar service patterns, fare rules, and shapes — through a set of CSV text files that operators publish as a regularly refreshed ZIP archive. GTFS Realtime defines a Protocol Buffer extension for live service data: TripUpdate (predicted arrival/departure deviations), VehiclePosition (GPS location and occupancy), and ServiceAlert (disruption and platform-change notices). Hundreds of rail and transit operators worldwide — including Deutsche Bahn, SNCF Voyageurs, Amtrak, Network Rail, and JR Group — publish GTFS Schedule feeds to enable Google Maps, Apple Maps, Citymapper, and multimodal journey planners to display their timetables. GTFS Realtime allows those same apps to show live delay and platform information. The EU''s National Access Point (NAP) framework under Delegated Regulation (EU) 2017/1926 accepts GTFS alongside NeTEx for multimodal travel information services, making GTFS a formally recognised supplement to NeTEx in the European regulatory context.'
longDef_ko: 'GTFS는 2005년 구글과 트라이멧(미국 포틀랜드) 협업으로 "Google Transit Feed Specification"이라는 이름으로 개발됐으며, 2019년 비영리 MobilityData로 관리가 이관되고 명칭도 "General Transit Feed Specification"으로 확대됐다. 표준은 두 보완적 구성 요소로 이루어진다. GTFS Schedule(이전 명칭 GTFS Static)은 운영사·노선·정류장·운행 편·정차 시간·서비스 달력 패턴·요금 규칙·경로(shape)를 일련의 CSV 파일로 정의하며, 운영사가 정기적으로 갱신하는 ZIP 아카이브로 공개한다. GTFS Realtime은 실시간 서비스 데이터를 위한 프로토콜 버퍼 확장으로, TripUpdate(도착·출발 예상 편차), VehiclePosition(GPS 위치·혼잡도), ServiceAlert(운행 장애·플랫폼 변경 안내)를 정의한다. 도이체반(DB), SNCF Voyageurs, Amtrak, Network Rail, JR 그룹 등 전 세계 수백 개 철도·대중교통 운영사가 GTFS Schedule 피드를 공개해 구글 맵스·애플 맵스·시티매퍼·복합운송 여정 계획 도구가 시간표를 표시할 수 있도록 한다. GTFS Realtime은 동일한 앱들이 실시간 지연·플랫폼 정보를 표시할 수 있게 한다. EU의 위임 규정 (EU) 2017/1926에 따른 국가접근포인트(NAP) 프레임워크는 복합운송 여행 정보 서비스를 위해 NeTEx와 함께 GTFS를 수용하므로, 유럽 규제 맥락에서 GTFS는 NeTEx의 공식 보완 표준으로 인정된다.'
standardBody: MobilityData
aliases:
  - General Transit Feed Specification
  - GTFS Schedule
  - GTFS Static
  - Google Transit Feed Specification
relationships:
  - type: related
    targetTerm: NeTEx
  - type: related
    targetTerm: General Bikeshare Feed Specification
  - type: related
    targetTerm: Multimodal Transport
  - type: related
    targetTerm: OSDM
distinctions:
  - targetTerm: NeTEx
    explanation: 'NeTEx (CEN/TS 16614) is the European XML standard for exchanging network topology, timetable, and fare data in rich, schema-validated documents mandated by EU regulation; GTFS is a lightweight CSV-based format with a global install base that is simpler to produce and consume but less expressive for complex fare structures. EU NAP regulations accept both; NeTEx is the richer regulatory default in Europe while GTFS dominates the global journey-planning ecosystem.'
    explanation_ko: 'NeTEx(CEN/TS 16614)는 EU 규정이 의무화한, 네트워크 위상·시간표·운임 데이터를 풍부하고 스키마 검증된 XML 문서로 교환하는 유럽 표준이다. GTFS는 더 단순한 CSV 기반 형식으로 전 세계 설치 기반이 넓지만 복잡한 운임 구조 표현력이 약하다. EU NAP 규정은 둘 다 허용하며, 유럽에서는 NeTEx가 더 풍부한 규제 기본 형식이고 GTFS는 글로벌 여정 계획 생태계를 지배한다.'
  - targetTerm: General Bikeshare Feed Specification
    explanation: 'GBFS (General Bikeshare Feed Specification) is a real-time JSON feed standard for the availability of shared micro-mobility vehicles (bikes, scooters, cars); GTFS is a scheduled, batch-published standard for fixed-route transit and rail timetable data. Both are governed by MobilityData and are frequently consumed together by MaaS platforms, but they model different time horizons and service types.'
    explanation_ko: 'GBFS(General Bikeshare Feed Specification)는 공유 마이크로모빌리티 차량(자전거·스쿠터·공유차)의 실시간 가용성을 위한 JSON 피드 표준이고, GTFS는 고정 노선 대중교통·철도 시간표를 배치(batch)로 게시하는 예정 기반 표준이다. 둘 다 MobilityData가 관리하며 MaaS 플랫폼이 함께 소비하는 경우가 많지만, 서로 다른 시간 범위와 서비스 유형을 모델링한다.'
  - targetTerm: OSDM
    explanation: 'OSDM (Open Sales and Distribution Model) is the rail industry API standard governing the full sales and distribution lifecycle — offer, order, fulfilment, after-sales — for rail products; GTFS is a data publication standard for static timetable and route information. GTFS provides the network and schedule data that OSDM-based booking systems may consume to display journey options, but GTFS itself has no booking or transaction layer.'
    explanation_ko: 'OSDM(Open Sales and Distribution Model)은 철도 상품의 제안·주문·이행·사후 처리 등 전체 판매·유통 생애주기를 관장하는 철도 산업 API 표준이고, GTFS는 정적 시간표·노선 정보를 게시하기 위한 데이터 공개 표준이다. GTFS는 OSDM 기반 예약 시스템이 여정 옵션을 표시하는 데 소비할 수 있는 네트워크·스케줄 데이터를 제공하지만, GTFS 자체에는 예약이나 거래 레이어가 없다.'
sources:
  - name: GTFS Schedule Reference
    org: MobilityData
    version: ''
    section: ''
    url: 'https://gtfs.org/schedule/reference/'
    tier: standard-body
  - name: GTFS Realtime Reference
    org: MobilityData
    version: ''
    section: ''
    url: 'https://gtfs.org/realtime/reference/'
    tier: standard-body
  - name: 'Commission Delegated Regulation (EU) 2017/1926 — Multimodal Travel Information Services (GTFS as accepted NAP format)'
    org: European Commission
    version: '2017'
    section: ''
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1926'
    tier: regulation
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="36" height="32" rx="3"/><line x1="6" y1="17" x2="42" y2="17"/><line x1="15" y1="8" x2="15" y2="40"/><line x1="24" y1="8" x2="24" y2="40"/><line x1="33" y1="8" x2="33" y2="40"/><circle cx="19.5" cy="25.5" r="2.5" fill="currentColor" stroke="none"/><circle cx="28.5" cy="31.5" r="2.5" fill="currentColor" stroke="none"/></svg>
---

> GTFS (General Transit Feed Specification) is an open data standard, governed by MobilityData, for publishing public transit and rail network schedules and associated geographic information as a set of plain-text CSV files packaged in a ZIP archive. It is the de-facto global interoperability standard that enables journey-planning apps, trip aggregators, and multimodal booking platforms to consume timetable data from any rail or transit operator in a uniform format.

GTFS was originally developed in 2005 as a collaboration between Google and TriMet (Portland, Oregon) under the name "Google Transit Feed Specification"; governance was transferred to the non-profit MobilityData in 2019 and the name broadened to "General Transit Feed Specification". The standard has two complementary components: GTFS Schedule (previously GTFS Static) defines the planned network — agencies, routes, stops, trips, stop times, calendar service patterns, fare rules, and shapes — through a set of CSV text files that operators publish as a regularly refreshed ZIP archive. GTFS Realtime defines a Protocol Buffer extension for live service data: TripUpdate (predicted arrival/departure deviations), VehiclePosition (GPS location and occupancy), and ServiceAlert (disruption and platform-change notices). Hundreds of rail and transit operators worldwide — including Deutsche Bahn, SNCF Voyageurs, Amtrak, Network Rail, and JR Group — publish GTFS Schedule feeds to enable Google Maps, Apple Maps, Citymapper, and multimodal journey planners to display their timetables. GTFS Realtime allows those same apps to show live delay and platform information. The EU's National Access Point (NAP) framework under Delegated Regulation (EU) 2017/1926 accepts GTFS alongside NeTEx for multimodal travel information services, making GTFS a formally recognised supplement to NeTEx in the European regulatory context.

**한국어 / Korean** — **일반 대중교통 피드 명세(GTFS)** — GTFS(General Transit Feed Specification)는 MobilityData가 관리하는 개방형 데이터 표준으로, 대중교통·철도 네트워크의 운행 시간표와 지리 정보를 일반 텍스트 CSV 파일 묶음(ZIP 아카이브)으로 게시하기 위한 규격이다. 철도·대중교통 사업자가 제공하는 시간표 데이터를 여정 계획 앱·여정 집계자·복합운송 예약 플랫폼이 균일한 형식으로 소비할 수 있게 하는 사실상의 글로벌 상호운용 표준이다.

GTFS는 2005년 구글과 트라이멧(미국 포틀랜드) 협업으로 "Google Transit Feed Specification"이라는 이름으로 개발됐으며, 2019년 비영리 MobilityData로 관리가 이관되고 명칭도 "General Transit Feed Specification"으로 확대됐다. 표준은 두 보완적 구성 요소로 이루어진다. GTFS Schedule(이전 명칭 GTFS Static)은 운영사·노선·정류장·운행 편·정차 시간·서비스 달력 패턴·요금 규칙·경로(shape)를 일련의 CSV 파일로 정의하며, 운영사가 정기적으로 갱신하는 ZIP 아카이브로 공개한다. GTFS Realtime은 실시간 서비스 데이터를 위한 프로토콜 버퍼 확장으로, TripUpdate(도착·출발 예상 편차), VehiclePosition(GPS 위치·혼잡도), ServiceAlert(운행 장애·플랫폼 변경 안내)를 정의한다. 도이체반(DB), SNCF Voyageurs, Amtrak, Network Rail, JR 그룹 등 전 세계 수백 개 철도·대중교통 운영사가 GTFS Schedule 피드를 공개해 구글 맵스·애플 맵스·시티매퍼·복합운송 여정 계획 도구가 시간표를 표시할 수 있도록 한다. GTFS Realtime은 동일한 앱들이 실시간 지연·플랫폼 정보를 표시할 수 있게 한다. EU의 위임 규정 (EU) 2017/1926에 따른 국가접근포인트(NAP) 프레임워크는 복합운송 여행 정보 서비스를 위해 NeTEx와 함께 GTFS를 수용하므로, 유럽 규제 맥락에서 GTFS는 NeTEx의 공식 보완 표준으로 인정된다.

**Aliases:** `General Transit Feed Specification`, `GTFS Schedule`, `GTFS Static`, `Google Transit Feed Specification`

# Related
- [NeTEx](/ground/rail/netex.md) — related
- [General Bikeshare Feed Specification](/ground/car/general-bikeshare-feed-specification.md) — related
- [Multimodal Transport](/ground/rail/multimodal-transport.md) — related
- [OSDM](/ground/rail/osdm.md) — related

# Distinctions
- **GTFS** vs [NeTEx](/ground/rail/netex.md) — NeTEx (CEN/TS 16614) is the European XML standard for exchanging network topology, timetable, and fare data in rich, schema-validated documents mandated by EU regulation; GTFS is a lightweight CSV-based format with a global install base that is simpler to produce and consume but less expressive for complex fare structures. EU NAP regulations accept both; NeTEx is the richer regulatory default in Europe while GTFS dominates the global journey-planning ecosystem.
- **GTFS** vs [General Bikeshare Feed Specification](/ground/car/general-bikeshare-feed-specification.md) — GBFS (General Bikeshare Feed Specification) is a real-time JSON feed standard for the availability of shared micro-mobility vehicles (bikes, scooters, cars); GTFS is a scheduled, batch-published standard for fixed-route transit and rail timetable data. Both are governed by MobilityData and are frequently consumed together by MaaS platforms, but they model different time horizons and service types.
- **GTFS** vs [OSDM](/ground/rail/osdm.md) — OSDM (Open Sales and Distribution Model) is the rail industry API standard governing the full sales and distribution lifecycle — offer, order, fulfilment, after-sales — for rail products; GTFS is a data publication standard for static timetable and route information. GTFS provides the network and schedule data that OSDM-based booking systems may consume to display journey options, but GTFS itself has no booking or transaction layer.

# Citations
[1] [MobilityData — GTFS Schedule Reference](https://gtfs.org/schedule/reference/)
[2] [MobilityData — GTFS Realtime Reference](https://gtfs.org/realtime/reference/)
[3] [European Commission — Commission Delegated Regulation (EU) 2017/1926 — Multimodal Travel Information Services](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1926)
