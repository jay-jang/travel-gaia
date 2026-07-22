---
type: Business Term
title: Central Reservations Office
description: 'A Central Reservations Office (CRO) is the organizational unit within a hotel brand or chain that accepts, processes, and manages reservations on behalf of member properties from a centralized location. The CRO acts as the single commercial routing point between external distribution channels — GDS, voice, brand website, OTA — and each property, providing a consistent booking interface regardless of channel and handling rate loading, availability, and confirmation across the portfolio.'
tags:
  - hotel-dist
  - active
  - HEDNA
timestamp: '2026-07-22T00:00:00Z'
id: central-reservations-office
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
abbreviation: CRO
term_ko: '중앙 예약 사무소(CRO)'
definition_ko: 'CRO(Central Reservations Office, 중앙 예약 사무소)는 호텔 브랜드나 체인 내에서 회원 숙박시설을 대신하여 예약을 중앙에서 접수·처리·관리하는 조직 단위다. CRO는 GDS, 전화, 브랜드 웹사이트, OTA 등 외부 유통 채널과 각 숙박시설 사이의 단일 상업 라우팅 지점 역할을 하며, 채널에 관계없이 일관된 예약 인터페이스를 제공하고 전체 포트폴리오에 걸친 요금 로딩, 가용성, 확정을 처리한다.'
longDef: 'The CRO emerged as hotel chains grew too large for individual properties to manage all inbound distribution relationships independently. Agents telephoning a chain are connected to the CRO call centre; GDS and OTA requests are routed through the chain''s Central Reservation System (CRS) software that the CRO operates. The CRO is responsible for maintaining rate plans, inventory allotments, and content across all distribution channels so that each property''s availability is represented accurately. For large brands, the CRO may operate multiple regional offices and a 24/7 agent pool. The CRO function is sometimes distinguished from the Central Reservation System (CRS), where the CRS is the technology platform and the CRO is the people and processes running it; in practice the terms are often used interchangeably in industry publications. Modern CRO operations also handle group quotes, corporate account management, and loyalty redemptions, routing complex requests to the property only when property-level authority is required. HEDNA, the industry body for hotel electronic distribution, defines CRO connectivity as a primary pathway in its distribution ecosystem mapping.'
longDef_ko: 'CRO는 호텔 체인이 개별 숙박시설이 모든 유통 관계를 독립적으로 관리하기 어려울 만큼 성장하면서 등장했다. 체인에 전화하는 여행사 직원은 CRO 콜 센터로 연결되고, GDS 및 OTA 요청은 CRO가 운영하는 중앙 예약 시스템(CRS) 소프트웨어를 통해 라우팅된다. CRO는 모든 유통 채널에서 요금 플랜, 재고 할당량, 콘텐츠를 유지·관리하여 각 숙박시설의 가용성이 정확하게 표현되도록 책임진다. 대형 브랜드의 경우 CRO는 여러 지역 사무소와 24/7 상담원 풀을 운영한다. CRO 기능은 때로 중앙 예약 시스템(CRS)과 구분되는데, CRS가 기술 플랫폼이라면 CRO는 이를 운영하는 사람과 프로세스를 의미한다. 그러나 업계 간행물에서는 두 용어가 혼용되는 경우가 많다. 현대 CRO 업무는 단체 견적, 법인 계정 관리, 로열티 사용도 처리하며, 숙박시설 차원의 권한이 필요한 복잡한 요청만 해당 시설로 라우팅한다. 호텔 전자 유통 업계 단체인 HEDNA는 유통 생태계 매핑에서 CRO 연결성을 주요 경로로 정의한다.'
standardBody: HEDNA
aliases:
  - CRO
  - Central Reservations System
  - Reservations Center
  - Hotel Call Center
relationships:
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: PMS
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Hotel Switch
  - type: related
    targetTerm: Booking Engine
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: HEDNA
distinctions:
  - targetTerm: CRS
    explanation: 'The CRS is the software technology platform that stores and distributes hotel rates, availability, and inventory; the CRO is the organizational unit (people, processes, and call-centre operations) that manages reservations using the CRS. A hotel may outsource its CRO function while still owning its CRS, or the two may be operated by the same entity under the brand umbrella.'
    explanation_ko: 'CRS는 호텔 요금, 가용성, 재고를 저장·유통하는 소프트웨어 기술 플랫폼이고, CRO는 CRS를 활용해 예약을 관리하는 조직 단위(인력, 프로세스, 콜 센터 운영)다. 호텔은 자체 CRS를 보유하면서 CRO 기능을 아웃소싱하거나, 두 기능 모두를 브랜드 우산 아래 동일 주체가 운영하기도 한다.'
  - targetTerm: PMS
    explanation: 'The PMS (Property Management System) manages on-site operations — check-in, room assignment, housekeeping, billing — for a single property; the CRO handles off-site reservation intake and distribution across the brand portfolio, feeding confirmed bookings into each property''s PMS via two-way interface.'
    explanation_ko: 'PMS(숙박시설 관리 시스템)는 단일 숙박시설의 현장 운영(체크인, 객실 배정, 하우스키핑, 청구)을 관리하고, CRO는 브랜드 포트폴리오 전반에 걸쳐 원격으로 예약 접수와 유통을 담당하며 확정된 예약을 양방향 인터페이스를 통해 각 숙박시설의 PMS로 전달한다.'
  - targetTerm: Channel Manager
    explanation: 'A Channel Manager is a technology layer that synchronizes rates and availability in real time between the PMS/CRS and multiple OTA/GDS channels at the property level; the CRO is the brand-level organizational function that accepts and processes those reservations and maintains the rate structures the Channel Manager distributes.'
    explanation_ko: '채널 매니저는 숙박시설 차원에서 PMS/CRS와 여러 OTA/GDS 채널 간에 요금 및 가용성을 실시간으로 동기화하는 기술 계층이고, CRO는 그러한 예약을 접수·처리하고 채널 매니저가 배포하는 요금 구조를 유지 관리하는 브랜드 수준의 조직 기능이다.'
sources:
  - name: Distribution Ecosystem Map — Understanding the CRO Function
    org: HEDNA (Hotel Electronic Distribution Network Association)
    version: ''
    section: ''
    url: 'https://hedna.org'
    tier: association
  - name: OpenTravel Hotel Reservation Specification
    org: OpenTravel Alliance
    version: ''
    section: 'OTA_HotelRes'
    url: 'https://opentravel.org/download-specs/'
    tier: association
  - name: Rooms Division Operations Management (Hiebing & Cooper)
    org: Pearson / AHLEI
    version: ''
    section: 'Chapter: Reservations'
    url: ''
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="18" width="32" height="22" rx="2"/><path d="M16 18V12a8 8 0 0116 0v6"/><circle cx="24" cy="29" r="4"/><path d="M20 40v-7"/><path d="M28 40v-7"/></svg>
---

> A Central Reservations Office (CRO) is the organizational unit within a hotel brand or chain that accepts, processes, and manages reservations on behalf of member properties from a centralized location. The CRO acts as the single commercial routing point between external distribution channels — GDS, voice, brand website, OTA — and each property, providing a consistent booking interface regardless of channel and handling rate loading, availability, and confirmation across the portfolio.

The CRO emerged as hotel chains grew too large for individual properties to manage all inbound distribution relationships independently. Agents telephoning a chain are connected to the CRO call centre; GDS and OTA requests are routed through the chain's Central Reservation System (CRS) software that the CRO operates. The CRO is responsible for maintaining rate plans, inventory allotments, and content across all distribution channels so that each property's availability is represented accurately. For large brands, the CRO may operate multiple regional offices and a 24/7 agent pool. The CRO function is sometimes distinguished from the Central Reservation System (CRS), where the CRS is the technology platform and the CRO is the people and processes running it; in practice the terms are often used interchangeably in industry publications. Modern CRO operations also handle group quotes, corporate account management, and loyalty redemptions, routing complex requests to the property only when property-level authority is required. HEDNA, the industry body for hotel electronic distribution, defines CRO connectivity as a primary pathway in its distribution ecosystem mapping.

**한국어 / Korean** — **중앙 예약 사무소(CRO)** — CRO(Central Reservations Office, 중앙 예약 사무소)는 호텔 브랜드나 체인 내에서 회원 숙박시설을 대신하여 예약을 중앙에서 접수·처리·관리하는 조직 단위다. CRO는 GDS, 전화, 브랜드 웹사이트, OTA 등 외부 유통 채널과 각 숙박시설 사이의 단일 상업 라우팅 지점 역할을 하며, 채널에 관계없이 일관된 예약 인터페이스를 제공하고 전체 포트폴리오에 걸친 요금 로딩, 가용성, 확정을 처리한다.

CRO는 호텔 체인이 개별 숙박시설이 모든 유통 관계를 독립적으로 관리하기 어려울 만큼 성장하면서 등장했다. 체인에 전화하는 여행사 직원은 CRO 콜 센터로 연결되고, GDS 및 OTA 요청은 CRO가 운영하는 중앙 예약 시스템(CRS) 소프트웨어를 통해 라우팅된다. CRO는 모든 유통 채널에서 요금 플랜, 재고 할당량, 콘텐츠를 유지·관리하여 각 숙박시설의 가용성이 정확하게 표현되도록 책임진다. 대형 브랜드의 경우 CRO는 여러 지역 사무소와 24/7 상담원 풀을 운영한다. CRO 기능은 때로 중앙 예약 시스템(CRS)과 구분되는데, CRS가 기술 플랫폼이라면 CRO는 이를 운영하는 사람과 프로세스를 의미한다. 그러나 업계 간행물에서는 두 용어가 혼용되는 경우가 많다. 현대 CRO 업무는 단체 견적, 법인 계정 관리, 로열티 사용도 처리하며, 숙박시설 차원의 권한이 필요한 복잡한 요청만 해당 시설로 라우팅한다. 호텔 전자 유통 업계 단체인 HEDNA는 유통 생태계 매핑에서 CRO 연결성을 주요 경로로 정의한다.

**Aliases:** `CRO`, `Central Reservations System`, `Reservations Center`, `Hotel Call Center`

# Related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [PMS](/lodging/hotel-dist/pms.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [GDS](/common/standards/gds.md) — related
- [Hotel Switch](/lodging/hotel-dist/hotel-switch.md) — related
- [Booking Engine](/lodging/hotel-dist/booking-engine.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [HEDNA](/lodging/hotel-dist/hedna.md) — related

# Distinctions
- **Central Reservations Office** vs [CRS](/lodging/hotel-dist/crs.md) — The CRS is the software technology platform that stores and distributes hotel rates, availability, and inventory; the CRO is the organizational unit (people, processes, and call-centre operations) that manages reservations using the CRS. A hotel may outsource its CRO function while still owning its CRS, or the two may be operated by the same entity under the brand umbrella.
- **Central Reservations Office** vs [PMS](/lodging/hotel-dist/pms.md) — The PMS (Property Management System) manages on-site operations — check-in, room assignment, housekeeping, billing — for a single property; the CRO handles off-site reservation intake and distribution across the brand portfolio, feeding confirmed bookings into each property's PMS via two-way interface.
- **Central Reservations Office** vs [Channel Manager](/lodging/hotel-dist/channel-manager.md) — A Channel Manager is a technology layer that synchronizes rates and availability in real time between the PMS/CRS and multiple OTA/GDS channels at the property level; the CRO is the brand-level organizational function that accepts and processes those reservations and maintains the rate structures the Channel Manager distributes.

# Citations
[1] [HEDNA (Hotel Electronic Distribution Network Association) — Distribution Ecosystem Map — Understanding the CRO Function](https://hedna.org)
[2] [OpenTravel Alliance — OpenTravel Hotel Reservation Specification — OTA_HotelRes](https://opentravel.org/download-specs/)
[3] Pearson / AHLEI — Rooms Division Operations Management (Hiebing & Cooper) — Chapter: Reservations
