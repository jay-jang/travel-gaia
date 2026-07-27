---
type: Business Term
title: Performance Linked Bonus
description: 'A Performance Linked Bonus (PLB) is a back-end incentive payment made by an airline to a travel agency or corporate account upon achieving pre-agreed volume or market-share targets over a defined performance period. PLBs are negotiated confidentially, invisible on individual tickets, and settled after the fact — typically as a credit memo through BSP or directly — once the airline confirms the agency has reached the contracted threshold.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-07-27T00:00:00Z'
id: performance-linked-bonus
vertical: air
category: air-ticket
conceptType: business-term
status: active
abbreviation: PLB
term_ko: 실적 연동 보너스(PLB, Performance Linked Bonus)
definition_ko: 'PLB(Performance Linked Bonus, 실적 연동 보너스)는 항공사가 여행사 또는 법인 고객이 일정 기간 동안 미리 합의된 판매량 또는 시장 점유율 목표를 달성한 경우 지급하는 사후 인센티브이다. PLB는 비공개로 협의되며 개별 항공권에는 표시되지 않고, 항공사가 여행사가 계약 기준을 충족했음을 확인한 후 BSP를 통한 크레딧 메모나 직접 지불 형태로 정산된다.'
longDef: 'PLBs form part of the broader airline-agency remuneration ecosystem alongside published commissions (now zero in most markets), override commissions, and negotiated fares. Airlines use PLBs to reward agencies for channelling a specified share of bookings onto their metal or for meeting route-specific growth targets. The structure is typically tiered: reaching each volume tier unlocks a progressively higher bonus rate applied to all segments (or just the incremental ones above the tier, depending on the contract). PLBs are tracked by market and sometimes by routing, cabin, or GDS origin. Because PLBs are settled retrospectively and outside the per-ticket transaction, they do not appear in ticket price calculations and are distinct from the fare amount or any published incentive. In the context of IATA''s Passenger Agency Conference resolutions and the BSP framework, PLBs are remuneration instruments that airlines use within their agency distribution strategy; they are sometimes structured as Agency Credit Memos (ACMs) issued through BSP rather than direct wire transfers. Airlines may claw back incorrectly paid PLBs via Agency Debit Memos (ADMs) if audits reveal the targets were not genuinely met. The shift toward NDC and direct-connect distribution has added complexity: some PLBs now reference NDC-sourced segments separately from GDS-sourced segments, reflecting airlines'' goals to incentivise preferred booking channels.'
longDef_ko: 'PLB는 대부분의 시장에서 0이 된 공시 커미션, 오버라이드 커미션, 협의 운임 등과 함께 항공사-여행사 보수 생태계를 구성한다. 항공사는 PLB를 통해 여행사가 자사 항공기에 일정 비율의 예약을 집중시키거나 노선별 성장 목표를 달성하도록 장려한다. 구조는 보통 티어제로, 각 판매량 티어에 도달할 때마다 점점 높은 보너스율이 적용된다(계약에 따라 전체 구간 또는 티어 초과분에만 적용). PLB는 시장별, 경우에 따라 노선·좌석등급·GDS 출처별로 추적된다. PLB는 사후 정산되고 개별 티켓 거래 외부에서 처리되므로 항공권 가격 계산에 나타나지 않으며 운임 금액이나 공시 인센티브와는 구별된다. BSP 프레임워크 하에서 PLB는 직접 송금 대신 BSP를 통해 발행된 Agency Credit Memo(ACM) 형태로 지급되기도 한다. 목표가 실제로 달성되지 않은 것이 감사에서 드러나면, 항공사는 Agency Debit Memo(ADM)를 통해 잘못 지급된 PLB를 환수할 수 있다. NDC와 직접 연결 유통으로의 전환으로 일부 PLB는 이제 GDS 출처 구간과 NDC 출처 구간을 별도로 참조하기도 한다.'
standardBody: IATA
aliases:
  - Performance Linked Bonus
  - PLB
  - Back-End Bonus
  - Back-End Incentive
  - Incentive Bonus
  - Agency Incentive
providerTerms:
  - provider: BSP / IATA
    term: Agency Credit Memo (ACM)
    context: When airlines pay PLBs through the BSP, they issue Agency Credit Memos (ACMs) in the settlement cycle rather than direct payments, so the bonus flows through IATA financial infrastructure.
    context_ko: 항공사가 BSP를 통해 PLB를 지급할 때는 직접 지불 대신 정산 사이클에서 Agency Credit Memo(ACM)를 발행하여 IATA 금융 인프라를 통해 보너스가 처리된다.
    relationship: related
  - provider: Airlines (GDS-era)
    term: Override Commission
    context: An override commission is paid per-segment above a base commission rate and shares similarities with PLBs; PLBs are often structured as volume-based overrides but settled after a performance period rather than per-ticket.
    context_ko: 오버라이드 커미션은 기본 커미션율 이상의 구간별 지급이며 PLB와 유사한 면이 있지만, PLB는 개별 발권이 아니라 성과 기간 후에 일괄 정산되는 판매량 기반 오버라이드로 구조화되는 경우가 많다.
    relationship: related
relationships:
  - type: related
    targetTerm: Override Commission
  - type: related
    targetTerm: Agency Debit Memo (ADM)
  - type: related
    targetTerm: Agency Credit Memo (ACM)
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: GDS
distinctions:
  - targetTerm: Override Commission
    explanation: 'An override commission is a higher commission rate activated per-ticket when a threshold is reached and paid in the ticketing transaction; a PLB is a retrospective bonus calculated after a full performance period ends, settled separately from individual ticket transactions.'
    explanation_ko: '오버라이드 커미션은 특정 기준 달성 시 개별 발권 거래에서 즉시 적용되는 더 높은 커미션율이고, PLB는 전체 성과 기간이 끝난 후 산출되어 개별 발권 거래와 별도로 정산되는 사후 보너스이다.'
  - targetTerm: Agency Debit Memo (ADM)
    explanation: 'An ADM is a debit instrument by which an airline recovers money from an agency (e.g., for a fare error or PLB reclaim); a PLB is the incentive payment an airline makes to an agency for hitting volume targets. An ADM can be used to claw back a PLB that was paid based on targets later found not to have been met.'
    explanation_ko: 'ADM은 항공사가 여행사로부터 금액을 회수하는 수단(예: 운임 오류 또는 PLB 환수)이고, PLB는 항공사가 판매량 목표 달성 여행사에 지급하는 인센티브 지불이다. 목표가 실제로 달성되지 않은 것이 밝혀지면 ADM으로 PLB를 환수할 수 있다.'
  - targetTerm: Negotiated Fare
    explanation: 'A Negotiated Fare is a net or discounted fare agreed bilaterally between an airline and a corporate account or agency, recorded in the GDS and applied per-ticket at time of sale; a PLB is a separate retrospective bonus payment that does not appear on the ticket and is settled after a performance period.'
    explanation_ko: 'Negotiated Fare는 항공사와 법인 고객 또는 여행사 간에 양자 합의된 순가 또는 할인 운임으로 GDS에 등록되고 판매 시 발권에 적용되고, PLB는 항공권에 표시되지 않고 성과 기간 후에 정산되는 별도의 사후 보너스 지불이다.'
sources:
  - name: 'IATA Passenger Agency Conference Resolutions Manual (PAConf)'
    org: IATA
    version: '42nd Edition'
    section: 'Resolution 824: Agency Remuneration'
    url: 'https://www.iata.org/en/publications/manuals/passenger-agency-conference-resolutions-manual/'
    tier: association
  - name: 'Airlines for Europe (A4E) — Distribution Cost Review'
    org: Airlines for Europe (A4E)
    version: ''
    section: ''
    url: 'https://a4e.eu/publications/'
    tier: association
  - name: 'The Economist — Frequent-flyer economics'
    org: The Economist
    version: ''
    section: ''
    url: 'https://www.economist.com/business/2023/09/07/the-dark-arts-of-the-airlines'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6,36 16,24 24,28 34,14 42,18"/><line x1="38" y1="10" x2="46" y2="10"/><line x1="42" y1="6" x2="42" y2="14"/><circle cx="42" cy="10" r="5"/></svg>
---

> A Performance Linked Bonus (PLB) is a back-end incentive payment made by an airline to a travel agency or corporate account upon achieving pre-agreed volume or market-share targets over a defined performance period. PLBs are negotiated confidentially, invisible on individual tickets, and settled after the fact — typically as a credit memo through BSP or directly — once the airline confirms the agency has reached the contracted threshold.

PLBs form part of the broader airline-agency remuneration ecosystem alongside override commissions and negotiated fares. Airlines use PLBs to reward agencies for channelling a specified share of bookings onto their metal or for meeting route-specific growth targets. The structure is typically tiered: reaching each volume tier unlocks a progressively higher bonus rate. PLBs are tracked by market, and sometimes by routing, cabin, or GDS origin. Because PLBs are settled retrospectively and outside the per-ticket transaction, they do not appear in ticket price calculations. In the BSP framework, PLBs may be structured as Agency Credit Memos (ACMs) rather than direct wire transfers. Airlines may claw back incorrectly paid PLBs via Agency Debit Memos (ADMs) if audits reveal targets were not genuinely met.

**한국어 / Korean** — **실적 연동 보너스(PLB, Performance Linked Bonus)** — PLB(Performance Linked Bonus, 실적 연동 보너스)는 항공사가 여행사 또는 법인 고객이 일정 기간 동안 미리 합의된 판매량 또는 시장 점유율 목표를 달성한 경우 지급하는 사후 인센티브이다. PLB는 비공개로 협의되며 개별 항공권에는 표시되지 않고, 항공사가 기준 충족을 확인한 후 BSP를 통한 크레딧 메모나 직접 지불 형태로 정산된다.

PLB는 오버라이드 커미션, 협의 운임 등과 함께 항공사-여행사 보수 생태계를 구성한다. 구조는 보통 티어제로, 각 판매량 티어에 도달할 때마다 더 높은 보너스율이 적용된다. PLB는 사후 정산되고 개별 티켓 거래 외부에서 처리되므로 항공권 가격 계산에 나타나지 않는다. BSP 프레임워크 하에서 PLB는 직접 송금 대신 Agency Credit Memo(ACM) 형태로 지급되기도 하며, 목표가 실제로 달성되지 않은 것이 밝혀지면 Agency Debit Memo(ADM)로 환수된다.

**Aliases:** `PLB`, `Back-End Bonus`, `Back-End Incentive`, `Incentive Bonus`, `Agency Incentive`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| BSP / IATA | `Agency Credit Memo (ACM)` | related | When airlines pay PLBs through the BSP, they issue Agency Credit Memos (ACMs) in the settlement cycle rather than direct payments, so the bonus flows through IATA financial infrastructure. |
| Airlines (GDS-era) | `Override Commission` | related | An override commission is paid per-segment above a base commission rate and shares similarities with PLBs; PLBs are often structured as volume-based overrides but settled after a performance period rather than per-ticket. |

# Related
- [Override Commission](/air/air-ticket/override-commission.md) — related
- [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — related
- [Agency Credit Memo (ACM)](/air/air-ticket/agency-credit-memo-acm.md) — related
- [BSP](/common/pay/bsp.md) — related
- [GDS](/common/standards/gds.md) — related

# Distinctions
- **Performance Linked Bonus** vs [Override Commission](/air/air-ticket/override-commission.md) — An override commission is a higher commission rate activated per-ticket when a threshold is reached and paid in the ticketing transaction; a PLB is a retrospective bonus calculated after a full performance period ends, settled separately from individual ticket transactions.
- **Performance Linked Bonus** vs [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — An ADM is a debit instrument by which an airline recovers money from an agency; a PLB is the incentive payment an airline makes to an agency for hitting volume targets. An ADM can be used to claw back a PLB that was paid based on targets later found not to have been met.
- **Performance Linked Bonus** vs [Negotiated Fare](/air/air-shop/negotiated-fare.md) — A Negotiated Fare is a net or discounted fare applied per-ticket at time of sale; a PLB is a separate retrospective bonus payment that does not appear on the ticket and is settled after a performance period.

# Citations
[1] [IATA — IATA Passenger Agency Conference Resolutions Manual (PAConf)](https://www.iata.org/en/publications/manuals/passenger-agency-conference-resolutions-manual/)
[2] [Airlines for Europe (A4E) — Distribution Cost Review](https://a4e.eu/publications/)
[3] [The Economist — Frequent-flyer economics](https://www.economist.com/business/2023/09/07/the-dark-arts-of-the-airlines)
