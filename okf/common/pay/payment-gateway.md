---
type: System
title: Payment Gateway
description: 'A payment gateway is a technology service that securely captures payment card authorization requests at a merchant''s checkout or booking interface, encrypts and transmits them to the card network and acquiring bank, and returns the approval or decline response in real time. In travel, gateways sit between booking engines (airlines, OTAs, hotels, tour operators) and the broader payment ecosystem, providing PCI DSS scope reduction through tokenization, 3-D Secure authentication orchestration, multi-currency support, and fraud-screening integration.'
tags:
  - pay
  - active
  - PCI SSC
timestamp: '2026-08-05T00:00:00Z'
id: payment-gateway
vertical: common
category: pay
conceptType: system
status: active
standardBody: PCI SSC
term_ko: 결제 게이트웨이(Payment Gateway)
definition_ko: '결제 게이트웨이는 판매자의 결제·예약 인터페이스에서 카드 결제 승인 요청을 안전하게 수집·암호화하여 카드 네트워크 및 매입 은행으로 전송하고, 승인 또는 거절 응답을 실시간으로 반환하는 기술 서비스다. 여행 업계에서 게이트웨이는 예약 엔진(항공사·OTA·호텔·투어 오퍼레이터)과 결제 생태계 사이에 위치하며, 토큰화를 통한 PCI DSS 범위 축소, 3-D Secure 인증 조율, 다중 통화 지원, 사기 탐지 연동을 제공한다.'
longDef: 'Travel-specific gateways process high-value bookings, international multi-currency transactions, and complex settlement paths — such as BSP airline ticketing or hotel switch-based routing — that layer above the basic card authorization. Key gateway functions include: (1) encryption and transmission of PAN data, typically replacing raw card numbers with tokens to reduce PCI DSS scope for the merchant; (2) routing to multiple acquirers for optimized approval rates or least-cost processing; (3) dynamic currency conversion (DCC) offering; (4) orchestrating 3-D Secure (3DS 2.x) friction-based authentication; and (5) returning structured authorization responses (approval codes, decline reasons) to the booking system. Well-known travel-market gateway providers include Adyen, Stripe, Braintree (PayPal), Cybersource (Visa), and Worldpay.'
longDef_ko: '여행 특화 게이트웨이는 고액 예약, 국제 다중 통화 거래, BSP 항공권 발권 또는 호텔 스위치 기반 라우팅처럼 기본 카드 승인 위에 층을 이루는 복잡한 정산 경로를 처리한다. 주요 기능에는 (1) PAN 데이터 암호화 및 전송 — 원시 카드 번호를 토큰으로 대체하여 PCI DSS 범위 축소; (2) 최적 승인율·최저 비용을 위한 복수 매입사(Acquirer) 라우팅; (3) 동적 통화 변환(DCC) 제공; (4) 3-D Secure(3DS 2.x) 마찰 기반 인증 조율; (5) 예약 시스템에 구조화된 승인 응답(승인 코드·거절 사유) 반환이 포함된다. 주요 여행 시장 게이트웨이 제공업체로는 Adyen, Stripe, Braintree(PayPal), Cybersource(Visa), Worldpay 등이 있다.'
aliases:
  - Payment Gateway Service
  - Card Gateway
  - Pay Gateway
relationships:
  - type: related
    targetTerm: Acquirer
  - type: related
    targetTerm: 3-D Secure
  - type: related
    targetTerm: Tokenization
  - type: related
    targetTerm: PCI DSS
  - type: related
    targetTerm: Merchant of Record
distinctions:
  - targetTerm: Acquirer
    explanation: 'The acquirer is the licensed financial institution that holds the merchant account and sponsors the merchant into the card networks, bearing the financial settlement risk; the payment gateway is the technology layer that routes authorization messages between the merchant''s system and that acquirer.'
    explanation_ko: '매입사(Acquirer)는 가맹점 계좌를 보유하고 가맹점을 카드 네트워크에 연결하며 금융 정산 위험을 부담하는 인가 금융기관이고, 결제 게이트웨이는 가맹점 시스템과 그 매입사 사이에서 승인 메시지를 라우팅하는 기술 레이어다.'
  - targetTerm: Tokenization
    explanation: 'Tokenization replaces a card PAN with a non-spendable surrogate value for secure storage and re-use; the payment gateway orchestrates the real-time authorization flow and typically triggers tokenization as part of that flow to reduce the merchant''s PCI DSS scope.'
    explanation_ko: '토큰화는 안전한 저장·재사용을 위해 카드 PAN을 사용 불가한 대체 값으로 교체하는 기법이고, 결제 게이트웨이는 실시간 승인 흐름을 조율하며 판매자의 PCI DSS 범위 축소를 위해 그 흐름의 일부로 토큰화를 촉발한다.'
  - targetTerm: Merchant of Record
    explanation: 'The Merchant of Record is the entity that legally accepts payment from the customer and appears on the card statement; the payment gateway is the technical conduit that routes and processes that payment regardless of which entity is the Merchant of Record.'
    explanation_ko: 'Merchant of Record(MoR)는 고객으로부터 법적으로 결제를 수령하고 카드 명세서에 표시되는 주체이고, 결제 게이트웨이는 어떤 주체가 MoR인지와 무관하게 결제를 라우팅·처리하는 기술적 통로다.'
sources:
  - name: PCI DSS v4.0 — Glossary of Terms, Abbreviations, and Acronyms
    org: PCI Security Standards Council (PCI SSC)
    version: v4.0 (2022)
    section: Payment Gateway definition
    url: 'https://www.pcisecuritystandards.org/document_library/'
    tier: standard-body
  - name: EMV 3-D Secure — Specification Overview
    org: EMVCo
    version: '2.3'
    section: ''
    url: 'https://www.emvco.com/emv-technologies/3d-secure/'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="15" width="16" height="18" rx="2"/><line x1="4" y1="24" x2="16" y2="24"/><line x1="32" y1="24" x2="44" y2="24"/><path d="M8 20l-4 4 4 4"/><path d="M40 20l4 4-4 4"/><line x1="20" y1="21" x2="28" y2="21"/><line x1="20" y1="24" x2="28" y2="24"/><line x1="20" y1="27" x2="28" y2="27"/></svg>
---

> A payment gateway is a technology service that securely captures payment card authorization requests at a merchant's checkout or booking interface, encrypts and transmits them to the card network and acquiring bank, and returns the approval or decline response in real time. In travel, gateways sit between booking engines (airlines, OTAs, hotels, tour operators) and the broader payment ecosystem, providing PCI DSS scope reduction through tokenization, 3-D Secure authentication orchestration, multi-currency support, and fraud-screening integration.

Travel-specific gateways process high-value bookings, international multi-currency transactions, and complex settlement paths — such as BSP airline ticketing or hotel switch-based routing — that layer above the basic card authorization. Key gateway functions include: (1) encryption and transmission of PAN data, typically replacing raw card numbers with tokens to reduce PCI DSS scope for the merchant; (2) routing to multiple acquirers for optimized approval rates or least-cost processing; (3) dynamic currency conversion (DCC) offering; (4) orchestrating 3-D Secure (3DS 2.x) friction-based authentication; and (5) returning structured authorization responses (approval codes, decline reasons) to the booking system. Well-known travel-market gateway providers include Adyen, Stripe, Braintree (PayPal), Cybersource (Visa), and Worldpay.

**한국어 / Korean** — **결제 게이트웨이(Payment Gateway)** — 결제 게이트웨이는 판매자의 결제·예약 인터페이스에서 카드 결제 승인 요청을 안전하게 수집·암호화하여 카드 네트워크 및 매입 은행으로 전송하고, 승인 또는 거절 응답을 실시간으로 반환하는 기술 서비스다. 여행 업계에서 게이트웨이는 예약 엔진(항공사·OTA·호텔·투어 오퍼레이터)과 결제 생태계 사이에 위치하며, 토큰화를 통한 PCI DSS 범위 축소, 3-D Secure 인증 조율, 다중 통화 지원, 사기 탐지 연동을 제공한다.

여행 특화 게이트웨이는 고액 예약, 국제 다중 통화 거래, BSP 항공권 발권 또는 호텔 스위치 기반 라우팅처럼 기본 카드 승인 위에 층을 이루는 복잡한 정산 경로를 처리한다. 주요 기능에는 PAN 데이터 암호화 및 전송(토큰화를 통한 PCI DSS 범위 축소), 복수 매입사 라우팅, 동적 통화 변환(DCC) 제공, 3-D Secure 인증 조율, 구조화된 승인 응답 반환이 포함된다.

**Aliases:** `Payment Gateway Service`, `Card Gateway`, `Pay Gateway`

# Related
- [Acquirer](/common/pay/acquirer.md) — related
- [3-D Secure](/common/pay/3-d-secure.md) — related
- [Tokenization](/common/pay/tokenization.md) — related
- [PCI DSS](/common/pay/pci-dss.md) — related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related

# Distinctions
- **Payment Gateway** vs [Acquirer](/common/pay/acquirer.md) — The acquirer is the licensed financial institution that holds the merchant account and sponsors the merchant into the card networks, bearing the financial settlement risk; the payment gateway is the technology layer that routes authorization messages between the merchant's system and that acquirer.
- **Payment Gateway** vs [Tokenization](/common/pay/tokenization.md) — Tokenization replaces a card PAN with a non-spendable surrogate value for secure storage and re-use; the payment gateway orchestrates the real-time authorization flow and typically triggers tokenization as part of that flow to reduce the merchant's PCI DSS scope.
- **Payment Gateway** vs [Merchant of Record](/common/pay/merchant-of-record.md) — The Merchant of Record is the entity that legally accepts payment from the customer and appears on the card statement; the payment gateway is the technical conduit that routes and processes that payment regardless of which entity is the Merchant of Record.

# Citations
[1] [PCI Security Standards Council (PCI SSC) — PCI DSS v4.0 — Glossary of Terms, Abbreviations, and Acronyms — v4.0 (2022)](https://www.pcisecuritystandards.org/document_library/)
[2] [EMVCo — EMV 3-D Secure — Specification Overview](https://www.emvco.com/emv-technologies/3d-secure/)
