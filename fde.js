// FDE / Forward Deployed Engineer portfolio layer.
// Evidence-first: distinguishes implemented code, mocked tests, and unverified customer deployment.
profile.versions.fde = {
  label: "FDE · FORWARD DEPLOYED ENGINEER",
  title: "현장의 문제를 데이터와 AI로 구조화하고, 실제 사용 가능한 도구로 구현·검증합니다.",
  desc: "DARE에서 실제 서비스 데이터의 연결 구조를 검증했고, My Little Office와 Cat Hero에서는 업무 흐름을 기능·실행·검토 단계로 나누어 구현했습니다. 고객사 상용 배포 경력 대신 확인 가능한 코드와 테스트, 남아 있는 운영 과제를 구분해 보여줍니다.",
  theme: "fde",
  lang: "ko",
  heroStack: ["Python", "JavaScript", "AI-assisted Development", "SQLite / MongoDB", "OCR / Supabase", "Testing"]
};

profile.mainProjects.fde = {
  eyebrow: "MAIN FDE BUILD CASE · MY LITTLE OFFICE",
  title: "AI 업무 요청을 실행·검토·승인 가능한 작업 흐름으로 구현",
  intro: "직무별 AI 직원이 업무를 배정받고, 로컬 프로젝트 사본에서 코드를 작성·검증하며, 사용자 승인을 거쳐 원본에 반영하도록 구성한 개인 개발 프로젝트입니다. Python 실행기·SQLite 작업 상태·Codex CLI·웹 UI·테스트 기록을 연결했습니다.",
  resultLabel: "구현 범위 · 개인 프로젝트",
  resultValue: "Request → Workspace → Execute / Test → Review",
  tags: ["Python", "Codex CLI", "SQLite", "JavaScript", "Approval Workflow", "Unit Tests"],
  links: [
    ["Repository", "https://github.com/ryemso/my_little_office"],
    ["Execution Design", "https://github.com/ryemso/my_little_office/blob/main/docs/EXECUTION.md"],
    ["Test Cases", "https://github.com/ryemso/my_little_office/blob/main/scripts/tests/test_workspaces.py"]
  ],
  flow: [
    ["01 · Workflow", "사용자의 지시를 작업·역할·승인 여부로 분리하고 상태 전이를 SQLite에 기록했습니다."],
    ["02 · Integration", "로컬 Codex CLI와 프로젝트 작업 사본을 연결하고 명령·종료 코드·변경 파일을 증거로 보관하도록 설계했습니다."],
    ["03 · Safety", "원본 덮어쓰기 방지를 위해 작업 사본·변경 충돌 검사·백업·승인 스냅샷을 도입했습니다."],
    ["04 · Validation", "파일 수정·테스트 실행·승인 무효화·재시작 복구를 자동 테스트에 포함했습니다."],
    ["05 · Boundary", "실제 외부 고객 환경 배포나 모든 연결 서비스의 안정적 운영은 검증된 성과로 주장하지 않습니다. 일부 Codex 통합 테스트는 모의 응답을 사용합니다."]
  ]
};

profile.skills.fde = [
  { name: "Problem → Workflow", detail: "업무 문제 분해 · 실행 단계 · 승인 조건", evidence: "My Little Office의 작업 배정·검토 흐름, DARE의 분석 목적·지표 정의" },
  { name: "AI-assisted Implementation", detail: "Python · JavaScript · Codex CLI", evidence: "로컬 실행기 및 도구 제작; AI 도움과 코드 자체 검증을 구분" },
  { name: "Data Integration", detail: "MongoDB Aggregation · SQLite · SQL / Pandas", evidence: "DARE의 로그 연결 필드 검증, 업무 상태 저장, Olist join 중복 검토" },
  { name: "Applied AI", detail: "OCR · Entity Matching · ML Evaluation", evidence: "Cat Hero 이미지 인식/검수, 선박 ID 매칭 및 평가" },
  { name: "Testing & Traceability", detail: "unittest · regression · GitHub Actions", evidence: "My Little Office 테스트 코드, Cat Hero 웹 빌드·테스트·배포 워크플로" },
  { name: "Operational Boundary", detail: "권한 검사 · 충돌 방지 · 복구 설계", evidence: "승인 재확인·비밀정보 마스킹·작업 사본; 고객사 운영 경험은 미보유" }
];

function renderFDEEvidence() {
  document.getElementById("caseEvidence").innerHTML = `
    <div class="metric-strip">
      <div class="metric-tile"><strong>Python + SQLite</strong><span>Task Runner</span><small>작업 상태·재시작·순차 실행 구조</small></div>
      <div class="metric-tile"><strong>Local CLI</strong><span>AI Integration</span><small>Codex 작업 실행과 결과 증거 수집</small></div>
      <div class="metric-tile"><strong>Tests in Repo</strong><span>Verification</span><small>테스트 코드 확인 · 실제 운영 성공과 구분</small></div>
      <div class="metric-tile"><strong>Approval Gate</strong><span>Safety</span><small>원본 변경 전 승인·충돌·백업 확인</small></div>
    </div>
    <div class="case-grid two-col">
      <article class="case-card">
        <div class="mini-label">IMPLEMENTATION · MY LITTLE OFFICE</div>
        <h3>AI의 응답을 실행 가능한 파일 작업으로 연결</h3>
        <p>작업 요청을 받은 뒤 독립된 사본에서 코드를 만들고 테스트하며, 명령의 종료 코드와 변경 내역을 사용자에게 반환하는 구조를 구현했습니다. SQLite 대기열과 원본 반영 충돌 검사를 포함합니다.</p>
        <a class="project-source-link project-card-link" href="https://github.com/ryemso/my_little_office/blob/main/office/engine.py" target="_blank" rel="noopener noreferrer">Execution Code ↗</a>
        <a class="project-source-link project-card-link" href="https://github.com/ryemso/my_little_office/blob/main/scripts/tests/test_workspaces.py" target="_blank" rel="noopener noreferrer">Test Evidence ↗</a>
      </article>
      <article class="case-card">
        <div class="mini-label">USER WORKFLOW · CAT HERO</div>
        <h3>이미지 인식 오류를 사람이 검수하는 정산 프로세스</h3>
        <p>스크린샷에서 보상명과 수량을 OCR로 인식하고 수정·수기 등록을 거쳐 기록과 분배 내역을 저장하도록 구현했습니다. Supabase 연동, Excel 내보내기, 웹 빌드 구성과 테스트 스크립트를 확인할 수 있습니다.</p>
        <a class="project-source-link project-card-link" href="https://github.com/ryemso/cat_hero_boss_reward" target="_blank" rel="noopener noreferrer">Repository ↗</a>
      </article>
    </div>
    <div class="case-grid two-col">
      <article class="case-card">
        <div class="mini-label">REAL-WORLD DATA · DARE</div>
        <h3>요청받은 분석을 수행하기 위해 데이터 원천부터 추적</h3>
        <p>Amplitude 이벤트와 MongoDB 컬렉션 구조를 확인하고, 분석 질문에 필요한 실제 연결 키와 원천 데이터를 찾아 사용자 단위 지표를 검증했습니다. 자체 서비스를 고객사에 배포한 프로젝트라고 표현하지 않습니다.</p>
        <a class="project-source-link project-card-link" href="https://github.com/ryemso/Ryemso/tree/main/case-studies/product-analytics-internship" target="_blank" rel="noopener noreferrer">Anonymized Case Study ↗</a>
      </article>
      <article class="case-card">
        <div class="mini-label">DATA MATCHING · PORT PROBLEM SOLVING</div>
        <h3>일치하지 않는 레코드를 표준 ID로 연결</h3>
        <p>선박 기록의 문자열·발음·메타데이터·임베딩 정보를 결합해 후보 생성과 재순위를 검증했습니다. DACON Public 최고 0.9357은 공개 Case Study에 남긴 기록입니다. Private 결과와 최종 순위는 공개 저장소에서 검증되지 않으며 상용 서비스 성과가 아닙니다.</p>
        <a class="project-source-link project-card-link" href="https://github.com/ryemso/Ryemso/blob/main/case-studies/port-vessel-matching/README.md" target="_blank" rel="noopener noreferrer">Public Case Study ↗</a>
      </article>
    </div>
    <article class="case-card work-card">
      <div class="mini-label">FDE FIT · CURRENT SCOPE & NEXT STEP</div>
      <h3>할 수 있는 일과 아직 검증되지 않은 일을 구분합니다.</h3>
      <div class="work-grid">
        <div class="work-item"><strong>Problem Discovery</strong><p>현업의 질문을 필요한 데이터·업무 단계·검증 기준으로 정리합니다.</p></div>
        <div class="work-item"><strong>Build & Iterate</strong><p>AI 코딩 도구와 Python/JavaScript를 사용해 개인 프로젝트 수준의 실행 가능한 도구를 만들고 수정합니다.</p></div>
        <div class="work-item"><strong>Verify</strong><p>원천 데이터, 테스트 실패, 코드 변경·승인 기록을 통해 결과의 근거를 남깁니다.</p></div>
        <div class="work-item"><strong>Next Frontier</strong><p>고객사 배포, Docker·클라우드 운영, 실사용 장애 대응과 독립적 설계·코드 설명 능력은 더 검증해야 합니다.</p></div>
      </div>
    </article>
  `;
}

const previousFDEEvidence = renderEvidence;
renderEvidence = function(key) {
  if (key !== "fde") return previousFDEEvidence(key);
  document.getElementById("caseEvidenceTitle").textContent = "Build, Integration & Verification Evidence";
  document.getElementById("caseEvidenceDesc").textContent = "고객사 상용 배포 이력 대신 실제 코드·업무 흐름·테스트 및 운영상 한계를 함께 제시합니다.";
  renderFDEEvidence();
};

const fdeProjects = [
  {
    title:"Cat Hero · OCR & Reward Workflow",
    desc:"스크린샷 OCR → 후보 보상 확인/수정 → 수량·참여자 기록 → 정산/Excel 출력 과정을 구성했습니다. 웹형과 로컬형의 데이터 저장 범위가 다르며, OCR 결과는 사용자 검수가 필요합니다.",
    state:"사용 가능한 도구 · 웹/로컬 구성",tags:["JavaScript","Tesseract.js","Supabase","Vite"],
    links:[["Repository","https://github.com/ryemso/cat_hero_boss_reward"],["Web UI","https://ryemso.github.io/cat_hero_boss_reward/"]]
  },
  {
    title:"DARE · Service Data Investigation",
    desc:"스타트업의 분석 요청에 따라 Amplitude로 이벤트를 탐색하고 MongoDB 원천 컬렉션과 사용자 연결 필드를 확인했습니다. 사용자별 결제·초대·추천 관련 지표를 집계하고 결과의 의미를 재검증했습니다.",
    state:"실제 인턴 과업 · 비공개 데이터 익명화",tags:["MongoDB","Amplitude","Python","Data Validation"],
    links:[["Case Study","https://github.com/ryemso/Ryemso/tree/main/case-studies/product-analytics-internship"]]
  },
  {
    title:"Port Problem Solving · Vessel Entity Matching",
    desc:"여러 표기의 항만 레코드를 표준 선박 ID에 연결하기 위해 검색·재순위·검증을 분리했습니다. 공개된 DACON Public 최고 0.9357을 기록했으며, 상용 데이터 통합이나 고객사 배포 경험이라고 주장하지 않습니다.",
    state:"공모전 · 모델·검증·패키징 기록",tags:["Python","Entity Matching","E5","LightGBM"],
    links:[["Repository","https://github.com/ryemso/Ryemso/blob/main/case-studies/port-vessel-matching/README.md"],["Public Case Study","https://github.com/ryemso/Ryemso/blob/main/case-studies/port-vessel-matching/README.md"]]
  },
  {
    title:"Olist · Data Joining & Business Mapping",
    desc:"주문·결제·고객 데이터의 다중 JOIN이 집계 행을 증식시키는 구조를 검증하고, Seller 확보·고객 유지·배송 경험이라는 현업 문제로 분리해 분석했습니다.",
    state:"데이터 품질·요구사항 구조화",tags:["Python","Pandas","SQL","Tableau"],
    links:[["Repository","https://github.com/ryemso/olist-ecommerce-analytics"]]
  }
];
const previousFDEProjects = renderProjects;
renderProjects = function(lang,key){
  if(key!=="fde") return previousFDEProjects(lang,key);
  const grid=document.getElementById("projectGrid");grid.replaceChildren();
  fdeProjects.forEach(p=>{
    const card=el("article","project-card");
    const h=el("h3");h.textContent=p.title;
    const d=el("p");d.textContent=p.desc;
    const meta=el("div","project-meta");
    [p.state,...p.tags].forEach((t,i)=>{const span=el("span",i===0?"meta-chip result-chip":"meta-chip");span.textContent=t;meta.appendChild(span)});
    const links=el("div","project-links");
    p.links.forEach(([name,url])=>{const a=el("a","project-source-link project-card-link");a.href=url;a.target="_blank";a.rel="noopener noreferrer";a.textContent=name+" ↗";links.appendChild(a)});
    card.append(h,d,meta,links);grid.appendChild(card);
  });
};

const fdeInternships=[
  {company:"동 주민센터 · 청년인턴",role:"사회복지 행정 및 민원 지원 · 고객 접점 경험",period:"2026.10.01 — 2026.12.11 (진행 중)",points:["민원 응대 보조, 마음곳간 반찬 전달, 물자 정리 등 지역 주민을 대면하는 현장 업무를 지원했습니다.","IT 구축 업무가 아닌 현장 운영·서비스 이용자 관점의 경험으로 구분합니다."],tags:["Field Operations","Communication"]},
  {company:"DARE",role:"데이터 분석 인턴 · 실제 서비스 로그",period:"2025.09",points:["Amplitude에서 분석 대상 이벤트를 탐색하고 MongoDB 원천 컬렉션의 사용자 연결 필드를 확인했습니다.","사용자 행동·결제·초대·추천 로그의 집계 기준을 정하고 운영 화면과 다른 값을 재검증했습니다.","MongoDB→Python 자동 보고 구조는 검토 단계였으며 실제 상용 배포 경험이라고 주장하지 않습니다."],tags:["MongoDB","Python","Product Data"]},
  {company:"잘큼",role:"구매·수요 데이터 지원 인턴",period:"2024.05 — 2024.10",points:["지점별 구매 데이터 전처리와 수요 집중 기간 분석, 인구통계 기반 지역 조사 및 보고 업무를 지원했습니다."],tags:["Data Processing","Field Demand"]},
  {company:"올케팅",role:"퍼포먼스 마케팅 인턴 · 운영 설정 지원",period:"2023.12 — 2024.01",points:["담당자의 지시하에 Meta·카카오스타일의 소재·타깃·예산 설정 변경과 광고 집행 업무를 보조했습니다.","독립적인 광고 최적화·ROAS 분석 성과로 과장하지 않습니다."],tags:["Operations Support","Marketing Tools"]}
];
const previousFDEExperience = renderExperience;
renderExperience = function(lang) {
  if (currentVersion()!=="fde") return previousFDEExperience(lang);
  const wrap=document.getElementById("experienceList");wrap.replaceChildren();
  fdeInternships.forEach(p=>{
    const card=el("article","experience-card");
    const head=el("div","experience-head");
    const left=el("div");
    left.append(el("div","mini-label","FIELD / INTERNSHIP"),el("h3","",p.company),el("p","experience-role",p.role));
    head.append(left,el("span","period-chip",p.period));
    const list=el("ul","experience-points");p.points.forEach(t=>{const li=el("li");li.textContent=t;list.appendChild(li)});
    const tags=el("div","project-meta");p.tags.forEach(t=>{const span=el("span","meta-chip");span.textContent=t;tags.appendChild(span)});
    card.append(head,list,tags);wrap.appendChild(card);
  });
};

const previousFDECopy=renderCopy;
renderCopy=function(key){
  previousFDECopy(key);
  if(key!=="fde")return;
  document.getElementById("mainProjectSectionTitle").textContent="Main Build Case · AI Workflow";
  document.getElementById("mainProjectSectionDesc").textContent="분석 리포트가 아니라 실행 가능한 작업 흐름을 어떻게 설계하고 검증했는지 중심으로 보여줍니다.";
  document.getElementById("experienceTitle").textContent="Work & Field Experience";
  document.getElementById("experienceDesc").textContent="스타트업 데이터 분석과 현장 운영 지원 경험을 업무 요구 해석 능력의 근거로 제시합니다.";
  document.getElementById("projectsTitle").textContent="Supporting Implementation Cases";
  document.getElementById("projectSectionDesc").textContent="OCR 업무도구·실무 데이터 구조 탐색·식별 AI·데이터 통합 경험을 FDE 업무 흐름과 연결했습니다.";
  document.getElementById("strengthsTitle").textContent="Evidence-backed FDE Skills";
  document.getElementById("strengthDesc").textContent="도구 이름만 나열하지 않고 어떤 작업에 사용했고 검증되지 않은 영역은 무엇인지 설명합니다.";
  document.getElementById("contactDesc").textContent="프로젝트 저장소와 실제 구현 문서를 확인할 수 있습니다.";
};

const previousFDERender=render;
render=function(key=currentVersion()){
  document.body.classList.remove("theme-fde");
  previousFDERender(key);
  if(key==="fde"){
    document.body.classList.add("theme-fde");
    document.getElementById("mainProjectBtn").textContent="대표 구현 사례 보기";
    document.getElementById("resumeNavLink").href="./resume/?view=fde";
    document.title="김동현 | FDE · Forward Deployed Engineer";
  }
};
render(currentVersion());
