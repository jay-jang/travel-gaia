---
type: System
title: Entry Management System
description: 'The hardware and software platform at a visitor attraction or experience venue that controls physical access, validates tickets (scanning QR codes, barcodes, or NFC tokens), enforces timed-entry slot capacities, and feeds real-time headcount data to operators; it is the operational equivalent of a Departure Control System in aviation, sitting at the gate between the reservation and the physical experience.'
tags:
  - tour-ops
  - active
  - Tours & Activities
timestamp: '2026-08-03T00:00:00Z'
id: entry-management-system
vertical: tours
category: tour-ops
conceptType: system
status: active
abbreviation: EMS
term_ko: 입장 관리 시스템(Entry Management System)
definition_ko: '관광지·체험 시설에서 물리적 출입을 통제하고, 티켓(QR코드·바코드·NFC 토큰 스캔)을 검증하며, 시간 지정 입장 슬롯 정원을 시행하고, 실시간 방문객 수 데이터를 운영자에게 전송하는 하드웨어·소프트웨어 플랫폼. 항공의 출발 통제 시스템(DCS)에 상응하는 운영 시스템으로, 예약과 실제 체험 사이의 게이트에 위치한다.'
longDef: 'An entry management system integrates with the operator''s reservation technology to receive real-time booking data. At the entry point, staff or self-service kiosks scan customers'' mobile or printed tickets. The EMS validates the ticket against the booking record (checking that it is unscanned, valid for the date/timeslot, and within capacity limits) and grants or denies access. Access hardware may include turnstiles, smart gates, or handheld scanners. The system simultaneously decrements available capacity, maintains a live headcount for safety and crowd management, and triggers post-scan webhooks that update the booking record (marking the ticket as redeemed). EMS platforms often integrate with yield management tools to adjust dynamic-priced timeslot availability in real time. Key vendors include Accesso (LoQueue, ShoWare), Convious, Siriucom, and Ingresso.'
longDef_ko: '입장 관리 시스템은 운영사의 예약 기술과 연동하여 실시간 예약 데이터를 수신한다. 입장 지점에서 직원 또는 셀프서비스 키오스크가 고객의 모바일 또는 인쇄 티켓을 스캔한다. EMS는 예약 기록에 대해 티켓을 검증하고(미스캔, 날짜/타임슬롯 유효성, 정원 제한 충족 여부 확인) 입장을 허용하거나 거부한다. 접근 하드웨어에는 회전식 입장구(turnstile), 스마트 게이트, 또는 핸드헬드 스캐너가 포함될 수 있다. 시스템은 동시에 가용 정원을 감소시키고, 안전·혼잡 관리를 위한 실시간 방문객 수를 유지하며, 예약 기록을 업데이트하는(티켓을 사용 처리) 스캔 후 웹훅을 트리거한다. EMS 플랫폼은 종종 실시간으로 동적 가격 책정 타임슬롯 가용성을 조정하기 위해 수익 관리 도구와 통합된다. 주요 벤더로는 Accesso(LoQueue, ShoWare), Convious, Siriucom, Ingresso 등이 있다.'
aliases:
  - EMS
  - Ticketing Validation System
  - Access Control System (Attractions)
  - Entry Control System
  - Admission Control System
providerTerms:
  - provider: Accesso
    term: ShoWare + Accesso Platform
    context: 'Accesso''s combined platform provides entry management, ticket scanning, and in-venue queuing management for theme parks, performing arts venues, and attractions.'
    context_ko: 'Accesso의 통합 플랫폼은 테마파크, 공연 예술 시설, 어트랙션을 위한 입장 관리, 티켓 스캔, 시설 내 대기열 관리를 제공한다.'
    relationship: same
  - provider: OCTO (Open Connectivity for Tours Activities & Attractions)
    term: Redemption / Check-in Endpoint
    context: 'The OCTO specification includes a redemption endpoint that allows entry management systems to mark bookings as redeemed and push check-in status back to the reservation technology after ticket scan.'
    context_ko: 'OCTO 사양에는 입장 관리 시스템이 티켓 스캔 후 예약을 사용 처리하고 체크인 상태를 예약 기술에 다시 전송할 수 있는 redemption 엔드포인트가 포함된다.'
    relationship: related
relationships:
  - type: related
    targetTerm: Timeslot
  - type: related
    targetTerm: Timed Entry
  - type: related
    targetTerm: Virtual Queue
  - type: related
    targetTerm: Mobile Ticket
  - type: related
    targetTerm: Voucher
  - type: related
    targetTerm: Redemption
distinctions:
  - targetTerm: Timed Entry
    explanation: 'Timed entry is the policy of requiring visitors to book a specific entry time slot; an entry management system is the operational technology that enforces that policy at the physical gate by validating ticket time slots against the current time and available capacity.'
    explanation_ko: '시간 지정 입장은 방문자가 특정 입장 시간 슬롯을 예약하도록 요구하는 정책이고, 입장 관리 시스템은 현재 시간과 가용 정원에 대해 티켓 타임슬롯을 검증하여 물리적 게이트에서 해당 정책을 시행하는 운영 기술이다.'
  - targetTerm: Voucher
    explanation: 'A voucher is the commercial instrument a customer holds as proof of purchase before exchange for admission; the entry management system is the gate-side technology that scans and validates that voucher, transforming it into physical access and marking it as consumed.'
    explanation_ko: '바우처는 고객이 입장권으로 교환하기 전에 구매 증빙으로 보유하는 상업적 증서이고, 입장 관리 시스템은 해당 바우처를 스캔·검증하여 물리적 입장으로 전환하고 사용 처리하는 게이트 측 기술이다.'
  - targetTerm: Virtual Queue
    explanation: 'A virtual queue manages visitor flow during the attraction visit — removing the need to stand in line inside the venue; an entry management system governs the initial entry gate — controlling who is admitted at the start of their visit. The two systems often integrate but serve different stages of the guest journey.'
    explanation_ko: '가상 대기열은 시설 방문 중 방문자 흐름을 관리하며 시설 내 줄 서기 필요성을 없앤다. 입장 관리 시스템은 초기 입장 게이트를 관장하며 방문 시작 시 누가 입장하는지를 통제한다. 두 시스템은 종종 통합되지만 게스트 여정의 서로 다른 단계를 담당한다.'
sources:
  - name: OCTO Open Connectivity Specification (Redemption / Checkin API)
    org: OCTO (Open Connectivity for Tours Activities & Attractions)
    version: ''
    section: ''
    url: 'https://octo.travel/spec'
    tier: standard-body
  - name: IAAPA — Technology Standards for Ticketing & Admission
    org: IAAPA (International Association of Amusement Parks and Attractions)
    version: ''
    section: ''
    url: 'https://www.iaapa.org/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="14" height="20" rx="2"/><rect x="28" y="8" width="14" height="20" rx="2"/><path d="M20 18h8"/><rect x="14" y="32" width="20" height="10" rx="2"/><path d="M19 37h10M24 37v5"/><path d="M10 14l4 3-4 3"/><path d="M38 14l-4 3 4 3"/></svg>
---

> The hardware and software platform at a visitor attraction or experience venue that controls physical access, validates tickets (scanning QR codes, barcodes, or NFC tokens), enforces timed-entry slot capacities, and feeds real-time headcount data to operators; it is the operational equivalent of a Departure Control System in aviation, sitting at the gate between the reservation and the physical experience.

An entry management system integrates with the operator's reservation technology to receive real-time booking data. At the entry point, staff or self-service kiosks scan customers' mobile or printed tickets. The EMS validates the ticket against the booking record (checking that it is unscanned, valid for the date/timeslot, and within capacity limits) and grants or denies access. Access hardware may include turnstiles, smart gates, or handheld scanners. The system simultaneously decrements available capacity, maintains a live headcount for safety and crowd management, and triggers post-scan webhooks that update the booking record (marking the ticket as redeemed). EMS platforms often integrate with yield management tools to adjust dynamic-priced timeslot availability in real time. Key vendors include Accesso (LoQueue, ShoWare), Convious, Siriucom, and Ingresso.

**한국어 / Korean** — **입장 관리 시스템(EMS)** — 관광지·체험 시설에서 물리적 출입을 통제하고, 티켓(QR코드·바코드·NFC 토큰 스캔)을 검증하며, 시간 지정 입장 슬롯 정원을 시행하고, 실시간 방문객 수 데이터를 운영자에게 전송하는 하드웨어·소프트웨어 플랫폼. 항공의 출발 통제 시스템(DCS)에 상응하는 운영 시스템으로, 예약과 실제 체험 사이의 게이트에 위치한다.

입장 관리 시스템은 운영사의 예약 기술과 연동하여 실시간 예약 데이터를 수신한다. 입장 지점에서 직원 또는 셀프서비스 키오스크가 고객의 모바일 또는 인쇄 티켓을 스캔한다. EMS는 예약 기록에 대해 티켓을 검증하고 입장을 허용하거나 거부한다. 접근 하드웨어에는 회전식 입장구, 스마트 게이트, 또는 핸드헬드 스캐너가 포함될 수 있다. 시스템은 동시에 가용 정원을 감소시키고 안전·혼잡 관리를 위한 실시간 방문객 수를 유지하며, 예약 기록을 업데이트하는 스캔 후 웹훅을 트리거한다.

**Aliases:** `EMS`, `Ticketing Validation System`, `Access Control System (Attractions)`, `Entry Control System`, `Admission Control System`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Accesso | `ShoWare + Accesso Platform` | same | Accesso's combined platform provides entry management, ticket scanning, and in-venue queuing management for theme parks, performing arts venues, and attractions. |
| OCTO (Open Connectivity for Tours Activities & Attractions) | `Redemption / Check-in Endpoint` | related | The OCTO specification includes a redemption endpoint that allows entry management systems to mark bookings as redeemed and push check-in status back to the reservation technology after ticket scan. |

# Related
- [Timeslot](/tours/tour-product/timeslot.md) — related
- [Timed Entry](/tours/tour-product/timed-entry.md) — related
- [Virtual Queue](/tours/tour-ops/virtual-queue.md) — related
- [Mobile Ticket](/tours/tour-product/mobile-ticket.md) — related
- [Voucher](/tours/tour-product/voucher.md) — related
- [Redemption](/tours/tour-ops/redemption.md) — related

# Distinctions
- **Entry Management System** vs [Timed Entry](/tours/tour-product/timed-entry.md) — Timed entry is the policy of requiring visitors to book a specific entry time slot; an entry management system is the operational technology that enforces that policy at the physical gate by validating ticket time slots against the current time and available capacity.
- **Entry Management System** vs [Voucher](/tours/tour-product/voucher.md) — A voucher is the commercial instrument a customer holds as proof of purchase before exchange for admission; the entry management system is the gate-side technology that scans and validates that voucher, transforming it into physical access and marking it as consumed.
- **Entry Management System** vs [Virtual Queue](/tours/tour-ops/virtual-queue.md) — A virtual queue manages visitor flow during the attraction visit — removing the need to stand in line inside the venue; an entry management system governs the initial entry gate — controlling who is admitted at the start of their visit. The two systems often integrate but serve different stages of the guest journey.

# Citations
[1] [OCTO (Open Connectivity for Tours Activities & Attractions) — OCTO Open Connectivity Specification (Redemption / Checkin API)](https://octo.travel/spec)
[2] [IAAPA (International Association of Amusement Parks and Attractions) — IAAPA — Technology Standards for Ticketing & Admission](https://www.iaapa.org/)
