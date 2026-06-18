---
type: Process
title: Virtual Nesting
description: 'Virtual Nesting is a network revenue-management control that maps each origin-destination (O&D) itinerary and fare-class product into a small set of value-ranked virtual classes (buckets) on every leg it traverses, then applies ordinary nested booking limits to those virtual classes per leg. It lets a leg-based inventory system approximate full O&D control by clustering itineraries of similar network value into the same leg bucket.'
tags:
  - air-shop
  - active
timestamp: '2026-06-18T00:00:00Z'
id: virtual-nesting
vertical: air
category: air-shop
conceptType: process
status: active
term_ko: 가상 네스팅 (Virtual Nesting)
definition_ko: 'Virtual Nesting(가상 네스팅)은 각 출발지-도착지(O&D) 여정과 운임 클래스 상품을, 그 여정이 거치는 모든 leg에서 가치 순위로 정렬된 소수의 가상 클래스(virtual class, 버킷) 집합으로 매핑한 뒤, leg별로 그 가상 클래스에 일반적인 nested booking limit을 적용하는 네트워크 revenue management 통제 기법이다. 네트워크 가치가 비슷한 여정들을 동일한 leg 버킷으로 묶음으로써, leg 기반 인벤토리 시스템이 완전한 O&D 통제를 근사하게 해준다.'
longDef: 'Introduced at American Airlines, virtual nesting (also called the indexing or mapping approach) addresses a core weakness of pure leg/class control: a single physical booking class on a leg may carry both a high-value connecting O&D and a low-value local passenger. Virtual nesting re-indexes bookings by their network contribution rather than by their published booking class, assigning each O&D-fare-class combination to one of a limited number of virtual buckets (often 8-16) ordered by value on each leg. The leg''s seat inventory is then controlled with nested booking limits and protection levels over these virtual buckets using standard methods such as EMSR. Because the same physical class can be mapped to different virtual buckets on different legs depending on the itinerary it belongs to, virtual nesting captures much of the displacement-aware behavior of O&D control while still running on a leg-based reservations and inventory infrastructure. It is one of the two dominant practical implementations of network revenue management, the other being bid-price control.'
longDef_ko: 'American Airlines에서 도입된 virtual nesting(인덱싱 또는 매핑 방식이라고도 함)은 순수 leg/클래스 통제의 핵심 약점을 해결한다. 즉 leg의 하나의 물리적 예약 클래스가 고가치 연결 O&D와 저가치 로컬 승객을 동시에 실을 수 있다는 점이다. Virtual nesting은 예약을 공시된 예약 클래스가 아니라 네트워크 기여도로 다시 인덱싱하여, 각 O&D-운임클래스 조합을 각 leg에서 가치 순으로 정렬된 제한된 수의 가상 버킷(흔히 8~16개) 중 하나에 배정한다. 그런 다음 leg의 좌석 인벤토리는 EMSR 같은 표준 방법으로 이 가상 버킷에 대한 nested booking limit과 protection level로 통제된다. 동일한 물리적 클래스라도 그것이 속한 여정에 따라 leg마다 다른 가상 버킷에 매핑될 수 있으므로, virtual nesting은 leg 기반 예약·인벤토리 인프라 위에서 작동하면서도 O&D 통제의 displacement 인식 동작 상당 부분을 포착한다. 이는 네트워크 revenue management의 두 가지 지배적 실무 구현 중 하나이며, 다른 하나는 bid-price 통제이다.'
aliases:
  - Virtual Nesting Control
  - Virtual Class
  - VN
relationships:
  - type: broader
    targetTerm: Origin & Destination Control (O&D Control)
  - type: related
    targetTerm: Bid Price
  - type: related
    targetTerm: Booking Limit
  - type: related
    targetTerm: Protection Level
  - type: related
    targetTerm: Expected Marginal Seat Revenue (EMSR)
  - type: related
    targetTerm: Revenue Management
distinctions:
  - targetTerm: Origin & Destination Control (O&D Control)
    explanation: O&D control is the general objective of valuing seats over the whole itinerary; virtual nesting is one specific technique that achieves it by mapping O&D products into per-leg virtual buckets controlled with nested limits. Bid-price control is the alternative technique for the same objective.
    explanation_ko: 'O&D control은 좌석을 전체 여정 기준으로 평가한다는 일반적 목표이고, virtual nesting은 O&D 상품을 leg별 가상 버킷에 매핑하여 nested 한도로 통제함으로써 그 목표를 달성하는 하나의 구체적 기법이다. 동일한 목표에 대한 대안 기법이 bid-price 통제이다.'
  - targetTerm: Bid Price
    explanation: 'Both are network RM controls, but virtual nesting keeps discrete nested buckets and booking limits per leg, whereas bid-price control replaces buckets with a continuous value threshold an itinerary''s fare must clear across all its legs.'
    explanation_ko: '둘 다 네트워크 RM 통제이지만, virtual nesting은 leg별로 이산적인 nested 버킷과 booking limit을 유지하는 반면, bid-price 통제는 버킷을 여정의 운임이 모든 leg에 걸쳐 넘어야 하는 연속적 값 임계치로 대체한다.'
sources:
  - org: INFORMS / Operations Research
    name: 'van Ryzin & Vulcano, ''Simulation-Based Optimization of Virtual Nesting Controls for Network Revenue Management'', Operations Research 56(4), 865-880, 2008'
    version: ''
    section: ''
    url: ''
  - org: Springer
    name: 'Talluri & van Ryzin, ''The Theory and Practice of Revenue Management'' (2004), Ch. on network capacity control / virtual nesting'
    version: ''
    section: ''
    url: ''
  - org: SSRN
    name: 'Nesting Booking Limits in Revenue Management: The Good, the Bad and the Ugly (Jean Michel Chapuis, 2008)'
    version: ''
    section: ''
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1124707'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="9" width="34" height="30" rx="3"/><rect x="12" y="14" width="24" height="20" rx="2"/><rect x="17" y="19" width="14" height="10" rx="1.5"/><path d="M9 24h-2M41 24h0"/></svg>
---

> Virtual Nesting is a network revenue-management control that maps each origin-destination (O&D) itinerary and fare-class product into a small set of value-ranked virtual classes (buckets) on every leg it traverses, then applies ordinary nested booking limits to those virtual classes per leg. It lets a leg-based inventory system approximate full O&D control by clustering itineraries of similar network value into the same leg bucket.

Introduced at American Airlines, virtual nesting (also called the indexing or mapping approach) addresses a core weakness of pure leg/class control: a single physical booking class on a leg may carry both a high-value connecting O&D and a low-value local passenger. Virtual nesting re-indexes bookings by their network contribution rather than by their published booking class, assigning each O&D-fare-class combination to one of a limited number of virtual buckets (often 8-16) ordered by value on each leg. The leg's seat inventory is then controlled with nested booking limits and protection levels over these virtual buckets using standard methods such as EMSR. Because the same physical class can be mapped to different virtual buckets on different legs depending on the itinerary it belongs to, virtual nesting captures much of the displacement-aware behavior of O&D control while still running on a leg-based reservations and inventory infrastructure. It is one of the two dominant practical implementations of network revenue management, the other being bid-price control.

**한국어 / Korean** — **가상 네스팅 (Virtual Nesting)** — Virtual Nesting(가상 네스팅)은 각 출발지-도착지(O&D) 여정과 운임 클래스 상품을, 그 여정이 거치는 모든 leg에서 가치 순위로 정렬된 소수의 가상 클래스(virtual class, 버킷) 집합으로 매핑한 뒤, leg별로 그 가상 클래스에 일반적인 nested booking limit을 적용하는 네트워크 revenue management 통제 기법이다. 네트워크 가치가 비슷한 여정들을 동일한 leg 버킷으로 묶음으로써, leg 기반 인벤토리 시스템이 완전한 O&D 통제를 근사하게 해준다.

American Airlines에서 도입된 virtual nesting(인덱싱 또는 매핑 방식이라고도 함)은 순수 leg/클래스 통제의 핵심 약점을 해결한다. 즉 leg의 하나의 물리적 예약 클래스가 고가치 연결 O&D와 저가치 로컬 승객을 동시에 실을 수 있다는 점이다. Virtual nesting은 예약을 공시된 예약 클래스가 아니라 네트워크 기여도로 다시 인덱싱하여, 각 O&D-운임클래스 조합을 각 leg에서 가치 순으로 정렬된 제한된 수의 가상 버킷(흔히 8~16개) 중 하나에 배정한다. 그런 다음 leg의 좌석 인벤토리는 EMSR 같은 표준 방법으로 이 가상 버킷에 대한 nested booking limit과 protection level로 통제된다. 동일한 물리적 클래스라도 그것이 속한 여정에 따라 leg마다 다른 가상 버킷에 매핑될 수 있으므로, virtual nesting은 leg 기반 예약·인벤토리 인프라 위에서 작동하면서도 O&D 통제의 displacement 인식 동작 상당 부분을 포착한다. 이는 네트워크 revenue management의 두 가지 지배적 실무 구현 중 하나이며, 다른 하나는 bid-price 통제이다.

**Aliases:** `Virtual Nesting Control`, `Virtual Class`, `VN`

# Related
- [Origin & Destination Control (O&D Control)](/air/air-shop/origin-destination-control.md) — broader
- [Bid Price](/air/air-shop/bid-price.md) — related
- [Booking Limit](/air/air-shop/booking-limit.md) — related
- [Protection Level](/air/air-shop/protection-level.md) — related
- [Expected Marginal Seat Revenue (EMSR)](/air/air-shop/expected-marginal-seat-revenue.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related

# Distinctions
- **Virtual Nesting** vs [Origin & Destination Control (O&D Control)](/air/air-shop/origin-destination-control.md) — O&D control is the general objective of valuing seats over the whole itinerary; virtual nesting is one specific technique that achieves it by mapping O&D products into per-leg virtual buckets controlled with nested limits. Bid-price control is the alternative technique for the same objective.
- **Virtual Nesting** vs [Bid Price](/air/air-shop/bid-price.md) — Both are network RM controls, but virtual nesting keeps discrete nested buckets and booking limits per leg, whereas bid-price control replaces buckets with a continuous value threshold an itinerary's fare must clear across all its legs.

# Citations
[1] INFORMS / Operations Research — van Ryzin & Vulcano, 'Simulation-Based Optimization of Virtual Nesting Controls for Network Revenue Management', Operations Research 56(4), 865-880, 2008
[2] Springer — Talluri & van Ryzin, 'The Theory and Practice of Revenue Management' (2004), Ch. on network capacity control / virtual nesting
[3] [SSRN — Nesting Booking Limits in Revenue Management: The Good, the Bad and the Ugly (Jean Michel Chapuis, 2008)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1124707)
