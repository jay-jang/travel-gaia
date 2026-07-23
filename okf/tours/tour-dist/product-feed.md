---
type: Business Term
title: Product Feed
description: 'A Product Feed is a machine-readable, structured export of an operator''s entire product catalog — including product descriptions, images, pricing, availability, and booking rules — delivered to distribution partners via file transfer or API so they can import, display, and sell the operator''s inventory on their platforms.'
tags:
  - tour-dist
  - active
  - OCTO
timestamp: '2026-07-23T00:00:00Z'
id: product-feed
vertical: tours
category: tour-dist
conceptType: business-term
status: active
term_ko: 상품 피드(Product Feed)
definition_ko: '상품 피드는 운영사의 전체 상품 카탈로그(상품 설명, 이미지, 가격, 가용성, 예약 규칙 포함)를 기계 판독 가능한 구조화된 형식으로 내보내어, 파일 전송 또는 API를 통해 유통 파트너에게 전달함으로써 그들이 자신의 플랫폼에서 운영사 인벤토리를 가져와 표시하고 판매할 수 있게 하는 데이터 출력물이다.'
longDef: 'Product feeds are the backbone of large-scale tours-and-activities distribution: a major OTA such as Viator or GetYourGuide receives feeds from thousands of operators, normalises the content, and lists products alongside independently managed content. A feed can be static (a scheduled file export in JSON, XML, or CSV format) or dynamic (a real-time API pull that reflects live availability and pricing). Modern connectivity standards such as OCTO define how a product catalog should be structured so that any compliant OTA or aggregator can ingest it without bespoke mappings. Google Things to Do, the Google surfaces for in-destination activities, ingests product feeds from certified connectivity providers to populate search results and Google Maps. Key attributes in a product feed include: product ID, title, description, media (images/video), pricing tiers by participant type, availability schedule, meeting point or pickup options, cancellation policy, and booking confirmation type (instant or on-request). Quality of the product feed — completeness, accuracy, and freshness — directly drives conversion rates on distribution platforms.'
longDef_ko: '상품 피드는 대규모 투어·액티비티 유통의 근간이다. Viator나 GetYourGuide 같은 주요 OTA는 수천 개 운영사로부터 피드를 받아 콘텐츠를 표준화하고 독립적으로 관리하는 콘텐츠와 함께 상품을 등록한다. 피드는 정적(JSON, XML, CSV 형식의 예약 파일 내보내기)일 수도, 실시간 가용성과 가격을 반영하는 동적(실시간 API 풀)일 수도 있다. OCTO와 같은 현대적 커넥티비티 표준은 상품 카탈로그의 구조를 정의하여 규격 준수 OTA나 집계업체가 맞춤형 매핑 없이 이를 수집할 수 있게 한다. Google Things to Do는 인증된 커넥티비티 제공업체로부터 상품 피드를 받아 검색 결과와 구글 지도를 채운다. 상품 피드의 주요 속성으로는 상품 ID, 제목, 설명, 미디어(이미지/동영상), 참가자 유형별 가격 등급, 가용성 스케줄, 집합 장소 또는 픽업 옵션, 취소 정책, 예약 확정 유형(즉시 또는 요청 시)이 있다. 상품 피드의 품질(완성도·정확성·최신성)은 유통 플랫폼의 전환율에 직접 영향을 미친다.'
aliases:
  - Content Feed
  - Catalog Feed
  - Inventory Feed
relationships:
  - type: related
    targetTerm: OCTO
  - type: related
    targetTerm: Connectivity Hub
  - type: related
    targetTerm: Reseller API
  - type: related
    targetTerm: Instant Confirmation
  - type: related
    targetTerm: On-Request Booking
distinctions:
  - targetTerm: OCTO
    explanation: 'OCTO is the connectivity standard that defines the API schema for product, availability, and booking data; a Product Feed is the actual data payload exported or served according to that (or any comparable) schema. OCTO specifies the format; the Product Feed is the content transported in that format.'
    explanation_ko: 'OCTO는 상품·가용성·예약 데이터의 API 스키마를 정의하는 커넥티비티 표준이고, 상품 피드는 그 스키마(또는 유사 스키마)에 따라 내보내거나 제공하는 실제 데이터 페이로드다. OCTO가 형식을 규정하고, 상품 피드는 그 형식으로 전달되는 콘텐츠다.'
  - targetTerm: Reseller API
    explanation: 'A Reseller API is a booking-enabled API that allows partners to search availability and create bookings in real time; a Product Feed is typically a catalog-level data export used to populate content (descriptions, images, pricing) on a partner platform before or independently of the live booking flow.'
    explanation_ko: 'Reseller API는 파트너가 실시간으로 가용성을 검색하고 예약을 생성할 수 있는 예약 기능 API이고, 상품 피드는 라이브 예약 흐름 이전 또는 독립적으로 파트너 플랫폼의 콘텐츠(설명, 이미지, 가격)를 채우는 데 사용되는 카탈로그 수준의 데이터 내보내기다.'
sources:
  - name: 'OCTO API Specification — Product Object'
    org: Open Connectivity for Tours and Activities (OCTO)
    version: '1.3'
    section: Product
    url: 'https://docs.octo.travel/'
    tier: association
  - name: 'Google Things to Do — Feed Specification'
    org: Google
    version: ''
    section: ''
    url: 'https://developers.google.com/travel/activities'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="16" height="28" rx="2"/><rect x="26" y="10" width="16" height="28" rx="2"/><path d="M22 18l4-4M22 24l4 0M22 30l4 4"/><line x1="11" y1="17" x2="17" y2="17"/><line x1="11" y1="22" x2="17" y2="22"/><line x1="11" y1="27" x2="17" y2="27"/><line x1="31" y1="17" x2="37" y2="17"/><line x1="31" y1="22" x2="37" y2="22"/><line x1="31" y1="27" x2="37" y2="27"/></svg>
---

> A Product Feed is a machine-readable, structured export of an operator's entire product catalog — including product descriptions, images, pricing, availability, and booking rules — delivered to distribution partners via file transfer or API so they can import, display, and sell the operator's inventory on their platforms.

Product feeds are the backbone of large-scale tours-and-activities distribution: a major OTA such as Viator or GetYourGuide receives feeds from thousands of operators, normalises the content, and lists products alongside independently managed content. A feed can be static (a scheduled file export in JSON, XML, or CSV format) or dynamic (a real-time API pull that reflects live availability and pricing). Modern connectivity standards such as OCTO define how a product catalog should be structured so that any compliant OTA or aggregator can ingest it without bespoke mappings. Google Things to Do, the Google surfaces for in-destination activities, ingests product feeds from certified connectivity providers to populate search results and Google Maps. Key attributes in a product feed include: product ID, title, description, media (images/video), pricing tiers by participant type, availability schedule, meeting point or pickup options, cancellation policy, and booking confirmation type (instant or on-request). Quality of the product feed — completeness, accuracy, and freshness — directly drives conversion rates on distribution platforms.

**한국어 / Korean** — **상품 피드(Product Feed)** — 상품 피드는 운영사의 전체 상품 카탈로그(상품 설명, 이미지, 가격, 가용성, 예약 규칙 포함)를 기계 판독 가능한 구조화된 형식으로 내보내어, 파일 전송 또는 API를 통해 유통 파트너에게 전달함으로써 그들이 자신의 플랫폼에서 운영사 인벤토리를 가져와 표시하고 판매할 수 있게 하는 데이터 출력물이다.

상품 피드는 대규모 투어·액티비티 유통의 근간이다. 주요 OTA는 수천 개 운영사로부터 피드를 받아 콘텐츠를 표준화하고 상품을 등록한다. OCTO와 같은 현대적 커넥티비티 표준은 상품 카탈로그의 구조를 정의한다. 상품 피드의 품질(완성도·정확성·최신성)은 유통 플랫폼의 전환율에 직접 영향을 미친다.

**Aliases:** `Content Feed`, `Catalog Feed`, `Inventory Feed`

# Related
- [OCTO](/tours/tour-dist/octo-spec.md) — related
- [Connectivity Hub](/tours/tour-dist/connectivity-hub.md) — related
- [Reseller API](/tours/tour-dist/reseller-api.md) — related
- [Instant Confirmation](/tours/tour-dist/instant-confirmation.md) — related
- [On-Request Booking](/tours/tour-dist/on-request-booking.md) — related

# Distinctions
- **Product Feed** vs [OCTO](/tours/tour-dist/octo-spec.md) — OCTO is the connectivity standard that defines the API schema for product, availability, and booking data; a Product Feed is the actual data payload exported or served according to that (or any comparable) schema. OCTO specifies the format; the Product Feed is the content transported in that format.
- **Product Feed** vs [Reseller API](/tours/tour-dist/reseller-api.md) — A Reseller API is a booking-enabled API that allows partners to search availability and create bookings in real time; a Product Feed is typically a catalog-level data export used to populate content (descriptions, images, pricing) on a partner platform before or independently of the live booking flow.

# Citations
[1] [Open Connectivity for Tours and Activities (OCTO) — OCTO API Specification v1.3 — Product Object](https://docs.octo.travel/)
[2] [Google — Google Things to Do — Feed Specification](https://developers.google.com/travel/activities)
