---
type: Standard Term
title: MIDT
description: 'Marketing Information Data Tapes (MIDT) is an IATA program that collects, aggregates, and distributes GDS booking data—flight bookings, segments, passenger counts, and fare levels by origin-destination, airline, and travel agency—giving airlines and other subscribers visibility into market share, booking trends, and competitive intelligence across participating GDS platforms.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-08-06T00:00:00Z'
id: midt
vertical: air
category: air-shop
conceptType: standard-term
status: active
abbreviation: MIDT
term_ko: 마케팅 정보 데이터 테이프(MIDT)
definition_ko: 'MIDT(Marketing Information Data Tapes)는 GDS 예약 데이터—출발지·도착지·항공사·여행사별 항공 예약, 구간, 승객 수, 운임 수준—를 수집·집계·배포하는 IATA 프로그램이다. 항공사 및 기타 구독자에게 참여 GDS 플랫폼 전반의 시장 점유율, 예약 추세, 경쟁 인텔리전스에 대한 가시성을 제공한다.'
longDef: 'MIDT data is produced when a booking is made in a participating GDS (Amadeus, Sabre, Travelport). Each booking transaction generates a record covering the route, airline, travel-agency pseudo city code (PCC), booking date, travel date, class of service, and passenger count. IATA aggregates these records and delivers them to airline and other subscribers on a periodic (typically weekly) basis. Airlines use MIDT to measure their own share of bookings on each route versus competitors, identify which agencies produce volume, calibrate revenue-management forecasts, and target sales-force efforts. Because MIDT reflects GDS bookings rather than actual travel, a cancellation record is also delivered and must be netted off for accurate analysis. Non-GDS (direct, NDC) bookings are not captured, so MIDT increasingly undercounts real market demand as carriers shift distribution off-GDS.'
longDef_ko: 'MIDT 데이터는 참여 GDS(Amadeus, Sabre, Travelport)에서 예약이 발생할 때 생성된다. 각 예약 트랜잭션은 노선, 항공사, 여행사 PCC(pseudo city code), 예약일, 출발일, 서비스 등급, 승객 수를 포함하는 레코드를 생성한다. IATA는 이 레코드를 집계해 항공사 및 기타 구독자에게 정기적(일반적으로 주간)으로 제공한다. 항공사는 MIDT를 활용해 노선별 자사 예약 점유율을 경쟁사와 비교하고, 볼륨을 생성하는 여행사를 파악하며, 수익 관리 예측을 보정하고, 영업력을 집중할 대상을 선정한다. MIDT는 실제 여행이 아닌 GDS 예약을 반영하므로 취소 레코드도 함께 제공되며, 정확한 분석을 위해 이를 차감해야 한다. GDS 외(직접, NDC) 예약은 반영되지 않아, 항공사가 GDS 외부로 유통을 이동함에 따라 MIDT가 실제 시장 수요를 점점 과소 집계하게 된다.'
standardBody: IATA
aliases:
  - Marketing Information Data Tapes
  - Marketing Intelligence Data Transfer
relationships:
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Revenue Integrity
  - type: related
    targetTerm: Booking Pace
  - type: related
    targetTerm: Revenue Management System
distinctions:
  - targetTerm: GDS
    explanation: 'A GDS is the distribution platform where bookings are made; MIDT is the downstream data product derived from those bookings and sold to airlines for market intelligence purposes.'
    explanation_ko: 'GDS는 예약이 이루어지는 유통 플랫폼이고, MIDT는 그 예약에서 파생되어 시장 인텔리전스 목적으로 항공사에 판매되는 하위 데이터 상품이다.'
  - targetTerm: Revenue Management
    explanation: 'Revenue Management uses booking data to set fares and availability; MIDT is one of the primary external data feeds that informs competitive and market analysis within the revenue management process.'
    explanation_ko: '수익 관리(Revenue Management)는 예약 데이터를 사용하여 운임과 가용성을 설정하고, MIDT는 수익 관리 프로세스 내 경쟁·시장 분석에 정보를 제공하는 주요 외부 데이터 피드 중 하나다.'
sources:
  - name: MIDT — Marketing Information Data Tapes
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/statistics/intelligence/midt/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="30" width="7" height="12" rx="1"/><rect x="16" y="22" width="7" height="20" rx="1"/><rect x="26" y="14" width="7" height="28" rx="1"/><rect x="36" y="6" width="7" height="36" rx="1"/><polyline points="9.5,29 19.5,21 29.5,13 39.5,5"/><circle cx="9.5" cy="29" r="1.5" fill="currentColor"/><circle cx="19.5" cy="21" r="1.5" fill="currentColor"/><circle cx="29.5" cy="13" r="1.5" fill="currentColor"/><circle cx="39.5" cy="5" r="1.5" fill="currentColor"/></svg>
---

> Marketing Information Data Tapes (MIDT) is an IATA program that collects, aggregates, and distributes GDS booking data—flight bookings, segments, passenger counts, and fare levels by origin-destination, airline, and travel agency—giving airlines and other subscribers visibility into market share, booking trends, and competitive intelligence across participating GDS platforms.

MIDT data is produced when a booking is made in a participating GDS (Amadeus, Sabre, Travelport). Each booking transaction generates a record covering the route, airline, travel-agency pseudo city code (PCC), booking date, travel date, class of service, and passenger count. IATA aggregates these records and delivers them to airline and other subscribers on a periodic (typically weekly) basis. Airlines use MIDT to measure their own share of bookings on each route versus competitors, identify which agencies produce volume, calibrate revenue-management forecasts, and target sales-force efforts. Because MIDT reflects GDS bookings rather than actual travel, a cancellation record is also delivered and must be netted off for accurate analysis. Non-GDS (direct, NDC) bookings are not captured, so MIDT increasingly undercounts real market demand as carriers shift distribution off-GDS.

**한국어 / Korean** — **마케팅 정보 데이터 테이프(MIDT)** — MIDT(Marketing Information Data Tapes)는 GDS 예약 데이터—출발지·도착지·항공사·여행사별 항공 예약, 구간, 승객 수, 운임 수준—를 수집·집계·배포하는 IATA 프로그램이다. 항공사 및 기타 구독자에게 참여 GDS 플랫폼 전반의 시장 점유율, 예약 추세, 경쟁 인텔리전스에 대한 가시성을 제공한다.

MIDT 데이터는 참여 GDS(Amadeus, Sabre, Travelport)에서 예약이 발생할 때 생성된다. 각 예약 트랜잭션은 노선, 항공사, 여행사 PCC(pseudo city code), 예약일, 출발일, 서비스 등급, 승객 수를 포함하는 레코드를 생성한다. IATA는 이 레코드를 집계해 항공사 및 기타 구독자에게 정기적(일반적으로 주간)으로 제공한다. 항공사는 MIDT를 활용해 노선별 자사 예약 점유율을 경쟁사와 비교하고, 볼륨을 생성하는 여행사를 파악하며, 수익 관리 예측을 보정하고, 영업력을 집중할 대상을 선정한다. MIDT는 실제 여행이 아닌 GDS 예약을 반영하므로 취소 레코드도 함께 제공되며, 정확한 분석을 위해 이를 차감해야 한다. GDS 외(직접, NDC) 예약은 반영되지 않아, 항공사가 GDS 외부로 유통을 이동함에 따라 MIDT가 실제 시장 수요를 점점 과소 집계하게 된다.

**Aliases:** `Marketing Information Data Tapes`, `Marketing Intelligence Data Transfer`

# Related
- [GDS](/common/standards/gds.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related
- [Revenue Integrity](/air/air-shop/revenue-integrity.md) — related
- [Booking Pace](/lodging/hotel-rate/booking-pace.md) — related
- [Revenue Management System](/lodging/hotel-rate/revenue-management-system.md) — related

# Distinctions
- **MIDT** vs [GDS](/common/standards/gds.md) — A GDS is the distribution platform where bookings are made; MIDT is the downstream data product derived from those bookings and sold to airlines for market intelligence purposes.
- **MIDT** vs [Revenue Management](/air/air-shop/revenue-management.md) — Revenue Management uses booking data to set fares and availability; MIDT is one of the primary external data feeds that informs competitive and market analysis within the revenue management process.

# Citations
[1] [IATA — MIDT — Marketing Information Data Tapes](https://www.iata.org/en/services/statistics/intelligence/midt/)
