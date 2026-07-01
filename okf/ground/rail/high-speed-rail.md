---
type: Business Term
title: High-Speed Rail
description: 'Rail passenger services operating at sustained speeds of 250 km/h or above on purpose-built dedicated infrastructure, or at 200 km/h or above on upgraded conventional lines, as defined by EU Directive 96/48/EC and UIC technical specifications. High-speed rail networks in Europe, Japan, and China have reshaped intercity travel markets and compete directly with short-haul aviation on city-pair routes of up to approximately 500–700 km.'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-07-01T00:00:00Z'
id: high-speed-rail
vertical: ground
category: rail
conceptType: business-term
status: active
abbreviation: HSR
term_ko: 고속철도(HSR)
definition_ko: '유럽연합 지침 96/48/EC 및 UIC 기술 규격에 따라, 고속 전용 신선(新線)에서 250 km/h 이상의 지속 속도로 운행하거나 개량된 기존 노선에서 200 km/h 이상의 속도로 운행하는 철도 여객 서비스. 유럽·일본·중국의 고속철도망은 도시 간 여행 시장을 재편하고, 약 500~700 km 이내 구간에서는 단거리 항공편과 직접 경쟁한다.'
longDef: 'EU Directive 96/48/EC on the interoperability of the trans-European high-speed rail system defined the operational thresholds (≥250 km/h for new infrastructure, ≥200 km/h for upgraded lines) that became the global reference for classifying HSR services. UIC Leaflet 776-1 and the subsequent Technical Specifications for Interoperability (TSIs) codify the rolling-stock, infrastructure, energy, control-command, and operations requirements for cross-border high-speed services in Europe. From a distribution standpoint, HSR is transforming rail ticketing: major operators — SNCF (TGV/Ouigo), Deutsche Bahn (ICE), Renfe (AVE), FS Trenitalia (Frecciarossa), Network Rail/Eurostar — distribute through OSDM-aligned APIs and GDS connections (Amadeus Rail, Sabre Rail), with seat reservation compulsory on most HSR services. In markets such as France-Spain and Japan, HSR accounts for the majority of intercity trips under 600 km, with modal shift from air documented by regulators and IATA.'
longDef_ko: '범유럽 고속철도 상호운용성에 관한 EU 지침 96/48/EC는 신선 ≥250 km/h, 개량선 ≥200 km/h 등 작동 기준을 정의하여 전 세계적인 HSR 분류 기준이 되었다. UIC 전단 776-1 및 후속 상호운용성 기술 사양(TSI)은 유럽 국경 간 고속 서비스에 대한 차량, 인프라, 에너지, 신호 제어, 운영 요건을 규정한다. 유통 측면에서 HSR은 철도 발권을 혁신하고 있다. SNCF(TGV/Ouigo), Deutsche Bahn(ICE), Renfe(AVE), FS Trenitalia(Frecciarossa), Eurostar 등 주요 운영사는 OSDM 정렬 API와 GDS 연결(Amadeus Rail, Sabre Rail)을 통해 유통하며, 대부분의 HSR 서비스에서 좌석 예약이 의무적이다. 프랑스-스페인, 일본 등 시장에서 HSR은 600 km 미만 도시 간 여행의 대부분을 차지하며, 규제 당국과 IATA가 항공에서 철도로의 수단 전환(modal shift)을 문서화하고 있다.'
standardBody: UIC
aliases:
  - HSR
  - High Speed Rail
  - High-Speed Service
  - Haute Vitesse
providerTerms:
  - provider: SNCF (France)
    term: TGV / Ouigo
    context: 'SNCF operates TGV (Train à Grande Vitesse) as its full-service HSR product and Ouigo as its low-cost HSR brand, both running on the French LGV (Ligne à Grande Vitesse) network at up to 320 km/h.'
    context_ko: 'SNCF는 TGV(Train à Grande Vitesse)를 풀서비스 HSR로, Ouigo를 저가 HSR 브랜드로 운영하며, 두 서비스 모두 프랑스 LGV(고속전용선) 네트워크에서 최대 320 km/h로 운행한다.'
    relationship: same
  - provider: Deutsche Bahn (Germany)
    term: ICE (Intercity-Express)
    context: 'DB''s ICE (Intercity-Express) fleet operates at up to 300 km/h on the German Schnellfahrstrecke network and into neighbouring countries, distributed through DB''s own channels and OSDM-compatible APIs.'
    context_ko: 'DB의 ICE(Intercity-Express)는 독일 고속전용선(Schnellfahrstrecke) 네트워크와 인근 국가에서 최대 300 km/h로 운행하며, DB 자체 채널과 OSDM 호환 API를 통해 유통된다.'
    relationship: same
  - provider: JR (Japan)
    term: Shinkansen (新幹線)
    context: 'Japan''s Shinkansen ("bullet train") network operates at up to 320 km/h (Nozomi/Hayabusa) and is the world''s original HSR system, launched in 1964. It distributes internationally through Rail Pass schemes (Japan Rail Pass) and GDS connections.'
    context_ko: '일본의 신칸센(新幹線, "탄환열차") 네트워크는 최대 320 km/h(노조미/하야부사)로 운행하며, 1964년 개통된 세계 최초의 HSR 시스템이다. 국제적으로는 Rail Pass 스킴(Japan Rail Pass)과 GDS 연결을 통해 유통된다.'
    relationship: same
relationships:
  - type: related
    targetTerm: OSDM
  - type: related
    targetTerm: TAP TSI
  - type: related
    targetTerm: Multimodal Transport
  - type: related
    targetTerm: Seat Reservation
  - type: related
    targetTerm: Interrail Pass
distinctions:
  - targetTerm: Multimodal Transport
    explanation: 'Multimodal transport refers to journey chains combining two or more modes (e.g., air + rail, bus + rail); high-speed rail is a specific category of rail service that may be one mode within a multimodal journey, but the two terms operate at different levels of abstraction.'
    explanation_ko: 'Multimodal Transport는 두 가지 이상 교통수단(예: 항공+철도, 버스+철도)을 결합한 여정 체인을 가리키고, 고속철도는 복합운송 여정 내에서 하나의 수단이 될 수 있는 특정 철도 서비스 범주이다. 두 개념은 추상화 수준이 다르다.'
  - targetTerm: OSDM
    explanation: 'OSDM (Open Sales and Distribution Model) is the UIC-backed API standard for rail offer, booking, and fulfillment across all rail types; high-speed rail is a service category of rail that is distributed using OSDM alongside conventional and regional services.'
    explanation_ko: 'OSDM은 모든 철도 유형에 걸쳐 오퍼·예약·발권을 처리하는 UIC 후원의 API 표준이고, 고속철도는 일반·지역 서비스와 함께 OSDM을 통해 유통되는 철도 서비스 범주이다.'
sources:
  - name: 'Council Directive 96/48/EC on the interoperability of the trans-European high-speed rail system'
    org: European Union
    version: '1996'
    section: 'Annex I — Definition of the trans-European high-speed rail system'
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31996L0048'
    tier: regulation
  - name: 'UIC Leaflet 776-1 — Loads to consider in railway bridge design'
    org: UIC (International Union of Railways)
    version: ''
    section: ''
    url: 'https://uic.org/'
    tier: association
  - name: 'High-Speed Rail — Global Market Overview'
    org: IATA (International Air Transport Association)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/iata-repository/publications/economic-reports/high-speed-rail/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="18" width="34" height="16" rx="4"/><path d="M34 18 Q44 26 44 26"/><circle cx="12" cy="36" r="3"/><circle cx="28" cy="36" r="3"/><line x1="4" y1="26" x2="38" y2="26"/><path d="M8 18l4-5h16l4 5"/><line x1="12" y1="39" x2="12" y2="43"/><line x1="28" y1="39" x2="28" y2="43"/><line x1="8" y1="43" x2="36" y2="43"/></svg>
---

> Rail passenger services operating at sustained speeds of 250 km/h or above on purpose-built dedicated infrastructure, or at 200 km/h or above on upgraded conventional lines, as defined by EU Directive 96/48/EC and UIC technical specifications. High-speed rail networks in Europe, Japan, and China have reshaped intercity travel markets and compete directly with short-haul aviation on city-pair routes of up to approximately 500–700 km.

EU Directive 96/48/EC on the interoperability of the trans-European high-speed rail system defined the operational thresholds (≥250 km/h for new infrastructure, ≥200 km/h for upgraded lines) that became the global reference for classifying HSR services. UIC Leaflet 776-1 and the subsequent Technical Specifications for Interoperability (TSIs) codify the rolling-stock, infrastructure, energy, control-command, and operations requirements for cross-border high-speed services in Europe. From a distribution standpoint, HSR is transforming rail ticketing: major operators — SNCF (TGV/Ouigo), Deutsche Bahn (ICE), Renfe (AVE), FS Trenitalia (Frecciarossa), Eurostar — distribute through OSDM-aligned APIs and GDS connections (Amadeus Rail, Sabre Rail), with seat reservation compulsory on most HSR services. In markets such as France-Spain and Japan, HSR accounts for the majority of intercity trips under 600 km, with modal shift from air documented by regulators and IATA.

**한국어 / Korean** — **고속철도(HSR)** — 유럽연합 지침 96/48/EC 및 UIC 기술 규격에 따라, 고속 전용 신선(新線)에서 250 km/h 이상의 지속 속도로 운행하거나 개량된 기존 노선에서 200 km/h 이상의 속도로 운행하는 철도 여객 서비스. 유럽·일본·중국의 고속철도망은 도시 간 여행 시장을 재편하고, 약 500~700 km 이내 구간에서는 단거리 항공편과 직접 경쟁한다.

범유럽 고속철도 상호운용성에 관한 EU 지침 96/48/EC는 신선 ≥250 km/h, 개량선 ≥200 km/h 등 작동 기준을 정의하여 전 세계적인 HSR 분류 기준이 되었다. UIC 전단 776-1 및 후속 상호운용성 기술 사양(TSI)은 유럽 국경 간 고속 서비스에 대한 차량, 인프라, 에너지, 신호 제어, 운영 요건을 규정한다. 유통 측면에서 HSR은 철도 발권을 혁신하고 있다. SNCF(TGV/Ouigo), Deutsche Bahn(ICE), Renfe(AVE), FS Trenitalia(Frecciarossa), Eurostar 등 주요 운영사는 OSDM 정렬 API와 GDS 연결(Amadeus Rail, Sabre Rail)을 통해 유통하며, 대부분의 HSR 서비스에서 좌석 예약이 의무적이다. 프랑스-스페인, 일본 등 시장에서 HSR은 600 km 미만 도시 간 여행의 대부분을 차지하며, 규제 당국과 IATA가 항공에서 철도로의 수단 전환(modal shift)을 문서화하고 있다.

**Aliases:** `HSR`, `High Speed Rail`, `High-Speed Service`, `Haute Vitesse`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| SNCF (France) | `TGV / Ouigo` | same | SNCF operates TGV (Train à Grande Vitesse) as its full-service HSR product and Ouigo as its low-cost HSR brand, both running on the French LGV network at up to 320 km/h. |
| Deutsche Bahn (Germany) | `ICE (Intercity-Express)` | same | DB's ICE fleet operates at up to 300 km/h on the German Schnellfahrstrecke network and into neighbouring countries, distributed through OSDM-compatible APIs. |
| JR (Japan) | `Shinkansen (新幹線)` | same | Japan's Shinkansen ("bullet train") network operates at up to 320 km/h and is the world's original HSR system, launched in 1964. Distributed internationally through the Japan Rail Pass and GDS. |

# Related
- [OSDM](/ground/rail/osdm.md) — related
- [TAP TSI](/ground/rail/tap-tsi.md) — related
- [Multimodal Transport](/ground/rail/multimodal-transport.md) — related
- [Seat Reservation](/ground/rail/seat-reservation.md) — related
- [Interrail Pass](/ground/rail/interrail-pass.md) — related

# Distinctions
- **High-Speed Rail** vs [Multimodal Transport](/ground/rail/multimodal-transport.md) — Multimodal transport refers to journey chains combining two or more modes (e.g., air + rail, bus + rail); high-speed rail is a specific category of rail service that may be one mode within a multimodal journey, but the two terms operate at different levels of abstraction.
- **High-Speed Rail** vs [OSDM](/ground/rail/osdm.md) — OSDM (Open Sales and Distribution Model) is the UIC-backed API standard for rail offer, booking, and fulfillment across all rail types; high-speed rail is a service category of rail that is distributed using OSDM alongside conventional and regional services.

# Citations
[1] [European Union — Council Directive 96/48/EC on the interoperability of the trans-European high-speed rail system](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31996L0048)
[2] [UIC (International Union of Railways) — UIC Leaflet 776-1](https://uic.org/)
[3] [IATA (International Air Transport Association) — High-Speed Rail — Global Market Overview](https://www.iata.org/en/iata-repository/publications/economic-reports/high-speed-rail/)
