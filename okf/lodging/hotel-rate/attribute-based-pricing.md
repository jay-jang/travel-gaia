---
type: Business Term
title: Attribute-Based Pricing
description: 'A hotel pricing methodology in which individual room attributes — floor level, view type, bed configuration, room size, proximity to pool or elevator, balcony, and other physical or service characteristics — are each assigned a separate incremental price premium rather than being pre-bundled into a single named room-type rate. Guests pay a base room price and then selectively add only the attributes they value, replacing the traditional ''Deluxe King with City View'' bundled room-type model with a modular, consumer-driven product assembly.'
tags:
  - hotel-rate
  - active
  - HEDNA
timestamp: '2026-08-07T00:00:00Z'
id: attribute-based-pricing
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
abbreviation: ABP
term_ko: 속성 기반 가격 책정(Attribute-Based Pricing)
definition_ko: '층수·전망 유형·침대 구성·객실 크기·수영장 또는 엘리베이터 근접성·발코니 등 개별 객실 속성에 각각 별도의 추가 가격 프리미엄을 부여하는 호텔 가격 책정 방법론이다. 여행자는 기본 객실 가격을 지불한 뒤 자신이 가치를 두는 속성만 선택적으로 추가하며, 전통적인 "디럭스 킹 시티 뷰" 방식의 번들 객실 유형 모델을 모듈형·소비자 주도 상품 조립 방식으로 대체한다.'
longDef: 'In traditional hotel distribution, a room type (e.g., "Superior Double", "Deluxe King Ocean View") bundles all physical and service attributes into a single named category with a single rate; inventory is counted by room type. HEDNA''s June 2020 Attribute Model White Paper, produced by its Connectivity Working Group, formally articulated ABP as follows: "The Attribute Model redefines the traditional hotel product (rate plan + room type) and instead puts the consumer in control of choosing what they want and are willing to pay for by pricing the attributes in a typical rate plan along with those that make up the physical rooms." Under ABP, the hotel maintains a base rate for any room and then layers on incremental charges for each attribute a guest selects: +$15 for a high floor, +$25 for ocean view, +$10 for a king bed instead of twin, +$20 for a balcony. The hotel benefits from increased revenue per attribute and better room-assignment flexibility, since rooms are no longer rigidly sorted into named types with fixed inventory pools. Guests benefit from only paying for what they actually value. ABP requires significant system upgrades: the Property Management System (PMS) and Central Reservation System (CRS) must support attribute-level inventory management, availability, and pricing rather than room-type buckets. HTNG (Hospitality Technology Next Generation) and HEDNA continue to develop interoperability specifications to enable ABP across the distribution ecosystem. Scandic Hotels in Scandinavia was an early large-scale adopter.'
longDef_ko: '전통적인 호텔 유통에서는 객실 유형(예: "Superior Double", "Deluxe King Ocean View")이 모든 물리적·서비스 속성을 단일 명칭 카테고리와 단일 요금에 묶는다. HEDNA의 2020년 6월 Attribute Model White Paper는 ABP를 "소비자가 원하는 것을 선택하고 그에 대해 기꺼이 지불하도록 요금제 내 속성과 객실 물리적 속성을 가격화함으로써 기존 호텔 상품(요금제 + 객실 유형)을 재정의하는 모델"로 공식 정의했다. ABP에서 호텔은 모든 객실의 기본 요금을 유지하고, 고객이 선택하는 각 속성에 추가 요금을 부과한다(고층 +$15, 오션 뷰 +$25, 킹 침대 +$10, 발코니 +$20). 객실은 더 이상 고정 재고 풀이 있는 명칭 유형으로 엄격히 구분되지 않으므로 호텔은 더 높은 속성당 수익과 더 큰 객실 배정 유연성을 얻는다. ABP는 PMS(자산 관리 시스템) 및 CRS(중앙 예약 시스템)가 객실 유형 버킷 대신 속성 수준의 재고·가용성·가격 책정을 지원해야 하기 때문에 상당한 시스템 업그레이드가 필요하다.'
standardBody: HEDNA
aliases:
  - Attribute Model
  - ABP
  - Attribute-Based Selling (hotel)
  - Room Attribute Pricing
providerTerms:
  - provider: Scandic Hotels
    term: Attribute-Based Pricing
    context: Scandic was an early large-scale adopter of ABP, allowing guests to customise room attributes (floor, view, bed) at booking across its Scandinavian portfolio.
    context_ko: 'Scandic는 ABP를 대규모로 조기 도입한 선도 사례로, 북유럽 전역의 호텔에서 예약 시 고객이 층수·전망·침대 등 객실 속성을 커스터마이즈할 수 있도록 했다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Dynamic Pricing
  - type: related
    targetTerm: Open Pricing
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: Room Type
distinctions:
  - targetTerm: Dynamic Pricing
    explanation: 'Dynamic Pricing adjusts the price of a room-type bundle over time according to demand (the same "Deluxe King" costs more on peak nights). Attribute-Based Pricing changes the product structure itself — it unbundles the room type so each physical attribute carries its own explicit price, separating product composition from temporal demand adjustment.'
    explanation_ko: 'Dynamic Pricing는 수요에 따라 시간적으로 객실 유형 번들의 가격을 조정한다(동일한 "디럭스 킹"이 성수기에 더 비쌈). ABP는 상품 구조 자체를 변경한다. 객실 유형을 분해하여 각 물리적 속성에 자체적인 명시적 가격을 부여함으로써, 상품 구성을 시간적 수요 조정과 분리한다.'
  - targetTerm: Open Pricing
    explanation: 'Open Pricing is a revenue management strategy in which each rate tier (BAR, negotiated, package) is priced independently for each date without rate-relationship rules (e.g., AAA at -10% of BAR). ABP is a product architecture strategy that disaggregates what the guest is buying. Open Pricing addresses how rates are set across tiers; ABP addresses how the room product itself is composed.'
    explanation_ko: 'Open Pricing는 각 요금 등급(BAR, 협상 요금, 패키지)을 날짜별로 요금 관계 규칙 없이 독립적으로 가격 책정하는 수익 관리 전략이다. ABP는 고객이 구매하는 것을 분해하는 상품 아키텍처 전략이다. Open Pricing는 등급 간 요금 설정 방식을 다루고, ABP는 객실 상품 자체의 구성 방식을 다룬다.'
  - targetTerm: Room Type
    explanation: 'A Room Type (Deluxe King, Standard Twin, Junior Suite) is the traditional named product bucket that bundles all physical attributes into a single inventory category with one rate. ABP deconstructs the Room Type — the named category dissolves in favour of a base + attribute-increment model, and room assignment is made on the mix of attributes purchased rather than by type.'
    explanation_ko: '객실 유형(디럭스 킹, 스탠다드 트윈, 주니어 스위트)은 모든 물리적 속성을 하나의 요금을 가진 단일 재고 카테고리로 묶는 전통적인 명칭 상품 버킷이다. ABP는 객실 유형을 해체한다. 명칭 카테고리 대신 기본가+속성 추가 모델이 적용되고, 객실 배정은 유형이 아니라 고객이 구매한 속성의 조합에 따라 이루어진다.'
sources:
  - name: 'Attribute Model White Paper — Hotel Electronic Distribution Network Association'
    org: HEDNA
    version: 'June 2020 (Connectivity Working Group)'
    section: ''
    url: 'https://www.hedna.org/blog-new-white-paper-available-on-the-attribute-model/'
    tier: association
  - name: HEDNA Releases Attribute Model Whitepaper
    org: Hospitality Net
    version: ''
    section: ''
    url: 'https://www.hospitalitynet.org/news/4099154.html'
    tier: secondary
icon: '<svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="32" height="24" rx="2"/><line x1="8" y1="24" x2="40" y2="24"/><line x1="24" y1="12" x2="24" y2="36"/><text x="13" y="21" font-size="5" stroke="none" fill="currentColor">+$</text><text x="27" y="21" font-size="5" stroke="none" fill="currentColor">+$</text><path d="M10 32 l4-4 4 4" stroke-width="1.5"/><path d="M26 32 l4-4 4 4" stroke-width="1.5"/></svg>'
---

> A hotel pricing methodology in which individual room attributes — floor level, view type, bed configuration, room size, proximity to pool or elevator, balcony, and other physical or service characteristics — are each assigned a separate incremental price premium rather than being pre-bundled into a single named room-type rate. Guests pay a base room price and then selectively add only the attributes they value, replacing the traditional 'Deluxe King with City View' bundled room-type model with a modular, consumer-driven product assembly.

In traditional hotel distribution, a room type (e.g., "Superior Double", "Deluxe King Ocean View") bundles all physical and service attributes into a single named category with a single rate; inventory is counted by room type. HEDNA's June 2020 Attribute Model White Paper, produced by its Connectivity Working Group, formally articulated ABP as: "The Attribute Model redefines the traditional hotel product (rate plan + room type) and instead puts the consumer in control of choosing what they want and are willing to pay for by pricing the attributes in a typical rate plan along with those that make up the physical rooms." Under ABP, the hotel maintains a base rate for any room and then layers incremental charges for each attribute a guest selects: +$15 for a high floor, +$25 for ocean view, +$10 for a king bed instead of twin, +$20 for a balcony. ABP requires significant system upgrades: the Property Management System (PMS) and Central Reservation System (CRS) must support attribute-level inventory management, availability, and pricing rather than room-type buckets. HTNG continues to develop interoperability specifications to enable ABP across the distribution ecosystem. Scandic Hotels in Scandinavia was an early large-scale adopter.

**한국어 / Korean** — **속성 기반 가격 책정(Attribute-Based Pricing)** — 층수·전망·침대 구성·객실 크기·발코니 등 개별 객실 속성에 각각 별도의 추가 가격 프리미엄을 부여하는 호텔 가격 책정 방법론으로, 전통적인 번들 객실 유형 모델을 모듈형·소비자 주도 상품 조립 방식으로 대체한다.

전통적 유통에서는 객실 유형이 모든 속성을 단일 카테고리와 요금에 묶는다. HEDNA의 2020년 Attribute Model White Paper는 이를 "소비자가 원하는 것을 선택하고 그에 대해 기꺼이 지불하도록 요금제 내 속성과 객실 물리적 속성을 가격화함으로써 기존 호텔 상품을 재정의하는 모델"로 정의했다. ABP에서 호텔은 기본 요금을 유지하고 고객이 선택하는 각 속성에 추가 요금을 부과한다. 이를 구현하려면 PMS와 CRS가 속성 수준의 재고·가용성·가격 책정을 지원해야 하므로 상당한 시스템 업그레이드가 필요하다.

**Aliases:** `Attribute Model`, `ABP`, `Attribute-Based Selling (hotel)`, `Room Attribute Pricing`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Scandic Hotels | `Attribute-Based Pricing` | same | Scandic was an early large-scale adopter of ABP, allowing guests to customise room attributes (floor, view, bed) at booking across its Scandinavian portfolio. |

# Related
- [Dynamic Pricing](/lodging/hotel-rate/dynamic-pricing.md) — related
- [Open Pricing](/lodging/hotel-rate/open-pricing.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [Room Type](/lodging/hotel-rate/room-type.md) — related

# Distinctions
- **Attribute-Based Pricing** vs [Dynamic Pricing](/lodging/hotel-rate/dynamic-pricing.md) — Dynamic Pricing adjusts the price of a room-type bundle over time according to demand (the same "Deluxe King" costs more on peak nights). Attribute-Based Pricing changes the product structure itself — it unbundles the room type so each physical attribute carries its own explicit price, separating product composition from temporal demand adjustment.
- **Attribute-Based Pricing** vs [Open Pricing](/lodging/hotel-rate/open-pricing.md) — Open Pricing is a revenue management strategy in which each rate tier (BAR, negotiated, package) is priced independently for each date without rate-relationship rules. ABP is a product architecture strategy that disaggregates what the guest is buying. Open Pricing addresses how rates are set across tiers; ABP addresses how the room product itself is composed.
- **Attribute-Based Pricing** vs [Room Type](/lodging/hotel-rate/room-type.md) — A Room Type (Deluxe King, Standard Twin, Junior Suite) is the traditional named product bucket that bundles all physical attributes into a single inventory category with one rate. ABP deconstructs the Room Type — the named category dissolves in favour of a base + attribute-increment model, and room assignment is made on the mix of attributes purchased rather than by type.

# Citations
[1] [HEDNA — Attribute Model White Paper — Hotel Electronic Distribution Network Association](https://www.hedna.org/blog-new-white-paper-available-on-the-attribute-model/)
[2] [Hospitality Net — HEDNA Releases Attribute Model Whitepaper](https://www.hospitalitynet.org/news/4099154.html)
