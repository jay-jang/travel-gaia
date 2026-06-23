---
type: Business Term
title: Occupancy
description: 'In hotel inventory and rates, occupancy has two common meanings: (1) the number and composition of guests assigned to a room (e.g. single, double, or 2 adults + 1 child), which can drive occupancy-based pricing; and (2) occupancy rate, the operational metric of rooms sold divided by rooms available over a period.'
tags:
  - hotel-rate
  - ambiguous
timestamp: '2026-06-17T00:00:00Z'
id: occupancy
vertical: lodging
category: hotel-rate
conceptType: business-term
status: ambiguous
term_ko: 투숙(Occupancy) / 객실 점유
definition_ko: '호텔 재고 및 요금에서 occupancy는 두 가지 일반적인 의미를 가진다. (1) 객실에 배정된 투숙객의 수와 구성(예: 싱글, 더블, 또는 성인 2명 + 아동 1명)으로, occupancy 기반 가격 산정에 영향을 줄 수 있다. (2) 객실 점유율(occupancy rate)로, 일정 기간 동안 판매된 객실 수를 가용 객실 수로 나눈 운영 지표이다.'
longDef: 'As a pricing/inventory attribute, occupancy specifies how many adults and children occupy a room and is used to apply per-person or occupancy-based rates and to validate that a booking fits a room type''s maximum occupancy. As a performance metric, Occupancy Rate = Rooms Sold / Rooms Available, expressed as a percentage, and combines with ADR to derive RevPAR (RevPAR = ADR x Occupancy Rate). The intended sense is usually clear from context, but the term is genuinely overloaded.'
longDef_ko: '가격/재고 속성으로서 occupancy는 객실에 성인과 아동이 각각 몇 명 투숙하는지를 명시하며, 1인당 요금이나 occupancy 기반 요금을 적용하고 예약이 객실 유형의 최대 수용 인원에 맞는지 검증하는 데 사용된다. 성과 지표로서 객실 점유율은 판매 객실 수 / 가용 객실 수이며 백분율로 표현되고, ADR과 결합해 RevPAR을 산출한다(RevPAR = ADR x 객실 점유율). 의도된 의미는 보통 맥락에서 명확하지만, 이 용어는 실제로 여러 의미가 중첩되어 있다.'
aliases:
  - Occupancy Rate
  - Number of Guests
  - Pax Occupancy
providerTerms:
  - provider: OpenTravel
    term: GuestCounts (occupancy-based pricing)
    context: OTA messages carry occupancy as GuestCount elements (AgeQualifyingCode for adults/children) that drive occupancy-based rate amounts.
    context_ko: OTA 메시지는 점유를 GuestCount 요소(성인·아동 AgeQualifyingCode)로 전달하며 이는 점유 기반 요금을 결정한다.
    relationship: related
relationships:
  - type: related
    targetTerm: Room Type
  - type: contrasts
    targetTerm: ADR
  - type: contrasts
    targetTerm: RevPAR
distinctions:
  - targetTerm: RevPAR
    explanation: Occupancy rate is one factor (rooms sold vs available); RevPAR is revenue per available room and equals ADR multiplied by occupancy rate.
    explanation_ko: '객실 점유율은 하나의 요소(판매 객실 대 가용 객실)이며, RevPAR은 가용 객실당 매출로 ADR에 객실 점유율을 곱한 값과 같다.'
  - targetTerm: ADR
    explanation: ADR measures average price per occupied room; occupancy rate measures how full the hotel is — the two are independent inputs to RevPAR.
    explanation_ko: 'ADR은 판매된 객실당 평균 가격을 측정하고, 객실 점유율은 호텔이 얼마나 찼는지를 측정한다. 둘은 RevPAR에 독립적으로 입력되는 요소이다.'
  - targetTerm: Available Passenger Cruise Days (APCD)
    explanation: 'APCD is a fixed capacity measure (cabins available x 2 x days), whereas Occupancy is the utilization ratio computed against it (passenger cruise days / APCD). Because APCD assumes double occupancy, occupancy routinely exceeds 100% when cabins carry a third or fourth guest.'
    explanation_ko: 'APCD는 고정된 공급량 지표(이용 가능 선실 x 2 x 일수)인 반면, Occupancy는 그에 대비한 이용률(passenger cruise days / APCD)이다. APCD가 2인 점유를 가정하므로, 선실에 셋째·넷째 승객이 탑승하면 occupancy가 일상적으로 100%를 초과한다.'
  - targetTerm: Room Type
    explanation: 'Room type describes the room''s attributes; occupancy describes how many guests stay in it, which can affect the applicable price.'
    explanation_ko: '객실 유형은 객실의 속성을 설명하고, 투숙 인원(occupancy)은 몇 명의 투숙객이 머무는지를 설명하며 이는 적용 가격에 영향을 줄 수 있다.'
  - targetTerm: Single Supplement
    explanation: 'Hotel ''Occupancy'' is a performance metric (the ratio of sold to available rooms); a cruise single supplement is a per-booking surcharge tied to double-occupancy pricing — the same root word, but one measures sales and the other prices a sale.'
    explanation_ko: '호텔의 ''Occupancy(점유율)''는 성과 지표(판매 객실 대 가용 객실 비율)이고, 크루즈의 싱글 서플먼트는 2인 기준 가격 책정에 연동된 예약별 할증료이다. 어원은 같지만 하나는 판매를 측정하고 다른 하나는 판매 가격을 매긴다.'
sources:
  - name: Uniform System of Accounts for the Lodging Industry (USALI)
    org: AHLA / HFTP
    version: ''
    section: ''
    url: 'https://usali.hftp.org/'
  - name: STR lodging performance metric definitions
    org: STR (CoStar)
    version: ''
    section: ''
    url: 'https://www.costar.com/products/str-benchmark/resources/glossary'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="17" cy="16" r="5"/><path d="M8 36v-2a9 9 0 0 1 18 0v2"/><circle cx="33" cy="18" r="4"/><path d="M28 36v-2a7 7 0 0 1 13-3"/></svg>
---

> In hotel inventory and rates, occupancy has two common meanings: (1) the number and composition of guests assigned to a room (e.g. single, double, or 2 adults + 1 child), which can drive occupancy-based pricing; and (2) occupancy rate, the operational metric of rooms sold divided by rooms available over a period.

As a pricing/inventory attribute, occupancy specifies how many adults and children occupy a room and is used to apply per-person or occupancy-based rates and to validate that a booking fits a room type's maximum occupancy. As a performance metric, Occupancy Rate = Rooms Sold / Rooms Available, expressed as a percentage, and combines with ADR to derive RevPAR (RevPAR = ADR x Occupancy Rate). The intended sense is usually clear from context, but the term is genuinely overloaded.

**한국어 / Korean** — **투숙(Occupancy) / 객실 점유** — 호텔 재고 및 요금에서 occupancy는 두 가지 일반적인 의미를 가진다. (1) 객실에 배정된 투숙객의 수와 구성(예: 싱글, 더블, 또는 성인 2명 + 아동 1명)으로, occupancy 기반 가격 산정에 영향을 줄 수 있다. (2) 객실 점유율(occupancy rate)로, 일정 기간 동안 판매된 객실 수를 가용 객실 수로 나눈 운영 지표이다.

가격/재고 속성으로서 occupancy는 객실에 성인과 아동이 각각 몇 명 투숙하는지를 명시하며, 1인당 요금이나 occupancy 기반 요금을 적용하고 예약이 객실 유형의 최대 수용 인원에 맞는지 검증하는 데 사용된다. 성과 지표로서 객실 점유율은 판매 객실 수 / 가용 객실 수이며 백분율로 표현되고, ADR과 결합해 RevPAR을 산출한다(RevPAR = ADR x 객실 점유율). 의도된 의미는 보통 맥락에서 명확하지만, 이 용어는 실제로 여러 의미가 중첩되어 있다.

**Aliases:** `Occupancy Rate`, `Number of Guests`, `Pax Occupancy`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OpenTravel | `GuestCounts (occupancy-based pricing)` | related | OTA messages carry occupancy as GuestCount elements (AgeQualifyingCode for adults/children) that drive occupancy-based rate amounts. |

# Related
- [Room Type](/lodging/hotel-rate/room-type.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — contrasts
- [RevPAR](/lodging/hotel-rate/revpar.md) — contrasts

# Distinctions
- **Occupancy** vs [RevPAR](/lodging/hotel-rate/revpar.md) — Occupancy rate is one factor (rooms sold vs available); RevPAR is revenue per available room and equals ADR multiplied by occupancy rate.
- **Occupancy** vs [ADR](/lodging/hotel-rate/adr.md) — ADR measures average price per occupied room; occupancy rate measures how full the hotel is — the two are independent inputs to RevPAR.
- **Occupancy** vs [Available Passenger Cruise Days (APCD)](/cruise/cruise/available-passenger-cruise-days-apcd.md) — APCD is a fixed capacity measure (cabins available x 2 x days), whereas Occupancy is the utilization ratio computed against it (passenger cruise days / APCD). Because APCD assumes double occupancy, occupancy routinely exceeds 100% when cabins carry a third or fourth guest.
- **Occupancy** vs [Room Type](/lodging/hotel-rate/room-type.md) — Room type describes the room's attributes; occupancy describes how many guests stay in it, which can affect the applicable price.
- **Occupancy** vs [Single Supplement](/cruise/cruise/single-supplement.md) — Hotel 'Occupancy' is a performance metric (the ratio of sold to available rooms); a cruise single supplement is a per-booking surcharge tied to double-occupancy pricing — the same root word, but one measures sales and the other prices a sale.

# Citations
[1] [AHLA / HFTP — Uniform System of Accounts for the Lodging Industry (USALI)](https://usali.hftp.org/)
[2] [STR (CoStar) — STR lodging performance metric definitions](https://www.costar.com/products/str-benchmark/resources/glossary)
