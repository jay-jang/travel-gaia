---
type: Role
title: Acquirer
description: 'An acquirer (acquiring bank) is the financial institution that holds a merchant''s account, processes card payments on its behalf, and routes transactions through the card networks to the issuing banks. The acquirer credits the merchant for sales, manages chargebacks, and is responsible to the card schemes for the merchant''s activity.'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: acquirer
vertical: common
category: pay
conceptType: role
status: active
term_ko: 매입사 (Acquirer / 매입은행)
definition_ko: 'Acquirer(매입사/매입은행)는 가맹점 계좌를 보유하고 가맹점을 대신해 카드 결제를 처리하며, 거래를 카드 네트워크를 거쳐 발급은행으로 라우팅하는 금융기관이다. 매입사는 판매 대금을 가맹점에 입금하고 Chargeback을 관리하며, 가맹점 활동에 대해 카드 네트워크에 책임을 진다.'
longDef: 'In the four-party card model, the acquirer sits between the merchant and the card network, opposite the issuer (the cardholder''s bank). The acquirer (or a payment processor acting for it) submits authorization and clearing messages, receives funds via interchange and network settlement, deducts the merchant discount rate and fees, and pays the net amount to the merchant. The acquirer also underwrites and assumes settlement risk for the merchant, handles chargeback processing, and enforces card-scheme rules including PCI DSS. In travel, an airline operating under the merchant model uses its own or a contracted acquirer to settle card sales directly, whereas agency-model sales are remitted through BSP or ARC instead; a Merchant of Record often interposes its own acquiring relationship so individual suppliers do not each need one.'
longDef_ko: '4자 카드 모델에서 매입사는 가맹점과 카드 네트워크 사이에 위치하며, 카드 소지자의 은행인 발급사(issuer)의 반대편에 있다. 매입사(또는 그를 대신하는 결제 프로세서)는 승인·청산 메시지를 전송하고, 인터체인지(Interchange)와 네트워크 정산을 통해 자금을 받아 가맹점 할인율(merchant discount rate)과 수수료를 공제한 뒤 순액을 가맹점에 지급한다. 또한 가맹점을 심사하고 정산 위험을 부담하며, Chargeback 처리와 PCI DSS 등 카드 네트워크 규칙 준수를 집행한다. 여행 분야에서 Merchant Model로 운영하는 항공사는 자체 또는 계약된 매입사를 통해 카드 판매를 직접 정산하지만, Agency Model 판매는 대신 BSP나 ARC를 통해 송금된다. Merchant of Record는 흔히 자체 매입 관계를 끼워 넣어 개별 공급사가 각각 매입사를 둘 필요가 없게 한다.'
aliases:
  - acquiring bank
  - merchant acquirer
  - acquiring institution
relationships:
  - type: related
    targetTerm: Interchange Fee
  - type: related
    targetTerm: Chargeback
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: Merchant Model
  - type: related
    targetTerm: Settlement Cycle
distinctions:
  - targetTerm: Merchant of Record
    explanation: 'The acquirer is the bank that processes and settles card transactions; the Merchant of Record is the legal seller responsible to the cardholder for the sale, which contracts with an acquirer but is not itself one.'
    explanation_ko: 'Acquirer는 카드 거래를 처리·정산하는 은행이고, Merchant of Record는 판매에 대해 카드 소지자에게 책임지는 법적 판매자로서 매입사와 계약하지만 그 자신이 매입사는 아니다.'
  - targetTerm: IATA Clearing House
    explanation: 'The acquirer settles consumer card payments between merchants and issuers via the card networks, whereas the IATA Clearing House settles obligations between airlines and other industry members.'
    explanation_ko: 'Acquirer는 카드 네트워크를 통해 가맹점과 발급사 간 소비자 카드 결제를 정산하는 반면, IATA Clearing House는 항공사 등 업계 회원 간 채무를 정산한다.'
sources:
  - org: EMVCo
    name: EMVCo Terminology / Book of Glossary
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6l16 7v3H8v-3z"/><line x1="12" y1="19" x2="12" y2="34"/><line x1="20" y1="19" x2="20" y2="34"/><line x1="28" y1="19" x2="28" y2="34"/><line x1="36" y1="19" x2="36" y2="34"/><line x1="8" y1="38" x2="40" y2="38"/></svg>
---

> An acquirer (acquiring bank) is the financial institution that holds a merchant's account, processes card payments on its behalf, and routes transactions through the card networks to the issuing banks. The acquirer credits the merchant for sales, manages chargebacks, and is responsible to the card schemes for the merchant's activity.

In the four-party card model, the acquirer sits between the merchant and the card network, opposite the issuer (the cardholder's bank). The acquirer (or a payment processor acting for it) submits authorization and clearing messages, receives funds via interchange and network settlement, deducts the merchant discount rate and fees, and pays the net amount to the merchant. The acquirer also underwrites and assumes settlement risk for the merchant, handles chargeback processing, and enforces card-scheme rules including PCI DSS. In travel, an airline operating under the merchant model uses its own or a contracted acquirer to settle card sales directly, whereas agency-model sales are remitted through BSP or ARC instead; a Merchant of Record often interposes its own acquiring relationship so individual suppliers do not each need one.

**한국어 / Korean** — **매입사 (Acquirer / 매입은행)** — Acquirer(매입사/매입은행)는 가맹점 계좌를 보유하고 가맹점을 대신해 카드 결제를 처리하며, 거래를 카드 네트워크를 거쳐 발급은행으로 라우팅하는 금융기관이다. 매입사는 판매 대금을 가맹점에 입금하고 Chargeback을 관리하며, 가맹점 활동에 대해 카드 네트워크에 책임을 진다.

4자 카드 모델에서 매입사는 가맹점과 카드 네트워크 사이에 위치하며, 카드 소지자의 은행인 발급사(issuer)의 반대편에 있다. 매입사(또는 그를 대신하는 결제 프로세서)는 승인·청산 메시지를 전송하고, 인터체인지(Interchange)와 네트워크 정산을 통해 자금을 받아 가맹점 할인율(merchant discount rate)과 수수료를 공제한 뒤 순액을 가맹점에 지급한다. 또한 가맹점을 심사하고 정산 위험을 부담하며, Chargeback 처리와 PCI DSS 등 카드 네트워크 규칙 준수를 집행한다. 여행 분야에서 Merchant Model로 운영하는 항공사는 자체 또는 계약된 매입사를 통해 카드 판매를 직접 정산하지만, Agency Model 판매는 대신 BSP나 ARC를 통해 송금된다. Merchant of Record는 흔히 자체 매입 관계를 끼워 넣어 개별 공급사가 각각 매입사를 둘 필요가 없게 한다.

**Aliases:** `acquiring bank`, `merchant acquirer`, `acquiring institution`

# Related
- [Interchange Fee](/common/pay/interchange-fee.md) — related
- [Chargeback](/common/pay/chargeback.md) — related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related
- [Merchant Model](/common/pay/merchant-model.md) — related
- [Settlement Cycle](/common/pay/settlement-cycle.md) — related

# Distinctions
- **Acquirer** vs [Merchant of Record](/common/pay/merchant-of-record.md) — The acquirer is the bank that processes and settles card transactions; the Merchant of Record is the legal seller responsible to the cardholder for the sale, which contracts with an acquirer but is not itself one.
- **Acquirer** vs [IATA Clearing House](/common/pay/iata-clearing-house.md) — The acquirer settles consumer card payments between merchants and issuers via the card networks, whereas the IATA Clearing House settles obligations between airlines and other industry members.

# Citations
[1] EMVCo — EMVCo Terminology / Book of Glossary
