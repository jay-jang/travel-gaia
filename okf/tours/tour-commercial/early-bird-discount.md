---
type: Business Term
title: Early Bird Discount
description: 'An Early Bird Discount is a price reduction offered to travelers who book a tour, activity, or attraction ticket a defined period in advance of the departure or visit date — typically 30 to 90 days ahead. Operators use it to secure forward bookings, improve demand forecasting, reduce last-minute capacity risk, and reward commitment; OTAs often feature it as a promotional filter to drive conversions.'
tags:
  - tour-commercial
  - active
  - ATTA
timestamp: '2026-07-06T00:00:00Z'
id: early-bird-discount
vertical: tours
category: tour-commercial
conceptType: business-term
status: active
term_ko: 얼리버드 할인 (Early Bird Discount)
definition_ko: '얼리버드 할인(Early Bird Discount)은 출발일 또는 방문일 기준 일정 기간(일반적으로 30~90일) 전에 투어·액티비티·어트랙션 티켓을 예약하는 여행자에게 제공하는 가격 인하 혜택이다. 운영사는 이를 통해 선행 예약을 확보하고 수요 예측을 개선하며, 막판 정원 미달 위험을 줄이고 사전 결정에 대한 보상을 제공한다. OTA는 얼리버드 할인을 전환율 제고를 위한 프로모션 필터로 자주 활용한다.'
longDef: 'Early bird discounts are a demand-management tool that creates an inter-temporal price incentive: travelers who accept the uncertainty of a future trip receive a lower price in exchange for locking in their purchase. Discount magnitudes typically range from 5% to 20% off the standard retail rate, with the deepest discounts reserved for the longest advance purchase windows. Operators structure eligibility by defining a qualifying booking window (e.g., "book 60 days or more before departure") and sometimes by combining the discount with non-refundable payment terms, aligning the operator''s cash-flow benefit with the risk transfer to the buyer. In OTA systems such as Viator/TripAdvisor Experiences, GetYourGuide, and Airbnb Experiences, early bird rates appear as a tagged rate type in the pricing API, allowing the platform to surface them as "SAVE X% — Early Bird" chips in search results. Operators uploading rates via OCTO or channel managers may define early bird rates as time-conditional price modifiers on the base rate. Economically, early bird pricing is a form of dynamic pricing where price is a function of booking horizon rather than real-time demand, complementing last-minute promotions at the other end of the booking window.'
longDef_ko: '얼리버드 할인은 시간적 가격 인센티브를 생성하는 수요 관리 도구다. 미래 여행의 불확실성을 감수하는 여행자에게 사전 구매를 확약받는 대가로 더 낮은 가격을 제공한다. 할인율은 일반적으로 표준 소매가 대비 5~20% 범위이며, 가장 긴 사전 구매 기간에 대해 가장 큰 할인이 제공된다. 운영사는 자격 기준을 구매 기간(예: "출발 60일 이상 전 예약")으로 정의하고, 때로는 비환불 결제 조건과 결합하여 운영사의 현금 흐름 이익과 구매자의 위험 전가를 연계한다. Viator/TripAdvisor Experiences, GetYourGuide, Airbnb Experiences 같은 OTA 시스템에서 얼리버드 요금은 가격 API의 태그된 요금 유형으로 표시되어, 플랫폼이 검색 결과에 "X% 절약 — 얼리버드" 칩 형태로 노출할 수 있게 한다. OCTO 또는 채널 매니저를 통해 요금을 업로드하는 운영사는 기준 요금에 대한 시간 조건부 가격 수정자로 얼리버드 요금을 정의할 수 있다. 경제적으로 얼리버드 가격은 실시간 수요 대신 예약 시점을 가격 함수로 하는 동적 가격의 한 형태로, 예약 윈도우의 반대편 끝에 있는 막판 프로모션을 보완한다.'
standardBody: ATTA
aliases:
  - Early Bird Rate
  - Advance Purchase Discount
  - APD (tours)
  - Early Booking Discount
relationships:
  - type: related
    targetTerm: Demand-Based Pricing
  - type: related
    targetTerm: Allocation
  - type: related
    targetTerm: Guaranteed Departure
  - type: related
    targetTerm: Retail Rate
  - type: related
    targetTerm: Markup
distinctions:
  - targetTerm: Demand-Based Pricing
    explanation: 'Demand-Based Pricing adjusts prices dynamically in response to real-time demand signals (remaining capacity, booking pace, competitor pricing); an Early Bird Discount is a pre-set, rule-based discount that triggers on the booking horizon alone, regardless of how much capacity remains at the time of booking.'
    explanation_ko: 'Demand-Based Pricing은 실시간 수요 신호(남은 정원·예약 속도·경쟁사 가격)에 반응하여 가격을 동적으로 조정하고, 얼리버드 할인은 예약 시점의 남은 정원과 무관하게 예약 시점(booking horizon)만을 기준으로 적용되는 사전 설정·규칙 기반 할인이다.'
  - targetTerm: Retail Rate
    explanation: 'The Retail Rate is the standard consumer-facing price for the tour or activity; an Early Bird Discount is a time-conditional reduction applied to the retail rate, not a distinct pricing tier. Once the qualifying booking window closes, buyers pay the full retail rate.'
    explanation_ko: '소매 요금(Retail Rate)은 투어 또는 액티비티의 표준 소비자 가격이고, 얼리버드 할인은 별도의 가격 등급이 아니라 소매 요금에 시간 조건부로 적용되는 인하이다. 자격 예약 기간이 종료되면 구매자는 전체 소매 가격을 지불한다.'
sources:
  - name: GetYourGuide Supplier Help Center — Pricing & Promotions
    org: GetYourGuide
    version: ''
    section: 'Early Bird Discounts'
    url: 'https://supplier.getyourguide.com/en/'
    tier: vendor-doc
  - name: Viator / TripAdvisor Experiences — Supplier Help Center
    org: Viator (TripAdvisor)
    version: ''
    section: 'Promotions and Pricing'
    url: 'https://supplier.viator.com/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="14"/><path d="M24 14 L24 24 L31 29"/><path d="M10 14 Q7 10 10 7 Q14 4 16 8" stroke-dasharray="3,2"/><line x1="16" y1="8" x2="14" y2="5"/><line x1="16" y1="8" x2="13" y2="9"/></svg>
---

> An Early Bird Discount is a price reduction offered to travelers who book a tour, activity, or attraction ticket a defined period in advance of the departure or visit date — typically 30 to 90 days ahead. Operators use it to secure forward bookings, improve demand forecasting, reduce last-minute capacity risk, and reward commitment; OTAs often feature it as a promotional filter to drive conversions.

Early bird discounts are a demand-management tool that creates an inter-temporal price incentive: travelers who accept the uncertainty of a future trip receive a lower price in exchange for locking in their purchase. Discount magnitudes typically range from 5% to 20% off the standard retail rate, with the deepest discounts reserved for the longest advance purchase windows. Operators structure eligibility by defining a qualifying booking window (e.g., "book 60 days or more before departure") and sometimes by combining the discount with non-refundable payment terms, aligning the operator's cash-flow benefit with the risk transfer to the buyer. In OTA systems such as Viator/TripAdvisor Experiences, GetYourGuide, and Airbnb Experiences, early bird rates appear as a tagged rate type in the pricing API, allowing the platform to surface them as "SAVE X% — Early Bird" chips in search results. Operators uploading rates via OCTO or channel managers may define early bird rates as time-conditional price modifiers on the base rate. Economically, early bird pricing is a form of dynamic pricing where price is a function of booking horizon rather than real-time demand, complementing last-minute promotions at the other end of the booking window.

**한국어 / Korean** — **얼리버드 할인 (Early Bird Discount)** — 얼리버드 할인(Early Bird Discount)은 출발일 또는 방문일 기준 일정 기간(일반적으로 30~90일) 전에 투어·액티비티·어트랙션 티켓을 예약하는 여행자에게 제공하는 가격 인하 혜택이다. 운영사는 이를 통해 선행 예약을 확보하고 수요 예측을 개선하며, 막판 정원 미달 위험을 줄이고 사전 결정에 대한 보상을 제공한다. OTA는 얼리버드 할인을 전환율 제고를 위한 프로모션 필터로 자주 활용한다.

얼리버드 할인은 시간적 가격 인센티브를 생성하는 수요 관리 도구다. 미래 여행의 불확실성을 감수하는 여행자에게 사전 구매를 확약받는 대가로 더 낮은 가격을 제공한다. 할인율은 일반적으로 표준 소매가 대비 5~20% 범위이며, 가장 긴 사전 구매 기간에 대해 가장 큰 할인이 제공된다. 운영사는 자격 기준을 구매 기간(예: "출발 60일 이상 전 예약")으로 정의하고, 때로는 비환불 결제 조건과 결합하여 운영사의 현금 흐름 이익과 구매자의 위험 전가를 연계한다. Viator/TripAdvisor Experiences, GetYourGuide, Airbnb Experiences 같은 OTA 시스템에서 얼리버드 요금은 가격 API의 태그된 요금 유형으로 표시되어, 플랫폼이 검색 결과에 "X% 절약 — 얼리버드" 칩 형태로 노출할 수 있게 한다. OCTO 또는 채널 매니저를 통해 요금을 업로드하는 운영사는 기준 요금에 대한 시간 조건부 가격 수정자로 얼리버드 요금을 정의할 수 있다. 경제적으로 얼리버드 가격은 실시간 수요 대신 예약 시점을 가격 함수로 하는 동적 가격의 한 형태로, 예약 윈도우의 반대편 끝에 있는 막판 프로모션을 보완한다.

**Aliases:** `Early Bird Rate`, `Advance Purchase Discount`, `APD (tours)`, `Early Booking Discount`

# Related
- [Demand-Based Pricing](/tours/tour-commercial/demand-based-pricing.md) — related
- [Allocation](/tours/tour-commercial/allocation.md) — related
- [Guaranteed Departure](/tours/tour-product/guaranteed-departure.md) — related
- [Retail Rate](/tours/tour-commercial/retail-rate.md) — related
- [Markup](/tours/tour-commercial/markup.md) — related

# Distinctions
- **Early Bird Discount** vs [Demand-Based Pricing](/tours/tour-commercial/demand-based-pricing.md) — Demand-Based Pricing adjusts prices dynamically in response to real-time demand signals (remaining capacity, booking pace, competitor pricing); an Early Bird Discount is a pre-set, rule-based discount that triggers on the booking horizon alone, regardless of how much capacity remains at the time of booking.
- **Early Bird Discount** vs [Retail Rate](/tours/tour-commercial/retail-rate.md) — The Retail Rate is the standard consumer-facing price for the tour or activity; an Early Bird Discount is a time-conditional reduction applied to the retail rate, not a distinct pricing tier. Once the qualifying booking window closes, buyers pay the full retail rate.

# Citations
[1] [GetYourGuide — GetYourGuide Supplier Help Center — Pricing & Promotions](https://supplier.getyourguide.com/en/)
[2] [Viator (TripAdvisor) — Viator / TripAdvisor Experiences — Supplier Help Center](https://supplier.viator.com/)
