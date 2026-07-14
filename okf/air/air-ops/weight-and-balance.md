---
type: Process
title: Weight and Balance
description: 'Weight and balance (W&B) is the mandatory pre-departure procedure in which an airline calculates an aircraft''s total loaded weight and its centre of gravity (CG) to verify that both fall within the certified safe operating envelope defined in the Aircraft Flight Manual (AFM). The output — the load sheet or load and trim sheet — is a legally required document given to the commander before every flight.'
tags:
  - air-ops
  - active
  - ICAO
timestamp: '2026-07-14T00:00:00Z'
id: weight-and-balance
vertical: air
category: air-ops
conceptType: process
status: active
abbreviation: W&B
term_ko: 중량 및 평형(Weight and Balance)
definition_ko: '중량 및 평형(W&B)은 항공사가 항공기의 총 탑재 중량과 무게중심(CG) 위치를 계산하여 양쪽 모두 항공기 비행 매뉴얼(AFM)에서 정의한 인증된 안전 운용 범위 내에 있는지 확인하는 의무적인 출발 전 절차다. 그 결과물인 로드 시트(load sheet) 또는 로드 앤 트림 시트(load and trim sheet)는 모든 비행 전 기장에게 전달해야 하는 법적 문서다.'
longDef: 'Weight and balance calculations involve four key limits: maximum takeoff weight (MTOW), maximum landing weight (MLW), maximum zero fuel weight (MZFW), and the forward/aft CG envelope. Inputs include zero fuel weight of the empty aircraft, passengers and their baggage (using standard or actual weights), cargo and mail, and the fuel uplift plan. The load sheet is produced by the load controller at the airport — or automatically by a DCS integrated with the airline''s load planning system — and must be signed off by the captain. ICAO Annex 6 and national authority regulations (e.g. FAA AC 120-27F, EASA standards) mandate the procedure for all commercial air transport operations. Errors in weight and balance are a documented cause of hull loss accidents; the procedure directly affects take-off performance data, including V1/VR/V2 speeds.'
longDef_ko: '중량 및 평형 계산에는 네 가지 핵심 한계치가 관여한다: 최대 이륙 중량(MTOW), 최대 착륙 중량(MLW), 최대 무연료 중량(MZFW), 그리고 전방/후방 CG 한계 범위. 입력값에는 빈 항공기의 무연료 중량, 승객과 수하물(표준 또는 실제 중량 사용), 화물·우편물, 연료 탑재 계획이 포함된다. 로드 시트는 공항의 로드 컨트롤러가 작성하거나 — 항공사 로드 플래닝 시스템과 통합된 DCS가 자동으로 생성하며 — 기장의 확인 서명이 필요하다. ICAO Annex 6 및 각국 항공 당국 규정(예: FAA AC 120-27F, EASA 기준)은 모든 상업 항공 운송 운항에 이 절차를 의무화하고 있다. 중량 및 평형 오류는 항공기 손실 사고의 기록된 원인이며, 이 절차는 V1/VR/V2 속도를 포함한 이륙 성능 데이터에 직접 영향을 미친다.'
standardBody: ICAO
aliases:
  - W&B
  - Load and Balance
  - Load Sheet
  - Load and Trim Sheet
  - CG Calculation
  - Aircraft Loading
relationships:
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: Block Time
  - type: related
    targetTerm: Manifest
distinctions:
  - targetTerm: Departure Control System (DCS)
    explanation: 'The Departure Control System (DCS) is the IT platform managing check-in, boarding, and passenger/baggage data at the airport; weight and balance is the safety calculation that the DCS feeds with passenger and baggage data to produce the load sheet. DCS is the system; W&B is the regulatory procedure the system supports.'
    explanation_ko: '출발 통제 시스템(DCS)은 공항에서 체크인·탑승·승객/수하물 데이터를 관리하는 IT 플랫폼이고, 중량 및 평형은 DCS가 승객·수하물 데이터를 제공받아 로드 시트를 산출하는 안전 계산이다. DCS는 시스템이고, W&B는 시스템이 지원하는 규제 절차다.'
  - targetTerm: Manifest
    explanation: 'A manifest (passenger or cargo) is a list of people or goods on board; weight and balance is the calculation confirming the total load is within the aircraft''s safe performance envelope. The manifest provides a data input to the W&B calculation but is a separate document with a different regulatory purpose.'
    explanation_ko: '탑재 명단(Manifest, 승객 또는 화물)은 탑승 인원이나 화물의 목록이고, 중량 및 평형은 총 탑재량이 항공기의 안전 성능 범위 내에 있음을 확인하는 계산이다. Manifest는 W&B 계산의 입력 데이터를 제공하지만 별개의 문서로 다른 규제 목적을 가진다.'
sources:
  - name: 'ICAO Annex 6 — Operation of Aircraft, Part I: International Commercial Air Transport — Aeroplanes'
    org: ICAO
    version: 12th Edition
    section: Section 4.3 (Mass and Balance)
    url: 'https://www.icao.int/safety/airnavigation/nationalitymarks/annexes_booklet_en.pdf'
    tier: standard-body
  - name: Advisory Circular AC 120-27F — Aircraft Weight and Balance Control
    org: FAA
    version: AC 120-27F
    section: ''
    url: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-27F.pdf'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="24" y1="8" x2="24" y2="40"/><path d="M10 28L24 8l14 20"/><line x1="8" y1="40" x2="40" y2="40"/><circle cx="24" cy="28" r="3"/><line x1="12" y1="28" x2="10" y2="34"/><line x1="36" y1="28" x2="38" y2="34"/></svg>
---

> Weight and balance (W&B) is the mandatory pre-departure procedure in which an airline calculates an aircraft's total loaded weight and its centre of gravity (CG) to verify that both fall within the certified safe operating envelope defined in the Aircraft Flight Manual (AFM). The output — the load sheet or load and trim sheet — is a legally required document given to the commander before every flight.

Weight and balance calculations involve four key limits: maximum takeoff weight (MTOW), maximum landing weight (MLW), maximum zero fuel weight (MZFW), and the forward/aft CG envelope. Inputs include zero fuel weight of the empty aircraft, passengers and their baggage (using standard or actual weights), cargo and mail, and the fuel uplift plan. The load sheet is produced by the load controller at the airport — or automatically by a DCS integrated with the airline's load planning system — and must be signed off by the captain. ICAO Annex 6 and national authority regulations (e.g. FAA AC 120-27F, EASA standards) mandate the procedure for all commercial air transport operations. Errors in weight and balance are a documented cause of hull loss accidents; the procedure directly affects take-off performance data, including V1/VR/V2 speeds.

**한국어 / Korean** — **중량 및 평형(Weight and Balance)** — 중량 및 평형(W&B)은 항공사가 항공기의 총 탑재 중량과 무게중심(CG) 위치를 계산하여 양쪽 모두 항공기 비행 매뉴얼(AFM)에서 정의한 인증된 안전 운용 범위 내에 있는지 확인하는 의무적인 출발 전 절차다. 그 결과물인 로드 시트(load sheet) 또는 로드 앤 트림 시트(load and trim sheet)는 모든 비행 전 기장에게 전달해야 하는 법적 문서다.

중량 및 평형 계산에는 네 가지 핵심 한계치가 관여한다: 최대 이륙 중량(MTOW), 최대 착륙 중량(MLW), 최대 무연료 중량(MZFW), 그리고 전방/후방 CG 한계 범위. 입력값에는 빈 항공기의 무연료 중량, 승객과 수하물(표준 또는 실제 중량 사용), 화물·우편물, 연료 탑재 계획이 포함된다. 로드 시트는 공항의 로드 컨트롤러가 작성하거나 — 항공사 로드 플래닝 시스템과 통합된 DCS가 자동으로 생성하며 — 기장의 확인 서명이 필요하다. ICAO Annex 6 및 각국 항공 당국 규정(예: FAA AC 120-27F, EASA 기준)은 모든 상업 항공 운송 운항에 이 절차를 의무화하고 있다. 중량 및 평형 오류는 항공기 손실 사고의 기록된 원인이며, 이 절차는 V1/VR/V2 속도를 포함한 이륙 성능 데이터에 직접 영향을 미친다.

**Aliases:** `W&B`, `Load and Balance`, `Load Sheet`, `Load and Trim Sheet`, `CG Calculation`, `Aircraft Loading`

# Related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [Block Time](/air/air-ops/block-time.md) — related
- [Manifest](/tours/tour-ops/manifest.md) — related

# Distinctions
- **Weight and Balance** vs [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — The Departure Control System (DCS) is the IT platform managing check-in, boarding, and passenger/baggage data at the airport; weight and balance is the safety calculation that the DCS feeds with passenger and baggage data to produce the load sheet. DCS is the system; W&B is the regulatory procedure the system supports.
- **Weight and Balance** vs [Manifest](/tours/tour-ops/manifest.md) — A manifest (passenger or cargo) is a list of people or goods on board; weight and balance is the calculation confirming the total load is within the aircraft's safe performance envelope. The manifest provides a data input to the W&B calculation but is a separate document with a different regulatory purpose.

# Citations
[1] [ICAO — ICAO Annex 6 — Operation of Aircraft, Part I: International Commercial Air Transport — Aeroplanes](https://www.icao.int/safety/airnavigation/nationalitymarks/annexes_booklet_en.pdf)
[2] [FAA — Advisory Circular AC 120-27F — Aircraft Weight and Balance Control](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-27F.pdf)
