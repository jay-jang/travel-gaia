---
type: Metric
title: Hurdle Rate
description: 'A hurdle rate is the minimum room rate a hotel''s revenue management system will accept for a given date, calculated as the opportunity cost of selling that room rather than holding it for higher-value future demand. Reservations or rates priced below the hurdle are yielded out (declined or closed) so the property protects inventory for more valuable bookings.'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-18T00:00:00Z'
id: hurdle-rate
vertical: lodging
category: hotel-rate
conceptType: metric
status: active
term_ko: 허들 레이트(Hurdle Rate / Rate Hurdle)
definition_ko: '허들 레이트는 호텔의 레비뉴 매니지먼트 시스템(RMS)이 특정 날짜에 수용하는 최저 객실 요금으로, 그 객실을 더 높은 가치의 미래 수요를 위해 남겨두지 않고 지금 파는 데 따른 기회비용으로 산출된다. 허들보다 낮게 책정된 예약·요금은 yield out(거절 또는 차단)되어, 호텔이 더 가치 있는 예약을 위해 재고를 보호한다.'
longDef: 'Also called the rate hurdle or, conceptually, the last room value, the hurdle rate is the hotel-side expression of bid-price control. The RMS computes a hurdle for each arrival date and length of stay from the demand forecast; any rate whose net value clears the hurdle is sellable, while lower offers are closed. On high-demand dates the hurdle rises to force higher rates and longer stays; on soft dates it falls to stimulate demand. Hurdles can be set per room type and length of stay, and are continuously recalculated as the booking pace evolves.'
longDef_ko: '레이트 허들 또는 개념적으로 ''마지막 객실 가치(last room value)''라고도 불리는 허들 레이트는 bid-price 통제의 호텔 측 표현이다. RMS는 수요 예측으로부터 도착일과 투숙 기간별 허들을 계산하며, 순가치가 허들을 넘는 요금은 판매 가능하고 낮은 제안은 차단된다. 고수요 날짜에는 허들을 높여 더 높은 요금과 더 긴 투숙을 유도하고, 약한 날짜에는 낮춰 수요를 자극한다. 허들은 룸타입·투숙 기간별로 설정할 수 있으며 예약 속도(pace)가 변함에 따라 지속적으로 재계산된다.'
aliases:
  - Rate Hurdle
  - Last Room Value (LRV)
  - Bid Price (hotel)
relationships:
  - type: contrasts
    targetTerm: Bid Price
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: BAR
  - type: related
    targetTerm: Booking Limit
  - type: related
    targetTerm: Displacement Analysis
distinctions:
  - targetTerm: Bid Price
    explanation: 'Bid price is the general revenue-management threshold (the marginal value / opportunity cost of the last unit of capacity) that originated in airline and network RM; the hurdle rate is the same idea applied to a hotel room-night and expressed as a minimum acceptable room rate. In hotel systems the two are often used interchangeably, with the bid-price value commonly surfaced as the Last Room Value (LRV) from which the rate hurdle is derived.'
    explanation_ko: 'Bid price는 마지막 용량 단위의 한계 가치(기회비용)를 나타내는 레비뉴 매니지먼트의 일반적 임계값으로 항공·네트워크 RM에서 비롯되었고, 허들 레이트는 같은 개념을 호텔 객실-박에 적용해 최저 수용 요금으로 표현한 것이다. 호텔 시스템에서는 둘이 사실상 혼용되며, bid-price 값이 흔히 Last Room Value(LRV)로 표시되고 그로부터 레이트 허들이 도출된다.'
  - targetTerm: BAR
    explanation: 'BAR is the published best rate offered to guests; the hurdle rate is the internal cost-of-displacement floor used to decide whether to sell at all, and it may sit below or above the published BAR depending on demand.'
    explanation_ko: 'BAR은 고객에게 게시되는 최선 요금이고, 허들 레이트는 애초에 판매할지 여부를 결정하는 내부 기회비용 하한선으로, 수요에 따라 게시된 BAR보다 낮거나 높을 수 있다.'
  - targetTerm: Displacement Analysis
    explanation: The hurdle rate is the per-room-night threshold an RMS applies to individual rate decisions; displacement analysis is the broader process that uses those forecasts and hurdles to evaluate an entire group request against displaced transient business.
    explanation_ko: '허들 레이트는 RMS가 개별 요금 결정에 적용하는 객실-박 단위 임계값이고, displacement analysis는 그 예측과 허들을 활용해 전체 그룹 요청을 밀려나는 transient 사업과 비교 평가하는 더 넓은 프로세스다.'
sources:
  - org: Xotels
    name: Rate Hurdle Definition / Meaning (Glossary)
    version: ''
    section: ''
    url: 'https://www.xotels.com/en/glossary/rate-hurdle'
  - org: Oracle
    name: OPERA Cloud Service - Configuring Hurdle Rates
    version: ''
    section: ''
    url: 'https://docs.oracle.com/en/industries/hospitality/opera-cloud/23.4/ocsuh/t_adding_hurdle_rate.htm'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="38" x2="42" y2="38"/><line x1="16" y1="20" x2="16" y2="38"/><line x1="32" y1="20" x2="32" y2="38"/><line x1="13" y1="20" x2="35" y2="20"/><path d="M10 30l8-8 8 6 8-12"/><path d="M30 16h4v4"/></svg>
---

> A hurdle rate is the minimum room rate a hotel's revenue management system will accept for a given date, calculated as the opportunity cost of selling that room rather than holding it for higher-value future demand. Reservations or rates priced below the hurdle are yielded out (declined or closed) so the property protects inventory for more valuable bookings.

Also called the rate hurdle or, conceptually, the last room value, the hurdle rate is the hotel-side expression of bid-price control. The RMS computes a hurdle for each arrival date and length of stay from the demand forecast; any rate whose net value clears the hurdle is sellable, while lower offers are closed. On high-demand dates the hurdle rises to force higher rates and longer stays; on soft dates it falls to stimulate demand. Hurdles can be set per room type and length of stay, and are continuously recalculated as the booking pace evolves.

**한국어 / Korean** — **허들 레이트(Hurdle Rate / Rate Hurdle)** — 허들 레이트는 호텔의 레비뉴 매니지먼트 시스템(RMS)이 특정 날짜에 수용하는 최저 객실 요금으로, 그 객실을 더 높은 가치의 미래 수요를 위해 남겨두지 않고 지금 파는 데 따른 기회비용으로 산출된다. 허들보다 낮게 책정된 예약·요금은 yield out(거절 또는 차단)되어, 호텔이 더 가치 있는 예약을 위해 재고를 보호한다.

레이트 허들 또는 개념적으로 '마지막 객실 가치(last room value)'라고도 불리는 허들 레이트는 bid-price 통제의 호텔 측 표현이다. RMS는 수요 예측으로부터 도착일과 투숙 기간별 허들을 계산하며, 순가치가 허들을 넘는 요금은 판매 가능하고 낮은 제안은 차단된다. 고수요 날짜에는 허들을 높여 더 높은 요금과 더 긴 투숙을 유도하고, 약한 날짜에는 낮춰 수요를 자극한다. 허들은 룸타입·투숙 기간별로 설정할 수 있으며 예약 속도(pace)가 변함에 따라 지속적으로 재계산된다.

**Aliases:** `Rate Hurdle`, `Last Room Value (LRV)`, `Bid Price (hotel)`

# Related
- [Bid Price](/air/air-shop/bid-price.md) — contrasts
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [BAR](/lodging/hotel-rate/bar.md) — related
- [Booking Limit](/air/air-shop/booking-limit.md) — related
- [Displacement Analysis](/lodging/hotel-rate/displacement-analysis.md) — related

# Distinctions
- **Hurdle Rate** vs [Bid Price](/air/air-shop/bid-price.md) — Bid price is the general revenue-management threshold (the marginal value / opportunity cost of the last unit of capacity) that originated in airline and network RM; the hurdle rate is the same idea applied to a hotel room-night and expressed as a minimum acceptable room rate. In hotel systems the two are often used interchangeably, with the bid-price value commonly surfaced as the Last Room Value (LRV) from which the rate hurdle is derived.
- **Hurdle Rate** vs [BAR](/lodging/hotel-rate/bar.md) — BAR is the published best rate offered to guests; the hurdle rate is the internal cost-of-displacement floor used to decide whether to sell at all, and it may sit below or above the published BAR depending on demand.
- **Hurdle Rate** vs [Displacement Analysis](/lodging/hotel-rate/displacement-analysis.md) — The hurdle rate is the per-room-night threshold an RMS applies to individual rate decisions; displacement analysis is the broader process that uses those forecasts and hurdles to evaluate an entire group request against displaced transient business.

# Citations
[1] [Xotels — Rate Hurdle Definition / Meaning (Glossary)](https://www.xotels.com/en/glossary/rate-hurdle)
[2] [Oracle — OPERA Cloud Service - Configuring Hurdle Rates](https://docs.oracle.com/en/industries/hospitality/opera-cloud/23.4/ocsuh/t_adding_hurdle_rate.htm)
