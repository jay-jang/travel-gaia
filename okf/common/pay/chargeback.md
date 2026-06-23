---
type: Process
title: Chargeback
description: 'A chargeback is a card-network-mandated reversal of a card transaction, initiated when a cardholder disputes a charge with their issuing bank (for reasons such as fraud, non-delivery, or service not as described). The disputed funds are debited from the merchant (Merchant of Record), which can contest the dispute through representment.'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: chargeback
vertical: common
category: pay
conceptType: process
status: active
term_ko: 차지백(Chargeback)
definition_ko: '차지백(chargeback)은 카드 소지자가 발급 은행에 청구 건을 이의 제기할 때(사기, 미인도, 서비스가 설명과 다름 등의 사유) 개시되는, 카드망이 의무화한 카드 거래 취소다. 이의 제기된 자금은 가맹점(Merchant of Record)에서 차감되며, 가맹점은 재청구(representment)를 통해 이의를 다툴 수 있다.'
longDef: 'Chargebacks follow card scheme rules (e.g. Visa, Mastercard) with defined reason codes, time limits, and dispute stages. The Merchant of Record bears the financial exposure, so the distribution model determines who absorbs chargeback risk: the supplier in the agency model, the intermediary in the merchant model. Cardholder authentication via 3-D Secure can shift fraud-related liability away from the merchant. IATA EasyPay is promoted partly because it carries no chargeback risk for airlines.'
longDef_ko: '차지백은 정해진 사유 코드, 기한, 분쟁 단계를 갖춘 카드 스킴 규칙(예: Visa, Mastercard)을 따른다. Merchant of Record가 재무적 노출을 부담하므로, 누가 차지백 위험을 떠안는지는 유통 모델이 결정한다. 에이전시 모델에서는 공급업체가, 머천트 모델에서는 중개업체가 부담한다. 3-D Secure를 통한 카드 소지자 인증은 사기 관련 책임을 가맹점에서 이전시킬 수 있다. IATA EasyPay가 일부 권장되는 이유 중 하나는 항공사에 차지백 위험이 없기 때문이다.'
aliases:
  - Payment Dispute
  - Card Dispute
providerTerms:
  - provider: Visa (Verifi)
    term: Verifi RDR (Rapid Dispute Resolution)
    context: Visa-only automated pre-dispute resolution that auto-refunds qualifying transactions by merchant rules before a chargeback is filed.
    context_ko: 'Visa 전용 자동 사전분쟁 해결 도구로, 가맹점 규칙에 따라 적격 거래를 차지백 발생 전 자동 환불한다.'
    relationship: related
  - provider: Mastercard (Ethoca)
    term: Ethoca Alerts
    context: Mastercard's real-time issuer fraud/dispute notifications letting merchants refund before a Mastercard chargeback is filed.
    context_ko: 'Mastercard 측 실시간 발급사 사기/분쟁 알림으로, 차지백 접수 전에 가맹점이 환불하도록 한다.'
    relationship: related
  - provider: Visa
    term: Compelling Evidence 3.0 (Reason Code 10.4)
    context: Visa evidence standard letting merchants reverse or prevent card-absent fraud chargebacks by matching prior undisputed transactions.
    context_ko: 이전 미분쟁 거래와 매칭해 비대면 사기 차지백을 역전·예방하게 하는 Visa의 증빙 기준(사유코드 10.4).
    relationship: related
relationships:
  - type: related
    targetTerm: Merchant of Record
  - type: contrasts
    targetTerm: 3-D Secure
  - type: contrasts
    targetTerm: Refund
  - type: related
    targetTerm: VCC
distinctions:
  - targetTerm: Refund
    explanation: 'A refund is voluntarily issued by the merchant, whereas a chargeback is a forced reversal initiated by the cardholder''s issuer through the card network.'
    explanation_ko: '환불은 가맹점이 자발적으로 처리하는 반면, 차지백은 카드 소지자의 발급사가 카드망을 통해 개시하는 강제적 거래 취소다.'
  - targetTerm: 3-D Secure
    explanation: A chargeback is a post-transaction dispute; 3-D Secure is pre-transaction authentication that can reduce fraud chargeback liability.
    explanation_ko: '차지백은 거래 후 분쟁이고, 3-D Secure는 사기성 차지백 책임을 줄일 수 있는 거래 전 인증이다.'
  - targetTerm: Chargeback Reason Code
    explanation: A chargeback is the dispute and forced reversal itself; the reason code is the standardized label that classifies that dispute and sets the evidence rules and deadlines.
    explanation_ko: 'Chargeback은 분쟁과 강제적 거래 취소 자체이고, 사유 코드는 그 분쟁을 분류하고 증빙 규칙과 기한을 정하는 표준화된 라벨이다.'
  - targetTerm: IATA EasyPay
    explanation: 'IATA EasyPay carries no chargeback risk for airlines because funds are pre-funded and blocked at issuance, unlike card payments.'
    explanation_ko: IATA EasyPay는 카드 결제와 달리 자금이 사전 충전되고 발권 시 보류되므로 항공사에 차지백 위험이 없다.
  - targetTerm: Interchange Fee
    explanation: 'Interchange is a per-transaction cost paid to the issuer for processing a card payment, whereas a chargeback is a reversal of a transaction initiated by the cardholder or issuer; they are unrelated mechanisms though both flow through the acquirer.'
    explanation_ko: '인터체인지는 카드 결제 처리 대가로 발급사에 지급하는 거래당 비용인 반면, Chargeback은 카드 소지자나 발급사가 개시하는 거래 취소(반환)다. 둘 다 매입사를 거치지만 서로 다른 별개의 메커니즘이다.'
sources:
  - name: EMV 3-D Secure
    org: EMVCo
    version: 2.2.0–2.3.1.1
    section: ''
    url: 'https://www.emvco.com/emv-technologies/3-d-secure/'
    tier: standard-body
    verifyQuote: 'SB n° 279 EMV® 3-D Secure Protocol and Core Functions Specification v2.2.0–2.3.1.1 (published August 11, 2025).'
    verified: true
  - name: 'Merchant of Record in Travel: OTA''s Guide to Owning the Payment Flow'
    org: AltexSoft
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/merchant-of-record-in-travel/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="36" height="24" rx="3"/><line x1="6" y1="21" x2="42" y2="21"/><path d="M30 31a6 6 0 1 0-2-5"/><path d="M26 24l2 3 3-2"/></svg>
---

> A chargeback is a card-network-mandated reversal of a card transaction, initiated when a cardholder disputes a charge with their issuing bank (for reasons such as fraud, non-delivery, or service not as described). The disputed funds are debited from the merchant (Merchant of Record), which can contest the dispute through representment.

Chargebacks follow card scheme rules (e.g. Visa, Mastercard) with defined reason codes, time limits, and dispute stages. The Merchant of Record bears the financial exposure, so the distribution model determines who absorbs chargeback risk: the supplier in the agency model, the intermediary in the merchant model. Cardholder authentication via 3-D Secure can shift fraud-related liability away from the merchant. IATA EasyPay is promoted partly because it carries no chargeback risk for airlines.

**한국어 / Korean** — **차지백(Chargeback)** — 차지백(chargeback)은 카드 소지자가 발급 은행에 청구 건을 이의 제기할 때(사기, 미인도, 서비스가 설명과 다름 등의 사유) 개시되는, 카드망이 의무화한 카드 거래 취소다. 이의 제기된 자금은 가맹점(Merchant of Record)에서 차감되며, 가맹점은 재청구(representment)를 통해 이의를 다툴 수 있다.

차지백은 정해진 사유 코드, 기한, 분쟁 단계를 갖춘 카드 스킴 규칙(예: Visa, Mastercard)을 따른다. Merchant of Record가 재무적 노출을 부담하므로, 누가 차지백 위험을 떠안는지는 유통 모델이 결정한다. 에이전시 모델에서는 공급업체가, 머천트 모델에서는 중개업체가 부담한다. 3-D Secure를 통한 카드 소지자 인증은 사기 관련 책임을 가맹점에서 이전시킬 수 있다. IATA EasyPay가 일부 권장되는 이유 중 하나는 항공사에 차지백 위험이 없기 때문이다.

**Aliases:** `Payment Dispute`, `Card Dispute`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Visa (Verifi) | `Verifi RDR (Rapid Dispute Resolution)` | related | Visa-only automated pre-dispute resolution that auto-refunds qualifying transactions by merchant rules before a chargeback is filed. |
| Mastercard (Ethoca) | `Ethoca Alerts` | related | Mastercard's real-time issuer fraud/dispute notifications letting merchants refund before a Mastercard chargeback is filed. |
| Visa | `Compelling Evidence 3.0 (Reason Code 10.4)` | related | Visa evidence standard letting merchants reverse or prevent card-absent fraud chargebacks by matching prior undisputed transactions. |

# Related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related
- [3-D Secure](/common/pay/3-d-secure.md) — contrasts
- [Refund](/air/air-ticket/refund.md) — contrasts
- [VCC](/common/pay/vcc.md) — related

# Distinctions
- **Chargeback** vs [Refund](/air/air-ticket/refund.md) — A refund is voluntarily issued by the merchant, whereas a chargeback is a forced reversal initiated by the cardholder's issuer through the card network.
- **Chargeback** vs [3-D Secure](/common/pay/3-d-secure.md) — A chargeback is a post-transaction dispute; 3-D Secure is pre-transaction authentication that can reduce fraud chargeback liability.
- **Chargeback** vs [Chargeback Reason Code](/common/pay/chargeback-reason-code.md) — A chargeback is the dispute and forced reversal itself; the reason code is the standardized label that classifies that dispute and sets the evidence rules and deadlines.
- **Chargeback** vs [IATA EasyPay](/common/pay/iata-easypay.md) — IATA EasyPay carries no chargeback risk for airlines because funds are pre-funded and blocked at issuance, unlike card payments.
- **Chargeback** vs [Interchange Fee](/common/pay/interchange-fee.md) — Interchange is a per-transaction cost paid to the issuer for processing a card payment, whereas a chargeback is a reversal of a transaction initiated by the cardholder or issuer; they are unrelated mechanisms though both flow through the acquirer.

# Citations
[1] [EMVCo — EMV 3-D Secure — 2.2.0–2.3.1.1](https://www.emvco.com/emv-technologies/3-d-secure/)
[2] [AltexSoft — Merchant of Record in Travel: OTA's Guide to Owning the Payment Flow](https://www.altexsoft.com/blog/merchant-of-record-in-travel/)
