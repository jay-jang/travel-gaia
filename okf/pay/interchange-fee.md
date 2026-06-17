---
type: Business Term
title: Interchange Fee
description: 'An interchange fee is a fee paid by the merchant''s acquirer to the cardholder''s issuing bank on each card transaction, set by the card networks and not directly negotiable by merchants. It is the largest component of the cost of accepting card payments and is typically a percentage of the transaction plus a fixed amount.'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: interchange-fee
category: pay
conceptType: business-term
status: active
term_ko: 인터체인지 수수료 (Interchange Fee)
definition_ko: 'Interchange Fee(인터체인지 수수료)는 카드 거래마다 가맹점의 매입사(Acquirer)가 카드 소지자의 발급은행에 지급하는 수수료로, 카드 네트워크가 정하며 가맹점이 직접 협상할 수 없다. 카드 수납 비용의 가장 큰 구성 요소이며, 보통 거래액의 일정 비율에 고정 금액을 더한 형태다.'
longDef: 'Interchange fees are established by the card networks (Visa, Mastercard, and others) and flow from the acquirer to the issuer to compensate the issuer for funding, fraud, and operational costs. Although the merchant does not pay interchange directly, it is passed through within the merchant discount rate the acquirer charges, alongside network assessments and acquirer markup. Interchange rates vary by card type (consumer vs. commercial, debit vs. credit, rewards), channel (card-present vs. card-not-present), merchant category, and region; many jurisdictions, including the EU under the Interchange Fee Regulation, cap consumer card interchange. For travel merchants, card-not-present and cross-border bookings often attract higher interchange, and the use of virtual cards (VCC) for supplier settlement has its own interchange economics that influence acceptance.'
longDef_ko: '인터체인지 수수료는 카드 네트워크(Visa, Mastercard 등)가 정하며, 매입사에서 발급사로 흘러 발급사의 자금조달·사기·운영 비용을 보전한다. 가맹점이 인터체인지를 직접 내지는 않지만, 매입사가 부과하는 가맹점 할인율(merchant discount rate) 안에 네트워크 분담금과 매입사 마진과 함께 전가된다. 인터체인지 요율은 카드 유형(소비자/법인, 직불/신용, 리워드), 채널(대면/비대면), 가맹점 업종, 지역에 따라 다르며, EU의 Interchange Fee Regulation 등 많은 지역이 소비자 카드 인터체인지에 상한을 둔다. 여행 가맹점의 경우 비대면(CNP) 및 국경 간 예약은 흔히 높은 인터체인지가 적용되고, 공급사 정산용 가상카드(VCC) 사용은 수납에 영향을 주는 별도의 인터체인지 경제구조를 가진다.'
aliases:
  - interchange
  - interchange rate
relationships:
  - type: related
    targetTerm: Acquirer
  - type: related
    targetTerm: VCC
  - type: related
    targetTerm: Chargeback
distinctions:
  - targetTerm: Chargeback
    explanation: 'Interchange is a per-transaction cost paid to the issuer for processing a card payment, whereas a chargeback is a reversal of a transaction initiated by the cardholder or issuer; they are unrelated mechanisms though both flow through the acquirer.'
    explanation_ko: '인터체인지는 카드 결제 처리 대가로 발급사에 지급하는 거래당 비용인 반면, Chargeback은 카드 소지자나 발급사가 개시하는 거래 취소(반환)다. 둘 다 매입사를 거치지만 서로 다른 별개의 메커니즘이다.'
sources:
  - org: Mastercard
    name: Merchant Interchange Rates
    version: ''
    section: ''
    url: 'https://www.mastercard.com/us/en/business/support/merchant-interchange-rates.html'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="14" width="24" height="15" rx="2"/><line x1="7" y1="19" x2="31" y2="19"/><circle cx="36" cy="32" r="7"/><path d="M36 29v3l2 1.5"/><path d="M33.5 30.5v-2h2"/></svg>
---

> An interchange fee is a fee paid by the merchant's acquirer to the cardholder's issuing bank on each card transaction, set by the card networks and not directly negotiable by merchants. It is the largest component of the cost of accepting card payments and is typically a percentage of the transaction plus a fixed amount.

Interchange fees are established by the card networks (Visa, Mastercard, and others) and flow from the acquirer to the issuer to compensate the issuer for funding, fraud, and operational costs. Although the merchant does not pay interchange directly, it is passed through within the merchant discount rate the acquirer charges, alongside network assessments and acquirer markup. Interchange rates vary by card type (consumer vs. commercial, debit vs. credit, rewards), channel (card-present vs. card-not-present), merchant category, and region; many jurisdictions, including the EU under the Interchange Fee Regulation, cap consumer card interchange. For travel merchants, card-not-present and cross-border bookings often attract higher interchange, and the use of virtual cards (VCC) for supplier settlement has its own interchange economics that influence acceptance.

**한국어 / Korean** — **인터체인지 수수료 (Interchange Fee)** — Interchange Fee(인터체인지 수수료)는 카드 거래마다 가맹점의 매입사(Acquirer)가 카드 소지자의 발급은행에 지급하는 수수료로, 카드 네트워크가 정하며 가맹점이 직접 협상할 수 없다. 카드 수납 비용의 가장 큰 구성 요소이며, 보통 거래액의 일정 비율에 고정 금액을 더한 형태다.

인터체인지 수수료는 카드 네트워크(Visa, Mastercard 등)가 정하며, 매입사에서 발급사로 흘러 발급사의 자금조달·사기·운영 비용을 보전한다. 가맹점이 인터체인지를 직접 내지는 않지만, 매입사가 부과하는 가맹점 할인율(merchant discount rate) 안에 네트워크 분담금과 매입사 마진과 함께 전가된다. 인터체인지 요율은 카드 유형(소비자/법인, 직불/신용, 리워드), 채널(대면/비대면), 가맹점 업종, 지역에 따라 다르며, EU의 Interchange Fee Regulation 등 많은 지역이 소비자 카드 인터체인지에 상한을 둔다. 여행 가맹점의 경우 비대면(CNP) 및 국경 간 예약은 흔히 높은 인터체인지가 적용되고, 공급사 정산용 가상카드(VCC) 사용은 수납에 영향을 주는 별도의 인터체인지 경제구조를 가진다.

**Aliases:** `interchange`, `interchange rate`

# Related
- [Acquirer](/pay/acquirer.md) — related
- [VCC](/pay/vcc.md) — related
- [Chargeback](/pay/chargeback.md) — related

# Distinctions
- **Interchange Fee** vs [Chargeback](/pay/chargeback.md) — Interchange is a per-transaction cost paid to the issuer for processing a card payment, whereas a chargeback is a reversal of a transaction initiated by the cardholder or issuer; they are unrelated mechanisms though both flow through the acquirer.

# Citations
[1] [Mastercard — Merchant Interchange Rates](https://www.mastercard.com/us/en/business/support/merchant-interchange-rates.html)
