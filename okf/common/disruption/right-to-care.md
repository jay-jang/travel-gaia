---
type: Business Term
title: Right to Care
description: 'The EU261 entitlement (Article 9) requiring airlines to provide disrupted passengers with meals, refreshments, hotel accommodation, and transport, plus communication, free of charge during a delay or cancellation. It is one of the three statutory passenger rights and applies even when extraordinary circumstances exempt the airline from monetary compensation.'
tags:
  - disruption
  - active
  - European Union
timestamp: '2026-06-17T00:00:00Z'
id: right-to-care
vertical: common
category: disruption
conceptType: business-term
status: active
term_ko: 보호·지원을 받을 권리 (Right to Care / Duty of Care)
definition_ko: '지연 또는 취소 중인 승객에게 항공사가 식사, 다과, 호텔 숙박, 교통과 통신을 무료로 제공하도록 요구하는 EU261의 권리(Article 9)다. 세 가지 법정 승객 권리 중 하나이며, extraordinary circumstances로 항공사가 금전 보상에서 면제되는 경우에도 적용된다.'
longDef: 'Under Article 9, care obligations are triggered by qualifying delays (with thresholds rising by distance band) and by cancellations, and the airline must provide them proactively without regard to fault. This is why care survives the extraordinary-circumstances defence that cancels the right to fixed compensation: if a volcanic-ash or severe-weather event grounds flights, passengers still receive hotels and meals. The same obligation is widely referred to as the airline''s duty of care, and analogous care duties appear in other regimes such as Canada''s APPR. Care is distinct from, and additional to, the right to reimbursement or re-routing and any denied boarding compensation.'
longDef_ko: 'Article 9에 따라 care 의무는 일정 기준을 충족하는 지연(거리 구간별로 기준 상승)과 취소에 의해 발동되며, 항공사는 과실 여부와 무관하게 능동적으로 이를 제공해야 한다. 이 때문에 정액 보상 권리를 소멸시키는 extraordinary-circumstances 항변에도 care는 존속한다. 화산재나 악천후로 항공편이 운항 중단되어도 승객은 여전히 호텔과 식사를 받는다. 이 의무는 흔히 항공사의 duty of care로 불리며, 캐나다 APPR 등 다른 제도에도 유사한 care 의무가 존재한다. Care는 환불·re-routing 권리 및 denied boarding compensation과 구별되며 그에 추가로 제공된다.'
standardBody: European Union
aliases:
  - Right to Care
  - Duty of Care
  - Care Entitlement
  - Article 9 Care
  - Right to Assistance
providerTerms:
  - provider: Amadeus
    term: Airline Disruption Management / Passenger Recovery (passenger care)
    context: 'Amadeus''s disruption-management suite operationalizes duty-of-care during IROPS, rebooking passengers and arranging care such as conveniently located hotels, alongside meal/voucher and refund-in-voucher options through partners.'
    context_ko: 'Amadeus의 운항차질 관리 제품군으로, IROPS 중 보호의무(duty of care)를 실무화해 승객을 재예약하고 인접 호텔 등 케어를 수배하며, 파트너를 통한 식사·바우처 및 바우처 환불 옵션을 제공한다.'
    relationship: related
relationships:
  - type: child
    targetTerm: EU Regulation 261/2004
  - type: related
    targetTerm: Extraordinary Circumstances
  - type: related
    targetTerm: Denied Boarding Compensation
  - type: related
    targetTerm: UK Regulation 261
  - type: related
    targetTerm: IROPS
distinctions:
  - targetTerm: Extraordinary Circumstances
    explanation: 'Extraordinary circumstances exempt the airline from fixed monetary compensation, but they do NOT exempt it from the right to care, which must still be provided.'
    explanation_ko: 'Extraordinary circumstances는 항공사를 정액 금전 보상에서 면제하지만, 여전히 제공해야 하는 right to care까지 면제하지는 않는다.'
  - targetTerm: Denied Boarding Compensation
    explanation: 'Care covers in-kind assistance (meals, hotels, transport) during the wait; DBC is a separate fixed cash sum for involuntary bumping, payable in addition to care.'
    explanation_ko: 'Care는 대기 중 현물 지원(식사·호텔·교통)을 다루고, DBC는 비자발적 bumping에 대한 별도의 정액 현금으로 care에 추가로 지급된다.'
  - targetTerm: Right to Re-routing
    explanation: 'The Right to Care (Article 9) covers meals, refreshments, hotel and communications during the wait; the Right to Re-routing (Article 8) covers getting the passenger to the destination or refunding the fare. Both are owed in parallel and neither substitutes for the other.'
    explanation_ko: 'Right to Care(Article 9)는 대기 중 식사·다과·호텔·통신을 다루고, Right to Re-routing(Article 8)은 승객을 목적지에 도달시키거나 항공권을 환불하는 것을 다룬다. 둘은 병행하여 부여되며 어느 하나가 다른 하나를 대체하지 않는다.'
  - targetTerm: Trip Delay
    explanation: Right to Care (EU/UK 261) is the carrier's legal duty to provide meals and accommodation during disruption; trip delay is the traveler's own insurance benefit. Insurance delay coverage is typically secondary to — and net of — what the carrier must supply.
    explanation_ko: 'Right to Care(EU/UK 261)는 운항 차질 시 운송인이 식사·숙박을 제공할 법적 의무이고, Trip Delay는 여행자 본인의 보험 보장이다. 보험의 지연 보장은 통상 운송인이 제공해야 하는 것에 대해 2차적이며 그 차액만 보상한다.'
sources:
  - name: 'Regulation (EC) No 261/2004, Article 9 — Right to care'
    org: European Union
    version: ''
    section: Article 9
    url: 'https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng'
    tier: regulation
    verifyQuote: 'Where reference is made to this Article, passengers shall be offered free of charge: (a) meals and refreshments... (b) hotel accommodation... and (c) transport between the airport and place of accommodation. (Article 9)'
    verified: true
  - name: Air passenger rights
    org: Your Europe (European Commission)
    version: ''
    section: ''
    url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 40C12 32 6 25 6 17a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 8-6 15-18 23z"/><path d="M16 22h5l2-4 3 8 2-4h4"/></svg>
---

> The EU261 entitlement (Article 9) requiring airlines to provide disrupted passengers with meals, refreshments, hotel accommodation, and transport, plus communication, free of charge during a delay or cancellation. It is one of the three statutory passenger rights and applies even when extraordinary circumstances exempt the airline from monetary compensation.

Under Article 9, care obligations are triggered by qualifying delays (with thresholds rising by distance band) and by cancellations, and the airline must provide them proactively without regard to fault. This is why care survives the extraordinary-circumstances defence that cancels the right to fixed compensation: if a volcanic-ash or severe-weather event grounds flights, passengers still receive hotels and meals. The same obligation is widely referred to as the airline's duty of care, and analogous care duties appear in other regimes such as Canada's APPR. Care is distinct from, and additional to, the right to reimbursement or re-routing and any denied boarding compensation.

**한국어 / Korean** — **보호·지원을 받을 권리 (Right to Care / Duty of Care)** — 지연 또는 취소 중인 승객에게 항공사가 식사, 다과, 호텔 숙박, 교통과 통신을 무료로 제공하도록 요구하는 EU261의 권리(Article 9)다. 세 가지 법정 승객 권리 중 하나이며, extraordinary circumstances로 항공사가 금전 보상에서 면제되는 경우에도 적용된다.

Article 9에 따라 care 의무는 일정 기준을 충족하는 지연(거리 구간별로 기준 상승)과 취소에 의해 발동되며, 항공사는 과실 여부와 무관하게 능동적으로 이를 제공해야 한다. 이 때문에 정액 보상 권리를 소멸시키는 extraordinary-circumstances 항변에도 care는 존속한다. 화산재나 악천후로 항공편이 운항 중단되어도 승객은 여전히 호텔과 식사를 받는다. 이 의무는 흔히 항공사의 duty of care로 불리며, 캐나다 APPR 등 다른 제도에도 유사한 care 의무가 존재한다. Care는 환불·re-routing 권리 및 denied boarding compensation과 구별되며 그에 추가로 제공된다.

**Aliases:** `Right to Care`, `Duty of Care`, `Care Entitlement`, `Article 9 Care`, `Right to Assistance`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Airline Disruption Management / Passenger Recovery (passenger care)` | related | Amadeus's disruption-management suite operationalizes duty-of-care during IROPS, rebooking passengers and arranging care such as conveniently located hotels, alongside meal/voucher and refund-in-voucher options through partners. |

# Related
- [EU Regulation 261/2004](/common/disruption/eu-regulation-261-2004.md) — child
- [Extraordinary Circumstances](/common/disruption/extraordinary-circumstances.md) — related
- [Denied Boarding Compensation](/common/disruption/denied-boarding-compensation.md) — related
- [UK Regulation 261](/common/disruption/uk-regulation-261.md) — related
- [IROPS](/air/air-partner/irops.md) — related

# Distinctions
- **Right to Care** vs [Extraordinary Circumstances](/common/disruption/extraordinary-circumstances.md) — Extraordinary circumstances exempt the airline from fixed monetary compensation, but they do NOT exempt it from the right to care, which must still be provided.
- **Right to Care** vs [Denied Boarding Compensation](/common/disruption/denied-boarding-compensation.md) — Care covers in-kind assistance (meals, hotels, transport) during the wait; DBC is a separate fixed cash sum for involuntary bumping, payable in addition to care.
- **Right to Care** vs [Right to Re-routing](/common/disruption/right-to-re-routing.md) — The Right to Care (Article 9) covers meals, refreshments, hotel and communications during the wait; the Right to Re-routing (Article 8) covers getting the passenger to the destination or refunding the fare. Both are owed in parallel and neither substitutes for the other.
- **Right to Care** vs [Trip Delay](/common/insurance/trip-delay.md) — Right to Care (EU/UK 261) is the carrier's legal duty to provide meals and accommodation during disruption; trip delay is the traveler's own insurance benefit. Insurance delay coverage is typically secondary to — and net of — what the carrier must supply.

# Citations
[1] [European Union — Regulation (EC) No 261/2004, Article 9 — Right to care — Article 9](https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng)
[2] [Your Europe (European Commission) — Air passenger rights](https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm)
