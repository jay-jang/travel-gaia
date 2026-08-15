---
type: Standard
title: Google Things to Do
description: 'Google Things to Do is Google''s structured data feed and advertising program that allows tour, activity, and attraction operators and their connectivity partners to display bookable experience products directly on Google Search, Google Maps, and related Google surfaces. Operators or their channel managers submit a product feed to the Google Actions Center; qualifying inventory appears in an "Activities and Tours" surface within search results, with deep links to the operator''s or distributor''s booking page.'
tags:
  - tour-dist
  - active
  - Google
timestamp: '2026-08-15T00:00:00Z'
id: google-things-to-do
vertical: tours
category: tour-dist
conceptType: standard
status: active
abbreviation: TTD
term_ko: 구글 '할 것들(Things to Do)' 프로그램
definition_ko: 'Google Things to Do는 투어·액티비티·어트랙션 운영자와 커넥티비티 파트너가 예약 가능한 체험 상품을 Google 검색, Google 지도 및 관련 Google 표면에 직접 노출시킬 수 있도록 하는 Google의 구조화된 데이터 피드 및 광고 프로그램이다. 운영자나 채널 매니저가 Google Actions Center에 상품 피드를 제출하면, 적격 재고가 검색 결과 내 "Activities and Tours" 화면에 표시되고 운영자 또는 유통업체의 예약 페이지로 딥링크된다.'
longDef: 'Google Things to Do (launched 2021, formerly referenced under Google Experiences or Google Reserve) enables operators to reach travellers at the moment of intent — while searching for things to do at a destination — by surfacing attraction tickets, guided tours, and activity bookings directly in organic search and via paid Things to do ads. Integration requires a conforming product feed (JSON-based, submitted via the Actions Center API) containing product details (title, description, duration, price, availability, geo-coordinates, booking URL, and optionally image assets). Feed items must meet Google''s eligibility criteria: the product must be bookable online, must have a start time or admission component, and the operator or distributor must be verified. Two integration paths exist: (1) Direct connection: the operator submits the feed themselves; (2) Connectivity partner connection: a technology provider (reservation system, channel manager, or OTA) submits on behalf of operators, aggregating inventory across their client base. Key distribution-channel connectivity partners include Viator, GetYourGuide, Rezdy, Fareharbor, Bokun, and similar platforms. The Things to do ads product (within Google Ads) is automatically generated from the submitted feed, targeting users with intent signals related to activities and attractions.'
longDef_ko: 'Google Things to Do(2021년 출시, 이전에는 Google Experiences 또는 Google Reserve로 불림)는 운영자가 여행지에서 무엇을 할지 검색할 때 관광 명소 입장권, 가이드 투어, 액티비티 예약을 유기적 검색과 유료 Things to Do 광고를 통해 직접 표시함으로써 의도 순간에 여행자에게 도달할 수 있도록 한다. 통합을 위해서는 상품 세부 정보(제목, 설명, 소요 시간, 가격, 가용성, 좌표, 예약 URL, 선택적으로 이미지 자산)가 포함된 적합 상품 피드(Actions Center API를 통해 제출되는 JSON 기반)가 필요하다. 피드 항목은 Google의 적격 기준(온라인 예약 가능, 시작 시간 또는 입장 요소 있음, 운영자 또는 유통업체 인증 완료)을 충족해야 한다. 두 가지 통합 경로가 존재한다: (1) 직접 연결: 운영자 자체 피드 제출; (2) 커넥티비티 파트너 연결: 예약 시스템, 채널 매니저, OTA 등 기술 제공업체가 운영자 대신 제출하여 클라이언트 재고를 집계. 주요 유통 채널 커넥티비티 파트너로는 Viator, GetYourGuide, Rezdy, Fareharbor, Bokun 등이 있다. Things to Do 광고 상품(Google Ads 내)은 제출된 피드에서 자동으로 생성되어 액티비티 및 어트랙션 관련 의도 신호를 가진 사용자를 타겟팅한다.'
aliases:
  - Things to Do (Google)
  - Google TTD
  - Google Experiences
  - Google Reserve
relationships:
  - type: related
    targetTerm: Product Feed
  - type: related
    targetTerm: OCTO
  - type: related
    targetTerm: Experiences Marketplace
  - type: related
    targetTerm: Activity Operator
  - type: related
    targetTerm: Connectivity Hub
distinctions:
  - targetTerm: Product Feed
    explanation: 'A Product Feed is the general concept of a structured data file (XML, JSON, CSV) that an operator or distributor submits to a channel or marketplace to represent their inventory. Google Things to Do is a specific program that consumes such a product feed via the Google Actions Center API and surfaces it on Google''s search and maps properties; it is the destination channel, whereas a Product Feed is the supply-side mechanism.'
    explanation_ko: '상품 피드는 운영자나 유통업체가 재고를 나타내기 위해 채널이나 마켓플레이스에 제출하는 구조화된 데이터 파일(XML, JSON, CSV)의 일반 개념이다. Google Things to Do는 그러한 상품 피드를 Google Actions Center API를 통해 소비하여 Google 검색 및 지도 속성에 표시하는 특정 프로그램이며, 수요 측 채널이다. 상품 피드는 공급 측 메커니즘이다.'
  - targetTerm: Experiences Marketplace
    explanation: 'An Experiences Marketplace (such as Viator or GetYourGuide) is a consumer-facing platform that holds and transacts inventory, earning commission on bookings. Google Things to Do is a surface layer — it surfaces inventory from operators and connectivity partners but directs the transaction to the operator''s or partner''s own booking page; Google does not hold or process the booking itself (unlike a marketplace).'
    explanation_ko: 'Experiences Marketplace(Viator, GetYourGuide 등)는 재고를 보유하고 거래하며 예약에 대한 커미션을 받는 소비자 대면 플랫폼이다. Google Things to Do는 운영자와 커넥티비티 파트너의 재고를 표면에 노출하지만 거래는 운영자 또는 파트너 자체 예약 페이지로 안내한다. Google은 마켓플레이스와 달리 예약 자체를 보유하거나 처리하지 않는다.'
sources:
  - name: 'Things to Do — Overview and Eligibility'
    org: Google LLC
    version: ''
    section: ''
    url: 'https://developers.google.com/actions-center/verticals/things-to-do/overview'
    tier: vendor-doc
  - name: 'Things to Do — Partner Integration Overview'
    org: Google LLC
    version: ''
    section: ''
    url: 'https://developers.google.com/actions-center/verticals/things-to-do/guides/partner-integration/overview'
    tier: vendor-doc
  - name: 'Introducing Things to Do on Google'
    org: Google LLC
    version: ''
    section: ''
    url: 'https://support.google.com/google-ads/answer/10723429'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="16"/><polyline points="16,24 21,29 32,18"/><circle cx="36" cy="12" r="5"/><line x1="34" y1="10" x2="38" y2="14"/><line x1="38" y1="10" x2="34" y2="14"/></svg>
---

> Google Things to Do is Google's structured data feed and advertising program that allows tour, activity, and attraction operators and their connectivity partners to display bookable experience products directly on Google Search, Google Maps, and related Google surfaces. Operators or their channel managers submit a product feed to the Google Actions Center; qualifying inventory appears in an "Activities and Tours" surface within search results, with deep links to the operator's or distributor's booking page.

Google Things to Do (launched 2021, formerly referenced under Google Experiences or Google Reserve) enables operators to reach travellers at the moment of intent — while searching for things to do at a destination — by surfacing attraction tickets, guided tours, and activity bookings directly in organic search and via paid Things to do ads. Integration requires a conforming product feed (JSON-based, submitted via the Actions Center API) containing product details (title, description, duration, price, availability, geo-coordinates, booking URL, and optionally image assets). Feed items must meet Google's eligibility criteria: the product must be bookable online, must have a start time or admission component, and the operator or distributor must be verified. Two integration paths exist: (1) Direct connection: the operator submits the feed themselves; (2) Connectivity partner connection: a technology provider (reservation system, channel manager, or OTA) submits on behalf of operators, aggregating inventory across their client base. Key distribution-channel connectivity partners include Viator, GetYourGuide, Rezdy, Fareharbor, Bokun, and similar platforms. The Things to do ads product (within Google Ads) is automatically generated from the submitted feed, targeting users with intent signals related to activities and attractions.

**한국어 / Korean** — **구글 'Things to Do' 프로그램** — Google Things to Do는 투어·액티비티·어트랙션 운영자와 커넥티비티 파트너가 예약 가능한 체험 상품을 Google 검색, Google 지도 및 관련 Google 표면에 직접 노출시킬 수 있도록 하는 프로그램이다. Google Actions Center에 상품 피드를 제출하면, 적격 재고가 검색 결과 내 "Activities and Tours" 화면에 표시된다.

**Aliases:** `Things to Do (Google)`, `Google TTD`, `Google Experiences`, `Google Reserve`

# Related
- [Product Feed](/tours/tour-dist/product-feed.md) — related
- [OCTO](/tours/tour-dist/octo-spec.md) — related
- [Experiences Marketplace](/tours/tour-dist/experiences-marketplace.md) — related
- [Activity Operator](/tours/tour-dist/activity-operator.md) — related
- [Connectivity Hub](/tours/tour-dist/connectivity-hub.md) — related

# Distinctions
- **Google Things to Do** vs [Product Feed](/tours/tour-dist/product-feed.md) — A Product Feed is the general concept of a structured data file (XML, JSON, CSV) that an operator or distributor submits to a channel or marketplace to represent their inventory. Google Things to Do is a specific program that consumes such a product feed via the Google Actions Center API and surfaces it on Google's search and maps properties; it is the destination channel, whereas a Product Feed is the supply-side mechanism.
- **Google Things to Do** vs [Experiences Marketplace](/tours/tour-dist/experiences-marketplace.md) — An Experiences Marketplace (such as Viator or GetYourGuide) is a consumer-facing platform that holds and transacts inventory, earning commission on bookings. Google Things to Do is a surface layer — it surfaces inventory from operators and connectivity partners but directs the transaction to the operator's or partner's own booking page; Google does not hold or process the booking itself (unlike a marketplace).

# Citations
[1] [Google LLC — Things to Do — Overview and Eligibility](https://developers.google.com/actions-center/verticals/things-to-do/overview)
[2] [Google LLC — Things to Do — Partner Integration Overview](https://developers.google.com/actions-center/verticals/things-to-do/guides/partner-integration/overview)
[3] [Google LLC — Introducing Things to Do on Google](https://support.google.com/google-ads/answer/10723429)
