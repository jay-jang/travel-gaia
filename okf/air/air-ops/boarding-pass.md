---
type: Document
title: Boarding Pass
description: 'A boarding pass is the official travel document or electronic credential issued to a passenger at check-in that authorizes entry to the boarding gate and onto the aircraft for a specific flight segment. IATA Resolution 792 standardizes the Bar-Coded Boarding Pass (BCBP) format, defining a 2D barcode that encodes passenger name, flight details, seat, and security clearance data for automated scanning at security and gate checkpoints.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-07-04T00:00:00Z'
id: boarding-pass
vertical: air
category: air-ops
conceptType: document
status: active
abbreviation: BCBP
term_ko: 탑승권(Boarding Pass)
definition_ko: '탑승권(Boarding Pass)은 특정 항공편 세그먼트에 대해 체크인 시 발급되는 공식 여행 서류 또는 전자 자격증명으로, 탑승 게이트 입장과 항공기 탑승을 승인한다. IATA Resolution 792는 Bar-Coded Boarding Pass(BCBP) 형식을 표준화하여, 보안 검색대와 게이트에서 자동 스캔을 위한 승객 이름·항공편 정보·좌석·보안 승인 데이터를 인코딩하는 2D 바코드를 정의한다.'
longDef: 'The boarding pass can be printed (paper) or presented digitally on a mobile device (mobile boarding pass). The IATA BCBP standard (Resolution 792) specifies a mandatory data structure carried in a 2D bar code (PDF417 or QR code), including airline designator, flight number, departure date, origin/destination airport codes, seat number, class of service, passenger name, check-in sequence number, and the Selectee/TSA status flag from Secure Flight. Airlines issue one boarding pass per flight segment; a multi-segment itinerary yields multiple boarding passes. Gate agents scan the barcode to confirm the passenger against the manifest and record the boarding event in the Departure Control System.'
longDef_ko: '탑승권은 인쇄(종이) 형태 또는 모바일 기기의 디지털 형태(모바일 탑승권)로 제공될 수 있다. IATA BCBP 표준(Resolution 792)은 2D 바코드(PDF417 또는 QR코드)에 담기는 필수 데이터 구조를 규정하며, 항공사 지정자, 항공편 번호, 출발 날짜, 출발지/도착지 공항 코드, 좌석 번호, 서비스 등급, 승객 이름, 체크인 순서 번호, Secure Flight의 Selectee/TSA 상태 플래그 등을 포함한다. 항공사는 항공편 세그먼트별로 탑승권 하나를 발급하며, 복수 세그먼트 여정은 여러 장의 탑승권을 발급한다. 게이트 직원은 바코드를 스캔하여 명단과 대조한 후 DCS(출발통제시스템)에 탑승 이벤트를 기록한다.'
standardBody: IATA
aliases:
  - Bar-Coded Boarding Pass
  - Mobile Boarding Pass
  - Boarding Card
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Secure Flight
  - type: related
    targetTerm: SSR
distinctions:
  - targetTerm: E-ticket
    explanation: 'An e-ticket is the accountable transport document proving payment and contractual entitlement to travel; the boarding pass is the operational credential issued at check-in authorizing gate access for a specific departure. A passenger must first hold an e-ticket and then obtain a boarding pass to actually board.'
    explanation_ko: 'E-ticket은 결제와 운송 계약상의 권리를 증명하는 회계적 운송 서류이고, 탑승권은 체크인 시 발급되어 특정 출발편 게이트 접근을 승인하는 운영 자격증명이다. 승객은 먼저 e-ticket을 보유한 후 실제 탑승을 위해 탑승권을 받아야 한다.'
  - targetTerm: Secure Flight
    explanation: 'Secure Flight is the TSA identity-vetting program that runs before boarding pass issuance; it supplies the risk assessment that determines whether the boarding pass barcode carries a standard or enhanced screening marker.'
    explanation_ko: 'Secure Flight는 탑승권 발급 전에 실행되는 TSA 신원 검증 프로그램이다. 탑승권 바코드가 표준 또는 강화 검색 마커를 가지는지 결정하는 위험 평가를 제공한다.'
sources:
  - name: 'IATA BCBP Implementation Guide (Resolution 792)'
    org: IATA
    version: 'Version 7 (2021)'
    section: 'Bar-Coded Boarding Pass standard'
    url: 'https://www.iata.org/en/programs/passenger/common-use/'
    tier: association
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: 46th Edition (2026)
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="28" rx="3"/><line x1="6" y1="24" x2="42" y2="24"/><rect x="10" y="28" width="4" height="6"/><rect x="16" y="28" width="2" height="6"/><rect x="20" y="28" width="4" height="6"/><rect x="26" y="28" width="2" height="6"/><rect x="30" y="28" width="4" height="6"/><line x1="10" y1="15" x2="24" y2="15"/><line x1="10" y1="19" x2="20" y2="19"/><circle cx="34" cy="17" r="3"/></svg>
---

> A boarding pass is the official travel document or electronic credential issued to a passenger at check-in that authorizes entry to the boarding gate and onto the aircraft for a specific flight segment. IATA Resolution 792 standardizes the Bar-Coded Boarding Pass (BCBP) format, defining a 2D barcode that encodes passenger name, flight details, seat, and security clearance data for automated scanning at security and gate checkpoints.

The boarding pass can be printed (paper) or presented digitally on a mobile device (mobile boarding pass). The IATA BCBP standard (Resolution 792) specifies a mandatory data structure carried in a 2D bar code (PDF417 or QR code), including airline designator, flight number, departure date, origin/destination airport codes, seat number, class of service, passenger name, check-in sequence number, and the Selectee/TSA status flag from Secure Flight. Airlines issue one boarding pass per flight segment; a multi-segment itinerary yields multiple boarding passes. Gate agents scan the barcode to confirm the passenger against the manifest and record the boarding event in the Departure Control System.

**한국어 / Korean** — **탑승권(Boarding Pass)** — 탑승권(Boarding Pass)은 특정 항공편 세그먼트에 대해 체크인 시 발급되는 공식 여행 서류 또는 전자 자격증명으로, 탑승 게이트 입장과 항공기 탑승을 승인한다. IATA Resolution 792는 Bar-Coded Boarding Pass(BCBP) 형식을 표준화하여, 보안 검색대와 게이트에서 자동 스캔을 위한 승객 이름·항공편 정보·좌석·보안 승인 데이터를 인코딩하는 2D 바코드를 정의한다.

탑승권은 인쇄(종이) 형태 또는 모바일 기기의 디지털 형태(모바일 탑승권)로 제공될 수 있다. IATA BCBP 표준(Resolution 792)은 2D 바코드(PDF417 또는 QR코드)에 담기는 필수 데이터 구조를 규정하며, 항공사 지정자, 항공편 번호, 출발 날짜, 출발지/도착지 공항 코드, 좌석 번호, 서비스 등급, 승객 이름, 체크인 순서 번호, Secure Flight의 Selectee/TSA 상태 플래그 등을 포함한다. 항공사는 항공편 세그먼트별로 탑승권 하나를 발급하며, 복수 세그먼트 여정은 여러 장의 탑승권을 발급한다. 게이트 직원은 바코드를 스캔하여 명단과 대조한 후 DCS(출발통제시스템)에 탑승 이벤트를 기록한다.

**Aliases:** `Bar-Coded Boarding Pass`, `Mobile Boarding Pass`, `Boarding Card`

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [Segment](/air/air-ops/segment.md) — related
- [Secure Flight](/air/air-ops/secure-flight.md) — related
- [SSR](/air/air-ops/ssr.md) — related

# Distinctions
- **Boarding Pass** vs [E-ticket](/air/air-ticket/e-ticket.md) — An e-ticket is the accountable transport document proving payment and contractual entitlement to travel; the boarding pass is the operational credential issued at check-in authorizing gate access for a specific departure. A passenger must first hold an e-ticket and then obtain a boarding pass to actually board.
- **Boarding Pass** vs [Secure Flight](/air/air-ops/secure-flight.md) — Secure Flight is the TSA identity-vetting program that runs before boarding pass issuance; it supplies the risk assessment that determines whether the boarding pass barcode carries a standard or enhanced screening marker.

# Citations
[1] [IATA — IATA BCBP Implementation Guide (Resolution 792)](https://www.iata.org/en/programs/passenger/common-use/)
[2] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — 46th Edition (2026)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
