---
type: Process
title: Rate Shopping
description: 'Rate shopping is the practice of systematically collecting and comparing room rates and availability — for a hotel''s own property, its competitive set, and across channels — to inform pricing and revenue decisions and to monitor distribution. A rate shopper is the software that automates this collection from OTAs, metasearch, brand.com, and GDS for given dates, room types, and lengths of stay.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: rate-shopping
vertical: lodging
category: hotel-dist
conceptType: process
status: active
term_ko: 요금 쇼핑 (Rate Shopping)
definition_ko: '요금 쇼핑은 자사 호텔, 경쟁 호텔군(comp set), 그리고 채널 전반의 객실 요금과 가용성을 체계적으로 수집·비교하여 가격·수익 의사결정에 활용하고 유통을 모니터링하는 활동이다. rate shopper는 주어진 날짜·객실 유형·투숙 기간에 대해 OTA, 메타서치, brand.com, GDS에서 이 수집을 자동화하는 소프트웨어다.'
longDef: 'Rate shopping supports two related goals. First, competitive intelligence: tracking the rates of a defined comp set so revenue managers can position price relative to demand, events, and booking pace, feeding decisions on BAR and ADR. Second, distribution control: comparing a hotel''s own rate across all selling channels to detect rate-parity breaches, undercutting by wholesalers, or unauthorized rate leakage. Modern rate shoppers poll many sources at high frequency and normalize results by occupancy, board basis, cancellation terms, and length-of-stay restrictions so that compared rates are genuinely like-for-like. Outputs feed revenue management systems and parity-monitoring dashboards.'
longDef_ko: '요금 쇼핑은 두 가지 연관된 목적을 지원한다. 첫째, 경쟁 인텔리전스: 정의된 comp set의 요금을 추적하여 수익 관리자가 수요·이벤트·예약 페이스에 맞춰 가격을 포지셔닝하고 BAR와 ADR 결정을 돕는다. 둘째, 유통 통제: 모든 판매 채널에 걸친 자사 요금을 비교해 rate parity 위반, 도매업체의 가격 인하, 무단 요금 누출(rate leakage)을 탐지한다. 최신 rate shopper는 다수 소스를 고빈도로 폴링하고 occupancy, board basis, 취소 조건, 투숙 기간 제한별로 결과를 정규화하여 비교가 동등 조건으로 이뤄지게 한다. 산출물은 수익 관리 시스템과 parity 모니터링 대시보드에 입력된다.'
aliases:
  - Rate Intelligence
  - Competitive Rate Shopping
  - Rate Shopper
providerTerms:
  - provider: Lighthouse (formerly OTA Insight)
    term: Rate Insight
    context: Rate shopping/intelligence tool monitoring competitor and channel rates for revenue management.
    context_ko: 수익 관리를 위해 경쟁사 및 채널 요금을 모니터링하는 요금 쇼핑/인텔리전스 도구.
    relationship: narrower
relationships:
  - type: related
    targetTerm: Rate Parity
  - type: related
    targetTerm: BAR
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: Metasearch
  - type: related
    targetTerm: Rate Plan
distinctions:
  - targetTerm: Rate Parity
    explanation: Rate parity is the policy of keeping a hotel's rate consistent across channels; rate shopping is the monitoring activity that detects whether parity is actually being maintained.
    explanation_ko: 'Rate parity는 채널 전반에 호텔 요금을 일관되게 유지하려는 정책이고, 요금 쇼핑은 parity가 실제로 유지되는지를 탐지하는 모니터링 활동이다.'
  - targetTerm: BAR
    explanation: BAR is the best available rate a hotel publishes; rate shopping is the process of observing BAR (and other rates) across the comp set and channels to inform how BAR should be set.
    explanation_ko: 'BAR는 호텔이 게시하는 최적 가용 요금이고, 요금 쇼핑은 comp set과 채널 전반에서 BAR(및 기타 요금)를 관측하여 BAR를 어떻게 설정할지 판단하는 과정이다.'
  - targetTerm: Rate Leakage
    explanation: Rate shopping is the monitoring activity that systematically compares a hotel's rates across channels; rate leakage is the problem it is often deployed to detect — unauthorized below-direct rates surfacing on public channels.
    explanation_ko: 'Rate shopping은 채널 전반의 호텔 요금을 체계적으로 비교하는 모니터링 활동이고, 요금 누출은 그것이 흔히 탐지하려는 문제, 즉 직접 요금 이하의 무단 요금이 공개 채널에 나타나는 현상이다.'
sources:
  - org: AltexSoft
    name: Hotel Rate Shopping and Rate Intelligence for Revenue Management
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/hotel-rate-shopping/'
    tier: secondary
  - org: Cloudbeds
    name: What is a hotel rate shopper and why do hotels need one?
    version: ''
    section: ''
    url: 'https://www.cloudbeds.com/articles/hotel-rate-shopper/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="21" cy="21" r="12"/><line x1="30" y1="30" x2="40" y2="40"/><line x1="16" y1="24" x2="16" y2="18"/><line x1="21" y1="24" x2="21" y2="15"/><line x1="26" y1="24" x2="26" y2="20"/></svg>
---

> Rate shopping is the practice of systematically collecting and comparing room rates and availability — for a hotel's own property, its competitive set, and across channels — to inform pricing and revenue decisions and to monitor distribution. A rate shopper is the software that automates this collection from OTAs, metasearch, brand.com, and GDS for given dates, room types, and lengths of stay.

Rate shopping supports two related goals. First, competitive intelligence: tracking the rates of a defined comp set so revenue managers can position price relative to demand, events, and booking pace, feeding decisions on BAR and ADR. Second, distribution control: comparing a hotel's own rate across all selling channels to detect rate-parity breaches, undercutting by wholesalers, or unauthorized rate leakage. Modern rate shoppers poll many sources at high frequency and normalize results by occupancy, board basis, cancellation terms, and length-of-stay restrictions so that compared rates are genuinely like-for-like. Outputs feed revenue management systems and parity-monitoring dashboards.

**한국어 / Korean** — **요금 쇼핑 (Rate Shopping)** — 요금 쇼핑은 자사 호텔, 경쟁 호텔군(comp set), 그리고 채널 전반의 객실 요금과 가용성을 체계적으로 수집·비교하여 가격·수익 의사결정에 활용하고 유통을 모니터링하는 활동이다. rate shopper는 주어진 날짜·객실 유형·투숙 기간에 대해 OTA, 메타서치, brand.com, GDS에서 이 수집을 자동화하는 소프트웨어다.

요금 쇼핑은 두 가지 연관된 목적을 지원한다. 첫째, 경쟁 인텔리전스: 정의된 comp set의 요금을 추적하여 수익 관리자가 수요·이벤트·예약 페이스에 맞춰 가격을 포지셔닝하고 BAR와 ADR 결정을 돕는다. 둘째, 유통 통제: 모든 판매 채널에 걸친 자사 요금을 비교해 rate parity 위반, 도매업체의 가격 인하, 무단 요금 누출(rate leakage)을 탐지한다. 최신 rate shopper는 다수 소스를 고빈도로 폴링하고 occupancy, board basis, 취소 조건, 투숙 기간 제한별로 결과를 정규화하여 비교가 동등 조건으로 이뤄지게 한다. 산출물은 수익 관리 시스템과 parity 모니터링 대시보드에 입력된다.

**Aliases:** `Rate Intelligence`, `Competitive Rate Shopping`, `Rate Shopper`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Lighthouse (formerly OTA Insight) | `Rate Insight` | narrower | Rate shopping/intelligence tool monitoring competitor and channel rates for revenue management. |

# Related
- [Rate Parity](/lodging/hotel-rate/rate-parity.md) — related
- [BAR](/lodging/hotel-rate/bar.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [Metasearch](/common/standards/metasearch.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related

# Distinctions
- **Rate Shopping** vs [Rate Parity](/lodging/hotel-rate/rate-parity.md) — Rate parity is the policy of keeping a hotel's rate consistent across channels; rate shopping is the monitoring activity that detects whether parity is actually being maintained.
- **Rate Shopping** vs [BAR](/lodging/hotel-rate/bar.md) — BAR is the best available rate a hotel publishes; rate shopping is the process of observing BAR (and other rates) across the comp set and channels to inform how BAR should be set.
- **Rate Shopping** vs [Rate Leakage](/lodging/hotel-dist/rate-leakage.md) — Rate shopping is the monitoring activity that systematically compares a hotel's rates across channels; rate leakage is the problem it is often deployed to detect — unauthorized below-direct rates surfacing on public channels.

# Citations
[1] [AltexSoft — Hotel Rate Shopping and Rate Intelligence for Revenue Management](https://www.altexsoft.com/blog/hotel-rate-shopping/)
[2] [Cloudbeds — What is a hotel rate shopper and why do hotels need one?](https://www.cloudbeds.com/articles/hotel-rate-shopper/)
