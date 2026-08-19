---
type: Business Term
title: Cutoff Time
description: 'The latest point in time before an activity''s scheduled start at which new bookings are accepted through online or agent channels; once the cutoff passes, the product is closed to further sale for that timeslot or departure.'
tags:
  - tour-dist
  - active
  - OCTO
timestamp: '2026-08-19T00:00:00Z'
id: cutoff-time
vertical: tours
category: tour-dist
conceptType: business-term
status: active
term_ko: '예약 마감 시간(Cutoff Time)'
definition_ko: '온라인 또는 에이전트 채널을 통한 신규 예약이 수락되는 액티비티 출발 기준의 최종 시점으로, 마감 시간이 지나면 해당 타임슬롯 또는 출발에 대한 추가 판매가 종료된다.'
longDef: 'Cutoff time is expressed as an offset before the activity start (e.g. "24 hours", "2 hours") or as an absolute clock time on the departure day. It is a mandatory field in the OCTO Booking API and is used by distribution platforms (OTAs, channel managers, booking widgets) to remove the availability option from the shopping interface once the window has passed. A short cutoff (e.g. 30 minutes) enables last-minute bookings but leaves less preparation time for the operator; a long cutoff (e.g. 48 hours) allows manifests and logistics to be prepared in advance. When a booking arrives after cutoff it typically falls to On-Request status, requiring manual operator approval before confirmation. Cutoff time is configured per product or per timeslot in reservation technology platforms such as Bokun, FareHarbor, and Rezdy.'
longDef_ko: '예약 마감 시간은 액티비티 시작 전 오프셋(예: "24시간", "2시간")으로 표현하거나, 출발 당일의 절대 시각으로 지정한다. OCTO 예약 API의 필수 필드이며, OTA·채널 매니저·예약 위젯 등 유통 플랫폼이 쇼핑 인터페이스에서 가용 옵션을 제거하는 데 활용된다. 짧은 마감(예: 30분)은 막바지 예약을 가능하게 하지만 운영 준비 시간이 줄어들고, 긴 마감(예: 48시간)은 매니페스트와 물류를 사전에 준비할 수 있게 한다. 마감 후 접수된 예약은 통상 On-Request 상태로 전환되어 확정 전 운영사의 수동 승인이 필요하다. 예약 마감 시간은 Bokun·FareHarbor·Rezdy 등 예약 기술 플랫폼에서 상품별 또는 타임슬롯별로 설정된다.'
standardBody: OCTO
aliases:
  - Booking Cutoff
  - Sales Cutoff
  - Booking Deadline
relationships:
  - type: related
    targetTerm: Timeslot
  - type: related
    targetTerm: Instant Confirmation
  - type: related
    targetTerm: On-Request Booking
  - type: related
    targetTerm: Reservation Technology
distinctions:
  - targetTerm: Instant Confirmation
    explanation: 'Instant confirmation describes whether a booking is confirmed in real time; cutoff time describes how far in advance the last booking must arrive. A product may offer instant confirmation yet still enforce a cutoff (e.g. confirm automatically up until 2 hours before departure, then close).'
    explanation_ko: '즉시 확정(instant confirmation)은 예약이 실시간으로 확정되는지 여부를 나타내고, 예약 마감 시간은 마지막 예약이 도착해야 하는 사전 기한을 나타낸다. 예약 마감 시간을 두면서도 즉시 확정을 제공할 수 있다(예: 출발 2시간 전까지는 자동 확정, 이후 판매 종료).'
  - targetTerm: On-Request Booking
    explanation: 'When a booking request arrives after the cutoff it becomes an on-request booking that requires manual operator review; the cutoff is the threshold that determines which bookings are automatic and which require review.'
    explanation_ko: '마감 시간 이후에 접수된 예약 요청은 운영사의 수동 검토가 필요한 온리퀘스트 예약이 된다. 마감 시간은 자동 처리와 검토 필요를 구분하는 기준점이다.'
sources:
  - name: OCTO Booking API — Availability & Cutoff fields
    org: OCTO (Open Connectivity for Tours & Activities)
    version: '1.0'
    section: Availability
    url: 'https://docs.octo.travel/docs/getting-started/api-overview'
    tier: standard-body
  - name: Bokun Help — Setting booking cutoff times for products
    org: Bokun
    version: ''
    section: ''
    url: 'https://help.bokun.io/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="26" r="14"/><path d="M24 16v10l6 4"/><path d="M17 6h14"/><path d="M37 10l-3 4"/><path d="M11 10l3 4"/></svg>
---

> The latest point in time before an activity's scheduled start at which new bookings are accepted through online or agent channels; once the cutoff passes, the product is closed to further sale for that timeslot or departure.

Cutoff time is expressed as an offset before the activity start (e.g. "24 hours", "2 hours") or as an absolute clock time on the departure day. It is a mandatory field in the OCTO Booking API and is used by distribution platforms (OTAs, channel managers, booking widgets) to remove the availability option from the shopping interface once the window has passed. A short cutoff (e.g. 30 minutes) enables last-minute bookings but leaves less preparation time for the operator; a long cutoff (e.g. 48 hours) allows manifests and logistics to be prepared in advance. When a booking arrives after cutoff it typically falls to On-Request status, requiring manual operator approval before confirmation. Cutoff time is configured per product or per timeslot in reservation technology platforms such as Bokun, FareHarbor, and Rezdy.

**한국어 / Korean** — **예약 마감 시간(Cutoff Time)** — 온라인 또는 에이전트 채널을 통한 신규 예약이 수락되는 액티비티 출발 기준의 최종 시점으로, 마감 시간이 지나면 해당 타임슬롯 또는 출발에 대한 추가 판매가 종료된다.

예약 마감 시간은 액티비티 시작 전 오프셋(예: "24시간", "2시간")으로 표현하거나, 출발 당일의 절대 시각으로 지정한다. OCTO 예약 API의 필수 필드이며, OTA·채널 매니저·예약 위젯 등 유통 플랫폼이 쇼핑 인터페이스에서 가용 옵션을 제거하는 데 활용된다. 짧은 마감(예: 30분)은 막바지 예약을 가능하게 하지만 운영 준비 시간이 줄어들고, 긴 마감(예: 48시간)은 매니페스트와 물류를 사전에 준비할 수 있게 한다. 마감 후 접수된 예약은 통상 On-Request 상태로 전환되어 확정 전 운영사의 수동 승인이 필요하다. 예약 마감 시간은 Bokun·FareHarbor·Rezdy 등 예약 기술 플랫폼에서 상품별 또는 타임슬롯별로 설정된다.

**Aliases:** `Booking Cutoff`, `Sales Cutoff`, `Booking Deadline`

# Related
- [Timeslot](/tours/tour-product/timeslot.md) — related
- [Instant Confirmation](/tours/tour-dist/instant-confirmation.md) — related
- [On-Request Booking](/tours/tour-dist/on-request-booking.md) — related
- [Reservation Technology](/tours/tour-dist/reservation-technology.md) — related

# Distinctions
- **Cutoff Time** vs [Instant Confirmation](/tours/tour-dist/instant-confirmation.md) — Instant confirmation describes whether a booking is confirmed in real time; cutoff time describes how far in advance the last booking must arrive. A product may offer instant confirmation yet still enforce a cutoff (e.g. confirm automatically up until 2 hours before departure, then close).
- **Cutoff Time** vs [On-Request Booking](/tours/tour-dist/on-request-booking.md) — When a booking request arrives after the cutoff it becomes an on-request booking that requires manual operator review; the cutoff is the threshold that determines which bookings are automatic and which require review.

# Citations
[1] [OCTO (Open Connectivity for Tours & Activities) — OCTO Booking API — Availability & Cutoff fields](https://docs.octo.travel/docs/getting-started/api-overview)
[2] [Bokun — Bokun Help — Setting booking cutoff times for products](https://help.bokun.io/)
