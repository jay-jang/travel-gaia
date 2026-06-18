---
type: Standard
title: General Bikeshare Feed Specification
description: 'The General Bikeshare Feed Specification (GBFS) is an open, read-only data standard, governed by MobilityData, for publishing real-time availability of shared-mobility systems — bikes, scooters, mopeds and shared cars — as a set of standardized JSON feeds. It is the de-facto interoperability standard that lets apps, journey planners and MaaS platforms consume live vehicle and station status across operators.'
tags:
  - car
  - active
  - MobilityData
timestamp: '2026-06-18T00:00:00Z'
id: general-bikeshare-feed-specification
vertical: ground
category: car
conceptType: standard
status: active
abbreviation: GBFS
term_ko: '일반 자전거공유 피드 명세(GBFS, General Bikeshare Feed Specification)'
definition_ko: 'General Bikeshare Feed Specification(GBFS)은 MobilityData가 관리하는 개방형·읽기 전용 데이터 표준으로, 자전거·스쿠터·모페드·공유차 등 공유 모빌리티 시스템의 실시간 가용성을 표준화된 JSON 피드 묶음으로 게시한다. 앱·여정 계획기·MaaS 플랫폼이 사업자를 가로질러 실시간 차량·스테이션 상태를 소비하게 해 주는 사실상의 상호운용 표준이다.'
longDef: 'A GBFS feed is composed of a series of JSON files, each modeling one aspect of a mobility system — system information, vehicle/station status, geofencing rules, pricing plans, and so on — so that consumers can ingest a uniform, real-time picture regardless of operator. The specification is pull-based and deliberately read-only: it describes current public availability and is not a channel for writing data back into operator systems. Originally created for bikeshare and stewarded by the North American Bikeshare & Scootershare Association (NABSA), governance was passed to the non-profit MobilityData in 2019, and the scope has since broadened to cover scooters, mopeds and car-share. GBFS is frequently paired with, but distinct from, the Mobility Data Specification (MDS): GBFS is the public, consumer-facing availability feed, whereas MDS — stewarded by the Open Mobility Foundation and used by 1,000+ cities and 200+ operators — is the regulatory, often two-way data channel cities use to oversee operators.'
longDef_ko: 'GBFS 피드는 여러 JSON 파일로 구성되며, 각 파일은 시스템 정보, 차량/스테이션 상태, 지오펜싱 규칙, 요금제 등 모빌리티 시스템의 한 측면을 모델링한다. 덕분에 이용 측은 사업자와 무관하게 균일한 실시간 현황을 받아들일 수 있다. 이 명세는 풀(pull) 방식이며 의도적으로 읽기 전용이다. 현재의 공개 가용성을 기술할 뿐, 사업자 시스템으로 데이터를 되쓰는 채널이 아니다. 본래 자전거 공유용으로 만들어져 북미자전거·스쿠터공유협회(NABSA)가 관리했으나, 2019년 비영리 MobilityData로 거버넌스가 이관되었고 이후 적용 범위가 스쿠터·모페드·카셰어로 넓어졌다. GBFS는 Mobility Data Specification(MDS)과 자주 함께 쓰이지만 구별된다. GBFS는 공개적·소비자 대면 가용성 피드이고, MDS는 Open Mobility Foundation이 관리하며 1,000개 이상 도시와 200개 이상 사업자가 쓰는, 도시가 사업자를 감독하는 데 쓰는 규제용·흔히 양방향 데이터 채널이다.'
standardBody: MobilityData
aliases:
  - General Bikeshare Feed Specification
  - GBFS
providerTerms:
  - provider: MobilityData / NABSA
    term: GBFS
    context: MobilityData governs the specification (handed over from NABSA in 2019) that standardizes real-time shared-mobility availability feeds
    context_ko: MobilityData가 (2019년 NABSA로부터 이관받아) 공유 모빌리티의 실시간 가용성 피드를 표준화하는 이 명세를 관리한다
    relationship: same
relationships:
  - type: parent
    targetTerm: Mobility as a Service
  - type: related
    targetTerm: Multimodal Transport
distinctions:
  - targetTerm: Mobility as a Service
    explanation: 'GBFS is a machine-to-machine data feed of live availability; MaaS is the end-user service concept that consumes GBFS (and other) feeds to plan, book and pay for journeys.'
    explanation_ko: 'GBFS는 실시간 가용성을 전달하는 기계 대 기계 데이터 피드이고, MaaS는 GBFS(및 기타) 피드를 소비해 여정을 계획·예약·결제하는 최종 이용자용 서비스 개념이다.'
sources:
  - org: MobilityData
    name: General Bikeshare Feed Specification — gbfs.org documentation/FAQ
    version: ''
    section: ''
    url: ''
  - org: MobilityData
    name: MobilityData/gbfs — standardized data feed for shared mobility (GitHub)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="34" r="7"/><circle cx="36" cy="34" r="7"/><path d="M12 34l8-14h10M20 20l8 14M30 20h5M27 20l-2-5"/><path d="M6 8a18 18 0 0 1 8 8M6 14a10 10 0 0 1 4 4"/></svg>
---

> The General Bikeshare Feed Specification (GBFS) is an open, read-only data standard, governed by MobilityData, for publishing real-time availability of shared-mobility systems — bikes, scooters, mopeds and shared cars — as a set of standardized JSON feeds. It is the de-facto interoperability standard that lets apps, journey planners and MaaS platforms consume live vehicle and station status across operators.

A GBFS feed is composed of a series of JSON files, each modeling one aspect of a mobility system — system information, vehicle/station status, geofencing rules, pricing plans, and so on — so that consumers can ingest a uniform, real-time picture regardless of operator. The specification is pull-based and deliberately read-only: it describes current public availability and is not a channel for writing data back into operator systems. Originally created for bikeshare and stewarded by the North American Bikeshare & Scootershare Association (NABSA), governance was passed to the non-profit MobilityData in 2019, and the scope has since broadened to cover scooters, mopeds and car-share. GBFS is frequently paired with, but distinct from, the Mobility Data Specification (MDS): GBFS is the public, consumer-facing availability feed, whereas MDS — stewarded by the Open Mobility Foundation and used by 1,000+ cities and 200+ operators — is the regulatory, often two-way data channel cities use to oversee operators.

**한국어 / Korean** — **일반 자전거공유 피드 명세(GBFS, General Bikeshare Feed Specification)** — General Bikeshare Feed Specification(GBFS)은 MobilityData가 관리하는 개방형·읽기 전용 데이터 표준으로, 자전거·스쿠터·모페드·공유차 등 공유 모빌리티 시스템의 실시간 가용성을 표준화된 JSON 피드 묶음으로 게시한다. 앱·여정 계획기·MaaS 플랫폼이 사업자를 가로질러 실시간 차량·스테이션 상태를 소비하게 해 주는 사실상의 상호운용 표준이다.

GBFS 피드는 여러 JSON 파일로 구성되며, 각 파일은 시스템 정보, 차량/스테이션 상태, 지오펜싱 규칙, 요금제 등 모빌리티 시스템의 한 측면을 모델링한다. 덕분에 이용 측은 사업자와 무관하게 균일한 실시간 현황을 받아들일 수 있다. 이 명세는 풀(pull) 방식이며 의도적으로 읽기 전용이다. 현재의 공개 가용성을 기술할 뿐, 사업자 시스템으로 데이터를 되쓰는 채널이 아니다. 본래 자전거 공유용으로 만들어져 북미자전거·스쿠터공유협회(NABSA)가 관리했으나, 2019년 비영리 MobilityData로 거버넌스가 이관되었고 이후 적용 범위가 스쿠터·모페드·카셰어로 넓어졌다. GBFS는 Mobility Data Specification(MDS)과 자주 함께 쓰이지만 구별된다. GBFS는 공개적·소비자 대면 가용성 피드이고, MDS는 Open Mobility Foundation이 관리하며 1,000개 이상 도시와 200개 이상 사업자가 쓰는, 도시가 사업자를 감독하는 데 쓰는 규제용·흔히 양방향 데이터 채널이다.

**Aliases:** `General Bikeshare Feed Specification`, `GBFS`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| MobilityData / NABSA | `GBFS` | same | MobilityData governs the specification (handed over from NABSA in 2019) that standardizes real-time shared-mobility availability feeds |

# Related
- [Mobility as a Service](/ground/car/mobility-as-a-service.md) — parent
- [Multimodal Transport](/ground/rail/multimodal-transport.md) — related

# Distinctions
- **General Bikeshare Feed Specification** vs [Mobility as a Service](/ground/car/mobility-as-a-service.md) — GBFS is a machine-to-machine data feed of live availability; MaaS is the end-user service concept that consumes GBFS (and other) feeds to plan, book and pay for journeys.

# Citations
[1] MobilityData — General Bikeshare Feed Specification — gbfs.org documentation/FAQ
[2] MobilityData — MobilityData/gbfs — standardized data feed for shared mobility (GitHub)
