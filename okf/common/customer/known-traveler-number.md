---
type: Code
title: Known Traveler Number
description: 'A Known Traveler Number (KTN) is a unique identifier issued by the U.S. Transportation Security Administration (TSA) or U.S. Customs and Border Protection (CBP) to travelers approved for a trusted traveler program such as TSA PreCheck, Global Entry, NEXUS, or SENTRI. When entered into an airline reservation, it allows the traveler''s eligibility for expedited screening to be vetted through the TSA Secure Flight program and reflected on the boarding pass.'
tags:
  - customer
  - active
  - TSA (U.S. Department of Homeland Security)
timestamp: '2026-06-17T00:00:00Z'
id: known-traveler-number
vertical: common
category: customer
conceptType: code
status: active
abbreviation: KTN
term_ko: 'KTN(Known Traveler Number, 신뢰여행자번호)'
definition_ko: 'KTN(Known Traveler Number)은 TSA PreCheck, Global Entry, NEXUS, SENTRI 같은 신뢰여행자 프로그램에 승인된 여행자에게 미국 교통보안청(TSA) 또는 세관국경보호청(CBP)이 부여하는 고유 식별번호다. 항공 예약에 입력하면 해당 여행자의 신속 보안검색 자격이 Secure Flight 절차를 통해 확인되어 탑승권에 PreCheck 표시로 반영된다.'
longDef: 'The KTN is stored in the passenger''s reservation and passed by the carrier to TSA via the Secure Flight watch-list matching process. For travelers approved through the TSA PreCheck Application Program, the KTN is typically 9 or 10 characters and may combine letters and digits (often prefixed TT, TE, or AC depending on the enrollment provider). For Global Entry, NEXUS, and SENTRI members, the KTN is the CBP-assigned PASS ID, a nine-digit number. The KTN is distinct from a Redress Number: the KTN grants access to expedited screening for low-risk vetted travelers, whereas a Redress Number resolves recurring misidentification problems. In a GDS/PNR context the KTN is generally transmitted to the operating carrier via the Secure Flight SSR (DOCO/Secure Flight passenger data fields) rather than stored only as a free-text remark.'
longDef_ko: 'KTN은 승객 예약(PNR)에 저장되어 Secure Flight 대조 절차를 통해 항공사가 TSA로 전송한다. TSA PreCheck Application Program 승인자의 KTN은 보통 9~10자리이며 문자와 숫자가 섞일 수 있고(등록 사업자에 따라 TT, TE, AC 등으로 시작), Global Entry/NEXUS/SENTRI 회원의 KTN은 CBP가 부여한 9자리 PASS ID다. KTN은 Redress Number와 다르다. KTN은 저위험으로 사전 심사된 여행자에게 신속 검색 자격을 주는 번호이고, Redress Number는 반복되는 오인 식별 문제를 해결하기 위한 번호다. GDS/PNR에서 KTN은 보통 단순 메모가 아니라 Secure Flight 승객정보(DOCO 등) 항목을 통해 운항 항공사로 전달된다.'
standardBody: TSA (U.S. Department of Homeland Security)
aliases:
  - KTN
  - Trusted Traveler ID
  - PASS ID
providerTerms:
  - provider: TSA
    term: TSA PreCheck
    context: Expedited screening program whose approval results in issuance of a KTN.
    context_ko: 승인 시 KTN이 발급되는 신속 보안검색 프로그램.
    relationship: related
  - provider: CBP
    term: PASS ID
    context: 'The nine-digit CBP membership number that serves as the KTN for Global Entry, NEXUS and SENTRI members.'
    context_ko: Global Entry/NEXUS/SENTRI 회원에게 KTN 역할을 하는 9자리 CBP 회원번호.
    relationship: same
relationships:
  - type: related
    targetTerm: Secure Flight
  - type: related
    targetTerm: Customer Profile
  - type: related
    targetTerm: PNR
  - type: contrasts
    targetTerm: Redress Number
distinctions:
  - targetTerm: Redress Number
    explanation: 'A KTN grants pre-vetted travelers access to expedited screening, while a Redress Number is issued to travelers who experienced repeated screening difficulties due to misidentification; the two programs are separate and a traveler may hold neither, either, or both.'
    explanation_ko: 'KTN은 사전 심사된 여행자에게 신속 검색 자격을 주는 번호이고, Redress Number는 오인 식별로 반복적인 검색 문제를 겪은 여행자에게 발급되는 번호다. 두 프로그램은 서로 별개이며 여행자는 둘 다, 하나만, 또는 둘 다 없을 수 있다.'
  - targetTerm: Secure Flight
    explanation: Secure Flight is the TSA watch-list matching process; the KTN is the data element a traveler supplies so that Secure Flight can confirm trusted-traveler eligibility.
    explanation_ko: 'Secure Flight는 TSA의 감시목록 대조 절차이고, KTN은 그 절차가 신뢰여행자 자격을 확인할 수 있도록 여행자가 제공하는 데이터 요소다.'
sources:
  - org: TSA
    name: What is a Known Traveler Number (KTN)? - Frequently Asked Questions
    version: ''
    section: ''
    url: 'https://www.tsa.gov/travel/frequently-asked-questions/what-known-traveler-number-ktn'
    tier: regulator-guidance
  - org: TSA
    name: TSA PreCheck FAQ
    version: ''
    section: ''
    url: 'https://www.tsa.gov/precheck/faq'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="36" height="24" rx="3"/><circle cx="16" cy="22" r="4"/><path d="M10 32c1-3 4-5 6-5s5 2 6 5"/><path d="M28 20h10"/><path d="M28 26h8"/><path d="M20 16l2 2 3-4"/></svg>
---

> A Known Traveler Number (KTN) is a unique identifier issued by the U.S. Transportation Security Administration (TSA) or U.S. Customs and Border Protection (CBP) to travelers approved for a trusted traveler program such as TSA PreCheck, Global Entry, NEXUS, or SENTRI. When entered into an airline reservation, it allows the traveler's eligibility for expedited screening to be vetted through the TSA Secure Flight program and reflected on the boarding pass.

The KTN is stored in the passenger's reservation and passed by the carrier to TSA via the Secure Flight watch-list matching process. For travelers approved through the TSA PreCheck Application Program, the KTN is typically 9 or 10 characters and may combine letters and digits (often prefixed TT, TE, or AC depending on the enrollment provider). For Global Entry, NEXUS, and SENTRI members, the KTN is the CBP-assigned PASS ID, a nine-digit number. The KTN is distinct from a Redress Number: the KTN grants access to expedited screening for low-risk vetted travelers, whereas a Redress Number resolves recurring misidentification problems. In a GDS/PNR context the KTN is generally transmitted to the operating carrier via the Secure Flight SSR (DOCO/Secure Flight passenger data fields) rather than stored only as a free-text remark.

**한국어 / Korean** — **KTN(Known Traveler Number, 신뢰여행자번호)** — KTN(Known Traveler Number)은 TSA PreCheck, Global Entry, NEXUS, SENTRI 같은 신뢰여행자 프로그램에 승인된 여행자에게 미국 교통보안청(TSA) 또는 세관국경보호청(CBP)이 부여하는 고유 식별번호다. 항공 예약에 입력하면 해당 여행자의 신속 보안검색 자격이 Secure Flight 절차를 통해 확인되어 탑승권에 PreCheck 표시로 반영된다.

KTN은 승객 예약(PNR)에 저장되어 Secure Flight 대조 절차를 통해 항공사가 TSA로 전송한다. TSA PreCheck Application Program 승인자의 KTN은 보통 9~10자리이며 문자와 숫자가 섞일 수 있고(등록 사업자에 따라 TT, TE, AC 등으로 시작), Global Entry/NEXUS/SENTRI 회원의 KTN은 CBP가 부여한 9자리 PASS ID다. KTN은 Redress Number와 다르다. KTN은 저위험으로 사전 심사된 여행자에게 신속 검색 자격을 주는 번호이고, Redress Number는 반복되는 오인 식별 문제를 해결하기 위한 번호다. GDS/PNR에서 KTN은 보통 단순 메모가 아니라 Secure Flight 승객정보(DOCO 등) 항목을 통해 운항 항공사로 전달된다.

**Aliases:** `KTN`, `Trusted Traveler ID`, `PASS ID`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| TSA | `TSA PreCheck` | related | Expedited screening program whose approval results in issuance of a KTN. |
| CBP | `PASS ID` | same | The nine-digit CBP membership number that serves as the KTN for Global Entry, NEXUS and SENTRI members. |

# Related
- [Secure Flight](/common/customer/secure-flight.md) — related
- [Customer Profile](/common/customer/customer-profile.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [Redress Number](/common/customer/redress-number.md) — contrasts

# Distinctions
- **Known Traveler Number** vs [Redress Number](/common/customer/redress-number.md) — A KTN grants pre-vetted travelers access to expedited screening, while a Redress Number is issued to travelers who experienced repeated screening difficulties due to misidentification; the two programs are separate and a traveler may hold neither, either, or both.
- **Known Traveler Number** vs [Secure Flight](/common/customer/secure-flight.md) — Secure Flight is the TSA watch-list matching process; the KTN is the data element a traveler supplies so that Secure Flight can confirm trusted-traveler eligibility.

# Citations
[1] [TSA — What is a Known Traveler Number (KTN)? - Frequently Asked Questions](https://www.tsa.gov/travel/frequently-asked-questions/what-known-traveler-number-ktn)
[2] [TSA — TSA PreCheck FAQ](https://www.tsa.gov/precheck/faq)
