---
type: Business Term
title: House Use
description: 'A room status code indicating that a hotel room is occupied for internal operational purposes — staff accommodation, model/show rooms, storage staging, or executive use — without generating paid room revenue. House use nights are tracked separately in the property management system and excluded from occupied-room counts used in RevPAR and ADR calculations.'
tags:
  - hotel-rate
  - active
timestamp: '2026-08-21T00:00:00Z'
id: house-use
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
abbreviation: HU
term_ko: 하우스 유즈(House Use)
definition_ko: '호텔 객실이 내부 운영 목적(직원 숙소, 모델·쇼룸, 창고 스테이징, 임원 사용)으로 점유되어 유상 객실 수익을 발생시키지 않는 객실 상태 코드. 하우스 유즈 박수(泊數)는 PMS에서 별도로 추적되며, RevPAR·ADR 산정에 사용되는 점유 객실 수에서 제외된다.'
longDef: 'House use is one of the non-revenue room status categories alongside out-of-order (OOO) and complimentary. In most property management systems (e.g., Oracle OPERA, Mews), a house use room is flagged with a specific reservation type (often code "HU") so it is picked up in the night audit and reported separately from paid and complimentary business. USALI (Uniform System of Accounts for the Lodging Industry) defines house use rooms as a distinct category to ensure accurate occupancy statistics; they appear in the rooms-available denominator but are excluded from rooms-sold numerators used in occupancy rate, ADR, and RevPAR metrics.'
longDef_ko: 'House use는 out-of-order(OOO), 무료 숙박(complimentary)과 함께 비수익 객실 상태 범주 중 하나다. 대부분의 PMS(예: Oracle OPERA, Mews)에서 하우스 유즈 객실은 특정 예약 유형 코드(보통 "HU")로 플래그되어 야간 감사(night audit)에 집계되고 유상·무료 실적과 별도로 보고된다. USALI(숙박업 통일 회계 시스템)는 정확한 점유율 통계를 위해 하우스 유즈 객실을 별도 범주로 정의하며, 이는 가용 객실 분모에는 포함되지만 점유율·ADR·RevPAR 산정의 판매 객실 분자에서는 제외된다.'
standardBody: ''
aliases:
  - House Use Room
  - HU Room
  - Internal Use Room
relationships:
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: ADR
  - type: contrasts
    targetTerm: Complimentary Room
distinctions:
  - targetTerm: Complimentary Room
    explanation: 'A complimentary room is given to a guest free of charge for service recovery, loyalty recognition, or promotional purposes and is counted as occupied in hotel statistics; a house use room is reserved for internal hotel operational use and is excluded from occupied-room counts used in RevPAR.'
    explanation_ko: '컴플리멘터리 객실은 서비스 회복·로열티 인정·프로모션 목적으로 투숙객에게 무료로 제공되며 호텔 통계에서 점유 객실로 계산되는 반면, 하우스 유즈 객실은 호텔 내부 운영 목적으로 예약되며 RevPAR에 사용되는 점유 객실 수에서 제외된다.'
sources:
  - name: Uniform System of Accounts for the Lodging Industry (USALI)
    org: American Hotel & Lodging Association (AHLA)
    version: 11th Revised Edition
    section: Rooms Revenue and Statistics
    url: 'https://www.ahla.com/usali'
    tier: association
  - name: Oracle OPERA Cloud Property Management System Documentation
    org: Oracle Hospitality
    version: ''
    section: Room Status Codes
    url: 'https://docs.oracle.com/en/industries/hospitality/opera-cloud/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="32" height="28" rx="2"/><path d="M20 40V28h8v12"/><line x1="8" y1="20" x2="40" y2="20"/><text x="24" y="17" text-anchor="middle" font-size="6" fill="currentColor" stroke="none">HU</text><path d="M22 6 L24 4 L26 6"/><line x1="24" y1="4" x2="24" y2="12"/></svg>
---

> A room status code indicating that a hotel room is occupied for internal operational purposes — staff accommodation, model/show rooms, storage staging, or executive use — without generating paid room revenue. House use nights are tracked separately in the property management system and excluded from occupied-room counts used in RevPAR and ADR calculations.

House use is one of the non-revenue room status categories alongside out-of-order (OOO) and complimentary. In most property management systems (e.g., Oracle OPERA, Mews), a house use room is flagged with a specific reservation type (often code "HU") so it is picked up in the night audit and reported separately from paid and complimentary business. USALI (Uniform System of Accounts for the Lodging Industry) defines house use rooms as a distinct category to ensure accurate occupancy statistics; they appear in the rooms-available denominator but are excluded from rooms-sold numerators used in occupancy rate, ADR, and RevPAR metrics.

**한국어 / Korean** — **하우스 유즈(House Use)** — 호텔 객실이 내부 운영 목적(직원 숙소, 모델·쇼룸, 창고 스테이징, 임원 사용)으로 점유되어 유상 객실 수익을 발생시키지 않는 객실 상태 코드. 하우스 유즈 박수는 PMS에서 별도로 추적되며, RevPAR·ADR 산정에서 제외된다.

House use는 out-of-order(OOO), 컴플리멘터리와 함께 비수익 객실 상태 범주 중 하나다. 대부분의 PMS에서 하우스 유즈 객실은 특정 예약 유형 코드(보통 "HU")로 플래그되어 야간 감사에서 집계되고 별도로 보고된다.

**Aliases:** `House Use Room`, `HU Room`, `Internal Use Room`

# Related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [Complimentary Room](/lodging/hotel-rate/complimentary-room.md) — contrasts

# Distinctions
- **House Use** vs [Complimentary Room](/lodging/hotel-rate/complimentary-room.md) — A complimentary room is given to a guest free of charge for service recovery, loyalty recognition, or promotional purposes and is counted as occupied in hotel statistics; a house use room is reserved for internal hotel operational use and is excluded from occupied-room counts used in RevPAR.

# Citations
[1] [American Hotel & Lodging Association (AHLA) — Uniform System of Accounts for the Lodging Industry (USALI) — 11th Revised Edition](https://www.ahla.com/usali)
[2] [Oracle Hospitality — Oracle OPERA Cloud Property Management System Documentation](https://docs.oracle.com/en/industries/hospitality/opera-cloud/)
