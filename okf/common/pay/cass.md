---
type: Provider Term
title: CASS
description: 'The Cargo Accounts Settlement System (CASS) is IATA''s air-cargo billing and settlement service that consolidates and nets accounts between airlines (and GSSAs) and freight forwarders, operating as the cargo counterpart to the passenger BSP. It runs through the internet-based CASSLink platform in 90+ countries and territories, processing the financial flows of air-cargo sales between carriers and their accredited intermediaries.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: cass
vertical: common
category: pay
conceptType: provider-term
status: active
abbreviation: CASS
term_ko: 항공화물 정산제도(CASS)
definition_ko: 'CASS(Cargo Accounts Settlement System)는 항공사(및 GSSA)와 항공화물 포워더(freight forwarder) 간의 계정을 통합·차감 정산하는 IATA의 항공화물 청구·정산 서비스로, 여객 부문의 BSP에 대응하는 화물 부문 시스템이다. 인터넷 기반 CASSLink 플랫폼을 통해 90개 이상의 국가·지역에서 운영되며, 항공사와 인증 중개자 간 항공화물 판매의 자금 흐름을 처리한다.'
longDef: 'Operated under IATA Settlement Systems (ISS), CASS replaces individual carrier-to-forwarder billing with neutral, centralized invoicing and net settlement. Airlines submit cargo billings (air waybill charges, fees) which CASSLink consolidates per forwarder/GSSA into a single periodic statement, collecting from the intermediary and remitting the net amount to each carrier on a fixed calendar. CASS serves over twenty thousand participants including airlines, GSSAs, ground handlers and freight forwarders, and offers modules such as taxation calculation, prepayment (FlexPay) and stock management. It is a major settlement pillar entirely separate from the passenger-side BSP and ARC.'
longDef_ko: 'IATA Settlement Systems(ISS) 하에서 운영되는 CASS는 개별 항공사-포워더 간 청구를 중립적·중앙집중식 인보이싱과 차감 정산으로 대체한다. 항공사가 화물 청구(항공운송장 요금, 수수료 등)를 제출하면 CASSLink가 포워더/GSSA별로 단일 정기 명세서로 통합하고, 중개자로부터 수금하여 정해진 일정에 따라 각 항공사에 순액을 송금한다. CASS는 항공사, GSSA, 지상조업사, 포워더 등 2만 개가 넘는 참여자를 대상으로 하며, 세금 계산, 선불(FlexPay), 재고 관리 등의 모듈을 제공한다. 이는 여객 부문의 BSP·ARC와 완전히 별개인 주요 정산 축이다.'
standardBody: IATA
aliases:
  - Cargo Accounts Settlement System
  - Cargo Accounts Settlement Systems
  - CASS-Import
  - CASS-Export
providerTerms:
  - provider: IATA
    term: CASSLink
    context: The internet-based data-processing and invoicing platform through which CASS operates between carriers and cargo intermediaries.
    context_ko: 항공사와 화물 중개자 간 CASS가 작동하는 인터넷 기반 데이터 처리·인보이싱 플랫폼.
    relationship: narrower
relationships:
  - type: contrasts
    targetTerm: BSP
  - type: contrasts
    targetTerm: IATA Clearing House
  - type: related
    targetTerm: Simplified Invoicing and Settlement (SIS)
  - type: related
    targetTerm: Settlement Cycle
  - type: related
    targetTerm: Remittance
distinctions:
  - targetTerm: BSP
    explanation: 'CASS settles air-cargo accounts between airlines and freight forwarders/GSSAs, whereas BSP settles passenger ticket and EMD sales between airlines and travel agents.'
    explanation_ko: 'CASS는 항공사와 화물 포워더/GSSA 간 항공화물 계정을 정산하는 반면, BSP는 항공사와 여행사 간 여객 항공권 및 EMD 판매를 정산한다.'
  - targetTerm: IATA Clearing House
    explanation: CASS settles airline-to-forwarder cargo billings; the IATA Clearing House settles airline-to-airline (interline) obligations.
    explanation_ko: 'CASS는 항공사-포워더 간 화물 청구를 정산하고, IATA Clearing House는 항공사 간(인터라인) 채무를 정산한다.'
sources:
  - org: IATA
    name: Cargo Accounts Settlement Systems (CASS)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/cass/'
    tier: association
  - org: IATA
    name: IATA Cargo Accounts Settlement System (CASS) - Airlines
    version: ''
    section: ''
    url: 'https://www.iata.org/contentassets/ef4dd454b4eb45ec8943ca351c61de07/iata-cass-airlines-en.pdf'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18 24 10l16 8v12L24 38 8 30z"/><path d="M8 18l16 8 16-8"/><line x1="24" y1="26" x2="24" y2="38"/><path d="M16 14v6"/></svg>
---

> The Cargo Accounts Settlement System (CASS) is IATA's air-cargo billing and settlement service that consolidates and nets accounts between airlines (and GSSAs) and freight forwarders, operating as the cargo counterpart to the passenger BSP. It runs through the internet-based CASSLink platform in 90+ countries and territories, processing the financial flows of air-cargo sales between carriers and their accredited intermediaries.

Operated under IATA Settlement Systems (ISS), CASS replaces individual carrier-to-forwarder billing with neutral, centralized invoicing and net settlement. Airlines submit cargo billings (air waybill charges, fees) which CASSLink consolidates per forwarder/GSSA into a single periodic statement, collecting from the intermediary and remitting the net amount to each carrier on a fixed calendar. CASS serves over twenty thousand participants including airlines, GSSAs, ground handlers and freight forwarders, and offers modules such as taxation calculation, prepayment (FlexPay) and stock management. It is a major settlement pillar entirely separate from the passenger-side BSP and ARC.

**한국어 / Korean** — **항공화물 정산제도(CASS)** — CASS(Cargo Accounts Settlement System)는 항공사(및 GSSA)와 항공화물 포워더(freight forwarder) 간의 계정을 통합·차감 정산하는 IATA의 항공화물 청구·정산 서비스로, 여객 부문의 BSP에 대응하는 화물 부문 시스템이다. 인터넷 기반 CASSLink 플랫폼을 통해 90개 이상의 국가·지역에서 운영되며, 항공사와 인증 중개자 간 항공화물 판매의 자금 흐름을 처리한다.

IATA Settlement Systems(ISS) 하에서 운영되는 CASS는 개별 항공사-포워더 간 청구를 중립적·중앙집중식 인보이싱과 차감 정산으로 대체한다. 항공사가 화물 청구(항공운송장 요금, 수수료 등)를 제출하면 CASSLink가 포워더/GSSA별로 단일 정기 명세서로 통합하고, 중개자로부터 수금하여 정해진 일정에 따라 각 항공사에 순액을 송금한다. CASS는 항공사, GSSA, 지상조업사, 포워더 등 2만 개가 넘는 참여자를 대상으로 하며, 세금 계산, 선불(FlexPay), 재고 관리 등의 모듈을 제공한다. 이는 여객 부문의 BSP·ARC와 완전히 별개인 주요 정산 축이다.

**Aliases:** `Cargo Accounts Settlement System`, `Cargo Accounts Settlement Systems`, `CASS-Import`, `CASS-Export`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `CASSLink` | narrower | The internet-based data-processing and invoicing platform through which CASS operates between carriers and cargo intermediaries. |

# Related
- [BSP](/common/pay/bsp.md) — contrasts
- [IATA Clearing House](/common/pay/iata-clearing-house.md) — contrasts
- [Simplified Invoicing and Settlement (SIS)](/common/pay/simplified-invoicing-and-settlement-sis.md) — related
- [Settlement Cycle](/common/pay/settlement-cycle.md) — related
- [Remittance](/common/pay/remittance.md) — related

# Distinctions
- **CASS** vs [BSP](/common/pay/bsp.md) — CASS settles air-cargo accounts between airlines and freight forwarders/GSSAs, whereas BSP settles passenger ticket and EMD sales between airlines and travel agents.
- **CASS** vs [IATA Clearing House](/common/pay/iata-clearing-house.md) — CASS settles airline-to-forwarder cargo billings; the IATA Clearing House settles airline-to-airline (interline) obligations.

# Citations
[1] [IATA — Cargo Accounts Settlement Systems (CASS)](https://www.iata.org/en/services/finance/cass/)
[2] [IATA — IATA Cargo Accounts Settlement System (CASS) - Airlines](https://www.iata.org/contentassets/ef4dd454b4eb45ec8943ca351c61de07/iata-cass-airlines-en.pdf)
