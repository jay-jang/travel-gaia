---
type: Business Term
title: Dynamic Packaging
description: 'Dynamic packaging is the real-time assembly of individual travel components (such as flights, accommodation, car rental, and activities) into a single customized package at the moment of booking, presented and sold at one combined price. Prices and availability are drawn live from supplier inventory rather than from pre-built tour products.'
tags:
  - standards
  - active
timestamp: '2026-06-17T00:00:00Z'
id: dynamic-packaging
category: standards
conceptType: business-term
status: active
term_ko: 다이내믹 패키징(동적 여행 묶음)
definition_ko: '다이내믹 패키징(dynamic packaging)은 항공편, 숙박, 렌터카, 액티비티 등 개별 여행 구성요소를 예약 시점에 실시간으로 하나의 맞춤 패키지로 조합하여 하나의 합산 가격으로 제시·판매하는 것이다. 가격과 가용성은 미리 만들어 둔 패키지 상품이 아니라 공급사 재고에서 실시간으로 가져온다.'
longDef: 'A booking engine calls multiple supplier APIs simultaneously, retrieving live component prices and combining them, often into an opaque single price that hides individual fares; this lets sellers discount bundles without disturbing published rates. Dynamic packaging underpins much modern OTA and tour-operator retailing and depends on aggregated, real-time content from GDSs, bedbanks, and direct/NDC connections. Regulatory regimes (e.g. the EU Package Travel Directive) may treat such combinations as packages with associated consumer protections.'
longDef_ko: '예약 엔진은 여러 공급사 API를 동시에 호출하여 실시간 구성요소 가격을 가져와 조합하며, 흔히 개별 운임을 감추는 불투명(opaque) 단일 가격으로 묶는다. 이를 통해 판매자는 공시 요금을 흔들지 않고 묶음 상품을 할인할 수 있다. 다이내믹 패키징은 현대 OTA와 투어 오퍼레이터 리테일링의 상당 부분을 떠받치며, GDS·베드뱅크·직접/NDC 연결에서 오는 통합된 실시간 콘텐츠에 의존한다. 일부 규제(예: EU 패키지여행 지침)는 이러한 조합을 소비자 보호가 따르는 패키지로 취급할 수 있다.'
aliases:
  - Dynamic Package
  - Dynamic Bundling
  - Build-Your-Own-Package
relationships:
  - type: related
    targetTerm: OTA (Online Travel Agency)
  - type: related
    targetTerm: Aggregator
  - type: related
    targetTerm: Bedbank
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Net Rate
distinctions:
  - targetTerm: Offer
    explanation: Dynamic packaging is a retailing technique of bundling multiple suppliers' components at one price; an NDC Offer is a single airline's standardized priced proposal that may itself include a bundle of that airline's products.
    explanation_ko: '다이내믹 패키징은 여러 공급사의 구성요소를 하나의 가격으로 묶는 리테일링 기법이고, NDC 오퍼는 한 항공사의 표준화된 가격 제안으로 그 항공사의 상품 묶음을 포함할 수 있다.'
  - targetTerm: Aggregator
    explanation: An aggregator supplies the consolidated multi-supplier content; dynamic packaging is what a seller does with that content to build and price a combined trip.
    explanation_ko: '애그리게이터는 여러 공급사의 통합 콘텐츠를 공급하고, 다이내믹 패키징은 판매자가 그 콘텐츠로 결합된 여정을 구성하고 가격을 매기는 행위이다.'
sources:
  - org: Industry usage
    name: Dynamic packaging (travel distribution definition)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="22" width="16" height="16" rx="2"/><path d="M16 27h16"/><path d="M24 22v16"/><path d="M9 10l5 6"/><path d="M39 10l-5 6"/><circle cx="7" cy="8" r="2.5"/><circle cx="41" cy="8" r="2.5"/><path d="M24 4v12"/><circle cx="24" cy="4" r="1.5" fill="currentColor"/></svg>
---

> Dynamic packaging is the real-time assembly of individual travel components (such as flights, accommodation, car rental, and activities) into a single customized package at the moment of booking, presented and sold at one combined price. Prices and availability are drawn live from supplier inventory rather than from pre-built tour products.

A booking engine calls multiple supplier APIs simultaneously, retrieving live component prices and combining them, often into an opaque single price that hides individual fares; this lets sellers discount bundles without disturbing published rates. Dynamic packaging underpins much modern OTA and tour-operator retailing and depends on aggregated, real-time content from GDSs, bedbanks, and direct/NDC connections. Regulatory regimes (e.g. the EU Package Travel Directive) may treat such combinations as packages with associated consumer protections.

**한국어 / Korean** — **다이내믹 패키징(동적 여행 묶음)** — 다이내믹 패키징(dynamic packaging)은 항공편, 숙박, 렌터카, 액티비티 등 개별 여행 구성요소를 예약 시점에 실시간으로 하나의 맞춤 패키지로 조합하여 하나의 합산 가격으로 제시·판매하는 것이다. 가격과 가용성은 미리 만들어 둔 패키지 상품이 아니라 공급사 재고에서 실시간으로 가져온다.

예약 엔진은 여러 공급사 API를 동시에 호출하여 실시간 구성요소 가격을 가져와 조합하며, 흔히 개별 운임을 감추는 불투명(opaque) 단일 가격으로 묶는다. 이를 통해 판매자는 공시 요금을 흔들지 않고 묶음 상품을 할인할 수 있다. 다이내믹 패키징은 현대 OTA와 투어 오퍼레이터 리테일링의 상당 부분을 떠받치며, GDS·베드뱅크·직접/NDC 연결에서 오는 통합된 실시간 콘텐츠에 의존한다. 일부 규제(예: EU 패키지여행 지침)는 이러한 조합을 소비자 보호가 따르는 패키지로 취급할 수 있다.

**Aliases:** `Dynamic Package`, `Dynamic Bundling`, `Build-Your-Own-Package`

# Related
- [OTA (Online Travel Agency)](/standards/ota-online-travel-agency.md) — related
- [Aggregator](/standards/aggregator.md) — related
- [Bedbank](/hotel-dist/bedbank.md) — related
- [Availability](/air-shop/availability.md) — related
- [Net Rate](/hotel-dist/net-rate.md) — related

# Distinctions
- **Dynamic Packaging** vs [Offer](/standards/offer.md) — Dynamic packaging is a retailing technique of bundling multiple suppliers' components at one price; an NDC Offer is a single airline's standardized priced proposal that may itself include a bundle of that airline's products.
- **Dynamic Packaging** vs [Aggregator](/standards/aggregator.md) — An aggregator supplies the consolidated multi-supplier content; dynamic packaging is what a seller does with that content to build and price a combined trip.

# Citations
[1] Industry usage — Dynamic packaging (travel distribution definition)
