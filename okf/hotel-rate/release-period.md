---
type: Business Term
title: Release Period
description: A release period is the number of days before arrival at which unsold rooms held in an allotment or group block are automatically returned to the hotel's general inventory for sale. It defines how long contracted inventory is protected for a partner before the associated cut-off date triggers the release.
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: release-period
category: hotel-rate
conceptType: business-term
status: active
term_ko: Release Period (해제 기간)
definition_ko: 'Release Period(해제 기간)는 allotment나 group block에 잡혀 있던 미판매 객실이 자동으로 호텔의 일반 재고로 반환되어 판매에 풀리는, 도착 전 일수다. 연계된 cut-off date가 해제를 발동시키기 전까지 계약 재고가 파트너를 위해 얼마나 오래 보호되는지를 정의한다.'
longDef: 'Release period (often configured as a number of release days) governs allotment and group-block inventory: rooms allocated to a tour operator, corporate account or event block are held at the negotiated terms until the cut-off date, after which any unbooked rooms revert to the hotel to resell through other channels. Cut-off dates are commonly set somewhere from about a week to a month before arrival, giving the property time to recover and resell. The release period is therefore the lead-time parameter behind the cut-off, and it interacts with attrition clauses that may impose penalties if too few of the blocked rooms are actually taken up.'
longDef_ko: 'Release Period(흔히 release days 수로 설정)는 allotment·group block 재고를 통제한다. 투어 오퍼레이터·기업 계정·행사 블록에 할당된 객실은 cut-off date까지 협정 조건으로 보류되며, 그 이후 미예약 객실은 호텔로 반환되어 다른 채널을 통해 재판매된다. cut-off date는 보통 도착 약 1주에서 1개월 전 사이로 설정되어 호텔이 회수·재판매할 시간을 확보한다. 따라서 release period는 cut-off 뒤에 있는 리드타임 파라미터이며, 블록 객실의 실제 소진이 너무 적을 경우 위약금을 부과하는 attrition 조항과 상호작용한다.'
aliases:
  - Release Back
  - Cut-off Period
  - Release Days
relationships:
  - type: related
    targetTerm: Allotment
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Cancellation Policy
  - type: related
    targetTerm: Free Sale
distinctions:
  - targetTerm: Allotment
    explanation: An Allotment is the block of rooms held for a partner; the Release Period is the rule defining how many days before arrival the unsold portion of that allotment is given back to the hotel.
    explanation_ko: 'Allotment는 파트너를 위해 보류된 객실 블록 자체이고, Release Period는 그 allotment 중 미판매분을 도착 며칠 전에 호텔로 반환할지를 정하는 규칙이다.'
sources:
  - org: Xotels
    name: Revenue Management Glossary — Cut-Off
    version: ''
    section: ''
    url: 'https://www.xotels.com/en/glossary/cut-off'
  - org: HelloShift
    name: Hotel Term — Allotment (Room Block)
    version: ''
    section: ''
    url: 'https://www.helloshift.com/hotel-term/allotment'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="10" width="34" height="30" rx="3"/><path d="M7 18h34M16 7v6M32 7v6"/><path d="M19 30l5 5 9-11"/></svg>
---

> A release period is the number of days before arrival at which unsold rooms held in an allotment or group block are automatically returned to the hotel's general inventory for sale. It defines how long contracted inventory is protected for a partner before the associated cut-off date triggers the release.

Release period (often configured as a number of release days) governs allotment and group-block inventory: rooms allocated to a tour operator, corporate account or event block are held at the negotiated terms until the cut-off date, after which any unbooked rooms revert to the hotel to resell through other channels. Cut-off dates are commonly set somewhere from about a week to a month before arrival, giving the property time to recover and resell. The release period is therefore the lead-time parameter behind the cut-off, and it interacts with attrition clauses that may impose penalties if too few of the blocked rooms are actually taken up.

**한국어 / Korean** — **Release Period (해제 기간)** — Release Period(해제 기간)는 allotment나 group block에 잡혀 있던 미판매 객실이 자동으로 호텔의 일반 재고로 반환되어 판매에 풀리는, 도착 전 일수다. 연계된 cut-off date가 해제를 발동시키기 전까지 계약 재고가 파트너를 위해 얼마나 오래 보호되는지를 정의한다.

Release Period(흔히 release days 수로 설정)는 allotment·group block 재고를 통제한다. 투어 오퍼레이터·기업 계정·행사 블록에 할당된 객실은 cut-off date까지 협정 조건으로 보류되며, 그 이후 미예약 객실은 호텔로 반환되어 다른 채널을 통해 재판매된다. cut-off date는 보통 도착 약 1주에서 1개월 전 사이로 설정되어 호텔이 회수·재판매할 시간을 확보한다. 따라서 release period는 cut-off 뒤에 있는 리드타임 파라미터이며, 블록 객실의 실제 소진이 너무 적을 경우 위약금을 부과하는 attrition 조항과 상호작용한다.

**Aliases:** `Release Back`, `Cut-off Period`, `Release Days`

# Related
- [Allotment](/hotel-rate/allotment.md) — related
- [Availability](/air-shop/availability.md) — related
- [Cancellation Policy](/hotel-dist/cancellation-policy.md) — related
- [Free Sale](/hotel-dist/free-sale.md) — related

# Distinctions
- **Release Period** vs [Allotment](/hotel-rate/allotment.md) — An Allotment is the block of rooms held for a partner; the Release Period is the rule defining how many days before arrival the unsold portion of that allotment is given back to the hotel.

# Citations
[1] [Xotels — Revenue Management Glossary — Cut-Off](https://www.xotels.com/en/glossary/cut-off)
[2] [HelloShift — Hotel Term — Allotment (Room Block)](https://www.helloshift.com/hotel-term/allotment)
