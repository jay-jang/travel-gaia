---
type: Business Term
title: Married Segment
description: 'Married segments are two or more connecting segments that an airline links together in availability and inventory control so they must be sold, modified, and cancelled as a single inseparable unit. The logic prevents agents from breaking the connection to access more favorable class availability that the airline would not offer for the individual local segment.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: married-segment
category: air-ops
conceptType: business-term
status: active
term_ko: 결합 구간(Married Segment)
definition_ko: 'married segment(결합 구간)는 항공사가 좌석 가용성 및 재고 통제에서 함께 연결하여, 분리할 수 없는 하나의 단위로 판매·변경·취소해야 하는 둘 이상의 연결 segment를 말한다. 이 로직은 항공사가 개별 로컬 segment에 대해서는 제공하지 않을 더 유리한 등급 가용성에 접근하기 위해 에이전트가 연결을 임의로 분리하는 것을 방지한다.'
longDef: 'Carriers use married-segment logic so that availability returned for a connection (origin-to-destination) reflects the airline''s O&D revenue-management decision rather than the standalone availability of each point-to-point leg. Attempting to cancel or split one married segment, or to book it separately at a class only offered for the through journey, is rejected by the host inventory system. This is a key mechanism enforcing O&D control and limiting ''cross-class'' or married-segment abuse.'
longDef_ko: '항공사는 연결편(출발지에서 도착지)에 반환되는 가용성이 각 지점 간 leg의 독립적인 가용성이 아니라 항공사의 O&D 수익 관리(revenue management) 결정을 반영하도록 married-segment 로직을 사용한다. 하나의 married segment를 취소하거나 분리하려는 시도, 또는 통과 여정(through journey)에 대해서만 제공되는 등급으로 별도 예약하려는 시도는 호스트 재고 시스템에 의해 거부된다. 이는 O&D 통제를 강제하고 ''cross-class'' 또는 married-segment 남용을 제한하는 핵심 메커니즘이다.'
aliases:
  - Married Segments
  - Married Segment Logic
  - Segment Marriage
relationships:
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Origin & Destination
  - type: related
    targetTerm: RBD
distinctions:
  - targetTerm: Passive Segment
    explanation: 'A married segment is a live, inventory-controlled connection sold as a unit, whereas a passive segment is an informational segment that does not draw on the operating carrier''s inventory.'
    explanation_ko: 'married segment는 하나의 단위로 판매되는, 재고 통제를 받는 실시간 연결편인 반면, passive segment는 운항 항공사의 재고를 차감하지 않는 정보성 segment다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: Amadeus Functional Documentation — Availability and Married Segment Logic
    org: Amadeus
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="24" r="9"/><circle cx="30" cy="24" r="9"/></svg>
---

> Married segments are two or more connecting segments that an airline links together in availability and inventory control so they must be sold, modified, and cancelled as a single inseparable unit. The logic prevents agents from breaking the connection to access more favorable class availability that the airline would not offer for the individual local segment.

Carriers use married-segment logic so that availability returned for a connection (origin-to-destination) reflects the airline's O&D revenue-management decision rather than the standalone availability of each point-to-point leg. Attempting to cancel or split one married segment, or to book it separately at a class only offered for the through journey, is rejected by the host inventory system. This is a key mechanism enforcing O&D control and limiting 'cross-class' or married-segment abuse.

**한국어 / Korean** — **결합 구간(Married Segment)** — married segment(결합 구간)는 항공사가 좌석 가용성 및 재고 통제에서 함께 연결하여, 분리할 수 없는 하나의 단위로 판매·변경·취소해야 하는 둘 이상의 연결 segment를 말한다. 이 로직은 항공사가 개별 로컬 segment에 대해서는 제공하지 않을 더 유리한 등급 가용성에 접근하기 위해 에이전트가 연결을 임의로 분리하는 것을 방지한다.

항공사는 연결편(출발지에서 도착지)에 반환되는 가용성이 각 지점 간 leg의 독립적인 가용성이 아니라 항공사의 O&D 수익 관리(revenue management) 결정을 반영하도록 married-segment 로직을 사용한다. 하나의 married segment를 취소하거나 분리하려는 시도, 또는 통과 여정(through journey)에 대해서만 제공되는 등급으로 별도 예약하려는 시도는 호스트 재고 시스템에 의해 거부된다. 이는 O&D 통제를 강제하고 'cross-class' 또는 married-segment 남용을 제한하는 핵심 메커니즘이다.

**Aliases:** `Married Segments`, `Married Segment Logic`, `Segment Marriage`

# Related
- [Segment](/air-ops/segment.md) — related
- [Availability](/air-shop/availability.md) — related
- [Origin & Destination](/air-shop/origin-destination.md) — related
- [RBD](/air-shop/rbd.md) — related

# Distinctions
- **Married Segment** vs [Passive Segment](/air-ops/passive-segment.md) — A married segment is a live, inventory-controlled connection sold as a unit, whereas a passive segment is an informational segment that does not draw on the operating carrier's inventory.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
[2] Amadeus — Amadeus Functional Documentation — Availability and Married Segment Logic
