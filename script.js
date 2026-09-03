const profile = {
  contacts: [
    { label: "GitHub", text: "github.com/ryemso", href: "https://github.com/ryemso" },
    { label: "Email", text: "qt0177@gmail.com", href: "mailto:qt0177@gmail.com" },
    { label: "Portfolio PDF", text: "Open PDF Portfolio", href: "https://drive.google.com/file/d/1-jQsoKR6gl0ZuA4ZFbpL9QR9oC906t7P/view?usp=drive_link" },
    { label: "Phone number", text: "82)1065010177", href: "01065010177" }
  ],

  mainProjects: {
    analyst: {
      eyebrow: "실무 대표 분석 · 데어",
      title: "사용자 행동 로그 기반 서비스 분석",
      intro: "MongoDB 기반 사용자 행동 로그를 정규화해 Python 분석 데이터셋을 구축하고, Amplitude의 Retention·Cohort와 추천 노출·후보군 구조를 함께 분석해 서비스 의사결정을 지원했습니다.",
      resultLabel: "핵심 산출",
      resultValue: "행동 로그 → 지표 → 서비스 의사결정",
      tags: ["MongoDB", "Python", "Amplitude", "User Behavior", "Recommendation Analytics"],
      flow: [
        ["Problem", "사용자 이탈·노출·응시 흐름과 추천 후보군의 실제 상태를 한 번에 파악하기 어려운 문제를 분석 대상으로 잡았습니다."],
        ["Data", "MongoDB 행동 로그를 Aggregation Pipeline으로 정규화하고 Python에서 분석 가능한 데이터셋으로 구성했습니다."],
        ["Behavior", "Amplitude에서 Retention·Cohort를 확인하고 사용자군별 재방문과 행동 차이를 비교했습니다."],
        ["Exposure", "피노출 횟수·unique viewer·후보군 규모와 사용자 특성의 관계를 분석해 노출 편중과 후보군 소진 가능성을 점검했습니다."],
        ["Action", "분석 결과를 추천 구조와 운영 판단에 연결하고, 분석에 필요한 로그가 부족한 구간은 추가 수집 요구사항으로 정리했습니다."]
      ]
    },
    strategy: {
      eyebrow: "대표 전략 분석 · Olist",
      title: "배송 병목과 수요·공급 불균형 기반 셀러 유치 전략",
      intro: "주문·배송·판매자·지역 데이터를 결합해 배송 병목과 지역별 수요·공급 불균형을 분석하고, 셀러 유치가 필요한 우선지역과 운영 개선 방향을 제안했습니다.",
      resultLabel: "핵심 산출",
      resultValue: "셀러 유치 우선지역 도출",
      tags: ["SQL", "Tableau", "E-commerce", "Demand-Supply", "Strategy"],
      flow: [
        ["Problem", "배송 지연과 지역별 판매자 분포 차이가 고객 경험과 운영 효율에 어떤 영향을 주는지 확인했습니다."],
        ["Data", "주문·고객·판매자·상품·배송 관련 테이블을 결합해 지역과 주문 흐름을 분석할 수 있는 데이터셋을 구성했습니다."],
        ["Analysis", "배송시간, 주문량, 판매자 분포를 비교해 수요는 높지만 공급이 상대적으로 부족한 지역을 찾았습니다."],
        ["Insight", "배송 병목과 공급 부족이 동시에 나타나는 지역을 셀러 유치 관점의 우선 후보로 정리했습니다."],
        ["Action", "분석 결과를 셀러 확보와 지역 운영 전략의 우선순위 제안으로 연결했습니다."]
      ]
    },
    advanced: {
      eyebrow: "MAIN CASE · DARE INTERNSHIP",
      title: "Service Analytics with User Behavior Logs",
      intro: "Normalized MongoDB-based user behavior logs into Python analysis datasets, reviewed retention and cohort behavior in Amplitude, and analyzed recommendation exposure and candidate-pool structure to support service decisions.",
      resultLabel: "Key Output",
      resultValue: "Behavior Logs → Metrics → Product Decisions",
      tags: ["MongoDB", "Python", "Amplitude", "User Behavior", "Recommendation Analytics"],
      flow: [
        ["Problem", "The team needed clearer visibility into user drop-off, exposure patterns, response behavior, and the effective recommendation candidate pool."],
        ["Data", "Normalized MongoDB behavior logs with aggregation pipelines and built analysis-ready datasets in Python."],
        ["Behavior", "Reviewed retention and cohort behavior in Amplitude and compared revisit and behavioral differences across user groups."],
        ["Exposure", "Analyzed exposure counts, unique viewers, candidate-pool size, and user attributes to inspect concentration and candidate depletion risk."],
        ["Action", "Connected findings to recommendation and operational decisions and documented additional logging requirements where analysis coverage was insufficient."]
      ]
    }
  },

  otherProjects: [
    {
      koTitle: "Olist 셀러 유치 전략 분석",
      enTitle: "Olist Seller Acquisition Strategy",
      koDesc: "배송 병목과 지역별 수요·공급 불균형을 분석해 셀러 유치 우선지역과 운영 개선 방향을 제안했습니다.",
      enDesc: "Analyzed delivery bottlenecks and regional demand-supply imbalance to prioritize seller-acquisition regions and operational actions.",
      resultKo: "셀러 유치 우선지역 도출",
      resultEn: "Prioritized seller-acquisition regions",
      tags: ["SQL", "Tableau", "E-commerce", "Strategy"]
    },
    {
      koTitle: "50세 이상 인지장애 경험 여부 예측",
      enTitle: "Cognitive Impairment Experience Prediction for Adults 50+",
      koDesc: "양성 집단의 False Negative 비용을 고려해 Accuracy보다 Recall을 우선하고, 모델 비교·앙상블·임계값 조정으로 탐지 성능을 개선했습니다.",
      enDesc: "Prioritized positive-class recall over accuracy, then improved detection through model comparison, ensemble methods, and threshold adjustment.",
      resultKo: "Recall 0.72 → 0.78",
      resultEn: "Recall 0.72 → 0.78",
      tags: ["Python", "Classification", "Threshold", "Model Evaluation"]
    },
    {
      koTitle: "LendingClub 리스크 분류 분석",
      enTitle: "LendingClub Risk Analysis",
      koDesc: "부실 가능성이 높은 대출을 조기에 선별하고, 위험군 선별 기준에 따른 잠재 손실 방어 시나리오를 분석했습니다.",
      enDesc: "Built an early-risk screening model and evaluated a potential-loss avoidance scenario based on the screening threshold.",
      resultKo: "잠재 손실 약 15% 방어 시나리오",
      resultEn: "Scenario: ~15% potential loss avoidance",
      tags: ["Python", "Classification", "Finance", "Decision Threshold"]
    },
    {
      koTitle: "열수요 예측 모델 개발",
      enTitle: "Heat Demand Forecasting",
      koDesc: "기상 데이터와 열수요를 결합해 LSTM·BiLSTM·CNN 계열 모델을 비교하고 시계열 예측 성능을 개선했습니다.",
      enDesc: "Combined weather and heat-demand data and compared LSTM, BiLSTM, and CNN-based models for time-series forecasting.",
      resultKo: "검증 RMSE 17.2",
      resultEn: "Validation RMSE 17.2",
      tags: ["Python", "LSTM", "Time Series", "Attention"]
    },
    {
      koTitle: "지역·기상·혈통 기반 한우 등급 예측",
      enTitle: "Hanwoo Grade Prediction with Regional, Weather, and Pedigree Data",
      koDesc: "개체·도축·혈통·기상 데이터를 통합해 피처 엔지니어링과 분류 모델링을 수행했습니다.",
      enDesc: "Integrated cattle, slaughter, pedigree, and regional weather data for feature engineering and classification modeling.",
      resultKo: "이종 데이터 통합·분류 파이프라인",
      resultEn: "Multi-source integration and classification pipeline",
      tags: ["Python", "CatBoost", "XGBoost", "Feature Engineering"]
    },
    {
      koTitle: "Money War 웹게임 프로토타입",
      enTitle: "Money War Web Prototype",
      koDesc: "경제 개념을 게임 시스템으로 번역해 웹 프로토타입을 직접 구현한 프로젝트입니다.",
      enDesc: "Translated economic concepts into a playable web prototype.",
      resultKo: "구현 역량 보조 프로젝트",
      resultEn: "Supporting implementation project",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ],

  strengths: {
    analyst: [
      ["Product Analytics", "Funnel·Retention·Cohort 관점으로 사용자 행동을 읽고 서비스 지표와 문제를 연결합니다."],
      ["SQL & Data Extraction", "JOIN, Subquery, CTE, Window Function을 활용해 분석용 쿼리와 지표 집계를 구성합니다."],
      ["Behavior Log Analysis", "MongoDB Aggregation Pipeline과 Python으로 실제 사용자 행동 로그를 정규화하고 분석합니다."],
      ["Advanced Analysis", "분류·예측·ML/DL 경험을 핵심 정체성이 아닌 고급 분석 수단으로 활용합니다."]
    ],
    strategy: [
      ["Business Metric Design", "운영·고객·매출 데이터를 의사결정에 필요한 지표와 우선순위로 번역합니다."],
      ["Market & Operations", "지역·수요·공급·배송 구조를 비교해 실행 가능한 운영 전략을 도출합니다."],
      ["Structured Analysis", "문제 정의 → 데이터 → 분석 → 인사이트 → Action의 흐름으로 결과를 구성합니다."],
      ["Quantitative Validation", "분류·회귀·통계 분석 경험을 활용해 전략 가설을 정량적으로 검토합니다."]
    ],
    advanced: [
      ["Product Analytics", "Connects user behavior to product metrics through funnel, retention, and cohort thinking."],
      ["SQL & Data Extraction", "Builds analytical queries with joins, subqueries, CTEs, and window functions."],
      ["Behavior Log Analysis", "Normalizes and analyzes real user behavior logs with MongoDB aggregation and Python."],
      ["Advanced Analysis", "Uses classification, forecasting, and ML/DL as supporting analytical tools rather than the core identity."]
    ]
  },

  techStacks: {
    analyst: {
      label: "Product Analytics Stack · Evidence",
      desc: "숙련도 자기평가 대신 실제 사용 방식과 프로젝트·인턴 근거를 중심으로 정리했습니다.",
      additionalLabel: "Additional Stack",
      additional: ["Git", "HTML/CSS/JavaScript", "R", "SPSS", "Excel"],
      items: [
        {
          name: "SQL",
          note: "Product Query · Aggregation",
          skills: ["JOIN", "Subquery", "CTE / WITH", "Window Function"],
          evidence: ["다중 테이블 결합", "지표 집계", "분석 데이터셋 구성"]
        },
        {
          name: "Product Analytics",
          note: "User Behavior · Retention · Cohort",
          skills: ["Amplitude", "GA4", "AARRR"],
          evidence: ["Amplitude Retention/Cohort", "사용자 행동 분석", "전환·재방문 관점"]
        },
        {
          name: "Python",
          note: "Analysis · Automation",
          skills: ["Pandas", "Scikit-learn"],
          evidence: ["데어 분석 데이터셋", "EDA·전처리", "분석 자동화"]
        },
        {
          name: "Behavior Data",
          note: "Service Log · NoSQL",
          skills: ["MongoDB", "Aggregation Pipeline"],
          evidence: ["데어 실무 로그", "피노출·후보군 집계", "로그 정규화"]
        },
        {
          name: "BI / Visualization",
          note: "Dashboard · Reporting",
          skills: ["Tableau", "Excel"],
          evidence: ["Olist 시각화", "분석 보고서", "의사결정 전달"]
        },
        {
          name: "Advanced Analysis",
          note: "Classification · Forecasting",
          skills: ["XGBoost", "CatBoost", "LSTM/CNN"],
          evidence: ["인지장애 분류", "열수요 예측", "한우 등급 예측"]
        }
      ]
    },
    strategy: {
      label: "Business Analytics Stack · Evidence",
      desc: "전략형 버전에서는 기술 이름보다 비즈니스 문제를 어떻게 분석하고 전달했는지에 초점을 둡니다.",
      additionalLabel: "Additional Stack",
      additional: ["Amplitude", "GA4", "MongoDB", "Git", "HTML/CSS/JavaScript"],
      items: [
        {
          name: "SQL",
          note: "Data Extraction · KPI",
          skills: ["JOIN", "CTE", "Window Function"],
          evidence: ["E-commerce 분석", "지표 집계", "분석 데이터 구성"]
        },
        {
          name: "Python",
          note: "Analysis · Validation",
          skills: ["Pandas", "Scikit-learn"],
          evidence: ["데이터 전처리", "정량 검증", "자동화"]
        },
        {
          name: "Tableau",
          note: "BI · Decision Support",
          skills: ["Dashboard", "Visualization"],
          evidence: ["Olist", "운영 비교", "결과 전달"]
        },
        {
          name: "Customer Analytics",
          note: "Behavior · Demand",
          skills: ["AARRR", "Segmentation", "Demand Analysis"],
          evidence: ["구매 데이터", "사용자 행동", "지역 수요"]
        },
        {
          name: "Product Data",
          note: "Logs · Retention",
          skills: ["MongoDB", "Amplitude"],
          evidence: ["데어 사용자 로그", "Retention/Cohort", "추천 노출"]
        },
        {
          name: "Advanced Analysis",
          note: "Model-based Validation",
          skills: ["Classification", "Forecasting"],
          evidence: ["리스크 분류", "수요 예측", "Threshold"]
        }
      ]
    },
    advanced: {
      label: "Product Analytics Stack · Evidence",
      desc: "Evidence-first view of the tools and analytical methods used in internships and projects.",
      additionalLabel: "Additional Stack",
      additional: ["Git", "HTML/CSS/JavaScript", "R", "SPSS", "Excel"],
      items: [
        {
          name: "SQL",
          note: "Product Query · Aggregation",
          skills: ["JOIN", "Subquery", "CTE / WITH", "Window Functions"],
          evidence: ["Multi-table analysis", "Metric aggregation", "Analysis datasets"]
        },
        {
          name: "Product Analytics",
          note: "User Behavior · Retention · Cohort",
          skills: ["Amplitude", "GA4", "AARRR"],
          evidence: ["Amplitude retention/cohort", "User behavior analysis", "Conversion & revisit"]
        },
        {
          name: "Python",
          note: "Analysis · Automation",
          skills: ["Pandas", "Scikit-learn"],
          evidence: ["Internship datasets", "EDA & preprocessing", "Automation"]
        },
        {
          name: "Behavior Data",
          note: "Service Log · NoSQL",
          skills: ["MongoDB", "Aggregation Pipeline"],
          evidence: ["Production user logs", "Exposure & candidate metrics", "Log normalization"]
        },
        {
          name: "BI / Visualization",
          note: "Dashboard · Reporting",
          skills: ["Tableau", "Excel"],
          evidence: ["Olist visualization", "Analysis reports", "Decision support"]
        },
        {
          name: "Advanced Analysis",
          note: "Classification · Forecasting",
          skills: ["XGBoost", "CatBoost", "LSTM/CNN"],
          evidence: ["Classification", "Time-series forecasting", "Feature engineering"]
        }
      ]
    }
  },

  internships: {
    ko: [
      {
        company: "데어",
        role: "데이터 분석 인턴",
        period: "2025.09 — 2025.10",
        points: [
          "MongoDB 기반 사용자 행동 로그를 정규화하고 Python 분석 데이터셋을 구축했습니다.",
          "사용자 이탈·노출·응시 패턴과 추천 후보군 구조를 분석해 서비스 의사결정을 지원했습니다.",
          "Amplitude에서 Retention·Cohort를 확인하고 사용자군별 재방문·행동 차이를 분석했습니다."
        ],
        tags: ["MongoDB", "Python", "Amplitude", "User Analytics"]
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
          "Normalized MongoDB-based user behavior logs and built Python analysis datasets.",
          "Analyzed user drop-off, exposure, response patterns, and recommendation candidate-pool structure to support service decisions.",
          "Reviewed retention and cohort behavior in Amplitude and compared revisit and behavioral differences across user groups."
        ],
        tags: ["MongoDB", "Python", "Amplitude", "User Analytics"]
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

  education: {
    ko: [
      {
        title: "Codeit Programming & Data Science Track",
        provider: "Codeit",
        period: "2021.03 — 2021.05",
        badge: "18 Courses Completed",
        featured: true,
        paragraphs: [
          "분석 도구부터 시작하기보다 프로그래밍 원리에서 출발해 데이터가 만들어지고 활용되는 과정까지 순차적으로 학습했습니다.",
          "Python과 JavaScript, 객체지향 프로그래밍을 거쳐 DataFrame 기반 데이터 처리, 데이터 사이언스, 분석과 시각화, 데이터 퀄리티와 데이터 생성까지 학습 범위를 확장했습니다."
        ],
        learningPath: [
          "Programming Fundamentals",
          "Python & JavaScript",
          "Object-Oriented Programming",
          "DataFrame & Data Processing",
          "Data Science",
          "Data Analysis & Visualization",
          "Data Quality & Data Creation"
        ]
      },
      {
        title: "데이터 분석 및 마케팅 교육",
        provider: "패스트캠프",
        period: "2023.08 — 2023.11",
        paragraphs: [
          "AARRR 프레임워크 기반 비즈니스 지표 설계와 Amplitude·GA4, A/B Test, 회귀분석을 활용한 마케팅·제품 분석 프로세스를 학습했습니다."
        ],
        stack: ["Amplitude", "GA4", "SQL", "A/B Test", "AARRR", "CRM Marketing"]
      },
      {
        title: "내일배움캠프 데이터 6기",
        provider: "스파르타코딩",
        period: "2025.02 — 2025.07",
        paragraphs: [
          "데이터 전처리부터 머신러닝·딥러닝 모델링까지 End-to-End 프로세스를 학습했습니다. 시계열 예측 프로젝트에서 검증 RMSE 17.2를 기록하고 Attention 기반 모델 해석 경험을 확장했습니다."
        ],
        stack: ["Python", "Pandas", "Scikit-learn", "SQL", "Tableau", "LSTM/CNN", "Attention"]
      }
    ],
    en: [
      {
        title: "Codeit Programming & Data Science Track",
        provider: "Codeit",
        period: "Mar 2021 — May 2021",
        badge: "18 Courses Completed",
        featured: true,
        paragraphs: [
          "Started from programming fundamentals and followed the path from software principles to how data is created, processed, analyzed, visualized, and validated.",
          "Covered Python, JavaScript, object-oriented programming, DataFrame-based processing, data science, visualization, data quality, and data creation."
        ],
        learningPath: [
          "Programming Fundamentals",
          "Python & JavaScript",
          "Object-Oriented Programming",
          "DataFrame & Data Processing",
          "Data Science",
          "Data Analysis & Visualization",
          "Data Quality & Data Creation"
        ]
      },
      {
        title: "Data Analysis & Marketing Program",
        provider: "Fastcampus",
        period: "Aug 2023 — Nov 2023",
        paragraphs: [
          "Studied AARRR-based metric design and product/marketing analytics using Amplitude, GA4, A/B testing concepts, and regression analysis."
        ],
        stack: ["Amplitude", "GA4", "SQL", "A/B Test", "AARRR", "CRM Marketing"]
      },
      {
        title: "Naeilbaeum Camp Data Cohort 6",
        provider: "Sparta Coding Club",
        period: "Feb 2025 — Jul 2025",
        paragraphs: [
          "Completed an end-to-end curriculum from preprocessing to machine learning and deep-learning modeling. Recorded validation RMSE 17.2 in a time-series forecasting project and expanded model interpretation through attention visualization."
        ],
        stack: ["Python", "Pandas", "Scikit-learn", "SQL", "Tableau", "LSTM/CNN", "Attention"]
      }
    ]
  }
};

const versions = {
  analyst: {
    label: "PRODUCT DATA ANALYST",
    title: "사용자 행동과 서비스 데이터를 분석해 제품·사업 의사결정으로 연결하는 데이터 분석가",
    desc: "SQL·Python·MongoDB·Amplitude를 활용해 행동 데이터를 구조화하고, Retention·Cohort·추천 노출 지표를 해석해 서비스 문제와 다음 Action을 찾습니다.",
    theme: "analyst",
    lang: "ko"
  },
  strategy: {
    label: "BUSINESS / GROWTH ANALYTICS",
    title: "사용자·매출·운영 데이터를 우선순위와 실행 방향으로 연결하는 분석가",
    desc: "고객 행동과 수요·공급·운영 지표를 함께 보고, 분석 결과가 실제 전략과 실행 우선순위로 이어지도록 구조화합니다.",
    theme: "strategy",
    lang: "ko"
  },
  advanced: {
    label: "PRODUCT DATA ANALYST · EN",
    title: "A Product Data Analyst who turns user behavior into product decisions",
    desc: "I structure user behavior data, define and interpret product metrics, and connect findings to product and operational actions.",
    theme: "advanced",
    lang: "en"
  }
};

function currentVersion() {
  const params = new URLSearchParams(location.search);
  const requested = params.get("ver");
  return versions[requested] ? requested : "analyst";
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

function renderVersionTabs(activeKey) {
  const tabs = document.getElementById("versionTabs");
  if (!tabs) return;
  tabs.innerHTML = "";
  Object.entries(versions).forEach(([key, ver]) => {
    const btn = el("button", `version-tab ${key === activeKey ? "active" : ""}`, ver.label);
    btn.addEventListener("click", () => {
      setVersionInUrl(key);
      render(key);
    });
    tabs.appendChild(btn);
  });
}

function renderMainProject(key) {
  const data = profile.mainProjects[key];

  const mainProjectType = document.getElementById("mainProjectType");
  if (mainProjectType) mainProjectType.textContent = data.eyebrow;

  const mainProjectName = document.getElementById("mainProjectName");
  if (mainProjectName) mainProjectName.textContent = data.title;

  const mainProjectIntro = document.getElementById("mainProjectIntro");
  if (mainProjectIntro) mainProjectIntro.textContent = data.intro;

  const mainResultLabel = document.getElementById("mainResultLabel");
  if (mainResultLabel) mainResultLabel.textContent = data.resultLabel;

  const mainResultValue = document.getElementById("mainResultValue");
  if (mainResultValue) mainResultValue.textContent = data.resultValue;

  const tagWrap = document.getElementById("mainProjectTags");
  if (tagWrap) {
    tagWrap.innerHTML = data.tags.map(tag => `<span class="meta-chip">${tag}</span>`).join("");
  }

  const flowWrap = document.getElementById("mainFlow");
  if (!flowWrap) return;
  flowWrap.innerHTML = "";
  data.flow.forEach(([title, desc], idx) => {
    const item = el("div", "flow-item");
    item.innerHTML = `
      <div class="flow-number">${String(idx + 1).padStart(2, "0")}</div>
      <h4>${title}</h4>
      <p>${desc}</p>
    `;
    flowWrap.appendChild(item);
  });
}

function renderOtherProjects(lang, key) {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = "";

  let projects = [...profile.otherProjects];
  if (key === "strategy") {
    projects = projects.filter(p => p.koTitle !== "Olist 셀러 유치 전략 분석");
  }

  projects.forEach((project) => {
    const title = lang === "en" ? project.enTitle : project.koTitle;
    const desc = lang === "en" ? project.enDesc : project.koDesc;
    const result = lang === "en" ? project.resultEn : project.resultKo;
    const tags = project.tags.map(tag => `<span class="meta-chip">${tag}</span>`).join("");
    const card = el("article", "project-card");
    card.innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="project-meta">
        <span class="meta-chip result-chip">${result}</span>
        ${tags}
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderStrengths(key) {
  const grid = document.getElementById("strengthGrid");
  if (!grid) return;
  grid.innerHTML = "";

  profile.strengths[key].forEach(([title, desc]) => {
    const card = el("div", "strength-card");
    card.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
    grid.appendChild(card);
  });
}

function renderSkillChart(key) {
  const data = profile.techStacks[key];

  const labelEl = document.getElementById("skillChartLabel");
  if (labelEl) labelEl.textContent = data.label;

  const descEl = document.getElementById("skillChartDesc");
  if (descEl) descEl.textContent = data.desc;

  const chart = document.getElementById("skillChart");
  if (!chart) return;
  chart.innerHTML = "";

  data.items.forEach((item, idx) => {
    const card = el("article", "skill-item evidence-card");
    const skills = item.skills.map(text => `<span class="skill-method-chip">${text}</span>`).join("");
    const evidence = item.evidence.map(text => `<span class="skill-evidence-chip">${text}</span>`).join("");

    card.innerHTML = `
      <div class="skill-top">
        <div class="skill-rank">${String(idx + 1).padStart(2, "0")}</div>
        <div class="skill-name-block">
          <strong>${item.name}</strong>
          <p>${item.note}</p>
        </div>
      </div>
      <div class="skill-methods">${skills}</div>
      <div class="evidence-label">EVIDENCE</div>
      <div class="skill-evidence">${evidence}</div>
    `;
    chart.appendChild(card);
  });

  const additional = el("div", "skill-additional");
  additional.innerHTML = `
    <span class="skill-additional-label">${data.additionalLabel}</span>
    <div class="skill-additional-chips">
      ${data.additional.map(text => `<span>${text}</span>`).join("")}
    </div>
  `;
  chart.appendChild(additional);
}

function renderInternships(lang) {
  const wrap = document.getElementById("experienceList");
  if (!wrap) return;
  wrap.innerHTML = "";

  profile.internships[lang].forEach((item) => {
    const tags = item.tags.map(tag => `<span class="meta-chip">${tag}</span>`).join("");
    const points = item.points.map(point => `<li>${point}</li>`).join("");
    const card = el("article", "experience-card");

    card.innerHTML = `
      <div class="experience-head">
        <div>
          <div class="mini-label">Internship</div>
          <h3>${item.company}</h3>
          <p class="experience-role">${item.role}</p>
        </div>
        <span class="period-chip">${item.period}</span>
      </div>
      <ul class="experience-points">${points}</ul>
      <div class="project-meta">${tags}</div>
    `;
    wrap.appendChild(card);
  });
}

function renderEducation(lang) {
  const wrap = document.getElementById("educationList");
  if (!wrap) return;
  wrap.innerHTML = "";

  profile.education[lang].forEach((item) => {
    const card = el("article", `education-card ${item.featured ? "featured" : ""}`.trim());
    const paragraphs = item.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
    const stack = item.stack
      ? `<div class="education-stack">${item.stack.map(tag => `<span class="meta-chip">${tag}</span>`).join("")}</div>`
      : "";
    const learningPath = item.learningPath
      ? `
        <div class="learning-label">Learning Path</div>
        <div class="learning-path">
          ${item.learningPath.map((step, idx) =>
            `${idx > 0 ? `<span class="learning-arrow">→</span>` : ""}<span class="learning-step">${step}</span>`
          ).join("")}
        </div>
      `
      : "";

    card.innerHTML = `
      <div class="education-head">
        <div>
          <div class="mini-label">${item.provider}</div>
          <h3>${item.title}</h3>
        </div>
        <div class="education-period">
          <span class="period-chip">${item.period}</span>
          ${item.badge ? `<span class="course-count">${item.badge}</span>` : ""}
        </div>
      </div>
      <div class="education-copy">${paragraphs}</div>
      ${learningPath}
      ${stack}
    `;
    wrap.appendChild(card);
  });
}

function renderContacts(lang) {
  const wrap = document.getElementById("contactList");
  if (!wrap) return;
  wrap.innerHTML = "";

  profile.contacts.forEach((item) => {
    let text = item.text;
    if (lang === "ko" && item.label === "Portfolio PDF") text = "PDF 포트폴리오 열기";

    const node = el("a", "contact-link");
    node.href = item.href;

    if (item.href.startsWith("http")) {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }

    node.innerHTML = `<strong>${item.label}</strong><span>${text}</span>`;
    wrap.appendChild(node);
  });
}

function renderSectionCopy(key) {
  const isEnglish = key === "advanced";
  const isStrategy = key === "strategy";

  document.getElementById("mainProjectSectionTitle").textContent =
    isEnglish ? "Main Case" : isStrategy ? "Main Strategy Case" : "Main Product Analytics Case";

  document.getElementById("mainProjectSectionDesc").textContent =
    isEnglish
      ? "A real-service case showing how behavior logs were structured, analyzed, and connected to product decisions."
      : isStrategy
        ? "분석 결과를 실행 우선순위와 전략 제안으로 연결한 대표 사례입니다."
        : "실제 서비스 행동 로그를 구조화하고, 사용자 행동·추천 노출·Retention/Cohort를 분석해 의사결정으로 연결한 경험입니다.";

  document.getElementById("projectsTitle").textContent = isEnglish ? "Selected Projects" : "Selected Projects";
  document.getElementById("projectSectionDesc").textContent =
    isEnglish
      ? "Modeling projects are kept as supporting analytical capabilities rather than the primary identity."
      : "모델링 프로젝트는 핵심 정체성이 아니라 분석 범위를 확장하는 보조 역량으로 배치했습니다.";

  document.getElementById("strengthsTitle").textContent =
    isEnglish ? "Product Analytics Capability" : isStrategy ? "Business Analytics Capability" : "Product Analytics Capability";

  document.getElementById("strengthDesc").textContent =
    isEnglish
      ? "Product analytics, SQL-based extraction, behavior-log analysis, and advanced analytical methods."
      : isStrategy
        ? "데이터를 지표·인사이트·우선순위로 연결하는 비즈니스 분석 역량을 정리했습니다."
        : "사용자 행동 분석, SQL 기반 데이터 추출, 서비스 로그 구조화, 고급 분석을 Product Analytics 관점으로 연결합니다.";

  document.getElementById("experienceTitle").textContent = isEnglish ? "Hands-on Experience" : "Hands-on Experience";
  document.getElementById("experienceDesc").textContent =
    isEnglish
      ? "Internship experience with real user logs, customer data, reporting, and decision support."
      : "실제 사용자 로그와 고객·운영 데이터를 다룬 인턴 경험을 정리했습니다.";

  document.getElementById("educationTitle").textContent = isEnglish ? "Education & Training" : "Education & Training";
  document.getElementById("educationDesc").textContent =
    isEnglish
      ? "Training from programming fundamentals to product analytics and advanced modeling."
      : "프로그래밍 기초에서 Product Analytics와 고급 모델링까지 이어진 학습 이력입니다.";

  document.getElementById("contactTitle").textContent = "Contact";
  document.getElementById("contactDesc").textContent =
    isEnglish ? "GitHub, email, portfolio PDF, and phone." : "GitHub, 이메일, PDF 포트폴리오와 연락처입니다.";
}

function render(key = currentVersion()) {
  const ver = versions[key];
  const lang = ver.lang;
  const isEnglish = lang === "en";

  document.body.classList.remove("theme-strategy", "theme-advanced");
  if (ver.theme === "strategy") document.body.classList.add("theme-strategy");
  if (ver.theme === "advanced") document.body.classList.add("theme-advanced");

  document.getElementById("heroEyebrow").textContent = ver.label;
  document.getElementById("heroTitle").textContent = ver.title;
  document.getElementById("heroDesc").textContent = ver.desc;
  document.getElementById("versionLabel").textContent = isEnglish ? "Version" : "버전 선택";
  document.getElementById("mainProjectBtn").textContent = isEnglish ? "View Main Case" : "메인 분석 보기";
  document.getElementById("contactBtn").textContent = isEnglish ? "View Contact" : "연락처 보기";

  renderVersionTabs(key);
  renderSkillChart(key);
  renderMainProject(key);
  renderOtherProjects(lang, key);
  renderStrengths(key);
  renderInternships(lang);
  renderEducation(lang);
  renderContacts(lang);
  renderSectionCopy(key);
}

render();
