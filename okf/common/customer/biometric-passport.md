---
type: Standard Term
title: Biometric Passport
description: 'A Biometric Passport (also called an e-Passport or MRTD chip passport) is a traditional paper passport booklet with an embedded contactless RFID chip that stores the holder''s biometric data — a digitised facial image and optionally fingerprints and/or iris scans — along with a digitally signed copy of the data page, all conforming to ICAO Doc 9303 Machine Readable Travel Documents. The chip enables fast, automated identity verification at border control and is the prerequisite for automated border control (ABC) gates and the full implementation of IATA One ID.'
tags:
  - customer
  - active
  - ICAO
timestamp: '2026-07-22T00:00:00Z'
id: biometric-passport
vertical: common
category: customer
conceptType: standard-term
status: active
term_ko: '생체인식 여권(전자여권, e-Passport)'
definition_ko: '생체인식 여권(전자여권, e-Passport 또는 MRTD 칩 여권)은 소지자의 생체 데이터(디지털화된 얼굴 이미지, 선택적으로 지문 및/또는 홍채 스캔)와 데이터 페이지의 디지털 서명 사본이 저장된 비접촉식 RFID 칩이 내장된 전통적인 종이 여권 소책자로, ICAO Doc 9303 기계 판독 여행 문서(MRTD)를 준수한다. 칩은 국경 심사에서 빠른 자동 신원 확인을 가능하게 하며, 자동화된 국경 통제(ABC) 게이트와 IATA One ID의 완전한 구현을 위한 전제 조건이다.'
longDef: 'ICAO Doc 9303 Part 1 (Machine Readable Passports) defines the mandatory content of the contactless chip (the LDS, Logical Data Structure) including Data Group 1 (MRZ data), Data Group 2 (facial image), and optional Data Groups 3–15 for fingerprints, iris, and other data. The chip uses the ISO/IEC 14443 contactless interface at 13.56 MHz and stores a passive authentication certificate (document security object) signed by the issuing country''s Document Signer Certificate, which is in turn signed by the Country Signing CA (CSCA). This Public Key Infrastructure (PKI) chain allows border inspectors and automated gates to verify that the chip data has not been tampered with. As of 2025, more than 150 countries issue ICAO-compliant biometric passports, and the ICAO PKD (Public Key Directory) allows states to share their CSCA public keys for cross-border chip verification. For airlines, the APIS (Advance Passenger Information) data includes the machine-readable zone (MRZ) data extracted from the passport at check-in. The Biometric Passport underpins modern facilitation concepts: eVisa and ETIAS both link the electronic travel authorisation to the passport number and MRZ data on the chip. IATA''s One ID initiative envisions the passenger journey without documents at each touchpoint — this frictionless flow depends on the biometric credential stored in the passport chip or, eventually, a Digital Travel Credential derived from it. National implementations and names vary: the UK calls it the "biometric passport" (introduced 2006), the US calls it the "e-Passport" or "electronic passport" (introduced 2007), Australia''s chip passport is similarly termed, and the EU uses "elektronischer Reisepass" / "passeport biométrique" in national languages.'
longDef_ko: 'ICAO Doc 9303 제1부(기계 판독 여권)는 비접촉식 칩의 필수 콘텐츠인 LDS(Logical Data Structure)를 정의하며, 데이터 그룹 1(MRZ 데이터), 데이터 그룹 2(얼굴 이미지), 지문·홍채·기타 데이터를 위한 선택적 데이터 그룹 3~15가 포함된다. 칩은 13.56 MHz의 ISO/IEC 14443 비접촉식 인터페이스를 사용하며, 발급 국가의 문서 서명 인증서로 서명된 패시브 인증 인증서(문서 보안 객체)를 저장한다. 이 공개키 인프라(PKI) 체계를 통해 국경 검사관과 자동화 게이트는 칩 데이터의 위·변조 여부를 검증할 수 있다. 2025년 기준 150개 이상의 국가가 ICAO 규정을 준수하는 생체인식 여권을 발급하며, ICAO PKD(공개키 디렉터리)를 통해 각국은 국경 간 칩 검증을 위한 CSCA 공개키를 공유한다. 항공사의 경우 APIS(사전 승객 정보) 데이터에는 체크인 시 여권에서 추출한 MRZ 데이터가 포함된다. 생체인식 여권은 현대 출입국 편의 제도의 기반이 되며, eVisa와 ETIAS 모두 전자 여행 허가를 여권 번호 및 칩의 MRZ 데이터와 연결한다. IATA One ID 이니셔티브는 각 접점에서 서류 없이 여정을 이어가는 승객 여정을 구상하는데, 이 마찰 없는 흐름은 여권 칩에 저장된 생체 자격증명, 나아가 이에서 파생된 DTC(디지털 여행 자격증명)에 의존한다.'
standardBody: ICAO
aliases:
  - e-Passport
  - Electronic Passport
  - MRTD Chip Passport
  - Chipped Passport
  - Biometric Travel Document
relationships:
  - type: related
    targetTerm: eVisa
  - type: related
    targetTerm: ETIAS
  - type: related
    targetTerm: Digital Travel Credential
  - type: related
    targetTerm: Advance Passenger Information System
  - type: related
    targetTerm: IATA One ID
  - type: related
    targetTerm: TIMATIC
distinctions:
  - targetTerm: Digital Travel Credential
    explanation: 'A Digital Travel Credential (DTC) is an ICAO-defined next-generation standard enabling a traveler''s identity and travel-eligibility data to reside on a mobile device rather than only in the physical passport chip — effectively a phone-based travel document; the Biometric Passport is the current physical passport booklet with an embedded chip, which in most DTC models serves as the trusted root from which the DTC is derived and initially issued.'
    explanation_ko: 'DTC(디지털 여행 자격증명)는 ICAO가 정의한 차세대 표준으로, 여행자의 신원 및 여행 자격 데이터가 물리적 여권 칩뿐 아니라 모바일 기기에 저장될 수 있게 하는, 사실상 스마트폰 기반 여행 문서이고, 생체인식 여권은 대부분의 DTC 모델에서 DTC가 파생되고 최초 발급되는 신뢰 루트(trusted root) 역할을 하는 내장 칩이 있는 현재의 물리적 여권 소책자다.'
  - targetTerm: eVisa
    explanation: 'An eVisa is a government-issued digital travel authorisation linked electronically to the traveler''s passport number; the Biometric Passport is the physical travel document that carries the machine-readable identity and biometric data to which the eVisa is anchored and against which border systems verify eligibility.'
    explanation_ko: 'eVisa는 여행자의 여권 번호에 전자적으로 연결된 정부 발급 디지털 여행 허가이고, 생체인식 여권은 eVisa가 연결되고 국경 시스템이 자격 요건을 검증하는 기계 판독 가능한 신원 및 생체 데이터를 담은 물리적 여행 문서이다.'
  - targetTerm: IATA One ID
    explanation: 'IATA One ID is a programme and standard for building a seamless, digital, document-free passenger journey across all touchpoints by linking biometric identifiers and confirmed travel bookings; the Biometric Passport is a foundational data source within One ID — the facial biometric stored on the chip is the same biometric used for real-time matching at each gate in a One ID-enabled airport.'
    explanation_ko: 'IATA One ID는 생체 식별자와 확정된 여행 예약을 연결해 모든 접점에서 매끄럽고 디지털화된 서류 없는 승객 여정을 구축하기 위한 프로그램 및 표준이고, 생체인식 여권은 One ID 내 핵심 데이터 원천으로, 칩에 저장된 얼굴 생체 정보는 One ID 가능 공항의 각 게이트에서 실시간 매칭에 사용되는 동일한 생체 정보다.'
sources:
  - name: 'Doc 9303 — Machine Readable Travel Documents, Part 1: Introduction (7th edition, 2015)'
    org: ICAO
    version: '7th edition, 2015'
    section: 'Part 1 — Introduction and General Specifications'
    url: 'https://www.icao.int/publications/Documents/9303_p1_cons_en.pdf'
    tier: standard-body
  - name: 'Doc 9303 — Machine Readable Travel Documents, Part 9: Deployment of Biometric Identification and Electronic Storage of Data in eMRTDs'
    org: ICAO
    version: '7th edition, 2015'
    section: 'Part 9'
    url: 'https://www.icao.int/publications/Documents/9303_p9_cons_en.pdf'
    tier: standard-body
  - name: Electronic Passport (e-Passport) — Traveler Information
    org: U.S. Department of State
    version: ''
    section: ''
    url: 'https://travel.state.gov/content/travel/en/passports/need-passport/electronic-passport.html'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="6" width="30" height="36" rx="3"/><rect x="14" y="11" width="20" height="14" rx="1"/><circle cx="24" cy="18" r="4"/><line x1="14" y1="31" x2="34" y2="31"/><line x1="14" y1="36" x2="26" y2="36"/><path d="M31 32 Q34 32 34 35 Q34 38 31 38" stroke-width="1.5"/><path d="M29 32 L29 38" stroke-width="1.5"/></svg>
---

> A Biometric Passport (also called an e-Passport or MRTD chip passport) is a traditional paper passport booklet with an embedded contactless RFID chip that stores the holder's biometric data — a digitised facial image and optionally fingerprints and/or iris scans — along with a digitally signed copy of the data page, all conforming to ICAO Doc 9303 Machine Readable Travel Documents. The chip enables fast, automated identity verification at border control and is the prerequisite for automated border control (ABC) gates and the full implementation of IATA One ID.

ICAO Doc 9303 Part 1 (Machine Readable Passports) defines the mandatory content of the contactless chip (the LDS, Logical Data Structure) including Data Group 1 (MRZ data), Data Group 2 (facial image), and optional Data Groups 3–15 for fingerprints, iris, and other data. The chip uses the ISO/IEC 14443 contactless interface at 13.56 MHz and stores a passive authentication certificate (document security object) signed by the issuing country's Document Signer Certificate, which is in turn signed by the Country Signing CA (CSCA). This Public Key Infrastructure (PKI) chain allows border inspectors and automated gates to verify that the chip data has not been tampered with. As of 2025, more than 150 countries issue ICAO-compliant biometric passports, and the ICAO PKD (Public Key Directory) allows states to share their CSCA public keys for cross-border chip verification. For airlines, the APIS (Advance Passenger Information) data includes the machine-readable zone (MRZ) data extracted from the passport at check-in. The Biometric Passport underpins modern facilitation concepts: eVisa and ETIAS both link the electronic travel authorisation to the passport number and MRZ data on the chip. IATA's One ID initiative envisions the passenger journey without documents at each touchpoint — this frictionless flow depends on the biometric credential stored in the passport chip or, eventually, a Digital Travel Credential derived from it.

**한국어 / Korean** — **생체인식 여권(전자여권, e-Passport)** — 생체인식 여권(전자여권, e-Passport 또는 MRTD 칩 여권)은 소지자의 생체 데이터(디지털화된 얼굴 이미지, 선택적으로 지문 및/또는 홍채 스캔)와 데이터 페이지의 디지털 서명 사본이 저장된 비접촉식 RFID 칩이 내장된 전통적인 종이 여권 소책자로, ICAO Doc 9303 기계 판독 여행 문서(MRTD)를 준수한다. 칩은 국경 심사에서 빠른 자동 신원 확인을 가능하게 하며, 자동화된 국경 통제(ABC) 게이트와 IATA One ID의 완전한 구현을 위한 전제 조건이다.

ICAO Doc 9303 제1부는 비접촉식 칩의 필수 콘텐츠인 LDS를 정의하며, 데이터 그룹 1(MRZ 데이터), 데이터 그룹 2(얼굴 이미지), 지문·홍채·기타 데이터용 선택 데이터 그룹 3~15가 포함된다. 2025년 기준 150개 이상의 국가가 ICAO 규정을 준수하는 생체인식 여권을 발급한다. 생체인식 여권은 eVisa, ETIAS, IATA One ID, DTC(디지털 여행 자격증명) 등 현대 출입국 편의 제도의 기반이 된다.

**Aliases:** `e-Passport`, `Electronic Passport`, `MRTD Chip Passport`, `Chipped Passport`, `Biometric Travel Document`

# Related
- [eVisa](/common/customer/e-visa.md) — related
- [ETIAS](/common/customer/etias.md) — related
- [Digital Travel Credential](/common/customer/digital-travel-credential.md) — related
- [Advance Passenger Information System](/common/customer/advance-passenger-information-system.md) — related
- [IATA One ID](/common/customer/iata-one-id.md) — related
- [TIMATIC](/common/customer/timatic.md) — related

# Distinctions
- **Biometric Passport** vs [Digital Travel Credential](/common/customer/digital-travel-credential.md) — A Digital Travel Credential (DTC) is an ICAO-defined next-generation standard enabling a traveler's identity and travel-eligibility data to reside on a mobile device rather than only in the physical passport chip — effectively a phone-based travel document; the Biometric Passport is the current physical passport booklet with an embedded chip, which in most DTC models serves as the trusted root from which the DTC is derived and initially issued.
- **Biometric Passport** vs [eVisa](/common/customer/e-visa.md) — An eVisa is a government-issued digital travel authorisation linked electronically to the traveler's passport number; the Biometric Passport is the physical travel document that carries the machine-readable identity and biometric data to which the eVisa is anchored and against which border systems verify eligibility.
- **Biometric Passport** vs [IATA One ID](/common/customer/iata-one-id.md) — IATA One ID is a programme and standard for building a seamless, digital, document-free passenger journey across all touchpoints by linking biometric identifiers and confirmed travel bookings; the Biometric Passport is a foundational data source within One ID — the facial biometric stored on the chip is the same biometric used for real-time matching at each gate in a One ID-enabled airport.

# Citations
[1] [ICAO — Doc 9303 — Machine Readable Travel Documents, Part 1: Introduction (7th edition, 2015) — 7th edition, 2015 — Part 1 — Introduction and General Specifications](https://www.icao.int/publications/Documents/9303_p1_cons_en.pdf)
[2] [ICAO — Doc 9303 — Machine Readable Travel Documents, Part 9: Deployment of Biometric Identification and Electronic Storage of Data in eMRTDs — 7th edition, 2015 — Part 9](https://www.icao.int/publications/Documents/9303_p9_cons_en.pdf)
[3] [U.S. Department of State — Electronic Passport (e-Passport) — Traveler Information](https://travel.state.gov/content/travel/en/passports/need-passport/electronic-passport.html)
