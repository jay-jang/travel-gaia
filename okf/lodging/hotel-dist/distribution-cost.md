---
type: Metric
title: Distribution Cost
description: 'Distribution cost is the total cost a hotel incurs to acquire a booking through a given channel, expressed as an amount or as a percentage of room revenue. It includes OTA/agency commissions, GDS and switch fees, channel-manager and booking-engine fees, payment-processing and merchant fees, and channel marketing, and underpins channel-profitability comparison.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: distribution-cost
vertical: lodging
category: hotel-dist
conceptType: metric
status: active
term_ko: 유통 비용 (Distribution Cost)
definition_ko: '유통 비용은 특정 채널을 통해 예약을 획득하기 위해 호텔이 부담하는 총비용으로, 금액 또는 객실 매출 대비 비율로 표현한다. OTA/대리점 수수료, GDS·스위치 수수료, 채널 매니저·booking engine 수수료, 결제 처리·머천트 수수료, 채널 마케팅을 포함하며, 채널 수익성 비교의 기반이 된다.'
longDef: 'Distribution cost reframes channel choice around net contribution rather than headline rate. Indirect channels carry visible commissions — OTA commissions commonly 15–25% — but the ''true'' or net cost also includes harder-to-see items: preferred-placement and visibility fees, higher cancellation/no-show rates that reduce realized revenue, and loss of guest data and lifetime value; effective OTA cost can therefore run materially above the stated commission. The direct channel substitutes commission with acquisition costs (payment processing, booking-engine and channel-manager fees, paid search/metasearch, parity monitoring), which can be low when efficient. Comparing distribution cost per channel (and net ADR/RevPAR after distribution cost) drives channel-mix optimization. Related industry metrics include cost of customer acquisition and net revenue per available room after distribution cost.'
longDef_ko: '유통 비용은 채널 선택을 표면 요금이 아닌 순기여(net contribution) 관점에서 재구성한다. 간접 채널에는 눈에 보이는 수수료(흔히 OTA 수수료 15~25%)가 따르지만, ''실질'' 또는 net 비용에는 잘 보이지 않는 항목도 포함된다. 우선 노출·가시성 수수료, 실현 매출을 낮추는 더 높은 취소·노쇼율, 고객 데이터와 생애가치(LTV) 상실 등이다. 따라서 OTA의 실효 비용은 명목 수수료를 상당히 웃돌 수 있다. 직접 채널은 수수료를 획득 비용(결제 처리, booking engine·채널 매니저 수수료, 유료검색·메타서치, parity 모니터링)으로 대체하며, 효율적으로 운영되면 낮을 수 있다. 채널별 유통 비용(및 유통 비용 차감 후 net ADR/RevPAR)을 비교하면 채널 믹스 최적화가 가능하다. 관련 산업 지표로 고객 획득 비용과 유통 비용 차감 후 가용 객실당 순매출이 있다.'
aliases:
  - Cost of Distribution
  - Net Cost of Distribution
  - Channel Cost
  - Customer Acquisition Cost
relationships:
  - type: related
    targetTerm: Commissionable Rate
  - type: related
    targetTerm: Net Rate
  - type: related
    targetTerm: Direct Booking
  - type: related
    targetTerm: OTA (Online Travel Agency)
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: GDS
distinctions:
  - targetTerm: Commissionable Rate
    explanation: A commissionable rate is the specific rate type on which a fixed agency commission is paid; distribution cost is the broader total-cost metric aggregating commissions plus all other channel fees and indirect costs.
    explanation_ko: 'Commissionable rate는 고정 대리점 수수료가 지급되는 특정 요금 유형이고, 유통 비용은 수수료에 더해 모든 기타 채널 수수료와 간접 비용까지 합산한 더 넓은 총비용 지표다.'
sources:
  - org: Cloudbeds
    name: A Guide to OTA Commission Rates
    version: ''
    section: ''
    url: 'https://www.cloudbeds.com/online-travel-agencies/commissions/'
  - org: Hospitality Net
    name: The independent hotelier's playbook for reducing OTA commission
    version: ''
    section: ''
    url: 'https://www.hospitalitynet.org/explainer/4132193/the-independent-hoteliers-playbook-for-reducing-ota-commission'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="16"/><path d="M28 18c-1.5-2-9-2.5-9 1.5 0 4 9 2.5 9 6.5 0 4-7.5 3.5-9 1.5"/><line x1="24" y1="13" x2="24" y2="16"/><line x1="24" y1="32" x2="24" y2="35"/></svg>
---

> Distribution cost is the total cost a hotel incurs to acquire a booking through a given channel, expressed as an amount or as a percentage of room revenue. It includes OTA/agency commissions, GDS and switch fees, channel-manager and booking-engine fees, payment-processing and merchant fees, and channel marketing, and underpins channel-profitability comparison.

Distribution cost reframes channel choice around net contribution rather than headline rate. Indirect channels carry visible commissions — OTA commissions commonly 15–25% — but the 'true' or net cost also includes harder-to-see items: preferred-placement and visibility fees, higher cancellation/no-show rates that reduce realized revenue, and loss of guest data and lifetime value; effective OTA cost can therefore run materially above the stated commission. The direct channel substitutes commission with acquisition costs (payment processing, booking-engine and channel-manager fees, paid search/metasearch, parity monitoring), which can be low when efficient. Comparing distribution cost per channel (and net ADR/RevPAR after distribution cost) drives channel-mix optimization. Related industry metrics include cost of customer acquisition and net revenue per available room after distribution cost.

**한국어 / Korean** — **유통 비용 (Distribution Cost)** — 유통 비용은 특정 채널을 통해 예약을 획득하기 위해 호텔이 부담하는 총비용으로, 금액 또는 객실 매출 대비 비율로 표현한다. OTA/대리점 수수료, GDS·스위치 수수료, 채널 매니저·booking engine 수수료, 결제 처리·머천트 수수료, 채널 마케팅을 포함하며, 채널 수익성 비교의 기반이 된다.

유통 비용은 채널 선택을 표면 요금이 아닌 순기여(net contribution) 관점에서 재구성한다. 간접 채널에는 눈에 보이는 수수료(흔히 OTA 수수료 15~25%)가 따르지만, '실질' 또는 net 비용에는 잘 보이지 않는 항목도 포함된다. 우선 노출·가시성 수수료, 실현 매출을 낮추는 더 높은 취소·노쇼율, 고객 데이터와 생애가치(LTV) 상실 등이다. 따라서 OTA의 실효 비용은 명목 수수료를 상당히 웃돌 수 있다. 직접 채널은 수수료를 획득 비용(결제 처리, booking engine·채널 매니저 수수료, 유료검색·메타서치, parity 모니터링)으로 대체하며, 효율적으로 운영되면 낮을 수 있다. 채널별 유통 비용(및 유통 비용 차감 후 net ADR/RevPAR)을 비교하면 채널 믹스 최적화가 가능하다. 관련 산업 지표로 고객 획득 비용과 유통 비용 차감 후 가용 객실당 순매출이 있다.

**Aliases:** `Cost of Distribution`, `Net Cost of Distribution`, `Channel Cost`, `Customer Acquisition Cost`

# Related
- [Commissionable Rate](/lodging/hotel-dist/commissionable-rate.md) — related
- [Net Rate](/lodging/hotel-dist/net-rate.md) — related
- [Direct Booking](/lodging/hotel-dist/direct-booking.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [GDS](/common/standards/gds.md) — related

# Distinctions
- **Distribution Cost** vs [Commissionable Rate](/lodging/hotel-dist/commissionable-rate.md) — A commissionable rate is the specific rate type on which a fixed agency commission is paid; distribution cost is the broader total-cost metric aggregating commissions plus all other channel fees and indirect costs.

# Citations
[1] [Cloudbeds — A Guide to OTA Commission Rates](https://www.cloudbeds.com/online-travel-agencies/commissions/)
[2] [Hospitality Net — The independent hotelier's playbook for reducing OTA commission](https://www.hospitalitynet.org/explainer/4132193/the-independent-hoteliers-playbook-for-reducing-ota-commission)
