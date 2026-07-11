---
type: Business Term
title: Blackout Date
description: 'A blackout date is a specific date or date range on which a promotional rate, discounted fare, loyalty award redemption, or negotiated contract benefit is explicitly excluded and not available for booking. Blackout dates are inserted into rate plans, loyalty programme terms, group contracts, and promotional offers to protect revenue during periods of high anticipated demand — such as public holidays, major events, or peak travel seasons — when the supplier can sell at full price without incentivising early commitment.'
tags:
  - hotel-rate
  - active
  - HSMAI
timestamp: '2026-07-11T00:00:00Z'
id: blackout-date
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: '블랙아웃 날짜 (Blackout Date)'
definition_ko: '블랙아웃 날짜(blackout date)는 프로모션 요금·할인 운임·로열티 보상 사용·협상 계약 혜택이 명시적으로 제외되어 예약에 적용할 수 없는 특정 날짜 또는 날짜 범위이다. 블랙아웃 날짜는 공휴일·대형 행사·성수기 등 수요가 높을 것으로 예상되는 기간에 인센티브 없이 정가로 판매할 수 있도록 요금 플랜·로열티 프로그램 약관·단체 계약·프로모션 오퍼에 삽입된다.'
longDef: 'Blackout dates are a form of rate fencing: the supplier creates a pricing rule that limits access to discounted or incentivised pricing by date, ensuring that the benefit is not available when demand is already strong enough to fill capacity at full price. In hotel revenue management, blackout dates appear in multiple contexts: (1) Loyalty programme award bookings — major hotel chains specify blackout periods (e.g. New Year''s Eve, Chinese New Year, major conventions) during which points redemptions are restricted or barred entirely; (2) Corporate negotiated rates — a company''s preferred rate may include a schedule of blackout dates (e.g. Formula 1 race weekends, local trade fairs) where the rate reverts to BAR; (3) Package and promotional rates — a "Book 3 nights, get 1 free" promotion may exclude peak holiday weeks; (4) OTA and connectivity — blackout dates are transmitted via ARI (Availability, Rates, Inventory) updates through channel managers to OTAs and GDSs, typically by closing the rate plan or applying a minimum-price restriction on those dates. Operationally, a blackout date acts as a date-specific override on an otherwise-open rate plan: it does not close the room to all bookings (that is the function of Stop Sell or Closed to Arrival), but closes that specific discounted or redemption rate only, leaving other rate plans accessible. Revenue managers use blackout calendars as part of their annual yield strategy and review them in conjunction with demand forecasts and the competitive set''s rate positioning.'
longDef_ko: '블랙아웃 날짜는 요금 울타리(rate fencing)의 한 형태로, 공급자는 수요가 이미 정가로 채울 수 있을 만큼 강한 시기에 할인 또는 인센티브 가격에 대한 접근을 날짜별로 제한하는 가격 규칙을 만든다. 호텔 수익 관리에서 블랙아웃 날짜는 다양한 맥락에서 나타난다: (1) 로열티 포인트 리딤 예약 — 대형 호텔 체인은 포인트 리딤이 제한되거나 완전히 금지되는 블랙아웃 기간(연말·구정·대형 컨벤션 등)을 명시한다; (2) 기업 협상 요금 — 회사의 우선 요금에 블랙아웃 날짜(예: F1 레이스 주말, 지역 무역 박람회) 일정이 포함되어 해당 날짜에는 BAR로 회귀할 수 있다; (3) 패키지·프로모션 요금 — "3박 예약 시 1박 무료" 프로모션이 성수기 주간을 제외할 수 있다; (4) OTA·연결성 — 블랙아웃 날짜는 채널 매니저를 통해 ARI 업데이트로 OTA·GDS에 전달되며, 통상 해당 날짜에 요금 플랜을 마감하거나 최저 가격 제한을 적용하는 방식으로 구현된다. 운영 측면에서 블랙아웃 날짜는 개방 요금 플랜에 날짜별 오버라이드를 적용한다. 객실 자체의 모든 예약을 마감하지는 않고(이는 Stop Sell 또는 CTA의 기능), 해당 특정 할인 또는 리딤 요금만을 닫아 다른 요금 플랜은 계속 이용 가능하게 한다.'
aliases:
  - Blackout Dates
  - Black-out Date
  - Excluded Date
  - Closed Date (loyalty)
relationships:
  - type: related
    targetTerm: Rate Fence
  - type: related
    targetTerm: Rate Plan
  - type: contrasts
    targetTerm: Stop Sell
  - type: contrasts
    targetTerm: Closed to Arrival (CTA)
  - type: related
    targetTerm: Loyalty Tier Status
distinctions:
  - targetTerm: Stop Sell
    explanation: 'A Stop Sell closes the property to all new reservations across all or most rate plans, typically in response to a near-capacity situation; a blackout date closes only the specific discounted or redemption rate while leaving the property open at standard/full rates, because demand is high but capacity is not yet exhausted.'
    explanation_ko: 'Stop Sell은 보통 정원 초과 임박 상황에서 전체 또는 대부분의 요금 플랜에 대한 모든 신규 예약을 마감하는 것이고, 블랙아웃 날짜는 수요가 높지만 아직 정원이 소진되지 않은 상황에서 특정 할인 또는 리딤 요금만 마감하고 표준/정가로는 계속 오픈한다.'
  - targetTerm: Closed to Arrival (CTA)
    explanation: 'Closed to Arrival restricts the ability to begin a stay on that date (guests already in-house may continue); a blackout date restricts the availability of a specific rate or benefit on that date — a guest can still arrive on a blackout date, just not at the blocked rate or with the blocked redemption.'
    explanation_ko: 'Closed to Arrival은 해당 날짜에 투숙을 시작하는 것을 제한한다(이미 투숙 중인 고객은 계속 이용 가능). 블랙아웃 날짜는 해당 날짜에 특정 요금이나 혜택을 제한하는 것으로, 투숙 자체는 가능하지만 해당 요금이나 리딤은 사용할 수 없다.'
  - targetTerm: Rate Fence
    explanation: 'A rate fence is any condition that controls who can access a discounted rate (advance purchase, non-refundable, minimum stay, membership requirement); a blackout date is a type of rate fence applied to time — it fences the discount off on specific calendar dates rather than by purchase behaviour, channel, or customer attribute.'
    explanation_ko: '요금 울타리(rate fence)는 할인 요금에 접근할 수 있는 조건(사전 구매·환불 불가·최소 숙박·회원 자격)을 통제하는 모든 규칙이고, 블랙아웃 날짜는 특정 역일(曆日)에 적용되는 요금 울타리 유형으로, 구매 행동·채널·고객 속성이 아닌 날짜별로 할인을 차단한다.'
sources:
  - name: 'Hotel Revenue Management Foundations — Revenue Fencing Techniques'
    org: HSMAI (Hospitality Sales and Marketing Association International)
    version: ''
    section: 'Rate Restrictions and Blackout Dates'
    url: 'https://hsmai.org/resource/revenue-management-fundamentals/'
    tier: association
  - name: 'IHG One Rewards Programme Terms and Conditions — Blackout Dates'
    org: IHG (InterContinental Hotels Group)
    version: ''
    section: 'Award Night Terms'
    url: 'https://www.ihg.com/content/us/en/global/terms/rewards/award-night.html'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="30" rx="3"/><path d="M8 20h32"/><line x1="16" y1="8" x2="16" y2="14"/><line x1="32" y1="8" x2="32" y2="14"/><line x1="18" y1="28" x2="30" y2="38"/><line x1="30" y1="28" x2="18" y2="38"/></svg>
---

> A blackout date is a specific date or date range on which a promotional rate, discounted fare, loyalty award redemption, or negotiated contract benefit is explicitly excluded and not available for booking. Blackout dates are inserted into rate plans, loyalty programme terms, group contracts, and promotional offers to protect revenue during periods of high anticipated demand — such as public holidays, major events, or peak travel seasons — when the supplier can sell at full price without incentivising early commitment.

Blackout dates are a form of rate fencing: the supplier creates a pricing rule that limits access to discounted or incentivised pricing by date, ensuring that the benefit is not available when demand is already strong enough to fill capacity at full price. In hotel revenue management, blackout dates appear in multiple contexts: (1) Loyalty programme award bookings — major hotel chains specify blackout periods during which points redemptions are restricted or barred entirely; (2) Corporate negotiated rates — a company's preferred rate may include a schedule of blackout dates where the rate reverts to BAR; (3) Package and promotional rates — a "Book 3 nights, get 1 free" promotion may exclude peak holiday weeks; (4) OTA and connectivity — blackout dates are transmitted via ARI updates through channel managers to OTAs and GDSs, typically by closing the rate plan or applying a minimum-price restriction on those dates. Operationally, a blackout date acts as a date-specific override on an otherwise-open rate plan: it does not close the room to all bookings (that is the function of Stop Sell or Closed to Arrival), but closes that specific discounted or redemption rate only, leaving other rate plans accessible.

**한국어 / Korean** — **블랙아웃 날짜 (Blackout Date)** — 블랙아웃 날짜(blackout date)는 프로모션 요금·할인 운임·로열티 보상 사용·협상 계약 혜택이 명시적으로 제외되어 예약에 적용할 수 없는 특정 날짜 또는 날짜 범위이다. 블랙아웃 날짜는 공휴일·대형 행사·성수기 등 수요가 높을 것으로 예상되는 기간에 인센티브 없이 정가로 판매할 수 있도록 요금 플랜·로열티 프로그램 약관·단체 계약·프로모션 오퍼에 삽입된다.

블랙아웃 날짜는 요금 울타리의 한 형태로, 수요가 이미 정가로 채울 수 있을 만큼 강한 시기에 할인 또는 인센티브 가격에 대한 접근을 날짜별로 제한한다. 호텔 수익 관리에서 블랙아웃 날짜는 다양한 맥락에서 나타난다: 로열티 포인트 리딤 예약, 기업 협상 요금, 패키지·프로모션 요금, 채널 매니저를 통한 ARI 업데이트. 블랙아웃 날짜는 특정 할인 또는 리딤 요금만 닫아 다른 요금 플랜은 계속 이용 가능하게 한다.

**Aliases:** `Blackout Dates`, `Black-out Date`, `Excluded Date`, `Closed Date (loyalty)`

# Related
- [Rate Fence](/lodging/hotel-rate/rate-fence.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [Stop Sell](/lodging/hotel-rate/stop-sell.md) — contrasts
- [Closed to Arrival (CTA)](/lodging/hotel-rate/closed-to-arrival-cta.md) — contrasts
- [Loyalty Tier Status](/common/customer/loyalty-tier-status.md) — related

# Distinctions
- **Blackout Date** vs [Stop Sell](/lodging/hotel-rate/stop-sell.md) — A Stop Sell closes the property to all new reservations across all or most rate plans, typically in response to a near-capacity situation; a blackout date closes only the specific discounted or redemption rate while leaving the property open at standard/full rates, because demand is high but capacity is not yet exhausted.
- **Blackout Date** vs [Closed to Arrival (CTA)](/lodging/hotel-rate/closed-to-arrival-cta.md) — Closed to Arrival restricts the ability to begin a stay on that date (guests already in-house may continue); a blackout date restricts the availability of a specific rate or benefit on that date — a guest can still arrive on a blackout date, just not at the blocked rate or with the blocked redemption.
- **Blackout Date** vs [Rate Fence](/lodging/hotel-rate/rate-fence.md) — A rate fence is any condition that controls who can access a discounted rate (advance purchase, non-refundable, minimum stay, membership requirement); a blackout date is a type of rate fence applied to time — it fences the discount off on specific calendar dates rather than by purchase behaviour, channel, or customer attribute.

# Citations
[1] [HSMAI (Hospitality Sales and Marketing Association International) — Hotel Revenue Management Foundations — Revenue Fencing Techniques](https://hsmai.org/resource/revenue-management-fundamentals/)
[2] [IHG (InterContinental Hotels Group) — IHG One Rewards Programme Terms and Conditions — Blackout Dates](https://www.ihg.com/content/us/en/global/terms/rewards/award-night.html)
