---
type: Document
title: Agency Credit Memo (ACM)
description: 'An Agency Credit Memo (ACM) is the accounting notice an airline issues to credit a travel agent - for example to return over-collected fares, taxes, or commission, to process a passenger refund, or to resolve a successfully disputed Agency Debit Memo (ADM). It is processed through the BSP/ARC settlement systems as the mirror image of the ADM.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: agency-credit-memo-acm
vertical: air
category: air-ticket
conceptType: document
status: active
abbreviation: ACM
term_ko: 'ACM (Agency Credit Memo, 대리점 대변 통지서)'
definition_ko: 'ACM(Agency Credit Memo)은 항공사가 여행사(대리점)에게 대변(크레딧)을 제공하기 위해 발행하는 회계 통지서로, 과다 징수된 운임·세금·커미션 반환, 승객 환불 처리, 또는 이의가 인정된 ADM(Agency Debit Memo)의 해소 등에 사용된다. ADM의 대칭 문서로서 BSP/ARC 정산 시스템을 통해 처리된다.'
longDef: 'Whereas an ADM debits an agent for amounts owed to the airline, an ACM credits the agent for amounts the airline owes - commonly when commission was under-claimed, a fare or tax was over-collected, or a refund must be passed back to the agent for the passenger. ACMs are issued and settled through the BSP (via BSPlink) or ARC alongside ADMs under the IATA Passenger Agency Conference framework. A common use is the resolution path for a disputed ADM: when an agent successfully disputes an ADM, the airline cancels or offsets it by issuing an ACM.'
longDef_ko: 'ADM이 항공사에 지급해야 할 금액에 대해 대리점에 차변을 거는 것이라면, ACM은 항공사가 대리점에 지급해야 할 금액에 대해 대변을 제공한다. 커미션 과소 청구, 운임·세금 과다 징수, 또는 승객을 위한 환불을 대리점에 되돌려야 하는 경우가 흔하다. ACM은 IATA 여객대리점회의 체계 하에서 ADM과 함께 BSP(BSPlink 경유) 또는 ARC를 통해 발행·정산된다. 흔한 용도는 이의가 제기된 ADM의 해소 경로로, 대리점이 ADM 이의를 성공적으로 제기하면 항공사가 ACM을 발행하여 이를 취소하거나 상계한다.'
standardBody: IATA
aliases:
  - Agency Credit Memo
  - Credit Memo
relationships:
  - type: related
    targetTerm: Agency Debit Memo (ADM)
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: Remittance
distinctions:
  - targetTerm: Agency Debit Memo (ADM)
    explanation: 'An ADM debits the agent for money owed to the airline; the ACM is its mirror image, crediting the agent for money the airline owes - and is the standard way a disputed ADM is resolved.'
    explanation_ko: 'ADM은 항공사에 지급할 금액을 대리점에 차변으로 청구하고, ACM은 그 대칭으로 항공사가 지급할 금액을 대리점에 대변으로 제공하며, 이의가 인정된 ADM을 해소하는 표준 방식이다.'
  - targetTerm: Refund
    explanation: 'A refund returns value for an unused ticket; an ACM is the back-office BSP/ARC credit document between airline and agent, which may be the vehicle for passing a refund or correction back to the agent.'
    explanation_ko: 'Refund는 미사용 항공권의 가치를 돌려주는 것이고, ACM은 항공사와 대리점 사이의 후선 업무 BSP/ARC 대변 문서로, 환불이나 정정을 대리점에 전달하는 수단이 될 수 있다.'
sources:
  - org: ANA
    name: Agency Debit Memo (ADM) / Agency Credit Memo (ACM) Policy
    version: ''
    section: ''
    url: 'https://www.ana.co.jp/businesspartners/en/admacm-policy/'
  - org: IATA
    name: Passenger Agency Conference Resolutions Manual
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="28" height="32" rx="3"/><line x1="16" y1="16" x2="32" y2="16"/><line x1="16" y1="22" x2="32" y2="22"/><circle cx="24" cy="31" r="5"/><line x1="24" y1="28" x2="24" y2="34"/><line x1="21" y1="31" x2="27" y2="31"/></svg>
---

> An Agency Credit Memo (ACM) is the accounting notice an airline issues to credit a travel agent - for example to return over-collected fares, taxes, or commission, to process a passenger refund, or to resolve a successfully disputed Agency Debit Memo (ADM). It is processed through the BSP/ARC settlement systems as the mirror image of the ADM.

Whereas an ADM debits an agent for amounts owed to the airline, an ACM credits the agent for amounts the airline owes - commonly when commission was under-claimed, a fare or tax was over-collected, or a refund must be passed back to the agent for the passenger. ACMs are issued and settled through the BSP (via BSPlink) or ARC alongside ADMs under the IATA Passenger Agency Conference framework. A common use is the resolution path for a disputed ADM: when an agent successfully disputes an ADM, the airline cancels or offsets it by issuing an ACM.

**한국어 / Korean** — **ACM (Agency Credit Memo, 대리점 대변 통지서)** — ACM(Agency Credit Memo)은 항공사가 여행사(대리점)에게 대변(크레딧)을 제공하기 위해 발행하는 회계 통지서로, 과다 징수된 운임·세금·커미션 반환, 승객 환불 처리, 또는 이의가 인정된 ADM(Agency Debit Memo)의 해소 등에 사용된다. ADM의 대칭 문서로서 BSP/ARC 정산 시스템을 통해 처리된다.

ADM이 항공사에 지급해야 할 금액에 대해 대리점에 차변을 거는 것이라면, ACM은 항공사가 대리점에 지급해야 할 금액에 대해 대변을 제공한다. 커미션 과소 청구, 운임·세금 과다 징수, 또는 승객을 위한 환불을 대리점에 되돌려야 하는 경우가 흔하다. ACM은 IATA 여객대리점회의 체계 하에서 ADM과 함께 BSP(BSPlink 경유) 또는 ARC를 통해 발행·정산된다. 흔한 용도는 이의가 제기된 ADM의 해소 경로로, 대리점이 ADM 이의를 성공적으로 제기하면 항공사가 ACM을 발행하여 이를 취소하거나 상계한다.

**Aliases:** `Agency Credit Memo`, `Credit Memo`

# Related
- [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — related
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [Remittance](/common/pay/remittance.md) — related

# Distinctions
- **Agency Credit Memo (ACM)** vs [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — An ADM debits the agent for money owed to the airline; the ACM is its mirror image, crediting the agent for money the airline owes - and is the standard way a disputed ADM is resolved.
- **Agency Credit Memo (ACM)** vs [Refund](/air/air-ticket/refund.md) — A refund returns value for an unused ticket; an ACM is the back-office BSP/ARC credit document between airline and agent, which may be the vehicle for passing a refund or correction back to the agent.

# Citations
[1] [ANA — Agency Debit Memo (ADM) / Agency Credit Memo (ACM) Policy](https://www.ana.co.jp/businesspartners/en/admacm-policy/)
[2] IATA — Passenger Agency Conference Resolutions Manual
