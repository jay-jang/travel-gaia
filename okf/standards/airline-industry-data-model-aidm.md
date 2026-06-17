---
type: Standard
title: Airline Industry Data Model (AIDM)
description: 'The Airline Industry Data Model is IATA''s single shared repository of industry-agreed vocabulary, data definitions, and their relationships, together with related business requirements. Message-development projects draw on this common model so that interoperable messaging standards such as NDC/EDIST, ONE Order, and PADIS messages are generated faster and with greater semantic consistency.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: airline-industry-data-model-aidm
category: standards
conceptType: standard
status: active
abbreviation: AIDM
term_ko: 항공산업 데이터 모델(AIDM)
definition_ko: 'AIDM은 산업이 합의한 어휘, 데이터 정의, 그 상호 관계와 관련 비즈니스 요구사항을 담은 IATA의 단일 공유 저장소이다. 메시지 개발 프로젝트는 이 공통 모델을 활용하여 NDC/EDIST, ONE Order, PADIS 메시지 같은 상호운용 가능한 메시징 표준을 더 빠르고 의미적으로 일관되게 생성한다.'
longDef: 'First released in early 2016, the AIDM is intended to become a single point of access for structured airline-domain information, letting each project reuse models already developed by other standards groups rather than redefining concepts. NDC versions from 18.x onward were reorganized to align with the AIDM, making it the underlying blueprint from which the offer-and-order schema family is derived. It is maintained under IATA''s Passenger Standards Conference governance.'
longDef_ko: '2016년 초에 처음 공개된 AIDM은 항공 도메인의 구조화된 정보에 대한 단일 접근 지점이 되는 것을 목표로 하며, 각 프로젝트가 개념을 새로 정의하는 대신 다른 표준 그룹이 이미 개발한 모델을 재사용할 수 있게 한다. NDC 18.x 이후 버전은 AIDM에 맞추어 재구성되어, AIDM은 offer-and-order 스키마 계열이 도출되는 기반 청사진이 되었다. IATA 여객표준회의(Passenger Standards Conference) 거버넌스 아래 유지된다.'
standardBody: IATA
aliases:
  - AIDM
  - IATA Airline Industry Data Model
relationships:
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: ONE Order
  - type: related
    targetTerm: Enhanced and Simplified Distribution (EDIST)
  - type: related
    targetTerm: Passenger and Airport Data Interchange Standards (PADIS)
distinctions:
  - targetTerm: NDC
    explanation: AIDM is the shared underlying data model/repository of agreed concepts; NDC is one messaging standard generated from and aligned to that model.
    explanation_ko: 'AIDM은 합의된 개념을 담은 공유 기반 데이터 모델/저장소이고, NDC는 그 모델로부터 생성되어 정렬된 하나의 메시징 표준이다.'
  - targetTerm: Enhanced and Simplified Distribution (EDIST)
    explanation: AIDM defines the vocabulary and relationships; EDIST is the concrete XML message schema family derived from the AIDM concepts.
    explanation_ko: 'AIDM은 어휘와 관계를 정의하고, EDIST는 그 AIDM 개념으로부터 도출된 구체적인 XML 메시지 스키마 계열이다.'
sources:
  - org: IATA
    name: Airline Industry Data Model (AIDM)
    version: ''
    section: ''
    url: ''
  - org: IATA
    name: AIDM Implementation Guide / About the AIDM Repository
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="24" cy="12" rx="14" ry="5"/><path d="M10 12v24c0 2.8 6.3 5 14 5s14-2.2 14-5V12"/><path d="M10 24c0 2.8 6.3 5 14 5s14-2.2 14-5"/><circle cx="24" cy="12" r="1.5" fill="currentColor"/></svg>
---

> The Airline Industry Data Model is IATA's single shared repository of industry-agreed vocabulary, data definitions, and their relationships, together with related business requirements. Message-development projects draw on this common model so that interoperable messaging standards such as NDC/EDIST, ONE Order, and PADIS messages are generated faster and with greater semantic consistency.

First released in early 2016, the AIDM is intended to become a single point of access for structured airline-domain information, letting each project reuse models already developed by other standards groups rather than redefining concepts. NDC versions from 18.x onward were reorganized to align with the AIDM, making it the underlying blueprint from which the offer-and-order schema family is derived. It is maintained under IATA's Passenger Standards Conference governance.

**한국어 / Korean** — **항공산업 데이터 모델(AIDM)** — AIDM은 산업이 합의한 어휘, 데이터 정의, 그 상호 관계와 관련 비즈니스 요구사항을 담은 IATA의 단일 공유 저장소이다. 메시지 개발 프로젝트는 이 공통 모델을 활용하여 NDC/EDIST, ONE Order, PADIS 메시지 같은 상호운용 가능한 메시징 표준을 더 빠르고 의미적으로 일관되게 생성한다.

2016년 초에 처음 공개된 AIDM은 항공 도메인의 구조화된 정보에 대한 단일 접근 지점이 되는 것을 목표로 하며, 각 프로젝트가 개념을 새로 정의하는 대신 다른 표준 그룹이 이미 개발한 모델을 재사용할 수 있게 한다. NDC 18.x 이후 버전은 AIDM에 맞추어 재구성되어, AIDM은 offer-and-order 스키마 계열이 도출되는 기반 청사진이 되었다. IATA 여객표준회의(Passenger Standards Conference) 거버넌스 아래 유지된다.

**Aliases:** `AIDM`, `IATA Airline Industry Data Model`

# Related
- [NDC](/standards/ndc.md) — related
- [ONE Order](/standards/one-order.md) — related
- [Enhanced and Simplified Distribution (EDIST)](/standards/enhanced-and-simplified-distribution-edist.md) — related
- [Passenger and Airport Data Interchange Standards (PADIS)](/standards/passenger-and-airport-data-interchange-standards-padis.md) — related

# Distinctions
- **Airline Industry Data Model (AIDM)** vs [NDC](/standards/ndc.md) — AIDM is the shared underlying data model/repository of agreed concepts; NDC is one messaging standard generated from and aligned to that model.
- **Airline Industry Data Model (AIDM)** vs [Enhanced and Simplified Distribution (EDIST)](/standards/enhanced-and-simplified-distribution-edist.md) — AIDM defines the vocabulary and relationships; EDIST is the concrete XML message schema family derived from the AIDM concepts.

# Citations
[1] IATA — Airline Industry Data Model (AIDM)
[2] IATA — AIDM Implementation Guide / About the AIDM Repository
