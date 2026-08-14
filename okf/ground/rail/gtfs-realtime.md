---
type: Standard
title: GTFS Realtime
description: 'GTFS Realtime (GTFS-RT) is an open feed specification, governed by MobilityData, that allows public transit and rail operators to publish live service updates — including real-time vehicle positions, predicted arrival and departure times (TripUpdates), and service alerts — as a Protocol Buffer (protobuf) or JSON feed. It extends the static GTFS Schedule with dynamic, operational data consumed by journey-planning applications, passenger information displays, and MaaS platforms.'
tags:
  - rail
  - active
  - MobilityData
timestamp: '2026-08-14T00:00:00Z'
id: gtfs-realtime
vertical: ground
category: rail
conceptType: standard
status: active
abbreviation: GTFS-RT
term_ko: GTFS 실시간(GTFS Realtime)
definition_ko: 'GTFS Realtime(GTFS-RT)은 MobilityData가 관리하는 개방형 피드 명세로, 대중교통·철도 운영사가 실시간 차량 위치, 예상 도착·출발 시각(TripUpdate), 서비스 알림 등 라이브 서비스 업데이트를 Protocol Buffer(protobuf) 또는 JSON 피드 형식으로 공개할 수 있게 한다. 정적 GTFS Schedule을 동적 운행 데이터로 확장하며, 여정 계획 앱·승객 안내 디스플레이·MaaS 플랫폼이 소비한다.'
longDef: 'GTFS Realtime was first published by Google in 2011 as an extension to the existing GTFS Schedule format; governance moved to MobilityData alongside the broader GTFS specification. GTFS-RT defines three feed entities: (1) TripUpdate — predicts arrival and departure time deviations from the published schedule at each stop, enabling real-time countdown displays and journey-planner updates; (2) VehiclePosition — provides GPS-derived latitude/longitude of operating vehicles, together with optional occupancy status (empty, many seats available, etc.); (3) ServiceAlert — communicates planned disruptions, platform or stop changes, and unplanned incidents affecting routes, stops, or individual trips, with human-readable descriptions and effect enumerations. Feeds are served as Protocol Buffer binary streams or (with community extensions) as JSON over HTTPS, typically refreshed every 15–30 seconds. GTFS-RT and GTFS Schedule together cover the complete data lifecycle: static schedules set the baseline and GTFS-RT overlays real-time deviations. In the EU, Commission Delegated Regulation (EU) 2017/1926 on multimodal travel information services recognises GTFS alongside NeTEx, and SIRI (Service Interface for Real Time Information) is the alternative European XML standard for equivalent real-time data.'
longDef_ko: 'GTFS Realtime은 2011년 구글이 기존 GTFS Schedule 형식의 확장으로 처음 공개했으며, 이후 관리 주체가 더 넓은 GTFS 명세와 함께 MobilityData로 이관됐다. GTFS-RT는 세 가지 피드 엔티티를 정의한다. (1) TripUpdate — 각 정류장에서 공표 시간표와의 도착·출발 편차를 예측해, 실시간 카운트다운 디스플레이와 여정 계획기 업데이트를 가능하게 한다. (2) VehiclePosition — 운행 중인 차량의 GPS 위도·경도와 혼잡도 상태(비어 있음, 좌석 여유, 만석 등)를 선택적으로 제공한다. (3) ServiceAlert — 노선·정류장·개별 운행 편에 영향을 미치는 계획·비계획 운행 장애, 플랫폼·정류장 변경, 사고를 사람이 읽을 수 있는 설명 및 영향 열거형과 함께 전달한다. 피드는 Protocol Buffer 이진 스트림 또는 (커뮤니티 확장으로) JSON 형식으로 HTTPS를 통해 제공되며, 일반적으로 15~30초마다 갱신된다. GTFS-RT와 GTFS Schedule은 함께 전체 데이터 생애주기를 다룬다: 정적 시간표가 기준을 설정하고 GTFS-RT가 실시간 편차를 덮어씌운다. EU에서는 복합운송 여행 정보 서비스에 관한 위임 규정 (EU) 2017/1926이 NeTEx와 함께 GTFS를 인정하며, SIRI(Service Interface for Real Time Information)는 동등한 실시간 데이터를 위한 유럽 XML 대안 표준이다.'
standardBody: MobilityData
aliases:
  - GTFS-RT
  - GTFS Realtime Feed
  - General Transit Feed Specification Realtime
relationships:
  - type: parent
    targetTerm: GTFS
  - type: related
    targetTerm: NeTEx
  - type: related
    targetTerm: Mobility as a Service
  - type: related
    targetTerm: General Bikeshare Feed Specification
distinctions:
  - targetTerm: GTFS
    explanation: 'GTFS (GTFS Schedule) is a static, batch-published set of CSV files defining the planned network — routes, stops, timetables, fare rules — refreshed at most daily or weekly; GTFS Realtime is a live streaming extension that publishes predicted arrival/departure deviations, vehicle GPS positions, and service alerts at sub-minute refresh rates. Static GTFS sets the schedule baseline; GTFS-RT overlays the real-time operational truth. Both are published independently by the operator and consumed together by journey planners.'
    explanation_ko: 'GTFS(GTFS Schedule)는 계획된 네트워크(노선·정류장·시간표·요금 규칙)를 정의하는 정적·배치 게시 CSV 파일 집합으로, 하루 또는 주 단위로 갱신된다. GTFS Realtime은 예상 도착·출발 편차, 차량 GPS 위치, 서비스 알림을 1분 이하 갱신 주기로 공개하는 라이브 스트리밍 확장이다. 정적 GTFS가 시간표 기준을 설정하고, GTFS-RT가 실시간 운행 현황을 덮어씌운다. 두 피드는 운영사가 독립적으로 공개하고 여정 계획기가 함께 소비한다.'
  - targetTerm: NeTEx
    explanation: 'NeTEx (CEN/TS 16614) is the European XML standard for network topology, timetable, and fare data, used for planned schedule exchange and mandated by EU National Access Points; its real-time counterpart is SIRI (Service Interface for Real Time Information, CEN/TS 15531). GTFS Realtime is the functionally equivalent real-time extension to GTFS and dominates the global (non-European) ecosystem. EU NAP regulations accept GTFS alongside NeTEx, so both ecosystems are in use across European transit.'
    explanation_ko: 'NeTEx(CEN/TS 16614)는 계획 시간표 교환을 위한 유럽 XML 표준으로 EU 국가접근포인트(NAP)가 의무화하며, 실시간 대응 표준은 SIRI(Service Interface for Real Time Information, CEN/TS 15531)이다. GTFS Realtime은 기능적으로 동등한 실시간 확장으로 글로벌(비유럽) 생태계를 지배한다. EU NAP 규정이 NeTEx와 함께 GTFS를 수용하므로 유럽 대중교통에서 두 생태계가 함께 사용된다.'
sources:
  - name: GTFS Realtime Reference
    org: MobilityData
    version: ''
    section: ''
    url: 'https://gtfs.org/documentation/realtime/reference/'
    tier: standard-body
  - name: 'Commission Delegated Regulation (EU) 2017/1926 — Multimodal Travel Information Services (GTFS as accepted NAP format)'
    org: European Commission
    version: '2017'
    section: ''
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1926'
    tier: regulation
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="28" height="22" rx="3"/><path d="M34 20h7l3 3-3 3h-7"/><circle cx="14" cy="38" r="3"/><circle cx="26" cy="38" r="3"/><line x1="6" y1="26" x2="34" y2="26"/></svg>
---

> GTFS Realtime (GTFS-RT) is an open feed specification, governed by MobilityData, that allows public transit and rail operators to publish live service updates — including real-time vehicle positions, predicted arrival and departure times (TripUpdates), and service alerts — as a Protocol Buffer (protobuf) or JSON feed. It extends the static GTFS Schedule with dynamic, operational data consumed by journey-planning applications, passenger information displays, and MaaS platforms.

GTFS Realtime was first published by Google in 2011 as an extension to the existing GTFS Schedule format; governance moved to MobilityData alongside the broader GTFS specification. GTFS-RT defines three feed entities: (1) TripUpdate — predicts arrival and departure time deviations from the published schedule at each stop, enabling real-time countdown displays and journey-planner updates; (2) VehiclePosition — provides GPS-derived latitude/longitude of operating vehicles, together with optional occupancy status (empty, many seats available, etc.); (3) ServiceAlert — communicates planned disruptions, platform or stop changes, and unplanned incidents affecting routes, stops, or individual trips, with human-readable descriptions and effect enumerations. Feeds are served as Protocol Buffer binary streams or (with community extensions) as JSON over HTTPS, typically refreshed every 15–30 seconds. GTFS-RT and GTFS Schedule together cover the complete data lifecycle: static schedules set the baseline and GTFS-RT overlays real-time deviations. In the EU, Commission Delegated Regulation (EU) 2017/1926 on multimodal travel information services recognises GTFS alongside NeTEx, and SIRI (Service Interface for Real Time Information) is the alternative European XML standard for equivalent real-time data.

**한국어 / Korean** — **GTFS 실시간(GTFS Realtime)** — GTFS Realtime(GTFS-RT)은 MobilityData가 관리하는 개방형 피드 명세로, 대중교통·철도 운영사가 실시간 차량 위치, 예상 도착·출발 시각(TripUpdate), 서비스 알림 등 라이브 서비스 업데이트를 Protocol Buffer(protobuf) 또는 JSON 피드 형식으로 공개할 수 있게 한다. 정적 GTFS Schedule을 동적 운행 데이터로 확장하며, 여정 계획 앱·승객 안내 디스플레이·MaaS 플랫폼이 소비한다.

GTFS Realtime은 2011년 구글이 기존 GTFS Schedule 형식의 확장으로 처음 공개했으며, 이후 관리 주체가 MobilityData로 이관됐다. GTFS-RT는 세 가지 피드 엔티티를 정의한다: (1) TripUpdate — 각 정류장에서 예상 도착·출발 편차를 예측해 실시간 카운트다운 디스플레이와 여정 계획기 업데이트를 가능하게 한다. (2) VehiclePosition — 운행 차량의 GPS 위도·경도와 혼잡도 상태를 제공한다. (3) ServiceAlert — 노선·정류장·운행 편에 영향을 미치는 운행 장애·플랫폼 변경·사고를 전달한다. EU에서는 위임 규정 (EU) 2017/1926이 NeTEx와 함께 GTFS를 인정하며, SIRI가 유럽의 동등한 실시간 XML 표준이다.

**Aliases:** `GTFS-RT`, `GTFS Realtime Feed`, `General Transit Feed Specification Realtime`

# Related
- [GTFS](/ground/rail/gtfs.md) — parent
- [NeTEx](/ground/rail/netex.md) — related
- [Mobility as a Service](/ground/car/mobility-as-a-service.md) — related
- [General Bikeshare Feed Specification](/ground/car/general-bikeshare-feed-specification.md) — related

# Distinctions
- **GTFS Realtime** vs [GTFS](/ground/rail/gtfs.md) — GTFS (GTFS Schedule) is a static, batch-published set of CSV files defining the planned network — routes, stops, timetables, fare rules — refreshed at most daily or weekly; GTFS Realtime is a live streaming extension that publishes predicted arrival/departure deviations, vehicle GPS positions, and service alerts at sub-minute refresh rates. Static GTFS sets the schedule baseline; GTFS-RT overlays the real-time operational truth. Both are published independently by the operator and consumed together by journey planners.
- **GTFS Realtime** vs [NeTEx](/ground/rail/netex.md) — NeTEx (CEN/TS 16614) is the European XML standard for network topology, timetable, and fare data, used for planned schedule exchange and mandated by EU National Access Points; its real-time counterpart is SIRI (Service Interface for Real Time Information, CEN/TS 15531). GTFS Realtime is the functionally equivalent real-time extension to GTFS and dominates the global (non-European) ecosystem. EU NAP regulations accept GTFS alongside NeTEx, so both ecosystems are in use across European transit.

# Citations
[1] [MobilityData — GTFS Realtime Reference](https://gtfs.org/documentation/realtime/reference/)
[2] [European Commission — Commission Delegated Regulation (EU) 2017/1926 — Multimodal Travel Information Services](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1926)
