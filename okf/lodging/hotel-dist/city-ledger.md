---
type: Business Term
title: City Ledger
description: 'A City Ledger is the hotel accounts-receivable sub-ledger that records all charges for guests, companies, and travel agencies that have departed (checked out) but have not yet settled their accounts at departure. Instead of paying at checkout, authorised corporate accounts, travel agencies, and groups are invoiced after the fact; these balances are transferred from the in-house Guest Ledger to the City Ledger at check-out and remain there until payment is received. It is classified as a current-asset account in USALI-compliant hotel accounting.'
tags:
  - hotel-dist
  - active
  - USALI
timestamp: '2026-08-04T00:00:00Z'
id: city-ledger
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
term_ko: 시티 레저(City Ledger)
definition_ko: '시티 레저(City Ledger)는 호텔의 외상 매출 부원장으로, 퇴숙(체크아웃) 시 결제하지 않고 사후 청구서 발부를 통해 정산하는 투숙객·기업·여행사의 모든 청구 내역을 기록한다. 권한이 부여된 법인 계정·여행사·단체는 퇴숙 후 청구서를 받으며, 이 잔액은 체크아웃 시 재실 투숙객 장부(Guest Ledger)에서 시티 레저로 이전되어 결제가 완료될 때까지 잔류한다. USALI 준거 호텔 회계에서 유동 자산 계정으로 분류된다.'
longDef: 'In hotel accounting, ledgers are divided by the status of the guest. The Guest Ledger (or Transient Ledger) holds all open folios for guests currently in-house; the City Ledger holds balances for guests or accounts that have departed but not yet paid. The City Ledger is the primary mechanism for hotels to extend credit to business clients: a company signs a Direct Billing Agreement (or Credit Application) with the hotel, which then allows all authorised travellers to check out without paying, with charges aggregated on a single company invoice. This arrangement is critical in corporate travel — large Travel Management Companies (TMCs) and corporate travel programmes commonly use city ledger arrangements to centralise billing and eliminate individual credit card settlement at each property. Travel agency commissions — the amounts owed to agencies for bookings they originated — also pass through the city ledger as credit entries. The Night Audit reviews the city ledger balance each night, ages outstanding invoices (30/60/90+ days), and flags overdue accounts for collections. USALI 11th Revised Edition classifies the city ledger as a current-asset account in the hotel''s balance sheet, while the related bad-debt provision flows to the income statement as an undistributed operating expense. Property Management Systems (PMSs) such as Oracle Hospitality OPERA and Agilysys maintain built-in City Ledger modules that manage credit limits, statement generation, and aging reports.'
longDef_ko: '호텔 회계에서 장부는 투숙객의 상태에 따라 분류된다. Guest Ledger(또는 Transient Ledger)는 현재 재실 중인 투숙객의 모든 미결 폴리오를 보유하고, City Ledger는 퇴숙했지만 아직 결제하지 않은 투숙객 또는 계정의 잔액을 보유한다. 시티 레저는 호텔이 기업 고객에게 신용을 연장하는 주요 메커니즘이다. 기업은 호텔과 직접 청구 계약(Direct Billing Agreement 또는 Credit Application)을 체결하며, 이후 권한 있는 출장자 전원이 결제 없이 체크아웃하고 청구 내역은 단일 기업 청구서로 집계된다. 이 구조는 법인 여행에서 핵심적으로, 대형 여행 관리 회사(TMC)와 법인 출장 프로그램은 흔히 시티 레저 계약을 통해 청구를 중앙화하고 각 부동산에서의 개인 신용카드 결제를 없앤다. 여행사 커미션, 즉 예약을 발생시킨 여행사에 지급해야 할 금액도 크레딧 항목으로 시티 레저를 통해 처리된다. 야간 감사(Night Audit)는 매일 밤 시티 레저 잔액을 검토하고, 미결 청구서를 기간별(30/60/90일 이상)로 분류하며, 연체 계정을 수금 처리를 위해 표시한다. USALI 제11차 개정판은 시티 레저를 호텔 대차대조표의 유동 자산 계정으로 분류하고, 관련 대손 충당금은 미배분 영업비용으로 손익계산서에 반영된다. Oracle Hospitality OPERA, Agilysys 등 PMS는 신용 한도·명세서 생성·기간 보고서를 관리하는 내장 시티 레저 모듈을 제공한다.'
standardBody: USALI
aliases:
  - Accounts Receivable Ledger
  - AR Ledger
  - Direct Billing Ledger
  - Credit Ledger
providerTerms:
  - provider: Oracle Hospitality (Opera Cloud)
    term: City Ledger / AR Ledger
    context: 'Opera Cloud''s City Ledger module manages direct-billing accounts, aging, and statement generation for corporate and agency clients who check out without paying at the property.'
    context_ko: 'Opera Cloud의 City Ledger 모듈은 부동산에서 결제 없이 체크아웃하는 법인·여행사 고객을 위한 직접 청구 계정·연체 분류·명세서 생성을 관리한다.'
    relationship: same
  - provider: Agilysys (Visual One / Stay)
    term: City Ledger
    context: 'Agilysys PMS products maintain a City Ledger for post-departure billing with built-in aging (30/60/90-day) and collection reporting.'
    context_ko: 'Agilysys PMS 제품은 내장된 기간별(30/60/90일) 연체 분류 및 수금 보고 기능을 갖춘 퇴숙 후 청구용 시티 레저를 유지한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Corporate Rate
  - type: related
    targetTerm: Travel Management Company
  - type: related
    targetTerm: Guest Folio
  - type: related
    targetTerm: Night Audit
distinctions:
  - targetTerm: Guest Folio
    explanation: 'A Guest Folio is the per-stay billing account for a guest who is currently in-house, recording charges and credits in real time during the stay; the City Ledger is the accounts-receivable sub-ledger that holds balances for guests who have checked out without paying. At checkout, the open balance on the Guest Folio is transferred to the City Ledger account of the company or agency.'
    explanation_ko: '게스트 폴리오는 현재 재실 중인 투숙객의 투숙 단위 청구 계정으로 체재 중 실시간으로 청구·크레딧을 기록하고, 시티 레저는 결제 없이 체크아웃한 투숙객의 잔액을 보유하는 외상 매출 부원장이다. 체크아웃 시 게스트 폴리오의 미결 잔액은 해당 기업 또는 여행사의 시티 레저 계정으로 이전된다.'
  - targetTerm: Corporate Rate
    explanation: 'A Corporate Rate is the negotiated room rate offered to a company for its travelling employees; a City Ledger is the payment and billing mechanism that allows those employees to check out without paying, deferring settlement to a post-departure invoice. Corporate rate is a pricing agreement; city ledger is a credit and accounts-receivable arrangement that may or may not accompany a corporate rate deal.'
    explanation_ko: 'Corporate Rate는 기업의 출장 직원에게 제공되는 협상된 객실 요금이고, 시티 레저는 그 직원들이 결제 없이 체크아웃하고 결제를 퇴숙 후 청구서로 유예할 수 있게 하는 결제·청구 메커니즘이다. Corporate Rate는 가격 협약이고, 시티 레저는 Corporate Rate 계약에 수반될 수도 있고 그렇지 않을 수도 있는 신용·외상 매출 약정이다.'
sources:
  - name: 'USALI — Uniform System of Accounts for the Lodging Industry, 11th Revised Edition — City Ledger (Accounts Receivable)'
    org: 'Hospitality Financial and Technology Professionals (HFTP) / Hotel Association of New York City (HANYC)'
    version: 11th Revised Edition
    section: Balance Sheet — Current Assets
    url: 'https://www.hftp.org/education/usali/'
    tier: association
  - name: Oracle Hospitality OPERA Cloud — City Ledger Module documentation
    org: Oracle Hospitality
    version: ''
    section: ''
    url: 'https://docs.oracle.com/en/industries/hospitality/opera-cloud/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="8" width="24" height="30" rx="2"/><line x1="12" y1="16" x2="26" y2="16"/><line x1="12" y1="22" x2="26" y2="22"/><line x1="12" y1="28" x2="20" y2="28"/><path d="M31 22h10M31 26l4 4 6-6"/></svg>
---

> A City Ledger is the hotel accounts-receivable sub-ledger that records all charges for guests, companies, and travel agencies that have departed (checked out) but have not yet settled their accounts at departure. Instead of paying at checkout, authorised corporate accounts, travel agencies, and groups are invoiced after the fact; these balances are transferred from the in-house Guest Ledger to the City Ledger at check-out and remain there until payment is received. It is classified as a current-asset account in USALI-compliant hotel accounting.

In hotel accounting, ledgers are divided by the status of the guest. The Guest Ledger (or Transient Ledger) holds all open folios for guests currently in-house; the City Ledger holds balances for guests or accounts that have departed but not yet paid. The City Ledger is the primary mechanism for hotels to extend credit to business clients: a company signs a Direct Billing Agreement (or Credit Application) with the hotel, which then allows all authorised travellers to check out without paying, with charges aggregated on a single company invoice. This arrangement is critical in corporate travel — large Travel Management Companies (TMCs) and corporate travel programmes commonly use city ledger arrangements to centralise billing and eliminate individual credit card settlement at each property. Travel agency commissions — the amounts owed to agencies for bookings they originated — also pass through the city ledger as credit entries. The Night Audit reviews the city ledger balance each night, ages outstanding invoices (30/60/90+ days), and flags overdue accounts for collections. USALI 11th Revised Edition classifies the city ledger as a current-asset account in the hotel's balance sheet, while the related bad-debt provision flows to the income statement as an undistributed operating expense. Property Management Systems (PMSs) such as Oracle Hospitality OPERA and Agilysys maintain built-in City Ledger modules that manage credit limits, statement generation, and aging reports.

**한국어 / Korean** — **시티 레저(City Ledger)** — 시티 레저(City Ledger)는 호텔의 외상 매출 부원장으로, 퇴숙(체크아웃) 시 결제하지 않고 사후 청구서 발부를 통해 정산하는 투숙객·기업·여행사의 모든 청구 내역을 기록한다. 권한이 부여된 법인 계정·여행사·단체는 퇴숙 후 청구서를 받으며, 이 잔액은 체크아웃 시 재실 투숙객 장부(Guest Ledger)에서 시티 레저로 이전되어 결제가 완료될 때까지 잔류한다. USALI 준거 호텔 회계에서 유동 자산 계정으로 분류된다.

호텔 회계에서 장부는 투숙객의 상태에 따라 분류된다. Guest Ledger(또는 Transient Ledger)는 현재 재실 중인 투숙객의 모든 미결 폴리오를 보유하고, City Ledger는 퇴숙했지만 아직 결제하지 않은 투숙객 또는 계정의 잔액을 보유한다. 시티 레저는 호텔이 기업 고객에게 신용을 연장하는 주요 메커니즘이다. 기업은 호텔과 직접 청구 계약(Direct Billing Agreement 또는 Credit Application)을 체결하며, 이후 권한 있는 출장자 전원이 결제 없이 체크아웃하고 청구 내역은 단일 기업 청구서로 집계된다.

**Aliases:** `Accounts Receivable Ledger`, `AR Ledger`, `Direct Billing Ledger`, `Credit Ledger`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Oracle Hospitality (Opera Cloud) | `City Ledger / AR Ledger` | same | Opera Cloud's City Ledger module manages direct-billing accounts, aging, and statement generation for corporate and agency clients who check out without paying at the property. |
| Agilysys (Visual One / Stay) | `City Ledger` | same | Agilysys PMS products maintain a City Ledger for post-departure billing with built-in aging (30/60/90-day) and collection reporting. |

# Related
- [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — related
- [Travel Management Company](/common/customer/travel-management-company.md) — related
- [Guest Folio](/lodging/hotel-dist/guest-folio.md) — related
- [Night Audit](/lodging/hotel-dist/night-audit.md) — related

# Distinctions
- **City Ledger** vs [Guest Folio](/lodging/hotel-dist/guest-folio.md) — A Guest Folio is the per-stay billing account for a guest who is currently in-house, recording charges and credits in real time during the stay; the City Ledger is the accounts-receivable sub-ledger that holds balances for guests who have checked out without paying. At checkout, the open balance on the Guest Folio is transferred to the City Ledger account of the company or agency.
- **City Ledger** vs [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — A Corporate Rate is the negotiated room rate offered to a company for its travelling employees; a City Ledger is the payment and billing mechanism that allows those employees to check out without paying, deferring settlement to a post-departure invoice. Corporate rate is a pricing agreement; city ledger is a credit and accounts-receivable arrangement that may or may not accompany a corporate rate deal.

# Citations
[1] [HFTP / HANYC — USALI — Uniform System of Accounts for the Lodging Industry, 11th Revised Edition](https://www.hftp.org/education/usali/)
[2] [Oracle Hospitality — OPERA Cloud City Ledger Module documentation](https://docs.oracle.com/en/industries/hospitality/opera-cloud/)
