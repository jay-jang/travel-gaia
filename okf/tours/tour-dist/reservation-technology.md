---
type: System
title: Reservation Technology
description: >-
  Software an activity operator uses to manage products, availability, capacity
  and bookings, and to connect that inventory to distribution channels.
tags:
  - tour-dist
  - active
  - Tours & Activities
timestamp: '2026-06-24T00:00:00Z'
id: reservation-technology
vertical: tours
category: tour-dist
conceptType: system
status: active
term_ko: 예약 시스템(Reservation Technology)
definition_ko: 액티비티 운영사가 상품·가용성·정원·예약을 관리하고 그 재고를 유통 채널에 연결하기 위해 사용하는 소프트웨어다.
longDef: >-
  Reservation technology (res-tech) — platforms such as FareHarbor, Rezdy,
  Bokun, TrekkSoft and Ventrata — is the operator's system of record: it holds
  the live availability calendar, manages capacity and pricing, takes direct
  bookings, and exposes APIs so marketplaces can shop and book in real time. It
  is the activities-sector counterpart of an airline PSS or a hotel PMS/CRS, and
  its penetration determines how much inventory can be sold with instant
  confirmation.
longDef_ko: >-
  예약 시스템(res-tech) — FareHarbor·Rezdy·Bokun·TrekkSoft·Ventrata 같은 플랫폼 — 은 운영사의
  기록 시스템이다. 실시간 가용성 캘린더를 보유하고 정원·가격을 관리하며 직접 예약을 받고, 마켓플레이스가 실시간으로 조회·예약할 수 있도록
  API를 노출한다. 항공의 PSS, 호텔의 PMS/CRS에 대응하는 개념으로, 그 보급률이 즉시확정으로 판매 가능한 재고 규모를 좌우한다.
aliases:
  - Res-tech
  - Booking System
  - Booking Software
  - Reservation System (Activities)
relationships:
  - type: related
    targetTerm: Activity Operator
  - type: related
    targetTerm: Reseller API
  - type: related
    targetTerm: Connectivity Hub
distinctions:
  - targetTerm: Connectivity Hub
    explanation: >-
      Reservation technology runs one operator's availability and bookings; a
      connectivity hub interconnects many operators' systems with many resellers
      through a single integration.
    explanation_ko: >-
      예약 시스템은 한 운영사의 가용성·예약을 운용하고, 커넥티비티 허브는 다수 운영사 시스템과 다수 리셀러를 단일 연동으로 상호
      연결한다.
sources:
  - name: FareHarbor — Reservation & booking software
    org: FareHarbor (Booking Holdings)
    version: ''
    section: ''
    url: 'https://fareharbor.com/'
    tier: vendor-doc
  - name: Rezdy — Online booking software
    org: Rezdy
    version: ''
    section: ''
    url: 'https://www.rezdy.com/'
    tier: vendor-doc
icon: >-
  <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none"
  stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24"
  r="6"/><path d="M24 8v6M24 34v6M8 24h6M34 24h6M13 13l4 4M31 31l4 4M35 13l-4
  4M17 31l-4 4"/></svg>
---

> Software an activity operator uses to manage products, availability, capacity and bookings, and to connect that inventory to distribution channels.

Reservation technology (res-tech) — platforms such as FareHarbor, Rezdy, Bokun, TrekkSoft and Ventrata — is the operator's system of record: it holds the live availability calendar, manages capacity and pricing, takes direct bookings, and exposes APIs so marketplaces can shop and book in real time. It is the activities-sector counterpart of an airline PSS or a hotel PMS/CRS, and its penetration determines how much inventory can be sold with instant confirmation.

**한국어 / Korean** — **예약 시스템(Reservation Technology)** — 액티비티 운영사가 상품·가용성·정원·예약을 관리하고 그 재고를 유통 채널에 연결하기 위해 사용하는 소프트웨어다.

예약 시스템(res-tech) — FareHarbor·Rezdy·Bokun·TrekkSoft·Ventrata 같은 플랫폼 — 은 운영사의 기록 시스템이다. 실시간 가용성 캘린더를 보유하고 정원·가격을 관리하며 직접 예약을 받고, 마켓플레이스가 실시간으로 조회·예약할 수 있도록 API를 노출한다. 항공의 PSS, 호텔의 PMS/CRS에 대응하는 개념으로, 그 보급률이 즉시확정으로 판매 가능한 재고 규모를 좌우한다.

**Aliases:** `Res-tech`, `Booking System`, `Booking Software`, `Reservation System (Activities)`

# Related
- Activity Operator — related
- Reseller API — related
- Connectivity Hub — related

# Distinctions
- **Reservation Technology** vs Connectivity Hub — Reservation technology runs one operator's availability and bookings; a connectivity hub interconnects many operators' systems with many resellers through a single integration.

# Citations
[1] [FareHarbor (Booking Holdings) — FareHarbor — Reservation & booking software](https://fareharbor.com/)
[2] [Rezdy — Rezdy — Online booking software](https://www.rezdy.com/)
