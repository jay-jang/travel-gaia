---
type: Standard Term
title: Derived Rate
description: 'A derived rate is a rate plan whose price, restrictions, or availability are computed automatically as a percentage or fixed amount offset from a parent (base) rate plan such as BAR, rather than being maintained independently. When the parent rate changes, the derived (child) rate recalculates accordingly.'
tags:
  - hotel-rate
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: derived-rate
vertical: lodging
category: hotel-rate
conceptType: standard-term
status: active
term_ko: Derived Rate (파생 요금)
definition_ko: 'Derived Rate(파생 요금)는 가격·제약·가용성을 독립적으로 관리하지 않고, BAR 같은 모(parent, 기준) 요금제로부터 비율(percentage) 또는 고정 금액 오프셋으로 자동 계산하는 요금제다. 모 요금이 바뀌면 파생(child) 요금도 그에 따라 재계산된다.'
longDef: 'The derived rate is a connectivity construct in hotel distribution, implemented primarily by channel managers, CRSs, and PMSs. A derived rate plan is configured to follow a parent rate plan''s rate amount and/or its restrictions and status (open/closed, stop-sell, length-of-stay). In Booking.com''s Connectivity API it is created via OTA_HotelRatePlanNotif as a ''rate relation'' or derived rate plan, where the price offset is expressed as a multiplier (for example, 80 means a 20% discount and 120 a 20% surplus relative to the parent), with separate inheritance flags such as FollowsPrice, FollowsRestrictions, FollowsPolicyGroup, and FollowsClosed. Cloudbeds similarly models a base (BAR) rate with derived rate plans and exposes an isDerived flag; SiteMinder and other channel managers offer the same parent/child linkage. Derived rates dramatically reduce the maintenance burden, since a non-refundable, advance-purchase, or mobile rate can be defined once as ''BAR minus 10%'' and will track BAR automatically across every date. They stand in conceptual contrast to open pricing, which removes such fixed linkages.'
longDef_ko: 'Derived Rate는 호텔 유통의 연동(connectivity) 구성요소로, 주로 채널 매니저·CRS·PMS에서 구현된다. 파생 요금제는 모 요금제의 요금 금액 및/또는 제약·상태(open/closed, stop-sell, 숙박일수)를 따르도록 설정된다. Booking.com Connectivity API에서는 OTA_HotelRatePlanNotif를 통해 ''rate relation'' 또는 derived rate plan으로 생성되며, 가격 오프셋은 배수로 표현되고(예: 80은 모 요금 대비 20% 할인, 120은 20% 할증) FollowsPrice·FollowsRestrictions·FollowsPolicyGroup·FollowsClosed 같은 개별 상속 플래그를 둔다. Cloudbeds도 기준(BAR) 요금과 파생 요금제를 모델링하며 isDerived 플래그를 제공하고, SiteMinder 등 다른 채널 매니저도 동일한 parent/child 연결을 지원한다. 파생 요금은 환불 불가·사전 구매·모바일 요금을 ''BAR 마이너스 10%''처럼 한 번만 정의하면 모든 날짜에 걸쳐 BAR을 자동으로 추적하므로 유지 부담을 크게 줄인다. 그러한 고정 연결을 제거하는 open pricing과 개념적으로 대비된다.'
standardBody: OpenTravel Alliance
aliases:
  - Derived Rate Plan
  - Rate Relation
  - Derived Pricing
providerTerms:
  - provider: Booking.com
    term: Rate relation / Derived rate plan
    context: 'Created via OTA_HotelRatePlanNotif; a child rate follows a parent rate''s price, restrictions, and/or status, with the price offset given as a multiplier such as 80 (20% discount) or 120 (20% surplus), controlled by flags including FollowsPrice, FollowsRestrictions, and FollowsClosed.'
    context_ko: 'OTA_HotelRatePlanNotif로 생성되며, child 요금이 parent 요금의 가격·제약·상태를 따르고 가격 오프셋은 80(20% 할인)이나 120(20% 할증) 같은 배수로 주어지며 FollowsPrice·FollowsRestrictions·FollowsClosed 등의 플래그로 제어된다.'
    relationship: same
  - provider: Cloudbeds
    term: Derived rate plan (isDerived)
    context: Properties have a base (BAR) rate per room type plus optional standalone or derived rate plans; derived rates are calculated from the base rate and cannot be updated directly (the API exposes an isDerived flag).
    context_ko: '객실 타입별 기준(BAR) 요금과 함께 선택적으로 standalone 또는 derived 요금제를 두며, 파생 요금은 기준 요금으로부터 계산되어 직접 수정할 수 없다(API의 isDerived 플래그로 구분).'
    relationship: same
relationships:
  - type: child
    targetTerm: Rate Plan
  - type: related
    targetTerm: BAR
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: ARI
  - type: contrasts
    targetTerm: Open Pricing
distinctions:
  - targetTerm: Rate Plan
    explanation: 'Every derived rate is a rate plan, but a derived rate is specifically one whose values are computed from a parent rate; a standalone (master) rate plan holds its own independently maintained values.'
    explanation_ko: '모든 Derived Rate는 요금제이지만, Derived Rate는 특히 모 요금으로부터 값이 계산되는 요금제다. 독립형(master) 요금제는 자체적으로 별도 관리되는 값을 가진다.'
  - targetTerm: BAR
    explanation: 'BAR is typically the parent rate from which derived rates are calculated; a derived rate is a child like ''BAR minus 10%, non-refundable''. BAR is the source value, the derived rate is the dependent value.'
    explanation_ko: 'BAR은 보통 파생 요금이 계산되는 모 요금이고, Derived Rate는 ''BAR 마이너스 10%, 환불 불가'' 같은 child다. BAR은 원천 값, Derived Rate는 종속 값이다.'
  - targetTerm: Package Rate
    explanation: 'A package rate bundles room with extras (meals, parking) and may itself be derived from a base room rate; a derived rate refers narrowly to the price-linkage mechanism, regardless of whether any package components are bundled.'
    explanation_ko: 'Package Rate는 객실에 부가서비스(식사·주차)를 묶은 것으로 기준 객실 요금에서 파생될 수도 있고, Derived Rate는 패키지 구성 여부와 무관하게 가격 연동 메커니즘 자체를 좁게 가리킨다.'
  - targetTerm: Open Pricing
    explanation: 'A derived rate is mechanically tied to a parent rate by a fixed percentage or amount; open pricing is the opposite philosophy, removing those rigid linkages so each rate is yielded independently.'
    explanation_ko: 'Derived Rate는 고정 비율·금액으로 모(parent) 요금에 기계적으로 연동되지만, Open Pricing은 그 경직된 연결을 제거해 각 요금을 독립적으로 yield하는 반대 철학이다.'
sources:
  - org: Booking.com
    name: Managing rate plans — rate relation (derived rate plan)
    version: ''
    section: ''
    url: 'https://developers.booking.com/connectivity/docs/room-type-and-rate-plan-management/managing-rate-plans'
  - org: Cloudbeds
    name: Revenue Management System (RMS) — base and derived rate plans
    version: ''
    section: ''
    url: 'https://developers.cloudbeds.com/docs/revenue-management-system-rms'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="6" width="12" height="10" rx="2"/><path d="M24 16v8M24 24H12v6M24 24h12v6"/><rect x="6" y="30" width="12" height="10" rx="2"/><rect x="30" y="30" width="12" height="10" rx="2"/></svg>
---

> A derived rate is a rate plan whose price, restrictions, or availability are computed automatically as a percentage or fixed amount offset from a parent (base) rate plan such as BAR, rather than being maintained independently. When the parent rate changes, the derived (child) rate recalculates accordingly.

The derived rate is a connectivity construct in hotel distribution, implemented primarily by channel managers, CRSs, and PMSs. A derived rate plan is configured to follow a parent rate plan's rate amount and/or its restrictions and status (open/closed, stop-sell, length-of-stay). In Booking.com's Connectivity API it is created via OTA_HotelRatePlanNotif as a 'rate relation' or derived rate plan, where the price offset is expressed as a multiplier (for example, 80 means a 20% discount and 120 a 20% surplus relative to the parent), with separate inheritance flags such as FollowsPrice, FollowsRestrictions, FollowsPolicyGroup, and FollowsClosed. Cloudbeds similarly models a base (BAR) rate with derived rate plans and exposes an isDerived flag; SiteMinder and other channel managers offer the same parent/child linkage. Derived rates dramatically reduce the maintenance burden, since a non-refundable, advance-purchase, or mobile rate can be defined once as 'BAR minus 10%' and will track BAR automatically across every date. They stand in conceptual contrast to open pricing, which removes such fixed linkages.

**한국어 / Korean** — **Derived Rate (파생 요금)** — Derived Rate(파생 요금)는 가격·제약·가용성을 독립적으로 관리하지 않고, BAR 같은 모(parent, 기준) 요금제로부터 비율(percentage) 또는 고정 금액 오프셋으로 자동 계산하는 요금제다. 모 요금이 바뀌면 파생(child) 요금도 그에 따라 재계산된다.

Derived Rate는 호텔 유통의 연동(connectivity) 구성요소로, 주로 채널 매니저·CRS·PMS에서 구현된다. 파생 요금제는 모 요금제의 요금 금액 및/또는 제약·상태(open/closed, stop-sell, 숙박일수)를 따르도록 설정된다. Booking.com Connectivity API에서는 OTA_HotelRatePlanNotif를 통해 'rate relation' 또는 derived rate plan으로 생성되며, 가격 오프셋은 배수로 표현되고(예: 80은 모 요금 대비 20% 할인, 120은 20% 할증) FollowsPrice·FollowsRestrictions·FollowsPolicyGroup·FollowsClosed 같은 개별 상속 플래그를 둔다. Cloudbeds도 기준(BAR) 요금과 파생 요금제를 모델링하며 isDerived 플래그를 제공하고, SiteMinder 등 다른 채널 매니저도 동일한 parent/child 연결을 지원한다. 파생 요금은 환불 불가·사전 구매·모바일 요금을 'BAR 마이너스 10%'처럼 한 번만 정의하면 모든 날짜에 걸쳐 BAR을 자동으로 추적하므로 유지 부담을 크게 줄인다. 그러한 고정 연결을 제거하는 open pricing과 개념적으로 대비된다.

**Aliases:** `Derived Rate Plan`, `Rate Relation`, `Derived Pricing`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Booking.com | `Rate relation / Derived rate plan` | same | Created via OTA_HotelRatePlanNotif; a child rate follows a parent rate's price, restrictions, and/or status, with the price offset given as a multiplier such as 80 (20% discount) or 120 (20% surplus), controlled by flags including FollowsPrice, FollowsRestrictions, and FollowsClosed. |
| Cloudbeds | `Derived rate plan (isDerived)` | same | Properties have a base (BAR) rate per room type plus optional standalone or derived rate plans; derived rates are calculated from the base rate and cannot be updated directly (the API exposes an isDerived flag). |

# Related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — child
- [BAR](/lodging/hotel-rate/bar.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Open Pricing](/lodging/hotel-rate/open-pricing.md) — contrasts

# Distinctions
- **Derived Rate** vs [Rate Plan](/lodging/hotel-rate/rate-plan.md) — Every derived rate is a rate plan, but a derived rate is specifically one whose values are computed from a parent rate; a standalone (master) rate plan holds its own independently maintained values.
- **Derived Rate** vs [BAR](/lodging/hotel-rate/bar.md) — BAR is typically the parent rate from which derived rates are calculated; a derived rate is a child like 'BAR minus 10%, non-refundable'. BAR is the source value, the derived rate is the dependent value.
- **Derived Rate** vs [Package Rate](/lodging/hotel-rate/package-rate.md) — A package rate bundles room with extras (meals, parking) and may itself be derived from a base room rate; a derived rate refers narrowly to the price-linkage mechanism, regardless of whether any package components are bundled.
- **Derived Rate** vs [Open Pricing](/lodging/hotel-rate/open-pricing.md) — A derived rate is mechanically tied to a parent rate by a fixed percentage or amount; open pricing is the opposite philosophy, removing those rigid linkages so each rate is yielded independently.

# Citations
[1] [Booking.com — Managing rate plans — rate relation (derived rate plan)](https://developers.booking.com/connectivity/docs/room-type-and-rate-plan-management/managing-rate-plans)
[2] [Cloudbeds — Revenue Management System (RMS) — base and derived rate plans](https://developers.cloudbeds.com/docs/revenue-management-system-rms)
