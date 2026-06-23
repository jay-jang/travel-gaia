---
type: Business Term
title: Opaque Inventory
description: 'Opaque inventory is a hotel-distribution model in which rooms are sold at a discount while the property''s name (and exact details) are hidden from the shopper until after purchase. By revealing only star rating, general location, and amenities up front, it lets hotels clear distressed or excess inventory without publicly undercutting their own rates or eroding brand value.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: opaque-inventory
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
term_ko: 오페이크 인벤토리 (Opaque Inventory)
definition_ko: '오페이크 인벤토리는 객실을 할인 판매하되 구매 완료 전까지 프로퍼티 이름(및 정확한 세부 정보)을 구매자에게 숨기는 호텔 유통 모델이다. 사전에는 성급, 대략적 위치, 편의시설만 공개함으로써, 호텔이 자체 요금을 공개적으로 인하하거나 브랜드 가치를 훼손하지 않고도 처분 대상(distressed)·잉여 객실을 소진할 수 있게 한다.'
longDef: 'In the opaque model the seller (e.g. Priceline ''Express Deals''/''Name Your Own Price'', Hotwire ''Hot Rate'') discloses enough to set expectations — class, district, review score, price — but withholds the hotel identity until the (typically non-refundable) booking is committed. Because the deep discount is not attached to an identifiable property, the hotel can move soft-period or last-minute inventory while preserving its published BAR and rate parity, and protecting brand perception among full-rate guests. The model is a classic last-resort distribution channel; reported discounts average well below equivalent transparent offers. It contrasts with standard (transparent) OTA selling, where the property name and rate are shown before booking. Opaque selling has waned somewhat as transparent discounting and member/closed-user-group rates have grown, but it remains a defined distribution concept.'
longDef_ko: '오페이크 모델에서 판매자(예: Priceline의 ''Express Deals''/''Name Your Own Price'', Hotwire의 ''Hot Rate'')는 등급, 지역, 리뷰 점수, 가격 등 기대치를 형성할 만큼만 공개하고, (대개 환불 불가인) 예약이 확정되기 전까지 호텔 신원을 숨긴다. 깊은 할인이 식별 가능한 프로퍼티에 결부되지 않으므로, 호텔은 비수기·막판 객실을 처분하면서도 공시 BAR와 rate parity를 유지하고 정가 고객에 대한 브랜드 인식을 보호할 수 있다. 이 모델은 전형적인 최후 수단 유통 채널이며, 보고된 할인폭은 동등한 투명 상품보다 훨씬 낮다. 이는 예약 전 프로퍼티 이름과 요금을 보여주는 표준(투명) OTA 판매와 대비된다. 투명 할인과 회원/closed-user-group 요금이 늘면서 오페이크 판매는 다소 줄었으나, 여전히 정의된 유통 개념이다.'
aliases:
  - Opaque Pricing
  - Opaque Hotel Inventory
  - Opaque Rates
  - Opaque Travel Inventory
providerTerms:
  - provider: Priceline
    term: Express Deals / Name Your Own Price
    context: Opaque hotel products that hide the hotel name until purchase; 'Name Your Own Price' additionally lets the traveler bid within a star/location band.
    context_ko: 구매 전까지 호텔명을 숨기는 오페이크 호텔 상품. 'Name Your Own Price'는 성급/위치 범위 내에서 가격을 입찰하게 한다.
    relationship: narrower
  - provider: Hotwire
    term: Hot Rate
    context: Opaque hotel deal showing only star rating and area; the hotel name is disclosed only after booking.
    context_ko: '성급과 지역만 표시하는 오페이크 호텔 딜로, 예약 후에야 호텔명이 공개된다.'
    relationship: narrower
relationships:
  - type: related
    targetTerm: OTA (Online Travel Agency)
  - type: related
    targetTerm: Rate Parity
  - type: related
    targetTerm: BAR
  - type: related
    targetTerm: Non-Refundable Rate
  - type: related
    targetTerm: Revenue Management
distinctions:
  - targetTerm: Rate Parity
    explanation: 'Opaque inventory is a way to discount that does not breach rate parity, because the discount is detached from an identifiable, publicly listed property rate; rate parity is the consistency requirement that opaque selling is specifically designed to sidestep.'
    explanation_ko: '오페이크 인벤토리는 식별 가능한 공개 프로퍼티 요금과 할인을 분리하기 때문에 rate parity를 위반하지 않는 할인 방식이고, rate parity는 오페이크 판매가 우회하도록 설계된 일관성 요건이다.'
  - targetTerm: Bedbank
    explanation: A bedbank is a B2B wholesaler that supplies net inventory to resellers; opaque inventory is a B2C selling model (often fed partly by such net/distressed stock) defined by hiding the property identity from the consumer until purchase.
    explanation_ko: 'Bedbank은 재판매업체에 net 인벤토리를 공급하는 B2B 도매업체이고, 오페이크 인벤토리는 (일부는 그러한 net/처분 재고로 채워지는) B2C 판매 모델로 구매 전까지 프로퍼티 신원을 소비자에게 숨기는 것이 특징이다.'
sources:
  - org: Wikipedia
    name: Opaque travel inventory
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Opaque_travel_inventory'
    tier: encyclopedia
  - org: Xotels
    name: Opaque Pricing / Opaque Hotel Sites — Revenue Management Book
    version: ''
    section: ''
    url: 'https://www.xotels.com/en/revenue-management/revenue-management-book/opaque-pricing'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 40V18l10-7 10 7v22"/><path d="M6 40h26"/><path d="M13 24h3M21 24h3M13 31h3M21 31h3"/><circle cx="36" cy="30" r="8"/><path d="M36 25v6M33 28h6" opacity="0"/><path d="M31 30c2-3 8-3 10 0-2 3-8 3-10 0z"/><circle cx="36" cy="30" r="1.6" fill="currentColor" stroke="none"/></svg>
---

> Opaque inventory is a hotel-distribution model in which rooms are sold at a discount while the property's name (and exact details) are hidden from the shopper until after purchase. By revealing only star rating, general location, and amenities up front, it lets hotels clear distressed or excess inventory without publicly undercutting their own rates or eroding brand value.

In the opaque model the seller (e.g. Priceline 'Express Deals'/'Name Your Own Price', Hotwire 'Hot Rate') discloses enough to set expectations — class, district, review score, price — but withholds the hotel identity until the (typically non-refundable) booking is committed. Because the deep discount is not attached to an identifiable property, the hotel can move soft-period or last-minute inventory while preserving its published BAR and rate parity, and protecting brand perception among full-rate guests. The model is a classic last-resort distribution channel; reported discounts average well below equivalent transparent offers. It contrasts with standard (transparent) OTA selling, where the property name and rate are shown before booking. Opaque selling has waned somewhat as transparent discounting and member/closed-user-group rates have grown, but it remains a defined distribution concept.

**한국어 / Korean** — **오페이크 인벤토리 (Opaque Inventory)** — 오페이크 인벤토리는 객실을 할인 판매하되 구매 완료 전까지 프로퍼티 이름(및 정확한 세부 정보)을 구매자에게 숨기는 호텔 유통 모델이다. 사전에는 성급, 대략적 위치, 편의시설만 공개함으로써, 호텔이 자체 요금을 공개적으로 인하하거나 브랜드 가치를 훼손하지 않고도 처분 대상(distressed)·잉여 객실을 소진할 수 있게 한다.

오페이크 모델에서 판매자(예: Priceline의 'Express Deals'/'Name Your Own Price', Hotwire의 'Hot Rate')는 등급, 지역, 리뷰 점수, 가격 등 기대치를 형성할 만큼만 공개하고, (대개 환불 불가인) 예약이 확정되기 전까지 호텔 신원을 숨긴다. 깊은 할인이 식별 가능한 프로퍼티에 결부되지 않으므로, 호텔은 비수기·막판 객실을 처분하면서도 공시 BAR와 rate parity를 유지하고 정가 고객에 대한 브랜드 인식을 보호할 수 있다. 이 모델은 전형적인 최후 수단 유통 채널이며, 보고된 할인폭은 동등한 투명 상품보다 훨씬 낮다. 이는 예약 전 프로퍼티 이름과 요금을 보여주는 표준(투명) OTA 판매와 대비된다. 투명 할인과 회원/closed-user-group 요금이 늘면서 오페이크 판매는 다소 줄었으나, 여전히 정의된 유통 개념이다.

**Aliases:** `Opaque Pricing`, `Opaque Hotel Inventory`, `Opaque Rates`, `Opaque Travel Inventory`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Priceline | `Express Deals / Name Your Own Price` | narrower | Opaque hotel products that hide the hotel name until purchase; 'Name Your Own Price' additionally lets the traveler bid within a star/location band. |
| Hotwire | `Hot Rate` | narrower | Opaque hotel deal showing only star rating and area; the hotel name is disclosed only after booking. |

# Related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related
- [Rate Parity](/lodging/hotel-rate/rate-parity.md) — related
- [BAR](/lodging/hotel-rate/bar.md) — related
- [Non-Refundable Rate](/lodging/hotel-rate/non-refundable-rate.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related

# Distinctions
- **Opaque Inventory** vs [Rate Parity](/lodging/hotel-rate/rate-parity.md) — Opaque inventory is a way to discount that does not breach rate parity, because the discount is detached from an identifiable, publicly listed property rate; rate parity is the consistency requirement that opaque selling is specifically designed to sidestep.
- **Opaque Inventory** vs [Bedbank](/lodging/hotel-dist/bedbank.md) — A bedbank is a B2B wholesaler that supplies net inventory to resellers; opaque inventory is a B2C selling model (often fed partly by such net/distressed stock) defined by hiding the property identity from the consumer until purchase.

# Citations
[1] [Wikipedia — Opaque travel inventory](https://en.wikipedia.org/wiki/Opaque_travel_inventory)
[2] [Xotels — Opaque Pricing / Opaque Hotel Sites — Revenue Management Book](https://www.xotels.com/en/revenue-management/revenue-management-book/opaque-pricing)
