---
type: Standard Term
title: Simplified Invoicing and Settlement (SIS)
description: 'Simplified Invoicing and Settlement (SIS) is IATA''s electronic-invoicing platform that standardizes and digitizes interline passenger, cargo and miscellaneous (non-transportation) billings and feeds them into the IATA Clearing House for settlement. Using a structured e-invoice format (IS-XML, with legacy IS-IDEC), SIS is the operational invoicing layer beneath the Clearing House, processing well over a million invoices and around USD 83 billion in value per year.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: simplified-invoicing-and-settlement-sis
vertical: common
category: pay
conceptType: standard-term
status: active
abbreviation: SIS
term_ko: 간소화 인보이싱·정산(SIS)
definition_ko: 'SIS(Simplified Invoicing and Settlement)는 인터라인 여객·화물·기타(비운송) 청구를 표준화·전자화하여 IATA Clearing House로 전달해 정산하게 하는 IATA의 전자 인보이싱 플랫폼이다. 구조화된 전자 인보이스 형식(IS-XML, 레거시 IS-IDEC 포함)을 사용하며, Clearing House 아래의 운영 인보이싱 계층으로서 연간 100만 건이 훨씬 넘는 인보이스와 약 830억 달러 규모의 금액을 처리한다.'
longDef: 'SIS replaced paper and bilateral interline billing with a single electronic standard, allowing airlines, suppliers and aviation partners to submit and receive invoices via file (IS-XML) or web submission (IS-Web). Validated invoices flow into the IATA Clearing House (ICH) or the Airlines Clearing House (ACH) for multilateral netting and settlement. SIS supports passenger interline, cargo interline, UATP and miscellaneous/non-transportation billings, and is used by hundreds of airlines and suppliers plus over a hundred thousand BSP and CASS agents. It is the platform the ICH entry references when describing how invoices reach the clearing house.'
longDef_ko: 'SIS는 종이 및 양자 간 인터라인 청구를 단일 전자 표준으로 대체하여, 항공사·공급자·항공 파트너가 파일(IS-XML) 또는 웹 제출(IS-Web)로 인보이스를 제출·수신할 수 있게 한다. 검증된 인보이스는 IATA Clearing House(ICH) 또는 Airlines Clearing House(ACH)로 흘러들어가 다자간 차감·정산된다. SIS는 여객 인터라인, 화물 인터라인, UATP, 기타/비운송 청구를 지원하며, 수백 개 항공사·공급자와 10만 명이 넘는 BSP·CASS 에이전트가 사용한다. 이는 ICH 항목이 인보이스가 정산소에 도달하는 방식을 설명할 때 언급하는 그 플랫폼이다.'
standardBody: IATA
aliases:
  - SIS
  - IATA SIS
  - e-invoicing
  - IS-XML
providerTerms:
  - provider: IATA
    term: IS-XML
    context: The XML-based structured e-invoice file format SIS participants use to submit billings; IS-IDEC is the legacy fixed-record alternative.
    context_ko: SIS 참여자가 청구를 제출할 때 사용하는 XML 기반 구조화 전자 인보이스 파일 형식. IS-IDEC는 레거시 고정 레코드 대안이다.
    relationship: narrower
relationships:
  - type: related
    targetTerm: IATA Clearing House
  - type: related
    targetTerm: Interline
  - type: related
    targetTerm: CASS
  - type: related
    targetTerm: Proration
  - type: related
    targetTerm: Settlement Cycle
distinctions:
  - targetTerm: IATA Clearing House
    explanation: 'SIS is the e-invoicing platform that captures, validates and presents invoices; the IATA Clearing House is the settlement facility that nets and settles the resulting balances. SIS feeds the ICH.'
    explanation_ko: 'SIS는 인보이스를 수집·검증·제시하는 전자 인보이싱 플랫폼이고, IATA Clearing House는 그 결과 잔액을 차감·정산하는 정산 기구다. SIS가 ICH에 데이터를 공급한다.'
  - targetTerm: BSP
    explanation: 'SIS carries interline and supplier billings between airlines and partners, while BSP settles agent-to-airline sales; the two operate at different layers of the settlement chain.'
    explanation_ko: 'SIS는 항공사와 파트너 간 인터라인·공급자 청구를 다루고, BSP는 여행사-항공사 판매를 정산한다. 둘은 정산 체인의 서로 다른 계층에서 작동한다.'
  - targetTerm: Data Interchange Specifications Handbook (DISH)
    explanation: 'DISH governs agent-to-airline BSP reporting/hand-off files, while SIS standardizes airline-to-airline and supplier interline e-invoices for the clearing house; different settlement domains.'
    explanation_ko: 'DISH는 여행사-항공사 BSP 보고/hand-off 파일을 규율하고, SIS는 정산소를 위한 항공사 간·공급자 인터라인 전자 인보이스를 표준화한다. 서로 다른 정산 영역이다.'
sources:
  - org: IATA
    name: Simplified Invoicing and Settlement (SIS)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/sis/'
  - org: IATA
    name: SIS - Simplified Invoicing and Settlement e-Invoicing Implementation Handbook
    version: ''
    section: ''
    url: 'https://www.iata.org/contentassets/9b1d8d19a6244e4e8cb8c7d7ad3f45e5/sis_e_invoicing_implementation_handbook.pdf'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6h16l8 8v28H13z"/><path d="M29 6v8h8"/><line x1="18" y1="22" x2="32" y2="22"/><line x1="18" y1="28" x2="32" y2="28"/><line x1="18" y1="34" x2="26" y2="34"/></svg>
---

> Simplified Invoicing and Settlement (SIS) is IATA's electronic-invoicing platform that standardizes and digitizes interline passenger, cargo and miscellaneous (non-transportation) billings and feeds them into the IATA Clearing House for settlement. Using a structured e-invoice format (IS-XML, with legacy IS-IDEC), SIS is the operational invoicing layer beneath the Clearing House, processing well over a million invoices and around USD 83 billion in value per year.

SIS replaced paper and bilateral interline billing with a single electronic standard, allowing airlines, suppliers and aviation partners to submit and receive invoices via file (IS-XML) or web submission (IS-Web). Validated invoices flow into the IATA Clearing House (ICH) or the Airlines Clearing House (ACH) for multilateral netting and settlement. SIS supports passenger interline, cargo interline, UATP and miscellaneous/non-transportation billings, and is used by hundreds of airlines and suppliers plus over a hundred thousand BSP and CASS agents. It is the platform the ICH entry references when describing how invoices reach the clearing house.

**한국어 / Korean** — **간소화 인보이싱·정산(SIS)** — SIS(Simplified Invoicing and Settlement)는 인터라인 여객·화물·기타(비운송) 청구를 표준화·전자화하여 IATA Clearing House로 전달해 정산하게 하는 IATA의 전자 인보이싱 플랫폼이다. 구조화된 전자 인보이스 형식(IS-XML, 레거시 IS-IDEC 포함)을 사용하며, Clearing House 아래의 운영 인보이싱 계층으로서 연간 100만 건이 훨씬 넘는 인보이스와 약 830억 달러 규모의 금액을 처리한다.

SIS는 종이 및 양자 간 인터라인 청구를 단일 전자 표준으로 대체하여, 항공사·공급자·항공 파트너가 파일(IS-XML) 또는 웹 제출(IS-Web)로 인보이스를 제출·수신할 수 있게 한다. 검증된 인보이스는 IATA Clearing House(ICH) 또는 Airlines Clearing House(ACH)로 흘러들어가 다자간 차감·정산된다. SIS는 여객 인터라인, 화물 인터라인, UATP, 기타/비운송 청구를 지원하며, 수백 개 항공사·공급자와 10만 명이 넘는 BSP·CASS 에이전트가 사용한다. 이는 ICH 항목이 인보이스가 정산소에 도달하는 방식을 설명할 때 언급하는 그 플랫폼이다.

**Aliases:** `SIS`, `IATA SIS`, `e-invoicing`, `IS-XML`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `IS-XML` | narrower | The XML-based structured e-invoice file format SIS participants use to submit billings; IS-IDEC is the legacy fixed-record alternative. |

# Related
- [IATA Clearing House](/common/pay/iata-clearing-house.md) — related
- [Interline](/air/air-partner/interline.md) — related
- [CASS](/common/pay/cass.md) — related
- [Proration](/air/air-partner/proration.md) — related
- [Settlement Cycle](/common/pay/settlement-cycle.md) — related

# Distinctions
- **Simplified Invoicing and Settlement (SIS)** vs [IATA Clearing House](/common/pay/iata-clearing-house.md) — SIS is the e-invoicing platform that captures, validates and presents invoices; the IATA Clearing House is the settlement facility that nets and settles the resulting balances. SIS feeds the ICH.
- **Simplified Invoicing and Settlement (SIS)** vs [BSP](/common/pay/bsp.md) — SIS carries interline and supplier billings between airlines and partners, while BSP settles agent-to-airline sales; the two operate at different layers of the settlement chain.
- **Simplified Invoicing and Settlement (SIS)** vs [Data Interchange Specifications Handbook (DISH)](/common/pay/data-interchange-specifications-handbook-dish.md) — DISH governs agent-to-airline BSP reporting/hand-off files, while SIS standardizes airline-to-airline and supplier interline e-invoices for the clearing house; different settlement domains.

# Citations
[1] [IATA — Simplified Invoicing and Settlement (SIS)](https://www.iata.org/en/services/finance/sis/)
[2] [IATA — SIS - Simplified Invoicing and Settlement e-Invoicing Implementation Handbook](https://www.iata.org/contentassets/9b1d8d19a6244e4e8cb8c7d7ad3f45e5/sis_e_invoicing_implementation_handbook.pdf)
