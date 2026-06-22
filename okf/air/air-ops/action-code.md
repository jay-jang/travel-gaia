---
type: Code
title: Action Code
description: 'An Action Code is the two-letter code a reservation system sends to a carrier to request action on a segment — for example NN (need/sell), SS (sell, segment confirmed at sell), DK (direct sell), HN (have requested), or LL (waitlist). It governs how a segment is requested in AIRIMP/GDS messaging, as distinct from the holding status the carrier later returns.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: action-code
vertical: air
category: air-ops
conceptType: code
status: active
term_ko: Action Code (action/request 코드 / 요청 코드)
definition_ko: 'Action Code는 예약 시스템이 항공사에 segment에 대한 조치를 요청하기 위해 보내는 2자리 코드다 — 예: NN(need/판매 요청), SS(sell, 판매 시 확약), DK(direct sell), HN(have requested), LL(waitlist). AIRIMP/GDS 메시징에서 segment를 어떻게 요청하는지를 좌우하며, 항공사가 이후 반환하는 보유 상태(holding status)와는 구분된다.'
longDef: 'Action codes are the outbound, request side of the AIRIMP action/advice/status convention. The seller composes a segment with an action code expressing intent — NN to need/request space, SS to sell from a confirmed availability (often free-sale), DK for direct sell, HN to indicate space has been requested, LL to waitlist, and cancellation actions such as XX/XL. The carrier processes the request and returns an advice code (e.g. KK, UC, US), after which the segment settles into a holding booking status code (e.g. HK, HL). Because action, advice and holding codes are all two-letter and sit in the same status field, they are often conflated; in practice the action code is what the seller transmits, the advice code is what the carrier replies, and the holding code is what persists in the PNR.'
longDef_ko: 'Action code는 AIRIMP의 action/advice/status 관례에서 나가는 ''요청'' 측이다. seller는 의도를 담은 action code로 segment를 구성한다 — NN(space need/요청), SS(확약된 availability에서 판매, 흔히 free-sale), DK(direct sell), HN(space 요청됨 표시), LL(waitlist), 그리고 XX/XL 같은 취소 action. 항공사는 요청을 처리해 advice code(예: KK, UC, US)를 반환하고, 그 뒤 segment는 보유 booking status code(예: HK, HL)로 정착한다. action·advice·holding 코드가 모두 2자리이고 같은 status 필드에 들어가므로 자주 혼동되지만, 실무에서 action code는 seller가 전송하는 것, advice code는 항공사가 회신하는 것, holding code는 PNR에 남는 것이다.'
standardBody: IATA
aliases:
  - Action/Request Code
  - Request Code
  - Action Status Code
providerTerms:
  - provider: Travelport
    term: Air Status Codes (action codes)
    context: 'Universal API documents action/request codes such as NN, SS, DK, HN, LL sent to request space.'
    context_ko: 'Universal API는 space 요청에 보내는 NN, SS, DK, HN, LL 같은 action/request 코드를 문서화한다.'
    relationship: same
relationships:
  - type: parent
    targetTerm: AIRIMP
  - type: contrasts
    targetTerm: Advice Code
  - type: broader
    targetTerm: Booking Status Code
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Waitlist
distinctions:
  - targetTerm: Advice Code
    explanation: 'An action code is what the seller sends to request space (NN, SS, LL); an advice code is what the carrier returns in reply (KK, UC, US). Action is the question, advice is the answer.'
    explanation_ko: 'action code는 seller가 space를 요청하려고 보내는 것(NN, SS, LL)이고, advice code는 항공사가 회신으로 반환하는 것(KK, UC, US)이다. action은 질문, advice는 답이다.'
  - targetTerm: Booking Status Code
    explanation: 'A Booking Status Code is often used as the umbrella term for the two-letter codes; the action code is specifically the request-side subset and the holding code (HK, HL) is what remains in the PNR after the action/advice exchange completes.'
    explanation_ko: 'Booking Status Code는 2자리 코드 전체를 가리키는 상위 용어로 자주 쓰이며, action code는 그중 요청 측 하위집합이고, holding code(HK, HL)는 action/advice 교환이 끝난 뒤 PNR에 남는 것이다.'
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
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="24" r="5"/><line x1="18" y1="24" x2="34" y2="24"/><polyline points="28 18 34 24 28 30"/><path d="M38 14v20"/></svg>
---

> An Action Code is the two-letter code a reservation system sends to a carrier to request action on a segment — for example NN (need/sell), SS (sell, segment confirmed at sell), DK (direct sell), HN (have requested), or LL (waitlist). It governs how a segment is requested in AIRIMP/GDS messaging, as distinct from the holding status the carrier later returns.

Action codes are the outbound, request side of the AIRIMP action/advice/status convention. The seller composes a segment with an action code expressing intent — NN to need/request space, SS to sell from a confirmed availability (often free-sale), DK for direct sell, HN to indicate space has been requested, LL to waitlist, and cancellation actions such as XX/XL. The carrier processes the request and returns an advice code (e.g. KK, UC, US), after which the segment settles into a holding booking status code (e.g. HK, HL). Because action, advice and holding codes are all two-letter and sit in the same status field, they are often conflated; in practice the action code is what the seller transmits, the advice code is what the carrier replies, and the holding code is what persists in the PNR.

**한국어 / Korean** — **Action Code (action/request 코드 / 요청 코드)** — Action Code는 예약 시스템이 항공사에 segment에 대한 조치를 요청하기 위해 보내는 2자리 코드다 — 예: NN(need/판매 요청), SS(sell, 판매 시 확약), DK(direct sell), HN(have requested), LL(waitlist). AIRIMP/GDS 메시징에서 segment를 어떻게 요청하는지를 좌우하며, 항공사가 이후 반환하는 보유 상태(holding status)와는 구분된다.

Action code는 AIRIMP의 action/advice/status 관례에서 나가는 '요청' 측이다. seller는 의도를 담은 action code로 segment를 구성한다 — NN(space need/요청), SS(확약된 availability에서 판매, 흔히 free-sale), DK(direct sell), HN(space 요청됨 표시), LL(waitlist), 그리고 XX/XL 같은 취소 action. 항공사는 요청을 처리해 advice code(예: KK, UC, US)를 반환하고, 그 뒤 segment는 보유 booking status code(예: HK, HL)로 정착한다. action·advice·holding 코드가 모두 2자리이고 같은 status 필드에 들어가므로 자주 혼동되지만, 실무에서 action code는 seller가 전송하는 것, advice code는 항공사가 회신하는 것, holding code는 PNR에 남는 것이다.

**Aliases:** `Action/Request Code`, `Request Code`, `Action Status Code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Travelport | `Air Status Codes (action codes)` | same | Universal API documents action/request codes such as NN, SS, DK, HN, LL sent to request space. |

# Related
- [AIRIMP](/air/air-ops/airimp.md) — parent
- [Advice Code](/air/air-ops/advice-code.md) — contrasts
- [Booking Status Code](/air/air-ops/booking-status-code.md) — broader
- [Segment](/air/air-ops/segment.md) — related
- [Waitlist](/air/air-ops/waitlist.md) — related

# Distinctions
- **Action Code** vs [Advice Code](/air/air-ops/advice-code.md) — An action code is what the seller sends to request space (NN, SS, LL); an advice code is what the carrier returns in reply (KK, UC, US). Action is the question, advice is the answer.
- **Action Code** vs [Booking Status Code](/air/air-ops/booking-status-code.md) — A Booking Status Code is often used as the umbrella term for the two-letter codes; the action code is specifically the request-side subset and the holding code (HK, HL) is what remains in the PNR after the action/advice exchange completes.

# Citations
[1] [IATA — Airline Industry Reservations Interline Message Procedures (AIRIMP)](https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/)
[2] [Travelport — Universal API — Air Status Codes](https://support.travelport.com/webhelp/uapi/Content/Air/Shared_Air_Topics/PNR_Status_Codes.htm)
