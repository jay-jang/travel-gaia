---
type: System
title: Baggage Reconciliation System (BRS)
description: 'A Baggage Reconciliation System (BRS) is an airport operational system that ensures every piece of checked baggage loaded onto an aircraft is positively matched to a passenger who has actually boarded that flight. It is mandated by ICAO Annex 17 (Aviation Security) as a security control and supported by IATA Resolution 753 for baggage tracking and reconciliation at check-in, loading, transfer, and arrival.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-08-11T00:00:00Z'
id: baggage-reconciliation-system
vertical: air
category: air-ops
conceptType: system
status: active
abbreviation: BRS
term_ko: '수하물 일치 확인 시스템(BRS)'
definition_ko: 'BRS(Baggage Reconciliation System, 수하물 일치 확인 시스템)는 항공기에 탑재되는 모든 위탁 수하물을 해당 항공편에 실제로 탑승한 승객과 일치시키는 공항 운영 시스템이다. ICAO 부속서 17(항공 보안)에 의해 보안 통제 수단으로 의무화되어 있으며, 체크인·탑재·환승·도착 시 수하물 추적과 일치 확인을 위한 IATA 결의안 753에 의해 지원된다.'
longDef: 'The core security principle underlying BRS is that an unaccompanied bag — one whose owner is not on board — represents a potential threat and must be offloaded before departure. The BRS achieves positive passenger-baggage reconciliation by continuously comparing the list of loaded bags (identified via barcode or RFID) with the list of passengers who have actually boarded at the gate. If a passenger checks in but does not board, the BRS triggers a hold-baggage search and offload before the flight can depart. Beyond security compliance, BRS data supports IATA Resolution 753, which obliges airlines and their handling agents to provide tracking data at the four key events in a bag''s journey: check-in, loading, transfer aircraft loading, and arrival at the claim belt. This data enables the WorldTracer lost-baggage system and supports passenger self-service bag-tracking. Modern BRS platforms integrate with the Departure Control System (DCS) and baggage handling systems via IATA Type B messaging or XML/REST interfaces.'
longDef_ko: 'BRS의 핵심 보안 원칙은 탑승객이 없는 무인 수하물이 잠재적 위협을 나타내므로 항공기 출발 전에 반드시 하기해야 한다는 것이다. BRS는 탑재된 수하물 목록(바코드 또는 RFID로 식별)과 게이트에서 실제로 탑승한 승객 목록을 지속적으로 비교하여 승객과 수하물의 양방향 일치를 달성한다. 승객이 체크인했으나 탑승하지 않은 경우 BRS는 항공기 출발 전에 위탁 수하물 수색 및 하기를 촉발한다. 보안 준수 외에도 BRS 데이터는 IATA 결의안 753을 지원하며, 이 결의안은 항공사와 핸들링 업체에 체크인, 탑재, 환승 탑재, 수하물 클레임 벨트 도착의 네 가지 주요 수하물 여정 이벤트에서 추적 데이터를 제공할 의무를 부과한다. 이 데이터는 WorldTracer 분실 수하물 시스템을 지원하고 승객 셀프서비스 수하물 추적을 가능하게 한다. 최신 BRS 플랫폼은 IATA Type B 메시지 또는 XML/REST 인터페이스를 통해 출발 통제 시스템(DCS) 및 수하물 처리 시스템과 통합된다.'
standardBody: IATA
aliases:
  - BRS
  - Bag Reconciliation System
  - Positive Passenger Baggage Reconciliation
  - PPBR
relationships:
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: Manifest
distinctions:
  - targetTerm: Departure Control System (DCS)
    explanation: 'The DCS manages passenger check-in, seat assignment, boarding pass issuance and boarding; the BRS is a separate or integrated subsystem that specifically focuses on matching checked bags to boarded passengers as a security and tracking function.'
    explanation_ko: 'DCS는 승객 체크인, 좌석 배정, 탑승권 발급, 탑승을 관리하고, BRS는 보안 및 추적 기능으로서 위탁 수하물을 탑승 승객과 일치시키는 데 특화된 별도 또는 통합 하위 시스템이다.'
  - targetTerm: Manifest
    explanation: 'A Manifest is the official document listing all passengers or cargo carried on a flight; a BRS is an active real-time operational system that enforces the rule that no bag may travel without its passenger, producing data that feeds into the manifest.'
    explanation_ko: 'Manifest는 항공편의 모든 승객 또는 화물을 나열하는 공식 문서이고, BRS는 수하물이 승객 없이 운반될 수 없도록 규칙을 강제하는 능동적 실시간 운영 시스템으로, 생성 데이터가 매니페스트에 반영된다.'
sources:
  - name: 'Annex 17 to the Convention on International Civil Aviation — Security: Safeguarding International Civil Aviation Against Acts of Unlawful Interference'
    org: ICAO
    version: 11th Edition (2020)
    section: Chapter 4 — Preventive Security Measures
    url: 'https://www.icao.int/security/sfp/pages/annex17.aspx'
    tier: standard-body
  - name: Resolution 753 — Baggage Tracking
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/ops-infra/baggage/baggage-tracking/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="18" width="28" height="22" rx="3"/><path d="M18 18v-5h12v5"/><line x1="10" y1="26" x2="38" y2="26"/><polyline points="18,32 22,36 32,27"/></svg>
---

> A Baggage Reconciliation System (BRS) is an airport operational system that ensures every piece of checked baggage loaded onto an aircraft is positively matched to a passenger who has actually boarded that flight. It is mandated by ICAO Annex 17 (Aviation Security) as a security control and supported by IATA Resolution 753 for baggage tracking and reconciliation at check-in, loading, transfer, and arrival.

The core security principle underlying BRS is that an unaccompanied bag — one whose owner is not on board — represents a potential threat and must be offloaded before departure. The BRS achieves positive passenger-baggage reconciliation by continuously comparing the list of loaded bags (identified via barcode or RFID) with the list of passengers who have actually boarded at the gate. If a passenger checks in but does not board, the BRS triggers a hold-baggage search and offload before the flight can depart. Beyond security compliance, BRS data supports IATA Resolution 753, which obliges airlines and their handling agents to provide tracking data at the four key events in a bag's journey: check-in, loading, transfer aircraft loading, and arrival at the claim belt. This data enables the WorldTracer lost-baggage system and supports passenger self-service bag-tracking. Modern BRS platforms integrate with the Departure Control System (DCS) and baggage handling systems via IATA Type B messaging or XML/REST interfaces.

**한국어 / Korean** — **수하물 일치 확인 시스템(BRS)** — BRS(Baggage Reconciliation System, 수하물 일치 확인 시스템)는 항공기에 탑재되는 모든 위탁 수하물을 해당 항공편에 실제로 탑승한 승객과 일치시키는 공항 운영 시스템이다. ICAO 부속서 17(항공 보안)에 의해 보안 통제 수단으로 의무화되어 있으며, 체크인·탑재·환승·도착 시 수하물 추적과 일치 확인을 위한 IATA 결의안 753에 의해 지원된다.

BRS의 핵심 보안 원칙은 탑승객이 없는 무인 수하물이 잠재적 위협을 나타내므로 항공기 출발 전에 반드시 하기해야 한다는 것이다. BRS는 탑재된 수하물 목록(바코드 또는 RFID로 식별)과 게이트에서 실제로 탑승한 승객 목록을 지속적으로 비교하여 승객과 수하물의 양방향 일치를 달성한다. 승객이 체크인했으나 탑승하지 않은 경우 BRS는 항공기 출발 전에 위탁 수하물 수색 및 하기를 촉발한다. 보안 준수 외에도 BRS 데이터는 IATA 결의안 753을 지원하며, 이 결의안은 항공사와 핸들링 업체에 체크인, 탑재, 환승 탑재, 수하물 클레임 벨트 도착의 네 가지 주요 수하물 여정 이벤트에서 추적 데이터를 제공할 의무를 부과한다. 이 데이터는 WorldTracer 분실 수하물 시스템을 지원하고 승객 셀프서비스 수하물 추적을 가능하게 한다.

**Aliases:** `BRS`, `Bag Reconciliation System`, `Positive Passenger Baggage Reconciliation`, `PPBR`

# Related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [Manifest](/tours/tour-ops/manifest.md) — related

# Distinctions
- **Baggage Reconciliation System (BRS)** vs [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — The DCS manages passenger check-in, seat assignment, boarding pass issuance and boarding; the BRS is a separate or integrated subsystem that specifically focuses on matching checked bags to boarded passengers as a security and tracking function.
- **Baggage Reconciliation System (BRS)** vs [Manifest](/air/air-ops/manifest.md) — A Manifest is the official document listing all passengers or cargo carried on a flight; a BRS is an active real-time operational system that enforces the rule that no bag may travel without its passenger, producing data that feeds into the manifest.

# Citations
[1] [ICAO — Annex 17 — Security: Safeguarding International Civil Aviation Against Acts of Unlawful Interference — 11th Edition (2020)](https://www.icao.int/security/sfp/pages/annex17.aspx)
[2] [IATA — Resolution 753 — Baggage Tracking](https://www.iata.org/en/programs/ops-infra/baggage/baggage-tracking/)
