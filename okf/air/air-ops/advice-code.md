---
type: Code
title: Advice Code
description: 'An Advice Code is the two-letter code a carrier returns in response to a reservation action request — for example KK (confirmed), KL (waitlist now confirmed), UC (unable, no space), US (unable, waitlisted), UU (have requested/waitlisted) or NO (no action taken). It is the reply side of AIRIMP messaging and is written into PNR history when it supersedes a segment''s prior status.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: advice-code
vertical: air
category: air-ops
conceptType: code
status: active
term_ko: Advice Code (advice/reply 코드 / 응답 코드)
definition_ko: 'Advice Code는 항공사가 예약 action 요청에 응답하여 반환하는 2자리 코드다 — 예: KK(확약), KL(waitlist가 확약으로 전환), UC(불가·좌석 없음), US(불가·waitlist 처리), UU(요청/waitlist됨), NO(조치 없음). AIRIMP 메시징의 ''응답'' 측이며, segment의 이전 상태를 대체할 때 PNR history에 기록된다.'
longDef: 'Advice codes close the AIRIMP action/advice loop: after the seller transmits an action code (NN, SS, LL, etc.), the carrier replies with an advice code that the seller''s system applies to the segment. Confirming replies (KK, KL) move a segment to a confirmed holding status (HK); unable replies (UC, US, NO) tell the seller the request failed or was waitlisted, and such inactive codes are pushed into PNR history rather than left as the live segment status. Agents must process advice codes before ticketing — for instance changing a UU/UC/US segment to its proper holding code or removing it — because an unactioned advice code can leave a segment in an unticketable or auto-cancellable state. Advice codes share the two-letter form and status field with action and holding codes, which is the common source of confusion the action/advice/status distinction resolves.'
longDef_ko: 'Advice code는 AIRIMP의 action/advice 루프를 닫는다: seller가 action code(NN, SS, LL 등)를 전송한 뒤, 항공사는 advice code로 회신하고 seller 시스템이 이를 segment에 적용한다. 확약 회신(KK, KL)은 segment를 확약 holding 상태(HK)로 옮기고, 불가 회신(UC, US, NO)은 요청이 실패했거나 waitlist됐음을 알리며, 이런 비활성 코드는 live segment status로 남기지 않고 PNR history로 보낸다. agent는 발권 전에 advice code를 처리해야 한다 — 예컨대 UU/UC/US segment를 올바른 holding code로 바꾸거나 제거해야 하며, 처리되지 않은 advice code는 segment를 발권 불가 또는 자동 취소 상태로 둘 수 있다. advice code는 2자리 형식과 status 필드를 action·holding 코드와 공유하므로 흔히 혼동되며, action/advice/status 구분이 이를 해소한다.'
standardBody: IATA
aliases:
  - Advice/Reply Code
  - Reply Code
  - Response Code
providerTerms:
  - provider: Travelport
    term: Air Status Codes (advice codes)
    context: 'Universal API documents advice/reply codes such as KK, KL, UC, US, UU returned by the carrier to an action request.'
    context_ko: 'Universal API는 항공사가 action 요청에 반환하는 KK, KL, UC, US, UU 같은 advice/reply 코드를 문서화한다.'
    relationship: same
relationships:
  - type: parent
    targetTerm: AIRIMP
  - type: contrasts
    targetTerm: Action Code
  - type: broader
    targetTerm: Booking Status Code
  - type: related
    targetTerm: PNR History
  - type: related
    targetTerm: Waitlist
distinctions:
  - targetTerm: Action Code
    explanation: 'An advice code is the carrier''s reply (KK, UC, US); the action code is the seller''s preceding request (NN, SS, LL). They pair up as answer-to-question across the AIRIMP exchange.'
    explanation_ko: 'advice code는 항공사의 회신(KK, UC, US)이고, action code는 그 앞에 온 seller의 요청(NN, SS, LL)이다. AIRIMP 교환에서 답-질문으로 짝을 이룬다.'
  - targetTerm: Booking Status Code
    explanation: Advice codes are transient reply codes that resolve into a holding Booking Status Code (e.g. KK becomes HK) and then drop to PNR history; the Booking Status Code is the persistent state the segment holds afterward.
    explanation_ko: 'advice code는 보유 Booking Status Code로 정리되는 일시적 회신 코드이고(예: KK는 HK로), 이후 PNR history로 떨어진다. Booking Status Code는 그 뒤 segment가 유지하는 지속 상태다.'
sources:
  - org: IATA
    name: Airline Industry Reservations Interline Message Procedures (AIRIMP)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/'
  - org: Travelport
    name: Universal API — Air Status Codes
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/uapi/Content/Air/Shared_Air_Topics/PNR_Status_Codes.htm'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="35" cy="24" r="5"/><line x1="30" y1="24" x2="14" y2="24"/><polyline points="20 18 14 24 20 30"/><path d="M10 14v20"/></svg>
---

> An Advice Code is the two-letter code a carrier returns in response to a reservation action request — for example KK (confirmed), KL (waitlist now confirmed), UC (unable, no space), US (unable, waitlisted), UU (have requested/waitlisted) or NO (no action taken). It is the reply side of AIRIMP messaging and is written into PNR history when it supersedes a segment's prior status.

Advice codes close the AIRIMP action/advice loop: after the seller transmits an action code (NN, SS, LL, etc.), the carrier replies with an advice code that the seller's system applies to the segment. Confirming replies (KK, KL) move a segment to a confirmed holding status (HK); unable replies (UC, US, NO) tell the seller the request failed or was waitlisted, and such inactive codes are pushed into PNR history rather than left as the live segment status. Agents must process advice codes before ticketing — for instance changing a UU/UC/US segment to its proper holding code or removing it — because an unactioned advice code can leave a segment in an unticketable or auto-cancellable state. Advice codes share the two-letter form and status field with action and holding codes, which is the common source of confusion the action/advice/status distinction resolves.

**한국어 / Korean** — **Advice Code (advice/reply 코드 / 응답 코드)** — Advice Code는 항공사가 예약 action 요청에 응답하여 반환하는 2자리 코드다 — 예: KK(확약), KL(waitlist가 확약으로 전환), UC(불가·좌석 없음), US(불가·waitlist 처리), UU(요청/waitlist됨), NO(조치 없음). AIRIMP 메시징의 '응답' 측이며, segment의 이전 상태를 대체할 때 PNR history에 기록된다.

Advice code는 AIRIMP의 action/advice 루프를 닫는다: seller가 action code(NN, SS, LL 등)를 전송한 뒤, 항공사는 advice code로 회신하고 seller 시스템이 이를 segment에 적용한다. 확약 회신(KK, KL)은 segment를 확약 holding 상태(HK)로 옮기고, 불가 회신(UC, US, NO)은 요청이 실패했거나 waitlist됐음을 알리며, 이런 비활성 코드는 live segment status로 남기지 않고 PNR history로 보낸다. agent는 발권 전에 advice code를 처리해야 한다 — 예컨대 UU/UC/US segment를 올바른 holding code로 바꾸거나 제거해야 하며, 처리되지 않은 advice code는 segment를 발권 불가 또는 자동 취소 상태로 둘 수 있다. advice code는 2자리 형식과 status 필드를 action·holding 코드와 공유하므로 흔히 혼동되며, action/advice/status 구분이 이를 해소한다.

**Aliases:** `Advice/Reply Code`, `Reply Code`, `Response Code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Travelport | `Air Status Codes (advice codes)` | same | Universal API documents advice/reply codes such as KK, KL, UC, US, UU returned by the carrier to an action request. |

# Related
- [AIRIMP](/air/air-ops/airimp.md) — parent
- [Action Code](/air/air-ops/action-code.md) — contrasts
- [Booking Status Code](/air/air-ops/booking-status-code.md) — broader
- [PNR History](/air/air-ops/pnr-history.md) — related
- [Waitlist](/air/air-ops/waitlist.md) — related

# Distinctions
- **Advice Code** vs [Action Code](/air/air-ops/action-code.md) — An advice code is the carrier's reply (KK, UC, US); the action code is the seller's preceding request (NN, SS, LL). They pair up as answer-to-question across the AIRIMP exchange.
- **Advice Code** vs [Booking Status Code](/air/air-ops/booking-status-code.md) — Advice codes are transient reply codes that resolve into a holding Booking Status Code (e.g. KK becomes HK) and then drop to PNR history; the Booking Status Code is the persistent state the segment holds afterward.

# Citations
[1] [IATA — Airline Industry Reservations Interline Message Procedures (AIRIMP)](https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/)
[2] [Travelport — Universal API — Air Status Codes](https://support.travelport.com/webhelp/uapi/Content/Air/Shared_Air_Topics/PNR_Status_Codes.htm)
