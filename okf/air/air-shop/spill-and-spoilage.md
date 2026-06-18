---
type: Metric
title: Spill and Spoilage
description: 'Spill and spoilage are the paired error metrics revenue management trades off against each other: spill is high-yield demand turned away because a class or flight was closed or too tightly limited, while spoilage is the revenue lost from seats that depart empty because too many were protected or the flight was under-sold. Effective seat-inventory control minimizes the combined cost of selling too few high-fare seats (spill) and protecting too aggressively (spoilage).'
tags:
  - air-shop
  - active
timestamp: '2026-06-18T00:00:00Z'
id: spill-and-spoilage
vertical: air
category: air-shop
conceptType: metric
status: active
term_ko: 스필 및 스포일리지 (Spill and Spoilage)
definition_ko: 'Spill과 spoilage는 revenue management가 서로 상충 관계로 조정하는 한 쌍의 오류 지표다. Spill은 클래스나 항공편이 닫혀 있거나 한도가 지나치게 빡빡해서 거절된 고수익 수요를 말하고, spoilage는 좌석을 과도하게 protect했거나 항공편이 과소 판매되어 빈 채로 출발한 좌석에서 잃은 수익을 말한다. 효과적인 좌석 인벤토리 통제는 고운임 좌석을 너무 적게 판 비용(spill)과 너무 공격적으로 protect한 비용(spoilage)의 합을 최소화한다.'
longDef: 'Spill (also called turn-away or spilled demand) occurs when demand for a fare class or flight exceeds the seats made available to it, so requests are rejected or diverted; spill cost is the contribution lost on that displaced higher-value demand. Spoilage is the opposite error: seats fly empty (or are sold only to low-fare passengers) because the revenue-management system protected too many seats for high-fare demand that never materialized, or set capacity controls too conservatively. The two are in tension because tightening protection levels and booking limits reduces spoilage risk but raises spill of late high-yield demand, while loosening them does the reverse. RM forecasting and optimization explicitly weigh expected spill against expected spoilage; the EMSR family of methods, for example, sets protection levels precisely at the point that balances the marginal cost of spoiling a protected seat against the marginal benefit of capturing high-fare demand. Both are central to evaluating RM performance and depend on demand forecast accuracy and unconstraining of censored historical bookings.'
longDef_ko: 'Spill(turn-away 또는 spilled demand라고도 함)은 운임 클래스나 항공편에 대한 수요가 거기에 배정된 좌석을 초과하여 요청이 거절되거나 우회될 때 발생하며, spill 비용은 그 밀려난 고가치 수요에서 잃은 기여이다. Spoilage는 반대의 오류로, revenue management 시스템이 실현되지 않은 고운임 수요를 위해 좌석을 너무 많이 protect했거나 capacity 통제를 지나치게 보수적으로 설정해서 좌석이 빈 채로(또는 저운임 승객에게만 팔린 채로) 운항하는 것이다. 둘은 상충 관계에 있는데, protection level과 booking limit을 조이면 spoilage 위험은 줄지만 후반의 고수익 수요 spill이 늘고, 느슨하게 하면 그 반대가 되기 때문이다. RM 예측과 최적화는 기대 spill과 기대 spoilage를 명시적으로 저울질하며, 예를 들어 EMSR 계열 방법은 protect된 좌석을 spoil하는 한계 비용과 고운임 수요를 포착하는 한계 이익이 균형을 이루는 지점에 정확히 protection level을 설정한다. 둘 다 RM 성과를 평가하는 데 핵심이며, 수요 예측 정확도와 검열된(censored) 과거 예약의 unconstraining에 의존한다.'
aliases:
  - Spill
  - Spoilage
  - Spill and Spoilage
  - Spilled Demand
relationships:
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: Protection Level
  - type: related
    targetTerm: Booking Limit
  - type: related
    targetTerm: Overbooking
  - type: related
    targetTerm: Expected Marginal Seat Revenue (EMSR)
distinctions:
  - targetTerm: Overbooking
    explanation: 'Spoilage is empty seats from over-protecting or under-selling against real capacity; overbooking is the deliberate authorization to sell beyond physical capacity to offset no-shows and thereby reduce spoilage. Overbooking is a control that combats spoilage, not a synonym for it.'
    explanation_ko: 'Spoilage는 실제 capacity 대비 과보호나 과소 판매로 생기는 빈 좌석이고, overbooking은 no-show를 상쇄하여 spoilage를 줄이기 위해 물리적 capacity를 넘겨 판매하도록 의도적으로 승인하는 것이다. Overbooking은 spoilage에 대응하는 통제 수단이지 그 동의어가 아니다.'
  - targetTerm: Protection Level
    explanation: A protection level is the control quantity that is set; spill and spoilage are the realized error outcomes of having set it too low (spill of high-yield demand) or too high (spoilage of empty seats).
    explanation_ko: 'Protection level은 설정되는 통제 수량이고, spill과 spoilage는 그것을 너무 낮게(고수익 수요의 spill) 또는 너무 높게(빈 좌석의 spoilage) 설정한 데서 실현되는 오류 결과이다.'
sources:
  - org: MIT OpenCourseWare
    name: '16.75J Airline Management (MIT ICAT, P. Belobaba) - Airline Revenue Management: spill and spoilage'
    version: ''
    section: ''
    url: 'https://ocw.mit.edu/courses/16-75j-airline-management-spring-2006/'
  - org: Journal of Revenue and Pricing Management (Springer)
    name: Airline overbooking with dynamic spoilage costs
    version: ''
    section: ''
    url: 'https://link.springer.com/article/10.1057/palgrave.rpm.5160059'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="10" width="14" height="28" rx="2"/><path d="M14 16v10M14 31v0"/><path d="M24 18h6M24 24h6M24 30h6" stroke-dasharray="3 3"/><rect x="33" y="10" width="8" height="28" rx="2"/><path d="M37 16l3 3M40 16l-3 3"/></svg>
---

> Spill and spoilage are the paired error metrics revenue management trades off against each other: spill is high-yield demand turned away because a class or flight was closed or too tightly limited, while spoilage is the revenue lost from seats that depart empty because too many were protected or the flight was under-sold. Effective seat-inventory control minimizes the combined cost of selling too few high-fare seats (spill) and protecting too aggressively (spoilage).

Spill (also called turn-away or spilled demand) occurs when demand for a fare class or flight exceeds the seats made available to it, so requests are rejected or diverted; spill cost is the contribution lost on that displaced higher-value demand. Spoilage is the opposite error: seats fly empty (or are sold only to low-fare passengers) because the revenue-management system protected too many seats for high-fare demand that never materialized, or set capacity controls too conservatively. The two are in tension because tightening protection levels and booking limits reduces spoilage risk but raises spill of late high-yield demand, while loosening them does the reverse. RM forecasting and optimization explicitly weigh expected spill against expected spoilage; the EMSR family of methods, for example, sets protection levels precisely at the point that balances the marginal cost of spoiling a protected seat against the marginal benefit of capturing high-fare demand. Both are central to evaluating RM performance and depend on demand forecast accuracy and unconstraining of censored historical bookings.

**한국어 / Korean** — **스필 및 스포일리지 (Spill and Spoilage)** — Spill과 spoilage는 revenue management가 서로 상충 관계로 조정하는 한 쌍의 오류 지표다. Spill은 클래스나 항공편이 닫혀 있거나 한도가 지나치게 빡빡해서 거절된 고수익 수요를 말하고, spoilage는 좌석을 과도하게 protect했거나 항공편이 과소 판매되어 빈 채로 출발한 좌석에서 잃은 수익을 말한다. 효과적인 좌석 인벤토리 통제는 고운임 좌석을 너무 적게 판 비용(spill)과 너무 공격적으로 protect한 비용(spoilage)의 합을 최소화한다.

Spill(turn-away 또는 spilled demand라고도 함)은 운임 클래스나 항공편에 대한 수요가 거기에 배정된 좌석을 초과하여 요청이 거절되거나 우회될 때 발생하며, spill 비용은 그 밀려난 고가치 수요에서 잃은 기여이다. Spoilage는 반대의 오류로, revenue management 시스템이 실현되지 않은 고운임 수요를 위해 좌석을 너무 많이 protect했거나 capacity 통제를 지나치게 보수적으로 설정해서 좌석이 빈 채로(또는 저운임 승객에게만 팔린 채로) 운항하는 것이다. 둘은 상충 관계에 있는데, protection level과 booking limit을 조이면 spoilage 위험은 줄지만 후반의 고수익 수요 spill이 늘고, 느슨하게 하면 그 반대가 되기 때문이다. RM 예측과 최적화는 기대 spill과 기대 spoilage를 명시적으로 저울질하며, 예를 들어 EMSR 계열 방법은 protect된 좌석을 spoil하는 한계 비용과 고운임 수요를 포착하는 한계 이익이 균형을 이루는 지점에 정확히 protection level을 설정한다. 둘 다 RM 성과를 평가하는 데 핵심이며, 수요 예측 정확도와 검열된(censored) 과거 예약의 unconstraining에 의존한다.

**Aliases:** `Spill`, `Spoilage`, `Spill and Spoilage`, `Spilled Demand`

# Related
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [Protection Level](/air/air-shop/protection-level.md) — related
- [Booking Limit](/air/air-shop/booking-limit.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related
- [Expected Marginal Seat Revenue (EMSR)](/air/air-shop/expected-marginal-seat-revenue.md) — related

# Distinctions
- **Spill and Spoilage** vs [Overbooking](/air/air-shop/overbooking.md) — Spoilage is empty seats from over-protecting or under-selling against real capacity; overbooking is the deliberate authorization to sell beyond physical capacity to offset no-shows and thereby reduce spoilage. Overbooking is a control that combats spoilage, not a synonym for it.
- **Spill and Spoilage** vs [Protection Level](/air/air-shop/protection-level.md) — A protection level is the control quantity that is set; spill and spoilage are the realized error outcomes of having set it too low (spill of high-yield demand) or too high (spoilage of empty seats).

# Citations
[1] [MIT OpenCourseWare — 16.75J Airline Management (MIT ICAT, P. Belobaba) - Airline Revenue Management: spill and spoilage](https://ocw.mit.edu/courses/16-75j-airline-management-spring-2006/)
[2] [Journal of Revenue and Pricing Management (Springer) — Airline overbooking with dynamic spoilage costs](https://link.springer.com/article/10.1057/palgrave.rpm.5160059)
