const profile = {
  contacts: [
    { label: "GitHub", text: "github.com/ryemso", href: "https://github.com/ryemso" },
    { label: "LinkedIn", text: "linkedin.com/in/동현-김-898ba4348", href: "https://www.linkedin.com/in/%EB%8F%99%ED%98%84-%EA%B9%80-898ba4348" },
    { label: "Email", text: "qt0177@gmail.com", href: "mailto:qt0177@gmail.com" },
    { label: "Portfolio PDF", text: "Open PDF Portfolio", href: "https://drive.google.com/file/d/1-jQsoKR6gl0ZuA4ZFbpL9QR9oC906t7P/view?usp=drive_link" }
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
    advanced: {
      label: "PRODUCT DATA ANALYST · EN",
      title: "A Product Data Analyst who turns user behavior into product decisions",
      desc: "I structure behavior logs, define product metrics, validate data quality, and connect findings to product and operational actions.",
      theme: "advanced",
      lang: "en",
      heroStack: ["SQL", "Python", "MongoDB", "Amplitude", "Tableau"]
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
      flow: [
        ["01 · Define", "활동 로그별 사용자 수를 비교해 최근 30일 Active 기준을 profilevisithistories로 정리했습니다."],
        ["02 · Validate", "취향 등록량 0.16개라는 비정상 값을 발견하고 원천 데이터를 재검증해 users.taste/coreTaste로 수정했습니다."],
        ["03 · Measure", "Active 프로필 완성도, 친구 초대율, 결제·재결제 유저, Like/Chat Request Rate 등 서비스 지표를 정의·산출했습니다."],
        ["04 · Diagnose", "매력도와 프로필 피노출의 관계, 추천 후보군과 runway를 분석해 노출 편중·추천 커버리지 이슈를 점검했습니다."],
        ["05 · Operate", "Amplitude 상시 대시보드의 한계를 확인하고 MongoDB→Python 기반 자동 리포트 구조를 설계했습니다."]
      ]
    },
    strategy: {
      eyebrow: "OLIST · BUSINESS ANALYTICS",
      title: "배송 병목과 지역 수요·공급 불균형 기반 셀러 유치 전략",
      intro: "주문·배송·판매자·지역 데이터를 결합해 배송 병목과 지역별 공급 부족을 분석하고 셀러 유치 우선지역을 제안했습니다.",
      resultLabel: "OUTPUT",
      resultValue: "Seller Acquisition Priority",
      tags: ["SQL", "Tableau", "E-commerce", "Demand-Supply", "Strategy"],
      flow: [
        ["01 · Problem", "배송 지연과 지역별 판매자 분포 차이를 운영 문제로 정의했습니다."],
        ["02 · Data", "주문·고객·판매자·배송 테이블을 결합해 분석 데이터셋을 구성했습니다."],
        ["03 · Analysis", "주문 수요와 판매자 공급, 배송 시간을 지역 단위로 비교했습니다."],
        ["04 · Insight", "수요는 높지만 공급이 부족하고 배송 병목이 겹치는 지역을 도출했습니다."],
        ["05 · Action", "셀러 유치와 운영 개선의 우선지역으로 연결했습니다."]
      ]
    },
    advanced: {
      eyebrow: "DARE · DATA ANALYSIS INTERNSHIP",
      title: "Product Analytics with Real User Behavior Logs",
      intro: "Inspected MongoDB collections, defined metric logic, validated data sources, and analyzed activity, referrals, recommendation exposure, payments, and retention/cohort behavior.",
      resultLabel: "ROLE",
      resultValue: "Raw Logs → Metric Definition → Validation → Decision Support",
      tags: ["MongoDB Aggregation", "Python", "Amplitude", "Product Metrics", "Data Validation"],
      flow: [
        ["01 · Define", "Compared activity logs and selected profile visit history as the consistent 30-day active-user basis."],
        ["02 · Validate", "Detected an implausible taste-count metric, traced the wrong source, and corrected the metric using user profile fields."],
        ["03 · Measure", "Defined and calculated profile completeness, referral rate, payment behavior, and recommendation performance metrics."],
        ["04 · Diagnose", "Analyzed attractiveness vs. exposure and recommendation runway to inspect concentration and coverage issues."],
        ["05 · Operate", "Reviewed dashboard limitations and designed a MongoDB-to-Python automated reporting workflow."]
      ]
    }
  },

  dareEvidence: {
    ko: {
      metrics: [
        { label: "30일 Active 유저", value: "989명", note: "profilevisithistories 기준" },
        { label: "평균 사진", value: "1.59개", note: "Active 유저 1인당" },
        { label: "평균 프롬프트", value: "4.73개", note: "Active 유저 1인당" },
        { label: "평균 취향", value: "22.99개", note: "원천 검증 후 수정" }
      ],
      validation: {
        eyebrow: "DATA VALIDATION",
        title: "직관적으로 이상한 숫자를 그대로 쓰지 않았습니다.",
        before: "0.16",
        after: "22.99",
        unit: "개 / 유저",
        text: "처음에는 tastelikes를 취향 등록 원천으로 사용해 평균 0.16개가 나왔습니다. 실제 어드민과 맞지 않는 값을 재검증해 users.taste + coreTaste로 변경했고, 최종 평균을 22.99개로 수정했습니다."
      },
      referral: {
        eyebrow: "PRODUCT METRIC",
        title: "주간 친구 초대율",
        text: "피초대자 수가 아니라 ‘해당 주 초대한 Unique User / 해당 주 전체 User’로 지표를 다시 정의했습니다.",
        values: [
          ["7/26", 26.5], ["8/02", 11.3], ["8/09", 21.6], ["8/16", 11.7],
          ["8/23", 10.3], ["8/30", 19.7], ["9/06", 25.1]
        ]
      },
      recommendation: {
        eyebrow: "RECOMMENDATION ANALYTICS",
        title: "노출 편중과 추천 커버리지 점검",
        stats: [
          { value: "0.293", label: "Pearson · 매력도↔피노출" },
          { value: "0.436", label: "Spearman · 매력도↔피노출" },
          { value: "0.93", label: "평균 Runway" }
        ],
        text: "showprofiles의 shownProfileIds를 피노출 유저 기준으로 풀어 노출량을 집계하고, 매력도와의 관계 및 후보군 runway를 분석했습니다. 매력도 구간별 평균 노출은 약 8.39에서 28.25까지 증가하는 경향을 보였습니다."
      },
      query: {
        eyebrow: "MONGODB / DATA WORK",
        title: "실제로 사용한 데이터 작업",
        items: [
          ["Collection Discovery", "transactions에서 userId가 없음을 확인하고 transactionhistories를 실제 결제 원천으로 찾아냈습니다."],
          ["Join & Aggregation", "$lookup, $group, $match, $project, $map, $dateTrunc, $unwind를 활용해 사용자·결제·초대·노출 데이터를 결합했습니다."],
          ["User-level Metrics", "Unique User, 결제 유저, 2회 이상 재결제, Active Device, 초대 유저 등 사용자 단위 지표를 추출했습니다."],
          ["Dashboard / Reporting", "Amplitude/GA에서 정의가 맞지 않는 비율 지표는 MongoDB→PyMongo→Pandas 기반 정기 리포트 방식으로 대안을 설계했습니다."]
        ]
      },
      amplitude: {
        eyebrow: "AMPLITUDE",
        title: "Retention / Cohort도 코드가 아니라 제품 분석 도구에서 수행했습니다.",
        text: "Amplitude에서 Cohort Filter와 Rolling Window를 활용해 Retention·재방문 관점의 사용자 행동을 확인했습니다. 지표 정의가 UI 기본 Aggregation과 맞지 않는 경우에는 MongoDB 계산과 병행하는 방향을 검토했습니다."
      }
    },
    en: {
      metrics: [
        { label: "30-day Active Users", value: "989", note: "profile visit history basis" },
        { label: "Avg. Photos", value: "1.59", note: "per active user" },
        { label: "Avg. Prompts", value: "4.73", note: "per active user" },
        { label: "Avg. Tastes", value: "22.99", note: "after source validation" }
      ],
      validation: {
        eyebrow: "DATA VALIDATION",
        title: "I did not keep a metric that looked implausible.",
        before: "0.16",
        after: "22.99",
        unit: "items / user",
        text: "The first calculation used tastelikes and produced an implausible 0.16 tastes per user. After checking the admin view and data semantics, I corrected the source to users.taste + coreTaste and recalculated the metric."
      },
      referral: {
        eyebrow: "PRODUCT METRIC",
        title: "Weekly Referral Rate",
        text: "Redefined the metric as unique inviters in each week divided by total users in that week, rather than using invitee counts.",
        values: [
          ["7/26", 26.5], ["8/02", 11.3], ["8/09", 21.6], ["8/16", 11.7],
          ["8/23", 10.3], ["8/30", 19.7], ["9/06", 25.1]
        ]
      },
      recommendation: {
        eyebrow: "RECOMMENDATION ANALYTICS",
        title: "Exposure Concentration & Recommendation Coverage",
        stats: [
          { value: "0.293", label: "Pearson · attractiveness vs exposure" },
          { value: "0.436", label: "Spearman · attractiveness vs exposure" },
          { value: "0.93", label: "Average runway" }
        ],
        text: "Expanded shownProfileIds by exposed user, calculated exposure counts, and compared exposure against attractiveness and candidate-pool runway. Average exposure increased from about 8.39 to 28.25 across attractiveness buckets."
      },
      query: {
        eyebrow: "MONGODB / DATA WORK",
        title: "What I actually did with the data",
        items: [
          ["Collection Discovery", "Found that transactions lacked userId and traced payment analysis to transactionhistories."],
          ["Join & Aggregation", "Used $lookup, $group, $match, $project, $map, $dateTrunc, and $unwind across user, payment, referral, and exposure logs."],
          ["User-level Metrics", "Extracted paying users, repeat payers, active-device users, inviters, and other unique-user metrics."],
          ["Dashboard / Reporting", "For ratio metrics that did not map cleanly to Amplitude/GA aggregation, designed a MongoDB → PyMongo → Pandas reporting alternative."]
        ]
      },
      amplitude: {
        eyebrow: "AMPLITUDE",
        title: "Retention and cohort analysis was done in a product analytics tool.",
        text: "Used cohort filters and rolling windows in Amplitude to review retention and revisit behavior. When UI aggregation did not match the desired metric definition, I compared it with MongoDB-based calculations."
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
      koTitle: "Olist 셀러 유치 전략 분석",
      enTitle: "Olist Seller Acquisition Strategy",
      koDesc: "배송 병목과 지역별 수요·공급 불균형을 분석해 셀러 유치 우선지역과 운영 개선 방향을 제안했습니다.",
      enDesc: "Analyzed delivery bottlenecks and regional demand-supply imbalance to prioritize seller-acquisition regions.",
      resultKo: "셀러 유치 우선지역 도출",
      resultEn: "Seller-acquisition priorities",
      tags: ["SQL", "Tableau", "E-commerce"]
    },
    {
      koTitle: "50세 이상 인지장애 경험 여부 예측",
      enTitle: "Cognitive Impairment Experience Prediction",
      koDesc: "False Negative 비용을 고려해 Recall 중심으로 모델을 비교하고 임계값 조정으로 탐지 성능을 개선했습니다.",
      enDesc: "Prioritized recall because of false-negative cost and improved detection through model comparison and threshold adjustment.",
      resultKo: "Recall 0.72 → 0.78",
      resultEn: "Recall 0.72 → 0.78",
      tags: ["Python", "Classification", "Threshold"]
    },
    {
      koTitle: "열수요 예측",
      enTitle: "Heat Demand Forecasting",
      koDesc: "기상 데이터와 열수요를 결합해 시계열 모델을 비교하고 예측 성능을 개선했습니다.",
      enDesc: "Combined weather and heat-demand data and compared time-series models.",
      resultKo: "검증 RMSE 17.2",
      resultEn: "Validation RMSE 17.2",
      tags: ["Python", "LSTM", "Time Series"]
    },
    {
      koTitle: "LendingClub 리스크 분류",
      enTitle: "LendingClub Risk Analysis",
      koDesc: "부실 위험군을 선별하고 임계값에 따른 잠재 손실 방어 시나리오를 분석했습니다.",
      enDesc: "Screened high-risk loans and evaluated a threshold-based potential-loss avoidance scenario.",
      resultKo: "잠재 손실 약 15% 방어 시나리오",
      resultEn: "Scenario: ~15% potential loss avoidance",
      tags: ["Python", "Finance", "Classification"]
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

function renderVersionTabs(activeKey) {
  const tabs = document.getElementById("versionTabs");
  if (!tabs) return;
  tabs.innerHTML = "";
  Object.entries(profile.versions).forEach(([key, ver]) => {
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
  document.getElementById("mainProjectTags").innerHTML =
    data.tags.map(t => `<span class="meta-chip">${t}</span>`).join("");

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
          <small>${data.validation.unit}</small>
        </div>
        <p>${data.validation.text}</p>
      </article>

      <article class="case-card">
        <div class="mini-label">${data.referral.eyebrow}</div>
        <h3>${data.referral.title}</h3>
        <p>${data.referral.text}</p>
        <div class="mini-bar-chart">${barsMarkup(data.referral.values)}</div>
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
        <div class="mini-label">DATA STRUCTURE</div>
        <h3>주문·고객·판매자·배송 데이터를 하나의 분석 흐름으로 결합</h3>
        <p>지역별 주문 수요와 판매자 공급, 배송 지연을 함께 비교할 수 있도록 분석 단위를 정리했습니다.</p>
      </article>
      <article class="case-card">
        <div class="mini-label">BUSINESS QUESTION</div>
        <h3>“어디에 셀러를 더 유치해야 배송 구조가 좋아지는가?”</h3>
        <p>수요는 높지만 판매자 공급이 부족하고 배송 병목이 나타나는 지역을 우선순위로 정리했습니다.</p>
      </article>
      <article class="case-card">
        <div class="mini-label">OUTPUT</div>
        <h3>분석 결과를 운영 우선순위로 변환</h3>
        <p>단순 EDA가 아니라 셀러 확보와 지역 운영 전략에 사용할 수 있는 방향으로 결과를 압축했습니다.</p>
      </article>
    </div>
  `;
}

function renderEvidence(key) {
  const isEnglish = profile.versions[key].lang === "en";
  document.getElementById("caseEvidenceTitle").textContent =
    key === "strategy" ? "How the Analysis Became a Decision" : isEnglish ? "What I Actually Analyzed" : "실제로 분석한 것";
  document.getElementById("caseEvidenceDesc").textContent =
    key === "strategy"
      ? "결과물을 많이 나열하기보다 실제 비즈니스 질문과 분석 흐름을 보여줍니다."
      : isEnglish
        ? "No original chart images were available, so the verified analysis numbers are visualized directly on the page."
        : "원본 차트 이미지는 없지만, 당시 확정한 지표와 검증 과정을 그대로 웹에서 다시 시각화했습니다.";

  if (key === "strategy") renderStrategyEvidence();
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

function renderProjects(lang) {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  profile.projects.forEach(p => {
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
    const text = lang === "ko" && item.label === "Portfolio PDF" ? "PDF 포트폴리오 열기" : item.text;
    node.innerHTML = `<strong>${item.label}</strong><span>${text}</span>`;
    wrap.appendChild(node);
  });
}

function renderCopy(key) {
  const en = profile.versions[key].lang === "en";
  const strategy = key === "strategy";

  document.getElementById("mainProjectSectionTitle").textContent =
    strategy ? "Main Business Analytics Case" : en ? "Main Product Analytics Case" : "Main Product Analytics Case";
  document.getElementById("mainProjectSectionDesc").textContent =
    strategy
      ? "프로젝트 목록보다 실제 비즈니스 질문과 분석 흐름을 먼저 보여줍니다."
      : en
        ? "A real-service case focused on metric definition, data validation, and product decision support."
        : "프로젝트 이름보다 실제 서비스에서 무엇을 정의하고, 검증하고, 분석했는지를 먼저 보여줍니다.";

  document.getElementById("experienceTitle").textContent = en ? "Work Experience" : "Work Experience";
  document.getElementById("experienceDesc").textContent =
    en ? "Hands-on analysis experience with real service and customer data." : "학습 이력보다 실제 데이터로 무엇을 했는지 먼저 배치했습니다.";

  document.getElementById("projectsTitle").textContent = en ? "Selected Projects" : "Selected Projects";
  document.getElementById("projectSectionDesc").textContent =
    en ? "Supporting projects that show breadth without diluting the main product-analytics identity."
       : "대표 경험을 흐리지 않도록, 다른 프로젝트는 분석 역량의 폭을 보여주는 정도로 압축했습니다.";

  document.getElementById("strengthsTitle").textContent = en ? "Skills I Use" : "Skills I Use";
  document.getElementById("strengthDesc").textContent =
    en ? "Tools and methods are shown with what they were actually used for."
       : "상급/중상 같은 자기평가 대신 실제로 무엇을 할 수 있는지만 적었습니다.";

  document.getElementById("educationTitle").textContent = en ? "Training" : "Training";
  document.getElementById("educationDesc").textContent =
    en ? "Kept compact so that training does not compete with work evidence."
       : "교육은 경력과 프로젝트보다 앞에 나오지 않도록 최소한으로 줄였습니다.";

  document.getElementById("contactTitle").textContent = "Contact";
  document.getElementById("contactDesc").textContent =
    en ? "GitHub, LinkedIn, email, and portfolio PDF." : "GitHub, LinkedIn, 이메일, PDF 포트폴리오입니다.";
}

function render(key = currentVersion()) {
  const ver = profile.versions[key];
  const lang = ver.lang;

  document.body.classList.remove("theme-strategy", "theme-advanced");
  if (ver.theme === "strategy") document.body.classList.add("theme-strategy");
  if (ver.theme === "advanced") document.body.classList.add("theme-advanced");

  renderVersionTabs(key);
  renderHero(key);
  renderMainProject(key);
  renderEvidence(key);
  renderExperience(lang);
  renderProjects(lang);
  renderSkills(key);
  renderTraining(lang);
  renderContacts(lang);
  renderCopy(key);
}

render();
