---
type: Process
title: Displacement Analysis
description: 'Displacement analysis is the revenue-management evaluation of whether to accept a group or contract booking by comparing its total expected value against the higher-rated transient (and ancillary) revenue it would displace on the same dates. If the group''s total contribution exceeds the displaced transient revenue, accepting it is justified; if not, the group should be declined, repriced, or its dates and block size adjusted.'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-18T00:00:00Z'
id: displacement-analysis
vertical: lodging
category: hotel-rate
conceptType: process
status: active
term_ko: 디스플레이스먼트 분석(Displacement Analysis)
definition_ko: 'Displacement analysis는 그룹·계약 예약을 수용할지 여부를, 같은 날짜에 그것이 밀어내는 더 높은 요금의 transient(및 부대) 매출과 그룹의 총 기대 가치를 비교해 평가하는 레비뉴 매니지먼트 분석이다. 그룹의 총 기여가 밀려나는 transient 매출을 초과하면 수용이 정당화되고, 그렇지 않으면 그룹을 거절하거나 재가격하거나 날짜·블록 규모를 조정해야 한다.'
longDef: 'Displacement analysis is the core decision framework for allocating constrained inventory between group and transient demand. The analysis estimates transient demand and the rates those rooms would otherwise sell at (using the demand forecast and hurdle rates), the rooms the group would occupy on each constrained night, and the total group value including rooms, food and beverage, meeting space, and other ancillary spend. The comparison may favor a group even at a lower room rate when its ancillary revenue is high, or reject a group on peak nights where it would crowd out higher-rated transient business. It directly informs whether to sell, the rate to quote, and how large a block to commit.'
longDef_ko: 'Displacement analysis는 제한된 재고를 그룹 수요와 일반(transient) 수요 사이에 배분하는 핵심 의사결정 프레임워크다. 분석은 수요 예측과 허들 레이트를 이용해 transient 수요와 해당 객실이 달리 판매될 요금, 그룹이 제약 야간마다 점유할 객실 수, 그리고 객실·식음료(F&B)·회의 공간·기타 부대 지출을 포함한 그룹의 총가치를 추정한다. 부대 매출이 큰 그룹은 객실 요금이 낮더라도 수용이 유리할 수 있고, 더 높은 요금의 transient 사업을 밀어낼 성수기 야간에는 그룹을 거절하는 쪽이 유리할 수 있다. 이는 판매 여부, 제시 요금, 약정할 블록 규모를 직접 결정한다.'
aliases:
  - Group Displacement Analysis
  - Displacement Calculation
relationships:
  - type: related
    targetTerm: Group Block
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: Hurdle Rate
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: Overbooking
distinctions:
  - targetTerm: Hurdle Rate
    explanation: The hurdle rate is the per-room-night threshold an RMS applies to individual rate decisions; displacement analysis is the broader process that uses those forecasts and hurdles to evaluate an entire group request against displaced transient business.
    explanation_ko: '허들 레이트는 RMS가 개별 요금 결정에 적용하는 객실-박 단위 임계값이고, displacement analysis는 그 예측과 허들을 활용해 전체 그룹 요청을 밀려나는 transient 사업과 비교 평가하는 더 넓은 프로세스다.'
  - targetTerm: Group Block
    explanation: A group block is the inventory unit being requested; displacement analysis is the calculation that decides whether and on what terms to commit that block.
    explanation_ko: '그룹 블록은 요청되는 재고 단위이고, displacement analysis는 그 블록을 약정할지와 어떤 조건으로 할지를 결정하는 계산이다.'
sources:
  - org: Cloudbeds
    name: 'Displacement analysis: Balancing group and transient business'
    version: ''
    section: ''
    url: 'https://www.cloudbeds.com/hotel-group-business/displacement-analysis/'
  - org: Lighthouse
    name: How to conduct an effective hotel displacement analysis
    version: ''
    section: ''
    url: 'https://www.mylighthouse.com/resources/blog/displacement-analysis-for-your-hotel'
  - org: Xotels
    name: Displacement Analysis Definition / Meaning
    version: ''
    section: ''
    url: 'https://www.xotels.com/en/glossary/displacement-analysis'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8v6"/><path d="M11 16h26"/><path d="M11 16l-5 9h10z"/><path d="M37 16l-5 9h10z"/><path d="M6 25a5 4 0 0 0 10 0"/><path d="M32 25a5 4 0 0 0 10 0"/><path d="M24 14v22"/><path d="M18 40h12"/></svg>
---

> Displacement analysis is the revenue-management evaluation of whether to accept a group or contract booking by comparing its total expected value against the higher-rated transient (and ancillary) revenue it would displace on the same dates. If the group's total contribution exceeds the displaced transient revenue, accepting it is justified; if not, the group should be declined, repriced, or its dates and block size adjusted.

Displacement analysis is the core decision framework for allocating constrained inventory between group and transient demand. The analysis estimates transient demand and the rates those rooms would otherwise sell at (using the demand forecast and hurdle rates), the rooms the group would occupy on each constrained night, and the total group value including rooms, food and beverage, meeting space, and other ancillary spend. The comparison may favor a group even at a lower room rate when its ancillary revenue is high, or reject a group on peak nights where it would crowd out higher-rated transient business. It directly informs whether to sell, the rate to quote, and how large a block to commit.

**한국어 / Korean** — **디스플레이스먼트 분석(Displacement Analysis)** — Displacement analysis는 그룹·계약 예약을 수용할지 여부를, 같은 날짜에 그것이 밀어내는 더 높은 요금의 transient(및 부대) 매출과 그룹의 총 기대 가치를 비교해 평가하는 레비뉴 매니지먼트 분석이다. 그룹의 총 기여가 밀려나는 transient 매출을 초과하면 수용이 정당화되고, 그렇지 않으면 그룹을 거절하거나 재가격하거나 날짜·블록 규모를 조정해야 한다.

Displacement analysis는 제한된 재고를 그룹 수요와 일반(transient) 수요 사이에 배분하는 핵심 의사결정 프레임워크다. 분석은 수요 예측과 허들 레이트를 이용해 transient 수요와 해당 객실이 달리 판매될 요금, 그룹이 제약 야간마다 점유할 객실 수, 그리고 객실·식음료(F&B)·회의 공간·기타 부대 지출을 포함한 그룹의 총가치를 추정한다. 부대 매출이 큰 그룹은 객실 요금이 낮더라도 수용이 유리할 수 있고, 더 높은 요금의 transient 사업을 밀어낼 성수기 야간에는 그룹을 거절하는 쪽이 유리할 수 있다. 이는 판매 여부, 제시 요금, 약정할 블록 규모를 직접 결정한다.

**Aliases:** `Group Displacement Analysis`, `Displacement Calculation`

# Related
- [Group Block](/lodging/hotel-rate/group-block.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [Hurdle Rate](/lodging/hotel-rate/hurdle-rate.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related

# Distinctions
- **Displacement Analysis** vs [Hurdle Rate](/lodging/hotel-rate/hurdle-rate.md) — The hurdle rate is the per-room-night threshold an RMS applies to individual rate decisions; displacement analysis is the broader process that uses those forecasts and hurdles to evaluate an entire group request against displaced transient business.
- **Displacement Analysis** vs [Group Block](/lodging/hotel-rate/group-block.md) — A group block is the inventory unit being requested; displacement analysis is the calculation that decides whether and on what terms to commit that block.

# Citations
[1] [Cloudbeds — Displacement analysis: Balancing group and transient business](https://www.cloudbeds.com/hotel-group-business/displacement-analysis/)
[2] [Lighthouse — How to conduct an effective hotel displacement analysis](https://www.mylighthouse.com/resources/blog/displacement-analysis-for-your-hotel)
[3] [Xotels — Displacement Analysis Definition / Meaning](https://www.xotels.com/en/glossary/displacement-analysis)
