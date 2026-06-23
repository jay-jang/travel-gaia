---
type: Standard
title: Reservation Notification Message (OTA_HotelResNotif)
description: 'The Reservation Notification Message (OTA_HotelResNotif) is the OpenTravel-standard XML message pair that pushes a new, modified, or cancelled hotel reservation from a source system (OTA, channel manager, or CRS) to the property''s downstream system (PMS, RMS, CRM). The OTA_HotelResNotifRQ delivers the booking and the OTA_HotelResNotifRS acknowledges receipt or returns errors.'
tags:
  - hotel-dist
  - active
  - OpenTravel Alliance
timestamp: '2026-06-18T00:00:00Z'
id: reservation-notification-message
vertical: lodging
category: hotel-dist
conceptType: standard
status: active
abbreviation: OTA_HotelResNotif
term_ko: 예약 통지 메시지(OTA_HotelResNotif)
definition_ko: 'Reservation Notification Message(OTA_HotelResNotif, 예약 통지 메시지)는 신규·변경·취소된 호텔 예약을 출처 시스템(OTA, Channel Manager, CRS)에서 호텔의 하류 시스템(PMS, RMS, CRM)으로 푸시하는 OpenTravel 표준 XML 메시지 쌍이다. OTA_HotelResNotifRQ는 예약을 전달하고, OTA_HotelResNotifRS는 수신 확인 또는 오류를 반환한다.'
longDef: 'OTA_HotelResNotif is a core connectivity primitive in the OpenTravel Alliance hotel message set. Where availability and rates flow toward the channel via OTA_HotelAvailNotif and OTA_HotelRatePlanNotif (the ARI direction), the reservation flows back toward the hotel via OTA_HotelResNotif, completing the two-way exchange that lets a hotel sell on a channel and have the booking land automatically in its operational systems. Each message carries one reservation for a single hotel and is request/response: the RQ contains the full reservation (guest, stay dates, room/rate, payment), and the RS returns an acknowledgement, business-rule warnings, or errors. OTAs such as Booking.com and Expedia Group expose booking-notification APIs based on this pattern, and CRSs deliver reservations to PMSs the same way. Because it is the standardized way bookings are pushed rather than polled, it underpins reliable, near-real-time delivery of OTA and GDS reservations into the property.'
longDef_ko: 'OTA_HotelResNotif는 OpenTravel Alliance 호텔 메시지 집합의 핵심 연결 기본 요소다. 가용성과 요금이 OTA_HotelAvailNotif와 OTA_HotelRatePlanNotif(ARI 방향)를 통해 채널로 흐르는 반면, 예약은 OTA_HotelResNotif를 통해 호텔 쪽으로 되돌아 흐르며, 호텔이 채널에서 판매하고 그 예약이 운영 시스템에 자동으로 안착하게 하는 양방향 교환을 완성한다. 각 메시지는 단일 호텔의 예약 하나를 담는 요청/응답 방식으로, RQ는 전체 예약(고객, 투숙 일자, 객실/요금, 결제)을 담고 RS는 수신 확인, 비즈니스 규칙 경고 또는 오류를 반환한다. Booking.com·Expedia Group 같은 OTA는 이 패턴에 기반한 예약 통지 API를 제공하며, CRS도 같은 방식으로 PMS에 예약을 전달한다. 예약이 폴링(polling)이 아니라 푸시되는 표준 방식이므로, OTA·GDS 예약을 호텔로 안정적이고 거의 실시간으로 전달하는 기반이 된다.'
standardBody: OpenTravel Alliance
aliases:
  - OTA_HotelResNotif
  - OTA_HotelResNotifRQ
  - HotelResNotif
  - Reservation Push
  - Booking Notification
providerTerms:
  - provider: Expedia Group
    term: Booking Notification API (OTA_HotelResNotifRQ/RS)
    context: Expedia Group's Booking Notification API uses the OTA_HotelResNotifRQ/RS message pair to send traveler reservations from Expedia to the property's system and receive acknowledgement.
    context_ko: Expedia Group의 Booking Notification API는 OTA_HotelResNotifRQ/RS 메시지 쌍을 사용해 여행자 예약을 Expedia에서 호텔 시스템으로 전송하고 수신 확인을 받는다.
    relationship: narrower
  - provider: Booking.com
    term: Reservations API (ota-resnotif)
    context: Booking.com's Reservations API exposes an OTA_HotelResNotif endpoint to retrieve and acknowledge new reservations following the OpenTravel specification.
    context_ko: Booking.com의 Reservations API는 OpenTravel 사양을 따르는 OTA_HotelResNotif 엔드포인트를 제공해 신규 예약을 조회하고 수신 확인한다.
    relationship: narrower
relationships:
  - type: related
    targetTerm: OpenTravel Alliance
  - type: related
    targetTerm: Two-Way XML
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: PMS
  - type: related
    targetTerm: HTNG
distinctions:
  - targetTerm: Two-Way XML
    explanation: Two-Way XML is the general concept of bidirectional XML data exchange between distribution systems; OTA_HotelResNotif is one specific OpenTravel message—the reservation-push leg—that implements part of that two-way flow.
    explanation_ko: 'Two-Way XML은 유통 시스템 간 양방향 XML 데이터 교환이라는 일반 개념이고, OTA_HotelResNotif는 그 양방향 흐름의 일부(예약 푸시 구간)를 구현하는 구체적인 OpenTravel 메시지 하나다.'
  - targetTerm: ARI
    explanation: 'ARI (Availability, Rates, Inventory) and its OpenTravel messages (HotelAvailNotif, HotelRatePlanNotif) flow from the hotel toward the channel; OTA_HotelResNotif flows the opposite way, carrying the resulting reservation back to the hotel.'
    explanation_ko: 'ARI(가용성·요금·인벤토리)와 그 OpenTravel 메시지(HotelAvailNotif, HotelRatePlanNotif)는 호텔에서 채널로 흐르고, OTA_HotelResNotif는 그 반대로 결과 예약을 호텔로 되돌려 전달한다.'
sources:
  - org: Booking.com
    name: Retrieving new reservations (OTA_HotelResNotif)
    version: ''
    section: ''
    url: 'https://developers.booking.com/connectivity/docs/reservations-api/retrieving-new-reservations-ota'
    tier: vendor-doc
  - org: RateGain
    name: OTA_HotelResNotifRQ — Developer Docs
    version: ''
    section: ''
    url: 'https://developer.rategain.com/our-products/channel-manager/direct-connect-demand-push/interface-specifications-reservation-notification-service/operation-reservation/ota_hotelresnotifrq'
    tier: vendor-doc
  - org: OpenTravel Alliance
    name: OpenTravel 2014A Message Users Guide
    version: 2014A
    section: OTA_HotelResNotifRQ/RS
    url: 'https://www.opentraveldevelopersnetwork.com/sites/default/files/OpenTravel_2014A_Message_Users_Guide.pdf'
    tier: association
    verifyQuote: 'Message Users Guide — 2014A, Version 1, June 2014. OTA_HotelResNotifRQ/RS … The initiating system sends a report using the OTA_HotelResNotifRQ message.'
    verified: true
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="36" height="26" rx="2"/><path d="M6 16l18 12 18-12"/><circle cx="38" cy="12" r="5" fill="currentColor" stroke="none"/></svg>
---

> The Reservation Notification Message (OTA_HotelResNotif) is the OpenTravel-standard XML message pair that pushes a new, modified, or cancelled hotel reservation from a source system (OTA, channel manager, or CRS) to the property's downstream system (PMS, RMS, CRM). The OTA_HotelResNotifRQ delivers the booking and the OTA_HotelResNotifRS acknowledges receipt or returns errors.

OTA_HotelResNotif is a core connectivity primitive in the OpenTravel Alliance hotel message set. Where availability and rates flow toward the channel via OTA_HotelAvailNotif and OTA_HotelRatePlanNotif (the ARI direction), the reservation flows back toward the hotel via OTA_HotelResNotif, completing the two-way exchange that lets a hotel sell on a channel and have the booking land automatically in its operational systems. Each message carries one reservation for a single hotel and is request/response: the RQ contains the full reservation (guest, stay dates, room/rate, payment), and the RS returns an acknowledgement, business-rule warnings, or errors. OTAs such as Booking.com and Expedia Group expose booking-notification APIs based on this pattern, and CRSs deliver reservations to PMSs the same way. Because it is the standardized way bookings are pushed rather than polled, it underpins reliable, near-real-time delivery of OTA and GDS reservations into the property.

**한국어 / Korean** — **예약 통지 메시지(OTA_HotelResNotif)** — Reservation Notification Message(OTA_HotelResNotif, 예약 통지 메시지)는 신규·변경·취소된 호텔 예약을 출처 시스템(OTA, Channel Manager, CRS)에서 호텔의 하류 시스템(PMS, RMS, CRM)으로 푸시하는 OpenTravel 표준 XML 메시지 쌍이다. OTA_HotelResNotifRQ는 예약을 전달하고, OTA_HotelResNotifRS는 수신 확인 또는 오류를 반환한다.

OTA_HotelResNotif는 OpenTravel Alliance 호텔 메시지 집합의 핵심 연결 기본 요소다. 가용성과 요금이 OTA_HotelAvailNotif와 OTA_HotelRatePlanNotif(ARI 방향)를 통해 채널로 흐르는 반면, 예약은 OTA_HotelResNotif를 통해 호텔 쪽으로 되돌아 흐르며, 호텔이 채널에서 판매하고 그 예약이 운영 시스템에 자동으로 안착하게 하는 양방향 교환을 완성한다. 각 메시지는 단일 호텔의 예약 하나를 담는 요청/응답 방식으로, RQ는 전체 예약(고객, 투숙 일자, 객실/요금, 결제)을 담고 RS는 수신 확인, 비즈니스 규칙 경고 또는 오류를 반환한다. Booking.com·Expedia Group 같은 OTA는 이 패턴에 기반한 예약 통지 API를 제공하며, CRS도 같은 방식으로 PMS에 예약을 전달한다. 예약이 폴링(polling)이 아니라 푸시되는 표준 방식이므로, OTA·GDS 예약을 호텔로 안정적이고 거의 실시간으로 전달하는 기반이 된다.

**Aliases:** `OTA_HotelResNotif`, `OTA_HotelResNotifRQ`, `HotelResNotif`, `Reservation Push`, `Booking Notification`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Expedia Group | `Booking Notification API (OTA_HotelResNotifRQ/RS)` | narrower | Expedia Group's Booking Notification API uses the OTA_HotelResNotifRQ/RS message pair to send traveler reservations from Expedia to the property's system and receive acknowledgement. |
| Booking.com | `Reservations API (ota-resnotif)` | narrower | Booking.com's Reservations API exposes an OTA_HotelResNotif endpoint to retrieve and acknowledge new reservations following the OpenTravel specification. |

# Related
- [OpenTravel Alliance](/common/standards/opentravel-alliance.md) — related
- [Two-Way XML](/lodging/hotel-dist/two-way-xml.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [PMS](/lodging/hotel-dist/pms.md) — related
- [HTNG](/common/standards/htng.md) — related

# Distinctions
- **Reservation Notification Message (OTA_HotelResNotif)** vs [Two-Way XML](/lodging/hotel-dist/two-way-xml.md) — Two-Way XML is the general concept of bidirectional XML data exchange between distribution systems; OTA_HotelResNotif is one specific OpenTravel message—the reservation-push leg—that implements part of that two-way flow.
- **Reservation Notification Message (OTA_HotelResNotif)** vs [ARI](/lodging/hotel-dist/ari.md) — ARI (Availability, Rates, Inventory) and its OpenTravel messages (HotelAvailNotif, HotelRatePlanNotif) flow from the hotel toward the channel; OTA_HotelResNotif flows the opposite way, carrying the resulting reservation back to the hotel.

# Citations
[1] [Booking.com — Retrieving new reservations (OTA_HotelResNotif)](https://developers.booking.com/connectivity/docs/reservations-api/retrieving-new-reservations-ota)
[2] [RateGain — OTA_HotelResNotifRQ — Developer Docs](https://developer.rategain.com/our-products/channel-manager/direct-connect-demand-push/interface-specifications-reservation-notification-service/operation-reservation/ota_hotelresnotifrq)
[3] [OpenTravel Alliance — OpenTravel 2014A Message Users Guide — 2014A — OTA_HotelResNotifRQ/RS](https://www.opentraveldevelopersnetwork.com/sites/default/files/OpenTravel_2014A_Message_Users_Guide.pdf)
