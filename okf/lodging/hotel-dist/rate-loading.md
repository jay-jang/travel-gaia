---
type: Process
title: Rate Loading
description: 'Rate loading is the operational process of entering, configuring, and publishing a hotel''s contracted or published rates — including rate codes, rate plans, room-type pricing, restrictions, and promotional offers — into distribution systems such as the CRS, PMS, GDS, and OTA extranets. Accurate and timely rate loading is a prerequisite for the correct rates and availability to appear across all booking channels; errors in rate loading are a primary cause of rate disparity and revenue leakage.'
tags:
  - hotel-dist
  - active
timestamp: '2026-10-02T00:00:00Z'
id: rate-loading
vertical: lodging
category: hotel-dist
conceptType: process
status: active
term_ko: 요금 로딩(Rate Loading)
definition_ko: '요금 로딩(Rate Loading)은 호텔의 계약 요금 또는 공개 요금을 CRS, PMS, GDS, OTA 익스트라넷 등 유통 시스템에 입력·설정·게시하는 운영 프로세스다. 요금 코드, 요금 플랜, 객실 유형별 가격, 제한 조건, 프로모션 등이 포함된다. 정확하고 시의적절한 요금 로딩은 모든 예약 채널에 올바른 요금과 가용성이 나타나기 위한 전제 조건이며, 요금 로딩 오류는 요금 불일치(rate disparity)와 수익 유출(revenue leakage)의 주요 원인이다.'
longDef: 'Rate loading typically covers: (1) Base rates — entering room-type pricing into the PMS/CRS against rate plans (e.g., BAR, corporate, wholesale, package); (2) GDS loading — submitting rate codes and restrictions to the GDS via the hotel switch or CRS connection, often following GDS-specific formats; (3) OTA extranet configuration — setting up rates, photos, room descriptions and policies on OTA portals (Booking.com, Expedia, etc.); (4) Restriction loading — applying minimum-length-of-stay, closed-to-arrival, and stop-sell rules; (5) Rate auditing — verifying that loaded rates display correctly across channels. Hotels employ dedicated rate loaders or distribution coordinators for this task; large hotel chains maintain centralized rate-loading teams. HEDNA (Hotel Electronic Distribution Network Association) has published best-practice guidelines for rate loading efficiency and accuracy. Common errors include: incorrect currency, wrong date ranges, missing room types, and parity violations.'
longDef_ko: '요금 로딩은 일반적으로 다음을 포함한다: (1) 기본 요금 — PMS/CRS에 요금 플랜(예: BAR, 기업, 도매, 패키지)에 따른 객실 유형별 가격 입력; (2) GDS 로딩 — 호텔 스위치 또는 CRS 연결을 통해 GDS 특정 형식으로 요금 코드와 제한 조건 제출; (3) OTA 익스트라넷 설정 — OTA 포털(Booking.com, Expedia 등)에서 요금, 사진, 객실 설명, 정책 설정; (4) 제한 조건 로딩 — 최소 연박 수, 도착 마감, 판매 중지 규칙 적용; (5) 요금 감사 — 로딩된 요금이 채널별로 올바르게 표시되는지 검증. 호텔은 이 작업을 위해 전담 요금 로더 또는 유통 코디네이터를 고용하며, 대형 호텔 체인은 중앙 집중식 요금 로딩 팀을 운영한다. HEDNA는 요금 로딩 효율성과 정확성을 위한 모범 사례 지침을 발표했다. 일반적인 오류로는 잘못된 통화, 잘못된 날짜 범위, 누락된 객실 유형, 요금 동일성 위반이 있다.'
aliases:
  - Rate Entry
  - Rate Configuration
relationships:
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: Rate Code
  - type: related
    targetTerm: Channel Management
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Rate Parity
  - type: related
    targetTerm: Rate Leakage
distinctions:
  - targetTerm: Channel Management
    explanation: 'Channel management is the ongoing strategic and operational activity of managing rates, availability, and restrictions across distribution channels in real time; rate loading is a specific configuration task — the initial (or updated) entry of rates and rules into those systems before they become live.'
    explanation_ko: '채널 관리(Channel Management)는 유통 채널 전반에서 요금, 가용성, 제한 조건을 실시간으로 전략적·운영적으로 관리하는 지속적 활동이고, 요금 로딩은 그 시스템들에 요금과 규칙을 처음(또는 업데이트하여) 입력하는 특정 설정 작업이다.'
  - targetTerm: ARI
    explanation: 'ARI (Availability, Rates and Inventory) is the hotel-switch message standard used to transmit rate and availability updates from the CRS to distribution channels; rate loading is the human or automated process of creating and maintaining the source data that generates those ARI messages.'
    explanation_ko: 'ARI는 CRS에서 유통 채널로 요금과 가용성 업데이트를 전송하는 데 사용되는 호텔 스위치 메시지 표준이고, 요금 로딩은 그 ARI 메시지를 생성하는 원본 데이터를 생성·관리하는 사람 또는 자동화 프로세스이다.'
sources:
  - name: Rate Loading Instructions — Hotel Distribution Best Practices
    org: HEDNA (Hotel Electronic Distribution Network Association)
    version: ''
    section: ''
    url: 'https://www.hedna.org'
    tier: association
  - name: How Online Hotel Distribution Works
    org: Lodging Magazine
    version: ''
    section: ''
    url: 'https://lodgingmagazine.com/how-online-hotel-distribution-works/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="8" rx="2"/><rect x="8" y="22" width="32" height="8" rx="2"/><rect x="8" y="34" width="32" height="8" rx="2"/><circle cx="37" cy="14" r="2" fill="currentColor" stroke="none"/><path d="M20 26l4 4 8-8"/></svg>
---

> Rate loading is the operational process of entering, configuring, and publishing a hotel's contracted or published rates — including rate codes, rate plans, room-type pricing, restrictions, and promotional offers — into distribution systems such as the CRS, PMS, GDS, and OTA extranets. Accurate and timely rate loading is a prerequisite for the correct rates and availability to appear across all booking channels; errors in rate loading are a primary cause of rate disparity and revenue leakage.

Rate loading typically covers: (1) Base rates — entering room-type pricing into the PMS/CRS against rate plans (e.g., BAR, corporate, wholesale, package); (2) GDS loading — submitting rate codes and restrictions to the GDS via the hotel switch or CRS connection; (3) OTA extranet configuration — setting up rates, photos, room descriptions and policies on OTA portals; (4) Restriction loading — applying minimum-length-of-stay, closed-to-arrival, and stop-sell rules; (5) Rate auditing — verifying that loaded rates display correctly across channels. Hotels employ dedicated rate loaders or distribution coordinators for this task; large hotel chains maintain centralized rate-loading teams. HEDNA has published best-practice guidelines for rate loading efficiency and accuracy. Common errors include incorrect currency, wrong date ranges, missing room types, and parity violations.

**한국어 / Korean** — **요금 로딩(Rate Loading)** — 요금 로딩은 호텔의 계약 요금 또는 공개 요금을 CRS, PMS, GDS, OTA 익스트라넷 등 유통 시스템에 입력·설정·게시하는 운영 프로세스다. 정확하고 시의적절한 요금 로딩은 모든 예약 채널에 올바른 요금과 가용성이 나타나기 위한 전제 조건이며, 요금 로딩 오류는 요금 불일치와 수익 유출의 주요 원인이다.

**Aliases:** `Rate Entry`, `Rate Configuration`

# Related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [Rate Code](/lodging/hotel-rate/rate-code.md) — related
- [Channel Management](/lodging/hotel-dist/channel-management.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Rate Parity](/lodging/hotel-rate/rate-parity.md) — related
- [Rate Leakage](/lodging/hotel-rate/rate-leakage.md) — related

# Distinctions
- **Rate Loading** vs [Channel Management](/lodging/hotel-dist/channel-management.md) — Channel management is the ongoing strategic and operational activity of managing rates, availability, and restrictions across distribution channels in real time; rate loading is a specific configuration task — the initial (or updated) entry of rates and rules into those systems before they become live.
- **Rate Loading** vs [ARI](/lodging/hotel-dist/ari.md) — ARI (Availability, Rates and Inventory) is the hotel-switch message standard used to transmit rate and availability updates from the CRS to distribution channels; rate loading is the human or automated process of creating and maintaining the source data that generates those ARI messages.

# Citations
[1] [HEDNA — Hotel Electronic Distribution Network Association](https://www.hedna.org)
[2] [Lodging Magazine — How Online Hotel Distribution Works](https://lodgingmagazine.com/how-online-hotel-distribution-works/)
