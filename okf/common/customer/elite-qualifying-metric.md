---
type: Metric
title: Elite Qualifying Metric
description: 'The qualifying currency a frequent flyer program counts to determine whether a member earns or retains elite (loyalty tier) status during a qualification period. Programs use different metrics — for example Elite Qualifying Miles/Dollars/Segments (EQM/EQD/EQS), American''s Loyalty Points, Delta''s Medallion Qualifying Dollars, or United''s Premier Qualifying Points — accrued from flying and qualifying partner activity.'
tags:
  - customer
  - active
timestamp: '2026-06-18T00:00:00Z'
id: elite-qualifying-metric
vertical: common
category: customer
conceptType: metric
status: active
abbreviation: EQM / EQD
term_ko: 우수등급 자격 지표 (EQM/EQD 등)
definition_ko: '상용고객우대 프로그램이 자격 산정 기간 동안 회원의 우수 등급(loyalty tier status) 달성·유지 여부를 판정하기 위해 집계하는 자격 통화이다. 프로그램마다 서로 다른 지표를 사용하는데, 예를 들어 Elite Qualifying Miles/Dollars/Segments(EQM/EQD/EQS), American의 Loyalty Points, Delta의 Medallion Qualification Dollars, United의 Premier Qualifying Points 등이 있으며 탑승 및 자격 대상 파트너 활동에서 적립된다.'
longDef: 'Elite qualifying metrics are deliberately separate from redeemable miles: the same activity may earn spendable award miles and, in parallel, qualifying credit toward status, but a member''s redeemable balance does not by itself confer tier status. Programs set tier thresholds (e.g., Silver/Gold/Platinum) in terms of the qualifying metric over a defined window, and may have shifted from distance- or segment-based qualification toward revenue-based metrics (dollars or points keyed to spend). Some programs now consolidate into a single metric — American''s Loyalty Points being the prominent example — counted from flights, co-branded credit card spend and partner activity. The metric is the input that drives Loyalty Tier Status.'
longDef_ko: 'Elite qualifying metric은 사용 가능한 적립 마일과 의도적으로 구분된다. 동일한 활동이 사용 가능한 보상 마일과 더불어 등급을 향한 자격 크레딧을 동시에 적립할 수 있지만, 회원의 사용 가능 잔액 자체가 등급을 부여하지는 않는다. 프로그램은 정해진 기간 동안의 자격 지표를 기준으로 등급 임계값(예: Silver/Gold/Platinum)을 설정하며, 거리·구간 기반 자격에서 매출 기반 지표(지출과 연동된 dollar 또는 point)로 전환했을 수 있다. 일부 프로그램은 이제 단일 지표로 통합하는데, American의 Loyalty Points가 대표적 예로 항공편·제휴 신용카드 지출·파트너 활동에서 집계된다. 이 지표는 Loyalty Tier Status를 결정하는 입력값이다.'
aliases:
  - Elite Qualifying Miles
  - Elite Qualifying Dollars
  - Loyalty Points
  - Medallion Qualification Dollars
  - Premier Qualifying Points
  - Qualifying Miles
  - Tier Points
providerTerms:
  - provider: American Airlines AAdvantage
    term: Loyalty Points
    context: Single consolidated qualifying metric used since 2022 to determine AAdvantage elite status.
    context_ko: 2022년부터 AAdvantage 우수 등급 판정에 사용되는 단일 통합 자격 지표.
    relationship: narrower
  - provider: Delta SkyMiles
    term: Medallion Qualification Dollars (MQD)
    context: Revenue-based qualifying metric for Delta Medallion status.
    context_ko: Delta Medallion 등급을 위한 매출 기반 자격 지표.
    relationship: narrower
  - provider: United MileagePlus
    term: Premier Qualifying Points (PQP)
    context: Spend-based qualifying metric for United Premier status.
    context_ko: United Premier 등급을 위한 지출 기반 자격 지표.
    relationship: narrower
relationships:
  - type: broader
    targetTerm: Loyalty Tier Status
  - type: related
    targetTerm: Mileage Accrual
  - type: broader
    targetTerm: Frequent Flyer Program
  - type: related
    targetTerm: Co-branded Credit Card
distinctions:
  - targetTerm: Loyalty Tier Status
    explanation: The elite qualifying metric is the input counted toward status; Loyalty Tier Status is the resulting standing (Silver/Gold/Platinum) a member attains once the threshold is met.
    explanation_ko: 'Elite qualifying metric은 등급을 향해 집계되는 입력값이고, Loyalty Tier Status는 임계값을 충족했을 때 회원이 획득하는 결과적 위상(Silver/Gold/Platinum)이다.'
  - targetTerm: Mileage Accrual
    explanation: 'Mileage accrual builds the redeemable balance spent on awards; qualifying metrics build toward earning or retaining tier status. The same trip can generate both, but they are tracked and used separately.'
    explanation_ko: 'Mileage accrual은 보상에 사용하는 적립 잔액을 쌓고, 자격 지표는 등급 달성·유지를 향해 쌓인다. 같은 여행이 둘 다 적립할 수 있지만, 별도로 추적·사용된다.'
sources:
  - org: The Points Guy
    name: 'American Airlines Elite Qualifying Miles: What EQMs are and how you earn them'
    version: ''
    section: ''
    url: 'https://thepointsguy.com/loyalty-programs/american-airlines-elite-qualifying-miles-eqm/'
    tier: secondary
  - org: AwardWallet
    name: A Complete Guide to American Airlines AAdvantage Elite Status (Elite Qualifying Dollars / Loyalty Points)
    version: ''
    section: ''
    url: 'https://awardwallet.com/blog/aa-elite-qualifying-dollar-eqd/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="18" r="10"/><path d="M24 13l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z"/><path d="M17 27l-3 14 10-5 10 5-3-14"/></svg>
---

> The qualifying currency a frequent flyer program counts to determine whether a member earns or retains elite (loyalty tier) status during a qualification period. Programs use different metrics — for example Elite Qualifying Miles/Dollars/Segments (EQM/EQD/EQS), American's Loyalty Points, Delta's Medallion Qualifying Dollars, or United's Premier Qualifying Points — accrued from flying and qualifying partner activity.

Elite qualifying metrics are deliberately separate from redeemable miles: the same activity may earn spendable award miles and, in parallel, qualifying credit toward status, but a member's redeemable balance does not by itself confer tier status. Programs set tier thresholds (e.g., Silver/Gold/Platinum) in terms of the qualifying metric over a defined window, and may have shifted from distance- or segment-based qualification toward revenue-based metrics (dollars or points keyed to spend). Some programs now consolidate into a single metric — American's Loyalty Points being the prominent example — counted from flights, co-branded credit card spend and partner activity. The metric is the input that drives Loyalty Tier Status.

**한국어 / Korean** — **우수등급 자격 지표 (EQM/EQD 등)** — 상용고객우대 프로그램이 자격 산정 기간 동안 회원의 우수 등급(loyalty tier status) 달성·유지 여부를 판정하기 위해 집계하는 자격 통화이다. 프로그램마다 서로 다른 지표를 사용하는데, 예를 들어 Elite Qualifying Miles/Dollars/Segments(EQM/EQD/EQS), American의 Loyalty Points, Delta의 Medallion Qualification Dollars, United의 Premier Qualifying Points 등이 있으며 탑승 및 자격 대상 파트너 활동에서 적립된다.

Elite qualifying metric은 사용 가능한 적립 마일과 의도적으로 구분된다. 동일한 활동이 사용 가능한 보상 마일과 더불어 등급을 향한 자격 크레딧을 동시에 적립할 수 있지만, 회원의 사용 가능 잔액 자체가 등급을 부여하지는 않는다. 프로그램은 정해진 기간 동안의 자격 지표를 기준으로 등급 임계값(예: Silver/Gold/Platinum)을 설정하며, 거리·구간 기반 자격에서 매출 기반 지표(지출과 연동된 dollar 또는 point)로 전환했을 수 있다. 일부 프로그램은 이제 단일 지표로 통합하는데, American의 Loyalty Points가 대표적 예로 항공편·제휴 신용카드 지출·파트너 활동에서 집계된다. 이 지표는 Loyalty Tier Status를 결정하는 입력값이다.

**Aliases:** `Elite Qualifying Miles`, `Elite Qualifying Dollars`, `Loyalty Points`, `Medallion Qualification Dollars`, `Premier Qualifying Points`, `Qualifying Miles`, `Tier Points`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| American Airlines AAdvantage | `Loyalty Points` | narrower | Single consolidated qualifying metric used since 2022 to determine AAdvantage elite status. |
| Delta SkyMiles | `Medallion Qualification Dollars (MQD)` | narrower | Revenue-based qualifying metric for Delta Medallion status. |
| United MileagePlus | `Premier Qualifying Points (PQP)` | narrower | Spend-based qualifying metric for United Premier status. |

# Related
- [Loyalty Tier Status](/common/customer/loyalty-tier-status.md) — broader
- [Mileage Accrual](/common/customer/mileage-accrual.md) — related
- [Frequent Flyer Program](/common/customer/frequent-flyer-program.md) — broader
- [Co-branded Credit Card](/common/customer/co-branded-credit-card.md) — related

# Distinctions
- **Elite Qualifying Metric** vs [Loyalty Tier Status](/common/customer/loyalty-tier-status.md) — The elite qualifying metric is the input counted toward status; Loyalty Tier Status is the resulting standing (Silver/Gold/Platinum) a member attains once the threshold is met.
- **Elite Qualifying Metric** vs [Mileage Accrual](/common/customer/mileage-accrual.md) — Mileage accrual builds the redeemable balance spent on awards; qualifying metrics build toward earning or retaining tier status. The same trip can generate both, but they are tracked and used separately.

# Citations
[1] [The Points Guy — American Airlines Elite Qualifying Miles: What EQMs are and how you earn them](https://thepointsguy.com/loyalty-programs/american-airlines-elite-qualifying-miles-eqm/)
[2] [AwardWallet — A Complete Guide to American Airlines AAdvantage Elite Status (Elite Qualifying Dollars / Loyalty Points)](https://awardwallet.com/blog/aa-elite-qualifying-dollar-eqd/)
