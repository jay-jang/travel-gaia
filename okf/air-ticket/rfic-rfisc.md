---
type: Code
title: Reason for Issuance Code / Sub Code (RFIC / RFISC)
description: 'Every EMD carries a one-character IATA Reason for Issuance Code (RFIC, groups A-G) that classifies the broad nature of the charge, plus a three-character Reason for Issuance Sub Code (RFISC) identifying the exact service. Together this code pair drives ancillary classification, fulfilment, settlement, and revenue accounting for non-flight charges.'
tags:
  - air-ticket
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: rfic-rfisc
category: air-ticket
conceptType: code
status: active
abbreviation: RFIC / RFISC
term_ko: 발행 사유 코드/세부 코드 (RFIC / RFISC)
definition_ko: '모든 EMD는 요금의 큰 분류를 나타내는 1자리 IATA 발행 사유 코드(RFIC, A~G 그룹)와 정확한 서비스를 식별하는 3자리 발행 사유 세부 코드(RFISC)를 함께 가진다. 이 코드 쌍은 부가 서비스의 분류, 이행, 정산 및 수익 회계를 결정한다.'
longDef: 'The RFIC is a single-byte code grouping the reason for issuing an EMD into broad industry categories - commonly A Air Transportation, B Surface Transportation / Non Air Services, C Baggage, D Financial Impact (e.g., booking/change fees, refundable balance), E Airport Services, F Merchandise, and G In-flight Services. Within each group, the RFISC is a three-character code naming the specific optional service. RFISC values are governed by ATPCO, which publishes the Optional Services Industry Sub Codes that any organization may use, while carriers may also file their own carrier-specific sub codes; certain industry-reserved sub codes (the 98x/99x range) are defined under IATA Passenger Services Conference resolutions (Resolution 722f). The RFIC/RFISC pair is what lets a paid bag, a seat, or a service fee be machine-classified and correctly settled through BSP/ARC, making it foundational to ancillary distribution under NDC and EMD processing.'
longDef_ko: 'RFIC는 EMD 발행 사유를 큰 산업 분류로 묶는 1바이트 코드로, 일반적으로 A 항공 운송, B 지상 운송/비항공 서비스, C 수하물, D 재무적 영향(예: 예약/변경 수수료, 환불 가능 잔액), E 공항 서비스, F 상품, G 기내 서비스로 구성된다. 각 그룹 내에서 RFISC는 특정 선택 서비스를 명명하는 3자리 코드이다. RFISC 값은 ATPCO가 관장하며, 누구나 사용할 수 있는 Optional Services Industry Sub Codes를 발행하는 한편 항공사는 자체 코드를 신고할 수도 있다. 일부 산업 예약 세부 코드(98x/99x 대역)는 IATA 여객서비스회의(PSC) 결의(Resolution 722f)로 정의된다. RFIC/RFISC 쌍은 유료 수하물, 좌석, 서비스 수수료가 기계적으로 분류되어 BSP/ARC를 통해 올바르게 정산되도록 하므로, NDC 환경의 부가 서비스 유통과 EMD 처리의 토대가 된다.'
standardBody: ATPCO
aliases:
  - Reason for Issuance Code
  - Reason for Issuance Sub Code
  - RFIC
  - RFISC
  - Optional Services Industry Sub Code
relationships:
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: Ancillary Service
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: NDC
distinctions:
  - targetTerm: EMD
    explanation: The EMD is the accountable document; the RFIC/RFISC is the code carried on the EMD that says which service it pays for and how it should be classified and settled.
    explanation_ko: 'EMD는 정산 가능한 서류이고, RFIC/RFISC는 그 EMD에 실려 어떤 서비스에 대한 것인지와 분류·정산 방식을 알려주는 코드이다.'
  - targetTerm: Ancillary Service
    explanation: Ancillary Service is the product offered to the passenger; RFISC is the standardized code that names that product for distribution and accounting systems.
    explanation_ko: 'Ancillary Service는 승객에게 제공되는 상품이고, RFISC는 유통·회계 시스템에서 그 상품을 명명하는 표준 코드이다.'
sources:
  - org: ATPCO
    name: Optional Services Industry Sub Codes
    version: ''
    section: ''
    url: 'https://www.atpco.net/resource/optional-services-industry-sub-codes'
  - org: ARC
    name: Electronic Miscellaneous Document (EMD) - RFIC/RFISC usage
    version: ''
    section: ''
    url: 'https://www2.arccorp.com/support-training/electronic-miscellaneous-document/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="14" width="12" height="20" rx="2"/><path d="M11 20h4M11 24h4M11 28h4"/><rect x="29" y="14" width="12" height="20" rx="2"/><path d="M33 20h4M33 24h4M33 28h4"/><path d="M19 24h10"/><circle cx="24" cy="24" r="1.5" fill="currentColor"/></svg>
---

> Every EMD carries a one-character IATA Reason for Issuance Code (RFIC, groups A-G) that classifies the broad nature of the charge, plus a three-character Reason for Issuance Sub Code (RFISC) identifying the exact service. Together this code pair drives ancillary classification, fulfilment, settlement, and revenue accounting for non-flight charges.

The RFIC is a single-byte code grouping the reason for issuing an EMD into broad industry categories - commonly A Air Transportation, B Surface Transportation / Non Air Services, C Baggage, D Financial Impact (e.g., booking/change fees, refundable balance), E Airport Services, F Merchandise, and G In-flight Services. Within each group, the RFISC is a three-character code naming the specific optional service. RFISC values are governed by ATPCO, which publishes the Optional Services Industry Sub Codes that any organization may use, while carriers may also file their own carrier-specific sub codes; certain industry-reserved sub codes (the 98x/99x range) are defined under IATA Passenger Services Conference resolutions (Resolution 722f). The RFIC/RFISC pair is what lets a paid bag, a seat, or a service fee be machine-classified and correctly settled through BSP/ARC, making it foundational to ancillary distribution under NDC and EMD processing.

**한국어 / Korean** — **발행 사유 코드/세부 코드 (RFIC / RFISC)** — 모든 EMD는 요금의 큰 분류를 나타내는 1자리 IATA 발행 사유 코드(RFIC, A~G 그룹)와 정확한 서비스를 식별하는 3자리 발행 사유 세부 코드(RFISC)를 함께 가진다. 이 코드 쌍은 부가 서비스의 분류, 이행, 정산 및 수익 회계를 결정한다.

RFIC는 EMD 발행 사유를 큰 산업 분류로 묶는 1바이트 코드로, 일반적으로 A 항공 운송, B 지상 운송/비항공 서비스, C 수하물, D 재무적 영향(예: 예약/변경 수수료, 환불 가능 잔액), E 공항 서비스, F 상품, G 기내 서비스로 구성된다. 각 그룹 내에서 RFISC는 특정 선택 서비스를 명명하는 3자리 코드이다. RFISC 값은 ATPCO가 관장하며, 누구나 사용할 수 있는 Optional Services Industry Sub Codes를 발행하는 한편 항공사는 자체 코드를 신고할 수도 있다. 일부 산업 예약 세부 코드(98x/99x 대역)는 IATA 여객서비스회의(PSC) 결의(Resolution 722f)로 정의된다. RFIC/RFISC 쌍은 유료 수하물, 좌석, 서비스 수수료가 기계적으로 분류되어 BSP/ARC를 통해 올바르게 정산되도록 하므로, NDC 환경의 부가 서비스 유통과 EMD 처리의 토대가 된다.

**Aliases:** `Reason for Issuance Code`, `Reason for Issuance Sub Code`, `RFIC`, `RFISC`, `Optional Services Industry Sub Code`

# Related
- [EMD](/air-ticket/emd.md) — related
- [Ancillary Service](/air-ticket/ancillary-service.md) — related
- [ATPCO](/air-shop/atpco.md) — related
- [NDC](/standards/ndc.md) — related

# Distinctions
- **Reason for Issuance Code / Sub Code (RFIC / RFISC)** vs [EMD](/air-ticket/emd.md) — The EMD is the accountable document; the RFIC/RFISC is the code carried on the EMD that says which service it pays for and how it should be classified and settled.
- **Reason for Issuance Code / Sub Code (RFIC / RFISC)** vs [Ancillary Service](/air-ticket/ancillary-service.md) — Ancillary Service is the product offered to the passenger; RFISC is the standardized code that names that product for distribution and accounting systems.

# Citations
[1] [ATPCO — Optional Services Industry Sub Codes](https://www.atpco.net/resource/optional-services-industry-sub-codes)
[2] [ARC — Electronic Miscellaneous Document (EMD) - RFIC/RFISC usage](https://www2.arccorp.com/support-training/electronic-miscellaneous-document/)
