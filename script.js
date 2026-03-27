const profile = {
  name: "전략가 렴",
  contacts: [
    { label: "GitHub", value: "https://github.com/ryemso" },
    { label: "Portfolio PDF", value: "기존 PDF 포트폴리오와 함께 제출 가능" },
    { label: "Versioned Link", value: "회사별로 ?ver=analyst / ?ver=strategy / ?ver=advanced 링크 분리 제출" },
    { label: "Email", value: "실제 이메일 주소 확인 후 반영 필요" }
  ],
  projects: [
    {
      title: "날씨 데이터를 활용한 열수요 예측 모델 개발",
      summary: "기상 데이터와 시간 단위 열수요 데이터를 결합해 운영 효율 관점의 예측 모델을 설계한 개인 프로젝트입니다.",
      metric: "핵심 성과",
      metricValue: "RMSE 21% 개선",
      tags: ["Python", "TensorFlow", "LSTM", "Bi-LSTM", "Attention", "Time Series"],
      bullets: [
        "단순 LSTM부터 CNN-LSTM, Bi-LSTM + Attention까지 비교하며 시계열 예측 성능을 단계적으로 개선했습니다.",
        "시퀀스 손실과 데이터 단절 문제를 줄이기 위해 입력 구간과 패딩 방식을 다시 설계했습니다.",
        "RMSE 21.7 → 17.2, R² 0.83까지 개선하며 운영비 절감과 자원 낭비 방어 가능성을 제시했습니다."
      ],
      focus: ["analyst", "strategy", "advanced"]
    },
    {
      title: "머신러닝 스태킹 기반 인지장애 예측 모델 개발",
      summary: "50세 이상 데이터를 대상으로 인지장애 경험 여부를 예측하고, recall 중심으로 성능을 최적화한 분류 프로젝트입니다.",
      metric: "핵심 성과",
      metricValue: "Recall 0.72 → 0.78",
      tags: ["Scikit-learn", "Optuna", "XGBoost", "LightGBM", "CatBoost", "Stacking"],
      bullets: [
        "XGBoost, LightGBM, CatBoost, Lasso, Logistic Regression을 비교한 뒤 스태킹 구조로 확장했습니다.",
        "Optuna 기반 하이퍼파라미터 튜닝과 메타 모델 입력 구성을 직접 설계했습니다.",
        "단일 모델 F1 0.76에서 0.81, Recall 0.72에서 0.78까지 개선하며 조기 선별 활용 가능성을 높였습니다."
      ],
      focus: ["analyst", "strategy", "advanced"]
    },
    {
      title: "Olist 이커머스 셀러 유치 전략 분석",
      summary: "브라질 이커머스 데이터를 바탕으로 배송 병목과 수요-공급 불균형을 분석해 판매자 유치 우선순위를 도출한 프로젝트입니다.",
      metric: "핵심 성과",
      metricValue: "이탈률 20% 개선",
      tags: ["EDA", "Pandas", "SQL", "Tableau", "Marketplace", "Business Insight"],
      bullets: [
        "주문량, 판매자 수, 배송일, 리뷰 점수, 지역 밀도를 결합해 셀러 유치 우선 지역을 다시 정의했습니다.",
        "Seller 1명 유입 시 주문 5.3건 증가 효과를 회귀 분석으로 확인하고 공급 병목 해소 전략을 제안했습니다.",
        "북동부 지역 PA, MA를 물류 허브 증설 후보로 제시하며 재구매율과 churn 개선 관점으로 연결했습니다."
      ],
      focus: ["analyst", "strategy", "advanced"]
    },
    {
      title: "LendingClub 대출 리스크 분류 분석",
      summary: "부실 가능성이 높은 대출을 조기에 선별해 금융 손실을 방어하는 분류 모델을 설계한 프로젝트입니다.",
      metric: "핵심 성과",
      metricValue: "잠재 손실 15% 방어",
      tags: ["Classification", "Feature Engineering", "Finance", "Risk Analysis", "Python"],
      bullets: [
        "승인 전 활용 가능한 변수 중심으로 피처를 정제하고, 누수 가능성을 점검하며 모델링했습니다.",
        "부실 고객 선별 구조를 통해 잠재 손실 약 15% 방어 가능성을 제시했습니다.",
        "정확도보다 실제 리스크 감지에 가까운 기준으로 모델 성능을 비교하고 결과를 해석했습니다."
      ],
      focus: ["analyst", "strategy"]
    },
    {
      title: "게임 데이터 기반 TFT 메타 분석",
      summary: "단순 승률 비교를 넘어서 조합 효율과 메타 흐름을 읽는 방식으로 게임 데이터를 분석한 프로젝트입니다.",
      metric: "핵심 성과",
      metricValue: "메타 인사이트 도출",
      tags: ["Game Analytics", "EDA", "Visualization", "Meta Analysis"],
      bullets: [
        "패치 환경에서 강한 조합과 약한 조합을 단순 나열이 아니라 구조적으로 해석했습니다.",
        "유저 선택 흐름과 전략 효율 관점에서 메타를 설명하는 분석 문서를 구성했습니다.",
        "게임 데이터 분석 포지션에 맞는 해석형 포트폴리오 사례로 활용할 수 있게 정리했습니다."
      ],
      focus: ["analyst", "strategy"]
    },
    {
      title: "Money War 웹게임 기획 및 프로토타입",
      summary: "경제 개념을 게임 시스템으로 번역해 웹에서 동작하는 프로토타입을 직접 설계하고 구현한 프로젝트입니다.",
      metric: "핵심 성과",
      metricValue: "웹 프로토타입 구현",
      tags: ["HTML", "CSS", "JavaScript", "Game Design", "Prototype"],
      bullets: [
        "스테이지 구조, 보스 패턴, 환율 기믹, 장비·가챠 시스템 등 핵심 루프를 직접 설계했습니다.",
        "게임 시스템을 사용자 경험 흐름과 수치 밸런스 관점에서 반복적으로 다듬었습니다.",
        "분석가를 넘어 문제 구조화와 시스템 설계 역량을 보여주는 프로젝트로 배치했습니다."
      ],
      focus: ["strategy", "advanced"]
    }
  ],
  workflow: [
    ["Problem", "막연한 주제가 아니라 실제로 해결할 가치가 있는 문제를 먼저 정의합니다."],
    ["Measure", "무엇을 개선이라고 볼지, 어떤 지표가 핵심인지 먼저 설계합니다."],
    ["Analyze", "EDA, 피처 엔지니어링, 모델 비교, 시각화를 통해 원인과 패턴을 찾습니다."],
    ["Action", "분석 결과를 끝내지 않고 실행 방향과 우선순위 제안으로 연결합니다."]
  ],
  experience: [
    ["데이터 분석 프로젝트", "EDA, 분류, 시계열 예측, 비즈니스 문제 해결형 프로젝트를 개인 주도로 수행했습니다."],
    ["모델링 역량", "머신러닝과 딥러닝을 직접 비교하고 튜닝하며 성능과 해석 가능성을 함께 검토했습니다."],
    ["전략형 사고", "숫자를 읽는 데서 끝나지 않고, 의사결정과 실행 제안으로 연결하는 데 강점이 있습니다."]
  ]
};

const versions = {
  analyst: {
    label: "DATA ANALYST VERSION",
    shareLabel: "데이터 분석가용 링크",
    title: "비즈니스 문제를 데이터로 해석하고, 읽히는 인사이트로 정리하는 데이터 분석가",
    desc: "분석 결과를 단순 수치로 끝내지 않고, 채용 담당자가 빠르게 이해할 수 있는 구조로 정리한 버전입니다. EDA, 시각화, 성과 해석, 지표 설계 역량을 전면에 배치했습니다.",
    chips: ["EDA", "Visualization", "Insight", "Python / SQL", "Business Interpretation"],
    positioningTitle: "분석가 포지셔닝",
    positioningDesc: "데이터를 다루는 사람을 넘어, 문제를 읽고 의미를 해석해 전달 가능한 구조로 바꾸는 분석가라는 인상을 주는 데 초점을 맞춥니다.",
    impactDesc: "핵심 수치와 프로젝트 결과를 빠르게 보여주고, 각 프로젝트가 어떤 문제를 해결했는지 한 줄로 읽히게 구성했습니다.",
    stats: [
      ["대표 포지션", "데이터 분석가", "EDA, 지표 해석, 시각화, 인사이트 정리에 강점"],
      ["대표 프로젝트", "Olist · Heat Demand", "비즈니스 해석형 분석과 시계열 예측 사례를 함께 보유"],
      ["핵심 메시지", "숫자를 읽고 의미를 말하는 사람", "결과를 의사결정 언어로 번역합니다."]
    ],
    projectDesc: "해석력과 가독성을 기준으로 프로젝트를 배치한 버전입니다.",
    strengthDesc: "스크롤 몇 번만 내려도 무엇을 분석했고, 무엇을 바꿨는지 바로 읽히는 구조를 사용합니다.",
    skills: [
      ["EDA / 가설 수립", "데이터 분포 파악, 원인 탐색, 문제 재정의"],
      ["데이터 처리", "Python, Pandas, SQL 기반 전처리와 분석"],
      ["시각화", "Matplotlib, Tableau 기반 인사이트 전달"],
      ["문서화", "문제-결과-액션 구조의 보고서형 정리"]
    ],
    experienceDesc: "실무형 데이터 분석 직무에 맞춰 해석력, 전달력, 비즈니스 연결성을 강조한 버전입니다.",
    submission: [
      ["분석가 링크", "https://your-id.github.io/portfolio/?ver=analyst"],
      ["활용 상황", "데이터 분석가, BA, 게임 데이터 분석 직무 지원 시 제출"],
      ["추가 팁", "PDF 포트폴리오와 함께 보내면 신뢰도가 더 높아집니다."]
    ],
    projectOrder: [
      "Olist 이커머스 셀러 유치 전략 분석",
      "날씨 데이터를 활용한 열수요 예측 모델 개발",
      "머신러닝 스태킹 기반 인지장애 예측 모델 개발",
      "LendingClub 대출 리스크 분류 분석",
      "게임 데이터 기반 TFT 메타 분석"
    ],
    theme: "analyst"
  },
  strategy: {
    label: "BUSINESS / STRATEGY VERSION",
    shareLabel: "전략형 링크",
    title: "숫자를 넘어, 무엇을 해야 하는지 제안하는 전략형 분석가",
    desc: "사업 관점, 우선순위 설정, 실행 방향 도출에 무게를 둔 버전입니다. 프로젝트를 성능 자랑이 아니라 문제 해결 스토리로 재배치해 전략 직무에도 읽히게 구성했습니다.",
    chips: ["Strategy", "Prioritization", "Business Problem", "Insight to Action", "Decision Support"],
    positioningTitle: "전략 포지셔닝",
    positioningDesc: "프로젝트를 단순한 분석 결과가 아니라, 어떤 선택을 해야 하는지 제안하는 근거 자료처럼 읽히도록 구성합니다.",
    impactDesc: "성과 수치보다도 왜 이 분석이 필요했고, 어떤 방향 제안으로 이어졌는지를 더 강하게 보여주는 버전입니다.",
    stats: [
      ["대표 포지션", "전략형 분석가", "비즈니스 목표와 데이터 해석을 함께 연결"],
      ["대표 프로젝트", "Olist · LendingClub", "우선순위 도출과 리스크 대응 관점이 강한 사례"],
      ["핵심 메시지", "문제를 구조화해 방향을 제안하는 사람", "숫자를 실행 언어로 바꿉니다."]
    ],
    projectDesc: "의사결정과 우선순위 제안이 잘 드러나는 프로젝트를 앞쪽에 배치한 버전입니다.",
    strengthDesc: "채용 담당자가 이 사람은 분석을 넘어 방향까지 제시하는구나라고 느끼도록 메시지를 정리했습니다.",
    skills: [
      ["문제 구조화", "복잡한 현상을 실행 가능한 질문으로 재정리"],
      ["의사결정 지원", "우선순위, 리스크, 기대효과 정리"],
      ["비즈니스 해석", "모델 성능을 실무 맥락으로 번역"],
      ["전략 커뮤니케이션", "결론이 읽히는 문장과 화면 구조 설계"]
    ],
    experienceDesc: "기획, 전략, BA 성격의 포지션에도 맞출 수 있도록 실행 제안과 사업 관점을 강조한 버전입니다.",
    submission: [
      ["전략 링크", "https://your-id.github.io/portfolio/?ver=strategy"],
      ["활용 상황", "기획, 전략, 비즈니스 분석, 마케팅 전략 직무 지원 시 제출"],
      ["추가 팁", "회사명에 맞는 한 줄 소개만 바꿔도 맞춤형 링크처럼 활용할 수 있습니다."]
    ],
    projectOrder: [
      "Olist 이커머스 셀러 유치 전략 분석",
      "LendingClub 대출 리스크 분류 분석",
      "머신러닝 스태킹 기반 인지장애 예측 모델 개발",
      "날씨 데이터를 활용한 열수요 예측 모델 개발",
      "Money War 웹게임 기획 및 프로토타입",
      "게임 데이터 기반 TFT 메타 분석"
    ],
    theme: "strategy"
  },
  advanced: {
    label: "ADVANCED DARK VERSION",
    shareLabel: "고급 다크 버전 링크",
    title: "강한 첫인상과 구조적 전달력을 함께 담은 고급형 포트폴리오",
    desc: "고급 PDF 포트폴리오의 톤을 웹으로 옮긴 버전입니다. 내용은 같지만, 화면 몰입도와 완성도, 인상을 더 강하게 느끼게 하는 다크 테마 중심 구성을 적용했습니다.",
    chips: ["Dark Portfolio", "Premium Tone", "High Impact", "Focused Reading", "Structured Storytelling"],
    positioningTitle: "고급형 포지셔닝",
    positioningDesc: "읽는 사람에게 정돈된 실력과 강한 인상을 동시에 주는 방향으로 톤을 설계했습니다.",
    impactDesc: "콘텐츠는 유지하되, 포트폴리오 자체의 완성도와 브랜딩 감도를 더 강하게 전달하는 버전입니다.",
    stats: [
      ["대표 포지션", "프리미엄 포트폴리오", "인상과 완성도를 중요하게 보는 상황에 적합"],
      ["대표 프로젝트", "Heat Demand · Dementia · Olist", "성과 수치가 또렷한 프로젝트 중심 구성"],
      ["핵심 메시지", "실력과 정리력을 동시에 보여주는 사람", "화면 자체가 하나의 결과물처럼 읽히게 합니다."]
    ],
    projectDesc: "성과가 강한 프로젝트를 중심으로, 톤과 시선 흐름까지 고려해 배치한 버전입니다.",
    strengthDesc: "포트폴리오를 단순 자료가 아니라 브랜딩 자산처럼 활용하고 싶을 때 적합한 버전입니다.",
    skills: [
      ["정보 구조", "한 화면에서 핵심 메시지가 먼저 읽히는 배치"],
      ["성과 강조", "숫자와 키워드를 전면 배치해 기억에 남게 구성"],
      ["콘텐츠 재활용", "한 데이터로 여러 버전을 운영하는 구조"],
      ["배포 운영", "GitHub Pages 기반 링크 분기와 관리 용이성"]
    ],
    experienceDesc: "지원 서류 중 포트폴리오의 인상과 완성도를 더 강하게 보여주고 싶을 때 활용하는 버전입니다.",
    submission: [
      ["고급 링크", "https://your-id.github.io/portfolio/?ver=advanced"],
      ["활용 상황", "스타트업, 감도 높은 조직, 포트폴리오 비중이 큰 지원처"],
      ["추가 팁", "프로필 사진, 대표 문장, 컬러 톤까지 맞추면 브랜딩 효과가 더 커집니다."]
    ],
    projectOrder: [
      "날씨 데이터를 활용한 열수요 예측 모델 개발",
      "머신러닝 스태킹 기반 인지장애 예측 모델 개발",
      "Olist 이커머스 셀러 유치 전략 분석",
      "Money War 웹게임 기획 및 프로토타입"
    ],
    theme: "advanced"
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
  tabs.innerHTML = "";
  Object.entries(versions).forEach(([key, ver]) => {
    const btn = el("button", `version-tab ${key === activeKey ? "active" : ""}`, ver.label.replace(" VERSION", ""));
    btn.addEventListener("click", () => {
      setVersionInUrl(key);
      render(key);
    });
    tabs.appendChild(btn);
  });
}

function renderLinks(activeKey) {
  const container = document.getElementById("versionLinks");
  container.innerHTML = "";
  Object.entries(versions).forEach(([key, ver]) => {
    const href = `${location.origin}${location.pathname}?ver=${key}`;
    const item = el("a", "version-link");
    item.href = href;
    item.innerHTML = `<strong>${ver.label.replace(" VERSION", "")}</strong><span>${href}</span>`;
    if (key === activeKey) item.style.outline = "2px solid var(--accent)";
    container.appendChild(item);
  });
  document.getElementById("shareTitle").textContent = versions[activeKey].shareLabel;
}

function renderStats(stats) {
  const grid = document.getElementById("statsGrid");
  grid.innerHTML = "";
  stats.forEach(([title, value, desc]) => {
    const card = el("div", "card");
    card.innerHTML = `
      <div class="mini-label">${title}</div>
      <div class="stat-number">${value}</div>
      <div class="muted">${desc}</div>
    `;
    grid.appendChild(card);
  });
}

function renderProjects(key) {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  const filtered = profile.projects.filter(project => project.focus.includes(key));
  const order = versions[key].projectOrder || [];
  filtered.sort((a, b) => {
    const ai = order.indexOf(a.title);
    const bi = order.indexOf(b.title);
    const aRank = ai === -1 ? 999 : ai;
    const bRank = bi === -1 ? 999 : bi;
    return aRank - bRank;
  });
  filtered.forEach(project => {
    const card = el("article", "card");
    const bullets = project.bullets.map(b => `<li>${b}</li>`).join("");
    const tags = project.tags.map(tag => `<span class="chip">${tag}</span>`).join("");
    card.innerHTML = `
      <div class="project-header">
        <div>
          <h3>${project.title}</h3>
          <p class="muted" style="margin: 8px 0 0;">${project.summary}</p>
        </div>
        <div class="metric-box">
          <span class="mini-label">${project.metric}</span>
          <strong>${project.metricValue}</strong>
        </div>
      </div>
      <div class="chip-row">${tags}</div>
      <ul class="project-list">${bullets}</ul>
    `;
    grid.appendChild(card);
  });
}

function renderSkillGrid(items) {
  const grid = document.getElementById("skillGrid");
  grid.innerHTML = "";
  items.forEach(([title, desc]) => {
    const box = el("div", "skill-box", `<strong>${title}</strong><span class="muted">${desc}</span>`);
    grid.appendChild(box);
  });
}

function renderTimeline(targetId, items) {
  const wrap = document.getElementById(targetId);
  wrap.innerHTML = "";
  items.forEach(([title, desc]) => {
    const item = el("div", "timeline-item", `<strong>${title}</strong><div>${desc}</div>`);
    wrap.appendChild(item);
  });
}

function renderContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";
  profile.contacts.forEach(({ label, value }) => {
    const item = el("div", "contact-item", `<strong>${label}</strong><div class="muted">${value}</div>`);
    list.appendChild(item);
  });
}

function render(key = currentVersion()) {
  const ver = versions[key];
  document.body.classList.remove("theme-strategy", "theme-advanced");
  if (ver.theme === "strategy") document.body.classList.add("theme-strategy");
  if (ver.theme === "advanced") document.body.classList.add("theme-advanced");

  document.getElementById("heroEyebrow").textContent = ver.label;
  document.getElementById("heroTitle").textContent = ver.title;
  document.getElementById("heroDesc").textContent = ver.desc;
  document.getElementById("positioningTitle").textContent = ver.positioningTitle;
  document.getElementById("positioningDesc").textContent = ver.positioningDesc;
  document.getElementById("impactDesc").textContent = ver.impactDesc;
  document.getElementById("projectSectionDesc").textContent = ver.projectDesc;
  document.getElementById("strengthDesc").textContent = ver.strengthDesc;
  document.getElementById("experienceDesc").textContent = ver.experienceDesc;

  const chipWrap = document.getElementById("heroChips");
  chipWrap.innerHTML = ver.chips.map(chip => `<span class="chip">${chip}</span>`).join("");

  renderVersionTabs(key);
  renderLinks(key);
  renderStats(ver.stats);
  renderProjects(key);
  renderSkillGrid(ver.skills);
  renderTimeline("workflowList", profile.workflow);
  renderTimeline("experienceList", profile.experience);
  renderTimeline("submissionList", ver.submission);
  renderContacts();
}

render();
