---
type: Standard
title: CUTE
description: 'CUTE (Common Use Terminal Equipment) is the IATA standard (Recommended Practice 1797) that defines a shared-infrastructure model for airports, allowing multiple airlines to use the same physical check-in desks, boarding gate readers, and self-service kiosks without installing proprietary hardware or software on each device. Airline applications connect to a central middleware layer on airport-owned workstations, enabling an airport to reassign a counter from one airline to another in minutes.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-07-12T00:00:00Z'
id: cute
vertical: common
category: standards
conceptType: standard
status: active
abbreviation: CUTE
term_ko: 공용 터미널 장비(CUTE)
definition_ko: 'CUTE(Common Use Terminal Equipment)는 여러 항공사가 전용 하드웨어나 소프트웨어를 각 장치에 설치하지 않고도 동일한 체크인 카운터, 탑승구 단말기, 셀프서비스 키오스크를 공동으로 사용할 수 있도록 하는, 공유 인프라 모델을 정의한 IATA 표준(권고 관행 1797)이다. 항공사 애플리케이션은 공항 소유의 워크스테이션에 있는 중앙 미들웨어 레이어를 통해 연결되어, 공항이 수 분 내에 한 항공사에서 다른 항공사로 카운터를 재배정할 수 있다.'
longDef: 'CUTE was introduced by IATA in the early 1990s as airports grew too large to dedicate counters to individual carriers. The standard specifies the Common Use Passenger Processing System (CUPPS) middleware layer, communication protocols, and the application programming interface (API) through which each airline''s check-in or boarding application runs on shared airport hardware. A CUTE workstation displays the correct airline branding and connects to the appropriate Passenger Service System (PSS) or Departure Control System (DCS) when an agent logs in under a specific carrier code. The successor standard CUPPS (Common Use Passenger Processing Systems — IATA RP 1797B) extends CUTE to include self-service kiosks (CUSS — Common Use Self-Service) and biometric gates. CUTE reduces airport capital expenditure and enables flexible gate management, particularly important in multi-carrier terminals and during irregular operations (IROPS).'
longDef_ko: 'CUTE는 공항이 개별 항공사에 카운터를 전담 배정하기 어려울 만큼 커진 1990년대 초 IATA가 도입하였다. 이 표준은 각 항공사의 체크인 또는 탑승 애플리케이션이 공유 공항 하드웨어에서 실행되도록 하는 공용 승객 처리 시스템(CUPPS) 미들웨어 레이어, 통신 프로토콜, 애플리케이션 프로그래밍 인터페이스(API)를 규정한다. CUTE 워크스테이션은 에이전트가 특정 항공사 코드로 로그인하면 해당 항공사 브랜딩을 표시하고 적절한 승객 서비스 시스템(PSS) 또는 출발 통제 시스템(DCS)에 연결된다. 후속 표준인 CUPPS(Common Use Passenger Processing Systems — IATA RP 1797B)는 셀프서비스 키오스크(CUSS) 및 생체 인식 게이트를 포함하도록 CUTE를 확장한다. CUTE는 공항의 자본 지출을 줄이고 유연한 게이트 관리를 가능하게 하며, 이는 특히 복수 항공사 터미널과 비정상 운항(IROPS) 시에 중요하다.'
aliases:
  - Common Use Terminal Equipment
  - CUPPS
  - Common Use Passenger Processing Systems
  - CUSS
  - Common Use Self-Service
relationships:
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: Boarding Pass
  - type: related
    targetTerm: Passenger Service System (PSS)
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: IATA One ID
distinctions:
  - targetTerm: Departure Control System (DCS)
    explanation: 'A DCS (Departure Control System) is the airline application that performs the check-in, seat assignment, boarding, and load-control functions — the operational software; CUTE is the shared airport hardware and middleware standard that hosts and connects that DCS application (and those of other airlines) on common airport equipment.'
    explanation_ko: 'DCS(출발 통제 시스템)는 체크인·좌석 배정·탑승·로드 컨트롤 기능을 수행하는 항공사 애플리케이션, 즉 운영 소프트웨어이고, CUTE는 그 DCS 애플리케이션(및 다른 항공사의 애플리케이션)을 공통 공항 장비에서 호스팅하고 연결하는 공유 공항 하드웨어·미들웨어 표준이다.'
  - targetTerm: Passenger Service System (PSS)
    explanation: 'A PSS is the airline''s reservation and inventory management system (the source of booking data and seat availability); CUTE is the airport check-in counter infrastructure that the PSS connects through when a passenger presents at the counter.'
    explanation_ko: 'PSS는 예약 데이터와 좌석 가용성의 원천인 항공사의 예약·인벤토리 관리 시스템이고, CUTE는 승객이 카운터에 나타났을 때 PSS가 연결되는 공항 체크인 카운터 인프라이다.'
sources:
  - name: IATA Recommended Practice 1797 — Common Use Terminal Equipment (CUTE)
    org: IATA
    version: RP 1797 / RP 1797B (CUPPS)
    section: ''
    url: 'https://www.iata.org/en/programs/airport/common-use/cute/'
    tier: association
  - name: ACI World — Common Use Airport Infrastructure Guide
    org: ACI World (Airports Council International)
    version: ''
    section: ''
    url: 'https://aci.aero/2016/02/01/aci-world-common-use-passenger-processing-systems-cupps-standards/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="22" rx="2"/><line x1="16" y1="32" x2="16" y2="38"/><line x1="32" y1="32" x2="32" y2="38"/><line x1="12" y1="38" x2="36" y2="38"/><line x1="14" y1="20" x2="34" y2="20"/><line x1="14" y1="16" x2="22" y2="16"/><circle cx="30" cy="22" r="3"/></svg>
---

> CUTE (Common Use Terminal Equipment) is the IATA standard (Recommended Practice 1797) that defines a shared-infrastructure model for airports, allowing multiple airlines to use the same physical check-in desks, boarding gate readers, and self-service kiosks without installing proprietary hardware or software on each device. Airline applications connect to a central middleware layer on airport-owned workstations, enabling an airport to reassign a counter from one airline to another in minutes.

CUTE was introduced by IATA in the early 1990s as airports grew too large to dedicate counters to individual carriers. The standard specifies the Common Use Passenger Processing System (CUPPS) middleware layer, communication protocols, and the application programming interface (API) through which each airline's check-in or boarding application runs on shared airport hardware. A CUTE workstation displays the correct airline branding and connects to the appropriate Passenger Service System (PSS) or Departure Control System (DCS) when an agent logs in under a specific carrier code. The successor standard CUPPS (Common Use Passenger Processing Systems — IATA RP 1797B) extends CUTE to include self-service kiosks (CUSS — Common Use Self-Service) and biometric gates. CUTE reduces airport capital expenditure and enables flexible gate management, particularly important in multi-carrier terminals and during irregular operations (IROPS).

**한국어 / Korean** — **공용 터미널 장비(CUTE)** — CUTE(Common Use Terminal Equipment)는 여러 항공사가 전용 하드웨어나 소프트웨어를 각 장치에 설치하지 않고도 동일한 체크인 카운터, 탑승구 단말기, 셀프서비스 키오스크를 공동으로 사용할 수 있도록 하는, 공유 인프라 모델을 정의한 IATA 표준(권고 관행 1797)이다. 항공사 애플리케이션은 공항 소유의 워크스테이션에 있는 중앙 미들웨어 레이어를 통해 연결되어, 공항이 수 분 내에 한 항공사에서 다른 항공사로 카운터를 재배정할 수 있다.

CUTE는 공항이 개별 항공사에 카운터를 전담 배정하기 어려울 만큼 커진 1990년대 초 IATA가 도입하였다. 이 표준은 각 항공사의 체크인 또는 탑승 애플리케이션이 공유 공항 하드웨어에서 실행되도록 하는 CUPPS 미들웨어 레이어, 통신 프로토콜, API를 규정한다. CUTE 워크스테이션은 에이전트가 특정 항공사 코드로 로그인하면 해당 항공사 브랜딩을 표시하고 적절한 PSS 또는 DCS에 연결된다. 후속 표준 CUPPS(IATA RP 1797B)는 셀프서비스 키오스크(CUSS) 및 생체 인식 게이트를 포함하도록 확장된다.

**Aliases:** `Common Use Terminal Equipment`, `CUPPS`, `Common Use Passenger Processing Systems`, `CUSS`, `Common Use Self-Service`

# Related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [Boarding Pass](/air/air-ops/boarding-pass.md) — related
- [Passenger Service System (PSS)](/common/standards/passenger-service-system-pss.md) — related
- [GDS](/common/standards/gds.md) — related
- [IATA One ID](/common/customer/iata-one-id.md) — related

# Distinctions
- **CUTE** vs [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — A DCS (Departure Control System) is the airline application that performs the check-in, seat assignment, boarding, and load-control functions — the operational software; CUTE is the shared airport hardware and middleware standard that hosts and connects that DCS application (and those of other airlines) on common airport equipment.
- **CUTE** vs [Passenger Service System (PSS)](/common/standards/passenger-service-system-pss.md) — A PSS is the airline's reservation and inventory management system (the source of booking data and seat availability); CUTE is the airport check-in counter infrastructure that the PSS connects through when a passenger presents at the counter.

# Citations
[1] [IATA — Common Use Terminal Equipment (CUTE) — Recommended Practice 1797](https://www.iata.org/en/programs/airport/common-use/cute/)
[2] [ACI World — Common Use Airport Infrastructure Guide](https://aci.aero/2016/02/01/aci-world-common-use-passenger-processing-systems-cupps-standards/)
