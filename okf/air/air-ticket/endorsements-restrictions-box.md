---
type: Document
title: Endorsements / Restrictions Box
description: 'The Endorsements / Restrictions box is the ticket field that records carrier comments and fare restrictions governing how a coupon may be used — most importantly whether it can be transferred to another carrier (endorsability) or rerouted. Codes such as NON-ENDORSABLE and NON-REROUTABLE limit acceptance, reissue, and revalidation by other airlines.'
tags:
  - air-ticket
  - active
timestamp: '2026-06-18T00:00:00Z'
id: endorsements-restrictions-box
vertical: air
category: air-ticket
conceptType: document
status: active
term_ko: Endorsement/Restriction 란 (배서/제한 표시 필드)
definition_ko: 'Endorsement/Restriction 란은 쿠폰의 사용 방식을 규율하는 항공사 코멘트와 운임 제한을 기록하는 항공권 필드로, 특히 해당 쿠폰을 다른 항공사로 양도할 수 있는지(endorsability) 또는 경로를 변경할 수 있는지(rerouting)를 명시한다. NON-ENDORSABLE, NON-REROUTABLE 등의 표기는 다른 항공사의 인수(acceptance), reissue, revalidation을 제한한다.'
longDef: 'On legacy paper tickets this was a physical box in the upper area of the document; on e-tickets and EMDs it is a structured/free-text data field. In GDS practice it is populated via the endorsement element (Amadeus FE), which carries free-flow text (subject to a character limit) and can be set manually or generated automatically from the fare rule. NON-ENDORSABLE means the coupon may be honored only by the carrier indicated, so it cannot be reissued onto or accepted by another airline; NON-REROUTABLE prohibits changing the routing/stopovers. Other endorsements may state penalty/change conditions, validity, or commercial notes. Because these restrictions control interline acceptance and what an agent may do at reissue or revalidation, the endorsement box is a core acceptance-control element of the ticket.'
longDef_ko: '구형 종이 항공권에서는 서류 상단의 물리적 칸이었으나, e-ticket 및 EMD에서는 구조화된/자유 텍스트 데이터 필드이다. GDS 실무에서는 endorsement element(Amadeus의 FE)로 입력되며, 문자 수 제한이 있는 자유 텍스트를 담고 수동 입력하거나 운임 규정(fare rule)으로부터 자동 생성될 수 있다. NON-ENDORSABLE은 해당 쿠폰을 명시된 항공사만 인정할 수 있음을 의미하여 다른 항공사로 reissue되거나 인수될 수 없으며, NON-REROUTABLE은 경로/도중체류(stopover) 변경을 금지한다. 그 밖의 endorsement는 위약/변경 조건, 유효기간, 상업적 주석 등을 명시할 수 있다. 이 제한들은 interline 인수와 reissue·revalidation 시 대리점이 할 수 있는 행위를 통제하므로, endorsement 란은 항공권의 핵심적인 인수통제(acceptance-control) 요소이다.'
aliases:
  - Endorsement Box
  - Endorsements/Restrictions
  - FE element
  - Endorsement element
providerTerms:
  - provider: Amadeus
    term: Endorsement (FE) element
    context: 'Amadeus stores endorsement/restriction text in the FE element of the PNR, which prints into the ticket''s endorsement box; it can be entered manually or overridden by an automatic FE from the fare quote.'
    context_ko: 'Amadeus는 endorsement/restriction 텍스트를 PNR의 FE element에 저장하며, 이는 항공권의 endorsement 란에 인쇄된다. 수동 입력하거나 운임 조회(fare quote)의 자동 FE로 덮어쓸 수 있다.'
    relationship: narrower
relationships:
  - type: related
    targetTerm: Validating Carrier
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Interline
  - type: related
    targetTerm: Fare Rule
  - type: parent
    targetTerm: E-ticket
distinctions:
  - targetTerm: Fare Rule
    explanation: 'The fare rule is the underlying ATPCO-filed condition (e.g., the fare is non-endorsable); the endorsement box is where the resulting restriction is written onto the actual ticket so that accepting/reissuing carriers see and enforce it.'
    explanation_ko: 'Fare Rule은 ATPCO에 신고된 기저 조건(예: 해당 운임이 non-endorsable임)이고, endorsement 란은 그 결과로 도출된 제한이 실제 항공권에 기재되어 인수·reissue 항공사가 확인하고 집행하도록 하는 위치이다.'
  - targetTerm: Reissue
    explanation: 'Reissue is the act of issuing a replacement ticket; endorsement/restriction codes (e.g., NON-ENDORSABLE) constrain whether and onto which carrier a coupon may be reissued or accepted.'
    explanation_ko: 'Reissue는 대체 항공권을 발행하는 행위이고, endorsement/restriction 코드(예: NON-ENDORSABLE)는 쿠폰을 reissue하거나 어느 항공사가 인수할 수 있는지를 제약한다.'
sources:
  - org: BCD Travel
    name: 'Glossary: Non-endorsable'
    version: ''
    section: ''
    url: 'https://www.bcdtravel.com/glossary/non-endorsable/'
    tier: secondary
  - org: Amadeus
    name: Working with the endorsement (FE) element
    version: ''
    section: ''
    url: 'https://servicehub.amadeus.com/c/portal/view-solution/875231/working-with-the-endorsement-fe-element'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="36" height="24" rx="3"/><path d="M11 19h14M11 24h10"/><path d="M27 31l4 4 9-11"/><path d="M14 35l20-23"/></svg>
---

> The Endorsements / Restrictions box is the ticket field that records carrier comments and fare restrictions governing how a coupon may be used — most importantly whether it can be transferred to another carrier (endorsability) or rerouted. Codes such as NON-ENDORSABLE and NON-REROUTABLE limit acceptance, reissue, and revalidation by other airlines.

On legacy paper tickets this was a physical box in the upper area of the document; on e-tickets and EMDs it is a structured/free-text data field. In GDS practice it is populated via the endorsement element (Amadeus FE), which carries free-flow text (subject to a character limit) and can be set manually or generated automatically from the fare rule. NON-ENDORSABLE means the coupon may be honored only by the carrier indicated, so it cannot be reissued onto or accepted by another airline; NON-REROUTABLE prohibits changing the routing/stopovers. Other endorsements may state penalty/change conditions, validity, or commercial notes. Because these restrictions control interline acceptance and what an agent may do at reissue or revalidation, the endorsement box is a core acceptance-control element of the ticket.

**한국어 / Korean** — **Endorsement/Restriction 란 (배서/제한 표시 필드)** — Endorsement/Restriction 란은 쿠폰의 사용 방식을 규율하는 항공사 코멘트와 운임 제한을 기록하는 항공권 필드로, 특히 해당 쿠폰을 다른 항공사로 양도할 수 있는지(endorsability) 또는 경로를 변경할 수 있는지(rerouting)를 명시한다. NON-ENDORSABLE, NON-REROUTABLE 등의 표기는 다른 항공사의 인수(acceptance), reissue, revalidation을 제한한다.

구형 종이 항공권에서는 서류 상단의 물리적 칸이었으나, e-ticket 및 EMD에서는 구조화된/자유 텍스트 데이터 필드이다. GDS 실무에서는 endorsement element(Amadeus의 FE)로 입력되며, 문자 수 제한이 있는 자유 텍스트를 담고 수동 입력하거나 운임 규정(fare rule)으로부터 자동 생성될 수 있다. NON-ENDORSABLE은 해당 쿠폰을 명시된 항공사만 인정할 수 있음을 의미하여 다른 항공사로 reissue되거나 인수될 수 없으며, NON-REROUTABLE은 경로/도중체류(stopover) 변경을 금지한다. 그 밖의 endorsement는 위약/변경 조건, 유효기간, 상업적 주석 등을 명시할 수 있다. 이 제한들은 interline 인수와 reissue·revalidation 시 대리점이 할 수 있는 행위를 통제하므로, endorsement 란은 항공권의 핵심적인 인수통제(acceptance-control) 요소이다.

**Aliases:** `Endorsement Box`, `Endorsements/Restrictions`, `FE element`, `Endorsement element`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Endorsement (FE) element` | narrower | Amadeus stores endorsement/restriction text in the FE element of the PNR, which prints into the ticket's endorsement box; it can be entered manually or overridden by an automatic FE from the fare quote. |

# Related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [Interline](/air/air-partner/interline.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — parent

# Distinctions
- **Endorsements / Restrictions Box** vs [Fare Rule](/air/air-shop/fare-rule.md) — The fare rule is the underlying ATPCO-filed condition (e.g., the fare is non-endorsable); the endorsement box is where the resulting restriction is written onto the actual ticket so that accepting/reissuing carriers see and enforce it.
- **Endorsements / Restrictions Box** vs [Reissue](/air/air-ticket/reissue.md) — Reissue is the act of issuing a replacement ticket; endorsement/restriction codes (e.g., NON-ENDORSABLE) constrain whether and onto which carrier a coupon may be reissued or accepted.

# Citations
[1] [BCD Travel — Glossary: Non-endorsable](https://www.bcdtravel.com/glossary/non-endorsable/)
[2] [Amadeus — Working with the endorsement (FE) element](https://servicehub.amadeus.com/c/portal/view-solution/875231/working-with-the-endorsement-fe-element)
