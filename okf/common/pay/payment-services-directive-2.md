---
type: Regulation
title: Payment Services Directive 2 (PSD2)
description: 'Payment Services Directive 2 (PSD2) is the EU regulation (Directive 2015/2366/EU) that governs payment services and payment service providers in the European Economic Area. It mandates Strong Customer Authentication for electronic payments, requires banks to open account data to licensed third-party providers via APIs (enabling Open Banking), and introduced new categories of payment institution — AISPs and PISPs — with direct relevance to how travel companies process card-not-present transactions.'
tags:
  - pay
  - active
  - European Union
timestamp: '2026-08-11T00:00:00Z'
id: payment-services-directive-2
vertical: common
category: pay
conceptType: regulation
status: active
abbreviation: PSD2
term_ko: '제2차 결제서비스지침(PSD2)'
definition_ko: 'PSD2(Payment Services Directive 2, 제2차 결제서비스지침)는 유럽경제지역(EEA) 내 결제 서비스와 결제서비스 제공자를 규율하는 EU 규정(지침 2015/2366/EU)이다. 전자 결제에 대한 강력한 고객 인증(SCA)을 의무화하고, 은행이 허가된 제3자 제공업체에 API를 통해 계좌 데이터를 개방(오픈 뱅킹 가능)하도록 요구하며, 여행사의 카드 비대면 거래 처리 방식에 직접 영향을 미치는 새로운 결제기관 범주(AISP·PISP)를 도입했다.'
longDef: 'PSD2 replaced PSD1 and came into force on 13 January 2018. Its three main pillars are: (1) Open Banking — banks must provide third-party providers (TPPs) with access to customer account data via standardised APIs, conditional on customer consent, creating Account Information Service Providers (AISPs) and Payment Initiation Service Providers (PISPs) as new regulated entities; (2) Strong Customer Authentication (SCA) — electronic payments in scope must be authenticated with at least two independent factors (knowledge, possession, inherence), with narrow exemptions (low-value, low-risk TRA, recurring, whitelisted beneficiaries); (3) Consumer protection — liability rules, refund rights, and transparency obligations on payment service providers. For the travel industry, PSD2 most visibly affects online booking: card-not-present transactions where both the merchant''s and the cardholder''s payment service provider are in the EEA must trigger SCA (typically via 3-D Secure). Airlines, OTAs, hotels, and tour operators must ensure their payment flows and acquirer configurations pass SCA or qualify for exemptions; non-compliance risks declined authorisations. PSD3, proposed by the European Commission in 2023, is expected to further strengthen open banking and SCA rules.'
longDef_ko: 'PSD2는 PSD1을 대체하여 2018년 1월 13일 발효됐다. 세 가지 주요 기둥은 다음과 같다: (1) 오픈 뱅킹 — 고객 동의를 조건으로 은행이 제3자 제공업체(TPP)에게 표준화 API를 통한 계좌 데이터 접근을 제공해야 하며, 계좌정보서비스 제공업체(AISP)와 결제개시서비스 제공업체(PISP)가 새로운 규제 주체로 생겨났다; (2) 강력한 고객 인증(SCA) — 적용 범위의 전자 결제는 지식·소유·고유성 요소 중 두 가지 이상의 독립 요소로 인증되어야 하며, 소액·저위험 TRA·정기·화이트리스트 수취인 등 좁은 면제 범위가 있다; (3) 소비자 보호 — 책임 규칙, 환불 권리, 결제서비스 제공업체의 투명성 의무. 여행 산업에서 PSD2는 주로 온라인 예약에 영향을 미친다. 가맹점과 카드 소지자의 결제서비스 제공업체가 모두 EEA 내에 있는 카드 비대면 거래는 SCA(일반적으로 3-D Secure를 통해)를 촉발해야 한다. 항공사·OTA·호텔·여행사는 자사의 결제 흐름과 매입사 설정이 SCA를 통과하거나 면제 자격을 갖추도록 해야 하며, 미준수 시 승인 거절 위험이 있다.'
standardBody: European Union
aliases:
  - PSD2
  - Revised Payment Services Directive
  - Second Payment Services Directive
  - Open Banking Directive
relationships:
  - type: parent
    targetTerm: Strong Customer Authentication
  - type: related
    targetTerm: 3-D Secure
  - type: related
    targetTerm: SEPA (Single Euro Payments Area)
  - type: related
    targetTerm: Tokenization
distinctions:
  - targetTerm: Strong Customer Authentication
    explanation: 'PSD2 is the parent EU Directive that sets the legal framework; Strong Customer Authentication (SCA) is one specific requirement within PSD2, mandating two-factor authentication for electronic payments in scope. SCA is an obligation created by PSD2, not a synonym for it.'
    explanation_ko: 'PSD2는 법적 프레임워크를 설정하는 상위 EU 지침이고, 강력한 고객 인증(SCA)은 PSD2 내 특정 요건으로서 적용 범위의 전자 결제에 2요소 인증을 의무화한다. SCA는 PSD2가 만든 의무이며 동의어가 아니다.'
  - targetTerm: 3-D Secure
    explanation: '3-D Secure is the card-industry protocol (managed by card schemes) used to technically implement SCA for card payments; PSD2 is the EU regulation that mandates SCA — it does not prescribe 3-D Secure specifically, but 3-D Secure is the de-facto delivery mechanism in travel e-commerce.'
    explanation_ko: '3-D Secure는 카드 결제에 SCA를 기술적으로 구현하기 위해 사용되는 카드 업계 프로토콜(카드 네트워크가 관리)이고, PSD2는 SCA를 의무화하는 EU 규정이다. PSD2는 3-D Secure를 명시적으로 규정하지 않지만, 3-D Secure는 여행 전자 상거래의 사실상 구현 수단이다.'
  - targetTerm: SEPA (Single Euro Payments Area)
    explanation: 'SEPA is the integrated euro payments area for bank transfers, direct debits, and card payments within Europe, governed by a separate regulatory framework; PSD2 overlaps with SEPA in that it covers payment services in the EEA, but PSD2 focuses on access, security, and consumer rights across all payment methods, not just euro-denominated transactions.'
    explanation_ko: 'SEPA는 유럽 내 은행 이체, 자동이체, 카드 결제를 위한 통합 유로 결제 영역으로 별도의 규제 프레임워크에 의해 관리되고, PSD2는 EEA 내 결제 서비스를 다룬다는 점에서 SEPA와 겹치지만, PSD2는 유로 표시 거래만이 아닌 모든 결제 수단에 걸쳐 접근·보안·소비자 권리에 초점을 맞춘다.'
sources:
  - name: 'Directive 2015/2366/EU of the European Parliament and of the Council on Payment Services in the Internal Market (PSD2)'
    org: European Union
    version: OJ L 337, 23.12.2015
    section: ''
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32015L2366'
    tier: regulation
  - name: 'EBA Regulatory Technical Standards on Strong Customer Authentication and Common and Secure Communication (RTS on SCA)'
    org: European Banking Authority (EBA)
    version: 'Commission Delegated Regulation (EU) 2018/389'
    section: ''
    url: 'https://www.eba.europa.eu/regulation-and-policy/payment-services-and-electronic-money/regulatory-technical-standards-on-strong-customer-authentication-and-secure-communication-under-psd2'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6L8 13v14c0 8.8 6.8 17 16 19c9.2-2 16-10.2 16-19V13z"/><path d="M28 19a6 6 0 1 0-2 9.8"/><line x1="17" y1="25" x2="26" y2="25"/><line x1="17" y1="29" x2="24" y2="29"/></svg>
---

> Payment Services Directive 2 (PSD2) is the EU regulation (Directive 2015/2366/EU) that governs payment services and payment service providers in the European Economic Area. It mandates Strong Customer Authentication for electronic payments, requires banks to open account data to licensed third-party providers via APIs (enabling Open Banking), and introduced new categories of payment institution — AISPs and PISPs — with direct relevance to how travel companies process card-not-present transactions.

PSD2 replaced PSD1 and came into force on 13 January 2018. Its three main pillars are: (1) Open Banking — banks must provide third-party providers (TPPs) with access to customer account data via standardised APIs, conditional on customer consent, creating Account Information Service Providers (AISPs) and Payment Initiation Service Providers (PISPs) as new regulated entities; (2) Strong Customer Authentication (SCA) — electronic payments in scope must be authenticated with at least two independent factors (knowledge, possession, inherence), with narrow exemptions (low-value, low-risk TRA, recurring, whitelisted beneficiaries); (3) Consumer protection — liability rules, refund rights, and transparency obligations on payment service providers. For the travel industry, PSD2 most visibly affects online booking: card-not-present transactions where both the merchant's and the cardholder's payment service provider are in the EEA must trigger SCA (typically via 3-D Secure). Airlines, OTAs, hotels, and tour operators must ensure their payment flows and acquirer configurations pass SCA or qualify for exemptions; non-compliance risks declined authorisations.

**한국어 / Korean** — **제2차 결제서비스지침(PSD2)** — PSD2(Payment Services Directive 2, 제2차 결제서비스지침)는 유럽경제지역(EEA) 내 결제 서비스와 결제서비스 제공자를 규율하는 EU 규정(지침 2015/2366/EU)이다. 전자 결제에 대한 강력한 고객 인증(SCA)을 의무화하고, 은행이 허가된 제3자 제공업체에 API를 통해 계좌 데이터를 개방(오픈 뱅킹 가능)하도록 요구하며, 여행사의 카드 비대면 거래 처리 방식에 직접 영향을 미치는 새로운 결제기관 범주(AISP·PISP)를 도입했다.

PSD2는 PSD1을 대체하여 2018년 1월 13일 발효됐다. 세 가지 주요 기둥은: (1) 오픈 뱅킹 — 고객 동의를 조건으로 은행이 TPP에게 표준화 API를 통한 계좌 데이터 접근을 제공해야 하며 AISP·PISP가 새로운 규제 주체로 생겨났다; (2) SCA — 적용 범위의 전자 결제는 두 가지 이상의 독립 요소로 인증되어야 하며 면제 범위가 있다; (3) 소비자 보호 — 책임 규칙, 환불 권리, 투명성 의무.

**Aliases:** `PSD2`, `Revised Payment Services Directive`, `Second Payment Services Directive`, `Open Banking Directive`

# Related
- [Strong Customer Authentication](/common/pay/strong-customer-authentication.md) — parent
- [3-D Secure](/common/pay/3-d-secure.md) — related
- [SEPA (Single Euro Payments Area)](/common/pay/sepa.md) — related
- [Tokenization](/common/pay/tokenization.md) — related

# Distinctions
- **Payment Services Directive 2 (PSD2)** vs [Strong Customer Authentication](/common/pay/strong-customer-authentication.md) — PSD2 is the parent EU Directive that sets the legal framework; Strong Customer Authentication (SCA) is one specific requirement within PSD2, mandating two-factor authentication for electronic payments in scope. SCA is an obligation created by PSD2, not a synonym for it.
- **Payment Services Directive 2 (PSD2)** vs [3-D Secure](/common/pay/3-d-secure.md) — 3-D Secure is the card-industry protocol (managed by card schemes) used to technically implement SCA for card payments; PSD2 is the EU regulation that mandates SCA — it does not prescribe 3-D Secure specifically, but 3-D Secure is the de-facto delivery mechanism in travel e-commerce.
- **Payment Services Directive 2 (PSD2)** vs [SEPA (Single Euro Payments Area)](/common/pay/sepa.md) — SEPA is the integrated euro payments area for bank transfers, direct debits, and card payments within Europe, governed by a separate regulatory framework; PSD2 overlaps with SEPA in that it covers payment services in the EEA, but PSD2 focuses on access, security, and consumer rights across all payment methods, not just euro-denominated transactions.

# Citations
[1] [European Union — Directive 2015/2366/EU on Payment Services in the Internal Market (PSD2) — OJ L 337, 23.12.2015](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32015L2366)
[2] [EBA — Regulatory Technical Standards on Strong Customer Authentication and Secure Communication (RTS on SCA)](https://www.eba.europa.eu/regulation-and-policy/payment-services-and-electronic-money/regulatory-technical-standards-on-strong-customer-authentication-and-secure-communication-under-psd2)
