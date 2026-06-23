---
type: Business Term
title: Customer Profile
description: 'A stored, reusable record of a traveler''s identity data, contact details, documents, preferences and loyalty memberships maintained in a reservation, CRM or property management system. Profiles speed up booking and check-in by pre-populating data into a PNR or hotel reservation.'
tags:
  - customer
  - active
timestamp: '2026-06-15T00:00:00Z'
id: customer-profile
vertical: common
category: customer
conceptType: business-term
status: active
term_ko: 고객 프로필
definition_ko: '예약, CRM 또는 PMS에 보관되는, 여행자의 신원 정보, 연락처, 서류, 선호도, 로열티 회원 정보를 담은 저장형 재사용 레코드이다. 프로필은 데이터를 PNR이나 호텔 예약에 미리 채워 넣어 예약과 체크인 속도를 높여 준다.'
longDef: 'Customer Profiles aggregate attributes such as name, date of birth, contact information, travel document and APIS/Secure Flight data, seat and meal preferences, frequent flyer numbers, payment instruments and corporate/agency associations. In airline systems they may be personal or corporate profiles; in hotels the equivalent is a guest profile in the PMS/CRS. Profiles are subject to data-protection obligations such as GDPR Consent and are increasingly linked to a verified digital identity (IATA One ID).'
longDef_ko: 'Customer Profile은 이름, 생년월일, 연락처, 여행 서류 및 APIS/Secure Flight 데이터, 좌석 및 기내식 선호도, 상용 고객 번호, 결제 수단, 법인/대행사 연계 정보 같은 속성을 통합한다. 항공사 시스템에서는 개인 프로필 또는 법인 프로필일 수 있으며, 호텔에서는 PMS/CRS의 게스트 프로필이 이에 해당한다. 프로필은 GDPR Consent 같은 데이터 보호 의무의 적용을 받으며, 점차 검증된 디지털 신원(IATA One ID)에 연결되고 있다.'
aliases:
  - Traveler Profile
  - Passenger Profile
  - Guest Profile
  - Profile
providerTerms:
  - provider: Oracle OPERA (PMS)
    term: Profile (Guest Profile)
    context: 'OPERA stores guest/company/agent Profiles holding identity, address, preferences, memberships and stay history, shareable across properties in a chain'
    context_ko: OPERA는 신원·주소·선호·멤버십·투숙이력을 담은 게스트/회사/에이전트 프로파일을 저장하며 체인 내 호텔 간 공유한다
    relationship: same
  - provider: Sabre Hospitality (SynXis)
    term: Guest Profile
    context: SynXis Profile Management APIs synchronise Guest/Booker/Company profiles from a CRM into the platform for use in reservations and delivery to PMS/CRM
    context_ko: SynXis 프로파일 관리 API는 CRM의 Guest/Booker/Company 프로파일을 플랫폼에 동기화해 예약 및 PMS/CRM 전달에 사용한다
    relationship: same
  - provider: Amadeus
    term: Profile (PNR Profile)
    context: 'Amadeus Profiles store reusable traveller/company data (names, FF, payment, preferences) that can be applied when building a PNR'
    context_ko: Amadeus 프로파일은 PNR 작성 시 적용할 수 있는 재사용 가능한 여행자/회사 데이터(성명·FF·결제·선호)를 저장한다
    relationship: same
relationships:
  - type: contrasts
    targetTerm: PNR
  - type: related
    targetTerm: Frequent Flyer Number
  - type: related
    targetTerm: GDPR Consent
  - type: related
    targetTerm: IATA One ID
  - type: related
    targetTerm: PMS
distinctions:
  - targetTerm: PNR
    explanation: A Customer Profile is persistent traveler master data; a PNR is a single trip's reservation record that may be populated from a profile.
    explanation_ko: 'Customer Profile은 지속적으로 유지되는 여행자 마스터 데이터이고, PNR은 프로필로부터 채워질 수 있는 단일 여정의 예약 레코드이다.'
  - targetTerm: IATA One ID
    explanation: 'A Customer Profile is stored, self-asserted account data; One ID is a verified biometric digital identity used for authentication.'
    explanation_ko: 'Customer Profile은 본인이 입력해 저장한 계정 데이터이고, One ID는 인증에 사용되는 검증된 생체 디지털 신원이다.'
  - targetTerm: CCPA/CPRA Consumer Privacy Rights
    explanation: 'A Customer Profile is the stored traveler data record; CCPA/CPRA is the legal framework that governs how that data may be collected, sold/shared, and limited.'
    explanation_ko: 'Customer Profile은 저장된 여행자 데이터 레코드이고, CCPA/CPRA는 그 데이터를 어떻게 수집·판매/공유·제한할 수 있는지를 규율하는 법적 체계이다.'
  - targetTerm: Corporate Profile
    explanation: 'A Customer Profile holds an individual traveler''s personal data, identifiers, and preferences, whereas a Corporate Profile holds organization-level data such as negotiated fares, billing, and policy; in managed travel a traveler profile is typically nested under and inherits from the corporate profile.'
    explanation_ko: 'Customer Profile은 개별 여행자의 개인 데이터·식별자·선호를 담고, Corporate Profile은 협상 운임·청구·정책 같은 조직 단위 데이터를 담는다. 관리형 출장에서는 여행자 프로필이 보통 기업 프로필 하위에 속해 이를 상속한다.'
  - targetTerm: Customer Data Platform
    explanation: A Customer Profile is the stored record of one traveler's data and preferences in a single system; a CDP is the platform that unifies many such records and source systems into one persistent profile and activates it to other channels.
    explanation_ko: 'Customer Profile은 한 시스템 내에 저장된 한 여행자의 데이터·선호도 기록이고, CDP는 그런 다수의 기록과 원천 시스템을 하나의 지속적 프로필로 통합하여 다른 채널로 활성화하는 플랫폼이다.'
  - targetTerm: Single Customer View
    explanation: A Customer Profile is one system's stored view of a traveler and may be duplicated or partial; the Single Customer View is the de-duplicated golden record consolidating all such profiles into one authoritative identity.
    explanation_ko: 'Customer Profile은 한 시스템이 저장한 여행자 뷰로 중복되거나 일부일 수 있고, Single Customer View는 그런 모든 프로필을 하나의 권위 있는 신원으로 통합한 중복 제거된 골든 레코드이다.'
sources:
  - name: OpenTravel Specification (Profile messages)
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="19" r="6"/><path d="M13 38c0-6 5-10 11-10s11 4 11 10"/></svg>
---

> A stored, reusable record of a traveler's identity data, contact details, documents, preferences and loyalty memberships maintained in a reservation, CRM or property management system. Profiles speed up booking and check-in by pre-populating data into a PNR or hotel reservation.

Customer Profiles aggregate attributes such as name, date of birth, contact information, travel document and APIS/Secure Flight data, seat and meal preferences, frequent flyer numbers, payment instruments and corporate/agency associations. In airline systems they may be personal or corporate profiles; in hotels the equivalent is a guest profile in the PMS/CRS. Profiles are subject to data-protection obligations such as GDPR Consent and are increasingly linked to a verified digital identity (IATA One ID).

**한국어 / Korean** — **고객 프로필** — 예약, CRM 또는 PMS에 보관되는, 여행자의 신원 정보, 연락처, 서류, 선호도, 로열티 회원 정보를 담은 저장형 재사용 레코드이다. 프로필은 데이터를 PNR이나 호텔 예약에 미리 채워 넣어 예약과 체크인 속도를 높여 준다.

Customer Profile은 이름, 생년월일, 연락처, 여행 서류 및 APIS/Secure Flight 데이터, 좌석 및 기내식 선호도, 상용 고객 번호, 결제 수단, 법인/대행사 연계 정보 같은 속성을 통합한다. 항공사 시스템에서는 개인 프로필 또는 법인 프로필일 수 있으며, 호텔에서는 PMS/CRS의 게스트 프로필이 이에 해당한다. 프로필은 GDPR Consent 같은 데이터 보호 의무의 적용을 받으며, 점차 검증된 디지털 신원(IATA One ID)에 연결되고 있다.

**Aliases:** `Traveler Profile`, `Passenger Profile`, `Guest Profile`, `Profile`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Oracle OPERA (PMS) | `Profile (Guest Profile)` | same | OPERA stores guest/company/agent Profiles holding identity, address, preferences, memberships and stay history, shareable across properties in a chain |
| Sabre Hospitality (SynXis) | `Guest Profile` | same | SynXis Profile Management APIs synchronise Guest/Booker/Company profiles from a CRM into the platform for use in reservations and delivery to PMS/CRM |
| Amadeus | `Profile (PNR Profile)` | same | Amadeus Profiles store reusable traveller/company data (names, FF, payment, preferences) that can be applied when building a PNR |

# Related
- [PNR](/air/air-ops/pnr.md) — contrasts
- [Frequent Flyer Number](/common/customer/frequent-flyer-number.md) — related
- [GDPR Consent](/common/customer/gdpr-consent.md) — related
- [IATA One ID](/common/customer/iata-one-id.md) — related
- [PMS](/lodging/hotel-dist/pms.md) — related

# Distinctions
- **Customer Profile** vs [PNR](/air/air-ops/pnr.md) — A Customer Profile is persistent traveler master data; a PNR is a single trip's reservation record that may be populated from a profile.
- **Customer Profile** vs [IATA One ID](/common/customer/iata-one-id.md) — A Customer Profile is stored, self-asserted account data; One ID is a verified biometric digital identity used for authentication.
- **Customer Profile** vs [CCPA/CPRA Consumer Privacy Rights](/common/customer/ccpa-cpra-consumer-privacy-rights.md) — A Customer Profile is the stored traveler data record; CCPA/CPRA is the legal framework that governs how that data may be collected, sold/shared, and limited.
- **Customer Profile** vs [Corporate Profile](/common/customer/corporate-profile.md) — A Customer Profile holds an individual traveler's personal data, identifiers, and preferences, whereas a Corporate Profile holds organization-level data such as negotiated fares, billing, and policy; in managed travel a traveler profile is typically nested under and inherits from the corporate profile.
- **Customer Profile** vs [Customer Data Platform](/common/customer/customer-data-platform.md) — A Customer Profile is the stored record of one traveler's data and preferences in a single system; a CDP is the platform that unifies many such records and source systems into one persistent profile and activates it to other channels.
- **Customer Profile** vs [Single Customer View](/common/customer/single-customer-view.md) — A Customer Profile is one system's stored view of a traveler and may be duplicated or partial; the Single Customer View is the de-duplicated golden record consolidating all such profiles into one authoritative identity.

# Citations
[1] [OpenTravel Alliance — OpenTravel Specification (Profile messages)](https://opentravel.org/download-specs/)
