---
type: Metric
title: Revenue Generation Index
description: 'A hotel benchmarking metric published by STR (CoStar) that measures a property''s RevPAR performance relative to its self-defined competitive set (comp set), expressed as an index where 100 represents parity. An RGI above 100 indicates that the property is generating a higher RevPAR per available room than its competitive set average; below 100 indicates underperformance.'
tags:
  - hotel-rate
  - active
  - STR
timestamp: '2026-07-17T00:00:00Z'
id: revenue-generation-index
vertical: lodging
category: hotel-rate
conceptType: metric
status: active
abbreviation: RGI
term_ko: '수익 창출 지수(RGI, Revenue Generation Index)'
definition_ko: 'STR(CoStar)이 발표하는 호텔 벤치마킹 지표로, 숙소의 RevPAR 성과를 자체 설정한 경쟁 군(comp set) 대비로 측정하며, 100을 동등 수준으로 표현하는 지수다. RGI가 100을 초과하면 경쟁 군 평균보다 높은 RevPAR을 창출하는 것이고, 100 미만이면 저조한 성과를 의미한다.'
longDef: 'RGI = (Hotel RevPAR / Competitive Set RevPAR) × 100. RGI is part of STR''s classic "three-index" benchmarking suite, alongside the Market Penetration Index (MPI, occupancy-based) and the Average Rate Index (ARI, ADR-based). Together, MPI × ARI / 100 = RGI, so a property that over-indexes on rate but under-indexes on occupancy may still achieve revenue parity. RGI is reported in the STR STAR (Supply, Trends, Analysis, and Report) report, which most branded and independent hotels subscribe to in order to compare their performance against hand-selected competitors. A property''s "fair share" of RevPAR is represented by an RGI of 100; outperforming the market is any reading above that threshold.'
longDef_ko: 'RGI = (호텔 RevPAR / 경쟁 군 RevPAR) × 100. RGI는 STR의 고전적인 "3대 지수" 벤치마킹 체계의 일부로, 시장 점유 지수(MPI, 객실 점유율 기반) 및 평균 요금 지수(ARI, ADR 기반)와 함께 사용된다. MPI × ARI / 100 = RGI이므로, 요금 지수가 높지만 점유율 지수가 낮은 숙소도 수익 동등 수준을 달성할 수 있다. RGI는 대부분의 브랜드 및 독립 호텔이 자체 선정한 경쟁사 대비 성과 비교를 위해 구독하는 STR STAR 리포트(공급·추세·분석·보고서)에서 제공된다. RGI 100은 RevPAR 측면에서 "공정 점유율(fair share)"을 의미하며, 100 초과는 시장 대비 아웃퍼폼을 나타낸다.'
aliases:
  - RevPAR Index
  - RGI Index
relationships:
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: Competitive Set
distinctions:
  - targetTerm: RevPAR
    explanation: 'RevPAR is an absolute measure of a property''s own revenue per available room; RGI is a relative index that expresses how that RevPAR compares to a peer competitive set — RGI contextualize RevPAR performance.'
    explanation_ko: 'RevPAR은 숙소 자체의 가용 객실당 매출을 나타내는 절대 지표이고, RGI는 그 RevPAR을 동료 경쟁 군과 비교하는 상대 지수로, RevPAR 성과에 맥락을 부여한다.'
  - targetTerm: Competitive Set
    explanation: 'A competitive set (comp set) is the hand-selected peer group a hotel benchmarks against; RGI uses that same comp set as the denominator to produce a RevPAR index — the comp set definition directly determines whether the RGI reading is meaningful.'
    explanation_ko: '경쟁 군(comp set)은 호텔이 벤치마킹에 사용하기 위해 직접 선정한 경쟁 그룹이고, RGI는 그 경쟁 군을 분모로 삼아 RevPAR 지수를 도출한다. 따라서 경쟁 군 정의가 RGI 수치의 의미 있는 해석을 직접 결정한다.'
sources:
  - name: STR STAR Report Methodology and Metrics Guide
    org: STR (CoStar Group)
    version: '2024'
    section: ''
    url: 'https://str.com/solutions/benchmarking'
    tier: association
  - name: 'The STAR Report: Understanding Benchmarking Metrics'
    org: STR (CoStar Group)
    version: ''
    section: ''
    url: 'https://str.com/blog/understanding-the-star-report'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 40V8"/><path d="M6 40h36"/><rect x="12" y="20" width="7" height="20"/><rect x="23" y="14" width="7" height="26"/><rect x="34" y="26" width="7" height="14"/><line x1="6" y1="20" x2="44" y2="20" stroke-dasharray="3,2"/><path d="M38 11l4 4-4 4"/></svg>
---

> A hotel benchmarking metric published by STR (CoStar) that measures a property's RevPAR performance relative to its self-defined competitive set (comp set), expressed as an index where 100 represents parity. An RGI above 100 indicates that the property is generating a higher RevPAR per available room than its competitive set average; below 100 indicates underperformance.

RGI = (Hotel RevPAR / Competitive Set RevPAR) × 100. RGI is part of STR's classic "three-index" benchmarking suite, alongside the Market Penetration Index (MPI, occupancy-based) and the Average Rate Index (ARI, ADR-based). Together, MPI × ARI / 100 = RGI, so a property that over-indexes on rate but under-indexes on occupancy may still achieve revenue parity. RGI is reported in the STR STAR (Supply, Trends, Analysis, and Report) report, which most branded and independent hotels subscribe to in order to compare their performance against hand-selected competitors. A property's "fair share" of RevPAR is represented by an RGI of 100; outperforming the market is any reading above that threshold.

**한국어 / Korean** — **수익 창출 지수(RGI, Revenue Generation Index)** — STR(CoStar)이 발표하는 호텔 벤치마킹 지표로, 숙소의 RevPAR 성과를 자체 설정한 경쟁 군(comp set) 대비로 측정하며, 100을 동등 수준으로 표현하는 지수다. RGI가 100을 초과하면 경쟁 군 평균보다 높은 RevPAR을 창출하는 것이고, 100 미만이면 저조한 성과를 의미한다.

RGI = (호텔 RevPAR / 경쟁 군 RevPAR) × 100. RGI는 STR의 고전적인 "3대 지수" 벤치마킹 체계의 일부로, 시장 점유 지수(MPI, 객실 점유율 기반) 및 평균 요금 지수(ARI, ADR 기반)와 함께 사용된다. MPI × ARI / 100 = RGI이므로, 요금 지수가 높지만 점유율 지수가 낮은 숙소도 수익 동등 수준을 달성할 수 있다. RGI는 대부분의 브랜드 및 독립 호텔이 자체 선정한 경쟁사 대비 성과 비교를 위해 구독하는 STR STAR 리포트에서 제공된다. RGI 100은 RevPAR 측면에서 "공정 점유율(fair share)"을 의미하며, 100 초과는 시장 대비 아웃퍼폼을 나타낸다.

**Aliases:** `RevPAR Index`, `RGI Index`

# Related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related
- [Competitive Set](/lodging/hotel-rate/competitive-set.md) — related

# Distinctions
- **Revenue Generation Index** vs [RevPAR](/lodging/hotel-rate/revpar.md) — RevPAR is an absolute measure of a property's own revenue per available room; RGI is a relative index that expresses how that RevPAR compares to a peer competitive set — RGI contextualizes RevPAR performance.
- **Revenue Generation Index** vs [Competitive Set](/lodging/hotel-rate/competitive-set.md) — A competitive set (comp set) is the hand-selected peer group a hotel benchmarks against; RGI uses that same comp set as the denominator to produce a RevPAR index — the comp set definition directly determines whether the RGI reading is meaningful.

# Citations
[1] [STR (CoStar Group) — STR STAR Report Methodology and Metrics Guide](https://str.com/solutions/benchmarking)
[2] [STR (CoStar Group) — The STAR Report: Understanding Benchmarking Metrics](https://str.com/blog/understanding-the-star-report)
