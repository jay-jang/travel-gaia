---
type: Process
title: Proration
description: The process of dividing the total fare of an interline or multi-carrier ticket among the participating carriers to determine how much revenue each is owed for the portion it carries. Proration uses standardized prorate factors or negotiated special prorate agreements to allocate the fare across fare components and flight coupons.
tags:
  - air-partner
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: proration
vertical: air
category: air-partner
conceptType: process
status: active
term_ko: 프로레이션(운임 배분)
definition_ko: '인터라인 또는 다중 항공사 항공권의 총 운임을 참여 항공사 간에 나누어, 각 항공사가 자신이 운송한 구간에 대해 받을 수익이 얼마인지 산정하는 과정. 프로레이션은 표준화된 프로레이트 계수 또는 협상된 특별 운임 배분 협정을 사용하여 운임을 운임 구성요소(fare component)와 비행 쿠폰(flight coupon) 전반에 걸쳐 배분한다.'
longDef: 'Proration translates a single through-fare into per-carrier revenue shares used for interline billing and settlement. The default method applies standard prorate factors (often distance/mileage-based weighting) to each segment, but carriers may override these with Special Prorate Agreements (SPAs) for specified markets. The resulting amounts are then billed and cleared, commonly through the IATA Clearing House, as part of revenue accounting.'
longDef_ko: '프로레이션은 단일 일관 운임(through-fare)을 인터라인 청구 및 정산에 사용되는 항공사별 수익 배분 몫으로 변환한다. 기본 방식은 각 구간에 표준 프로레이트 계수(흔히 거리/마일리지 기반 가중치)를 적용하지만, 항공사는 특정 시장에 대해 SPA(Special Prorate Agreement)로 이를 대체할 수 있다. 그 결과로 산출된 금액은 수익 회계의 일부로 청구되고, 일반적으로 IATA Clearing House를 통해 정산된다.'
standardBody: IATA
aliases:
  - Prorate
  - Prorating
  - Fare Proration
  - Pro-ration
relationships:
  - type: narrower
    targetTerm: SPA (Special Prorate Agreement)
  - type: related
    targetTerm: Interline
  - type: related
    targetTerm: MITA
  - type: related
    targetTerm: IATA Clearing House
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Flight Coupon
distinctions:
  - targetTerm: SPA (Special Prorate Agreement)
    explanation: Proration is the general allocation process; an SPA is a specific bilateral agreement supplying special values used in that process.
    explanation_ko: '프로레이션은 일반적인 배분 과정이고, SPA는 그 과정에서 사용되는 특별 값을 제공하는 구체적인 양자 간 협정이다.'
  - targetTerm: Fare Component
    explanation: A fare component is a priced portion of an itinerary; proration is the act of splitting that fare's value among the carriers operating it.
    explanation_ko: '운임 구성요소(fare component)는 여정에서 운임이 책정된 일부 구간이고, 프로레이션은 그 운임 값을 해당 구간을 운항하는 항공사들 간에 나누는 행위다.'
  - targetTerm: NUC
    explanation: NUC is the unit for building a fare; proration uses fare values to split revenue among carriers on a ticket.
    explanation_ko: 'NUC는 운임을 구성하기 위한 단위이고, 정산 배분(proration)은 운임 가치를 사용해 한 항공권의 수익을 항공사 간에 분배한다.'
  - targetTerm: Through Fare
    explanation: A through fare is the single end-to-end price charged to the passenger; proration is the back-office process of splitting that fare's revenue among the carriers that operated the journey.
    explanation_ko: '일관 운임은 승객에게 부과되는 출발지-목적지 단일 가격이고, 프로레이션은 그 운임 수익을 여정을 운송한 항공사들 간에 나누는 후방(back-office) 처리다.'
  - targetTerm: Ticketed Point Mileage (TPM)
    explanation: 'TPM is a distance datum; proration is the process of splitting interline revenue, which can use TPM-derived mileage factors as one prorate basis.'
    explanation_ko: 'TPM은 거리 데이터이고, proration은 interline 수익을 분배하는 과정으로 TPM에서 도출한 마일리지 factor를 하나의 prorate 기준으로 사용할 수 있다.'
sources:
  - name: Prorate Manual — Passenger (PMP)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/finance/prorate-manuals/'
  - name: Revenue Accounting Manual (RAM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/revenue-accounting-manual/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="15"/><path d="M24 9v15l11 7"/><path d="M24 24L13 16"/></svg>
---

> The process of dividing the total fare of an interline or multi-carrier ticket among the participating carriers to determine how much revenue each is owed for the portion it carries. Proration uses standardized prorate factors or negotiated special prorate agreements to allocate the fare across fare components and flight coupons.

Proration translates a single through-fare into per-carrier revenue shares used for interline billing and settlement. The default method applies standard prorate factors (often distance/mileage-based weighting) to each segment, but carriers may override these with Special Prorate Agreements (SPAs) for specified markets. The resulting amounts are then billed and cleared, commonly through the IATA Clearing House, as part of revenue accounting.

**한국어 / Korean** — **프로레이션(운임 배분)** — 인터라인 또는 다중 항공사 항공권의 총 운임을 참여 항공사 간에 나누어, 각 항공사가 자신이 운송한 구간에 대해 받을 수익이 얼마인지 산정하는 과정. 프로레이션은 표준화된 프로레이트 계수 또는 협상된 특별 운임 배분 협정을 사용하여 운임을 운임 구성요소(fare component)와 비행 쿠폰(flight coupon) 전반에 걸쳐 배분한다.

프로레이션은 단일 일관 운임(through-fare)을 인터라인 청구 및 정산에 사용되는 항공사별 수익 배분 몫으로 변환한다. 기본 방식은 각 구간에 표준 프로레이트 계수(흔히 거리/마일리지 기반 가중치)를 적용하지만, 항공사는 특정 시장에 대해 SPA(Special Prorate Agreement)로 이를 대체할 수 있다. 그 결과로 산출된 금액은 수익 회계의 일부로 청구되고, 일반적으로 IATA Clearing House를 통해 정산된다.

**Aliases:** `Prorate`, `Prorating`, `Fare Proration`, `Pro-ration`

# Related
- [SPA (Special Prorate Agreement)](/air/air-partner/spa-special-prorate-agreement.md) — narrower
- [Interline](/air/air-partner/interline.md) — related
- [MITA](/air/air-partner/mita.md) — related
- [IATA Clearing House](/common/pay/iata-clearing-house.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related

# Distinctions
- **Proration** vs [SPA (Special Prorate Agreement)](/air/air-partner/spa-special-prorate-agreement.md) — Proration is the general allocation process; an SPA is a specific bilateral agreement supplying special values used in that process.
- **Proration** vs [Fare Component](/air/air-shop/fare-component.md) — A fare component is a priced portion of an itinerary; proration is the act of splitting that fare's value among the carriers operating it.
- **Proration** vs [NUC](/air/air-shop/nuc.md) — NUC is the unit for building a fare; proration uses fare values to split revenue among carriers on a ticket.
- **Proration** vs [Through Fare](/air/air-partner/through-fare.md) — A through fare is the single end-to-end price charged to the passenger; proration is the back-office process of splitting that fare's revenue among the carriers that operated the journey.
- **Proration** vs [Ticketed Point Mileage (TPM)](/air/air-shop/ticketed-point-mileage.md) — TPM is a distance datum; proration is the process of splitting interline revenue, which can use TPM-derived mileage factors as one prorate basis.

# Citations
[1] [IATA — Prorate Manual — Passenger (PMP)](https://www.iata.org/en/services/finance/prorate-manuals/)
[2] [IATA — Revenue Accounting Manual (RAM)](https://www.iata.org/en/publications/manuals/revenue-accounting-manual/)
