---
type: Business Term
title: Operator Payout
description: >-
  The post-fulfillment transfer of funds from a marketplace or reseller to the
  operator — net of commission — typically on a batch cycle (e.g. weekly) after
  the experience is delivered.
tags:
  - tour-commercial
  - active
  - Tours & Activities
timestamp: '2026-06-25T00:00:00Z'
id: operator-payout
vertical: tours
category: tour-commercial
conceptType: business-term
status: active
term_ko: 운영사 정산금(Operator Payout)
definition_ko: '마켓플레이스·리셀러가 체험 제공 후 운영사에 커미션을 제하고 자금을 이전하는 것으로, 보통 이용 완료 후 배치 주기(예: 주간)로 이뤄진다.'
longDef: >-
  When the marketplace is merchant of record it collects the retail price up
  front and remits the operator its share later — frequently after travel and on
  a weekly batch — which makes payout timing a major operator cash-flow issue
  distinct from the customer payment event. Payout reconciles against redemption
  and no-shows and carries chargeback exposure, and is the settlement
  counterpart that the flow's separate "settle" stage represents.
longDef_ko: >-
  마켓플레이스가 merchant of record일 때 소매가를 선수금으로 받고 운영사 몫을 나중에 — 흔히 이용 후, 주간 배치로 —
  정산하는데, 이 정산 시점은 고객 결제 사건과 구별되는 운영사의 주요 현금흐름 이슈다. 정산은 사용처리·노쇼와 대사되고 차지백 위험을
  동반하며, 유통 흐름의 별도 "정산(settle)" 단계가 표현하는 정산 측면이다.
aliases:
  - Supplier Payout
  - Settlement (Activities)
  - Remittance (Tours)
relationships:
  - type: related
    targetTerm: Marketplace Commission
  - type: related
    targetTerm: Merchant of Record
  - type: related
    targetTerm: Remittance
  - type: related
    targetTerm: Redemption
distinctions:
  - targetTerm: Marketplace Commission
    explanation: >-
      The marketplace commission is the fee the marketplace keeps; the operator
      payout is the remaining amount it actually transfers to the operator,
      usually after the experience is delivered.
    explanation_ko: '마켓플레이스 커미션은 마켓플레이스가 갖는 수수료이고, 운영사 정산금은 보통 체험 제공 후 운영사에 실제 이전하는 잔액이다.'
sources:
  - name: Bokun — Payouts & payment settlement
    org: Bokun (Tripadvisor)
    version: ''
    section: ''
    url: 'https://www.bokun.io/'
    tier: vendor-doc
  - name: Arival — How operators get paid
    org: Arival
    version: ''
    section: ''
    url: 'https://arival.travel/'
    tier: secondary
icon: >-
  <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none"
  stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="32"
  height="24" rx="3"/><path d="M8 18h28a2 2 0 0 1 2 2v0"/><circle cx="33"
  cy="24" r="2.5"/></svg>
---

> The post-fulfillment transfer of funds from a marketplace or reseller to the operator — net of commission — typically on a batch cycle (e.g. weekly) after the experience is delivered.

When the marketplace is merchant of record it collects the retail price up front and remits the operator its share later — frequently after travel and on a weekly batch — which makes payout timing a major operator cash-flow issue distinct from the customer payment event. Payout reconciles against redemption and no-shows and carries chargeback exposure, and is the settlement counterpart that the flow's separate "settle" stage represents.

**한국어 / Korean** — **운영사 정산금(Operator Payout)** — 마켓플레이스·리셀러가 체험 제공 후 운영사에 커미션을 제하고 자금을 이전하는 것으로, 보통 이용 완료 후 배치 주기(예: 주간)로 이뤄진다.

마켓플레이스가 merchant of record일 때 소매가를 선수금으로 받고 운영사 몫을 나중에 — 흔히 이용 후, 주간 배치로 — 정산하는데, 이 정산 시점은 고객 결제 사건과 구별되는 운영사의 주요 현금흐름 이슈다. 정산은 사용처리·노쇼와 대사되고 차지백 위험을 동반하며, 유통 흐름의 별도 "정산(settle)" 단계가 표현하는 정산 측면이다.

**Aliases:** `Supplier Payout`, `Settlement (Activities)`, `Remittance (Tours)`

# Related
- Marketplace Commission — related
- Merchant of Record — related
- Remittance — related
- Redemption — related

# Distinctions
- **Operator Payout** vs Marketplace Commission — The marketplace commission is the fee the marketplace keeps; the operator payout is the remaining amount it actually transfers to the operator, usually after the experience is delivered.

# Citations
[1] [Bokun (Tripadvisor) — Bokun — Payouts & payment settlement](https://www.bokun.io/)
[2] [Arival — Arival — How operators get paid](https://arival.travel/)
