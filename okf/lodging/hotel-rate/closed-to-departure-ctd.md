---
type: Standard Term
title: Closed to Departure (CTD)
description: 'Closed to Departure (CTD) is a stay-control restriction that prevents new reservations from having a checkout (departure) date on a specified night, while guests already booked through that date are unaffected. Paired with Closed to Arrival (CTA), it is one of the four standard hotel stay controls used in revenue management alongside Minimum Length of Stay and Maximum Length of Stay.'
tags:
  - hotel-rate
  - active
timestamp: '2026-08-18T00:00:00Z'
id: closed-to-departure-ctd
vertical: lodging
category: hotel-rate
conceptType: standard-term
status: active
abbreviation: CTD
term_ko: 'Closed to Departure (CTD, 출발 마감)'
definition_ko: 'Closed to Departure(CTD)는 지정된 날짜를 체크아웃(출발) 날짜로 하는 신규 예약을 막는 stay control(숙박 제약) 규칙으로, 이미 예약되어 그 날짜를 거쳐 머무는 고객은 영향을 받지 않는다. Closed to Arrival(CTA)과 짝을 이루며, Minimum Length of Stay, Maximum Length of Stay와 함께 호텔의 4대 표준 stay control 중 하나다.'
longDef: 'CTD is applied to force guests to stay through a low-demand night that would otherwise become a checkout day, ensuring the property fills what would be a gap in occupancy. For example, a resort with a high-demand Saturday and a slow Sunday may set CTD on Sunday to compel guests checking in for the weekend to stay through Sunday night, reducing the occupancy trough. Like CTA, CTD does not affect existing reservations already booked through the restricted night; it only blocks new reservations whose stay ends on the CTD date. CTD is the departure-side mirror of CTA: CTA blocks arrivals on a date, CTD blocks departures. Both are typically configured per rate plan and room type in the revenue management system and distributed via channel manager, CRS, and GDS as availability restrictions.'
longDef_ko: 'CTD는 게스트를 저수요 야간(그렇지 않으면 체크아웃 날이 될 밤)에 머물도록 유도해 공실 공백을 채우기 위해 사용된다. 예를 들어 토요일은 수요가 높고 일요일은 한가한 리조트가 일요일에 CTD를 걸면, 주말 체크인 고객은 일요일 야간을 통과해 머물러야 하므로 공실 골이 줄어든다. CTA와 마찬가지로 CTD는 제한된 날짜를 거쳐 이미 예약된 숙박에는 영향을 미치지 않으며, 해당 날짜를 체크아웃 날로 하는 신규 예약만을 막는다. CTD는 CTA의 출발 측 대응물이다: CTA는 특정 날짜의 도착을 막고, CTD는 그 날짜의 출발을 막는다. 둘 다 보통 수익 관리 시스템에서 요금제·객실 유형별로 설정되어 채널 매니저·CRS·GDS를 통해 가용성 제약으로 배포된다.'
aliases:
  - Closed to Departure
  - Close to Departure
  - No Departures
  - CTD Restriction
providerTerms:
  - provider: OpenTravel / HTNG
    term: RestrictionStatus Restriction="Departure" Status="Close"
    context: 'In OTA_HotelAvailNotifRQ ARI sync, CTD is expressed as a RestrictionStatus element with Restriction="Departure" and Status="Close".'
    context_ko: 'OTA_HotelAvailNotifRQ ARI 동기화에서 CTD는 Restriction="Departure", Status="Close"인 RestrictionStatus 요소로 표현된다.'
    relationship: same
  - provider: Booking.com
    term: Closed to Departure restriction
    context: Booking.com connectivity supports a Closed-to-Departure restriction that prevents guests from checking out on the restricted night.
    context_ko: 'Booking.com 커넥티비티는 제한된 날짜를 출발일로 하는 예약을 막는 Closed-to-Departure 제한을 지원한다.'
    relationship: same
  - provider: Expedia
    term: Closed to Departure (Availability & Rates API)
    context: Expedia's Availability and Rates API supports closed-to-departure restrictions for a single date or date range.
    context_ko: 'Expedia의 Availability and Rates API는 단일 일자 또는 기간에 대한 closed-to-departure 제한을 지원한다.'
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Closed to Arrival (CTA)
  - type: contrasts
    targetTerm: Minimum Length of Stay (MLOS)
  - type: related
    targetTerm: Stop Sell
  - type: related
    targetTerm: Revenue Management
  - type: broader
    targetTerm: Length of Stay
distinctions:
  - targetTerm: Closed to Arrival (CTA)
    explanation: 'CTA prevents new reservations from arriving (checking in) on a date; CTD prevents new reservations from departing (checking out) on a date. CTA is used to avoid isolated short stays before a peak night; CTD is used to avoid checkout gaps after a peak night. Both leave existing through-stays untouched.'
    explanation_ko: 'CTA는 특정 날짜에 도착(체크인)하는 신규 예약을 막고, CTD는 그 날짜에 출발(체크아웃)하는 신규 예약을 막는다. CTA는 피크 야간 이전의 단기 체크인을 피하기 위해 사용하고, CTD는 피크 야간 이후의 체크아웃 공백을 피하기 위해 사용한다. 둘 다 기존의 through-stay에는 영향을 미치지 않는다.'
  - targetTerm: Stop Sell
    explanation: 'A Stop Sell closes a date to all new bookings entirely; CTD only restricts new reservations whose stay ends on that date, while bookings that span through the date or arrive after it remain available.'
    explanation_ko: 'Stop Sell은 해당 날짜를 모든 신규 예약에 대해 완전히 닫고, CTD는 그 날짜를 체크아웃 날로 하는 신규 예약만 제한한다. 그 날짜를 통과하거나 그 이후 도착하는 예약은 여전히 가능하다.'
  - targetTerm: Minimum Length of Stay (MLOS)
    explanation: 'MLOS requires any stay touching a date to be at least N nights, indirectly preventing short stays from checking out on a target date; CTD directly prohibits departures on that date regardless of stay length. MLOS is more flexible (allows stays of sufficient length through the date), while CTD is an absolute bar on departing on that night.'
    explanation_ko: 'MLOS는 해당 날짜에 걸치는 숙박이 최소 N박 이상이어야 한다고 요구하여 간접적으로 짧은 숙박이 대상 날짜에 체크아웃하는 것을 막고, CTD는 숙박 길이와 무관하게 그 날짜의 출발을 직접 금지한다. MLOS는 충분한 길이의 숙박이 그 날을 통과하는 것을 허용하므로 더 유연하고, CTD는 해당 야간 출발에 대한 절대적인 금지다.'
sources:
  - org: Xotels
    name: CTD - Closed to Departure Definition / Meaning
    version: ''
    section: ''
    url: 'https://www.xotels.com/en/glossary/ctd-closed-to-departure'
    tier: secondary
  - org: Revenue Hub
    name: How do Restrictions Work in Hotel Revenue Management
    version: ''
    section: ''
    url: 'https://revenue-hub.com/how-do-restrictions-work-in-hotel-revenue-management/'
    tier: secondary
  - org: HSMAI
    name: HSMAI Revenue Management Glossary — Stay Controls
    version: ''
    section: 'Stay Controls'
    url: 'https://hsmai.org/knowledge/glossary/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 24h28"/><polyline points="26 16 34 24 26 32"/><circle cx="42" cy="24" r="5"/><line x1="38" y1="20" x2="46" y2="28"/></svg>
---

> Closed to Departure (CTD) is a stay-control restriction that prevents new reservations from having a checkout (departure) date on a specified night, while guests already booked through that date are unaffected. Paired with Closed to Arrival (CTA), it is one of the four standard hotel stay controls used in revenue management alongside Minimum Length of Stay and Maximum Length of Stay.

CTD is applied to force guests to stay through a low-demand night that would otherwise become a checkout day, ensuring the property fills what would be a gap in occupancy. For example, a resort with a high-demand Saturday and a slow Sunday may set CTD on Sunday to compel guests checking in for the weekend to stay through Sunday night, reducing the occupancy trough. Like CTA, CTD does not affect existing reservations already booked through the restricted night; it only blocks new reservations whose stay ends on the CTD date. CTD is the departure-side mirror of CTA: CTA blocks arrivals on a date, CTD blocks departures. Both are typically configured per rate plan and room type in the revenue management system and distributed via channel manager, CRS, and GDS as availability restrictions.

**한국어 / Korean** — **Closed to Departure (CTD, 출발 마감)** — Closed to Departure(CTD)는 지정된 날짜를 체크아웃(출발) 날짜로 하는 신규 예약을 막는 stay control(숙박 제약) 규칙으로, 이미 예약되어 그 날짜를 거쳐 머무는 고객은 영향을 받지 않는다. Closed to Arrival(CTA)과 짝을 이루며, Minimum Length of Stay, Maximum Length of Stay와 함께 호텔의 4대 표준 stay control 중 하나다.

CTD는 게스트를 저수요 야간(그렇지 않으면 체크아웃 날이 될 밤)에 머물도록 유도해 공실 공백을 채우기 위해 사용된다. 예를 들어 토요일은 수요가 높고 일요일은 한가한 리조트가 일요일에 CTD를 걸면, 주말 체크인 고객은 일요일 야간을 통과해 머물러야 하므로 공실 골이 줄어든다. CTA와 마찬가지로 CTD는 제한된 날짜를 거쳐 이미 예약된 숙박에는 영향을 미치지 않으며, 해당 날짜를 체크아웃 날로 하는 신규 예약만을 막는다. CTD는 CTA의 출발 측 대응물이다: CTA는 특정 날짜의 도착을 막고, CTD는 그 날짜의 출발을 막는다. 둘 다 보통 수익 관리 시스템에서 요금제·객실 유형별로 설정되어 채널 매니저·CRS·GDS를 통해 가용성 제약으로 배포된다.

**Aliases:** `Closed to Departure`, `Close to Departure`, `No Departures`, `CTD Restriction`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OpenTravel / HTNG | `RestrictionStatus Restriction="Departure" Status="Close"` | same | In OTA_HotelAvailNotifRQ ARI sync, CTD is expressed as a RestrictionStatus element with Restriction="Departure" and Status="Close". |
| Booking.com | `Closed to Departure restriction` | same | Booking.com connectivity supports a Closed-to-Departure restriction that prevents guests from checking out on the restricted night. |
| Expedia | `Closed to Departure (Availability & Rates API)` | same | Expedia's Availability and Rates API supports closed-to-departure restrictions for a single date or date range. |

# Related
- [Closed to Arrival (CTA)](/lodging/hotel-rate/closed-to-arrival-cta.md) — contrasts
- [Minimum Length of Stay (MLOS)](/lodging/hotel-rate/minimum-length-of-stay-mlos.md) — contrasts
- [Stop Sell](/lodging/hotel-rate/stop-sell.md) — related
- [Revenue Management](/common/standards/revenue-management.md) — related
- [Length of Stay](/lodging/hotel-rate/length-of-stay.md) — broader

# Distinctions
- **Closed to Departure (CTD)** vs [Closed to Arrival (CTA)](/lodging/hotel-rate/closed-to-arrival-cta.md) — CTA prevents new reservations from arriving (checking in) on a date; CTD prevents new reservations from departing (checking out) on a date. CTA is used to avoid isolated short stays before a peak night; CTD is used to avoid checkout gaps after a peak night. Both leave existing through-stays untouched.
- **Closed to Departure (CTD)** vs [Stop Sell](/lodging/hotel-rate/stop-sell.md) — A Stop Sell closes a date to all new bookings entirely; CTD only restricts new reservations whose stay ends on that date, while bookings that span through the date or arrive after it remain available.
- **Closed to Departure (CTD)** vs [Minimum Length of Stay (MLOS)](/lodging/hotel-rate/minimum-length-of-stay-mlos.md) — MLOS requires any stay touching a date to be at least N nights, indirectly preventing short stays from checking out on a target date; CTD directly prohibits departures on that date regardless of stay length. MLOS is more flexible (allows stays of sufficient length through the date), while CTD is an absolute bar on departing on that night.

# Citations
[1] [Xotels — CTD - Closed to Departure Definition / Meaning](https://www.xotels.com/en/glossary/ctd-closed-to-departure)
[2] [Revenue Hub — How do Restrictions Work in Hotel Revenue Management](https://revenue-hub.com/how-do-restrictions-work-in-hotel-revenue-management/)
[3] [HSMAI — HSMAI Revenue Management Glossary — Stay Controls](https://hsmai.org/knowledge/glossary/)
