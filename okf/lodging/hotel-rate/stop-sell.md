---
type: Standard Term
title: Stop Sell
description: 'A stop sell is a hard close that prevents a hotel from selling a given room type and/or rate plan for specified dates across one or more channels, regardless of remaining physical inventory. It is a yield and overbooking control applied through the channel manager or CRS and distributed as an availability restriction.'
tags:
  - hotel-rate
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: stop-sell
vertical: lodging
category: hotel-rate
conceptType: standard-term
status: active
term_ko: Stop Sell (판매 중지)
definition_ko: 'Stop Sell(판매 중지)은 잔여 실물 재고와 무관하게 특정 객실 타입 및/또는 요금제를 지정한 날짜에 하나 이상의 채널에서 판매하지 못하도록 막는 하드 클로즈(hard close)다. 채널 매니저나 CRS를 통해 적용하는 수익·오버부킹 통제 수단이며, availability 제약으로 유통된다.'
longDef: 'Stop sell is one of the core availability restrictions exchanged via OpenTravel ARI messages: in OTA_HotelAvailNotifRQ it is expressed with a RestrictionStatus element carrying Status="Close" (sometimes called close-for-sale), and it operates independently of the length-of-stay and arrival/departure restrictions (MinLOS, ClosedToArrival, ClosedToDeparture). Because it overrides available inventory, stop sell is typically managed centrally through the channel manager so that the close is mirrored on every connected channel; changes made directly in a downstream system risk being overwritten on the next ARI push. Hotels use stop sells to protect against overselling, to hold inventory for higher-yielding demand, or to suspend a specific rate plan while leaving others open.'
longDef_ko: 'Stop Sell은 OpenTravel ARI 메시지로 교환되는 핵심 availability 제약 중 하나다. OTA_HotelAvailNotifRQ에서는 Status="Close"를 담은 RestrictionStatus 요소로 표현되며(close-for-sale로도 불림), 투숙기간·도착/출발 제약(MinLOS, ClosedToArrival, ClosedToDeparture)과 독립적으로 작동한다. 가용 재고를 무시하고 우선하므로 통상 채널 매니저에서 중앙 관리하여 연결된 모든 채널에 동일하게 반영하며, 하위 시스템에서 직접 변경하면 다음 ARI 푸시 때 덮어쓰일 수 있다. 호텔은 오버셀 방지, 고수익 수요를 위한 재고 보존, 또는 특정 요금제만 일시 중단(다른 요금제는 유지)하기 위해 stop sell을 사용한다.'
standardBody: OpenTravel Alliance
aliases:
  - Stop Sale
  - Close Out
  - Closed for Sale
  - CFS
providerTerms:
  - provider: OpenTravel Alliance
    term: RestrictionStatus Status="Close"
    context: 'In OTA_HotelAvailNotifRQ a stop sell is sent as RestrictionStatus with Status="Close", independent of MinLOS/CTA/CTD restrictions.'
    context_ko: OTA_HotelAvailNotifRQ에서 stop sell은 Status="Close"인 RestrictionStatus로 전송되며 MinLOS/CTA/CTD 제약과 독립적이다.
    relationship: same
  - provider: Oracle OPERA
    term: Close (rate/room restriction)
    context: 'OPERA closes a rate code and/or room type for dates via rate strategy/availability restrictions, preventing sale regardless of physical inventory.'
    context_ko: OPERA는 rate strategy/availability 제한으로 일자별 요금코드·룸타입을 Close해 물리 재고와 무관하게 판매를 막는다.
    relationship: same
  - provider: Booking.com
    term: Closed restriction (Status="Close")
    context: Booking.com applies a Closed restriction at rate-plan level so reservations can't be created for that date across the channel.
    context_ko: Booking.com은 요금제 레벨에 Closed 제한을 적용해 해당 일자에 채널 전반에서 예약 생성을 막는다.
    relationship: same
relationships:
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Channel Manager
  - type: contrasts
    targetTerm: Overbooking
  - type: contrasts
    targetTerm: Minimum Length of Stay (MLOS)
  - type: contrasts
    targetTerm: Free Sale
distinctions:
  - targetTerm: Free Sale
    explanation: 'Free Sale lets a channel keep selling a product without confirming real-time inventory; Stop Sell is the opposite action, forcibly closing sales for the dates and products it covers regardless of inventory.'
    explanation_ko: 'Free Sale는 실시간 재고 확인 없이 채널이 상품을 계속 판매하도록 허용하지만, Stop Sell은 그 반대로 해당 날짜·상품의 판매를 재고와 무관하게 강제로 마감한다.'
  - targetTerm: Minimum Length of Stay (MLOS)
    explanation: MLOS conditionally blocks only stays shorter than a threshold; Stop Sell unconditionally blocks all new bookings for the affected dates and products.
    explanation_ko: 'MLOS는 기준 미만 투숙만 조건부로 차단하지만, Stop Sell은 해당 날짜·상품의 모든 신규 예약을 무조건 차단한다.'
  - targetTerm: Closed to Arrival (CTA)
    explanation: A stop sell closes a date to all sale entirely; CTA closes only new arrivals on that date while still allowing through-stays and (unlike stop sell) does not block bookings that merely span the date.
    explanation_ko: 'Stop Sell은 해당 날짜를 모든 판매에 대해 완전히 닫고, CTA는 그 날짜의 신규 도착만 막을 뿐 through-stay는 허용하며 (stop sell과 달리) 단순히 그 날짜를 걸쳐 지나가는 예약은 막지 않는다.'
  - targetTerm: Last Room Availability
    explanation: 'A stop sell closes a rate or room type entirely; LRA is the guarantee that the negotiated rate will NOT be stopped/closed out as long as the room type is sellable, whereas NLRA permits exactly such selective close-outs.'
    explanation_ko: 'Stop sell은 요금이나 객실 유형을 완전히 닫는 것이고, LRA는 객실 유형이 판매 가능한 한 협상 요금이 중단/마감되지 않도록 하는 보장이며, NLRA는 바로 그런 선택적 마감을 허용한다.'
  - targetTerm: Last Room Availability (LRA)
    explanation: 'A stop sell closes a rate or room from sale; an LRA guarantee specifically restrains the hotel from applying a stop sell to the negotiated rate while inventory remains, whereas NLRA permits exactly that.'
    explanation_ko: 'Stop Sell은 요금·객실을 판매 중지시키고, LRA 보장은 재고가 남아 있는 동안 호텔이 협정 요금에 stop sell을 적용하지 못하도록 특별히 제한한다. NLRA는 바로 그것을 허용한다.'
sources:
  - org: OpenTravel Alliance
    name: OTA_HotelAvailNotifRQ (RestrictionStatus / Status=Close)
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
  - org: SiteMinder
    name: pmsXchange — Availability and Restrictions
    version: ''
    section: ''
    url: 'https://developer.siteminder.com/siteminder-apis/pms-rms/introduction/pmsxchange/api-reference/availability-and-restrictions'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="16"/><path d="M13 13l22 22"/></svg>
---

> A stop sell is a hard close that prevents a hotel from selling a given room type and/or rate plan for specified dates across one or more channels, regardless of remaining physical inventory. It is a yield and overbooking control applied through the channel manager or CRS and distributed as an availability restriction.

Stop sell is one of the core availability restrictions exchanged via OpenTravel ARI messages: in OTA_HotelAvailNotifRQ it is expressed with a RestrictionStatus element carrying Status="Close" (sometimes called close-for-sale), and it operates independently of the length-of-stay and arrival/departure restrictions (MinLOS, ClosedToArrival, ClosedToDeparture). Because it overrides available inventory, stop sell is typically managed centrally through the channel manager so that the close is mirrored on every connected channel; changes made directly in a downstream system risk being overwritten on the next ARI push. Hotels use stop sells to protect against overselling, to hold inventory for higher-yielding demand, or to suspend a specific rate plan while leaving others open.

**한국어 / Korean** — **Stop Sell (판매 중지)** — Stop Sell(판매 중지)은 잔여 실물 재고와 무관하게 특정 객실 타입 및/또는 요금제를 지정한 날짜에 하나 이상의 채널에서 판매하지 못하도록 막는 하드 클로즈(hard close)다. 채널 매니저나 CRS를 통해 적용하는 수익·오버부킹 통제 수단이며, availability 제약으로 유통된다.

Stop Sell은 OpenTravel ARI 메시지로 교환되는 핵심 availability 제약 중 하나다. OTA_HotelAvailNotifRQ에서는 Status="Close"를 담은 RestrictionStatus 요소로 표현되며(close-for-sale로도 불림), 투숙기간·도착/출발 제약(MinLOS, ClosedToArrival, ClosedToDeparture)과 독립적으로 작동한다. 가용 재고를 무시하고 우선하므로 통상 채널 매니저에서 중앙 관리하여 연결된 모든 채널에 동일하게 반영하며, 하위 시스템에서 직접 변경하면 다음 ARI 푸시 때 덮어쓰일 수 있다. 호텔은 오버셀 방지, 고수익 수요를 위한 재고 보존, 또는 특정 요금제만 일시 중단(다른 요금제는 유지)하기 위해 stop sell을 사용한다.

**Aliases:** `Stop Sale`, `Close Out`, `Closed for Sale`, `CFS`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OpenTravel Alliance | `RestrictionStatus Status="Close"` | same | In OTA_HotelAvailNotifRQ a stop sell is sent as RestrictionStatus with Status="Close", independent of MinLOS/CTA/CTD restrictions. |
| Oracle OPERA | `Close (rate/room restriction)` | same | OPERA closes a rate code and/or room type for dates via rate strategy/availability restrictions, preventing sale regardless of physical inventory. |
| Booking.com | `Closed restriction (Status="Close")` | same | Booking.com applies a Closed restriction at rate-plan level so reservations can't be created for that date across the channel. |

# Related
- [Availability](/air/air-shop/availability.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — contrasts
- [Minimum Length of Stay (MLOS)](/lodging/hotel-rate/minimum-length-of-stay-mlos.md) — contrasts
- [Free Sale](/lodging/hotel-dist/free-sale.md) — contrasts

# Distinctions
- **Stop Sell** vs [Free Sale](/lodging/hotel-dist/free-sale.md) — Free Sale lets a channel keep selling a product without confirming real-time inventory; Stop Sell is the opposite action, forcibly closing sales for the dates and products it covers regardless of inventory.
- **Stop Sell** vs [Minimum Length of Stay (MLOS)](/lodging/hotel-rate/minimum-length-of-stay-mlos.md) — MLOS conditionally blocks only stays shorter than a threshold; Stop Sell unconditionally blocks all new bookings for the affected dates and products.
- **Stop Sell** vs [Closed to Arrival (CTA)](/lodging/hotel-rate/closed-to-arrival-cta.md) — A stop sell closes a date to all sale entirely; CTA closes only new arrivals on that date while still allowing through-stays and (unlike stop sell) does not block bookings that merely span the date.
- **Stop Sell** vs [Last Room Availability](/lodging/hotel-dist/last-room-availability.md) — A stop sell closes a rate or room type entirely; LRA is the guarantee that the negotiated rate will NOT be stopped/closed out as long as the room type is sellable, whereas NLRA permits exactly such selective close-outs.
- **Stop Sell** vs [Last Room Availability (LRA)](/lodging/hotel-rate/last-room-availability-lra.md) — A stop sell closes a rate or room from sale; an LRA guarantee specifically restrains the hotel from applying a stop sell to the negotiated rate while inventory remains, whereas NLRA permits exactly that.

# Citations
[1] [OpenTravel Alliance — OTA_HotelAvailNotifRQ (RestrictionStatus / Status=Close)](https://opentravel.org/download-specs/)
[2] [SiteMinder — pmsXchange — Availability and Restrictions](https://developer.siteminder.com/siteminder-apis/pms-rms/introduction/pmsxchange/api-reference/availability-and-restrictions)
