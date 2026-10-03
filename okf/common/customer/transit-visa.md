---
type: Document
title: Transit Visa
description: 'A short-stay travel authorisation issued by a state that permits a traveler to pass through its territory en route to a third country, without granting full entry rights. Transit visas are required by certain nationality and itinerary combinations, and airlines verify requirements in real time using TIMATIC to avoid fines for carrying incorrectly documented passengers.'
tags:
  - customer
  - active
  - ICAO
timestamp: '2026-10-03T00:00:00Z'
id: transit-visa
vertical: common
category: customer
conceptType: document
status: active
term_ko: 통과 비자(Transit Visa)
definition_ko: '통과 비자(Transit Visa)는 여행자가 최종 목적지로 가는 도중 해당 국가의 영토를 통과할 수 있도록 해당 국가가 발급하는 단기 여행 허가로, 완전한 입국 권리를 부여하지 않는다. 국적 및 여정 조합에 따라 필요하며, 항공사는 TIMATIC을 이용해 실시간으로 요건을 확인하여 서류 미비 승객 탑승에 따른 벌금을 방지한다.'
longDef: 'Transit visas are typically required when a traveler must clear immigration and exit the international transit zone (e.g., to connect to a domestic flight or change airports) or when a country''s national policy requires documented presence in its territory for certain passport holders even in the transit zone. Key distinctions exist between airside transit (staying within the secured international zone without passing through customs/immigration, often visa-free) and landside transit (exiting the international zone, which may require a transit visa). Requirements vary by: the traveler''s nationality, the transit country''s policy, the purpose and duration of the transit, and whether the traveler holds a valid visa for the final destination. ICAO Annex 9 (Facilitation) establishes the international framework for facilitation of travel documents, and IATA''s TIMATIC (Travel Information Manual Automatic) system, integrated into airline departure control systems, is the primary operational tool airlines use to verify whether a transit visa is required for any given nationality-route combination. Carriers who board incorrectly documented passengers can be fined and required to return passengers at their own expense under national carrier liability rules.'
longDef_ko: '통과 비자는 일반적으로 여행자가 출입국 심사를 거치고 국제 통과 구역을 벗어나야 할 때(예: 국내선 연결 또는 공항 변경), 또는 해당 국가의 국가 정책이 특정 여권 소지자에게 통과 구역 내에서도 문서화된 체류를 요구할 때 필요하다. 공항 에어사이드 통과(세관·출입국을 거치지 않고 보안 국제 구역 내에 머무는 것으로 흔히 비자 불필요)와 랜드사이드 통과(국제 구역을 벗어나는 것으로 통과 비자가 필요할 수 있음) 간에 핵심적인 구분이 있다. 요건은 여행자 국적, 통과 국가의 정책, 통과 목적 및 기간, 최종 목적지의 유효 비자 보유 여부에 따라 달라진다. ICAO Annex 9(원활화)는 여행 서류 원활화를 위한 국제 체계를 수립하며, IATA의 TIMATIC(Travel Information Manual Automatic) 시스템은 항공사 출발 관리 시스템에 통합되어 항공사가 국적-노선 조합별로 통과 비자 필요 여부를 확인하는 주요 운영 도구이다. 서류 미비 승객을 탑승시킨 항공사는 국가 항공사 책임 규정에 따라 벌금을 부과받고 자비로 승객을 귀환시켜야 한다.'
standardBody: ICAO
aliases:
  - Airport Transit Visa
  - Transit Authorisation
  - ATV
relationships:
  - type: related
    targetTerm: TIMATIC
  - type: related
    targetTerm: eVisa
  - type: related
    targetTerm: Visa on Arrival
  - type: related
    targetTerm: Biometric Passport
distinctions:
  - targetTerm: eVisa
    explanation: 'An eVisa is an electronically issued full-entry visa granting the holder the right to enter and stay in the issuing country for tourism, business, or other purposes; a transit visa is a limited authorisation specifically permitting passage through a country without full entry rights, and is typically shorter in duration and more restricted in permitted activities.'
    explanation_ko: 'eVisa는 전자적으로 발급되는 정식 입국 비자로 소지자에게 관광, 비즈니스 또는 기타 목적으로 발급국에 입국·체류할 권리를 부여하고, 통과 비자는 완전한 입국 권리 없이 국가 통과만을 허용하는 제한적 허가로, 일반적으로 기간이 짧고 허용 활동이 더 제한된다.'
  - targetTerm: Visa on Arrival
    explanation: 'A visa on arrival is a full-entry visa that can be obtained upon arrival at the border, granting entry rights; a transit visa is obtained before travel (or in some cases at the airside port of entry) and permits only passage through the country, not a full stay.'
    explanation_ko: '도착 비자(Visa on Arrival)는 국경 도착 시 취득할 수 있는 정식 입국 비자로 입국 권리를 부여하고, 통과 비자는 여행 전에(또는 일부 경우 에어사이드 입국 지점에서) 취득하며 완전한 체류가 아닌 국가 통과만을 허용한다.'
  - targetTerm: TIMATIC
    explanation: 'TIMATIC is the IATA database and airline decision-support tool that contains the real-time visa, passport, and health requirement data for any nationality-destination-route combination, including whether a transit visa is required; a transit visa is the actual government-issued travel document whose requirement TIMATIC helps determine and verify.'
    explanation_ko: 'TIMATIC은 통과 비자 필요 여부를 포함한 국적-목적지-노선 조합별 비자·여권·건강 요건 데이터를 실시간으로 제공하는 IATA 데이터베이스 및 항공사 의사결정 지원 도구이고, 통과 비자는 TIMATIC이 확인·검증하는 데 도움을 주는 실제 정부 발급 여행 서류이다.'
sources:
  - name: Annex 9 to the Convention on International Civil Aviation — Facilitation, 15th Edition
    org: ICAO
    version: '15th Edition'
    section: 'Chapter 3 — Entry and Departure of Persons'
    url: 'https://www.icao.int/safety/facilitation/Pages/default.aspx'
    tier: standard-body
  - name: TIMATIC — Travel Information Manual Automatic
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/compliance/timatic/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="28" rx="3"/><line x1="8" y1="18" x2="40" y2="18"/><circle cx="20" cy="28" r="4"/><path d="M26 24h10M26 28h10M26 32h7"/></svg>
---

> A short-stay travel authorisation issued by a state that permits a traveler to pass through its territory en route to a third country, without granting full entry rights. Transit visas are required by certain nationality and itinerary combinations, and airlines verify requirements in real time using TIMATIC to avoid fines for carrying incorrectly documented passengers.

Transit visas are typically required when a traveler must clear immigration and exit the international transit zone (e.g., to connect to a domestic flight or change airports) or when a country's national policy requires documented presence in its territory for certain passport holders even in the transit zone. The critical distinction is between airside transit (remaining within the secured international zone, often visa-free) and landside transit (exiting the international zone, which may require a transit visa). Requirements vary by nationality, transit-country policy, transit duration, and whether the traveler holds a valid onward destination visa. ICAO Annex 9 (Facilitation) establishes the international framework; IATA's TIMATIC system is the primary operational tool for airlines to verify requirements. Carriers who board incorrectly documented passengers face fines and mandatory return at their own expense under national carrier liability rules.

**한국어 / Korean** — **통과 비자(Transit Visa)** — 통과 비자는 여행자가 최종 목적지로 가는 도중 해당 국가 영토를 통과할 수 있도록 발급되는 단기 여행 허가로, 완전한 입국 권리는 부여하지 않는다. 국적 및 여정 조합에 따라 필요하며, 항공사는 TIMATIC을 이용해 실시간으로 요건을 확인한다.

에어사이드 통과(세관·출입국 심사 없이 국제 구역 내 머무는 것, 흔히 비자 불필요)와 랜드사이드 통과(국제 구역 벗어남, 통과 비자 필요 가능성)의 구분이 핵심이다.

**Aliases:** `Airport Transit Visa`, `Transit Authorisation`, `ATV`

# Related
- [TIMATIC](/common/customer/timatic.md) — related
- [eVisa](/common/customer/e-visa.md) — related
- [Visa on Arrival](/common/customer/visa-on-arrival.md) — related
- [Biometric Passport](/common/customer/biometric-passport.md) — related

# Distinctions
- **Transit Visa** vs [eVisa](/common/customer/e-visa.md) — An eVisa is an electronically issued full-entry visa granting entry and stay rights; a transit visa is a limited authorisation permitting only passage through the country without full entry rights.
- **Transit Visa** vs [Visa on Arrival](/common/customer/visa-on-arrival.md) — A visa on arrival is a full-entry visa obtained at the border; a transit visa permits only passage through the country, not a full stay.
- **Transit Visa** vs [TIMATIC](/common/customer/timatic.md) — TIMATIC is the airline tool that contains real-time data on whether a transit visa is required for any nationality-route combination; a transit visa is the actual government-issued document whose requirement TIMATIC helps verify.

# Citations
[1] [ICAO — Annex 9 to the Convention on International Civil Aviation — Facilitation, 15th Edition, Chapter 3](https://www.icao.int/safety/facilitation/Pages/default.aspx)
[2] [IATA — TIMATIC — Travel Information Manual Automatic](https://www.iata.org/en/services/compliance/timatic/)
