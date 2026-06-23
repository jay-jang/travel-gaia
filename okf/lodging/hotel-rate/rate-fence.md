---
type: Business Term
title: Rate Fence
description: 'A rate fence is a rule or restriction attached to a rate that determines which guests qualify for it, used to segment demand into distinct price tiers so that price-sensitive and price-insensitive guests pay different rates without arbitrage. Common fences include advance-purchase or booking-window requirements, non-refundability and cancellation rules, minimum or maximum length of stay, day-of-week or arrival-day conditions, room type, and identity-based eligibility such as corporate or membership rates.'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-18T00:00:00Z'
id: rate-fence
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: 레이트 펜스(Rate Fence)
definition_ko: '레이트 펜스는 특정 요금에 붙는 규칙·제약으로, 어떤 고객이 그 요금을 받을 자격이 있는지를 정해 수요를 별개의 가격 단계로 세분화함으로써 가격 민감 고객과 비민감 고객이 차익거래 없이 서로 다른 요금을 내도록 한다. 흔한 펜스로는 사전구매·예약 기간 요건, 환불불가·취소 규정, 최소·최대 투숙 기간, 요일·도착일 조건, 룸타입, 그리고 법인·멤버십 요금 같은 신원 기반 자격 조건이 있다.'
longDef: 'Rate fences are the foundational mechanism of price discrimination in lodging revenue management. They are typically classified as physical/product fences (room type, view, amenities), transactional fences (advance purchase, non-refundable deposit, length-of-stay, change/cancel penalties), and buyer-characteristic fences (corporate, government, AAA, loyalty membership). Well-designed fences let a hotel offer a lower rate to capture incremental price-sensitive demand while preventing higher-value guests from trading down. Fences underpin rate plans, BAR-based tiers, and segmentation; weak or leaky fences cause rate leakage and dilution.'
longDef_ko: '레이트 펜스는 숙박 레비뉴 매니지먼트에서 가격 차별의 기본 메커니즘이다. 보통 물리적/상품 펜스(룸타입, 전망, 어메니티), 거래 조건 펜스(사전구매, 환불불가 예치금, 투숙 기간, 변경·취소 위약금), 그리고 구매자 특성 펜스(법인, 정부, AAA, 멤버십)로 분류된다. 잘 설계된 펜스는 가격 민감 수요를 추가로 포착하기 위해 낮은 요금을 제공하면서도, 고가치 고객이 낮은 요금으로 갈아타는 것을 막는다. 펜스는 레이트 플랜, BAR 기반 단계, 세분화의 토대이며, 펜스가 약하거나 새면 rate leakage와 요금 희석(dilution)을 초래한다.'
aliases:
  - Fence
  - Rate Fencing
  - Fencing
relationships:
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: BAR
  - type: related
    targetTerm: Non-Refundable Rate
  - type: related
    targetTerm: Minimum Length of Stay (MLOS)
  - type: related
    targetTerm: Corporate Rate
  - type: related
    targetTerm: Dynamic Pricing
distinctions:
  - targetTerm: Rate Plan
    explanation: 'A rate plan is the sellable, named price product a guest books; rate fences are the eligibility rules and restrictions that differentiate one rate plan (or tier) from another.'
    explanation_ko: '레이트 플랜은 고객이 실제 예약하는 이름이 붙은 판매 가능한 가격 상품이고, 레이트 펜스는 한 레이트 플랜(또는 단계)을 다른 것과 구분 짓는 자격 규칙과 제약이다.'
  - targetTerm: Open Pricing
    explanation: Open Pricing sets each rate plan and segment price independently rather than as fixed offsets; rate fences are the restrictions that keep those independently priced tiers from leaking into one another.
    explanation_ko: 'Open Pricing은 각 레이트 플랜·세그먼트 가격을 고정 차이가 아니라 독립적으로 설정하는 방식이고, 레이트 펜스는 그렇게 독립적으로 매겨진 단계들이 서로 새지 않도록 막는 제약이다.'
sources:
  - org: Xotels
    name: Rate Fences Definition / Meaning (Revenue Management Glossary)
    version: ''
    section: ''
    url: 'https://www.xotels.com/en/glossary/rate-fences'
    tier: secondary
  - org: RoomPriceGenie
    name: Rate fences (Glossary)
    version: ''
    section: ''
    url: 'https://roompricegenie.com/glossary/rate-fences/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="22" x2="42" y2="22"/><line x1="6" y1="32" x2="42" y2="32"/><line x1="14" y1="15" x2="14" y2="39"/><line x1="24" y1="15" x2="24" y2="39"/><line x1="34" y1="15" x2="34" y2="39"/><path d="M14 15l-2-3 2-3 2 3z"/><path d="M24 15l-2-3 2-3 2 3z"/><path d="M34 15l-2-3 2-3 2 3z"/></svg>
---

> A rate fence is a rule or restriction attached to a rate that determines which guests qualify for it, used to segment demand into distinct price tiers so that price-sensitive and price-insensitive guests pay different rates without arbitrage. Common fences include advance-purchase or booking-window requirements, non-refundability and cancellation rules, minimum or maximum length of stay, day-of-week or arrival-day conditions, room type, and identity-based eligibility such as corporate or membership rates.

Rate fences are the foundational mechanism of price discrimination in lodging revenue management. They are typically classified as physical/product fences (room type, view, amenities), transactional fences (advance purchase, non-refundable deposit, length-of-stay, change/cancel penalties), and buyer-characteristic fences (corporate, government, AAA, loyalty membership). Well-designed fences let a hotel offer a lower rate to capture incremental price-sensitive demand while preventing higher-value guests from trading down. Fences underpin rate plans, BAR-based tiers, and segmentation; weak or leaky fences cause rate leakage and dilution.

**한국어 / Korean** — **레이트 펜스(Rate Fence)** — 레이트 펜스는 특정 요금에 붙는 규칙·제약으로, 어떤 고객이 그 요금을 받을 자격이 있는지를 정해 수요를 별개의 가격 단계로 세분화함으로써 가격 민감 고객과 비민감 고객이 차익거래 없이 서로 다른 요금을 내도록 한다. 흔한 펜스로는 사전구매·예약 기간 요건, 환불불가·취소 규정, 최소·최대 투숙 기간, 요일·도착일 조건, 룸타입, 그리고 법인·멤버십 요금 같은 신원 기반 자격 조건이 있다.

레이트 펜스는 숙박 레비뉴 매니지먼트에서 가격 차별의 기본 메커니즘이다. 보통 물리적/상품 펜스(룸타입, 전망, 어메니티), 거래 조건 펜스(사전구매, 환불불가 예치금, 투숙 기간, 변경·취소 위약금), 그리고 구매자 특성 펜스(법인, 정부, AAA, 멤버십)로 분류된다. 잘 설계된 펜스는 가격 민감 수요를 추가로 포착하기 위해 낮은 요금을 제공하면서도, 고가치 고객이 낮은 요금으로 갈아타는 것을 막는다. 펜스는 레이트 플랜, BAR 기반 단계, 세분화의 토대이며, 펜스가 약하거나 새면 rate leakage와 요금 희석(dilution)을 초래한다.

**Aliases:** `Fence`, `Rate Fencing`, `Fencing`

# Related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [BAR](/lodging/hotel-rate/bar.md) — related
- [Non-Refundable Rate](/lodging/hotel-rate/non-refundable-rate.md) — related
- [Minimum Length of Stay (MLOS)](/lodging/hotel-rate/minimum-length-of-stay-mlos.md) — related
- [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — related
- [Dynamic Pricing](/lodging/hotel-rate/dynamic-pricing.md) — related

# Distinctions
- **Rate Fence** vs [Rate Plan](/lodging/hotel-rate/rate-plan.md) — A rate plan is the sellable, named price product a guest books; rate fences are the eligibility rules and restrictions that differentiate one rate plan (or tier) from another.
- **Rate Fence** vs [Open Pricing](/lodging/hotel-rate/open-pricing.md) — Open Pricing sets each rate plan and segment price independently rather than as fixed offsets; rate fences are the restrictions that keep those independently priced tiers from leaking into one another.

# Citations
[1] [Xotels — Rate Fences Definition / Meaning (Revenue Management Glossary)](https://www.xotels.com/en/glossary/rate-fences)
[2] [RoomPriceGenie — Rate fences (Glossary)](https://roompricegenie.com/glossary/rate-fences/)
