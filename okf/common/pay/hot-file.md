---
type: Document
title: HOT File
description: 'The HOT file (Hand-Off Tape) is the standardized DISH-format output file the BSP transmits to airlines and their back-office systems, carrying the accounting and settlement detail of all agent ticketing and refund transactions processed in a billing period. It is the outbound, airline-facing counterpart to the inbound agent sales report (the RET file) and is a core mechanical artifact of BSP settlement.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: hot-file
vertical: common
category: pay
conceptType: document
status: active
abbreviation: HOT
term_ko: HOT 파일(Hand-Off Tape)
definition_ko: 'HOT 파일(Hand-Off Tape)은 BSP가 항공사 및 그 백오피스 시스템에 전송하는 표준 DISH 형식의 출력 파일로, 한 정산 기간에 처리된 모든 대리점 발권 및 환불 거래의 회계·정산 상세를 담는다. 이는 대리점이 보고하는 인바운드 판매 보고(RET 파일)에 대응하는 아웃바운드(항공사 방향) 산출물이며, BSP 정산의 핵심 기계적 산출물이다.'
longDef: 'Defined by the BSP Data Interchange Specifications Handbook (DISH), the HOT delivers airline accounting/sales data from the BSP after sales have been reported, processed and billed. Each transaction carried in the HOT shares the same Transaction Number as the corresponding agent-reported RET record, allowing airlines to reconcile what was sold (RET) against what is being settled (HOT). Airlines and their revenue-accounting and settlement systems ingest the HOT to recognise revenue, process refunds, exchanges and ADM/ACM adjustments, and feed onward interline and clearing processes.'
longDef_ko: 'BSP Data Interchange Specifications Handbook(DISH)이 정의하는 HOT은 판매가 보고·처리·청구된 후 BSP로부터 항공사 회계·판매 데이터를 전달한다. HOT에 담긴 각 거래는 대리점이 보고한 해당 RET 레코드와 동일한 Transaction Number를 공유하므로, 항공사는 무엇이 판매되었는지(RET)와 무엇이 정산되는지(HOT)를 대사할 수 있다. 항공사와 그 수입회계·정산 시스템은 HOT을 수신하여 수익을 인식하고 환불·재발행·ADM/ACM 조정을 처리하며, 이후 인터라인 및 청산 프로세스에 데이터를 공급한다.'
standardBody: IATA
aliases:
  - Hand-Off Tape
  - Hand-Off Transmission
  - BSP HOT file
providerTerms:
  - provider: IATA
    term: HOT (Hand-Off Tape)
    context: DISH-defined airline accounting/sales output file delivered by the BSP
    context_ko: 'BSP가 전달하는, DISH로 정의된 항공사 회계·판매 출력 파일'
    relationship: same
relationships:
  - type: parent
    targetTerm: Data Interchange Specifications Handbook (DISH)
  - type: related
    targetTerm: BSP
  - type: contrasts
    targetTerm: Agency Debit Memo (ADM)
  - type: related
    targetTerm: Agency Credit Memo (ACM)
distinctions:
  - targetTerm: Data Interchange Specifications Handbook (DISH)
    explanation: DISH is the specification that defines the record formats; the HOT file is one concrete output (airline-bound settlement data) produced in that DISH format.
    explanation_ko: 'DISH는 레코드 형식을 정의하는 사양이고, HOT 파일은 그 DISH 형식으로 산출되는 구체적 출력(항공사 방향 정산 데이터) 중 하나다.'
  - targetTerm: BSP
    explanation: The BSP is the settlement plan and operator; the HOT is the data file the BSP hands off to airlines so they can account for and settle the period's transactions.
    explanation_ko: 'BSP는 정산 제도이자 운영 주체이고, HOT은 항공사가 해당 기간 거래를 회계 처리·정산할 수 있도록 BSP가 항공사에 넘겨주는 데이터 파일이다.'
sources:
  - org: IATA
    name: BSP Data Interchange Specifications Handbook (DISH)
    version: '23'
    section: ''
    url: 'https://www.iata.org/en/publications/bspdish/'
    tier: association
    verifyQuote: DISH Revision 23 replaces all previous Revisions and is presented as a mandatory Revision.
    verified: true
  - org: IATA
    name: Billing and Settlement Plan (BSP)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/bsp/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6h16l8 8v28H12z"/><path d="M28 6v8h8"/><path d="M17 24h14M17 30h14M17 36h9"/></svg>
---

> The HOT file (Hand-Off Tape) is the standardized DISH-format output file the BSP transmits to airlines and their back-office systems, carrying the accounting and settlement detail of all agent ticketing and refund transactions processed in a billing period. It is the outbound, airline-facing counterpart to the inbound agent sales report (the RET file) and is a core mechanical artifact of BSP settlement.

Defined by the BSP Data Interchange Specifications Handbook (DISH), the HOT delivers airline accounting/sales data from the BSP after sales have been reported, processed and billed. Each transaction carried in the HOT shares the same Transaction Number as the corresponding agent-reported RET record, allowing airlines to reconcile what was sold (RET) against what is being settled (HOT). Airlines and their revenue-accounting and settlement systems ingest the HOT to recognise revenue, process refunds, exchanges and ADM/ACM adjustments, and feed onward interline and clearing processes.

**한국어 / Korean** — **HOT 파일(Hand-Off Tape)** — HOT 파일(Hand-Off Tape)은 BSP가 항공사 및 그 백오피스 시스템에 전송하는 표준 DISH 형식의 출력 파일로, 한 정산 기간에 처리된 모든 대리점 발권 및 환불 거래의 회계·정산 상세를 담는다. 이는 대리점이 보고하는 인바운드 판매 보고(RET 파일)에 대응하는 아웃바운드(항공사 방향) 산출물이며, BSP 정산의 핵심 기계적 산출물이다.

BSP Data Interchange Specifications Handbook(DISH)이 정의하는 HOT은 판매가 보고·처리·청구된 후 BSP로부터 항공사 회계·판매 데이터를 전달한다. HOT에 담긴 각 거래는 대리점이 보고한 해당 RET 레코드와 동일한 Transaction Number를 공유하므로, 항공사는 무엇이 판매되었는지(RET)와 무엇이 정산되는지(HOT)를 대사할 수 있다. 항공사와 그 수입회계·정산 시스템은 HOT을 수신하여 수익을 인식하고 환불·재발행·ADM/ACM 조정을 처리하며, 이후 인터라인 및 청산 프로세스에 데이터를 공급한다.

**Aliases:** `Hand-Off Tape`, `Hand-Off Transmission`, `BSP HOT file`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `HOT (Hand-Off Tape)` | same | DISH-defined airline accounting/sales output file delivered by the BSP |

# Related
- [Data Interchange Specifications Handbook (DISH)](/common/pay/data-interchange-specifications-handbook-dish.md) — parent
- [BSP](/common/pay/bsp.md) — related
- [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — contrasts
- [Agency Credit Memo (ACM)](/air/air-ticket/agency-credit-memo-acm.md) — related

# Distinctions
- **HOT File** vs [Data Interchange Specifications Handbook (DISH)](/common/pay/data-interchange-specifications-handbook-dish.md) — DISH is the specification that defines the record formats; the HOT file is one concrete output (airline-bound settlement data) produced in that DISH format.
- **HOT File** vs [BSP](/common/pay/bsp.md) — The BSP is the settlement plan and operator; the HOT is the data file the BSP hands off to airlines so they can account for and settle the period's transactions.

# Citations
[1] [IATA — BSP Data Interchange Specifications Handbook (DISH) — 23](https://www.iata.org/en/publications/bspdish/)
[2] [IATA — Billing and Settlement Plan (BSP)](https://www.iata.org/en/services/finance/bsp/)
