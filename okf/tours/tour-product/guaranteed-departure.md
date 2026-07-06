---
type: Business Term
title: Guaranteed Departure
description: 'A Guaranteed Departure is a tour departure that the operator commits to run regardless of the number of passengers booked, eliminating the risk of last-minute cancellation due to low demand. It provides certainty for travelers who have made non-refundable ancillary commitments (flights, accommodation) and is a premium commercial signal in tour distribution, typically offered at a higher price or reserved for specific date slots.'
tags:
  - tour-product
  - active
  - ATTA
timestamp: '2026-07-06T00:00:00Z'
id: guaranteed-departure
vertical: tours
category: tour-product
conceptType: business-term
status: active
term_ko: 출발 확정(Guaranteed Departure)
definition_ko: '출발 확정(Guaranteed Departure)은 운영사가 예약 인원 수에 관계없이 해당 출발일에 투어를 반드시 운영하겠다고 확약하는 것이다. 이는 항공권·숙박 등 환불 불가한 부가 예약을 이미 완료한 여행자에게 막판 취소 위험을 없애주며, 투어 유통에서 프리미엄 상업 신호로서 일반적으로 더 높은 가격이나 특정 날짜 슬롯에만 적용된다.'
longDef: 'Tour operators typically set a minimum group size (MGS) threshold below which a departure may be cancelled. A Guaranteed Departure waives this threshold for one or more specific dates, accepting the commercial risk of running a tour with fewer passengers than the break-even size. Operators use guaranteed departures strategically: peak season dates may be unconditionally guaranteed; off-peak dates may only be guaranteed on select slots after a promotional push. In distribution systems (e.g., OCTO, Bokun, Rezdy), a guaranteed departure is modelled as a boolean flag (`isFreesale` or `guaranteedDeparture`) on the availability slot, enabling OTAs and bedbanks to confidently display and sell the date without a "request-only" caveat. From a pricing perspective, guaranteed departures are often sold at a slight premium to offset the MGS risk and to signal reliability to the consumer.'
longDef_ko: '투어 운영사는 일반적으로 최소 그룹 규모(MGS) 임계값을 설정하며, 이에 미달하면 출발을 취소할 수 있다. 출발 확정은 하나 이상의 특정 날짜에 대해 이 임계값을 면제하고, 손익분기점에 미치지 못하는 인원으로도 투어를 운영하는 상업적 위험을 수용하는 것이다. 운영사는 전략적으로 출발 확정을 활용한다. 성수기 날짜는 무조건 확정되고, 비수기 날짜는 프로모션 이후 일부 슬롯에서만 확정될 수 있다. 유통 시스템(예: OCTO, Bokun, Rezdy)에서 출발 확정은 가용성 슬롯의 불리언 플래그(`isFreesale` 또는 `guaranteedDeparture`)로 모델링되어, OTA와 베드뱅크가 "요청 확인 필요" 단서 없이 해당 날짜를 자신 있게 표시·판매할 수 있게 한다. 가격 측면에서 출발 확정 투어는 MGS 위험을 상쇄하고 소비자에게 신뢰성을 신호하기 위해 약간의 프리미엄이 붙는 경우가 많다.'
standardBody: ATTA
aliases:
  - Guaranteed Run
  - GTD Departure
  - Minimum-Guaranteed Departure
relationships:
  - type: related
    targetTerm: Capacity
  - type: related
    targetTerm: Cut-off Time
  - type: related
    targetTerm: FIT
  - type: related
    targetTerm: GIT
  - type: related
    targetTerm: Early Bird Discount
distinctions:
  - targetTerm: FIT
    explanation: 'A FIT (Fully Independent Traveller) booking is a private, custom itinerary assembled for an individual or small group that typically runs whenever arranged; a Guaranteed Departure is a scheduled, fixed-date group tour departure that the operator publicly commits to run regardless of pax count.'
    explanation_ko: 'FIT(Fully Independent Traveller) 예약은 개인 또는 소규모 그룹을 위해 맞춤 조합된 비공개 여정으로 대개 예약에 따라 운영되는 반면, 출발 확정은 운영사가 탑승자 수와 무관하게 운영을 공개 확약하는 일정·날짜가 고정된 그룹 투어 출발이다.'
  - targetTerm: Capacity
    explanation: 'Capacity is the maximum number of participants a departure can accommodate; a Guaranteed Departure commitment relates to the minimum — it assures operation even when booking numbers are below the usual viable threshold, not the upper limit.'
    explanation_ko: 'Capacity는 하나의 출발이 수용할 수 있는 최대 참가자 수이고, 출발 확정 약속은 최솟값에 관한 것이다. 즉, 예약 인원이 일반적인 운영 가능 임계값에 미달하더라도 운영을 보장하며, 상한과는 관련이 없다.'
sources:
  - name: OCTO (OpenConnectivity) Booking API Specification — Availability fields
    org: OpenConnectivity
    version: ''
    section: 'Availability — isFreesale / guaranteedDeparture field'
    url: 'https://docs.octo.travel/'
    tier: association
  - name: Adventure Travel Trade Association (ATTA) — Adventure Travel Industry Snapshot
    org: ATTA
    version: ''
    section: ''
    url: 'https://www.adventuretravel.biz/research/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="14" width="28" height="24" rx="3"/><line x1="16" y1="10" x2="16" y2="18"/><line x1="32" y1="10" x2="32" y2="18"/><line x1="10" y1="22" x2="38" y2="22"/><path d="M18 30 L22 34 L30 26" stroke-width="2.5"/></svg>
---

> A Guaranteed Departure is a tour departure that the operator commits to run regardless of the number of passengers booked, eliminating the risk of last-minute cancellation due to low demand. It provides certainty for travelers who have made non-refundable ancillary commitments (flights, accommodation) and is a premium commercial signal in tour distribution, typically offered at a higher price or reserved for specific date slots.

Tour operators typically set a minimum group size (MGS) threshold below which a departure may be cancelled. A Guaranteed Departure waives this threshold for one or more specific dates, accepting the commercial risk of running a tour with fewer passengers than the break-even size. Operators use guaranteed departures strategically: peak season dates may be unconditionally guaranteed; off-peak dates may only be guaranteed on select slots after a promotional push. In distribution systems (e.g., OCTO, Bokun, Rezdy), a guaranteed departure is modelled as a boolean flag (`isFreesale` or `guaranteedDeparture`) on the availability slot, enabling OTAs and bedbanks to confidently display and sell the date without a "request-only" caveat. From a pricing perspective, guaranteed departures are often sold at a slight premium to offset the MGS risk and to signal reliability to the consumer.

**한국어 / Korean** — **출발 확정(Guaranteed Departure)** — 출발 확정(Guaranteed Departure)은 운영사가 예약 인원 수에 관계없이 해당 출발일에 투어를 반드시 운영하겠다고 확약하는 것이다. 이는 항공권·숙박 등 환불 불가한 부가 예약을 이미 완료한 여행자에게 막판 취소 위험을 없애주며, 투어 유통에서 프리미엄 상업 신호로서 일반적으로 더 높은 가격이나 특정 날짜 슬롯에만 적용된다.

투어 운영사는 일반적으로 최소 그룹 규모(MGS) 임계값을 설정하며, 이에 미달하면 출발을 취소할 수 있다. 출발 확정은 하나 이상의 특정 날짜에 대해 이 임계값을 면제하고, 손익분기점에 미치지 못하는 인원으로도 투어를 운영하는 상업적 위험을 수용하는 것이다. 운영사는 전략적으로 출발 확정을 활용한다. 성수기 날짜는 무조건 확정되고, 비수기 날짜는 프로모션 이후 일부 슬롯에서만 확정될 수 있다. 유통 시스템(예: OCTO, Bokun, Rezdy)에서 출발 확정은 가용성 슬롯의 불리언 플래그(`isFreesale` 또는 `guaranteedDeparture`)로 모델링되어, OTA와 베드뱅크가 "요청 확인 필요" 단서 없이 해당 날짜를 자신 있게 표시·판매할 수 있게 한다. 가격 측면에서 출발 확정 투어는 MGS 위험을 상쇄하고 소비자에게 신뢰성을 신호하기 위해 약간의 프리미엄이 붙는 경우가 많다.

**Aliases:** `Guaranteed Run`, `GTD Departure`, `Minimum-Guaranteed Departure`

# Related
- [Capacity](/tours/tour-product/capacity.md) — related
- [Cut-off Time](/tours/tour-ops/cut-off-time.md) — related
- [FIT](/tours/tour-ops/fit.md) — related
- [GIT](/tours/tour-ops/git.md) — related
- [Early Bird Discount](/tours/tour-commercial/early-bird-discount.md) — related

# Distinctions
- **Guaranteed Departure** vs [FIT](/tours/tour-ops/fit.md) — A FIT (Fully Independent Traveller) booking is a private, custom itinerary assembled for an individual or small group that typically runs whenever arranged; a Guaranteed Departure is a scheduled, fixed-date group tour departure that the operator publicly commits to run regardless of pax count.
- **Guaranteed Departure** vs [Capacity](/tours/tour-product/capacity.md) — Capacity is the maximum number of participants a departure can accommodate; a Guaranteed Departure commitment relates to the minimum — it assures operation even when booking numbers are below the usual viable threshold, not the upper limit.

# Citations
[1] [OpenConnectivity — OCTO (OpenConnectivity) Booking API Specification — Availability fields](https://docs.octo.travel/)
[2] [ATTA — Adventure Travel Trade Association (ATTA) — Adventure Travel Industry Snapshot](https://www.adventuretravel.biz/research/)
