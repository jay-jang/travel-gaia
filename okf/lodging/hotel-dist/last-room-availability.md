---
type: Standard Term
title: Last Room Availability
description: 'Last Room Availability (LRA) is a negotiated-rate attribute, common in corporate and GDS distribution, guaranteeing that the contracted rate remains bookable whenever a room of the negotiated type is available — even down to the last such room. Its opposite, Non-LRA (NLRA), lets the hotel close out the negotiated rate at its discretion (typically in high demand) while still selling at higher public rates.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: last-room-availability
vertical: lodging
category: hotel-dist
conceptType: standard-term
status: active
abbreviation: LRA
term_ko: '라스트 룸 어베일러빌리티 (Last Room Availability, LRA)'
definition_ko: '라스트 룸 어베일러빌리티(LRA)는 기업·GDS 유통에서 흔한 협상 요금(negotiated rate) 속성으로, 협상된 객실 유형이 단 하나라도 남아 있는 한 계약 요금이 예약 가능하도록 보장한다. 그 반대인 Non-LRA(NLRA)는 호텔이 (대개 수요가 높을 때) 재량으로 협상 요금을 마감(close out)하고도 더 높은 공개 요금으로는 계속 판매할 수 있게 한다.'
longDef: 'LRA is a control on how a negotiated/corporate rate behaves against availability. Under LRA, as long as the contracted room type can be sold at all, the negotiated rate must be offered — protecting corporate travelers from being closed out and forced onto higher walk-up rates during peak periods. Under NLRA, the hotel may yield-manage by blocking the negotiated rate on high-demand dates while keeping inventory open at public rates. LRA is therefore valuable to a corporate buyer and costly to the hotel''s revenue management, so it is a negotiating point: industry guidance suggests securing LRA on top-volume properties at the cost of a slightly smaller discount. In the GDS, LRA versus NLRA is loaded as part of the negotiated rate''s rules alongside its rate access code.'
longDef_ko: 'LRA는 협상/기업 요금이 가용성에 대해 어떻게 동작하는지를 통제한다. LRA에서는 계약된 객실 유형이 조금이라도 판매 가능한 한 협상 요금이 반드시 제공되어야 하므로, 성수기에 기업 출장자가 마감당해 더 높은 워크업(walk-up) 요금으로 내몰리는 것을 막는다. NLRA에서는 호텔이 고수요 일자에 협상 요금을 차단하면서도 공개 요금으로는 재고를 열어두는 yield 관리를 할 수 있다. 따라서 LRA는 기업 구매자에게는 가치 있고 호텔 수익 관리에는 부담이 되어 협상 포인트가 된다. 업계 지침은 다소 작은 할인을 감수하더라도 거래량 상위 프로퍼티에 LRA를 확보할 것을 권한다. GDS에서 LRA 대 NLRA는 협상 요금의 규칙 일부로 rate access code와 함께 로딩된다.'
aliases:
  - LRA
  - Last Room Availability Rate
  - Non-LRA
  - NLRA
providerTerms:
  - provider: GDS / corporate RFP (GBTA)
    term: LRA vs NLRA (Non-Last Room Availability)
    context: 'In GDS/corporate distribution the negotiated-rate attribute is expressed as LRA or its opposite NLRA, where NLRA lets the hotel block the negotiated rate during peak demand; GBTA guidance treats LRA as a costed contract concession.'
    context_ko: 'GDS/기업 유통에서 협상 요금 속성은 LRA 또는 그 반대인 NLRA로 표현되며, NLRA는 호텔이 성수기에 협상 요금을 차단할 수 있게 한다. GBTA 지침은 LRA를 비용이 드는 계약 양보로 본다.'
    relationship: related
relationships:
  - type: related
    targetTerm: Corporate Rate
  - type: related
    targetTerm: Rate Access Code (RAC)
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Stop Sell
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Revenue Management
distinctions:
  - targetTerm: Stop Sell
    explanation: 'A stop sell closes a rate or room type entirely; LRA is the guarantee that the negotiated rate will NOT be stopped/closed out as long as the room type is sellable, whereas NLRA permits exactly such selective close-outs.'
    explanation_ko: 'Stop sell은 요금이나 객실 유형을 완전히 닫는 것이고, LRA는 객실 유형이 판매 가능한 한 협상 요금이 중단/마감되지 않도록 하는 보장이며, NLRA는 바로 그런 선택적 마감을 허용한다.'
  - targetTerm: Corporate Rate
    explanation: A corporate rate is the negotiated price itself; LRA/NLRA is an attribute attached to that rate specifying whether it must remain bookable down to the last available room.
    explanation_ko: 'Corporate rate는 협상된 가격 그 자체이고, LRA/NLRA는 그 요금이 마지막 가용 객실까지 예약 가능해야 하는지를 규정하는 속성이다.'
sources:
  - org: BCD Travel
    name: Last Room Availability — Travel Glossary
    version: ''
    section: ''
    url: 'https://www.bcdtravel.com/glossary/last-room-availability/'
    tier: secondary
  - org: AltexSoft
    name: Last room availability (LRA) — Glossary
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/glossary/last-room-availability-lra/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="9" height="9" rx="1"/><rect x="20" y="12" width="9" height="9" rx="1"/><rect x="32" y="12" width="9" height="9" rx="1"/><path d="M10 17l1.5 1.5L14 15M22 17l1.5 1.5L26 15"/><path d="M32 12l9 9M41 12l-9 9"/><path d="M14 38l4-6 4 4 5-8 4 5" /><circle cx="36.5" cy="16.5" r="6.5" opacity="0"/></svg>
---

> Last Room Availability (LRA) is a negotiated-rate attribute, common in corporate and GDS distribution, guaranteeing that the contracted rate remains bookable whenever a room of the negotiated type is available — even down to the last such room. Its opposite, Non-LRA (NLRA), lets the hotel close out the negotiated rate at its discretion (typically in high demand) while still selling at higher public rates.

LRA is a control on how a negotiated/corporate rate behaves against availability. Under LRA, as long as the contracted room type can be sold at all, the negotiated rate must be offered — protecting corporate travelers from being closed out and forced onto higher walk-up rates during peak periods. Under NLRA, the hotel may yield-manage by blocking the negotiated rate on high-demand dates while keeping inventory open at public rates. LRA is therefore valuable to a corporate buyer and costly to the hotel's revenue management, so it is a negotiating point: industry guidance suggests securing LRA on top-volume properties at the cost of a slightly smaller discount. In the GDS, LRA versus NLRA is loaded as part of the negotiated rate's rules alongside its rate access code.

**한국어 / Korean** — **라스트 룸 어베일러빌리티 (Last Room Availability, LRA)** — 라스트 룸 어베일러빌리티(LRA)는 기업·GDS 유통에서 흔한 협상 요금(negotiated rate) 속성으로, 협상된 객실 유형이 단 하나라도 남아 있는 한 계약 요금이 예약 가능하도록 보장한다. 그 반대인 Non-LRA(NLRA)는 호텔이 (대개 수요가 높을 때) 재량으로 협상 요금을 마감(close out)하고도 더 높은 공개 요금으로는 계속 판매할 수 있게 한다.

LRA는 협상/기업 요금이 가용성에 대해 어떻게 동작하는지를 통제한다. LRA에서는 계약된 객실 유형이 조금이라도 판매 가능한 한 협상 요금이 반드시 제공되어야 하므로, 성수기에 기업 출장자가 마감당해 더 높은 워크업(walk-up) 요금으로 내몰리는 것을 막는다. NLRA에서는 호텔이 고수요 일자에 협상 요금을 차단하면서도 공개 요금으로는 재고를 열어두는 yield 관리를 할 수 있다. 따라서 LRA는 기업 구매자에게는 가치 있고 호텔 수익 관리에는 부담이 되어 협상 포인트가 된다. 업계 지침은 다소 작은 할인을 감수하더라도 거래량 상위 프로퍼티에 LRA를 확보할 것을 권한다. GDS에서 LRA 대 NLRA는 협상 요금의 규칙 일부로 rate access code와 함께 로딩된다.

**Aliases:** `LRA`, `Last Room Availability Rate`, `Non-LRA`, `NLRA`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| GDS / corporate RFP (GBTA) | `LRA vs NLRA (Non-Last Room Availability)` | related | In GDS/corporate distribution the negotiated-rate attribute is expressed as LRA or its opposite NLRA, where NLRA lets the hotel block the negotiated rate during peak demand; GBTA guidance treats LRA as a costed contract concession. |

# Related
- [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — related
- [Rate Access Code (RAC)](/lodging/hotel-dist/rate-access-code.md) — related
- [GDS](/common/standards/gds.md) — related
- [Stop Sell](/lodging/hotel-rate/stop-sell.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related

# Distinctions
- **Last Room Availability** vs [Stop Sell](/lodging/hotel-rate/stop-sell.md) — A stop sell closes a rate or room type entirely; LRA is the guarantee that the negotiated rate will NOT be stopped/closed out as long as the room type is sellable, whereas NLRA permits exactly such selective close-outs.
- **Last Room Availability** vs [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — A corporate rate is the negotiated price itself; LRA/NLRA is an attribute attached to that rate specifying whether it must remain bookable down to the last available room.

# Citations
[1] [BCD Travel — Last Room Availability — Travel Glossary](https://www.bcdtravel.com/glossary/last-room-availability/)
[2] [AltexSoft — Last room availability (LRA) — Glossary](https://www.altexsoft.com/glossary/last-room-availability-lra/)
