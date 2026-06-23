---
type: Standard Term
title: Strong Customer Authentication
description: 'Strong Customer Authentication is a regulatory requirement under the EU Revised Payment Services Directive (PSD2) that electronic payments be authenticated using at least two independent factors drawn from knowledge, possession, and inherence. It is intended to reduce fraud in card-not-present and online banking transactions.'
tags:
  - pay
  - active
  - European Banking Authority (EBA) / European Union (PSD2)
timestamp: '2026-06-17T00:00:00Z'
id: strong-customer-authentication
vertical: common
category: pay
conceptType: standard-term
status: active
abbreviation: SCA
term_ko: '강력한 고객 인증 (Strong Customer Authentication, SCA)'
definition_ko: 'SCA는 EU 개정 지급결제서비스지침(PSD2)에 따른 규제 요건으로, 전자 결제를 지식·소유·고유성 요소 중 서로 독립적인 두 가지 이상의 요소로 인증하도록 요구한다. 카드 비대면(CNP) 및 온라인 뱅킹 거래의 사기를 줄이는 것을 목적으로 한다.'
longDef: 'SCA is mandated by PSD2 and detailed in the European Banking Authority''s Regulatory Technical Standards (RTS) on strong customer authentication and common and secure communication. The two factors must come from at least two of three independent categories: something the customer knows (e.g., a password or PIN), something the customer has (e.g., a phone or token), and something the customer is (e.g., a biometric). For online card payments, SCA is most commonly delivered through the 3-D Secure protocol. The RTS defines exemptions where SCA need not be applied, including low-value transactions, transaction risk analysis (TRA) by the acquirer or issuer, recurring payments of a fixed amount, merchant-initiated transactions, and trusted-beneficiary whitelisting. SCA applies where both the payer''s and the payee''s payment service providers are within the European Economic Area, which affects how cross-border travel bookings are processed.'
longDef_ko: 'SCA는 PSD2에 의해 의무화되며, 유럽은행감독청(EBA)의 강력한 고객 인증 및 안전한 통신에 관한 기술표준(RTS)에 상세히 규정된다. 두 인증 요소는 고객이 아는 것(비밀번호·PIN), 가진 것(휴대폰·토큰), 본인 자체인 것(생체정보)이라는 세 독립 범주 중 둘 이상에서 와야 한다. 온라인 카드 결제에서는 주로 3-D Secure 프로토콜로 구현된다. RTS는 SCA 면제(exemption) 사례도 정의하는데, 소액 거래, 매입사·발급사의 거래 위험 분석(TRA), 정액 정기 결제, 가맹점 개시 거래(MIT), 신뢰 수취인 화이트리스트 등이 있다. SCA는 지급인과 수취인의 결제서비스 제공자가 모두 유럽경제지역(EEA) 내에 있을 때 적용되어 국경 간 여행 예약 처리 방식에 영향을 준다.'
standardBody: European Banking Authority (EBA) / European Union (PSD2)
aliases:
  - SCA
  - Strong Customer Authentication (PSD2)
providerTerms:
  - provider: Reserve Bank of India (RBI)
    term: Additional Factor of Authentication (AFA)
    context: 'India''s RBI-mandated two-factor authentication for digital payments; the non-EU counterpart to PSD2 SCA, requiring at least one dynamic factor.'
    context_ko: '디지털 결제에 대한 인도 RBI 의무 2요소 인증으로, 최소 하나의 동적 요소를 요구하는 PSD2 SCA의 비EU 대응 규제.'
    relationship: related
relationships:
  - type: contrasts
    targetTerm: 3-D Secure
  - type: related
    targetTerm: Chargeback
  - type: related
    targetTerm: PCI DSS
distinctions:
  - targetTerm: 3-D Secure
    explanation: SCA is the regulatory requirement (the 'what' and 'why'); 3-D Secure is a technical authentication protocol commonly used to satisfy SCA for online card payments (the 'how').
    explanation_ko: 'SCA는 규제 요건(무엇을·왜)이고, 3-D Secure는 온라인 카드 결제에서 SCA를 충족하기 위해 흔히 쓰이는 기술적 인증 프로토콜(어떻게)이다.'
  - targetTerm: Transparency in Payments (TIP)
    explanation: SCA is an EU regulatory authentication requirement protecting consumers; TIP is an IATA industry framework controlling airline card acceptance in the BSP agency channel. They address different aspects of payment.
    explanation_ko: 'SCA는 소비자를 보호하는 EU 규제 인증 요건이고, TIP는 BSP 여행사 채널에서 항공사의 카드 수용을 통제하는 IATA 업계 프레임워크다. 둘은 결제의 서로 다른 측면을 다룬다.'
sources:
  - org: European Banking Authority
    name: Regulatory Technical Standards on strong customer authentication and common and secure communication under PSD2
    version: ''
    section: ''
    url: 'https://www.eba.europa.eu/regulation-and-policy/payment-services-and-electronic-money/regulatory-technical-standards-on-strong-customer-authentication-and-secure-communication-under-psd2'
  - org: European Union
    name: Revised Payment Services Directive (PSD2)
    version: ''
    section: ''
    url: 'https://eur-lex.europa.eu/eli/dir/2015/2366/oj/eng'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="20" width="30" height="20" rx="2.5"/><path d="M16 20v-5a8 8 0 0 1 16 0v5"/><circle cx="24" cy="29" r="2.5"/><path d="M24 31.5V35"/></svg>
---

> Strong Customer Authentication is a regulatory requirement under the EU Revised Payment Services Directive (PSD2) that electronic payments be authenticated using at least two independent factors drawn from knowledge, possession, and inherence. It is intended to reduce fraud in card-not-present and online banking transactions.

SCA is mandated by PSD2 and detailed in the European Banking Authority's Regulatory Technical Standards (RTS) on strong customer authentication and common and secure communication. The two factors must come from at least two of three independent categories: something the customer knows (e.g., a password or PIN), something the customer has (e.g., a phone or token), and something the customer is (e.g., a biometric). For online card payments, SCA is most commonly delivered through the 3-D Secure protocol. The RTS defines exemptions where SCA need not be applied, including low-value transactions, transaction risk analysis (TRA) by the acquirer or issuer, recurring payments of a fixed amount, merchant-initiated transactions, and trusted-beneficiary whitelisting. SCA applies where both the payer's and the payee's payment service providers are within the European Economic Area, which affects how cross-border travel bookings are processed.

**한국어 / Korean** — **강력한 고객 인증 (Strong Customer Authentication, SCA)** — SCA는 EU 개정 지급결제서비스지침(PSD2)에 따른 규제 요건으로, 전자 결제를 지식·소유·고유성 요소 중 서로 독립적인 두 가지 이상의 요소로 인증하도록 요구한다. 카드 비대면(CNP) 및 온라인 뱅킹 거래의 사기를 줄이는 것을 목적으로 한다.

SCA는 PSD2에 의해 의무화되며, 유럽은행감독청(EBA)의 강력한 고객 인증 및 안전한 통신에 관한 기술표준(RTS)에 상세히 규정된다. 두 인증 요소는 고객이 아는 것(비밀번호·PIN), 가진 것(휴대폰·토큰), 본인 자체인 것(생체정보)이라는 세 독립 범주 중 둘 이상에서 와야 한다. 온라인 카드 결제에서는 주로 3-D Secure 프로토콜로 구현된다. RTS는 SCA 면제(exemption) 사례도 정의하는데, 소액 거래, 매입사·발급사의 거래 위험 분석(TRA), 정액 정기 결제, 가맹점 개시 거래(MIT), 신뢰 수취인 화이트리스트 등이 있다. SCA는 지급인과 수취인의 결제서비스 제공자가 모두 유럽경제지역(EEA) 내에 있을 때 적용되어 국경 간 여행 예약 처리 방식에 영향을 준다.

**Aliases:** `SCA`, `Strong Customer Authentication (PSD2)`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Reserve Bank of India (RBI) | `Additional Factor of Authentication (AFA)` | related | India's RBI-mandated two-factor authentication for digital payments; the non-EU counterpart to PSD2 SCA, requiring at least one dynamic factor. |

# Related
- [3-D Secure](/common/pay/3-d-secure.md) — contrasts
- [Chargeback](/common/pay/chargeback.md) — related
- [PCI DSS](/common/pay/pci-dss.md) — related

# Distinctions
- **Strong Customer Authentication** vs [3-D Secure](/common/pay/3-d-secure.md) — SCA is the regulatory requirement (the 'what' and 'why'); 3-D Secure is a technical authentication protocol commonly used to satisfy SCA for online card payments (the 'how').
- **Strong Customer Authentication** vs [Transparency in Payments (TIP)](/common/pay/transparency-in-payments-tip.md) — SCA is an EU regulatory authentication requirement protecting consumers; TIP is an IATA industry framework controlling airline card acceptance in the BSP agency channel. They address different aspects of payment.

# Citations
[1] [European Banking Authority — Regulatory Technical Standards on strong customer authentication and common and secure communication under PSD2](https://www.eba.europa.eu/regulation-and-policy/payment-services-and-electronic-money/regulatory-technical-standards-on-strong-customer-authentication-and-secure-communication-under-psd2)
[2] [European Union — Revised Payment Services Directive (PSD2)](https://eur-lex.europa.eu/eli/dir/2015/2366/oj/eng)
