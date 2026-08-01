---
type: Metric
title: STR STAR Report
description: 'The Smith Travel Accommodations Report (STAR Report), produced by STR (a CoStar Group company, originally Smith Travel Research), is the travel industry''s standard hotel-benchmarking tool. It compares a subject property''s Occupancy, ADR, and RevPAR against a self-defined Competitive Set and derives three index scores — Market Penetration Index (MPI), Average Rate Index (ARI), and Revenue Generation Index (RGI) — showing whether the hotel is capturing more or less than its fair market share.'
tags:
  - hotel-rate
  - active
  - STR
timestamp: '2026-08-01T00:00:00Z'
id: str-star-report
vertical: lodging
category: hotel-rate
conceptType: metric
status: active
abbreviation: STAR Report
term_ko: STR STAR 보고서
definition_ko: 'STR(CoStar Group 소속, 구 Smith Travel Research)이 제공하는 STAR 보고서(Smith Travel Accommodations Report)는 호텔 업계 표준 벤치마킹 도구다. 대상 호텔의 객실 점유율·ADR·RevPAR를 자체 정의한 경쟁 세트(CompSet)와 비교하여 MPI(Market Penetration Index)·ARI(Average Rate Index)·RGI(Revenue Generation Index) 세 지수를 산출하고, 시장 공정 점유율 대비 초과 또는 미달 여부를 보여준다.'
longDef: 'A STAR Report delivers daily, weekly, monthly, quarterly, and annual views of a property''s performance relative to its Competitive Set. Three index scores drive strategy: (1) Market Penetration Index (MPI) = (subject occupancy ÷ compset occupancy) × 100, measuring occupancy share; (2) Average Rate Index (ARI) = (subject ADR ÷ compset ADR) × 100, measuring ADR competitiveness; (3) Revenue Generation Index (RGI) = (subject RevPAR ÷ compset RevPAR) × 100, measuring overall RevPAR share. An index of 100 indicates fair share; above 100 means outperforming the set. The report also shows absolute KPIs for the compset, pipeline data, and time-series trends. STAR data is licensed from STR/CoStar and requires a subscription; revenue-management and business-intelligence platforms commonly ingest it via data feed. It is a key input for owner reporting, bank covenants, hotel management agreement (HMA) performance tests, and investor diligence.'
longDef_ko: 'STAR 보고서는 일별·주별·월별·분기별·연별로 호텔 실적과 CompSet을 비교한다. 세 가지 지수가 전략을 이끈다. (1) MPI = (대상 점유율 ÷ CompSet 점유율) × 100으로 점유율을 측정하고, (2) ARI = (대상 ADR ÷ CompSet ADR) × 100으로 요금 경쟁력을 측정하며, (3) RGI = (대상 RevPAR ÷ CompSet RevPAR) × 100으로 총수익 점유율을 측정한다. 지수 100은 공정 점유율, 100 이상은 CompSet 초과 실적이다. 보고서는 CompSet의 절대 KPI, 파이프라인 데이터, 추세 분석도 제공한다. STAR 데이터는 STR/CoStar에서 라이선스 구독이 필요하며, 수익 관리·비즈니스 인텔리전스 플랫폼이 데이터 피드로 수집한다. 오너 보고, 대출 약정, HMA 실적 테스트, 투자자 실사의 핵심 자료다.'
standardBody: STR (CoStar Group)
aliases:
  - STAR Report
  - Smith Travel Accommodations Report
  - STR Benchmark
  - Hotel STAR Report
  - STR Report
providerTerms:
  - provider: STR / CoStar Group
    term: STAR Report (Smith Travel Accommodations Report)
    context: 'STR provides the STAR Report as its core hotel benchmarking product, available through the CoStar platform and as a data feed to revenue-management systems.'
    context_ko: 'STR는 STAR 보고서를 핵심 호텔 벤치마킹 상품으로 제공하며, CoStar 플랫폼과 수익 관리 시스템용 데이터 피드를 통해 이용 가능하다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Competitive Set
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Revenue Generation Index
distinctions:
  - targetTerm: Revenue Generation Index
    explanation: 'The Revenue Generation Index (RGI) is one of the three index scores within a STAR Report (alongside MPI and ARI); the STAR Report is the full benchmarking product that contains and contextualises all three indices together with absolute KPI data and trend analysis.'
    explanation_ko: 'RGI는 STAR 보고서 내 세 가지 지수(MPI, ARI와 함께) 중 하나이고, STAR 보고서는 세 지수 모두와 절대 KPI 데이터, 추세 분석을 포함·맥락화하는 전체 벤치마킹 상품이다.'
  - targetTerm: Competitive Set
    explanation: 'A Competitive Set (CompSet) is the operator-defined group of comparable hotels whose aggregate performance forms the denominator of all STAR index calculations; the STAR Report is the benchmarking product STR delivers that measures and reports those indices.'
    explanation_ko: 'CompSet은 모든 STAR 지수 계산의 분모를 구성하는 운영자 정의 비교 호텔 그룹이고, STAR 보고서는 해당 지수를 측정·보고하는 STR 제공 벤치마킹 상품이다.'
sources:
  - name: STR Benchmark Glossary
    org: STR (CoStar Group)
    version: ''
    section: ''
    url: 'https://www.costar.com/products/str-benchmark/resources/glossary'
    tier: vendor-doc
  - name: STR — CoStar Group Brand Page
    org: CoStar Group
    version: ''
    section: ''
    url: 'https://www.costargroup.com/about-us/brands/str'
    tier: vendor-doc
  - name: How to read a hotel STAR report
    org: Lighthouse (formerly OTA Insight)
    version: ''
    section: ''
    url: 'https://www.mylighthouse.com/resources/blog/star-report-hotels'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="28" width="8" height="14" rx="1"/><rect x="20" y="18" width="8" height="24" rx="1"/><rect x="34" y="10" width="8" height="32" rx="1"/><line x1="4" y1="44" x2="44" y2="44"/><polyline points="10,26 24,16 38,8"/></svg>
---

> The Smith Travel Accommodations Report (STAR Report), produced by STR (a CoStar Group company, originally Smith Travel Research), is the travel industry's standard hotel-benchmarking tool. It compares a subject property's Occupancy, ADR, and RevPAR against a self-defined Competitive Set and derives three index scores — Market Penetration Index (MPI), Average Rate Index (ARI), and Revenue Generation Index (RGI) — showing whether the hotel is capturing more or less than its fair market share.

A STAR Report delivers daily, weekly, monthly, quarterly, and annual views of a property's performance relative to its Competitive Set. Three index scores drive strategy: (1) Market Penetration Index (MPI) = (subject occupancy ÷ compset occupancy) × 100, measuring occupancy share; (2) Average Rate Index (ARI) = (subject ADR ÷ compset ADR) × 100, measuring ADR competitiveness; (3) Revenue Generation Index (RGI) = (subject RevPAR ÷ compset RevPAR) × 100, measuring overall RevPAR share. An index of 100 indicates fair share; above 100 means outperforming the set. STAR data is licensed from STR/CoStar; revenue-management and business-intelligence platforms commonly ingest it via data feed. It is a key input for owner reporting, bank covenants, HMA performance tests, and investor diligence.

**한국어 / Korean** — **STR STAR 보고서** — STR(CoStar Group 소속, 구 Smith Travel Research)이 제공하는 STAR 보고서는 호텔 업계 표준 벤치마킹 도구다. 대상 호텔의 점유율·ADR·RevPAR를 CompSet과 비교하여 MPI·ARI·RGI 지수를 산출하고, 시장 공정 점유율 대비 초과 또는 미달 여부를 보여준다.

세 가지 지수: MPI = (대상 점유율 ÷ CompSet 점유율) × 100, ARI = (대상 ADR ÷ CompSet ADR) × 100, RGI = (대상 RevPAR ÷ CompSet RevPAR) × 100. 지수 100은 공정 점유율, 100 이상은 CompSet 초과 실적이다. STAR 데이터는 STR/CoStar 구독이 필요하며, 수익 관리 플랫폼이 데이터 피드로 수집한다.

**Aliases:** `STAR Report`, `Smith Travel Accommodations Report`, `STR Benchmark`, `Hotel STAR Report`, `STR Report`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| STR / CoStar Group | `STAR Report (Smith Travel Accommodations Report)` | same | STR provides the STAR Report as its core hotel benchmarking product, available through the CoStar platform and as a data feed to revenue-management systems. |

# Related
- Competitive Set — related
- RevPAR — related
- ADR — related
- Occupancy — related
- Revenue Management — related
- Revenue Generation Index — related

# Distinctions
- **STR STAR Report** vs Revenue Generation Index — The Revenue Generation Index (RGI) is one of the three index scores within a STAR Report (alongside MPI and ARI); the STAR Report is the full benchmarking product that contains and contextualises all three indices together with absolute KPI data and trend analysis.
- **STR STAR Report** vs Competitive Set — A Competitive Set (CompSet) is the operator-defined group of comparable hotels whose aggregate performance forms the denominator of all STAR index calculations; the STAR Report is the benchmarking product STR delivers that measures and reports those indices.

# Citations
[1] [STR (CoStar Group) — STR Benchmark Glossary](https://www.costar.com/products/str-benchmark/resources/glossary)
[2] [CoStar Group — STR Brand Page](https://www.costargroup.com/about-us/brands/str)
[3] [Lighthouse (formerly OTA Insight) — How to read a hotel STAR report](https://www.mylighthouse.com/resources/blog/star-report-hotels)
