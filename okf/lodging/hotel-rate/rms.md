---
type: System
title: Revenue Management System
description: 'A Revenue Management System (RMS) is the software platform that hotels (and other hospitality operators) use to automate and optimise pricing and inventory decisions. It ingests historical booking data, pick-up pace, competitor rates, event calendars, and demand signals to generate rate recommendations or automatically update rates across the property management system and distribution channels — translating the strategic discipline of revenue management into real-time, data-driven execution.'
tags:
  - hotel-rate
  - active
  - HSMAI
timestamp: '2026-08-05T00:00:00Z'
id: rms
vertical: lodging
category: hotel-rate
conceptType: system
status: active
abbreviation: RMS
standardBody: HSMAI
term_ko: 수익 관리 시스템(RMS)
definition_ko: '수익 관리 시스템(RMS)은 호텔(및 기타 환대 사업자)이 가격·재고 결정을 자동화하고 최적화하기 위해 사용하는 소프트웨어 플랫폼이다. 과거 예약 데이터, 픽업 속도, 경쟁사 요금, 이벤트 일정, 수요 신호를 수집·분석하여 요금 추천을 생성하거나 PMS와 유통 채널 전반의 요금을 자동으로 업데이트함으로써, 수익 관리 전략을 실시간 데이터 기반 실행으로 전환한다.'
longDef: 'An RMS functions as the analytical engine of hotel revenue management. Core modules typically include: (1) demand forecasting — projecting occupancy and rate by date, room type, and market segment; (2) rate optimisation — generating BAR and segment-specific rate recommendations that maximise expected RevPAR or TRevPAR; (3) inventory controls — setting minimum-length-of-stay (MLOS), closed-to-arrival (CTA), and overbooking buffers; (4) competitor rate intelligence — ingesting rate-shopping data; and (5) reporting and KPI dashboards. Modern cloud-based RMS platforms — such as IDeaS Revenue Solutions (SAS), Duetto, Amadeus Revenue Management, and Lighthouse — connect via API to the PMS and channel manager, enabling fully automated rate deployment. Human revenue managers review recommendations through an exceptions dashboard and override or accept them as needed. HSMAI''s Revenue Management Advisory Board publishes competency frameworks and benchmarks on RMS adoption, while HTNG (Hospitality Technology Next Generation) defines interoperability standards between RMS and PMS platforms.'
longDef_ko: 'RMS는 호텔 수익 관리의 분석 엔진 역할을 한다. 핵심 모듈에는 일반적으로 다음이 포함된다: (1) 수요 예측 — 날짜·객실 유형·시장 세그먼트별 점유율 및 요금 예측; (2) 요금 최적화 — 예상 RevPAR 또는 TRevPAR을 극대화하는 BAR 및 세그먼트별 요금 추천 생성; (3) 재고 통제 — 최소 투숙 기간(MLOS), 체크인 마감(CTA), 초과 예약 버퍼 설정; (4) 경쟁사 요금 인텔리전스 — rate-shopping 데이터 수집; (5) 보고서·KPI 대시보드. IDeaS Revenue Solutions(SAS), Duetto, Amadeus Revenue Management, Lighthouse 등 현대 클라우드 기반 RMS 플랫폼은 PMS 및 채널 매니저와 API로 연동되어 완전 자동화 요금 배포를 가능하게 한다. 인간 수익 관리자는 예외 대시보드를 통해 RMS 추천을 검토하고 수락 또는 재정의한다.'
aliases:
  - Hotel RMS
  - Revenue Optimisation System
  - Pricing Optimisation System
relationships:
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: Dynamic Pricing
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Total Revenue Management
  - type: related
    targetTerm: Rate Shopping
  - type: related
    targetTerm: PMS
distinctions:
  - targetTerm: Revenue Management
    explanation: 'Revenue Management is the strategic discipline of maximising revenue through pricing, inventory control, and demand forecasting; an RMS is the software platform that automates and executes those decisions at scale, translating strategy into daily rate recommendations and automatic rate deployments.'
    explanation_ko: '수익 관리(Revenue Management)는 가격 책정·재고 통제·수요 예측을 통해 수익을 극대화하는 전략적 분야이고, RMS는 그 결정을 대규모로 자동화·실행하여 전략을 일일 요금 추천 및 자동 요금 배포로 전환하는 소프트웨어 플랫폼이다.'
  - targetTerm: PMS
    explanation: 'A PMS (Property Management System) records reservations, check-ins, charges, and guest folios — the operational record of what has happened; an RMS uses that transactional data as input to forecast future demand and recommend what rates to charge.'
    explanation_ko: 'PMS(자산 관리 시스템)는 예약·체크인·요금·고객 폴리오를 기록하는 운영 레코드이고, RMS는 그 거래 데이터를 입력으로 미래 수요를 예측하고 적용할 요금을 추천한다.'
  - targetTerm: Rate Shopping
    explanation: 'Rate Shopping is the practice of monitoring competitor prices across distribution channels; an RMS ingests rate-shopping data feeds as one demand signal among several, but rate shopping alone does not automate or optimise a hotel''s own pricing decisions.'
    explanation_ko: '요금 쇼핑(Rate Shopping)은 유통 채널 전반의 경쟁사 가격을 모니터링하는 관행이고, RMS는 요금 쇼핑 데이터 피드를 여러 수요 신호 중 하나로 수집하지만, 요금 쇼핑만으로는 호텔 자체 가격을 자동화하거나 최적화하지 못한다.'
sources:
  - name: HSMAI Revenue Management Competency Framework
    org: HSMAI (Hospitality Sales and Marketing Association International)
    version: ''
    section: ''
    url: 'https://americas.hsmai.org/certification/crevs/'
    tier: association
  - name: HTNG Revenue Management System — PMS Interface Specification
    org: HTNG (Hospitality Technology Next Generation)
    version: ''
    section: ''
    url: 'https://htng.org/htng-workgroups/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="36" height="28" rx="2"/><polyline points="12,26 18,18 24,22 30,14 36,10"/><line x1="12" y1="38" x2="12" y2="34"/><line x1="20" y1="38" x2="20" y2="34"/><line x1="28" y1="38" x2="28" y2="34"/><line x1="36" y1="38" x2="36" y2="34"/><line x1="8" y1="38" x2="40" y2="38"/></svg>
---

> A Revenue Management System (RMS) is the software platform that hotels (and other hospitality operators) use to automate and optimise pricing and inventory decisions. It ingests historical booking data, pick-up pace, competitor rates, event calendars, and demand signals to generate rate recommendations or automatically update rates across the property management system and distribution channels — translating the strategic discipline of revenue management into real-time, data-driven execution.

An RMS functions as the analytical engine of hotel revenue management. Core modules typically include: (1) demand forecasting — projecting occupancy and rate by date, room type, and market segment; (2) rate optimisation — generating BAR and segment-specific rate recommendations that maximise expected RevPAR or TRevPAR; (3) inventory controls — setting minimum-length-of-stay (MLOS), closed-to-arrival (CTA), and overbooking buffers; (4) competitor rate intelligence — ingesting rate-shopping data; and (5) reporting and KPI dashboards. Modern cloud-based RMS platforms — such as IDeaS Revenue Solutions (SAS), Duetto, Amadeus Revenue Management, and Lighthouse — connect via API to the PMS and channel manager, enabling fully automated rate deployment. Human revenue managers review recommendations through an exceptions dashboard and override or accept them as needed. HSMAI's Revenue Management Advisory Board publishes competency frameworks and benchmarks on RMS adoption, while HTNG defines interoperability standards between RMS and PMS platforms.

**한국어 / Korean** — **수익 관리 시스템(RMS)** — 수익 관리 시스템(RMS)은 호텔(및 기타 환대 사업자)이 가격·재고 결정을 자동화하고 최적화하기 위해 사용하는 소프트웨어 플랫폼이다. 과거 예약 데이터, 픽업 속도, 경쟁사 요금, 이벤트 일정, 수요 신호를 수집·분석하여 요금 추천을 생성하거나 PMS와 유통 채널 전반의 요금을 자동으로 업데이트함으로써, 수익 관리 전략을 실시간 데이터 기반 실행으로 전환한다.

RMS는 호텔 수익 관리의 분석 엔진 역할을 한다. 핵심 모듈에는 수요 예측, 요금 최적화, 재고 통제(MLOS·CTA·초과 예약 버퍼), 경쟁사 요금 인텔리전스, KPI 대시보드가 포함된다. IDeaS, Duetto, Amadeus Revenue Management, Lighthouse 등 현대 클라우드 기반 플랫폼은 PMS 및 채널 매니저와 API로 연동되어 완전 자동화 요금 배포를 가능하게 한다.

**Aliases:** `Hotel RMS`, `Revenue Optimisation System`, `Pricing Optimisation System`

# Related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [Dynamic Pricing](/lodging/hotel-rate/dynamic-pricing.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related
- [Total Revenue Management](/lodging/hotel-rate/total-revenue-management.md) — related
- [Rate Shopping](/lodging/hotel-dist/rate-shopping.md) — related
- [PMS](/lodging/hotel-dist/pms.md) — related

# Distinctions
- **Revenue Management System** vs [Revenue Management](/air/air-shop/revenue-management.md) — Revenue Management is the strategic discipline of maximising revenue through pricing, inventory control, and demand forecasting; an RMS is the software platform that automates and executes those decisions at scale, translating strategy into daily rate recommendations and automatic rate deployments.
- **Revenue Management System** vs [PMS](/lodging/hotel-dist/pms.md) — A PMS records reservations, check-ins, charges, and guest folios — the operational record of what has happened; an RMS uses that transactional data as input to forecast future demand and recommend what rates to charge.
- **Revenue Management System** vs [Rate Shopping](/lodging/hotel-dist/rate-shopping.md) — Rate Shopping is the practice of monitoring competitor prices across distribution channels; an RMS ingests rate-shopping data feeds as one demand signal among several, but rate shopping alone does not automate or optimise a hotel's own pricing decisions.

# Citations
[1] [HSMAI (Hospitality Sales and Marketing Association International) — HSMAI Revenue Management Competency Framework](https://americas.hsmai.org/certification/crevs/)
[2] [HTNG (Hospitality Technology Next Generation) — Revenue Management System — PMS Interface Specification](https://htng.org/htng-workgroups/)
