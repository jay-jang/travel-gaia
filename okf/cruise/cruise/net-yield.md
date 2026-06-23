---
type: Metric
title: Net Yield
description: 'The principal pricing-performance KPI in cruise revenue management: net revenue divided by Available Passenger Cruise Days (APCD). Net revenue is total revenue less the most significant variable costs — travel-agent commissions, air/transportation and other costs, and onboard/other costs — so Net Yield isolates the revenue a cruise line truly keeps per unit of capacity, making it the cruise analogue of hotel RevPAR.'
tags:
  - cruise
  - active
timestamp: '2026-06-18T00:00:00Z'
id: net-yield
vertical: cruise
category: cruise
conceptType: metric
status: active
term_ko: 넷 일드(Net Yield)
definition_ko: '크루즈 수익관리에서 가장 핵심적인 가격 성과 KPI로, 순수익(net revenue)을 이용가능 승객 크루즈 일수(APCD)로 나눈 값이다. 순수익은 총수익에서 가장 큰 변동비 — 여행사 커미션, 항공/운송 및 기타 비용, 선상/기타 비용 — 를 차감한 금액으로, Net Yield는 크루즈 선사가 공급 단위당 실제로 남기는 수익을 분리해 보여준다. 호텔의 RevPAR에 해당하는 크루즈 지표다.'
longDef: 'Cruise lines manage pricing day to day on Net Yield because it reflects cruise revenue earned net of the largest variable costs. The build-up is: Gross Revenue (passenger ticket + onboard and other) minus commissions, transportation and other expenses and minus onboard and other expenses equals Net Revenue; Net Revenue divided by APCD equals Net Yield. Reported alongside Gross Yield (total revenue per APCD), Net Yield is the headline number management cites for pricing power, and it is presented both as reported and on a constant-currency / Net Yield (excluding fuel-comparable) basis to strip out FX and scope effects. Quarter-over-quarter Net Yield growth (e.g. ''Net Yield increased 5.7% over prior year'') is the single most-watched revenue-quality indicator in cruise equity analysis, directly parallel to RevPAR growth in lodging.'
longDef_ko: '크루즈 선사는 Net Yield를 기준으로 일상적인 가격을 관리하는데, 이는 가장 큰 변동비를 제외한 순(net) 크루즈 수익을 반영하기 때문이다. 산출 구조는 다음과 같다. 총수익(승객 티켓 + 선상 및 기타)에서 커미션, 운송 및 기타 비용, 선상 및 기타 비용을 차감하면 순수익(Net Revenue)이 되고, 이를 APCD로 나누면 Net Yield가 된다. Gross Yield(APCD당 총수익)와 함께 보고되며, Net Yield는 경영진이 가격 결정력을 설명할 때 인용하는 대표 지표로서 보고 기준과 함께 불변환율(constant-currency) 기준으로도 제시되어 환율·범위 효과를 제거한다. 전년 대비 Net Yield 성장(예: ''Net Yield가 전년 대비 5.7% 증가'')은 크루즈 주식 분석에서 가장 주목받는 수익 품질 지표로, 숙박업의 RevPAR 성장과 직접 대응된다.'
aliases:
  - Net Revenue per APCD
  - Net Revenue Yield
  - Net Revenue per Capacity Day
providerTerms:
  - provider: Royal Caribbean Cruises Ltd.
    term: Net Yields
    context: 'Defined in earnings terminology as Net Revenues per APCD, where Net Revenues equal total revenues less commissions, transportation and other expenses and onboard and other expenses; described as the most relevant measure of pricing performance.'
    context_ko: '실적 용어에서 APCD당 Net Revenues로 정의되며, Net Revenues는 총수익에서 커미션, 운송 및 기타 비용, 선상 및 기타 비용을 차감한 값이다. 가격 성과를 가장 잘 나타내는 지표로 설명된다.'
    relationship: same
relationships:
  - type: broader
    targetTerm: Available Passenger Cruise Days (APCD)
  - type: contrasts
    targetTerm: RevPAR
  - type: related
    targetTerm: Bid Price
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Non-Commissionable Fare (NCF)
  - type: related
    targetTerm: Onboard Credit (OBC)
distinctions:
  - targetTerm: RevPAR
    explanation: 'RevPAR is hotel revenue per available room (gross of distribution cost and including only room revenue); Net Yield is cruise net revenue per APCD, deducting commissions and the variable transportation/onboard costs and including onboard revenue. Both are the headline yield KPI of their industry, but Net Yield is a net (post-variable-cost) measure spanning ticket and onboard revenue, whereas RevPAR is a gross room-only measure.'
    explanation_ko: 'RevPAR은 이용 가능 객실당 호텔 수익(유통비 차감 전, 객실 수익만 포함)이고, Net Yield는 APCD당 크루즈 순수익으로 커미션과 변동 운송·선상 비용을 차감하고 선상 수익을 포함한다. 둘 다 각 산업의 대표 yield KPI이지만, Net Yield는 티켓·선상 수익을 아우르는 순(변동비 차감 후) 지표이고 RevPAR은 객실 한정 총액 지표다.'
  - targetTerm: Bid Price
    explanation: Bid Price is a revenue-management control — the marginal value threshold an availability request must clear — used to decide whether to sell. Net Yield is an ex-post performance result measuring realized net revenue per APCD. One steers the booking decision; the other scores how well pricing performed.
    explanation_ko: 'Bid Price는 수익관리 통제 장치로, 가용성 요청이 넘어야 하는 한계 가치 임계값이며 판매 여부를 결정하는 데 쓰인다. Net Yield는 사후 성과 결과로, 실현된 APCD당 순수익을 측정한다. 하나는 예약 결정을 조정하고, 다른 하나는 가격 성과를 평가한다.'
sources:
  - org: Royal Caribbean Cruises Ltd.
    name: Quarterly Earnings Release — Terminology (Net Revenues and Net Yields; Net Yields = Net Revenue per APCD)
    version: ''
    section: ''
    url: 'https://www.prnewswire.com/news-releases/royal-caribbean-group-reports-2025-results-issues-2026-guidance-302673898.html'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 34 20 22 27 28 41 13"/><polyline points="33 13 41 13 41 21"/><line x1="7" y1="40" x2="41" y2="40"/><line x1="7" y1="40" x2="7" y2="10"/></svg>
---

> The principal pricing-performance KPI in cruise revenue management: net revenue divided by Available Passenger Cruise Days (APCD). Net revenue is total revenue less the most significant variable costs — travel-agent commissions, air/transportation and other costs, and onboard/other costs — so Net Yield isolates the revenue a cruise line truly keeps per unit of capacity, making it the cruise analogue of hotel RevPAR.

Cruise lines manage pricing day to day on Net Yield because it reflects cruise revenue earned net of the largest variable costs. The build-up is: Gross Revenue (passenger ticket + onboard and other) minus commissions, transportation and other expenses and minus onboard and other expenses equals Net Revenue; Net Revenue divided by APCD equals Net Yield. Reported alongside Gross Yield (total revenue per APCD), Net Yield is the headline number management cites for pricing power, and it is presented both as reported and on a constant-currency / Net Yield (excluding fuel-comparable) basis to strip out FX and scope effects. Quarter-over-quarter Net Yield growth (e.g. 'Net Yield increased 5.7% over prior year') is the single most-watched revenue-quality indicator in cruise equity analysis, directly parallel to RevPAR growth in lodging.

**한국어 / Korean** — **넷 일드(Net Yield)** — 크루즈 수익관리에서 가장 핵심적인 가격 성과 KPI로, 순수익(net revenue)을 이용가능 승객 크루즈 일수(APCD)로 나눈 값이다. 순수익은 총수익에서 가장 큰 변동비 — 여행사 커미션, 항공/운송 및 기타 비용, 선상/기타 비용 — 를 차감한 금액으로, Net Yield는 크루즈 선사가 공급 단위당 실제로 남기는 수익을 분리해 보여준다. 호텔의 RevPAR에 해당하는 크루즈 지표다.

크루즈 선사는 Net Yield를 기준으로 일상적인 가격을 관리하는데, 이는 가장 큰 변동비를 제외한 순(net) 크루즈 수익을 반영하기 때문이다. 산출 구조는 다음과 같다. 총수익(승객 티켓 + 선상 및 기타)에서 커미션, 운송 및 기타 비용, 선상 및 기타 비용을 차감하면 순수익(Net Revenue)이 되고, 이를 APCD로 나누면 Net Yield가 된다. Gross Yield(APCD당 총수익)와 함께 보고되며, Net Yield는 경영진이 가격 결정력을 설명할 때 인용하는 대표 지표로서 보고 기준과 함께 불변환율(constant-currency) 기준으로도 제시되어 환율·범위 효과를 제거한다. 전년 대비 Net Yield 성장(예: 'Net Yield가 전년 대비 5.7% 증가')은 크루즈 주식 분석에서 가장 주목받는 수익 품질 지표로, 숙박업의 RevPAR 성장과 직접 대응된다.

**Aliases:** `Net Revenue per APCD`, `Net Revenue Yield`, `Net Revenue per Capacity Day`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Royal Caribbean Cruises Ltd. | `Net Yields` | same | Defined in earnings terminology as Net Revenues per APCD, where Net Revenues equal total revenues less commissions, transportation and other expenses and onboard and other expenses; described as the most relevant measure of pricing performance. |

# Related
- [Available Passenger Cruise Days (APCD)](/cruise/cruise/available-passenger-cruise-days-apcd.md) — broader
- [RevPAR](/lodging/hotel-rate/revpar.md) — contrasts
- [Bid Price](/air/air-shop/bid-price.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related
- [Non-Commissionable Fare (NCF)](/cruise/cruise/non-commissionable-fare-ncf.md) — related
- [Onboard Credit (OBC)](/cruise/cruise/onboard-credit-obc.md) — related

# Distinctions
- **Net Yield** vs [RevPAR](/lodging/hotel-rate/revpar.md) — RevPAR is hotel revenue per available room (gross of distribution cost and including only room revenue); Net Yield is cruise net revenue per APCD, deducting commissions and the variable transportation/onboard costs and including onboard revenue. Both are the headline yield KPI of their industry, but Net Yield is a net (post-variable-cost) measure spanning ticket and onboard revenue, whereas RevPAR is a gross room-only measure.
- **Net Yield** vs [Bid Price](/air/air-shop/bid-price.md) — Bid Price is a revenue-management control — the marginal value threshold an availability request must clear — used to decide whether to sell. Net Yield is an ex-post performance result measuring realized net revenue per APCD. One steers the booking decision; the other scores how well pricing performed.

# Citations
[1] [Royal Caribbean Cruises Ltd. — Quarterly Earnings Release — Terminology (Net Revenues and Net Yields; Net Yields = Net Revenue per APCD)](https://www.prnewswire.com/news-releases/royal-caribbean-group-reports-2025-results-issues-2026-guidance-302673898.html)
