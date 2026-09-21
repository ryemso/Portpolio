// AI / ML focused portfolio layer for ?ver=ai
// Keeps the existing Product/Growth portfolio intact and adds a role-specific view.

profile.versions = {
  analyst: profile.versions.analyst,
  ai: {
    label: "AI / MACHINE LEARNING",
    title: "데이터에서 문제를 정의하고, ML/DL 모델을 서비스 과제로 연결하는 AI 엔지니어",
    desc: "시계열·분류 문제에서 데이터 전처리부터 모델 설계·검증·오류 수정까지 수행했고, 실제 서비스 로그 분석 경험을 바탕으로 AI가 활용될 수 있는 문제와 데이터를 정의합니다.",
    theme: "advanced",
    lang: "ko",
    heroStack: ["Python", "Scikit-learn", "TensorFlow/Keras", "LSTM / Attention", "XGBoost", "MongoDB"]
  },
  strategy: profile.versions.strategy,
  advanced: profile.versions.advanced,
  hynix: {
    ...profile.versions.hynix,
    label: "SK hynix AI"
  }
};

profile.mainProjects.ai = {
  eyebrow: "MAIN AI / ML CASE · HEAT DEMAND FORECASTING",
  title: "기상 데이터 기반 시간대별 열수요 예측",
  intro: "시간 단위 기상·열수요 데이터를 기반으로 Bi-LSTM, CNN-LSTM, BiLSTM+Attention 구조를 비교하고, 시퀀스 생성·스케일링·데이터 경계 문제를 수정하며 예측 성능을 개선했습니다.",
  resultLabel: "VALIDATION",
  resultValue: "RMSE 21.7 → 17.2",
  tags: ["Python", "TensorFlow/Keras", "Bi-LSTM", "CNN-LSTM", "Attention", "Time Series"],
  flow: [
    ["01 · Problem", "시간 단위 열수요를 기상·시간 변수로 예측하는 시계열 회귀 문제를 정의했습니다."],
    ["02 · Experiment", "Bi-LSTM → CNN-LSTM → BiLSTM+Attention 구조를 비교하며 모델 구조와 하이퍼파라미터를 실험했습니다."],
    ["03 · Diagnose", "시퀀스 생성 과정과 Dataset boundary에서 연속 시점이 손실되고, 스케일링 과정에서 누수 가능성이 생기는 문제를 확인했습니다."],
    ["04 · Improve", "Sliding Window·Padding과 Train-only Scaling을 적용해 전체 예측 구간의 연속성과 검증 신뢰도를 높였습니다."],
    ["05 · Result", "검증 RMSE를 21.7에서 17.2로 개선하고 Attention 기반 시간대 영향도 해석까지 확장했습니다."]
  ]
};

profile.skills.ai = [
  { name: "Python / ML", detail: "Pandas · Scikit-learn · XGBoost · CatBoost", evidence: "분류·회귀 실험, 전처리, 평가 파이프라인 구성" },
  { name: "Deep Learning", detail: "TensorFlow/Keras · LSTM · CNN · Attention", evidence: "열수요 시계열 예측 구조 비교 및 성능 개선" },
  { name: "Model Evaluation", detail: "RMSE · Recall · F1 · Threshold Optimization", evidence: "문제 특성에 맞춰 평가 기준과 임계값을 재설계" },
  { name: "Experimentation", detail: "Model Comparison · Optuna · Ensemble · Early Stopping", evidence: "다수 모델 비교와 하이퍼파라미터·앙상블 실험" },
  { name: "Data Engineering", detail: "MongoDB Aggregation · SQL · Python", evidence: "실제 서비스 로그 정규화와 분석 데이터셋 구축" },
  { name: "Applied AI Thinking", detail: "Problem Definition · Data Validation · Decision Support", evidence: "모델 개발과 실제 서비스 데이터 문제 정의를 함께 경험" }
];

function renderAIEvidence() {
  const wrap = document.getElementById("caseEvidence");
  wrap.innerHTML = `
    <div class="metric-strip">
      <div class="metric-tile"><strong>21.7 → 17.2</strong><span>Validation RMSE</span><small>시계열 예측 성능 개선</small></div>
      <div class="metric-tile"><strong>3+</strong><span>Model Architectures</span><small>Bi-LSTM · CNN-LSTM · Attention</small></div>
      <div class="metric-tile"><strong>Train-only</strong><span>Scaling</span><small>검증 누수 방지</small></div>
      <div class="metric-tile"><strong>Sliding Window</strong><span>Sequence Design</span><small>경계 구간 연속성 보완</small></div>
    </div>

    <div class="case-grid two-col">
      <article class="case-card">
        <div class="mini-label">MODEL DEVELOPMENT</div>
        <h3>모델을 바꾸기 전에 데이터와 시퀀스 문제를 먼저 수정</h3>
        <p>단순히 LSTM 층을 늘리는 방식이 아니라 시퀀스 선두 누락, validation/test 경계, 스케일러 fit 범위를 점검하고 예측 파이프라인 자체를 다시 설계했습니다.</p>
      </article>
      <article class="case-card">
        <div class="mini-label">INTERPRETABILITY</div>
        <h3>Attention을 성능 개선뿐 아니라 시간대 영향도 해석에 활용</h3>
        <p>BiLSTM+Attention 구조를 비교 실험하고 Attention Weight를 통해 시간대별 영향도를 해석하는 방향까지 확장했습니다.</p>
      </article>
    </div>

    <div class="case-grid two-col">
      <article class="case-card">
        <div class="mini-label">SECOND CASE · CLASSIFICATION</div>
        <h3>50세 이상 인지장애 경험 여부 예측</h3>
        <p>LR·KNN·SVM·RF·LightGBM·CatBoost·XGBoost·MLP를 비교하고 SMOTE, Soft Voting/Stacking, Optuna, Threshold 조정으로 양성 Recall을 0.72에서 0.78로 개선했습니다.</p>
        <div class="amplitude-tags"><span>Classification</span><span>SMOTE</span><span>Optuna</span><span>Ensemble</span><span>Threshold</span></div>
      </article>
      <article class="case-card">
        <div class="mini-label">THIRD CASE · SERVICE DATA</div>
        <h3>DARE 실제 서비스 로그 분석</h3>
        <p>MongoDB 행동·결제·추천 로그를 직접 검증하고 Python 분석 데이터셋을 구축했습니다. 모델링 이전 단계에서 어떤 데이터와 지표가 서비스 문제를 설명하는지 정의한 실무 경험입니다.</p>
        <div class="amplitude-tags"><span>MongoDB</span><span>Python</span><span>Data Validation</span><span>Product Metrics</span></div>
      </article>
    </div>
  `;
}

const baseRenderEvidence = renderEvidence;
renderEvidence = function(key) {
  if (key !== "ai") return baseRenderEvidence(key);
  document.getElementById("caseEvidenceTitle").textContent = "AI / ML Development Evidence";
  document.getElementById("caseEvidenceDesc").textContent = "모델 이름 나열보다 문제 정의, 실험 비교, 오류 진단, 검증 개선까지 실제 모델 개발 흐름을 보여줍니다.";
  renderAIEvidence();
};

const baseRenderProjects = renderProjects;
renderProjects = function(lang, key) {
  if (key !== "ai") return baseRenderProjects(lang, key);

  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  const order = [
    "50세 이상 인지장애 경험 여부 예측",
    "LendingClub 리스크 분류",
    "Olist 셀러 유치 전략 분석",
    "The Liquidation of Penny"
  ];
  const projects = profile.projects
    .filter(p => p.koTitle !== "열수요 예측")
    .sort((a, b) => order.indexOf(a.koTitle) - order.indexOf(b.koTitle));

  projects.forEach(p => {
    const card = el("article", "project-card");
    card.innerHTML = `
      <h3>${p.koTitle}</h3>
      <p>${p.koDesc}</p>
      <div class="project-meta">
        <span class="meta-chip result-chip">${p.resultKo}</span>
        ${p.tags.map(t => `<span class="meta-chip">${t}</span>`).join("")}
      </div>
    `;
    grid.appendChild(card);
  });
};

const baseRenderCopy = renderCopy;
renderCopy = function(key) {
  baseRenderCopy(key);
  if (key !== "ai") return;

  document.getElementById("mainProjectSectionTitle").textContent = "Main AI / ML Case";
  document.getElementById("mainProjectSectionDesc").textContent = "시계열 예측 프로젝트에서 모델 비교뿐 아니라 데이터 파이프라인과 검증 문제를 어떻게 고쳤는지 보여줍니다.";
  document.getElementById("experienceDesc").textContent = "실제 서비스 데이터를 다루며 AI/ML 적용 이전의 데이터 정의·검증 역량을 쌓은 경험입니다.";
  document.getElementById("projectSectionDesc").textContent = "분류 모델링과 서비스 데이터 경험을 중심으로 AI/ML 적용 범위를 보여주는 보조 사례입니다.";
  document.getElementById("strengthDesc").textContent = "모델명보다 데이터 처리·모델 실험·평가·검증에서 실제 사용한 역량을 정리했습니다.";
};

// script.js renders once before this file loads. Render again so ?ver=ai is applied.
render(currentVersion());
