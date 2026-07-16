---
type: Metric
title: RASM
description: 'Revenue per Available Seat Mile (RASM) is an airline unit revenue metric equal to total operating revenues divided by the number of available seat miles (ASMs) operated during a period. It combines passenger yield, load factor, and ancillary revenues into a single number that shows how much revenue each seat mile generates, making it the primary top-line comparison metric across carriers regardless of network size.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-07-16T00:00:00Z'
id: rasm
vertical: air
category: air-shop
conceptType: metric
status: active
abbreviation: RASM
term_ko: '가용 좌석 마일당 수익(RASM)'
definition_ko: 'RASM(Revenue per Available Seat Mile)은 특정 기간의 총 영업 수익을 운항한 가용 좌석 마일(ASM) 수로 나눈 항공사 단위 수익 지표다. 여객 수익률, 탑승률, 부가 수익을 하나의 수치로 결합하여 네트워크 규모와 관계없이 항공사 간 상위 비교 지표로 사용된다.'
longDef: 'RASM is computed as: RASM = Total Operating Revenue ÷ Available Seat Miles. Because it includes all revenue streams (passenger, cargo, ancillary), it is a more complete measure of commercial performance than yield alone. US carriers report RASM quarterly in SEC filings; European carriers often quote the equivalent metric in euro cents per ASK (available seat kilometres). RASM is best read alongside CASM (Cost per Available Seat Mile): when RASM > CASM the airline is generating a positive unit margin. Competitive analysis compares RASM across carriers flying similar stage lengths, since longer stage lengths mechanically lower RASM through reduced short-haul premium yield density. Airline management also tracks "Passenger RASM" (PRASM) — excluding cargo and other revenue — to isolate the core flying business.'
longDef_ko: 'RASM 계산식: RASM = 총 영업 수익 ÷ 가용 좌석 마일. 여객·화물·부가 수익을 모두 포함하므로 수익률(yield)만으로 측정하는 것보다 상업 성과를 더 포괄적으로 나타낸다. 미국 항공사는 분기별 SEC 제출 자료에서 RASM을 공시하고, 유럽 항공사는 ASK(가용 좌석 킬로미터)당 유로 센트 단위로 동등한 지표를 인용하는 경우가 많다. RASM은 CASM(가용 좌석 마일당 비용)과 함께 읽는 것이 가장 효과적이다. RASM > CASM이면 항공사가 양(+)의 단위 마진을 창출하는 것이다. 장거리 운항일수록 단거리 프리미엄 수익 밀도가 낮아져 기계적으로 RASM이 낮아지므로, 경쟁 분석은 유사한 구간 거리를 운항하는 항공사 간에 비교한다. 경영진은 핵심 운항 사업을 분리하기 위해 화물·기타 수익을 제외한 "여객 RASM(PRASM)"도 추적한다.'
standardBody: IATA
aliases:
  - Revenue per Available Seat Mile
  - Revenue per ASM
  - PRASM
relationships:
  - type: related
    targetTerm: CASM
  - type: related
    targetTerm: Load Factor
  - type: related
    targetTerm: Revenue Management
distinctions:
  - targetTerm: CASM
    explanation: 'RASM is the revenue side of airline unit economics — how much revenue each seat mile earns; CASM is the cost side — how much it costs to fly each seat mile. The spread (RASM minus CASM) is the unit operating margin.'
    explanation_ko: 'RASM은 항공사 단위 경제의 수익 측면(좌석 마일당 수익)이고, CASM은 비용 측면(좌석 마일 운항 비용)이다. 두 값의 차이(RASM − CASM)가 단위 영업 마진이다.'
  - targetTerm: Load Factor
    explanation: 'Load Factor shows what percentage of seats were filled; RASM captures both how full and how lucrative the seats were — two carriers with the same load factor can have very different RASMs depending on yield and ancillary mix.'
    explanation_ko: '탑승률(LF)은 좌석이 채워진 비율을 나타내고, RASM은 얼마나 채워졌는지와 얼마나 수익성 있었는지를 모두 반영한다. 같은 탑승률이라도 수익률과 부가 수익 구성에 따라 RASM은 크게 다를 수 있다.'
  - targetTerm: Revenue Management
    explanation: 'Revenue Management is the discipline of optimising pricing and inventory to maximise RASM; RASM is the outcome metric that reveals whether revenue management decisions collectively generated the highest revenue per seat mile.'
    explanation_ko: 'Revenue Management는 RASM을 극대화하기 위해 요금과 재고를 최적화하는 학문이고, RASM은 Revenue Management 결정이 집합적으로 좌석 마일당 최고 수익을 창출했는지 보여주는 결과 지표다.'
sources:
  - name: Air Carrier Financial Reports (Form 41 Financial Data)
    org: U.S. Bureau of Transportation Statistics (BTS)
    version: ''
    section: Schedule P-1.2 — Statement of Operations
    url: 'https://www.transtats.bts.gov/databases.asp?Z1qr_VQ=E&Z1qr_Qr5p=N8vn6v10%20f6n6v56vp5&f7owrpavQ='
    tier: regulator-guidance
  - name: IATA Annual Review 2024
    org: IATA
    version: '2024'
    section: Financial Results
    url: 'https://www.iata.org/en/publications/annual-review/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 40V10"/><path d="M9 40h30"/><polyline points="12,34 22,22 32,26 42,12"/><path d="M37 12h5v5"/><line x1="12" y1="38" x2="12" y2="40"/><line x1="22" y1="38" x2="22" y2="40"/><line x1="32" y1="38" x2="32" y2="40"/></svg>
---

> Revenue per Available Seat Mile (RASM) is an airline unit revenue metric equal to total operating revenues divided by the number of available seat miles (ASMs) operated during a period. It combines passenger yield, load factor, and ancillary revenues into a single number that shows how much revenue each seat mile generates, making it the primary top-line comparison metric across carriers regardless of network size.

RASM is computed as: RASM = Total Operating Revenue ÷ Available Seat Miles. Because it includes all revenue streams (passenger, cargo, ancillary), it is a more complete measure of commercial performance than yield alone. US carriers report RASM quarterly in SEC filings; European carriers often quote the equivalent metric in euro cents per ASK (available seat kilometres). RASM is best read alongside CASM (Cost per Available Seat Mile): when RASM > CASM the airline is generating a positive unit margin. Competitive analysis compares RASM across carriers flying similar stage lengths, since longer stage lengths mechanically lower RASM through reduced short-haul premium yield density. Airline management also tracks "Passenger RASM" (PRASM) — excluding cargo and other revenue — to isolate the core flying business.

**한국어 / Korean** — **가용 좌석 마일당 수익(RASM)** — RASM(Revenue per Available Seat Mile)은 특정 기간의 총 영업 수익을 운항한 가용 좌석 마일(ASM) 수로 나눈 항공사 단위 수익 지표다. 여객 수익률, 탑승률, 부가 수익을 하나의 수치로 결합하여 네트워크 규모와 관계없이 항공사 간 상위 비교 지표로 사용된다.

RASM 계산식: RASM = 총 영업 수익 ÷ 가용 좌석 마일. 여객·화물·부가 수익을 모두 포함하므로 수익률(yield)만으로 측정하는 것보다 상업 성과를 더 포괄적으로 나타낸다. 미국 항공사는 분기별 SEC 제출 자료에서 RASM을 공시하고, 유럽 항공사는 ASK(가용 좌석 킬로미터)당 유로 센트 단위로 동등한 지표를 인용하는 경우가 많다. RASM은 CASM(가용 좌석 마일당 비용)과 함께 읽는 것이 가장 효과적이다. RASM > CASM이면 항공사가 양(+)의 단위 마진을 창출하는 것이다.

**Aliases:** `Revenue per Available Seat Mile`, `Revenue per ASM`, `PRASM`

# Related
- [CASM](/air/air-shop/casm.md) — related
- [Load Factor](/air/air-shop/load-factor.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related

# Distinctions
- **RASM** vs [CASM](/air/air-shop/casm.md) — RASM is the revenue side of airline unit economics — how much revenue each seat mile earns; CASM is the cost side — how much it costs to fly each seat mile. The spread (RASM minus CASM) is the unit operating margin.
- **RASM** vs [Load Factor](/air/air-shop/load-factor.md) — Load Factor shows what percentage of seats were filled; RASM captures both how full and how lucrative the seats were — two carriers with the same load factor can have very different RASMs depending on yield and ancillary mix.
- **RASM** vs [Revenue Management](/air/air-shop/revenue-management.md) — Revenue Management is the discipline of optimising pricing and inventory to maximise RASM; RASM is the outcome metric that reveals whether revenue management decisions collectively generated the highest revenue per seat mile.

# Citations
[1] [U.S. Bureau of Transportation Statistics (BTS) — Air Carrier Financial Reports (Form 41 Financial Data)](https://www.transtats.bts.gov/databases.asp?Z1qr_VQ=E&Z1qr_Qr5p=N8vn6v10%20f6n6v56vp5&f7owrpavQ=)
[2] [IATA — IATA Annual Review 2024](https://www.iata.org/en/publications/annual-review/)
