---
type: Standard Term
title: Full Content Agreement
description: 'A contractual obligation historically imposed by Global Distribution Systems on airlines, requiring that all fares, availability, and ancillary content commercially offered to any distribution channel be made available on equal terms through the GDS. Full content agreements were a major competitive lever in the GDS–airline relationship and a primary driver behind the IATA NDC standard, which gives airlines a technically independent way to differentiate their content outside classic GDS terms.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-08-23T00:00:00Z'
id: full-content-agreement
vertical: common
category: standards
conceptType: standard-term
status: active
term_ko: 전체 콘텐츠 협약(Full Content Agreement)
definition_ko: 'GDS가 항공사에 부과하던 계약상 의무로, 어떤 유통 채널에 상업적으로 제공하는 모든 운임·가용성·부가 콘텐츠를 GDS에도 동등한 조건으로 탑재하도록 요구한다. GDS–항공사 관계에서 핵심적인 경쟁 수단이었으며, 기존 GDS 조건을 벗어나 콘텐츠를 차별화할 수 있는 독자적인 기술 방식을 항공사에 제공하기 위해 IATA NDC 표준이 등장하게 된 주된 원인이다.'
longDef: 'Historically, GDS providers required airlines signing their distribution agreements to load their full published tariff — every ATPCO-filed fare, booking class, and availability — into the GDS with no preferential treatment for competing channels. These "full content" or "most-favoured-nation" clauses meant an airline could not offer lower fares on its own website or direct API than what it loaded in the GDS, nor could it withhold content from the GDS that it offered elsewhere. The arrangement was mutually beneficial in the CRS era (airlines gained global reach; GDSs could guarantee agencies comprehensive inventory), but became contentious as low-cost carriers chose not to sign and online direct channels grew. In the NDC era, airlines argued that full content agreements prevented them from offering personalised, ancillary-rich offers through modern APIs without simultaneously loading the same offer structure in the legacy GDS environment — an expensive and technically complex requirement. Regulatory scrutiny of GDS agreements has varied by market: the US DOT issued a rulemaking in 2011 (the "GDS Rule") that limited display-bias and contract provisions, while the EU relied on competition law to review individual agreements. Airlines negotiating post-NDC distribution agreements typically seek to limit or remove full content clauses, enabling content differentiation between the GDS and NDC-connected channels.'
longDef_ko: '역사적으로 GDS 제공업체는 유통 계약에 서명하는 항공사에 ATPCO에 등록된 모든 운임, 예약 클래스, 가용성을 타 채널보다 우선 처리 없이 GDS에 탑재하도록 요구했다. 이 "전체 콘텐츠" 또는 "최혜국 대우" 조항은 항공사가 GDS에 탑재한 운임보다 낮은 운임을 자사 웹사이트나 직접 API에 제공하거나, GDS에는 없는 콘텐츠를 다른 곳에 제공하는 것을 금지했다. 이 방식은 CRS 시대에는 상호 이익(항공사는 글로벌 도달 범위 확보, GDS는 여행사에 포괄적 재고 보장)이 있었으나, LCC들이 계약 서명을 거부하고 온라인 직접 채널이 성장하면서 논란이 되었다. NDC 시대에 항공사들은 전체 콘텐츠 협약이 레거시 GDS 환경에 동일한 오퍼 구조를 동시에 탑재하는 비용이 높고 기술적으로 복잡한 요건 없이는, 현대 API를 통해 맞춤화된 부가 서비스 중심의 오퍼를 제공하는 것을 막는다고 주장했다. GDS 협약에 대한 규제 검토는 시장마다 달랐다. 미국 DOT는 2011년 디스플레이 편향 및 계약 조항을 제한하는 규칙(GDS Rule)을 발표했고, EU는 개별 협약 검토에 경쟁법을 활용했다. NDC 이후 유통 협약을 협상하는 항공사들은 일반적으로 GDS와 NDC 연결 채널 간 콘텐츠 차별화를 가능케 하기 위해 전체 콘텐츠 조항을 제한하거나 제거하려 한다.'
aliases:
  - Full Content Clause
  - Most-Favoured-Nation Clause (GDS)
  - Content Parity Agreement
relationships:
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Fare Filing
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: GDS
    explanation: 'A GDS is the technology platform; a full content agreement is the contractual term airlines historically signed with that platform requiring them to load all commercially offered fares and content into it.'
    explanation_ko: 'GDS는 기술 플랫폼이고, 전체 콘텐츠 협약은 항공사가 역사적으로 그 플랫폼과 체결한 계약 조항으로, 상업적으로 제공하는 모든 운임·콘텐츠를 탑재하도록 요구했다.'
  - targetTerm: NDC
    explanation: 'NDC is the IATA-standard XML API that enables airlines to distribute rich, personalised content directly to agencies and OTAs; the full content agreement is the legacy contractual constraint NDC was partly designed to circumvent, giving airlines a standard way to differentiate content outside GDS obligations.'
    explanation_ko: 'NDC는 항공사가 여행사와 OTA에 풍부하고 개인화된 콘텐츠를 직접 유통할 수 있게 하는 IATA 표준 XML API이고, 전체 콘텐츠 협약은 NDC가 부분적으로 우회하기 위해 설계된 레거시 계약상 제약으로, 항공사에 GDS 의무 밖에서 콘텐츠를 차별화할 표준 방식을 제공했다.'
sources:
  - name: NDC — What is NDC and Why Does It Exist?
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/ndc/'
    tier: association
  - name: GDS Rulemaking — Final Rule on Computer Reservations System Regulations
    org: US Department of Transportation (DOT)
    version: 76 FR 23166 (2011)
    section: ''
    url: 'https://www.govinfo.gov/content/pkg/FR-2011-04-25/pdf/2011-8704.pdf'
    tier: regulation
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="14" height="18" rx="2"/><rect x="26" y="10" width="14" height="18" rx="2"/><line x1="15" y1="19" x2="33" y2="19"/><path d="M15 24l18-10M15 14l18 10"/><path d="M12 28l-4 10h32l-4-10"/></svg>
---

> A contractual obligation historically imposed by Global Distribution Systems on airlines, requiring that all fares, availability, and ancillary content commercially offered to any distribution channel be made available on equal terms through the GDS. Full content agreements were a major competitive lever in the GDS–airline relationship and a primary driver behind the IATA NDC standard.

Historically, GDS providers required airlines signing their distribution agreements to load their full published tariff — every ATPCO-filed fare, booking class, and availability — into the GDS with no preferential treatment for competing channels. These "full content" or "most-favoured-nation" clauses meant an airline could not offer lower fares on its own website or direct API than what it loaded in the GDS, nor could it withhold content from the GDS that it offered elsewhere. The arrangement was mutually beneficial in the CRS era (airlines gained global reach; GDSs could guarantee agencies comprehensive inventory), but became contentious as low-cost carriers chose not to sign and online direct channels grew. In the NDC era, airlines argued that full content agreements prevented them from offering personalised, ancillary-rich offers through modern APIs without simultaneously loading the same offer structure in the legacy GDS environment — an expensive and technically complex requirement. Regulatory scrutiny of GDS agreements has varied by market: the US DOT issued a rulemaking in 2011 that limited display-bias and contract provisions, while the EU relied on competition law to review individual agreements. Airlines negotiating post-NDC distribution agreements typically seek to limit or remove full content clauses, enabling content differentiation between the GDS and NDC-connected channels.

**한국어 / Korean** — **전체 콘텐츠 협약(Full Content Agreement)** — GDS가 항공사에 부과하던 계약상 의무로, 어떤 유통 채널에 상업적으로 제공하는 모든 운임·가용성·부가 콘텐츠를 GDS에도 동등한 조건으로 탑재하도록 요구한다. GDS–항공사 관계에서 핵심적인 경쟁 수단이었으며, IATA NDC 표준이 등장하게 된 주된 원인이다.

역사적으로 GDS 제공업체는 유통 계약에 서명하는 항공사에 ATPCO에 등록된 모든 운임, 예약 클래스, 가용성을 타 채널보다 우선 처리 없이 GDS에 탑재하도록 요구했다. 이 전체 콘텐츠 또는 최혜국 대우 조항은 항공사가 GDS에 탑재한 운임보다 낮은 운임을 자사 웹사이트나 직접 API에 제공하거나, GDS에는 없는 콘텐츠를 다른 곳에 제공하는 것을 금지했다.

**Aliases:** `Full Content Clause`, `Most-Favoured-Nation Clause (GDS)`, `Content Parity Agreement`

# Related
- [GDS](/common/standards/gds.md) — related
- [NDC](/common/standards/ndc.md) — related
- [Fare Filing](/air/air-shop/fare-filing.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **Full Content Agreement** vs [GDS](/common/standards/gds.md) — A GDS is the technology platform; a full content agreement is the contractual term airlines historically signed with that platform requiring them to load all commercially offered fares and content into it.
- **Full Content Agreement** vs [NDC](/common/standards/ndc.md) — NDC is the IATA-standard XML API that enables airlines to distribute rich, personalised content directly to agencies and OTAs; the full content agreement is the legacy contractual constraint NDC was partly designed to circumvent, giving airlines a standard way to differentiate content outside GDS obligations.

# Citations
[1] [IATA — NDC — What is NDC and Why Does It Exist?](https://www.iata.org/en/programs/airline-distribution/ndc/)
[2] [US Department of Transportation (DOT) — GDS Rulemaking — Final Rule on Computer Reservations System Regulations — 76 FR 23166 (2011)](https://www.govinfo.gov/content/pkg/FR-2011-04-25/pdf/2011-8704.pdf)
