---
type: Code
title: Merchant Category Code (MCC)
description: 'A Merchant Category Code (MCC) is a four-digit ISO 18245 code assigned by card schemes to every merchant, classifying the type of goods or services they sell. In travel, MCCs determine whether a corporate card purchase is captured under a travel policy, qualify for travel rewards, trigger Level 2/3 data requirements, or attract specific interchange rates — making them a critical piece of expense management, TMC reporting, and corporate card programme design.'
tags:
  - pay
  - active
  - ISO
timestamp: '2026-08-22T00:00:00Z'
id: merchant-category-code-mcc
vertical: common
category: pay
conceptType: code
status: active
abbreviation: MCC
term_ko: 가맹점 분류 코드(MCC)
definition_ko: 'MCC(Merchant Category Code, 가맹점 분류 코드)는 카드 스킴이 모든 가맹점에 부여하는 4자리 ISO 18245 코드로, 판매 상품·서비스 유형을 분류한다. 여행 업계에서 MCC는 법인카드 구매가 출장 정책에 해당하는지, 여행 리워드를 받을 수 있는지, Level 2/3 데이터 요구사항을 충족하는지, 특정 인터체인지 요율을 적용받는지 등을 결정하는 핵심 요소로, 경비 관리·TMC 리포팅·법인카드 프로그램 설계에서 중요하게 활용된다.'
longDef: 'Key travel MCCs include 3000–3350 (airlines), 4111 (local & suburban commuter transportation), 4411 (cruise lines), 4511 (airlines — catch-all), 4722 (travel agencies & tour operators), 5812 (restaurants), 7011 (hotels), and 7512 (car rental agencies). Card networks publish their own MCC lists; the underlying standard is ISO 18245 (Retail financial services — Merchant category codes). In corporate travel, MCCs govern T&E policy enforcement: a Travel Management Company (TMC) card programme may block non-travel MCCs, require receipts for MCCs above a threshold, or automatically reconcile transactions by MCC. MCCs also determine which transactions qualify for enhanced interchange data programmes (Level 2/3) that provide itemised line-item detail for travel expenses.'
longDef_ko: '주요 여행 관련 MCC에는 3000–3350(항공사), 4111(지역·근교 교통), 4411(크루즈 선사), 4511(항공사-통합), 4722(여행사·투어 운영자), 5812(레스토랑), 7011(호텔), 7512(렌터카)가 포함된다. 카드 네트워크는 자체 MCC 목록을 발행하며, 근거 표준은 ISO 18245(소매 금융서비스 — 가맹점 분류 코드)이다. 법인 여행에서 MCC는 T&E 정책 집행을 규율한다. TMC 카드 프로그램은 비여행 MCC를 차단하거나, 특정 임계값 이상의 MCC에 영수증을 요구하거나, MCC별로 거래를 자동 대조할 수 있다. MCC는 또한 여행 경비에 대한 상세 항목 데이터를 제공하는 강화 인터체인지 데이터 프로그램(Level 2/3)에 어떤 거래가 적격인지도 결정한다.'
standardBody: ISO
aliases:
  - Merchant Category Code
  - MCC Code
  - SIC Code
relationships:
  - type: related
    targetTerm: Card Scheme
  - type: related
    targetTerm: Chargeback
  - type: related
    targetTerm: VCC
  - type: related
    targetTerm: Corporate Profile
distinctions:
  - targetTerm: Card Scheme
    explanation: 'A Card Scheme (Visa, Mastercard) is the network and rulebook governing card-based payments; the MCC is a specific four-digit classification that the card scheme assigns to each merchant and uses to route interchange fees, enforce rules, and support data programmes.'
    explanation_ko: '카드 스킴(Visa, Mastercard)은 카드 기반 결제를 규율하는 네트워크 및 규정집이고, MCC는 카드 스킴이 각 가맹점에 부여하고 인터체인지 수수료 라우팅·규정 집행·데이터 프로그램 지원에 사용하는 구체적인 4자리 분류 코드이다.'
  - targetTerm: Chargeback
    explanation: 'A Chargeback is a post-transaction dispute mechanism that can reverse a card payment; the MCC determines the applicable chargeback reason-code set and time limits, since card scheme rules differ by merchant type.'
    explanation_ko: 'Chargeback은 카드 결제를 취소할 수 있는 거래 후 분쟁 메커니즘이고, MCC는 가맹점 유형별로 카드 스킴 규정이 다르기 때문에 적용 가능한 차지백 사유 코드 세트와 기한을 결정한다.'
sources:
  - name: 'ISO 18245:2003 — Retail financial services — Merchant category codes'
    org: ISO
    version: '2003'
    section: ''
    url: 'https://www.iso.org/standard/33365.html'
    tier: standard-body
  - name: 'Visa Merchant Data Standards Manual — Merchant Category Codes'
    org: Visa
    version: ''
    section: ''
    url: 'https://usa.visa.com/dam/VCOM/download/merchants/visa-merchant-data-standards-manual.pdf'
    tier: vendor-doc
  - name: 'Mastercard Merchant Category Codes for IRS Form 1099-K Reporting'
    org: Mastercard
    version: ''
    section: ''
    url: 'https://www.mastercard.us/content/dam/mccom/global/documents/merchant-category-codes.pdf'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="36" height="24" rx="3"/><line x1="6" y1="20" x2="42" y2="20"/><rect x="10" y="26" width="8" height="4" rx="1"/><line x1="24" y1="27" x2="38" y2="27"/><line x1="24" y1="31" x2="34" y2="31"/></svg>
---

> A Merchant Category Code (MCC) is a four-digit ISO 18245 code assigned by card schemes to every merchant, classifying the type of goods or services they sell. In travel, MCCs determine whether a corporate card purchase is captured under a travel policy, qualify for travel rewards, trigger Level 2/3 data requirements, or attract specific interchange rates — making them a critical piece of expense management, TMC reporting, and corporate card programme design.

Key travel MCCs include 3000–3350 (airlines), 4111 (local & suburban commuter transportation), 4411 (cruise lines), 4511 (airlines — catch-all), 4722 (travel agencies & tour operators), 5812 (restaurants), 7011 (hotels), and 7512 (car rental agencies). Card networks publish their own MCC lists; the underlying standard is ISO 18245 (Retail financial services — Merchant category codes). In corporate travel, MCCs govern T&E policy enforcement: a Travel Management Company (TMC) card programme may block non-travel MCCs, require receipts for MCCs above a threshold, or automatically reconcile transactions by MCC. MCCs also determine which transactions qualify for enhanced interchange data programmes (Level 2/3) that provide itemised line-item detail for travel expenses.

**한국어 / Korean** — **가맹점 분류 코드(MCC)** — MCC(Merchant Category Code, 가맹점 분류 코드)는 카드 스킴이 모든 가맹점에 부여하는 4자리 ISO 18245 코드로, 판매 상품·서비스 유형을 분류한다. 여행 업계에서 MCC는 법인카드 구매가 출장 정책에 해당하는지, 여행 리워드를 받을 수 있는지, Level 2/3 데이터 요구사항을 충족하는지, 특정 인터체인지 요율을 적용받는지 등을 결정하는 핵심 요소로, 경비 관리·TMC 리포팅·법인카드 프로그램 설계에서 중요하게 활용된다.

주요 여행 관련 MCC에는 3000–3350(항공사), 4111(지역·근교 교통), 4411(크루즈 선사), 4511(항공사-통합), 4722(여행사·투어 운영자), 5812(레스토랑), 7011(호텔), 7512(렌터카)가 포함된다. 카드 네트워크는 자체 MCC 목록을 발행하며, 근거 표준은 ISO 18245(소매 금융서비스 — 가맹점 분류 코드)이다. 법인 여행에서 MCC는 T&E 정책 집행을 규율한다. TMC 카드 프로그램은 비여행 MCC를 차단하거나, 특정 임계값 이상의 MCC에 영수증을 요구하거나, MCC별로 거래를 자동 대조할 수 있다. MCC는 또한 여행 경비에 대한 상세 항목 데이터를 제공하는 강화 인터체인지 데이터 프로그램(Level 2/3)에 어떤 거래가 적격인지도 결정한다.

**Aliases:** `Merchant Category Code`, `MCC Code`, `SIC Code`

# Related
- [Card Scheme](/common/pay/card-scheme.md) — related
- [Chargeback](/common/pay/chargeback.md) — related
- [VCC](/common/pay/vcc.md) — related
- [Corporate Profile](/common/customer/corporate-profile.md) — related

# Distinctions
- **Merchant Category Code (MCC)** vs [Card Scheme](/common/pay/card-scheme.md) — A Card Scheme (Visa, Mastercard) is the network and rulebook governing card-based payments; the MCC is a specific four-digit classification that the card scheme assigns to each merchant and uses to route interchange fees, enforce rules, and support data programmes.
- **Merchant Category Code (MCC)** vs [Chargeback](/common/pay/chargeback.md) — A Chargeback is a post-transaction dispute mechanism that can reverse a card payment; the MCC determines the applicable chargeback reason-code set and time limits, since card scheme rules differ by merchant type.

# Citations
[1] [ISO — ISO 18245:2003 — Retail financial services — Merchant category codes](https://www.iso.org/standard/33365.html)
[2] [Visa — Visa Merchant Data Standards Manual — Merchant Category Codes](https://usa.visa.com/dam/VCOM/download/merchants/visa-merchant-data-standards-manual.pdf)
[3] [Mastercard — Mastercard Merchant Category Codes for IRS Form 1099-K Reporting](https://www.mastercard.us/content/dam/mccom/global/documents/merchant-category-codes.pdf)
