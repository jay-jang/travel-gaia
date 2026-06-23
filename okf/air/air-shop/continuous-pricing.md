---
type: Process
title: Continuous Pricing
description: 'Continuous Pricing is a revenue-management and pricing technique in which an airline generates fares in real time across a continuous price range, rather than being limited to a fixed set of pre-filed fare buckets (booking classes). It lets carriers offer any price within defined minimum and maximum bounds based on demand, willingness to pay, and context.'
tags:
  - air-shop
  - active
timestamp: '2026-06-17T00:00:00Z'
id: continuous-pricing
vertical: air
category: air-shop
conceptType: process
status: active
term_ko: 연속 가격 책정 (Continuous Pricing)
definition_ko: 'Continuous Pricing은 항공사가 사전 파일링된 고정된 운임 버킷(booking class) 집합에 국한되지 않고, 연속적인 가격 범위 안에서 실시간으로 운임을 생성하는 revenue management 및 pricing 기법이다. 정해진 최소·최대 한도 내에서 수요, 지불 의향, 맥락에 따라 어떤 가격이든 제시할 수 있게 한다.'
longDef: 'Traditional airline pricing pre-distributes a discrete set of fares mapped to a limited number of booking classes (commonly described as around 26 class buckets) per flight, each with filed rules. Continuous Pricing removes the constraint that an offered price must equal one of those pre-filed points: the revenue-management system computes prices anywhere along a continuous interval, allowing finer matching of price to demand and reducing the ''gaps'' between adjacent fare buckets. ATPCO and carriers position continuous pricing as a step within dynamic offer creation and modern airline retailing, often delivered through richer optimization in the RM/offer engine and increasingly via NDC where the airline returns calculated prices rather than only catalog fares. It is closely related to, but narrower than, dynamic pricing, which can also vary bundles and ancillaries, not just the base fare.'
longDef_ko: '전통적 항공 가격 책정은 항공편마다 제한된 수의 booking class(흔히 약 26개 클래스 버킷으로 설명됨)에 매핑된 이산적 운임 집합을 사전 배포하며, 각각에 규정이 파일링되어 있다. Continuous Pricing은 제시 가격이 사전 파일링된 가격 지점 중 하나여야 한다는 제약을 제거한다. revenue management 시스템이 연속 구간상의 어떤 가격이든 산출하여 가격을 수요에 더 정밀하게 맞추고 인접 운임 버킷 사이의 ''간격''을 줄인다. ATPCO와 항공사들은 continuous pricing을 dynamic offer 생성과 현대 항공 리테일링의 한 단계로 위치시키며, 주로 RM/offer 엔진의 고도화된 최적화로 구현되고, 항공사가 카탈로그 운임만이 아니라 산출된 가격을 반환하는 NDC를 통해 점점 더 제공된다. base fare뿐 아니라 번들과 부가서비스까지 변동시킬 수 있는 dynamic pricing과 밀접하지만 그보다 좁은 개념이다.'
aliases:
  - Total Dynamic Pricing
  - Continuous Fares
providerTerms:
  - provider: ATPCO
    term: Dynamic Offers / Continuous Pricing
    context: ATPCO frames continuous pricing as part of its dynamic offer creation capabilities for airline retailing.
    context_ko: ATPCO는 continuous pricing을 항공 리테일링을 위한 dynamic offer 생성 역량의 일부로 위치시킨다.
    relationship: related
relationships:
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: RBD
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Offer
  - type: contrasts
    targetTerm: Fare Basis Code
distinctions:
  - targetTerm: RBD
    explanation: RBDs are the fixed booking-class buckets that traditional pricing maps fares to; Continuous Pricing is designed to break free of that finite bucket structure by pricing along a continuous range.
    explanation_ko: 'RBD는 전통적 가격 책정이 운임을 매핑하는 고정된 booking class 버킷이고, Continuous Pricing은 연속적 범위로 가격을 책정함으로써 그 유한한 버킷 구조에서 벗어나도록 설계되었다.'
  - targetTerm: Dynamic Offer
    explanation: Continuous pricing is one of the three component capabilities of a Dynamic Offer; a Dynamic Offer is the broader capability combining continuous pricing with dynamic pricing and dynamic bundling.
    explanation_ko: '연속 가격 책정은 다이내믹 오퍼를 이루는 세 가지 구성 역량 중 하나이고, 다이내믹 오퍼는 연속 가격 책정을 동적 가격 책정·동적 번들링과 결합한 더 넓은 역량이다.'
  - targetTerm: Dynamic Pricing
    explanation: Continuous pricing is the airline-side concept of pricing off a fare continuum rather than fixed RBD buckets; dynamic pricing is the hotel-side practice of moving rates by date. They are analogous disciplines in different verticals.
    explanation_ko: 'Continuous Pricing은 고정 RBD 버킷 대신 운임 연속선상에서 가격을 책정하는 항공 측 개념이고, Dynamic Pricing은 날짜별로 요금을 움직이는 호텔 측 관행이다. 서로 다른 산업군의 유사 기법이다.'
  - targetTerm: Revenue Management
    explanation: Revenue Management is the broader discipline of demand forecasting and inventory control; Continuous Pricing is one modern pricing technique that lets RM offer prices across a continuous range rather than fixed fare buckets.
    explanation_ko: 'Revenue Management는 수요 예측과 인벤토리 통제를 아우르는 더 넓은 영역이며, Continuous Pricing은 RM이 고정 운임 버킷 대신 연속적 범위로 가격을 제시할 수 있게 하는 현대적 가격 책정 기법 중 하나다.'
sources:
  - org: ATPCO
    name: What are dynamic offers?
    version: ''
    section: Continuous / dynamic pricing
    url: 'https://atpco.net/single-blog/what-are-dynamic-offers/'
    tier: vendor-doc
  - org: Business Travel News
    name: 'Airline Continuous Pricing, Explained'
    version: ''
    section: Continuous pricing
    url: 'https://www.businesstravelnews.com/Procurement/Airline-Continuous-Pricing-Explained'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 34c5 0 6-18 11-18s6 12 11 12 6-16 11-16"/><line x1="6" y1="40" x2="42" y2="40"/><circle cx="17" cy="16" r="1.5" fill="currentColor"/><circle cx="28" cy="28" r="1.5" fill="currentColor"/></svg>
---

> Continuous Pricing is a revenue-management and pricing technique in which an airline generates fares in real time across a continuous price range, rather than being limited to a fixed set of pre-filed fare buckets (booking classes). It lets carriers offer any price within defined minimum and maximum bounds based on demand, willingness to pay, and context.

Traditional airline pricing pre-distributes a discrete set of fares mapped to a limited number of booking classes (commonly described as around 26 class buckets) per flight, each with filed rules. Continuous Pricing removes the constraint that an offered price must equal one of those pre-filed points: the revenue-management system computes prices anywhere along a continuous interval, allowing finer matching of price to demand and reducing the 'gaps' between adjacent fare buckets. ATPCO and carriers position continuous pricing as a step within dynamic offer creation and modern airline retailing, often delivered through richer optimization in the RM/offer engine and increasingly via NDC where the airline returns calculated prices rather than only catalog fares. It is closely related to, but narrower than, dynamic pricing, which can also vary bundles and ancillaries, not just the base fare.

**한국어 / Korean** — **연속 가격 책정 (Continuous Pricing)** — Continuous Pricing은 항공사가 사전 파일링된 고정된 운임 버킷(booking class) 집합에 국한되지 않고, 연속적인 가격 범위 안에서 실시간으로 운임을 생성하는 revenue management 및 pricing 기법이다. 정해진 최소·최대 한도 내에서 수요, 지불 의향, 맥락에 따라 어떤 가격이든 제시할 수 있게 한다.

전통적 항공 가격 책정은 항공편마다 제한된 수의 booking class(흔히 약 26개 클래스 버킷으로 설명됨)에 매핑된 이산적 운임 집합을 사전 배포하며, 각각에 규정이 파일링되어 있다. Continuous Pricing은 제시 가격이 사전 파일링된 가격 지점 중 하나여야 한다는 제약을 제거한다. revenue management 시스템이 연속 구간상의 어떤 가격이든 산출하여 가격을 수요에 더 정밀하게 맞추고 인접 운임 버킷 사이의 '간격'을 줄인다. ATPCO와 항공사들은 continuous pricing을 dynamic offer 생성과 현대 항공 리테일링의 한 단계로 위치시키며, 주로 RM/offer 엔진의 고도화된 최적화로 구현되고, 항공사가 카탈로그 운임만이 아니라 산출된 가격을 반환하는 NDC를 통해 점점 더 제공된다. base fare뿐 아니라 번들과 부가서비스까지 변동시킬 수 있는 dynamic pricing과 밀접하지만 그보다 좁은 개념이다.

**Aliases:** `Total Dynamic Pricing`, `Continuous Fares`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Dynamic Offers / Continuous Pricing` | related | ATPCO frames continuous pricing as part of its dynamic offer creation capabilities for airline retailing. |

# Related
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [RBD](/air/air-shop/rbd.md) — related
- [NDC](/common/standards/ndc.md) — related
- [Offer](/common/standards/offer.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — contrasts

# Distinctions
- **Continuous Pricing** vs [RBD](/air/air-shop/rbd.md) — RBDs are the fixed booking-class buckets that traditional pricing maps fares to; Continuous Pricing is designed to break free of that finite bucket structure by pricing along a continuous range.
- **Continuous Pricing** vs [Dynamic Offer](/common/standards/dynamic-offer.md) — Continuous pricing is one of the three component capabilities of a Dynamic Offer; a Dynamic Offer is the broader capability combining continuous pricing with dynamic pricing and dynamic bundling.
- **Continuous Pricing** vs [Dynamic Pricing](/lodging/hotel-rate/dynamic-pricing.md) — Continuous pricing is the airline-side concept of pricing off a fare continuum rather than fixed RBD buckets; dynamic pricing is the hotel-side practice of moving rates by date. They are analogous disciplines in different verticals.
- **Continuous Pricing** vs [Revenue Management](/air/air-shop/revenue-management.md) — Revenue Management is the broader discipline of demand forecasting and inventory control; Continuous Pricing is one modern pricing technique that lets RM offer prices across a continuous range rather than fixed fare buckets.

# Citations
[1] [ATPCO — What are dynamic offers? — Continuous / dynamic pricing](https://atpco.net/single-blog/what-are-dynamic-offers/)
[2] [Business Travel News — Airline Continuous Pricing, Explained — Continuous pricing](https://www.businesstravelnews.com/Procurement/Airline-Continuous-Pricing-Explained)
