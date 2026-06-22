---
type: Standard
title: Digital Travel Credential
description: 'An ICAO specification for a cryptographically secured digital representation of a traveler''s passport, allowing the credential to be derived from and bound to an electronic Machine Readable Travel Document. ICAO defines three types reflecting how the digital credential relates to the physical passport and where it is stored.'
tags:
  - customer
  - active
  - ICAO
timestamp: '2026-06-17T00:00:00Z'
id: digital-travel-credential
vertical: common
category: customer
conceptType: standard
status: active
abbreviation: DTC
term_ko: 디지털 여행 자격증명 (DTC)
definition_ko: '여행자 여권을 암호학적으로 보호된 디지털 형태로 표현하기 위한 ICAO 규격으로, 전자 기계판독여행문서(eMRTD)로부터 자격증명을 도출하고 그에 결속(bind)할 수 있게 한다. ICAO는 디지털 자격증명이 실물 여권과 어떻게 관계되고 어디에 저장되는지에 따라 세 가지 유형(Type 1~3)을 정의한다.'
longDef: 'The DTC is intended to provide a trustworthy digital companion to, and eventually a substitution for, presenting a physical passport, underpinning the identity and biometric layer of seamless travel. Per ICAO''s High-Level Guidance, every DTC comprises a Virtual Component (DTC-VC, the cryptographically signed digital representation of the passport data) and a Physical Component (DTC-PC, a carrier and authenticator for the DTC-VC). ICAO defines three non-hierarchical types: Type 1 (DTC-1), where the DTC-VC is derived from an existing eMRTD chip and that eMRTD itself serves as the DTC-PC, so the physical passport must accompany travel; Type 2 (DTC-2), where the issuing authority creates a DTC-PC on a chosen form factor (e.g., a contactless smart card or mobile phone) and links it to the DTC-VC, while the holder still carries an underlying eMRTD as back-up; and Type 3 (DTC-3), an authority-issued credential created without any underlying eMRTD book, considered by some States as an emergency travel document. A DTC is an authoritative government-grade identity document specification, distinct from IATA One ID, which is an airline-industry framework for the airport journey that can consume verified identity.'
longDef_ko: 'DTC는 실물 여권 제시를 대체(궁극적으로) 또는 보완하는 신뢰할 수 있는 디지털 수단을 제공하여, 매끄러운 여행의 신원·생체 계층을 뒷받침하기 위한 것이다. ICAO의 고위급 지침에 따르면 모든 DTC는 가상 구성요소(DTC-VC, 여권 데이터를 암호학적으로 서명한 디지털 표현)와 물리 구성요소(DTC-PC, DTC-VC의 운반체이자 인증 수단)로 이루어진다. ICAO는 위계가 없는 세 가지 유형을 정의한다. Type 1(DTC-1)은 DTC-VC가 기존 eMRTD 칩에서 도출되고 그 eMRTD 자체가 DTC-PC 역할을 하여 실물 여권을 휴대해야 하는 형태, Type 2(DTC-2)는 발급 기관이 선택한 매체(예: 비접촉 스마트카드 또는 휴대폰)에 DTC-PC를 생성하여 DTC-VC와 결속하되 소지자가 예비용으로 eMRTD를 함께 소지하는 형태, Type 3(DTC-3)은 eMRTD 책자 없이 기관이 발급하는 자격증명으로 일부 국가가 긴급여행증명서 용도로 검토 중인 형태이다. DTC는 정부급의 권위 있는 신원 문서 규격으로, 검증된 신원을 신뢰 기반으로 활용할 수 있는 공항 여정용 항공업계 프레임워크인 IATA One ID와 구별된다.'
standardBody: ICAO
aliases:
  - DTC
  - Digital Travel Credential (DTC)
relationships:
  - type: related
    targetTerm: IATA One ID
  - type: related
    targetTerm: Known Traveler Number
  - type: related
    targetTerm: Secure Flight
distinctions:
  - targetTerm: IATA One ID
    explanation: A DTC is ICAO's government-grade digital passport credential and the trusted identity source; IATA One ID is an airline-industry framework for a document-free airport journey that can rely on such a credential.
    explanation_ko: 'DTC는 ICAO의 정부급 디지털 여권 자격증명이자 신뢰할 수 있는 신원 원천이고, IATA One ID는 그러한 자격증명을 신뢰 기반으로 활용할 수 있는, 서류 없는 공항 여정을 위한 항공업계 프레임워크이다.'
sources:
  - name: 'High-Level Guidance: Explaining the ICAO Digital Travel Credential (Version 1.0, June 2024)'
    org: ICAO
    version: '1.0'
    section: 3.2 ICAO DTC Types
    url: 'https://www.icao.int/sites/default/files/TRIP/Publications/High-Level-Guidance-explaining-ICAO-DTC.pdf'
  - name: Digital Travel Credentials (DTC)
    org: ICAO
    version: ''
    section: ''
    url: 'https://www.icao.int/sites/default/files/TRIP/Publications/Digital-Travel-Credentials-DTC.pdf'
  - name: 'Digital travel credentials: Unlocking the future of borderless identity'
    org: ICAO Uniting Aviation
    version: ''
    section: ''
    url: 'https://unitingaviation.com/news/security-facilitation/digital-travel-credentials-unlocking-the-future-of-borderless-identity/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="11" y="6" width="26" height="36" rx="3"/><circle cx="24" cy="18" r="5"/><path d="M17 31c0-4 3-6 7-6s7 2 7 6"/><path d="M30 9l2 2 3-3"/></svg>
---

> An ICAO specification for a cryptographically secured digital representation of a traveler's passport, allowing the credential to be derived from and bound to an electronic Machine Readable Travel Document. ICAO defines three types reflecting how the digital credential relates to the physical passport and where it is stored.

The DTC is intended to provide a trustworthy digital companion to, and eventually a substitution for, presenting a physical passport, underpinning the identity and biometric layer of seamless travel. Per ICAO's High-Level Guidance, every DTC comprises a Virtual Component (DTC-VC, the cryptographically signed digital representation of the passport data) and a Physical Component (DTC-PC, a carrier and authenticator for the DTC-VC). ICAO defines three non-hierarchical types: Type 1 (DTC-1), where the DTC-VC is derived from an existing eMRTD chip and that eMRTD itself serves as the DTC-PC, so the physical passport must accompany travel; Type 2 (DTC-2), where the issuing authority creates a DTC-PC on a chosen form factor (e.g., a contactless smart card or mobile phone) and links it to the DTC-VC, while the holder still carries an underlying eMRTD as back-up; and Type 3 (DTC-3), an authority-issued credential created without any underlying eMRTD book, considered by some States as an emergency travel document. A DTC is an authoritative government-grade identity document specification, distinct from IATA One ID, which is an airline-industry framework for the airport journey that can consume verified identity.

**한국어 / Korean** — **디지털 여행 자격증명 (DTC)** — 여행자 여권을 암호학적으로 보호된 디지털 형태로 표현하기 위한 ICAO 규격으로, 전자 기계판독여행문서(eMRTD)로부터 자격증명을 도출하고 그에 결속(bind)할 수 있게 한다. ICAO는 디지털 자격증명이 실물 여권과 어떻게 관계되고 어디에 저장되는지에 따라 세 가지 유형(Type 1~3)을 정의한다.

DTC는 실물 여권 제시를 대체(궁극적으로) 또는 보완하는 신뢰할 수 있는 디지털 수단을 제공하여, 매끄러운 여행의 신원·생체 계층을 뒷받침하기 위한 것이다. ICAO의 고위급 지침에 따르면 모든 DTC는 가상 구성요소(DTC-VC, 여권 데이터를 암호학적으로 서명한 디지털 표현)와 물리 구성요소(DTC-PC, DTC-VC의 운반체이자 인증 수단)로 이루어진다. ICAO는 위계가 없는 세 가지 유형을 정의한다. Type 1(DTC-1)은 DTC-VC가 기존 eMRTD 칩에서 도출되고 그 eMRTD 자체가 DTC-PC 역할을 하여 실물 여권을 휴대해야 하는 형태, Type 2(DTC-2)는 발급 기관이 선택한 매체(예: 비접촉 스마트카드 또는 휴대폰)에 DTC-PC를 생성하여 DTC-VC와 결속하되 소지자가 예비용으로 eMRTD를 함께 소지하는 형태, Type 3(DTC-3)은 eMRTD 책자 없이 기관이 발급하는 자격증명으로 일부 국가가 긴급여행증명서 용도로 검토 중인 형태이다. DTC는 정부급의 권위 있는 신원 문서 규격으로, 검증된 신원을 신뢰 기반으로 활용할 수 있는 공항 여정용 항공업계 프레임워크인 IATA One ID와 구별된다.

**Aliases:** `DTC`, `Digital Travel Credential (DTC)`

# Related
- [IATA One ID](/common/customer/iata-one-id.md) — related
- [Known Traveler Number](/common/customer/known-traveler-number.md) — related
- [Secure Flight](/common/customer/secure-flight.md) — related

# Distinctions
- **Digital Travel Credential** vs [IATA One ID](/common/customer/iata-one-id.md) — A DTC is ICAO's government-grade digital passport credential and the trusted identity source; IATA One ID is an airline-industry framework for a document-free airport journey that can rely on such a credential.

# Citations
[1] [ICAO — High-Level Guidance: Explaining the ICAO Digital Travel Credential (Version 1.0, June 2024) — 1.0 — 3.2 ICAO DTC Types](https://www.icao.int/sites/default/files/TRIP/Publications/High-Level-Guidance-explaining-ICAO-DTC.pdf)
[2] [ICAO — Digital Travel Credentials (DTC)](https://www.icao.int/sites/default/files/TRIP/Publications/Digital-Travel-Credentials-DTC.pdf)
[3] [ICAO Uniting Aviation — Digital travel credentials: Unlocking the future of borderless identity](https://unitingaviation.com/news/security-facilitation/digital-travel-credentials-unlocking-the-future-of-borderless-identity/)
