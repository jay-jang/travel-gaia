---
type: Business Term
title: Split Payment
description: 'A checkout mechanism that allows a traveller to pay for a single booking using two or more payment instruments simultaneously — for example, combining loyalty points with a credit card, or using a travel voucher together with a debit card. Split payment is increasingly required by airlines, OTAs, and hotel booking engines to capture the full wallet share of loyalty-programme members and voucher holders.'
tags:
  - pay
  - active
  - IATA
timestamp: '2026-08-23T00:00:00Z'
id: split-payment
vertical: common
category: pay
conceptType: business-term
status: active
term_ko: 분할 결제(Split Payment)
definition_ko: '단일 예약에 대해 두 가지 이상의 결제 수단을 동시에 사용할 수 있는 결제 방식. 로열티 포인트와 신용카드를 결합하거나, 여행 바우처와 직불카드를 함께 사용하는 것 등이 해당된다. 항공사, OTA, 호텔 예약 엔진에서 로열티 프로그램 회원 및 바우처 보유자의 지갑 점유율을 완전히 확보하기 위해 점점 더 요구되고 있다.'
longDef: 'Split payment (also called mixed payment or multi-tender) addresses the practical limitation that a single booking amount may exceed a loyalty balance or voucher value, requiring the remainder to be charged to a second instrument. Common split combinations in travel include: (1) miles/points redemption plus a cash co-pay (the "points + money" model used by most frequent flyer programmes); (2) airline gift voucher or flight credit applied against a new booking with the residual charged to a card; (3) corporate travel voucher (e.g., Lufthansa BusinessPlus credits) combined with a personal card; and (4) UATP lodged card covering the corporate portion with employee card covering extras. Technically, split payment requires the booking system and payment gateway to process two separate authorisation flows against a single booking, maintain atomic consistency (if one leg fails, the other is reversed), and present correctly in the BSP/ARC settlement records and invoices. PCI DSS applies to any card leg of the split. Not all GDS booking flows support split payment natively; some carriers implement it post-ticketing via their own servicing tools. IATA NDC order management enables richer split-payment scenarios because the Order model separates the booking record from its payment instruments more cleanly than the legacy PNR/TST architecture.'
longDef_ko: '분할 결제(혼합 결제 또는 다중 결제 수단이라고도 한다)는 단일 예약 금액이 로열티 잔액이나 바우처 가치를 초과하여 나머지를 두 번째 수단으로 청구해야 하는 실질적인 한계를 해결한다. 여행에서 흔한 분할 결제 조합에는 (1) 마일리지·포인트 상환과 현금 공동 부담(대부분의 FFP가 사용하는 "포인트+현금" 모델), (2) 항공사 상품권이나 항공사 크레딧을 새 예약에 적용하고 잔액을 카드로 청구, (3) 기업 여행 바우처(예: Lufthansa BusinessPlus 크레딧)와 개인 카드 결합, (4) UATP 법인 카드로 기업 비용을 충당하고 추가 비용은 임직원 카드로 처리하는 방식이 포함된다. 기술적으로 분할 결제는 예약 시스템과 결제 게이트웨이가 단일 예약에 대해 두 개의 별도 승인 흐름을 처리하고, 원자적 일관성(한쪽이 실패하면 다른 쪽도 취소)을 유지하며, BSP/ARC 정산 기록과 인보이스에 올바르게 표시되도록 요구한다. PCI DSS는 분할 결제의 카드 구간에 적용된다. 일부 GDS 예약 흐름은 분할 결제를 네이티브로 지원하지 않으며, 일부 항공사는 자체 서비스 도구를 통해 발권 후 구현한다. IATA NDC 오더 관리는 Order 모델이 레거시 PNR/TST 구조보다 예약 기록과 결제 수단을 더 명확하게 분리하므로 더 풍부한 분할 결제 시나리오를 가능하게 한다.'
aliases:
  - Mixed Payment
  - Multi-Tender Payment
  - Points Plus Money
  - Hybrid Payment
relationships:
  - type: related
    targetTerm: Payment Gateway
  - type: related
    targetTerm: VCC
  - type: related
    targetTerm: Buy Now Pay Later
  - type: related
    targetTerm: UATP
  - type: related
    targetTerm: BSP
distinctions:
  - targetTerm: Buy Now Pay Later
    explanation: 'Buy Now Pay Later (BNPL) defers or instals the total booking amount across time using a single payment product; split payment combines two different instruments at the moment of checkout to cover one total amount.'
    explanation_ko: 'BNPL(선구매후지불)은 단일 결제 상품으로 총 예약 금액을 시간에 걸쳐 이연하거나 분할하는 반면, 분할 결제는 결제 시점에 두 가지 다른 수단을 결합해 하나의 총액을 충당한다.'
  - targetTerm: VCC
    explanation: 'A VCC (Virtual Credit Card) is a single-use or limited-use card number used primarily in B2B payments; split payment describes the checkout model where multiple instruments are used together, and a VCC might be one of those instruments in a corporate split-payment scenario.'
    explanation_ko: 'VCC(가상 신용카드)는 주로 B2B 결제에 사용되는 일회성 또는 제한적 사용 카드 번호이고, 분할 결제는 여러 수단을 함께 사용하는 결제 모델로, VCC는 기업 분할 결제 시나리오에서 그 수단 중 하나가 될 수 있다.'
sources:
  - name: IATA — Payment Services — Mixed Payment Guidance
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/payment-methods/'
    tier: association
  - name: IATA — NDC Standard — Order and Payment
    org: IATA
    version: NDC 21.3
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/ndc/ndc-standard/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="16" width="36" height="10" rx="2"/><line x1="6" y1="22" x2="42" y2="22"/><line x1="24" y1="26" x2="24" y2="32"/><line x1="24" y1="32" x2="14" y2="38"/><line x1="24" y1="32" x2="34" y2="38"/><rect x="8" y="37" width="12" height="5" rx="1"/><rect x="28" y="37" width="12" height="5" rx="1"/></svg>
---

> A checkout mechanism that allows a traveller to pay for a single booking using two or more payment instruments simultaneously — for example, combining loyalty points with a credit card, or using a travel voucher together with a debit card. Split payment is increasingly required by airlines, OTAs, and hotel booking engines to capture the full wallet share of loyalty-programme members and voucher holders.

Split payment (also called mixed payment or multi-tender) addresses the practical limitation that a single booking amount may exceed a loyalty balance or voucher value, requiring the remainder to be charged to a second instrument. Common split combinations in travel include: (1) miles/points redemption plus a cash co-pay (the "points + money" model used by most frequent flyer programmes); (2) airline gift voucher or flight credit applied against a new booking with the residual charged to a card; (3) corporate travel voucher combined with a personal card; and (4) UATP lodged card covering the corporate portion with employee card covering extras. Technically, split payment requires the booking system and payment gateway to process two separate authorisation flows against a single booking, maintain atomic consistency (if one leg fails, the other is reversed), and present correctly in BSP/ARC settlement records and invoices. IATA NDC order management enables richer split-payment scenarios because the Order model separates the booking record from its payment instruments more cleanly than the legacy PNR/TST architecture.

**한국어 / Korean** — **분할 결제(Split Payment)** — 단일 예약에 대해 두 가지 이상의 결제 수단을 동시에 사용할 수 있는 결제 방식. 로열티 포인트와 신용카드를 결합하거나, 여행 바우처와 직불카드를 함께 사용하는 것 등이 해당된다. 항공사, OTA, 호텔 예약 엔진에서 로열티 프로그램 회원 및 바우처 보유자의 지갑 점유율을 완전히 확보하기 위해 점점 더 요구되고 있다.

분할 결제는 단일 예약 금액이 로열티 잔액이나 바우처 가치를 초과하여 나머지를 두 번째 수단으로 청구해야 하는 실질적인 한계를 해결한다. 여행에서 흔한 분할 결제 조합에는 마일리지·포인트 상환과 현금 공동 부담, 항공사 상품권이나 크레딧 적용 후 잔액을 카드 청구, 기업 바우처와 개인 카드 결합 등이 포함된다.

**Aliases:** `Mixed Payment`, `Multi-Tender Payment`, `Points Plus Money`, `Hybrid Payment`

# Related
- [Payment Gateway](/common/pay/payment-gateway.md) — related
- [VCC](/common/pay/vcc.md) — related
- [Buy Now Pay Later](/common/pay/buy-now-pay-later.md) — related
- [UATP](/common/pay/uatp.md) — related
- [BSP](/common/pay/bsp.md) — related

# Distinctions
- **Split Payment** vs [Buy Now Pay Later](/common/pay/buy-now-pay-later.md) — Buy Now Pay Later (BNPL) defers or instals the total booking amount across time using a single payment product; split payment combines two different instruments at the moment of checkout to cover one total amount.
- **Split Payment** vs [VCC](/common/pay/vcc.md) — A VCC (Virtual Credit Card) is a single-use or limited-use card number used primarily in B2B payments; split payment describes the checkout model where multiple instruments are used together, and a VCC might be one of those instruments in a corporate split-payment scenario.

# Citations
[1] [IATA — IATA — Payment Services — Mixed Payment Guidance](https://www.iata.org/en/services/finance/payment-methods/)
[2] [IATA — IATA — NDC Standard — Order and Payment — NDC 21.3](https://www.iata.org/en/programs/airline-distribution/ndc/ndc-standard/)
