---
type: Business Term
title: Last Room Availability (LRA)
description: 'Last Room Availability (LRA) is a contractual and connectivity term guaranteeing that a negotiated rate (typically corporate, TMC, or consortium) remains bookable as long as any room of the eligible type is for sale — even the final room — and is never closed out ahead of public rates. It is the defining premium attribute of a negotiated hotel program and the counterpart to Non-Last Room Availability (NLRA).'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: last-room-availability-lra
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
abbreviation: LRA
term_ko: 'Last Room Availability (LRA, 마지막 객실 가용성)'
definition_ko: 'Last Room Availability(LRA)는 협정 요금(보통 기업·TMC·컨소시엄)이 해당 객실 유형이 단 한 개라도 판매 중이면 — 마지막 한 개라도 — 계속 예약 가능하며 공개 요금보다 먼저 마감되지 않도록 보장하는 계약·연동 용어다. 협정 호텔 프로그램의 핵심 프리미엄 속성이며, Non-Last Room Availability(NLRA)의 상대 개념이다.'
longDef: 'Under an LRA agreement the hotel commits that the negotiated rate will be offered until the property is genuinely sold out for that room type, so the contracted company''s travellers can always obtain their rate regardless of demand. LRA rates are distributed through GDS seamless (direct two-way) connectivity so that the agency or self-booking tool sees real-time availability of the secured rate. LRA is widely regarded as the single most valuable clause in a corporate hotel contract because it removes the risk of a traveller being shut out of the negotiated price on high-demand dates; in exchange the hotel usually demands a higher rate or stronger volume commitment than for an NLRA rate. It is typically a flag on a corporate or consortia rate rather than a separate rate plan.'
longDef_ko: 'LRA 약정에서 호텔은 해당 객실 유형이 실제로 매진될 때까지 협정 요금을 제공할 것을 약속하므로, 계약 기업의 출장자는 수요와 무관하게 항상 자신의 요금을 확보할 수 있다. LRA 요금은 GDS seamless(직접 양방향) 연동을 통해 유통되어 여행사나 셀프부킹툴이 보안 요금의 가용성을 실시간으로 볼 수 있다. LRA는 출장자가 고수요 날짜에 협정 가격에서 배제될 위험을 없애기 때문에 기업 호텔 계약에서 단일 조항으로 가장 가치가 높다고 평가되며, 그 대가로 호텔은 보통 NLRA 요금보다 높은 요율이나 강한 물량 약정을 요구한다. 통상 별도의 요금제가 아니라 corporate·consortia 요금에 부여되는 플래그(flag)다.'
aliases:
  - Last Room Availability
  - LRA Rate
providerTerms:
  - provider: Sabre Hospitality
    term: Last Room Availability (LRA)
    context: 'In SynXis/GDS distribution, an LRA negotiated rate stays bookable as long as any eligible room is for sale; consortia and corporate programs typically mandate LRA.'
    context_ko: 'SynXis/GDS 유통에서 LRA 협상 요금은 해당 객실이 하나라도 판매 중이면 예약 가능하며, 컨소시아·corporate 프로그램이 보통 LRA를 요구한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Corporate Rate
  - type: contrasts
    targetTerm: Non-Last Room Availability (NLRA)
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Allotment
  - type: related
    targetTerm: Stop Sell
distinctions:
  - targetTerm: Non-Last Room Availability (NLRA)
    explanation: 'LRA guarantees the negotiated rate down to the last sellable room; NLRA lets the hotel close that same negotiated rate once demand rises, even while rooms remain. LRA favours the buyer, NLRA favours the hotel''s yield.'
    explanation_ko: 'LRA는 판매 가능한 마지막 객실까지 협정 요금을 보장하고, NLRA는 객실이 남아 있어도 수요가 오르면 호텔이 그 협정 요금을 마감할 수 있게 한다. LRA는 구매자에게, NLRA는 호텔의 yield에 유리하다.'
  - targetTerm: Allotment
    explanation: 'An allotment is a fixed block of rooms held for a partner; LRA is a guarantee about rate access against the hotel''s whole live inventory, not a reserved block. LRA can apply even when no allotment exists.'
    explanation_ko: 'Allotment는 파트너를 위해 확보된 고정 객실 블록이고, LRA는 예약된 블록이 아니라 호텔의 전체 실시간 재고에 대한 요금 접근 보장이다. LRA는 allotment가 없어도 적용될 수 있다.'
  - targetTerm: Stop Sell
    explanation: 'A stop sell closes a rate or room from sale; an LRA guarantee specifically restrains the hotel from applying a stop sell to the negotiated rate while inventory remains, whereas NLRA permits exactly that.'
    explanation_ko: 'Stop Sell은 요금·객실을 판매 중지시키고, LRA 보장은 재고가 남아 있는 동안 호텔이 협정 요금에 stop sell을 적용하지 못하도록 특별히 제한한다. NLRA는 바로 그것을 허용한다.'
sources:
  - org: AltexSoft
    name: Last room availability (LRA)
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/glossary/last-room-availability-lra/'
    tier: secondary
  - org: Perk
    name: Last Room Availability (corporate travel glossary)
    version: ''
    section: ''
    url: 'https://www.perk.com/corporate-travel-glossary/last-room-availability/'
    tier: secondary
  - org: Teplis Travel
    name: Are Last Room Availability Rates Overvalued?
    version: ''
    section: ''
    url: 'https://teplis.com/blog/last-room-availability-rates-overvalued/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22V14a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v8"/><path d="M8 22h32v12H8z"/><path d="M14 22v-4a2 2 0 0 1 2-2h6v8"/><path d="M34 28l3 3 5-6"/></svg>
---

> Last Room Availability (LRA) is a contractual and connectivity term guaranteeing that a negotiated rate (typically corporate, TMC, or consortium) remains bookable as long as any room of the eligible type is for sale — even the final room — and is never closed out ahead of public rates. It is the defining premium attribute of a negotiated hotel program and the counterpart to Non-Last Room Availability (NLRA).

Under an LRA agreement the hotel commits that the negotiated rate will be offered until the property is genuinely sold out for that room type, so the contracted company's travellers can always obtain their rate regardless of demand. LRA rates are distributed through GDS seamless (direct two-way) connectivity so that the agency or self-booking tool sees real-time availability of the secured rate. LRA is widely regarded as the single most valuable clause in a corporate hotel contract because it removes the risk of a traveller being shut out of the negotiated price on high-demand dates; in exchange the hotel usually demands a higher rate or stronger volume commitment than for an NLRA rate. It is typically a flag on a corporate or consortia rate rather than a separate rate plan.

**한국어 / Korean** — **Last Room Availability (LRA, 마지막 객실 가용성)** — Last Room Availability(LRA)는 협정 요금(보통 기업·TMC·컨소시엄)이 해당 객실 유형이 단 한 개라도 판매 중이면 — 마지막 한 개라도 — 계속 예약 가능하며 공개 요금보다 먼저 마감되지 않도록 보장하는 계약·연동 용어다. 협정 호텔 프로그램의 핵심 프리미엄 속성이며, Non-Last Room Availability(NLRA)의 상대 개념이다.

LRA 약정에서 호텔은 해당 객실 유형이 실제로 매진될 때까지 협정 요금을 제공할 것을 약속하므로, 계약 기업의 출장자는 수요와 무관하게 항상 자신의 요금을 확보할 수 있다. LRA 요금은 GDS seamless(직접 양방향) 연동을 통해 유통되어 여행사나 셀프부킹툴이 보안 요금의 가용성을 실시간으로 볼 수 있다. LRA는 출장자가 고수요 날짜에 협정 가격에서 배제될 위험을 없애기 때문에 기업 호텔 계약에서 단일 조항으로 가장 가치가 높다고 평가되며, 그 대가로 호텔은 보통 NLRA 요금보다 높은 요율이나 강한 물량 약정을 요구한다. 통상 별도의 요금제가 아니라 corporate·consortia 요금에 부여되는 플래그(flag)다.

**Aliases:** `Last Room Availability`, `LRA Rate`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre Hospitality | `Last Room Availability (LRA)` | same | In SynXis/GDS distribution, an LRA negotiated rate stays bookable as long as any eligible room is for sale; consortia and corporate programs typically mandate LRA. |

# Related
- [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — related
- [Non-Last Room Availability (NLRA)](/lodging/hotel-rate/non-last-room-availability-nlra.md) — contrasts
- [GDS](/common/standards/gds.md) — related
- [Allotment](/lodging/hotel-rate/allotment.md) — related
- [Stop Sell](/lodging/hotel-rate/stop-sell.md) — related

# Distinctions
- **Last Room Availability (LRA)** vs [Non-Last Room Availability (NLRA)](/lodging/hotel-rate/non-last-room-availability-nlra.md) — LRA guarantees the negotiated rate down to the last sellable room; NLRA lets the hotel close that same negotiated rate once demand rises, even while rooms remain. LRA favours the buyer, NLRA favours the hotel's yield.
- **Last Room Availability (LRA)** vs [Allotment](/lodging/hotel-rate/allotment.md) — An allotment is a fixed block of rooms held for a partner; LRA is a guarantee about rate access against the hotel's whole live inventory, not a reserved block. LRA can apply even when no allotment exists.
- **Last Room Availability (LRA)** vs [Stop Sell](/lodging/hotel-rate/stop-sell.md) — A stop sell closes a rate or room from sale; an LRA guarantee specifically restrains the hotel from applying a stop sell to the negotiated rate while inventory remains, whereas NLRA permits exactly that.

# Citations
[1] [AltexSoft — Last room availability (LRA)](https://www.altexsoft.com/glossary/last-room-availability-lra/)
[2] [Perk — Last Room Availability (corporate travel glossary)](https://www.perk.com/corporate-travel-glossary/last-room-availability/)
[3] [Teplis Travel — Are Last Room Availability Rates Overvalued?](https://teplis.com/blog/last-room-availability-rates-overvalued/)
