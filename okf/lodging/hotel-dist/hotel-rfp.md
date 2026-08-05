---
type: Process
title: Hotel RFP
description: 'A Hotel Request for Proposal (RFP) is a formal solicitation issued by a corporate travel buyer — typically facilitated by a Travel Management Company (TMC) — to a set of hotels, requesting preferential room-rate bids for a defined travel period (usually the upcoming calendar year). Hotels respond with negotiated rate offers tied to a minimum volume commitment; accepted proposals become the negotiated corporate rates loaded into the CRS and GDS for transient business-traveller access.'
tags:
  - hotel-dist
  - active
  - GBTA
timestamp: '2026-08-05T00:00:00Z'
id: hotel-rfp
vertical: lodging
category: hotel-dist
conceptType: process
status: active
abbreviation: RFP
standardBody: GBTA
term_ko: 호텔 제안 요청서(Hotel RFP)
definition_ko: '호텔 RFP(Request for Proposal, 제안 요청서)는 법인 여행 구매자가 — 일반적으로 TMC를 통해 — 특정 여행 기간(보통 다음 회계연도) 동안 우대 객실 요금 입찰을 요청하기 위해 복수의 호텔에 발송하는 공식 요청서다. 호텔은 최소 확약 객실 수를 조건으로 협상 요금을 제안하고, 승인된 제안서는 일반 출장 여행자가 접근할 수 있도록 CRS 및 GDS에 탑재되는 법인 협상 요금의 기초가 된다.'
longDef: 'The annual hotel RFP cycle is a cornerstone of corporate travel procurement. The typical timeline runs from July to November each year: buyers distribute RFPs, hotels submit rate proposals, buyers shortlist and negotiate preferred terms, and final rates are loaded into the CRS/GDS by December, ready for the upcoming travel year. Key elements of a hotel RFP include: (a) volume estimate (projected room nights at the property); (b) rate request by room type and day-of-week; (c) rate period, blackout dates, and last-room-availability (LRA) terms; (d) amenity inclusions (Wi-Fi, parking, fitness access, breakfast); (e) cancellation and attrition terms; and (f) preferred-hotel tier (primary, secondary, or preferred). Technology platforms — such as Cvent and Amadeus Total Meetings Management — manage the RFP distribution and bid-tracking workflow. The resulting rates are typically loaded as LNR (Local Negotiated Rate) or CNR (Corporate Negotiated Rate) codes in the hotel''s rate structure and distributed via the GDS or hotel switch. GBTA and ACTE (now merged within GBTA) publish annual hotel RFP trend surveys tracking year-over-year rate movement, acceptance rates, and buyer-hotel negotiation benchmarks.'
longDef_ko: '연간 호텔 RFP 사이클은 법인 여행 조달의 핵심이다. 일반적인 일정은 매년 7~11월로, 구매자가 RFP를 배포하고 호텔이 요금 제안서를 제출하며, 구매자가 후보를 선정·협상하여 다음 여행 연도용 요금이 12월까지 CRS/GDS에 탑재된다. 호텔 RFP의 핵심 요소에는 (a) 예상 객실 수, (b) 객실 유형·요일별 요금 요청, (c) 요금 적용 기간·블랙아웃 날짜·LRA 조건, (d) 편의시설 포함 여부(Wi-Fi·주차·피트니스·조식), (e) 취소·감소율 조건, (f) 우선 호텔 등급(1순위·2순위·우대)이 포함된다. Cvent, Amadeus Total Meetings Management 등 기술 플랫폼이 RFP 배포 및 입찰 추적 워크플로를 관리한다. 승인된 요금은 호텔 요금 체계에서 LNR(로컬 협상 요금) 또는 CNR(법인 협상 요금) 코드로 탑재되어 GDS 또는 호텔 스위치를 통해 유통된다.'
aliases:
  - Hotel Request for Proposal
  - Corporate Hotel RFP
  - Hotel Bid Process
  - Hotel Rate Solicitation
relationships:
  - type: related
    targetTerm: Negotiated Rate
  - type: related
    targetTerm: Travel Management Company
  - type: related
    targetTerm: Corporate Rate
  - type: related
    targetTerm: MICE
  - type: related
    targetTerm: CRS
distinctions:
  - targetTerm: Negotiated Rate
    explanation: 'A Negotiated Rate is the discounted room rate that results from the RFP process and is subsequently loaded into the CRS/GDS for traveller access; the Hotel RFP is the formal annual procurement process that produces that rate, covering solicitation, bidding, negotiation, and final agreement.'
    explanation_ko: '협상 요금(Negotiated Rate)은 RFP 프로세스의 결과로 여행자 접근을 위해 CRS/GDS에 탑재되는 할인 객실 요금이고, 호텔 RFP는 그 요금을 만들어내는 공식 연간 조달 프로세스로 요청서 발송·입찰·협상·최종 합의를 포함한다.'
  - targetTerm: MICE
    explanation: 'A MICE RFP focuses on booking event space, catering, and a group room block for a specific meeting or event; a Hotel RFP (corporate transient) is an annual rate-negotiation cycle establishing recurring preferential rates for individual business travellers throughout the year — not for a single event.'
    explanation_ko: 'MICE RFP는 특정 회의·이벤트를 위한 행사장·케이터링·단체 객실 블록 예약에 초점을 맞추고, 호텔 RFP(법인 개인 출장)는 단일 이벤트가 아닌 연중 개별 법인 여행자를 위한 우대 요금을 확립하는 연간 요금 협상 사이클이다.'
  - targetTerm: Corporate Rate
    explanation: 'A Corporate Rate is the discounted room rate a hotel extends to a company''s travellers; the Hotel RFP is the structured annual solicitation-and-negotiation process through which the company obtains that rate for the upcoming year.'
    explanation_ko: '법인 요금(Corporate Rate)은 호텔이 기업 여행자에게 제공하는 할인 객실 요금이고, 호텔 RFP는 기업이 다음 해 그 요금을 확보하기 위해 진행하는 구조화된 연간 요청·협상 프로세스다.'
sources:
  - name: GBTA Hotel Program Trends — Annual Corporate Hotel RFP Survey
    org: GBTA (Global Business Travel Association)
    version: ''
    section: ''
    url: 'https://www.gbta.org/research/'
    tier: association
  - name: Cvent — Hotel RFP Process Guide
    org: Cvent
    version: ''
    section: ''
    url: 'https://www.cvent.com/en/blog/hospitality/hotel-rfp'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="28" height="36" rx="2"/><line x1="16" y1="18" x2="32" y2="18"/><line x1="16" y1="24" x2="32" y2="24"/><line x1="16" y1="30" x2="26" y2="30"/><circle cx="32" cy="34" r="5"/><path d="M30 34l1.5 1.5 3-3"/></svg>
---

> A Hotel Request for Proposal (RFP) is a formal solicitation issued by a corporate travel buyer — typically facilitated by a Travel Management Company (TMC) — to a set of hotels, requesting preferential room-rate bids for a defined travel period (usually the upcoming calendar year). Hotels respond with negotiated rate offers tied to a minimum volume commitment; accepted proposals become the negotiated corporate rates loaded into the CRS and GDS for transient business-traveller access.

The annual hotel RFP cycle is a cornerstone of corporate travel procurement. The typical timeline runs from July to November each year: buyers distribute RFPs, hotels submit rate proposals, buyers shortlist and negotiate preferred terms, and final rates are loaded into the CRS/GDS by December, ready for the upcoming travel year. Key elements of a hotel RFP include: (a) volume estimate (projected room nights at the property); (b) rate request by room type and day-of-week; (c) rate period, blackout dates, and last-room-availability (LRA) terms; (d) amenity inclusions (Wi-Fi, parking, fitness access, breakfast); (e) cancellation and attrition terms; and (f) preferred-hotel tier (primary, secondary, or preferred). Technology platforms — such as Cvent and Amadeus Total Meetings Management — manage the RFP distribution and bid-tracking workflow. The resulting rates are typically loaded as LNR (Local Negotiated Rate) or CNR (Corporate Negotiated Rate) codes in the hotel's rate structure and distributed via the GDS or hotel switch.

**한국어 / Korean** — **호텔 제안 요청서(Hotel RFP)** — 호텔 RFP(Request for Proposal)는 법인 여행 구매자가 — 일반적으로 TMC를 통해 — 특정 여행 기간 동안 우대 객실 요금 입찰을 요청하기 위해 복수의 호텔에 발송하는 공식 요청서다. 호텔은 최소 확약 객실 수를 조건으로 협상 요금을 제안하고, 승인된 제안서는 CRS 및 GDS에 탑재되는 법인 협상 요금의 기초가 된다.

연간 호텔 RFP 사이클은 법인 여행 조달의 핵심이다. 일반적으로 7~11월에 RFP 배포·입찰·협상이 진행되고, 12월까지 최종 요금이 CRS/GDS에 탑재된다. 핵심 요소에는 예상 객실 수, 객실 유형별 요금, LRA 조건, 편의시설, 취소·감소율 조건, 우선 호텔 등급이 포함된다.

**Aliases:** `Hotel Request for Proposal`, `Corporate Hotel RFP`, `Hotel Bid Process`, `Hotel Rate Solicitation`

# Related
- [Negotiated Rate](/lodging/hotel-rate/negotiated-rate.md) — related
- [Travel Management Company](/common/customer/travel-management-company.md) — related
- [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — related
- [MICE](/lodging/hotel-dist/mice.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related

# Distinctions
- **Hotel RFP** vs [Negotiated Rate](/lodging/hotel-rate/negotiated-rate.md) — A Negotiated Rate is the discounted room rate that results from the RFP process and is subsequently loaded into the CRS/GDS for traveller access; the Hotel RFP is the formal annual procurement process that produces that rate, covering solicitation, bidding, negotiation, and final agreement.
- **Hotel RFP** vs [MICE](/lodging/hotel-dist/mice.md) — A MICE RFP focuses on booking event space, catering, and a group room block for a specific meeting or event; a Hotel RFP (corporate transient) is an annual rate-negotiation cycle establishing recurring preferential rates for individual business travellers throughout the year — not for a single event.
- **Hotel RFP** vs [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — A Corporate Rate is the discounted room rate a hotel extends to a company's travellers; the Hotel RFP is the structured annual solicitation-and-negotiation process through which the company obtains that rate for the upcoming year.

# Citations
[1] [GBTA (Global Business Travel Association) — GBTA Hotel Program Trends — Annual Corporate Hotel RFP Survey](https://www.gbta.org/research/)
[2] [Cvent — Cvent — Hotel RFP Process Guide](https://www.cvent.com/en/blog/hospitality/hotel-rfp)
