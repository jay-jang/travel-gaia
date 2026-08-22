---
type: Code
title: Bank Identifier Code (BIC)
description: 'A Bank Identifier Code (BIC) — commonly called a SWIFT Code — is the ISO 9362 standard identifier for financial institutions used in international wire transfers and interbank messaging. In travel, BICs appear in BSP and ARC settlement transactions, GDS agency remittances, hotel and tour-operator wire payments, and cross-border refunds that require SWIFT network routing.'
tags:
  - pay
  - active
  - ISO
timestamp: '2026-08-22T00:00:00Z'
id: bic
vertical: common
category: pay
conceptType: code
status: active
abbreviation: BIC
term_ko: 은행식별코드(BIC / SWIFT 코드)
definition_ko: 'BIC(Bank Identifier Code, 은행식별코드)는 국제 전신환 및 은행 간 메시지에서 금융 기관을 식별하는 ISO 9362 표준 식별자로, 흔히 SWIFT 코드라고도 불린다. 여행 업계에서는 BSP·ARC 정산 거래, GDS 대리점 송금, 호텔·투어 운영자 전신환 결제, 국경 간 환불에서 SWIFT 네트워크 라우팅을 위해 사용된다.'
longDef: 'A BIC consists of 8 or 11 alphanumeric characters: 4-character institution code, 2-character ISO 3166-1 country code, 2-character location code, and an optional 3-character branch code (XXX for the head office). Example: CHASUS33 (JPMorgan Chase, US, New York HQ). In the context of airline settlement, BSP remittances from airlines to travel agents — and payments from agents to the BSP clearing house — travel over the SWIFT network and require the payee bank''s BIC. Similarly, tour operators and hotels receiving wholesale net-rate payments from bedbanks or tour operators often receive wire transfers identified by BIC. The BIC is also used within ISO 20022 financial messaging, the next-generation settlement standard that IATA is progressively adopting for BSP and CASS.'
longDef_ko: 'BIC는 8자리 또는 11자리 영숫자로 구성된다: 4자리 기관 코드, 2자리 ISO 3166-1 국가 코드, 2자리 위치 코드, 선택적 3자리 지점 코드(본점은 XXX). 예시: CHASUS33(JPMorgan Chase, 미국, 뉴욕 본부). 항공 정산 맥락에서 BSP 송금(항공사→여행사, 여행사→BSP 결제 센터)은 SWIFT 네트워크를 통해 이루어지며 수취 은행의 BIC가 필요하다. 마찬가지로 베드뱅크나 투어 운영자로부터 도매 순요금을 받는 투어 운영자 및 호텔도 BIC로 식별되는 전신환 수취 경우가 많다. BIC는 또한 IATA가 BSP·CASS에 점진적으로 채택하는 차세대 정산 표준인 ISO 20022 금융 메시지에서도 사용된다.'
standardBody: ISO
aliases:
  - SWIFT Code
  - SWIFT BIC
  - Bank Identifier Code
  - ISO 9362
relationships:
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ISO 20022
  - type: related
    targetTerm: SEPA (Single Euro Payments Area)
  - type: related
    targetTerm: Remittance
distinctions:
  - targetTerm: SEPA (Single Euro Payments Area)
    explanation: 'SEPA is the eurozone payment integration framework covering euro-denominated transfers within Europe; the BIC is the universal financial-institution identifier used in cross-border wire transfers on the SWIFT network worldwide, including but not limited to SEPA transactions.'
    explanation_ko: 'SEPA는 유럽 내 유로화 이체를 포함하는 유로존 결제 통합 프레임워크이고, BIC는 유럽뿐 아니라 전 세계 SWIFT 네트워크의 국경 간 전신환에서 사용되는 범용 금융 기관 식별자로, SEPA 거래를 포함하지만 그에 국한되지 않는다.'
  - targetTerm: ISO 20022
    explanation: 'ISO 20022 is the next-generation financial messaging standard that defines the XML message schemas for interbank payment instructions (and is being adopted by IATA for BSP); the BIC is the institution identifier that populates the creditor/debtor agent fields inside those ISO 20022 messages.'
    explanation_ko: 'ISO 20022는 은행 간 지급 지시의 XML 메시지 스키마를 정의하는 차세대 금융 메시지 표준(IATA가 BSP에 채택 중)이고, BIC는 ISO 20022 메시지 내 채권자/채무자 에이전트 필드를 채우는 기관 식별자이다.'
sources:
  - name: 'ISO 9362:2022 — Banking and related financial services — Business identifier code (BIC)'
    org: ISO
    version: '2022'
    section: ''
    url: 'https://www.iso.org/standard/84288.html'
    tier: standard-body
  - name: 'SWIFT BIC Standard — Business Identifier Codes'
    org: SWIFT
    version: ''
    section: ''
    url: 'https://www.swift.com/standards/data-standards/bic-business-identifier-code'
    tier: standard-body
  - name: 'IATA BSP Technical Specifications'
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/bsp/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="14" height="20" rx="2"/><rect x="28" y="14" width="14" height="20" rx="2"/><path d="M20 24h8M24 20l4 4-4 4"/></svg>
---

> A Bank Identifier Code (BIC) — commonly called a SWIFT Code — is the ISO 9362 standard identifier for financial institutions used in international wire transfers and interbank messaging. In travel, BICs appear in BSP and ARC settlement transactions, GDS agency remittances, hotel and tour-operator wire payments, and cross-border refunds that require SWIFT network routing.

A BIC consists of 8 or 11 alphanumeric characters: 4-character institution code, 2-character ISO 3166-1 country code, 2-character location code, and an optional 3-character branch code (XXX for the head office). Example: CHASUS33 (JPMorgan Chase, US, New York HQ). In the context of airline settlement, BSP remittances from airlines to travel agents — and payments from agents to the BSP clearing house — travel over the SWIFT network and require the payee bank's BIC. Similarly, tour operators and hotels receiving wholesale net-rate payments from bedbanks or tour operators often receive wire transfers identified by BIC. The BIC is also used within ISO 20022 financial messaging, the next-generation settlement standard that IATA is progressively adopting for BSP and CASS.

**한국어 / Korean** — **은행식별코드(BIC / SWIFT 코드)** — BIC(Bank Identifier Code, 은행식별코드)는 국제 전신환 및 은행 간 메시지에서 금융 기관을 식별하는 ISO 9362 표준 식별자로, 흔히 SWIFT 코드라고도 불린다. 여행 업계에서는 BSP·ARC 정산 거래, GDS 대리점 송금, 호텔·투어 운영자 전신환 결제, 국경 간 환불에서 SWIFT 네트워크 라우팅을 위해 사용된다.

BIC는 8자리 또는 11자리 영숫자로 구성된다: 4자리 기관 코드, 2자리 ISO 3166-1 국가 코드, 2자리 위치 코드, 선택적 3자리 지점 코드(본점은 XXX). 예시: CHASUS33(JPMorgan Chase, 미국, 뉴욕 본부). 항공 정산 맥락에서 BSP 송금(항공사→여행사, 여행사→BSP 결제 센터)은 SWIFT 네트워크를 통해 이루어지며 수취 은행의 BIC가 필요하다. 마찬가지로 베드뱅크나 투어 운영자로부터 도매 순요금을 받는 투어 운영자 및 호텔도 BIC로 식별되는 전신환 수취 경우가 많다. BIC는 또한 IATA가 BSP·CASS에 점진적으로 채택하는 차세대 정산 표준인 ISO 20022 금융 메시지에서도 사용된다.

**Aliases:** `SWIFT Code`, `SWIFT BIC`, `Bank Identifier Code`, `ISO 9362`

# Related
- [BSP](/common/pay/bsp.md) — related
- [ISO 20022](/common/pay/iso-20022.md) — related
- [SEPA (Single Euro Payments Area)](/common/pay/sepa-single-euro-payments-area.md) — related
- [Remittance](/common/pay/remittance.md) — related

# Distinctions
- **Bank Identifier Code (BIC)** vs [SEPA (Single Euro Payments Area)](/common/pay/sepa-single-euro-payments-area.md) — SEPA is the eurozone payment integration framework covering euro-denominated transfers within Europe; the BIC is the universal financial-institution identifier used in cross-border wire transfers on the SWIFT network worldwide, including but not limited to SEPA transactions.
- **Bank Identifier Code (BIC)** vs [ISO 20022](/common/pay/iso-20022.md) — ISO 20022 is the next-generation financial messaging standard that defines the XML message schemas for interbank payment instructions (and is being adopted by IATA for BSP); the BIC is the institution identifier that populates the creditor/debtor agent fields inside those ISO 20022 messages.

# Citations
[1] [ISO — ISO 9362:2022 — Banking and related financial services — Business identifier code (BIC)](https://www.iso.org/standard/84288.html)
[2] [SWIFT — SWIFT BIC Standard — Business Identifier Codes](https://www.swift.com/standards/data-standards/bic-business-identifier-code)
[3] [IATA — IATA BSP Technical Specifications](https://www.iata.org/en/services/finance/bsp/)
