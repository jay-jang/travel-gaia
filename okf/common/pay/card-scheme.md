---
type: Business Term
title: Card Scheme
description: 'A card scheme (or card network) is the payment network, such as Visa or Mastercard, that defines the rules, operates the switching infrastructure between issuers and acquirers, and sets the interchange fees that flow between them. It is the central layer of the four-party card model that authorizes, clears and settles card transactions across institutions and markets.'
tags:
  - pay
  - active
timestamp: '2026-06-18T00:00:00Z'
id: card-scheme
vertical: common
category: pay
conceptType: business-term
status: active
term_ko: '카드 스킴(Card Scheme, 카드 네트워크)'
definition_ko: '카드 스킴(또는 카드 네트워크)은 Visa, Mastercard 등과 같이 규칙을 정의하고 발급사(issuer)와 매입사(acquirer) 사이의 스위칭 인프라를 운영하며 양자 간에 오가는 인터체인지 수수료를 책정하는 결제 네트워크다. 여러 기관과 시장에 걸쳐 카드 거래를 승인·청산·정산하는, 4자 카드 모델의 중심 계층이다.'
longDef: 'In the four-party (four-corner) model the card scheme sits between the issuer (the cardholder''s bank) and the acquirer (the merchant''s bank), routing authorization, clearing and settlement messages and enforcing a non-negotiable rulebook that binds merchants regardless of their acquirer contract. The scheme sets interchange (paid by the acquirer to the issuer) and scheme fees, and defines dispute/chargeback rights, fraud-liability rules (including liability shift via 3-D Secure) and acceptance standards such as PCI DSS scope. Schemes like American Express and Discover can also operate three-party (closed-loop) models where they act as issuer and acquirer themselves. In travel, the card scheme''s rules shape interchange costs, chargeback handling and CNP-transaction liability for any intermediary acting as merchant of record.'
longDef_ko: '4자(4코너) 모델에서 카드 스킴은 발급사(카드 소지자의 은행)와 매입사(가맹점의 은행) 사이에 위치하여 승인·청산·정산 메시지를 라우팅하고, 매입사 계약과 무관하게 가맹점을 구속하는 협상 불가의 규정집을 집행한다. 스킴은 인터체인지(매입사가 발급사에 지급)와 스킴 수수료를 책정하며, 분쟁/차지백 권리, 사기 책임 규칙(3-D Secure를 통한 책임 전환 포함), PCI DSS 범위 같은 수용 표준을 정의한다. American Express, Discover 같은 스킴은 스스로 발급사이자 매입사가 되는 3자(폐쇄형) 모델로 운영될 수도 있다. 여행 업계에서 카드 스킴의 규칙은 Merchant of Record로 행위하는 중개업체의 인터체인지 비용, 차지백 처리, CNP 거래 책임을 좌우한다.'
aliases:
  - Card Network
  - Payment Network
  - Card Brand
providerTerms:
  - provider: Visa / Mastercard
    term: Card Network / Scheme
    context: 'The interbank network operating the rules, switching and interchange between issuers and acquirers'
    context_ko: 발급사와 매입사 사이의 규칙·스위칭·인터체인지를 운영하는 은행 간 네트워크
    relationship: same
  - provider: American Express
    term: American Express (closed-loop network)
    context: 'Unlike Visa/Mastercard''s four-party model, Amex traditionally operates a closed-loop scheme acting as both issuer and acquirer.'
    context_ko: Visa/Mastercard의 4당사자 모델과 달리 Amex는 전통적으로 발급사이자 매입사 역할을 동시에 하는 폐쇄형(closed-loop) 스킴으로 운영된다.
    relationship: narrower
relationships:
  - type: contrasts
    targetTerm: Acquirer
  - type: parent
    targetTerm: Interchange Fee
  - type: related
    targetTerm: Chargeback
  - type: related
    targetTerm: 3-D Secure
  - type: related
    targetTerm: Merchant of Record
distinctions:
  - targetTerm: Acquirer
    explanation: The acquirer is the merchant's bank that processes transactions and settles funds to the merchant; the card scheme is the network above it that sets the rules and interchange the acquirer must follow.
    explanation_ko: '매입사(acquirer)는 거래를 처리하고 가맹점에 자금을 정산하는 가맹점의 은행이고, 카드 스킴은 그 위에서 매입사가 따라야 할 규칙과 인터체인지를 정하는 네트워크다.'
  - targetTerm: Interchange Fee
    explanation: The interchange fee is the per-transaction fee the acquirer pays the issuer; the card scheme is the body that sets those interchange rates rather than being the fee itself.
    explanation_ko: '인터체인지 수수료는 매입사가 발급사에 지급하는 거래별 수수료이고, 카드 스킴은 그 수수료 자체가 아니라 인터체인지 요율을 책정하는 주체다.'
sources:
  - org: Primer
    name: 'Mastering card networks: Everything you need to know'
    version: ''
    section: ''
    url: 'https://primer.io/blog/what-are-card-networks-and-how-do-they-work'
    tier: secondary
  - org: Payment Expert
    name: 'The four-party card model: How Visa and Mastercard work'
    version: ''
    section: ''
    url: 'https://paymentexpert.com/2026/03/19/four-party-card-model-explained/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="36" height="24" rx="3"/><path d="M6 19h36"/><circle cx="30" cy="29" r="4"/><circle cx="36" cy="29" r="4"/></svg>
---

> A card scheme (or card network) is the payment network, such as Visa or Mastercard, that defines the rules, operates the switching infrastructure between issuers and acquirers, and sets the interchange fees that flow between them. It is the central layer of the four-party card model that authorizes, clears and settles card transactions across institutions and markets.

In the four-party (four-corner) model the card scheme sits between the issuer (the cardholder's bank) and the acquirer (the merchant's bank), routing authorization, clearing and settlement messages and enforcing a non-negotiable rulebook that binds merchants regardless of their acquirer contract. The scheme sets interchange (paid by the acquirer to the issuer) and scheme fees, and defines dispute/chargeback rights, fraud-liability rules (including liability shift via 3-D Secure) and acceptance standards such as PCI DSS scope. Schemes like American Express and Discover can also operate three-party (closed-loop) models where they act as issuer and acquirer themselves. In travel, the card scheme's rules shape interchange costs, chargeback handling and CNP-transaction liability for any intermediary acting as merchant of record.

**한국어 / Korean** — **카드 스킴(Card Scheme, 카드 네트워크)** — 카드 스킴(또는 카드 네트워크)은 Visa, Mastercard 등과 같이 규칙을 정의하고 발급사(issuer)와 매입사(acquirer) 사이의 스위칭 인프라를 운영하며 양자 간에 오가는 인터체인지 수수료를 책정하는 결제 네트워크다. 여러 기관과 시장에 걸쳐 카드 거래를 승인·청산·정산하는, 4자 카드 모델의 중심 계층이다.

4자(4코너) 모델에서 카드 스킴은 발급사(카드 소지자의 은행)와 매입사(가맹점의 은행) 사이에 위치하여 승인·청산·정산 메시지를 라우팅하고, 매입사 계약과 무관하게 가맹점을 구속하는 협상 불가의 규정집을 집행한다. 스킴은 인터체인지(매입사가 발급사에 지급)와 스킴 수수료를 책정하며, 분쟁/차지백 권리, 사기 책임 규칙(3-D Secure를 통한 책임 전환 포함), PCI DSS 범위 같은 수용 표준을 정의한다. American Express, Discover 같은 스킴은 스스로 발급사이자 매입사가 되는 3자(폐쇄형) 모델로 운영될 수도 있다. 여행 업계에서 카드 스킴의 규칙은 Merchant of Record로 행위하는 중개업체의 인터체인지 비용, 차지백 처리, CNP 거래 책임을 좌우한다.

**Aliases:** `Card Network`, `Payment Network`, `Card Brand`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Visa / Mastercard | `Card Network / Scheme` | same | The interbank network operating the rules, switching and interchange between issuers and acquirers |
| American Express | `American Express (closed-loop network)` | narrower | Unlike Visa/Mastercard's four-party model, Amex traditionally operates a closed-loop scheme acting as both issuer and acquirer. |

# Related
- [Acquirer](/common/pay/acquirer.md) — contrasts
- [Interchange Fee](/common/pay/interchange-fee.md) — parent
- [Chargeback](/common/pay/chargeback.md) — related
- [3-D Secure](/common/pay/3-d-secure.md) — related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related

# Distinctions
- **Card Scheme** vs [Acquirer](/common/pay/acquirer.md) — The acquirer is the merchant's bank that processes transactions and settles funds to the merchant; the card scheme is the network above it that sets the rules and interchange the acquirer must follow.
- **Card Scheme** vs [Interchange Fee](/common/pay/interchange-fee.md) — The interchange fee is the per-transaction fee the acquirer pays the issuer; the card scheme is the body that sets those interchange rates rather than being the fee itself.

# Citations
[1] [Primer — Mastering card networks: Everything you need to know](https://primer.io/blog/what-are-card-networks-and-how-do-they-work)
[2] [Payment Expert — The four-party card model: How Visa and Mastercard work](https://paymentexpert.com/2026/03/19/four-party-card-model-explained/)
