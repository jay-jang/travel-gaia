---
type: Process
title: Advance Passenger Information System
description: 'A border-control process in which a carrier transmits a defined set of each traveler''s identity and travel-document data — typically full name, date of birth, gender, nationality, and passport/travel-document details together with flight information — to the destination (and sometimes departure) state''s authorities before or at departure. The data set and message format follow the joint WCO/IATA/ICAO Guidelines on Advance Passenger Information (API).'
tags:
  - customer
  - active
  - WCO / IATA / ICAO
timestamp: '2026-06-18T00:00:00Z'
id: advance-passenger-information-system
vertical: common
category: customer
conceptType: process
status: active
abbreviation: APIS
term_ko: 사전 승객 정보 시스템 (APIS / Advance Passenger Information)
definition_ko: '운송인(항공사)이 출발 전 또는 출발 시점에 각 여행자의 신원 및 여행서류 데이터(통상 전체 성명, 생년월일, 성별, 국적, passport/여행서류 정보)를 항공편 정보와 함께 도착국(때로는 출발국) 당국에 전송하는 국경 통제 절차이다. 데이터 항목과 메시지 형식은 WCO/IATA/ICAO 공동의 Advance Passenger Information(API) 지침을 따른다.'
longDef: 'API data is normally captured from the machine-readable zone of the traveler''s passport at check-in and sent to government systems so that border and customs authorities can pre-process and risk-assess arriving passengers. In its interactive form (iAPI), the authority can return a board/no-board (or directive) response to the carrier in near real time before boarding. APIS is one of two principal carrier-to-government passenger data streams; the other is Passenger Name Record (PNR) data. As a traveler-data process it draws on the same identity attributes held in a customer profile and in security identifiers, but it is a regulatory carrier obligation rather than a marketing or loyalty function.'
longDef_ko: 'API 데이터는 보통 체크인 시 여행자 passport의 기계판독영역(MRZ)에서 추출되어 정부 시스템으로 전송되며, 이를 통해 국경·세관 당국이 입국 승객을 사전 처리하고 위험을 평가할 수 있다. 상호작용형(interactive API, iAPI)에서는 탑승 전 당국이 탑승 가능/불가(또는 지시) 응답을 거의 실시간으로 운송인에게 회신할 수 있다. APIS는 운송인-정부 간 두 가지 주요 승객 데이터 흐름 중 하나이며, 다른 하나는 Passenger Name Record(PNR) 데이터이다. 여행자 데이터 절차로서 customer profile 및 보안 식별자에 보관된 동일한 신원 속성을 활용하지만, 마케팅·로열티 기능이 아니라 규제상의 운송인 의무이다.'
standardBody: WCO / IATA / ICAO
aliases:
  - Advance Passenger Information
  - API
  - API data
  - APIS data
providerTerms:
  - provider: IATA
    term: SSR DOCS / DOCO / DOCA
    context: 'IATA Resolution 760a defines the SSR DOCS (passport/travel-document), DOCO (visa/other docs) and DOCA (address) elements carriers use in the PNR to capture and transmit API data'
    context_ko: 'IATA 결의 760a가 PNR에서 API 데이터를 수집·전송하는 SSR DOCS(여권), DOCO(비자), DOCA(주소) 요소를 정의한다'
    relationship: narrower
  - provider: WCO/IATA/ICAO
    term: PAXLST (UN/EDIFACT)
    context: The WCO/IATA/ICAO API Guidelines specify the UN/EDIFACT PAXLST passenger-list message as the standard format for transmitting API data to border authorities
    context_ko: WCO/IATA/ICAO API 지침이 국경당국에 API 데이터를 전송하는 표준 포맷으로 UN/EDIFACT PAXLST 승객명단 메시지를 규정한다
    relationship: related
  - provider: US CBP
    term: APIS
    context: 'US Customs and Border Protection operates the implementation under the name APIS, the data-interchange system receiving passport and flight data from carriers'
    context_ko: 미국 CBP는 항공사로부터 여권·항공편 데이터를 수신하는 이 구현을 APIS라는 명칭으로 운영한다
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Secure Flight
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Digital Travel Credential
  - type: related
    targetTerm: Customer Profile
distinctions:
  - targetTerm: PNR
    explanation: APIS transmits verified identity and travel-document data drawn from the passport at check-in for border control; a PNR is the reservation record built by the booking system. APIS and PNR are the two distinct carrier-to-government data streams.
    explanation_ko: 'APIS는 국경 통제를 위해 체크인 시 passport에서 추출한 검증된 신원·여행서류 데이터를 전송하고, PNR은 예약 시스템이 생성한 예약 레코드이다. APIS와 PNR은 운송인-정부 간 두 개의 서로 다른 데이터 흐름이다.'
  - targetTerm: Secure Flight
    explanation: APIS is the international WCO/IATA/ICAO advance-passenger-data process used by many states for border and customs control; Secure Flight is the specific US TSA watch-list prescreening program with its own SFPD data set.
    explanation_ko: 'APIS는 여러 국가가 국경·세관 통제에 사용하는 국제 WCO/IATA/ICAO 사전 승객 데이터 절차이고, Secure Flight는 자체 SFPD 데이터 항목을 쓰는 미국 TSA의 감시 명단 사전 심사 프로그램이다.'
  - targetTerm: EU PNR Directive
    explanation: The EU PNR Directive transfers reservation-derived PNR data for terrorism and serious-crime purposes; APIS transfers passport-derived identity data for border and customs control. The two are separate carrier-to-government streams with different data sets and purposes.
    explanation_ko: 'EU PNR Directive는 테러·중대 범죄 목적으로 예약에서 파생된 PNR 데이터를 전송하고, APIS는 국경·세관 통제를 위해 passport에서 추출된 신원 데이터를 전송한다. 둘은 데이터 항목과 목적이 다른 별개의 운송인-정부 데이터 흐름이다.'
sources:
  - org: WCO / IATA / ICAO
    name: Guidelines on Advance Passenger Information (API)
    version: '2014'
    section: ''
    url: 'https://www.iata.org/contentassets/18a5fdb2dc144d619a8c10dc1472ae80/api-guidelines-main-text_2014.pdf'
    tier: standard-body
    verifyQuote: GUIDELINES ON ADVANCE PASSENGER INFORMATION (API) — WCO/IATA/ICAO — 2014 (cover page)
    verified: true
  - org: ICAO
    name: API Guidelines and PNR Reporting Standards
    version: ''
    section: ''
    url: 'https://www.icao.int/facilitation-programmes/api-guidelines-and-pnr-reporting-standards'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="22" height="30" rx="2"/><circle cx="19" cy="16" r="4"/><path d="M13 27c1.5-3 9.5-3 11 0"/><path d="M30 21h12"/><path d="M37 16l5 5-5 5"/></svg>
---

> A border-control process in which a carrier transmits a defined set of each traveler's identity and travel-document data — typically full name, date of birth, gender, nationality, and passport/travel-document details together with flight information — to the destination (and sometimes departure) state's authorities before or at departure. The data set and message format follow the joint WCO/IATA/ICAO Guidelines on Advance Passenger Information (API).

API data is normally captured from the machine-readable zone of the traveler's passport at check-in and sent to government systems so that border and customs authorities can pre-process and risk-assess arriving passengers. In its interactive form (iAPI), the authority can return a board/no-board (or directive) response to the carrier in near real time before boarding. APIS is one of two principal carrier-to-government passenger data streams; the other is Passenger Name Record (PNR) data. As a traveler-data process it draws on the same identity attributes held in a customer profile and in security identifiers, but it is a regulatory carrier obligation rather than a marketing or loyalty function.

**한국어 / Korean** — **사전 승객 정보 시스템 (APIS / Advance Passenger Information)** — 운송인(항공사)이 출발 전 또는 출발 시점에 각 여행자의 신원 및 여행서류 데이터(통상 전체 성명, 생년월일, 성별, 국적, passport/여행서류 정보)를 항공편 정보와 함께 도착국(때로는 출발국) 당국에 전송하는 국경 통제 절차이다. 데이터 항목과 메시지 형식은 WCO/IATA/ICAO 공동의 Advance Passenger Information(API) 지침을 따른다.

API 데이터는 보통 체크인 시 여행자 passport의 기계판독영역(MRZ)에서 추출되어 정부 시스템으로 전송되며, 이를 통해 국경·세관 당국이 입국 승객을 사전 처리하고 위험을 평가할 수 있다. 상호작용형(interactive API, iAPI)에서는 탑승 전 당국이 탑승 가능/불가(또는 지시) 응답을 거의 실시간으로 운송인에게 회신할 수 있다. APIS는 운송인-정부 간 두 가지 주요 승객 데이터 흐름 중 하나이며, 다른 하나는 Passenger Name Record(PNR) 데이터이다. 여행자 데이터 절차로서 customer profile 및 보안 식별자에 보관된 동일한 신원 속성을 활용하지만, 마케팅·로열티 기능이 아니라 규제상의 운송인 의무이다.

**Aliases:** `Advance Passenger Information`, `API`, `API data`, `APIS data`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `SSR DOCS / DOCO / DOCA` | narrower | IATA Resolution 760a defines the SSR DOCS (passport/travel-document), DOCO (visa/other docs) and DOCA (address) elements carriers use in the PNR to capture and transmit API data |
| WCO/IATA/ICAO | `PAXLST (UN/EDIFACT)` | related | The WCO/IATA/ICAO API Guidelines specify the UN/EDIFACT PAXLST passenger-list message as the standard format for transmitting API data to border authorities |
| US CBP | `APIS` | same | US Customs and Border Protection operates the implementation under the name APIS, the data-interchange system receiving passport and flight data from carriers |

# Related
- [Secure Flight](/common/customer/secure-flight.md) — contrasts
- [PNR](/air/air-ops/pnr.md) — related
- [Digital Travel Credential](/common/customer/digital-travel-credential.md) — related
- [Customer Profile](/common/customer/customer-profile.md) — related

# Distinctions
- **Advance Passenger Information System** vs [PNR](/air/air-ops/pnr.md) — APIS transmits verified identity and travel-document data drawn from the passport at check-in for border control; a PNR is the reservation record built by the booking system. APIS and PNR are the two distinct carrier-to-government data streams.
- **Advance Passenger Information System** vs [Secure Flight](/common/customer/secure-flight.md) — APIS is the international WCO/IATA/ICAO advance-passenger-data process used by many states for border and customs control; Secure Flight is the specific US TSA watch-list prescreening program with its own SFPD data set.
- **Advance Passenger Information System** vs [EU PNR Directive](/common/customer/eu-pnr-directive.md) — The EU PNR Directive transfers reservation-derived PNR data for terrorism and serious-crime purposes; APIS transfers passport-derived identity data for border and customs control. The two are separate carrier-to-government streams with different data sets and purposes.

# Citations
[1] [WCO / IATA / ICAO — Guidelines on Advance Passenger Information (API) — 2014](https://www.iata.org/contentassets/18a5fdb2dc144d619a8c10dc1472ae80/api-guidelines-main-text_2014.pdf)
[2] [ICAO — API Guidelines and PNR Reporting Standards](https://www.icao.int/facilitation-programmes/api-guidelines-and-pnr-reporting-standards)
