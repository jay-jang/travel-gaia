---
type: Business Term
title: Minimum Participants
description: 'The minimum number of confirmed guests required for a scheduled tour departure to operate; if confirmed bookings fall below this threshold by the cut-off or option date, the operator may cancel or reschedule the departure.'
tags:
  - tour-ops
  - active
  - OCTO
timestamp: '2026-08-19T00:00:00Z'
id: minimum-participants
vertical: tours
category: tour-ops
conceptType: business-term
status: active
abbreviation: MinPax
term_ko: '최소 참가자 수(Minimum Participants)'
definition_ko: '예약된 투어 출발이 진행되기 위해 필요한 최소 확정 참가자 수로, 마감일 또는 옵션 데이트까지 확정 예약 수가 이 기준에 미달하면 운영자가 출발을 취소하거나 일정을 변경할 수 있다.'
longDef: 'Minimum participants (MinPax) is a fundamental viability threshold for tour operations. It reflects the break-even or economically sustainable headcount for a given departure — covering guide costs, vehicle hire, venue fees, and other fixed costs. When confirmed bookings do not reach the MinPax threshold by a specified date (often the option date or booking cutoff), the operator invokes a minimum-not-met (MNM) cancellation and notifies all booked guests, who are entitled to a full refund or alternative departure. In booking systems such as Bokun and FareHarbor, MinPax is set per product or per departure and automatically withholds confirmation until the threshold is reached (analogous to Guaranteed Departure logic). Operators offering a Guaranteed Departure waive the MinPax condition and commit to running the departure regardless of final headcount. MinPax is modelled as a product-level field in the OCTO Booking API.'
longDef_ko: '최소 참가자 수(MinPax)는 투어 운영의 기본 실행 가능성 기준이다. 특정 출발에 대한 손익분기점 또는 경제적으로 지속 가능한 참가 인원을 반영하며, 가이드 비용·차량 임차·장소 이용료 등 고정 비용을 충당한다. 지정 기한(흔히 옵션 데이트 또는 예약 마감)까지 확정 예약이 MinPax 기준에 미달하면, 운영자는 최소 미달(MNM) 취소를 시행하고 모든 예약 게스트에게 통지하며, 게스트는 전액 환불 또는 대체 출발을 받을 자격이 있다. Bokun·FareHarbor 등 예약 시스템에서 MinPax는 상품별 또는 출발별로 설정되고, 기준이 충족될 때까지 확정을 자동으로 보류한다(Guaranteed Departure 논리와 유사). 보장 출발(Guaranteed Departure)을 제공하는 운영자는 MinPax 조건을 포기하고 최종 참가 인원에 관계없이 출발을 진행하기로 약속한다. MinPax는 OCTO 예약 API에서 상품 수준 필드로 모델링된다.'
aliases:
  - MinPax
  - Minimum Pax
  - Minimum Group Size
  - Minimum Numbers
relationships:
  - type: contrasts
    targetTerm: Guaranteed Departure
  - type: related
    targetTerm: Supplier Cancellation
  - type: related
    targetTerm: Series Tour
  - type: related
    targetTerm: Resource Management
distinctions:
  - targetTerm: Guaranteed Departure
    explanation: 'Guaranteed departure is the operator''s commitment to run a departure regardless of headcount — the inverse of minimum participants. When a departure is guaranteed, the MinPax threshold is effectively zero from the guest''s perspective; the operator absorbs the loss on low-attendance departures.'
    explanation_ko: '보장 출발(Guaranteed Departure)은 참가 인원과 무관하게 출발을 진행하겠다는 운영자의 약속으로, 최소 참가자 수의 반대 개념이다. 출발이 보장되면, 게스트 관점에서 MinPax 기준은 사실상 0이 되며 운영자가 저조한 출발에 따른 손실을 부담한다.'
sources:
  - name: OCTO Booking API — Availability and MinPax fields
    org: OCTO (Open Connectivity for Tours & Activities)
    version: '1.0'
    section: Product & Availability
    url: 'https://docs.octo.travel/docs/getting-started/api-overview'
    tier: standard-body
  - name: Bokun Help — Minimum and Maximum Participant Settings
    org: Bokun
    version: ''
    section: ''
    url: 'https://help.bokun.io/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="14" r="5"/><circle cx="24" cy="14" r="5"/><circle cx="34" cy="14" r="5"/><path d="M6 34c0-5 4-8 8-8h20c4 0 8 3 8 8"/><path d="M6 38h36"/><path d="M14 38v-4"/><path d="M24 38v-4"/><path d="M34 38v-4"/></svg>
---

> The minimum number of confirmed guests required for a scheduled tour departure to operate; if confirmed bookings fall below this threshold by the cut-off or option date, the operator may cancel or reschedule the departure.

Minimum participants (MinPax) is a fundamental viability threshold for tour operations. It reflects the break-even or economically sustainable headcount for a given departure — covering guide costs, vehicle hire, venue fees, and other fixed costs. When confirmed bookings do not reach the MinPax threshold by a specified date (often the option date or booking cutoff), the operator invokes a minimum-not-met (MNM) cancellation and notifies all booked guests, who are entitled to a full refund or alternative departure. In booking systems such as Bokun and FareHarbor, MinPax is set per product or per departure and automatically withholds confirmation until the threshold is reached (analogous to Guaranteed Departure logic). Operators offering a Guaranteed Departure waive the MinPax condition and commit to running the departure regardless of final headcount. MinPax is modelled as a product-level field in the OCTO Booking API.

**한국어 / Korean** — **최소 참가자 수(Minimum Participants)** — 예약된 투어 출발이 진행되기 위해 필요한 최소 확정 참가자 수로, 마감일 또는 옵션 데이트까지 확정 예약 수가 이 기준에 미달하면 운영자가 출발을 취소하거나 일정을 변경할 수 있다.

최소 참가자 수(MinPax)는 투어 운영의 기본 실행 가능성 기준이다. 특정 출발에 대한 손익분기점 또는 경제적으로 지속 가능한 참가 인원을 반영하며, 가이드 비용·차량 임차·장소 이용료 등 고정 비용을 충당한다. 지정 기한까지 확정 예약이 MinPax 기준에 미달하면, 운영자는 최소 미달(MNM) 취소를 시행하고 모든 예약 게스트에게 통지하며, 게스트는 전액 환불 또는 대체 출발을 받을 자격이 있다. Bokun·FareHarbor 등 예약 시스템에서 MinPax는 상품별 또는 출발별로 설정되고, 기준이 충족될 때까지 확정을 자동으로 보류한다. 보장 출발(Guaranteed Departure)을 제공하는 운영자는 MinPax 조건을 포기하고 최종 참가 인원에 관계없이 출발을 진행하기로 약속한다.

**Aliases:** `MinPax`, `Minimum Pax`, `Minimum Group Size`, `Minimum Numbers`

# Related
- [Guaranteed Departure](/tours/tour-product/guaranteed-departure.md) — contrasts
- [Supplier Cancellation](/tours/tour-ops/supplier-cancellation.md) — related
- [Series Tour](/tours/tour-ops/series-tour.md) — related
- [Resource Management](/tours/tour-ops/resource-management.md) — related

# Distinctions
- **Minimum Participants** vs [Guaranteed Departure](/tours/tour-product/guaranteed-departure.md) — Guaranteed departure is the operator's commitment to run a departure regardless of headcount — the inverse of minimum participants. When a departure is guaranteed, the MinPax threshold is effectively zero from the guest's perspective; the operator absorbs the loss on low-attendance departures.

# Citations
[1] [OCTO (Open Connectivity for Tours & Activities) — OCTO Booking API — Availability and MinPax fields](https://docs.octo.travel/docs/getting-started/api-overview)
[2] [Bokun — Bokun Help — Minimum and Maximum Participant Settings](https://help.bokun.io/)
