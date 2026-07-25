---
type: Business Term
title: Misconnect
description: 'A misconnect (or missed connection) occurs when a passenger traveling on a multi-segment itinerary fails to board their connecting flight because the inbound flight arrived after the contracted or published Minimum Connecting Time (MCT) at the transit airport, or because the passenger was unable to complete transit formalities in time. A misconnect is a disruption event that obligates the operating or ticketing carrier to re-accommodate the passenger on the next available flight to their destination.'
tags:
  - disruption
  - active
  - IATA
timestamp: '2026-07-25T00:00:00Z'
id: misconnect
vertical: common
category: disruption
conceptType: business-term
status: active
term_ko: 연결편 미탑승(Misconnect)
definition_ko: '다구간 여정으로 여행하는 승객이 입항 항공편이 환승 공항의 최소 연결 시간(MCT) 이후에 도착하거나 환승 수속을 제때 완료하지 못해 연결 항공편에 탑승하지 못하는 상황이다. Misconnect는 장애 사건으로서, 운항 또는 발권 항공사에게 승객을 최종 목적지까지 가는 다음 가용 항공편으로 재수용할 의무를 발생시킨다.'
longDef: 'Misconnects arise from two root causes: (1) inbound flight delay that leaves insufficient transit time, and (2) self-inflicted misconnect where the passenger voluntarily booked a connection below MCT or made an error during transit. When the misconnect is caused by the carrier (controllable IRROPS), the carrier''s duty to assist under passenger rights legislation and IATA interline agreements is clear: the passenger must be re-routed to the final destination at no additional charge on the earliest available flight, whether operated by the same airline or by an interline partner. When it is a self-inflicted misconnect on a split PNR (tickets not linked), the passenger bears the cost of rebooking. Airport agents classify a misconnect by scanning the boarding pass status at the gate; the departed flight is recorded as a "misconnect" or "off-load" in the departure control system, triggering IRROPS handling workflows. Protection Connection products (sold or implicit in interline agreements) automatically rebook passengers onto the next flight when a misconnect is detected before the connecting flight departs.'
longDef_ko: '연결편 미탑승은 두 가지 근본 원인에서 발생한다: (1) 입항 항공편 지연으로 환승 시간이 부족해지는 경우, (2) 승객이 자발적으로 MCT 미만의 연결 편을 예약하거나 환승 중 오류를 범하는 자발적 미탑승. 항공사 원인(조종 가능한 IRROPS)으로 인한 연결편 미탑승의 경우, 승객 권리 법령 및 IATA 인터라인 협정에 따라 항공사의 지원 의무가 명확하다: 동일 항공사 또는 인터라인 파트너가 운항하는 가장 빠른 가용 항공편으로 추가 비용 없이 최종 목적지까지 재라우팅해야 한다. 분리된 PNR(연결되지 않은 항공권)에서 자발적 미탑승이 발생한 경우 승객이 재예약 비용을 부담한다. 공항 직원은 탑승구에서 탑승권 상태를 스캔하여 연결편 미탑승을 분류하며, 출발 항공편은 출발 통제 시스템(DCS)에 "misconnect" 또는 "off-load"로 기록되어 IRROPS 처리 워크플로를 가동시킨다.'
standardBody: IATA
aliases:
  - Missed Connection
  - Missed Connect
  - Off-Load (connection context)
relationships:
  - type: related
    targetTerm: MCT
  - type: related
    targetTerm: Connection
  - type: related
    targetTerm: Re-accommodation
  - type: related
    targetTerm: Right to Re-routing
  - type: related
    targetTerm: Irregular Operations (IRROPS)
  - type: related
    targetTerm: Split PNR
distinctions:
  - targetTerm: Re-accommodation
    explanation: 'A misconnect is the event—the passenger failing to board the connecting flight; re-accommodation is the carrier''s response action of rebooking the passenger onto the next available onward flight.'
    explanation_ko: '연결편 미탑승(Misconnect)은 사건, 즉 승객이 연결 항공편에 탑승하지 못하는 것이고, 재수용(Re-accommodation)은 항공사가 승객을 다음 가용 항공편으로 재예약하는 대응 조치이다.'
  - targetTerm: MCT
    explanation: 'MCT (Minimum Connecting Time) is the published minimum time required for a valid connection at an airport; a misconnect occurs when actual transit time falls below MCT (or the passenger cannot complete transit in time), causing the connection to be broken.'
    explanation_ko: 'MCT(최소 연결 시간)는 공항에서 유효한 연결을 위해 필요한 최소 시간으로 공시된 것이고, 연결편 미탑승은 실제 환승 시간이 MCT 미만으로 떨어지거나(또는 승객이 제때 환승 수속을 완료하지 못해) 연결이 끊길 때 발생한다.'
  - targetTerm: Denied Boarding Compensation
    explanation: 'Denied boarding occurs when the passenger arrives at the gate on time but is turned away due to the flight being oversold; a misconnect occurs when the passenger cannot reach the gate in time due to an inbound flight delay.'
    explanation_ko: '탑승 거절(Denied Boarding)은 승객이 제시간에 탑승구에 도착했음에도 초과 판매로 인해 거절당하는 것이고, 연결편 미탑승은 입항 항공편 지연으로 인해 승객이 제시간에 탑승구에 도달하지 못하는 것이다.'
sources:
  - name: IATA Resolution 735d — Interline Traffic Agreements (Passenger)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/ops-infra/interline/'
    tier: association
  - name: EU Regulation 261/2004 — Right to Re-routing
    org: European Parliament and Council
    version: Regulation (EC) No 261/2004
    section: Article 8
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32004R0261'
    tier: regulation
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 32l10-10 8 8 10-16"/><circle cx="36" cy="14" r="4"/><line x1="33" y1="11" x2="39" y2="17"/><line x1="39" y1="11" x2="33" y2="17"/></svg>
---

> A misconnect (or missed connection) occurs when a passenger traveling on a multi-segment itinerary fails to board their connecting flight because the inbound flight arrived after the contracted or published Minimum Connecting Time (MCT) at the transit airport, or because the passenger was unable to complete transit formalities in time.

Misconnects arise from two root causes: (1) inbound flight delay that leaves insufficient transit time, and (2) self-inflicted misconnect where the passenger voluntarily booked a connection below MCT or made an error during transit. When the misconnect is caused by the carrier (controllable IRROPS), the carrier's duty to assist is clear under passenger rights legislation and IATA interline agreements: re-route to the final destination at no additional charge on the earliest available flight, whether operated by the same airline or by an interline partner. When it is self-inflicted on a split PNR, the passenger bears rebooking costs. Airport agents classify a misconnect by scanning the boarding pass at the gate; the DCS records it as a "misconnect" or "off-load", triggering IRROPS handling workflows.

**한국어 / Korean** — **연결편 미탑승(Misconnect)** — 다구간 여정으로 여행하는 승객이 입항 항공편이 환승 공항의 최소 연결 시간(MCT) 이후에 도착하거나 환승 수속을 제때 완료하지 못해 연결 항공편에 탑승하지 못하는 상황이다. 항공사 원인으로 인한 경우 운항/발권 항공사는 승객을 추가 비용 없이 다음 가용 항공편으로 재라우팅할 의무가 있다.

**Aliases:** `Missed Connection`, `Missed Connect`, `Off-Load (connection context)`

# Related
- [MCT](/air/air-ops/mct.md) — related
- [Connection](/air/air-partner/connection.md) — related
- [Re-accommodation](/common/disruption/re-accommodation.md) — related
- [Right to Re-routing](/common/disruption/right-to-re-routing.md) — related
- [Irregular Operations (IRROPS)](/common/disruption/irrops.md) — related
- [Split PNR](/air/air-ops/split-pnr.md) — related

# Distinctions
- **Misconnect** vs [Re-accommodation](/common/disruption/re-accommodation.md) — A misconnect is the event—the passenger failing to board the connecting flight; re-accommodation is the carrier's response action of rebooking the passenger onto the next available onward flight.
- **Misconnect** vs [MCT](/air/air-ops/mct.md) — MCT (Minimum Connecting Time) is the published minimum time required for a valid connection at an airport; a misconnect occurs when actual transit time falls below MCT (or the passenger cannot complete transit in time), causing the connection to be broken.
- **Misconnect** vs [Denied Boarding Compensation](/common/disruption/denied-boarding-compensation.md) — Denied boarding occurs when the passenger arrives at the gate on time but is turned away due to the flight being oversold; a misconnect occurs when the passenger cannot reach the gate in time due to an inbound flight delay.

# Citations
[1] [IATA — Resolution 735d — Interline Traffic Agreements (Passenger)](https://www.iata.org/en/programs/ops-infra/interline/)
[2] [EU Regulation (EC) No 261/2004 — Art. 8, Right to Re-routing](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32004R0261)
