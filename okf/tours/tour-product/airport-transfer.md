---
type: Business Term
title: Airport Transfer
description: 'A pre-booked, point-to-point ground transportation service that moves a traveler between an airport and an accommodation or other destination, sold as a discrete product by tour operators, OTAs, DMCs, and hotels. Airport transfers are available in shared-shuttle, private, and luxury-vehicle formats and represent one of the highest-volume ground-transport ancillary products in travel distribution.'
tags:
  - tour-product
  - active
  - OpenTravel Alliance
timestamp: '2026-08-06T00:00:00Z'
id: airport-transfer
vertical: tours
category: tour-product
conceptType: business-term
status: active
term_ko: 공항 이동 서비스(Airport Transfer)
definition_ko: '여행자를 공항과 숙소 또는 다른 목적지 사이에서 이동시키는 사전 예약 방식의 포인트-투-포인트 지상 교통 서비스로, 여행사·OTA·DMC·호텔이 독립 상품으로 판매한다. 공항 이동 서비스는 공유 셔틀, 프라이빗, 럭셔리 차량 형태로 제공되며, 여행 유통에서 가장 거래량이 많은 지상 교통 부가 상품 중 하나다.'
longDef: 'Airport transfers are typically sold at the time of flight or hotel booking as an ancillary or as a standalone product on OTA and experiences platforms. The product record specifies pick-up point (terminal, belt number), destination, vehicle type (shared shuttle, minivan, sedan, luxury car), date, time, and passenger count. Pricing is usually fixed (not metered) and includes driver wait time within a grace period. Operationally, a supplier (ground transport operator or DMC) fulfills the booking using either employed drivers or a sub-supplier network. In distribution, airport transfers are modeled in the OpenTravel OTA_GroundTransfer message set and in the OCTO booking API as a product type. Confirmation is typically instant and a voucher or QR code is delivered to the traveler as the fulfillment document. Cancellation windows vary by supplier: many allow free cancellation up to 24–48 hours before pickup.'
longDef_ko: '공항 이동 서비스는 일반적으로 항공권 또는 호텔 예약 시 부가 상품으로 판매되거나, OTA 및 체험 플랫폼에서 독립 상품으로 판매된다. 상품 레코드는 픽업 위치(터미널, 수화물 벨트 번호), 목적지, 차량 유형(공유 셔틀, 미니밴, 세단, 럭셔리카), 날짜, 시간, 승객 수를 명시한다. 가격은 일반적으로 고정(미터 기준 아님)이며, 일정 유예 시간 내의 기사 대기 시간이 포함된다. 운영상 공급자(지상 교통 운영사 또는 DMC)는 직접 고용 기사 또는 하위 공급자 네트워크를 통해 예약을 이행한다. 유통 측면에서 공항 이동 서비스는 OpenTravel OTA_GroundTransfer 메시지 셋과 OCTO 예약 API에서 상품 유형으로 모델링된다. 확정은 일반적으로 즉시 이루어지며, 바우처 또는 QR 코드가 이행 문서로 여행자에게 전달된다. 취소 정책은 공급자에 따라 다르며, 많은 경우 픽업 24~48시간 전까지 무료 취소를 허용한다.'
aliases:
  - Ground Transfer
  - Airport Shuttle
  - Private Transfer
providerTerms:
  - provider: Viator (Tripadvisor)
    term: Airport Transfer
    context: Listed as a dedicated product category under transportation on the Viator marketplace.
    context_ko: Viator 마켓플레이스의 교통 카테고리 내 전용 상품 범주로 등록된다.
    relationship: same
  - provider: Booking.com
    term: Airport Taxis & Transfers
    context: Booking.com offers airport transfers as an ancillary product segment within its Attractions & Experiences platform, bookable at the time of accommodation or flight purchase.
    context_ko: Booking.com은 숙박 또는 항공편 구매 시 예약 가능한 체험·액티비티 플랫폼 내 부가 상품 세그먼트로 공항 이동 서비스를 제공한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Transfer
  - type: related
    targetTerm: Destination Management Company
  - type: related
    targetTerm: OCTO
  - type: related
    targetTerm: Voucher
distinctions:
  - targetTerm: Transfer
    explanation: 'Transfer in aviation denotes a passenger or baggage connection between two flights (or from flight to another transport mode); Airport Transfer in tour/ground context denotes a pre-booked, commercially sold ground ride between airport and hotel.'
    explanation_ko: '항공에서 Transfer는 두 항공편 사이(또는 항공편에서 다른 교통수단으로)의 승객 또는 수하물 연결을 의미하고, 투어/지상 맥락에서 Airport Transfer는 공항과 호텔 사이의 사전 예약된 상업적 지상 이동을 의미한다.'
  - targetTerm: Destination Management Company
    explanation: 'A DMC is an in-destination ground-operations company that often supplies and operates airport transfer fleets; the airport transfer is a product the DMC provides, not the company itself.'
    explanation_ko: 'DMC는 흔히 공항 이동 차량을 공급·운영하는 현지 지상 운영사이고, 공항 이동 서비스는 DMC가 제공하는 상품이지 회사 자체가 아니다.'
sources:
  - name: 'OpenTravel 2.0 Ground Transportation (OTA_GroundTransfer)'
    org: OpenTravel Alliance
    version: ''
    section: 'Ground Transport message set'
    url: 'https://opentravel.org/download-specs/'
    tier: association
  - name: 'OCTO Booking API — Transportation Product Type'
    org: Open Connectivity for Tourism Operators (OCTO)
    version: ''
    section: ''
    url: 'https://octotravel.com/api'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="28" width="28" height="13" rx="3"/><path d="M10 28 L14 18 L30 18 L34 28"/><circle cx="13" cy="41" r="3"/><circle cx="29" cy="41" r="3"/><path d="M38 18 L42 12 M38 18 L32 14"/><line x1="38" y1="12" x2="42" y2="12"/></svg>
---

> A pre-booked, point-to-point ground transportation service that moves a traveler between an airport and an accommodation or other destination, sold as a discrete product by tour operators, OTAs, DMCs, and hotels. Airport transfers are available in shared-shuttle, private, and luxury-vehicle formats and represent one of the highest-volume ground-transport ancillary products in travel distribution.

Airport transfers are typically sold at the time of flight or hotel booking as an ancillary or as a standalone product on OTA and experiences platforms. The product record specifies pick-up point (terminal, belt number), destination, vehicle type (shared shuttle, minivan, sedan, luxury car), date, time, and passenger count. Pricing is usually fixed (not metered) and includes driver wait time within a grace period. Operationally, a supplier (ground transport operator or DMC) fulfills the booking using either employed drivers or a sub-supplier network. In distribution, airport transfers are modeled in the OpenTravel OTA_GroundTransfer message set and in the OCTO booking API as a product type. Confirmation is typically instant and a voucher or QR code is delivered to the traveler as the fulfillment document. Cancellation windows vary by supplier: many allow free cancellation up to 24–48 hours before pickup.

**한국어 / Korean** — **공항 이동 서비스(Airport Transfer)** — 여행자를 공항과 숙소 또는 다른 목적지 사이에서 이동시키는 사전 예약 방식의 포인트-투-포인트 지상 교통 서비스로, 여행사·OTA·DMC·호텔이 독립 상품으로 판매한다. 공항 이동 서비스는 공유 셔틀, 프라이빗, 럭셔리 차량 형태로 제공되며, 여행 유통에서 가장 거래량이 많은 지상 교통 부가 상품 중 하나다.

공항 이동 서비스는 일반적으로 항공권 또는 호텔 예약 시 부가 상품으로 판매되거나, OTA 및 체험 플랫폼에서 독립 상품으로 판매된다. 상품 레코드는 픽업 위치(터미널, 수화물 벨트 번호), 목적지, 차량 유형(공유 셔틀, 미니밴, 세단, 럭셔리카), 날짜, 시간, 승객 수를 명시한다. 가격은 일반적으로 고정(미터 기준 아님)이며, 일정 유예 시간 내의 기사 대기 시간이 포함된다. 운영상 공급자(지상 교통 운영사 또는 DMC)는 직접 고용 기사 또는 하위 공급자 네트워크를 통해 예약을 이행한다. 유통 측면에서 공항 이동 서비스는 OpenTravel OTA_GroundTransfer 메시지 셋과 OCTO 예약 API에서 상품 유형으로 모델링된다. 확정은 일반적으로 즉시 이루어지며, 바우처 또는 QR 코드가 이행 문서로 여행자에게 전달된다. 취소 정책은 공급자에 따라 다르며, 많은 경우 픽업 24~48시간 전까지 무료 취소를 허용한다.

**Aliases:** `Ground Transfer`, `Airport Shuttle`, `Private Transfer`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Viator (Tripadvisor) | `Airport Transfer` | same | Listed as a dedicated product category under transportation on the Viator marketplace. |
| Booking.com | `Airport Taxis & Transfers` | same | Booking.com offers airport transfers as an ancillary product segment within its Attractions & Experiences platform, bookable at the time of accommodation or flight purchase. |

# Related
- [Transfer](/tours/tour-ops/transfer.md) — related
- [Destination Management Company](/tours/tour-ops/destination-management-company.md) — related
- [OCTO](/tours/tour-dist/octo.md) — related
- [Voucher](/tours/tour-product/voucher.md) — related

# Distinctions
- **Airport Transfer** vs [Transfer](/tours/tour-ops/transfer.md) — Transfer in aviation denotes a passenger or baggage connection between two flights (or from flight to another transport mode); Airport Transfer in tour/ground context denotes a pre-booked, commercially sold ground ride between airport and hotel.
- **Airport Transfer** vs [Destination Management Company](/tours/tour-ops/destination-management-company.md) — A DMC is an in-destination ground-operations company that often supplies and operates airport transfer fleets; the airport transfer is a product the DMC provides, not the company itself.

# Citations
[1] [OpenTravel Alliance — OpenTravel 2.0 Ground Transportation (OTA_GroundTransfer)](https://opentravel.org/download-specs/)
[2] [Open Connectivity for Tourism Operators (OCTO) — OCTO Booking API — Transportation Product Type](https://octotravel.com/api)
