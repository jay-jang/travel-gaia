---
type: Process
title: Chargeback
description: 'A chargeback is a card-network-mandated reversal of a card transaction, initiated when a cardholder disputes a charge with their issuing bank (for reasons such as fraud, non-delivery, or service not as described). The disputed funds are debited from the merchant (Merchant of Record), which can contest the dispute through representment.'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: chargeback
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
relationships:
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: 3-D Secure
  - type: related
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
sources:
  - name: EMV 3-D Secure
    org: EMVCo
    version: ''
    section: ''
    url: 'https://www.emvco.com/emv-technologies/3-d-secure/'
  - name: 'Merchant of Record in Travel: OTA''s Guide to Owning the Payment Flow'
    org: AltexSoft
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/merchant-of-record-in-travel/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="36" height="24" rx="3"/><line x1="6" y1="21" x2="42" y2="21"/><path d="M30 31a6 6 0 1 0-2-5"/><path d="M26 24l2 3 3-2"/></svg>
---

> A chargeback is a card-network-mandated reversal of a card transaction, initiated when a cardholder disputes a charge with their issuing bank (for reasons such as fraud, non-delivery, or service not as described). The disputed funds are debited from the merchant (Merchant of Record), which can contest the dispute through representment.

Chargebacks follow card scheme rules (e.g. Visa, Mastercard) with defined reason codes, time limits, and dispute stages. The Merchant of Record bears the financial exposure, so the distribution model determines who absorbs chargeback risk: the supplier in the agency model, the intermediary in the merchant model. Cardholder authentication via 3-D Secure can shift fraud-related liability away from the merchant. IATA EasyPay is promoted partly because it carries no chargeback risk for airlines.

**한국어 / Korean** — **차지백(Chargeback)** — 차지백(chargeback)은 카드 소지자가 발급 은행에 청구 건을 이의 제기할 때(사기, 미인도, 서비스가 설명과 다름 등의 사유) 개시되는, 카드망이 의무화한 카드 거래 취소다. 이의 제기된 자금은 가맹점(Merchant of Record)에서 차감되며, 가맹점은 재청구(representment)를 통해 이의를 다툴 수 있다.

차지백은 정해진 사유 코드, 기한, 분쟁 단계를 갖춘 카드 스킴 규칙(예: Visa, Mastercard)을 따른다. Merchant of Record가 재무적 노출을 부담하므로, 누가 차지백 위험을 떠안는지는 유통 모델이 결정한다. 에이전시 모델에서는 공급업체가, 머천트 모델에서는 중개업체가 부담한다. 3-D Secure를 통한 카드 소지자 인증은 사기 관련 책임을 가맹점에서 이전시킬 수 있다. IATA EasyPay가 일부 권장되는 이유 중 하나는 항공사에 차지백 위험이 없기 때문이다.

**Aliases:** `Payment Dispute`, `Card Dispute`

# Related
- [Merchant of Record](/pay/merchant-of-record.md) — related
- [3-D Secure](/pay/3-d-secure.md) — related
- [Refund](/air-ticket/refund.md) — related
- [VCC](/pay/vcc.md) — related

# Distinctions
- **Chargeback** vs [Refund](/air-ticket/refund.md) — A refund is voluntarily issued by the merchant, whereas a chargeback is a forced reversal initiated by the cardholder's issuer through the card network.
- **Chargeback** vs [3-D Secure](/pay/3-d-secure.md) — A chargeback is a post-transaction dispute; 3-D Secure is pre-transaction authentication that can reduce fraud chargeback liability.

# Citations
[1] [EMVCo — EMV 3-D Secure](https://www.emvco.com/emv-technologies/3-d-secure/)
[2] [AltexSoft — Merchant of Record in Travel: OTA's Guide to Owning the Payment Flow](https://www.altexsoft.com/blog/merchant-of-record-in-travel/)
