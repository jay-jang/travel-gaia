---
type: Standard Term
title: 3-D Secure
description: '3-D Secure is a messaging protocol that adds an authentication layer to card-not-present (online) card payments, enabling the issuer to verify the cardholder before authorization. The current generation, EMV 3-D Secure (3DS2), is managed by EMVCo and underpins liability shift and Strong Customer Authentication (SCA) compliance.'
tags:
  - pay
  - active
  - EMVCo
timestamp: '2026-06-17T00:00:00Z'
id: 3-d-secure
vertical: common
category: pay
conceptType: standard-term
status: active
abbreviation: 3DS
term_ko: 3-D Secure(3DS)
definition_ko: '3-D Secure는 카드 비대면(온라인) 결제에 인증 계층을 추가하는 메시징 프로토콜로, 발급사가 승인 전에 카드 소지자를 검증할 수 있게 한다. 현 세대인 EMV 3-D Secure(3DS2)는 EMVCo가 관리하며, 책임 전환(liability shift)과 강력한 고객 인증(SCA) 준수의 기반이 된다.'
longDef: 'The name refers to the three domains involved: the issuer (cardholder) domain, the acquirer (merchant) domain, and the interoperability domain. 3DS2 supports frictionless flows using risk data as well as challenge flows (one-time passcodes, biometrics) and is the primary mechanism for meeting PSD2 SCA on CNP transactions in the EU/UK. In travel it is relevant wherever an intermediary is Merchant of Record taking cardholder payments online.'
longDef_ko: '이 명칭은 관련된 세 개의 도메인을 가리킨다. 발급사(카드 소지자) 도메인, 매입사(가맹점) 도메인, 상호 운용성 도메인이다. 3DS2는 위험 데이터를 활용한 무마찰(frictionless) 흐름과 챌린지 흐름(일회용 비밀번호, 생체인증)을 모두 지원하며, EU/영국에서 CNP(비대면) 거래에 대한 PSD2 SCA를 충족하는 주요 메커니즘이다. 여행 업계에서는 중개업체가 Merchant of Record로서 온라인으로 카드 소지자의 결제를 수납하는 모든 경우에 관련된다.'
standardBody: EMVCo
aliases:
  - 3DS
  - Three-Domain Secure
  - EMV 3-D Secure
  - EMV 3DS
providerTerms:
  - provider: EMVCo
    term: EMV 3-D Secure
    context: EMVCo specifies and manages the EMV 3DS protocol
    context_ko: EMVCo가 EMV 3DS 프로토콜을 규정하고 관리한다
    relationship: same
relationships:
  - type: related
    targetTerm: Chargeback
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: VCC
distinctions:
  - targetTerm: Chargeback
    explanation: '3-D Secure authenticates the cardholder up front and can shift fraud liability, whereas a chargeback is a post-transaction dispute reversal.'
    explanation_ko: '3-D Secure는 거래 전에 카드 소지자를 인증하여 사기 책임을 전환할 수 있는 반면, 차지백은 거래 후 분쟁에 따른 거래 취소다.'
sources:
  - name: EMV 3-D Secure
    org: EMVCo
    version: ''
    section: ''
    url: 'https://www.emvco.com/emv-technologies/3-d-secure/'
  - name: EMVCo explains how EMV 3DS helps meet PSD2 requirements for strong customer authentication
    org: NFCW
    version: ''
    section: ''
    url: 'https://www.nfcw.com/2020/09/09/367797/emvco-explains-how-emv-3ds-helps-meet-psd2-requirements-for-strong-customer-authentication/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 5 9 11v11c0 9 6 16 15 21 9-5 15-12 15-21V11z"/><path d="M17 24l5 5 9-10"/></svg>
---

> 3-D Secure is a messaging protocol that adds an authentication layer to card-not-present (online) card payments, enabling the issuer to verify the cardholder before authorization. The current generation, EMV 3-D Secure (3DS2), is managed by EMVCo and underpins liability shift and Strong Customer Authentication (SCA) compliance.

The name refers to the three domains involved: the issuer (cardholder) domain, the acquirer (merchant) domain, and the interoperability domain. 3DS2 supports frictionless flows using risk data as well as challenge flows (one-time passcodes, biometrics) and is the primary mechanism for meeting PSD2 SCA on CNP transactions in the EU/UK. In travel it is relevant wherever an intermediary is Merchant of Record taking cardholder payments online.

**한국어 / Korean** — **3-D Secure(3DS)** — 3-D Secure는 카드 비대면(온라인) 결제에 인증 계층을 추가하는 메시징 프로토콜로, 발급사가 승인 전에 카드 소지자를 검증할 수 있게 한다. 현 세대인 EMV 3-D Secure(3DS2)는 EMVCo가 관리하며, 책임 전환(liability shift)과 강력한 고객 인증(SCA) 준수의 기반이 된다.

이 명칭은 관련된 세 개의 도메인을 가리킨다. 발급사(카드 소지자) 도메인, 매입사(가맹점) 도메인, 상호 운용성 도메인이다. 3DS2는 위험 데이터를 활용한 무마찰(frictionless) 흐름과 챌린지 흐름(일회용 비밀번호, 생체인증)을 모두 지원하며, EU/영국에서 CNP(비대면) 거래에 대한 PSD2 SCA를 충족하는 주요 메커니즘이다. 여행 업계에서는 중개업체가 Merchant of Record로서 온라인으로 카드 소지자의 결제를 수납하는 모든 경우에 관련된다.

**Aliases:** `3DS`, `Three-Domain Secure`, `EMV 3-D Secure`, `EMV 3DS`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| EMVCo | `EMV 3-D Secure` | same | EMVCo specifies and manages the EMV 3DS protocol |

# Related
- [Chargeback](/common/pay/chargeback.md) — related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related
- [VCC](/common/pay/vcc.md) — related

# Distinctions
- **3-D Secure** vs [Chargeback](/common/pay/chargeback.md) — 3-D Secure authenticates the cardholder up front and can shift fraud liability, whereas a chargeback is a post-transaction dispute reversal.

# Citations
[1] [EMVCo — EMV 3-D Secure](https://www.emvco.com/emv-technologies/3-d-secure/)
[2] [NFCW — EMVCo explains how EMV 3DS helps meet PSD2 requirements for strong customer authentication](https://www.nfcw.com/2020/09/09/367797/emvco-explains-how-emv-3ds-helps-meet-psd2-requirements-for-strong-customer-authentication/)
