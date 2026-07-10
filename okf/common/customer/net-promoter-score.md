---
type: Metric
title: Net Promoter Score (NPS)
description: 'Net Promoter Score (NPS) is a customer loyalty metric derived from a single survey question — "How likely are you to recommend us to a friend or colleague?" on a 0–10 scale — that classifies respondents as Promoters (9–10), Passives (7–8), or Detractors (0–6) and calculates the score as the percentage of Promoters minus the percentage of Detractors, yielding a value from −100 to +100. Introduced in 2003, NPS is widely adopted across the travel industry by airlines, hotels, cruise lines, OTAs, and tour operators as a proxy for growth potential and brand loyalty.'
tags:
  - customer
  - active
timestamp: '2026-07-10T00:00:00Z'
id: net-promoter-score
vertical: common
category: customer
conceptType: metric
status: active
abbreviation: NPS
term_ko: 순고객추천지수(NPS)
definition_ko: '순고객추천지수(NPS, Net Promoter Score)는 "친구나 동료에게 우리를 추천할 가능성이 얼마나 됩니까?"라는 단일 설문 문항(0~10점 척도)에서 도출하는 고객 충성도 지표다. 응답자를 추천자(Promoter, 9~10점)·중립자(Passive, 7~8점)·비방자(Detractor, 0~6점)로 분류하고, 추천자 비율에서 비방자 비율을 빼 −100~+100 범위의 점수를 산출한다. 2003년 도입된 NPS는 항공사·호텔·크루즈 선사·OTA·투어 운영사 등 여행 산업 전반에서 성장 잠재력과 브랜드 충성도의 대용 지표로 광범위하게 채택되고 있다.'
longDef: 'NPS was introduced by Fred Reichheld, Bain & Company, and Satmetrix in a December 2003 Harvard Business Review article ("The One Number You Need to Grow"). The methodology posits that Promoters drive organic growth through referrals and repeat business, while Detractors create negative word-of-mouth. In travel, NPS is measured at two levels: Relational NPS (periodic brand-level surveys) and Transactional NPS (measured immediately after a specific touchpoint such as a flight, hotel stay, or shore excursion). Airlines such as Delta and Lufthansa report NPS as a key performance indicator; IATA uses NPS as one measure in its Global Passenger Survey. Hotel brands anchor NPS targets in franchise standards and management contracts, and cruise lines deploy post-cruise surveys to capture turnaround-day NPS. NPS benchmarks vary significantly by travel segment and culture, so raw NPS numbers should be interpreted within a competitive set rather than as absolute good/bad thresholds. NPS has been supplemented or critiqued by alternative metrics such as Customer Effort Score (CES) and Customer Satisfaction Score (CSAT), but it remains the travel industry''s most-cited single-number loyalty measure.'
longDef_ko: 'NPS는 Fred Reichheld, 베인앤드컴퍼니(Bain & Company), Satmetrix가 2003년 12월 하버드 비즈니스 리뷰 기사("The One Number You Need to Grow")에서 소개했다. 이 방법론은 추천자(Promoter)가 추천과 재구매를 통해 유기적 성장을 이끌고, 비방자(Detractor)는 부정적 구전을 유발한다고 본다. 여행 산업에서 NPS는 두 수준에서 측정된다. 관계형 NPS(정기적 브랜드 수준 설문)와 거래형 NPS(항공편·호텔 투숙·기항지 투어 등 특정 접점 직후 측정)다. 델타·루프트한자 등 항공사는 NPS를 핵심 성과 지표(KPI)로 보고하며, IATA는 글로벌 여객 설문(Global Passenger Survey)에서 NPS를 주요 지표 중 하나로 활용한다. 호텔 브랜드는 프랜차이즈 기준·운영 계약에 NPS 목표치를 명시하고, 크루즈 선사는 출항일(turnaround day) NPS를 파악하기 위해 크루즈 종료 후 설문을 실시한다. NPS 벤치마크는 여행 세분 시장과 문화에 따라 큰 차이가 있으므로, 절댓값보다 경쟁 업체군(competitive set) 내에서 해석해야 한다. NPS는 고객 노력 점수(CES), 고객 만족도(CSAT) 등 대안 지표로 보완·비판받기도 하지만, 여행 산업에서 가장 많이 인용되는 단일 충성도 지표 자리를 유지하고 있다.'
aliases:
  - Net Promoter Score
  - NPS Score
  - Transactional NPS
  - Relational NPS
relationships:
  - type: related
    targetTerm: Review & UGC
  - type: related
    targetTerm: RFM Segmentation
  - type: related
    targetTerm: Single Customer View
  - type: related
    targetTerm: Loyalty Tier Status
  - type: related
    targetTerm: Customer Profile
distinctions:
  - targetTerm: Review & UGC
    explanation: Review & UGC (User-Generated Content) is publicly posted qualitative and star-rating feedback on platforms like TripAdvisor or Google; NPS is a privately surveyed quantitative loyalty score collected by the company directly from customers and used for internal performance measurement and benchmarking rather than public display.
    explanation_ko: 'Review & UGC(사용자 생성 콘텐츠)는 트립어드바이저나 구글 같은 플랫폼에 공개적으로 게시된 정성적 및 별점 피드백이고, NPS는 기업이 고객으로부터 직접 수집하는 비공개 정량적 충성도 점수로, 공개 표시보다 내부 성과 측정과 벤치마킹에 사용된다.'
  - targetTerm: RFM Segmentation
    explanation: RFM Segmentation groups customers by Recency, Frequency, and Monetary value of past transactions — backward-looking behavioral data; NPS captures the forward-looking likelihood to recommend, making it a predictive attitudinal metric rather than a historical transactional one.
    explanation_ko: 'RFM 세분화는 과거 거래의 최근성(Recency)·빈도(Frequency)·금액(Monetary) 기준으로 고객을 묶는 후방 지향적 행동 데이터이고, NPS는 미래 지향적 추천 의향을 포착하는 지표로, 과거 거래 기반 지표가 아닌 예측적 태도 지표다.'
sources:
  - name: '"The One Number You Need to Grow"'
    org: Harvard Business Review / Bain & Company
    version: December 2003
    section: ''
    url: https://hbr.org/2003/12/the-one-number-you-need-to-grow
    tier: secondary
  - name: Net Promoter System — Bain & Company
    org: Bain & Company
    version: ''
    section: ''
    url: https://www.bain.com/consulting-services/customer-strategy-and-marketing/nps-loyalty-forum/
    tier: secondary
  - name: IATA Global Passenger Survey 2023
    org: IATA
    version: '2023'
    section: ''
    url: https://www.iata.org/en/publications/store/global-passenger-survey/
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="20" r="12"/><path d="M18 24s2 4 6 4 6-4 6-4"/><circle cx="19.5" cy="18" r="1.5" fill="currentColor"/><circle cx="28.5" cy="18" r="1.5" fill="currentColor"/><path d="M24 32v8M18 38l6-4 6 4"/></svg>
---

> Net Promoter Score (NPS) is a customer loyalty metric derived from a single survey question — "How likely are you to recommend us to a friend or colleague?" on a 0–10 scale — that classifies respondents as Promoters (9–10), Passives (7–8), or Detractors (0–6) and calculates the score as the percentage of Promoters minus the percentage of Detractors, yielding a value from −100 to +100. Introduced in 2003, NPS is widely adopted across the travel industry by airlines, hotels, cruise lines, OTAs, and tour operators as a proxy for growth potential and brand loyalty.

NPS was introduced by Fred Reichheld, Bain & Company, and Satmetrix in a December 2003 Harvard Business Review article ("The One Number You Need to Grow"). The methodology posits that Promoters drive organic growth through referrals and repeat business, while Detractors create negative word-of-mouth. In travel, NPS is measured at two levels: Relational NPS (periodic brand-level surveys) and Transactional NPS (measured immediately after a specific touchpoint such as a flight, hotel stay, or shore excursion). Airlines such as Delta and Lufthansa report NPS as a key performance indicator; IATA uses NPS as one measure in its Global Passenger Survey. Hotel brands anchor NPS targets in franchise standards and management contracts, and cruise lines deploy post-cruise surveys to capture turnaround-day NPS. NPS benchmarks vary significantly by travel segment and culture, so raw NPS numbers should be interpreted within a competitive set rather than as absolute good/bad thresholds. NPS has been supplemented or critiqued by alternative metrics such as Customer Effort Score (CES) and Customer Satisfaction Score (CSAT), but it remains the travel industry's most-cited single-number loyalty measure.

**한국어 / Korean** — **순고객추천지수(NPS)** — 순고객추천지수(NPS, Net Promoter Score)는 "친구나 동료에게 우리를 추천할 가능성이 얼마나 됩니까?"라는 단일 설문 문항(0~10점 척도)에서 도출하는 고객 충성도 지표다. 응답자를 추천자(Promoter, 9~10점)·중립자(Passive, 7~8점)·비방자(Detractor, 0~6점)로 분류하고, 추천자 비율에서 비방자 비율을 빼 −100~+100 범위의 점수를 산출한다. 2003년 도입된 NPS는 항공사·호텔·크루즈 선사·OTA·투어 운영사 등 여행 산업 전반에서 성장 잠재력과 브랜드 충성도의 대용 지표로 광범위하게 채택되고 있다.

NPS는 Fred Reichheld, 베인앤드컴퍼니(Bain & Company), Satmetrix가 2003년 12월 하버드 비즈니스 리뷰 기사("The One Number You Need to Grow")에서 소개했다. 이 방법론은 추천자(Promoter)가 추천과 재구매를 통해 유기적 성장을 이끌고, 비방자(Detractor)는 부정적 구전을 유발한다고 본다. 여행 산업에서 NPS는 두 수준에서 측정된다. 관계형 NPS(정기적 브랜드 수준 설문)와 거래형 NPS(항공편·호텔 투숙·기항지 투어 등 특정 접점 직후 측정)다. 델타·루프트한자 등 항공사는 NPS를 핵심 성과 지표(KPI)로 보고하며, IATA는 글로벌 여객 설문(Global Passenger Survey)에서 NPS를 주요 지표 중 하나로 활용한다. 호텔 브랜드는 프랜차이즈 기준·운영 계약에 NPS 목표치를 명시하고, 크루즈 선사는 출항일(turnaround day) NPS를 파악하기 위해 크루즈 종료 후 설문을 실시한다. NPS 벤치마크는 여행 세분 시장과 문화에 따라 큰 차이가 있으므로, 절댓값보다 경쟁 업체군(competitive set) 내에서 해석해야 한다. NPS는 고객 노력 점수(CES), 고객 만족도(CSAT) 등 대안 지표로 보완·비판받기도 하지만, 여행 산업에서 가장 많이 인용되는 단일 충성도 지표 자리를 유지하고 있다.

**Aliases:** `Net Promoter Score`, `NPS Score`, `Transactional NPS`, `Relational NPS`

# Related
- [Review & UGC](/tours/tour-dist/review-ugc.md) — related
- [RFM Segmentation](/common/customer/rfm-segmentation.md) — related
- [Single Customer View](/common/customer/single-customer-view.md) — related
- [Loyalty Tier Status](/common/customer/loyalty-tier-status.md) — related
- [Customer Profile](/common/customer/customer-profile.md) — related

# Distinctions
- **Net Promoter Score (NPS)** vs [Review & UGC](/tours/tour-dist/review-ugc.md) — Review & UGC (User-Generated Content) is publicly posted qualitative and star-rating feedback on platforms like TripAdvisor or Google; NPS is a privately surveyed quantitative loyalty score collected by the company directly from customers and used for internal performance measurement and benchmarking rather than public display.
- **Net Promoter Score (NPS)** vs [RFM Segmentation](/common/customer/rfm-segmentation.md) — RFM Segmentation groups customers by Recency, Frequency, and Monetary value of past transactions — backward-looking behavioral data; NPS captures the forward-looking likelihood to recommend, making it a predictive attitudinal metric rather than a historical transactional one.

# Citations
[1] [Harvard Business Review / Bain & Company — "The One Number You Need to Grow" — December 2003](https://hbr.org/2003/12/the-one-number-you-need-to-grow)
[2] [Bain & Company — Net Promoter System — Bain & Company](https://www.bain.com/consulting-services/customer-strategy-and-marketing/nps-loyalty-forum/)
[3] [IATA — IATA Global Passenger Survey 2023 — 2023](https://www.iata.org/en/publications/store/global-passenger-survey/)
