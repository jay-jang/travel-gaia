---
type: Standard
title: Data Interchange Specifications Handbook (DISH)
description: 'The Data Interchange Specifications Handbook (DISH) is IATA''s global standard, maintained by the BSP Data Interchange Specifications Group (BDISG), that defines the file formats and data elements all BSPs, GDSs and airlines use to exchange passenger ticketing and settlement data. Its core record types include the RET (Agent Reporting) file by which GDSs report agent sales to the BSP, and the HOT (hand-off) file by which the BSP delivers processed sales and accounting data back to airlines.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: data-interchange-specifications-handbook-dish
vertical: common
category: pay
conceptType: standard
status: active
abbreviation: DISH
term_ko: 데이터 교환 사양 핸드북(DISH)
definition_ko: 'DISH(Data Interchange Specifications Handbook)는 IATA의 글로벌 표준으로, BSP Data Interchange Specifications Group(BDISG)이 관리하며, 모든 BSP·GDS·항공사가 여객 발권 및 정산 데이터를 교환할 때 사용하는 파일 형식과 데이터 요소를 정의한다. 핵심 레코드 유형으로는 GDS가 여행사 판매를 BSP로 보고하는 RET(Agent Reporting) 파일과, BSP가 처리된 판매·회계 데이터를 항공사에 다시 전달하는 HOT(hand-off) 파일이 있다.'
longDef: 'DISH ensures consistent, high-quality data exchange across BSP business partners worldwide. The upstream RET file carries agent ticket/EMD sales captured in the GDS into the BSP Data Processing Centre; after processing, the downstream HOT file returns standardized sales, refund, ADM/ACM and remittance values to airline revenue-accounting and agency back-office systems for reconciliation. DISH also specifies related formats such as the CSI. The standard is published in revisions (for example Revision 23, effective 1 April 2018) with periodic update bulletins. Because it is the format layer behind agent reporting and airline hand-off, DISH is the governing specification implicitly referenced whenever BSP settlement data is described.'
longDef_ko: 'DISH는 전 세계 BSP 비즈니스 파트너 간 일관되고 고품질의 데이터 교환을 보장한다. 상류(upstream)의 RET 파일은 GDS에서 수집된 여행사 항공권/EMD 판매를 BSP 데이터 처리 센터로 전달하고, 처리 후 하류(downstream)의 HOT 파일은 표준화된 판매·환불·ADM/ACM·송금 값을 항공사 수익회계 및 여행사 백오피스 시스템에 반환하여 대사(reconciliation)에 쓰이게 한다. DISH는 CSI 등 관련 형식도 규정한다. 이 표준은 개정판(예: 2018년 4월 1일 발효 Revision 23)으로 발행되며 정기 업데이트 회보가 더해진다. 여행사 보고와 항공사 hand-off의 형식 계층이므로, DISH는 BSP 정산 데이터를 설명할 때 암묵적으로 언급되는 관리 사양이다.'
standardBody: IATA
aliases:
  - DISH
  - BSP DISH
  - BSP Data Interchange Specifications Handbook
providerTerms:
  - provider: IATA
    term: RET (Agent Reporting) file
    context: The DISH-standardized file by which GDSs report agent ticket and EMD sales to the BSP Data Processing Centre.
    context_ko: GDS가 여행사 항공권 및 EMD 판매를 BSP 데이터 처리 센터로 보고하는 DISH 표준 파일.
    relationship: narrower
  - provider: IATA
    term: HOT file
    context: The DISH-standardized hand-off file by which the BSP returns processed sales and accounting data to airlines and agency back-office systems.
    context_ko: BSP가 처리된 판매·회계 데이터를 항공사 및 여행사 백오피스 시스템에 반환하는 DISH 표준 hand-off 파일.
    relationship: narrower
relationships:
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: EDIFACT
  - type: related
    targetTerm: Agency Debit Memo (ADM)
  - type: related
    targetTerm: Agency Credit Memo (ACM)
distinctions:
  - targetTerm: BSP
    explanation: 'BSP is the settlement system and institution; DISH is the technical data standard defining the file formats (RET/HOT) that BSP, GDSs and airlines exchange to operate it.'
    explanation_ko: 'BSP는 정산 시스템·기관이고, DISH는 BSP·GDS·항공사가 이를 운영하기 위해 교환하는 파일 형식(RET/HOT)을 정의하는 기술 데이터 표준이다.'
  - targetTerm: Simplified Invoicing and Settlement (SIS)
    explanation: 'DISH governs agent-to-airline BSP reporting/hand-off files, while SIS standardizes airline-to-airline and supplier interline e-invoices for the clearing house; different settlement domains.'
    explanation_ko: 'DISH는 여행사-항공사 BSP 보고/hand-off 파일을 규율하고, SIS는 정산소를 위한 항공사 간·공급자 인터라인 전자 인보이스를 표준화한다. 서로 다른 정산 영역이다.'
  - targetTerm: HOT File
    explanation: DISH is the specification that defines the record formats; the HOT file is one concrete output (airline-bound settlement data) produced in that DISH format.
    explanation_ko: 'DISH는 레코드 형식을 정의하는 사양이고, HOT 파일은 그 DISH 형식으로 산출되는 구체적 출력(항공사 방향 정산 데이터) 중 하나다.'
sources:
  - org: IATA
    name: BSP Data Interchange Specifications Handbook (DISH)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/bspdish/'
  - org: IATA
    name: 'BSP Data Interchange Specifications Handbook, Revision 23'
    version: '23'
    section: ''
    url: 'https://www.iata.org/contentassets/a8c86e315c4e4d62bbaccf611bf02485/bsp-dish-revision-23.pdf'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="24" cy="11" rx="14" ry="5"/><path d="M10 11v12c0 2.8 6.3 5 14 5s14-2.2 14-5V11"/><path d="M10 23v12c0 2.8 6.3 5 14 5s14-2.2 14-5V23"/><path d="M19 30l3 3 6-6"/></svg>
---

> The Data Interchange Specifications Handbook (DISH) is IATA's global standard, maintained by the BSP Data Interchange Specifications Group (BDISG), that defines the file formats and data elements all BSPs, GDSs and airlines use to exchange passenger ticketing and settlement data. Its core record types include the RET (Agent Reporting) file by which GDSs report agent sales to the BSP, and the HOT (hand-off) file by which the BSP delivers processed sales and accounting data back to airlines.

DISH ensures consistent, high-quality data exchange across BSP business partners worldwide. The upstream RET file carries agent ticket/EMD sales captured in the GDS into the BSP Data Processing Centre; after processing, the downstream HOT file returns standardized sales, refund, ADM/ACM and remittance values to airline revenue-accounting and agency back-office systems for reconciliation. DISH also specifies related formats such as the CSI. The standard is published in revisions (for example Revision 23, effective 1 April 2018) with periodic update bulletins. Because it is the format layer behind agent reporting and airline hand-off, DISH is the governing specification implicitly referenced whenever BSP settlement data is described.

**한국어 / Korean** — **데이터 교환 사양 핸드북(DISH)** — DISH(Data Interchange Specifications Handbook)는 IATA의 글로벌 표준으로, BSP Data Interchange Specifications Group(BDISG)이 관리하며, 모든 BSP·GDS·항공사가 여객 발권 및 정산 데이터를 교환할 때 사용하는 파일 형식과 데이터 요소를 정의한다. 핵심 레코드 유형으로는 GDS가 여행사 판매를 BSP로 보고하는 RET(Agent Reporting) 파일과, BSP가 처리된 판매·회계 데이터를 항공사에 다시 전달하는 HOT(hand-off) 파일이 있다.

DISH는 전 세계 BSP 비즈니스 파트너 간 일관되고 고품질의 데이터 교환을 보장한다. 상류(upstream)의 RET 파일은 GDS에서 수집된 여행사 항공권/EMD 판매를 BSP 데이터 처리 센터로 전달하고, 처리 후 하류(downstream)의 HOT 파일은 표준화된 판매·환불·ADM/ACM·송금 값을 항공사 수익회계 및 여행사 백오피스 시스템에 반환하여 대사(reconciliation)에 쓰이게 한다. DISH는 CSI 등 관련 형식도 규정한다. 이 표준은 개정판(예: 2018년 4월 1일 발효 Revision 23)으로 발행되며 정기 업데이트 회보가 더해진다. 여행사 보고와 항공사 hand-off의 형식 계층이므로, DISH는 BSP 정산 데이터를 설명할 때 암묵적으로 언급되는 관리 사양이다.

**Aliases:** `DISH`, `BSP DISH`, `BSP Data Interchange Specifications Handbook`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `RET (Agent Reporting) file` | narrower | The DISH-standardized file by which GDSs report agent ticket and EMD sales to the BSP Data Processing Centre. |
| IATA | `HOT file` | narrower | The DISH-standardized hand-off file by which the BSP returns processed sales and accounting data to airlines and agency back-office systems. |

# Related
- [BSP](/common/pay/bsp.md) — related
- [GDS](/common/standards/gds.md) — related
- [EDIFACT](/common/standards/edifact.md) — related
- [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — related
- [Agency Credit Memo (ACM)](/air/air-ticket/agency-credit-memo-acm.md) — related

# Distinctions
- **Data Interchange Specifications Handbook (DISH)** vs [BSP](/common/pay/bsp.md) — BSP is the settlement system and institution; DISH is the technical data standard defining the file formats (RET/HOT) that BSP, GDSs and airlines exchange to operate it.
- **Data Interchange Specifications Handbook (DISH)** vs [Simplified Invoicing and Settlement (SIS)](/common/pay/simplified-invoicing-and-settlement-sis.md) — DISH governs agent-to-airline BSP reporting/hand-off files, while SIS standardizes airline-to-airline and supplier interline e-invoices for the clearing house; different settlement domains.
- **Data Interchange Specifications Handbook (DISH)** vs [HOT File](/common/pay/hot-file.md) — DISH is the specification that defines the record formats; the HOT file is one concrete output (airline-bound settlement data) produced in that DISH format.

# Citations
[1] [IATA — BSP Data Interchange Specifications Handbook (DISH)](https://www.iata.org/en/publications/bspdish/)
[2] [IATA — BSP Data Interchange Specifications Handbook, Revision 23 — 23](https://www.iata.org/contentassets/a8c86e315c4e4d62bbaccf611bf02485/bsp-dish-revision-23.pdf)
