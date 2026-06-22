---
type: Standard
title: PCI DSS
description: 'The Payment Card Industry Data Security Standard is a set of security requirements maintained by the PCI Security Standards Council that all entities storing, processing, or transmitting cardholder data must meet to protect that data. It defines controls across areas such as network security, encryption, access control, monitoring, and vulnerability management.'
tags:
  - pay
  - active
  - PCI Security Standards Council (PCI SSC)
timestamp: '2026-06-17T00:00:00Z'
id: pci-dss
vertical: common
category: pay
conceptType: standard
status: active
abbreviation: PCI DSS
term_ko: PCI DSS (지불카드 산업 데이터 보안 표준)
definition_ko: 'PCI DSS는 카드 소지자 데이터를 저장·처리·전송하는 모든 주체가 준수해야 하는, PCI Security Standards Council이 관리하는 보안 요구사항 집합이다. 네트워크 보안, 암호화, 접근 통제, 모니터링, 취약점 관리 등 영역의 통제 항목을 정의한다.'
longDef: 'PCI DSS applies to merchants, acquirers, processors, and service providers that handle payment card data, and compliance is enforced contractually by the card networks (Visa, Mastercard, American Express, Discover, JCB) rather than by law. The current version is v4.0.1, published in June 2024, which became the only supported version after v3.2.1 and then v4.0 were retired (v4.0.1 is the sole supported release as of 1 January 2025). It organizes requirements into 12 high-level requirements grouped under six control objectives, with validation performed via a Report on Compliance (ROC) or Self-Assessment Questionnaire (SAQ) depending on the entity''s transaction volume and processing model. Travel sellers (airlines, OTAs, hotels) that capture card data fall in scope, and approaches such as tokenization and outsourcing to a Merchant of Record are used to reduce PCI scope.'
longDef_ko: 'PCI DSS는 카드 결제 데이터를 다루는 가맹점·매입사(Acquirer)·프로세서·서비스 제공자에게 적용되며, 법률이 아니라 카드 네트워크(Visa, Mastercard, American Express 등)와의 계약으로 강제된다. 현재 버전은 2024년 6월에 발표된 v4.0.1이며, v3.2.1과 v4.0이 차례로 폐기된 뒤 2025년 1월 1일부터 유일하게 지원되는 버전이다. 6개 통제 목표 아래 12개 상위 요구사항으로 구성되며, 처리 거래량과 방식에 따라 ROC(Report on Compliance) 또는 SAQ(Self-Assessment Questionnaire)로 검증한다. 카드 데이터를 받는 항공사·OTA·호텔 등 여행 판매자도 적용 대상이며, Tokenization이나 Merchant of Record 위탁 등으로 PCI 적용 범위(scope)를 줄인다.'
standardBody: PCI Security Standards Council (PCI SSC)
aliases:
  - Payment Card Industry Data Security Standard
relationships:
  - type: related
    targetTerm: Tokenization
  - type: contrasts
    targetTerm: 3-D Secure
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: VCC
distinctions:
  - targetTerm: 3-D Secure
    explanation: 'PCI DSS is a broad data-security compliance standard for protecting stored and transmitted cardholder data, while 3-D Secure is a specific cardholder authentication protocol applied at the moment of an e-commerce transaction.'
    explanation_ko: 'PCI DSS는 저장·전송되는 카드 데이터를 보호하는 광범위한 데이터 보안 준수 표준이고, 3-D Secure는 전자상거래 거래 시점에 적용되는 특정 카드 소지자 인증 프로토콜이다.'
  - targetTerm: Tokenization
    explanation: PCI DSS is the obligation; tokenization is one technical method used to reduce the systems in scope for that obligation by removing raw PANs.
    explanation_ko: 'PCI DSS는 준수 의무이고, Tokenization은 원본 PAN을 제거해 그 의무의 적용 범위를 줄이는 데 쓰이는 기술적 수단 중 하나다.'
sources:
  - org: PCI Security Standards Council
    name: Payment Card Industry Data Security Standard (PCI DSS)
    version: 4.0.1
    section: ''
    url: 'https://www.pcisecuritystandards.org/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 5l14 5v9c0 9-6 16-14 19-8-3-14-10-14-19v-9z"/><rect x="17" y="22" width="14" height="10" rx="1.5"/><path d="M20 22v-3a4 4 0 0 1 8 0v3"/></svg>
---

> The Payment Card Industry Data Security Standard is a set of security requirements maintained by the PCI Security Standards Council that all entities storing, processing, or transmitting cardholder data must meet to protect that data. It defines controls across areas such as network security, encryption, access control, monitoring, and vulnerability management.

PCI DSS applies to merchants, acquirers, processors, and service providers that handle payment card data, and compliance is enforced contractually by the card networks (Visa, Mastercard, American Express, Discover, JCB) rather than by law. The current version is v4.0.1, published in June 2024, which became the only supported version after v3.2.1 and then v4.0 were retired (v4.0.1 is the sole supported release as of 1 January 2025). It organizes requirements into 12 high-level requirements grouped under six control objectives, with validation performed via a Report on Compliance (ROC) or Self-Assessment Questionnaire (SAQ) depending on the entity's transaction volume and processing model. Travel sellers (airlines, OTAs, hotels) that capture card data fall in scope, and approaches such as tokenization and outsourcing to a Merchant of Record are used to reduce PCI scope.

**한국어 / Korean** — **PCI DSS (지불카드 산업 데이터 보안 표준)** — PCI DSS는 카드 소지자 데이터를 저장·처리·전송하는 모든 주체가 준수해야 하는, PCI Security Standards Council이 관리하는 보안 요구사항 집합이다. 네트워크 보안, 암호화, 접근 통제, 모니터링, 취약점 관리 등 영역의 통제 항목을 정의한다.

PCI DSS는 카드 결제 데이터를 다루는 가맹점·매입사(Acquirer)·프로세서·서비스 제공자에게 적용되며, 법률이 아니라 카드 네트워크(Visa, Mastercard, American Express 등)와의 계약으로 강제된다. 현재 버전은 2024년 6월에 발표된 v4.0.1이며, v3.2.1과 v4.0이 차례로 폐기된 뒤 2025년 1월 1일부터 유일하게 지원되는 버전이다. 6개 통제 목표 아래 12개 상위 요구사항으로 구성되며, 처리 거래량과 방식에 따라 ROC(Report on Compliance) 또는 SAQ(Self-Assessment Questionnaire)로 검증한다. 카드 데이터를 받는 항공사·OTA·호텔 등 여행 판매자도 적용 대상이며, Tokenization이나 Merchant of Record 위탁 등으로 PCI 적용 범위(scope)를 줄인다.

**Aliases:** `Payment Card Industry Data Security Standard`

# Related
- [Tokenization](/common/pay/tokenization.md) — related
- [3-D Secure](/common/pay/3-d-secure.md) — contrasts
- [Merchant of Record](/common/pay/merchant-of-record.md) — related
- [VCC](/common/pay/vcc.md) — related

# Distinctions
- **PCI DSS** vs [3-D Secure](/common/pay/3-d-secure.md) — PCI DSS is a broad data-security compliance standard for protecting stored and transmitted cardholder data, while 3-D Secure is a specific cardholder authentication protocol applied at the moment of an e-commerce transaction.
- **PCI DSS** vs [Tokenization](/common/pay/tokenization.md) — PCI DSS is the obligation; tokenization is one technical method used to reduce the systems in scope for that obligation by removing raw PANs.

# Citations
[1] [PCI Security Standards Council — Payment Card Industry Data Security Standard (PCI DSS) — 4.0.1](https://www.pcisecuritystandards.org/)
