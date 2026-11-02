// AI / ML focused portfolio layer for ?ver=ai
// Keeps the Product/Growth portfolio intact and adds a role-specific AI/ML view.

profile.versions = {
  analyst: profile.versions.analyst,
  ai: {
    label: "AI / MACHINE LEARNING",
    title: "데이터·모델·검증 구조를 함께 설계해 성능을 개선하는 AI/ML 문제 해결형 분석가",
    desc: "선박 entity matching 공모전에서 후보 생성·재순위·누수 방지 검증을 반복하며 Public 0.8011에서 0.9357까지 개선했습니다. 시계열·불균형 분류 프로젝트를 통해 문제별 평가 기준과 검증 구조도 다뤘습니다.",
    theme: "ai",
    lang: "ko",
    heroStack: ["Python", "Entity Matching", "E5", "LightGBM / CatBoost", "Ranking", "Validation"]
  },
  strategy: profile.versions.strategy,
  lotte: profile.versions.lotte
};

profile.mainProjects.ai = {
  eyebrow: "MAIN AI / ML CASE · VESSEL ENTITY MATCHING",
  title: "표기가 다른 항만 기록을 표준 선박 ID로 연결한 선박 식별 AI",
  intro: "한글·영문·오탈자·축약·발음·숫자 표기 차이가 섞인 항만 기록을 표준 선박 카탈로그 ID에 연결했습니다. 문자열 유사도 하나에 의존하지 않고 후보 생성과 후보 재순위를 분리하고, 임베딩·메타데이터·역방향 특징을 결합했습니다.",
  resultLabel: "DACON PUBLIC",
  resultValue: "0.8011 → 0.9357",
  tags: ["Python", "Entity Matching", "E5", "LightGBM", "CatBoost", "Reranking"],
  href: "https://github.com/ryemso/Ryemso/blob/main/case-studies/port-vessel-matching/README.md",
  linkLabel: "View Case Study",
  flow: [
    ["01 · Problem", "동일 선박이 한글·영문·오타·축약·발음 차이로 기록되는 noisy entity matching 문제로 정의했습니다."],
    ["02 · Retrieve", "문자 n-gram·fuzzy·발음·메타데이터·E5 임베딩을 조합해 정답 후보가 검색 단계에서 빠지지 않도록 후보군을 확장했습니다."],
    ["03 · Rerank", "후보 안에 정답이 있어도 1위를 잘못 고르는 오류를 줄이기 위해 LightGBM/CatBoost ranking, 상대 점수·margin, 역방향 특징과 pairwise 실험을 적용했습니다."],
    ["04 · Validate", "원본과 합성 변형을 같은 그룹으로 묶고 동일 원본 참조를 막아 누수를 줄였습니다. Test 행끼리 정보를 공유하는 방식은 최종 제출에서 사용하지 않았습니다."],
    ["05 · Iterate", "최고 모델을 보존한 채 challenger를 비교하고 실패·동률 실험도 기록했습니다. Public 기준 주요 개선 흐름은 0.8011 → 0.8839 → 0.8997 → 0.9234 → 0.9311 → 0.9357입니다."]
  ]
};

profile.skills.ai = [
  { name: "Entity Matching", detail: "Normalization · Candidate Retrieval · Reranking", evidence: "한글·영문·오탈자·발음 차이가 있는 선박 기록을 표준 ID로 연결" },
  { name: "Ranking / ML", detail: "LightGBM · CatBoost · Pairwise · Margin", evidence: "정답 후보 포함 이후의 선택 오류를 후보 경쟁 문제로 분리해 개선" },
  { name: "Embeddings", detail: "E5 · Similarity Features", evidence: "문자열 특징과 고정 임베딩 유사도를 후보 구별 신호로 결합" },
  { name: "Validation", detail: "Group Split · Leakage Check · Error Analysis", evidence: "원본/합성 후손 그룹 분리, 행 독립성, 실패 실험 보존" },
  { name: "Deep Learning", detail: "TensorFlow/Keras · LSTM · CNN · Attention", evidence: "열수요 시계열 예측에서 모델 구조와 시퀀스 검증 비교" },
  { name: "Applied Data", detail: "MongoDB · SQL · Python · Product Metrics", evidence: "실제 서비스 로그에서 원천 데이터와 지표 정의를 검증한 인턴 경험" }
];

function renderAIEvidence() {
  const wrap = document.getElementById("caseEvidence");
  wrap.innerHTML = `
    <div class="metric-strip">
      <div class="metric-tile"><strong>0.8011 → 0.9357</strong><span>DACON Public</span><small>초기 매핑에서 최종 최고 Public까지</small></div>
      <div class="metric-tile"><strong>0.9234</strong><span>E5 + Inverse</span><small>임베딩과 역방향 특징 결합</small></div>
      <div class="metric-tile"><strong>0.9311</strong><span>Pairwise Reranking</span><small>후보 간 경쟁 학습 강화</small></div>
      <div class="metric-tile"><strong>0.9357</strong><span>Best Public</span><small>구조적 비한글 재순위 개선</small></div>
    </div>

    <div class="case-grid two-col">
      <article class="case-card">
        <div class="mini-label">RETRIEVAL → RERANKING</div>
        <h3>후보를 찾는 문제와 정답을 고르는 문제를 분리했습니다.</h3>
        <p>문자열·발음·메타데이터·E5 특징으로 후보를 넓힌 뒤, 후보 안에 정답이 있어도 1위를 잘못 선택하는 오류는 별도의 ranking 문제로 다뤘습니다. 단순 유사도 점수 하나보다 후보 간 상대 차이를 학습하는 방향으로 실험을 확장했습니다.</p>
        <div class="amplitude-tags"><span>n-gram</span><span>Fuzzy</span><span>Phonetic</span><span>E5</span><span>Reranking</span></div>
      </article>

      <article class="case-card">
        <div class="mini-label">VALIDATION DISCIPLINE</div>
        <h3>성능 개선보다 먼저 누수와 검증 단위를 통제했습니다.</h3>
        <p>원본과 그 합성 변형을 같은 그룹으로 묶고, 자기 자신이나 같은 원본에서 만든 기록을 참조해 정답을 얻지 않도록 제한했습니다. 로컬 Dev와 Public 결과가 다를 때도 한쪽만 선택해 설명하지 않고 두 결과를 함께 기록했습니다.</p>
        <div class="amplitude-tags"><span>Group Split</span><span>Leakage Check</span><span>Row Independence</span><span>Error Audit</span></div>
      </article>
    </div>

    <div class="case-grid two-col">
      <article class="case-card">
        <div class="mini-label">SECOND CASE · TIME SERIES</div>
        <h3>열수요 예측 · RMSE 21.7 → 17.2</h3>
        <p>BiLSTM, CNN-LSTM, Attention 계열 구조를 비교하면서 모델뿐 아니라 train-only scaling, 시퀀스 생성, validation/test 경계의 연속성 문제를 함께 점검했습니다.</p>
        <a class="project-source-link project-card-link" href="https://github.com/ryemso/heat-demand-forecasting" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>
      </article>

      <article class="case-card">
        <div class="mini-label">SECOND CASE · CLASSIFICATION</div>
        <h3>인지장애 예측 · Recall 0.72 → 0.78</h3>
        <p>False Negative 비용을 기준으로 Recall을 우선하고, SMOTE·앙상블·Optuna·Threshold 조정을 비교했습니다. Recall 개선과 함께 Precision 하락도 확인해 단일 지표 최적화의 한계를 검토했습니다.</p>
        <a class="project-source-link project-card-link" href="https://github.com/ryemso/cognitive-impairment-prediction" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>
      </article>
    </div>

    <article class="case-card work-card">
      <div class="mini-label">DOMAIN / LEAKAGE REVIEW</div>
      <h3>한우 등급 예측 · Public Macro-F1 0.219</h3>
      <div class="work-grid">
        <div class="work-item"><strong>Leakage</strong><p>train에만 존재하는 도축 후 판정 변수를 실제 test에서 사용할 수 없는 정보로 보고 제거했습니다.</p></div>
        <div class="work-item"><strong>Model</strong><p>CatBoost와 XGBoost 예측 확률을 결합하고 C계열 과소예측 보정을 적용했습니다.</p></div>
        <div class="work-item"><strong>Review</strong><p>직접 16개 등급을 맞히는 접근보다 육질·육량 등 도메인 결정 구조를 분리하는 방향이 필요하다는 회고를 남겼습니다.</p></div>
        <div class="work-item"><strong>Evidence</strong><p>공개 저장소에는 재현 가능한 pipeline과 프로젝트 로그·회고 문서를 남겼습니다.</p></div>
      </div>
      <a class="project-source-link project-card-link" href="https://github.com/ryemso/Hanwoo_ranke" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>
    </article>
  `;
}

const baseRenderEvidence = renderEvidence;
renderEvidence = function(key) {
  if (key !== "ai") return baseRenderEvidence(key);
  document.getElementById("caseEvidenceTitle").textContent = "AI / ML Development Evidence";
  document.getElementById("caseEvidenceDesc").textContent = "최종 점수보다 후보 생성·재순위·누수 방지·오류 분석을 어떻게 반복했는지에 초점을 맞췄습니다.";
  renderAIEvidence();
};

const baseRenderProjects = renderProjects;
renderProjects = function(lang, key) {
  if (key !== "ai") return baseRenderProjects(lang, key);

  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  const order = [
    "열수요 예측",
    "50세 이상 인지장애 경험 여부 예측",
    "한우 등급 예측",
    "LendingClub Credit Risk Modeling",
    "Olist E-commerce Analytics",
    "The Liquidation of Penny"
  ];
  const rank = new Map(order.map((title, idx) => [title, idx]));
  const projects = profile.projects
    .filter(p => p.koTitle !== "Port Problem Solving · 선박 식별 AI" && rank.has(p.koTitle))
    .sort((a, b) => rank.get(a.koTitle) - rank.get(b.koTitle));

  projects.forEach(p => {
    const card = el("article", "project-card");
    card.innerHTML = `
      <h3>${p.koTitle}</h3>
      <p>${p.koDesc}</p>
      <div class="project-meta">
        <span class="meta-chip result-chip">${p.resultKo}</span>
        ${p.tags.map(t => `<span class="meta-chip">${t}</span>`).join("")}
      </div>
      <div class="project-links">${sourceLinksMarkup(p, "project-card-link")}</div>
    `;
    grid.appendChild(card);
  });
};

const baseRenderCopy = renderCopy;
renderCopy = function(key) {
  baseRenderCopy(key);
  if (key !== "ai") return;

  document.getElementById("mainProjectSectionTitle").textContent = "Main AI / ML Case";
  document.getElementById("mainProjectSectionDesc").textContent = "최신 공모전 프로젝트에서 noisy entity matching을 후보 생성·재순위·검증 문제로 나눠 개선한 과정을 보여줍니다.";
  document.getElementById("experienceDesc").textContent = "실제 서비스 로그를 다루며 모델링 이전의 데이터 정의·원천 검증 역량도 함께 쌓았습니다.";
  document.getElementById("projectSectionDesc").textContent = "열수요·불균형 분류·한우 등급 예측을 보조 사례로 두어 문제 유형별 모델링과 검증 경험을 보여줍니다.";
  document.getElementById("strengthDesc").textContent = "모델 이름보다 retrieval·ranking·validation·error analysis에서 실제 사용한 역량을 정리했습니다.";
};

// script.js renders once before this file loads. Render again so ?ver=ai is applied.
render(currentVersion());
