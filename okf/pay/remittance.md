---
type: Process
title: Remittance
description: 'In airline distribution settlement, remittance is the transfer of funds collected by a travel agent for ticket sales to the airlines, made through a clearing system such as BSP or ARC after deduction of agreed commissions. Remittance occurs on a defined billing and settlement schedule by remittance period.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: remittance
category: pay
conceptType: process
status: active
term_ko: 송금/정산납입 (Remittance)
definition_ko: 항공 유통 정산에서 remittance(송금/정산납입)는 여행사가 항공권 판매로 수금한 자금을 합의된 수수료를 공제한 뒤 BSP나 ARC 같은 청산 시스템을 통해 항공사에 이전하는 것을 말한다. 송금은 정해진 청구·정산 일정에 따라 송금 기간(remittance period)별로 이루어진다.
longDef: 'Under the agency model, an accredited travel agent sells tickets on behalf of airlines, collects payment from passengers, retains any commission, and remits the net proceeds to the carriers through the local BSP (IATA Billing and Settlement Plan) or, in the United States, through ARC. The reporting and settlement calendar defines remittance periods and a remittance date by which the agent''s bank account is debited (or the agent must have paid) for the amounts billed. Cash and certain customer-card sales flow through this remittance process, while credit-card sales using the airline''s own merchant facility are typically settled directly with the card acquirer rather than remitted by the agent. IATA EasyPay and similar facilities change the cash-flow timing by funding sales on a transaction basis. Failure to remit on time can trigger default action and withdrawal of ticketing authority.'
longDef_ko: '여행사 모델(Agency Model)에서 인가받은 여행사는 항공사를 대신해 항공권을 판매하고 승객으로부터 대금을 수금한 뒤, 수수료를 보유하고 순수익을 현지 BSP(IATA Billing and Settlement Plan) 또는 미국의 경우 ARC를 통해 항공사에 송금한다. 보고·정산 달력은 송금 기간과, 청구된 금액에 대해 여행사 은행 계좌가 출금되는(또는 여행사가 납입을 완료해야 하는) 송금일(remittance date)을 정의한다. 현금 및 일부 고객카드 판매는 이 송금 절차를 거치지만, 항공사 자체 가맹 설비를 사용하는 카드 판매는 보통 여행사 송금이 아니라 카드 매입사(Acquirer)와 직접 정산된다. IATA EasyPay 등은 거래 단위로 판매를 자금화해 현금 흐름 시점을 바꾼다. 기한 내 송금하지 않으면 디폴트 조치와 발권 권한 박탈로 이어질 수 있다.'
standardBody: IATA
aliases:
  - agent remittance
relationships:
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
  - type: related
    targetTerm: Agency Model
  - type: related
    targetTerm: Settlement Cycle
  - type: related
    targetTerm: IATA EasyPay
distinctions:
  - targetTerm: BSP
    explanation: BSP is the clearing system and accounting infrastructure that handles agent-airline billing; remittance is the actual transfer of collected funds processed through that system.
    explanation_ko: 'BSP는 여행사-항공사 청구를 처리하는 청산 시스템·회계 인프라이고, remittance는 그 시스템을 통해 처리되는, 수금한 자금의 실제 이전 행위다.'
  - targetTerm: Settlement Cycle
    explanation: The settlement cycle defines the timing and periodicity; remittance is the funding act that the agent performs within that cycle.
    explanation_ko: '정산 주기(Settlement Cycle)는 시점과 주기를 정의하고, remittance는 그 주기 안에서 여행사가 수행하는 자금 납입 행위다.'
sources:
  - org: IATA
    name: Passenger Agency Conference Resolutions (BSP / Billing and Settlement Plan)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="24" r="6"/><circle cx="37" cy="24" r="6"/><path d="M18 21h12"/><path d="M27 18l3 3-3 3"/><path d="M30 30H18"/><path d="M21 33l-3-3 3-3"/></svg>
---

> In airline distribution settlement, remittance is the transfer of funds collected by a travel agent for ticket sales to the airlines, made through a clearing system such as BSP or ARC after deduction of agreed commissions. Remittance occurs on a defined billing and settlement schedule by remittance period.

Under the agency model, an accredited travel agent sells tickets on behalf of airlines, collects payment from passengers, retains any commission, and remits the net proceeds to the carriers through the local BSP (IATA Billing and Settlement Plan) or, in the United States, through ARC. The reporting and settlement calendar defines remittance periods and a remittance date by which the agent's bank account is debited (or the agent must have paid) for the amounts billed. Cash and certain customer-card sales flow through this remittance process, while credit-card sales using the airline's own merchant facility are typically settled directly with the card acquirer rather than remitted by the agent. IATA EasyPay and similar facilities change the cash-flow timing by funding sales on a transaction basis. Failure to remit on time can trigger default action and withdrawal of ticketing authority.

**한국어 / Korean** — **송금/정산납입 (Remittance)** — 항공 유통 정산에서 remittance(송금/정산납입)는 여행사가 항공권 판매로 수금한 자금을 합의된 수수료를 공제한 뒤 BSP나 ARC 같은 청산 시스템을 통해 항공사에 이전하는 것을 말한다. 송금은 정해진 청구·정산 일정에 따라 송금 기간(remittance period)별로 이루어진다.

여행사 모델(Agency Model)에서 인가받은 여행사는 항공사를 대신해 항공권을 판매하고 승객으로부터 대금을 수금한 뒤, 수수료를 보유하고 순수익을 현지 BSP(IATA Billing and Settlement Plan) 또는 미국의 경우 ARC를 통해 항공사에 송금한다. 보고·정산 달력은 송금 기간과, 청구된 금액에 대해 여행사 은행 계좌가 출금되는(또는 여행사가 납입을 완료해야 하는) 송금일(remittance date)을 정의한다. 현금 및 일부 고객카드 판매는 이 송금 절차를 거치지만, 항공사 자체 가맹 설비를 사용하는 카드 판매는 보통 여행사 송금이 아니라 카드 매입사(Acquirer)와 직접 정산된다. IATA EasyPay 등은 거래 단위로 판매를 자금화해 현금 흐름 시점을 바꾼다. 기한 내 송금하지 않으면 디폴트 조치와 발권 권한 박탈로 이어질 수 있다.

**Aliases:** `agent remittance`

# Related
- [BSP](/pay/bsp.md) — related
- [ARC](/pay/arc.md) — related
- [Agency Model](/pay/agency-model.md) — related
- [Settlement Cycle](/pay/settlement-cycle.md) — related
- [IATA EasyPay](/pay/iata-easypay.md) — related

# Distinctions
- **Remittance** vs [BSP](/pay/bsp.md) — BSP is the clearing system and accounting infrastructure that handles agent-airline billing; remittance is the actual transfer of collected funds processed through that system.
- **Remittance** vs [Settlement Cycle](/pay/settlement-cycle.md) — The settlement cycle defines the timing and periodicity; remittance is the funding act that the agent performs within that cycle.

# Citations
[1] IATA — Passenger Agency Conference Resolutions (BSP / Billing and Settlement Plan)
