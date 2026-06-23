---
type: Business Term
title: Booking Engine
description: 'A booking engine (internet booking engine, IBE) is the software on a hotel''s website or app that lets a guest check real-time availability, select a room type and rate, and complete a reservation with payment without leaving the hotel''s own channel. It is the transaction processor of the direct channel, drawing live availability and rates from the CRS or PMS.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: booking-engine
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
abbreviation: IBE
term_ko: 부킹 엔진 (Booking Engine / IBE)
definition_ko: '부킹 엔진(internet booking engine, IBE)은 호텔 웹사이트나 앱에 탑재되어 투숙객이 호텔 자체 채널을 떠나지 않고 실시간 가용성을 확인하고 객실 유형·요금을 선택해 결제까지 완료할 수 있게 하는 소프트웨어다. 직접 채널의 거래 처리기 역할을 하며, CRS 또는 PMS에서 실시간 가용성·요금을 가져온다.'
longDef: 'The booking engine sits between the guest-facing interface and back-end inventory. A search (dates, occupancy, room type) is sent to the engine, which requests real-time availability and pricing from the CRS/PMS, presents bookable room types and rate plans, and on confirmation writes the reservation back and captures payment (often via an integrated payment gateway and guarantee handling). It is the primary tool for driving direct bookings and reducing dependence on high-commission OTAs, and it typically integrates with the channel manager, payment processing, and loyalty/CRM systems. While ''IBE'' is used broadly across travel (flights, packages), in the hotel context it denotes the property''s or chain''s own direct-sale engine.'
longDef_ko: '부킹 엔진은 고객 대면 인터페이스와 백엔드 재고 사이에 위치한다. 검색(날짜, 인원, 객실 유형)이 엔진으로 전달되면 엔진은 CRS/PMS에서 실시간 가용성·가격을 요청하고, 예약 가능한 객실 유형·요금 플랜을 보여주며, 확정 시 예약을 다시 기록하고 결제를 처리한다(흔히 통합 결제 게이트웨이와 guarantee 처리 경유). 직접 예약을 늘리고 고수수료 OTA 의존을 줄이는 핵심 도구이며, 일반적으로 채널 매니저, 결제 처리, 로열티/CRM 시스템과 연동된다. ''IBE''는 여행 전반(항공, 패키지)에서 폭넓게 쓰이지만, 호텔 맥락에서는 해당 호텔이나 체인의 직접 판매 엔진을 가리킨다.'
aliases:
  - Internet Booking Engine
  - Online Booking Engine
  - OBE
  - Hotel Booking Engine
relationships:
  - type: related
    targetTerm: Direct Booking
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: PMS
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: Distribution Cost
  - type: related
    targetTerm: Merchant of Record
distinctions:
  - targetTerm: CRS
    explanation: The CRS is the central system that holds and distributes a hotel's inventory and rates across all channels; the booking engine is the guest-facing front end of the direct channel that queries the CRS and creates direct reservations.
    explanation_ko: 'CRS는 호텔의 재고·요금을 보유하고 전 채널에 유통하는 중앙 시스템이고, 부킹 엔진은 CRS를 조회하여 직접 예약을 생성하는 직접 채널의 고객 대면 프런트엔드다.'
  - targetTerm: Channel Manager
    explanation: 'A channel manager distributes ARI outbound to many third-party channels; the booking engine sells inbound on the hotel''s own direct channel. They are complementary, not the same.'
    explanation_ko: '채널 매니저는 ARI를 다수의 제3자 채널로 외부 유통하고, 부킹 엔진은 호텔 자체 직접 채널에서 판매를 받아들인다. 둘은 상호 보완적이며 동일하지 않다.'
  - targetTerm: Direct Booking
    explanation: 'The booking engine is the software tool that processes a direct online reservation; direct booking is the resulting transaction/channel concept, of which the booking engine is the primary enabler.'
    explanation_ko: 'Booking engine은 온라인 직접 예약을 처리하는 소프트웨어 도구이고, 다이렉트 부킹은 그 결과로 발생하는 거래/채널 개념으로 booking engine이 이를 가능하게 하는 핵심 수단이다.'
sources:
  - org: AltexSoft
    name: Booking engine — Glossary
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/glossary/booking-engine/'
    tier: secondary
  - org: RateGain
    name: 'Internet Booking Engine for Hotels: A Direct Booking Guide'
    version: ''
    section: ''
    url: 'https://rategain.com/blog/internet-booking-engines-for-hotels/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="9" width="34" height="26" rx="2"/><line x1="7" y1="16" x2="41" y2="16"/><line x1="18" y1="39" x2="30" y2="39"/><line x1="24" y1="35" x2="24" y2="39"/><rect x="13" y="21" width="9" height="8" rx="1"/><path d="M27 23h8M27 27h6"/></svg>
---

> A booking engine (internet booking engine, IBE) is the software on a hotel's website or app that lets a guest check real-time availability, select a room type and rate, and complete a reservation with payment without leaving the hotel's own channel. It is the transaction processor of the direct channel, drawing live availability and rates from the CRS or PMS.

The booking engine sits between the guest-facing interface and back-end inventory. A search (dates, occupancy, room type) is sent to the engine, which requests real-time availability and pricing from the CRS/PMS, presents bookable room types and rate plans, and on confirmation writes the reservation back and captures payment (often via an integrated payment gateway and guarantee handling). It is the primary tool for driving direct bookings and reducing dependence on high-commission OTAs, and it typically integrates with the channel manager, payment processing, and loyalty/CRM systems. While 'IBE' is used broadly across travel (flights, packages), in the hotel context it denotes the property's or chain's own direct-sale engine.

**한국어 / Korean** — **부킹 엔진 (Booking Engine / IBE)** — 부킹 엔진(internet booking engine, IBE)은 호텔 웹사이트나 앱에 탑재되어 투숙객이 호텔 자체 채널을 떠나지 않고 실시간 가용성을 확인하고 객실 유형·요금을 선택해 결제까지 완료할 수 있게 하는 소프트웨어다. 직접 채널의 거래 처리기 역할을 하며, CRS 또는 PMS에서 실시간 가용성·요금을 가져온다.

부킹 엔진은 고객 대면 인터페이스와 백엔드 재고 사이에 위치한다. 검색(날짜, 인원, 객실 유형)이 엔진으로 전달되면 엔진은 CRS/PMS에서 실시간 가용성·가격을 요청하고, 예약 가능한 객실 유형·요금 플랜을 보여주며, 확정 시 예약을 다시 기록하고 결제를 처리한다(흔히 통합 결제 게이트웨이와 guarantee 처리 경유). 직접 예약을 늘리고 고수수료 OTA 의존을 줄이는 핵심 도구이며, 일반적으로 채널 매니저, 결제 처리, 로열티/CRM 시스템과 연동된다. 'IBE'는 여행 전반(항공, 패키지)에서 폭넓게 쓰이지만, 호텔 맥락에서는 해당 호텔이나 체인의 직접 판매 엔진을 가리킨다.

**Aliases:** `Internet Booking Engine`, `Online Booking Engine`, `OBE`, `Hotel Booking Engine`

# Related
- [Direct Booking](/lodging/hotel-dist/direct-booking.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [PMS](/lodging/hotel-dist/pms.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [Distribution Cost](/lodging/hotel-dist/distribution-cost.md) — related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related

# Distinctions
- **Booking Engine** vs [CRS](/lodging/hotel-dist/crs.md) — The CRS is the central system that holds and distributes a hotel's inventory and rates across all channels; the booking engine is the guest-facing front end of the direct channel that queries the CRS and creates direct reservations.
- **Booking Engine** vs [Channel Manager](/lodging/hotel-dist/channel-manager.md) — A channel manager distributes ARI outbound to many third-party channels; the booking engine sells inbound on the hotel's own direct channel. They are complementary, not the same.
- **Booking Engine** vs [Direct Booking](/lodging/hotel-dist/direct-booking.md) — The booking engine is the software tool that processes a direct online reservation; direct booking is the resulting transaction/channel concept, of which the booking engine is the primary enabler.

# Citations
[1] [AltexSoft — Booking engine — Glossary](https://www.altexsoft.com/glossary/booking-engine/)
[2] [RateGain — Internet Booking Engine for Hotels: A Direct Booking Guide](https://rategain.com/blog/internet-booking-engines-for-hotels/)
