# Kim Donghyun Portfolio

Data / Product Analytics, AI/ML, Forward Deployed Engineer(FDE) 경험을 직무별로 보여주는 개인 포트폴리오 사이트입니다. 포트폴리오의 요약 주장과 GitHub의 notebook·pipeline·case study가 바로 연결되도록 evidence-first 구조로 정리했습니다.

## Live

- **Product Data Analyst**  
  https://ryemso.github.io/Portpolio/?ver=analyst
- **AI / Machine Learning**  
  https://ryemso.github.io/Portpolio/?ver=ai
- **Business / Growth Analytics**  
  https://ryemso.github.io/Portpolio/?ver=strategy
- **FDE / Forward Deployed Engineer**  
  https://ryemso.github.io/Portpolio/?ver=fde
- **FDE 맞춤 이력서 + 자기소개서**  
  https://ryemso.github.io/Portpolio/resume/?view=fde
- **LOTTE AX Challenge · LOTTE Hotel**  
  https://ryemso.github.io/Portpolio/?ver=lotte
- **Mobidays 36th Internship · AI/AX Resume**  
  https://ryemso.github.io/Portpolio/resume/?view=mobidays

## Structure

하나의 사이트에서 URL parameter에 따라 첫 화면과 Main Case를 직무별로 전환합니다.

- `?ver=analyst`  
  DARE 실제 서비스 로그 분석을 중심으로 Product Analytics 경험을 구성
- `?ver=ai`  
  선박 식별 entity matching을 Main Case로 두고 후보 생성·재순위·누수 방지 검증 과정을 강조
- `?ver=strategy`  
  Olist 분석을 중심으로 Business/Growth Analytics 관점으로 구성
- `?ver=fde`  
  My Little Office AI 업무 실행 시스템을 Main Build Case로, Cat Hero·DARE·선박 식별 AI·Olist를 Supporting Implementation Cases로 배치. 고객사 배포 실적과 개인 프로젝트의 코드·테스트 범위를 구분
- `?ver=lotte`  
  롯데호텔의 브랜드·지점별 고객 데이터 통합 및 통합 데이터 기반 맞춤 추천 과제에 맞춰 DARE·Olist·Entity Matching 경험을 연결

## FDE Portfolio · Evidence-backed Implementation

**포지셔닝:** 현장의 문제를 데이터와 AI로 구조화하고 실제 사용 가능한 도구로 구현·검증하는 주니어 FDE 지향

- **[My Little Office](https://github.com/ryemso/my_little_office)** · 로컬 Codex CLI + Python 실행기 + SQLite 작업 상태, 작업 사본, 승인/충돌 검사/백업, 단위 테스트. 일부 Codex 실행은 모의 테스트이며 고객사 상용 배포 실적은 없음
  - [실행 설계](https://github.com/ryemso/my_little_office/blob/main/docs/EXECUTION.md) · [검증 코드](https://github.com/ryemso/my_little_office/blob/main/scripts/tests/test_workspaces.py)
- **[Cat Hero](https://github.com/ryemso/cat_hero_boss_reward)** · OCR 인식 → 사용자 확인·수정 → 보상 기록·분배/정산 → Excel 출력, Supabase·Vite·GitHub Actions
- **[DARE 실무 로그 분석](https://github.com/ryemso/Ryemso/tree/main/case-studies/product-analytics-internship)** · 데이터 원천·연결 키 탐색 및 MongoDB 집계 검증. 분석용 자동 리포트는 검토 단계이며 배포 실적이 아님
- **[Port Problem Solving](https://github.com/ryemso/Ryemso/blob/main/case-studies/port-vessel-matching/README.md)** · 선박 레코드 Entity Matching, 모델 검증·패키징 오류 추적. 공개된 Public 최고 0.9357을 기준으로 설명하며, Private/최종 순위는 공개 자료로 검증되지 않음. 상용 실적 아님
- **[Olist Analytics](https://github.com/ryemso/olist-ecommerce-analytics)** · n:n JOIN 중복·분석 단위 검증, 현업 문제 정의

FDE 웹 버전에서는 **Implemented / Verified in Tests / Not Yet Validated in Customer Production**의 범위를 분명히 합니다. 코드 작성에 AI 도구를 활용한 경우 독립 구현 경험으로 과장하지 않습니다.

## Main Evidence

### Product Analytics
- [Product Analytics Internship Case Study](https://github.com/ryemso/Ryemso/blob/main/case-studies/product-analytics-internship/README.md) — MongoDB 행동·결제·추천 로그 분석
- Active User / Referral / Exposure / Runway 지표 정의
- Amplitude Retention / Cohort 분석
- 데이터 원천 오류 검증 및 지표 재정의
- [Olist E-commerce Analytics](https://github.com/ryemso/olist-ecommerce-analytics) — Seller 전략 · 고객 유지 · 배송 분석
- [LendingClub Credit Risk](https://github.com/ryemso/lendingclub-credit-risk) — 불균형 분류 · 모델 비교 · SHAP

### AI / ML
- [Port Problem Solving · 선박 식별 AI](https://github.com/ryemso/Ryemso/blob/main/case-studies/port-vessel-matching/README.md): Entity Matching · Candidate Retrieval · E5 · Ranking, DACON Public 0.8011 → 0.9357
- [Heat Demand Forecasting](https://github.com/ryemso/heat-demand-forecasting): BiLSTM / CNN-LSTM / Attention, RMSE 21.7 → 17.2
- [Cognitive Impairment Prediction](https://github.com/ryemso/cognitive-impairment-prediction): Ensemble / Optuna / Threshold Optimization, Recall 0.72 → 0.78
- [Hanwoo Grade Prediction](https://github.com/ryemso/Hanwoo_ranke): CatBoost + XGBoost, Public Macro-F1 0.219

### Side Project
- [The Liquidation of Penny](https://ryemso.github.io/The-Liquidation-of-Penny/) — playable web game prototype

## Training

- 내일배움캠프 데이터 6기 · 2025.02–2025.07
- 데이터 분석 및 마케팅 교육 · 2023.08–2023.11
- 코드잇 대학생 코딩캠프 3기 · 2021.03.15–2021.04.13 · 수료

## Files

```text
index.html
style.css
script.js
ai.js
fde.js
README.md
```

## Contact

- GitHub: https://github.com/ryemso
- LinkedIn: https://www.linkedin.com/in/%EB%8F%99%ED%98%84-%EA%B9%80-898ba4348
- Email: qt0177@gmail.com


## Evidence-first Renewal

- Product Analytics: 내부 운영 수치와 collection 이름은 공개하지 않고 지표 정의·검증·분석 흐름 중심으로 재구성
- Olist / LendingClub: Repository · Notebook · Pipeline을 각각 직접 확인할 수 있도록 연결
- Port Problem Solving: 비공개 원본 저장소 대신 공개 가능한 Case Study를 별도 연결하고 최신 Public 0.9357까지 반영
- Heat Demand: AI 메인에서 보조 사례로 이동하고 Train-only Scaling / Sliding Window 범위를 유지
- Hanwoo: 오래된 XGBoost·RealMLP·HanwooFormer 설명을 현재 저장소 기준 CatBoost + XGBoost / Public Macro-F1 0.219로 교정
- The Liquidation of Penny: JavaScript 기반 게임 시스템, 이벤트 로깅, run 단위 분석, 자동 테스트를 현재 저장소 기준으로 반영
- LOTTE AX Challenge 전용 버전은 일반 버전 탭에서 숨기고 `?ver=lotte` 직접 링크로만 접근
