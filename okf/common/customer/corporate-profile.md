---
type: Business Term
title: Corporate Profile
description: 'A corporate profile is a stored record in a GDS, agency mid-office, or travel management system that holds an organization''s travel data, including negotiated/contracted fares and rates, travel policy rules, billing and cost-center information, and default booking parameters. It governs how bookings for that company''s travelers are priced and processed, and is typically linked to individual traveler profiles within the account.'
tags:
  - customer
  - active
timestamp: '2026-06-17T00:00:00Z'
id: corporate-profile
vertical: common
category: customer
conceptType: business-term
status: active
term_ko: 기업 프로필(Corporate Profile)
definition_ko: 'Corporate Profile(기업 프로필)은 GDS, 여행사 미드오피스, 또는 출장관리 시스템에 저장된 기업의 여행 데이터 기록으로, 협상(계약) 운임·요율, 출장 정책 규칙, 청구·코스트센터 정보, 기본 예약 파라미터 등을 담는다. 해당 기업 여행자의 예약이 어떻게 가격 책정·처리되는지를 규율하며, 보통 그 계정 내 개별 여행자 프로필과 연결된다.'
longDef: 'In GDS systems (e.g., Amadeus, Sabre, Travelport), profiles are commonly organized hierarchically, with a company/corporate profile holding account-level data such as negotiated airline and hotel rates, form-of-payment and billing instructions, approval and policy rules, and reporting attributes, and individual traveler profiles inheriting from it. The corporate profile is the mechanism by which contracted corporate fares and preferred-supplier programs are automatically applied during shopping and booking. It supports managed travel by enforcing policy and capturing data for duty-of-care and expense reporting. It is distinct from an individual Customer Profile, which holds personal traveler data and preferences.'
longDef_ko: 'GDS(예: Amadeus, Sabre, Travelport)에서 프로필은 흔히 계층 구조로 구성되며, 회사/기업 프로필이 협상된 항공·호텔 요율, 결제수단·청구 지시, 승인·정책 규칙, 리포팅 속성 같은 계정 단위 데이터를 보유하고 개별 여행자 프로필이 이를 상속한다. 기업 프로필은 계약된 기업 운임과 우선 공급사 프로그램이 조회·예약 과정에서 자동 적용되게 하는 수단이다. 정책을 강제하고 의무관리(duty of care)·경비 보고용 데이터를 수집하여 관리형 출장(managed travel)을 지원한다. 개인 여행자 데이터와 선호를 담는 개별 Customer Profile과는 구별된다.'
aliases:
  - Company Profile
  - Account Profile
  - Corporate Account Profile
providerTerms:
  - provider: Amadeus
    term: Amadeus Customer Profiles (company / traveller profiles)
    context: Hierarchical profile structure in which a company profile holds account-level data and traveller profiles inherit from it.
    context_ko: 회사 프로필이 계정 단위 데이터를 보유하고 여행자 프로필이 이를 상속하는 계층형 프로필 구조.
    relationship: related
  - provider: Sabre
    term: Sabre Profiles (Travel Journey Record / agency profiles)
    context: Stores corporate account and traveler data including negotiated rates and policy used during booking.
    context_ko: 협상 요율과 정책 등 기업 계정·여행자 데이터를 저장해 예약 시 사용.
    relationship: related
relationships:
  - type: contrasts
    targetTerm: Customer Profile
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Traveler Preference
  - type: related
    targetTerm: Fare Basis Code
distinctions:
  - targetTerm: Customer Profile
    explanation: 'A Customer Profile holds an individual traveler''s personal data, identifiers, and preferences, whereas a Corporate Profile holds organization-level data such as negotiated fares, billing, and policy; in managed travel a traveler profile is typically nested under and inherits from the corporate profile.'
    explanation_ko: 'Customer Profile은 개별 여행자의 개인 데이터·식별자·선호를 담고, Corporate Profile은 협상 운임·청구·정책 같은 조직 단위 데이터를 담는다. 관리형 출장에서는 여행자 프로필이 보통 기업 프로필 하위에 속해 이를 상속한다.'
sources:
  - org: Navan
    name: What Is GDS (Global Distribution System)? Guide
    version: ''
    section: ''
    url: 'https://navan.com/resources/glossary/gds-global-distribution-system'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="20" height="30" rx="2"/><path d="M28 18h12v22H28"/><path d="M13 16h4"/><path d="M13 22h4"/><path d="M13 28h4"/><path d="M33 24h3"/><path d="M33 30h3"/><path d="M8 40h36"/></svg>
---

> A corporate profile is a stored record in a GDS, agency mid-office, or travel management system that holds an organization's travel data, including negotiated/contracted fares and rates, travel policy rules, billing and cost-center information, and default booking parameters. It governs how bookings for that company's travelers are priced and processed, and is typically linked to individual traveler profiles within the account.

In GDS systems (e.g., Amadeus, Sabre, Travelport), profiles are commonly organized hierarchically, with a company/corporate profile holding account-level data such as negotiated airline and hotel rates, form-of-payment and billing instructions, approval and policy rules, and reporting attributes, and individual traveler profiles inheriting from it. The corporate profile is the mechanism by which contracted corporate fares and preferred-supplier programs are automatically applied during shopping and booking. It supports managed travel by enforcing policy and capturing data for duty-of-care and expense reporting. It is distinct from an individual Customer Profile, which holds personal traveler data and preferences.

**한국어 / Korean** — **기업 프로필(Corporate Profile)** — Corporate Profile(기업 프로필)은 GDS, 여행사 미드오피스, 또는 출장관리 시스템에 저장된 기업의 여행 데이터 기록으로, 협상(계약) 운임·요율, 출장 정책 규칙, 청구·코스트센터 정보, 기본 예약 파라미터 등을 담는다. 해당 기업 여행자의 예약이 어떻게 가격 책정·처리되는지를 규율하며, 보통 그 계정 내 개별 여행자 프로필과 연결된다.

GDS(예: Amadeus, Sabre, Travelport)에서 프로필은 흔히 계층 구조로 구성되며, 회사/기업 프로필이 협상된 항공·호텔 요율, 결제수단·청구 지시, 승인·정책 규칙, 리포팅 속성 같은 계정 단위 데이터를 보유하고 개별 여행자 프로필이 이를 상속한다. 기업 프로필은 계약된 기업 운임과 우선 공급사 프로그램이 조회·예약 과정에서 자동 적용되게 하는 수단이다. 정책을 강제하고 의무관리(duty of care)·경비 보고용 데이터를 수집하여 관리형 출장(managed travel)을 지원한다. 개인 여행자 데이터와 선호를 담는 개별 Customer Profile과는 구별된다.

**Aliases:** `Company Profile`, `Account Profile`, `Corporate Account Profile`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Amadeus Customer Profiles (company / traveller profiles)` | related | Hierarchical profile structure in which a company profile holds account-level data and traveller profiles inherit from it. |
| Sabre | `Sabre Profiles (Travel Journey Record / agency profiles)` | related | Stores corporate account and traveler data including negotiated rates and policy used during booking. |

# Related
- [Customer Profile](/common/customer/customer-profile.md) — contrasts
- [GDS](/common/standards/gds.md) — related
- [Traveler Preference](/common/customer/traveler-preference.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related

# Distinctions
- **Corporate Profile** vs [Customer Profile](/common/customer/customer-profile.md) — A Customer Profile holds an individual traveler's personal data, identifiers, and preferences, whereas a Corporate Profile holds organization-level data such as negotiated fares, billing, and policy; in managed travel a traveler profile is typically nested under and inherits from the corporate profile.

# Citations
[1] [Navan — What Is GDS (Global Distribution System)? Guide](https://navan.com/resources/glossary/gds-global-distribution-system)
