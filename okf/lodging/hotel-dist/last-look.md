---
type: Business Term
title: Last Look
description: 'A rate-validation mechanism in GDS and switch hotel distribution whereby the hotel''s Central Reservation System (CRS) performs a real-time availability and price check immediately before a GDS booking is committed; if the current CRS rate or availability differs from the cached GDS rate, the booking is re-priced or declined, protecting the hotel from transacting at a stale price.'
tags:
  - hotel-dist
  - active
timestamp: '2026-08-03T00:00:00Z'
id: last-look
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
term_ko: 라스트 룩(Last Look)
definition_ko: 'GDS 및 스위치 호텔 유통에서 GDS 예약이 확정되기 직전에 호텔의 CRS가 실시간 가용성·가격 확인을 수행하는 요금 검증 메커니즘. 현재 CRS 요금이나 가용성이 GDS에 캐시된 요금과 다를 경우 예약을 재가격 책정하거나 거절하여 호텔이 오래된 가격으로 거래하는 것을 방지한다.'
longDef: 'In GDS hotel booking flows, rates and availability are often cached to provide fast responses to shopping requests. When a travel agent or OTA commits a booking, many CRS integrations perform a "last look" — a final asynchronous or synchronous call to the hotel''s CRS to verify that the committed rate and availability still hold at the moment of booking. If the CRS returns a higher rate (e.g., the room has been taken or a promotional rate has expired), the GDS or switch can re-offer the current price to the agent, or the booking may fail. Last look is distinct from a simple rate-reload: it fires only on the booking transaction, not during shopping. From a revenue-management perspective, last look gives the hotel a safety net against rate leakage caused by GDS cache latency and is a key discipline in direct-connect and GDS-integrated CRS setups.'
longDef_ko: 'GDS 호텔 예약 흐름에서 요금과 가용성은 쇼핑 요청에 빠른 응답을 제공하기 위해 자주 캐시된다. 여행사나 OTA가 예약을 확정할 때 많은 CRS 연동은 "라스트 룩"을 수행한다. 이는 예약 시점에 확정된 요금과 가용성이 여전히 유효한지 호텔 CRS에 최종 비동기 또는 동기 호출로 확인하는 단계다. CRS가 더 높은 요금을 반환하면(예: 객실이 매진되었거나 프로모션 요금이 만료된 경우) GDS나 스위치는 에이전트에게 현재 가격을 재제안하거나 예약이 실패할 수 있다. 라스트 룩은 단순한 요금 재로드와는 다르며, 쇼핑 중이 아니라 예약 거래 시에만 실행된다. 수익 관리 관점에서 라스트 룩은 GDS 캐시 지연으로 인한 요금 누출에 대한 호텔의 안전망이며, 다이렉트 커넥트 및 GDS 연동 CRS 설정의 핵심 규율이다.'
aliases:
  - Last Look Right
  - CRS Last Look
  - Last-Look
providerTerms:
  - provider: Amadeus Hotel
    term: Last Look (CRS Sync)
    context: 'Amadeus''s hotel-switch connectivity invokes a CRS availability call at booking time; if the CRS''s current rate differs from the cached GDS rate, Amadeus returns a re-priced offer to the agent before committing the booking.'
    context_ko: 'Amadeus 호텔 스위치 연동은 예약 시 CRS 가용성 호출을 실행하며, CRS의 현재 요금이 캐시된 GDS 요금과 다르면 Amadeus는 예약 확정 전에 에이전트에게 재가격 책정된 오퍼를 반환한다.'
    relationship: same
  - provider: Sabre Hospitality
    term: Property-Confirmed Rates
    context: 'Sabre Hospitality''s SynXis switch verifies committed rates against the hotel''s live CRS inventory at booking time, implementing the last-look validation pattern.'
    context_ko: 'Sabre Hospitality의 SynXis 스위치는 예약 시 확정 요금을 호텔의 실시간 CRS 재고와 대조 검증하는 라스트 룩 검증 패턴을 구현한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Rate Parity
  - type: related
    targetTerm: Rate Leakage
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Channel Manager
distinctions:
  - targetTerm: Rate Parity
    explanation: 'Rate parity is the contractual obligation for a hotel to offer the same price across all distribution channels; last look is the technical mechanism that enforces real-time rate accuracy at booking, preventing a GDS channel from accidentally transacting at a stale lower price.'
    explanation_ko: '요금 패리티는 호텔이 모든 유통 채널에서 동일한 가격을 제공해야 하는 계약적 의무이고, 라스트 룩은 예약 시 실시간 요금 정확성을 강제하여 GDS 채널이 실수로 오래된 낮은 가격에 거래하는 것을 방지하는 기술적 메커니즘이다.'
  - targetTerm: Rate Leakage
    explanation: 'Rate leakage is the outcome — a hotel''s contracted rates appearing in unauthorized channels below the intended price; last look is the preventive control that avoids rate leakage by validating the price against the live CRS at the moment a booking is confirmed.'
    explanation_ko: '요금 누출은 결과물로, 호텔의 계약 요금이 의도된 가격보다 낮게 비인가 채널에 나타나는 현상이고, 라스트 룩은 예약 확정 시 라이브 CRS에 대해 가격을 검증함으로써 요금 누출을 방지하는 예방 통제 장치이다.'
  - targetTerm: Channel Manager
    explanation: 'A channel manager pushes rate and availability updates from the hotel''s PMS or RMS out to distribution channels in real time; last look is a pull-based validation at booking time, complementing channel-manager pushes by catching any gaps between the last push and the booking moment.'
    explanation_ko: '채널 매니저는 호텔의 PMS나 RMS에서 요금·가용성 업데이트를 실시간으로 유통 채널에 푸시하고, 라스트 룩은 예약 시 풀 기반 검증으로 마지막 푸시와 예약 시점 사이의 간격을 포착해 채널 매니저 푸시를 보완한다.'
sources:
  - name: HEDNA Global Distribution Technology Manual
    org: Hotel Electronic Distribution Network Association (HEDNA)
    version: ''
    section: ''
    url: 'https://hedna.org/'
    tier: association
  - name: 'OpenTravel Alliance — OTA_HotelAvailGetRS / Last Look Availability Response'
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="12" width="28" height="24" rx="3"/><circle cx="24" cy="24" r="6"/><circle cx="24" cy="24" r="2"/><path d="M24 18v2M24 28v2M18 24h2M28 24h2"/><path d="M34 12l4-4"/></svg>
---

> A rate-validation mechanism in GDS and switch hotel distribution whereby the hotel's Central Reservation System (CRS) performs a real-time availability and price check immediately before a GDS booking is committed; if the current CRS rate or availability differs from the cached GDS rate, the booking is re-priced or declined, protecting the hotel from transacting at a stale price.

In GDS hotel booking flows, rates and availability are often cached to provide fast responses to shopping requests. When a travel agent or OTA commits a booking, many CRS integrations perform a "last look" — a final asynchronous or synchronous call to the hotel's CRS to verify that the committed rate and availability still hold at the moment of booking. If the CRS returns a higher rate (e.g., the room has been taken or a promotional rate has expired), the GDS or switch can re-offer the current price to the agent, or the booking may fail. Last look is distinct from a simple rate-reload: it fires only on the booking transaction, not during shopping. From a revenue-management perspective, last look gives the hotel a safety net against rate leakage caused by GDS cache latency and is a key discipline in direct-connect and GDS-integrated CRS setups.

**한국어 / Korean** — **라스트 룩(Last Look)** — GDS 및 스위치 호텔 유통에서 GDS 예약이 확정되기 직전에 호텔의 CRS가 실시간 가용성·가격 확인을 수행하는 요금 검증 메커니즘. 현재 CRS 요금이나 가용성이 GDS에 캐시된 요금과 다를 경우 예약을 재가격 책정하거나 거절하여 호텔이 오래된 가격으로 거래하는 것을 방지한다.

GDS 호텔 예약 흐름에서 요금과 가용성은 쇼핑 요청에 빠른 응답을 제공하기 위해 자주 캐시된다. 여행사나 OTA가 예약을 확정할 때 많은 CRS 연동은 "라스트 룩"을 수행한다. 이는 예약 시점에 확정된 요금과 가용성이 여전히 유효한지 호텔 CRS에 최종 비동기 또는 동기 호출로 확인하는 단계다. CRS가 더 높은 요금을 반환하면(예: 객실이 매진되었거나 프로모션 요금이 만료된 경우) GDS나 스위치는 에이전트에게 현재 가격을 재제안하거나 예약이 실패할 수 있다. 라스트 룩은 단순한 요금 재로드와는 다르며, 쇼핑 중이 아니라 예약 거래 시에만 실행된다.

**Aliases:** `Last Look Right`, `CRS Last Look`, `Last-Look`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus Hotel | `Last Look (CRS Sync)` | same | Amadeus's hotel-switch connectivity invokes a CRS availability call at booking time; if the CRS's current rate differs from the cached GDS rate, Amadeus returns a re-priced offer to the agent before committing the booking. |
| Sabre Hospitality | `Property-Confirmed Rates` | same | Sabre Hospitality's SynXis switch verifies committed rates against the hotel's live CRS inventory at booking time, implementing the last-look validation pattern. |

# Related
- [Rate Parity](/lodging/hotel-dist/rate-parity.md) — related
- [Rate Leakage](/lodging/hotel-dist/rate-leakage.md) — related
- [CRS](/common/standards/crs.md) — related
- [GDS](/common/standards/gds.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related

# Distinctions
- **Last Look** vs [Rate Parity](/lodging/hotel-dist/rate-parity.md) — Rate parity is the contractual obligation for a hotel to offer the same price across all distribution channels; last look is the technical mechanism that enforces real-time rate accuracy at booking, preventing a GDS channel from accidentally transacting at a stale lower price.
- **Last Look** vs [Rate Leakage](/lodging/hotel-dist/rate-leakage.md) — Rate leakage is the outcome — a hotel's contracted rates appearing in unauthorized channels below the intended price; last look is the preventive control that avoids rate leakage by validating the price against the live CRS at the moment a booking is confirmed.
- **Last Look** vs [Channel Manager](/lodging/hotel-dist/channel-manager.md) — A channel manager pushes rate and availability updates from the hotel's PMS or RMS out to distribution channels in real time; last look is a pull-based validation at booking time, complementing channel-manager pushes by catching any gaps between the last push and the booking moment.

# Citations
[1] [Hotel Electronic Distribution Network Association (HEDNA) — HEDNA Global Distribution Technology Manual](https://hedna.org/)
[2] [OpenTravel Alliance — OpenTravel Alliance — OTA_HotelAvailGetRS / Last Look Availability Response](https://opentravel.org/download-specs/)
