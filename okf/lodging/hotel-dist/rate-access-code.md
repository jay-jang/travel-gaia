---
type: Code
title: Rate Access Code (RAC)
description: 'A Rate Access Code (RAC) is the short GDS code (commonly 3 characters; some programs use 3-5 characters, and Galileo/Apollo can use up to six) that an authorized agency must enter to view and book a hotel''s negotiated or confidential rate. It is the access-control key for negotiated GDS distribution: the rate is hidden from the public display and revealed only when the correct code (also known as a multi-level rate code or negotiated rate code) is supplied. Negotiated rates are typically secured to an authorized agency by its pseudo-city code (PCC) so only that agency can view and book them.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: rate-access-code
vertical: lodging
category: hotel-dist
conceptType: code
status: active
abbreviation: RAC
term_ko: '요금 액세스 코드 (Rate Access Code, RAC)'
definition_ko: '요금 액세스 코드(RAC)는 권한 있는 여행사가 호텔의 협상(negotiated) 또는 비공개(confidential) 요금을 조회·예약하기 위해 입력해야 하는 짧은 GDS 코드(보통 3자, 일부 프로그램은 3~5자, Galileo/Apollo는 최대 6자)다. 협상 GDS 유통의 접근 통제 키로, 해당 요금은 공개 화면에서 숨겨져 있다가 올바른 코드(멀티레벨 요금 코드 또는 협상 요금 코드라고도 함)가 제공될 때만 노출된다. 협상 요금은 보통 여행사의 pseudo-city code(PCC)에 묶여(secured) 권한 있는 해당 여행사만 조회·예약할 수 있다.'
longDef: 'Negotiated hotel rates — corporate, consortia, or other confidential rates — are loaded into the GDS with rules that restrict who may see and sell them. The RAC (also called a multi-level rate code or negotiated rate code) is the credential a travel agent keys in to unlock a specific negotiated rate; without it, the rate does not appear in the standard availability display. The RAC is usually 3 characters (some programs use 3-5; Galileo/Apollo support up to six), and negotiated rates are secured to an authorized agency by its pseudo-city code (PCC) so only that agency can book the confidential price. The RAC is distinct from the rate plan or rate code that names/structures the product: it is specifically the access key that controls visibility. RACs are loaded alongside negotiated-rate attributes such as LRA/NLRA in the GDS rate-loading map.'
longDef_ko: '협상 호텔 요금(기업·컨소시아 또는 기타 비공개 요금)은 누가 보고 판매할 수 있는지를 제한하는 규칙과 함께 GDS에 로딩된다. RAC(멀티레벨 요금 코드 또는 협상 요금 코드라고도 함)는 여행사 직원이 특정 협상 요금을 해제하기 위해 입력하는 자격 증명으로, 이것이 없으면 해당 요금은 표준 가용성 화면에 나타나지 않는다. RAC는 보통 3자(일부 프로그램은 3~5자, Galileo/Apollo는 최대 6자)이며, 협상 요금은 여행사의 pseudo-city code(PCC)에 묶여(secured) 권한 있는 해당 여행사만 비공개 가격을 예약할 수 있다. RAC는 상품을 명명/구조화하는 rate plan이나 rate code와 구별되며, 가시성을 통제하는 접근 키 그 자체다. RAC는 GDS 요금 로딩 맵에서 LRA/NLRA 같은 협상 요금 속성과 함께 로딩되는 경우가 많다.'
aliases:
  - RAC
  - Rate Access Code
  - Negotiated Rate Code
  - Hotel Rate Code (GDS access)
relationships:
  - type: related
    targetTerm: Corporate Rate
  - type: related
    targetTerm: Rate Code
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: Pseudo City Code
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Last Room Availability
distinctions:
  - targetTerm: Rate Code
    explanation: A rate code names/identifies a rate plan within a system; a Rate Access Code is specifically the credential that gates visibility of a confidential negotiated rate in the GDS so only authorized agencies can view and book it.
    explanation_ko: 'Rate code는 시스템 내에서 요금제를 명명/식별하는 코드이고, Rate Access Code는 GDS에서 비공개 협상 요금의 가시성을 통제하여 권한 있는 여행사만 조회·예약하게 하는 자격 증명이다.'
  - targetTerm: Corporate Rate
    explanation: A corporate rate is the negotiated price/product; the RAC is the access code an agency keys in to retrieve and sell that corporate rate in the GDS.
    explanation_ko: 'Corporate rate는 협상된 가격/상품이고, RAC는 여행사가 GDS에서 그 corporate rate를 조회·판매하기 위해 입력하는 접근 코드다.'
sources:
  - org: SaaS4Hotels
    name: GDS — Negotiated Rate Loading Map & Rate Access Codes
    version: ''
    section: ''
    url: 'https://www.saas4h.com/global-distribution-system-gds/negotiated-rate-loading-map-rate-access-codes'
  - org: Travelport
    name: Negotiated Rate Codes / Multi-Level Rates (Smartpoint)
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/Smartpoint1G1V/Content/Hotel/RelatedTopics/Hotel_NegotiatedRates.htm'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="22" width="28" height="18" rx="2"/><path d="M16 22v-6a8 8 0 0116 0v6"/><circle cx="24" cy="30" r="2.5"/><path d="M24 32.5V36"/></svg>
---

> A Rate Access Code (RAC) is the short GDS code (commonly 3 characters; some programs use 3-5 characters, and Galileo/Apollo can use up to six) that an authorized agency must enter to view and book a hotel's negotiated or confidential rate. It is the access-control key for negotiated GDS distribution: the rate is hidden from the public display and revealed only when the correct code (also known as a multi-level rate code or negotiated rate code) is supplied. Negotiated rates are typically secured to an authorized agency by its pseudo-city code (PCC) so only that agency can view and book them.

Negotiated hotel rates — corporate, consortia, or other confidential rates — are loaded into the GDS with rules that restrict who may see and sell them. The RAC (also called a multi-level rate code or negotiated rate code) is the credential a travel agent keys in to unlock a specific negotiated rate; without it, the rate does not appear in the standard availability display. The RAC is usually 3 characters (some programs use 3-5; Galileo/Apollo support up to six), and negotiated rates are secured to an authorized agency by its pseudo-city code (PCC) so only that agency can book the confidential price. The RAC is distinct from the rate plan or rate code that names/structures the product: it is specifically the access key that controls visibility. RACs are loaded alongside negotiated-rate attributes such as LRA/NLRA in the GDS rate-loading map.

**한국어 / Korean** — **요금 액세스 코드 (Rate Access Code, RAC)** — 요금 액세스 코드(RAC)는 권한 있는 여행사가 호텔의 협상(negotiated) 또는 비공개(confidential) 요금을 조회·예약하기 위해 입력해야 하는 짧은 GDS 코드(보통 3자, 일부 프로그램은 3~5자, Galileo/Apollo는 최대 6자)다. 협상 GDS 유통의 접근 통제 키로, 해당 요금은 공개 화면에서 숨겨져 있다가 올바른 코드(멀티레벨 요금 코드 또는 협상 요금 코드라고도 함)가 제공될 때만 노출된다. 협상 요금은 보통 여행사의 pseudo-city code(PCC)에 묶여(secured) 권한 있는 해당 여행사만 조회·예약할 수 있다.

협상 호텔 요금(기업·컨소시아 또는 기타 비공개 요금)은 누가 보고 판매할 수 있는지를 제한하는 규칙과 함께 GDS에 로딩된다. RAC(멀티레벨 요금 코드 또는 협상 요금 코드라고도 함)는 여행사 직원이 특정 협상 요금을 해제하기 위해 입력하는 자격 증명으로, 이것이 없으면 해당 요금은 표준 가용성 화면에 나타나지 않는다. RAC는 보통 3자(일부 프로그램은 3~5자, Galileo/Apollo는 최대 6자)이며, 협상 요금은 여행사의 pseudo-city code(PCC)에 묶여(secured) 권한 있는 해당 여행사만 비공개 가격을 예약할 수 있다. RAC는 상품을 명명/구조화하는 rate plan이나 rate code와 구별되며, 가시성을 통제하는 접근 키 그 자체다. RAC는 GDS 요금 로딩 맵에서 LRA/NLRA 같은 협상 요금 속성과 함께 로딩되는 경우가 많다.

**Aliases:** `RAC`, `Rate Access Code`, `Negotiated Rate Code`, `Hotel Rate Code (GDS access)`

# Related
- [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — related
- [Rate Code](/lodging/hotel-rate/rate-code.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [Pseudo City Code](/common/codes/pseudo-city-code.md) — related
- [GDS](/common/standards/gds.md) — related
- [Last Room Availability](/lodging/hotel-dist/last-room-availability.md) — related

# Distinctions
- **Rate Access Code (RAC)** vs [Rate Code](/lodging/hotel-rate/rate-code.md) — A rate code names/identifies a rate plan within a system; a Rate Access Code is specifically the credential that gates visibility of a confidential negotiated rate in the GDS so only authorized agencies can view and book it.
- **Rate Access Code (RAC)** vs [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — A corporate rate is the negotiated price/product; the RAC is the access code an agency keys in to retrieve and sell that corporate rate in the GDS.

# Citations
[1] [SaaS4Hotels — GDS — Negotiated Rate Loading Map & Rate Access Codes](https://www.saas4h.com/global-distribution-system-gds/negotiated-rate-loading-map-rate-access-codes)
[2] [Travelport — Negotiated Rate Codes / Multi-Level Rates (Smartpoint)](https://support.travelport.com/webhelp/Smartpoint1G1V/Content/Hotel/RelatedTopics/Hotel_NegotiatedRates.htm)
