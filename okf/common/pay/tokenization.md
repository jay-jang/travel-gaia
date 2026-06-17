---
type: Standard Term
title: Tokenization
description: 'Tokenization is the replacement of a sensitive card Primary Account Number (PAN) with a non-sensitive surrogate value, the token, that can be used in place of the PAN within a defined domain. Payment tokens are issued and mapped back to the PAN by a Token Service Provider, reducing the exposure and PCI scope of merchants that store card-on-file credentials.'
tags:
  - pay
  - active
  - EMVCo
timestamp: '2026-06-17T00:00:00Z'
id: tokenization
vertical: common
category: pay
conceptType: standard-term
status: active
term_ko: 토큰화 (Tokenization)
definition_ko: 'Tokenization(토큰화)은 민감한 카드 기본계좌번호(PAN)를, 정의된 도메인 안에서 PAN 대신 사용할 수 있는 비민감 대체값인 토큰(token)으로 교체하는 것이다. 결제 토큰은 Token Service Provider가 발급하고 PAN으로 다시 매핑하며, 카드 정보를 보관하는(card-on-file) 가맹점의 노출과 PCI 적용 범위를 줄여준다.'
longDef: 'Payment tokenization is standardized by EMVCo through the EMV Payment Tokenisation Specification, which defines roles including the Token Service Provider (TSP), which generates and de-tokenizes payment tokens, and the Token Requestor (such as a merchant, wallet provider, or issuer) that requests tokens. Tokens can carry usage restrictions (domain controls) limiting them to a specific merchant, channel, or device, so a stolen token is far less useful than a raw PAN. Network tokenization, offered by the card schemes, keeps card-on-file credentials current as cards are reissued, improving authorization rates for recurring travel charges. Tokenization is distinct from end-to-end encryption: the token is a different value substituted for the PAN, whereas encryption transforms the PAN reversibly with a key. In travel, OTAs, airlines, and hotels use tokenization to store guest and traveler card credentials securely and to pass payment data to a Merchant of Record or acquirer without exposing the underlying PAN.'
longDef_ko: '결제 토큰화는 EMVCo의 EMV Payment Tokenisation Specification으로 표준화되어 있으며, 결제 토큰을 생성·역토큰화하는 Token Service Provider(TSP)와 토큰을 요청하는 Token Requestor(가맹점·지갑 제공자·발급사 등)의 역할을 정의한다. 토큰에는 특정 가맹점·채널·기기로 사용을 제한하는 도메인 통제(domain controls)를 부여할 수 있어, 탈취되어도 원본 PAN보다 훨씬 쓸모가 적다. 카드 네트워크가 제공하는 네트워크 토큰화는 카드가 재발급되어도 card-on-file 자격증명을 최신으로 유지해, 정기적 여행 청구의 승인율을 높인다. 토큰화는 종단간 암호화와 다른데, 토큰은 PAN을 대체한 별개의 값인 반면 암호화는 키로 PAN을 가역적으로 변환한 것이다. 여행 분야에서 OTA·항공사·호텔은 토큰화로 투숙객·여행자 카드 정보를 안전하게 보관하고, 원본 PAN을 노출하지 않은 채 Merchant of Record나 Acquirer에 결제 데이터를 전달한다.'
standardBody: EMVCo
aliases:
  - payment tokenization
  - EMV payment tokenisation
  - network tokenization
providerTerms:
  - provider: Visa / Mastercard
    term: Network Token
    context: Scheme-level tokenization that replaces a card-on-file PAN with a network-issued token kept current across reissuance.
    context_ko: card-on-file PAN을 네트워크 발급 토큰으로 대체하고 카드 재발급 시에도 최신으로 유지하는 카드 네트워크 차원의 토큰화.
    relationship: narrower
relationships:
  - type: related
    targetTerm: PCI DSS
  - type: related
    targetTerm: VCC
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: Acquirer
distinctions:
  - targetTerm: VCC
    explanation: 'A VCC is a real, spendable virtual card number generated for a specific payment (often B2B supplier settlement), while a token is a non-spendable surrogate that maps back to an existing underlying card PAN.'
    explanation_ko: 'VCC는 특정 결제(흔히 B2B 공급사 정산)를 위해 생성된 실제 사용 가능한 가상 카드 번호인 반면, 토큰은 기존 기초 카드 PAN으로 다시 매핑되는 사용 불가한 대체값이다.'
  - targetTerm: PCI DSS
    explanation: Tokenization is a technique; PCI DSS is the compliance standard whose scope tokenization helps reduce by removing PANs from merchant systems.
    explanation_ko: '토큰화는 기법이고, PCI DSS는 준수 표준이며, 토큰화는 가맹점 시스템에서 PAN을 제거해 그 적용 범위를 줄이는 데 기여한다.'
sources:
  - org: EMVCo
    name: EMV Payment Tokenisation Specification – Technical Framework
    version: ''
    section: ''
    url: 'https://www.emvco.com/emv-technologies/payment-tokenisation/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="15" width="16" height="11" rx="2"/><path d="M9 22h7"/><path d="M24 23h6"/><path d="M27 20l3 3-3 3"/><rect x="30" y="15" width="12" height="11" rx="2"/><circle cx="36" cy="20.5" r="2"/><path d="M14 33v3M24 33v3M34 33v3"/></svg>
---

> Tokenization is the replacement of a sensitive card Primary Account Number (PAN) with a non-sensitive surrogate value, the token, that can be used in place of the PAN within a defined domain. Payment tokens are issued and mapped back to the PAN by a Token Service Provider, reducing the exposure and PCI scope of merchants that store card-on-file credentials.

Payment tokenization is standardized by EMVCo through the EMV Payment Tokenisation Specification, which defines roles including the Token Service Provider (TSP), which generates and de-tokenizes payment tokens, and the Token Requestor (such as a merchant, wallet provider, or issuer) that requests tokens. Tokens can carry usage restrictions (domain controls) limiting them to a specific merchant, channel, or device, so a stolen token is far less useful than a raw PAN. Network tokenization, offered by the card schemes, keeps card-on-file credentials current as cards are reissued, improving authorization rates for recurring travel charges. Tokenization is distinct from end-to-end encryption: the token is a different value substituted for the PAN, whereas encryption transforms the PAN reversibly with a key. In travel, OTAs, airlines, and hotels use tokenization to store guest and traveler card credentials securely and to pass payment data to a Merchant of Record or acquirer without exposing the underlying PAN.

**한국어 / Korean** — **토큰화 (Tokenization)** — Tokenization(토큰화)은 민감한 카드 기본계좌번호(PAN)를, 정의된 도메인 안에서 PAN 대신 사용할 수 있는 비민감 대체값인 토큰(token)으로 교체하는 것이다. 결제 토큰은 Token Service Provider가 발급하고 PAN으로 다시 매핑하며, 카드 정보를 보관하는(card-on-file) 가맹점의 노출과 PCI 적용 범위를 줄여준다.

결제 토큰화는 EMVCo의 EMV Payment Tokenisation Specification으로 표준화되어 있으며, 결제 토큰을 생성·역토큰화하는 Token Service Provider(TSP)와 토큰을 요청하는 Token Requestor(가맹점·지갑 제공자·발급사 등)의 역할을 정의한다. 토큰에는 특정 가맹점·채널·기기로 사용을 제한하는 도메인 통제(domain controls)를 부여할 수 있어, 탈취되어도 원본 PAN보다 훨씬 쓸모가 적다. 카드 네트워크가 제공하는 네트워크 토큰화는 카드가 재발급되어도 card-on-file 자격증명을 최신으로 유지해, 정기적 여행 청구의 승인율을 높인다. 토큰화는 종단간 암호화와 다른데, 토큰은 PAN을 대체한 별개의 값인 반면 암호화는 키로 PAN을 가역적으로 변환한 것이다. 여행 분야에서 OTA·항공사·호텔은 토큰화로 투숙객·여행자 카드 정보를 안전하게 보관하고, 원본 PAN을 노출하지 않은 채 Merchant of Record나 Acquirer에 결제 데이터를 전달한다.

**Aliases:** `payment tokenization`, `EMV payment tokenisation`, `network tokenization`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Visa / Mastercard | `Network Token` | narrower | Scheme-level tokenization that replaces a card-on-file PAN with a network-issued token kept current across reissuance. |

# Related
- [PCI DSS](/common/pay/pci-dss.md) — related
- [VCC](/common/pay/vcc.md) — related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related
- [Acquirer](/common/pay/acquirer.md) — related

# Distinctions
- **Tokenization** vs [VCC](/common/pay/vcc.md) — A VCC is a real, spendable virtual card number generated for a specific payment (often B2B supplier settlement), while a token is a non-spendable surrogate that maps back to an existing underlying card PAN.
- **Tokenization** vs [PCI DSS](/common/pay/pci-dss.md) — Tokenization is a technique; PCI DSS is the compliance standard whose scope tokenization helps reduce by removing PANs from merchant systems.

# Citations
[1] [EMVCo — EMV Payment Tokenisation Specification – Technical Framework](https://www.emvco.com/emv-technologies/payment-tokenisation/)
