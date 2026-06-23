---
type: Standard Term
title: Minimum Length of Stay (MLOS)
description: Minimum Length of Stay (MLOS) is a stay restriction that requires a reservation to cover at least a defined number of nights before it can be booked for the affected dates and products. It is used to protect high-demand dates by discouraging short bookings that would block more valuable longer stays.
tags:
  - hotel-rate
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: minimum-length-of-stay-mlos
vertical: lodging
category: hotel-rate
conceptType: standard-term
status: active
abbreviation: MLOS
term_ko: 'Minimum Length of Stay (MLOS, 최소 투숙일)'
definition_ko: 'Minimum Length of Stay(MLOS, 최소 투숙일)는 해당 날짜·상품에 대해 예약이 최소 정해진 박수 이상을 포함해야만 예약될 수 있게 하는 투숙 제약이다. 더 가치 있는 장기 투숙을 막아버리는 단기 예약을 억제하여 고수요 날짜를 보호하는 데 사용된다.'
longDef: 'MLOS is one of the standard length-of-stay restrictions distributed via OpenTravel ARI messages. In OTA_HotelAvailNotifRQ it is expressed using a LengthsOfStay/LengthOfStay element with MinMaxMessageType set to "SetMinLOS" and a Time attribute giving the minimum number of nights. The restriction can be applied as MLOS arrival-based (the minimum applies to stays arriving on the date) or through-based (applied to any stay spanning the date), and it operates independently of stop sell and arrival/departure restrictions. MLOS is the lower-bound counterpart to a maximum length of stay (MaxLOS) and is a specific, machine-enforced application of the broader Length of Stay concept.'
longDef_ko: 'MLOS는 OpenTravel ARI 메시지로 유통되는 표준 length-of-stay 제약 중 하나다. OTA_HotelAvailNotifRQ에서는 MinMaxMessageType을 "SetMinLOS"로 설정한 LengthsOfStay/LengthOfStay 요소와 최소 박수를 나타내는 Time 속성으로 표현된다. 해당 날짜에 도착하는 투숙에 적용하는 arrival-based MLOS, 또는 그 날짜를 포함하는 모든 투숙에 적용하는 through-based 방식으로 설정할 수 있으며, stop sell·도착/출발 제약과 독립적으로 작동한다. MLOS는 최대 투숙일(MaxLOS)의 하한 짝이며, 더 넓은 Length of Stay 개념을 기계적으로 강제하는 구체적 적용이다.'
standardBody: OpenTravel Alliance
aliases:
  - Minimum Stay
  - Min LOS
  - MinLOS
  - Minimum Night Stay
providerTerms:
  - provider: OpenTravel Alliance
    term: LengthOfStay MinMaxMessageType="SetMinLOS"
    context: 'In OTA_HotelAvailNotifRQ, MLOS is set via a LengthOfStay element with MinMaxMessageType="SetMinLOS" and a Time attribute for the minimum nights.'
    context_ko: OTA_HotelAvailNotifRQ에서 MLOS는 MinMaxMessageType="SetMinLOS"와 최소 박수 Time 속성을 가진 LengthOfStay 요소로 설정된다.
    relationship: same
  - provider: Booking.com
    term: Minimum stay (SetMinLOS)
    context: Booking.com connectivity sets a minimum-stay restriction so a reservation must cover at least N nights on the affected dates.
    context_ko: Booking.com 커넥티비티는 해당 일자에 최소 N박을 충족해야 예약되도록 minimum-stay 제한을 설정한다.
    relationship: same
  - provider: Expedia
    term: Minimum Length of Stay (Availability & Rates API)
    context: Expedia partners must support setting minimum length-of-stay restrictions for a single date or date range as a property-level setting.
    context_ko: Expedia 파트너는 단일 일자 또는 기간에 대한 최소 숙박 제한을 property 레벨 설정으로 지원해야 한다.
    relationship: same
relationships:
  - type: child
    targetTerm: Length of Stay
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: Stop Sell
  - type: related
    targetTerm: Availability
distinctions:
  - targetTerm: Length of Stay
    explanation: Length of Stay is the general concept of how many nights a stay spans; MLOS is a specific restriction that enforces a minimum number of those nights as a booking condition for given dates.
    explanation_ko: 'Length of Stay는 투숙이 몇 박인지를 가리키는 일반 개념이고, MLOS는 특정 날짜의 예약 조건으로 그 박수의 최소값을 강제하는 구체적 제약이다.'
  - targetTerm: Stop Sell
    explanation: Stop Sell blocks all bookings for the dates; MLOS still allows bookings but only when they meet or exceed the minimum-nights threshold.
    explanation_ko: 'Stop Sell은 해당 날짜의 모든 예약을 차단하지만, MLOS는 최소 박수 기준을 충족하는 예약만 허용한다.'
  - targetTerm: Closed to Arrival (CTA)
    explanation: MLOS requires any stay touching the date to meet a minimum number of nights; CTA outright forbids arrivals on the date regardless of length. They are often used together but enforce different rules.
    explanation_ko: 'MLOS는 해당 날짜에 걸치는 숙박이 최소 박수를 충족하도록 요구하고, CTA는 길이와 무관하게 그 날짜의 도착을 아예 금지한다. 흔히 함께 쓰이지만 서로 다른 규칙을 강제한다.'
sources:
  - org: OpenTravel Alliance
    name: OTA_HotelAvailNotifRQ (LengthOfStay / SetMinLOS)
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
    tier: association
  - org: SiteMinder
    name: pmsXchange — Availability and Restrictions
    version: ''
    section: ''
    url: 'https://developer.siteminder.com/siteminder-apis/pms-rms/introduction/pmsxchange/api-reference/availability-and-restrictions'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14h32M8 24h32M8 34h32"/><circle cx="14" cy="14" r="2.5" fill="currentColor"/><circle cx="22" cy="24" r="2.5" fill="currentColor"/><path d="M30 30l4 4 6-8"/></svg>
---

> Minimum Length of Stay (MLOS) is a stay restriction that requires a reservation to cover at least a defined number of nights before it can be booked for the affected dates and products. It is used to protect high-demand dates by discouraging short bookings that would block more valuable longer stays.

MLOS is one of the standard length-of-stay restrictions distributed via OpenTravel ARI messages. In OTA_HotelAvailNotifRQ it is expressed using a LengthsOfStay/LengthOfStay element with MinMaxMessageType set to "SetMinLOS" and a Time attribute giving the minimum number of nights. The restriction can be applied as MLOS arrival-based (the minimum applies to stays arriving on the date) or through-based (applied to any stay spanning the date), and it operates independently of stop sell and arrival/departure restrictions. MLOS is the lower-bound counterpart to a maximum length of stay (MaxLOS) and is a specific, machine-enforced application of the broader Length of Stay concept.

**한국어 / Korean** — **Minimum Length of Stay (MLOS, 최소 투숙일)** — Minimum Length of Stay(MLOS, 최소 투숙일)는 해당 날짜·상품에 대해 예약이 최소 정해진 박수 이상을 포함해야만 예약될 수 있게 하는 투숙 제약이다. 더 가치 있는 장기 투숙을 막아버리는 단기 예약을 억제하여 고수요 날짜를 보호하는 데 사용된다.

MLOS는 OpenTravel ARI 메시지로 유통되는 표준 length-of-stay 제약 중 하나다. OTA_HotelAvailNotifRQ에서는 MinMaxMessageType을 "SetMinLOS"로 설정한 LengthsOfStay/LengthOfStay 요소와 최소 박수를 나타내는 Time 속성으로 표현된다. 해당 날짜에 도착하는 투숙에 적용하는 arrival-based MLOS, 또는 그 날짜를 포함하는 모든 투숙에 적용하는 through-based 방식으로 설정할 수 있으며, stop sell·도착/출발 제약과 독립적으로 작동한다. MLOS는 최대 투숙일(MaxLOS)의 하한 짝이며, 더 넓은 Length of Stay 개념을 기계적으로 강제하는 구체적 적용이다.

**Aliases:** `Minimum Stay`, `Min LOS`, `MinLOS`, `Minimum Night Stay`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OpenTravel Alliance | `LengthOfStay MinMaxMessageType="SetMinLOS"` | same | In OTA_HotelAvailNotifRQ, MLOS is set via a LengthOfStay element with MinMaxMessageType="SetMinLOS" and a Time attribute for the minimum nights. |
| Booking.com | `Minimum stay (SetMinLOS)` | same | Booking.com connectivity sets a minimum-stay restriction so a reservation must cover at least N nights on the affected dates. |
| Expedia | `Minimum Length of Stay (Availability & Rates API)` | same | Expedia partners must support setting minimum length-of-stay restrictions for a single date or date range as a property-level setting. |

# Related
- [Length of Stay](/lodging/hotel-rate/length-of-stay.md) — child
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [Stop Sell](/lodging/hotel-rate/stop-sell.md) — related
- [Availability](/air/air-shop/availability.md) — related

# Distinctions
- **Minimum Length of Stay (MLOS)** vs [Length of Stay](/lodging/hotel-rate/length-of-stay.md) — Length of Stay is the general concept of how many nights a stay spans; MLOS is a specific restriction that enforces a minimum number of those nights as a booking condition for given dates.
- **Minimum Length of Stay (MLOS)** vs [Stop Sell](/lodging/hotel-rate/stop-sell.md) — Stop Sell blocks all bookings for the dates; MLOS still allows bookings but only when they meet or exceed the minimum-nights threshold.
- **Minimum Length of Stay (MLOS)** vs [Closed to Arrival (CTA)](/lodging/hotel-rate/closed-to-arrival-cta.md) — MLOS requires any stay touching the date to meet a minimum number of nights; CTA outright forbids arrivals on the date regardless of length. They are often used together but enforce different rules.

# Citations
[1] [OpenTravel Alliance — OTA_HotelAvailNotifRQ (LengthOfStay / SetMinLOS)](https://opentravel.org/download-specs/)
[2] [SiteMinder — pmsXchange — Availability and Restrictions](https://developer.siteminder.com/siteminder-apis/pms-rms/introduction/pmsxchange/api-reference/availability-and-restrictions)
