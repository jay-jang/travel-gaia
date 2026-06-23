---
type: Business Term
title: Corporate Rate
description: 'A corporate rate is a discounted, negotiated room rate agreed between a hotel (or chain) and a company or travel management company for business travel. Access is usually restricted to authorised bookers via a negotiated rate access code, and the contract often specifies whether the rate carries Last Room Availability (LRA).'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: corporate-rate
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: Corporate Rate (기업 협정요금)
definition_ko: 'Corporate Rate(기업 협정요금)는 비즈니스 출장을 위해 호텔(또는 체인)과 기업·여행관리회사(TMC) 간에 합의된 할인 협정 객실 요금이다. 통상 협정요금 접근 코드(rate access code)를 통해 인가된 예약자만 접근할 수 있으며, 계약에는 흔히 Last Room Availability(LRA) 적용 여부가 명시된다.'
longDef: 'Corporate rates are normally set during an annual RFP cycle and loaded as confidential, channel-restricted rates that only the contracted company''s agencies and travellers can view and book. In GDS distribution they are protected by a rate access code (typically a 3-character identifier) that controls which agencies may retrieve the secured rate, distinct from public rates such as BAR or government rates. A key contractual variable is LRA: with an LRA corporate rate the negotiated price must be honoured as long as any room remains for sale, whereas a non-LRA rate can be closed once the hotel reaches a yield threshold. Corporate rates are a sibling of other negotiated/confidential rates such as consortia rates and relate closely to Allotment when a room block is also contracted.'
longDef_ko: 'Corporate Rate는 보통 연례 RFP 절차에서 설정되며, 계약 기업의 여행사·출장자만 조회·예약할 수 있는 기밀(confidential)·채널 제한 요금으로 적재된다. GDS 유통에서는 보안 요금에 접근할 수 있는 여행사를 통제하는 rate access code(보통 3자리 식별자)로 보호되며, 이는 BAR·정부 요금 같은 공개 요금과 구별된다. 핵심 계약 변수는 LRA로, LRA가 적용되는 corporate rate는 판매 가능한 객실이 한 개라도 남아 있는 한 협정가가 보장되어야 하지만, 비LRA 요금은 수익 임계치 도달 시 마감될 수 있다. Corporate Rate는 컨소시아 요금 등 다른 협정·기밀 요금과 형제 관계이며, 객실 블록이 함께 계약될 때 Allotment와 밀접하게 관련된다.'
aliases:
  - Negotiated Rate
  - Corporate Negotiated Rate
  - Company Rate
providerTerms:
  - provider: Oracle OPERA
    term: Negotiated rate code (corporate)
    context: 'OPERA stores a corporate rate as a negotiated rate code linked to a company/agent profile, often configured as a discount off a BAR/DBAR base rate.'
    context_ko: 'OPERA는 corporate 요금을 회사·에이전트 프로파일에 연결된 negotiated 요금코드로 저장하며, 보통 BAR/DBAR 기준요금에서 할인하도록 구성한다.'
    relationship: same
  - provider: Sabre Hospitality
    term: Negotiated rate (GDS corporate rate)
    context: 'SynXis loads corporate rates as negotiated GDS rates accessed via a corporate/rate access code, subject to negotiated-rate audits.'
    context_ko: SynXis는 corporate 요금을 corporate/rate access 코드로 접근하는 negotiated GDS 요금으로 로딩하며 negotiated-rate audit 대상이 된다.
    relationship: same
relationships:
  - type: child
    targetTerm: Rate Plan
  - type: contrasts
    targetTerm: BAR
  - type: contrasts
    targetTerm: Net Rate
  - type: related
    targetTerm: Allotment
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Rate Parity
distinctions:
  - targetTerm: BAR
    explanation: 'BAR (Best Available Rate) is a public, openly bookable rate that fluctuates with demand; a Corporate Rate is a confidential negotiated rate restricted to a contracted company and typically static for the contract term, often guaranteed under LRA.'
    explanation_ko: 'BAR(Best Available Rate)는 수요에 따라 변동하는 공개·자유예약 요금이지만, Corporate Rate는 계약 기업에 한정된 기밀 협정 요금으로 계약 기간 동안 통상 고정이며 흔히 LRA로 보장된다.'
  - targetTerm: Last Room Availability
    explanation: A corporate rate is the negotiated price itself; LRA/NLRA is an attribute attached to that rate specifying whether it must remain bookable down to the last available room.
    explanation_ko: 'Corporate rate는 협상된 가격 그 자체이고, LRA/NLRA는 그 요금이 마지막 가용 객실까지 예약 가능해야 하는지를 규정하는 속성이다.'
  - targetTerm: Non-Last Room Availability (NLRA)
    explanation: A corporate rate is the negotiated price itself; NLRA is one of two availability conditions (alongside LRA) attached to that price specifying when it can be booked.
    explanation_ko: 'Corporate Rate는 협정 가격 그 자체이고, NLRA는 그 가격이 언제 예약될 수 있는지를 규정하는 (LRA와 함께) 두 가용성 조건 중 하나다.'
  - targetTerm: Rack Rate
    explanation: A corporate rate is a confidential negotiated discount typically expressed relative to rack or BAR; rack rate is the public undiscounted reference it is discounted from.
    explanation_ko: 'Corporate Rate는 보통 rack 또는 BAR 대비로 표현되는 기밀 협정 할인이고, Rack Rate는 그것이 할인되는 기준이 되는 공개 무할인 기준가다.'
  - targetTerm: Rate Access Code (RAC)
    explanation: A corporate rate is the negotiated price/product; the RAC is the access code an agency keys in to retrieve and sell that corporate rate in the GDS.
    explanation_ko: 'Corporate rate는 협상된 가격/상품이고, RAC는 여행사가 GDS에서 그 corporate rate를 조회·판매하기 위해 입력하는 접근 코드다.'
  - targetTerm: Rate Qualifier
    explanation: A corporate rate is the negotiated price/program itself; the corporate-discount qualifier (CD) is merely the code entered into the GDS to make that corporate rate return in availability.
    explanation_ko: 'Corporate rate는 협상된 가격·프로그램 그 자체이고, 법인 할인 한정자(CD)는 그 corporate rate가 조회에 나오도록 GDS에 입력하는 코드일 뿐이다.'
sources:
  - org: American Express Global Business Travel
    name: Hotel Lingo 101 (corporate / LRA)
    version: ''
    section: ''
    url: 'https://www.amexglobalbusinesstravel.com/the-atlas/hotel-lingo-101/'
  - org: SaaS4H
    name: GDS — Negotiated Rate Loading Map & Rate Access Codes
    version: ''
    section: ''
    url: 'https://www.saas4h.com/global-distribution-system-gds/negotiated-rate-loading-map-rate-access-codes'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="22" height="30" rx="2"/><path d="M30 18h10v22H30"/><path d="M14 16h6M14 22h6M14 28h6M35 24h2M35 30h2"/></svg>
---

> A corporate rate is a discounted, negotiated room rate agreed between a hotel (or chain) and a company or travel management company for business travel. Access is usually restricted to authorised bookers via a negotiated rate access code, and the contract often specifies whether the rate carries Last Room Availability (LRA).

Corporate rates are normally set during an annual RFP cycle and loaded as confidential, channel-restricted rates that only the contracted company's agencies and travellers can view and book. In GDS distribution they are protected by a rate access code (typically a 3-character identifier) that controls which agencies may retrieve the secured rate, distinct from public rates such as BAR or government rates. A key contractual variable is LRA: with an LRA corporate rate the negotiated price must be honoured as long as any room remains for sale, whereas a non-LRA rate can be closed once the hotel reaches a yield threshold. Corporate rates are a sibling of other negotiated/confidential rates such as consortia rates and relate closely to Allotment when a room block is also contracted.

**한국어 / Korean** — **Corporate Rate (기업 협정요금)** — Corporate Rate(기업 협정요금)는 비즈니스 출장을 위해 호텔(또는 체인)과 기업·여행관리회사(TMC) 간에 합의된 할인 협정 객실 요금이다. 통상 협정요금 접근 코드(rate access code)를 통해 인가된 예약자만 접근할 수 있으며, 계약에는 흔히 Last Room Availability(LRA) 적용 여부가 명시된다.

Corporate Rate는 보통 연례 RFP 절차에서 설정되며, 계약 기업의 여행사·출장자만 조회·예약할 수 있는 기밀(confidential)·채널 제한 요금으로 적재된다. GDS 유통에서는 보안 요금에 접근할 수 있는 여행사를 통제하는 rate access code(보통 3자리 식별자)로 보호되며, 이는 BAR·정부 요금 같은 공개 요금과 구별된다. 핵심 계약 변수는 LRA로, LRA가 적용되는 corporate rate는 판매 가능한 객실이 한 개라도 남아 있는 한 협정가가 보장되어야 하지만, 비LRA 요금은 수익 임계치 도달 시 마감될 수 있다. Corporate Rate는 컨소시아 요금 등 다른 협정·기밀 요금과 형제 관계이며, 객실 블록이 함께 계약될 때 Allotment와 밀접하게 관련된다.

**Aliases:** `Negotiated Rate`, `Corporate Negotiated Rate`, `Company Rate`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Oracle OPERA | `Negotiated rate code (corporate)` | same | OPERA stores a corporate rate as a negotiated rate code linked to a company/agent profile, often configured as a discount off a BAR/DBAR base rate. |
| Sabre Hospitality | `Negotiated rate (GDS corporate rate)` | same | SynXis loads corporate rates as negotiated GDS rates accessed via a corporate/rate access code, subject to negotiated-rate audits. |

# Related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — child
- [BAR](/lodging/hotel-rate/bar.md) — contrasts
- [Net Rate](/lodging/hotel-dist/net-rate.md) — contrasts
- [Allotment](/lodging/hotel-rate/allotment.md) — related
- [GDS](/common/standards/gds.md) — related
- [Rate Parity](/lodging/hotel-rate/rate-parity.md) — related

# Distinctions
- **Corporate Rate** vs [BAR](/lodging/hotel-rate/bar.md) — BAR (Best Available Rate) is a public, openly bookable rate that fluctuates with demand; a Corporate Rate is a confidential negotiated rate restricted to a contracted company and typically static for the contract term, often guaranteed under LRA.
- **Corporate Rate** vs [Last Room Availability](/lodging/hotel-dist/last-room-availability.md) — A corporate rate is the negotiated price itself; LRA/NLRA is an attribute attached to that rate specifying whether it must remain bookable down to the last available room.
- **Corporate Rate** vs [Non-Last Room Availability (NLRA)](/lodging/hotel-rate/non-last-room-availability-nlra.md) — A corporate rate is the negotiated price itself; NLRA is one of two availability conditions (alongside LRA) attached to that price specifying when it can be booked.
- **Corporate Rate** vs [Rack Rate](/lodging/hotel-rate/rack-rate.md) — A corporate rate is a confidential negotiated discount typically expressed relative to rack or BAR; rack rate is the public undiscounted reference it is discounted from.
- **Corporate Rate** vs [Rate Access Code (RAC)](/lodging/hotel-dist/rate-access-code.md) — A corporate rate is the negotiated price/product; the RAC is the access code an agency keys in to retrieve and sell that corporate rate in the GDS.
- **Corporate Rate** vs [Rate Qualifier](/ground/car/rate-qualifier.md) — A corporate rate is the negotiated price/program itself; the corporate-discount qualifier (CD) is merely the code entered into the GDS to make that corporate rate return in availability.

# Citations
[1] [American Express Global Business Travel — Hotel Lingo 101 (corporate / LRA)](https://www.amexglobalbusinesstravel.com/the-atlas/hotel-lingo-101/)
[2] [SaaS4H — GDS — Negotiated Rate Loading Map & Rate Access Codes](https://www.saas4h.com/global-distribution-system-gds/negotiated-rate-loading-map-rate-access-codes)
