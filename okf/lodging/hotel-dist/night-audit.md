---
type: Process
title: Night Audit
description: 'The night audit is the hotel accounting routine — typically run daily between midnight and 6 a.m. by the night audit team or automatically by the Property Management System (PMS) — that closes the current business day, posts all outstanding room and ancillary charges to guest folios, reconciles front-office and back-office accounts, generates daily management reports (including occupancy and RevPAR), and opens the next business day.'
tags:
  - hotel-dist
  - active
  - USALI
timestamp: '2026-07-15T00:00:00Z'
id: night-audit
vertical: lodging
category: hotel-dist
conceptType: process
status: active
term_ko: 야간 감사(Night Audit)
definition_ko: '야간 감사는 자정에서 오전 6시 사이에 야간 감사 팀이나 PMS(숙박 관리 시스템)가 자동으로 수행하는 호텔 회계 루틴으로, 현재 영업일을 마감하고, 미결제된 객실비 및 부대 요금을 게스트 폴리오에 전기하고, 프런트 오피스와 백 오피스 계정을 조정하고, 일일 경영 보고서(입실률·RevPAR 포함)를 생성하며, 다음 영업일을 개시한다.'
longDef: 'The night audit serves two overlapping functions: (1) Accounting close — posting all room charges (room rate, taxes, packages), point-of-sale charges (restaurant, spa, minibar), and any adjustments that accumulated during the day; reconciling credit-card authorizations and cash transactions; producing the trial balance and daily revenue journal. (2) Management reporting — generating the daily flash report with key KPIs such as Occupancy, Average Daily Rate (ADR), RevPAR, and GOPPAR, which feed into revenue management decisions. Traditionally performed by a night auditor sitting at the front desk, the process is now largely automated within the PMS. Upon completion, the PMS rolls over the system date, enabling new-day check-ins and rate plan changes to take effect. Any rate discrepancy, folio adjustment, or disputed charge identified during the audit is flagged for front-office management review in the morning. Under the Uniform System of Accounts for the Lodging Industry (USALI), night audit outputs feed into the standardized chart of accounts used for lodging financial benchmarking.'
longDef_ko: '야간 감사는 두 가지 기능을 수행한다. (1) 회계 마감 — 당일 누적된 모든 객실 요금(객실 요율·세금·패키지), POS 요금(레스토랑·스파·미니바), 조정 사항 전기, 신용카드 승인 및 현금 거래 조정, 시산표 및 일일 수익 일지 작성. (2) 경영 보고 — 입실률, 평균 일일 요금(ADR), RevPAR, GOPPAR 등 핵심 KPI를 담은 일일 플래시 리포트 생성, 수익 관리 의사결정에 반영. 전통적으로 야간 프런트 직원이 수행했으나 현재는 PMS 내에서 대부분 자동화되어 있다. 감사 완료 후 PMS는 시스템 날짜를 다음 날로 전환하여 새로운 체크인과 요금제 변경이 적용되도록 한다. 야간 감사 중 발견된 요금 불일치, 폴리오 조정 사항, 이의 제기 요금은 이튿날 아침 프런트 오피스 관리자 검토용으로 플래그 처리된다. 숙박업 회계 통일 체계(USALI)에서 야간 감사 결과물은 숙박업 재무 벤치마킹에 사용되는 표준 계정과목표에 반영된다.'
standardBody: HFTP
aliases:
  - Night Audit Process
  - End-of-Day Audit
  - Daily Audit
  - Night Run
relationships:
  - type: related
    targetTerm: PMS
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: RevPAR
distinctions:
  - targetTerm: PMS
    explanation: 'The PMS is the software platform that stores reservations, folios, and accounting records; the night audit is the recurring process that runs within and through the PMS to close the business day and generate reports.'
    explanation_ko: 'PMS는 예약·폴리오·회계 기록을 저장하는 소프트웨어 플랫폼이고, 야간 감사는 PMS 내에서 실행되는 반복 프로세스로, 영업일을 마감하고 보고서를 생성한다.'
  - targetTerm: Revenue Management
    explanation: 'Revenue management is the forward-looking science of pricing and inventory allocation to maximize RevPAR; the night audit is a backward-looking accounting close that produces the actual performance data (occupancy, ADR, RevPAR) used by revenue management.'
    explanation_ko: '수익 관리(Revenue Management)는 RevPAR 극대화를 위한 가격 책정·재고 배분의 미래 지향적 의사결정 과학이고, 야간 감사는 수익 관리에서 활용하는 실제 성과 데이터(입실률·ADR·RevPAR)를 산출하는 사후적 회계 마감 프로세스이다.'
sources:
  - name: Uniform System of Accounts for the Lodging Industry (USALI)
    org: HFTP (Hospitality Financial and Technology Professionals) / AHLA
    version: 11th Revised Edition
    section: 'Chapter 1 — Front Office Accounting'
    url: 'https://www.hftp.org/resources/usali/'
    tier: association
  - name: Hotel Operations Overview — Night Audit Procedures
    org: American Hotel & Lodging Educational Institute (AHLEI)
    version: ''
    section: ''
    url: 'https://www.ahlei.org/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6a18 18 0 0 0 0 36 18 18 0 0 0 14-29"/><path d="M32 6l2 4-4 1"/><line x1="24" y1="16" x2="24" y2="26"/><line x1="24" y1="26" x2="30" y2="30"/></svg>
---

> The night audit is the hotel accounting routine — typically run daily between midnight and 6 a.m. by the night audit team or automatically by the Property Management System (PMS) — that closes the current business day, posts all outstanding room and ancillary charges to guest folios, reconciles front-office and back-office accounts, generates daily management reports (including occupancy and RevPAR), and opens the next business day.

The night audit serves two overlapping functions: (1) Accounting close — posting all room charges (room rate, taxes, packages), point-of-sale charges (restaurant, spa, minibar), and any adjustments that accumulated during the day; reconciling credit-card authorizations and cash transactions; producing the trial balance and daily revenue journal. (2) Management reporting — generating the daily flash report with key KPIs such as Occupancy, Average Daily Rate (ADR), RevPAR, and GOPPAR, which feed into revenue management decisions. Traditionally performed by a night auditor sitting at the front desk, the process is now largely automated within the PMS. Upon completion, the PMS rolls over the system date, enabling new-day check-ins and rate plan changes to take effect.

**한국어 / Korean** — **야간 감사(Night Audit)** — 야간 감사는 자정에서 오전 6시 사이에 야간 감사 팀이나 PMS(숙박 관리 시스템)가 자동으로 수행하는 호텔 회계 루틴으로, 현재 영업일을 마감하고, 미결제된 객실비 및 부대 요금을 게스트 폴리오에 전기하고, 프런트 오피스와 백 오피스 계정을 조정하고, 일일 경영 보고서(입실률·RevPAR 포함)를 생성하며, 다음 영업일을 개시한다.

야간 감사는 두 가지 기능을 수행한다. (1) 회계 마감 — 당일 누적된 모든 객실 요금(객실 요율·세금·패키지), POS 요금(레스토랑·스파·미니바), 조정 사항 전기, 신용카드 승인 및 현금 거래 조정. (2) 경영 보고 — 입실률, 평균 일일 요금(ADR), RevPAR, GOPPAR 등 핵심 KPI를 담은 일일 플래시 리포트 생성. 감사 완료 후 PMS는 시스템 날짜를 다음 날로 전환하여 새로운 체크인과 요금제 변경이 적용되도록 한다.

**Aliases:** `Night Audit Process`, `End-of-Day Audit`, `Daily Audit`, `Night Run`

# Related
- [PMS](/lodging/hotel-dist/pms.md) — related
- [Revenue Management](/lodging/hotel-rate/revenue-management.md) — related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related

# Distinctions
- **Night Audit** vs [PMS](/lodging/hotel-dist/pms.md) — The PMS is the software platform that stores reservations, folios, and accounting records; the night audit is the recurring process that runs within and through the PMS to close the business day and generate reports.
- **Night Audit** vs [Revenue Management](/lodging/hotel-rate/revenue-management.md) — Revenue management is the forward-looking science of pricing and inventory allocation to maximize RevPAR; the night audit is a backward-looking accounting close that produces the actual performance data (occupancy, ADR, RevPAR) used by revenue management.

# Citations
[1] [HFTP (Hospitality Financial and Technology Professionals) / AHLA — Uniform System of Accounts for the Lodging Industry (USALI) — 11th Revised Edition](https://www.hftp.org/resources/usali/)
[2] [American Hotel & Lodging Educational Institute (AHLEI) — Hotel Operations Overview — Night Audit Procedures](https://www.ahlei.org/)
