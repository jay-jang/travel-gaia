---
type: Business Term
title: Codeshare
description: A commercial arrangement in which an airline (the marketing carrier) sells seats under its own airline designator and flight number on a flight that is physically operated by a different airline (the operating carrier). A single physical flight can therefore be sold under multiple flight numbers belonging to different carriers.
tags:
  - air-partner
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: codeshare
vertical: air
category: air-partner
conceptType: business-term
status: active
term_ko: 공동운항
definition_ko: 한 항공사(판매 항공사)가 실제로는 다른 항공사(운항 항공사)가 운항하는 항공편에 대해 자사의 항공사 지정자 코드와 편명으로 좌석을 판매하는 상업적 협정. 따라서 하나의 실제 항공편이 서로 다른 항공사에 속한 여러 편명으로 판매될 수 있다.
longDef: 'Codeshare agreements let an airline extend its network and offer connectivity beyond the routes it operates itself, while presenting a seamless single-carrier appearance to the customer. Common models include free-flow/free-sale (the marketing carrier sells from the operating carrier''s inventory in real time), block-space (the marketing carrier purchases a fixed block of seats), and capacity-purchase arrangements. Regulators commonly require disclosure to the passenger of the actual operating carrier at the time of sale.'
longDef_ko: '공동운항 협정을 통해 항공사는 자사가 직접 운항하지 않는 노선까지 네트워크를 확장하고 연결편을 제공하면서도, 고객에게는 단일 항공사를 이용하는 듯한 매끄러운 경험을 제공할 수 있다. 대표적인 형태로는 free-flow/free-sale(판매 항공사가 운항 항공사의 좌석 재고에서 실시간으로 판매), block-space(판매 항공사가 고정된 좌석 블록을 매입), capacity-purchase 협정 등이 있다. 규제 당국은 일반적으로 판매 시점에 실제 운항 항공사를 승객에게 고지하도록 요구한다.'
standardBody: IATA
aliases:
  - Code Share
  - Code-share Agreement
  - Codeshare Flight
providerTerms:
  - provider: IATA
    term: Codeshare data element (SSIM DEI 50)
    context: 'In the IATA Standard Schedules Information Manual, codeshare status on a flight is signaled by the presence of DEI 50, with the operating carrier carried in related data elements, and distributed to GDSs and partners.'
    context_ko: 'IATA 표준 스케줄 정보 매뉴얼(SSIM)에서 항공편의 공동운항 여부는 DEI 50의 존재로 표시되며, 운항 항공사는 관련 데이터 요소에 담겨 GDS·파트너에 배포된다.'
    relationship: same
  - provider: NDC/IATA
    term: OperatingCarrier / MarketingCarrier
    context: 'In NDC AirShopping/Offer-Order messages each flight segment carries both a MarketingCarrier.AirlineID (the selling carrier''s code) and an OperatingCarrier.AirlineID, making the codeshare relationship explicit for disclosure.'
    context_ko: 'NDC의 AirShopping/Offer-Order 메시지에서 각 항공 구간은 MarketingCarrier.AirlineID(판매 항공사 코드)와 OperatingCarrier.AirlineID를 함께 담아, 고지를 위해 공동운항 관계를 명시적으로 나타낸다.'
    relationship: same
  - provider: Amadeus
    term: 'Code-share availability indicator ("*" wet-lease, ":" leased block)'
    context: Amadeus cryptic availability marks code-share flights with indicators—an asterisk for wet-lease code-share (only the marketing carrier sells) and a colon for leased-block code-share—next to the availability line.
    context_ko: '아마데우스 크립틱 가용성은 공동운항 항공편을 가용성 라인 옆 기호로 표시한다 — 별표(*)는 웻 리스 공동운항(판매 항공사만 판매), 콜론(:)은 리스드 블록 공동운항을 나타낸다.'
    relationship: related
relationships:
  - type: parent
    targetTerm: Marketing Carrier
  - type: parent
    targetTerm: Operating Carrier
  - type: contrasts
    targetTerm: Interline
  - type: related
    targetTerm: Airline Designator
  - type: related
    targetTerm: Validating Carrier
distinctions:
  - targetTerm: Interline
    explanation: Codeshare puts the marketing carrier's own code on another carrier's flight; interline is acceptance of another carrier's ticket without the marketing carrier's code on the flight.
    explanation_ko: '공동운항은 판매 항공사의 코드를 다른 항공사의 항공편에 부여하는 것이고, 인터라인은 해당 항공편에 판매 항공사의 코드를 붙이지 않은 채 다른 항공사의 항공권을 인수하는 것이다.'
  - targetTerm: Operating Carrier
    explanation: 'Codeshare is the agreement/arrangement, while the operating carrier is the airline actually flying the aircraft.'
    explanation_ko: '공동운항은 협정 또는 협약을 가리키는 반면, 운항 항공사는 실제로 항공기를 운항하는 항공사를 가리킨다.'
  - targetTerm: Airline Alliance
    explanation: Codeshare is a specific flight-level arrangement placing one carrier's code on another's flight; an alliance is the overarching partnership framework that typically encompasses many codeshares among members.
    explanation_ko: '공동운항은 한 항공사의 코드를 다른 항공사의 항공편에 부여하는 항공편 단위의 구체적 협정이고, 동맹은 회원 간 다수의 공동운항을 포괄하는 상위의 협력 체계다.'
  - targetTerm: Block Space Agreement
    explanation: Block space is one model of codeshare in which seats are pre-purchased as a fixed block; the broader codeshare concept also includes free-flow/free-sale selling from the operating carrier's live inventory.
    explanation_ko: '블록 스페이스는 좌석을 고정 블록으로 사전 매입하는 공동운항의 한 모델이며, 더 넓은 공동운항 개념에는 운항 항공사의 실시간 재고에서 판매하는 free-flow/free-sale 방식도 포함된다.'
  - targetTerm: Capacity Purchase Agreement
    explanation: A codeshare places one carrier's code on another's independently operated and sold flight; under a CPA the regional has effectively no independent commercial existence on the route—the mainline controls everything and bears the revenue risk.
    explanation_ko: '공동운항은 한 항공사의 코드를 다른 항공사가 독립적으로 운항·판매하는 항공편에 부여하는 것이고, CPA에서는 지선이 해당 노선에서 사실상 독립적인 상업적 존재가 없으며 메인라인이 모든 것을 통제하고 수익 위험을 부담한다.'
  - targetTerm: Free-Flow Codeshare
    explanation: 'Codeshare is the umbrella concept of one carrier marketing another''s flight under its own code; free-flow is one of its commercial sub-types, defined by selling against real-time availability rather than a purchased seat block.'
    explanation_ko: '공동운항은 한 항공사가 다른 항공사의 항공편을 자사 코드로 판매하는 상위 개념이고, 프리플로는 구매한 좌석 블록이 아닌 실시간 가용성에 기반해 판매한다는 점으로 정의되는 그 상업적 하위 유형 중 하나다.'
  - targetTerm: Interline Electronic Ticket (IET)
    explanation: Codeshare is a commercial arrangement to sell another carrier's flight under one's own code; an IET is the ticketing/document layer that may carry segments across carriers regardless of whether they are codeshare.
    explanation_ko: 'Codeshare는 자사 코드로 타사 항공편을 판매하는 상업적 약정이고, IET은 코드셰어 여부와 무관하게 여러 항공사 구간을 담을 수 있는 발권/서류 계층이다.'
  - targetTerm: Joint Venture
    explanation: A codeshare shares flight codes and may settle per-flight; a JV shares the commercial outcome (revenue or profit) of a whole market regardless of which carrier flies the passenger.
    explanation_ko: '공동운항은 편명을 공유하고 항공편 단위로 정산될 수 있는 반면, JV는 어느 항공사가 승객을 운송하든 무관하게 시장 전체의 상업적 결과(수익 또는 이익)를 공유한다.'
  - targetTerm: Metal Neutrality
    explanation: A codeshare can still leave each carrier favoring its own flights for its own revenue; metal neutrality removes that incentive entirely by pooling the economic result across partners.
    explanation_ko: '공동운항에서는 각 항공사가 자사 수익을 위해 여전히 자사 항공편을 우대할 수 있지만, metal neutrality는 파트너 전반에 걸쳐 경제적 결과를 통합하여 그 유인을 완전히 제거한다.'
  - targetTerm: Standard Schedules Message
    explanation: SSM is the messaging that distributes schedules (and can convey codeshare/operating-carrier data per SSIM); a codeshare is the commercial arrangement whose marketing and operating flight data those messages communicate.
    explanation_ko: 'SSM은 스케줄을 배포하는 메시징(SSIM에 따라 공동운항/운항 항공사 데이터를 전달할 수 있음)이고, 공동운항은 그 메시지가 전달하는 판매·운항 항공편 데이터의 기반이 되는 상업적 협정이다.'
  - targetTerm: Wet Lease
    explanation: 'In a wet lease one airline''s aircraft and crew physically operate the flight under the lessee''s flight number, with the lessor holding the AOC; a codeshare shares flight codes between two carriers that each operate under their own AOC.'
    explanation_ko: '웻 리스에서는 한 항공사의 항공기와 승무원이 임차인의 편명으로 실제 운항하며 AOC는 임대인이 보유하고, 공동운항은 각자 자사 AOC 하에 운항하는 두 항공사 간에 편명을 공유한다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
    tier: association
  - name: DOT rules on disclosure of code-share arrangements
    org: U.S. Department of Transportation
    version: ''
    section: ''
    url: 'https://www.transportation.gov/airconsumer/codeshare-disclosure'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18l8-2 4-6 3 1-2 7 7-1 3-3 2 1-1 5"/><path d="M42 30l-8 2-4 6-3-1 2-7-7 1-3 3-2-1 1-5"/><line x1="24" y1="22" x2="24" y2="26"/></svg>
---

> A commercial arrangement in which an airline (the marketing carrier) sells seats under its own airline designator and flight number on a flight that is physically operated by a different airline (the operating carrier). A single physical flight can therefore be sold under multiple flight numbers belonging to different carriers.

Codeshare agreements let an airline extend its network and offer connectivity beyond the routes it operates itself, while presenting a seamless single-carrier appearance to the customer. Common models include free-flow/free-sale (the marketing carrier sells from the operating carrier's inventory in real time), block-space (the marketing carrier purchases a fixed block of seats), and capacity-purchase arrangements. Regulators commonly require disclosure to the passenger of the actual operating carrier at the time of sale.

**한국어 / Korean** — **공동운항** — 한 항공사(판매 항공사)가 실제로는 다른 항공사(운항 항공사)가 운항하는 항공편에 대해 자사의 항공사 지정자 코드와 편명으로 좌석을 판매하는 상업적 협정. 따라서 하나의 실제 항공편이 서로 다른 항공사에 속한 여러 편명으로 판매될 수 있다.

공동운항 협정을 통해 항공사는 자사가 직접 운항하지 않는 노선까지 네트워크를 확장하고 연결편을 제공하면서도, 고객에게는 단일 항공사를 이용하는 듯한 매끄러운 경험을 제공할 수 있다. 대표적인 형태로는 free-flow/free-sale(판매 항공사가 운항 항공사의 좌석 재고에서 실시간으로 판매), block-space(판매 항공사가 고정된 좌석 블록을 매입), capacity-purchase 협정 등이 있다. 규제 당국은 일반적으로 판매 시점에 실제 운항 항공사를 승객에게 고지하도록 요구한다.

**Aliases:** `Code Share`, `Code-share Agreement`, `Codeshare Flight`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `Codeshare data element (SSIM DEI 50)` | same | In the IATA Standard Schedules Information Manual, codeshare status on a flight is signaled by the presence of DEI 50, with the operating carrier carried in related data elements, and distributed to GDSs and partners. |
| NDC/IATA | `OperatingCarrier / MarketingCarrier` | same | In NDC AirShopping/Offer-Order messages each flight segment carries both a MarketingCarrier.AirlineID (the selling carrier's code) and an OperatingCarrier.AirlineID, making the codeshare relationship explicit for disclosure. |
| Amadeus | `Code-share availability indicator ("*" wet-lease, ":" leased block)` | related | Amadeus cryptic availability marks code-share flights with indicators—an asterisk for wet-lease code-share (only the marketing carrier sells) and a colon for leased-block code-share—next to the availability line. |

# Related
- [Marketing Carrier](/air/air-partner/marketing-carrier.md) — parent
- [Operating Carrier](/air/air-partner/operating-carrier.md) — parent
- [Interline](/air/air-partner/interline.md) — contrasts
- [Airline Designator](/common/codes/airline-designator.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related

# Distinctions
- **Codeshare** vs [Interline](/air/air-partner/interline.md) — Codeshare puts the marketing carrier's own code on another carrier's flight; interline is acceptance of another carrier's ticket without the marketing carrier's code on the flight.
- **Codeshare** vs [Operating Carrier](/air/air-partner/operating-carrier.md) — Codeshare is the agreement/arrangement, while the operating carrier is the airline actually flying the aircraft.
- **Codeshare** vs [Airline Alliance](/air/air-partner/airline-alliance.md) — Codeshare is a specific flight-level arrangement placing one carrier's code on another's flight; an alliance is the overarching partnership framework that typically encompasses many codeshares among members.
- **Codeshare** vs [Block Space Agreement](/air/air-partner/block-space-agreement.md) — Block space is one model of codeshare in which seats are pre-purchased as a fixed block; the broader codeshare concept also includes free-flow/free-sale selling from the operating carrier's live inventory.
- **Codeshare** vs [Capacity Purchase Agreement](/air/air-partner/capacity-purchase-agreement.md) — A codeshare places one carrier's code on another's independently operated and sold flight; under a CPA the regional has effectively no independent commercial existence on the route—the mainline controls everything and bears the revenue risk.
- **Codeshare** vs [Free-Flow Codeshare](/air/air-partner/free-flow-codeshare.md) — Codeshare is the umbrella concept of one carrier marketing another's flight under its own code; free-flow is one of its commercial sub-types, defined by selling against real-time availability rather than a purchased seat block.
- **Codeshare** vs [Interline Electronic Ticket (IET)](/air/air-ticket/interline-electronic-ticket-iet.md) — Codeshare is a commercial arrangement to sell another carrier's flight under one's own code; an IET is the ticketing/document layer that may carry segments across carriers regardless of whether they are codeshare.
- **Codeshare** vs [Joint Venture](/air/air-partner/joint-venture.md) — A codeshare shares flight codes and may settle per-flight; a JV shares the commercial outcome (revenue or profit) of a whole market regardless of which carrier flies the passenger.
- **Codeshare** vs [Metal Neutrality](/air/air-partner/metal-neutrality.md) — A codeshare can still leave each carrier favoring its own flights for its own revenue; metal neutrality removes that incentive entirely by pooling the economic result across partners.
- **Codeshare** vs [Standard Schedules Message](/air/air-partner/standard-schedules-message.md) — SSM is the messaging that distributes schedules (and can convey codeshare/operating-carrier data per SSIM); a codeshare is the commercial arrangement whose marketing and operating flight data those messages communicate.
- **Codeshare** vs [Wet Lease](/air/air-partner/wet-lease.md) — In a wet lease one airline's aircraft and crew physically operate the flight under the lessee's flight number, with the lessor holding the AOC; a codeshare shares flight codes between two carriers that each operate under their own AOC.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM)](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
[2] [U.S. Department of Transportation — DOT rules on disclosure of code-share arrangements](https://www.transportation.gov/airconsumer/codeshare-disclosure)
