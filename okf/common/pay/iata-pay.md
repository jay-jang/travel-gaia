---
type: Provider Term
title: IATA Pay
description: 'IATA Pay is IATA''s account-to-account (open-banking) payment method that lets customers pay for airline tickets by debiting their bank account directly, rather than via a payment card. It is enabled by regulations such as the EU''s PSD2 and the UK''s Open Banking and routes through local A2A/instant-payment schemes (e.g. iDEAL, UPI, PIX), with the aim of lowering payment-acceptance costs for airlines.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: iata-pay
vertical: common
category: pay
conceptType: provider-term
status: active
term_ko: IATA Pay
definition_ko: 'IATA Pay는 고객이 결제 카드 대신 자신의 은행 계좌에서 직접 출금하여 항공권 대금을 지불하도록 하는, IATA의 계좌 간(account-to-account, 오픈뱅킹) 결제 수단이다. EU의 PSD2와 영국의 오픈뱅킹 같은 규제로 가능해졌으며, 현지 A2A/즉시결제 스킴(예: iDEAL, UPI, PIX)을 통해 라우팅되어 항공사의 결제 수납 비용을 낮추는 것을 목표로 한다.'
longDef: 'At checkout the customer selects an account-to-account form of payment; IATA Pay then orchestrates an API request so that funds move directly from the customer''s bank account using local open-banking or instant-payment rails, often confirmed by bank authentication or a QR scan. Because it bypasses card-network interchange and acquiring, IATA Pay can cut payment-processing costs substantially and reduce card-related fraud and chargeback exposure for direct and NDC sales. It is operationally delivered through payment platforms such as Outpayce''s Xchange Payments Platform and is distinct from card-funded settlement tools.'
longDef_ko: '결제 단계에서 고객이 계좌 간 결제수단을 선택하면, IATA Pay가 API 요청을 오케스트레이션하여 현지 오픈뱅킹 또는 즉시결제 레일을 통해 고객 은행 계좌에서 자금이 직접 이동하도록 하며, 이는 흔히 은행 인증이나 QR 스캔으로 확인된다. 카드 네트워크의 인터체인지와 매입(acquiring)을 우회하므로, IATA Pay는 결제 처리 비용을 크게 절감하고 직판 및 NDC 판매에서 카드 관련 사기·차지백 노출을 줄일 수 있다. 운영상으로는 Outpayce의 Xchange Payments Platform 같은 결제 플랫폼을 통해 제공되며, 카드 자금 기반 정산 도구와는 구별된다.'
standardBody: IATA
aliases:
  - IATAPay
providerTerms:
  - provider: IATA
    term: IATA Pay
    context: IATA's account-to-account / open-banking payment method for airline ticket sales
    context_ko: 항공권 판매를 위한 IATA의 계좌 간/오픈뱅킹 결제 수단
    relationship: same
  - provider: Outpayce (Amadeus)
    term: IATA Pay via Xchange Payments Platform (XPP)
    context: Outpayce provides platform connectivity so airlines can accept IATA Pay account-to-account payments
    context_ko: Outpayce는 항공사가 IATA Pay 계좌 간 결제를 수용할 수 있도록 플랫폼 연결을 제공한다
    relationship: related
relationships:
  - type: contrasts
    targetTerm: IATA EasyPay
  - type: related
    targetTerm: Form of Payment
  - type: related
    targetTerm: Strong Customer Authentication
  - type: related
    targetTerm: NDC
distinctions:
  - targetTerm: IATA EasyPay
    explanation: 'IATA EasyPay is a prepaid e-wallet that travel agents fund (typically by bank transfer/Direct Debit) and use to pay airlines through the BSP as an alternative to credit cards, whereas IATA Pay is an account-to-account/open-banking method for end customers paying airlines directly, bypassing card networks entirely.'
    explanation_ko: 'IATA EasyPay는 여행사(대리점)가 (보통 계좌이체/자동출금으로) 충전하여 신용카드 대신 BSP를 통해 항공사에 지불하는 선불 전자지갑인 반면, IATA Pay는 최종 고객이 카드 네트워크를 완전히 우회하여 항공사에 직접 지불하는 계좌 간/오픈뱅킹 방식이다.'
  - targetTerm: 3-D Secure
    explanation: '3-D Secure is a card authentication layer; IATA Pay is not a card method at all and instead relies on the customer''s bank authentication under open-banking rules, so 3DS does not apply to it.'
    explanation_ko: '3-D Secure는 카드 인증 계층이지만, IATA Pay는 애초에 카드 방식이 아니며 오픈뱅킹 규칙 하에서 고객 은행의 인증에 의존하므로 3DS가 적용되지 않는다.'
sources:
  - org: IATA
    name: IATA Pay
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/iata-pay/'
    tier: association
  - org: Outpayce from Amadeus
    name: IATA and Outpayce help airlines accept account-to-account payments
    version: ''
    section: ''
    url: 'https://outpayce.com/en/resources/news/iata-and-outpayce-help-airlines-accept-account-to-account-payments'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16h32M8 16l16-9 16 9M12 16v16m8-16v16m8-16v16m8-16v16M8 38h32"/><path d="M20 24h8"/></svg>
---

> IATA Pay is IATA's account-to-account (open-banking) payment method that lets customers pay for airline tickets by debiting their bank account directly, rather than via a payment card. It is enabled by regulations such as the EU's PSD2 and the UK's Open Banking and routes through local A2A/instant-payment schemes (e.g. iDEAL, UPI, PIX), with the aim of lowering payment-acceptance costs for airlines.

At checkout the customer selects an account-to-account form of payment; IATA Pay then orchestrates an API request so that funds move directly from the customer's bank account using local open-banking or instant-payment rails, often confirmed by bank authentication or a QR scan. Because it bypasses card-network interchange and acquiring, IATA Pay can cut payment-processing costs substantially and reduce card-related fraud and chargeback exposure for direct and NDC sales. It is operationally delivered through payment platforms such as Outpayce's Xchange Payments Platform and is distinct from card-funded settlement tools.

**한국어 / Korean** — IATA Pay는 고객이 결제 카드 대신 자신의 은행 계좌에서 직접 출금하여 항공권 대금을 지불하도록 하는, IATA의 계좌 간(account-to-account, 오픈뱅킹) 결제 수단이다. EU의 PSD2와 영국의 오픈뱅킹 같은 규제로 가능해졌으며, 현지 A2A/즉시결제 스킴(예: iDEAL, UPI, PIX)을 통해 라우팅되어 항공사의 결제 수납 비용을 낮추는 것을 목표로 한다.

결제 단계에서 고객이 계좌 간 결제수단을 선택하면, IATA Pay가 API 요청을 오케스트레이션하여 현지 오픈뱅킹 또는 즉시결제 레일을 통해 고객 은행 계좌에서 자금이 직접 이동하도록 하며, 이는 흔히 은행 인증이나 QR 스캔으로 확인된다. 카드 네트워크의 인터체인지와 매입(acquiring)을 우회하므로, IATA Pay는 결제 처리 비용을 크게 절감하고 직판 및 NDC 판매에서 카드 관련 사기·차지백 노출을 줄일 수 있다. 운영상으로는 Outpayce의 Xchange Payments Platform 같은 결제 플랫폼을 통해 제공되며, 카드 자금 기반 정산 도구와는 구별된다.

**Aliases:** `IATAPay`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `IATA Pay` | same | IATA's account-to-account / open-banking payment method for airline ticket sales |
| Outpayce (Amadeus) | `IATA Pay via Xchange Payments Platform (XPP)` | related | Outpayce provides platform connectivity so airlines can accept IATA Pay account-to-account payments |

# Related
- [IATA EasyPay](/common/pay/iata-easypay.md) — contrasts
- [Form of Payment](/common/pay/form-of-payment.md) — related
- [Strong Customer Authentication](/common/pay/strong-customer-authentication.md) — related
- [NDC](/common/standards/ndc.md) — related

# Distinctions
- **IATA Pay** vs [IATA EasyPay](/common/pay/iata-easypay.md) — IATA EasyPay is a prepaid e-wallet that travel agents fund (typically by bank transfer/Direct Debit) and use to pay airlines through the BSP as an alternative to credit cards, whereas IATA Pay is an account-to-account/open-banking method for end customers paying airlines directly, bypassing card networks entirely.
- **IATA Pay** vs [3-D Secure](/common/pay/3-d-secure.md) — 3-D Secure is a card authentication layer; IATA Pay is not a card method at all and instead relies on the customer's bank authentication under open-banking rules, so 3DS does not apply to it.

# Citations
[1] [IATA — IATA Pay](https://www.iata.org/en/services/finance/iata-pay/)
[2] [Outpayce from Amadeus — IATA and Outpayce help airlines accept account-to-account payments](https://outpayce.com/en/resources/news/iata-and-outpayce-help-airlines-accept-account-to-account-payments)
