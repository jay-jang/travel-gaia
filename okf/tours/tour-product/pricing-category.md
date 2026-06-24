---
type: Business Term
title: Pricing Category
description: >-
  A traveler class an activity is priced and counted by — e.g. adult, child,
  infant, senior, student — each with its own price and sometimes age rules and
  capacity weighting.
tags:
  - tour-product
  - active
  - Tours & Activities
timestamp: '2026-06-24T00:00:00Z'
id: pricing-category
vertical: tours
category: tour-product
conceptType: business-term
status: active
term_ko: 가격 카테고리(Pricing Category)
definition_ko: >-
  액티비티가 가격을 매기고 인원을 세는 여행자 구분(성인·아동·유아·시니어·학생 등)으로, 각기 다른 가격과 (때로는) 연령 규칙·정원
  가중치를 가진다.
longDef: >-
  Pricing categories (units) are the per-person dimension of activity pricing: a
  booking specifies a quantity per category, and rules can restrict combinations
  (e.g. a child must travel with an adult). Connectivity specs model these as
  units so resellers can quote and book mixed-party prices correctly;
  mishandling them is a frequent source of price and capacity errors.
longDef_ko: >-
  가격 카테고리(유닛)는 액티비티 가격의 인원당 차원이다. 예약은 카테고리별 수량을 지정하며, 조합을 제한하는 규칙(예: 아동은 성인 동반
  필수)이 있을 수 있다. 연동 사양은 이를 유닛으로 모델링해 리셀러가 혼합 일행 가격을 정확히 견적·예약하게 한다. 잘못 처리하면 가격·정원
  오류의 흔한 원인이 된다.
aliases:
  - Price Tier
  - Passenger Category
  - Unit (Pricing)
  - Age Band
relationships:
  - type: related
    targetTerm: Product Option
  - type: related
    targetTerm: Activity
  - type: related
    targetTerm: Markup
sources:
  - name: OCTO — Units and pricing
    org: OCTO
    version: ''
    section: ''
    url: 'https://octo.travel/'
    tier: association
icon: >-
  <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none"
  stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="30" width="8"
  height="10"/><rect x="20" y="22" width="8" height="18"/><rect x="30" y="14"
  width="8" height="26"/></svg>
---

> A traveler class an activity is priced and counted by — e.g. adult, child, infant, senior, student — each with its own price and sometimes age rules and capacity weighting.

Pricing categories (units) are the per-person dimension of activity pricing: a booking specifies a quantity per category, and rules can restrict combinations (e.g. a child must travel with an adult). Connectivity specs model these as units so resellers can quote and book mixed-party prices correctly; mishandling them is a frequent source of price and capacity errors.

**한국어 / Korean** — **가격 카테고리(Pricing Category)** — 액티비티가 가격을 매기고 인원을 세는 여행자 구분(성인·아동·유아·시니어·학생 등)으로, 각기 다른 가격과 (때로는) 연령 규칙·정원 가중치를 가진다.

가격 카테고리(유닛)는 액티비티 가격의 인원당 차원이다. 예약은 카테고리별 수량을 지정하며, 조합을 제한하는 규칙(예: 아동은 성인 동반 필수)이 있을 수 있다. 연동 사양은 이를 유닛으로 모델링해 리셀러가 혼합 일행 가격을 정확히 견적·예약하게 한다. 잘못 처리하면 가격·정원 오류의 흔한 원인이 된다.

**Aliases:** `Price Tier`, `Passenger Category`, `Unit (Pricing)`, `Age Band`

# Related
- Product Option — related
- Activity — related
- Markup — related

# Citations
[1] [OCTO — OCTO — Units and pricing](https://octo.travel/)
