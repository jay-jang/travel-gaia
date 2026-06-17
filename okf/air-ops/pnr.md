---
type: Document
title: PNR
description: 'A Passenger Name Record (PNR) is the data record in a reservation system (CRS/GDS or airline host) that holds the itinerary, passenger details, and contact information for one or more travelers traveling together. It is identified by a unique alphanumeric record locator and serves as the central container for all booking-related data.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: pnr
category: air-ops
conceptType: document
status: active
abbreviation: PNR
term_ko: 여객 예약 기록(PNR)
definition_ko: 'PNR(Passenger Name Record, 여객 예약 기록)은 함께 여행하는 한 명 이상의 여행객에 대한 여정, 승객 정보, 연락처 정보를 담는 예약 시스템(CRS/GDS 또는 항공사 호스트)의 데이터 레코드다. 고유한 영숫자 record locator로 식별되며, 예약 관련 모든 데이터를 담는 중심 컨테이너 역할을 한다.'
longDef: 'A PNR minimally requires the five mandatory elements often summarized as ''PRINT'': Phone (contact), Received from, Itinerary (segments), Name(s), and Ticketing arrangement. Beyond these, it can hold SSR/OSI elements, frequent flyer data, fare/pricing records, ticket numbers, and remarks. Each reservation system assigns its own record locator, so a single booking distributed across a GDS and multiple airline hosts may have several distinct locators linked by the itinerary.'
longDef_ko: 'PNR은 흔히 ''PRINT''로 요약되는 다섯 가지 필수 요소, 즉 Phone(연락처), Received from(접수처), Itinerary(여정, 즉 segment), Name(승객명), Ticketing(발권 처리)을 최소한으로 요구한다. 이 외에도 SSR/OSI 요소, 상용고객 정보, 운임/요금 기록, 항공권 번호, 비고 사항 등을 담을 수 있다. 각 예약 시스템은 고유한 record locator를 부여하므로, 하나의 예약이 GDS와 여러 항공사 호스트에 분산되면 여정으로 연결된 서로 다른 record locator를 여러 개 가질 수 있다.'
standardBody: IATA
aliases:
  - Passenger Name Record
  - Booking Record
  - Booking File
  - Reservation Record
providerTerms:
  - provider: Amadeus
    term: PNR
    context: Amadeus calls the booking record a PNR with a 6-character record locator
    context_ko: Amadeus는 예약 기록을 6자리 record locator를 가진 PNR이라고 부른다
    relationship: same
  - provider: Sabre
    term: PNR / Record Locator
    context: Sabre refers to the booking file as a PNR identified by a record locator
    context_ko: Sabre는 예약 파일을 record locator로 식별되는 PNR이라고 지칭한다
    relationship: same
relationships:
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: SSR
  - type: related
    targetTerm: OSI
  - type: related
    targetTerm: Queue
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Order
distinctions:
  - targetTerm: Order
    explanation: 'An NDC Order is the airline-centric, order-management successor concept to the PNR; the PNR is the legacy GDS/host reservation record.'
    explanation_ko: 'NDC Order는 항공사 중심의 주문 관리 개념으로 PNR을 계승하는 개념이며, PNR은 기존 GDS/호스트 예약 기록이다.'
  - targetTerm: E-ticket
    explanation: 'The PNR is the reservation/itinerary record, whereas the e-ticket is the separate proof-of-payment/fulfillment document created when the PNR is ticketed.'
    explanation_ko: 'PNR은 예약/여정 기록인 반면, e-ticket은 PNR이 발권될 때 생성되는 별도의 결제 증빙/이행 문서다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: Amadeus Functional Documentation — PNR
    org: Amadeus
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="11" y="6" width="26" height="36" rx="3"/><line x1="16" y1="14" x2="32" y2="14"/><line x1="16" y1="20" x2="32" y2="20"/><line x1="16" y1="26" x2="28" y2="26"/><circle cx="29" cy="34" r="4.5"/><path d="M32.2 37.2 35 40"/></svg>
---

> A Passenger Name Record (PNR) is the data record in a reservation system (CRS/GDS or airline host) that holds the itinerary, passenger details, and contact information for one or more travelers traveling together. It is identified by a unique alphanumeric record locator and serves as the central container for all booking-related data.

A PNR minimally requires the five mandatory elements often summarized as 'PRINT': Phone (contact), Received from, Itinerary (segments), Name(s), and Ticketing arrangement. Beyond these, it can hold SSR/OSI elements, frequent flyer data, fare/pricing records, ticket numbers, and remarks. Each reservation system assigns its own record locator, so a single booking distributed across a GDS and multiple airline hosts may have several distinct locators linked by the itinerary.

**한국어 / Korean** — **여객 예약 기록(PNR)** — PNR(Passenger Name Record, 여객 예약 기록)은 함께 여행하는 한 명 이상의 여행객에 대한 여정, 승객 정보, 연락처 정보를 담는 예약 시스템(CRS/GDS 또는 항공사 호스트)의 데이터 레코드다. 고유한 영숫자 record locator로 식별되며, 예약 관련 모든 데이터를 담는 중심 컨테이너 역할을 한다.

PNR은 흔히 'PRINT'로 요약되는 다섯 가지 필수 요소, 즉 Phone(연락처), Received from(접수처), Itinerary(여정, 즉 segment), Name(승객명), Ticketing(발권 처리)을 최소한으로 요구한다. 이 외에도 SSR/OSI 요소, 상용고객 정보, 운임/요금 기록, 항공권 번호, 비고 사항 등을 담을 수 있다. 각 예약 시스템은 고유한 record locator를 부여하므로, 하나의 예약이 GDS와 여러 항공사 호스트에 분산되면 여정으로 연결된 서로 다른 record locator를 여러 개 가질 수 있다.

**Aliases:** `Passenger Name Record`, `Booking Record`, `Booking File`, `Reservation Record`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `PNR` | same | Amadeus calls the booking record a PNR with a 6-character record locator |
| Sabre | `PNR / Record Locator` | same | Sabre refers to the booking file as a PNR identified by a record locator |

# Related
- [Segment](/air-ops/segment.md) — related
- [SSR](/air-ops/ssr.md) — related
- [OSI](/air-ops/osi.md) — related
- [Queue](/air-ops/queue.md) — related
- [E-ticket](/air-ticket/e-ticket.md) — related
- [Order](/standards/order.md) — related

# Distinctions
- **PNR** vs [Order](/standards/order.md) — An NDC Order is the airline-centric, order-management successor concept to the PNR; the PNR is the legacy GDS/host reservation record.
- **PNR** vs [E-ticket](/air-ticket/e-ticket.md) — The PNR is the reservation/itinerary record, whereas the e-ticket is the separate proof-of-payment/fulfillment document created when the PNR is ticketed.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
[2] Amadeus — Amadeus Functional Documentation — PNR
