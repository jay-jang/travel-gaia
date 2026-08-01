---
type: Business Term
title: Compulsory Reservation
description: 'A seat reservation that is mandatory — not optional — for a passenger to board a specific train service. A valid ticket or rail pass alone is insufficient without a confirmed seat reservation on these services; passengers may be refused boarding or charged an on-board penalty. Most European high-speed rail services (Eurostar, TGV Inoui, AVE, Frecciarossa) and international night trains impose compulsory reservations.'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-08-01T00:00:00Z'
id: compulsory-reservation
vertical: ground
category: rail
conceptType: business-term
status: active
term_ko: 좌석 예약 의무(Compulsory Reservation)
definition_ko: '특정 열차에 탑승하기 위해 유효한 승차권 또는 철도 패스 외에 반드시 확정된 좌석 예약이 필요한 제도. 예약 의무가 있는 서비스에서는 좌석 예약 없이는 탑승이 거부되거나 차내에서 추가 요금이 부과될 수 있다. 대부분의 유럽 고속철도(Eurostar, TGV Inoui, AVE, Frecciarossa)와 국제 야간열차가 좌석 예약 의무를 적용한다.'
longDef: 'European rail distinguishes three reservation regimes at the train-service level: (1) Compulsory — the reservation is a condition of travel, and the service will not accept passengers without one (e.g., all Eurostar services, SNCF TGV Inoui, Renfe AVE, Trenitalia Frecciarossa, Thalys/Eurostar international, and most cross-border high-speed services); (2) Optional — a seat reservation is available and often recommended for comfort, but not required to board (e.g., Deutsche Bahn ICE, NS Intercity on many routes); (3) Not Available — open seating, no reservation system (e.g., regional, suburban, and commuter services). For Eurail and Interrail global pass holders, compulsory reservation fees are charged separately by each operating carrier and can range from a few euros on domestic services to €35 or more on the Eurostar. The UIC and OSDM data model carry a reservation-requirement indicator per train service so that distribution systems and pass-validation tools can display the correct regime to travellers and agents.'
longDef_ko: '유럽 철도는 열차 서비스 단위로 세 가지 예약 체계를 구분한다. (1) 의무(Compulsory) — 예약이 여행의 조건으로, 예약 없이는 탑승 불가(예: 모든 Eurostar 노선, SNCF TGV Inoui, Renfe AVE, Trenitalia Frecciarossa, Thalys/Eurostar 국제선, 대부분의 국경 간 고속 노선). (2) 선택(Optional) — 좌석 예약이 가능하고 편의를 위해 권장되지만 탑승에 필수 아님(예: Deutsche Bahn ICE, 많은 노선의 NS Intercity). (3) 불가(Not Available) — 자유석, 예약 시스템 없음(예: 지역·도시·통근 열차). Eurail·Interrail 글로벌 패스 소지자의 경우, 예약 의무 수수료는 각 운영 운송사가 별도로 부과하며, 국내 서비스의 몇 유로에서 Eurostar의 €35 이상까지 다양하다. UIC 및 OSDM 데이터 모델은 유통 시스템과 패스 검증 도구가 여행자 및 대리인에게 올바른 체계를 표시할 수 있도록 열차 서비스별 예약 요건 표시자를 포함한다.'
standardBody: UIC
aliases:
  - Mandatory Reservation
  - Reservation Compulsory
  - Obligatory Reservation
  - Required Reservation
providerTerms:
  - provider: Eurostar
    term: Compulsory reservation (included in fare)
    context: 'Eurostar prices include a mandatory seat reservation; the reservation cannot be separated from the ticket, and no-reservation boarding is not permitted.'
    context_ko: 'Eurostar 요금에는 의무 좌석 예약이 포함되며, 예약은 승차권과 분리할 수 없고 예약 없는 탑승은 허용되지 않는다.'
    relationship: same
  - provider: SNCF (France)
    term: Réservation obligatoire
    context: 'All TGV Inoui and TGV Ouigo trains in France require a compulsory seat reservation, purchased separately when holding a Eurail/Interrail pass.'
    context_ko: '프랑스의 모든 TGV Inoui·TGV Ouigo 열차는 좌석 예약 의무를 적용하며, Eurail/Interrail 패스 소지자는 예약을 별도로 구매해야 한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Seat Reservation
  - type: related
    targetTerm: High-Speed Rail
  - type: related
    targetTerm: Interrail Pass
  - type: related
    targetTerm: Eurail Pass
  - type: related
    targetTerm: OSDM
distinctions:
  - targetTerm: Seat Reservation
    explanation: 'A seat reservation is the act or product of securing a specific seat number on a train; compulsory reservation is the policy regime where that reservation is a mandatory condition of boarding — without it, a valid ticket or pass alone does not entitle the holder to travel on that service.'
    explanation_ko: '좌석 예약은 특정 좌석 번호를 열차에서 확보하는 행위 또는 상품이고, 좌석 예약 의무는 그 예약이 탑승의 필수 조건인 정책 체계로, 예약 없이는 유효한 승차권이나 패스만으로 해당 서비스 이용 자격이 없다.'
sources:
  - name: All about seat reservations
    org: Eurail B.V.
    version: ''
    section: ''
    url: 'https://www.eurail.com/en/book-reservations/all-about-seat-reservations'
    tier: association
  - name: All about seat reservations
    org: Interrail.eu (Eurail Group)
    version: ''
    section: ''
    url: 'https://www.interrail.eu/en/book-reservations/all-about-seat-reservations'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="14" width="32" height="22" rx="3"/><path d="M14 22 h8 v8 h-8z"/><path d="M26 22 h8 v8 h-8z"/><path d="M22 8 h4 v6 h-4z"/><circle cx="37" cy="11" r="5"/><path d="M35 11 l1.5 1.5 3-3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
---

> A seat reservation that is mandatory — not optional — for a passenger to board a specific train service. A valid ticket or rail pass alone is insufficient without a confirmed seat reservation on these services; passengers may be refused boarding or charged an on-board penalty. Most European high-speed rail services (Eurostar, TGV Inoui, AVE, Frecciarossa) and international night trains impose compulsory reservations.

European rail distinguishes three reservation regimes: (1) Compulsory — reservation is a condition of travel; no boarding without it; (2) Optional — recommended but not required; (3) Not Available — open seating, no reservation system. For Eurail and Interrail global pass holders, compulsory reservation fees are charged separately by each carrier, ranging from a few euros to €35+ on Eurostar. The UIC and OSDM data model carry a reservation-requirement indicator per train service so distribution systems can display the correct regime to travellers.

**한국어 / Korean** — **좌석 예약 의무(Compulsory Reservation)** — 특정 열차에 탑승하기 위해 유효한 승차권 또는 패스 외에 반드시 확정된 좌석 예약이 필요한 제도. 대부분의 유럽 고속철도(Eurostar, TGV Inoui, AVE, Frecciarossa)와 야간열차가 적용한다. Eurail·Interrail 패스 소지자는 예약 의무 수수료를 별도로 지불해야 한다.

**Aliases:** `Mandatory Reservation`, `Reservation Compulsory`, `Obligatory Reservation`, `Required Reservation`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Eurostar | `Compulsory reservation (included in fare)` | same | Eurostar prices include a mandatory seat reservation; no-reservation boarding is not permitted. |
| SNCF (France) | `Réservation obligatoire` | same | All TGV Inoui and TGV Ouigo trains require a compulsory seat reservation, purchased separately when holding a Eurail/Interrail pass. |

# Related
- Seat Reservation — related
- High-Speed Rail — related
- Interrail Pass — related
- Eurail Pass — related
- OSDM — related

# Distinctions
- **Compulsory Reservation** vs Seat Reservation — A seat reservation secures a specific seat number on a train; compulsory reservation is the policy regime where that reservation is a mandatory boarding condition — without it, a valid ticket or pass alone does not entitle travel on that service.

# Citations
[1] [Eurail B.V. — All about seat reservations](https://www.eurail.com/en/book-reservations/all-about-seat-reservations)
[2] [Interrail.eu (Eurail Group) — All about seat reservations](https://www.interrail.eu/en/book-reservations/all-about-seat-reservations)
