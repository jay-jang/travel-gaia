---
type: Business Term
title: Net Remit
description: 'Net Remit is the amount an IATA-accredited travel agent actually settles with the airline through BSP (or ARC in the US) after deducting any authorized commission or discount from the collected fare. Where the agent collects the published fare from the passenger, the net remit to the carrier is the net-of-commission amount; where the agent holds a net-fare contract, the net remit equals the contracted net price.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-08-06T00:00:00Z'
id: net-remit
vertical: air
category: air-ticket
conceptType: business-term
status: active
term_ko: 순 정산금(Net Remit)
definition_ko: 'Net Remit은 IATA 인증 여행사가 수령한 운임에서 승인된 커미션이나 할인을 공제한 후, BSP(미국의 경우 ARC)를 통해 항공사에 실제로 정산하는 금액이다. 여행사가 승객으로부터 공표 운임을 수령하는 경우 항공사에 대한 순 정산금은 커미션 공제 후 금액이며, 여행사가 넷 운임 계약을 보유하는 경우 순 정산금은 계약된 넷 가격과 같다.'
longDef: 'In the legacy commission model, airlines published fares inclusive of a base commission (historically 9–10%) paid to IATA-accredited agents. The agent collected the full published fare from the traveler and remitted a net amount (fare minus commission) to the carrier via BSP or ARC. Today, most airlines have moved to a "zero-commission" base-fare model, and net-remit mechanics primarily arise in three scenarios: (1) override or performance-based commissions where the airline grants an agent a percentage back through the BSP reporting cycle; (2) net-fare agreements (common in corporate and wholesale/consolidator ticketing) where the agent receives a private contracted net price lower than the published fare, sells at any price up to published, and remits only the net amount; and (3) net-net commission structures used in managed travel. Incorrect net-remit amounts can trigger an Agency Debit Memo (ADM) from the airline. In BSP markets, net-remit amounts are reported by agents in the standard BSP sales report and reconciled through the settlement cycle.'
longDef_ko: '기존 커미션 모델에서 항공사는 IATA 인증 여행사에 지급하는 기본 커미션(역사적으로 9~10%)을 포함한 공표 운임을 공시했다. 여행사는 여행자로부터 전체 공표 운임을 수령하고, BSP 또는 ARC를 통해 커미션을 공제한 순 금액(넷 금액)을 항공사에 송금했다. 현재 대부분의 항공사는 "제로 커미션" 기본 운임 모델로 전환했으며, 순 정산금 메커니즘은 주로 세 가지 시나리오에서 발생한다: (1) 항공사가 BSP 보고 주기를 통해 여행사에 비율을 환급하는 초과 실적 또는 성과 기반 커미션; (2) 여행사가 공표 운임보다 낮은 비공개 계약 넷 가격을 수령하고, 공표 가격 이하에서 자율적으로 판매하며 넷 금액만 정산하는 넷 운임 계약(기업 및 도매/컨솔리데이터 발권에서 일반적); (3) 관리 여행에서 사용되는 넷-넷 커미션 구조. 잘못된 순 정산금은 항공사의 ADM(여행사 청구 메모) 발행으로 이어질 수 있다. BSP 시장에서 순 정산금은 표준 BSP 판매 보고서에 여행사가 기재하며, 정산 주기를 통해 조정된다.'
aliases:
  - Net Amount
  - Net Settlement Amount
relationships:
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
  - type: related
    targetTerm: Agency Debit Memo (ADM)
  - type: related
    targetTerm: Negotiated Fare
  - type: related
    targetTerm: Fare Rule
distinctions:
  - targetTerm: Agency Debit Memo (ADM)
    explanation: 'An ADM is the debit instrument an airline raises against an agent when the remitted amount is incorrect or when a fare was misapplied; the Net Remit is the correct target settlement amount the agent should have reported.'
    explanation_ko: 'ADM은 여행사가 정산 금액을 잘못 기재했거나 운임을 잘못 적용했을 때 항공사가 여행사에 발행하는 청구 수단이고, Net Remit은 여행사가 보고했어야 할 정확한 목표 정산 금액이다.'
  - targetTerm: Negotiated Fare
    explanation: 'A Negotiated Fare is the private contract fare the agent holds; the Net Remit is the settlement amount the agent actually remits to the airline for a ticket issued at that fare. The negotiated fare drives the net-remit amount.'
    explanation_ko: '협의 운임(Negotiated Fare)은 여행사가 보유한 비공개 계약 운임이고, Net Remit은 그 운임으로 발권된 항공권에 대해 여행사가 실제로 항공사에 정산하는 금액이다. 협의 운임이 순 정산금 금액을 결정한다.'
  - targetTerm: BSP
    explanation: 'The BSP is the clearing-house mechanism that collects, aggregates, and routes agent remittances to airlines; the net remit is the specific monetary amount an agent reports within that BSP reporting cycle.'
    explanation_ko: 'BSP는 여행사 정산금을 수집·집계하여 항공사로 전달하는 청산 메커니즘이고, Net Remit은 여행사가 해당 BSP 보고 주기에 기재하는 구체적인 정산 금액이다.'
sources:
  - name: 'Passenger Agency Conference Resolutions Manual — Agent Remittance & Net Fare Procedures'
    org: IATA
    version: 'PSCRM 46th Edition (2026)'
    section: 'Resolution 824 (Net Remittance)'
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
  - name: 'ARC Industry Agent Handbook — Net Remit and Commission Reporting'
    org: Airlines Reporting Corporation (ARC)
    version: ''
    section: ''
    url: 'https://www2.arccorp.com/articles-trends/the-latest/agent-resources/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="16" height="20" rx="2"/><rect x="26" y="14" width="16" height="20" rx="2"/><path d="M22 24 l4 0"/><polyline points="24,20 28,24 24,28"/><line x1="10" y1="20" x2="18" y2="20"/><line x1="10" y1="24" x2="18" y2="24"/><line x1="10" y1="28" x2="15" y2="28"/></svg>
---

> Net Remit is the amount an IATA-accredited travel agent actually settles with the airline through BSP (or ARC in the US) after deducting any authorized commission or discount from the collected fare. Where the agent collects the published fare from the passenger, the net remit to the carrier is the net-of-commission amount; where the agent holds a net-fare contract, the net remit equals the contracted net price.

In the legacy commission model, airlines published fares inclusive of a base commission (historically 9–10%) paid to IATA-accredited agents. The agent collected the full published fare from the traveler and remitted a net amount (fare minus commission) to the carrier via BSP or ARC. Today, most airlines have moved to a "zero-commission" base-fare model, and net-remit mechanics primarily arise in three scenarios: (1) override or performance-based commissions where the airline grants an agent a percentage back through the BSP reporting cycle; (2) net-fare agreements (common in corporate and wholesale/consolidator ticketing) where the agent receives a private contracted net price lower than the published fare, sells at any price up to published, and remits only the net amount; and (3) net-net commission structures used in managed travel. Incorrect net-remit amounts can trigger an Agency Debit Memo (ADM) from the airline. In BSP markets, net-remit amounts are reported by agents in the standard BSP sales report and reconciled through the settlement cycle.

**한국어 / Korean** — **순 정산금(Net Remit)** — Net Remit은 IATA 인증 여행사가 수령한 운임에서 승인된 커미션이나 할인을 공제한 후, BSP(미국의 경우 ARC)를 통해 항공사에 실제로 정산하는 금액이다. 여행사가 승객으로부터 공표 운임을 수령하는 경우 항공사에 대한 순 정산금은 커미션 공제 후 금액이며, 여행사가 넷 운임 계약을 보유하는 경우 순 정산금은 계약된 넷 가격과 같다.

기존 커미션 모델에서 항공사는 IATA 인증 여행사에 지급하는 기본 커미션(역사적으로 9~10%)을 포함한 공표 운임을 공시했다. 여행사는 여행자로부터 전체 공표 운임을 수령하고, BSP 또는 ARC를 통해 커미션을 공제한 순 금액(넷 금액)을 항공사에 송금했다. 현재 대부분의 항공사는 "제로 커미션" 기본 운임 모델로 전환했으며, 순 정산금 메커니즘은 주로 세 가지 시나리오에서 발생한다: (1) 항공사가 BSP 보고 주기를 통해 여행사에 비율을 환급하는 초과 실적 또는 성과 기반 커미션; (2) 여행사가 공표 운임보다 낮은 비공개 계약 넷 가격을 수령하고, 공표 가격 이하에서 자율적으로 판매하며 넷 금액만 정산하는 넷 운임 계약(기업 및 도매/컨솔리데이터 발권에서 일반적); (3) 관리 여행에서 사용되는 넷-넷 커미션 구조. 잘못된 순 정산금은 항공사의 ADM(여행사 청구 메모) 발행으로 이어질 수 있다. BSP 시장에서 순 정산금은 표준 BSP 판매 보고서에 여행사가 기재하며, 정산 주기를 통해 조정된다.

**Aliases:** `Net Amount`, `Net Settlement Amount`

# Related
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related
- [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — related
- [Negotiated Fare](/air/air-shop/negotiated-fare.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related

# Distinctions
- **Net Remit** vs [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — An ADM is the debit instrument an airline raises against an agent when the remitted amount is incorrect or when a fare was misapplied; the Net Remit is the correct target settlement amount the agent should have reported.
- **Net Remit** vs [Negotiated Fare](/air/air-shop/negotiated-fare.md) — A Negotiated Fare is the private contract fare the agent holds; the Net Remit is the settlement amount the agent actually remits to the airline for a ticket issued at that fare. The negotiated fare drives the net-remit amount.
- **Net Remit** vs [BSP](/common/pay/bsp.md) — The BSP is the clearing-house mechanism that collects, aggregates, and routes agent remittances to airlines; the net remit is the specific monetary amount an agent reports within that BSP reporting cycle.

# Citations
[1] [IATA — Passenger Agency Conference Resolutions Manual — Agent Remittance & Net Fare Procedures](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [Airlines Reporting Corporation (ARC) — ARC Industry Agent Handbook — Net Remit and Commission Reporting](https://www2.arccorp.com/articles-trends/the-latest/agent-resources/)
