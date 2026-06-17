---
type: Metric
title: RFM Segmentation
description: 'A quantitative customer-segmentation method that scores each traveler on three behavioral dimensions — Recency (how recently they transacted), Frequency (how often), and Monetary value (how much they spend) — and groups them by the combined score. Airlines and hotels use RFM to target offers and to approximate customer lifetime value.'
tags:
  - customer
  - active
timestamp: '2026-06-17T00:00:00Z'
id: rfm-segmentation
vertical: common
category: customer
conceptType: metric
status: active
abbreviation: RFM
term_ko: RFM 세분화 (최근성-빈도-금액)
definition_ko: '각 여행자를 세 가지 행동 차원, 즉 최근성(Recency, 얼마나 최근에 거래했는가), 빈도(Frequency, 얼마나 자주), 금액(Monetary, 얼마나 지출하는가)으로 점수화하고 합산 점수로 묶는 정량적 고객 세분화 기법이다. 항공사와 호텔은 RFM을 활용해 제안을 타깃팅하고 고객생애가치(CLV)를 근사한다.'
longDef: 'Each customer is assigned a score (often 1-5) on Recency, Frequency, and Monetary value, and the combination defines segments such as champions, loyal, at-risk, or lapsed travelers. Because the inputs are simple transactional facts, RFM is computationally cheap yet effective for prioritizing marketing spend, designing retention campaigns, and estimating the value of travelers who purchase ancillary services. RFM is most powerful when run over a unified profile such as a Single Customer View, and its segments are frequently activated through a Customer Data Platform. It is a behavioral analytics technique, distinct from Loyalty Tier Status, which is a program-defined standing rather than an analytic score.'
longDef_ko: '각 고객에게 최근성·빈도·금액에 대해 점수(흔히 1~5)를 부여하고, 그 조합으로 챔피언, 충성, 이탈 위험, 휴면 여행자 같은 세그먼트를 정의한다. 입력값이 단순한 거래 사실이므로 RFM은 계산 비용이 낮으면서도, 마케팅 예산 우선순위 결정, 유지(retention) 캠페인 설계, 부가 서비스를 구매하는 여행자의 가치 추정에 효과적이다. RFM은 Single Customer View 같은 통합 프로필 위에서 수행될 때 가장 강력하며, 그 세그먼트는 흔히 Customer Data Platform을 통해 활성화된다. 이는 행동 분석 기법으로, 분석 점수가 아니라 프로그램이 정의하는 위상인 Loyalty Tier Status와는 구별된다.'
aliases:
  - RFM
  - RFM Analysis
  - RFM Model
  - Recency Frequency Monetary
relationships:
  - type: related
    targetTerm: Single Customer View
  - type: related
    targetTerm: Customer Data Platform
  - type: related
    targetTerm: Customer Profile
distinctions:
  - targetTerm: Loyalty Tier Status
    explanation: 'Loyalty Tier Status is a program-defined standing a member earns through qualifying activity; RFM Segmentation is an internal analytic score a brand computes to group travelers by behavior, invisible to the customer.'
    explanation_ko: 'Loyalty Tier Status는 회원이 자격 산정 활동으로 획득하는 프로그램 정의 위상이고, RFM Segmentation은 브랜드가 여행자를 행동별로 묶기 위해 계산하는 내부 분석 점수로 고객에게는 보이지 않는다.'
sources:
  - name: 'RFM Segmentation, Analysis & Model Marketing'
    org: Marketing analytics reference
    version: ''
    section: ''
    url: ''
  - name: Estimating travellers' value when purchasing auxiliary services in the airline industry based on the RFM model
    org: Academic research
    version: ''
    section: ''
    url: ''
  - name: What is RFM Analysis for Customer Segmentation & How Does it Work?
    org: Marketing analytics reference
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 41V7"/><path d="M7 41h34"/><rect x="13" y="28" width="6" height="9"/><rect x="23" y="20" width="6" height="17"/><rect x="33" y="12" width="6" height="25"/></svg>
---

> A quantitative customer-segmentation method that scores each traveler on three behavioral dimensions — Recency (how recently they transacted), Frequency (how often), and Monetary value (how much they spend) — and groups them by the combined score. Airlines and hotels use RFM to target offers and to approximate customer lifetime value.

Each customer is assigned a score (often 1-5) on Recency, Frequency, and Monetary value, and the combination defines segments such as champions, loyal, at-risk, or lapsed travelers. Because the inputs are simple transactional facts, RFM is computationally cheap yet effective for prioritizing marketing spend, designing retention campaigns, and estimating the value of travelers who purchase ancillary services. RFM is most powerful when run over a unified profile such as a Single Customer View, and its segments are frequently activated through a Customer Data Platform. It is a behavioral analytics technique, distinct from Loyalty Tier Status, which is a program-defined standing rather than an analytic score.

**한국어 / Korean** — **RFM 세분화 (최근성-빈도-금액)** — 각 여행자를 세 가지 행동 차원, 즉 최근성(Recency, 얼마나 최근에 거래했는가), 빈도(Frequency, 얼마나 자주), 금액(Monetary, 얼마나 지출하는가)으로 점수화하고 합산 점수로 묶는 정량적 고객 세분화 기법이다. 항공사와 호텔은 RFM을 활용해 제안을 타깃팅하고 고객생애가치(CLV)를 근사한다.

각 고객에게 최근성·빈도·금액에 대해 점수(흔히 1~5)를 부여하고, 그 조합으로 챔피언, 충성, 이탈 위험, 휴면 여행자 같은 세그먼트를 정의한다. 입력값이 단순한 거래 사실이므로 RFM은 계산 비용이 낮으면서도, 마케팅 예산 우선순위 결정, 유지(retention) 캠페인 설계, 부가 서비스를 구매하는 여행자의 가치 추정에 효과적이다. RFM은 Single Customer View 같은 통합 프로필 위에서 수행될 때 가장 강력하며, 그 세그먼트는 흔히 Customer Data Platform을 통해 활성화된다. 이는 행동 분석 기법으로, 분석 점수가 아니라 프로그램이 정의하는 위상인 Loyalty Tier Status와는 구별된다.

**Aliases:** `RFM`, `RFM Analysis`, `RFM Model`, `Recency Frequency Monetary`

# Related
- [Single Customer View](/common/customer/single-customer-view.md) — related
- [Customer Data Platform](/common/customer/customer-data-platform.md) — related
- [Customer Profile](/common/customer/customer-profile.md) — related

# Distinctions
- **RFM Segmentation** vs [Loyalty Tier Status](/common/customer/loyalty-tier-status.md) — Loyalty Tier Status is a program-defined standing a member earns through qualifying activity; RFM Segmentation is an internal analytic score a brand computes to group travelers by behavior, invisible to the customer.

# Citations
[1] Marketing analytics reference — RFM Segmentation, Analysis & Model Marketing
[2] Academic research — Estimating travellers' value when purchasing auxiliary services in the airline industry based on the RFM model
[3] Marketing analytics reference — What is RFM Analysis for Customer Segmentation & How Does it Work?
