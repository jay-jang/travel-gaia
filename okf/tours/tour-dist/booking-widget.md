---
type: System
title: Booking Widget
description: 'A Booking Widget is a self-contained, embeddable booking interface — typically a JavaScript snippet or iframe — provided by a reservation technology platform, OTA, or connectivity hub that a tour operator or reseller partner can insert into their own website. It surfaces live availability, pricing, and a complete checkout flow for one or more products without the partner needing to build their own reservation system or API integration.'
tags:
  - tour-dist
  - active
timestamp: '2026-07-16T00:00:00Z'
id: booking-widget
vertical: tours
category: tour-dist
conceptType: system
status: active
term_ko: '예약 위젯(Booking Widget)'
definition_ko: '예약 위젯(Booking Widget)은 예약 기술 플랫폼, OTA 또는 연결 허브가 제공하는 자체 완결형 임베디드 예약 인터페이스(일반적으로 JavaScript 스니펫 또는 iframe)로, 투어 운영사나 리셀러 파트너가 자체 예약 시스템이나 API 통합 없이 자신의 웹사이트에 삽입하여 하나 이상의 상품에 대한 실시간 가용성, 가격, 완전한 결제 흐름을 제공할 수 있다.'
longDef: 'Booking widgets are the predominant distribution mechanism for small- to mid-size operators who lack the engineering resources to build a Reseller API integration. A platform (e.g. Viator, GetYourGuide, Bokun, FareHarbor, Regiondo) generates a widget code snippet that an operator or affiliate embeds. The widget loads the operator''s live inventory from the platform, handles timeslot selection, participant pricing categories, upsells, payment capture, and confirmation — typically redirecting to or embedding the platform''s checkout. The operator receives a booking confirmation and the booking appears in their operator dashboard alongside API-originated bookings. From a distribution-standards perspective, widgets sit on top of the same availability and booking APIs governed by specifications like OCTO; the widget is simply a pre-built frontend consumer of those APIs. White-label variants allow a reseller partner to present the widget under their own branding. Key distribution channels for widgets include hotel concierge pages, destination management websites, airline ancillary pages, and travel blog affiliate links.'
longDef_ko: '예약 위젯은 Reseller API 통합을 구현할 엔지니어링 자원이 부족한 중소 운영사의 주된 유통 메커니즘이다. Viator, GetYourGuide, Bokun, FareHarbor, Regiondo 같은 플랫폼이 위젯 코드 스니펫을 생성하면, 운영사 또는 제휴사가 자사 웹사이트에 삽입한다. 위젯은 플랫폼에서 운영사의 실시간 재고를 불러오고, 타임슬롯 선택, 참가자 요금 카테고리, 업셀, 결제 처리, 확정을 처리하며, 일반적으로 플랫폼의 결제 페이지로 리다이렉트하거나 임베드한다. 운영사는 예약 확정을 수신하며, 해당 예약은 API에서 발생한 예약과 함께 운영사 대시보드에 표시된다. 유통 표준 관점에서 위젯은 OCTO 같은 사양이 규율하는 동일한 가용성·예약 API 위에 구축되며, 위젯은 해당 API의 사전 제작된 프런트엔드 소비자일 뿐이다. 화이트레이블 변형을 통해 리셀러 파트너는 자체 브랜딩으로 위젯을 제공할 수 있다. 위젯의 주요 유통 채널로는 호텔 컨시어지 페이지, 목적지 관리 기관 웹사이트, 항공사 부가 상품 페이지, 여행 블로그 제휴 링크 등이 있다.'
aliases:
  - Booking Widget
  - Embeddable Booking Tool
  - Checkout Widget
  - Reservation Widget
providerTerms:
  - provider: Viator (TripAdvisor)
    term: Viator Widget
    context: 'Viator provides JavaScript and iframe widgets allowing affiliate partners to display and sell Viator-listed experiences directly on partner websites.'
    context_ko: 'Viator는 제휴 파트너가 파트너 웹사이트에서 Viator 등록 체험을 직접 표시하고 판매할 수 있는 JavaScript 및 iframe 위젯을 제공한다.'
    relationship: same
  - provider: GetYourGuide
    term: GetYourGuide Widget
    context: 'GetYourGuide offers embeddable widgets allowing content creators and travel partners to show curated activity listings with live pricing and booking.'
    context_ko: 'GetYourGuide는 콘텐츠 제작자와 여행 파트너가 실시간 가격 및 예약이 포함된 큐레이션된 액티비티 목록을 표시할 수 있는 임베디드 위젯을 제공한다.'
    relationship: same
  - provider: Bokun (TripAdvisor)
    term: Bokun Booking Widget
    context: 'Bokun''s booking widget allows operators to embed a full booking flow on their own website, drawing from the same inventory managed in the Bokun platform.'
    context_ko: 'Bokun 예약 위젯은 운영사가 Bokun 플랫폼에서 관리하는 동일한 재고를 기반으로 자체 웹사이트에 완전한 예약 흐름을 임베드할 수 있게 한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: OCTO
  - type: related
    targetTerm: Reseller API
  - type: related
    targetTerm: White-Label Booking
  - type: related
    targetTerm: Experiences Marketplace
  - type: related
    targetTerm: Instant Confirmation
distinctions:
  - targetTerm: Reseller API
    explanation: 'A Reseller API is a server-to-server integration that programmatically pulls operator inventory into a reseller''s own booking system; a Booking Widget is a pre-built, ready-to-embed frontend UI component suitable for non-technical or low-volume partners who do not have the engineering resources to build a full API integration.'
    explanation_ko: 'Reseller API는 운영사 재고를 리셀러의 예약 시스템에 프로그래밍 방식으로 가져오는 서버 간 통합이고, 예약 위젯은 전체 API 통합을 구현할 엔지니어링 자원이 없는 비기술적·소규모 파트너에게 적합한 사전 제작된 임베드 가능 프런트엔드 UI 컴포넌트다.'
  - targetTerm: White-Label Booking
    explanation: 'White-Label Booking is the broader commercial model in which a reseller sells operator products under their own branding; a Booking Widget is one specific technical mechanism for delivering that model — an embeddable UI tool — though white-label booking can also be implemented via API without using a widget at all.'
    explanation_ko: '화이트레이블 예약(White-Label Booking)은 리셀러가 운영사 상품을 자체 브랜딩으로 판매하는 더 넓은 상업 모델이고, 예약 위젯은 그 모델을 구현하는 특정 기술 메커니즘(임베드 가능 UI 도구)이다. 화이트레이블 예약은 위젯을 전혀 사용하지 않고 API로만 구현할 수도 있다.'
  - targetTerm: OCTO
    explanation: 'OCTO is the open API specification that standardises how operator availability, pricing, and booking data is exposed to distribution partners; a Booking Widget is an end-user-facing frontend that consumes those APIs to present a booking UI — OCTO defines the data layer, the widget is the presentation layer.'
    explanation_ko: 'OCTO는 운영사 가용성·가격·예약 데이터가 유통 파트너에게 노출되는 방식을 표준화하는 개방형 API 사양이고, 예약 위젯은 해당 API를 소비하여 예약 UI를 제시하는 최종 사용자 향 프런트엔드이다. OCTO는 데이터 레이어를, 위젯은 프레젠테이션 레이어를 정의한다.'
sources:
  - name: OCTO — Open Connectivity for Tour Operators API Specification
    org: OCTO (Open Connectivity for Tour Operators)
    version: ''
    section: Distribution Integration
    url: 'https://octo.travel/'
    tier: standard-body
  - name: Affiliate Widget Documentation
    org: Viator / TripAdvisor
    version: ''
    section: ''
    url: 'https://partnerresources.viator.com/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="40" height="32" rx="3"/><line x1="4" y1="16" x2="44" y2="16"/><circle cx="10" cy="12" r="2" stroke-width="1.5"/><circle cx="17" cy="12" r="2" stroke-width="1.5"/><rect x="10" y="22" width="28" height="5" rx="1"/><line x1="10" y1="32" x2="20" y2="32"/><rect x="28" y="29" width="10" height="7" rx="1"/></svg>
---

> A Booking Widget is a self-contained, embeddable booking interface — typically a JavaScript snippet or iframe — provided by a reservation technology platform, OTA, or connectivity hub that a tour operator or reseller partner can insert into their own website. It surfaces live availability, pricing, and a complete checkout flow for one or more products without the partner needing to build their own reservation system or API integration.

Booking widgets are the predominant distribution mechanism for small- to mid-size operators who lack the engineering resources to build a Reseller API integration. A platform (e.g. Viator, GetYourGuide, Bokun, FareHarbor, Regiondo) generates a widget code snippet that an operator or affiliate embeds. The widget loads the operator's live inventory from the platform, handles timeslot selection, participant pricing categories, upsells, payment capture, and confirmation — typically redirecting to or embedding the platform's checkout. The operator receives a booking confirmation and the booking appears in their operator dashboard alongside API-originated bookings. From a distribution-standards perspective, widgets sit on top of the same availability and booking APIs governed by specifications like OCTO; the widget is simply a pre-built frontend consumer of those APIs.

**한국어 / Korean** — **예약 위젯(Booking Widget)** — 예약 위젯은 예약 기술 플랫폼, OTA 또는 연결 허브가 제공하는 자체 완결형 임베디드 예약 인터페이스로, 투어 운영사나 리셀러 파트너가 자체 예약 시스템이나 API 통합 없이 자신의 웹사이트에 삽입할 수 있다.

**Aliases:** `Booking Widget`, `Embeddable Booking Tool`, `Checkout Widget`, `Reservation Widget`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Viator (TripAdvisor) | `Viator Widget` | same | Viator provides JavaScript and iframe widgets allowing affiliate partners to display and sell Viator-listed experiences directly on partner websites. |
| GetYourGuide | `GetYourGuide Widget` | same | GetYourGuide offers embeddable widgets allowing content creators and travel partners to show curated activity listings with live pricing and booking. |
| Bokun (TripAdvisor) | `Bokun Booking Widget` | same | Bokun's booking widget allows operators to embed a full booking flow on their own website, drawing from the same inventory managed in the Bokun platform. |

# Related
- [OCTO](/tours/tour-dist/octo-spec.md) — related
- [Reseller API](/tours/tour-dist/reseller-api.md) — related
- [White-Label Booking](/tours/tour-dist/white-label-booking.md) — related
- [Experiences Marketplace](/tours/tour-dist/experiences-marketplace.md) — related
- [Instant Confirmation](/tours/tour-dist/instant-confirmation.md) — related

# Distinctions
- **Booking Widget** vs [Reseller API](/tours/tour-dist/reseller-api.md) — A Reseller API is a server-to-server integration that programmatically pulls operator inventory into a reseller's own booking system; a Booking Widget is a pre-built, ready-to-embed frontend UI component suitable for non-technical or low-volume partners.
- **Booking Widget** vs [White-Label Booking](/tours/tour-dist/white-label-booking.md) — White-Label Booking is the broader commercial model in which a reseller sells operator products under their own branding; a Booking Widget is one specific technical mechanism for delivering that model.
- **Booking Widget** vs [OCTO](/tours/tour-dist/octo-spec.md) — OCTO is the open API specification that standardises how operator availability, pricing, and booking data is exposed to distribution partners; a Booking Widget is an end-user-facing frontend that consumes those APIs — OCTO defines the data layer, the widget is the presentation layer.

# Citations
[1] [OCTO (Open Connectivity for Tour Operators) — OCTO — Open Connectivity for Tour Operators API Specification](https://octo.travel/)
[2] [Viator / TripAdvisor — Affiliate Widget Documentation](https://partnerresources.viator.com/)
