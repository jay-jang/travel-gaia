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
vertical: air
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
  - type: child
    targetTerm: SSR
  - type: child
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
  - targetTerm: Advance Passenger Information System
    explanation: APIS transmits verified identity and travel-document data drawn from the passport at check-in for border control; a PNR is the reservation record built by the booking system. APIS and PNR are the two distinct carrier-to-government data streams.
    explanation_ko: 'APIS는 국경 통제를 위해 체크인 시 passport에서 추출한 검증된 신원·여행서류 데이터를 전송하고, PNR은 예약 시스템이 생성한 예약 레코드이다. APIS와 PNR은 운송인-정부 간 두 개의 서로 다른 데이터 흐름이다.'
  - targetTerm: Customer Profile
    explanation: A Customer Profile is persistent traveler master data; a PNR is a single trip's reservation record that may be populated from a profile.
    explanation_ko: 'Customer Profile은 지속적으로 유지되는 여행자 마스터 데이터이고, PNR은 프로필로부터 채워질 수 있는 단일 여정의 예약 레코드이다.'
  - targetTerm: EU PNR Directive
    explanation: The PNR is the reservation data record built and held in the carrier's booking system; the EU PNR Directive is the law obliging carriers to transfer that record's data to government Passenger Information Units for security purposes.
    explanation_ko: 'PNR은 운송인의 예약 시스템에서 생성·보관되는 예약 데이터 레코드이고, EU PNR Directive는 보안 목적으로 그 레코드의 데이터를 정부 Passenger Information Unit에 전송하도록 항공사에 의무를 부과하는 법이다.'
  - targetTerm: Order Management System (OMS)
    explanation: An OMS centers on the modern single Order record; the PNR is the legacy reservation construct an OMS aims to consolidate and replace.
    explanation_ko: 'OMS는 현대적 단일 주문 기록을 중심에 두고, PNR은 OMS가 통합·대체하려는 레거시 예약 구조이다.'
  - targetTerm: OrderCreate
    explanation: 'A PNR is the legacy reservation record split from the ticket; OrderCreate produces a single NDC Order that unifies booking, ancillaries and (with ONE Order) accountable documents.'
    explanation_ko: 'PNR은 티켓과 분리된 레거시 예약 레코드이고, OrderCreate는 예약·부가서비스와 (ONE Order에서는) 회계 문서까지 통합한 단일 NDC Order를 생성한다.'
  - targetTerm: Passenger Name List / Additions and Deletions List (PNL/ADL)
    explanation: A PNR is the booking record held in the reservation system for one party; PNL/ADL are flight-level messages that consolidate and push all booked passengers (and subsequent changes) for a flight from the reservation system into the DCS.
    explanation_ko: 'PNR은 예약 시스템이 한 일행에 대해 보유하는 예약 기록이고, PNL/ADL은 한 항공편의 모든 예약 승객(및 이후 변경)을 예약 시스템에서 DCS로 통합·전달하는 항공편 단위 메시지다.'
  - targetTerm: PNRGOV
    explanation: A PNR is the reservation record itself held in the airline/GDS system; PNRGOV is the standardized message that extracts and transmits that record to government border agencies.
    explanation_ko: 'PNR은 항공사/GDS 시스템에 보유된 예약 기록 자체이고, PNRGOV는 그 기록을 추출해 정부 국경 당국에 전송하는 표준 메시지다.'
  - targetTerm: Record Locator
    explanation: 'The PNR is the full reservation data record (names, segments, contacts, SSRs); the Record Locator is merely the short key used to retrieve that record. One trip can have several locators pointing to copies of essentially the same PNR data.'
    explanation_ko: 'PNR은 이름, segment, 연락처, SSR 등 예약 데이터 전체 레코드이고, Record Locator는 그 레코드를 조회하는 짧은 key일 뿐이다. 한 여정에 여러 locator가 사실상 같은 PNR 데이터 사본을 가리킬 수 있다.'
  - targetTerm: Ticket Number
    explanation: A PNR locator references the whole reservation (which may hold several passengers and tickets); a ticket number references a single passenger's transport document of 13 digits.
    explanation_ko: 'PNR 예약번호는 (여러 승객·여러 항공권을 포함할 수 있는) 예약 전체를 가리키고, 항공권 번호는 한 승객의 13자리 운송 서류 하나를 가리킨다.'
  - targetTerm: Transitional Stored Ticket (TST)
    explanation: 'The PNR holds the itinerary, passenger and contact data; the TST is a separate record attached to that PNR that holds the priced fare/tax/fare-calculation data needed to ticket it.'
    explanation_ko: 'PNR은 여정, 승객 및 연락처 데이터를 보유하고, TST는 그 PNR에 연결된 별도의 레코드로서 발권에 필요한 운임/세금/운임계산 데이터를 보유한다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
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
- [Segment](/air/air-ops/segment.md) — related
- [SSR](/air/air-ops/ssr.md) — child
- [OSI](/air/air-ops/osi.md) — child
- [Queue](/air/air-ops/queue.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [Order](/common/standards/order.md) — related

# Distinctions
- **PNR** vs [Order](/common/standards/order.md) — An NDC Order is the airline-centric, order-management successor concept to the PNR; the PNR is the legacy GDS/host reservation record.
- **PNR** vs [E-ticket](/air/air-ticket/e-ticket.md) — The PNR is the reservation/itinerary record, whereas the e-ticket is the separate proof-of-payment/fulfillment document created when the PNR is ticketed.
- **PNR** vs [Advance Passenger Information System](/common/customer/advance-passenger-information-system.md) — APIS transmits verified identity and travel-document data drawn from the passport at check-in for border control; a PNR is the reservation record built by the booking system. APIS and PNR are the two distinct carrier-to-government data streams.
- **PNR** vs [Customer Profile](/common/customer/customer-profile.md) — A Customer Profile is persistent traveler master data; a PNR is a single trip's reservation record that may be populated from a profile.
- **PNR** vs [EU PNR Directive](/common/customer/eu-pnr-directive.md) — The PNR is the reservation data record built and held in the carrier's booking system; the EU PNR Directive is the law obliging carriers to transfer that record's data to government Passenger Information Units for security purposes.
- **PNR** vs [Order Management System (OMS)](/common/standards/order-management-system-oms.md) — An OMS centers on the modern single Order record; the PNR is the legacy reservation construct an OMS aims to consolidate and replace.
- **PNR** vs [OrderCreate](/common/standards/ordercreate.md) — A PNR is the legacy reservation record split from the ticket; OrderCreate produces a single NDC Order that unifies booking, ancillaries and (with ONE Order) accountable documents.
- **PNR** vs [Passenger Name List / Additions and Deletions List (PNL/ADL)](/air/air-ops/pnl-adl.md) — A PNR is the booking record held in the reservation system for one party; PNL/ADL are flight-level messages that consolidate and push all booked passengers (and subsequent changes) for a flight from the reservation system into the DCS.
- **PNR** vs [PNRGOV](/air/air-ops/pnrgov.md) — A PNR is the reservation record itself held in the airline/GDS system; PNRGOV is the standardized message that extracts and transmits that record to government border agencies.
- **PNR** vs [Record Locator](/air/air-ops/record-locator.md) — The PNR is the full reservation data record (names, segments, contacts, SSRs); the Record Locator is merely the short key used to retrieve that record. One trip can have several locators pointing to copies of essentially the same PNR data.
- **PNR** vs [Ticket Number](/common/codes/ticket-number.md) — A PNR locator references the whole reservation (which may hold several passengers and tickets); a ticket number references a single passenger's transport document of 13 digits.
- **PNR** vs [Transitional Stored Ticket (TST)](/air/air-ticket/transitional-stored-ticket-tst.md) — The PNR holds the itinerary, passenger and contact data; the TST is a separate record attached to that PNR that holds the priced fare/tax/fare-calculation data needed to ticket it.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] Amadeus — Amadeus Functional Documentation — PNR
