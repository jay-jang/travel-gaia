---
type: Business Term
title: Excess Baggage
description: 'Excess baggage is any checked or cabin baggage that exceeds the quantity, weight, or linear dimensions permitted under the applicable free baggage allowance, for which the airline charges an additional excess-baggage fee. Fees are filed by carriers through ATPCO Optional Services (sub-codes) or NDC and are typically collected at check-in or online during the booking/pre-departure window.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-09-30T00:00:00Z'
id: excess-baggage
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 초과 수하물(Excess Baggage)
definition_ko: '초과 수하물은 적용 무료 수하물 허용량에서 정한 개수·중량·선형 치수를 초과하는 위탁 또는 기내 수하물로, 항공사가 별도의 초과 수하물 요금을 부과한다. 요금은 ATPCO Optional Services(서브코드) 또는 NDC를 통해 항공사가 신고하며, 체크인 시 또는 예약/출발 전 온라인으로 징수된다.'
longDef: 'Excess baggage arises when a passenger''s bags exceed the free allowance defined in the applicable fare rule—either by piece (one or more extra bags), by weight (bags heavier than the per-piece weight limit), or by size (bags whose total linear dimensions exceed the carrier''s limit). Excess-baggage charges are published through ATPCO''s Baggage Rules Service (Category 16 and Optional Services sub-codes such as 0GO, 0G1 for first and second checked bags; higher sub-codes for additional pieces), and those charges are surfaced by GDS/NDC shopping systems. The IATA Baggage Interline Provisions (Resolution 302) govern which carrier''s rules apply on multi-carrier itineraries by designating a Most Significant Carrier (MSC). Many airlines now offer pre-payment of excess-baggage fees online at a discount relative to airport rates; a pre-paid fee is documented by an EMD (Electronic Miscellaneous Document). For piece-concept routes (principally transatlantic and transpacific under IATA Resolution 302), a first additional bag, second additional bag, and overweight fees are common separate charges. For weight-concept routes, a sliding per-kilogram charge applies to the excess weight.'
longDef_ko: '초과 수하물은 승객의 가방이 적용 운임 규칙에 정의된 무료 허용량을 초과할 때 발생하며, 개수 초과(추가 가방 한 개 이상), 중량 초과(개당 중량 한도 초과), 또는 크기 초과(선형 치수 합계가 항공사 한도 초과)의 형태로 나타난다. 초과 수하물 요금은 ATPCO Baggage Rules Service(카테고리 16 및 위탁 수하물 1·2번째 등의 Optional Services 서브코드)를 통해 공시되며, GDS/NDC 쇼핑 시스템이 해당 요금을 서피스한다. IATA 수하물 인터라인 조항(Resolution 302)은 Most Significant Carrier(MSC) 지정을 통해 복수 항공사 여정에서 어느 항공사 규칙이 적용되는지를 규율한다. 많은 항공사가 공항 요금보다 할인된 가격으로 온라인 사전 결제를 제공하며, 사전 결제 요금은 EMD(전자 기타 서류)로 처리된다. 개수 기준 노선(주로 IATA Resolution 302에 따른 대서양·태평양 횡단 노선)에서는 첫 번째·두 번째 추가 가방 요금과 초과 중량 요금이 일반적인 별도 요금이다. 중량 기준 노선에서는 초과 중량에 대해 kg당 요금이 적용된다.'
standardBody: IATA
aliases:
  - Excess Baggage Fee
  - Excess Baggage Charge
  - Overweight Baggage Fee
  - Extra Baggage Fee
relationships:
  - type: contrasts
    targetTerm: Baggage Allowance
  - type: related
    targetTerm: Ancillary Service
  - type: related
    targetTerm: EMD
distinctions:
  - targetTerm: Baggage Allowance
    explanation: 'The baggage allowance is the quantity of baggage included in the fare at no extra charge; excess baggage is any amount beyond that allowance, which incurs an additional fee. The allowance defines the free entitlement; excess is the billable overage.'
    explanation_ko: '수하물 허용량은 운임에 포함된 무료 수하물 양이고, 초과 수하물은 그 허용량을 초과하는 양으로 추가 요금이 발생한다. 허용량은 무료 권리를 정의하고, 초과 수하물은 청구 가능한 초과분이다.'
  - targetTerm: Ancillary Service
    explanation: 'Excess-baggage fees are a sub-category of ancillary services (revenue beyond the base fare), but they are triggered by a passenger exceeding their contracted allowance rather than being an optional add-on purchased proactively. In practice the same ATPCO/NDC ancillary infrastructure handles both.'
    explanation_ko: '초과 수하물 요금은 부가 서비스(기본 운임 외 수익)의 하위 범주이지만, 능동적으로 구매하는 선택적 부가 서비스가 아니라 승객이 계약된 허용량을 초과함으로써 발생한다. 실제로는 동일한 ATPCO/NDC 부가 서비스 인프라가 두 경우를 모두 처리한다.'
  - targetTerm: EMD
    explanation: 'An EMD (Electronic Miscellaneous Document) is the accountable document issued when a pre-paid excess-baggage fee or additional bag fee is collected separately from the ticket; the fee itself is the excess-baggage charge, while the EMD is the receipt/accounting document for it.'
    explanation_ko: 'EMD(전자 기타 서류)는 사전 결제 초과 수하물 요금 또는 추가 가방 요금이 항공권과 별도로 징수될 때 발급되는 회계 서류이다. 요금 자체는 초과 수하물 요금이고, EMD는 그 요금의 영수증·회계 문서다.'
sources:
  - name: 'IATA Baggage Interline Provisions — Resolution 302'
    org: IATA
    version: '2024 edition'
    section: 'Resolution 302'
    url: 'https://www.iata.org/en/programs/ops-infra/baggage/baggageresolution302/'
    tier: association
  - name: 'ATPCO Baggage Rules Service — Optional Services'
    org: ATPCO
    version: ''
    section: 'Category 16 / Optional Services'
    url: 'https://www.atpco.net/solutions/optional-services'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="14" width="18" height="22" rx="2"/><path d="M16 14v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/><line x1="21" y1="22" x2="21" y2="30"/><line x1="17" y1="26" x2="25" y2="26"/><circle cx="34" cy="34" r="7" fill="none"/><line x1="34" y1="31" x2="34" y2="37"/><line x1="31" y1="34" x2="37" y2="34"/></svg>
---

> Excess baggage is any checked or cabin baggage that exceeds the quantity, weight, or linear dimensions permitted under the applicable free baggage allowance, for which the airline charges an additional excess-baggage fee. Fees are filed by carriers through ATPCO Optional Services (sub-codes) or NDC and are typically collected at check-in or online during the booking/pre-departure window.

Excess baggage arises when a passenger's bags exceed the free allowance defined in the applicable fare rule—either by piece (one or more extra bags), by weight (bags heavier than the per-piece weight limit), or by size (bags whose total linear dimensions exceed the carrier's limit). Excess-baggage charges are published through ATPCO's Baggage Rules Service (Category 16 and Optional Services sub-codes such as 0GO, 0G1 for first and second checked bags; higher sub-codes for additional pieces), and those charges are surfaced by GDS/NDC shopping systems. The IATA Baggage Interline Provisions (Resolution 302) govern which carrier's rules apply on multi-carrier itineraries by designating a Most Significant Carrier (MSC). Many airlines now offer pre-payment of excess-baggage fees online at a discount relative to airport rates; a pre-paid fee is documented by an EMD (Electronic Miscellaneous Document). For piece-concept routes (principally transatlantic and transpacific under IATA Resolution 302), a first additional bag, second additional bag, and overweight fees are common separate charges. For weight-concept routes, a sliding per-kilogram charge applies to the excess weight.

**한국어 / Korean** — **초과 수하물(Excess Baggage)** — 초과 수하물은 적용 무료 수하물 허용량에서 정한 개수·중량·선형 치수를 초과하는 위탁 또는 기내 수하물로, 항공사가 별도의 초과 수하물 요금을 부과한다. 요금은 ATPCO Optional Services(서브코드) 또는 NDC를 통해 항공사가 신고하며, 체크인 시 또는 예약/출발 전 온라인으로 징수된다.

초과 수하물은 승객의 가방이 적용 운임 규칙에 정의된 무료 허용량을 초과할 때 발생하며, 개수 초과(추가 가방 한 개 이상), 중량 초과(개당 중량 한도 초과), 또는 크기 초과(선형 치수 합계가 항공사 한도 초과)의 형태로 나타난다. 초과 수하물 요금은 ATPCO Baggage Rules Service(카테고리 16 및 위탁 수하물 1·2번째 등의 Optional Services 서브코드)를 통해 공시되며, GDS/NDC 쇼핑 시스템이 해당 요금을 서피스한다. IATA 수하물 인터라인 조항(Resolution 302)은 Most Significant Carrier(MSC) 지정을 통해 복수 항공사 여정에서 어느 항공사 규칙이 적용되는지를 규율한다. 많은 항공사가 공항 요금보다 할인된 가격으로 온라인 사전 결제를 제공하며, 사전 결제 요금은 EMD(전자 기타 서류)로 처리된다.

**Aliases:** `Excess Baggage Fee`, `Excess Baggage Charge`, `Overweight Baggage Fee`, `Extra Baggage Fee`

# Related
- [Baggage Allowance](/air/air-shop/baggage-allowance.md) — contrasts
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related
- [EMD](/air/air-ticket/emd.md) — related

# Distinctions
- **Excess Baggage** vs [Baggage Allowance](/air/air-shop/baggage-allowance.md) — The baggage allowance is the quantity of baggage included in the fare at no extra charge; excess baggage is any amount beyond that allowance, which incurs an additional fee. The allowance defines the free entitlement; excess is the billable overage.
- **Excess Baggage** vs [Ancillary Service](/air/air-ticket/ancillary-service.md) — Excess-baggage fees are a sub-category of ancillary services (revenue beyond the base fare), but they are triggered by a passenger exceeding their contracted allowance rather than being an optional add-on purchased proactively. In practice the same ATPCO/NDC ancillary infrastructure handles both.
- **Excess Baggage** vs [EMD](/air/air-ticket/emd.md) — An EMD (Electronic Miscellaneous Document) is the accountable document issued when a pre-paid excess-baggage fee or additional bag fee is collected separately from the ticket; the fee itself is the excess-baggage charge, while the EMD is the receipt/accounting document for it.

# Citations
[1] [IATA — IATA Baggage Interline Provisions — Resolution 302 — 2024 edition](https://www.iata.org/en/programs/ops-infra/baggage/baggageresolution302/)
[2] [ATPCO — ATPCO Baggage Rules Service — Optional Services](https://www.atpco.net/solutions/optional-services)
