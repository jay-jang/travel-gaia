---
type: Document
title: Agency Debit Memo (ADM)
description: 'An Agency Debit Memo (ADM) is an accounting notice issued by an airline to a travel agent to claim an amount owed in connection with the issuance and use of standard traffic documents — for example incorrect fares, taxes, commission, fees, or fare rule violations. ADMs are processed through the BSP (typically via BSPlink) under IATA Passenger Agency Conference rules.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: agency-debit-memo-adm
vertical: air
category: air-ticket
conceptType: document
status: active
abbreviation: ADM
term_ko: 'ADM (Agency Debit Memo, 대리점 차변 통지서)'
definition_ko: 'ADM(Agency Debit Memo)은 항공사가 여행사(대리점)에게 표준 여행 서류의 발권·사용과 관련해 받아야 할 금액(잘못된 운임·세금·커미션·수수료, 운임 규정 위반 등)을 청구하기 위해 발행하는 회계 통지서이다. ADM은 IATA 여객대리점회의(Passenger Agency Conference) 규정에 따라 BSP(일반적으로 BSPlink)를 통해 처리된다.'
longDef: 'The ADM is the recognized mechanism by which a BSP airline collects post-sale adjustments from an accredited agent for discrepancies on tickets and other accountable documents the agent issued. Common causes include underpaid fares or taxes, incorrect commission claims, fare rule or fare basis misuse, and ticketing errors. Under the IATA Passenger Agency Conference framework, an ADM must reference the document and reason, and the agent is generally given a dispute window (commonly 14–15 days in BSPlink) before the amount is debited through the BSP settlement; airlines are expected to respond to disputes within a defined period. The mirror-image credit document is the Agency Credit Memo (ACM), which an airline issues when it owes the agent.'
longDef_ko: 'ADM은 BSP 항공사가 대리점이 발행한 항공권 및 기타 정산 가능 서류상의 불일치에 대해 인가 대리점으로부터 사후 조정 금액을 징수하는 공인 수단이다. 흔한 사유로는 운임·세금 과소 징수, 잘못된 커미션 청구, 운임 규정·fare basis 오용, 발권 오류 등이 있다. IATA 여객대리점회의 체계상 ADM은 대상 서류와 사유를 명시해야 하며, BSP 정산을 통해 금액이 차감되기 전에 대리점에게 보통 BSPlink 기준 14~15일의 이의 제기 기간이 주어진다. 항공사는 정해진 기간 내에 이의에 응답해야 한다. 반대로 항공사가 대리점에 지급해야 할 때 발행하는 대칭 문서는 ACM(Agency Credit Memo, 대리점 대변 통지서)이다.'
standardBody: IATA
aliases:
  - Agency Debit Memo
  - Debit Memo
providerTerms:
  - provider: NDC/IATA
    term: ADM via BSPlink
    context: 'Airlines issue Agency Debit Memos to BSP-accredited agents through IATA''s BSPlink, which is also the channel through which agents must dispute an ADM within the dispute period.'
    context_ko: '항공사는 IATA BSPlink를 통해 BSP 인증 대리점에 ADM을 발행하며, 대리점은 이의제기 기간 내에 BSPlink를 통해 ADM에 이의를 제기해야 한다.'
    relationship: same
  - provider: Sabre
    term: ARC Memo Manager (ADM)
    context: 'For US (ARC) travel agents, airline debit memos are issued and disputed through ARC Memo Manager instead of IATA BSPlink.'
    context_ko: 미국(ARC) 여행 대리점의 경우 항공사 ADM이 IATA BSPlink 대신 ARC Memo Manager로 발행·분쟁 처리된다.
    relationship: same
relationships:
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Validating Carrier
distinctions:
  - targetTerm: Refund
    explanation: 'A refund returns value to a customer for an unused or partially used ticket; an ADM is a back-office claim from the airline against the agent for a billing discrepancy, settled through the BSP rather than to a passenger.'
    explanation_ko: 'Refund는 미사용·부분 사용 항공권에 대해 고객에게 가치를 돌려주지만, ADM은 청구 불일치에 대해 항공사가 대리점을 상대로 제기하는 후선 업무 청구로, 승객이 아니라 BSP를 통해 정산된다.'
  - targetTerm: Agency Credit Memo (ACM)
    explanation: 'An ADM debits the agent for money owed to the airline; the ACM is its mirror image, crediting the agent for money the airline owes - and is the standard way a disputed ADM is resolved.'
    explanation_ko: 'ADM은 항공사에 지급할 금액을 대리점에 차변으로 청구하고, ACM은 그 대칭으로 항공사가 지급할 금액을 대리점에 대변으로 제공하며, 이의가 인정된 ADM을 해소하는 표준 방식이다.'
sources:
  - org: IATA
    name: ADM Management & Reduction
    version: ''
    section: ''
    url: 'https://www.iata.org/whatwedo/airline-distribution/Pages/adm.aspx'
  - org: IATA
    name: Passenger Agency Conference Resolutions Manual
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-agency-conference-resolutions-manual/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="28" height="32" rx="3"/><line x1="16" y1="16" x2="32" y2="16"/><line x1="16" y1="22" x2="32" y2="22"/><circle cx="24" cy="31" r="5"/><line x1="21" y1="31" x2="27" y2="31"/></svg>
---

> An Agency Debit Memo (ADM) is an accounting notice issued by an airline to a travel agent to claim an amount owed in connection with the issuance and use of standard traffic documents — for example incorrect fares, taxes, commission, fees, or fare rule violations. ADMs are processed through the BSP (typically via BSPlink) under IATA Passenger Agency Conference rules.

The ADM is the recognized mechanism by which a BSP airline collects post-sale adjustments from an accredited agent for discrepancies on tickets and other accountable documents the agent issued. Common causes include underpaid fares or taxes, incorrect commission claims, fare rule or fare basis misuse, and ticketing errors. Under the IATA Passenger Agency Conference framework, an ADM must reference the document and reason, and the agent is generally given a dispute window (commonly 14–15 days in BSPlink) before the amount is debited through the BSP settlement; airlines are expected to respond to disputes within a defined period. The mirror-image credit document is the Agency Credit Memo (ACM), which an airline issues when it owes the agent.

**한국어 / Korean** — **ADM (Agency Debit Memo, 대리점 차변 통지서)** — ADM(Agency Debit Memo)은 항공사가 여행사(대리점)에게 표준 여행 서류의 발권·사용과 관련해 받아야 할 금액(잘못된 운임·세금·커미션·수수료, 운임 규정 위반 등)을 청구하기 위해 발행하는 회계 통지서이다. ADM은 IATA 여객대리점회의(Passenger Agency Conference) 규정에 따라 BSP(일반적으로 BSPlink)를 통해 처리된다.

ADM은 BSP 항공사가 대리점이 발행한 항공권 및 기타 정산 가능 서류상의 불일치에 대해 인가 대리점으로부터 사후 조정 금액을 징수하는 공인 수단이다. 흔한 사유로는 운임·세금 과소 징수, 잘못된 커미션 청구, 운임 규정·fare basis 오용, 발권 오류 등이 있다. IATA 여객대리점회의 체계상 ADM은 대상 서류와 사유를 명시해야 하며, BSP 정산을 통해 금액이 차감되기 전에 대리점에게 보통 BSPlink 기준 14~15일의 이의 제기 기간이 주어진다. 항공사는 정해진 기간 내에 이의에 응답해야 한다. 반대로 항공사가 대리점에 지급해야 할 때 발행하는 대칭 문서는 ACM(Agency Credit Memo, 대리점 대변 통지서)이다.

**Aliases:** `Agency Debit Memo`, `Debit Memo`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `ADM via BSPlink` | same | Airlines issue Agency Debit Memos to BSP-accredited agents through IATA's BSPlink, which is also the channel through which agents must dispute an ADM within the dispute period. |
| Sabre | `ARC Memo Manager (ADM)` | same | For US (ARC) travel agents, airline debit memos are issued and disputed through ARC Memo Manager instead of IATA BSPlink. |

# Related
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related

# Distinctions
- **Agency Debit Memo (ADM)** vs [Refund](/air/air-ticket/refund.md) — A refund returns value to a customer for an unused or partially used ticket; an ADM is a back-office claim from the airline against the agent for a billing discrepancy, settled through the BSP rather than to a passenger.
- **Agency Debit Memo (ADM)** vs [Agency Credit Memo (ACM)](/air/air-ticket/agency-credit-memo-acm.md) — An ADM debits the agent for money owed to the airline; the ACM is its mirror image, crediting the agent for money the airline owes - and is the standard way a disputed ADM is resolved.

# Citations
[1] [IATA — ADM Management & Reduction](https://www.iata.org/whatwedo/airline-distribution/Pages/adm.aspx)
[2] [IATA — Passenger Agency Conference Resolutions Manual](https://www.iata.org/en/publications/manuals/passenger-agency-conference-resolutions-manual/)
