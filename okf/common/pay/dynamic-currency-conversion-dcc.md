---
type: Business Term
title: Dynamic Currency Conversion (DCC)
description: 'Dynamic Currency Conversion (DCC) is an option offered at the point of sale that lets a foreign cardholder pay in their home currency instead of the merchant''s local currency, with the conversion performed by the merchant or its provider rather than the card issuer. Card-scheme rules require that DCC be offered transparently and chosen actively by the cardholder, disclosing both currency amounts, the exchange rate and any margin.'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: dynamic-currency-conversion-dcc
vertical: common
category: pay
conceptType: business-term
status: active
abbreviation: DCC
term_ko: 동적 통화 환산(DCC)
definition_ko: 'DCC(Dynamic Currency Conversion)는 결제 시점에 제공되는 옵션으로, 외국 카드 소지자가 가맹점의 현지 통화 대신 자국 통화로 결제하게 하며, 환산은 카드 발급사가 아니라 가맹점 또는 그 제공자가 수행한다. 카드 스킴 규칙은 DCC가 투명하게 제시되고 카드 소지자가 능동적으로 선택하도록 요구하며, 두 통화 금액·환율·마진을 모두 공개해야 한다.'
longDef: 'DCC is common in travel at hotels, car-rental desks, airline counters and e-commerce checkouts where the cardholder''s billing currency differs from the merchant''s. Visa and Mastercard impose strict consent and disclosure rules: the cardholder must be given a genuine, unpressured choice to decline and pay in local currency; both the local and home-currency amounts, the applied conversion rate and the margin must be displayed; and DCC must not be the default or use biased language. Non-compliant DCC can draw scheme fines and loss of DCC privileges. While DCC can generate revenue for the travel merchant and acquirer, it usually costs the cardholder more than the issuer''s own conversion, making disclosure central. DCC operates at the point of sale and is distinct from the ISO 4217 currency code that merely identifies the currency.'
longDef_ko: 'DCC는 카드 소지자의 청구 통화가 가맹점 통화와 다른 호텔, 렌터카 데스크, 항공사 카운터, 전자상거래 결제 등 여행 분야에서 흔하다. Visa와 Mastercard는 엄격한 동의·공개 규칙을 부과한다. 카드 소지자에게는 거절하고 현지 통화로 결제할 수 있는, 압박 없는 진정한 선택권이 주어져야 하고, 현지 통화와 자국 통화 금액·적용 환율·마진이 모두 표시되어야 하며, DCC가 기본값이거나 편향된 표현을 써서는 안 된다. 규정을 위반한 DCC는 스킴 벌금과 DCC 권한 상실을 초래할 수 있다. DCC는 여행 가맹점과 매입사에 수익을 낼 수 있지만 보통 발급사 자체 환산보다 카드 소지자에게 더 비싸므로 공개가 핵심이다. DCC는 결제 시점에 작동하며, 통화를 식별만 하는 ISO 4217 Currency Code와는 구별된다.'
aliases:
  - DCC
  - Dynamic Currency Conversion
providerTerms:
  - provider: Mastercard / Visa
    term: Cardholder choice / active choice
    context: Scheme requirement that the cardholder must affirmatively opt into DCC and may decline to pay in local currency.
    context_ko: 카드 소지자가 DCC를 적극적으로 선택해야 하며 현지 통화 결제를 위해 거절할 수 있다는 스킴 요건.
    relationship: related
  - provider: Fexco
    term: Fexco DCC
    context: Major third-party DCC technology and FX-rate provider pre-integrated with acquirers and PSPs at POS and e-commerce.
    context_ko: POS·전자상거래에서 매입사·PSP와 사전 통합된 주요 제3자 DCC 기술 및 환율 제공업체.
    relationship: related
  - provider: Global Blue
    term: Global Blue DCC / Currency Choice
    context: 'DCC rate-and-technology provider, well known in travel retail, offering cardholders home-currency payment at checkout.'
    context_ko: '트래블 리테일에서 잘 알려진 DCC 환율·기술 제공업체로, 결제 시 카드소지자에게 자국 통화 결제를 제공한다.'
    relationship: related
  - provider: Planet
    term: Planet (proprietary DCC)
    context: Acquirer/payments group offering an in-house DCC solution widely deployed in hospitality and retail.
    context_ko: 호스피탈리티·리테일에 널리 배포된 자체 DCC 솔루션을 제공하는 매입/결제 그룹.
    relationship: related
relationships:
  - type: related
    targetTerm: ISO 4217 Currency Code
  - type: related
    targetTerm: Acquirer
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: Interchange Fee
distinctions:
  - targetTerm: ISO 4217 Currency Code
    explanation: ISO 4217 is the standard that names and codes currencies; DCC is a commercial point-of-sale conversion service that chooses which currency the cardholder is billed in.
    explanation_ko: 'ISO 4217은 통화를 명명·코드화하는 표준이고, DCC는 카드 소지자가 어떤 통화로 청구될지를 선택하게 하는 결제 시점의 상업적 환산 서비스다.'
sources:
  - org: Mastercard
    name: Dynamic Currency Conversion Compliance Guide
    version: ''
    section: ''
    url: 'https://www.mastercard.com/content/dam/mccom/shared/business/support/rules-pdfs/DCC-Guide-2025-Merchant-Version.pdf'
  - org: Adyen
    name: Dynamic Currency Conversion (DCC) - Rules & Regulations
    version: ''
    section: ''
    url: 'https://help.adyen.com/en_US/knowledge/in-person-payments/terminal-features/dynamic-currency-conversion-dcc-rules-regulations'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 16h22"/><path d="M26 10l6 6-6 6"/><path d="M38 32H16"/><path d="M22 26l-6 6 6 6"/><circle cx="13" cy="13" r="3"/><circle cx="35" cy="35" r="3"/></svg>
---

> Dynamic Currency Conversion (DCC) is an option offered at the point of sale that lets a foreign cardholder pay in their home currency instead of the merchant's local currency, with the conversion performed by the merchant or its provider rather than the card issuer. Card-scheme rules require that DCC be offered transparently and chosen actively by the cardholder, disclosing both currency amounts, the exchange rate and any margin.

DCC is common in travel at hotels, car-rental desks, airline counters and e-commerce checkouts where the cardholder's billing currency differs from the merchant's. Visa and Mastercard impose strict consent and disclosure rules: the cardholder must be given a genuine, unpressured choice to decline and pay in local currency; both the local and home-currency amounts, the applied conversion rate and the margin must be displayed; and DCC must not be the default or use biased language. Non-compliant DCC can draw scheme fines and loss of DCC privileges. While DCC can generate revenue for the travel merchant and acquirer, it usually costs the cardholder more than the issuer's own conversion, making disclosure central. DCC operates at the point of sale and is distinct from the ISO 4217 currency code that merely identifies the currency.

**한국어 / Korean** — **동적 통화 환산(DCC)** — DCC(Dynamic Currency Conversion)는 결제 시점에 제공되는 옵션으로, 외국 카드 소지자가 가맹점의 현지 통화 대신 자국 통화로 결제하게 하며, 환산은 카드 발급사가 아니라 가맹점 또는 그 제공자가 수행한다. 카드 스킴 규칙은 DCC가 투명하게 제시되고 카드 소지자가 능동적으로 선택하도록 요구하며, 두 통화 금액·환율·마진을 모두 공개해야 한다.

DCC는 카드 소지자의 청구 통화가 가맹점 통화와 다른 호텔, 렌터카 데스크, 항공사 카운터, 전자상거래 결제 등 여행 분야에서 흔하다. Visa와 Mastercard는 엄격한 동의·공개 규칙을 부과한다. 카드 소지자에게는 거절하고 현지 통화로 결제할 수 있는, 압박 없는 진정한 선택권이 주어져야 하고, 현지 통화와 자국 통화 금액·적용 환율·마진이 모두 표시되어야 하며, DCC가 기본값이거나 편향된 표현을 써서는 안 된다. 규정을 위반한 DCC는 스킴 벌금과 DCC 권한 상실을 초래할 수 있다. DCC는 여행 가맹점과 매입사에 수익을 낼 수 있지만 보통 발급사 자체 환산보다 카드 소지자에게 더 비싸므로 공개가 핵심이다. DCC는 결제 시점에 작동하며, 통화를 식별만 하는 ISO 4217 Currency Code와는 구별된다.

**Aliases:** `DCC`, `Dynamic Currency Conversion`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Mastercard / Visa | `Cardholder choice / active choice` | related | Scheme requirement that the cardholder must affirmatively opt into DCC and may decline to pay in local currency. |
| Fexco | `Fexco DCC` | related | Major third-party DCC technology and FX-rate provider pre-integrated with acquirers and PSPs at POS and e-commerce. |
| Global Blue | `Global Blue DCC / Currency Choice` | related | DCC rate-and-technology provider, well known in travel retail, offering cardholders home-currency payment at checkout. |
| Planet | `Planet (proprietary DCC)` | related | Acquirer/payments group offering an in-house DCC solution widely deployed in hospitality and retail. |

# Related
- [ISO 4217 Currency Code](/common/codes/iso-4217-currency-code.md) — related
- [Acquirer](/common/pay/acquirer.md) — related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related
- [Interchange Fee](/common/pay/interchange-fee.md) — related

# Distinctions
- **Dynamic Currency Conversion (DCC)** vs [ISO 4217 Currency Code](/common/codes/iso-4217-currency-code.md) — ISO 4217 is the standard that names and codes currencies; DCC is a commercial point-of-sale conversion service that chooses which currency the cardholder is billed in.

# Citations
[1] [Mastercard — Dynamic Currency Conversion Compliance Guide](https://www.mastercard.com/content/dam/mccom/shared/business/support/rules-pdfs/DCC-Guide-2025-Merchant-Version.pdf)
[2] [Adyen — Dynamic Currency Conversion (DCC) - Rules & Regulations](https://help.adyen.com/en_US/knowledge/in-person-payments/terminal-features/dynamic-currency-conversion-dcc-rules-regulations)
