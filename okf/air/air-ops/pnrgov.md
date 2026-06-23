---
type: Standard
title: PNRGOV
description: 'PNRGOV is the IATA/WCO/ICAO standard message by which an airline pushes Passenger Name Record data from its reservation system to a state''s border/security agencies, in fulfilment of national PNR-reporting requirements. Maintained by the joint PNRGOV Working Group, it is defined within the PADIS standards in both EDIFACT and XML formats.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: pnrgov
vertical: air
category: air-ops
conceptType: standard
status: active
term_ko: PNRGOV (PNR-정부 보고 메시지)
definition_ko: 'PNRGOV는 항공사가 자사 예약 시스템의 Passenger Name Record 데이터를 국가의 국경·보안 당국에 push하여 각국의 PNR 보고 요건을 충족하는 IATA/WCO/ICAO 표준 메시지다. 공동 PNRGOV Working Group이 유지하며, PADIS 표준 안에서 EDIFACT와 XML 두 포맷으로 정의된다.'
longDef: 'PNRGOV provides a single, consistent method for airlines to transmit PNR data to government authorities that legally require it, so carriers can serve many states without bespoke per-country interfaces. The message structure is governed by the WCO/IATA/ICAO API Contact Committee and the IATA-led PNRGOV Working Group, is complementary to ICAO''s PNR guidelines (ICAO Doc 9944) and Annex 9 Facilitation, and is published through the Passenger and Airport Data Interchange Standards (PADIS) implementation guides. Transmissions are typically triggered at defined points in the booking-to-departure timeline (push events). PNRGOV is distinct from API: PNRGOV conveys the broader commercial reservation record (itinerary, contacts, form of payment, frequent-flyer, etc.), whereas API conveys verified travel-document identity data captured at check-in.'
longDef_ko: 'PNRGOV는 항공사가 법적으로 PNR 데이터를 요구하는 정부 당국에 이를 전송하는 단일·일관된 방법을 제공하여, 국가별 맞춤 인터페이스 없이도 여러 국가의 요건을 충족하게 한다. 메시지 구조는 WCO/IATA/ICAO API Contact Committee와 IATA가 주도하는 PNRGOV Working Group이 규율하고, ICAO의 PNR 가이드라인(ICAO Doc 9944) 및 Annex 9 Facilitation을 보완하며, Passenger and Airport Data Interchange Standards(PADIS) 구현 가이드를 통해 발행된다. 전송은 보통 booking부터 출발까지 타임라인의 정해진 시점(push 이벤트)에 트리거된다. PNRGOV는 API와 구분된다: PNRGOV는 더 넓은 상업적 예약 기록(itinerary, 연락처, form of payment, frequent-flyer 등)을 실어 보내고, API는 check-in 시 확보한 검증된 여행 문서 신원 데이터를 실어 보낸다.'
standardBody: IATA
aliases:
  - PNRGOV Message
  - PNR-GOV
  - Government PNR reporting
relationships:
  - type: parent
    targetTerm: Passenger and Airport Data Interchange Standards (PADIS)
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Secure Flight
  - type: related
    targetTerm: EDIFACT
  - type: related
    targetTerm: Departure Control System (DCS)
distinctions:
  - targetTerm: Secure Flight
    explanation: 'Secure Flight is the US TSA-specific prescreening program (collecting SFPD); PNRGOV is the generic international standard message for sending the full PNR to any state''s authority that mandates PNR reporting. Secure Flight data is a narrower, watch-list-focused dataset.'
    explanation_ko: 'Secure Flight는 미국 TSA 전용의 사전심사 프로그램(SFPD 수집)이고, PNRGOV는 PNR 보고를 의무화한 어느 국가 당국에든 전체 PNR을 보내는 일반 국제 표준 메시지다. Secure Flight 데이터는 watch-list 중심의 더 좁은 데이터셋이다.'
  - targetTerm: PNR
    explanation: A PNR is the reservation record itself held in the airline/GDS system; PNRGOV is the standardized message that extracts and transmits that record to government border agencies.
    explanation_ko: 'PNR은 항공사/GDS 시스템에 보유된 예약 기록 자체이고, PNRGOV는 그 기록을 추출해 정부 국경 당국에 전송하는 표준 메시지다.'
sources:
  - org: IATA
    name: Air Transport & Travel Industry Functional and Business Principles — PNRGOV
    version: Version 17.1
    section: ''
    url: 'https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/facilitation/instruments-and-tools/tools/api-guidelines-and-pnr-doc/pnrgov-principles-17-1.pdf?la=en'
    tier: regulator-guidance
    verifyQuote: Air Transport & Travel Industry — Functional and Business Principles — PNRGOV — Version 17.1
    verified: true
  - org: WCO / IATA / ICAO
    name: API Guidelines & PNR Reporting Standards (PNRGOV Working Group)
    version: ''
    section: ''
    url: 'https://www.wcoomd.org/en/topics/facilitation/instrument-and-tools/tools/api-pnr.aspx'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="11" width="18" height="24" rx="2"/><line x1="11" y1="17" x2="21" y2="17"/><line x1="11" y1="22" x2="18" y2="22"/><path d="M25 23h12"/><polyline points="33 19 37 23 33 27"/><path d="M41 14l-3 1v6c0 3 1.5 4.5 3 5.5 1.5-1 3-2.5 3-5.5v-6z"/></svg>
---

> PNRGOV is the IATA/WCO/ICAO standard message by which an airline pushes Passenger Name Record data from its reservation system to a state's border/security agencies, in fulfilment of national PNR-reporting requirements. Maintained by the joint PNRGOV Working Group, it is defined within the PADIS standards in both EDIFACT and XML formats.

PNRGOV provides a single, consistent method for airlines to transmit PNR data to government authorities that legally require it, so carriers can serve many states without bespoke per-country interfaces. The message structure is governed by the WCO/IATA/ICAO API Contact Committee and the IATA-led PNRGOV Working Group, is complementary to ICAO's PNR guidelines (ICAO Doc 9944) and Annex 9 Facilitation, and is published through the Passenger and Airport Data Interchange Standards (PADIS) implementation guides. Transmissions are typically triggered at defined points in the booking-to-departure timeline (push events). PNRGOV is distinct from API: PNRGOV conveys the broader commercial reservation record (itinerary, contacts, form of payment, frequent-flyer, etc.), whereas API conveys verified travel-document identity data captured at check-in.

**한국어 / Korean** — **PNRGOV (PNR-정부 보고 메시지)** — PNRGOV는 항공사가 자사 예약 시스템의 Passenger Name Record 데이터를 국가의 국경·보안 당국에 push하여 각국의 PNR 보고 요건을 충족하는 IATA/WCO/ICAO 표준 메시지다. 공동 PNRGOV Working Group이 유지하며, PADIS 표준 안에서 EDIFACT와 XML 두 포맷으로 정의된다.

PNRGOV는 항공사가 법적으로 PNR 데이터를 요구하는 정부 당국에 이를 전송하는 단일·일관된 방법을 제공하여, 국가별 맞춤 인터페이스 없이도 여러 국가의 요건을 충족하게 한다. 메시지 구조는 WCO/IATA/ICAO API Contact Committee와 IATA가 주도하는 PNRGOV Working Group이 규율하고, ICAO의 PNR 가이드라인(ICAO Doc 9944) 및 Annex 9 Facilitation을 보완하며, Passenger and Airport Data Interchange Standards(PADIS) 구현 가이드를 통해 발행된다. 전송은 보통 booking부터 출발까지 타임라인의 정해진 시점(push 이벤트)에 트리거된다. PNRGOV는 API와 구분된다: PNRGOV는 더 넓은 상업적 예약 기록(itinerary, 연락처, form of payment, frequent-flyer 등)을 실어 보내고, API는 check-in 시 확보한 검증된 여행 문서 신원 데이터를 실어 보낸다.

**Aliases:** `PNRGOV Message`, `PNR-GOV`, `Government PNR reporting`

# Related
- [Passenger and Airport Data Interchange Standards (PADIS)](/common/standards/passenger-and-airport-data-interchange-standards-padis.md) — parent
- [PNR](/air/air-ops/pnr.md) — related
- [Secure Flight](/common/customer/secure-flight.md) — related
- [EDIFACT](/common/standards/edifact.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related

# Distinctions
- **PNRGOV** vs [Secure Flight](/common/customer/secure-flight.md) — Secure Flight is the US TSA-specific prescreening program (collecting SFPD); PNRGOV is the generic international standard message for sending the full PNR to any state's authority that mandates PNR reporting. Secure Flight data is a narrower, watch-list-focused dataset.
- **PNRGOV** vs [PNR](/air/air-ops/pnr.md) — A PNR is the reservation record itself held in the airline/GDS system; PNRGOV is the standardized message that extracts and transmits that record to government border agencies.

# Citations
[1] [IATA — Air Transport & Travel Industry Functional and Business Principles — PNRGOV — Version 17.1](https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/facilitation/instruments-and-tools/tools/api-guidelines-and-pnr-doc/pnrgov-principles-17-1.pdf?la=en)
[2] [WCO / IATA / ICAO — API Guidelines & PNR Reporting Standards (PNRGOV Working Group)](https://www.wcoomd.org/en/topics/facilitation/instrument-and-tools/tools/api-pnr.aspx)
