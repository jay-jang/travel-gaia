---
type: Business Term
title: VCC
description: 'A Virtual Credit Card is a digitally generated card number (with expiry and CVC) issued for payment without a physical card, widely used in travel for B2B payments from agencies and OTAs to suppliers. VCCs are typically single-use or restricted in amount, currency, and validity window, which simplifies reconciliation and limits fraud exposure.'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: vcc
vertical: common
category: pay
conceptType: business-term
status: active
abbreviation: VCC
term_ko: 가상 신용카드(VCC)
definition_ko: '가상 신용카드(VCC)는 실물 카드 없이 결제를 위해 디지털로 생성되는 카드 번호(유효기간 및 CVC 포함)로, 여행 업계에서 여행사 및 OTA가 공급업체에 지급하는 B2B 결제에 널리 사용된다. VCC는 일반적으로 일회용이거나 금액, 통화, 유효 기간이 제한되어 있어 정산을 간소화하고 사기 노출을 줄인다.'
longDef: 'In travel, an agency, OTA, or bedbank funds a VCC and supplies its number to a supplier (hotel, airline, tour operator) to settle a specific booking. Single-use VCCs are generated per transaction, while lodged cards can be reused over time. Card brand and BIN selection can be optimized for acceptance and interchange. Because VCCs run over standard card rails, they are exposed to chargeback and 3-D Secure rules.'
longDef_ko: '여행 업계에서는 여행사, OTA 또는 베드뱅크가 VCC에 자금을 충전하고 그 번호를 공급업체(호텔, 항공사, 투어 오퍼레이터)에 제공하여 특정 예약을 결제한다. 일회용 VCC는 거래마다 생성되는 반면, 등록형(lodged) 카드는 일정 기간 반복 사용할 수 있다. 카드 브랜드와 BIN 선택은 승인율과 인터체인지를 최적화하도록 조정할 수 있다. VCC는 표준 카드 결제망을 통해 처리되므로 차지백(chargeback) 및 3-D Secure 규칙의 적용을 받는다.'
aliases:
  - Virtual Credit Card
  - Virtual Card
  - Virtual Card Number
relationships:
  - type: related
    targetTerm: Merchant Model
  - type: related
    targetTerm: Bedbank
  - type: related
    targetTerm: Net Rate
  - type: related
    targetTerm: Chargeback
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: IATA EasyPay
    explanation: 'IATA EasyPay is an IATA e-wallet exclusive to BSP ticket issuance, whereas a VCC is a general card-rail instrument used for many supplier payments.'
    explanation_ko: 'IATA EasyPay는 BSP 항공권 발권 전용 IATA 전자지갑인 반면, VCC는 다양한 공급업체 결제에 사용되는 범용 카드 결제망 수단이다.'
sources:
  - name: 'Virtual Credit Cards in Travel: How to Secure B2B Payments'
    org: AltexSoft
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/virtual-credit-cards-travel/'
  - name: Using Virtual Credit Cards for Travel Agency Payments
    org: J.P. Morgan
    version: ''
    section: ''
    url: 'https://www.jpmorgan.com/insights/treasury/cards-expense-management/using-virtual-credit-cards-for-travel-agency-payments'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="13" width="30" height="22" rx="3"/><line x1="6" y1="21" x2="36" y2="21"/><line x1="11" y1="28" x2="18" y2="28"/><path d="M40 18a6 6 0 0 1 0 12"/><path d="M40 23a2 2 0 0 1 0 2"/></svg>
---

> A Virtual Credit Card is a digitally generated card number (with expiry and CVC) issued for payment without a physical card, widely used in travel for B2B payments from agencies and OTAs to suppliers. VCCs are typically single-use or restricted in amount, currency, and validity window, which simplifies reconciliation and limits fraud exposure.

In travel, an agency, OTA, or bedbank funds a VCC and supplies its number to a supplier (hotel, airline, tour operator) to settle a specific booking. Single-use VCCs are generated per transaction, while lodged cards can be reused over time. Card brand and BIN selection can be optimized for acceptance and interchange. Because VCCs run over standard card rails, they are exposed to chargeback and 3-D Secure rules.

**한국어 / Korean** — **가상 신용카드(VCC)** — 가상 신용카드(VCC)는 실물 카드 없이 결제를 위해 디지털로 생성되는 카드 번호(유효기간 및 CVC 포함)로, 여행 업계에서 여행사 및 OTA가 공급업체에 지급하는 B2B 결제에 널리 사용된다. VCC는 일반적으로 일회용이거나 금액, 통화, 유효 기간이 제한되어 있어 정산을 간소화하고 사기 노출을 줄인다.

여행 업계에서는 여행사, OTA 또는 베드뱅크가 VCC에 자금을 충전하고 그 번호를 공급업체(호텔, 항공사, 투어 오퍼레이터)에 제공하여 특정 예약을 결제한다. 일회용 VCC는 거래마다 생성되는 반면, 등록형(lodged) 카드는 일정 기간 반복 사용할 수 있다. 카드 브랜드와 BIN 선택은 승인율과 인터체인지를 최적화하도록 조정할 수 있다. VCC는 표준 카드 결제망을 통해 처리되므로 차지백(chargeback) 및 3-D Secure 규칙의 적용을 받는다.

**Aliases:** `Virtual Credit Card`, `Virtual Card`, `Virtual Card Number`

# Related
- [Merchant Model](/common/pay/merchant-model.md) — related
- [Bedbank](/lodging/hotel-dist/bedbank.md) — related
- [Net Rate](/lodging/hotel-dist/net-rate.md) — related
- [Chargeback](/common/pay/chargeback.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **VCC** vs [IATA EasyPay](/common/pay/iata-easypay.md) — IATA EasyPay is an IATA e-wallet exclusive to BSP ticket issuance, whereas a VCC is a general card-rail instrument used for many supplier payments.

# Citations
[1] [AltexSoft — Virtual Credit Cards in Travel: How to Secure B2B Payments](https://www.altexsoft.com/blog/virtual-credit-cards-travel/)
[2] [J.P. Morgan — Using Virtual Credit Cards for Travel Agency Payments](https://www.jpmorgan.com/insights/treasury/cards-expense-management/using-virtual-credit-cards-for-travel-agency-payments)
