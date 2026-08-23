---
type: Business Term
title: Alternative Payment Method
description: 'Any payment instrument other than a traditional credit or debit card that is accepted for travel transactions, including digital wallets, bank transfers, buy now pay later schemes, prepaid vouchers, virtual account numbers, and region-specific local payment schemes. APMs have grown rapidly as carriers and OTAs seek to capture demand from card-averse markets and younger travellers.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-08-23T00:00:00Z'
id: alternative-payment-method
vertical: common
category: pay
conceptType: business-term
status: active
abbreviation: APM
term_ko: 대안적 결제 수단(APM)
definition_ko: '전통적인 신용·직불카드 이외에 여행 거래에서 허용되는 모든 결제 수단. 디지털 지갑, 계좌이체, 선구매후지불(BNPL), 선불 바우처, 가상 계좌 번호, 지역 특화 결제 수단 등이 포함된다. 카드 사용을 꺼리는 시장과 젊은 여행자 수요를 포착하기 위해 항공사와 OTA를 중심으로 APM 도입이 빠르게 확산되고 있다.'
longDef: 'APMs encompass a broad and growing range of non-card instruments: bank-account–based transfers (e.g., iDEAL in the Netherlands, Sofort in Germany, PIX in Brazil), digital wallets (PayPal, Alipay, WeChat Pay, Apple Pay, Google Pay), buy now pay later (BNPL) products (Klarna, Afterpay, Affirm), airline-specific instruments such as UATP, virtual credit cards (VCC) used in B2B channels, prepaid travel vouchers, and direct airline credit (flight credit). The mix of accepted APMs varies by market: in many Asian markets digital wallets account for the majority of travel payments, while in Europe account-based schemes and BNPL are growing fastest. From a merchant perspective, APMs typically involve different settlement, chargeback, and reconciliation mechanics compared to card schemes, and may require separate gateway integrations and PSP relationships. IATA has published guidance on APM acceptance in the airline context. Tokenization increasingly underpins digital wallet APMs, improving security and enabling one-click repeat purchases.'
longDef_ko: 'APM은 계좌 기반 이체(네덜란드의 iDEAL, 독일의 Sofort, 브라질의 PIX), 디지털 지갑(PayPal, Alipay, WeChat Pay, Apple Pay, Google Pay), 선구매후지불(BNPL) 상품(Klarna, Afterpay, Affirm), 항공사 전용 수단(UATP), B2B 채널에서 사용되는 VCC(가상 신용카드), 선불 여행 바우처, 직항 크레딧(항공사 크레딧) 등 광범위하고 빠르게 성장하는 비카드 수단을 포괄한다. 허용되는 APM 조합은 시장마다 다르다. 많은 아시아 시장에서 디지털 지갑이 여행 결제의 대부분을 차지하고, 유럽에서는 계좌 기반 수단과 BNPL이 가장 빠르게 성장하고 있다. 가맹점 관점에서 APM은 일반적으로 카드 수단과 다른 정산·차지백·대사 방식을 수반하며, 별도의 게이트웨이 통합 및 PSP 계약이 필요할 수 있다. IATA는 항공사 맥락에서의 APM 수락에 관한 가이드라인을 발표했다. 토큰화는 점점 더 디지털 지갑 APM의 기반이 되어 보안을 강화하고 원클릭 재구매를 가능하게 한다.'
aliases:
  - APM
  - Non-Card Payment
  - Local Payment Method
  - Digital Wallet
providerTerms:
  - provider: IATA
    term: Alternative Forms of Payment
    context: IATA uses "Alternative Forms of Payment" in its payment guidance, covering wallets, bank transfers, and local schemes accepted by airlines via BSP or direct channels.
    context_ko: IATA는 결제 가이드라인에서 "Alternative Forms of Payment"라는 용어를 사용하며, BSP 또는 직접 채널을 통해 항공사가 허용하는 지갑·계좌이체·현지 수단을 포괄한다.
    relationship: same
  - provider: Worldpay / FIS
    term: Alternative Payment Methods (APMs)
    context: Payment processors such as Worldpay use APM as the standard industry label in their annual Global Payments Reports, categorising digital wallets, bank transfers, BNPL, and local schemes.
    context_ko: Worldpay 등 결제 처리업체는 연간 글로벌 결제 보고서에서 디지털 지갑·계좌이체·BNPL·현지 수단을 분류하는 업계 표준 용어로 APM을 사용한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Buy Now Pay Later
  - type: related
    targetTerm: Tokenization
  - type: related
    targetTerm: Payment Gateway
  - type: related
    targetTerm: UATP
  - type: related
    targetTerm: VCC
distinctions:
  - targetTerm: Buy Now Pay Later
    explanation: 'Buy Now Pay Later (BNPL) is one specific type of alternative payment method that defers or installs payment; APM is the broader category covering all non-traditional-card instruments including BNPL.'
    explanation_ko: 'BNPL(선구매후지불)은 결제를 이연하거나 분할하는 특정 APM 유형이고, APM은 BNPL을 포함한 모든 비전통카드 수단을 망라하는 더 넓은 범주이다.'
  - targetTerm: UATP
    explanation: 'UATP (Universal Air Travel Plan) is a specific airline-sector payment network and card product; APM is the general label for all non-card-scheme payment methods, of which UATP is one industry-specific example.'
    explanation_ko: 'UATP(Universal Air Travel Plan)는 항공 업계 전용 결제 네트워크이자 카드 상품이고, APM은 모든 비카드 결제 수단에 대한 일반 명칭으로 UATP는 그 업계 특화 예시 중 하나다.'
sources:
  - name: IATA — Payment Methods in the Airline Industry
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/payment-methods/'
    tier: association
  - name: Global Payments Report
    org: Worldpay / FIS
    version: '2024'
    section: ''
    url: 'https://worldpay.com/en-gb/worldpay-us/insights/global-payments-report'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="16" r="5"/><line x1="24" y1="21" x2="24" y2="28"/><line x1="24" y1="28" x2="14" y2="36"/><line x1="24" y1="28" x2="24" y2="36"/><line x1="24" y1="28" x2="34" y2="36"/><rect x="10" y="35" width="8" height="6" rx="1"/><rect x="20" y="35" width="8" height="6" rx="1"/><rect x="30" y="35" width="8" height="6" rx="1"/></svg>
---

> Any payment instrument other than a traditional credit or debit card that is accepted for travel transactions, including digital wallets, bank transfers, buy now pay later schemes, prepaid vouchers, virtual account numbers, and region-specific local payment schemes. APMs have grown rapidly as carriers and OTAs seek to capture demand from card-averse markets and younger travellers.

APMs encompass a broad and growing range of non-card instruments: bank-account–based transfers (e.g., iDEAL in the Netherlands, Sofort in Germany, PIX in Brazil), digital wallets (PayPal, Alipay, WeChat Pay, Apple Pay, Google Pay), buy now pay later (BNPL) products (Klarna, Afterpay, Affirm), airline-specific instruments such as UATP, virtual credit cards (VCC) used in B2B channels, prepaid travel vouchers, and direct airline credit (flight credit). The mix of accepted APMs varies by market: in many Asian markets digital wallets account for the majority of travel payments, while in Europe account-based schemes and BNPL are growing fastest. From a merchant perspective, APMs typically involve different settlement, chargeback, and reconciliation mechanics compared to card schemes, and may require separate gateway integrations and PSP relationships. IATA has published guidance on APM acceptance in the airline context. Tokenization increasingly underpins digital wallet APMs, improving security and enabling one-click repeat purchases.

**한국어 / Korean** — **대안적 결제 수단(APM)** — 전통적인 신용·직불카드 이외에 여행 거래에서 허용되는 모든 결제 수단. 디지털 지갑, 계좌이체, BNPL, 선불 바우처, 가상 계좌 번호, 지역 특화 결제 수단 등이 포함된다. 카드 사용을 꺼리는 시장과 젊은 여행자 수요를 포착하기 위해 항공사와 OTA를 중심으로 APM 도입이 빠르게 확산되고 있다.

APM은 계좌 기반 이체(네덜란드 iDEAL, 독일 Sofort, 브라질 PIX), 디지털 지갑(PayPal, Alipay, WeChat Pay), BNPL 상품(Klarna, Afterpay), 항공사 전용 수단(UATP), B2B 채널의 VCC, 선불 바우처, 항공사 크레딧 등 광범위하고 빠르게 성장하는 비카드 수단을 포괄한다.

**Aliases:** `APM`, `Non-Card Payment`, `Local Payment Method`, `Digital Wallet`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `Alternative Forms of Payment` | same | IATA uses "Alternative Forms of Payment" in its payment guidance, covering wallets, bank transfers, and local schemes accepted by airlines via BSP or direct channels. |
| Worldpay / FIS | `Alternative Payment Methods (APMs)` | same | Payment processors such as Worldpay use APM as the standard industry label in their annual Global Payments Reports, categorising digital wallets, bank transfers, BNPL, and local schemes. |

# Related
- [Buy Now Pay Later](/common/pay/buy-now-pay-later.md) — related
- [Tokenization](/common/pay/tokenization.md) — related
- [Payment Gateway](/common/pay/payment-gateway.md) — related
- [UATP](/common/pay/uatp.md) — related
- [VCC](/common/pay/vcc.md) — related

# Distinctions
- **Alternative Payment Method** vs [Buy Now Pay Later](/common/pay/buy-now-pay-later.md) — Buy Now Pay Later (BNPL) is one specific type of alternative payment method that defers or installs payment; APM is the broader category covering all non-traditional-card instruments including BNPL.
- **Alternative Payment Method** vs [UATP](/common/pay/uatp.md) — UATP (Universal Air Travel Plan) is a specific airline-sector payment network and card product; APM is the general label for all non-card-scheme payment methods, of which UATP is one industry-specific example.

# Citations
[1] [IATA — IATA — Payment Methods in the Airline Industry](https://www.iata.org/en/services/finance/payment-methods/)
[2] [Worldpay / FIS — Global Payments Report — 2024](https://worldpay.com/en-gb/worldpay-us/insights/global-payments-report)
