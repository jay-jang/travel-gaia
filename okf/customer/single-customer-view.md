---
type: Business Term
title: Single Customer View
description: 'A single, deduplicated, authoritative record per customer — the ''golden record'' — assembled by matching and merging data about the same individual across every system a travel brand operates. It is the foundational deliverable of identity resolution and the unifying output a Customer Data Platform is built to produce.'
tags:
  - customer
  - active
timestamp: '2026-06-17T00:00:00Z'
id: single-customer-view
category: customer
conceptType: business-term
status: active
abbreviation: SCV
term_ko: 단일 고객 뷰 (SCV)
definition_ko: '여행 브랜드가 운영하는 모든 시스템에 흩어진 동일 인물의 데이터를 매칭·병합하여 만든, 고객당 단일하고 중복이 제거된 권위 있는 레코드, 즉 ''골든 레코드(golden record)''이다. 신원 해소(identity resolution)의 핵심 산출물이며, Customer Data Platform이 생성하도록 만들어진 통합 결과물이다.'
longDef: 'Building an SCV requires identity resolution: deterministic and/or probabilistic matching that links fragments such as bookings, loyalty accounts, web sessions, and contact details to one person despite varying email addresses, name spellings, or device identifiers. The resulting golden record reconciles conflicting attributes into a trusted set of values and survives across the brand''s channels. An SCV is broader than a per-system Customer Profile because it spans all sources, and it is the data artifact that personalization, RFM Segmentation, and loyalty recognition all read from.'
longDef_ko: 'SCV 구축에는 신원 해소가 필요하다. 이메일 주소, 이름 표기, 기기 식별자가 달라도 예약, 로열티 계정, 웹 세션, 연락처 같은 조각들을 한 사람으로 연결하는 결정론적(deterministic) 및/또는 확률론적(probabilistic) 매칭이다. 그 결과 만들어진 골든 레코드는 상충하는 속성들을 신뢰할 수 있는 값으로 조정하며 브랜드의 모든 채널에 걸쳐 유지된다. SCV는 모든 출처를 아우르므로 시스템별 Customer Profile보다 넓으며, 개인화·RFM Segmentation·로열티 인식이 모두 참조하는 데이터 산출물이다.'
aliases:
  - SCV
  - Single Customer View (SCV)
  - Golden Record
  - 360-Degree Customer View
relationships:
  - type: related
    targetTerm: Customer Data Platform
  - type: related
    targetTerm: Customer Profile
  - type: related
    targetTerm: RFM Segmentation
distinctions:
  - targetTerm: Customer Profile
    explanation: A Customer Profile is one system's stored view of a traveler and may be duplicated or partial; the Single Customer View is the de-duplicated golden record consolidating all such profiles into one authoritative identity.
    explanation_ko: 'Customer Profile은 한 시스템이 저장한 여행자 뷰로 중복되거나 일부일 수 있고, Single Customer View는 그런 모든 프로필을 하나의 권위 있는 신원으로 통합한 중복 제거된 골든 레코드이다.'
  - targetTerm: Customer Data Platform
    explanation: The SCV is the unified record (the 'what'); the CDP is the software that creates and activates it (the 'how').
    explanation_ko: 'SCV는 통합된 레코드(무엇)이고, CDP는 그것을 생성·활성화하는 소프트웨어(어떻게)이다.'
sources:
  - name: 'Single Customer View (SCV): What It Is & How to Build One'
    org: Industry vendor guidance
    version: ''
    section: ''
    url: ''
  - name: What is Identity Resolution?
    org: Industry vendor guidance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="15" cy="15" r="6"/><circle cx="33" cy="15" r="6"/><path d="M15 21c-4 0-8 3-8 8M33 21c4 0 8 3 8 8"/><circle cx="24" cy="34" r="8"/><path d="M20.5 34l2.5 2.5 4.5-5"/></svg>
---

> A single, deduplicated, authoritative record per customer — the 'golden record' — assembled by matching and merging data about the same individual across every system a travel brand operates. It is the foundational deliverable of identity resolution and the unifying output a Customer Data Platform is built to produce.

Building an SCV requires identity resolution: deterministic and/or probabilistic matching that links fragments such as bookings, loyalty accounts, web sessions, and contact details to one person despite varying email addresses, name spellings, or device identifiers. The resulting golden record reconciles conflicting attributes into a trusted set of values and survives across the brand's channels. An SCV is broader than a per-system Customer Profile because it spans all sources, and it is the data artifact that personalization, RFM Segmentation, and loyalty recognition all read from.

**한국어 / Korean** — **단일 고객 뷰 (SCV)** — 여행 브랜드가 운영하는 모든 시스템에 흩어진 동일 인물의 데이터를 매칭·병합하여 만든, 고객당 단일하고 중복이 제거된 권위 있는 레코드, 즉 '골든 레코드(golden record)'이다. 신원 해소(identity resolution)의 핵심 산출물이며, Customer Data Platform이 생성하도록 만들어진 통합 결과물이다.

SCV 구축에는 신원 해소가 필요하다. 이메일 주소, 이름 표기, 기기 식별자가 달라도 예약, 로열티 계정, 웹 세션, 연락처 같은 조각들을 한 사람으로 연결하는 결정론적(deterministic) 및/또는 확률론적(probabilistic) 매칭이다. 그 결과 만들어진 골든 레코드는 상충하는 속성들을 신뢰할 수 있는 값으로 조정하며 브랜드의 모든 채널에 걸쳐 유지된다. SCV는 모든 출처를 아우르므로 시스템별 Customer Profile보다 넓으며, 개인화·RFM Segmentation·로열티 인식이 모두 참조하는 데이터 산출물이다.

**Aliases:** `SCV`, `Single Customer View (SCV)`, `Golden Record`, `360-Degree Customer View`

# Related
- [Customer Data Platform](/customer/customer-data-platform.md) — related
- [Customer Profile](/customer/customer-profile.md) — related
- [RFM Segmentation](/customer/rfm-segmentation.md) — related

# Distinctions
- **Single Customer View** vs [Customer Profile](/customer/customer-profile.md) — A Customer Profile is one system's stored view of a traveler and may be duplicated or partial; the Single Customer View is the de-duplicated golden record consolidating all such profiles into one authoritative identity.
- **Single Customer View** vs [Customer Data Platform](/customer/customer-data-platform.md) — The SCV is the unified record (the 'what'); the CDP is the software that creates and activates it (the 'how').

# Citations
[1] Industry vendor guidance — Single Customer View (SCV): What It Is & How to Build One
[2] Industry vendor guidance — What is Identity Resolution?
