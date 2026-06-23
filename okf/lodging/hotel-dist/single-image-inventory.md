---
type: Business Term
title: Single Image Inventory
description: 'Single Image Inventory is a hotel distribution architecture in which one shared pool of availability and rates is held centrally and offered to every channel simultaneously, so that a sale or update on any channel is immediately reflected across all of them. It avoids splitting rooms into per-channel allotments and keeps availability consistent everywhere.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-18T00:00:00Z'
id: single-image-inventory
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
term_ko: 단일 이미지 인벤토리(Single Image Inventory)
definition_ko: 'Single Image Inventory(단일 이미지 인벤토리)는 가용 객실과 요금을 하나의 공유 풀로 중앙에서 보유하고 이를 모든 채널에 동시에 제공하는 호텔 유통 구조다. 어느 한 채널에서 판매나 변경이 일어나면 즉시 모든 채널에 반영되며, 객실을 채널별 할당(allotment)으로 쪼개지 않고 어디서나 가용성을 일관되게 유지한다.'
longDef: 'With Single Image Inventory, a hotel manages one set of rates and availability from a single system (typically a CRS) and exposes that same pool to direct, GDS, OTA, voice, and group/meeting channels at once, rather than carving out fixed allotments per channel. Because every channel draws from and decrements the same pool in real time, the model maximizes the chance that the last available rooms can be sold through whichever channel produces the demand, and it eliminates the overbooking and idle-inventory problems that arise when allotments are siloed. The term was popularized in early-2000s GDS/CRS connectivity (for example, iHotelier offered single image inventory to individuals, corporations, travel agents, and meeting planners via the Pegasus switch). It is an architectural principle rather than a single product; a CRS or channel manager is the software that implements it.'
longDef_ko: 'Single Image Inventory에서는 호텔이 단일 시스템(일반적으로 CRS)에서 하나의 요금·가용성 집합을 관리하고, 그 동일한 풀을 직접 채널·GDS·OTA·전화(voice)·그룹/회의 채널에 동시에 노출한다. 채널별로 고정 할당을 떼어내지 않고, 모든 채널이 실시간으로 같은 풀에서 차감하며 끌어다 쓰기 때문에, 수요가 발생하는 어떤 채널을 통해서든 마지막 잔여 객실을 판매할 가능성을 극대화하고, 할당이 분리(silo)될 때 생기는 오버부킹과 유휴 인벤토리 문제를 없앤다. 이 용어는 2000년대 초 GDS/CRS 연결에서 널리 쓰였다(예: iHotelier는 Pegasus 스위치를 통해 개인·기업·여행사·회의 기획자에게 single image inventory를 제공). 이는 단일 제품이 아니라 아키텍처 원칙이며, 이를 구현하는 소프트웨어는 CRS 또는 Channel Manager다.'
aliases:
  - Single Pool Inventory
  - Shared Inventory
providerTerms:
  - provider: TravelClick
    term: Single Image Inventory
    context: 'iHotelier promoted single image inventory — managing allotment and rate plans from one system for individuals, corporations, travel agents, groups, and meeting planners — delivered seamlessly to the GDSs via the Pegasus switch.'
    context_ko: 'iHotelier는 단일 시스템에서 할당과 요금제(rate plan)를 관리해 개인·기업·여행사·그룹·회의 기획자에게 제공하는 single image inventory를 홍보했으며, Pegasus 스위치를 통해 GDS로 매끄럽게 전달했다.'
    relationship: same
relationships:
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: Free Sale
  - type: related
    targetTerm: Last Room Availability
  - type: contrasts
    targetTerm: Allotment
  - type: related
    targetTerm: ARI
distinctions:
  - targetTerm: CRS
    explanation: A CRS is the central reservation system (the software/platform); Single Image Inventory is the architectural principle—one shared availability pool fed to all channels—that a CRS implements.
    explanation_ko: 'CRS는 중앙 예약 시스템(소프트웨어/플랫폼)이고, Single Image Inventory는 하나의 공유 가용성 풀을 모든 채널에 공급하는 아키텍처 원칙으로, CRS가 이를 구현한다.'
  - targetTerm: Channel Manager
    explanation: A channel manager distributes and synchronizes inventory across channels and can also work with per-channel allotments; Single Image Inventory specifically means there is only one undivided pool that all channels share.
    explanation_ko: 'Channel Manager는 인벤토리를 여러 채널에 분배·동기화하며 채널별 할당과도 함께 작동할 수 있지만, Single Image Inventory는 모든 채널이 공유하는 분할되지 않은 단일 풀만 존재함을 구체적으로 의미한다.'
  - targetTerm: Allotment
    explanation: 'An allotment is a fixed block of rooms set aside for one channel or partner; Single Image Inventory is the opposite approach—no rooms are pre-carved, every channel competes for the same pool.'
    explanation_ko: 'Allotment는 특정 채널이나 파트너를 위해 떼어 둔 고정 객실 블록이고, Single Image Inventory는 그 반대 접근으로 어떤 객실도 미리 분할하지 않으며 모든 채널이 동일한 풀을 두고 경쟁한다.'
sources:
  - org: Hospitality Net
    name: iHotelier Provides Seamless GDS Connectivity — Offering Clients Single Image Inventory via the Pegasus Switch
    version: ''
    section: ''
    url: 'https://www.hospitalitynet.org/news/4011822.html'
    tier: secondary
  - org: SiteMinder
    name: What Is a Global Distribution System (GDS)?
    version: ''
    section: ''
    url: 'https://www.siteminder.com/r/global-distribution-system/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="6"/><path d="M24 18V6M24 30v12M18 24H6M30 24h12"/><circle cx="24" cy="6" r="2.5"/><circle cx="24" cy="42" r="2.5"/><circle cx="6" cy="24" r="2.5"/><circle cx="42" cy="24" r="2.5"/></svg>
---

> Single Image Inventory is a hotel distribution architecture in which one shared pool of availability and rates is held centrally and offered to every channel simultaneously, so that a sale or update on any channel is immediately reflected across all of them. It avoids splitting rooms into per-channel allotments and keeps availability consistent everywhere.

With Single Image Inventory, a hotel manages one set of rates and availability from a single system (typically a CRS) and exposes that same pool to direct, GDS, OTA, voice, and group/meeting channels at once, rather than carving out fixed allotments per channel. Because every channel draws from and decrements the same pool in real time, the model maximizes the chance that the last available rooms can be sold through whichever channel produces the demand, and it eliminates the overbooking and idle-inventory problems that arise when allotments are siloed. The term was popularized in early-2000s GDS/CRS connectivity (for example, iHotelier offered single image inventory to individuals, corporations, travel agents, and meeting planners via the Pegasus switch). It is an architectural principle rather than a single product; a CRS or channel manager is the software that implements it.

**한국어 / Korean** — **단일 이미지 인벤토리(Single Image Inventory)** — Single Image Inventory(단일 이미지 인벤토리)는 가용 객실과 요금을 하나의 공유 풀로 중앙에서 보유하고 이를 모든 채널에 동시에 제공하는 호텔 유통 구조다. 어느 한 채널에서 판매나 변경이 일어나면 즉시 모든 채널에 반영되며, 객실을 채널별 할당(allotment)으로 쪼개지 않고 어디서나 가용성을 일관되게 유지한다.

Single Image Inventory에서는 호텔이 단일 시스템(일반적으로 CRS)에서 하나의 요금·가용성 집합을 관리하고, 그 동일한 풀을 직접 채널·GDS·OTA·전화(voice)·그룹/회의 채널에 동시에 노출한다. 채널별로 고정 할당을 떼어내지 않고, 모든 채널이 실시간으로 같은 풀에서 차감하며 끌어다 쓰기 때문에, 수요가 발생하는 어떤 채널을 통해서든 마지막 잔여 객실을 판매할 가능성을 극대화하고, 할당이 분리(silo)될 때 생기는 오버부킹과 유휴 인벤토리 문제를 없앤다. 이 용어는 2000년대 초 GDS/CRS 연결에서 널리 쓰였다(예: iHotelier는 Pegasus 스위치를 통해 개인·기업·여행사·회의 기획자에게 single image inventory를 제공). 이는 단일 제품이 아니라 아키텍처 원칙이며, 이를 구현하는 소프트웨어는 CRS 또는 Channel Manager다.

**Aliases:** `Single Pool Inventory`, `Shared Inventory`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| TravelClick | `Single Image Inventory` | same | iHotelier promoted single image inventory — managing allotment and rate plans from one system for individuals, corporations, travel agents, groups, and meeting planners — delivered seamlessly to the GDSs via the Pegasus switch. |

# Related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [Free Sale](/lodging/hotel-dist/free-sale.md) — related
- [Last Room Availability](/lodging/hotel-dist/last-room-availability.md) — related
- [Allotment](/lodging/hotel-rate/allotment.md) — contrasts
- [ARI](/lodging/hotel-dist/ari.md) — related

# Distinctions
- **Single Image Inventory** vs [CRS](/lodging/hotel-dist/crs.md) — A CRS is the central reservation system (the software/platform); Single Image Inventory is the architectural principle—one shared availability pool fed to all channels—that a CRS implements.
- **Single Image Inventory** vs [Channel Manager](/lodging/hotel-dist/channel-manager.md) — A channel manager distributes and synchronizes inventory across channels and can also work with per-channel allotments; Single Image Inventory specifically means there is only one undivided pool that all channels share.
- **Single Image Inventory** vs [Allotment](/lodging/hotel-rate/allotment.md) — An allotment is a fixed block of rooms set aside for one channel or partner; Single Image Inventory is the opposite approach—no rooms are pre-carved, every channel competes for the same pool.

# Citations
[1] [Hospitality Net — iHotelier Provides Seamless GDS Connectivity — Offering Clients Single Image Inventory via the Pegasus Switch](https://www.hospitalitynet.org/news/4011822.html)
[2] [SiteMinder — What Is a Global Distribution System (GDS)?](https://www.siteminder.com/r/global-distribution-system/)
