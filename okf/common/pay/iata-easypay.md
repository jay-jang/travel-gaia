---
type: Provider Term
title: IATA EasyPay
description: 'IATA EasyPay is an IATA e-wallet (pay-as-you-go) payment method used by IATA-accredited agents to issue tickets and EMDs through the BSP. Agents pre-fund a dedicated account and, at issuance, enter an EasyPay number in the GDS that triggers a real-time authorization blocking the funds, after which IATA settles the amount to the airline via standard BSP processes.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: iata-easypay
vertical: common
category: pay
conceptType: provider-term
status: active
term_ko: IATA EasyPay
definition_ko: 'IATA EasyPay는 IATA 인증 여행사가 BSP를 통해 항공권과 EMD를 발권하는 데 사용하는 IATA 전자지갑(선불 충전식, pay-as-you-go) 결제 수단이다. 여행사는 전용 계정에 미리 자금을 충전하고 발권 시 GDS에 EasyPay 번호를 입력하면 실시간 승인이 발생해 해당 자금이 보류되며, 이후 IATA가 표준 BSP 절차를 통해 항공사에 금액을 정산한다.'
longDef: 'Introduced under NewGen ISS, IATA EasyPay offers a secure alternative to BSP Cash and BSP Card. Because funds are verified and blocked at the moment of issuance and settled to airlines through the BSP within roughly 48-96 hours of issuance, it eliminates chargeback risk for airlines and reduces the financial security agents must post to IATA. It is optional and does not replace existing BSP payment methods.'
longDef_ko: 'NewGen ISS 하에서 도입된 IATA EasyPay는 BSP Cash 및 BSP Card에 대한 안전한 대안을 제공한다. 자금이 발권 시점에 검증되고 보류되며 발권 후 약 48~96시간 이내에 BSP를 통해 항공사에 정산되므로, 항공사의 차지백 위험을 제거하고 여행사가 IATA에 예치해야 하는 재무 보증금을 줄인다. 이는 선택 사항이며 기존 BSP 결제 수단을 대체하지 않는다.'
standardBody: IATA
aliases:
  - IATA EasyPay
  - IEP
  - IATA Easy Pay
relationships:
  - type: parent
    targetTerm: BSP
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: GDS
distinctions:
  - targetTerm: VCC
    explanation: 'IATA EasyPay is an IATA-operated e-wallet limited to BSP ticket issuance, while a VCC is a general card-rail instrument usable for many supplier payments.'
    explanation_ko: 'IATA EasyPay는 BSP 항공권 발권에 한정된 IATA 운영 전자지갑인 반면, VCC는 다양한 공급업체 결제에 사용할 수 있는 범용 카드 결제망 수단이다.'
  - targetTerm: Chargeback
    explanation: 'IATA EasyPay carries no chargeback risk for airlines because funds are pre-funded and blocked at issuance, unlike card payments.'
    explanation_ko: IATA EasyPay는 카드 결제와 달리 자금이 사전 충전되고 발권 시 보류되므로 항공사에 차지백 위험이 없다.
  - targetTerm: IATA Pay
    explanation: 'IATA EasyPay is a prepaid e-wallet that travel agents fund (typically by bank transfer/Direct Debit) and use to pay airlines through the BSP as an alternative to credit cards, whereas IATA Pay is an account-to-account/open-banking method for end customers paying airlines directly, bypassing card networks entirely.'
    explanation_ko: 'IATA EasyPay는 여행사(대리점)가 (보통 계좌이체/자동출금으로) 충전하여 신용카드 대신 BSP를 통해 항공사에 지불하는 선불 전자지갑인 반면, IATA Pay는 최종 고객이 카드 네트워크를 완전히 우회하여 항공사에 직접 지불하는 계좌 간/오픈뱅킹 방식이다.'
sources:
  - name: IATA EASY PAY
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/iata-easy-pay/'
    tier: association
  - name: IATA EasyPay | NewGen ISS
    org: IATA
    version: ''
    section: ''
    url: 'https://newgeniss.iata.org/airlines/iata-easy-pay/'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14h30a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V14a3 3 0 0 1 3-3h25"/><path d="M34 24h8v8h-8a4 4 0 0 1 0-8z"/><path d="M18 23l-4 6h6l-4 6"/></svg>
---

> IATA EasyPay is an IATA e-wallet (pay-as-you-go) payment method used by IATA-accredited agents to issue tickets and EMDs through the BSP. Agents pre-fund a dedicated account and, at issuance, enter an EasyPay number in the GDS that triggers a real-time authorization blocking the funds, after which IATA settles the amount to the airline via standard BSP processes.

Introduced under NewGen ISS, IATA EasyPay offers a secure alternative to BSP Cash and BSP Card. Because funds are verified and blocked at the moment of issuance and settled to airlines through the BSP within roughly 48-96 hours of issuance, it eliminates chargeback risk for airlines and reduces the financial security agents must post to IATA. It is optional and does not replace existing BSP payment methods.

**한국어 / Korean** — IATA EasyPay는 IATA 인증 여행사가 BSP를 통해 항공권과 EMD를 발권하는 데 사용하는 IATA 전자지갑(선불 충전식, pay-as-you-go) 결제 수단이다. 여행사는 전용 계정에 미리 자금을 충전하고 발권 시 GDS에 EasyPay 번호를 입력하면 실시간 승인이 발생해 해당 자금이 보류되며, 이후 IATA가 표준 BSP 절차를 통해 항공사에 금액을 정산한다.

NewGen ISS 하에서 도입된 IATA EasyPay는 BSP Cash 및 BSP Card에 대한 안전한 대안을 제공한다. 자금이 발권 시점에 검증되고 보류되며 발권 후 약 48~96시간 이내에 BSP를 통해 항공사에 정산되므로, 항공사의 차지백 위험을 제거하고 여행사가 IATA에 예치해야 하는 재무 보증금을 줄인다. 이는 선택 사항이며 기존 BSP 결제 수단을 대체하지 않는다.

**Aliases:** `IATA EasyPay`, `IEP`, `IATA Easy Pay`

# Related
- [BSP](/common/pay/bsp.md) — parent
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [GDS](/common/standards/gds.md) — related

# Distinctions
- **IATA EasyPay** vs [VCC](/common/pay/vcc.md) — IATA EasyPay is an IATA-operated e-wallet limited to BSP ticket issuance, while a VCC is a general card-rail instrument usable for many supplier payments.
- **IATA EasyPay** vs [Chargeback](/common/pay/chargeback.md) — IATA EasyPay carries no chargeback risk for airlines because funds are pre-funded and blocked at issuance, unlike card payments.
- **IATA EasyPay** vs [IATA Pay](/common/pay/iata-pay.md) — IATA EasyPay is a prepaid e-wallet that travel agents fund (typically by bank transfer/Direct Debit) and use to pay airlines through the BSP as an alternative to credit cards, whereas IATA Pay is an account-to-account/open-banking method for end customers paying airlines directly, bypassing card networks entirely.

# Citations
[1] [IATA — IATA EASY PAY](https://www.iata.org/en/services/finance/iata-easy-pay/)
[2] [IATA — IATA EasyPay | NewGen ISS](https://newgeniss.iata.org/airlines/iata-easy-pay/)
