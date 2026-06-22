---
type: Standard Term
title: BSP
description: 'The Billing and Settlement Plan is an IATA-administered system that simplifies selling, reporting, and remittance between IATA-accredited travel agents and participating airlines in a given market. It consolidates each agent''s sales into a single periodic statement and nets the funds owed to airlines through a central settlement process.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: bsp
vertical: common
category: pay
conceptType: standard-term
status: active
abbreviation: BSP
term_ko: 정산결제제도(BSP)
definition_ko: 'BSP(Billing and Settlement Plan)는 특정 시장에서 IATA 인증 여행사와 참여 항공사 간의 판매, 보고, 송금 업무를 간소화하는 IATA 운영 시스템이다. 각 여행사의 판매 내역을 하나의 정기 명세서로 통합하고, 중앙 정산 절차를 통해 항공사에 지급할 금액을 차감 정산한다.'
longDef: 'Operated under IATA''s Passenger Agency Programme (NewGen ISS), the BSP replaces individual agent-airline billing with a neutral clearing mechanism. Agents report ticket and EMD sales (cash, card, IATA EasyPay) and IATA bills, collects, and remits the net amount to each validating carrier on the established remittance/settlement calendar. BSP operates in most countries; the United States is served by ARC instead.'
longDef_ko: 'IATA의 여객 대리점 프로그램(NewGen ISS) 하에서 운영되는 BSP는 개별 여행사-항공사 간 청구를 중립적 청산 메커니즘으로 대체한다. 여행사는 항공권 및 EMD 판매(현금, 카드, IATA EasyPay)를 보고하고, IATA는 정해진 송금/정산 일정에 따라 각 발권 항공사(validating carrier)에 대해 청구, 수금, 차감 정산 금액 송금을 수행한다. BSP는 대부분의 국가에서 운영되며, 미국은 대신 ARC가 담당한다.'
standardBody: IATA
aliases:
  - Billing and Settlement Plan
  - Bank Settlement Plan
relationships:
  - type: contrasts
    targetTerm: ARC
  - type: related
    targetTerm: IATA EasyPay
  - type: related
    targetTerm: Validating Carrier
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: EMD
distinctions:
  - targetTerm: ARC
    explanation: 'ARC is the equivalent agent-airline settlement system for the United States, while BSP covers most other markets worldwide.'
    explanation_ko: 'ARC는 미국용 여행사-항공사 정산 시스템에 해당하며, BSP는 그 외 전 세계 대부분의 시장을 담당한다.'
  - targetTerm: IATA Clearing House
    explanation: BSP settles agent-to-airline sales; the IATA Clearing House settles airline-to-airline (interline) accounts.
    explanation_ko: 'BSP는 여행사-항공사 간 판매를 정산하고, IATA Clearing House는 항공사 간(인터라인) 계정을 정산한다.'
  - targetTerm: CASS
    explanation: 'CASS settles air-cargo accounts between airlines and freight forwarders/GSSAs, whereas BSP settles passenger ticket and EMD sales between airlines and travel agents.'
    explanation_ko: 'CASS는 항공사와 화물 포워더/GSSA 간 항공화물 계정을 정산하는 반면, BSP는 항공사와 여행사 간 여객 항공권 및 EMD 판매를 정산한다.'
  - targetTerm: Data Interchange Specifications Handbook (DISH)
    explanation: 'BSP is the settlement system and institution; DISH is the technical data standard defining the file formats (RET/HOT) that BSP, GDSs and airlines exchange to operate it.'
    explanation_ko: 'BSP는 정산 시스템·기관이고, DISH는 BSP·GDS·항공사가 이를 운영하기 위해 교환하는 파일 형식(RET/HOT)을 정의하는 기술 데이터 표준이다.'
  - targetTerm: HOT File
    explanation: The BSP is the settlement plan and operator; the HOT is the data file the BSP hands off to airlines so they can account for and settle the period's transactions.
    explanation_ko: 'BSP는 정산 제도이자 운영 주체이고, HOT은 항공사가 해당 기간 거래를 회계 처리·정산할 수 있도록 BSP가 항공사에 넘겨주는 데이터 파일이다.'
  - targetTerm: Interactive Agent Reporting
    explanation: 'IAR is the ARC (US) reporting/settlement mechanism, whereas the BSP is IATA''s equivalent globally; an agency reports through IAR in the US market and through BSP tools elsewhere.'
    explanation_ko: 'IAR는 ARC(미국)의 보고·정산 메커니즘이고, BSP는 그에 상응하는 IATA의 전 세계 메커니즘이다. 대리점은 미국 시장에서는 IAR로, 그 외 지역에서는 BSP 도구로 보고한다.'
  - targetTerm: NewGen ISS
    explanation: The BSP is the settlement plan that nets and clears funds between agents and airlines; NewGen ISS is the reform program that modernized how agents are accredited into and participate in that BSP.
    explanation_ko: 'BSP는 대리점과 항공사 간 자금을 상계하고 청산하는 정산 제도이고, NewGen ISS는 그 BSP에 대리점이 인가받고 참여하는 방식을 현대화한 개혁 프로그램이다.'
  - targetTerm: Remittance
    explanation: BSP is the clearing system and accounting infrastructure that handles agent-airline billing; remittance is the actual transfer of collected funds processed through that system.
    explanation_ko: 'BSP는 여행사-항공사 청구를 처리하는 청산 시스템·회계 인프라이고, remittance는 그 시스템을 통해 처리되는, 수금한 자금의 실제 이전 행위다.'
  - targetTerm: Settlement with Orders (SwO)
    explanation: BSP is the established neutral billing-and-settlement clearing system built around tickets/documents; SwO is the newer order-based settlement standard that clears funds from order data within that same BSP framework.
    explanation_ko: 'BSP는 항공권/문서를 중심으로 구축된 확립된 중립 청산 시스템이고, SwO는 동일한 BSP 프레임워크 안에서 주문 데이터로부터 자금을 청산하는 더 새로운 주문 기반 정산 표준이다.'
  - targetTerm: Simplified Invoicing and Settlement (SIS)
    explanation: 'SIS carries interline and supplier billings between airlines and partners, while BSP settles agent-to-airline sales; the two operate at different layers of the settlement chain.'
    explanation_ko: 'SIS는 항공사와 파트너 간 인터라인·공급자 청구를 다루고, BSP는 여행사-항공사 판매를 정산한다. 둘은 정산 체인의 서로 다른 계층에서 작동한다.'
  - targetTerm: Standard Traffic Document (STD)
    explanation: BSP is the centralized billing-and-settlement system between agents and airlines; the STD is the accountable document (the unit of stock) that agents issue and report through BSP. BSP is the process; STDs are the documents it controls.
    explanation_ko: 'BSP는 대리점과 항공사 간 중앙집중식 청구·정산 시스템이고, STD는 대리점이 BSP를 통해 발행·보고하는 회계대상 서류(재고 단위)이다. BSP는 프로세스이고, STD는 그것이 통제하는 서류이다.'
sources:
  - name: Billing and Settlement Plan (BSP)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/bsp/'
  - name: BSP Manual for Agents (NewGen ISS Edition)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/contentassets/bfacf03f8e914960898e262df2777352/bsp-manual-for-agents.pdf'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="6"/><circle cx="9" cy="10" r="3"/><circle cx="39" cy="10" r="3"/><circle cx="9" cy="38" r="3"/><circle cx="39" cy="38" r="3"/><line x1="11" y1="12" x2="19" y2="20"/><line x1="37" y1="12" x2="29" y2="20"/><line x1="11" y1="36" x2="19" y2="28"/><line x1="37" y1="36" x2="29" y2="28"/></svg>
---

> The Billing and Settlement Plan is an IATA-administered system that simplifies selling, reporting, and remittance between IATA-accredited travel agents and participating airlines in a given market. It consolidates each agent's sales into a single periodic statement and nets the funds owed to airlines through a central settlement process.

Operated under IATA's Passenger Agency Programme (NewGen ISS), the BSP replaces individual agent-airline billing with a neutral clearing mechanism. Agents report ticket and EMD sales (cash, card, IATA EasyPay) and IATA bills, collects, and remits the net amount to each validating carrier on the established remittance/settlement calendar. BSP operates in most countries; the United States is served by ARC instead.

**한국어 / Korean** — **정산결제제도(BSP)** — BSP(Billing and Settlement Plan)는 특정 시장에서 IATA 인증 여행사와 참여 항공사 간의 판매, 보고, 송금 업무를 간소화하는 IATA 운영 시스템이다. 각 여행사의 판매 내역을 하나의 정기 명세서로 통합하고, 중앙 정산 절차를 통해 항공사에 지급할 금액을 차감 정산한다.

IATA의 여객 대리점 프로그램(NewGen ISS) 하에서 운영되는 BSP는 개별 여행사-항공사 간 청구를 중립적 청산 메커니즘으로 대체한다. 여행사는 항공권 및 EMD 판매(현금, 카드, IATA EasyPay)를 보고하고, IATA는 정해진 송금/정산 일정에 따라 각 발권 항공사(validating carrier)에 대해 청구, 수금, 차감 정산 금액 송금을 수행한다. BSP는 대부분의 국가에서 운영되며, 미국은 대신 ARC가 담당한다.

**Aliases:** `Billing and Settlement Plan`, `Bank Settlement Plan`

# Related
- [ARC](/common/pay/arc.md) — contrasts
- [IATA EasyPay](/common/pay/iata-easypay.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [EMD](/air/air-ticket/emd.md) — related

# Distinctions
- **BSP** vs [ARC](/common/pay/arc.md) — ARC is the equivalent agent-airline settlement system for the United States, while BSP covers most other markets worldwide.
- **BSP** vs [IATA Clearing House](/common/pay/iata-clearing-house.md) — BSP settles agent-to-airline sales; the IATA Clearing House settles airline-to-airline (interline) accounts.
- **BSP** vs [CASS](/common/pay/cass.md) — CASS settles air-cargo accounts between airlines and freight forwarders/GSSAs, whereas BSP settles passenger ticket and EMD sales between airlines and travel agents.
- **BSP** vs [Data Interchange Specifications Handbook (DISH)](/common/pay/data-interchange-specifications-handbook-dish.md) — BSP is the settlement system and institution; DISH is the technical data standard defining the file formats (RET/HOT) that BSP, GDSs and airlines exchange to operate it.
- **BSP** vs [HOT File](/common/pay/hot-file.md) — The BSP is the settlement plan and operator; the HOT is the data file the BSP hands off to airlines so they can account for and settle the period's transactions.
- **BSP** vs [Interactive Agent Reporting](/common/pay/interactive-agent-reporting.md) — IAR is the ARC (US) reporting/settlement mechanism, whereas the BSP is IATA's equivalent globally; an agency reports through IAR in the US market and through BSP tools elsewhere.
- **BSP** vs [NewGen ISS](/common/pay/newgen-iss.md) — The BSP is the settlement plan that nets and clears funds between agents and airlines; NewGen ISS is the reform program that modernized how agents are accredited into and participate in that BSP.
- **BSP** vs [Remittance](/common/pay/remittance.md) — BSP is the clearing system and accounting infrastructure that handles agent-airline billing; remittance is the actual transfer of collected funds processed through that system.
- **BSP** vs [Settlement with Orders (SwO)](/common/standards/settlement-with-orders-swo.md) — BSP is the established neutral billing-and-settlement clearing system built around tickets/documents; SwO is the newer order-based settlement standard that clears funds from order data within that same BSP framework.
- **BSP** vs [Simplified Invoicing and Settlement (SIS)](/common/pay/simplified-invoicing-and-settlement-sis.md) — SIS carries interline and supplier billings between airlines and partners, while BSP settles agent-to-airline sales; the two operate at different layers of the settlement chain.
- **BSP** vs [Standard Traffic Document (STD)](/air/air-ticket/standard-traffic-document-std.md) — BSP is the centralized billing-and-settlement system between agents and airlines; the STD is the accountable document (the unit of stock) that agents issue and report through BSP. BSP is the process; STDs are the documents it controls.

# Citations
[1] [IATA — Billing and Settlement Plan (BSP)](https://www.iata.org/en/services/finance/bsp/)
[2] [IATA — BSP Manual for Agents (NewGen ISS Edition)](https://www.iata.org/contentassets/bfacf03f8e914960898e262df2777352/bsp-manual-for-agents.pdf)
