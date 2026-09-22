# Kim Donghyun Portfolio

Data / Product Analytics와 AI/ML 프로젝트를 직무별로 보여주는 개인 포트폴리오 사이트입니다. 포트폴리오의 요약 주장과 GitHub의 notebook·pipeline·case study가 바로 연결되도록 evidence-first 구조로 정리했습니다.

## Live

- **Product Data Analyst**  
  https://kimsportpolio.netlify.app/?ver=analyst
- **AI / Machine Learning**  
  https://kimsportpolio.netlify.app/?ver=ai
- **Business / Growth Analytics**  
  https://kimsportpolio.netlify.app/?ver=strategy

## Structure

하나의 사이트에서 URL parameter에 따라 첫 화면과 Main Case를 직무별로 전환합니다.

- `?ver=analyst`  
  DARE 실제 서비스 로그 분석을 중심으로 Product Analytics 경험을 구성
- `?ver=ai`  
  열수요 예측을 Main Case로 두고 ML/DL 실험·검증 과정을 강조
- `?ver=strategy`  
  Olist 분석을 중심으로 Business/Growth Analytics 관점으로 구성

## Main Evidence

### Product Analytics
- [Product Analytics Internship Case Study](https://github.com/ryemso/Ryemso/blob/main/case-studies/product-analytics-internship/README.md) — MongoDB 행동·결제·추천 로그 분석
- Active User / Referral / Exposure / Runway 지표 정의
- Amplitude Retention / Cohort 분석
- 데이터 원천 오류 검증 및 지표 재정의
- [Olist E-commerce Analytics](https://github.com/ryemso/olist-ecommerce-analytics) — Seller 전략 · 고객 유지 · 배송 분석
- [LendingClub Credit Risk](https://github.com/ryemso/lendingclub-credit-risk) — 불균형 분류 · 모델 비교 · SHAP

### AI / ML
- [Heat Demand Forecasting](https://github.com/ryemso/heat-demand-forecasting): BiLSTM / CNN-LSTM / Attention
- [Cognitive Impairment Prediction](https://github.com/ryemso/cognitive-impairment-prediction): Ensemble / Optuna / Threshold Optimization
- Classification / Time-series modeling

### Side Project
- [The Liquidation of Penny](https://ryemso.github.io/The-Liquidation-of-Penny/) — playable web game prototype

## Files

```text
index.html
style.css
script.js
ai.js
README.md
```

## Contact

- GitHub: https://github.com/ryemso
- LinkedIn: https://www.linkedin.com/in/%EB%8F%99%ED%98%84-%EA%B9%80-898ba4348
- Email: qt0177@gmail.com


## Evidence-first Renewal

- Product Analytics: 내부 운영 수치와 collection 이름은 공개하지 않고 지표 정의·검증·분석 흐름 중심으로 재구성
- Olist / LendingClub: Repository · Notebook · Pipeline을 각각 직접 확인할 수 있도록 연결
- Heat Demand: 공개 코드가 실제로 보여주는 Train-only Scaling / Sliding Window 범위와 README 설명을 일치
- The Liquidation of Penny: JavaScript 기반 게임 시스템, 이벤트 로깅, run 단위 분석, 자동 테스트를 현재 저장소 기준으로 반영
- SK hynix 전용 버전은 일반 버전 탭에서 숨기고 `?ver=hynix` 직접 링크로만 접근
