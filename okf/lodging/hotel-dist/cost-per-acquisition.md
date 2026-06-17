---
type: Metric
title: Cost Per Acquisition (CPA)
description: 'In hotel metasearch, Cost Per Acquisition (CPA) is a performance billing model where the advertiser (hotel or OTA) pays only when a referral results in a completed booking or stay — often expressed as a commission per stay — rather than per click. It contrasts with cost-per-click (CPC), shifting risk to the channel since there is no charge for clicks that do not convert.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: cost-per-acquisition
vertical: lodging
category: hotel-dist
conceptType: metric
status: active
abbreviation: CPA
term_ko: '획득당 비용 (Cost Per Acquisition, CPA)'
definition_ko: '호텔 메타서치에서 획득당 비용(CPA)은 광고주(호텔 또는 OTA)가 클릭이 아니라 추천(referral)이 완료된 예약이나 투숙으로 이어질 때만 비용을 지불하는 성과 과금 모델로, 흔히 ''투숙당 커미션(commission per stay)''으로 표현된다. 이는 클릭당 비용(CPC)과 대비되며, 전환되지 않은 클릭에는 과금하지 않으므로 위험이 채널 쪽으로 이동한다.'
longDef: 'CPA (and its variants commission-per-conversion and commission-per-stay) became a dominant metasearch monetization model because it requires no up-front spend: the advertiser pays an agreed commission only on a booking that converts (or on a stay that is actually consumed, with cancellations netted out in ''net CPA''). Google Hotel Ads offered commission-per-stay/per-conversion (CPA) options, Trivago and Tripadvisor offer net commission-per-stay models, and Skyscanner has supported similar models. Regulatory/commercial shifts are notable: Google announced it would phase out its commission-based (CPA) bidding for Hotel Ads (closing to new campaigns in 2024 and sunsetting through 2025), pushing advertisers back toward CPC and value-based bidding — a meaningful change for hotel metasearch strategy. CPA differs from CPC in where the conversion risk sits: CPC charges per click regardless of outcome, while CPA charges only on the successful acquisition.'
longDef_ko: 'CPA(및 그 변형인 전환당 커미션, 투숙당 커미션)는 선지출이 필요 없어 메타서치의 지배적 수익화 모델이 되었다. 광고주는 전환된 예약에 대해서만(또는 실제 소비된 투숙에 대해서만, 취소를 차감한 ''net CPA'') 약정 커미션을 지불한다. Google Hotel Ads는 투숙당/전환당 커미션(CPA) 옵션을 제공했고, Trivago와 Tripadvisor는 net 투숙당 커미션 모델을, Skyscanner도 유사 모델을 지원해 왔다. 규제/상업적 변화가 주목할 만하다. Google은 Hotel Ads의 커미션 기반(CPA) 입찰을 단계적으로 폐지한다고 발표했고(2024년 신규 캠페인 종료, 2025년에 걸쳐 sunset), 이는 광고주를 CPC 및 가치 기반 입찰로 되돌려 호텔 메타서치 전략에 중대한 변화를 가져왔다. CPA는 전환 위험의 소재에서 CPC와 다르다. CPC는 결과와 무관하게 클릭당 과금하고, CPA는 성공적 획득에만 과금한다.'
aliases:
  - CPA
  - Commission Per Stay
  - CPS
  - Pay Per Stay
  - Cost Per Acquisition (metasearch)
providerTerms:
  - provider: Google Hotel Ads
    term: Commissions (per Stay) / (per Conversion)
    context: Google's CPA-style metasearch billing where hotels paid a commission only on booked/consumed stays; phased out for Hotel Ads from 2024 into 2025.
    context_ko: 예약/소비된 투숙에만 커미션을 지불하는 Google의 CPA형 메타서치 과금. 2024~2025년에 걸쳐 Hotel Ads에서 단계적 폐지.
    relationship: narrower
  - provider: Tripadvisor
    term: Net commission per stay (CPA Meta Consumption)
    context: 'Tripadvisor metasearch model charging a net commission only on completed stays, complementing its CPC option.'
    context_ko: '완료된 투숙에만 net 커미션을 부과하는 Tripadvisor 메타서치 모델로, CPC 옵션을 보완한다.'
    relationship: narrower
relationships:
  - type: related
    targetTerm: Metasearch
  - type: related
    targetTerm: Direct Booking
  - type: related
    targetTerm: Distribution Cost
  - type: related
    targetTerm: Commissionable Rate
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: Distribution Cost
    explanation: Distribution cost is the total acquisition cost across all channels; CPA is one specific metasearch billing model (pay-per-stay/conversion) that contributes to — and is a way of controlling — that cost.
    explanation_ko: '유통 비용은 전 채널에 걸친 총 획득 비용이고, CPA는 그 비용에 기여하면서 이를 통제하는 한 가지 구체적 메타서치 과금 모델(투숙/전환당 지불)이다.'
  - targetTerm: Metasearch
    explanation: Metasearch is the channel that aggregates and compares rates; CPA is one of the monetization/billing models (versus CPC) by which that metasearch channel charges advertisers.
    explanation_ko: 'Metasearch는 요금을 집약·비교하는 채널이고, CPA는 그 메타서치 채널이 광고주에게 과금하는 수익화/과금 모델(CPC와 대비) 중 하나다.'
sources:
  - org: Mirai
    name: What is Google commission per stay (CPS) and how does it work?
    version: ''
    section: ''
    url: 'https://www.mirai.com/blog/what-is-google-hotel-ads-commission-program-ghacp-and-how-does-it-work/'
  - org: Revenue Hub
    name: This is how Tripadvisor net commission per stay model works
    version: ''
    section: ''
    url: 'https://revenue-hub.com/this-is-how-tripadvisor-net-commission-per-stay-model-works/'
  - org: Triptease
    name: 'CPC or CPA on Metasearch: Which one''s right for you?'
    version: ''
    section: ''
    url: 'https://www.triptease.com/resources/cpc-or-cpa-on-metasearch'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14a4 4 0 014-4h24a4 4 0 014 4v16a4 4 0 01-4 4H22l-8 7v-7h-2a4 4 0 01-4-4z"/><path d="M19 24l3 3 8-9"/><circle cx="33" cy="34" r="1" fill="currentColor" stroke="none" opacity="0"/></svg>
---

> In hotel metasearch, Cost Per Acquisition (CPA) is a performance billing model where the advertiser (hotel or OTA) pays only when a referral results in a completed booking or stay — often expressed as a commission per stay — rather than per click. It contrasts with cost-per-click (CPC), shifting risk to the channel since there is no charge for clicks that do not convert.

CPA (and its variants commission-per-conversion and commission-per-stay) became a dominant metasearch monetization model because it requires no up-front spend: the advertiser pays an agreed commission only on a booking that converts (or on a stay that is actually consumed, with cancellations netted out in 'net CPA'). Google Hotel Ads offered commission-per-stay/per-conversion (CPA) options, Trivago and Tripadvisor offer net commission-per-stay models, and Skyscanner has supported similar models. Regulatory/commercial shifts are notable: Google announced it would phase out its commission-based (CPA) bidding for Hotel Ads (closing to new campaigns in 2024 and sunsetting through 2025), pushing advertisers back toward CPC and value-based bidding — a meaningful change for hotel metasearch strategy. CPA differs from CPC in where the conversion risk sits: CPC charges per click regardless of outcome, while CPA charges only on the successful acquisition.

**한국어 / Korean** — **획득당 비용 (Cost Per Acquisition, CPA)** — 호텔 메타서치에서 획득당 비용(CPA)은 광고주(호텔 또는 OTA)가 클릭이 아니라 추천(referral)이 완료된 예약이나 투숙으로 이어질 때만 비용을 지불하는 성과 과금 모델로, 흔히 '투숙당 커미션(commission per stay)'으로 표현된다. 이는 클릭당 비용(CPC)과 대비되며, 전환되지 않은 클릭에는 과금하지 않으므로 위험이 채널 쪽으로 이동한다.

CPA(및 그 변형인 전환당 커미션, 투숙당 커미션)는 선지출이 필요 없어 메타서치의 지배적 수익화 모델이 되었다. 광고주는 전환된 예약에 대해서만(또는 실제 소비된 투숙에 대해서만, 취소를 차감한 'net CPA') 약정 커미션을 지불한다. Google Hotel Ads는 투숙당/전환당 커미션(CPA) 옵션을 제공했고, Trivago와 Tripadvisor는 net 투숙당 커미션 모델을, Skyscanner도 유사 모델을 지원해 왔다. 규제/상업적 변화가 주목할 만하다. Google은 Hotel Ads의 커미션 기반(CPA) 입찰을 단계적으로 폐지한다고 발표했고(2024년 신규 캠페인 종료, 2025년에 걸쳐 sunset), 이는 광고주를 CPC 및 가치 기반 입찰로 되돌려 호텔 메타서치 전략에 중대한 변화를 가져왔다. CPA는 전환 위험의 소재에서 CPC와 다르다. CPC는 결과와 무관하게 클릭당 과금하고, CPA는 성공적 획득에만 과금한다.

**Aliases:** `CPA`, `Commission Per Stay`, `CPS`, `Pay Per Stay`, `Cost Per Acquisition (metasearch)`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Google Hotel Ads | `Commissions (per Stay) / (per Conversion)` | narrower | Google's CPA-style metasearch billing where hotels paid a commission only on booked/consumed stays; phased out for Hotel Ads from 2024 into 2025. |
| Tripadvisor | `Net commission per stay (CPA Meta Consumption)` | narrower | Tripadvisor metasearch model charging a net commission only on completed stays, complementing its CPC option. |

# Related
- [Metasearch](/common/standards/metasearch.md) — related
- [Direct Booking](/lodging/hotel-dist/direct-booking.md) — related
- [Distribution Cost](/lodging/hotel-dist/distribution-cost.md) — related
- [Commissionable Rate](/lodging/hotel-dist/commissionable-rate.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **Cost Per Acquisition (CPA)** vs [Distribution Cost](/lodging/hotel-dist/distribution-cost.md) — Distribution cost is the total acquisition cost across all channels; CPA is one specific metasearch billing model (pay-per-stay/conversion) that contributes to — and is a way of controlling — that cost.
- **Cost Per Acquisition (CPA)** vs [Metasearch](/common/standards/metasearch.md) — Metasearch is the channel that aggregates and compares rates; CPA is one of the monetization/billing models (versus CPC) by which that metasearch channel charges advertisers.

# Citations
[1] [Mirai — What is Google commission per stay (CPS) and how does it work?](https://www.mirai.com/blog/what-is-google-hotel-ads-commission-program-ghacp-and-how-does-it-work/)
[2] [Revenue Hub — This is how Tripadvisor net commission per stay model works](https://revenue-hub.com/this-is-how-tripadvisor-net-commission-per-stay-model-works/)
[3] [Triptease — CPC or CPA on Metasearch: Which one's right for you?](https://www.triptease.com/resources/cpc-or-cpa-on-metasearch)
