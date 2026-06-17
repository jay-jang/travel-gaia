---
type: Business Term
title: Merchant Model
description: 'The merchant model is a travel distribution arrangement in which the intermediary (e.g. an OTA) buys inventory from suppliers at net rates, sets the retail price including markup, collects payment from the traveler, and acts as the Merchant of Record. The intermediary''s name appears on the customer''s card statement and it remits the supplier its share.'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: merchant-model
vertical: common
category: pay
conceptType: business-term
status: active
term_ko: 머천트 모델
definition_ko: '머천트 모델은 중개업체(예: OTA)가 공급업체로부터 재고를 넷 요금(net rate)으로 매입하여 마크업을 포함한 소매가를 책정하고, 여행객으로부터 결제를 수납하며, Merchant of Record 역할을 하는 여행 유통 방식이다. 고객의 카드 명세서에는 중개업체의 명의가 표시되며, 중개업체는 공급업체에 해당 몫을 송금한다.'
longDef: 'The merchant model, used widely by OTAs for hotel inventory, gives the intermediary control over pricing and margin and ownership of the payment relationship, along with the associated payment liability, refunds, and chargeback risk. It contrasts with the agency model, where the supplier sets the price and is the Merchant of Record.'
longDef_ko: 'OTA가 호텔 재고에 널리 사용하는 머천트 모델은 중개업체에 가격과 마진에 대한 통제권 및 결제 관계의 소유권을 부여하며, 이에 따른 결제 책임, 환불, 차지백 위험도 함께 부담하게 한다. 이는 공급업체가 가격을 책정하고 Merchant of Record가 되는 에이전시 모델과 대비된다.'
aliases:
  - Merchant of Record Model
  - Net Rate Model
relationships:
  - type: contrasts
    targetTerm: Agency Model
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: Net Rate
  - type: related
    targetTerm: VCC
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: Agency Model
    explanation: Under the merchant model the intermediary sets the price and is Merchant of Record; under the agency model the supplier does.
    explanation_ko: '머천트 모델에서는 중개업체가 가격을 책정하고 Merchant of Record가 되며, 에이전시 모델에서는 공급업체가 그 역할을 한다.'
  - targetTerm: Net Rate
    explanation: Net rates are the wholesale buying price the intermediary marks up under the merchant model.
    explanation_ko: 넷 요금(net rate)은 머천트 모델에서 중개업체가 마크업을 적용하는 도매 매입가다.
sources:
  - name: 'Merchant model vs. agency model: A guide for business success'
    org: WEX Inc.
    version: ''
    section: ''
    url: 'https://www.wexinc.com/resources/blog/merchant-vs-agency-model-travel-payments/'
  - name: 'Merchant of Record in Travel: OTA''s Guide to Owning the Payment Flow'
    org: AltexSoft
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/merchant-of-record-in-travel/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18 11 9h26l3 9"/><path d="M8 18a4 4 0 0 0 8 0 4 4 0 0 0 8 0 4 4 0 0 0 8 0 4 4 0 0 0 8 0"/><path d="M11 21v18h26V21"/><path d="M21 39v-9h6v9"/></svg>
---

> The merchant model is a travel distribution arrangement in which the intermediary (e.g. an OTA) buys inventory from suppliers at net rates, sets the retail price including markup, collects payment from the traveler, and acts as the Merchant of Record. The intermediary's name appears on the customer's card statement and it remits the supplier its share.

The merchant model, used widely by OTAs for hotel inventory, gives the intermediary control over pricing and margin and ownership of the payment relationship, along with the associated payment liability, refunds, and chargeback risk. It contrasts with the agency model, where the supplier sets the price and is the Merchant of Record.

**한국어 / Korean** — **머천트 모델** — 머천트 모델은 중개업체(예: OTA)가 공급업체로부터 재고를 넷 요금(net rate)으로 매입하여 마크업을 포함한 소매가를 책정하고, 여행객으로부터 결제를 수납하며, Merchant of Record 역할을 하는 여행 유통 방식이다. 고객의 카드 명세서에는 중개업체의 명의가 표시되며, 중개업체는 공급업체에 해당 몫을 송금한다.

OTA가 호텔 재고에 널리 사용하는 머천트 모델은 중개업체에 가격과 마진에 대한 통제권 및 결제 관계의 소유권을 부여하며, 이에 따른 결제 책임, 환불, 차지백 위험도 함께 부담하게 한다. 이는 공급업체가 가격을 책정하고 Merchant of Record가 되는 에이전시 모델과 대비된다.

**Aliases:** `Merchant of Record Model`, `Net Rate Model`

# Related
- [Agency Model](/common/pay/agency-model.md) — contrasts
- [Merchant of Record](/common/pay/merchant-of-record.md) — related
- [Net Rate](/lodging/hotel-dist/net-rate.md) — related
- [VCC](/common/pay/vcc.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **Merchant Model** vs [Agency Model](/common/pay/agency-model.md) — Under the merchant model the intermediary sets the price and is Merchant of Record; under the agency model the supplier does.
- **Merchant Model** vs [Net Rate](/lodging/hotel-dist/net-rate.md) — Net rates are the wholesale buying price the intermediary marks up under the merchant model.

# Citations
[1] [WEX Inc. — Merchant model vs. agency model: A guide for business success](https://www.wexinc.com/resources/blog/merchant-vs-agency-model-travel-payments/)
[2] [AltexSoft — Merchant of Record in Travel: OTA's Guide to Owning the Payment Flow](https://www.altexsoft.com/blog/merchant-of-record-in-travel/)
