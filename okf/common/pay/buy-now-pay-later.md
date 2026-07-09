---
type: Business Term
title: Buy Now Pay Later
description: 'Buy Now Pay Later (BNPL) is a short-term consumer financing arrangement that allows a traveler to purchase a travel product immediately and pay for it in installments — typically two to four equal payments spread over weeks or months — often interest-free if paid on schedule. BNPL products in travel are offered by third-party credit providers (Klarna, Afterpay/Clearpay, Affirm, Laybuy) integrated at checkout by airlines, OTAs, hotels, and tour operators.'
tags:
  - pay
  - active
timestamp: '2026-07-09T00:00:00Z'
id: buy-now-pay-later
vertical: common
category: pay
conceptType: business-term
status: active
abbreviation: BNPL
term_ko: 선구매 후결제 (BNPL)
definition_ko: 'BNPL(Buy Now Pay Later, 선구매 후결제)은 여행객이 여행 상품을 즉시 구매하고 대금을 분할로 납부하는 단기 소비자 금융 방식이다. 일반적으로 수 주에서 수 개월에 걸쳐 2~4회 균등 분할되며, 일정에 맞게 납부하면 무이자인 경우가 많다. BNPL 상품은 항공사·OTA·호텔·여행사 등의 결제 단계에서 제3자 신용 제공사(Klarna, Afterpay/Clearpay, Affirm, Laybuy 등)가 통합하는 형태로 제공된다.'
longDef: 'In travel, BNPL is particularly attractive for high-value bookings (long-haul flights, package holidays, cruises) where the total cost may exceed a traveler''s available credit or immediate budget. The BNPL provider pays the travel merchant upfront (in full, minus a fee of typically 2–8%), absorbs the credit risk, and collects installments directly from the consumer. This differs from traditional airline installment plans or travel lay-bys. Integration is typically via a payment gateway plug-in or direct API; the traveler selects the BNPL option at checkout, completes a soft credit check, and receives an approved credit line for that purchase. Regulatory treatment of BNPL is evolving: the UK FCA proposed bringing BNPL within its consumer credit regulatory perimeter, and similar frameworks are under development in the EU and US. For travel merchants, BNPL can increase average order value and conversion rates but adds a settlement delay and cost per transaction. BNPL providers in travel include Klarna (partnerships with airlines including Lufthansa Group brands), Affirm (United Airlines), and Afterpay/Clearpay. Strong Customer Authentication (SCA/PSD2) requirements under EU regulation apply to BNPL arrangements in Europe.'
longDef_ko: '여행 분야에서 BNPL은 총 비용이 여행객의 가용 신용이나 즉각적인 예산을 초과하는 고가 예약(장거리 항공, 패키지 여행, 크루즈 등)에 특히 매력적이다. BNPL 제공사는 여행 판매자에게 전액을 선지급(보통 2~8% 수수료 차감)하고 신용 위험을 부담한 뒤, 소비자로부터 직접 분할금을 수취한다. 이는 전통적인 항공사 할부 납부나 여행 레이바이와 구별된다. 통합은 보통 결제 게이트웨이 플러그인 또는 직접 API를 통해 이루어지며, 여행객은 결제 단계에서 BNPL 옵션을 선택하고 소프트 신용조회를 거쳐 해당 구매에 대한 신용 한도를 승인받는다. BNPL의 규제 처리는 진화 중이다: 영국 FCA는 BNPL을 소비자 신용 규제 범위에 포함하는 방안을 제안했으며, EU와 미국에서도 유사한 프레임워크가 개발 중이다. 여행 가맹점 입장에서 BNPL은 평균 주문 금액과 전환율을 높일 수 있지만, 정산 지연과 거래당 비용이 추가된다. 여행 분야 BNPL 제공사로는 Klarna(Lufthansa Group 브랜드 항공사 파트너십), Affirm(United Airlines), Afterpay/Clearpay 등이 있다.'
aliases:
  - Buy Now Pay Later
  - BNPL payments
  - Pay Later
  - Installment Payments
  - Pay in Installments
providerTerms:
  - provider: Klarna
    term: Pay Later / Pay in 3 / Financing
    context: Klarna offers multiple BNPL products integrated with airlines (e.g. Lufthansa Group) and OTAs; ''Pay in 3'' splits the total into three equal monthly installments interest-free.
    context_ko: 'Klarna는 항공사(예: Lufthansa Group)·OTA와 통합된 다양한 BNPL 상품을 제공하며, ''Pay in 3''는 총액을 3회 동일 월 분할로 무이자 납부하는 방식이다.'
    relationship: narrower
  - provider: Affirm
    term: Affirm Adaptive Checkout
    context: 'Affirm partners with US carriers including United Airlines, offering travelers flexible pay-later installment plans at checkout — interest rates range from 0% to 36% APR depending on credit profile and purchase.'
    context_ko: 'Affirm은 United Airlines를 포함한 미국 항공사들과 파트너십을 맺고 결제 시 유연한 분할납부 방식을 제공한다. 신용 프로필과 구매 금액에 따라 0%~36% APR이 적용된다.'
    relationship: narrower
relationships:
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: Strong Customer Authentication
  - type: related
    targetTerm: PCI DSS
  - type: contrasts
    targetTerm: 3-D Secure
distinctions:
  - targetTerm: 3-D Secure
    explanation: '3-D Secure (3DS) is an authentication protocol applied at the point of card payment to verify the cardholder''s identity and satisfy Strong Customer Authentication requirements. BNPL is an alternative payment method that replaces the card transaction: the BNPL provider pays the merchant directly and the 3DS/SCA obligation applies to the BNPL provider''s own internal payment collection from the consumer, not necessarily at the merchant checkout.'
    explanation_ko: '3-D Secure(3DS)는 카드 결제 시점에 카드 소지자 신원을 확인하고 SCA 요건을 충족하기 위한 인증 프로토콜이다. BNPL은 카드 거래를 대체하는 결제 방식으로, BNPL 제공사가 가맹점에 직접 지급하며 3DS/SCA 의무는 가맹점 결제창이 아니라 BNPL 제공사의 소비자 분할금 수취 과정에 적용된다.'
  - targetTerm: Merchant of Record
    explanation: 'When a BNPL provider is used, the Merchant of Record (MoR) arrangement determines who bears the regulatory and settlement obligations: the travel merchant remains the MoR for the underlying trip, while the BNPL provider is the payment intermediary collecting installments. If the airline or OTA acts as MoR they may still need to integrate BNPL refund flows into their settlement processes.'
    explanation_ko: 'BNPL 제공사를 이용하는 경우 MoR(결제 주체) 계약에 따라 규제·정산 의무의 귀속이 결정된다. 여행 가맹점은 해당 여정에 대한 MoR로 남으며, BNPL 제공사는 분할금을 수취하는 결제 중개자 역할을 한다. 항공사나 OTA가 MoR인 경우 BNPL 환불 흐름을 자체 정산 프로세스에 통합해야 할 수 있다.'
sources:
  - name: Buy Now Pay Later
    org: FCA
    version: ''
    section: ''
    url: 'https://www.fca.org.uk/consumers/buy-now-pay-later'
    tier: regulator-guidance
  - name: Affirm and United Airlines partnership
    org: United Airlines
    version: ''
    section: ''
    url: 'https://www.united.com/en/us/fly/travel/payment-options.html'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="36" height="20" rx="3"/><line x1="6" y1="20" x2="42" y2="20"/><path d="M14 28h6"/><path d="M28 28h6"/><path d="M24 34v6M18 40h12"/></svg>
---

> Buy Now Pay Later (BNPL) is a short-term consumer financing arrangement that allows a traveler to purchase a travel product immediately and pay for it in installments — typically two to four equal payments spread over weeks or months — often interest-free if paid on schedule. BNPL products in travel are offered by third-party credit providers (Klarna, Afterpay/Clearpay, Affirm, Laybuy) integrated at checkout by airlines, OTAs, hotels, and tour operators.

In travel, BNPL is particularly attractive for high-value bookings (long-haul flights, package holidays, cruises) where the total cost may exceed a traveler's available credit or immediate budget. The BNPL provider pays the travel merchant upfront (in full, minus a fee of typically 2–8%), absorbs the credit risk, and collects installments directly from the consumer. Integration is typically via a payment gateway plug-in or direct API; the traveler selects the BNPL option at checkout, completes a soft credit check, and receives an approved credit line for that purchase. Regulatory treatment of BNPL is evolving: the UK FCA proposed bringing BNPL within its consumer credit regulatory perimeter, and similar frameworks are under development in the EU and US. For travel merchants, BNPL can increase average order value and conversion rates but adds a settlement delay and cost per transaction. BNPL providers in travel include Klarna (partnerships with Lufthansa Group brands), Affirm (United Airlines), and Afterpay/Clearpay.

**한국어 / Korean** — **선구매 후결제 (BNPL)** — BNPL(Buy Now Pay Later, 선구매 후결제)은 여행객이 여행 상품을 즉시 구매하고 대금을 분할로 납부하는 단기 소비자 금융 방식이다. 일반적으로 수 주에서 수 개월에 걸쳐 2~4회 균등 분할되며, 일정에 맞게 납부하면 무이자인 경우가 많다. BNPL 상품은 항공사·OTA·호텔·여행사 등의 결제 단계에서 제3자 신용 제공사(Klarna, Afterpay/Clearpay, Affirm, Laybuy 등)가 통합하는 형태로 제공된다.

여행 분야에서 BNPL은 총 비용이 여행객의 가용 신용이나 즉각적인 예산을 초과하는 고가 예약(장거리 항공, 패키지 여행, 크루즈 등)에 특히 매력적이다. BNPL 제공사는 여행 가맹점에 전액을 선지급(보통 2~8% 수수료 차감)하고 신용 위험을 부담한 뒤, 소비자로부터 직접 분할금을 수취한다. 여행 분야 BNPL 제공사로는 Klarna(Lufthansa Group 브랜드 항공사), Affirm(United Airlines), Afterpay/Clearpay 등이 있다.

**Aliases:** `Buy Now Pay Later`, `BNPL payments`, `Pay Later`, `Installment Payments`, `Pay in Installments`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Klarna | `Pay Later / Pay in 3 / Financing` | narrower | Klarna offers multiple BNPL products integrated with airlines and OTAs; 'Pay in 3' splits the total into three equal monthly installments interest-free. |
| Affirm | `Affirm Adaptive Checkout` | narrower | Affirm partners with US carriers including United Airlines, offering travelers flexible pay-later installment plans at checkout. |

# Related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related
- [Strong Customer Authentication](/common/pay/strong-customer-authentication.md) — related
- [PCI DSS](/common/pay/pci-dss.md) — related
- [3-D Secure](/common/pay/3-d-secure.md) — contrasts

# Distinctions
- **Buy Now Pay Later** vs [3-D Secure](/common/pay/3-d-secure.md) — 3-D Secure (3DS) is an authentication protocol applied at the point of card payment to verify the cardholder's identity and satisfy Strong Customer Authentication requirements. BNPL is an alternative payment method that replaces the card transaction: the BNPL provider pays the merchant directly and the 3DS/SCA obligation applies to the BNPL provider's own internal payment collection from the consumer, not necessarily at the merchant checkout.
- **Buy Now Pay Later** vs [Merchant of Record](/common/pay/merchant-of-record.md) — When a BNPL provider is used, the Merchant of Record (MoR) arrangement determines who bears the regulatory and settlement obligations: the travel merchant remains the MoR for the underlying trip, while the BNPL provider is the payment intermediary collecting installments.

# Citations
[1] [FCA — Buy Now Pay Later](https://www.fca.org.uk/consumers/buy-now-pay-later)
[2] [United Airlines — Payment Options](https://www.united.com/en/us/fly/travel/payment-options.html)
