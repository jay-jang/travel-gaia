---
type: Business Term
title: Minimum Group Size
description: 'Minimum Group Size is the minimum number of confirmed participants required for a tour, activity, or guided experience to operate; if confirmed bookings fall below this threshold by the departure date, the operator may cancel the departure or consolidate participants with another scheduled date.'
tags:
  - tour-product
  - active
  - OCTO
timestamp: '2026-07-23T00:00:00Z'
id: minimum-group-size
vertical: tours
category: tour-product
conceptType: business-term
status: active
term_ko: 최소 출발 인원(Minimum Group Size)
definition_ko: '최소 출발 인원은 투어·액티비티·가이드 체험이 진행되기 위해 필요한 최소 확정 참가자 수다. 출발일까지 확정 예약이 이 기준에 미치지 못할 경우, 운영사는 해당 출발을 취소하거나 다른 예정 날짜의 참가자와 통합할 수 있다.'
longDef: 'Minimum Group Size (sometimes called minimum pax or minimum participants) exists because operating a tour below a certain headcount is economically unviable — guide fees, transport costs, and venue guarantees may not be recouped. Operators publish the minimum alongside the maximum capacity; a tour with a minimum of 2 and a maximum of 15 will depart only when at least 2 have confirmed. If minimums are not met, operators typically offer affected customers a full refund or a free rebooking to the next available departure. In distribution platforms and connectivity APIs such as OCTO, the minimum group size is exposed as a product attribute on the availability response so resellers and OTAs can surface the risk of cancellation to consumers. Some products with high fixed costs (private boat tours, helicopter experiences) set the minimum equal to the maximum, effectively operating only when fully sold.'
longDef_ko: '최소 출발 인원(최소 pax 또는 최소 참가 인원이라고도 함)은 특정 인원 이하로 투어를 운영하는 것이 경제적으로 불가능하기 때문에 존재한다. 가이드 비용, 교통 비용, 장소 보증 등이 회수되지 않을 수 있다. 운영사는 최대 정원과 함께 최소 인원을 공시하며, 최소 2명/최대 15명 투어는 최소 2명이 확정되어야만 출발한다. 최소 인원을 충족하지 못하면 운영사는 일반적으로 영향을 받는 고객에게 전액 환불 또는 다음 가능한 출발일로의 무료 재예약을 제공한다. OCTO와 같은 유통 플랫폼 및 커넥티비티 API에서 최소 출발 인원은 가용성 응답의 상품 속성으로 제공되어 리셀러와 OTA가 소비자에게 취소 위험을 알릴 수 있게 한다. 고정 비용이 높은 일부 상품(전세 보트 투어, 헬리콥터 체험 등)은 최소 인원을 최대 정원과 동일하게 설정하여 완전 판매 시에만 운영한다.'
aliases:
  - Minimum Pax
  - Minimum Participants
  - Minimum Booking Threshold
relationships:
  - type: related
    targetTerm: Guaranteed Departure
  - type: related
    targetTerm: Capacity
  - type: related
    targetTerm: Supplier Cancellation
distinctions:
  - targetTerm: Guaranteed Departure
    explanation: 'A Guaranteed Departure is a departure confirmed by the operator to run regardless of how many book (i.e., no minimum group size risk to the consumer); Minimum Group Size is the threshold that must be reached before a non-guaranteed departure is confirmed to operate.'
    explanation_ko: 'Guaranteed Departure(보장 출발)는 운영사가 예약 인원에 관계없이 진행하기로 확인한 출발(즉 소비자에게 최소 출발 인원 위험 없음)이고, 최소 출발 인원은 미보장 출발이 운영되기 위해 달성해야 하는 기준이다.'
  - targetTerm: Capacity
    explanation: 'Capacity is the maximum number of participants a tour can accommodate; Minimum Group Size is the lower bound below which the tour may not operate at all. A sold-out tour has reached capacity; a cancelled departure has failed to reach the minimum group size.'
    explanation_ko: 'Capacity(정원)는 투어가 수용할 수 있는 최대 참가자 수이고, 최소 출발 인원은 투어가 운영되지 않을 수 있는 하한선이다. 매진 투어는 정원을 달성한 것이고, 취소된 출발은 최소 출발 인원을 충족하지 못한 것이다.'
  - targetTerm: Supplier Cancellation
    explanation: 'Supplier Cancellation is any operator-initiated cancellation of a confirmed booking; a Minimum Group Size cancellation is a specific sub-type of supplier cancellation that occurs because the headcount did not reach the operational threshold, not because of force majeure or operator error.'
    explanation_ko: 'Supplier Cancellation(공급사 취소)은 운영사가 확정 예약을 취소하는 모든 경우이고, 최소 출발 인원 취소는 불가항력이나 운영사 오류가 아니라 참가 인원이 운영 기준에 미달했기 때문에 발생하는 특정 하위 유형이다.'
sources:
  - name: 'OCTO Specification — Booking and Availability Model (unit, capacity, and availability object)'
    org: Open Connectivity for Tours and Activities (OCTO)
    version: '1.3'
    section: 'Availability'
    url: 'https://docs.octo.travel/'
    tier: association
  - name: 'Viator / TripAdvisor Experiences — Product creation guidelines (minimum and maximum participants)'
    org: Viator
    version: ''
    section: Product Attributes
    url: 'https://supplier.viator.com/help'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="18" r="5"/><circle cx="32" cy="18" r="5"/><path d="M6 38c0-6 4-10 10-10h16c6 0 10 4 10 10"/><line x1="24" y1="8" x2="24" y2="40"/><line x1="20" y1="40" x2="28" y2="40"/><path d="M19 12l2 2 4-4"/></svg>
---

> Minimum Group Size is the minimum number of confirmed participants required for a tour, activity, or guided experience to operate; if confirmed bookings fall below this threshold by the departure date, the operator may cancel the departure or consolidate participants with another scheduled date.

Minimum Group Size (sometimes called minimum pax or minimum participants) exists because operating a tour below a certain headcount is economically unviable — guide fees, transport costs, and venue guarantees may not be recouped. Operators publish the minimum alongside the maximum capacity; a tour with a minimum of 2 and a maximum of 15 will depart only when at least 2 have confirmed. If minimums are not met, operators typically offer affected customers a full refund or a free rebooking to the next available departure. In distribution platforms and connectivity APIs such as OCTO, the minimum group size is exposed as a product attribute on the availability response so resellers and OTAs can surface the risk of cancellation to consumers. Some products with high fixed costs (private boat tours, helicopter experiences) set the minimum equal to the maximum, effectively operating only when fully sold.

**한국어 / Korean** — **최소 출발 인원(Minimum Group Size)** — 최소 출발 인원은 투어·액티비티·가이드 체험이 진행되기 위해 필요한 최소 확정 참가자 수다. 출발일까지 확정 예약이 이 기준에 미치지 못할 경우, 운영사는 해당 출발을 취소하거나 다른 예정 날짜의 참가자와 통합할 수 있다.

최소 출발 인원(최소 pax 또는 최소 참가 인원이라고도 함)은 특정 인원 이하로 투어를 운영하는 것이 경제적으로 불가능하기 때문에 존재한다. 운영사는 최대 정원과 함께 최소 인원을 공시하며, 최소 인원 미달 시 일반적으로 전액 환불 또는 무료 재예약을 제공한다. OCTO와 같은 커넥티비티 API에서 최소 출발 인원은 가용성 응답의 상품 속성으로 제공된다.

**Aliases:** `Minimum Pax`, `Minimum Participants`, `Minimum Booking Threshold`

# Related
- [Guaranteed Departure](/tours/tour-product/guaranteed-departure.md) — related
- [Capacity](/tours/tour-product/capacity.md) — related
- [Supplier Cancellation](/tours/tour-ops/supplier-cancellation.md) — related

# Distinctions
- **Minimum Group Size** vs [Guaranteed Departure](/tours/tour-product/guaranteed-departure.md) — A Guaranteed Departure is a departure confirmed by the operator to run regardless of how many book (i.e., no minimum group size risk to the consumer); Minimum Group Size is the threshold that must be reached before a non-guaranteed departure is confirmed to operate.
- **Minimum Group Size** vs [Capacity](/tours/tour-product/capacity.md) — Capacity is the maximum number of participants a tour can accommodate; Minimum Group Size is the lower bound below which the tour may not operate at all. A sold-out tour has reached capacity; a cancelled departure has failed to reach the minimum group size.
- **Minimum Group Size** vs [Supplier Cancellation](/tours/tour-ops/supplier-cancellation.md) — Supplier Cancellation is any operator-initiated cancellation of a confirmed booking; a Minimum Group Size cancellation is a specific sub-type of supplier cancellation that occurs because the headcount did not reach the operational threshold, not because of force majeure or operator error.

# Citations
[1] [Open Connectivity for Tours and Activities (OCTO) — OCTO Specification v1.3 — Availability](https://docs.octo.travel/)
[2] [Viator — Supplier Help — Product Attributes](https://supplier.viator.com/help)
