---
type: Business Term
title: Commissionable Rate
description: 'A commissionable rate is a published room rate on which the hotel pays the booking travel agent or distributor a commission (a percentage of the room revenue) for the sale. The guest is typically charged the hotel''s rate and the agent is paid commission afterward, characteristic of the agency distribution model.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: commissionable-rate
category: hotel-dist
conceptType: business-term
status: active
term_ko: 커미션 요금(commissionable rate)
definition_ko: '커미션 요금은 호텔이 판매에 대해 예약을 발생시킨 여행사나 분배자에게 커미션(객실 매출의 일정 비율)을 지급하는 공시 객실 요금이다. 일반적으로 고객은 호텔 요금을 청구받고 대리점은 이후에 커미션을 지급받으며, 이는 에이전시 분배 모델의 특징이다.'
longDef: 'Under the commissionable/agency model, the traveler pays the hotel (often at check-out) and the agent earns a contracted commission (a percentage of room revenue, which varies by agreement). This contrasts with the merchant/net-rate model where the intermediary marks up a net rate and there is no separate commission. GDS bookings are a classic channel for commissionable rates.'
longDef_ko: '커미션/에이전시 모델에서는 여행자가 (흔히 체크아웃 시) 호텔에 지불하고, 대리점은 계약된 커미션(객실 매출의 일정 비율로, 계약에 따라 다름)을 받는다. 이는 중개자가 순 요금에 마크업을 붙이고 별도의 커미션이 없는 머천트/순 요금 모델과 대비된다. GDS 예약은 커미션 요금의 대표적인 채널이다.'
aliases:
  - Retail Rate (commissionable)
  - Gross Rate
relationships:
  - type: contrasts
    targetTerm: Net Rate
  - type: related
    targetTerm: Agency Model
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: BAR
distinctions:
  - targetTerm: Net Rate
    explanation: A commissionable rate pays the seller a commission on the published price; a net rate is wholesale and non-commissionable with margin from markup.
    explanation_ko: '커미션 요금은 판매자에게 공시 가격에 대한 커미션을 지급하고, 순 요금은 도매·비커미션 요금으로 마진이 마크업에서 발생한다.'
  - targetTerm: Agency Model
    explanation: Commissionable rate is the priced product; the agency model is the broader settlement model in which the hotel collects from the guest and pays commission.
    explanation_ko: '커미션 요금은 가격이 책정된 상품이고, 에이전시 모델은 호텔이 고객으로부터 대금을 수취하고 커미션을 지급하는 더 넓은 정산 모델이다.'
sources:
  - name: Hotel distribution rate model industry references
    org: ''
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M25 5H11a2 2 0 00-2 2v14l18 18a2 2 0 002.8 0l11.4-11.4a2 2 0 000-2.8L25 5z"/><circle cx="16" cy="12" r="2" fill="currentColor" stroke="none"/><circle cx="19" cy="24" r="2.5"/><circle cx="30" cy="35" r="2.5"/><path d="M31 22L18 37"/></svg>
---

> A commissionable rate is a published room rate on which the hotel pays the booking travel agent or distributor a commission (a percentage of the room revenue) for the sale. The guest is typically charged the hotel's rate and the agent is paid commission afterward, characteristic of the agency distribution model.

Under the commissionable/agency model, the traveler pays the hotel (often at check-out) and the agent earns a contracted commission (a percentage of room revenue, which varies by agreement). This contrasts with the merchant/net-rate model where the intermediary marks up a net rate and there is no separate commission. GDS bookings are a classic channel for commissionable rates.

**한국어 / Korean** — **커미션 요금(commissionable rate)** — 커미션 요금은 호텔이 판매에 대해 예약을 발생시킨 여행사나 분배자에게 커미션(객실 매출의 일정 비율)을 지급하는 공시 객실 요금이다. 일반적으로 고객은 호텔 요금을 청구받고 대리점은 이후에 커미션을 지급받으며, 이는 에이전시 분배 모델의 특징이다.

커미션/에이전시 모델에서는 여행자가 (흔히 체크아웃 시) 호텔에 지불하고, 대리점은 계약된 커미션(객실 매출의 일정 비율로, 계약에 따라 다름)을 받는다. 이는 중개자가 순 요금에 마크업을 붙이고 별도의 커미션이 없는 머천트/순 요금 모델과 대비된다. GDS 예약은 커미션 요금의 대표적인 채널이다.

**Aliases:** `Retail Rate (commissionable)`, `Gross Rate`

# Related
- [Net Rate](/hotel-dist/net-rate.md) — contrasts
- [Agency Model](/pay/agency-model.md) — related
- [GDS](/standards/gds.md) — related
- [Rate Plan](/hotel-rate/rate-plan.md) — related
- [BAR](/hotel-rate/bar.md) — related

# Distinctions
- **Commissionable Rate** vs [Net Rate](/hotel-dist/net-rate.md) — A commissionable rate pays the seller a commission on the published price; a net rate is wholesale and non-commissionable with margin from markup.
- **Commissionable Rate** vs [Agency Model](/pay/agency-model.md) — Commissionable rate is the priced product; the agency model is the broader settlement model in which the hotel collects from the guest and pays commission.

# Citations
[1] Hotel distribution rate model industry references
