---
type: Acronym
title: PMS
description: 'A Property Management System is the operational software used at an individual hotel property to manage front-office and back-office functions such as reservations, check-in/check-out, room assignment, guest folios, housekeeping status, and night audit. It is the system of record for the on-property guest stay and billing.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: pms
category: hotel-dist
conceptType: acronym
status: active
abbreviation: PMS
term_ko: 자산 관리 시스템(PMS)
definition_ko: '자산 관리 시스템(PMS)은 개별 호텔 자산에서 예약, 체크인/체크아웃, 객실 배정, 고객 폴리오(folio), 하우스키핑 상태, 야간 감사(night audit) 등 프런트오피스 및 백오피스 기능을 관리하는 운영 소프트웨어다. 현장 투숙과 청구에 대한 기록 시스템(system of record)이다.'
longDef: 'The PMS handles the operational lifecycle of a stay at the property level, including guest profiles, folio/charges, and room status. It commonly integrates with a CRS (for centralized distribution and incoming reservations) and downstream point-of-sale, payment, and door-lock systems. Reservations created in distribution channels typically arrive in the PMS via the CRS or a two-way interface.'
longDef_ko: 'PMS는 고객 프로필, 폴리오/요금, 객실 상태 등 자산 단위에서 투숙의 운영 생애주기를 처리한다. 일반적으로 CRS(중앙 분배 및 유입 예약용)와, 하류의 POS, 결제, 도어록 시스템과 통합된다. 분배 채널에서 생성된 예약은 보통 CRS 또는 양방향 인터페이스를 통해 PMS로 전달된다.'
aliases:
  - Property Management System
  - Hotel Property Management System
relationships:
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: Room Type
  - type: related
    targetTerm: Customer Profile
distinctions:
  - targetTerm: CRS
    explanation: PMS runs property operations and is the system of record for the stay; CRS centralizes inventory/rates and distributes them across channels.
    explanation_ko: 'PMS는 자산 운영을 수행하며 투숙에 대한 기록 시스템이고, CRS는 인벤토리/요금을 중앙화하여 여러 채널에 분배한다.'
sources:
  - name: HTNG interface specifications
    org: HTNG
    version: ''
    section: ''
    url: ''
  - name: OpenTravel Specification
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 42V14l12-6 12 6v28"/><path d="M8 42h32"/><path d="M14 22h4M22 22h4M14 30h4M22 30h4"/><circle cx="36" cy="34" r="6"/><path d="M36 30v-2M36 40v-2M40.2 31.8l-1.4 1.4M33.2 38.6l-1.4-1.4M42 34h-2M32 34h-2M40.2 38.6l-1.4-1.4M33.2 31.8l-1.4 1.4"/></svg>
---

> A Property Management System is the operational software used at an individual hotel property to manage front-office and back-office functions such as reservations, check-in/check-out, room assignment, guest folios, housekeeping status, and night audit. It is the system of record for the on-property guest stay and billing.

The PMS handles the operational lifecycle of a stay at the property level, including guest profiles, folio/charges, and room status. It commonly integrates with a CRS (for centralized distribution and incoming reservations) and downstream point-of-sale, payment, and door-lock systems. Reservations created in distribution channels typically arrive in the PMS via the CRS or a two-way interface.

**한국어 / Korean** — **자산 관리 시스템(PMS)** — 자산 관리 시스템(PMS)은 개별 호텔 자산에서 예약, 체크인/체크아웃, 객실 배정, 고객 폴리오(folio), 하우스키핑 상태, 야간 감사(night audit) 등 프런트오피스 및 백오피스 기능을 관리하는 운영 소프트웨어다. 현장 투숙과 청구에 대한 기록 시스템(system of record)이다.

PMS는 고객 프로필, 폴리오/요금, 객실 상태 등 자산 단위에서 투숙의 운영 생애주기를 처리한다. 일반적으로 CRS(중앙 분배 및 유입 예약용)와, 하류의 POS, 결제, 도어록 시스템과 통합된다. 분배 채널에서 생성된 예약은 보통 CRS 또는 양방향 인터페이스를 통해 PMS로 전달된다.

**Aliases:** `Property Management System`, `Hotel Property Management System`

# Related
- [CRS](/hotel-dist/crs.md) — related
- [Channel Manager](/hotel-dist/channel-manager.md) — related
- [Room Type](/hotel-rate/room-type.md) — related
- [Customer Profile](/customer/customer-profile.md) — related

# Distinctions
- **PMS** vs [CRS](/hotel-dist/crs.md) — PMS runs property operations and is the system of record for the stay; CRS centralizes inventory/rates and distributes them across channels.

# Citations
[1] HTNG — HTNG interface specifications
[2] OpenTravel Alliance — OpenTravel Specification
