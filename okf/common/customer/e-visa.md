---
type: Standard Term
title: eVisa
description: 'An eVisa (electronic visa) is a government-issued travel authorization granted online by a destination country, electronically linked to the traveler''s passport, and valid for entry without requiring a physical visa sticker or stamp. The traveler applies through an official government web portal, pays a processing fee, and on approval receives a digital authorization record that border officers verify electronically at arrival. Introduced by several countries including Australia (ETA/eVisitor), India (e-Visa), Kenya, and the UAE.'
tags:
  - customer
  - active
  - ICAO
timestamp: '2026-07-09T00:00:00Z'
id: e-visa
vertical: common
category: customer
conceptType: standard-term
status: active
abbreviation: eVisa
term_ko: 전자비자 (eVisa)
definition_ko: 'eVisa(전자비자)는 목적지 국가의 정부가 온라인으로 발급하는 여행 허가증으로, 여행객의 여권에 전자적으로 연계되며 물리적 비자 스티커나 스탬프 없이도 입국에 유효하다. 여행객은 공식 정부 웹 포털을 통해 신청하고 수수료를 납부하며, 승인 시 도착 시 국경 담당관이 전자적으로 확인할 수 있는 디지털 허가 기록을 받는다. 호주(ETA/eVisitor), 인도(e-Visa), 케냐, UAE 등 여러 국가에서 도입되었다.'
longDef: 'An eVisa differs from a traditional visa in that it is issued and stored digitally rather than printed into the passport. The traveler''s approval is stored in the issuing country''s immigration database and linked by the passport machine-readable zone (MRZ) data; the border officer queries the database at the port of entry. eVisas typically have defined validity windows (single-entry or multi-entry), maximum stay durations, and permitted purposes (tourism, business, transit). Some countries distinguish "eVisa" (a pre-approved visa for multiple nationalities) from "Electronic Travel Authority" (ETA) or "Electronic Travel Authorisation" (ETA), which are automatic pre-clearance systems for qualifying passport holders similar to the US ESTA. Key international standards applicable to eVisas are found in ICAO Doc 9303 (Machine Readable Travel Documents), which governs the passport MRZ and chip data used to link eVisas to physical documents, and the ICAO/IATA guidance on advance traveler information exchange. IATA''s TIMATIC database tracks eVisa eligibility by nationality and passport type, helping airlines and agents determine pre-travel authorization requirements. At check-in, the Advance Passenger Information (APIS) data transmitted by the carrier to destination border authorities typically includes the eVisa reference number where required.'
longDef_ko: 'eVisa는 여권에 인쇄되는 대신 디지털로 발급·보관된다는 점에서 전통적인 비자와 다르다. 여행객의 승인 정보는 발급 국가의 출입국 데이터베이스에 저장되고 여권의 MRZ(기계 판독 구역) 데이터로 연계된다. 국경 담당관은 입국 항구에서 데이터베이스를 조회한다. eVisa는 일반적으로 유효 기간(단일입국 또는 복수입국), 최대 체류 기간, 허가 목적(관광·비즈니스·경유)이 정해져 있다. 일부 국가는 "eVisa"(여러 국적에 대한 사전 승인 비자)와 "전자여행허가(ETA)"(적격 여권 소지자에 대한 자동 사전 통관 시스템, 미국 ESTA 유사)를 구분한다. eVisa에 적용되는 주요 국제 표준은 여권 MRZ와 칩 데이터를 규율하는 ICAO Doc 9303(기계 판독 여행 서류)에 있으며, 이 데이터를 통해 eVisa가 물리적 문서와 연계된다. IATA TIMATIC은 국적과 여권 유형별 eVisa 자격을 추적하여 항공사와 대리점이 사전 여행 허가 요건을 판단하는 데 도움을 준다. 체크인 시 항공사가 목적지 국경 당국에 전송하는 APIS 데이터에는 요구 사항이 있는 경우 eVisa 참조 번호가 포함된다.'
standardBody: ICAO
aliases:
  - Electronic Visa
  - e-Visa
  - Electronic Travel Authority
  - ETA
  - Electronic Travel Authorisation
  - ESTA
providerTerms:
  - provider: Australia (Department of Home Affairs)
    term: Electronic Travel Authority (ETA) / eVisitor
    context: 'Australia operates two no-label visa products: the ETA (subclass 601) for eligible passport holders from some countries, and the eVisitor (subclass 651) for European passport holders — both are electronically linked and require no label in the passport.'
    context_ko: '호주는 두 가지 스티커 없는 비자 상품을 운영한다. ETA(소분류 601)는 일부 국가의 적격 여권 소지자용이고, eVisitor(소분류 651)는 유럽 여권 소지자용으로, 둘 다 전자 연계되며 여권에 스티커가 필요 없다.'
    relationship: narrower
  - provider: India (Ministry of Home Affairs)
    term: e-Visa India
    context: 'India''s e-Visa system covers multiple categories (e-Tourist, e-Business, e-Medical) and is applied for online at least four days before travel; the eVisa record is linked to the passport and checked at immigration counters and airports.'
    context_ko: '인도의 e-Visa 시스템은 여러 카테고리(e-관광·e-비즈니스·e-의료)를 포괄하며, 여행 최소 4일 전에 온라인으로 신청한다. e-Visa 기록은 여권에 연계되어 입국심사대와 공항에서 확인된다.'
    relationship: narrower
  - provider: USA (DHS)
    term: ESTA (Electronic System for Travel Authorization)
    context: 'The US ESTA is an automated pre-travel authorization required for Visa Waiver Program (VWP) nationals traveling to the United States. It is approved electronically and linked to the traveler''s passport, functioning as the US equivalent of an eVisa for eligible nationalities.'
    context_ko: '미국 ESTA는 미국으로 여행하는 비자 면제 프로그램(VWP) 해당 국가 국민에게 요구되는 자동화된 사전 여행 허가다. 전자적으로 승인되어 여행객의 여권에 연계되며, 적격 국적에 대한 eVisa의 미국 동등 시스템 역할을 한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: TIMATIC
  - type: related
    targetTerm: Advance Passenger Information System
  - type: contrasts
    targetTerm: Digital Travel Credential
distinctions:
  - targetTerm: Digital Travel Credential
    explanation: 'A Digital Travel Credential (DTC) is a biometric, cryptographically secured mobile identity credential derived from a physical ICAO Doc 9303 passport chip — it proves who the traveler IS. An eVisa is a government-issued entry authorization that proves the traveler has PERMISSION to enter a specific country. A traveler may present both: their DTC as proof of identity and their eVisa as proof of authorization.'
    explanation_ko: 'Digital Travel Credential(DTC)은 ICAO Doc 9303 여권 칩에서 파생된 생체 인식·암호화 보안 모바일 신원 증명서로, 여행객이 누구인지를 증명한다. eVisa는 정부가 발급한 입국 허가증으로, 여행객이 특정 국가에 입국할 권한이 있음을 증명한다. 여행객은 둘 다 제시할 수 있다: 신원 증명으로 DTC, 입국 허가 증명으로 eVisa.'
  - targetTerm: TIMATIC
    explanation: 'TIMATIC is IATA''s automated database tool that airlines and agents use to check visa and entry requirements (including whether an eVisa is required or available) by nationality and destination. TIMATIC surfaces eVisa information; it does not issue eVisas. An eVisa is the actual authorization document issued by the government after the traveler applies.'
    explanation_ko: 'TIMATIC은 항공사와 대리점이 국적·목적지별로 비자 및 입국 요건(eVisa 필요 여부 또는 가용 여부 포함)을 확인하는 데 사용하는 IATA의 자동화 데이터베이스 도구다. TIMATIC은 eVisa 정보를 제공하지만 eVisa를 발급하지는 않는다. eVisa는 여행객이 신청 후 정부가 발급하는 실제 허가 문서다.'
  - targetTerm: Advance Passenger Information System
    explanation: 'APIS is the carrier-to-government data transmission containing passenger identity and document details (collected at check-in) used for border pre-screening — it may include the eVisa reference number. An eVisa is the pre-issued entry authorization that APIS data is checked against at the border.'
    explanation_ko: 'APIS는 체크인 시 수집한 승객 신원·서류 상세 정보를 담아 항공사가 정부에 전송하는 데이터로 국경 사전 심사에 활용되며, eVisa 참조 번호가 포함될 수 있다. eVisa는 국경에서 APIS 데이터와 대조하는 사전 발급 입국 허가증이다.'
sources:
  - name: Doc 9303 — Machine Readable Travel Documents
    org: ICAO
    version: '8th Edition'
    section: ''
    url: 'https://www.icao.int/publications/pages/publication.aspx?docnum=9303'
    tier: standard-body
  - name: Electronic Travel Authority (ETA) — Subclass 601
    org: Australian Department of Home Affairs
    version: ''
    section: ''
    url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601'
    tier: regulator-guidance
  - name: TIMATIC — Travel Information
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/compliance/timatic/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="12" width="30" height="24" rx="2"/><line x1="9" y1="20" x2="39" y2="20"/><circle cx="20" cy="30" r="4"/><path d="M26 28h7M26 32h5"/><path d="M24 12V9M14 12V9M34 12V9"/></svg>
---

> An eVisa (electronic visa) is a government-issued travel authorization granted online by a destination country, electronically linked to the traveler's passport, and valid for entry without requiring a physical visa sticker or stamp. The traveler applies through an official government web portal, pays a processing fee, and on approval receives a digital authorization record that border officers verify electronically at arrival.

An eVisa differs from a traditional visa in that it is issued and stored digitally rather than printed into the passport. The traveler's approval is stored in the issuing country's immigration database and linked by the passport machine-readable zone (MRZ) data; the border officer queries the database at the port of entry. eVisas typically have defined validity windows (single-entry or multi-entry), maximum stay durations, and permitted purposes (tourism, business, transit). Some countries distinguish "eVisa" (a pre-approved visa for multiple nationalities) from "Electronic Travel Authority" (ETA) or "Electronic Travel Authorisation," which are automatic pre-clearance systems for qualifying passport holders similar to the US ESTA. ICAO Doc 9303 governs the passport MRZ and chip data used to link eVisas to physical documents. IATA's TIMATIC database tracks eVisa eligibility by nationality and passport type, helping airlines and agents determine pre-travel authorization requirements.

**한국어 / Korean** — **전자비자 (eVisa)** — eVisa(전자비자)는 목적지 국가의 정부가 온라인으로 발급하는 여행 허가증으로, 여행객의 여권에 전자적으로 연계되며 물리적 비자 스티커나 스탬프 없이도 입국에 유효하다. 여행객은 공식 정부 웹 포털을 통해 신청하고 수수료를 납부하며, 승인 시 도착 시 국경 담당관이 전자적으로 확인할 수 있는 디지털 허가 기록을 받는다.

eVisa는 여권에 인쇄되는 대신 디지털로 발급·보관된다. 여행객의 승인 정보는 발급 국가의 출입국 데이터베이스에 저장되고 여권 MRZ 데이터로 연계되며, 국경 담당관이 입국 항구에서 데이터베이스를 조회한다. ICAO Doc 9303은 eVisa를 물리적 문서와 연계하는 여권 MRZ와 칩 데이터를 규율한다. IATA TIMATIC은 국적·여권 유형별 eVisa 자격을 추적하여 항공사와 대리점이 사전 여행 허가 요건을 판단하는 데 활용된다.

**Aliases:** `Electronic Visa`, `e-Visa`, `Electronic Travel Authority`, `ETA`, `Electronic Travel Authorisation`, `ESTA`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Australia (Department of Home Affairs) | `Electronic Travel Authority (ETA) / eVisitor` | narrower | Australia operates two no-label visa products: the ETA (subclass 601) for eligible passport holders, and the eVisitor (subclass 651) for European passport holders. |
| India (Ministry of Home Affairs) | `e-Visa India` | narrower | India's e-Visa system covers multiple categories (e-Tourist, e-Business, e-Medical) and is applied for online; the eVisa record is linked to the passport and checked at immigration. |
| USA (DHS) | `ESTA (Electronic System for Travel Authorization)` | same | The US ESTA is an automated pre-travel authorization for Visa Waiver Program nationals — the US equivalent of an eVisa for eligible nationalities. |

# Related
- [TIMATIC](/common/customer/timatic.md) — related
- [Advance Passenger Information System](/common/customer/advance-passenger-information-system.md) — related
- [Digital Travel Credential](/common/customer/digital-travel-credential.md) — contrasts

# Distinctions
- **eVisa** vs [Digital Travel Credential](/common/customer/digital-travel-credential.md) — A Digital Travel Credential (DTC) is a biometric, cryptographically secured mobile identity credential derived from a physical ICAO Doc 9303 passport chip — it proves who the traveler IS. An eVisa is a government-issued entry authorization that proves the traveler has PERMISSION to enter a specific country.
- **eVisa** vs [TIMATIC](/common/customer/timatic.md) — TIMATIC is IATA's automated database tool that airlines and agents use to check visa and entry requirements (including whether an eVisa is required or available). TIMATIC surfaces eVisa information; it does not issue eVisas. An eVisa is the actual authorization document issued by the government after the traveler applies.
- **eVisa** vs [Advance Passenger Information System](/common/customer/advance-passenger-information-system.md) — APIS is the carrier-to-government data transmission containing passenger identity and document details used for border pre-screening — it may include the eVisa reference number. An eVisa is the pre-issued entry authorization that APIS data is checked against at the border.

# Citations
[1] [ICAO — Doc 9303 — Machine Readable Travel Documents — 8th Edition](https://www.icao.int/publications/pages/publication.aspx?docnum=9303)
[2] [Australian Department of Home Affairs — Electronic Travel Authority (ETA) — Subclass 601](https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601)
[3] [IATA — TIMATIC — Travel Information](https://www.iata.org/en/services/compliance/timatic/)
