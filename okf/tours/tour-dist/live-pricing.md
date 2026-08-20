---
type: Business Term
title: Live Pricing
description: 'A distribution mode in which tour and activity prices are fetched in real time from the supplier''s availability endpoint at the moment a customer searches or views a product, as opposed to serving pre-loaded static rates from a product feed. In the OCTO standard, live pricing is the baseline pricing capability: the `/availability` endpoint response embeds a `pricingFrom` object per time slot (when the `octo/pricing` capability header is declared), ensuring prices presented to the end customer reflect the supplier''s current rate and any demand-based or promotional adjustments at that instant.'
tags:
  - tour-dist
  - active
  - OCTO
timestamp: '2026-08-20T00:00:00Z'
id: live-pricing
vertical: tours
category: tour-dist
conceptType: business-term
status: active
standardBody: OCTO
term_ko: 실시간 가격 조회(Live Pricing)
definition_ko: '고객이 상품을 검색·조회하는 순간 공급자의 가용성 엔드포인트에서 투어·액티비티 가격을 실시간으로 가져오는 유통 모드. 사전 로드된 정적 상품 피드 요금에 의존하지 않는다. OCTO 표준에서 실시간 가격 조회는 기본 가격 책정 기능이다. `octo/pricing` capability 헤더 선언 시 `/availability` 엔드포인트 응답에는 타임슬롯당 `pricingFrom` 객체가 포함되어, 최종 고객에게 표시되는 가격이 해당 순간의 공급자 현재 요율과 수요 기반·프로모션 조정을 반영한다.'
longDef: 'Live pricing contrasts with static-rate distribution, where a product feed pre-loads fixed prices into the distributor''s system; those rates can become stale between feed refresh cycles. In a live-pricing flow, the distributor sends a GET /availability request to the supplier''s OCTO-compliant endpoint, receives an availability block containing a pricingFrom object (a PricingDetailed structure) per time slot, and displays those prices directly to the consumer. The OCTO pricing capability — enabled by adding `octo/pricing` to the `Octo-Capabilities` request header — adds unit-level and booking-level price breakdowns. It supports two pricing models: pricingPer=UNIT (a separate price per participant type, e.g. Adult, Child, Senior — the most common model) and pricingPer=BOOKING (a single price for the entire booking regardless of participant count, typical for private charters). Because prices travel with each availability response rather than being cached separately, live pricing eliminates a class of price-accuracy errors and enables demand-based, capacity-driven, and promotional pricing without requiring real-time feed synchronization. The trade-off is increased API traffic: every user search triggers a live call rather than a cache lookup.'
longDef_ko: '실시간 가격 조회는 정적 요율 유통과 대비된다. 정적 요율은 상품 피드가 유통사 시스템에 고정 가격을 미리 로드하여 갱신 주기 사이에 가격이 오래될 수 있다. 실시간 가격 조회 흐름에서 유통사는 공급자의 OCTO 호환 엔드포인트에 GET /availability 요청을 보내고, 타임슬롯당 pricingFrom 객체(PricingDetailed 구조)가 포함된 가용성 블록을 수신해 해당 가격을 소비자에게 직접 표시한다. OCTO pricing capability(요청 헤더 `Octo-Capabilities`에 `octo/pricing` 추가로 활성화)는 유닛별·예약별 가격 세부 내역을 추가한다. 두 가지 가격 모델을 지원한다. pricingPer=UNIT(참가자 유형별 가격, 예: 성인·아동·시니어 — 가장 일반적인 모델)과 pricingPer=BOOKING(프라이빗 전세 등 참가자 수에 관계없이 단일 예약 가격). 가격이 별도 캐시가 아닌 각 가용성 응답과 함께 전달되므로, 실시간 가격 조회는 가격 정확도 오류 유형 하나를 없애고 별도 피드 동기화 없이 수요 기반·정원 기반·프로모션 가격 전략을 가능하게 한다. 단점은 API 트래픽 증가로, 사용자 검색마다 캐시 조회 대신 라이브 호출이 발생한다.'
aliases:
  - Real-Time Pricing
  - Dynamic Rate Fetch
  - OCTO Pricing Capability
relationships:
  - type: related
    targetTerm: OCTO
  - type: contrasts
    targetTerm: Product Feed
  - type: related
    targetTerm: Instant Confirmation
  - type: contrasts
    targetTerm: On-Request Booking
  - type: related
    targetTerm: Pricing Category
distinctions:
  - targetTerm: Product Feed
    explanation: 'A product feed is a periodic batch export of product content and static rates loaded into a distributor''s system; live pricing is a real-time request-response mechanism that returns current prices embedded in each availability response, eliminating the staleness risk inherent in a feed-based approach.'
    explanation_ko: '상품 피드(Product Feed)는 주기적으로 유통사 시스템에 로드되는 상품 콘텐츠와 정적 요율의 일괄 내보내기이고, 실시간 가격 조회는 각 가용성 응답에 현재 가격을 포함시키는 실시간 요청-응답 방식으로 피드 기반 방식에 내재된 정보 지연 위험을 없앤다.'
  - targetTerm: On-Request Booking
    explanation: 'On-request booking means a booking awaits supplier manual confirmation before it is confirmed to the customer; live pricing concerns only when prices are fetched (at search time rather than batch-loaded). A tour can use live pricing and still be on-request if the supplier must manually accept each individual booking.'
    explanation_ko: 'On-Request Booking은 예약이 고객에게 확정되기 전 공급자의 수동 확인을 기다리는 것이고, 실시간 가격 조회는 가격 조회 시점(일괄 로드가 아닌 검색 시점)에 관한 것이다. 투어는 실시간 가격 조회를 사용하면서도 공급자가 각 예약을 수동 승인해야 한다면 On-Request일 수 있다.'
sources:
  - name: 'OCTO API Specification — Pricing Capability'
    org: OCTO (Open Connectivity Standard)
    version: ''
    section: 'octo/pricing capability; pricingPer field; PricingDetailed object'
    url: 'https://docs.octo.travel/capabilities-optional/pricing'
    tier: association
  - name: 'Pricing | Ventrata OCTO API Implementation'
    org: Ventrata
    version: ''
    section: 'OCTO Pricing capability; pricingPer=UNIT vs BOOKING'
    url: 'https://docs.ventrata.com/capabilities/pricing'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8v8M24 32v8M8 24h8M32 24h8"/><circle cx="24" cy="24" r="10"/><path d="M24 19v5l4 2"/><path d="M34 14l3-3M14 14l-3-3"/></svg>
---

> A distribution mode in which tour and activity prices are fetched in real time from the supplier's availability endpoint at the moment a customer searches, as opposed to serving pre-loaded static rates from a product feed. The OCTO `octo/pricing` capability embeds a `pricingFrom` object in each availability response so the displayed price always reflects the supplier's current rate.

Live pricing contrasts with static-rate distribution, where a product feed pre-loads fixed prices into the distributor's system; those rates can become stale between feed refresh cycles. In a live-pricing flow, the distributor sends a GET /availability request to the supplier's OCTO-compliant endpoint, receives an availability block containing a `pricingFrom` object per time slot, and displays those prices directly to the consumer. The OCTO pricing capability — enabled by adding `octo/pricing` to the `Octo-Capabilities` request header — supports two pricing models: `pricingPer=UNIT` (a separate price per participant type, e.g. Adult, Child, Senior) and `pricingPer=BOOKING` (a single price for the entire booking, typical for private charters). Because prices travel with each availability response, live pricing eliminates price-accuracy errors and enables demand-based and promotional pricing without requiring real-time feed synchronization.

**한국어 / Korean** — **실시간 가격 조회(Live Pricing)** — 고객이 상품을 검색하는 순간 공급자의 가용성 엔드포인트에서 투어·액티비티 가격을 실시간으로 가져오는 유통 모드. 사전 로드된 정적 상품 피드 요금에 의존하지 않는다. OCTO `octo/pricing` capability는 각 가용성 응답에 `pricingFrom` 객체를 포함시켜 표시 가격이 항상 공급자의 현재 요율을 반영하게 한다.

실시간 가격 조회 흐름에서 유통사는 공급자의 OCTO 호환 엔드포인트에 GET /availability 요청을 보내고, 타임슬롯당 pricingFrom 객체가 포함된 가용성 블록을 수신한다. OCTO pricing capability는 `pricingPer=UNIT`(참가자 유형별 가격)과 `pricingPer=BOOKING`(단일 예약 가격) 두 가지 모델을 지원한다.

**Aliases:** `Real-Time Pricing`, `Dynamic Rate Fetch`, `OCTO Pricing Capability`

# Related
- [OCTO](/tours/tour-dist/octo-spec.md) — related
- [Product Feed](/tours/tour-dist/product-feed.md) — contrasts
- [Instant Confirmation](/tours/tour-dist/instant-confirmation.md) — related
- [On-Request Booking](/tours/tour-dist/on-request-booking.md) — contrasts
- [Pricing Category](/tours/tour-product/pricing-category.md) — related

# Distinctions
- **Live Pricing** vs [Product Feed](/tours/tour-dist/product-feed.md) — A product feed is a periodic batch export of product content and static rates loaded into a distributor's system; live pricing is a real-time request-response mechanism that returns current prices embedded in each availability response, eliminating the staleness risk of a feed.
- **Live Pricing** vs [On-Request Booking](/tours/tour-dist/on-request-booking.md) — On-request booking means a booking awaits supplier manual confirmation; live pricing concerns only when prices are fetched. A tour can use live pricing and still be on-request if the supplier must manually accept each booking.

# Citations
[1] [OCTO (Open Connectivity Standard) — OCTO API Specification — Pricing Capability](https://docs.octo.travel/capabilities-optional/pricing)
[2] [Ventrata — Pricing | Ventrata OCTO API Implementation](https://docs.ventrata.com/capabilities/pricing)
