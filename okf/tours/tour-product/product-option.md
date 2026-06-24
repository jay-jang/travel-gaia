---
type: Business Term
title: Product Option
description: >-
  A bookable variant of an activity — e.g. a language, group size, departure
  time, duration, or add-on combination — each with its own availability and
  price.
tags:
  - tour-product
  - active
  - Tours & Activities
timestamp: '2026-06-24T00:00:00Z'
id: product-option
vertical: tours
category: tour-product
conceptType: business-term
status: active
term_ko: 상품 옵션(Product Option)
definition_ko: '액티비티의 예약 가능한 변형(언어·그룹 규모·출발 시각·소요시간·애드온 조합 등)으로, 각 옵션이 고유한 가용성과 가격을 가진다.'
longDef: >-
  Connectivity standards model an activity as a product that contains one or
  more options (sometimes called units or variants). The traveler picks an
  option, then a timeslot, then per-pricing-category quantities. Modeling
  options correctly is essential for accurate availability and pricing, because
  two options of the same product can have different capacity pools, durations,
  and inclusions.
longDef_ko: >-
  연동 표준은 액티비티를 하나 이상의 옵션(유닛 또는 변형이라고도 함)을 포함하는 상품으로 모델링한다. 여행자는 옵션을 고른 뒤 타임슬롯,
  이어서 가격 카테고리별 수량을 선택한다. 같은 상품의 두 옵션이 서로 다른 정원 풀·소요시간·포함내역을 가질 수 있으므로, 옵션을 정확히
  모델링하는 것이 가용성·가격 정확도의 핵심이다.
aliases:
  - Option
  - Tour Option
  - Product Variant
relationships:
  - type: broader
    targetTerm: Activity
  - type: related
    targetTerm: Pricing Category
  - type: related
    targetTerm: Timeslot
distinctions:
  - targetTerm: Timeslot
    explanation: >-
      An option is the variant of the product being bought (language, group
      type, inclusions); a timeslot is the dated start time and capacity bucket
      against which a chosen option is booked.
    explanation_ko: '옵션은 구매하는 상품의 변형(언어·그룹 유형·포함내역)이고, 타임슬롯은 선택한 옵션이 예약되는 날짜별 시작 시각·정원 버킷이다.'
sources:
  - name: 'OCTO — Open API spec (products, options, units)'
    org: OCTO
    version: ''
    section: ''
    url: 'https://octo.travel/'
    tier: association
icon: >-
  <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none"
  stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="14"
  r="4"/><circle cx="14" cy="34" r="4"/><line x1="22" y1="14" x2="38"
  y2="14"/><line x1="22" y1="34" x2="38" y2="34"/></svg>
---

> A bookable variant of an activity — e.g. a language, group size, departure time, duration, or add-on combination — each with its own availability and price.

Connectivity standards model an activity as a product that contains one or more options (sometimes called units or variants). The traveler picks an option, then a timeslot, then per-pricing-category quantities. Modeling options correctly is essential for accurate availability and pricing, because two options of the same product can have different capacity pools, durations, and inclusions.

**한국어 / Korean** — **상품 옵션(Product Option)** — 액티비티의 예약 가능한 변형(언어·그룹 규모·출발 시각·소요시간·애드온 조합 등)으로, 각 옵션이 고유한 가용성과 가격을 가진다.

연동 표준은 액티비티를 하나 이상의 옵션(유닛 또는 변형이라고도 함)을 포함하는 상품으로 모델링한다. 여행자는 옵션을 고른 뒤 타임슬롯, 이어서 가격 카테고리별 수량을 선택한다. 같은 상품의 두 옵션이 서로 다른 정원 풀·소요시간·포함내역을 가질 수 있으므로, 옵션을 정확히 모델링하는 것이 가용성·가격 정확도의 핵심이다.

**Aliases:** `Option`, `Tour Option`, `Product Variant`

# Related
- Activity — broader
- Pricing Category — related
- Timeslot — related

# Distinctions
- **Product Option** vs Timeslot — An option is the variant of the product being bought (language, group type, inclusions); a timeslot is the dated start time and capacity bucket against which a chosen option is booked.

# Citations
[1] [OCTO — OCTO — Open API spec (products, options, units)](https://octo.travel/)
