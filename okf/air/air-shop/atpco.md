---
type: Provider Term
title: ATPCO
description: 'ATPCO (Airline Tariff Publishing Company) is the airline-owned organization that collects, processes, and distributes the world''s airfares, fare rules, and related pricing data to airlines, GDSs, and other industry systems. Its data underpins automated pricing and fare display across most distribution channels.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: atpco
vertical: air
category: air-shop
conceptType: provider-term
status: active
abbreviation: ATPCO
term_ko: ATPCO (항공 운임 공시 회사)
definition_ko: 'ATPCO(Airline Tariff Publishing Company, 항공 운임 공시 회사)는 전 세계 항공 운임, 운임 규정 및 관련 가격 데이터를 수집·처리·배포하여 항공사, GDS 및 기타 산업 시스템에 제공하는 항공사 소유 기관이다. ATPCO의 데이터는 대부분의 유통 채널에서 자동 운임 산정과 운임 표시의 기반이 된다.'
longDef: 'ATPCO publishes filed fares, fare rules (categories such as advance purchase, minimum stay, penalties), routings, footnotes, and products like Branded Fares and Optional Services that drive ancillary pricing. Carriers file their fares and rules with ATPCO, which standardizes and distributes the data multiple times per day so that pricing engines in GDSs and airline systems can compute consistent fares. ATPCO data is the reference source for fare basis codes, fare components, and rule application in traditional (EDIFACT/GDS) pricing.'
longDef_ko: 'ATPCO는 신고된 운임, 운임 규정(사전 구매, 최소 체류 기간, 위약금 등의 카테고리), 라우팅, 각주(footnote), 그리고 부가 서비스 가격 산정을 구동하는 Branded Fares 및 Optional Services와 같은 상품을 공시한다. 항공사는 운임과 규정을 ATPCO에 신고하고, ATPCO는 이 데이터를 표준화하여 하루에 여러 차례 배포함으로써 GDS와 항공사 시스템의 가격 산정 엔진이 일관된 운임을 산출할 수 있게 한다. ATPCO 데이터는 전통적인(EDIFACT/GDS) 가격 산정에서 운임 기준 코드, 운임 컴포넌트 및 규정 적용의 기준 출처이다.'
standardBody: ATPCO
aliases:
  - Airline Tariff Publishing Company
  - ATPCO Inc.
relationships:
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Fare Family
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: NDC
distinctions:
  - targetTerm: GDS
    explanation: ATPCO supplies and processes fare/rule data; a GDS distributes inventory and bookings and consumes ATPCO data for pricing.
    explanation_ko: 'ATPCO는 운임/규정 데이터를 공급하고 처리하며, GDS는 재고와 예약을 유통하고 가격 산정을 위해 ATPCO 데이터를 소비한다.'
  - targetTerm: Fare Basis Code
    explanation: ATPCO is the organization/data source; the fare basis code is one data element it distributes.
    explanation_ko: 'ATPCO는 기관이자 데이터 출처이고, 운임 기준 코드는 ATPCO가 배포하는 하나의 데이터 요소이다.'
  - targetTerm: Universal Product Attributes (UPA)
    explanation: 'ATPCO is the standards/data company (and Routehappy''s owner); UPA is one specific content standard it distributes, focused on product experience attributes.'
    explanation_ko: 'ATPCO는 표준·데이터 기업(이자 Routehappy의 소유사)이고, UPA는 ATPCO가 배포하는 특정 콘텐츠 표준 중 하나로 상품 경험 속성에 초점을 둔다.'
sources:
  - name: ATPCO corporate and product documentation
    org: ATPCO
    version: ''
    section: ''
    url: 'https://www.atpco.net/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="24" cy="12" rx="13" ry="5"/><path d="M11 12v10c0 2.8 5.8 5 13 5s13-2.2 13-5V12"/><path d="M11 22v10c0 2.8 5.8 5 13 5s13-2.2 13-5V22"/></svg>
---

> ATPCO (Airline Tariff Publishing Company) is the airline-owned organization that collects, processes, and distributes the world's airfares, fare rules, and related pricing data to airlines, GDSs, and other industry systems. Its data underpins automated pricing and fare display across most distribution channels.

ATPCO publishes filed fares, fare rules (categories such as advance purchase, minimum stay, penalties), routings, footnotes, and products like Branded Fares and Optional Services that drive ancillary pricing. Carriers file their fares and rules with ATPCO, which standardizes and distributes the data multiple times per day so that pricing engines in GDSs and airline systems can compute consistent fares. ATPCO data is the reference source for fare basis codes, fare components, and rule application in traditional (EDIFACT/GDS) pricing.

**한국어 / Korean** — **ATPCO (항공 운임 공시 회사)** — ATPCO(Airline Tariff Publishing Company, 항공 운임 공시 회사)는 전 세계 항공 운임, 운임 규정 및 관련 가격 데이터를 수집·처리·배포하여 항공사, GDS 및 기타 산업 시스템에 제공하는 항공사 소유 기관이다. ATPCO의 데이터는 대부분의 유통 채널에서 자동 운임 산정과 운임 표시의 기반이 된다.

ATPCO는 신고된 운임, 운임 규정(사전 구매, 최소 체류 기간, 위약금 등의 카테고리), 라우팅, 각주(footnote), 그리고 부가 서비스 가격 산정을 구동하는 Branded Fares 및 Optional Services와 같은 상품을 공시한다. 항공사는 운임과 규정을 ATPCO에 신고하고, ATPCO는 이 데이터를 표준화하여 하루에 여러 차례 배포함으로써 GDS와 항공사 시스템의 가격 산정 엔진이 일관된 운임을 산출할 수 있게 한다. ATPCO 데이터는 전통적인(EDIFACT/GDS) 가격 산정에서 운임 기준 코드, 운임 컴포넌트 및 규정 적용의 기준 출처이다.

**Aliases:** `Airline Tariff Publishing Company`, `ATPCO Inc.`

# Related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [GDS](/common/standards/gds.md) — related
- [NDC](/common/standards/ndc.md) — related

# Distinctions
- **ATPCO** vs [GDS](/common/standards/gds.md) — ATPCO supplies and processes fare/rule data; a GDS distributes inventory and bookings and consumes ATPCO data for pricing.
- **ATPCO** vs [Fare Basis Code](/air/air-shop/fare-basis-code.md) — ATPCO is the organization/data source; the fare basis code is one data element it distributes.
- **ATPCO** vs [Universal Product Attributes (UPA)](/common/standards/universal-product-attributes-upa.md) — ATPCO is the standards/data company (and Routehappy's owner); UPA is one specific content standard it distributes, focused on product experience attributes.

# Citations
[1] [ATPCO — ATPCO corporate and product documentation](https://www.atpco.net/)
