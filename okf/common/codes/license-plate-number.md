---
type: Code
title: License Plate Number
description: 'The 10-digit unique identifier printed on a checked-bag tag (in both human-readable text and barcode form) used to track a piece of baggage end to end. Mandated as the tracking key under IATA Resolution 753, the LPN ties together baggage messages (such as the Bag Source Message) and tracking points across the journey.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: license-plate-number
vertical: common
category: codes
conceptType: code
status: active
abbreviation: LPN
term_ko: 'License Plate Number(수하물 태그 번호, LPN)'
definition_ko: '위탁 수하물 태그에 사람이 읽을 수 있는 문자와 바코드 형태로 함께 인쇄되는 10자리 고유 식별번호로, 수하물 한 개를 출발에서 도착까지 추적하는 데 쓰인다. IATA Resolution 753에 따라 추적 키(key)로 의무화되어 있으며, BSM(Bag Source Message) 같은 수하물 메시지와 여정 전반의 추적 지점(tracking point)을 서로 연결한다.'
longDef: 'The License Plate Number is the backbone of IATA Resolution 753 baggage tracking: airlines must demonstrate delivery of a bag and maintain an accurate inventory by recording tracking events keyed on the LPN at acquisition and delivery points (e.g., check-in, loading, transfer, arrival). The number is structured per the IATA baggage-tag standard — typically a leading digit followed by the carrier''s 3-digit numeric airline accounting code and a serial number — and is carried in baggage messages such as the BSM and BPM and in systems including the Departure Control System (DCS) and WorldTracer. It identifies the physical bag, not the passenger or the document covering it, and remains the bag''s reference even when read at many points along a multi-leg, interline journey.'
longDef_ko: 'License Plate Number은 IATA Resolution 753 수하물 추적의 근간이다. 항공사는 LPN을 키로 하여 인수·인계 지점(예: 체크인, 탑재, 환승, 도착)에서 추적 이벤트를 기록함으로써 수하물의 인도를 입증하고 정확한 인벤토리를 유지해야 한다. 이 번호는 IATA 수하물 태그 표준에 따라 구성되며, 일반적으로 선행 숫자 1자리 + 항공사의 3자리 숫자 회계 코드(airline accounting code) + 일련번호로 이루어진다. BSM·BPM 같은 수하물 메시지와 DCS(Departure Control System)·WorldTracer 등 시스템에 실려 전달된다. LPN은 승객이나 그 수하물을 덮는 문서가 아니라 물리적 수하물 자체를 식별하며, 다구간·인터라인 여정의 여러 지점에서 읽혀도 해당 수하물의 참조값으로 유지된다.'
standardBody: IATA
aliases:
  - License Plate
  - IATA License Plate
  - Bag Tag Number
  - 10-digit Bag Tag Number
  - Baggage Tag Number
relationships:
  - type: related
    targetTerm: Air Waybill Number
  - type: related
    targetTerm: WorldTracer
  - type: related
    targetTerm: Airline Accounting Code
  - type: related
    targetTerm: Interline
distinctions:
  - targetTerm: Air Waybill Number
    explanation: 'An Air Waybill Number identifies a cargo shipment contract; the License Plate Number identifies an individual piece of passenger checked baggage for Resolution 753 tracking — different documents, different domains, different number formats.'
    explanation_ko: 'Air Waybill Number는 항공 화물 운송 계약(shipment)을 식별하지만, License Plate Number는 Resolution 753 추적을 위해 위탁 여객 수하물 한 개를 식별한다 — 서로 다른 문서, 다른 영역, 다른 번호 체계다.'
  - targetTerm: Ticket Number
    explanation: A ticket number identifies the passenger's transportation document; the LPN identifies the physical bag and is recorded against the passenger's record but is not the ticket.
    explanation_ko: '항공권 번호(ticket number)는 승객의 운송 문서를 식별하지만, LPN은 물리적 수하물을 식별하며 승객 기록에 연결되어 기록될 뿐 항공권 자체는 아니다.'
sources:
  - org: IATA
    name: Baggage Tracking — IATA Resolution 753 / A4A Resolution 30.53 Implementation Guide
    version: Issue 4.0 November 2023
    section: ''
    url: 'https://www.iata.org/contentassets/5c4aa8b8b3b1432697d2bf3301450684/reso753-implementation-guide---2023_issue-4.0.pdf'
    tier: association
    verifyQuote: 'IATA Resolution 753 Implementation Guide Issue 4.0 November 2023 ... License Plate Number: ... Also referred to as a 10-digit bar code or 10-digit bag tag.'
    verified: true
  - org: IATA
    name: Baggage Standards
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/ops-infra/baggage/standards/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16h16a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z"/><path d="M19 16v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4"/><path d="M18 24v10M22 24v10M26 24v10M30 24v6"/></svg>
---

> The 10-digit unique identifier printed on a checked-bag tag (in both human-readable text and barcode form) used to track a piece of baggage end to end. Mandated as the tracking key under IATA Resolution 753, the LPN ties together baggage messages (such as the Bag Source Message) and tracking points across the journey.

The License Plate Number is the backbone of IATA Resolution 753 baggage tracking: airlines must demonstrate delivery of a bag and maintain an accurate inventory by recording tracking events keyed on the LPN at acquisition and delivery points (e.g., check-in, loading, transfer, arrival). The number is structured per the IATA baggage-tag standard — typically a leading digit followed by the carrier's 3-digit numeric airline accounting code and a serial number — and is carried in baggage messages such as the BSM and BPM and in systems including the Departure Control System (DCS) and WorldTracer. It identifies the physical bag, not the passenger or the document covering it, and remains the bag's reference even when read at many points along a multi-leg, interline journey.

**한국어 / Korean** — **License Plate Number(수하물 태그 번호, LPN)** — 위탁 수하물 태그에 사람이 읽을 수 있는 문자와 바코드 형태로 함께 인쇄되는 10자리 고유 식별번호로, 수하물 한 개를 출발에서 도착까지 추적하는 데 쓰인다. IATA Resolution 753에 따라 추적 키(key)로 의무화되어 있으며, BSM(Bag Source Message) 같은 수하물 메시지와 여정 전반의 추적 지점(tracking point)을 서로 연결한다.

License Plate Number은 IATA Resolution 753 수하물 추적의 근간이다. 항공사는 LPN을 키로 하여 인수·인계 지점(예: 체크인, 탑재, 환승, 도착)에서 추적 이벤트를 기록함으로써 수하물의 인도를 입증하고 정확한 인벤토리를 유지해야 한다. 이 번호는 IATA 수하물 태그 표준에 따라 구성되며, 일반적으로 선행 숫자 1자리 + 항공사의 3자리 숫자 회계 코드(airline accounting code) + 일련번호로 이루어진다. BSM·BPM 같은 수하물 메시지와 DCS(Departure Control System)·WorldTracer 등 시스템에 실려 전달된다. LPN은 승객이나 그 수하물을 덮는 문서가 아니라 물리적 수하물 자체를 식별하며, 다구간·인터라인 여정의 여러 지점에서 읽혀도 해당 수하물의 참조값으로 유지된다.

**Aliases:** `License Plate`, `IATA License Plate`, `Bag Tag Number`, `10-digit Bag Tag Number`, `Baggage Tag Number`

# Related
- [Air Waybill Number](/common/codes/air-waybill-number.md) — related
- [WorldTracer](/common/disruption/worldtracer.md) — related
- [Airline Accounting Code](/common/codes/airline-accounting-code.md) — related
- [Interline](/air/air-partner/interline.md) — related

# Distinctions
- **License Plate Number** vs [Air Waybill Number](/common/codes/air-waybill-number.md) — An Air Waybill Number identifies a cargo shipment contract; the License Plate Number identifies an individual piece of passenger checked baggage for Resolution 753 tracking — different documents, different domains, different number formats.
- **License Plate Number** vs [Ticket Number](/common/codes/ticket-number.md) — A ticket number identifies the passenger's transportation document; the LPN identifies the physical bag and is recorded against the passenger's record but is not the ticket.

# Citations
[1] [IATA — Baggage Tracking — IATA Resolution 753 / A4A Resolution 30.53 Implementation Guide — Issue 4.0 November 2023](https://www.iata.org/contentassets/5c4aa8b8b3b1432697d2bf3301450684/reso753-implementation-guide---2023_issue-4.0.pdf)
[2] [IATA — Baggage Standards](https://www.iata.org/en/programs/ops-infra/baggage/standards/)
