---
type: Code
title: Record Locator
description: A Record Locator is the short alphanumeric identifier — conventionally six characters — assigned by an airline host or GDS to uniquely retrieve a Passenger Name Record (PNR). It is the code passengers receive to access their booking; the PNR is the underlying data record while the locator is its key.
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: record-locator
category: air-ops
conceptType: code
status: active
term_ko: Record Locator (예약 조회 번호 / 예약 번호)
definition_ko: 'Record Locator는 항공사 호스트나 GDS가 PNR(Passenger Name Record)을 고유하게 조회하기 위해 부여하는 짧은 영숫자 식별자로, 관례적으로 6자리다. 승객이 예약을 조회할 때 받는 코드가 Record Locator이며, PNR이 실제 데이터 레코드라면 Record Locator는 그 레코드를 가리키는 key에 해당한다.'
longDef: 'Each reservation system that holds a copy of a booking generates its own Record Locator, so a single trip can carry multiple locators: the GDS/agency locator, the validating or operating carrier''s host locator, and codeshare partners'' locators, often cross-referenced in the PNR. The six-character format is a long-standing industry convention (letters and digits, frequently excluding ambiguous characters); it is not globally unique across all systems, which is why retrieval also depends on the issuing office or system context. Locators appear in different positions across GDSs (e.g., on the Amadeus RP/ header line, at the top of a Sabre or Worldspan record, and after the RLOC tag in Galileo).'
longDef_ko: '한 여정이라도 예약 사본을 보유한 시스템마다 별도의 Record Locator를 생성하므로, GDS/여행사 locator, 발권/운항 항공사 호스트 locator, codeshare 파트너 locator 등 여러 개가 존재할 수 있고 이들은 보통 PNR 안에서 상호 참조된다. 6자리 형식(영문자+숫자, 혼동되는 문자는 흔히 제외)은 오래된 업계 관례이며 모든 시스템에 걸쳐 전역 고유한 것은 아니어서, 조회 시 발권 office나 시스템 context가 함께 필요하다. GDS마다 표시 위치가 달라 Amadeus는 RP/ 헤더 줄, Sabre·Worldspan은 레코드 최상단, Galileo는 RLOC 태그 뒤에 나타난다.'
aliases:
  - PNR Locator
  - Booking Reference
  - Reservation Code
  - Confirmation Code
  - RLOC
providerTerms:
  - provider: Amadeus
    term: Record Locator (RLOC)
    context: Six-character reservation reference shown on the RP/ header line of a PNR.
    context_ko: PNR의 RP/ 헤더 줄에 표시되는 6자리 예약 참조번호.
    relationship: same
  - provider: Sabre
    term: Record Locator
    context: 'Alphanumeric code retrieving a Sabre PNR, displayed at the top of the record.'
    context_ko: Sabre PNR을 조회하는 영숫자 코드로 레코드 최상단에 표시.
    relationship: same
  - provider: Travelport
    term: Record Locator / RLOC
    context: Galileo/Apollo/Worldspan booking reference used to access the reservation.
    context_ko: 예약 접근에 사용되는 Galileo/Apollo/Worldspan 예약 참조번호.
    relationship: same
relationships:
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: E-ticket
distinctions:
  - targetTerm: PNR
    explanation: 'The PNR is the full reservation data record (names, segments, contacts, SSRs); the Record Locator is merely the short key used to retrieve that record. One trip can have several locators pointing to copies of essentially the same PNR data.'
    explanation_ko: 'PNR은 이름, segment, 연락처, SSR 등 예약 데이터 전체 레코드이고, Record Locator는 그 레코드를 조회하는 짧은 key일 뿐이다. 한 여정에 여러 locator가 사실상 같은 PNR 데이터 사본을 가리킬 수 있다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: ''
    section: ''
    url: ''
  - org: Travelport
    name: Travelport+ (Galileo) Format Guide
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="14" width="34" height="20" rx="3"/><path d="M14 22h6M14 28h12M28 22h6"/><circle cx="33" cy="28" r="3.5"/><path d="M35.5 30.5 39 34"/></svg>
---

> A Record Locator is the short alphanumeric identifier — conventionally six characters — assigned by an airline host or GDS to uniquely retrieve a Passenger Name Record (PNR). It is the code passengers receive to access their booking; the PNR is the underlying data record while the locator is its key.

Each reservation system that holds a copy of a booking generates its own Record Locator, so a single trip can carry multiple locators: the GDS/agency locator, the validating or operating carrier's host locator, and codeshare partners' locators, often cross-referenced in the PNR. The six-character format is a long-standing industry convention (letters and digits, frequently excluding ambiguous characters); it is not globally unique across all systems, which is why retrieval also depends on the issuing office or system context. Locators appear in different positions across GDSs (e.g., on the Amadeus RP/ header line, at the top of a Sabre or Worldspan record, and after the RLOC tag in Galileo).

**한국어 / Korean** — **Record Locator (예약 조회 번호 / 예약 번호)** — Record Locator는 항공사 호스트나 GDS가 PNR(Passenger Name Record)을 고유하게 조회하기 위해 부여하는 짧은 영숫자 식별자로, 관례적으로 6자리다. 승객이 예약을 조회할 때 받는 코드가 Record Locator이며, PNR이 실제 데이터 레코드라면 Record Locator는 그 레코드를 가리키는 key에 해당한다.

한 여정이라도 예약 사본을 보유한 시스템마다 별도의 Record Locator를 생성하므로, GDS/여행사 locator, 발권/운항 항공사 호스트 locator, codeshare 파트너 locator 등 여러 개가 존재할 수 있고 이들은 보통 PNR 안에서 상호 참조된다. 6자리 형식(영문자+숫자, 혼동되는 문자는 흔히 제외)은 오래된 업계 관례이며 모든 시스템에 걸쳐 전역 고유한 것은 아니어서, 조회 시 발권 office나 시스템 context가 함께 필요하다. GDS마다 표시 위치가 달라 Amadeus는 RP/ 헤더 줄, Sabre·Worldspan은 레코드 최상단, Galileo는 RLOC 태그 뒤에 나타난다.

**Aliases:** `PNR Locator`, `Booking Reference`, `Reservation Code`, `Confirmation Code`, `RLOC`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Record Locator (RLOC)` | same | Six-character reservation reference shown on the RP/ header line of a PNR. |
| Sabre | `Record Locator` | same | Alphanumeric code retrieving a Sabre PNR, displayed at the top of the record. |
| Travelport | `Record Locator / RLOC` | same | Galileo/Apollo/Worldspan booking reference used to access the reservation. |

# Related
- [PNR](/air-ops/pnr.md) — related
- [GDS](/standards/gds.md) — related
- [E-ticket](/air-ticket/e-ticket.md) — related

# Distinctions
- **Record Locator** vs [PNR](/air-ops/pnr.md) — The PNR is the full reservation data record (names, segments, contacts, SSRs); the Record Locator is merely the short key used to retrieve that record. One trip can have several locators pointing to copies of essentially the same PNR data.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
[2] Travelport — Travelport+ (Galileo) Format Guide
