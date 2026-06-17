---
type: Business Term
title: Traveler Preference
description: 'A traveler preference is a stored, non-mandatory attribute describing how a traveler prefers to be served, such as seat choice (aisle/window), special meal, room type, bedding, cabin, language, or preferred suppliers. Preferences are held in a customer or guest profile and applied to bookings to personalize the experience, distinct from regulatory or safety requirements.'
tags:
  - customer
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: traveler-preference
vertical: common
category: customer
conceptType: business-term
status: active
term_ko: 여행자 선호(Traveler Preference)
definition_ko: 'Traveler Preference(여행자 선호)는 좌석 선택(통로/창측), 특별식, 객실 유형, 침구, 좌석 등급, 언어, 선호 공급사 등 여행자가 어떻게 서비스받기를 원하는지를 기술하는, 저장된 비필수 속성이다. 선호는 고객 또는 게스트 프로필에 보관되며 예약에 반영되어 경험을 개인화하는데, 규제나 안전상의 요구사항과는 구별된다.'
longDef: 'Preferences are captured in customer profiles in a GDS, airline CRS, or hotel PMS/CRM and may be transmitted into bookings, for instance an aisle-seat preference, a vegetarian meal, or a high-floor non-smoking room. In airline distribution, comfort or service preferences such as seating and meals are often realized through Special Service Requests (SSR) or seat requests, while non-actionable information may be carried as OSI. The OpenTravel Alliance and HTNG define profile and preference data structures that allow preferences to be exchanged between systems. Preferences are advisory and subject to availability, in contrast to a PRM assistance need or a Secure Flight data requirement, which are obligations rather than wishes.'
longDef_ko: '선호는 GDS, 항공사 CRS, 호텔 PMS/CRM의 고객 프로필에 수집되어 예약으로 전달될 수 있다(예: 통로 좌석 선호, 채식, 고층·금연 객실). 항공 유통에서 좌석·기내식 같은 편의/서비스 선호는 흔히 SSR(특별서비스요청)이나 좌석 요청으로 구현되며, 조치가 필요 없는 정보는 OSI로 전달될 수 있다. OpenTravel Alliance와 HTNG는 시스템 간 선호를 교환할 수 있도록 프로필·선호 데이터 구조를 정의한다. 선호는 권고적이며 가용성에 따라 달라진다는 점에서, 의무에 해당하는 PRM 지원 필요나 Secure Flight 데이터 요구와 대비된다.'
standardBody: OpenTravel Alliance
aliases:
  - Travel Preference
  - Guest Preference
  - Passenger Preference
relationships:
  - type: child
    targetTerm: Customer Profile
  - type: related
    targetTerm: SSR
  - type: related
    targetTerm: OSI
  - type: related
    targetTerm: OpenTravel Alliance
  - type: related
    targetTerm: Room Type
distinctions:
  - targetTerm: SSR
    explanation: 'A traveler preference is stored profile data describing a wish, while an SSR is the actionable message that conveys a specific request to a carrier within a booking; preferences are often the source that drives creation of SSRs but are not themselves a transmitted request until applied.'
    explanation_ko: 'Traveler preference는 바람을 기술한 저장 프로필 데이터이고, SSR은 예약 내에서 특정 요청을 항공사에 전달하는 실행 가능한 메시지다. 선호는 흔히 SSR 생성을 유발하는 원천이지만, 적용되기 전까지는 그 자체가 전송된 요청은 아니다.'
  - targetTerm: PRM
    explanation: 'A traveler preference is advisory and best-effort (e.g., a window seat), whereas a PRM assistance need is a service obligation the carrier must fulfill; they are governed by different rules and priorities.'
    explanation_ko: 'Traveler preference는 권고적이고 최선노력 대상(예: 창측 좌석)인 반면, PRM 지원 필요는 항공사가 반드시 이행해야 하는 서비스 의무다. 둘은 적용 규칙과 우선순위가 다르다.'
sources:
  - org: OpenTravel Alliance
    name: OpenTravel Specifications (Profile / Preferences messages)
    version: ''
    section: ''
    url: 'https://opentravel.org/'
  - org: HTNG (Hospitality Technology Next Generation)
    name: HTNG Customer Profile / Preferences specifications
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="15" r="6"/><path d="M12 38c0-7 5-12 12-12s12 5 12 12"/><path d="M33 9l1.4 2.9 3.1.4-2.3 2.1.6 3.1-2.8-1.5-2.8 1.5.6-3.1-2.3-2.1 3.1-.4z"/></svg>
---

> A traveler preference is a stored, non-mandatory attribute describing how a traveler prefers to be served, such as seat choice (aisle/window), special meal, room type, bedding, cabin, language, or preferred suppliers. Preferences are held in a customer or guest profile and applied to bookings to personalize the experience, distinct from regulatory or safety requirements.

Preferences are captured in customer profiles in a GDS, airline CRS, or hotel PMS/CRM and may be transmitted into bookings, for instance an aisle-seat preference, a vegetarian meal, or a high-floor non-smoking room. In airline distribution, comfort or service preferences such as seating and meals are often realized through Special Service Requests (SSR) or seat requests, while non-actionable information may be carried as OSI. The OpenTravel Alliance and HTNG define profile and preference data structures that allow preferences to be exchanged between systems. Preferences are advisory and subject to availability, in contrast to a PRM assistance need or a Secure Flight data requirement, which are obligations rather than wishes.

**한국어 / Korean** — **여행자 선호(Traveler Preference)** — Traveler Preference(여행자 선호)는 좌석 선택(통로/창측), 특별식, 객실 유형, 침구, 좌석 등급, 언어, 선호 공급사 등 여행자가 어떻게 서비스받기를 원하는지를 기술하는, 저장된 비필수 속성이다. 선호는 고객 또는 게스트 프로필에 보관되며 예약에 반영되어 경험을 개인화하는데, 규제나 안전상의 요구사항과는 구별된다.

선호는 GDS, 항공사 CRS, 호텔 PMS/CRM의 고객 프로필에 수집되어 예약으로 전달될 수 있다(예: 통로 좌석 선호, 채식, 고층·금연 객실). 항공 유통에서 좌석·기내식 같은 편의/서비스 선호는 흔히 SSR(특별서비스요청)이나 좌석 요청으로 구현되며, 조치가 필요 없는 정보는 OSI로 전달될 수 있다. OpenTravel Alliance와 HTNG는 시스템 간 선호를 교환할 수 있도록 프로필·선호 데이터 구조를 정의한다. 선호는 권고적이며 가용성에 따라 달라진다는 점에서, 의무에 해당하는 PRM 지원 필요나 Secure Flight 데이터 요구와 대비된다.

**Aliases:** `Travel Preference`, `Guest Preference`, `Passenger Preference`

# Related
- [Customer Profile](/common/customer/customer-profile.md) — child
- [SSR](/air/air-ops/ssr.md) — related
- [OSI](/air/air-ops/osi.md) — related
- [OpenTravel Alliance](/common/standards/opentravel-alliance.md) — related
- [Room Type](/lodging/hotel-rate/room-type.md) — related

# Distinctions
- **Traveler Preference** vs [SSR](/air/air-ops/ssr.md) — A traveler preference is stored profile data describing a wish, while an SSR is the actionable message that conveys a specific request to a carrier within a booking; preferences are often the source that drives creation of SSRs but are not themselves a transmitted request until applied.
- **Traveler Preference** vs [PRM](/common/customer/prm.md) — A traveler preference is advisory and best-effort (e.g., a window seat), whereas a PRM assistance need is a service obligation the carrier must fulfill; they are governed by different rules and priorities.

# Citations
[1] [OpenTravel Alliance — OpenTravel Specifications (Profile / Preferences messages)](https://opentravel.org/)
[2] HTNG (Hospitality Technology Next Generation) — HTNG Customer Profile / Preferences specifications
