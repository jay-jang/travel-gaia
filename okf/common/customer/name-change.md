---
type: Process
title: Name Change
description: 'Altering the passenger name on a booking or ticket, ranging from a minor spelling correction to substituting a different traveler. Because most published airline fares and e-tickets are non-transferable, true name changes are generally prohibited while limited name corrections may be permitted under fare rules.'
tags:
  - customer
  - active
timestamp: '2026-06-15T00:00:00Z'
id: name-change
vertical: common
category: customer
conceptType: process
status: active
term_ko: 이름 변경
definition_ko: '예약이나 항공권상의 승객 이름을 변경하는 것으로, 사소한 철자 정정부터 다른 여행자로의 교체까지 포함한다. 대부분의 공시 항공 운임과 전자 항공권은 양도가 불가하므로, 진정한 의미의 이름 변경은 일반적으로 금지되며 제한적인 이름 정정만이 운임 규정에 따라 허용될 수 있다.'
longDef: 'Carriers distinguish between a name correction (fixing typos, transposed letters, or adding a middle name to match a government ID, especially for Secure Flight compliance) and a name change/transfer (replacing one passenger with another), which is usually not allowed on scheduled fares and would require cancellation and rebooking. Allowed corrections may trigger a reissue and fees, and must keep the name consistent with the traveler''s identity document. Name handling interacts with SSR data such as DOCS/Secure Flight elements and with ticket validity.'
longDef_ko: '항공사는 이름 정정(특히 Secure Flight 준수를 위해 오타·자리바뀐 철자 수정이나 정부 발급 신분증과 일치시키기 위한 중간 이름 추가)과 이름 변경/양도(한 승객을 다른 승객으로 교체)를 구분하며, 후자는 정기편 운임에서는 통상 허용되지 않고 취소 및 재예약이 필요하다. 허용된 정정은 재발행과 수수료를 유발할 수 있으며, 이름은 여행자의 신분 증명서와 일치하게 유지되어야 한다. 이름 처리는 DOCS/Secure Flight 요소 같은 SSR 데이터 및 항공권 유효성과 연계된다.'
aliases:
  - Name Correction
  - Passenger Name Change
  - Name Adjustment
relationships:
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Secure Flight
distinctions:
  - targetTerm: Reissue
    explanation: A name change is a data correction that may require ticket action; a reissue is the broader ticketing transaction (often triggered by such changes) that produces a new e-ticket.
    explanation_ko: '이름 변경은 항공권 조치가 필요할 수 있는 데이터 정정이고, 재발행(Reissue)은 이러한 변경으로 흔히 유발되어 새 전자 항공권을 생성하는 보다 포괄적인 발권 거래이다.'
  - targetTerm: Secure Flight
    explanation: 'Secure Flight requires the booked name to match the government ID, which is the common driver of permitted name corrections.'
    explanation_ko: 'Secure Flight는 예약된 이름이 정부 발급 신분증과 일치하도록 요구하며, 이것이 허용되는 이름 정정의 흔한 유발 요인이다.'
sources:
  - name: ATPCO Automated Rules (fare rule conditions)
    org: ATPCO
    version: ''
    section: ''
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="15" cy="16" r="6"/><path d="M5 38c0-6 4-10 10-10 2 0 4 .5 5.5 1.5"/><path d="M39 26l4 4-11 11-5 1 1-5z"/></svg>
---

> Altering the passenger name on a booking or ticket, ranging from a minor spelling correction to substituting a different traveler. Because most published airline fares and e-tickets are non-transferable, true name changes are generally prohibited while limited name corrections may be permitted under fare rules.

Carriers distinguish between a name correction (fixing typos, transposed letters, or adding a middle name to match a government ID, especially for Secure Flight compliance) and a name change/transfer (replacing one passenger with another), which is usually not allowed on scheduled fares and would require cancellation and rebooking. Allowed corrections may trigger a reissue and fees, and must keep the name consistent with the traveler's identity document. Name handling interacts with SSR data such as DOCS/Secure Flight elements and with ticket validity.

**한국어 / Korean** — **이름 변경** — 예약이나 항공권상의 승객 이름을 변경하는 것으로, 사소한 철자 정정부터 다른 여행자로의 교체까지 포함한다. 대부분의 공시 항공 운임과 전자 항공권은 양도가 불가하므로, 진정한 의미의 이름 변경은 일반적으로 금지되며 제한적인 이름 정정만이 운임 규정에 따라 허용될 수 있다.

항공사는 이름 정정(특히 Secure Flight 준수를 위해 오타·자리바뀐 철자 수정이나 정부 발급 신분증과 일치시키기 위한 중간 이름 추가)과 이름 변경/양도(한 승객을 다른 승객으로 교체)를 구분하며, 후자는 정기편 운임에서는 통상 허용되지 않고 취소 및 재예약이 필요하다. 허용된 정정은 재발행과 수수료를 유발할 수 있으며, 이름은 여행자의 신분 증명서와 일치하게 유지되어야 한다. 이름 처리는 DOCS/Secure Flight 요소 같은 SSR 데이터 및 항공권 유효성과 연계된다.

**Aliases:** `Name Correction`, `Passenger Name Change`, `Name Adjustment`

# Related
- [PNR](/air/air-ops/pnr.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [Secure Flight](/common/customer/secure-flight.md) — related

# Distinctions
- **Name Change** vs [Reissue](/air/air-ticket/reissue.md) — A name change is a data correction that may require ticket action; a reissue is the broader ticketing transaction (often triggered by such changes) that produces a new e-ticket.
- **Name Change** vs [Secure Flight](/common/customer/secure-flight.md) — Secure Flight requires the booked name to match the government ID, which is the common driver of permitted name corrections.

# Citations
[1] [ATPCO — ATPCO Automated Rules (fare rule conditions)](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
