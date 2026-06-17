---
type: Business Term
title: Length of Stay
description: 'Length of Stay is the number of nights of a hotel booking, and as a rate control it refers to restrictions tied to that duration — most commonly Minimum Length of Stay (MinLOS) and Maximum Length of Stay (MaxLOS) — used to qualify or block availability for a rate plan on specific dates. Related controls include length-of-stay-based pricing and arrival-day restrictions.'
tags:
  - hotel-rate
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: length-of-stay
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
abbreviation: LOS
term_ko: '숙박일수(LOS, Length of Stay)'
definition_ko: 'LOS(Length of Stay)는 호텔 예약의 숙박 일수를 의미하며, 요금 통제 수단으로서는 그 기간에 연동된 제약(가장 흔히 최소 숙박일수(MinLOS)와 최대 숙박일수(MaxLOS))을 가리킨다. 이는 특정 날짜에 요금제의 가용 여부를 한정하거나 차단하는 데 사용된다. 관련 통제로는 숙박일수 기반 가격 산정과 도착일 제약이 있다.'
longDef: 'Revenue managers use LOS restrictions to shape demand: a MinLOS requires guests to book at least N nights to be eligible (or to receive a rate) on a given arrival date, while MaxLOS caps the bookable duration. Variants include MinLOS Through and Closed to Arrival (CTA) / Closed to Departure (CTD), which interact with stay-through logic. LOS controls are distributed as restriction attributes alongside rates and availability in CRS, channel managers, and ARI/OpenTravel messages.'
longDef_ko: '수익 관리자는 수요를 조정하기 위해 LOS 제약을 사용한다. MinLOS는 특정 도착일에 자격을 얻거나(또는 해당 요금을 받기) 위해 투숙객이 최소 N박을 예약하도록 요구하고, MaxLOS는 예약 가능한 기간에 상한을 둔다. 변형으로는 stay-through 로직과 상호작용하는 MinLOS Through, Closed to Arrival(CTA) / Closed to Departure(CTD)가 있다. LOS 통제는 CRS, 채널 매니저, ARI/OpenTravel 메시지에서 요금 및 가용 정보와 함께 제약 속성으로 유통된다.'
standardBody: OpenTravel Alliance
aliases:
  - LOS
  - Stay Length
  - Minimum Length of Stay
  - Maximum Length of Stay
relationships:
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: BAR
distinctions:
  - targetTerm: Rate Plan
    explanation: Length of Stay is a restriction/control that can gate a rate plan; the rate plan is the broader offer that the LOS rule conditions.
    explanation_ko: '숙박일수는 요금제를 제한할 수 있는 제약/통제이고, 요금제는 LOS 규칙이 조건을 거는 더 넓은 범위의 상품이다.'
sources:
  - name: 'OpenTravel Specification (Hotel availability and restriction messages, length of stay)'
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
  - name: HTNG ARI messaging specifications
    org: HTNG
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="10" width="34" height="30" rx="3"/><line x1="7" y1="18" x2="41" y2="18"/><line x1="15" y1="7" x2="15" y2="13"/><line x1="33" y1="7" x2="33" y2="13"/><path d="M15 25h2v9"/><path d="M33 29a4.5 4.5 0 1 1-5-5 5.5 5.5 0 0 0 5 5z"/></svg>
---

> Length of Stay is the number of nights of a hotel booking, and as a rate control it refers to restrictions tied to that duration — most commonly Minimum Length of Stay (MinLOS) and Maximum Length of Stay (MaxLOS) — used to qualify or block availability for a rate plan on specific dates. Related controls include length-of-stay-based pricing and arrival-day restrictions.

Revenue managers use LOS restrictions to shape demand: a MinLOS requires guests to book at least N nights to be eligible (or to receive a rate) on a given arrival date, while MaxLOS caps the bookable duration. Variants include MinLOS Through and Closed to Arrival (CTA) / Closed to Departure (CTD), which interact with stay-through logic. LOS controls are distributed as restriction attributes alongside rates and availability in CRS, channel managers, and ARI/OpenTravel messages.

**한국어 / Korean** — **숙박일수(LOS, Length of Stay)** — LOS(Length of Stay)는 호텔 예약의 숙박 일수를 의미하며, 요금 통제 수단으로서는 그 기간에 연동된 제약(가장 흔히 최소 숙박일수(MinLOS)와 최대 숙박일수(MaxLOS))을 가리킨다. 이는 특정 날짜에 요금제의 가용 여부를 한정하거나 차단하는 데 사용된다. 관련 통제로는 숙박일수 기반 가격 산정과 도착일 제약이 있다.

수익 관리자는 수요를 조정하기 위해 LOS 제약을 사용한다. MinLOS는 특정 도착일에 자격을 얻거나(또는 해당 요금을 받기) 위해 투숙객이 최소 N박을 예약하도록 요구하고, MaxLOS는 예약 가능한 기간에 상한을 둔다. 변형으로는 stay-through 로직과 상호작용하는 MinLOS Through, Closed to Arrival(CTA) / Closed to Departure(CTD)가 있다. LOS 통제는 CRS, 채널 매니저, ARI/OpenTravel 메시지에서 요금 및 가용 정보와 함께 제약 속성으로 유통된다.

**Aliases:** `LOS`, `Stay Length`, `Minimum Length of Stay`, `Maximum Length of Stay`

# Related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [BAR](/lodging/hotel-rate/bar.md) — related

# Distinctions
- **Length of Stay** vs [Rate Plan](/lodging/hotel-rate/rate-plan.md) — Length of Stay is a restriction/control that can gate a rate plan; the rate plan is the broader offer that the LOS rule conditions.

# Citations
[1] OpenTravel Alliance — OpenTravel Specification (Hotel availability and restriction messages, length of stay)
[2] HTNG — HTNG ARI messaging specifications
