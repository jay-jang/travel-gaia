---
type: Process
title: Product Mapping
description: >-
  The process of aligning an activity operator's internal product catalog —
  its own IDs, titles, options, and pricing tiers — to the taxonomy, identifiers,
  and data fields required by a distribution platform or connectivity API, enabling
  automated booking and inventory synchronization.
tags:
  - tour-dist
  - active
  - Tours & Activities
timestamp: '2026-07-24T00:00:00Z'
id: product-mapping
vertical: tours
category: tour-dist
conceptType: process
status: active
term_ko: 상품 매핑(Product Mapping)
definition_ko: '액티비티 운영사의 내부 상품 카탈로그(고유 ID·명칭·옵션·가격 체계)를 유통 플랫폼이나 연결성 API가 요구하는 분류체계·식별자·데이터 필드에 맞춰 정렬하는 과정으로, 자동 예약 및 재고 동기화를 가능하게 한다.'
longDef: >-
  When an operator connects to a distribution marketplace or OTA through a
  connectivity platform (such as OCTO, Fareharbor, Rezdy, or a direct API), each
  product in the operator's reservation system must be mapped to a corresponding
  listing on the distribution side. Mapping covers at minimum: the product
  identifier, availability options (timeslots, languages, meeting points), pricing
  categories (adult/child/senior), and cancellation policies. Incomplete or
  mismatched mappings cause booking failures, phantom availability, or price
  discrepancies. OCTO (Open Connectivity for Tourism) reduces mapping effort by
  providing a standard schema for productId, optionId, and unitId across all
  connected platforms, but operator-side customization still requires initial
  mapping work. Product mapping is a one-time setup per platform connection,
  with ongoing maintenance when operators change their products.
longDef_ko: >-
  운영사가 OCTO·Fareharbor·Rezdy 등 연결성 플랫폼 또는 직접 API를 통해 유통 마켓플레이스나 OTA에 연결할 때, 운영사의 예약
  시스템에 있는 각 상품은 유통 측의 해당 리스팅에 매핑되어야 한다. 매핑은 최소한 상품 식별자, 가용성 옵션(타임슬롯·언어·집합 장소), 가격
  범주(성인/어린이/노인), 취소 정책을 포함한다. 불완전하거나 잘못된 매핑은 예약 실패, 가상 가용성, 가격 불일치를 야기한다. OCTO는 연결된
  모든 플랫폼에서 productId·optionId·unitId에 대한 표준 스키마를 제공해 매핑 작업을 줄이지만, 운영사 측 커스터마이징은 여전히 초기
  매핑 작업이 필요하다. 상품 매핑은 플랫폼 연결당 최초 설정이며, 운영사가 상품을 변경할 때마다 지속적인 유지 관리가 필요하다.
aliases:
  - Product Integration
  - Catalog Mapping
  - Inventory Mapping (Tours)
relationships:
  - type: related
    targetTerm: OCTO
  - type: related
    targetTerm: Connectivity Hub
  - type: related
    targetTerm: Product Feed
  - type: related
    targetTerm: Reseller API
distinctions:
  - targetTerm: Product Feed
    explanation: >-
      A product feed is the ongoing data export (prices, availability, content)
      pushed from operator to platform; product mapping is the one-time or
      periodic setup that tells the platform which operator product corresponds
      to which platform listing so the feed data lands in the right place.
    explanation_ko: >-
      Product Feed는 운영사에서 플랫폼으로 푸시되는 지속적인 데이터 내보내기(가격·가용성·콘텐츠)이고, 상품 매핑은 피드 데이터가
      올바른 위치에 도달할 수 있도록 운영사 상품과 플랫폼 리스팅을 연결하는 최초 또는 주기적 설정이다.
  - targetTerm: OCTO
    explanation: >-
      OCTO defines the API standard and shared data schema (productId, optionId)
      that reduces how much mapping is needed; product mapping is the
      implementation work still required to align each operator's specific
      offerings with a connected platform's catalog.
    explanation_ko: >-
      OCTO는 매핑 작업량을 줄이는 API 표준과 공유 데이터 스키마(productId·optionId)를 정의하고, 상품 매핑은 각 운영사의
      특정 상품을 연결된 플랫폼 카탈로그에 맞추기 위해 여전히 필요한 구현 작업이다.
sources:
  - name: OCTO (OpenConnectivity for Tourism) Specification — Product and Availability Schema
    org: OCTO Foundation
    version: '2.0'
    section: Product
    url: 'https://octotravel.com/octo-spec'
    tier: association
  - name: Arival — State of Operator Technology & Distribution
    org: Arival
    version: ''
    section: ''
    url: 'https://arival.travel/research/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="14" height="10" rx="2"/><rect x="4" y="28" width="14" height="10" rx="2"/><rect x="30" y="10" width="14" height="10" rx="2"/><rect x="30" y="28" width="14" height="10" rx="2"/><path d="M18 15h12M18 33h12M22 20v8"/></svg>
---

> The process of aligning an activity operator's internal product catalog — its own IDs, titles, options, and pricing tiers — to the taxonomy, identifiers, and data fields required by a distribution platform or connectivity API, enabling automated booking and inventory synchronization.

When an operator connects to a distribution marketplace or OTA through a connectivity platform (such as OCTO, Fareharbor, Rezdy, or a direct API), each product in the operator's reservation system must be mapped to a corresponding listing on the distribution side. Mapping covers at minimum: the product identifier, availability options (timeslots, languages, meeting points), pricing categories (adult/child/senior), and cancellation policies. Incomplete or mismatched mappings cause booking failures, phantom availability, or price discrepancies. OCTO (Open Connectivity for Tourism) reduces mapping effort by providing a standard schema for productId, optionId, and unitId across all connected platforms, but operator-side customization still requires initial mapping work. Product mapping is a one-time setup per platform connection, with ongoing maintenance when operators change their products.

**한국어 / Korean** — **상품 매핑(Product Mapping)** — 액티비티 운영사의 내부 상품 카탈로그(고유 ID·명칭·옵션·가격 체계)를 유통 플랫폼이나 연결성 API가 요구하는 분류체계·식별자·데이터 필드에 맞춰 정렬하는 과정으로, 자동 예약 및 재고 동기화를 가능하게 한다.

운영사가 OCTO·Fareharbor·Rezdy 등 연결성 플랫폼 또는 직접 API를 통해 유통 마켓플레이스나 OTA에 연결할 때, 운영사의 예약 시스템에 있는 각 상품은 유통 측의 해당 리스팅에 매핑되어야 한다. 매핑은 최소한 상품 식별자, 가용성 옵션(타임슬롯·언어·집합 장소), 가격 범주(성인/어린이/노인), 취소 정책을 포함한다. 불완전하거나 잘못된 매핑은 예약 실패, 가상 가용성, 가격 불일치를 야기한다. OCTO는 연결된 모든 플랫폼에서 productId·optionId·unitId에 대한 표준 스키마를 제공해 매핑 작업을 줄이지만, 운영사 측 커스터마이징은 여전히 초기 매핑 작업이 필요하다. 상품 매핑은 플랫폼 연결당 최초 설정이며, 운영사가 상품을 변경할 때마다 지속적인 유지 관리가 필요하다.

**Aliases:** `Product Integration`, `Catalog Mapping`, `Inventory Mapping (Tours)`

# Related
- OCTO — related
- Connectivity Hub — related
- Product Feed — related
- Reseller API — related

# Distinctions
- **Product Mapping** vs Product Feed — A product feed is the ongoing data export (prices, availability, content) pushed from operator to platform; product mapping is the one-time or periodic setup that tells the platform which operator product corresponds to which platform listing so the feed data lands in the right place.
- **Product Mapping** vs OCTO — OCTO defines the API standard and shared data schema (productId, optionId) that reduces how much mapping is needed; product mapping is the implementation work still required to align each operator's specific offerings with a connected platform's catalog.

# Citations
[1] [OCTO Foundation — OCTO (OpenConnectivity for Tourism) Specification — Product and Availability Schema — Product](https://octotravel.com/octo-spec)
[2] [Arival — State of Operator Technology & Distribution](https://arival.travel/research/)
