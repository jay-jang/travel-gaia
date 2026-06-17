---
type: Metric
title: Remittance Holding Capacity (RHC)
description: 'Remittance Holding Capacity (RHC) is a NewGen ISS risk-control threshold that caps the maximum amount of cash sales an IATA-accredited agent may have outstanding to the BSP at any time, before remittance. IATA monitors agents'' cash sales in real time, and when an agent reaches its RHC, cash is restricted as a form of payment until a remittance reduces the outstanding balance, limiting airlines'' exposure to agent default.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: remittance-holding-capacity-rhc
vertical: common
category: pay
conceptType: metric
status: active
abbreviation: RHC
term_ko: 송금 보유 한도(RHC)
definition_ko: 'RHC(Remittance Holding Capacity)는 NewGen ISS의 위험 통제 한도로, IATA 인증 여행사가 송금 전에 어느 시점이든 BSP에 미결제 상태로 보유할 수 있는 현금(Cash) 판매의 최대 금액을 제한한다. IATA는 여행사의 현금 판매를 실시간으로 모니터링하며, 여행사가 RHC에 도달하면 송금으로 미결제 잔액이 줄어들 때까지 현금이 지불수단으로 제한되어 항공사의 여행사 디폴트 노출을 줄인다.'
longDef: 'Introduced with NewGen ISS, RHC replaces the older blanket financial-security model with a per-agent cash ceiling. The capacity is typically calculated from an agent''s historical sales (for many agents, the average of the three busiest periods plus 100% of that average) and is linked to the agent''s accreditation model (e.g. GoLite, GoStandard, GoGlobal) and assigned risk status (A, B or C). Agents are alerted at 50%, 75% and 100% of their RHC and can monitor usage in the IATA Customer Portal. When the cap is hit, only cash is blocked; the agent can still transact via card, IATA EasyPay or other permitted methods. RHC is a financial-risk control that complements, rather than replaces, the remittance schedule and settlement cycle.'
longDef_ko: 'NewGen ISS와 함께 도입된 RHC는 기존의 일괄 재무 보증 모델을 여행사별 현금 상한으로 대체한다. 한도는 보통 여행사의 과거 판매(많은 경우 가장 바쁜 세 기간의 평균에 그 평균의 100%를 더한 값)로 산정되며, 여행사의 인증 모델(예: GoLite, GoStandard, GoGlobal)과 부여된 위험 등급(A, B, C)에 연동된다. 여행사는 RHC의 50%, 75%, 100% 도달 시 알림을 받고 IATA Customer Portal에서 사용량을 모니터링할 수 있다. 상한에 도달하면 현금만 차단되며, 여행사는 여전히 카드, IATA EasyPay 등 허용된 수단으로 거래할 수 있다. RHC는 송금 일정 및 정산 주기를 대체하는 것이 아니라 보완하는 재무 위험 통제다.'
standardBody: IATA
aliases:
  - RHC
  - Remittance Holding Capacity
relationships:
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: Remittance
  - type: related
    targetTerm: Settlement Cycle
  - type: related
    targetTerm: IATA EasyPay
  - type: related
    targetTerm: Form of Payment
distinctions:
  - targetTerm: Remittance
    explanation: Remittance is the act of transferring collected funds to airlines; RHC is the ceiling on how much cash sales may remain unremitted before cash is blocked.
    explanation_ko: 'Remittance는 수금한 자금을 항공사에 이전하는 행위이고, RHC는 현금이 차단되기 전까지 미송금 상태로 남을 수 있는 현금 판매의 상한이다.'
  - targetTerm: Settlement Cycle
    explanation: 'The settlement cycle sets when funds move; RHC limits how much risk can accumulate within that cycle, throttling cash sales in real time when breached.'
    explanation_ko: '정산 주기(Settlement Cycle)는 자금이 언제 이동하는지를 정하고, RHC는 그 주기 내에 누적될 수 있는 위험의 양을 제한하여 초과 시 실시간으로 현금 판매를 조절한다.'
sources:
  - org: IATA
    name: Remittance Holding Capacity | NewGen ISS
    version: ''
    section: ''
    url: 'https://newgeniss.iata.org/airlines/remittance-holding-capacity/'
  - org: IATA
    name: Risk Management Framework | NewGen ISS
    version: ''
    section: ''
    url: 'https://newgeniss.iata.org/travel-agents/risk-management/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 7a17 17 0 1 0 17 17"/><path d="M24 24V9"/><path d="M24 24l11-7"/><circle cx="24" cy="24" r="2.5"/></svg>
---

> Remittance Holding Capacity (RHC) is a NewGen ISS risk-control threshold that caps the maximum amount of cash sales an IATA-accredited agent may have outstanding to the BSP at any time, before remittance. IATA monitors agents' cash sales in real time, and when an agent reaches its RHC, cash is restricted as a form of payment until a remittance reduces the outstanding balance, limiting airlines' exposure to agent default.

Introduced with NewGen ISS, RHC replaces the older blanket financial-security model with a per-agent cash ceiling. The capacity is typically calculated from an agent's historical sales (for many agents, the average of the three busiest periods plus 100% of that average) and is linked to the agent's accreditation model (e.g. GoLite, GoStandard, GoGlobal) and assigned risk status (A, B or C). Agents are alerted at 50%, 75% and 100% of their RHC and can monitor usage in the IATA Customer Portal. When the cap is hit, only cash is blocked; the agent can still transact via card, IATA EasyPay or other permitted methods. RHC is a financial-risk control that complements, rather than replaces, the remittance schedule and settlement cycle.

**한국어 / Korean** — **송금 보유 한도(RHC)** — RHC(Remittance Holding Capacity)는 NewGen ISS의 위험 통제 한도로, IATA 인증 여행사가 송금 전에 어느 시점이든 BSP에 미결제 상태로 보유할 수 있는 현금(Cash) 판매의 최대 금액을 제한한다. IATA는 여행사의 현금 판매를 실시간으로 모니터링하며, 여행사가 RHC에 도달하면 송금으로 미결제 잔액이 줄어들 때까지 현금이 지불수단으로 제한되어 항공사의 여행사 디폴트 노출을 줄인다.

NewGen ISS와 함께 도입된 RHC는 기존의 일괄 재무 보증 모델을 여행사별 현금 상한으로 대체한다. 한도는 보통 여행사의 과거 판매(많은 경우 가장 바쁜 세 기간의 평균에 그 평균의 100%를 더한 값)로 산정되며, 여행사의 인증 모델(예: GoLite, GoStandard, GoGlobal)과 부여된 위험 등급(A, B, C)에 연동된다. 여행사는 RHC의 50%, 75%, 100% 도달 시 알림을 받고 IATA Customer Portal에서 사용량을 모니터링할 수 있다. 상한에 도달하면 현금만 차단되며, 여행사는 여전히 카드, IATA EasyPay 등 허용된 수단으로 거래할 수 있다. RHC는 송금 일정 및 정산 주기를 대체하는 것이 아니라 보완하는 재무 위험 통제다.

**Aliases:** `RHC`, `Remittance Holding Capacity`

# Related
- [BSP](/common/pay/bsp.md) — related
- [Remittance](/common/pay/remittance.md) — related
- [Settlement Cycle](/common/pay/settlement-cycle.md) — related
- [IATA EasyPay](/common/pay/iata-easypay.md) — related
- [Form of Payment](/common/pay/form-of-payment.md) — related

# Distinctions
- **Remittance Holding Capacity (RHC)** vs [Remittance](/common/pay/remittance.md) — Remittance is the act of transferring collected funds to airlines; RHC is the ceiling on how much cash sales may remain unremitted before cash is blocked.
- **Remittance Holding Capacity (RHC)** vs [Settlement Cycle](/common/pay/settlement-cycle.md) — The settlement cycle sets when funds move; RHC limits how much risk can accumulate within that cycle, throttling cash sales in real time when breached.

# Citations
[1] [IATA — Remittance Holding Capacity | NewGen ISS](https://newgeniss.iata.org/airlines/remittance-holding-capacity/)
[2] [IATA — Risk Management Framework | NewGen ISS](https://newgeniss.iata.org/travel-agents/risk-management/)
