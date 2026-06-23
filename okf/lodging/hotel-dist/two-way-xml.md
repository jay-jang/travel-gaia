---
type: Standard Term
title: Two-Way XML
description: 'Two-way XML is a bidirectional connectivity model in which a hotel system and a distribution channel exchange ARI updates outbound and receive reservation, modification, and cancellation messages inbound over the same XML interface — typically using OpenTravel/HTNG message schemas. The ''two-way'' contrast is with one-way connections that only push availability and rates without automatically pulling bookings back.'
tags:
  - hotel-dist
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: two-way-xml
vertical: lodging
category: hotel-dist
conceptType: standard-term
status: active
abbreviation: 2-Way XML
term_ko: 양방향 XML (Two-Way XML)
definition_ko: '양방향 XML은 호텔 시스템과 유통 채널이 동일한 XML 인터페이스를 통해 ARI 업데이트를 외부로 보내고 예약·변경·취소 메시지를 내부로 받는 양방향 연동 모델로, 보통 OpenTravel/HTNG 메시지 스키마를 사용한다. ''양방향''이라는 표현은 가용성·요금만 push하고 예약을 자동으로 가져오지 않는 단방향(one-way) 연결과 대비된다.'
longDef: 'In hotel distribution, connectivity is described by directionality. A one-way connection sends rates and inventory out to a channel but requires bookings to be retrieved manually or via a separate process. A two-way XML connection automates both directions: ARI updates flow from the CRS/PMS/channel manager to the channel, and the channel returns booking, amendment, and cancellation notifications that are written straight back into the hotel system — reducing manual re-keying, overbookings, and rate errors. The XML payloads are commonly based on OpenTravel Alliance specifications (e.g. the OTA_Hotel* messages) and HTNG implementation profiles, which standardize the request/response structures used across switches, channel managers, OTAs, and GDSs.'
longDef_ko: '호텔 유통에서 연동은 방향성으로 설명된다. 단방향 연결은 요금·재고를 채널로 내보내지만 예약은 수작업이나 별도 프로세스로 가져와야 한다. 양방향 XML 연결은 두 방향을 모두 자동화한다. ARI 업데이트가 CRS/PMS/채널 매니저에서 채널로 흐르고, 채널은 예약·수정·취소 알림을 호텔 시스템에 바로 기록되도록 반환한다. 이로써 수기 재입력, 오버부킹, 요금 오류가 줄어든다. XML 페이로드는 흔히 OpenTravel Alliance 사양(예: OTA_Hotel* 메시지)과 HTNG 구현 프로파일에 기반하며, 이는 스위치·채널 매니저·OTA·GDS 전반에서 사용되는 요청/응답 구조를 표준화한다.'
standardBody: OpenTravel Alliance
aliases:
  - Two-Way Connectivity
  - 2-Way Connection
  - Bidirectional XML
providerTerms:
  - provider: HTNG
    term: Web Services Framework (WSF) / 2-Way XML Interface
    context: 'HTNG standardized two-way XML connectivity through its Web Services Framework, registering vendor 2-Way XML interfaces that exchange ARI outbound and reservations inbound.'
    context_ko: 'HTNG은 Web Services Framework를 통해 양방향 XML 연결을 표준화했으며, ARI를 아웃바운드로 보내고 예약을 인바운드로 받는 벤더 2-Way XML 인터페이스를 등록한다.'
    relationship: same
  - provider: OpenTravel/Booking.com
    term: OTA_HotelResNotifRQ (inbound reservation push)
    context: The inbound half of two-way XML is realized as the OpenTravel HotelResNotif message that pushes new/modify/cancel reservations back to the hotel system.
    context_ko: 양방향 XML의 인바운드 절반은 신규/변경/취소 예약을 호텔 시스템으로 되돌려 푸시하는 OpenTravel HotelResNotif 메시지로 구현된다.
    relationship: narrower
  - provider: MICROS (Oracle)
    term: MICROS-Fidelio Exchange
    context: MICROS introduced an early two-way XML interface (MICROS-Fidelio Exchange) delivering single image inventory between central and property systems.
    context_ko: MICROS는 중앙과 숙소 시스템 간 단일 이미지 재고를 제공하는 초기 양방향 XML 인터페이스(MICROS-Fidelio Exchange)를 도입했다.
    relationship: related
relationships:
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: Hotel Switch
  - type: related
    targetTerm: OpenTravel Alliance
  - type: related
    targetTerm: HTNG
  - type: contrasts
    targetTerm: Free Sale
distinctions:
  - targetTerm: ARI
    explanation: ARI is the availability/rate/inventory content being exchanged; two-way XML is the bidirectional transport/protocol model over which ARI flows out and reservations flow back.
    explanation_ko: 'ARI는 교환되는 가용성·요금·재고 콘텐츠이고, 양방향 XML은 그 ARI가 나가고 예약이 돌아오는 양방향 전송/프로토콜 모델이다.'
  - targetTerm: Free Sale
    explanation: 'Free sale lets a channel sell rooms without checking live availability per request (sell-and-report), whereas two-way XML emphasizes real-time bidirectional confirmation of availability and bookings.'
    explanation_ko: 'Free sale는 채널이 요청마다 실시간 가용성을 확인하지 않고 객실을 판매하게 하는 방식(sell-and-report)인 반면, 양방향 XML은 가용성과 예약의 실시간 양방향 확인을 강조한다.'
  - targetTerm: Connectivity Partner Program
    explanation: Two-Way XML is the technical two-direction data exchange between systems; the Connectivity Partner Program is the commercial certification governing which providers are approved to use an OTA's connectivity APIs and at what tier.
    explanation_ko: 'Two-Way XML은 시스템 간 양방향 데이터 교환이라는 기술이고, Connectivity Partner Program은 어떤 제공업체가 어떤 등급으로 OTA의 연결 API 사용을 승인받는지를 규율하는 상업적 인증이다.'
  - targetTerm: Reservation Notification Message (OTA_HotelResNotif)
    explanation: Two-Way XML is the general concept of bidirectional XML data exchange between distribution systems; OTA_HotelResNotif is one specific OpenTravel message—the reservation-push leg—that implements part of that two-way flow.
    explanation_ko: 'Two-Way XML은 유통 시스템 간 양방향 XML 데이터 교환이라는 일반 개념이고, OTA_HotelResNotif는 그 양방향 흐름의 일부(예약 푸시 구간)를 구현하는 구체적인 OpenTravel 메시지 하나다.'
sources:
  - org: OpenTravel Alliance
    name: OpenTravel Hotel Messaging Specifications
    version: ''
    section: ''
    url: 'https://opentravel.org/'
  - org: AltexSoft
    name: 'Hotel Tech Specifications by HTNG, OpenTravel, and HEDNA'
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/hotel-tech-specifications-htng-opentravel/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18h28"/><path d="M31 13l5 5-5 5"/><path d="M40 30H12"/><path d="M17 25l-5 5 5 5"/></svg>
---

> Two-way XML is a bidirectional connectivity model in which a hotel system and a distribution channel exchange ARI updates outbound and receive reservation, modification, and cancellation messages inbound over the same XML interface — typically using OpenTravel/HTNG message schemas. The 'two-way' contrast is with one-way connections that only push availability and rates without automatically pulling bookings back.

In hotel distribution, connectivity is described by directionality. A one-way connection sends rates and inventory out to a channel but requires bookings to be retrieved manually or via a separate process. A two-way XML connection automates both directions: ARI updates flow from the CRS/PMS/channel manager to the channel, and the channel returns booking, amendment, and cancellation notifications that are written straight back into the hotel system — reducing manual re-keying, overbookings, and rate errors. The XML payloads are commonly based on OpenTravel Alliance specifications (e.g. the OTA_Hotel* messages) and HTNG implementation profiles, which standardize the request/response structures used across switches, channel managers, OTAs, and GDSs.

**한국어 / Korean** — **양방향 XML (Two-Way XML)** — 양방향 XML은 호텔 시스템과 유통 채널이 동일한 XML 인터페이스를 통해 ARI 업데이트를 외부로 보내고 예약·변경·취소 메시지를 내부로 받는 양방향 연동 모델로, 보통 OpenTravel/HTNG 메시지 스키마를 사용한다. '양방향'이라는 표현은 가용성·요금만 push하고 예약을 자동으로 가져오지 않는 단방향(one-way) 연결과 대비된다.

호텔 유통에서 연동은 방향성으로 설명된다. 단방향 연결은 요금·재고를 채널로 내보내지만 예약은 수작업이나 별도 프로세스로 가져와야 한다. 양방향 XML 연결은 두 방향을 모두 자동화한다. ARI 업데이트가 CRS/PMS/채널 매니저에서 채널로 흐르고, 채널은 예약·수정·취소 알림을 호텔 시스템에 바로 기록되도록 반환한다. 이로써 수기 재입력, 오버부킹, 요금 오류가 줄어든다. XML 페이로드는 흔히 OpenTravel Alliance 사양(예: OTA_Hotel* 메시지)과 HTNG 구현 프로파일에 기반하며, 이는 스위치·채널 매니저·OTA·GDS 전반에서 사용되는 요청/응답 구조를 표준화한다.

**Aliases:** `Two-Way Connectivity`, `2-Way Connection`, `Bidirectional XML`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| HTNG | `Web Services Framework (WSF) / 2-Way XML Interface` | same | HTNG standardized two-way XML connectivity through its Web Services Framework, registering vendor 2-Way XML interfaces that exchange ARI outbound and reservations inbound. |
| OpenTravel/Booking.com | `OTA_HotelResNotifRQ (inbound reservation push)` | narrower | The inbound half of two-way XML is realized as the OpenTravel HotelResNotif message that pushes new/modify/cancel reservations back to the hotel system. |
| MICROS (Oracle) | `MICROS-Fidelio Exchange` | related | MICROS introduced an early two-way XML interface (MICROS-Fidelio Exchange) delivering single image inventory between central and property systems. |

# Related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [Hotel Switch](/lodging/hotel-dist/hotel-switch.md) — related
- [OpenTravel Alliance](/common/standards/opentravel-alliance.md) — related
- [HTNG](/common/standards/htng.md) — related
- [Free Sale](/lodging/hotel-dist/free-sale.md) — contrasts

# Distinctions
- **Two-Way XML** vs [ARI](/lodging/hotel-dist/ari.md) — ARI is the availability/rate/inventory content being exchanged; two-way XML is the bidirectional transport/protocol model over which ARI flows out and reservations flow back.
- **Two-Way XML** vs [Free Sale](/lodging/hotel-dist/free-sale.md) — Free sale lets a channel sell rooms without checking live availability per request (sell-and-report), whereas two-way XML emphasizes real-time bidirectional confirmation of availability and bookings.
- **Two-Way XML** vs [Connectivity Partner Program](/lodging/hotel-dist/connectivity-partner-program.md) — Two-Way XML is the technical two-direction data exchange between systems; the Connectivity Partner Program is the commercial certification governing which providers are approved to use an OTA's connectivity APIs and at what tier.
- **Two-Way XML** vs [Reservation Notification Message (OTA_HotelResNotif)](/lodging/hotel-dist/reservation-notification-message.md) — Two-Way XML is the general concept of bidirectional XML data exchange between distribution systems; OTA_HotelResNotif is one specific OpenTravel message—the reservation-push leg—that implements part of that two-way flow.

# Citations
[1] [OpenTravel Alliance — OpenTravel Hotel Messaging Specifications](https://opentravel.org/)
[2] [AltexSoft — Hotel Tech Specifications by HTNG, OpenTravel, and HEDNA](https://www.altexsoft.com/blog/hotel-tech-specifications-htng-opentravel/)
