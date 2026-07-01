---
type: System
title: TIMATIC
description: 'IATA''s Travel Information Manual Automatic, a subscription database and API service that provides airlines, travel agents, and airports with authoritative, continuously maintained requirements for travel documents, visa conditions, health certificates, and passenger eligibility for any origin-destination-nationality combination. Airlines use TIMATIC checks at the point of sale and at check-in to satisfy carrier liability obligations for passengers refused entry at the destination.'
tags:
  - customer
  - active
  - IATA
timestamp: '2026-07-01T00:00:00Z'
id: timatic
vertical: common
category: customer
conceptType: system
status: active
abbreviation: TIMATIC
term_ko: TIMATIC (여행 정보 자동 시스템)
definition_ko: 'IATA의 Travel Information Manual Automatic(여행 정보 자동 시스템). 항공사·여행사·공항이 출발지-목적지-국적 조합에 따른 여행 서류, 비자 조건, 건강 증명서, 승객 자격 요건을 신뢰성 있고 지속적으로 갱신된 형태로 조회할 수 있는 구독형 데이터베이스 및 API 서비스. 항공사는 예약 시점 및 체크인 시 TIMATIC 조회를 사용하여 목적지에서 입국 거부된 승객에 대한 운송인 책임 의무를 이행한다.'
longDef: 'TIMATIC is maintained by IATA in partnership with governments and embassies worldwide, aggregating official passport, visa, and health requirements from more than 200 countries and territories. Its content covers document requirements (passport validity, machine-readable requirements), visa requirements by nationality, transit visa requirements, health document requirements (vaccinations, COVID-19 certificates in applicable periods), and currency and customs information. Airlines integrate TIMATIC through the IATA Travel Centre API (AutoCheck) or via GDS-embedded access (Amadeus TravelCheck, Sabre Timatic, Travelport Timatic) to perform automated eligibility checks at booking (to warn agents of inadmissibility) and at check-in (before boarding passes are issued). Carriers are contractually obliged under their government agreements and IATA traffic conference resolutions to verify passenger documentation, and TIMATIC is the industry''s primary tool for discharging that obligation. Importantly, TIMATIC reflects official government requirements; it does not handle biometric or real-time entry-clearance decisions, which remain with Advance Passenger Information System (APIS) and border agencies.'
longDef_ko: 'TIMATIC은 IATA가 전 세계 정부 및 대사관과 협력하여 200개 이상의 국가·지역으로부터 공식 여권·비자·건강 요건을 수집·유지한다. 수록 내용은 여행 서류 요건(여권 유효기간, 기계판독 요건), 국적별 비자 요건, 환승 비자 요건, 건강 서류 요건(예방 접종, 해당 기간 COVID-19 증명서), 통화·세관 정보를 포함한다. 항공사는 IATA Travel Centre API(AutoCheck) 또는 GDS 내장 접근(Amadeus TravelCheck, Sabre Timatic, Travelport Timatic)을 통해 TIMATIC을 연동하여 예약 시(에이전트에 입국 불가 경고) 및 체크인 시(탑승권 발급 전) 자동 자격 확인을 수행한다. 운송인은 정부 협정과 IATA 교통회의 결의에 따라 승객 서류를 확인할 계약적 의무가 있으며, TIMATIC이 이 의무 이행의 핵심 수단이다. 중요한 점은 TIMATIC이 공식 정부 요건을 반영하며, 생체인식 또는 실시간 입국 심사 결정을 처리하지 않는다는 것인데, 이는 APIS 및 국경 당국의 역할이다.'
standardBody: IATA
aliases:
  - Travel Information Manual Automatic
  - TIM
  - IATA Travel Centre
  - AutoCheck
providerTerms:
  - provider: Amadeus
    term: Amadeus TravelCheck (TIMATIC)
    context: 'Amadeus embeds IATA TIMATIC data under the ''Amadeus TravelCheck'' brand, accessible from within the Amadeus GDS terminal and via the Amadeus Travel APIs, providing automated document-check responses for agents.'
    context_ko: 'Amadeus는 IATA TIMATIC 데이터를 ''Amadeus TravelCheck'' 브랜드로 임베드하며, Amadeus GDS 터미널과 Amadeus Travel API에서 접근 가능하고 에이전트에게 자동화된 서류 확인 응답을 제공한다.'
    relationship: same
  - provider: Sabre
    term: Sabre Timatic
    context: 'Sabre delivers TIMATIC content directly within the Sabre Red 360 workspace and via Sabre APIs, enabling agents to query travel document requirements without leaving the booking workflow.'
    context_ko: 'Sabre는 Sabre Red 360 워크스페이스와 Sabre API를 통해 TIMATIC 콘텐츠를 직접 제공하며, 에이전트가 예약 흐름을 벗어나지 않고 여행 서류 요건을 조회할 수 있게 한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Advance Passenger Information System
  - type: related
    targetTerm: Secure Flight
  - type: related
    targetTerm: PNRGOV
  - type: related
    targetTerm: Known Traveler Number
distinctions:
  - targetTerm: Advance Passenger Information System
    explanation: 'APIS is the government-mandated data transmission from carrier to border agency about specific, named passengers on a specific flight, used for pre-departure border screening; TIMATIC is a private reference database used by carriers and agents at booking/check-in to determine whether a passenger''s documents satisfy destination requirements before the journey begins. TIMATIC is predictive and advisory; APIS is transactional and regulatory.'
    explanation_ko: 'APIS는 특정 항공편의 특정 승객에 대한 운송인 발 국경 기관 전송 데이터로 출발 전 국경 심사에 사용되는 정부 의무 데이터 전송이고, TIMATIC은 여정 시작 전에 승객 서류가 목적지 요건을 충족하는지 확인하기 위해 운송인·에이전트가 예약/체크인 시 사용하는 민간 참조 데이터베이스이다. TIMATIC은 예측·자문적이고, APIS는 거래·규제적이다.'
  - targetTerm: PNRGOV
    explanation: 'PNRGOV is the standardised message that transmits a passenger''s PNR reservation data to government border agencies for security screening after booking; TIMATIC is the pre-travel reference tool that tells carriers and agents which documents a passenger needs to be allowed on board. TIMATIC is consulted before ticketing or boarding; PNRGOV is sent after booking, to governments.'
    explanation_ko: 'PNRGOV는 예약 후 보안 심사를 위해 승객의 PNR 예약 데이터를 정부 국경 당국에 전송하는 표준 메시지이고, TIMATIC은 운송인·에이전트에게 승객이 탑승 허가를 받기 위해 어떤 서류가 필요한지 알려주는 사전 여행 참조 도구이다. TIMATIC은 발권 또는 탑승 전에 조회하고, PNRGOV는 예약 후 정부로 전송된다.'
sources:
  - name: 'TIMATIC — Travel Document and Visa Requirements Database'
    org: IATA (International Air Transport Association)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/tools/timatic/'
    tier: association
  - name: 'IATA Travel Centre (AutoCheck API) — Documentation'
    org: IATA
    version: ''
    section: ''
    url: 'https://developer.iata.org/en/developer-tools/timatic'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="18"/><ellipse cx="24" cy="24" rx="8" ry="18"/><line x1="6" y1="24" x2="42" y2="24"/><line x1="8" y1="15" x2="40" y2="15"/><line x1="8" y1="33" x2="40" y2="33"/><path d="M32 10 l4 4 -8 8" stroke-width="2.5"/></svg>
---

> IATA's Travel Information Manual Automatic, a subscription database and API service that provides airlines, travel agents, and airports with authoritative, continuously maintained requirements for travel documents, visa conditions, health certificates, and passenger eligibility for any origin-destination-nationality combination. Airlines use TIMATIC checks at the point of sale and at check-in to satisfy carrier liability obligations for passengers refused entry at the destination.

TIMATIC is maintained by IATA in partnership with governments and embassies worldwide, aggregating official passport, visa, and health requirements from more than 200 countries and territories. Its content covers document requirements (passport validity, machine-readable requirements), visa requirements by nationality, transit visa requirements, health document requirements (vaccinations, COVID-19 certificates in applicable periods), and currency and customs information. Airlines integrate TIMATIC through the IATA Travel Centre API (AutoCheck) or via GDS-embedded access (Amadeus TravelCheck, Sabre Timatic, Travelport Timatic) to perform automated eligibility checks at booking (to warn agents of inadmissibility) and at check-in (before boarding passes are issued). Carriers are contractually obliged under their government agreements and IATA traffic conference resolutions to verify passenger documentation, and TIMATIC is the industry's primary tool for discharging that obligation. Importantly, TIMATIC reflects official government requirements; it does not handle biometric or real-time entry-clearance decisions, which remain with Advance Passenger Information System (APIS) and border agencies.

**한국어 / Korean** — **TIMATIC (여행 정보 자동 시스템)** — IATA의 Travel Information Manual Automatic(여행 정보 자동 시스템). 항공사·여행사·공항이 출발지-목적지-국적 조합에 따른 여행 서류, 비자 조건, 건강 증명서, 승객 자격 요건을 신뢰성 있고 지속적으로 갱신된 형태로 조회할 수 있는 구독형 데이터베이스 및 API 서비스. 항공사는 예약 시점 및 체크인 시 TIMATIC 조회를 사용하여 목적지에서 입국 거부된 승객에 대한 운송인 책임 의무를 이행한다.

TIMATIC은 IATA가 전 세계 정부 및 대사관과 협력하여 200개 이상의 국가·지역으로부터 공식 여권·비자·건강 요건을 수집·유지한다. 수록 내용은 여행 서류 요건(여권 유효기간, 기계판독 요건), 국적별 비자 요건, 환승 비자 요건, 건강 서류 요건(예방 접종, 해당 기간 COVID-19 증명서), 통화·세관 정보를 포함한다. 항공사는 IATA Travel Centre API(AutoCheck) 또는 GDS 내장 접근(Amadeus TravelCheck, Sabre Timatic, Travelport Timatic)을 통해 TIMATIC을 연동하여 예약 시(에이전트에 입국 불가 경고) 및 체크인 시(탑승권 발급 전) 자동 자격 확인을 수행한다. 운송인은 정부 협정과 IATA 교통회의 결의에 따라 승객 서류를 확인할 계약적 의무가 있으며, TIMATIC이 이 의무 이행의 핵심 수단이다. 중요한 점은 TIMATIC이 공식 정부 요건을 반영하며, 생체인식 또는 실시간 입국 심사 결정을 처리하지 않는다는 것인데, 이는 APIS 및 국경 당국의 역할이다.

**Aliases:** `Travel Information Manual Automatic`, `TIM`, `IATA Travel Centre`, `AutoCheck`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Amadeus TravelCheck (TIMATIC)` | same | Amadeus embeds IATA TIMATIC data under the 'Amadeus TravelCheck' brand, accessible from within the Amadeus GDS terminal and via the Amadeus Travel APIs. |
| Sabre | `Sabre Timatic` | same | Sabre delivers TIMATIC content directly within the Sabre Red 360 workspace and via Sabre APIs, enabling agents to query travel document requirements without leaving the booking workflow. |

# Related
- [Advance Passenger Information System](/common/customer/advance-passenger-information-system.md) — related
- [Secure Flight](/common/customer/secure-flight.md) — related
- [PNRGOV](/air/air-ops/pnrgov.md) — related
- [Known Traveler Number](/common/customer/known-traveler-number.md) — related

# Distinctions
- **TIMATIC** vs [Advance Passenger Information System](/common/customer/advance-passenger-information-system.md) — APIS is the government-mandated data transmission from carrier to border agency about specific, named passengers on a specific flight, used for pre-departure border screening; TIMATIC is a private reference database used by carriers and agents at booking/check-in to determine whether a passenger's documents satisfy destination requirements before the journey begins. TIMATIC is predictive and advisory; APIS is transactional and regulatory.
- **TIMATIC** vs [PNRGOV](/air/air-ops/pnrgov.md) — PNRGOV is the standardised message that transmits a passenger's PNR reservation data to government border agencies for security screening after booking; TIMATIC is the pre-travel reference tool that tells carriers and agents which documents a passenger needs to be allowed on board. TIMATIC is consulted before ticketing or boarding; PNRGOV is sent after booking, to governments.

# Citations
[1] [IATA (International Air Transport Association) — TIMATIC — Travel Document and Visa Requirements Database](https://www.iata.org/en/services/tools/timatic/)
[2] [IATA — IATA Travel Centre (AutoCheck API) — Documentation](https://developer.iata.org/en/developer-tools/timatic)
