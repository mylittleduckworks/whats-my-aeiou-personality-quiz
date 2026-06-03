const traits = {
  "Agility": {
    letter: "A",
    represents: "Fast, Adaptable, Responsive",
    color: "#A8D65C",
    secondary: "#5A8F2F",
    accent: "#DDF2A8",
    startImage: "assets/agility-start.png",
    resultImage: "assets/agility-result.png",
    compatibilityImage: "assets/agility-compatibility.png",
    description: "You move fast, adapt beautifully, and stay calm when things shift. You are the person who helps ideas keep moving forward."
  },
  "Experimental": {
    letter: "E",
    represents: "Creative, Curious, Innovative",
    color: "#FF9B21",
    secondary: "#D66A00",
    accent: "#FFD770",
    startImage: "assets/experimental-start.png",
    resultImage: "assets/experimental-result.png",
    compatibilityImage: "assets/experimental-compatibility.png",
    description: "You are powered by curiosity. You enjoy testing bold ideas, learning from attempts, and finding fresh ways to solve problems."
  },
  "Informed by Data": {
    letter: "I",
    represents: "Analytical, Logical, Insightful",
    color: "#2EC4C7",
    secondary: "#157E81",
    accent: "#A5F0F2",
    startImage: "assets/informed-start.png",
    resultImage: "assets/informed-result.png",
    compatibilityImage: "assets/informed-compatibility.png",
    description: "You trust evidence, patterns, and insights. You make decisions clearer by turning information into direction."
  },
  "Optimising": {
    letter: "O",
    represents: "Efficient, Structured, Systematic",
    color: "#FFD84A",
    secondary: "#D4A500",
    accent: "#FFF1B8",
    startImage: "assets/optimising-start.png",
    resultImage: "assets/optimising-result.png",
    compatibilityImage: "assets/optimising-compatibility.png",
    description: "You spot what can be smoother, faster, and better. You are great at refining systems until they work beautifully."
  },
  "User-Centricity": {
    letter: "U",
    represents: "Empathetic, Caring, Human-Focused",
    color: "#F8A6C1",
    secondary: "#E36A94",
    accent: "#FFD6E4",
    startImage: "assets/user-centricity-start.png",
    resultImage: "assets/user-centricity-result.png",
    compatibilityImage: "assets/user-centricity-compatibility.png",
    description: "You naturally think about people first. You design with empathy and keep real user needs at the centre."
  }
};

const personalityProfiles = {
  "Agility": {
    keyTraits: ["Fast", "Adaptable", "Responsive", "Resilient"],
    strengths: ["Helps teams move forward quickly", "Responds well to uncertainty", "Turns sudden changes into workable next steps", "Supports fast iteration and action"],
    growthAreas: ["Pause before moving too quickly", "Balance speed with deeper reflection", "Document decisions so others can follow", "Avoid changing direction without clear reasoning"],
    worksBestWith: ["Informed by Data", "Optimising"],
    mayClashWith: ["Experimental"]
  },
  "Experimental": {
    keyTraits: ["Curious", "Creative", "Explorative", "Bold"],
    strengths: ["Generates fresh concepts and approaches", "Encourages teams to move beyond safe ideas", "Finds unexpected solutions", "Makes innovation feel active and exciting"],
    growthAreas: ["Define what each experiment is trying to prove", "Avoid testing too many ideas at once", "Use evidence to decide what to keep", "Make experiments practical enough to implement"],
    worksBestWith: ["Informed by Data", "User-Centricity"],
    mayClashWith: ["Optimising"]
  },
  "Informed by Data": {
    keyTraits: ["Analytical", "Evidence-Based", "Logical", "Insightful"],
    strengths: ["Reduces guessing in decision-making", "Helps teams justify design choices", "Turns messy information into direction", "Improves confidence in the final outcome"],
    growthAreas: ["Avoid waiting for perfect data", "Balance numbers with human stories", "Make insights easy for others to understand", "Leave room for intuition and creativity"],
    worksBestWith: ["Experimental", "Agility"],
    mayClashWith: ["User-Centricity"]
  },
  "Optimising": {
    keyTraits: ["Efficient", "Structured", "Refined", "Systematic"],
    strengths: ["Makes experiences feel easier and cleaner", "Finds ways to save time and effort", "Improves workflows and user journeys", "Turns rough ideas into polished solutions"],
    growthAreas: ["Avoid over-refining too early", "Leave space for messy exploration", "Do not focus only on efficiency", "Check whether improvements still meet user needs"],
    worksBestWith: ["User-Centricity", "Agility"],
    mayClashWith: ["Experimental"]
  },
  "User-Centricity": {
    keyTraits: ["Empathetic", "Human-Centred", "Supportive", "Observant"],
    strengths: ["Makes solutions feel more human", "Keeps teams grounded in real needs", "Builds trust through thoughtful experiences", "Improves accessibility and emotional clarity"],
    growthAreas: ["Balance empathy with project constraints", "Use evidence to support user assumptions", "Avoid designing only for one user type", "Make user needs specific and actionable"],
    worksBestWith: ["Optimising", "Experimental"],
    mayClashWith: ["Informed by Data"]
  }
};

const questions = [
  { question: "A project suddenly changes direction. What do you do first?", options: [{ text: "I quickly adjust and find a new path forward.", trait: "Agility" }, { text: "I test a fresh approach to see what works.", trait: "Experimental" }, { text: "I check the data to understand what changed.", trait: "Informed by Data" }, { text: "I ask how this affects the people using it.", trait: "User-Centricity" }] },
  { question: "What makes you most excited during a design challenge?", options: [{ text: "Trying something unexpected and seeing where it goes.", trait: "Experimental" }, { text: "Making the flow cleaner and more efficient.", trait: "Optimising" }, { text: "Finding real insights from research or numbers.", trait: "Informed by Data" }, { text: "Understanding what users truly need.", trait: "User-Centricity" }] },
  { question: "In a team, what role do you naturally take?", options: [{ text: "The flexible one who helps everyone pivot.", trait: "Agility" }, { text: "The curious one who suggests new experiments.", trait: "Experimental" }, { text: "The practical one who improves the process.", trait: "Optimising" }, { text: "The empathetic one who speaks for the user.", trait: "User-Centricity" }] },
  { question: "How do you decide what feature should come first?", options: [{ text: "I compare feedback, numbers, and evidence.", trait: "Informed by Data" }, { text: "I choose what removes the most friction.", trait: "Optimising" }, { text: "I pick what best supports user pain points.", trait: "User-Centricity" }, { text: "I stay open and reprioritise when things change.", trait: "Agility" }] },
  { question: "When an idea fails, what is your reaction?", options: [{ text: "Great, now we know what to test next.", trait: "Experimental" }, { text: "Let’s improve the weak parts and try again.", trait: "Optimising" }, { text: "Let’s look at what the results are telling us.", trait: "Informed by Data" }, { text: "Let’s adapt quickly and keep moving.", trait: "Agility" }] },
  { question: "What kind of feedback feels most useful to you?", options: [{ text: "Direct user stories and emotional reactions.", trait: "User-Centricity" }, { text: "Clear metrics that show what improved.", trait: "Informed by Data" }, { text: "Suggestions that help simplify the experience.", trait: "Optimising" }, { text: "New possibilities I have not explored yet.", trait: "Experimental" }] },
  { question: "You have limited time before a deadline. What do you focus on?", options: [{ text: "Adapting the plan so we can still deliver well.", trait: "Agility" }, { text: "Prioritising the highest-impact improvements.", trait: "Optimising" }, { text: "Checking evidence so we avoid guessing.", trait: "Informed by Data" }, { text: "Making sure the user journey still makes sense.", trait: "User-Centricity" }] },
  { question: "What would you rather be known for?", options: [{ text: "Being brave enough to try new things.", trait: "Experimental" }, { text: "Being fast and adaptable under pressure.", trait: "Agility" }, { text: "Making systems feel smooth and effortless.", trait: "Optimising" }, { text: "Making people feel understood and supported.", trait: "User-Centricity" }] },
  { question: "What do you usually notice first in an app or service?", options: [{ text: "Where the journey feels confusing for users.", trait: "User-Centricity" }, { text: "Where the system could be more efficient.", trait: "Optimising" }, { text: "What data could prove whether it works.", trait: "Informed by Data" }, { text: "What new interaction could make it more exciting.", trait: "Experimental" }] },
  { question: "Pick the phrase that sounds most like you.", options: [{ text: "Let’s move, adjust, and keep learning.", trait: "Agility" }, { text: "Let’s test it and see what happens.", trait: "Experimental" }, { text: "Let’s check the evidence first.", trait: "Informed by Data" }, { text: "Let’s make this easier for people.", trait: "User-Centricity" }] }
];

let currentQuestion = 0;
let selectedOption = null;
let answers = [];
const screen = document.getElementById("screen");

function sendGAEvent(eventName, parameters = {}) {
  if (typeof window.gtag === "function") window.gtag("event", eventName, parameters);
}

function resetAnimation() {
  screen.classList.remove("enter");
  void screen.offsetWidth;
  screen.classList.add("enter");
}

function traitStyle(name) {
  const t = traits[name];
  return `--trait-primary:${t.color};--trait-secondary:${t.secondary};--trait-accent:${t.accent};`;
}

function renderWelcome() {
  resetAnimation();
  screen.innerHTML = `
    <div class="center intro-block">
      <h1>Discover Your AEIOU Superpower</h1>
      <p class="hero-copy">Take this quick personality quiz to reveal which innovation trait leads your way, and how your full AEIOU mix comes together.</p>
    </div>
    <div class="traits-grid">
      ${Object.entries(traits).map(([name, item]) => `
        <article class="trait-card" style="${traitStyle(name)}">
          <div class="trait-title-row">
            <img src="${item.startImage}" alt="${name} character" class="trait-start-img" />
            <div>
              <h3>${name}</h3>
            </div>
          </div>
          <p>${item.description}</p>
        </article>`).join("")}
    </div>
    <div class="center"><button class="primary-btn" type="button" id="startBtn">Start the Quiz</button></div>`;
  document.getElementById("startBtn").addEventListener("click", startQuiz);
}

function startQuiz() {
  currentQuestion = 0;
  selectedOption = null;
  answers = [];
  sendGAEvent("quiz_start", { quiz_name: "AEIOU Personality Quiz" });
  renderQuestion();
}

function renderQuestion() {
  resetAnimation();
  const q = questions[currentQuestion];
  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);
  screen.innerHTML = `
    <div class="progress-meta"><span>Question ${currentQuestion + 1} of ${questions.length}</span><span>${progress}%</span></div>
    <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
    <h2 class="question-title">${q.question}</h2>
    <div class="options">${q.options.map((option, index) => `<button class="option-btn" type="button" data-index="${index}">${option.text}</button>`).join("")}</div>
    <div class="question-actions"><button class="primary-btn" type="button" id="nextBtn" disabled>${currentQuestion === questions.length - 1 ? "Reveal My Result" : "Next Question"}</button></div>`;
  document.querySelectorAll(".option-btn").forEach(button => button.addEventListener("click", () => selectOption(Number(button.dataset.index))));
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
}

function selectOption(index) {
  selectedOption = index;
  document.querySelectorAll(".option-btn").forEach((button, buttonIndex) => button.classList.toggle("selected", buttonIndex === index));
  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  if (selectedOption === null) return;
  const selectedTrait = questions[currentQuestion].options[selectedOption].trait;
  answers.push(selectedTrait);
  sendGAEvent("quiz_answer", { question_number: currentQuestion + 1, selected_trait: selectedTrait });
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    selectedOption = null;
    renderQuestion();
  } else renderResults();
}

function calculateResults() {
  const counts = Object.keys(traits).reduce((acc, trait) => ({ ...acc, [trait]: 0 }), {});
  answers.forEach(trait => counts[trait]++);
  return Object.keys(traits).map(trait => ({ trait, count: counts[trait], percentage: Math.round((counts[trait] / answers.length) * 100), ...traits[trait] })).sort((a, b) => b.percentage - a.percentage || a.trait.localeCompare(b.trait));
}

function saveLocalResult(results) {
  const dominant = results[0];
  const saved = JSON.parse(localStorage.getItem("aeiouQuizResults") || "[]");
  saved.push({ createdAt: new Date().toISOString(), dominantTrait: dominant.trait, scores: results.map(({ trait, percentage }) => ({ trait, percentage })) });
  localStorage.setItem("aeiouQuizResults", JSON.stringify(saved));
}

function renderListItems(items) { return items.map(item => `<li>${item}</li>`).join(""); }

function renderCompatibilityItems(items) {
  return items.map(name => `
    <article class="compat-card" style="${traitStyle(name)}">
      <img src="${traits[name].compatibilityImage}" alt="${name} compatibility character" />
      <span>${name}</span>
    </article>`).join("");
}

function renderResults() {
  resetAnimation();
  const results = calculateResults();
  const dominant = results[0];
  const profile = personalityProfiles[dominant.trait];
  saveLocalResult(results);
  sendGAEvent("quiz_complete", { dominant_trait: dominant.trait, dominant_percentage: dominant.percentage });
  screen.innerHTML = `
    <div class="center result-intro"><h1>Your AEIOU Result</h1><p class="hero-copy">Your quiz is complete, here is the innovation trait that shines the brightest for you.</p></div>
    <div class="result-layout" style="${traitStyle(dominant.trait)}">
      <section class="result-hero">
        <img src="${dominant.resultImage}" alt="${dominant.trait} result character" class="result-main-img" />
        <div><h2>${dominant.trait}</h2><p>${dominant.description}</p></div>
      </section>
      <section class="key-traits-panel">
        <h3 class="key-traits-title">Traits</h3>
        ${profile.keyTraits.map(t => `<div class="trait-card-result">${t}</div>`).join("")}
      </section>
    </div>
    <div class="result-details" style="${traitStyle(dominant.trait)}">
      <section class="result-section"><h3>Strengths of Trait</h3><ul>${renderListItems(profile.strengths)}</ul></section>
      <section class="result-section"><h3>Growth Areas</h3><ul>${renderListItems(profile.growthAreas)}</ul></section>
    </div>
    <section class="compatibility-section result-section" style="${traitStyle(dominant.trait)}">
      <div class="compat-row"><h3>Works best with...</h3><div class="compat-list">${renderCompatibilityItems(profile.worksBestWith)}</div></div>
      <div class="compat-divider"></div>
      <div class="compat-row"><h3>May clash with...</h3><div class="compat-list">${renderCompatibilityItems(profile.mayClashWith)}</div></div>
    </section>
    <section class="complete-profile" style="${traitStyle(dominant.trait)}">
      <h3>Complete Personality Profile</h3>
      <div class="score-list">${results.map(item => `<div><div class="score-row-top"><span>${item.trait}</span><span>${item.percentage}%</span></div><div class="score-track"><div class="score-fill" style="width:${item.percentage}%; background:${item.color};"></div></div></div>`).join("")}</div>
    </section>
    <div class="action-row"><button class="secondary-btn" type="button" id="backBtn">Back to Start</button></div>`;
  document.getElementById("backBtn").addEventListener("click", renderWelcome);
}

renderWelcome();
