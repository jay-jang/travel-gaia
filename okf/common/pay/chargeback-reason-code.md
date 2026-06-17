---
type: Code
title: Chargeback Reason Code
description: 'A chargeback reason code is a standardized alphanumeric identifier assigned by the card networks that classifies why a cardholder is disputing a transaction (for example fraud, processing error, or service not as described) and determines the evidence required and the deadlines for the merchant''s response. Each network uses its own scheme, such as Visa''s four dispute categories (e.g. category 10 Fraud) and Mastercard''s numeric codes (e.g. 4837).'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: chargeback-reason-code
vertical: common
category: pay
conceptType: code
status: active
term_ko: 차지백 사유 코드
definition_ko: '차지백 사유 코드(chargeback reason code)는 카드 네트워크가 부여하는 표준화된 영숫자 식별자로, 카드 소지자가 거래를 이의 제기하는 이유(예: 사기, 처리 오류, 서비스가 설명과 다름)를 분류하고, 가맹점 대응에 필요한 증빙과 마감 기한을 결정한다. 각 네트워크는 자체 체계를 사용하는데, Visa의 네 가지 분쟁 범주(예: category 10 사기)와 Mastercard의 숫자 코드(예: 4837) 등이 있다.'
longDef: 'Reason codes drive the entire chargeback lifecycle: the code dictates what compelling evidence the Merchant of Record must supply and the window to respond (representment is generally 30 days for Visa and 45 days for Mastercard at each dispute stage). After representment, unresolved disputes can escalate to pre-arbitration and arbitration. Modern Visa codes group disputes into four categories (Fraud, Authorization, Processing Errors, Consumer Disputes), while Mastercard retains discrete four-digit codes. For travel merchants, common reason codes involve cancellations, no-shows, services not rendered, and card-not-present fraud, so mapping each code to the right defense and deadline is operationally critical. Reason codes are what the broader Chargeback concept only alludes to.'
longDef_ko: '사유 코드는 차지백 생애주기 전체를 좌우한다. 코드는 Merchant of Record가 제출해야 할 설득력 있는 증빙과 대응 기한(재청구(representment)는 각 분쟁 단계에서 Visa 약 30일, Mastercard 45일)을 규정한다. 재청구 후에도 해결되지 않은 분쟁은 사전중재(pre-arbitration)와 중재(arbitration)로 격상될 수 있다. 현대 Visa 코드는 분쟁을 네 범주(사기, 승인, 처리 오류, 소비자 분쟁)로 묶고, Mastercard는 개별 네 자리 코드를 유지한다. 여행 가맹점에서는 취소, 노쇼(no-show), 미제공 서비스, 비대면(CNP) 사기 관련 사유 코드가 흔하므로, 각 코드를 올바른 방어와 기한에 매핑하는 것이 운영상 매우 중요하다. 사유 코드는 더 넓은 Chargeback 개념이 암시만 하던 부분이다.'
aliases:
  - dispute reason code
  - reason code
providerTerms:
  - provider: Visa
    term: Dispute category (e.g. category 10 Fraud)
    context: 'Visa groups dispute reasons into four categories (Fraud, Authorization, Processing Errors, Consumer Disputes) under Visa Claims Resolution.'
    context_ko: 'Visa는 Visa Claims Resolution 하에서 분쟁 사유를 네 범주(사기, 승인, 처리 오류, 소비자 분쟁)로 묶는다.'
    relationship: narrower
  - provider: Mastercard
    term: Reason code (e.g. 4837)
    context: Mastercard uses discrete four-digit reason codes such as 4837 (No Cardholder Authorization).
    context_ko: Mastercard는 4837(카드 소지자 미승인) 등 개별 네 자리 사유 코드를 사용한다.
    relationship: narrower
relationships:
  - type: parent
    targetTerm: Chargeback
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: 3-D Secure
  - type: related
    targetTerm: Refund
distinctions:
  - targetTerm: Chargeback
    explanation: A chargeback is the dispute and forced reversal itself; the reason code is the standardized label that classifies that dispute and sets the evidence rules and deadlines.
    explanation_ko: 'Chargeback은 분쟁과 강제적 거래 취소 자체이고, 사유 코드는 그 분쟁을 분류하고 증빙 규칙과 기한을 정하는 표준화된 라벨이다.'
sources:
  - org: Rivero
    name: The complete guide to chargeback reason codes for card issuers
    version: ''
    section: ''
    url: 'https://rivero.tech/guide-chargeback-reason-codes'
  - org: Chargebacks911
    name: 'Chargeback Reason Codes: The Ultimate Guide'
    version: ''
    section: ''
    url: 'https://chargebacks911.com/chargeback-reason-codes/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="12" width="34" height="24" rx="3"/><line x1="7" y1="19" x2="41" y2="19"/><path d="M13 27h6"/><path d="M13 31h10"/><circle cx="32" cy="29" r="2"/><path d="M32 25.5V27"/></svg>
---

> A chargeback reason code is a standardized alphanumeric identifier assigned by the card networks that classifies why a cardholder is disputing a transaction (for example fraud, processing error, or service not as described) and determines the evidence required and the deadlines for the merchant's response. Each network uses its own scheme, such as Visa's four dispute categories (e.g. category 10 Fraud) and Mastercard's numeric codes (e.g. 4837).

Reason codes drive the entire chargeback lifecycle: the code dictates what compelling evidence the Merchant of Record must supply and the window to respond (representment is generally 30 days for Visa and 45 days for Mastercard at each dispute stage). After representment, unresolved disputes can escalate to pre-arbitration and arbitration. Modern Visa codes group disputes into four categories (Fraud, Authorization, Processing Errors, Consumer Disputes), while Mastercard retains discrete four-digit codes. For travel merchants, common reason codes involve cancellations, no-shows, services not rendered, and card-not-present fraud, so mapping each code to the right defense and deadline is operationally critical. Reason codes are what the broader Chargeback concept only alludes to.

**한국어 / Korean** — **차지백 사유 코드** — 차지백 사유 코드(chargeback reason code)는 카드 네트워크가 부여하는 표준화된 영숫자 식별자로, 카드 소지자가 거래를 이의 제기하는 이유(예: 사기, 처리 오류, 서비스가 설명과 다름)를 분류하고, 가맹점 대응에 필요한 증빙과 마감 기한을 결정한다. 각 네트워크는 자체 체계를 사용하는데, Visa의 네 가지 분쟁 범주(예: category 10 사기)와 Mastercard의 숫자 코드(예: 4837) 등이 있다.

사유 코드는 차지백 생애주기 전체를 좌우한다. 코드는 Merchant of Record가 제출해야 할 설득력 있는 증빙과 대응 기한(재청구(representment)는 각 분쟁 단계에서 Visa 약 30일, Mastercard 45일)을 규정한다. 재청구 후에도 해결되지 않은 분쟁은 사전중재(pre-arbitration)와 중재(arbitration)로 격상될 수 있다. 현대 Visa 코드는 분쟁을 네 범주(사기, 승인, 처리 오류, 소비자 분쟁)로 묶고, Mastercard는 개별 네 자리 코드를 유지한다. 여행 가맹점에서는 취소, 노쇼(no-show), 미제공 서비스, 비대면(CNP) 사기 관련 사유 코드가 흔하므로, 각 코드를 올바른 방어와 기한에 매핑하는 것이 운영상 매우 중요하다. 사유 코드는 더 넓은 Chargeback 개념이 암시만 하던 부분이다.

**Aliases:** `dispute reason code`, `reason code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Visa | `Dispute category (e.g. category 10 Fraud)` | narrower | Visa groups dispute reasons into four categories (Fraud, Authorization, Processing Errors, Consumer Disputes) under Visa Claims Resolution. |
| Mastercard | `Reason code (e.g. 4837)` | narrower | Mastercard uses discrete four-digit reason codes such as 4837 (No Cardholder Authorization). |

# Related
- [Chargeback](/common/pay/chargeback.md) — parent
- [Merchant of Record](/common/pay/merchant-of-record.md) — related
- [3-D Secure](/common/pay/3-d-secure.md) — related
- [Refund](/air/air-ticket/refund.md) — related

# Distinctions
- **Chargeback Reason Code** vs [Chargeback](/common/pay/chargeback.md) — A chargeback is the dispute and forced reversal itself; the reason code is the standardized label that classifies that dispute and sets the evidence rules and deadlines.

# Citations
[1] [Rivero — The complete guide to chargeback reason codes for card issuers](https://rivero.tech/guide-chargeback-reason-codes)
[2] [Chargebacks911 — Chargeback Reason Codes: The Ultimate Guide](https://chargebacks911.com/chargeback-reason-codes/)
