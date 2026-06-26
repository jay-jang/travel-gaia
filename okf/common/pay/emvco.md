---
type: Standard
title: EMVCo
description: 'EMVCo is the global technical body, collectively owned by six major payment networks (American Express, Discover, JCB, Mastercard, UnionPay, and Visa), that manages and evolves the EMV specifications — including chip, contactless, payment tokenization, and EMV 3-D Secure (3DS) — that secure card-based payments worldwide.'
tags:
  - pay
  - active
  - EMVCo
timestamp: '2026-06-26T00:00:00Z'
id: emvco
vertical: common
category: pay
conceptType: standard
status: active
abbreviation: EMVCo
term_ko: EMVCo
definition_ko: 'EMVCo는 6개 주요 카드 결제 네트워크(American Express, Discover, JCB, Mastercard, UnionPay, Visa)가 공동 소유하는 글로벌 기술 기구로, 칩·비접촉(contactless)·결제 토큰화·EMV 3-D Secure(3DS) 등 전 세계 카드 결제를 보호하는 EMV 명세를 관리하고 발전시킨다.'
longDef: 'The name EMV originally stood for Europay, Mastercard, and Visa. EMVCo facilitates worldwide interoperability and acceptance of secure payment transactions by publishing the EMV specifications and running related testing and certification. Its specifications underpin chip and contactless acceptance, the EMV Payment Tokenisation framework, and EMV 3DS used for cardholder authentication in card-not-present commerce. EMVCo''s technical scope is distinct from the PCI Security Standards Council, which governs the security of cardholder-data handling.'
longDef_ko: 'EMV라는 이름은 본래 Europay, Mastercard, Visa의 머리글자에서 비롯됐다. EMVCo는 EMV 명세를 발행하고 관련 시험·인증을 운영함으로써 안전한 결제 거래의 전 세계 상호운용성과 수용성을 촉진한다. 칩·비접촉 수용, EMV 결제 토큰화 프레임워크, 비대면(CNP) 거래의 카드소지자 인증에 쓰이는 EMV 3DS가 그 명세에 기반한다. EMVCo의 기술 범위는 카드소지자 데이터 처리 보안을 관장하는 PCI 보안표준위원회(PCI SSC)와 구별된다.'
standardBody: EMVCo
aliases:
  - EMV
relationships:
  - type: related
    targetTerm: 3-D Secure
  - type: related
    targetTerm: Tokenization
  - type: related
    targetTerm: PCI DSS
distinctions:
  - targetTerm: PCI DSS
    explanation: 'EMVCo defines the EMV/3DS technical payment specifications; PCI DSS (managed by the PCI Security Standards Council) is the security standard for storing and handling cardholder data. Different bodies, complementary scope.'
    explanation_ko: 'EMVCo는 EMV/3DS 기술 결제 명세를 정의하고, PCI DSS(PCI 보안표준위원회 관리)는 카드소지자 데이터의 저장·처리 보안 표준이다. 서로 다른 기관이며 범위가 상호 보완적이다.'
sources:
  - name: About EMVCo
    org: EMVCo
    version: ''
    section: ''
    url: 'https://www.emvco.com/about-us/'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="36" height="24" rx="3"/><rect x="11" y="19" width="9" height="7" rx="1.5"/><path d="M13 22.5h5M15.5 19v7"/><path d="M26 30h12"/></svg>
---

> EMVCo is the global technical body, collectively owned by six major payment networks (American Express, Discover, JCB, Mastercard, UnionPay, and Visa), that manages and evolves the EMV specifications — including chip, contactless, payment tokenization, and EMV 3-D Secure (3DS) — that secure card-based payments worldwide.

The name EMV originally stood for Europay, Mastercard, and Visa. EMVCo facilitates worldwide interoperability and acceptance of secure payment transactions by publishing the EMV specifications and running related testing and certification. Its specifications underpin chip and contactless acceptance, the EMV Payment Tokenisation framework, and EMV 3DS used for cardholder authentication in card-not-present commerce. EMVCo's technical scope is distinct from the PCI Security Standards Council, which governs the security of cardholder-data handling.

**한국어 / Korean** — **EMVCo** — EMVCo는 6개 주요 카드 결제 네트워크(American Express, Discover, JCB, Mastercard, UnionPay, Visa)가 공동 소유하는 글로벌 기술 기구로, 칩·비접촉·결제 토큰화·EMV 3-D Secure(3DS) 등 전 세계 카드 결제를 보호하는 EMV 명세를 관리하고 발전시킨다.

EMV라는 이름은 본래 Europay, Mastercard, Visa의 머리글자에서 비롯됐다. EMVCo는 EMV 명세를 발행하고 관련 시험·인증을 운영하며, 그 기술 범위는 PCI 보안표준위원회(PCI SSC)와 구별된다.

**Aliases:** `EMV`

# Related
- [3-D Secure](/common/pay/3-d-secure.md) — related
- [Tokenization](/common/pay/tokenization.md) — related
- [PCI DSS](/common/pay/pci-dss.md) — related

# Distinctions
- **EMVCo** vs [PCI DSS](/common/pay/pci-dss.md) — EMVCo defines the EMV/3DS technical payment specifications; PCI DSS (managed by the PCI Security Standards Council) is the security standard for storing and handling cardholder data.

# Citations
[1] [EMVCo — About EMVCo](https://www.emvco.com/about-us/)
