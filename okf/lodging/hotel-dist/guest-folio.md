---
type: Document
title: Guest Folio
description: 'A Guest Folio is the itemised, per-stay billing account maintained in the Property Management System (PMS) for each occupied room or guest, recording all charges (room rate, food and beverage, spa, parking, phone, mini-bar) and credits (advance payments, gift vouchers) from check-in through check-out. It is the legal billing document settled at departure and the source record for accounting, night audit, and revenue reporting.'
tags:
  - hotel-dist
  - active
  - HTNG
timestamp: '2026-07-16T00:00:00Z'
id: guest-folio
vertical: lodging
category: hotel-dist
conceptType: document
status: active
term_ko: '게스트 폴리오(청구서 계정)'
definition_ko: '게스트 폴리오(Guest Folio)는 각 점유 객실 또는 투숙객에 대해 체크인부터 체크아웃까지 모든 청구 내역(객실 요금, 식음료, 스파, 주차, 전화, 미니바)과 크레딧(선불금, 상품권)을 기록하는 PMS 내 투숙 단위 청구 계정이다. 퇴실 시 정산되는 법적 청구 서류이자 회계·야간 감사·수익 보고의 원천 기록이다.'
longDef: 'A property may maintain multiple folios per reservation — a master folio for room and tax charges routed to a corporate billing account, and a guest folio for incidentals charged to the guest''s personal credit card. Folio line items (transactions) are posted automatically by the PMS on daily rate posting and by point-of-sale (POS) interfaces when guests charge meals or services to the room. The Night Audit closes each business day, runs the daily rate posting that advances room charges, and produces a daily folio snapshot. On check-out, the front desk presents or emails the folio for guest review and settlement. In two-way XML distribution environments, the PMS may export folio summaries to financial back-office systems. HTNG standardises the interfaces through which POS, door-lock, phone, and other systems post charges to the PMS folio.'
longDef_ko: '호텔은 예약 1건에 여러 개의 폴리오를 유지할 수 있다. 객실 요금과 세금을 법인 청구 계정으로 라우팅하는 마스터 폴리오와 투숙객 개인 신용카드로 청구되는 부대시설비용용 게스트 폴리오로 분리된다. 폴리오 항목(거래)은 PMS가 일일 요금 전기(posting) 시 자동으로 기록하며, 투숙객이 식사나 서비스를 객실로 청구할 때 POS 인터페이스가 전기한다. 야간 감사(Night Audit)는 매 영업일을 마감하고, 일일 요금 전기를 실행하여 객실 요금을 산정하며, 일일 폴리오 스냅샷을 생성한다. 체크아웃 시 프런트는 투숙객에게 폴리오를 제시하거나 이메일로 전송하여 검토·정산받는다. 양방향 XML 유통 환경에서 PMS는 폴리오 요약본을 재무 백오피스 시스템으로 내보낼 수 있다. HTNG는 POS·도어락·전화 등 주변 시스템이 PMS 폴리오에 청구를 전기하는 인터페이스를 표준화한다.'
standardBody: HTNG
aliases:
  - Room Folio
  - Hotel Bill
  - Guest Account
  - Billing Folio
  - Master Folio
providerTerms:
  - provider: Oracle Hospitality (Opera Cloud)
    term: Folio
    context: 'Opera Cloud uses "Folio" as the native term for the per-stay billing account; folios are split by billing window (Window 1, Window 2, etc.) for routing charges to different payees.'
    context_ko: 'Opera Cloud는 투숙 청구 계정의 기본 명칭으로 "Folio"를 사용하며, 결제 창구(Window 1, 2 등)로 분할하여 다른 지불인에게 청구를 라우팅한다.'
    relationship: same
  - provider: Agilysys (Visual One / Stay)
    term: Folio / Guest Ledger
    context: 'Agilysys PMS products maintain the Guest Ledger as the collection of open folios for in-house guests; each folio represents one guest billing account.'
    context_ko: 'Agilysys PMS 제품은 Guest Ledger를 재실 투숙객의 미결 폴리오 집합으로 유지하며, 각 폴리오는 하나의 투숙객 청구 계정을 나타낸다.'
    relationship: same
relationships:
  - type: parent
    targetTerm: PMS
  - type: related
    targetTerm: Night Audit
  - type: related
    targetTerm: ADR
distinctions:
  - targetTerm: Night Audit
    explanation: 'The Night Audit is the daily end-of-day process that posts room charges to all open folios, balances accounts, and generates management reports; the Guest Folio is the per-stay billing record that the Night Audit populates and verifies each night.'
    explanation_ko: '야간 감사(Night Audit)는 모든 미결 폴리오에 객실 요금을 전기하고, 계정을 정산하며, 경영 보고서를 생성하는 일일 마감 프로세스이고, 게스트 폴리오는 야간 감사가 매일 밤 채우고 검증하는 투숙 단위 청구 기록이다.'
  - targetTerm: ADR
    explanation: 'ADR is an aggregated property-level revenue metric (total room revenue ÷ occupied rooms); the Guest Folio is the individual stay-level document from which the room charge component of ADR is derived.'
    explanation_ko: 'ADR은 집계된 객실 수준 수익 지표(총 객실 수익 ÷ 점유 객실)이고, 게스트 폴리오는 ADR의 객실 요금 구성 요소가 도출되는 개별 투숙 단위 문서다.'
  - targetTerm: PMS
    explanation: 'The PMS is the operational software system that manages reservations, check-in/out, room assignments, and accounting; the Guest Folio is a data entity within the PMS that captures the per-stay billing record for a guest.'
    explanation_ko: 'PMS는 예약·체크인/아웃·객실 배정·회계를 관리하는 운영 소프트웨어 시스템이고, 게스트 폴리오는 투숙객의 투숙 단위 청구 기록을 담는 PMS 내 데이터 엔티티다.'
sources:
  - name: HTNG Interface Specifications — PMS to POS Charge Posting
    org: HTNG (Hospitality Technology Next Generation)
    version: ''
    section: ''
    url: 'https://htng.org/library/'
    tier: association
  - name: 'Opera Cloud Property Management: Folio Management'
    org: Oracle Hospitality
    version: ''
    section: ''
    url: 'https://docs.oracle.com/en/industries/hospitality/opera-cloud/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="6" width="28" height="36" rx="2"/><line x1="15" y1="14" x2="33" y2="14"/><line x1="15" y1="20" x2="33" y2="20"/><line x1="15" y1="26" x2="27" y2="26"/><line x1="15" y1="32" x2="27" y2="32"/><line x1="30" y1="29" x2="33" y2="32" stroke-width="1.5"/><line x1="33" y1="29" x2="30" y2="32" stroke-width="1.5"/><path d="M28 33h5v4h-5z"/></svg>
---

> A Guest Folio is the itemised, per-stay billing account maintained in the Property Management System (PMS) for each occupied room or guest, recording all charges (room rate, food and beverage, spa, parking, phone, mini-bar) and credits (advance payments, gift vouchers) from check-in through check-out. It is the legal billing document settled at departure and the source record for accounting, night audit, and revenue reporting.

A property may maintain multiple folios per reservation — a master folio for room and tax charges routed to a corporate billing account, and a guest folio for incidentals charged to the guest's personal credit card. Folio line items (transactions) are posted automatically by the PMS on daily rate posting and by point-of-sale (POS) interfaces when guests charge meals or services to the room. The Night Audit closes each business day, runs the daily rate posting that advances room charges, and produces a daily folio snapshot. On check-out, the front desk presents or emails the folio for guest review and settlement. In two-way XML distribution environments, the PMS may export folio summaries to financial back-office systems. HTNG standardises the interfaces through which POS, door-lock, phone, and other systems post charges to the PMS folio.

**한국어 / Korean** — **게스트 폴리오(청구서 계정)** — 게스트 폴리오(Guest Folio)는 각 점유 객실 또는 투숙객에 대해 체크인부터 체크아웃까지 모든 청구 내역(객실 요금, 식음료, 스파, 주차, 전화, 미니바)과 크레딧(선불금, 상품권)을 기록하는 PMS 내 투숙 단위 청구 계정이다. 퇴실 시 정산되는 법적 청구 서류이자 회계·야간 감사·수익 보고의 원천 기록이다.

**Aliases:** `Room Folio`, `Hotel Bill`, `Guest Account`, `Billing Folio`, `Master Folio`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Oracle Hospitality (Opera Cloud) | `Folio` | same | Opera Cloud uses "Folio" as the native term; folios are split by billing window for routing charges to different payees. |
| Agilysys (Visual One / Stay) | `Folio / Guest Ledger` | same | Agilysys maintains the Guest Ledger as the collection of open folios for in-house guests. |

# Related
- [PMS](/lodging/hotel-dist/pms.md) — parent
- [Night Audit](/lodging/hotel-dist/night-audit.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — related

# Distinctions
- **Guest Folio** vs [Night Audit](/lodging/hotel-dist/night-audit.md) — The Night Audit is the daily end-of-day process that posts room charges to all open folios, balances accounts, and generates management reports; the Guest Folio is the per-stay billing record that the Night Audit populates and verifies each night.
- **Guest Folio** vs [ADR](/lodging/hotel-rate/adr.md) — ADR is an aggregated property-level revenue metric (total room revenue ÷ occupied rooms); the Guest Folio is the individual stay-level document from which the room charge component of ADR is derived.
- **Guest Folio** vs [PMS](/lodging/hotel-dist/pms.md) — The PMS is the operational software system that manages reservations, check-in/out, room assignments, and accounting; the Guest Folio is a data entity within the PMS that captures the per-stay billing record for a guest.

# Citations
[1] [HTNG (Hospitality Technology Next Generation) — HTNG Interface Specifications — PMS to POS Charge Posting](https://htng.org/library/)
[2] [Oracle Hospitality — Opera Cloud Property Management: Folio Management](https://docs.oracle.com/en/industries/hospitality/opera-cloud/)
