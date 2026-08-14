const profile = {
  contacts: [
    { label: "GitHub", text: "github.com/ryemso", href: "https://github.com/ryemso" },
    { label: "Email", text: "qt0177@gmail.com", href: "mailto:qt0177@gmail.com" },
    { label: "Portfolio PDF", text: "Open PDF Portfolio", href: "https://drive.google.com/file/d/1-jQsoKR6gl0ZuA4ZFbpL9QR9oC906t7P/view?usp=drive_link" },
    { label: "Phone number", text: "82)1065010177", href: "01065010177" }
  ],
  mainProject: {
    ko: {
      eyebrow: "대표 프로젝트",
      title: "LSTM 기반 시계열 치매 예측 모델 개발",
      short: "치매 예측 문제를 시계열 관점으로 풀어낸 LSTM 기반 프로젝트입니다.",
      intro: "정적 분류 중심 접근으로는 시간 흐름 속 패턴을 충분히 반영하기 어렵다고 판단해, LSTM 기반 시계열 구조로 치매 예측 문제를 다시 설계한 프로젝트입니다.",
      resultLabel: "핵심 결과",
      resultValue: "Recall 0.72 → 0.78",
      flow: [
        ["Problem", "기존 방식은 시간 흐름을 충분히 반영하지 못해 변화 패턴을 놓칠 수 있었습니다."],
        ["Data", "시계열 구조를 반영할 수 있도록 입력 구간과 관측 순서를 다시 정리했습니다."],
        ["Approach", "LSTM 기반 구조를 중심으로 입력 시퀀스 설계와 모델 구성을 조정했습니다."],
        ["Improvement", "하이퍼파라미터, 시퀀스 길이, 입력 구조를 반복 조정하며 성능을 개선했습니다."],
        ["Outcome", "Recall을 0.72에서 0.78까지 끌어올리며 조기 선별 관점의 활용 가능성을 높였습니다."]
      ]
    },
    en: {
      eyebrow: "Main Project",
      title: "LSTM-based Time-Series Dementia Prediction",
      short: "A core project that reframed dementia prediction through a time-series LSTM approach.",
      intro: "Instead of relying only on static classification logic, this project redesigned dementia prediction as a time-series task so that temporal patterns could be reflected more directly in the model.",
      resultLabel: "Key Result",
      resultValue: "Recall 0.72 → 0.78",
      flow: [
        ["Problem", "A static classification setup could miss meaningful patterns that unfold over time."],
        ["Data", "The dataset was reorganized so that sequence order and temporal windows could be modeled explicitly."],
        ["Approach", "An LSTM-based structure was used as the main backbone, with repeated tuning of sequence design and model setup."],
        ["Improvement", "Performance was improved through iterative adjustments to sequence length, hyperparameters, and input structure."],
        ["Outcome", "Recall improved from 0.72 to 0.78, increasing the project's value for early screening scenarios."]
      ]
    }
  },
  otherProjects: [
    {
      koTitle: "지역·기상·혈통 기반 한우 등급 예측",
      enTitle: "Hanwoo Grade Prediction with Regional, Weather, and Pedigree Data",
      koDesc: "개체 정보, 도축 성적, 혈통 관계, 지역별 기상 데이터를 통합해 한우 등급 예측을 위한 피처 엔지니어링 및 분류 모델링을 수행했습니다.",
      enDesc: "Integrated cattle records, slaughter outcomes, pedigree relationships, and regional weather data to build features and classification models for Hanwoo grade prediction.",
      resultKo: "이종 데이터 결합 및 제출 파이프라인 완성",
      resultEn: "Completed multi-source data integration and submission pipeline",
      tags: ["Python", "CatBoost", "XGBoost", "Data Preprocessing"]
    },
    {
      koTitle: "열수요 예측 모델 개발",
      enTitle: "Heat Demand Forecasting",
      koDesc: "기상 데이터와 열수요를 결합해 운영 효율 관점의 예측 모델을 설계했습니다.",
      enDesc: "Built a forecasting model that linked weather variables with heat-demand records.",
      resultKo: "RMSE 21% 개선",
      resultEn: "21% RMSE improvement",
      tags: ["Python", "LSTM", "Time Series"]
    },
    {
      koTitle: "Olist 셀러 유치 전략 분석",
      enTitle: "Olist Seller Strategy",
      koDesc: "배송 병목과 지역 수요-공급 불균형을 분석해 셀러 유치 우선순위를 제안했습니다.",
      enDesc: "Analyzed delivery bottlenecks and regional imbalance to prioritize seller acquisition.",
      resultKo: "이탈률 20% 개선",
      resultEn: "20% churn improvement",
      tags: ["EDA", "SQL", "Tableau"]
    },
    {
      koTitle: "LendingClub 리스크 분류 분석",
      enTitle: "LendingClub Risk Analysis",
      koDesc: "부실 가능성이 높은 대출을 조기에 선별하는 분류 구조를 설계했습니다.",
      enDesc: "Built an early-risk screening structure for potentially bad loans.",
      resultKo: "잠재 손실 15% 방어",
      resultEn: "15% potential loss defense",
      tags: ["Classification", "Finance", "Python"]
    },
    {
      koTitle: "Money War 웹게임 프로토타입",
      enTitle: "Money War Prototype",
      koDesc: "경제 개념을 게임 시스템으로 번역해 웹 프로토타입을 직접 구현했습니다.",
      enDesc: "Translated economic ideas into a playable web-game prototype.",
      resultKo: "웹 프로토타입 구현",
      resultEn: "Web prototype built",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ],
  strengths: {
    ko: [
      ["Time Series Modeling", "시계열 입력 구조를 설계하고 LSTM 계열 모델을 개선하는 데 강점이 있습니다."],
      ["Model Optimization", "하이퍼파라미터와 입력 구조를 조정하며 성능 개선 포인트를 찾습니다."],
      ["EDA & Insight", "수치만 보는 것이 아니라 문제의 원인과 의미를 함께 정리합니다."],
      ["Structured Reporting", "문제-접근-개선-결과 흐름으로 읽히는 결과물을 만듭니다."]
    ],
    en: [
      ["Time Series Modeling", "Strong in designing sequence structures and improving LSTM-based models."],
      ["Model Optimization", "Finds performance gains through iterative tuning of parameters and inputs."],
      ["EDA & Insight", "Explains not just numbers, but the meaning and cause behind them."],
      ["Structured Reporting", "Builds outputs that read clearly as problem, approach, improvement, and result."]
    ]
  },
  techStacks: {
    ko: {
      label: "Tech Stack · Evidence",
      desc: "단순 숙련도 표시가 아니라, 실제 사용 기간과 프로젝트·인턴에서 확인 가능한 활용 근거를 함께 보여줍니다.",
      legend: ["활용 이력", "실전 활용도"],
      scale: "막대 길이는 최초 학습·프로젝트 시작 시점부터의 활용 이력 기준이며, 연속 실무 경력을 의미하지 않습니다.",
      additionalLabel: "Additional Stack",
      additional: ["HTML/CSS/JavaScript", "R", "SPSS", "Excel", "Git"],
      items: [
        {
          name: "Python",
          note: "분석 · 모델링 · 자동화",
          expValue: 100,
          expLabel: "2021~현재",
          levelValue: 92,
          levelLabel: "상급",
          evidence: ["데어 실무", "Pandas", "모델링/자동화"]
        },
        {
          name: "SQL",
          note: "추출 · 집계 · 분석 쿼리",
          expValue: 64,
          expLabel: "2023~현재",
          levelValue: 82,
          levelLabel: "중상",
          evidence: ["Olist 분석", "지표 집계", "교육·프로젝트"]
        },
        {
          name: "MongoDB",
          note: "NoSQL · Aggregation Pipeline",
          expValue: 30,
          expLabel: "2025~현재",
          levelValue: 78,
          levelLabel: "중상",
          evidence: ["데어 실무", "로그 정규화", "Aggregation"]
        },
        {
          name: "Tableau",
          note: "BI · 대시보드 · 시각화",
          expValue: 62,
          expLabel: "2023~현재",
          levelValue: 78,
          levelLabel: "중상",
          evidence: ["Olist", "전략 시각화", "대시보드"]
        },
        {
          name: "Amplitude / GA4",
          note: "제품 분석 · 이벤트 · 퍼널",
          expValue: 58,
          expLabel: "2023~현재",
          levelValue: 72,
          levelLabel: "중상",
          evidence: ["제품 분석", "퍼널/이벤트", "Fastcampus"]
        },
        {
          name: "ML / DL",
          note: "예측 · 분류 · 시계열 모델링",
          expValue: 40,
          expLabel: "2025~현재",
          levelValue: 88,
          levelLabel: "상급",
          evidence: ["LSTM/CNN", "Attention", "XGB/CatBoost"]
        }
      ]
    },
    en: {
      label: "Tech Stack · Evidence",
      desc: "Usage history and working proficiency are shown together with evidence from internships and projects.",
      legend: ["Usage History", "Working Proficiency"],
      scale: "Bar length reflects history since first learning/project use; it does not represent continuous full-time experience.",
      additionalLabel: "Additional Stack",
      additional: ["HTML/CSS/JavaScript", "R", "SPSS", "Excel", "Git"],
      items: [
        {
          name: "Python",
          note: "Analysis · Modeling · Automation",
          expValue: 100,
          expLabel: "2021~Now",
          levelValue: 92,
          levelLabel: "Advanced",
          evidence: ["Internship", "Pandas", "Modeling/Automation"]
        },
        {
          name: "SQL",
          note: "Querying · Aggregation · Analysis",
          expValue: 64,
          expLabel: "2023~Now",
          levelValue: 82,
          levelLabel: "Proficient",
          evidence: ["Olist", "Metric Aggregation", "Projects"]
        },
        {
          name: "MongoDB",
          note: "NoSQL · Aggregation Pipeline",
          expValue: 30,
          expLabel: "2025~Now",
          levelValue: 78,
          levelLabel: "Proficient",
          evidence: ["Internship", "Log Normalization", "Aggregation"]
        },
        {
          name: "Tableau",
          note: "BI · Dashboard · Visualization",
          expValue: 62,
          expLabel: "2023~Now",
          levelValue: 78,
          levelLabel: "Proficient",
          evidence: ["Olist", "Strategy Viz", "Dashboard"]
        },
        {
          name: "Amplitude / GA4",
          note: "Product Analytics · Events · Funnel",
          expValue: 58,
          expLabel: "2023~Now",
          levelValue: 72,
          levelLabel: "Working+",
          evidence: ["Product Analytics", "Funnel/Events", "Fastcampus"]
        },
        {
          name: "ML / DL",
          note: "Forecasting · Classification · Time Series",
          expValue: 40,
          expLabel: "2025~Now",
          levelValue: 88,
          levelLabel: "Advanced",
          evidence: ["LSTM/CNN", "Attention", "XGB/CatBoost"]
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
          "사용자 이탈·노출·응시 패턴을 분석해 서비스 의사결정을 지원했습니다."
        ],
        tags: ["MongoDB", "Python", "User Analytics"]
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
          "Analyzed churn, exposure, and profile-view patterns to support service decisions."
        ],
        tags: ["MongoDB", "Python", "User Analytics"]
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
          "데이터를 공부하기 위해 분석 도구부터 배우기보다 프로그래밍의 원리에서 출발해 데이터가 만들어지고 활용되는 과정까지 순차적으로 학습했습니다.",
          "첫 단계에서는 프로그래밍 언어와 소프트웨어의 기본 개념을 익히고 Python과 JavaScript를 학습했습니다. 이후 객체지향 프로그래밍 관련 과정을 통해 프로그램을 구조적으로 바라보는 관점을 확장했습니다.",
          "다음으로 학습의 중심을 데이터로 옮겨 DataFrame 기반 데이터 처리, 데이터 사이언스, 데이터 분석과 시각화 과정을 이수했습니다. 마지막으로 데이터 퀄리티와 데이터 생성까지 학습 범위를 넓히며 단순 분석을 넘어 데이터 자체의 신뢰성과 활용 가능성을 고려하는 관점을 형성했습니다."
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
          "AARRR 프레임워크 기반 비즈니스 지표 설계와 회귀분석을 활용한 마케팅 성과 검증 프로세스를 학습했습니다."
        ],
        stack: ["Amplitude", "GA4", "SQL", "A/B Test", "CRM Marketing"]
      },
      {
        title: "내일배움캠프 데이터 6기",
        provider: "스파르타코딩",
        period: "2025.02 — 2025.07",
        paragraphs: [
          "데이터 전처리부터 딥러닝 모델링까지 End-to-End 프로세스를 학습했습니다. 시계열 예측 프로젝트에서 RMSE 17.2를 달성하고 Attention 시각화를 통해 모델 해석 경험을 확장했습니다."
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
          "Rather than starting with analytics tools alone, I began with programming fundamentals and followed the full path from how software works to how data is created and used.",
          "I studied Python and JavaScript after learning core programming concepts, then expanded into object-oriented programming to build a more structured view of software.",
          "From there, I moved into DataFrame-based processing, data science, analysis and visualization, and finally data quality and data creation, developing an early focus on the reliability of data itself."
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
          "Studied AARRR-based business metric design and marketing performance validation using regression analysis."
        ],
        stack: ["Amplitude", "GA4", "SQL", "A/B Test", "CRM Marketing"]
      },
      {
        title: "Naeilbaeum Camp Data Cohort 6",
        provider: "Sparta Coding Club",
        period: "Feb 2025 — Jul 2025",
        paragraphs: [
          "Completed an end-to-end curriculum from data preprocessing to deep-learning modeling. In a time-series forecasting project, I achieved RMSE 17.2 and strengthened model interpretation through attention visualization."
        ],
        stack: ["Python", "Pandas", "Scikit-learn", "SQL", "Tableau", "LSTM/CNN", "Attention"]
      }
    ]
  }
};

const versions = {
  analyst: {
    label: "DATA ANALYST",
    title: "시계열 데이터를 해석해 예측 모델로 연결하는 데이터 분석가",
    desc: "하나의 메인 프로젝트를 중심으로 문제 정의, 모델링 과정, 성능 개선 흐름이 바로 읽히도록 구성했습니다.",
    theme: "analyst",
    lang: "ko"
  },
  strategy: {
    label: "BUSINESS / STRATEGY",
    title: "분석 결과를 우선순위와 실행 방향으로 연결하는 전략형 분석가",
    desc: "대표 프로젝트를 중심으로 문제 해결 과정이 보이게 정리하고, 나머지 프로젝트는 의사결정 관점의 카드로 압축했습니다.",
    theme: "strategy",
    lang: "ko"
  },
  advanced: {
    label: "ENGLISH VERSION",
    title: "A data analyst who turns time-series problems into clear, decision-ready insight",
    desc: "This version focuses on one main project and presents the rest in compact card format for faster reading.",
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

function renderMainProject(lang) {
  const data = profile.mainProject[lang];
  const heroMainLabel = document.getElementById("heroMainLabel");
  if (heroMainLabel) heroMainLabel.textContent = data.eyebrow;
  const heroMainTitle = document.getElementById("heroMainTitle");
  if (heroMainTitle) heroMainTitle.textContent = data.title;
  const heroMainDesc = document.getElementById("heroMainDesc");
  if (heroMainDesc) heroMainDesc.textContent = data.short;
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

  const flowWrap = document.getElementById("mainFlow");
  if (!flowWrap) return;
  flowWrap.innerHTML = "";
  data.flow.forEach(([title, desc], idx) => {
    const item = el("div", "flow-item");
    item.innerHTML = `<div class="flow-number">${String(idx + 1).padStart(2, "0")}</div><h4>${title}</h4><p>${desc}</p>`;
    flowWrap.appendChild(item);
  });
}

function renderOtherProjects(lang) {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = "";
  profile.otherProjects.forEach((project) => {
    const title = lang === "en" ? project.enTitle : project.koTitle;
    const desc = lang === "en" ? project.enDesc : project.koDesc;
    const result = lang === "en" ? project.resultEn : project.resultKo;
    const tags = project.tags.map(tag => `<span class="meta-chip">${tag}</span>`).join("");
    const card = el("article", "project-card");
    card.innerHTML = `<h3>${title}</h3><p>${desc}</p><div class="project-meta"><span class="meta-chip">${result}</span>${tags}</div>`;
    grid.appendChild(card);
  });
}

function renderStrengths(lang) {
  const grid = document.getElementById("strengthGrid");
  if (!grid) return;
  grid.innerHTML = "";
  profile.strengths[lang].forEach(([title, desc]) => {
    const card = el("div", "strength-card");
    card.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
    grid.appendChild(card);
  });
}

function renderSkillChart(lang) {
  const data = profile.techStacks[lang];
  const labelEl = document.getElementById("skillChartLabel");
  if (labelEl) labelEl.textContent = data.label;
  const descEl = document.getElementById("skillChartDesc");
  if (descEl) descEl.textContent = data.desc;

  const legendEl = document.getElementById("skillLegend");
  if (legendEl) {
    legendEl.innerHTML = `
      <div class="legend-pill"><span class="legend-swatch exp"></span><span>${data.legend[0]}</span></div>
      <div class="legend-pill"><span class="legend-swatch level"></span><span>${data.legend[1]}</span></div>
      <span class="skill-scale-note">${data.scale}</span>
    `;
  }

  const chart = document.getElementById("skillChart");
  if (!chart) return;
  chart.innerHTML = "";

  data.items.forEach((item, idx) => {
    const row = el("div", "skill-item");
    const evidence = item.evidence.map(text => `<span class="skill-evidence-chip">${text}</span>`).join("");
    row.innerHTML = `
      <div class="skill-top">
        <div class="skill-rank">${String(idx + 1).padStart(2, "0")}</div>
        <div class="skill-name-block">
          <strong>${item.name}</strong>
          <p>${item.note}</p>
        </div>
      </div>
      <div class="skill-bars">
        <div class="skill-bar-row">
          <span class="skill-bar-label">${data.legend[0]}</span>
          <div class="skill-bar-track experience-track">
            <div class="skill-bar-fill exp" style="width:${item.expValue}%"></div>
          </div>
          <span class="skill-bar-value">${item.expLabel}</span>
        </div>
        <div class="skill-bar-row">
          <span class="skill-bar-label">${data.legend[1]}</span>
          <div class="skill-bar-track level-track">
            <div class="skill-bar-fill level" style="width:${item.levelValue}%"></div>
          </div>
          <span class="skill-bar-value">${item.levelLabel}</span>
        </div>
      </div>
      <div class="skill-evidence">${evidence}</div>
    `;
    chart.appendChild(row);
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
    const stack = item.stack ? `<div class="education-stack">${item.stack.map(tag => `<span class="meta-chip">${tag}</span>`).join("")}</div>` : "";
    const learningPath = item.learningPath
      ? `
        <div class="learning-label">Learning Path</div>
        <div class="learning-path">
          ${item.learningPath.map((step, idx) => `${idx > 0 ? `<span class="learning-arrow">→</span>` : ""}<span class="learning-step">${step}</span>`).join("")}
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
    if (lang === "en") {
      if (item.label === "Email") text = "qt0177@gmail.com";
      if (item.label === "Portfolio PDF") text = "Open PDF Portfolio";
    } else {
      if (item.label === "Email") text = "qt0177@gmail.com";
      if (item.label === "Portfolio PDF") text = "PDF 포트폴리오 열기";
      if (item.label === "Phone number") text = "82)1065010177";
    }
    const node = el("a", "contact-link");
    node.href = item.href;
    if (item.href.startsWith("http") || item.href.startsWith("./") || item.href.startsWith("mailto:")) {
      if (item.href.startsWith("http") || item.href.startsWith("./")) {
        node.target = "_blank";
        node.rel = "noopener noreferrer";
      }
    }
    node.innerHTML = `<strong>${item.label}</strong><span>${text}</span>`;
    wrap.appendChild(node);
  });
}

function render(key = currentVersion()) {
  const ver = versions[key];
  const lang = ver.lang;
  const isEnglish = lang === "en";

  document.body.classList.remove("theme-strategy", "theme-advanced");
  if (ver.theme === "strategy") document.body.classList.add("theme-strategy");
  if (ver.theme === "advanced") document.body.classList.add("theme-advanced");

  const heroEyebrow = document.getElementById("heroEyebrow");
  if (heroEyebrow) heroEyebrow.textContent = ver.label;
  const heroTitle = document.getElementById("heroTitle");
  if (heroTitle) heroTitle.textContent = ver.title;
  const heroDesc = document.getElementById("heroDesc");
  if (heroDesc) heroDesc.textContent = ver.desc;

  const mainProjectBtn = document.getElementById("mainProjectBtn");
  if (mainProjectBtn) mainProjectBtn.textContent = isEnglish ? "View Main Project" : "메인 프로젝트 보기";
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) contactBtn.textContent = isEnglish ? "View Contact" : "연락처 보기";

  const versionLabel = document.getElementById("versionLabel");
  if (versionLabel) versionLabel.textContent = isEnglish ? "Version" : "버전 선택";

  const mainProjectSectionTitle = document.getElementById("mainProjectSectionTitle");
  if (mainProjectSectionTitle) mainProjectSectionTitle.textContent = isEnglish ? "Main Project" : "Main Project";
  const mainProjectSectionDesc = document.getElementById("mainProjectSectionDesc");
  if (mainProjectSectionDesc) mainProjectSectionDesc.textContent = isEnglish
    ? "The portfolio is centered on one flagship project so the problem-solving flow is easy to follow."
    : "하나의 대표 프로젝트를 중심으로 문제 정의부터 결과까지 흐름이 보이도록 구성했습니다.";

  const projectsTitle = document.getElementById("projectsTitle");
  if (projectsTitle) projectsTitle.textContent = isEnglish ? "Other Projects" : "Other Projects";
  const projectSectionDesc = document.getElementById("projectSectionDesc");
  if (projectSectionDesc) projectSectionDesc.textContent = isEnglish
    ? "The rest of the work is presented in compact cards for faster reading."
    : "나머지 프로젝트는 카드 형태로 간결하게 정리했습니다.";

  const strengthsTitle = document.getElementById("strengthsTitle");
  if (strengthsTitle) strengthsTitle.textContent = isEnglish ? "Core Strengths" : "Core Strengths";
  const strengthDesc = document.getElementById("strengthDesc");
  if (strengthDesc) strengthDesc.textContent = isEnglish
    ? "My current strengths are time-series modeling, optimization, and turning results into readable insight."
    : "현재 저는 시계열 데이터 해석, 모델 최적화, 비즈니스 인사이트 정리에 강점이 있습니다.";

  const experienceTitle = document.getElementById("experienceTitle");
  if (experienceTitle) experienceTitle.textContent = isEnglish ? "Internship Experience" : "Internship Experience";
  const experienceDesc = document.getElementById("experienceDesc");
  if (experienceDesc) experienceDesc.textContent = isEnglish
    ? "Hands-on internship work where analysis pipelines and business-support tasks were applied to real service and operations data."
    : "실제 서비스와 운영 데이터 안에서 분석 파이프라인과 의사결정 지원 업무를 경험했습니다.";

  const educationTitle = document.getElementById("educationTitle");
  if (educationTitle) educationTitle.textContent = isEnglish ? "Education & Training" : "Education & Training";
  const educationDesc = document.getElementById("educationDesc");
  if (educationDesc) educationDesc.textContent = isEnglish
    ? "Expanded from programming fundamentals to data analysis, modeling, and product analytics."
    : "프로그래밍 기초에서 데이터 분석·모델링·제품 분석까지 학습 범위를 확장해 왔습니다.";

  const contactTitle = document.getElementById("contactTitle");
  if (contactTitle) contactTitle.textContent = isEnglish ? "Contact" : "Contact";
  const contactDesc = document.getElementById("contactDesc");
  if (contactDesc) contactDesc.textContent = isEnglish
    ? "Each contact item is clickable and opens directly."
    : "연락처는 클릭하면 바로 이동하도록 구성했습니다.";

  renderVersionTabs(key);
  renderMainProject(lang);
  renderOtherProjects(lang);
  renderStrengths(lang);
  renderSkillChart(lang);
  renderInternships(lang);
  renderEducation(lang);
  renderContacts(lang);
}

render();
