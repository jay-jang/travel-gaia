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
relationships:
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: Overbooking
  - type: related
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
sources:
  - org: OpenTravel Alliance
    name: OTA_HotelAvailNotifRQ (RestrictionStatus / Status=Close)
    version: ''
    section: ''
    url: ''
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

# Related
- [Availability](/air-shop/availability.md) — related
- [ARI](/hotel-dist/ari.md) — related
- [Channel Manager](/hotel-dist/channel-manager.md) — related
- [Overbooking](/air-shop/overbooking.md) — related
- [Minimum Length of Stay (MLOS)](/hotel-rate/minimum-length-of-stay-mlos.md) — related
- [Free Sale](/hotel-dist/free-sale.md) — contrasts

# Distinctions
- **Stop Sell** vs [Free Sale](/hotel-dist/free-sale.md) — Free Sale lets a channel keep selling a product without confirming real-time inventory; Stop Sell is the opposite action, forcibly closing sales for the dates and products it covers regardless of inventory.
- **Stop Sell** vs [Minimum Length of Stay (MLOS)](/hotel-rate/minimum-length-of-stay-mlos.md) — MLOS conditionally blocks only stays shorter than a threshold; Stop Sell unconditionally blocks all new bookings for the affected dates and products.

# Citations
[1] OpenTravel Alliance — OTA_HotelAvailNotifRQ (RestrictionStatus / Status=Close)
[2] [SiteMinder — pmsXchange — Availability and Restrictions](https://developer.siteminder.com/siteminder-apis/pms-rms/introduction/pmsxchange/api-reference/availability-and-restrictions)
