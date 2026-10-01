---
type: System
title: OTA Extranet
description: 'An OTA extranet is the web-based property management portal that an online travel agency provides to hotel partners, enabling the property to manage its room inventory, rates, content, promotions, and booking policies on that specific OTA channel. Each major OTA — Booking.com (Extranet), Expedia (Partner Central), Agoda (YCS) — runs a separate extranet, requiring hoteliers to manage multiple portals or to centralise via a channel manager.'
tags:
  - hotel-dist
  - active
timestamp: '2026-10-01T00:00:00Z'
id: ota-extranet
vertical: lodging
category: hotel-dist
conceptType: system
status: active
term_ko: OTA 엑스트라넷(OTA Extranet)
definition_ko: 'OTA 엑스트라넷은 온라인 여행사가 호텔 파트너에게 제공하는 웹 기반 자산 관리 포털로, 해당 OTA 채널에서 객실 재고, 요금, 콘텐츠, 프로모션, 예약 정책을 관리할 수 있게 한다. Booking.com(엑스트라넷), Expedia(파트너 센트럴), Agoda(YCS) 등 주요 OTA는 별도의 엑스트라넷을 운영하므로, 호텔리어는 여러 포털을 개별 관리하거나 채널 매니저를 통해 통합 관리해야 한다.'
longDef: 'Within an OTA extranet a hotel typically manages: room types and their descriptions, photos and amenity content; rate plans (BAR, non-refundable, member rates); availability and stop-sell instructions; special promotions and visibility programmes; cancellation and prepayment policies; invoicing and financial reporting; guest review responses; and connectivity settings (XML/API connections via channel manager or direct ARI push). Content quality within the extranet directly affects the property''s ranking algorithm on the OTA''s consumer-facing site — a higher content score or completion rate typically boosts search placement. Booking.com''s extranet also exposes the Genius loyalty tier performance dashboard, property analytics, and the Visibility Booster tool. Expedia Partner Central additionally serves as the access point for the Expedia Group''s real-time pricing and availability API (EPS) configuration. Relying solely on manual extranet updates without a channel manager creates a high risk of overbooking and rate inconsistency across channels.'
longDef_ko: 'OTA 엑스트라넷 내에서 호텔은 보통 다음을 관리한다: 객실 유형과 설명, 사진, 편의시설 콘텐츠; 요금 플랜(BAR, 환불 불가, 회원 요금); 가용성 및 판매 중단 지시; 특별 프로모션 및 노출 프로그램; 취소 및 선불 정책; 청구서 및 재무 보고서; 고객 리뷰 응답; 연결 설정(채널 매니저 또는 직접 ARI 푸시를 통한 XML/API 연결). 엑스트라넷 내 콘텐츠 품질은 OTA 소비자 사이트의 노출 순위 알고리즘에 직접 영향을 미친다 — 콘텐츠 점수나 완성도가 높을수록 검색 노출이 향상되는 경향이 있다. Booking.com 엑스트라넷은 Genius 로열티 등급 성과 대시보드, 자산 분석, Visibility Booster 도구도 제공한다. Expedia 파트너 센트럴은 Expedia Group의 실시간 요금·가용성 API(EPS) 설정 접근점이기도 하다. 채널 매니저 없이 수동 엑스트라넷 업데이트에만 의존하면 초과 예약 및 채널 간 요금 불일치 위험이 높아진다.'
providerTerms:
  - provider: Booking.com
    term: Extranet (Booking.com)
    context: 'Booking.com''s property management portal is generically called the Extranet; it covers inventory, rates, promotions, analytics, reviews and connectivity settings.'
    context_ko: 'Booking.com의 자산 관리 포털은 일반적으로 엑스트라넷이라고 불리며, 재고, 요금, 프로모션, 분석, 리뷰, 연결 설정을 포함한다.'
    relationship: same
  - provider: Expedia Group
    term: Partner Central
    context: 'Expedia''s extranet is branded Partner Central; it provides rate and availability management, EPS API configuration, analytics, and review management for Expedia and Hotels.com properties.'
    context_ko: 'Expedia의 엑스트라넷은 파트너 센트럴이라는 브랜드명으로, Expedia 및 Hotels.com 자산에 대해 요금·가용성 관리, EPS API 설정, 분석, 리뷰 관리를 제공한다.'
    relationship: same
  - provider: Agoda
    term: YCS (Your Connected Services)
    context: 'Agoda''s property portal is branded YCS (Your Connected Services), covering inventory, rates, content, and performance reporting for properties on the Agoda and Booking.com platforms (since both are part of Booking Holdings).'
    context_ko: 'Agoda의 자산 포털은 YCS(Your Connected Services)라는 브랜드명으로, Agoda 및 Booking.com 플랫폼의 자산에 대해 재고, 요금, 콘텐츠, 성과 보고를 제공한다(두 플랫폼 모두 Booking Holdings 소속).'
    relationship: same
aliases:
  - Partner Extranet
  - Property Management Portal (OTA)
  - Partner Portal (OTA)
relationships:
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: OTA (Online Travel Agency)
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: Rate Parity
distinctions:
  - targetTerm: Channel Manager
    explanation: 'An OTA extranet is the portal a specific OTA provides to its hotel partners for direct rate and inventory management on that platform; a channel manager is a third-party system the hotel uses to push rates and availability to multiple OTA extranets simultaneously, avoiding manual updates on each.'
    explanation_ko: 'OTA 엑스트라넷은 특정 OTA가 해당 플랫폼의 요금과 재고를 직접 관리하기 위해 호텔 파트너에게 제공하는 포털이고, 채널 매니저는 호텔이 여러 OTA 엑스트라넷에 요금과 가용성을 동시에 푸시하기 위해 사용하는 제3자 시스템으로 각 포털의 수동 업데이트를 방지한다.'
  - targetTerm: CRS
    explanation: 'A CRS (Central Reservations System) is the hotel''s own master inventory and reservation system that aggregates bookings from all channels; an OTA extranet is the channel-specific interface through which the OTA and hotel exchange rates, availability, and reservations, typically connecting into the CRS via an ARI feed or channel manager.'
    explanation_ko: 'CRS(중앙 예약 시스템)는 모든 채널의 예약을 집계하는 호텔 자체의 마스터 재고·예약 시스템이고, OTA 엑스트라넷은 OTA와 호텔이 요금, 가용성, 예약을 교환하는 채널별 인터페이스로, 보통 ARI 피드 또는 채널 매니저를 통해 CRS에 연결된다.'
sources:
  - name: Booking.com Extranet Help Centre — Getting Started with the Extranet
    org: Booking.com
    version: ''
    section: ''
    url: 'https://partner.booking.com/en-gb/help/getting-started/your-extranet'
    tier: vendor-doc
  - name: Expedia Partner Central — Help and Resources
    org: Expedia Group
    version: ''
    section: ''
    url: 'https://partner.expediagroup.com/en-us/help-hub'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="36" height="28" rx="3"/><line x1="6" y1="16" x2="42" y2="16"/><circle cx="11" cy="12" r="1.5" fill="currentColor"/><circle cx="16" cy="12" r="1.5" fill="currentColor"/><circle cx="21" cy="12" r="1.5" fill="currentColor"/><line x1="13" y1="40" x2="35" y2="40"/><line x1="24" y1="36" x2="24" y2="40"/><rect x="12" y="22" width="10" height="6" rx="1"/><rect x="26" y="22" width="10" height="6" rx="1"/></svg>
---

> An OTA extranet is the web-based property management portal that an online travel agency provides to hotel partners, enabling the property to manage its room inventory, rates, content, promotions, and booking policies on that specific OTA channel. Each major OTA — Booking.com (Extranet), Expedia (Partner Central), Agoda (YCS) — runs a separate extranet, requiring hoteliers to manage multiple portals or to centralise via a channel manager.

Within an OTA extranet a hotel typically manages: room types and their descriptions, photos and amenity content; rate plans (BAR, non-refundable, member rates); availability and stop-sell instructions; special promotions and visibility programmes; cancellation and prepayment policies; invoicing and financial reporting; guest review responses; and connectivity settings (XML/API connections via channel manager or direct ARI push). Content quality within the extranet directly affects the property's ranking algorithm on the OTA's consumer-facing site — a higher content score or completion rate typically boosts search placement. Booking.com's extranet also exposes the Genius loyalty tier performance dashboard, property analytics, and the Visibility Booster tool. Expedia Partner Central additionally serves as the access point for the Expedia Group's real-time pricing and availability API (EPS) configuration. Relying solely on manual extranet updates without a channel manager creates a high risk of overbooking and rate inconsistency across channels.

**한국어 / Korean** — **OTA 엑스트라넷(OTA Extranet)** — OTA 엑스트라넷은 온라인 여행사가 호텔 파트너에게 제공하는 웹 기반 자산 관리 포털로, 해당 OTA 채널에서 객실 재고, 요금, 콘텐츠, 프로모션, 예약 정책을 관리할 수 있게 한다. Booking.com(엑스트라넷), Expedia(파트너 센트럴), Agoda(YCS) 등 주요 OTA는 별도의 엑스트라넷을 운영하므로, 호텔리어는 여러 포털을 개별 관리하거나 채널 매니저를 통해 통합 관리해야 한다.

엑스트라넷 내 콘텐츠 품질은 OTA 소비자 사이트의 노출 순위 알고리즘에 직접 영향을 미친다. 채널 매니저 없이 수동 엑스트라넷 업데이트에만 의존하면 초과 예약 및 채널 간 요금 불일치 위험이 높아진다.

**Aliases:** `Partner Extranet`, `Property Management Portal (OTA)`, `Partner Portal (OTA)`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Booking.com | `Extranet (Booking.com)` | same | Booking.com's property management portal is generically called the Extranet; it covers inventory, rates, promotions, analytics, reviews and connectivity settings. |
| Expedia Group | `Partner Central` | same | Expedia's extranet is branded Partner Central; it provides rate and availability management, EPS API configuration, analytics, and review management for Expedia and Hotels.com properties. |
| Agoda | `YCS (Your Connected Services)` | same | Agoda's property portal is branded YCS (Your Connected Services), covering inventory, rates, content, and performance reporting for properties on the Agoda and Booking.com platforms (since both are part of Booking Holdings). |

# Related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [Rate Parity](/lodging/hotel-dist/rate-parity.md) — related

# Distinctions
- **OTA Extranet** vs [Channel Manager](/lodging/hotel-dist/channel-manager.md) — An OTA extranet is the portal a specific OTA provides to its hotel partners for direct rate and inventory management on that platform; a channel manager is a third-party system the hotel uses to push rates and availability to multiple OTA extranets simultaneously, avoiding manual updates on each.
- **OTA Extranet** vs [CRS](/lodging/hotel-dist/crs.md) — A CRS (Central Reservations System) is the hotel's own master inventory and reservation system that aggregates bookings from all channels; an OTA extranet is the channel-specific interface through which the OTA and hotel exchange rates, availability, and reservations, typically connecting into the CRS via an ARI feed or channel manager.

# Citations
[1] [Booking.com — Booking.com Extranet Help Centre — Getting Started with the Extranet](https://partner.booking.com/en-gb/help/getting-started/your-extranet)
[2] [Expedia Group — Expedia Partner Central — Help and Resources](https://partner.expediagroup.com/en-us/help-hub)
