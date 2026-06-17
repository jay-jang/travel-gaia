---
type: Business Term
title: Customer Profile
description: 'A stored, reusable record of a traveler''s identity data, contact details, documents, preferences and loyalty memberships maintained in a reservation, CRM or property management system. Profiles speed up booking and check-in by pre-populating data into a PNR or hotel reservation.'
tags:
  - customer
  - active
timestamp: '2026-06-15T00:00:00Z'
id: customer-profile
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
relationships:
  - type: related
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
sources:
  - name: OpenTravel Specification (Profile messages)
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="19" r="6"/><path d="M13 38c0-6 5-10 11-10s11 4 11 10"/></svg>
---

> A stored, reusable record of a traveler's identity data, contact details, documents, preferences and loyalty memberships maintained in a reservation, CRM or property management system. Profiles speed up booking and check-in by pre-populating data into a PNR or hotel reservation.

Customer Profiles aggregate attributes such as name, date of birth, contact information, travel document and APIS/Secure Flight data, seat and meal preferences, frequent flyer numbers, payment instruments and corporate/agency associations. In airline systems they may be personal or corporate profiles; in hotels the equivalent is a guest profile in the PMS/CRS. Profiles are subject to data-protection obligations such as GDPR Consent and are increasingly linked to a verified digital identity (IATA One ID).

**한국어 / Korean** — **고객 프로필** — 예약, CRM 또는 PMS에 보관되는, 여행자의 신원 정보, 연락처, 서류, 선호도, 로열티 회원 정보를 담은 저장형 재사용 레코드이다. 프로필은 데이터를 PNR이나 호텔 예약에 미리 채워 넣어 예약과 체크인 속도를 높여 준다.

Customer Profile은 이름, 생년월일, 연락처, 여행 서류 및 APIS/Secure Flight 데이터, 좌석 및 기내식 선호도, 상용 고객 번호, 결제 수단, 법인/대행사 연계 정보 같은 속성을 통합한다. 항공사 시스템에서는 개인 프로필 또는 법인 프로필일 수 있으며, 호텔에서는 PMS/CRS의 게스트 프로필이 이에 해당한다. 프로필은 GDPR Consent 같은 데이터 보호 의무의 적용을 받으며, 점차 검증된 디지털 신원(IATA One ID)에 연결되고 있다.

**Aliases:** `Traveler Profile`, `Passenger Profile`, `Guest Profile`, `Profile`

# Related
- [PNR](/air-ops/pnr.md) — related
- [Frequent Flyer Number](/customer/frequent-flyer-number.md) — related
- [GDPR Consent](/customer/gdpr-consent.md) — related
- [IATA One ID](/customer/iata-one-id.md) — related
- [PMS](/hotel-dist/pms.md) — related

# Distinctions
- **Customer Profile** vs [PNR](/air-ops/pnr.md) — A Customer Profile is persistent traveler master data; a PNR is a single trip's reservation record that may be populated from a profile.
- **Customer Profile** vs [IATA One ID](/customer/iata-one-id.md) — A Customer Profile is stored, self-asserted account data; One ID is a verified biometric digital identity used for authentication.

# Citations
[1] OpenTravel Alliance — OpenTravel Specification (Profile messages)
