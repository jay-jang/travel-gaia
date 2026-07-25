---
type: Metric
title: Look-to-Book Ratio
description: 'The look-to-book ratio (L2B) is the number of property search or shopping sessions initiated on a distribution channel divided by the number of confirmed bookings completed in the same period. It expresses how efficiently a channel converts browsers into buyers: a ratio of 100:1 means 100 search sessions occurred for every one booking made. Lower ratios indicate higher conversion efficiency; higher ratios signal friction in the booking funnel, pricing mismatch, or inventory gaps.'
tags:
  - hotel-dist
  - active
timestamp: '2026-07-25T00:00:00Z'
id: look-to-book-ratio
vertical: lodging
category: hotel-dist
conceptType: metric
status: active
abbreviation: L2B
term_ko: 조회 대 예약 비율(Look-to-Book Ratio)
definition_ko: '특정 유통 채널에서 시작된 숙박 시설 검색 또는 쇼핑 세션 수를 같은 기간 완료된 확정 예약 건수로 나눈 비율이다. 채널이 브라우저를 구매자로 얼마나 효율적으로 전환하는지를 나타내며, 100:1 비율은 예약 1건당 100번의 검색 세션이 발생했음을 의미한다. 비율이 낮을수록 전환 효율이 높고, 비율이 높을수록 예약 프로세스의 마찰, 가격 불일치, 또는 재고 부족을 시사한다.'
longDef: 'The look-to-book ratio is a primary KPI for hospitality distribution and revenue management teams. In the GDS and OTA channel context, it reflects the efficiency of a property''s rate and inventory presentation: a very high L2B (e.g., 500:1 or more on GDS channels) may signal that displayed rates are uncompetitive, rooms are closed to needed dates, or booking-path friction is causing abandonment. Benchmarks vary significantly by channel: direct booking engines typically achieve much lower L2B ratios (10:1 to 50:1) than metasearch or GDS channels (100:1 to 500:1+). The metric is tracked by CRS vendors, channel managers, and booking-engine providers and is often used alongside conversion rate (the inverse of L2B expressed as a percentage) and cost-per-booking (CPA) to optimize channel mix. In the airline GDS context, IATA tracks segment booking rates (bookings per search) similarly. Reducing L2B is addressed through rate competitiveness audits (rate shopping), improving content quality (images, descriptions, room-type mapping), enabling instant confirmation, and streamlining the checkout flow.'
longDef_ko: '조회 대 예약 비율은 호스피탈리티 유통 및 수익 관리팀의 주요 KPI이다. GDS·OTA 채널 맥락에서는 숙박 시설의 요금·재고 표시 효율을 반영한다. L2B가 매우 높으면(예: GDS 채널에서 500:1 이상) 표시 요금이 경쟁력이 없거나, 필요한 날짜의 객실이 마감되었거나, 예약 경로의 마찰로 이탈이 발생하고 있음을 나타낼 수 있다. 채널별 벤치마크는 상당히 다르다: 직접 예약 엔진은 일반적으로 메타서치·GDS 채널보다 훨씬 낮은 L2B 비율을 달성한다(10:1~50:1 대 100:1~500:1 이상). 이 지표는 CRS 벤더, 채널 매니저, 예약 엔진 제공업체가 추적하며, 채널 믹스 최적화를 위해 전환율(L2B의 역수를 백분율로 표현)·예약당 비용(CPA)과 함께 활용된다. L2B 감소는 요금 경쟁력 감사(rate shopping), 콘텐츠 품질 개선, 즉시 확정 활성화, 결제 프로세스 간소화를 통해 해결된다.'
aliases:
  - L2B Ratio
  - Search-to-Book Ratio
  - Search-to-Convert Ratio
  - LTB Ratio
  - Booking Conversion Rate (inverse)
relationships:
  - type: related
    targetTerm: Booking Engine
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Rate Shopping
distinctions:
  - targetTerm: Rate Shopping
    explanation: 'Rate shopping is the practice of monitoring competitor room rates to keep a hotel''s own pricing competitive; a high look-to-book ratio is often a symptom that rate shopping reveals—the property''s rates are out of position—prompting corrective pricing action to improve conversion.'
    explanation_ko: 'Rate Shopping은 호텔의 가격 경쟁력을 유지하기 위해 경쟁사 객실 요금을 모니터링하는 관행이고, 높은 조회 대 예약 비율은 흔히 rate shopping이 드러내는 증상, 즉 숙박 시설의 요금이 경쟁 위치에서 벗어나 있음을 나타내며 전환율 개선을 위한 가격 시정 조치를 촉구한다.'
  - targetTerm: Booking Engine
    explanation: 'A booking engine is the technology platform where shopping sessions and confirmed bookings both occur; the look-to-book ratio is the KPI measuring how efficiently that booking engine converts visitors into reservations.'
    explanation_ko: '예약 엔진(Booking Engine)은 쇼핑 세션과 확정 예약이 모두 이루어지는 기술 플랫폼이고, 조회 대 예약 비율은 그 예약 엔진이 방문자를 예약으로 얼마나 효율적으로 전환하는지를 측정하는 KPI이다.'
  - targetTerm: Revenue Management
    explanation: 'Revenue management sets prices and availability to maximize total room revenue; the look-to-book ratio is a diagnostic input that tells revenue managers whether their pricing strategy is attracting browsers but failing to convert them, or whether availability restrictions are unnecessarily restricting searches.'
    explanation_ko: '수익 관리(Revenue Management)는 총 객실 수익을 극대화하기 위해 가격과 가용성을 설정하고, 조회 대 예약 비율은 수익 관리자에게 가격 전략이 브라우저를 유인하지만 전환에 실패하는지, 또는 가용성 제한이 불필요하게 검색을 제한하는지를 알려주는 진단 입력값이다.'
sources:
  - name: STR — Hotel Distribution & Channel Performance Benchmarks
    org: STR (CoStar Group)
    version: ''
    section: ''
    url: 'https://str.com/'
    tier: secondary
  - name: Phocuswright — Online Travel Overview (Look-to-Book Analysis)
    org: Phocuswright
    version: ''
    section: ''
    url: 'https://www.phocuswright.com/'
    tier: secondary
  - name: HSMAI — Revenue Management Strategy (Conversion Metrics)
    org: Hospitality Sales and Marketing Association International
    version: ''
    section: ''
    url: 'https://hsmai.org/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="20" r="10"/><line x1="28" y1="28" x2="40" y2="40"/><path d="M20 14v6l4 4"/><rect x="30" y="32" width="10" height="8" rx="1"/></svg>
---

> The look-to-book ratio (L2B) is the number of property search or shopping sessions initiated on a distribution channel divided by the number of confirmed bookings completed in the same period. It expresses how efficiently a channel converts browsers into buyers: a ratio of 100:1 means 100 search sessions occurred for every one booking made.

The look-to-book ratio is a primary KPI for hospitality distribution and revenue management teams. A very high L2B (e.g., 500:1 or more on GDS channels) may signal uncompetitive rates, rooms closed to needed dates, or booking-path friction causing abandonment. Benchmarks vary significantly by channel: direct booking engines typically achieve much lower L2B ratios (10:1 to 50:1) than metasearch or GDS channels (100:1 to 500:1+). The metric is tracked by CRS vendors, channel managers, and booking-engine providers and is often used alongside conversion rate (the inverse of L2B expressed as a percentage) and cost-per-booking (CPA) to optimize channel mix.

**한국어 / Korean** — **조회 대 예약 비율(Look-to-Book Ratio / L2B)** — 특정 유통 채널에서 시작된 숙박 시설 검색 또는 쇼핑 세션 수를 같은 기간 완료된 확정 예약 건수로 나눈 비율이다. 채널이 브라우저를 구매자로 얼마나 효율적으로 전환하는지를 나타내며, 비율이 낮을수록 전환 효율이 높다. L2B가 매우 높으면 요금 경쟁력 부족, 재고 부족, 또는 예약 경로의 마찰을 시사한다.

**Aliases:** `L2B Ratio`, `Search-to-Book Ratio`, `Search-to-Convert Ratio`, `LTB Ratio`, `Booking Conversion Rate (inverse)`

# Related
- [Booking Engine](/lodging/hotel-dist/booking-engine.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [Revenue Management](/lodging/hotel-rate/revenue-management.md) — related
- [Rate Shopping](/lodging/hotel-dist/rate-shopping.md) — related

# Distinctions
- **Look-to-Book Ratio** vs [Rate Shopping](/lodging/hotel-dist/rate-shopping.md) — Rate shopping is the practice of monitoring competitor room rates to keep pricing competitive; a high look-to-book ratio is often the symptom that rate shopping reveals—the property's rates are out of position—prompting corrective pricing action.
- **Look-to-Book Ratio** vs [Booking Engine](/lodging/hotel-dist/booking-engine.md) — A booking engine is the technology platform where shopping sessions and confirmed bookings both occur; the look-to-book ratio is the KPI measuring how efficiently that booking engine converts visitors into reservations.
- **Look-to-Book Ratio** vs [Revenue Management](/lodging/hotel-rate/revenue-management.md) — Revenue management sets prices and availability to maximize total room revenue; the look-to-book ratio is a diagnostic input that tells revenue managers whether their pricing strategy is attracting browsers but failing to convert them.

# Citations
[1] [STR (CoStar Group) — Hotel Distribution & Channel Performance Benchmarks](https://str.com/)
[2] [Phocuswright — Online Travel Overview (Look-to-Book Analysis)](https://www.phocuswright.com/)
[3] [HSMAI — Hospitality Sales and Marketing Association International — Revenue Management Strategy](https://hsmai.org/)
