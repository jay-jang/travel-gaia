---
type: Process
title: Secure Flight
description: 'A US Transportation Security Administration (TSA) program that prescreens passengers on covered flights against government watch lists. Carriers must collect Secure Flight Passenger Data (SFPD) — full name as on government ID, date of birth and gender, plus optional Redress Number or Known Traveler Number — and submit it to TSA before travel.'
tags:
  - customer
  - active
timestamp: '2026-06-15T00:00:00Z'
id: secure-flight
vertical: common
category: customer
conceptType: process
status: active
abbreviation: SFPD
term_ko: Secure Flight (미국 TSA 사전 심사)
definition_ko: '대상 항공편의 승객을 정부 감시 명단과 대조하여 사전 심사하는 미국 교통안전청(TSA)의 프로그램이다. 항공사는 Secure Flight Passenger Data(SFPD), 즉 정부 발급 신분증상의 전체 성명, 생년월일, 성별과 선택 항목인 Redress Number 또는 Known Traveler Number를 수집하여 여행 전 TSA에 제출해야 한다.'
longDef: 'Secure Flight transfers watch-list matching from individual carriers to the TSA to reduce misidentifications and improve security on flights to, from, over or within the United States. SFPD must be provided at or before ticketing; the Known Traveler Number supports TSA PreCheck expedited screening, while a Redress Number (from the DHS TRIP program) helps travelers previously misidentified. The data is carried in reservations via the DOCS/Secure Flight SSR elements. It is a regulatory security program, not a marketing or identity-convenience framework.'
longDef_ko: 'Secure Flight는 미국으로/미국에서/미국 상공을 지나거나 미국 내를 운항하는 항공편의 오인 식별을 줄이고 보안을 강화하기 위해 감시 명단 대조 업무를 개별 항공사에서 TSA로 이관한다. SFPD는 발권 시 또는 그 이전에 제공되어야 하며, Known Traveler Number는 TSA PreCheck 신속 심사를 지원하고, (DHS TRIP 프로그램에서 발급하는) Redress Number는 과거에 잘못 식별되었던 여행자를 돕는다. 해당 데이터는 DOCS/Secure Flight SSR 요소를 통해 예약에 담긴다. 이는 마케팅이나 신원 편의 프레임워크가 아니라 규제상의 보안 프로그램이다.'
aliases:
  - Secure Flight Passenger Data
  - SFPD
  - Secure Flight Program
providerTerms:
  - provider: TSA
    term: SFPD (Secure Flight Passenger Data)
    context: 'TSA names the mandatory data set (full name, DOB, gender, plus KTN/Redress) collected for watch-list matching as Secure Flight Passenger Data'
    context_ko: TSA는 감시명단 대조를 위해 수집하는 필수 데이터셋(성명·생년월일·성별 및 KTN/Redress)을 SFPD라 부른다
    relationship: narrower
  - provider: IATA
    term: SSR DOCS / DOCO
    context: Carriers transmit SFPD to TSA using the existing IATA SSR DOCS (identity) and SSR DOCO (KTN/Redress) PNR elements
    context_ko: 항공사는 기존 IATA SSR DOCS(신원)와 SSR DOCO(KTN/Redress) PNR 요소를 이용해 SFPD를 TSA에 전송한다
    relationship: related
  - provider: Amadeus
    term: SSR ADPI
    context: Amadeus added the SSR ADPI element so airlines can request the passenger details needed when SFPD/APIS data is missing from the booking source
    context_ko: Amadeus는 예약 출처에 SFPD/APIS 데이터가 없을 때 항공사가 필요한 승객정보를 요청하도록 SSR ADPI 요소를 추가했다
    relationship: related
relationships:
  - type: related
    targetTerm: SSR
  - type: related
    targetTerm: Customer Profile
  - type: related
    targetTerm: Name Change
distinctions:
  - targetTerm: IATA One ID
    explanation: Secure Flight is a mandatory US government watch-list prescreening program; One ID is a voluntary industry digital-identity/biometric framework for seamless travel.
    explanation_ko: 'Secure Flight는 의무적인 미국 정부의 감시 명단 사전 심사 프로그램이고, One ID는 매끄러운 여행을 위한 자발적인 업계의 디지털 신원·생체 인식 프레임워크이다.'
  - targetTerm: Name Change
    explanation: 'Secure Flight requires the booked name to match the government ID, which is the common driver of permitted name corrections.'
    explanation_ko: 'Secure Flight는 예약된 이름이 정부 발급 신분증과 일치하도록 요구하며, 이것이 허용되는 이름 정정의 흔한 유발 요인이다.'
  - targetTerm: Advance Passenger Information System
    explanation: APIS is the international WCO/IATA/ICAO advance-passenger-data process used by many states for border and customs control; Secure Flight is the specific US TSA watch-list prescreening program with its own SFPD data set.
    explanation_ko: 'APIS는 여러 국가가 국경·세관 통제에 사용하는 국제 WCO/IATA/ICAO 사전 승객 데이터 절차이고, Secure Flight는 자체 SFPD 데이터 항목을 쓰는 미국 TSA의 감시 명단 사전 심사 프로그램이다.'
  - targetTerm: GDPR Consent
    explanation: 'GDPR Consent is an EU privacy lawful basis for processing personal data; Secure Flight is a US security program that processes data under legal obligation, not consent.'
    explanation_ko: 'GDPR 동의는 개인정보 처리를 위한 EU 프라이버시상의 적법 근거이고, Secure Flight는 동의가 아닌 법적 의무에 따라 데이터를 처리하는 미국의 보안 프로그램이다.'
  - targetTerm: Known Traveler Number
    explanation: Secure Flight is the TSA watch-list matching process; the KTN is the data element a traveler supplies so that Secure Flight can confirm trusted-traveler eligibility.
    explanation_ko: 'Secure Flight는 TSA의 감시목록 대조 절차이고, KTN은 그 절차가 신뢰여행자 자격을 확인할 수 있도록 여행자가 제공하는 데이터 요소다.'
  - targetTerm: PNRGOV
    explanation: 'Secure Flight is the US TSA-specific prescreening program (collecting SFPD); PNRGOV is the generic international standard message for sending the full PNR to any state''s authority that mandates PNR reporting. Secure Flight data is a narrower, watch-list-focused dataset.'
    explanation_ko: 'Secure Flight는 미국 TSA 전용의 사전심사 프로그램(SFPD 수집)이고, PNRGOV는 PNR 보고를 의무화한 어느 국가 당국에든 전체 PNR을 보내는 일반 국제 표준 메시지다. Secure Flight 데이터는 watch-list 중심의 더 좁은 데이터셋이다.'
sources:
  - name: 49 CFR Part 1560 — Secure Flight Program
    org: TSA
    version: ''
    section: ''
    url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-XII/subchapter-C/part-1560'
    tier: regulation
  - name: Secure Flight Program (Federal Register)
    org: TSA
    version: ''
    section: ''
    url: 'https://www.federalregister.gov/documents/2008/10/28/E8-25432/secure-flight-program'
    tier: regulation
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 5l15 5v10c0 11-7 18-15 23-8-5-15-12-15-23V10z"/><path d="M24 14l9 3v6c0 6.5-4 11-9 14-5-3-9-7.5-9-14v-6z" stroke-width="0"/><path d="M28 19l-9 9-4.5-4.5" stroke-width="2.5"/></svg>
---

> A US Transportation Security Administration (TSA) program that prescreens passengers on covered flights against government watch lists. Carriers must collect Secure Flight Passenger Data (SFPD) — full name as on government ID, date of birth and gender, plus optional Redress Number or Known Traveler Number — and submit it to TSA before travel.

Secure Flight transfers watch-list matching from individual carriers to the TSA to reduce misidentifications and improve security on flights to, from, over or within the United States. SFPD must be provided at or before ticketing; the Known Traveler Number supports TSA PreCheck expedited screening, while a Redress Number (from the DHS TRIP program) helps travelers previously misidentified. The data is carried in reservations via the DOCS/Secure Flight SSR elements. It is a regulatory security program, not a marketing or identity-convenience framework.

**한국어 / Korean** — **Secure Flight (미국 TSA 사전 심사)** — 대상 항공편의 승객을 정부 감시 명단과 대조하여 사전 심사하는 미국 교통안전청(TSA)의 프로그램이다. 항공사는 Secure Flight Passenger Data(SFPD), 즉 정부 발급 신분증상의 전체 성명, 생년월일, 성별과 선택 항목인 Redress Number 또는 Known Traveler Number를 수집하여 여행 전 TSA에 제출해야 한다.

Secure Flight는 미국으로/미국에서/미국 상공을 지나거나 미국 내를 운항하는 항공편의 오인 식별을 줄이고 보안을 강화하기 위해 감시 명단 대조 업무를 개별 항공사에서 TSA로 이관한다. SFPD는 발권 시 또는 그 이전에 제공되어야 하며, Known Traveler Number는 TSA PreCheck 신속 심사를 지원하고, (DHS TRIP 프로그램에서 발급하는) Redress Number는 과거에 잘못 식별되었던 여행자를 돕는다. 해당 데이터는 DOCS/Secure Flight SSR 요소를 통해 예약에 담긴다. 이는 마케팅이나 신원 편의 프레임워크가 아니라 규제상의 보안 프로그램이다.

**Aliases:** `Secure Flight Passenger Data`, `SFPD`, `Secure Flight Program`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| TSA | `SFPD (Secure Flight Passenger Data)` | narrower | TSA names the mandatory data set (full name, DOB, gender, plus KTN/Redress) collected for watch-list matching as Secure Flight Passenger Data |
| IATA | `SSR DOCS / DOCO` | related | Carriers transmit SFPD to TSA using the existing IATA SSR DOCS (identity) and SSR DOCO (KTN/Redress) PNR elements |
| Amadeus | `SSR ADPI` | related | Amadeus added the SSR ADPI element so airlines can request the passenger details needed when SFPD/APIS data is missing from the booking source |

# Related
- [SSR](/air/air-ops/ssr.md) — related
- [Customer Profile](/common/customer/customer-profile.md) — related
- [Name Change](/common/customer/name-change.md) — related

# Distinctions
- **Secure Flight** vs [IATA One ID](/common/customer/iata-one-id.md) — Secure Flight is a mandatory US government watch-list prescreening program; One ID is a voluntary industry digital-identity/biometric framework for seamless travel.
- **Secure Flight** vs [Name Change](/common/customer/name-change.md) — Secure Flight requires the booked name to match the government ID, which is the common driver of permitted name corrections.
- **Secure Flight** vs [Advance Passenger Information System](/common/customer/advance-passenger-information-system.md) — APIS is the international WCO/IATA/ICAO advance-passenger-data process used by many states for border and customs control; Secure Flight is the specific US TSA watch-list prescreening program with its own SFPD data set.
- **Secure Flight** vs [GDPR Consent](/common/customer/gdpr-consent.md) — GDPR Consent is an EU privacy lawful basis for processing personal data; Secure Flight is a US security program that processes data under legal obligation, not consent.
- **Secure Flight** vs [Known Traveler Number](/common/customer/known-traveler-number.md) — Secure Flight is the TSA watch-list matching process; the KTN is the data element a traveler supplies so that Secure Flight can confirm trusted-traveler eligibility.
- **Secure Flight** vs [PNRGOV](/air/air-ops/pnrgov.md) — Secure Flight is the US TSA-specific prescreening program (collecting SFPD); PNRGOV is the generic international standard message for sending the full PNR to any state's authority that mandates PNR reporting. Secure Flight data is a narrower, watch-list-focused dataset.

# Citations
[1] [TSA — 49 CFR Part 1560 — Secure Flight Program](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-XII/subchapter-C/part-1560)
[2] [TSA — Secure Flight Program (Federal Register)](https://www.federalregister.gov/documents/2008/10/28/E8-25432/secure-flight-program)
