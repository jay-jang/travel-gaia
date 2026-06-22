---
type: Business Term
title: Dynamic Packaging
description: 'Dynamic packaging is the real-time assembly of individual travel components (such as flights, accommodation, car rental, and activities) into a single customized package at the moment of booking, presented and sold at one combined price. Prices and availability are drawn live from supplier inventory rather than from pre-built tour products.'
tags:
  - standards
  - active
timestamp: '2026-06-17T00:00:00Z'
id: dynamic-packaging
vertical: common
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
  - targetTerm: Cruise-Only Fare
    explanation: 'A cruise-only fare is the unbundled core; dynamic packaging combines that fare with flights, transfers, and excursions into a single dynamically priced product.'
    explanation_ko: '크루즈 온리 운임은 분리된 핵심 상품이고, dynamic packaging은 그 운임을 항공편·이동·투어와 결합해 동적으로 가격이 매겨지는 단일 상품으로 만든다.'
  - targetTerm: Dynamic Offer
    explanation: 'Dynamic packaging assembles multi-supplier travel components (flight + hotel + car) into a consumer package; a Dynamic Offer is the airline-side real-time creation of a priced, bundled air offer within IATA''s offer-creation step.'
    explanation_ko: '동적 패키징은 여러 공급사의 여행 구성요소(항공편+호텔+렌터카)를 소비자 패키지로 묶는 것이고, 다이내믹 오퍼는 IATA의 오퍼 생성 단계에서 항공사 측이 가격이 책정된 묶음 항공 오퍼를 실시간으로 만들어 내는 것이다.'
  - targetTerm: Fly-Cruise
    explanation: 'Dynamic packaging assembles independent components (flight + hotel/cruise) priced together at booking by an intermediary; a fly-cruise air program is the cruise line''s own bundling of flights with the cruise whose defining value is a sailing-guarantee — the line re-accommodates the guest through flight disruptions to protect the embarkation, a commitment generic dynamic packaging does not make.'
    explanation_ko: 'Dynamic packaging은 중개자가 예약 시 함께 가격을 매기는 독립 구성요소(항공 + 호텔/크루즈)를 조립하는 것이고, fly-cruise 항공 프로그램은 크루즈 선사가 직접 항공편을 크루즈와 묶는 것으로 그 정의적 가치는 출항 보장이다. 선사가 항공편 차질을 거쳐 승객을 재배정해 승선을 보호하는데, 이는 일반적 dynamic packaging이 하지 않는 약속이다.'
  - targetTerm: Multimodal Transport
    explanation: 'Dynamic packaging bundles travel products (e.g., flight + hotel) into one purchase; multimodal transport specifically chains transport modes into one journey, which packaging may or may not do.'
    explanation_ko: 'dynamic packaging은 여행 상품(예: 항공+호텔)을 하나의 구매로 묶는 것이고, multimodal transport는 구체적으로 교통수단을 하나의 여정으로 연결하는 것으로 패키징이 반드시 이를 포함하지는 않는다.'
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
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related
- [Aggregator](/common/standards/aggregator.md) — related
- [Bedbank](/lodging/hotel-dist/bedbank.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [Net Rate](/lodging/hotel-dist/net-rate.md) — related

# Distinctions
- **Dynamic Packaging** vs [Offer](/common/standards/offer.md) — Dynamic packaging is a retailing technique of bundling multiple suppliers' components at one price; an NDC Offer is a single airline's standardized priced proposal that may itself include a bundle of that airline's products.
- **Dynamic Packaging** vs [Aggregator](/common/standards/aggregator.md) — An aggregator supplies the consolidated multi-supplier content; dynamic packaging is what a seller does with that content to build and price a combined trip.
- **Dynamic Packaging** vs [Cruise-Only Fare](/cruise/cruise/cruise-only-fare.md) — A cruise-only fare is the unbundled core; dynamic packaging combines that fare with flights, transfers, and excursions into a single dynamically priced product.
- **Dynamic Packaging** vs [Dynamic Offer](/common/standards/dynamic-offer.md) — Dynamic packaging assembles multi-supplier travel components (flight + hotel + car) into a consumer package; a Dynamic Offer is the airline-side real-time creation of a priced, bundled air offer within IATA's offer-creation step.
- **Dynamic Packaging** vs [Fly-Cruise](/cruise/cruise/fly-cruise.md) — Dynamic packaging assembles independent components (flight + hotel/cruise) priced together at booking by an intermediary; a fly-cruise air program is the cruise line's own bundling of flights with the cruise whose defining value is a sailing-guarantee — the line re-accommodates the guest through flight disruptions to protect the embarkation, a commitment generic dynamic packaging does not make.
- **Dynamic Packaging** vs [Multimodal Transport](/ground/rail/multimodal-transport.md) — Dynamic packaging bundles travel products (e.g., flight + hotel) into one purchase; multimodal transport specifically chains transport modes into one journey, which packaging may or may not do.

# Citations
[1] Industry usage — Dynamic packaging (travel distribution definition)
