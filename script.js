const SIGNS = [
  { name: "양자리", sym: "♈", from: [3, 21], to: [4, 19] },
  { name: "황소자리", sym: "♉", from: [4, 20], to: [5, 20] },
  { name: "쌍둥이자리", sym: "♊", from: [5, 21], to: [6, 21] },
  { name: "게자리", sym: "♋", from: [6, 22], to: [7, 22] },
  { name: "사자자리", sym: "♌", from: [7, 23], to: [8, 22] },
  { name: "처녀자리", sym: "♍", from: [8, 23], to: [9, 22] },
  { name: "천칭자리", sym: "♎", from: [9, 23], to: [10, 23] },
  { name: "전갈자리", sym: "♏", from: [10, 24], to: [11, 22] },
  { name: "사수자리", sym: "♐", from: [11, 23], to: [12, 21] },
  { name: "염소자리", sym: "♑", from: [12, 22], to: [1, 19] },
  { name: "물병자리", sym: "♒", from: [1, 20], to: [2, 18] },
  { name: "물고기자리", sym: "♓", from: [2, 19], to: [3, 20] },
];

// 점수(1~5)에 따른 멘트. 항목을 추가하려면 이 배열에 한 줄 추가.
const LUCKS = [
  { key: "love", label: "💘 연애운", texts: [
    "썸이 멈춘 느낌이에요. 오늘은 마음을 아끼고 나를 챙겨보세요.",
    "작은 오해가 생길 수 있어요. 말을 한 번 더 고르세요.",
    "무난한 하루. 안부 메시지 하나가 분위기를 바꿔요.",
    "호감 신호가 보여요. 먼저 말을 걸면 좋은 반응이 있어요.",
    "설레는 인연이 가까이에! 용기 내어 마음을 표현해보세요.",
  ]},
  { key: "relation", label: "🤝 대인운", texts: [
    "말이 엇갈리기 쉬워요. 오늘은 듣는 쪽이 되어보세요.",
    "사소한 말에 상처받을 수 있어요. 한 박자 쉬고 답하세요.",
    "무난한 관계의 하루. 먼저 건네는 인사가 도움이 돼요.",
    "주변의 도움이 닿아요. 새로운 만남에서 좋은 인상을 남겨요.",
    "귀인운 최고조! 소중한 사람과 깊은 대화를 나눠보세요.",
  ]},
  { key: "pass", label: "🎓 합격운", texts: [
    "무리한 도전보다 준비를 다지는 날이에요.",
    "실수에 주의하세요. 제출 전 한 번 더 확인!",
    "평소 실력이 그대로 나오는 날. 침착함이 열쇠예요.",
    "집중력이 좋아요. 시험·면접에서 좋은 결과가 기대돼요.",
    "합격 기운이 최고조! 자신감을 갖고 도전하세요.",
  ]},
  { key: "contract", label: "📝 계약운", texts: [
    "서명은 미루세요. 조건을 더 꼼꼼히 살펴야 해요.",
    "세부 조항에서 놓치는 것이 없는지 확인하세요.",
    "협상은 무난해요. 양보할 부분을 미리 정해두세요.",
    "상대와 호흡이 잘 맞아요. 좋은 조건으로 성사될 수 있어요.",
    "계약·거래에 대길! 기다리던 소식이 성사됩니다.",
  ]},
  { key: "money", label: "💰 금전운", texts: [
    "지출이 새기 쉬운 날. 충동구매는 잠시 멈추세요.",
    "예상 밖의 소비가 생길 수 있어요.",
    "수입과 지출이 균형을 이루는 하루예요.",
    "작은 이득이나 보너스 소식이 있을 수 있어요.",
    "재물운 상승! 투자·부수입에 좋은 기회가 와요.",
  ]},
  { key: "health", label: "🍀 건강운", texts: [
    "피로가 쌓였어요. 오늘은 무리하지 말고 일찍 쉬세요.",
    "컨디션이 들쭉날쭉해요. 물과 스트레칭을 챙기세요.",
    "평범한 컨디션. 규칙적인 식사가 중요해요.",
    "몸이 가벼워요. 가벼운 운동이 활력을 더해줘요.",
    "에너지 최고! 몸도 마음도 활기가 넘치는 하루예요.",
  ]},
];

const SUMMARIES = [
  "오늘은 차분하게 흐름을 지켜보면 좋은 결과가 따라옵니다.",
  "새로운 시도가 행운을 불러오는 날이에요. 주저하지 마세요.",
  "주변 사람의 한마디가 중요한 힌트가 될 수 있어요.",
  "평소보다 직감이 잘 맞는 하루. 첫 느낌을 믿어보세요.",
  "작은 노력이 큰 성과로 이어지는 날입니다.",
  "여유를 가지면 꼬였던 일이 자연스럽게 풀려요.",
  "에너지가 넘치는 하루! 미뤄둔 일을 해치우기 좋아요.",
  "뜻밖의 반가운 연락이나 소식이 찾아올 수 있어요.",
];
// 운세별 한 줄 조언. high = 가장 좋은 운세를 살리는 말, low = 가장 약한 운세를 보완하는 말.
const ADVICE_BY_LUCK = {
  love: {
    high: ["오늘은 먼저 연락해도 좋아요. 마음을 표현해보세요.", "좋아하는 사람에게 가볍게 안부를 건네보세요.", "설레는 만남을 위해 오늘은 한 번 더 웃어보세요."],
    low: ["연애 얘기는 잠시 접고 나를 위한 시간을 가져보세요.", "답장이 늦어도 서운해하지 말고 기다려보세요.", "마음을 급하게 확인하려 하지 마세요."],
  },
  relation: {
    high: ["오늘은 소중한 사람에게 고마운 마음을 전해보세요.", "새로운 사람과 인사를 나눠보세요. 귀인이 될 수 있어요.", "모임이나 대화 자리에 적극적으로 참여해보세요."],
    low: ["말하기 전에 한 번 더 생각하고 답하세요.", "오늘은 듣는 쪽이 되면 오해가 줄어요.", "단체 대화에서는 말을 아끼는 편이 좋아요."],
  },
  pass: {
    high: ["시험·면접 전 깊게 숨 쉬고 자신 있게 임하세요.", "준비한 만큼 결과가 나와요. 마지막 점검만 하세요.", "도전하고 싶었던 일에 지원서를 내보세요."],
    low: ["제출 전에 오탈자와 날짜를 꼭 다시 확인하세요.", "오늘은 새 도전보다 복습이 더 도움이 돼요.", "시간 여유를 두고 움직이면 실수가 줄어요."],
  },
  contract: {
    high: ["미뤄둔 계약·거래를 마무리하기 좋은 날이에요.", "조건이 마음에 든다면 오늘 결정해도 좋아요.", "협상에서는 자신 있게 의견을 말해보세요."],
    low: ["서명 전에 세부 조항을 소리 내어 읽어보세요.", "중요한 계약은 하루만 더 생각해보세요.", "구두 약속은 메시지로 다시 남겨두세요."],
  },
  money: {
    high: ["작은 투자나 저축을 시작하기 좋은 날이에요.", "뜻밖의 수입이 있을 수 있으니 지갑을 정리해두세요.", "필요한 물건을 합리적으로 사기에 좋아요."],
    low: ["충동구매 전에 장바구니에 하루만 담아두세요.", "오늘은 카드보다 현금으로 쓰면 지출이 줄어요.", "작은 지출도 가계부에 적어보세요."],
  },
  health: {
    high: ["몸이 가벼운 날, 가벼운 산책이나 운동을 해보세요.", "에너지가 넘쳐요. 미뤄둔 활동을 시작해보세요.", "햇볕을 쬐며 걸으면 행운이 더해져요."],
    low: ["물 한 잔 마시고 일찍 잠자리에 드세요.", "스트레칭을 하며 무리하지 않는 하루를 보내세요.", "카페인은 줄이고 따뜻한 차를 마셔보세요."],
  },
};
// 가장 좋은 운세에 맞는 행운의 숫자 후보
const LUCK_NUMBERS = {
  love: [2, 7, 14], relation: [3, 6, 9], pass: [1, 5, 10],
  contract: [4, 8, 12], money: [8, 18, 28], health: [5, 15, 25],
};
const COLORS = [
  ["빨강", "#ff5a5a"], ["주황", "#ff9f43"], ["노랑", "#ffd93d"], ["초록", "#4cd964"],
  ["하늘", "#5ac8fa"], ["파랑", "#4a7dff"], ["보라", "#a78bfa"], ["분홍", "#ff8fc7"],
  ["흰색", "#ffffff"], ["은색", "#c0c7d6"],
];

// ---- 하루 고정 난수 ----
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const now = new Date();
const pad = (n) => String(n).padStart(2, "0");
const todayKey = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
document.getElementById("today").textContent =
  `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${"일월화수목금토"[now.getDay()]}요일`;

// ---- 3D 심볼 ----
const LAYERS = 14;
function make3D(sym, big) {
  const scene = document.createElement("div");
  scene.className = "scene" + (big ? " big" : "");
  const tilt = document.createElement("div");
  tilt.className = "tilt";
  const spin = document.createElement("div");
  spin.className = "spin";
  for (let i = 0; i <= LAYERS; i++) {
    const l = document.createElement("span");
    l.className = "layer" + (i === 0 ? " front" : "");
    l.textContent = sym + "︎";
    const depth = (LAYERS / 2 - i) * (big ? 1.6 : 1.2); // i=0이 가장 앞(+z)
    l.style.transform = `translateZ(${depth}px)`;
    if (i > 0) {
      const c = Math.round(40 + (1 - i / LAYERS) * 150);
      l.style.color = `rgb(${c}, ${Math.round(c * 0.8)}, ${Math.round(c * 0.35)})`;
    }
    spin.appendChild(l);
  }
  tilt.appendChild(spin);
  scene.appendChild(tilt);
  scene.addEventListener("mousemove", (e) => {
    const r = scene.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `rotateX(${(-y * 50).toFixed(1)}deg) rotateY(${(x * 50).toFixed(1)}deg)`;
  });
  scene.addEventListener("mouseleave", () => { tilt.style.transform = ""; });
  return scene;
}

// ---- 화면 ----
const grid = document.getElementById("grid");
const result = document.getElementById("result");
const fmt = ([m, d]) => `${m}/${d}`;

SIGNS.forEach((s, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "sign";
  b.dataset.i = i;
  b.appendChild(make3D(s.sym, false));
  b.insertAdjacentHTML("beforeend",
    `<span class="name">${s.name}</span><span class="range">${fmt(s.from)} ~ ${fmt(s.to)}</span>`);
  b.addEventListener("click", () => select(i));
  grid.appendChild(b);
});

// 12개 별자리의 오늘 운세를 한 번에 계산. 한 줄 조언은 별자리끼리 겹치지 않게 배정.
const usedAdvice = new Set();
const FORTUNES = SIGNS.map((s) => {
  const rnd = mulberry32(hash(todayKey + s.name));
  const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
  const scores = LUCKS.map(() => 1 + Math.floor(rnd() * 5));
  const color = pick(COLORS);
  rnd(); // (예전 행운의 숫자 자리: 점수·요약 난수 순서 유지)
  const summary = pick(SUMMARIES);

  const max = Math.max(...scores), min = Math.min(...scores);
  const best = scores.indexOf(max), worst = scores.indexOf(min);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

  const num = pick(LUCK_NUMBERS[LUCKS[best].key]);

  const key = LUCKS[avg > 3 ? best : worst].key;
  const mode = avg > 3 ? "high" : "low";
  const other = mode === "high" ? "low" : "high";
  const pool = [...ADVICE_BY_LUCK[key][mode], ...ADVICE_BY_LUCK[key][other]];
  const start = Math.floor(rnd() * ADVICE_BY_LUCK[key][mode].length);
  const ordered = pool.slice(start, ADVICE_BY_LUCK[key][mode].length)
    .concat(pool.slice(0, start), pool.slice(ADVICE_BY_LUCK[key][mode].length));
  const advice = ordered.find((t) => !usedAdvice.has(t)) || ordered[0];
  usedAdvice.add(advice);

  return { scores, color, summary, best, num, advice };
});

function stars(n) {
  return "★".repeat(n) + `<span class="off">${"★".repeat(5 - n)}</span>`;
}

function select(i) {
  const s = SIGNS[i];
  document.querySelectorAll(".sign").forEach((el) => el.classList.toggle("active", +el.dataset.i === i));
  try { localStorage.setItem("zodiac", i); } catch (e) {}

  const f = FORTUNES[i];
  const luckHtml = LUCKS.map((l, k) => {
    const sc = f.scores[k];
    return `<div class="luck"><div class="top"><strong>${l.label}</strong><span class="stars-row">${stars(sc)}</span></div><p>${l.texts[sc - 1]}</p></div>`;
  }).join("");
  const [cname, chex] = f.color;
  const num = f.num;
  const bestLabel = LUCKS[f.best].label.replace(/^\S+\s/, "");

  result.hidden = false;
  result.innerHTML = `
    <h2>${s.name}</h2>
    <p class="sub">${fmt(s.from)} ~ ${fmt(s.to)} · ${todayKey}</p>
    <p class="summary">${f.summary}</p>
    <div class="luck-list">${luckHtml}</div>
    <div class="extras">
      <span class="chip"><span class="dot" style="background:${chex}"></span>행운의 색 ${cname}</span>
      <span class="chip">🍀 행운의 숫자 ${num} · ${bestLabel} 최고</span>
    </div>
    <p class="advice">“${f.advice}”</p>`;
  result.prepend(make3D(s.sym, true));
  // 애니메이션 재생을 위해 재삽입
  result.style.animation = "none"; void result.offsetWidth; result.style.animation = "";
}

// 생일로 찾기
function findSign(m, d) {
  const md = m * 100 + d;
  return SIGNS.findIndex((s) => {
    const a = s.from[0] * 100 + s.from[1], b = s.to[0] * 100 + s.to[1];
    return a <= b ? md >= a && md <= b : md >= a || md <= b;
  });
}

const birthM = document.getElementById("birth-m");
const birthD = document.getElementById("birth-d");
const birthResult = document.getElementById("birth-result");
birthM.add(new Option("월", ""));
for (let m = 1; m <= 12; m++) birthM.add(new Option(`${m}월`, m));

function fillDays() {
  const m = +birthM.value;
  const max = m === 2 ? 29 : [4, 6, 9, 11].includes(m) ? 30 : 31;
  const keep = +birthD.value;
  birthD.length = 0;
  birthD.add(new Option("일", ""));
  for (let d = 1; d <= max; d++) birthD.add(new Option(`${d}일`, d));
  if (keep && keep <= max) birthD.value = keep;
}
fillDays();

function showBirth() {
  const m = +birthM.value, d = +birthD.value;
  if (!m || !d) { birthResult.hidden = true; return; }
  const idx = findSign(m, d);
  const s = SIGNS[idx];
  birthResult.hidden = false;
  birthResult.innerHTML = `
    <p class="birth-msg">${m}월 ${d}일생은</p>
    <h3>${s.sym} ${s.name}</h3>
    <p class="sub">${fmt(s.from)} ~ ${fmt(s.to)}</p>
    <button type="button" id="birth-fortune">오늘의 운세 보기</button>`;
  birthResult.prepend(make3D(s.sym, true));
  birthResult.style.animation = "none"; void birthResult.offsetWidth; birthResult.style.animation = "";
  document.getElementById("birth-fortune").addEventListener("click", () => {
    select(idx);
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}
birthM.addEventListener("change", () => { fillDays(); birthResult.hidden = true; });
birthD.addEventListener("change", () => { birthResult.hidden = true; });
document.getElementById("birth-go").addEventListener("click", () => {
  if (!birthM.value || !birthD.value) { (birthM.value ? birthD : birthM).focus(); return; }
  showBirth();
});

// 마지막 선택 복원
try {
  const saved = localStorage.getItem("zodiac");
  if (saved !== null && SIGNS[+saved]) select(+saved);
} catch (e) {}
