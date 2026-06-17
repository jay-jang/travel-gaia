---
type: Process
title: Settlement Cycle
description: 'A settlement cycle is the defined recurring period over which transactions are accumulated, billed, netted, and the resulting funds transferred between parties. In airline distribution it governs how sales reported through BSP or ARC are billed to agents and paid to airlines on a fixed calendar.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: settlement-cycle
vertical: common
category: pay
conceptType: process
status: active
term_ko: 정산 주기 (Settlement Cycle)
definition_ko: 'Settlement Cycle(정산 주기)는 거래가 누적·청구·상계되고 그 결과 자금이 당사자 간에 이전되는, 정해진 반복 기간이다. 항공 유통에서는 BSP나 ARC를 통해 보고된 판매가 고정된 달력에 따라 여행사에 청구되고 항공사에 지급되는 방식을 규율한다.'
longDef: 'In agency settlement, the BSP and ARC publish a reporting and remittance calendar that divides each month into settlement (billing) periods; sales and refunds in a period are netted, billed to agents, and the net amount is settled by direct debit on the remittance date, with funds then disbursed to the participating airlines. In card payments, the settlement cycle is the schedule on which the acquirer batches authorized transactions, the networks clear and net them between acquirers and issuers, and funds reach the merchant (often T+1 to T+3 business days depending on the acquirer and card type). The IATA Clearing House operates its own settlement calendar for interline and other inter-airline obligations. Settlement frequency and timing directly affect a travel business''s working capital and exposure to counterparty default.'
longDef_ko: '여행사 정산에서 BSP와 ARC는 매월을 여러 정산(청구) 기간으로 나누는 보고·송금 달력을 공표한다. 한 기간의 판매와 환불은 상계되어 여행사에 청구되고, 순액은 송금일(remittance date)에 자동이체로 정산되며, 이후 자금이 참여 항공사에 배분된다. 카드 결제에서 정산 주기는 매입사(Acquirer)가 승인 거래를 배치 처리하고, 네트워크가 매입사와 발급사 간에 청산·상계하며, 자금이 가맹점에 도달하는 일정으로, 매입사와 카드 유형에 따라 보통 영업일 기준 T+1~T+3이다. IATA Clearing House는 Interline 등 항공사 간 채무에 대해 자체 정산 달력을 운영한다. 정산 빈도와 시점은 여행 사업자의 운전자본과 거래상대방 부도 노출에 직접적인 영향을 준다.'
standardBody: IATA
aliases:
  - settlement period
  - billing and settlement cycle
relationships:
  - type: related
    targetTerm: Remittance
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
  - type: related
    targetTerm: IATA Clearing House
  - type: related
    targetTerm: Acquirer
distinctions:
  - targetTerm: Remittance
    explanation: The settlement cycle is the calendar and periodicity that determines when funds move; remittance is the specific funding event (agent paying the net amount) that takes place within that cycle.
    explanation_ko: 'Settlement Cycle은 자금이 언제 이동하는지를 정하는 달력·주기이고, Remittance는 그 주기 안에서 일어나는 구체적 자금 납입 사건(여행사가 순액을 납부하는 것)이다.'
  - targetTerm: IATA Clearing House
    explanation: The IATA Clearing House is an institution that nets and settles inter-airline accounts; a settlement cycle is the timing structure on which it and other settlement systems operate.
    explanation_ko: 'IATA Clearing House는 항공사 간 계정을 상계·정산하는 기관이고, Settlement Cycle은 그 기관과 다른 정산 시스템이 작동하는 시점 구조다.'
sources:
  - org: IATA
    name: BSP Reporting and Remittance Calendar / Passenger Agency Conference Resolutions
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M38 16a16 16 0 1 0 4 14"/><path d="M38 8v8h-8"/><circle cx="24" cy="24" r="3.5"/><path d="M24 16v3M24 29v3"/></svg>
---

> A settlement cycle is the defined recurring period over which transactions are accumulated, billed, netted, and the resulting funds transferred between parties. In airline distribution it governs how sales reported through BSP or ARC are billed to agents and paid to airlines on a fixed calendar.

In agency settlement, the BSP and ARC publish a reporting and remittance calendar that divides each month into settlement (billing) periods; sales and refunds in a period are netted, billed to agents, and the net amount is settled by direct debit on the remittance date, with funds then disbursed to the participating airlines. In card payments, the settlement cycle is the schedule on which the acquirer batches authorized transactions, the networks clear and net them between acquirers and issuers, and funds reach the merchant (often T+1 to T+3 business days depending on the acquirer and card type). The IATA Clearing House operates its own settlement calendar for interline and other inter-airline obligations. Settlement frequency and timing directly affect a travel business's working capital and exposure to counterparty default.

**한국어 / Korean** — **정산 주기 (Settlement Cycle)** — Settlement Cycle(정산 주기)는 거래가 누적·청구·상계되고 그 결과 자금이 당사자 간에 이전되는, 정해진 반복 기간이다. 항공 유통에서는 BSP나 ARC를 통해 보고된 판매가 고정된 달력에 따라 여행사에 청구되고 항공사에 지급되는 방식을 규율한다.

여행사 정산에서 BSP와 ARC는 매월을 여러 정산(청구) 기간으로 나누는 보고·송금 달력을 공표한다. 한 기간의 판매와 환불은 상계되어 여행사에 청구되고, 순액은 송금일(remittance date)에 자동이체로 정산되며, 이후 자금이 참여 항공사에 배분된다. 카드 결제에서 정산 주기는 매입사(Acquirer)가 승인 거래를 배치 처리하고, 네트워크가 매입사와 발급사 간에 청산·상계하며, 자금이 가맹점에 도달하는 일정으로, 매입사와 카드 유형에 따라 보통 영업일 기준 T+1~T+3이다. IATA Clearing House는 Interline 등 항공사 간 채무에 대해 자체 정산 달력을 운영한다. 정산 빈도와 시점은 여행 사업자의 운전자본과 거래상대방 부도 노출에 직접적인 영향을 준다.

**Aliases:** `settlement period`, `billing and settlement cycle`

# Related
- [Remittance](/common/pay/remittance.md) — related
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related
- [IATA Clearing House](/common/pay/iata-clearing-house.md) — related
- [Acquirer](/common/pay/acquirer.md) — related

# Distinctions
- **Settlement Cycle** vs [Remittance](/common/pay/remittance.md) — The settlement cycle is the calendar and periodicity that determines when funds move; remittance is the specific funding event (agent paying the net amount) that takes place within that cycle.
- **Settlement Cycle** vs [IATA Clearing House](/common/pay/iata-clearing-house.md) — The IATA Clearing House is an institution that nets and settles inter-airline accounts; a settlement cycle is the timing structure on which it and other settlement systems operate.

# Citations
[1] IATA — BSP Reporting and Remittance Calendar / Passenger Agency Conference Resolutions
