const profile = {
  contacts: [
    { label: "GitHub", text: "github.com/ryemso", href: "https://github.com/ryemso" },
    { label: "LinkedIn", text: "linkedin.com/in/동현-김-898ba4348", href: "https://www.linkedin.com/in/%EB%8F%99%ED%98%84-%EA%B9%80-898ba4348" },
    { label: "Email", text: "qt0177@gmail.com", href: "mailto:qt0177@gmail.com" },
    { label: "The Liquidation of Penny", text: "Play Live Game", href: "https://ryemso.github.io/The-Liquidation-of-Penny/" }
  ],

  versions: {
    analyst: {
      label: "PRODUCT DATA ANALYST",
      title: "사용자 행동 데이터를 구조화하고, 지표로 서비스 문제를 찾는 데이터 분석가",
      desc: "실제 서비스 로그를 MongoDB·Python으로 분석하고, Amplitude의 Retention/Cohort와 추천 노출 지표를 통해 제품·운영 의사결정을 지원했습니다.",
      theme: "analyst",
      lang: "ko",
      heroStack: ["SQL", "Python", "MongoDB", "Amplitude", "Tableau"]
    },
    strategy: {
      label: "BUSINESS / GROWTH ANALYTICS",
      title: "고객·운영 데이터를 실행 우선순위로 연결하는 분석가",
      desc: "사용자 행동, 수요·공급, 전환과 운영 지표를 비교해 비즈니스 문제를 구조화하고 다음 Action을 제안합니다.",
      theme: "strategy",
      lang: "ko",
      heroStack: ["SQL", "Python", "Tableau", "GA4", "Amplitude"]
    },
    hynix: {
      label: "SK HYNIX · AI HACKATHON",
      title: "문제를 정의하고, AI와 모델을 도구로 사용하며, 실패를 검증해 다시 개선하는 문제 해결형 분석가",
      desc: "예측·분류·프로토타이핑 프로젝트에서 목표와 평가 기준을 먼저 정하고, AI와 모델의 제안을 직접 검증하며 반복적으로 결과물을 개선해 왔습니다.",
      theme: "hynix",
      lang: "ko",
      heroStack: ["Problem Definition", "AI Collaboration", "Python", "ML/DL", "Validation"]
    }
  },

  mainProjects: {
    analyst: {
      eyebrow: "DARE · DATA ANALYSIS INTERNSHIP",
      title: "실제 서비스 사용자 행동 로그 분석",
      intro: "MongoDB의 사용자·방문·노출·추천·결제·초대 로그를 직접 확인해 분석 기준을 정의하고, 잘못된 데이터 원천을 검증·수정하며 서비스 지표를 산출했습니다.",
      resultLabel: "ROLE",
      resultValue: "Raw Logs → Metric Definition → Validation → Decision Support",
      tags: ["MongoDB Aggregation", "Python", "Amplitude", "Product Metrics", "Data Validation"],
      href: "https://github.com/ryemso/Ryemso/blob/main/case-studies/product-analytics-internship/README.md",
      linkLabel: "View Case Study",
      flow: [
        ["01 · Define", "여러 활동 로그를 비교해 기간·이벤트·Unique User 기준을 먼저 고정했습니다."],
        ["02 · Validate", "운영 화면과 맞지 않는 지표를 발견하고 원천 데이터의 의미와 필드를 다시 검증했습니다."],
        ["03 · Measure", "Active, 프로필 완성도, 초대, 결제·재결제, Like/Chat Request 등 사용자 단위 지표를 정의했습니다."],
        ["04 · Diagnose", "추천 노출 편중과 후보군 커버리지를 사용자 단위로 분석해 서비스 이슈를 점검했습니다."],
        ["05 · Operate", "Amplitude UI 집계와 맞지 않는 지표는 MongoDB→Python 기반 별도 리포팅 구조를 검토했습니다."]
      ]
    },
    strategy: {
      eyebrow: "OLIST · BUSINESS ANALYTICS",
      title: "데이터 구조 검증에서 Seller·Retention·Delivery 전략까지",
      intro: "주문·결제·고객·상품·리뷰·판매자 데이터를 결합하면서 분석 단위와 join 중복을 먼저 검증하고, Seller 확보·고객 유지·배송 경험이라는 세 가지 비즈니스 질문으로 확장했습니다.",
      resultLabel: "OUTPUT",
      resultValue: "Data Validation → Business Insight",
      tags: ["Python", "Pandas", "Tableau", "E-commerce", "Statistics"],
      links: [
        ["Repository", "https://github.com/ryemso/olist-ecommerce-analytics"],
        ["Notebook", "https://github.com/ryemso/olist-ecommerce-analytics/blob/main/notebooks/01_olist_analysis.ipynb"],
        ["Pipeline", "https://github.com/ryemso/olist-ecommerce-analytics/blob/main/src/preprocessing.py"]
      ],
      flow: [
        ["01 · Problem", "Marketplace 성장 관점에서 Seller 확보, 고객 유지, 배송 운영 문제를 각각 정의했습니다."],
        ["02 · Validate", "order item과 payment의 다중 행 때문에 생길 수 있는 n:n merge 증식을 확인하고 분석 단위를 다시 정리했습니다."],
        ["03 · Seller", "카테고리 주문 비중, Seller-주문 관계, 경쟁도와 성장 카테고리를 비교해 모집 후보를 탐색했습니다."],
        ["04 · Customer", "재구매 흐름과 Review Score를 비교하고 배송기간과 만족도의 관계를 검토했습니다."],
        ["05 · Action", "관측 데이터의 상관·회귀 결과를 인과효과로 과장하지 않고 Seller·운영 개선의 우선순위로 정리했습니다."]
      ]
    },
    advanced: {
      eyebrow: "DARE · DATA ANALYSIS INTERNSHIP",
      title: "Product Analytics with Real User Behavior Logs",
      intro: "Inspected MongoDB collections, defined metric logic, validated data sources, and analyzed activity, referrals, recommendation exposure, payments, and retention/cohort behavior.",
      resultLabel: "ROLE",
      resultValue: "Raw Logs → Metric Definition → Validation → Decision Support",
      tags: ["MongoDB Aggregation", "Python", "Amplitude", "Product Metrics", "Data Validation"],
      href: "https://github.com/ryemso/Ryemso/blob/main/case-studies/product-analytics-internship/README.md",
      linkLabel: "View Case Study",
      flow: [
        ["01 · Define", "Compared activity logs and fixed a consistent period, event, and unique-user basis."],
        ["02 · Validate", "Detected an implausible metric and rechecked the source semantics against operational context."],
        ["03 · Measure", "Defined profile, referral, payment, and recommendation metrics at the user level."],
        ["04 · Diagnose", "Reviewed exposure concentration and candidate-pool coverage without exposing internal operational figures."],
        ["05 · Operate", "Reviewed a MongoDB-to-Python reporting workflow for metrics that did not map cleanly to dashboard aggregation."]
      ]
    },
    hynix: {
      eyebrow: "SK HYNIX AI HACKATHON · CORE CASE",
      title: "기상 데이터 기반 시간대별 열수요 예측",
      intro: "단순히 복잡한 모델을 적용하기보다 예측 오차가 발생하는 구조를 가설로 세우고, LSTM → BiLSTM/Attention → CNN-BiLSTM 계열로 실험을 반복하며 동일한 검증 흐름에서 구조별 차이를 확인했습니다.",
      resultLabel: "VALIDATION",
      resultValue: "최종 검증 RMSE 17.2",
      tags: ["Problem Definition", "Time Series", "CNN-BiLSTM", "Experiment Design", "Validation"],
      href: "https://github.com/ryemso/heat-demand-forecasting",
      linkLabel: "View GitHub",
      flow: [
        ["01 · Problem", "시간·지점별 기상정보와 지역난방 수요의 비선형 관계를 모델링해 시간대별 예측 오차를 줄이는 문제로 정의했습니다."],
        ["02 · Baseline", "LSTM 계열 모델을 기준선으로 두고 동일한 전처리·분할·RMSE 기준에서 성능을 확인했습니다."],
        ["03 · Hypothesis", "순환구조만으로는 급격한 단기 수요 변화 포착이 부족할 수 있다는 가설을 세우고 구조를 변경했습니다."],
        ["04 · Iterate", "BiLSTM/Attention과 CNN-BiLSTM 계열을 비교하며 실패 원인과 개선 효과를 반복 검증했습니다."],
        ["05 · Verify", "공모전 최종 검증 단계에서 21.7과 17.2의 검증 수치를 확인했고, 최종 결과로 RMSE 17.2를 확보했습니다."]
      ]
    }
  },

  dareEvidence: {
    ko: {
      metrics: [
        { label: "Active User", value: "DEFINE", note: "기간·이벤트·Unique 기준 고정" },
        { label: "Metric Source", value: "VALIDATE", note: "비정상 값은 원천까지 재검증" },
        { label: "Referral / Payment", value: "MEASURE", note: "사용자 단위 분자·분모 정의" },
        { label: "Recommendation", value: "DIAGNOSE", note: "노출 편중·후보군 커버리지 점검" }
      ],
      validation: {
        eyebrow: "DATA VALIDATION",
        title: "직관적으로 이상한 숫자를 그대로 쓰지 않았습니다.",
        before: "Wrong source",
        after: "Verified source",
        unit: "",
        text: "운영 화면과 맞지 않는 지표가 나오면 값을 설명으로 합리화하지 않고, 사용한 로그의 의미와 프로필 필드를 다시 확인해 원천을 수정한 뒤 재계산했습니다."
      },
      referral: {
        eyebrow: "PRODUCT METRIC",
        title: "분자·분모부터 다시 정의",
        text: "초대·결제·활성 지표는 이벤트 건수가 아니라 Unique User와 기간 기준을 먼저 고정했습니다. 동일한 이름의 지표라도 분석 목적에 따라 분모가 달라질 수 있어 정의를 문서화했습니다."
      },
      recommendation: {
        eyebrow: "RECOMMENDATION ANALYTICS",
        title: "노출 편중과 추천 커버리지 점검",
        stats: [
          { value: "Exposure", label: "사용자 단위 노출 집계" },
          { value: "Coverage", label: "후보군 소진·커버리지" },
          { value: "Pattern", label: "특성과 노출의 관계" }
        ],
        text: "추천 로그를 피노출 사용자 단위로 재구성하고, 특정 사용자군에 노출이 집중되는지와 실제 가용 후보군이 충분한지를 함께 점검했습니다. 공개 포트폴리오에는 내부 운영 수치를 노출하지 않습니다."
      },
      query: {
        eyebrow: "MONGODB / DATA WORK",
        title: "실제로 사용한 데이터 작업",
        items: [
          ["Source Discovery", "필요한 식별자가 없는 데이터 원천을 그대로 쓰지 않고 결제·행동 분석에 적합한 원천을 다시 찾았습니다."],
          ["Join & Aggregation", "$lookup, $group, $match, $project, $map, $dateTrunc, $unwind를 활용해 사용자 단위 분석 데이터를 구성했습니다."],
          ["User-level Metrics", "활성, 결제·재결제, 초대, 추천 반응처럼 중복 이벤트의 영향을 받는 지표를 Unique User 기준으로 계산했습니다."],
          ["Dashboard / Reporting", "제품 분석 도구의 기본 aggregation과 정의가 맞지 않는 지표는 MongoDB→Python/Pandas 계산 구조를 검토했습니다."]
        ]
      },
      amplitude: {
        eyebrow: "AMPLITUDE",
        title: "Retention / Cohort는 제품 분석 도구에서 검토",
        text: "Amplitude의 Cohort, Rolling Window, Segmentation을 사용해 재방문과 사용자군 행동을 확인했습니다. UI 집계가 원하는 정의와 맞지 않을 때는 raw log 계산과 비교했습니다."
      }
    },
    en: {
      metrics: [
        { label: "Active User", value: "DEFINE", note: "Fix period, event, and unique-user basis" },
        { label: "Metric Source", value: "VALIDATE", note: "Trace implausible values back to source" },
        { label: "Referral / Payment", value: "MEASURE", note: "Define numerator and denominator" },
        { label: "Recommendation", value: "DIAGNOSE", note: "Inspect concentration and coverage" }
      ],
      validation: {
        eyebrow: "DATA VALIDATION",
        title: "I did not keep an implausible metric just because the query ran.",
        before: "Wrong source",
        after: "Verified source",
        unit: "",
        text: "When a metric did not match operational context, I rechecked the meaning of the source logs and profile fields, corrected the source, and recalculated instead of rationalizing the number."
      },
      referral: {
        eyebrow: "PRODUCT METRIC",
        title: "Define the numerator and denominator first",
        text: "For referral, payment, and activity metrics, I fixed the time window and unique-user basis before calculating rates. The metric definition was documented because the denominator can change with the analytical purpose."
      },
      recommendation: {
        eyebrow: "RECOMMENDATION ANALYTICS",
        title: "Exposure Concentration & Recommendation Coverage",
        stats: [
          { value: "Exposure", label: "user-level aggregation" },
          { value: "Coverage", label: "candidate-pool runway" },
          { value: "Pattern", label: "attribute vs. exposure" }
        ],
        text: "Reconstructed recommendation logs around exposed users and inspected concentration, candidate-pool coverage, and descriptive exposure patterns. Internal operational figures are intentionally omitted from the public portfolio."
      },
      query: {
        eyebrow: "MONGODB / DATA WORK",
        title: "What I actually did with the data",
        items: [
          ["Source Discovery", "When a source lacked the identifiers needed for analysis, I traced the appropriate payment or behavior source instead of forcing the join."],
          ["Join & Aggregation", "Used $lookup, $group, $match, $project, $map, $dateTrunc, and $unwind to build user-level analytical datasets."],
          ["User-level Metrics", "Calculated activity, payment, repeat-payment, referral, and recommendation-response metrics on a unique-user basis."],
          ["Dashboard / Reporting", "Reviewed MongoDB-to-Python/Pandas calculations for metrics that did not map cleanly to product-analytics UI aggregation."]
        ]
      },
      amplitude: {
        eyebrow: "AMPLITUDE",
        title: "Retention and cohort analysis in a product analytics tool",
        text: "Used cohort, rolling-window, and segmentation views to inspect revisit behavior, and compared them with raw-log calculations when the UI aggregation did not match the intended definition."
      }
    }
  },

  skills: {
    analyst: [
      { name: "SQL", detail: "JOIN · Subquery · CTE/WITH · Window Function", evidence: "분석 데이터셋 구성과 지표 집계" },
      { name: "MongoDB", detail: "Aggregation Pipeline · $lookup · $group · $dateTrunc", evidence: "실제 서비스 행동·결제·추천 로그 분석" },
      { name: "Product Analytics", detail: "Amplitude · Retention · Cohort · AARRR", evidence: "재방문·사용자군·서비스 지표 분석" },
      { name: "Python", detail: "Pandas · Scikit-learn · 분석 자동화", evidence: "전처리·리포팅·고급 분석" },
      { name: "BI", detail: "Tableau · Excel · GA4", evidence: "시각화·보고서·마케팅/제품 분석" },
      { name: "Advanced Analysis", detail: "Classification · Forecasting · ML/DL", evidence: "필요할 때 확장 가능한 보조 분석 역량" }
    ],
    strategy: [
      { name: "SQL", detail: "JOIN · CTE · Window Function", evidence: "지표 집계와 E-commerce 분석" },
      { name: "Business Analytics", detail: "Demand · Conversion · Segmentation", evidence: "수요·운영·고객 문제 분석" },
      { name: "Python", detail: "Pandas · Scikit-learn", evidence: "정량 검증과 자동화" },
      { name: "BI", detail: "Tableau · Excel · GA4", evidence: "의사결정용 시각화와 보고" },
      { name: "Product Data", detail: "MongoDB · Amplitude", evidence: "사용자 행동 로그와 Retention/Cohort" },
      { name: "Advanced Analysis", detail: "Classification · Forecasting", evidence: "리스크·수요 예측 검증" }
    ],
    advanced: [
      { name: "SQL", detail: "JOIN · Subquery · CTE/WITH · Window Functions", evidence: "Analytical datasets and metric aggregation" },
      { name: "MongoDB", detail: "Aggregation Pipeline · $lookup · $group · $dateTrunc", evidence: "Real service behavior, payment, and recommendation logs" },
      { name: "Product Analytics", detail: "Amplitude · Retention · Cohort · AARRR", evidence: "Revisit, segmentation, and product metrics" },
      { name: "Python", detail: "Pandas · Scikit-learn · Automation", evidence: "Preprocessing, reporting, advanced analysis" },
      { name: "BI", detail: "Tableau · Excel · GA4", evidence: "Visualization and reporting" },
      { name: "Advanced Analysis", detail: "Classification · Forecasting · ML/DL", evidence: "Supporting analytical capability" }
    ],
    hynix: [
      { name: "Problem Definition", detail: "Goal · Constraint · Metric · Acceptance Criteria", evidence: "모델 선택보다 해결할 문제와 성공 기준을 먼저 정의" },
      { name: "AI Collaboration", detail: "Decompose · Delegate · Review · Iterate", evidence: "AI의 초안을 그대로 채택하지 않고 작업을 나눠 요청하고 결과를 재검증" },
      { name: "Python / Data", detail: "Pandas · Scikit-learn · TensorFlow", evidence: "전처리·모델링·평가·실험 자동화" },
      { name: "ML / DL", detail: "Classification · Forecasting · Ensemble · CNN/LSTM", evidence: "문제 구조에 따라 모델과 평가 지표를 비교" },
      { name: "Validation", detail: "Leakage Check · Error Analysis · Re-test", evidence: "동일 검증 조건에서 실패→수정→재검증을 반복" },
      { name: "Build", detail: "GitHub · Web Prototype · AI-assisted Development", evidence: "분석뿐 아니라 실제 작동하는 프로토타입까지 구현" }
    ]
  },

  internships: {
    ko: [
      {
        company: "데어",
        role: "데이터 분석 인턴",
        period: "2025.09 — 2025.10",
        points: [
          "MongoDB 컬렉션 구조를 직접 검증하고 사용자 행동·결제·초대·추천 로그 기반 지표를 산출했습니다.",
          "잘못된 데이터 원천과 지표 정의를 재검증하고 Active·친구 초대율·추천 노출·Runway 등 서비스 지표를 정리했습니다.",
          "Amplitude에서 Retention·Cohort를 확인하고, 상시 대시보드가 어려운 지표는 Python 자동 리포트 구조를 검토했습니다."
        ],
        tags: ["MongoDB", "Product Analytics", "Amplitude", "Python"]
      },
      {
        company: "잘큼",
        role: "데이터 분석 인턴",
        period: "2024.09 — 2024.11",
        points: [
          "지점별 구매 데이터를 전처리하고 수요 집중일 분석을 지원했습니다.",
          "분석 보고서 자동화와 인구통계 기반 지역 수요 조사를 수행했습니다."
        ],
        tags: ["Data Preprocessing", "Reporting", "Demand Analysis"]
      }
    ],
    en: [
      {
        company: "DARE",
        role: "Data Analysis Intern",
        period: "Sep 2025 — Oct 2025",
        points: [
          "Inspected MongoDB collection structures and calculated product metrics from behavior, payment, referral, and recommendation logs.",
          "Revalidated incorrect data sources and metric definitions and analyzed active users, referral rate, recommendation exposure, and runway.",
          "Reviewed retention/cohort behavior in Amplitude and explored Python-based automated reporting for custom metrics."
        ],
        tags: ["MongoDB", "Product Analytics", "Amplitude", "Python"]
      },
      {
        company: "Jalkum",
        role: "Data Analysis Intern",
        period: "Sep 2024 — Nov 2024",
        points: [
          "Preprocessed branch-level purchase data and supported peak-demand analysis.",
          "Automated analysis reports and conducted regional demand research using demographic data."
        ],
        tags: ["Data Preprocessing", "Reporting", "Demand Analysis"]
      }
    ]
  },

  projects: [
    {
      koTitle: "Olist E-commerce Analytics",
      enTitle: "Olist E-commerce Analytics",
      koDesc: "주문·결제·고객·상품·리뷰 데이터를 결합하며 n:n join 중복을 검증하고, Seller 확보·고객 유지·배송 경험을 분석했습니다.",
      enDesc: "Validated n:n join duplication across order and payment data, then analyzed seller acquisition, customer retention, and delivery experience.",
      resultKo: "Data Validation → Business Insight",
      resultEn: "Data Validation → Business Insight",
      tags: ["Python", "Pandas", "Tableau", "E-commerce"],
      links: [
        ["Repository", "https://github.com/ryemso/olist-ecommerce-analytics"],
        ["Notebook", "https://github.com/ryemso/olist-ecommerce-analytics/blob/main/notebooks/01_olist_analysis.ipynb"],
        ["Pipeline", "https://github.com/ryemso/olist-ecommerce-analytics/blob/main/src/preprocessing.py"]
      ],
      hynix: true
    },
    {
      koTitle: "50세 이상 인지장애 경험 여부 예측",
      enTitle: "Cognitive Impairment Experience Prediction",
      koDesc: "False Negative 비용을 고려해 Recall 중심으로 모델을 비교하고 임계값 조정으로 탐지 성능을 개선했습니다.",
      enDesc: "Prioritized recall because of false-negative cost and improved detection through model comparison and threshold adjustment.",
      resultKo: "Recall 0.72 → 0.78",
      resultEn: "Recall 0.72 → 0.78",
      tags: ["Python", "Classification", "Threshold"],
      href: "https://github.com/ryemso/cognitive-impairment-prediction",
      linkLabel: "GitHub",
      hynix: true
    },
    {
      koTitle: "열수요 예측",
      enTitle: "Heat Demand Forecasting",
      koDesc: "기상 데이터와 열수요를 결합해 시계열 모델을 비교하고 예측 성능을 개선했습니다.",
      enDesc: "Combined weather and heat-demand data and compared time-series models.",
      resultKo: "검증 RMSE 17.2",
      resultEn: "Validation RMSE 17.2",
      tags: ["Python", "LSTM", "Time Series"],
      href: "https://github.com/ryemso/heat-demand-forecasting",
      linkLabel: "GitHub"
    },
    {
      koTitle: "한우 등급 예측",
      enTitle: "Hanwoo Grade Prediction",
      koDesc: "개체 정보·도축 성적·혈통 관계·지역별 기상 데이터를 통합하고, 단순 피처 추가보다 등급 결정 구조를 표현하는 관점에서 XGBoost·RealMLP·HanwooFormer를 비교했습니다.",
      enDesc: "Integrated individual, slaughter, pedigree, and regional weather data and compared XGBoost, RealMLP, and HanwooFormer from a domain-structure perspective.",
      resultKo: "3개 모델 비교·앙상블",
      resultEn: "3-model comparison & ensemble",
      tags: ["Python", "Classification", "Feature Engineering", "Ensemble"],
      hynix: true
    },
    {
      koTitle: "LendingClub Credit Risk Modeling",
      enTitle: "LendingClub Credit Risk Modeling",
      koDesc: "불균형 대출 분류 실험을 다시 검토해 초기 target leakage를 명시적으로 분리하고, train-only scaling·SMOTE·모델 비교 흐름으로 공개 코드를 재구성했습니다.",
      enDesc: "Revisited imbalanced credit-risk experiments, documented the initial target leakage, and rebuilt a reviewable train-only scaling, SMOTE, and model-comparison workflow.",
      resultKo: "Leakage-aware · Imbalanced Classification",
      resultEn: "Leakage-aware · Imbalanced Classification",
      tags: ["Python", "Imbalanced-learn", "XGBoost", "LightGBM"],
      links: [
        ["Repository", "https://github.com/ryemso/lendingclub-credit-risk"],
        ["Notebook", "https://github.com/ryemso/lendingclub-credit-risk/blob/main/notebooks/01_lendingclub_leakage_aware_experiments.ipynb"],
        ["Pipeline", "https://github.com/ryemso/lendingclub-credit-risk/blob/main/src/modeling_pipeline.py"]
      ]
    },
    {
      koTitle: "The Liquidation of Penny",
      enTitle: "The Liquidation of Penny",
      koDesc: "금융·시장 개념을 전투·탐험·보상 시스템으로 구현한 웹 액션 로그라이트입니다. 이벤트 로깅, run 단위 플레이 분석, 자동 회귀 테스트까지 함께 설계했습니다.",
      enDesc: "Built a browser action roguelite that translates finance concepts into combat, exploration, and rewards, with event logging, run-level analytics, and automated regression tests.",
      resultKo: "Playable Web Prototype + Analytics",
      resultEn: "Playable Web Prototype + Analytics",
      tags: ["JavaScript", "Game Systems", "Event Logging", "Analytics"],
      links: [
        ["Repository", "https://github.com/ryemso/The-Liquidation-of-Penny"],
        ["Play", "https://ryemso.github.io/The-Liquidation-of-Penny/"]
      ],
      hynix: true
    }
  ],

  training: {
    ko: [
      ["스파르타코딩", "내일배움캠프 데이터 6기", "2025.02 — 2025.07", "Python · SQL · Tableau · ML/DL"],
      ["패스트캠프", "데이터 분석 및 마케팅", "2023.08 — 2023.11", "Amplitude · GA4 · AARRR · A/B Test"],
      ["Codeit", "Programming & Data Science Track", "2021.03 — 2021.05", "Python · JavaScript · DataFrame · Visualization"]
    ],
    en: [
      ["Sparta Coding Club", "Data Cohort 6", "Feb 2025 — Jul 2025", "Python · SQL · Tableau · ML/DL"],
      ["Fastcampus", "Data Analysis & Marketing", "Aug 2023 — Nov 2023", "Amplitude · GA4 · AARRR · A/B Test"],
      ["Codeit", "Programming & Data Science Track", "Mar 2021 — May 2021", "Python · JavaScript · DataFrame · Visualization"]
    ]
  }
};

function currentVersion() {
  const params = new URLSearchParams(location.search);
  const requested = params.get("ver");
  return profile.versions[requested] ? requested : "analyst";
}

function setVersionInUrl(key) {
  const url = new URL(location.href);
  url.searchParams.set("ver", key);
  history.replaceState({}, "", url);
}

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function sourceLinksMarkup(data, extraClass = "") {
  const links = data.links || (data.href ? [[data.linkLabel || "View Source", data.href]] : []);
  if (!links.length) return "";
  return links.map(([label, href]) =>
    `<a class="project-source-link ${extraClass}" href="${href}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`
  ).join("");
}

function renderVersionTabs(activeKey) {
  const tabs = document.getElementById("versionTabs");
  if (!tabs) return;
  tabs.innerHTML = "";
  Object.entries(profile.versions).forEach(([key, ver]) => {
    if (key === "hynix" && activeKey !== "hynix") return;
    const btn = el("button", `version-tab ${key === activeKey ? "active" : ""}`, ver.label);
    btn.addEventListener("click", () => {
      setVersionInUrl(key);
      render(key);
    });
    tabs.appendChild(btn);
  });
}

function renderHero(key) {
  const ver = profile.versions[key];
  document.getElementById("heroEyebrow").textContent = ver.label;
  document.getElementById("heroTitle").textContent = ver.title;
  document.getElementById("heroDesc").textContent = ver.desc;
  document.getElementById("versionLabel").textContent = ver.lang === "en" ? "Version" : "버전 선택";

  const stack = document.getElementById("heroCoreStack");
  stack.innerHTML = ver.heroStack.map(item => `<span>${item}</span>`).join("");

  document.getElementById("mainProjectBtn").textContent = ver.lang === "en" ? "View Main Case" : "메인 분석 보기";
  document.getElementById("contactBtn").textContent = ver.lang === "en" ? "View Contact" : "연락처 보기";
}

function renderMainProject(key) {
  const data = profile.mainProjects[key];
  document.getElementById("mainProjectType").textContent = data.eyebrow;
  document.getElementById("mainProjectName").textContent = data.title;
  document.getElementById("mainProjectIntro").textContent = data.intro;
  document.getElementById("mainResultLabel").textContent = data.resultLabel;
  document.getElementById("mainResultValue").textContent = data.resultValue;
  const mainSourceLinks = sourceLinksMarkup(data);
  document.getElementById("mainProjectTags").innerHTML =
    data.tags.map(t => `<span class="meta-chip">${t}</span>`).join("") + mainSourceLinks;

  const flow = document.getElementById("mainFlow");
  flow.innerHTML = "";
  data.flow.forEach(([title, desc]) => {
    const item = el("article", "flow-item");
    item.innerHTML = `<h4>${title}</h4><p>${desc}</p>`;
    flow.appendChild(item);
  });
}

function barsMarkup(values) {
  return values.map(([label, value]) => `
    <div class="mini-bar-item">
      <div class="mini-bar-value">${value}%</div>
      <div class="mini-bar-track"><div class="mini-bar-fill" style="height:${Math.max(12, value / 30 * 100)}%"></div></div>
      <div class="mini-bar-label">${label}</div>
    </div>
  `).join("");
}

function renderDareEvidence(lang) {
  const data = profile.dareEvidence[lang];
  const wrap = document.getElementById("caseEvidence");

  const metrics = data.metrics.map(m => `
    <div class="metric-tile">
      <strong>${m.value}</strong>
      <span>${m.label}</span>
      <small>${m.note}</small>
    </div>`).join("");

  const recStats = data.recommendation.stats.map(s => `
    <div class="stat-block"><strong>${s.value}</strong><span>${s.label}</span></div>
  `).join("");

  const queryItems = data.query.items.map(([title, desc]) => `
    <div class="work-item"><strong>${title}</strong><p>${desc}</p></div>
  `).join("");

  wrap.innerHTML = `
    <div class="metric-strip">${metrics}</div>

    <div class="case-grid two-col">
      <article class="case-card validation-card">
        <div class="mini-label">${data.validation.eyebrow}</div>
        <h3>${data.validation.title}</h3>
        <div class="validation-number">
          <span class="before">${data.validation.before}</span>
          <span class="arrow">→</span>
          <span class="after">${data.validation.after}</span>
        </div>
        <p>${data.validation.text}</p>
      </article>

      <article class="case-card">
        <div class="mini-label">${data.referral.eyebrow}</div>
        <h3>${data.referral.title}</h3>
        <p>${data.referral.text}</p>
        <div class="amplitude-tags">
          <span>Unique User</span><span>Period</span><span>Numerator</span><span>Denominator</span>
        </div>
      </article>
    </div>

    <div class="case-grid two-col">
      <article class="case-card">
        <div class="mini-label">${data.recommendation.eyebrow}</div>
        <h3>${data.recommendation.title}</h3>
        <div class="stat-row">${recStats}</div>
        <p>${data.recommendation.text}</p>
      </article>

      <article class="case-card">
        <div class="mini-label">${data.amplitude.eyebrow}</div>
        <h3>${data.amplitude.title}</h3>
        <p>${data.amplitude.text}</p>
        <div class="amplitude-tags">
          <span>Retention</span><span>Cohort</span><span>Rolling Window</span><span>Segmentation</span>
        </div>
      </article>
    </div>

    <article class="case-card work-card">
      <div class="mini-label">${data.query.eyebrow}</div>
      <h3>${data.query.title}</h3>
      <div class="work-grid">${queryItems}</div>
    </article>
  `;
}

function renderStrategyEvidence() {
  const wrap = document.getElementById("caseEvidence");
  wrap.innerHTML = `
    <div class="strategy-evidence">
      <article class="case-card">
        <div class="mini-label">DATA VALIDATION</div>
        <h3>Join 결과가 늘어났다면 먼저 분석 단위를 의심</h3>
        <p>order item과 payment의 다중 행 때문에 주문이 증식할 수 있는 구조를 확인하고, unique order 기준과 payment 집계 방식을 다시 정리했습니다.</p>
      </article>
      <article class="case-card">
        <div class="mini-label">MARKETPLACE ANALYTICS</div>
        <h3>Seller 수만 늘리는 것이 아니라 어떤 카테고리를 볼지 정의</h3>
        <p>주문 비중, Seller-주문 관계, HHI와 성장률을 함께 확인해 핵심 카테고리와 성장 후보를 분리했습니다.</p>
      </article>
      <article class="case-card">
        <div class="mini-label">CUSTOMER / DELIVERY</div>
        <h3>배송 경험과 고객 만족을 함께 분석</h3>
        <p>재구매 흐름, Review Score, 배송기간의 관계를 비교하고 관측 상관을 인과효과로 과장하지 않은 채 운영 개선 방향으로 연결했습니다.</p>
      </article>
    </div>
  `;
}

function renderHynixEvidence() {
  const wrap = document.getElementById("caseEvidence");
  wrap.innerHTML = `
    <div class="metric-strip">
      <div class="metric-tile"><strong>17.2</strong><span>열수요 최종 검증 RMSE</span><small>구조 비교 과정의 검증 수치 21.7 / 17.2</small></div>
      <div class="metric-tile"><strong>Recall 중심</strong><span>인지장애 예측</span><small>False Negative 비용을 반영한 평가 기준</small></div>
      <div class="metric-tile"><strong>3-way</strong><span>한우 등급 예측</span><small>XGBoost · RealMLP · HanwooFormer 비교/앙상블</small></div>
      <div class="metric-tile"><strong>Playable</strong><span>AI-assisted Prototype</span><small>The Liquidation of Penny 실제 구현</small></div>
    </div>

    <div class="case-grid two-col">
      <article class="case-card">
        <div class="mini-label">PROBLEM SOLVING LOOP</div>
        <h3>Define → Hypothesize → Experiment → Verify → Iterate</h3>
        <p>모델을 먼저 고르지 않고 문제와 평가 기준을 정의한 뒤, 실패 결과를 원인 가설로 바꾸고 다음 실험을 설계했습니다. 열수요 프로젝트에서는 LSTM 단독 구조의 한계를 확인한 뒤 BiLSTM/Attention, CNN 결합 구조로 확장했습니다.</p>
        <div class="amplitude-tags">
          <span>Define</span><span>Baseline</span><span>Hypothesis</span><span>Experiment</span><span>Validation</span>
        </div>
      </article>

      <article class="case-card">
        <div class="mini-label">AI COLLABORATION</div>
        <h3>AI의 답을 채택하는 것이 아니라, 작업을 분해하고 결과를 검증합니다.</h3>
        <p>AI를 아이디어·코드 초안·디버깅 보조 도구로 활용하되, 데이터 누수·평가 지표·실행 결과·오류 원인은 직접 확인합니다. 결과가 예상과 다르면 프롬프트를 바꾸는 데서 끝내지 않고 가설과 구현을 수정해 다시 실행합니다.</p>
        <div class="amplitude-tags">
          <span>Decompose</span><span>Delegate</span><span>Review</span><span>Re-test</span><span>Decide</span>
        </div>
      </article>
    </div>

    <div class="case-grid two-col">
      <article class="case-card">
        <div class="mini-label">CASE · COGNITIVE IMPAIRMENT</div>
        <h3>평가 지표 자체를 문제에 맞게 다시 정의</h3>
        <p>불균형 분류에서 Accuracy만 높이는 대신 놓치면 위험한 양성 사례를 고려해 Recall을 우선했습니다. SMOTE·앙상블·임계값 조정을 비교하고 Precision과 Recall의 trade-off를 함께 검토했습니다.</p>
      </article>

      <article class="case-card">
        <div class="mini-label">CASE · HANWOO</div>
        <h3>모델보다 도메인의 결정 구조를 먼저 고민</h3>
        <p>개체 정보·도축 성적·혈통 관계·지역 기상 데이터를 통합하고, 단순 파생변수 추가보다 등급 결정 구조를 어떻게 표현할지에 초점을 맞춰 여러 모델과 앙상블을 비교했습니다.</p>
      </article>
    </div>

    <article class="case-card work-card">
      <div class="mini-label">AI-NATIVE BUILD</div>
      <h3>The Liquidation of Penny · 아이디어를 작동하는 결과물로 전환</h3>
      <div class="work-grid">
        <div class="work-item"><strong>Define</strong><p>금융·주식 개념을 전투·성장·보상 시스템으로 번역해 게임 규칙을 정의했습니다.</p></div>
        <div class="work-item"><strong>Build</strong><p>이동·전투·스테이지·보상 선택·게임 상태를 구현해 실제 플레이 가능한 프로토타입으로 만들었습니다.</p></div>
        <div class="work-item"><strong>Debug</strong><p>기능 단위로 구현하고 오류와 밸런스 문제를 반복 수정했습니다.</p></div>
        <div class="work-item"><strong>Operate</strong><p>GitHub에 작업 이력을 남기며 단계별 기능 확장과 결과물 관리를 이어가고 있습니다.</p></div>
      </div>
    </article>
  `;
}

function renderEvidence(key) {
  const isEnglish = profile.versions[key].lang === "en";
  document.getElementById("caseEvidenceTitle").textContent =
    key === "hynix" ? "AI-Native Problem Solving Evidence"
    : key === "strategy" ? "How the Analysis Became a Decision"
    : isEnglish ? "What I Actually Analyzed" : "실제로 분석한 것";
  document.getElementById("caseEvidenceDesc").textContent =
    key === "hynix"
      ? "AI를 많이 사용했다는 설명보다, 문제를 정의하고 작업을 분해하고 결과를 검증해 다시 개선한 증거를 보여줍니다."
      : key === "strategy"
        ? "결과물을 많이 나열하기보다 실제 비즈니스 질문과 분석 흐름을 보여줍니다."
        : isEnglish
          ? "No original chart images were available, so the verified analysis numbers are visualized directly on the page."
          : "원본 차트 이미지는 없지만, 당시 확정한 지표와 검증 과정을 그대로 웹에서 다시 시각화했습니다.";

  if (key === "strategy") renderStrategyEvidence();
  else if (key === "hynix") renderHynixEvidence();
  else renderDareEvidence(isEnglish ? "en" : "ko");
}

function renderExperience(lang) {
  const wrap = document.getElementById("experienceList");
  wrap.innerHTML = "";
  profile.internships[lang].forEach(item => {
    const card = el("article", "experience-card");
    card.innerHTML = `
      <div class="experience-head">
        <div>
          <div class="mini-label">INTERNSHIP</div>
          <h3>${item.company}</h3>
          <p class="experience-role">${item.role}</p>
        </div>
        <span class="period-chip">${item.period}</span>
      </div>
      <ul class="experience-points">${item.points.map(p => `<li>${p}</li>`).join("")}</ul>
      <div class="project-meta">${item.tags.map(t => `<span class="meta-chip">${t}</span>`).join("")}</div>
    `;
    wrap.appendChild(card);
  });
}

function renderProjects(lang, key) {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  const projects = key === "hynix"
    ? ["한우 등급 예측", "50세 이상 인지장애 경험 여부 예측", "The Liquidation of Penny", "Olist E-commerce Analytics"]
        .map(title => profile.projects.find(p => p.koTitle === title))
        .filter(Boolean)
    : profile.projects;
  projects.forEach(p => {
    const card = el("article", "project-card");
    const title = lang === "en" ? p.enTitle : p.koTitle;
    const desc = lang === "en" ? p.enDesc : p.koDesc;
    const result = lang === "en" ? p.resultEn : p.resultKo;
    card.innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="project-meta">
        <span class="meta-chip result-chip">${result}</span>
        ${p.tags.map(t => `<span class="meta-chip">${t}</span>`).join("")}
      </div>
      <div class="project-links">${sourceLinksMarkup(p, "project-card-link")}</div>
    `;
    grid.appendChild(card);
  });
}

function renderSkills(key) {
  const grid = document.getElementById("strengthGrid");
  grid.innerHTML = "";
  profile.skills[key].forEach(item => {
    const card = el("article", "strength-card skill-summary-card");
    card.innerHTML = `
      <h3>${item.name}</h3>
      <strong>${item.detail}</strong>
      <p>${item.evidence}</p>
    `;
    grid.appendChild(card);
  });
}

function renderTraining(lang) {
  const wrap = document.getElementById("educationList");
  wrap.innerHTML = "";
  profile.training[lang].forEach(([provider, title, period, stack]) => {
    const card = el("article", "training-row");
    card.innerHTML = `
      <div>
        <div class="mini-label">${provider}</div>
        <h3>${title}</h3>
        <p>${stack}</p>
      </div>
      <span class="period-chip">${period}</span>
    `;
    wrap.appendChild(card);
  });
}

function renderContacts(lang) {
  const wrap = document.getElementById("contactList");
  wrap.innerHTML = "";
  profile.contacts.forEach(item => {
    const node = el("a", "contact-link");
    node.href = item.href;
    if (item.href.startsWith("http")) {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }
    const text = lang === "ko" && item.label === "The Liquidation of Penny" ? "게임 플레이" : item.text;
    node.innerHTML = `<strong>${item.label}</strong><span>${text}</span>`;
    wrap.appendChild(node);
  });
}

function renderCopy(key) {
  const en = profile.versions[key].lang === "en";
  const strategy = key === "strategy";
  const hynix = key === "hynix";

  document.getElementById("mainProjectSectionTitle").textContent =
    hynix ? "Core Problem-Solving Case" : strategy ? "Main Business Analytics Case" : en ? "Main Product Analytics Case" : "Main Product Analytics Case";
  document.getElementById("mainProjectSectionDesc").textContent =
    hynix
      ? "모델 이름보다 문제 정의, 가설, 실험, 검증, 개선의 흐름을 먼저 보여줍니다."
      : strategy
        ? "프로젝트 목록보다 실제 비즈니스 질문과 분석 흐름을 먼저 보여줍니다."
        : en
          ? "A real-service case focused on metric definition, data validation, and product decision support."
          : "프로젝트 이름보다 실제 서비스에서 무엇을 정의하고, 검증하고, 분석했는지를 먼저 보여줍니다.";

  document.getElementById("experienceTitle").textContent = en ? "Work Experience" : "Work Experience";
  document.getElementById("experienceDesc").textContent =
    en ? "Hands-on analysis experience with real service and customer data." : "학습 이력보다 실제 데이터로 무엇을 했는지 먼저 배치했습니다.";

  document.getElementById("projectsTitle").textContent = en ? "Selected Projects" : "Selected Projects";
  document.getElementById("projectSectionDesc").textContent =
    hynix ? "분류·예측·비즈니스 분석·프로토타이핑을 통해 문제 정의와 검증 방식의 폭을 보여줍니다."
    : en ? "Supporting projects that show breadth without diluting the main product-analytics identity."
       : "대표 Product Analytics 경험을 중심에 두고, 분석·모델링·구현 역량을 보여주는 프로젝트는 보조 사례로 압축했습니다.";

  document.getElementById("strengthsTitle").textContent = en ? "Skills I Use" : "Skills I Use";
  document.getElementById("strengthDesc").textContent =
    hynix ? "특정 도구 숙련도보다 문제를 쪼개고, AI와 모델을 활용하고, 결과를 검증하는 방식에 초점을 맞췄습니다."
    : en ? "Tools and methods are shown with what they were actually used for."
       : "상급/중상 같은 자기평가 대신 실제로 무엇을 할 수 있는지만 적었습니다.";

  document.getElementById("educationTitle").textContent = en ? "Training" : "Training";
  document.getElementById("educationDesc").textContent =
    en ? "Kept compact so that training does not compete with work evidence."
       : "교육은 경력과 프로젝트보다 앞에 나오지 않도록 최소한으로 줄였습니다.";

  document.getElementById("contactTitle").textContent = "Contact";
  document.getElementById("contactDesc").textContent =
    en ? "GitHub, LinkedIn, email, and the playable game." : "GitHub, LinkedIn, 이메일과 실제 플레이 가능한 게임 링크입니다.";
}

function render(key = currentVersion()) {
  const ver = profile.versions[key];
  const lang = ver.lang;

  document.body.classList.remove("theme-analyst", "theme-strategy", "theme-ai", "theme-hynix");
  if (ver.theme === "analyst") document.body.classList.add("theme-analyst");
  if (ver.theme === "strategy") document.body.classList.add("theme-strategy");
  if (ver.theme === "ai") document.body.classList.add("theme-ai");
  if (ver.theme === "hynix") document.body.classList.add("theme-hynix");

  renderVersionTabs(key);
  renderHero(key);
  renderMainProject(key);
  renderEvidence(key);
  renderExperience(lang);
  renderProjects(lang, key);
  renderSkills(key);
  renderTraining(lang);
  renderContacts(lang);
  renderCopy(key);
}

render();
