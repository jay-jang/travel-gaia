---
type: Business Term
title: Transfer
description: 'A private, shared, or scheduled ground vehicle service that transports travelers between two defined points — typically an airport, hotel, cruise terminal, rail station, or attraction — as a bookable product sold independently or bundled into a tour package. Transfers are one of the most fundamental products offered by destination management companies and ground operators.'
tags:
  - tour-ops
  - active
  - UNWTO
timestamp: '2026-07-17T00:00:00Z'
id: transfer
vertical: tours
category: tour-ops
conceptType: business-term
status: active
term_ko: 이동 서비스(Transfer)
definition_ko: '여행자를 두 개의 정해진 지점(공항, 호텔, 크루즈 터미널, 기차역, 관광지 등) 사이에서 이동시키는 전용·공유·정기 육상 교통 서비스로, 독립적으로 또는 투어 패키지에 포함되어 판매되는 예약 가능한 상품이다. 이동 서비스는 목적지 관리 회사(DMC) 및 지상 운영사가 제공하는 가장 기본적인 상품 중 하나다.'
longDef: 'Transfers are categorized by vehicle type (sedan, minibus, coach, boat shuttle) and sharing model: a private transfer uses a dedicated vehicle for one party; a shared transfer (shuttle) groups multiple passengers on a common route and schedule; a scheduled transfer follows a published timetable like a bus line. In distribution, transfers are often booked as standalone products on OTA platforms or bundled as the first and last mile of a package tour. The OCTO (Open Connectivity for Tours & Experiences) specification includes transfer as a distinct product type with its own route, departure time, and vehicle capacity properties. In package holiday regulation (EU Package Travel Directive), a transfer is frequently the transport element that converts an accommodation booking into a "package," triggering consumer protection obligations.'
longDef_ko: '이동 서비스는 차량 유형(세단, 미니버스, 코치, 보트 셔틀)과 공유 방식에 따라 분류된다. 전용(private) 이동 서비스는 한 그룹만을 위한 전용 차량을 사용하고, 공유(shared) 이동 서비스(셔틀)는 공동 경로와 일정에 여러 승객을 묶으며, 정기(scheduled) 이동 서비스는 버스 노선처럼 공표된 시각표를 따른다. 유통 측면에서 이동 서비스는 OTA 플랫폼에서 독립 상품으로 예약되거나 패키지 투어의 처음과 끝을 잇는 이동편으로 묶인다. OCTO(체험 상품 오픈 커넥티비티) 규격은 이동 서비스를 고유한 경로·출발 시각·차량 정원 속성을 가진 별도의 상품 유형으로 정의한다. 패키지 휴가 규정(EU 패키지 여행 지침)에서 이동 서비스는 숙박 예약을 "패키지"로 전환하여 소비자 보호 의무를 발생시키는 운송 요소가 되는 경우가 많다.'
aliases:
  - Airport Transfer
  - Ground Transfer
  - Shuttle Transfer
  - Private Transfer
providerTerms:
  - provider: Viator (Tripadvisor)
    term: Transfer
    context: Viator lists transfers as a distinct product category under "Transportation & Airport Transfers," bookable on a per-passenger or per-vehicle basis.
    context_ko: 'Viator는 이동 서비스를 "교통 및 공항 이동" 카테고리 아래 별도의 상품 유형으로 분류하며, 승객당 또는 차량당 요금으로 예약 가능하다.'
    relationship: same
  - provider: GetYourGuide
    term: Transfer
    context: GetYourGuide offers transfers as a standalone product type distinguished from tours and activities, typically with fixed pickup and drop-off points.
    context_ko: 'GetYourGuide는 이동 서비스를 투어·액티비티와 구별되는 독립 상품 유형으로 제공하며, 일반적으로 고정된 픽업·하차 지점을 갖는다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Destination Management Company
  - type: related
    targetTerm: Meeting Point
  - type: related
    targetTerm: Land Package
  - type: related
    targetTerm: Activity
distinctions:
  - targetTerm: Activity
    explanation: 'An activity is an experience product (a tour, a cooking class, a boat trip) where the journey itself is part of the product or where guests are engaged at a destination; a transfer is purely a point-to-point transportation service with no experiential element.'
    explanation_ko: '액티비티는 여정 자체가 상품의 일부이거나 목적지에서 고객이 참여하는 체험 상품(투어, 요리 수업, 보트 여행)인 반면, 이동 서비스는 체험 요소 없이 순수하게 출발지와 목적지 간 이동만을 제공한다.'
  - targetTerm: Transfer Partner
    explanation: 'In airline loyalty, a Transfer Partner is a program (hotel, credit card, retailer) to which frequent-flyer miles can be converted; a ground Transfer is a physical vehicle service that moves a passenger between two locations — they share only the word "transfer."'
    explanation_ko: '항공 로열티에서 Transfer Partner는 상용고객 마일을 전환할 수 있는 프로그램(호텔, 카드사, 소매업체)이고, 지상 Transfer는 두 지점 사이에서 승객을 이동시키는 실물 교통 서비스로, 단어만 같을 뿐이다.'
sources:
  - name: OCTO (Open Connectivity for Tours & Experiences) Specification — Product Types
    org: OCTO
    version: 'v1'
    section: 'Product Types'
    url: 'https://octotravel.github.io/octo/product'
    tier: association
  - name: 'EU Package Travel Directive 2015/2302 — Article 3 Definitions'
    org: European Parliament
    version: '2015/2302'
    section: 'Article 3'
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32015L2302'
    tier: regulation
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="24" r="3"/><circle cx="41" cy="24" r="3"/><line x1="10" y1="24" x2="14" y2="24"/><line x1="34" y1="24" x2="38" y2="24"/><rect x="14" y="18" width="20" height="12" rx="3"/><circle cx="19" cy="30" r="3"/><circle cx="29" cy="30" r="3"/><path d="M19 18v-4"/><path d="M29 18v-4"/><path d="M37 21l4 3-4 3"/></svg>
---

> A private, shared, or scheduled ground vehicle service that transports travelers between two defined points — typically an airport, hotel, cruise terminal, rail station, or attraction — as a bookable product sold independently or bundled into a tour package. Transfers are one of the most fundamental products offered by destination management companies and ground operators.

Transfers are categorized by vehicle type (sedan, minibus, coach, boat shuttle) and sharing model: a private transfer uses a dedicated vehicle for one party; a shared transfer (shuttle) groups multiple passengers on a common route and schedule; a scheduled transfer follows a published timetable like a bus line. In distribution, transfers are often booked as standalone products on OTA platforms or bundled as the first and last mile of a package tour. The OCTO (Open Connectivity for Tours & Experiences) specification includes transfer as a distinct product type with its own route, departure time, and vehicle capacity properties. In package holiday regulation (EU Package Travel Directive), a transfer is frequently the transport element that converts an accommodation booking into a "package," triggering consumer protection obligations.

**한국어 / Korean** — **이동 서비스(Transfer)** — 여행자를 두 개의 정해진 지점(공항, 호텔, 크루즈 터미널, 기차역, 관광지 등) 사이에서 이동시키는 전용·공유·정기 육상 교통 서비스로, 독립적으로 또는 투어 패키지에 포함되어 판매되는 예약 가능한 상품이다. 이동 서비스는 목적지 관리 회사(DMC) 및 지상 운영사가 제공하는 가장 기본적인 상품 중 하나다.

이동 서비스는 차량 유형(세단, 미니버스, 코치, 보트 셔틀)과 공유 방식에 따라 분류된다. 전용 이동 서비스는 한 그룹만을 위한 전용 차량을 사용하고, 공유 이동 서비스(셔틀)는 공동 경로와 일정에 여러 승객을 묶으며, 정기 이동 서비스는 버스 노선처럼 공표된 시각표를 따른다. 유통 측면에서 이동 서비스는 OTA 플랫폼에서 독립 상품으로 예약되거나 패키지 투어의 처음과 끝을 잇는 이동편으로 묶인다.

**Aliases:** `Airport Transfer`, `Ground Transfer`, `Shuttle Transfer`, `Private Transfer`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Viator (Tripadvisor) | `Transfer` | same | Viator lists transfers as a distinct product category under "Transportation & Airport Transfers," bookable on a per-passenger or per-vehicle basis. |
| GetYourGuide | `Transfer` | same | GetYourGuide offers transfers as a standalone product type distinguished from tours and activities, typically with fixed pickup and drop-off points. |

# Related
- [Destination Management Company](/tours/tour-ops/destination-management-company.md) — related
- [Meeting Point](/tours/tour-ops/meeting-point.md) — related
- [Land Package](/tours/tour-ops/land-package.md) — related
- [Activity](/tours/tour-product/activity.md) — related

# Distinctions
- **Transfer** vs [Activity](/tours/tour-product/activity.md) — An activity is an experience product (a tour, a cooking class, a boat trip) where the journey itself is part of the product or where guests are engaged at a destination; a transfer is purely a point-to-point transportation service with no experiential element.
- **Transfer** vs [Transfer Partner](/common/customer/transfer-partner.md) — In airline loyalty, a Transfer Partner is a program (hotel, credit card, retailer) to which frequent-flyer miles can be converted; a ground Transfer is a physical vehicle service that moves a passenger between two locations — they share only the word "transfer."

# Citations
[1] [OCTO — OCTO (Open Connectivity for Tours & Experiences) Specification — Product Types](https://octotravel.github.io/octo/product)
[2] [European Parliament — EU Package Travel Directive 2015/2302 — Article 3 Definitions](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32015L2302)
