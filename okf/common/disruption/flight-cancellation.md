---
type: Business Term
title: Flight Cancellation
description: 'A flight cancellation is the non-operation of a previously scheduled flight by the operating carrier. Under EU Regulation 261/2004, a cancellation triggers a passenger''s right to choose between a full refund or re-routing, plus fixed monetary compensation unless extraordinary circumstances apply. Equivalent rights arise under DOT rules in the United States, UK Regulation 261, and Canada''s APPR. For travel insurance, a carrier-initiated cancellation is a standard covered peril triggering trip interruption and trip cancellation benefits.'
tags:
  - disruption
  - active
  - ICAO
timestamp: '2026-08-22T00:00:00Z'
id: flight-cancellation
vertical: common
category: disruption
conceptType: business-term
status: active
term_ko: 항공편 취소
definition_ko: '항공편 취소는 운항 항공사에 의해 이미 예약된 항공편이 운항되지 않는 것을 말한다. EU Regulation 261/2004에 따라, 취소는 비정상적 상황이 적용되지 않는 한 전액 환불이나 재예약 중 선택권과 고정 금전 보상을 받을 수 있는 승객 권리를 발생시킨다. 미국의 DOT 규정, 영국의 UK Regulation 261, 캐나다의 APPR에서도 동등한 권리가 발생한다. 여행 보험에서 항공사 주도의 취소는 여정 중단 및 여정 취소 보험의 표준 보장 손해이다.'
longDef: 'Legally, EU261 does not define "cancellation" in precise statutory terms, but the Court of Justice of the European Union (CJEU) has clarified that a flight operating more than three hours late on arrival is treated equivalently to a cancellation for compensation purposes (Sturgeon ruling, 2009). In airline operations, a flight may be cancelled due to: (1) Extraordinary circumstances (strikes, extreme weather, security, political instability, unforeseen ATC restrictions) — these exempt the carrier from monetary compensation but not from the duties of care and re-routing; (2) Technical problems attributable to the carrier — these are the carrier''s responsibility; (3) Commercial cancellations (load factor too low, schedule consolidation) — these are the carrier''s responsibility. The DOT rules (14 CFR Part 250 and 14 CFR Part 259) require airlines to provide prompt refunds for cancelled flights regardless of cause, and IATA Resolution 735 encourages consistent passenger handling standards globally. Systems implications: IRROPS management systems, PSS hosts, and GDS systems must detect and communicate cancellations, invoke re-accommodation workflows, and generate refund or exchange entitlements for affected coupons.'
longDef_ko: '법적으로 EU261은 "취소"를 정확한 법적 용어로 정의하지 않지만, 유럽 사법재판소(CJEU)는 도착 시 3시간 이상 지연되는 항공편이 보상 목적으로 취소와 동등하게 취급된다고 명확히 했다(Sturgeon 판결, 2009). 항공 운항에서 취소는 다음으로 인해 발생할 수 있다: (1) 비정상적 상황(파업, 극심한 날씨, 보안, 정치적 불안, 예측 불가능한 ATC 제한) — 이는 항공사를 금전 보상 의무에서 면제하지만 케어 및 재예약 의무는 면제하지 않는다; (2) 항공사에 귀책되는 기술적 문제 — 이는 항공사의 책임; (3) 상업적 취소(낮은 탑승률, 일정 통합) — 이는 항공사의 책임이다. DOT 규정(14 CFR Part 250 및 259)은 항공사가 원인과 관계없이 취소 항공편에 대해 즉시 환불을 제공하도록 요구하고, IATA Resolution 735는 전 세계적으로 일관된 승객 처리 표준을 장려한다. 시스템 관점에서 IRROPS 관리 시스템, PSS 호스트, GDS 시스템은 취소를 감지·통보하고, 재수용 워크플로를 실행하며, 영향 받은 쿠폰에 대한 환불 또는 교환 권리를 생성해야 한다.'
standardBody: ICAO
aliases:
  - Cancelled Flight
  - Flight Cancel
  - Schedule Cancellation
relationships:
  - type: related
    targetTerm: EU Regulation 261/2004
  - type: related
    targetTerm: Irregular Operations (IRROPS)
  - type: related
    targetTerm: Extraordinary Circumstances
  - type: related
    targetTerm: Right to Care
  - type: related
    targetTerm: Right to Re-routing
  - type: related
    targetTerm: Automatic Refund Rule
  - type: related
    targetTerm: Denied Boarding Compensation
  - type: related
    targetTerm: Force Majeure
distinctions:
  - targetTerm: Irregular Operations (IRROPS)
    explanation: 'IRROPS is the airline-operations umbrella term covering all disruptions — cancellations, significant delays, diversions, and equipment swaps; a flight cancellation is the specific event where a flight does not operate at all, and is the most severe individual type of IRROPS disruption.'
    explanation_ko: 'IRROPS는 취소, 장시간 지연, 회항, 기재 교체 등 모든 운항 중단을 포괄하는 항공사 운항 관련 상위 개념이고, 항공편 취소는 항공편이 아예 운항되지 않는 구체적인 사건으로, IRROPS 중 가장 심각한 개별 유형이다.'
  - targetTerm: Denied Boarding Compensation
    explanation: 'Denied Boarding Compensation arises when the carrier oversells a flight and cannot transport all holders of confirmed reservations; a flight cancellation is when the flight does not operate at all — both trigger passenger rights under EU261, but denied boarding requires the flight to depart while cancellation means it does not.'
    explanation_ko: '탑승 거부 보상(Denied Boarding Compensation)은 항공사가 초과 판매하여 확인된 예약자 전원을 탑승시킬 수 없을 때 발생하고, 항공편 취소는 항공편이 아예 운항되지 않을 때 발생한다. 두 경우 모두 EU261에 따른 승객 권리를 발생시키지만, 탑승 거부는 항공편이 출발하는 반면 취소는 출발하지 않는다는 차이가 있다.'
  - targetTerm: Extraordinary Circumstances
    explanation: 'Extraordinary Circumstances is the EU261 defence that exempts a carrier from paying monetary compensation; the flight cancellation is the triggering event — the carrier still owes care and re-routing/refund even if extraordinary circumstances apply, but monetary compensation is waived.'
    explanation_ko: '비정상적 상황(Extraordinary Circumstances)은 항공사가 금전 보상을 지급하지 않아도 되는 EU261 면책 사유이고, 항공편 취소는 그 트리거 사건이다. 비정상적 상황이 적용되더라도 항공사는 케어 및 재예약/환불 의무를 여전히 지며, 금전 보상만 면제된다.'
  - targetTerm: Right to Re-routing
    explanation: 'The Right to Re-routing is one of the passenger entitlements that a flight cancellation triggers under EU261: the carrier must offer re-routing to the final destination under comparable transport conditions at the earliest opportunity or at a later date of the passenger''s choice.'
    explanation_ko: '재예약 권리(Right to Re-routing)는 EU261에서 항공편 취소가 발생시키는 승객 권리 중 하나로, 항공사는 가능한 가장 빠른 기회에, 또는 승객이 선택한 이후 날짜에 비교할 만한 운송 조건으로 최종 목적지까지 재예약을 제공해야 한다.'
sources:
  - name: 'Regulation (EC) No 261/2004 — Air Passenger Rights'
    org: European Union
    version: '2004'
    section: 'Articles 5, 7, 8, 9'
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0261'
    tier: regulation
  - name: 'DOT — Refunds for Cancelled and Significantly Changed Flights (14 CFR Part 259)'
    org: US Department of Transportation
    version: ''
    section: ''
    url: 'https://www.transportation.gov/airconsumer/flight-delays-cancellations'
    tier: regulator-guidance
  - name: 'ICAO — Guidance on Air Passenger Rights: Practices Observed in Member States'
    org: ICAO
    version: ''
    section: ''
    url: 'https://www.icao.int/sustainability/Documents/AirPassengerRights/ICAO_Air_Passenger_Rights_Guidance.pdf'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 24c3-8 14-14 22-10l-3 3 6 2 2-6-3 3C26 10 14 14 8 24z"/><circle cx="36" cy="36" r="8"/><line x1="31" y1="31" x2="41" y2="41"/><line x1="41" y1="31" x2="31" y2="41"/></svg>
---

> A flight cancellation is the non-operation of a previously scheduled flight by the operating carrier. Under EU Regulation 261/2004, a cancellation triggers a passenger's right to choose between a full refund or re-routing, plus fixed monetary compensation unless extraordinary circumstances apply. Equivalent rights arise under DOT rules in the United States, UK Regulation 261, and Canada's APPR. For travel insurance, a carrier-initiated cancellation is a standard covered peril triggering trip interruption and trip cancellation benefits.

Legally, EU261 does not define "cancellation" in precise statutory terms, but the Court of Justice of the European Union (CJEU) has clarified that a flight operating more than three hours late on arrival is treated equivalently to a cancellation for compensation purposes (Sturgeon ruling, 2009). In airline operations, a flight may be cancelled due to: (1) Extraordinary circumstances (strikes, extreme weather, security, political instability, unforeseen ATC restrictions) — these exempt the carrier from monetary compensation but not from the duties of care and re-routing; (2) Technical problems attributable to the carrier — these are the carrier's responsibility; (3) Commercial cancellations (load factor too low, schedule consolidation) — these are the carrier's responsibility. The DOT rules (14 CFR Part 250 and 14 CFR Part 259) require airlines to provide prompt refunds for cancelled flights regardless of cause, and IATA Resolution 735 encourages consistent passenger handling standards globally. Systems implications: IRROPS management systems, PSS hosts, and GDS systems must detect and communicate cancellations, invoke re-accommodation workflows, and generate refund or exchange entitlements for affected coupons.

**한국어 / Korean** — **항공편 취소** — 항공편 취소는 운항 항공사에 의해 이미 예약된 항공편이 운항되지 않는 것을 말한다. EU Regulation 261/2004에 따라, 취소는 비정상적 상황이 적용되지 않는 한 전액 환불이나 재예약 중 선택권과 고정 금전 보상을 받을 수 있는 승객 권리를 발생시킨다. 미국의 DOT 규정, 영국의 UK Regulation 261, 캐나다의 APPR에서도 동등한 권리가 발생한다.

법적으로 EU261은 "취소"를 정확한 법적 용어로 정의하지 않지만, 유럽 사법재판소(CJEU)는 도착 시 3시간 이상 지연되는 항공편이 보상 목적으로 취소와 동등하게 취급된다고 명확히 했다(Sturgeon 판결, 2009). 항공 운항에서 취소는 (1) 비정상적 상황(파업, 극심한 날씨, 보안, 정치적 불안), (2) 항공사 귀책 기술적 문제, (3) 상업적 취소(낮은 탑승률, 일정 통합) 등으로 인해 발생할 수 있다. DOT 규정은 원인과 관계없이 취소 항공편에 대해 즉시 환불을 제공하도록 요구하고, IATA Resolution 735는 일관된 승객 처리 표준을 장려한다.

**Aliases:** `Cancelled Flight`, `Flight Cancel`, `Schedule Cancellation`

# Related
- [EU Regulation 261/2004](/common/disruption/eu-regulation-261-2004.md) — related
- [Irregular Operations (IRROPS)](/common/disruption/irregular-operations-irrops.md) — related
- [Extraordinary Circumstances](/common/disruption/extraordinary-circumstances.md) — related
- [Right to Care](/common/disruption/right-to-care.md) — related
- [Right to Re-routing](/common/disruption/right-to-re-routing.md) — related
- [Automatic Refund Rule](/common/disruption/automatic-refund-rule.md) — related
- [Denied Boarding Compensation](/common/disruption/denied-boarding-compensation.md) — related
- [Force Majeure](/common/disruption/force-majeure.md) — related

# Distinctions
- **Flight Cancellation** vs [Irregular Operations (IRROPS)](/common/disruption/irregular-operations-irrops.md) — IRROPS is the airline-operations umbrella term covering all disruptions — cancellations, significant delays, diversions, and equipment swaps; a flight cancellation is the specific event where a flight does not operate at all, and is the most severe individual type of IRROPS disruption.
- **Flight Cancellation** vs [Denied Boarding Compensation](/common/disruption/denied-boarding-compensation.md) — Denied Boarding Compensation arises when the carrier oversells a flight and cannot transport all holders of confirmed reservations; a flight cancellation is when the flight does not operate at all — both trigger passenger rights under EU261, but denied boarding requires the flight to depart while cancellation means it does not.
- **Flight Cancellation** vs [Extraordinary Circumstances](/common/disruption/extraordinary-circumstances.md) — Extraordinary Circumstances is the EU261 defence that exempts a carrier from paying monetary compensation; the flight cancellation is the triggering event — the carrier still owes care and re-routing/refund even if extraordinary circumstances apply, but monetary compensation is waived.
- **Flight Cancellation** vs [Right to Re-routing](/common/disruption/right-to-re-routing.md) — The Right to Re-routing is one of the passenger entitlements that a flight cancellation triggers under EU261: the carrier must offer re-routing to the final destination under comparable transport conditions at the earliest opportunity or at a later date of the passenger's choice.

# Citations
[1] [European Union — Regulation (EC) No 261/2004 — Air Passenger Rights — Articles 5, 7, 8, 9](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0261)
[2] [US Department of Transportation — DOT — Refunds for Cancelled and Significantly Changed Flights (14 CFR Part 259)](https://www.transportation.gov/airconsumer/flight-delays-cancellations)
[3] [ICAO — ICAO — Guidance on Air Passenger Rights: Practices Observed in Member States](https://www.icao.int/sustainability/Documents/AirPassengerRights/ICAO_Air_Passenger_Rights_Guidance.pdf)
