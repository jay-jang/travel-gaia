---
type: Code
title: Unaccompanied Minor
description: 'An Unaccompanied Minor (UMNR) is a child travelling by air without an accompanying parent, legal guardian, or responsible adult aged 18 or over, for whom the carrier provides a supervised escort service from departure check-in through to handover to an authorized adult at the destination. UMNR is also the IATA Special Service Request (SSR) code used to advise carriers that a passenger is an unaccompanied minor.'
tags:
  - customer
  - active
  - IATA (Passenger Services Conference Resolutions / PADIS)
timestamp: '2026-06-17T00:00:00Z'
id: unaccompanied-minor
vertical: common
category: customer
conceptType: code
status: active
abbreviation: UMNR
term_ko: '비동반 소아(Unaccompanied Minor, UMNR)'
definition_ko: 'Unaccompanied Minor(UMNR)는 부모, 법적 보호자 또는 만 18세 이상 책임 동반자 없이 혼자 항공 여행하는 어린이로, 항공사가 출발 체크인부터 도착지에서 지정된 성인에게 인계할 때까지 직원이 동반·감독하는 서비스를 제공하는 대상이다. UMNR은 승객이 비동반 소아임을 항공사에 알리는 IATA SSR(특별서비스요청) 코드이기도 하다.'
longDef: 'Eligible age ranges and whether the service is mandatory or optional vary by airline, but commonly fall between 5 and 17 years, often with sub-brackets (e.g., 5-7, 8-11, 12-17) that determine fees and service levels. In the reservation, the requirement is conveyed via the UMNR SSR, typically with a free-text element indicating the child''s age (for example UM08 for an eight-year-old); the related PADIS-defined code PDUM denotes the chargeable/paid unaccompanied-minor service. Carriers usually also collect the names and contact details of the adults dropping off and collecting the child, sometimes via OSI or contact-detail elements. The service requires a documented handover and is closely tied to a Passenger Type Code identifying the traveler as a child.'
longDef_ko: '대상 연령과 서비스의 의무/선택 여부는 항공사마다 다르지만 보통 5~17세 범위이며, 흔히 5-7세, 8-11세, 12-17세 같은 세부 구간으로 나뉘어 요금과 서비스 수준이 정해진다. 예약에서는 UMNR SSR로 요구사항을 전달하며 보통 어린이 나이를 나타내는 자유텍스트(예: 8세는 UM08)를 함께 입력한다. PADIS에 정의된 관련 코드 PDUM은 유료 비동반 소아 서비스를 의미한다. 항공사는 보통 아이를 배웅·인수하는 성인의 이름과 연락처도 함께 수집하며(OSI나 연락처 항목 사용), 서비스에는 문서화된 인계 절차가 따른다. 이 서비스는 승객을 어린이로 식별하는 Passenger Type Code와 밀접하게 연결된다.'
standardBody: IATA (Passenger Services Conference Resolutions / PADIS)
aliases:
  - UMNR
  - UM
  - Unaccompanied Minor Service
providerTerms:
  - provider: IATA
    term: SSR UMNR
    context: 'The IATA/airline SSR UMNR code books and communicates the supervised unaccompanied-minor escort service, typically with the child''s age appended'
    context_ko: IATA/항공사 SSR UMNR 코드는 보호자 동반 없는 미성년자 에스코트 서비스를 예약·전달하며 보통 아동 나이가 부기된다
    relationship: same
relationships:
  - type: related
    targetTerm: SSR
  - type: related
    targetTerm: OSI
  - type: broader
    targetTerm: Passenger Type Code
  - type: related
    targetTerm: PRM
distinctions:
  - targetTerm: PRM
    explanation: 'An Unaccompanied Minor is a child needing supervised escort due to age, signalled by the UMNR SSR, whereas PRM (Passenger with Reduced Mobility) covers assistance needs arising from disability or mobility limitation, signalled by codes such as WCHR; a passenger could in principle require both.'
    explanation_ko: 'Unaccompanied Minor는 연령 때문에 동반 감독이 필요한 어린이로 UMNR SSR로 표시되는 반면, PRM(거동 불편 승객)은 장애나 이동 제약으로 인한 지원 필요를 WCHR 등의 코드로 표시한다. 한 승객이 원칙적으로 둘 다 필요할 수 있다.'
  - targetTerm: Passenger Type Code
    explanation: 'A Passenger Type Code (e.g., CHD) classifies the traveler for pricing/fare purposes, while UMNR is a service request that the child must be escorted; the two are complementary and often both present in a booking.'
    explanation_ko: 'Passenger Type Code(예: CHD)는 운임·가격 목적의 승객 분류이고, UMNR은 그 어린이를 동반 감독해야 한다는 서비스 요청이다. 둘은 상호 보완적이며 한 예약에 함께 존재하는 경우가 많다.'
sources:
  - org: IATA
    name: IATA Codeset Directory / Passenger Services Conference Resolutions Manual (SSR codes)
    version: ''
    section: ''
    url: ''
  - org: Wikipedia
    name: Unaccompanied minor (passenger)
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Unaccompanied_minor_(passenger)'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="13" r="5"/><path d="M20 18v14"/><path d="M12 24h16"/><path d="M20 32l-5 8"/><path d="M20 32l5 8"/><path d="M30 10h12"/><path d="M36 6l6 4-6 4"/></svg>
---

> An Unaccompanied Minor (UMNR) is a child travelling by air without an accompanying parent, legal guardian, or responsible adult aged 18 or over, for whom the carrier provides a supervised escort service from departure check-in through to handover to an authorized adult at the destination. UMNR is also the IATA Special Service Request (SSR) code used to advise carriers that a passenger is an unaccompanied minor.

Eligible age ranges and whether the service is mandatory or optional vary by airline, but commonly fall between 5 and 17 years, often with sub-brackets (e.g., 5-7, 8-11, 12-17) that determine fees and service levels. In the reservation, the requirement is conveyed via the UMNR SSR, typically with a free-text element indicating the child's age (for example UM08 for an eight-year-old); the related PADIS-defined code PDUM denotes the chargeable/paid unaccompanied-minor service. Carriers usually also collect the names and contact details of the adults dropping off and collecting the child, sometimes via OSI or contact-detail elements. The service requires a documented handover and is closely tied to a Passenger Type Code identifying the traveler as a child.

**한국어 / Korean** — **비동반 소아(Unaccompanied Minor, UMNR)** — Unaccompanied Minor(UMNR)는 부모, 법적 보호자 또는 만 18세 이상 책임 동반자 없이 혼자 항공 여행하는 어린이로, 항공사가 출발 체크인부터 도착지에서 지정된 성인에게 인계할 때까지 직원이 동반·감독하는 서비스를 제공하는 대상이다. UMNR은 승객이 비동반 소아임을 항공사에 알리는 IATA SSR(특별서비스요청) 코드이기도 하다.

대상 연령과 서비스의 의무/선택 여부는 항공사마다 다르지만 보통 5~17세 범위이며, 흔히 5-7세, 8-11세, 12-17세 같은 세부 구간으로 나뉘어 요금과 서비스 수준이 정해진다. 예약에서는 UMNR SSR로 요구사항을 전달하며 보통 어린이 나이를 나타내는 자유텍스트(예: 8세는 UM08)를 함께 입력한다. PADIS에 정의된 관련 코드 PDUM은 유료 비동반 소아 서비스를 의미한다. 항공사는 보통 아이를 배웅·인수하는 성인의 이름과 연락처도 함께 수집하며(OSI나 연락처 항목 사용), 서비스에는 문서화된 인계 절차가 따른다. 이 서비스는 승객을 어린이로 식별하는 Passenger Type Code와 밀접하게 연결된다.

**Aliases:** `UMNR`, `UM`, `Unaccompanied Minor Service`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `SSR UMNR` | same | The IATA/airline SSR UMNR code books and communicates the supervised unaccompanied-minor escort service, typically with the child's age appended |

# Related
- [SSR](/air/air-ops/ssr.md) — related
- [OSI](/air/air-ops/osi.md) — related
- [Passenger Type Code](/common/customer/passenger-type-code.md) — broader
- [PRM](/common/customer/prm.md) — related

# Distinctions
- **Unaccompanied Minor** vs [PRM](/common/customer/prm.md) — An Unaccompanied Minor is a child needing supervised escort due to age, signalled by the UMNR SSR, whereas PRM (Passenger with Reduced Mobility) covers assistance needs arising from disability or mobility limitation, signalled by codes such as WCHR; a passenger could in principle require both.
- **Unaccompanied Minor** vs [Passenger Type Code](/common/customer/passenger-type-code.md) — A Passenger Type Code (e.g., CHD) classifies the traveler for pricing/fare purposes, while UMNR is a service request that the child must be escorted; the two are complementary and often both present in a booking.

# Citations
[1] IATA — IATA Codeset Directory / Passenger Services Conference Resolutions Manual (SSR codes)
[2] [Wikipedia — Unaccompanied minor (passenger)](https://en.wikipedia.org/wiki/Unaccompanied_minor_(passenger))
