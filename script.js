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
  experience: {
    ko: [
      ["데이터 분석 프로젝트", "EDA, 분류, 시계열 예측, 비즈니스 문제 해결형 프로젝트를 개인 주도로 수행했습니다."],
      ["모델링 역량", "머신러닝과 딥러닝 모델을 비교하고 조정하며 성능과 해석 가능성을 함께 검토했습니다."],
      ["전략형 사고", "숫자를 읽는 데서 끝나지 않고, 의사결정과 실행 제안으로 연결하는 데 강점이 있습니다."]
    ],
    en: [
      ["Data Analysis Projects", "Led personal projects in EDA, classification, time-series forecasting, and business problem solving."],
      ["Modeling Capability", "Compared and tuned machine learning and deep learning models with attention to both performance and interpretability."],
      ["Strategic Thinking", "Connects numeric findings to decision-making and action proposals instead of stopping at analysis."]
    ]
  }
};

const versions = {
  analyst: {
    label: "DATA ANALYST",
    title: "시계열 데이터를 해석해 예측 모델로 연결하는 데이터 분석가",
    desc: "하나의 메인 프로젝트를 중심으로 문제 정의, 모델링 과정, 성능 개선 흐름이 바로 읽히도록 구성했습니다.",
    summary: "분석, 모델링, 성능 개선이 한 흐름으로 읽히는 포트폴리오입니다.",
    shareLabel: "데이터 분석가 링크",
    theme: "analyst",
    lang: "ko"
  },
  strategy: {
    label: "BUSINESS / STRATEGY",
    title: "분석 결과를 우선순위와 실행 방향으로 연결하는 전략형 분석가",
    desc: "대표 프로젝트를 중심으로 문제 해결 과정이 보이게 정리하고, 나머지 프로젝트는 의사결정 관점의 카드로 압축했습니다.",
    summary: "결과보다도 문제를 어떻게 구조화했는지가 보이도록 정리했습니다.",
    shareLabel: "전략형 링크",
    theme: "strategy",
    lang: "ko"
  },
  advanced: {
    label: "ENGLISH VERSION",
    title: "A data analyst who turns time-series problems into clear, decision-ready insight",
    desc: "This version focuses on one main project and presents the rest in compact card format for faster reading.",
    summary: "A focused portfolio built around one flagship project and a clean supporting project set.",
    shareLabel: "English Version Link",
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

function renderLinks(activeKey) {
  const container = document.getElementById("versionLinks");
  if (!container) return;
  container.innerHTML = "";
  Object.entries(versions).forEach(([key, ver]) => {
    const href = `${location.origin}${location.pathname}?ver=${key}`;
    const item = el("a", "version-link");
    item.href = href;
    item.innerHTML = `<strong>${ver.shareLabel}</strong><span>${href}</span>`;
    container.appendChild(item);
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

function renderExperience(lang) {
  const wrap = document.getElementById("experienceList");
  if (!wrap) return;
  wrap.innerHTML = "";
  profile.experience[lang].forEach(([title, desc]) => {
    const item = el("div", "summary-item");
    item.innerHTML = `<strong>${title}</strong><p>${desc}</p>`;
    wrap.appendChild(item);
  });
}

function renderContacts(lang) {
  const wrap = document.getElementById("contactList");
  if (!wrap) return;
  wrap.innerHTML = "";
  profile.contacts.forEach((item) => {
    let text = item.text;
    if (lang === "en") {
      if (item.label === "Email") text = "Replace with your actual email";
      if (item.label === "Versioned Link") text = "Open analyst link";
    } else {
      if (item.label === "Email") text = "qt0177@gmail.com";
      if (item.label === "Portfolio PDF") text = "PDF 포트폴리오 열기";
      if (item.label === "Versioned Link") text = "분석가 버전 링크 열기";
    }
    const node = el("a", "contact-link");
    node.href = item.href;
    if (item.href.startsWith("http") || item.href.startsWith("./")) {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
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
  const positioningDesc = document.getElementById("positioningDesc");
  if (positioningDesc) positioningDesc.textContent = ver.summary;

  const mainProjectBtn = document.getElementById("mainProjectBtn");
  if (mainProjectBtn) mainProjectBtn.textContent = isEnglish ? "View Main Project" : "메인 프로젝트 보기";
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) contactBtn.textContent = isEnglish ? "View Contact" : "연락처 보기";

  const versionLabel = document.getElementById("versionLabel");
  if (versionLabel) versionLabel.textContent = isEnglish ? "Version" : "버전 선택";
  const shareLabel = document.getElementById("shareLabel");
  if (shareLabel) shareLabel.textContent = isEnglish ? "Shared Link" : "공유 링크";
  const summaryLabel = document.getElementById("summaryLabel");
  if (summaryLabel) summaryLabel.textContent = isEnglish ? "Summary" : "한 줄 요약";

  const mainProjectSectionDesc = document.getElementById("mainProjectSectionDesc");
  if (mainProjectSectionDesc) mainProjectSectionDesc.textContent = isEnglish
    ? "The portfolio is centered on one flagship project so the problem-solving flow is easy to follow."
    : "하나의 대표 프로젝트를 중심으로 문제 정의부터 결과까지 흐름이 보이도록 구성했습니다.";

  const projectSectionDesc = document.getElementById("projectSectionDesc");
  if (projectSectionDesc) projectSectionDesc.textContent = isEnglish
    ? "The rest of the work is presented in compact cards for faster reading."
    : "나머지 프로젝트는 카드 형태로 간결하게 정리했습니다.";

  const strengthDesc = document.getElementById("strengthDesc");
  if (strengthDesc) strengthDesc.textContent = isEnglish
    ? "My current strengths are time-series modeling, optimization, and turning results into readable insight."
    : "현재 저는 시계열 데이터 해석, 모델 최적화, 비즈니스 인사이트 정리에 강점이 있습니다.";

  const experienceDesc = document.getElementById("experienceDesc");
  if (experienceDesc) experienceDesc.textContent = isEnglish
    ? "Most of my experience comes from personal projects built around analysis, modeling, performance improvement, and reporting."
    : "개인 프로젝트 중심으로 분석, 모델링, 성능 개선, 보고서 정리 경험을 축적했습니다.";

  const contactDesc = document.getElementById("contactDesc");
  if (contactDesc) contactDesc.textContent = isEnglish
    ? "Each contact item is clickable and opens directly."
    : "연락처는 클릭하면 바로 이동하도록 구성했습니다.";

  renderVersionTabs(key);
  renderLinks(key);
  renderMainProject(lang);
  renderOtherProjects(lang);
  renderStrengths(lang);
  renderExperience(lang);
  renderContacts(lang);
}

render();
