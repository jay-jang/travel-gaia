---
type: Business Term
title: Package Rate
description: 'A package rate is a room rate that bundles the accommodation with additional goods or services (such as breakfast, parking, spa access, meals or activities) sold for a single combined price. The blended price is normally lower than buying each element separately, and the package may be presented as a single rate to the guest while internally splitting revenue across components.'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: package-rate
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: Package Rate (패키지 요금)
definition_ko: 'Package Rate(패키지 요금)는 객실 숙박에 조식·주차·스파·식사·액티비티 같은 부가 상품/서비스를 묶어 하나의 합산 가격으로 판매하는 객실 요금이다. 통상 각 구성요소를 따로 구매하는 것보다 저렴하며, 고객에게는 단일 요금으로 제시되지만 내부적으로는 구성요소별로 매출이 분배되기도 한다.'
longDef: 'Package rates are built by attaching package elements to a rate code, giving the staying guest a defined set of entitlements. They range from a simple room-and-breakfast package up to all-inclusive plans where the room price also covers meals, drinks and on-site activities. Because the elements have different revenue and tax treatment, PMS/CRS systems typically allocate the bundled amount across room revenue and non-room components for accounting and yield purposes. In OpenTravel distribution the per-product amounts are carried in rate-amount messages (e.g. OTA_HotelRateAmountNotifRQ). Package rate relates to Board Basis where the bundled element is a meal plan, but it is broader because it can include non-food services.'
longDef_ko: '패키지 요금은 rate code에 패키지 구성요소(package element)를 연결해 투숙객에게 정의된 entitlement 묶음을 제공함으로써 구성된다. 단순한 객실+조식 패키지부터, 객실 요금에 식사·음료·부대 액티비티까지 포함하는 올인클루시브 플랜까지 범위가 넓다. 구성요소마다 매출·세무 처리가 다르므로 PMS/CRS는 통상 객실 매출과 비객실 구성요소로 금액을 배분한다. OpenTravel 유통에서는 상품별 금액이 rate-amount 메시지(예: OTA_HotelRateAmountNotifRQ)로 전달된다. 묶인 구성요소가 식사 플랜일 때는 Board Basis와 관련되지만, 비식음료 서비스도 포함할 수 있어 더 넓은 개념이다.'
aliases:
  - Package Plan
  - Bundled Rate
providerTerms:
  - provider: Oracle OPERA
    term: Package / Package element (rate code)
    context: 'OPERA builds package rates by attaching package elements (breakfast, parking, etc.) to a rate code, posting and allocating the bundled value automatically.'
    context_ko: OPERA는 요금코드에 package element(조식·주차 등)를 붙여 패키지 요금을 구성하고 묶음 가치를 자동 포스팅·배분한다.
    relationship: same
relationships:
  - type: child
    targetTerm: Rate Plan
  - type: related
    targetTerm: Board Basis
  - type: related
    targetTerm: Rate Code
  - type: contrasts
    targetTerm: BAR
distinctions:
  - targetTerm: Board Basis
    explanation: 'Board Basis describes only the meal component included in a rate (room-only, B&B, half-board, etc.); a Package Rate is broader, bundling any combination of services and amenities, of which meals are just one possible element.'
    explanation_ko: 'Board Basis는 요금에 포함된 식사 구성요소(객실 단독, B&B, 하프보드 등)만을 가리키지만, Package Rate는 식사를 포함한 임의의 서비스·편의시설 조합을 묶는 더 넓은 개념이다.'
  - targetTerm: Derived Rate
    explanation: 'A package rate bundles room with extras (meals, parking) and may itself be derived from a base room rate; a derived rate refers narrowly to the price-linkage mechanism, regardless of whether any package components are bundled.'
    explanation_ko: 'Package Rate는 객실에 부가서비스(식사·주차)를 묶은 것으로 기준 객실 요금에서 파생될 수도 있고, Derived Rate는 패키지 구성 여부와 무관하게 가격 연동 메커니즘 자체를 좁게 가리킨다.'
sources:
  - org: Xotels
    name: Revenue Management Glossary — Package Rate
    version: ''
    section: ''
    url: 'https://www.xotels.com/en/glossary/package-rate'
    tier: secondary
  - org: Oracle
    name: OPERA Help — Rate Codes (package elements)
    version: ''
    section: Rate Management
    url: 'https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/rate_codes.htm'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18l16-8 16 8-16 8z"/><path d="M8 18v14l16 8 16-8V18"/><path d="M24 26v14M16 14l16 8"/></svg>
---

> A package rate is a room rate that bundles the accommodation with additional goods or services (such as breakfast, parking, spa access, meals or activities) sold for a single combined price. The blended price is normally lower than buying each element separately, and the package may be presented as a single rate to the guest while internally splitting revenue across components.

Package rates are built by attaching package elements to a rate code, giving the staying guest a defined set of entitlements. They range from a simple room-and-breakfast package up to all-inclusive plans where the room price also covers meals, drinks and on-site activities. Because the elements have different revenue and tax treatment, PMS/CRS systems typically allocate the bundled amount across room revenue and non-room components for accounting and yield purposes. In OpenTravel distribution the per-product amounts are carried in rate-amount messages (e.g. OTA_HotelRateAmountNotifRQ). Package rate relates to Board Basis where the bundled element is a meal plan, but it is broader because it can include non-food services.

**한국어 / Korean** — **Package Rate (패키지 요금)** — Package Rate(패키지 요금)는 객실 숙박에 조식·주차·스파·식사·액티비티 같은 부가 상품/서비스를 묶어 하나의 합산 가격으로 판매하는 객실 요금이다. 통상 각 구성요소를 따로 구매하는 것보다 저렴하며, 고객에게는 단일 요금으로 제시되지만 내부적으로는 구성요소별로 매출이 분배되기도 한다.

패키지 요금은 rate code에 패키지 구성요소(package element)를 연결해 투숙객에게 정의된 entitlement 묶음을 제공함으로써 구성된다. 단순한 객실+조식 패키지부터, 객실 요금에 식사·음료·부대 액티비티까지 포함하는 올인클루시브 플랜까지 범위가 넓다. 구성요소마다 매출·세무 처리가 다르므로 PMS/CRS는 통상 객실 매출과 비객실 구성요소로 금액을 배분한다. OpenTravel 유통에서는 상품별 금액이 rate-amount 메시지(예: OTA_HotelRateAmountNotifRQ)로 전달된다. 묶인 구성요소가 식사 플랜일 때는 Board Basis와 관련되지만, 비식음료 서비스도 포함할 수 있어 더 넓은 개념이다.

**Aliases:** `Package Plan`, `Bundled Rate`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Oracle OPERA | `Package / Package element (rate code)` | same | OPERA builds package rates by attaching package elements (breakfast, parking, etc.) to a rate code, posting and allocating the bundled value automatically. |

# Related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — child
- [Board Basis](/lodging/hotel-rate/board-basis.md) — related
- [Rate Code](/lodging/hotel-rate/rate-code.md) — related
- [BAR](/lodging/hotel-rate/bar.md) — contrasts

# Distinctions
- **Package Rate** vs [Board Basis](/lodging/hotel-rate/board-basis.md) — Board Basis describes only the meal component included in a rate (room-only, B&B, half-board, etc.); a Package Rate is broader, bundling any combination of services and amenities, of which meals are just one possible element.
- **Package Rate** vs [Derived Rate](/lodging/hotel-rate/derived-rate.md) — A package rate bundles room with extras (meals, parking) and may itself be derived from a base room rate; a derived rate refers narrowly to the price-linkage mechanism, regardless of whether any package components are bundled.

# Citations
[1] [Xotels — Revenue Management Glossary — Package Rate](https://www.xotels.com/en/glossary/package-rate)
[2] [Oracle — OPERA Help — Rate Codes (package elements) — Rate Management](https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/rate_codes.htm)
