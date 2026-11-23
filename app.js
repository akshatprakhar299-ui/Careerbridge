
/* ==========================================================
   CAREERBRIDGE — COMPLETE APPLICATION
   Roles: Student + Recruiter
   Storage: Browser localStorage (prototype)
   ========================================================== */

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const DEMO_ACCOUNTS = [
  {
    name: "Akshat Prakhar",
    email: "student@careerbridge.demo",
    password: "demo1234",
    role: "Student"
  },
  {
    name: "Recruiter Demo",
    email: "recruiter@careerbridge.demo",
    password: "demo1234",
    role: "Recruiter"
  }
];

// ==========================================================
// 1. SAMPLE OPPORTUNITIES
// ==========================================================

const SEED_OPPORTUNITIES = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Atlassian",
    logo: "A",
    color: "blue",
    type: "Internship",
    mode: "Hybrid",
    location: "Bengaluru",
    stipend: "₹45,000 / month",
    duration: "6 months",
    deadline: "2026-12-12",
    category: "Technology",
    description: "Work with product engineering teams to build reliable tools and ship meaningful features.",
    skills: "JavaScript, React, Data Structures",
    posted: "2 days ago",
    status: "Active",
    ownerEmail: "recruiter@careerbridge.demo"
  },
  {
    id: 2,
    title: "AI / ML Research Intern",
    company: "Microsoft",
    logo: "M",
    color: "",
    type: "Internship",
    mode: "Remote",
    location: "India",
    stipend: "₹55,000 / month",
    duration: "3 months",
    deadline: "2026-12-18",
    category: "AI & Data",
    description: "Explore applied machine learning problems and work with mentors on research-driven projects.",
    skills: "Python, Machine Learning, PyTorch",
    posted: "1 day ago",
    status: "Active",
    ownerEmail: "recruiter@careerbridge.demo"
  },
  {
    id: 3,
    title: "Product Design Intern",
    company: "Razorpay",
    logo: "R",
    color: "orange",
    type: "Internship",
    mode: "On-site",
    location: "Pune",
    stipend: "₹25,000 / month",
    duration: "4 months",
    deadline: "2026-12-08",
    category: "Design",
    description: "Help create thoughtful payment experiences through research and prototyping.",
    skills: "Figma, UX Research, Prototyping",
    posted: "4 days ago",
    status: "Active"
  },
  {
    id: 4,
    title: "National Innovation Challenge",
    company: "Tata Technologies",
    logo: "T",
    color: "purple",
    type: "Hackathon",
    mode: "Online",
    location: "India",
    stipend: "₹2,00,000 prize pool",
    duration: "48 hours",
    deadline: "2026-12-22",
    category: "Technology",
    description: "Build a practical solution for a real-world mobility or manufacturing challenge.",
    skills: "Innovation, Engineering, Teamwork",
    posted: "Today",
    status: "Active"
  },
  {
    id: 5,
    title: "Data Analyst Intern",
    company: "Deloitte",
    logo: "D",
    color: "orange",
    type: "Internship",
    mode: "Hybrid",
    location: "Mumbai",
    stipend: "₹30,000 / month",
    duration: "5 months",
    deadline: "2026-12-15",
    category: "AI & Data",
    description: "Support dashboard development, data cleaning and business reporting.",
    skills: "SQL, Python, Power BI",
    posted: "3 days ago",
    status: "Active"
  },
  {
    id: 6,
    title: "Build for Bharat Hackathon",
    company: "Google Developer Groups",
    logo: "G",
    color: "blue",
    type: "Hackathon",
    mode: "Online",
    location: "India",
    stipend: "Mentorship + prizes",
    duration: "3 weeks",
    deadline: "2027-01-05",
    category: "Technology",
    description: "Create technology-led solutions for local communities.",
    skills: "Cloud, Web Development, Problem Solving",
    posted: "5 days ago",
    status: "Active"
  },
  {
    id: 7,
    title: "Campus to Career: Tech Careers",
    company: "CareerBridge Events",
    logo: "C",
    color: "",
    type: "Event",
    mode: "Online",
    location: "Online",
    stipend: "Free registration",
    duration: "90 minutes",
    deadline: "2026-12-03",
    category: "Career",
    description: "Learn about technical resumes, internships and preparing for engineering roles.",
    skills: "Career Planning, Resume",
    posted: "Today",
    status: "Active"
  },
  {
    id: 8,
    title: "Applied Generative AI Bootcamp",
    company: "LearnLab",
    logo: "L",
    color: "purple",
    type: "Course",
    mode: "Online",
    location: "Online",
    stipend: "Certificate included",
    duration: "4 weeks",
    deadline: "2027-01-10",
    category: "AI & Data",
    description: "Learn LLM fundamentals, RAG and build a guided capstone project.",
    skills: "Python, LLMs, RAG",
    posted: "1 week ago",
    status: "Active"
  }
];

// ==========================================================
// 2. INITIAL DATABASE
// ==========================================================

const DEFAULT_DB = {
  opportunities: SEED_OPPORTUNITIES,

  applications: [
    {
      id: 101,
      opportunityId: 1,
      studentName: "Aarav Sharma",
      email: "aarav@example.com",
      skills: "JavaScript, React, DSA",
      appliedOn: "21 Nov 2026",
      status: "New"
    },
    {
      id: 102,
      opportunityId: 1,
      studentName: "Isha Patel",
      email: "isha@example.com",
      skills: "Java, Spring Boot, SQL",
      appliedOn: "20 Nov 2026",
      status: "Reviewing"
    },
    {
      id: 103,
      opportunityId: 2,
      studentName: "Rohan Mehta",
      email: "rohan@example.com",
      skills: "Python, PyTorch, NLP",
      appliedOn: "19 Nov 2026",
      status: "Shortlisted"
    },
    {
      id: 104,
      opportunityId: 5,
      studentName: "Sara Khan",
      email: "sara@example.com",
      skills: "SQL, Python, Power BI",
      appliedOn: "18 Nov 2026",
      status: "New"
    }
  ],

  studentApplications: [
    { id: 201, opportunityId: 1, status: "Under review", date: "20 Nov 2026" },
    { id: 202, opportunityId: 5, status: "Shortlisted", date: "18 Nov 2026" }
  ],

  saved: [2, 4],

  notifications: [
    {
      title: "Application viewed",
      text: "Deloitte viewed your Data Analyst Intern application.",
      time: "2 hours ago",
      unread: true
    },
    {
      title: "New opportunity match",
      text: "A new AI internship matches your skills.",
      time: "Yesterday",
      unread: true
    }
  ],

  studentProfile: {
    name: "Akshat Prakhar",
    email: "student@careerbridge.demo",
    college: "MIT Art, Design and Technology University",
    degree: "B.Tech — Computer Science",
    year: "Third year",
    skills: "Python, Java, React, Machine Learning, SQL",
    bio: "Computer Science student interested in AI/ML, problem solving and building useful products."
  },

  company: {
    name: "CareerBridge Demo Company",
    email: "recruiter@careerbridge.demo",
    website: "https://example.com",
    location: "Pune, India",
    about: "A sample organisation profile for demonstrating recruiter workflows."
  }
};

function loadDB() {
  try {
    const stored = JSON.parse(localStorage.getItem("cb_db") || "null");

    if (!stored) {
      return JSON.parse(JSON.stringify(DEFAULT_DB));
    }

    return {
      ...JSON.parse(JSON.stringify(DEFAULT_DB)),
      ...stored,

      opportunities: stored.opportunities || stored.opps || SEED_OPPORTUNITIES,

      applications: stored.applications ||
        stored.recruiterApplicants ||
        DEFAULT_DB.applications,

      studentApplications: stored.studentApplications ||
        stored.apps ||
        DEFAULT_DB.studentApplications,

      studentProfile: stored.studentProfile ||
        stored.profile ||
        DEFAULT_DB.studentProfile,

      company: stored.company ||
        stored.recruiterCompany ||
        DEFAULT_DB.company
    };

  } catch (error) {
    console.error("Database loading error:", error);
    return JSON.parse(JSON.stringify(DEFAULT_DB));
  }
}

let db = loadDB();
let page = "home";
let discoveryType = "All";
let authMode = "login";
let currentUser = null;

function saveDB() {
  localStorage.setItem("cb_db", JSON.stringify(db));
}

// ==========================================================
// 3. ACCOUNT MANAGEMENT
// ==========================================================

function getAccounts() {
  let saved = [];

  try {
    saved = JSON.parse(localStorage.getItem("cb_accounts") || "[]");
  } catch (error) {
    saved = [];
  }

  return [
    ...DEMO_ACCOUNTS,
    ...saved.filter(a =>
      a && ["Student", "Recruiter"].includes(a.role)
    )
  ];
}

function getActiveEmail() {
  return currentUser?.email ||
    JSON.parse(localStorage.getItem("cb_session") || "null")?.email ||
    "";
}

function toast(message) {
  const node = $("#toast");
  if (!node) return;

  node.textContent = message;
  node.classList.add("show");

  clearTimeout(window.cbToastTimer);

  window.cbToastTimer = setTimeout(() => {
    node.classList.remove("show");
  }, 2600);
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

// ==========================================================
// 4. LOGIN AND SIGNUP
// ==========================================================

function showAuth(mode = "login") {
  authMode = mode;

  $("#authScreen").style.display = "flex";
  $("#appShell").classList.add("auth-locked");

  drawAuth(mode);
}

function drawAuth(mode = "login") {
  authMode = mode;

  $("#authPageContent").innerHTML = `
    <div class="eyebrow">WELCOME TO CAREERBRIDGE</div>

    <h2>
      ${mode === "login" ? "Welcome back" : "Create your account"}
    </h2>

    <p class="auth-subtitle">
      ${
        mode === "login"
          ? "Sign in to continue exploring opportunities."
          : "Join CareerBridge and take the next step in your career."
      }
    </p>

    <div
      id="authError"
      style="display:none;color:#bd5148;margin:10px 0;font-size:13px"
    ></div>

    <form id="authForm">

      ${
        mode === "signup"
          ? `
            <div class="field">
              <label>Full name</label>
              <input name="name" required minlength="2"
                placeholder="Enter your full name">
            </div>
          `
          : ""
      }

      <div class="field">
        <label>Email address</label>
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        >
      </div>

      <div class="field">
        <label>Password</label>
        <input
          name="password"
          type="password"
          required
          minlength="6"
          placeholder="Enter your password"
        >
      </div>

      ${
        mode === "signup"
          ? `
            <div class="field">
              <label>Account type</label>
              <select name="role">
                <option value="Student">Student</option>
                <option value="Recruiter">Recruiter</option>
              </select>
            </div>
          `
          : ""
      }

      <button class="btn btn-primary" type="submit" style="width:100%">
        ${mode === "login" ? "Sign in" : "Create account"} →
      </button>

    </form>

    <p class="auth-switch">
      ${
        mode === "login"
          ? "New to CareerBridge?"
          : "Already have an account?"
      }

      <button type="button" id="authToggle">
        ${mode === "login" ? "Create an account" : "Sign in"}
      </button>
    </p>

    ${
      mode === "login"
        ? `
          <div class="auth-demo">
            <b>Demo accounts</b><br>
            Student: student@careerbridge.demo / demo1234<br>
            Recruiter: recruiter@careerbridge.demo / demo1234
          </div>
        `
        : ""
    }
  `;

  $("#authToggle").onclick = () => {
    drawAuth(mode === "login" ? "signup" : "login");
  };

  $("#authForm").onsubmit = handleAuthSubmit;
}

function authError(message) {
  const node = $("#authError");

  if (node) {
    node.textContent = message;
    node.style.display = "block";
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();

  const values = Object.fromEntries(
    new FormData(event.currentTarget)
  );

  const email = values.email.trim().toLowerCase();
  const accounts = getAccounts();

  if (authMode === "signup") {

    if (accounts.some(a => a.email.toLowerCase() === email)) {
      authError("This email is already registered. Please sign in.");
      return;
    }

    const account = {
      name: values.name.trim(),
      email,
      password: values.password,
      role: values.role
    };

    const saved = JSON.parse(
      localStorage.getItem("cb_accounts") || "[]"
    );

    saved.push(account);

    localStorage.setItem(
      "cb_accounts",
      JSON.stringify(saved)
    );

    enterApp(account);
    return;
  }

  const account = accounts.find(a =>
    a.email.toLowerCase() === email &&
    a.password === values.password
  );

  if (!account) {
    authError("Incorrect email or password. Please try again.");
    return;
  }

  enterApp(account);
}

function enterApp(account) {
  currentUser = account;

  localStorage.setItem(
    "cb_session",
    JSON.stringify({
      email: account.email,
      name: account.name,
      role: account.role
    })
  );

  if (account.role === "Student") {
    db.studentProfile.name = account.name;
    db.studentProfile.email = account.email;
  } else {
    db.company.email = account.email;
  }

  saveDB();

  $("#authScreen").style.display = "none";
  $("#appShell").classList.remove("auth-locked");

  page = "home";
  render();

  toast(`Welcome, ${account.name}!`);
}

function logout() {
  localStorage.removeItem("cb_session");

  currentUser = null;
  page = "home";

  showAuth("login");

  toast("You have logged out.");
}

function switchAccount() {
  localStorage.removeItem("cb_session");

  currentUser = null;
  page = "home";

  showAuth("login");

  toast("Sign in with another account.");
}

// ==========================================================
// 5. RECRUITER DATA
// ==========================================================

function recruiterListings() {
  const email = getActiveEmail();

  return db.opportunities.filter(o =>
    o.ownerEmail === email ||
    (!o.ownerEmail && email === "recruiter@careerbridge.demo")
  );
}

function recruiterApplicants() {
  const ids = recruiterListings().map(o => o.id);

  return db.applications.filter(a =>
    ids.includes(a.opportunityId)
  );
}

// ==========================================================
// 6. COMMON UI
// ==========================================================

function header(title, subtitle, action = "") {
  return `
    <div class="welcome-row">
      <div>
        <div class="eyebrow">CAREERBRIDGE / ${escapeHTML(title.toUpperCase())}</div>
        <h1 class="page-title">${escapeHTML(title)}</h1>
        <p class="subline">${escapeHTML(subtitle)}</p>
      </div>
      ${action}
    </div>
  `;
}

function companyLogo(item) {
  return `
    <div class="company-logo ${escapeHTML(item.color || "")}">
      ${escapeHTML(item.logo || "C")}
    </div>
  `;
}

function opportunityCard(item) {
  const saved = db.saved.includes(item.id);

  return `
    <article class="opp-card">

      <div class="company-row">
        ${companyLogo(item)}

        <div class="company-meta">
          <b>${escapeHTML(item.company)}</b>
          <small>${escapeHTML(item.type)} · ${escapeHTML(item.posted || "Recently posted")}</small>
        </div>

        <button
          class="bookmark ${saved ? "saved" : ""}"
          data-save="${item.id}"
        >
          ${saved ? "♥" : "♡"}
        </button>
      </div>

      <h4>${escapeHTML(item.title)}</h4>

      <p class="desc">${escapeHTML(item.description)}</p>

      <div class="tags">
        <span class="tag green">${escapeHTML(item.mode)}</span>
        <span class="tag">${escapeHTML(item.category || "Technology")}</span>
        <span class="tag">${escapeHTML(item.duration)}</span>
      </div>

      <div class="card-bottom">
        <span>◷ ${escapeHTML(item.deadline)}</span>
        <strong>${escapeHTML(item.stipend)}</strong>
      </div>

      <div style="display:flex;justify-content:flex-end;margin-top:12px">
        <button class="btn btn-soft btn-small" data-view="${item.id}">
          View details ↗
        </button>
      </div>

    </article>
  `;
}

// ==========================================================
// 7. STUDENT DASHBOARD
// ==========================================================

function renderStudentHome() {
  const apps = db.studentApplications;
  const profile = db.studentProfile;

  return `
    ${header(
      `Good morning, ${profile.name.split(" ")[0]} 👋`,
      "A little progress every day adds up. Here is your career snapshot.",
      '<span class="date-chip">YOUR CAREER DASHBOARD</span>'
    )}

    <div class="hero">

      <div class="hero-copy">
        <div class="eyebrow">YOUR NEXT CHAPTER IS WAITING</div>

        <h2>
          Big goals start with<br>
          one small opportunity.
        </h2>

        <p>
          Discover internships, competitions and experiences
          that help turn what you are learning into what you can do.
        </p>

        <button class="btn" data-page="discover">
          Explore opportunities ↗
        </button>
      </div>

      <div class="hero-art">
        <div class="hero-orbit">✳</div>
        <div class="hero-note">✦ Your next move matters</div>
      </div>

    </div>

    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-top">Applications sent</div>
        <div class="stat-number">${apps.length}</div>
        <div class="stat-foot">Every application counts</div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Shortlisted</div>
        <div class="stat-number">
          ${apps.filter(a => a.status === "Shortlisted").length}
        </div>
        <div class="stat-foot">You are moving forward</div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Saved opportunities</div>
        <div class="stat-number">${db.saved.length}</div>
        <div class="stat-foot">Your shortlist</div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Profile completion</div>
        <div class="stat-number">85%</div>
        <div class="stat-foot">Add your resume to finish</div>
      </div>

    </div>

    <div class="section-head">
      <h3>Picked for your next step</h3>
      <button class="text-link" data-page="discover">View all ↗</button>
    </div>

    <div class="opportunity-grid">
      ${
        db.opportunities
          .filter(o => o.status !== "Closed")
          .slice(0, 3)
          .map(opportunityCard)
          .join("")
      }
    </div>

    <div class="panel" style="margin-top:22px">

      <div class="section-head">
        <h3>Recent application activity</h3>
        <button class="text-link" data-page="applications">See all</button>
      </div>

      ${
        apps.slice(0, 4).map(a => {
          const o = db.opportunities.find(x => x.id === a.opportunityId);

          return `
            <div class="application-row">
              <div class="candidate-avatar">${(o?.company || "C")[0]}</div>

              <div>
                <b>${escapeHTML(o?.title || "Opportunity")}</b>
                <small>${escapeHTML(o?.company || "")} · ${escapeHTML(a.date)}</small>
              </div>

              <span class="status">${escapeHTML(a.status)}</span>
            </div>
          `;
        }).join("") ||
        '<p class="subline">Your applications will appear here.</p>'
      }

    </div>
  `;
}

// ==========================================================
// 8. DISCOVER OPPORTUNITIES
// ==========================================================

function renderDiscover() {

  let list = db.opportunities.filter(o =>
    o.status !== "Closed" &&
    (discoveryType === "All" || o.type === discoveryType)
  );

  const query = ($("#oppSearch")?.value || "").toLowerCase();
  const category = $("#catFilter")?.value || "All categories";
  const mode = $("#modeFilter")?.value || "All modes";

  list = list.filter(o =>
    `${o.title} ${o.company} ${o.skills} ${o.description}`
      .toLowerCase().includes(query) &&
    (category === "All categories" || o.category === category) &&
    (mode === "All modes" || o.mode === mode)
  );

  return `
    ${header(
      "Discover opportunities",
      "Find internships, competitions, events and learning experiences."
    )}

    <div class="tabs">
      ${
        ["All", "Internship", "Hackathon", "Event", "Course"]
          .map(type => `
            <button
              class="tab ${discoveryType === type ? "active" : ""}"
              data-type="${type}"
            >
              ${
                type === "All" ? "For you" :
                type === "Hackathon" ? "Competitions" :
                type === "Internship" ? "Internships" :
                type + "s"
              }
            </button>
          `).join("")
      }
    </div>

    <div class="filters">

      <input
        class="filter-input"
        id="oppSearch"
        placeholder="Search by role, company or skill..."
        value="${escapeHTML(query)}"
      >

      <select class="filter-select" id="catFilter">
        <option>All categories</option>
        ${
          ["Technology", "AI & Data", "Design", "Career"]
            .map(x => `<option ${category === x ? "selected" : ""}>${x}</option>`)
            .join("")
        }
      </select>

      <select class="filter-select" id="modeFilter">
        <option>All modes</option>
        ${
          ["Remote", "Hybrid", "On-site", "Online"]
            .map(x => `<option ${mode === x ? "selected" : ""}>${x}</option>`)
            .join("")
        }
      </select>

      <span class="subline">${list.length} opportunities</span>

    </div>

    <div class="opportunity-grid">
      ${
        list.map(opportunityCard).join("") ||
        '<div class="empty-state"><b>No matching opportunities</b>Try another search or filter.</div>'
      }
    </div>
  `;
}

// ==========================================================
// 9. STUDENT APPLICATIONS
// ==========================================================

function renderStudentApplications() {

  const apps = db.studentApplications;

  return `
    ${header(
      "My applications",
      "Track every step of your application journey."
    )}

    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-top">Total applications</div>
        <div class="stat-number">${apps.length}</div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Under review</div>
        <div class="stat-number">
          ${apps.filter(a => a.status === "Under review").length}
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Shortlisted</div>
        <div class="stat-number">
          ${apps.filter(a => a.status === "Shortlisted").length}
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Selected</div>
        <div class="stat-number">
          ${apps.filter(a => a.status === "Selected").length}
        </div>
      </div>

    </div>

    <div class="panel table-wrap">

      <table class="data-table">

        <thead>
          <tr>
            <th>Opportunity</th>
            <th>Applied on</th>
            <th>Status</th>
            <th>Next step</th>
          </tr>
        </thead>

        <tbody>
          ${
            apps.map(a => {
              const o = db.opportunities.find(x => x.id === a.opportunityId);

              return `
                <tr>
                  <td>
                    <b>${escapeHTML(o?.title || "Opportunity")}</b><br>
                    ${escapeHTML(o?.company || "")}
                  </td>
                  <td>${escapeHTML(a.date)}</td>
                  <td><span class="status">${escapeHTML(a.status)}</span></td>
                  <td>${a.status === "Shortlisted" ? "Check your email" : "Await update"}</td>
                </tr>
              `;
            }).join("") ||
            '<tr><td colspan="4">No applications yet.</td></tr>'
          }
        </tbody>

      </table>

    </div>
  `;
}

// ==========================================================
// 10. SAVED OPPORTUNITIES
// ==========================================================

function renderSaved() {

  const list = db.opportunities.filter(o =>
    db.saved.includes(o.id)
  );

  return `
    ${header("Saved opportunities", "Your shortlist of possibilities.")}

    <div class="opportunity-grid">
      ${
        list.map(opportunityCard).join("") ||
        '<div class="empty-state"><b>Nothing saved yet</b>Tap the heart on an opportunity to save it.</div>'
      }
    </div>
  `;
}

// ==========================================================
// 11. STUDENT PROFILE
// ==========================================================

function renderStudentProfile() {

  const p = db.studentProfile;

  return `
    ${header(
      "My profile",
      "Make it easy for opportunities to find the right you."
    )}

    <div class="profile-layout">

      <div class="panel profile-card">

        <div class="profile-large">
          ${escapeHTML(p.name.split(" ").map(x => x[0]).join("").slice(0, 2))}
        </div>

        <h3>${escapeHTML(p.name)}</h3>
        <p>${escapeHTML(p.degree)}</p>
        <p>${escapeHTML(p.college)}</p>

        <div class="profile-completion">
          <b>Profile completion</b>
          <small>85%</small>
          <div class="progress-line">
            <span style="width:85%"></span>
          </div>
        </div>

        <button class="btn btn-soft btn-small" id="resumeBtn">
          ＋ Upload resume
        </button>

        <p id="resumeName">No resume uploaded</p>

      </div>

      <div class="panel">

        <h3>Personal information</h3>

        <form id="profileForm">

          <div class="form-grid">

            <div class="field">
              <label>Full name</label>
              <input name="name" required value="${escapeHTML(p.name)}">
            </div>

            <div class="field">
              <label>Email address</label>
              <input name="email" type="email" required value="${escapeHTML(p.email)}">
            </div>

            <div class="field full">
              <label>College / University</label>
              <input name="college" value="${escapeHTML(p.college)}">
            </div>

            <div class="field">
              <label>Degree</label>
              <input name="degree" value="${escapeHTML(p.degree)}">
            </div>

            <div class="field">
              <label>Current year</label>
              <select name="year">
                ${
                  ["First year", "Second year", "Third year", "Final year"]
                    .map(x => `<option ${p.year === x ? "selected" : ""}>${x}</option>`)
                    .join("")
                }
              </select>
            </div>

            <div class="field full">
              <label>Skills</label>
              <input name="skills" value="${escapeHTML(p.skills)}">
            </div>

            <div class="field full">
              <label>About me</label>
              <textarea name="bio">${escapeHTML(p.bio)}</textarea>
            </div>

          </div>

          <button class="btn btn-primary">Save changes</button>

        </form>

      </div>

    </div>
  `;
}

// ==========================================================
// 12. NOTIFICATIONS
// ==========================================================

function renderNotifications() {

  return `
    ${header("Notifications", "Updates about your CareerBridge activity.")}

    <div class="panel">

      ${
        db.notifications.map((n, i) => `
          <div class="application-row">

            <div class="stat-icon">✦</div>

            <div style="flex:1">
              <b>${escapeHTML(n.title)}</b>
              <small>${escapeHTML(n.text)}</small>
              <small>${escapeHTML(n.time)}</small>
            </div>

            ${n.unread ? '<span class="tag green">New</span>' : ""}

            <button class="mini-action" data-read="${i}">
              Mark read
            </button>

          </div>
        `).join("") ||
        '<div class="empty-state">You are all caught up.</div>'
      }

    </div>
  `;
}

// ==========================================================
// 13. RECRUITER OVERVIEW
// ==========================================================

function renderRecruiterOverview() {

  const listings = recruiterListings();
  const applicants = recruiterApplicants();

  const active = listings.filter(o => o.status !== "Closed");

  const closingSoon = active.filter(o => {
    const days = (new Date(o.deadline) - new Date()) / 86400000;
    return days >= 0 && days <= 14;
  }).length;

  return `
    ${header(
      "Recruiter overview",
      "Your hiring activity at a glance. Manage roles, review applicants and move candidates through your pipeline.",
      '<button class="btn btn-primary" id="createOpp">＋ Post a job</button>'
    )}

    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-top">Active job listings</div>
        <div class="stat-number">${active.length}</div>
        <div class="stat-foot">Currently accepting applications</div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Total applicants</div>
        <div class="stat-number">${applicants.length}</div>
        <div class="stat-foot">Across your job listings</div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Shortlisted candidates</div>
        <div class="stat-number">
          ${applicants.filter(a => a.status === "Shortlisted").length}
        </div>
        <div class="stat-foot">Ready for next steps</div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Closing soon</div>
        <div class="stat-number">${closingSoon}</div>
        <div class="stat-foot">Deadlines in the next 14 days</div>
      </div>

    </div>

    <div class="two-col" style="margin-top:20px">

      <section class="panel">

        <div class="section-head">
          <h3>Recent applicants</h3>
          <button class="text-link" data-page="applicants">
            View all ↗
          </button>
        </div>

        ${
          applicants.slice(0, 5).map(a => `
            <div class="application-row">

              <div class="candidate-avatar">
                ${escapeHTML(a.studentName.split(" ").map(x => x[0]).join("").slice(0, 2))}
              </div>

              <div class="candidate-info">
                <b>${escapeHTML(a.studentName)}</b>
                <small>${escapeHTML(a.role || "Applicant")} · ${escapeHTML(a.appliedOn)}</small>
                <small>${escapeHTML(a.skills)}</small>
              </div>

              <span class="status">${escapeHTML(a.status)}</span>

            </div>
          `).join("") ||
          '<p class="subline">No applicants yet. Your candidate activity will appear here.</p>'
        }

      </section>

      <section class="panel">

        <div class="section-head">
          <h3>Candidate pipeline</h3>
        </div>

        ${
          ["New", "Reviewing", "Shortlisted", "Rejected"]
            .map(status => `
              <div class="pipeline-row">
                <span>${status}</span>
                <b>${applicants.filter(a => a.status === status).length}</b>
              </div>
            `).join("")
        }

        <button class="btn btn-soft btn-small" data-page="applicants" style="margin-top:14px">
          Review applicants ↗
        </button>

      </section>

    </div>

    <section class="panel" style="margin-top:18px">

      <div class="section-head">
        <h3>Your active job listings</h3>
        <button class="text-link" data-page="listings">Manage all ↗</button>
      </div>

      ${
        active.slice(0, 4).map(o => `
          <div class="application-row">

            ${companyLogo(o)}

            <div class="candidate-info">
              <b>${escapeHTML(o.title)}</b>
              <small>${escapeHTML(o.mode)} · ${escapeHTML(o.location)} · Deadline ${escapeHTML(o.deadline)}</small>
            </div>

            <span class="tag green">Active</span>

          </div>
        `).join("") ||
        '<p class="subline">You have not posted any roles yet.</p>'
      }

    </section>
  `;
}

// ==========================================================
// 14. RECRUITER JOB LISTINGS
// ==========================================================

function renderRecruiterListings() {

  const listings = recruiterListings();

  return `
    ${header(
      "My job listings",
      "Manage your published roles, deadlines and applicant counts.",
      '<button class="btn btn-primary" id="createOpp">＋ Post a job</button>'
    )}

    <div class="panel table-wrap">

      <table class="data-table">

        <thead>
          <tr>
            <th>Job title</th>
            <th>Work mode</th>
            <th>Deadline</th>
            <th>Applicants</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          ${
            listings.map(o => `
              <tr>

                <td>
                  <b>${escapeHTML(o.title)}</b><br>
                  <span class="muted-cell">
                    ${escapeHTML(o.location)} · ${escapeHTML(o.stipend)}
                  </span>
                </td>

                <td>${escapeHTML(o.mode)}</td>
                <td>${escapeHTML(o.deadline)}</td>

                <td>
                  ${db.applications.filter(a => a.opportunityId === o.id).length}
                </td>

                <td>
                  <span class="tag ${o.status === "Closed" ? "" : "green"}">
                    ${escapeHTML(o.status || "Active")}
                  </span>
                </td>

                <td>
                  <div class="admin-actions">
                    <button class="mini-action" data-edit="${o.id}">
                      Edit
                    </button>

                    <button class="mini-action" data-toggle-listing="${o.id}">
                      ${o.status === "Closed" ? "Reopen" : "Close"}
                    </button>
                  </div>
                </td>

              </tr>
            `).join("") ||
            '<tr><td colspan="6">No job listings yet. Post your first role to start receiving applicants.</td></tr>'
          }

        </tbody>

      </table>

    </div>
  `;
}

// ==========================================================
// 15. RECRUITER APPLICANTS
// ==========================================================

function renderRecruiterApplicants() {

  const applicants = recruiterApplicants();

  return `
    ${header(
      "Applicants",
      "Review candidate details, assess skills and update hiring decisions."
    )}

    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-top">All applicants</div>
        <div class="stat-number">${applicants.length}</div>
      </div>

      <div class="stat-card">
        <div class="stat-top">New</div>
        <div class="stat-number">
          ${applicants.filter(a => a.status === "New").length}
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Reviewing</div>
        <div class="stat-number">
          ${applicants.filter(a => a.status === "Reviewing").length}
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-top">Shortlisted</div>
        <div class="stat-number">
          ${applicants.filter(a => a.status === "Shortlisted").length}
        </div>
      </div>

    </div>

    <div class="panel table-wrap">

      <table class="data-table">

        <thead>
          <tr>
            <th>Candidate</th>
            <th>Applied for</th>
            <th>Applied on</th>
            <th>Skills</th>
            <th>Current status</th>
            <th>Update status</th>
          </tr>
        </thead>

        <tbody>

          ${
            applicants.map(a => {
              const opportunity = db.opportunities.find(
                x => x.id === a.opportunityId
              );

              return `
                <tr>

                  <td>
                    <b>${escapeHTML(a.studentName)}</b><br>
                    <span class="muted-cell">${escapeHTML(a.email)}</span>
                  </td>

                  <td>${escapeHTML(opportunity?.title || "Job")}</td>
                  <td>${escapeHTML(a.appliedOn)}</td>
                  <td>${escapeHTML(a.skills)}</td>

                  <td>
                    <span class="status">${escapeHTML(a.status)}</span>
                  </td>

                  <td>
                    <select
                      class="candidate-status"
                      data-applicant-status="${a.id}"
                    >
                      ${
                        ["New", "Reviewing", "Shortlisted", "Rejected"]
                          .map(s => `
                            <option ${a.status === s ? "selected" : ""}>
                              ${s}
                            </option>
                          `).join("")
                      }
                    </select>
                  </td>

                </tr>
              `;
            }).join("") ||
            '<tr><td colspan="6">No applicants received yet.</td></tr>'
          }

        </tbody>

      </table>

    </div>

    <p class="subline" style="margin-top:10px">
      Sample candidate records are provided for the prototype demonstration.
    </p>
  `;
}

// ==========================================================
// 16. RECRUITER COMPANY PROFILE
// ==========================================================

function renderCompanyProfile() {

  const c = db.company;

  return `
    ${header(
      "Company profile",
      "Maintain the organisation information candidates see when reviewing your roles."
    )}

    <div class="panel" style="max-width:850px">

      <form id="companyForm">

        <div class="form-grid">

          <div class="field">
            <label>Company name</label>
            <input name="name" required value="${escapeHTML(c.name)}">
          </div>

          <div class="field">
            <label>Recruiter email</label>
            <input name="email" type="email" required value="${escapeHTML(c.email)}">
          </div>

          <div class="field">
            <label>Website</label>
            <input name="website" value="${escapeHTML(c.website)}">
          </div>

          <div class="field">
            <label>Location</label>
            <input name="location" value="${escapeHTML(c.location)}">
          </div>

          <div class="field full">
            <label>About the organisation</label>
            <textarea name="about">${escapeHTML(c.about)}</textarea>
          </div>

        </div>

        <button class="btn btn-primary">Save company profile</button>

      </form>

    </div>
  `;
}

// ==========================================================
// 17. MODAL FUNCTIONS
// ==========================================================

function openModal() {
  $("#modalBackdrop").classList.add("open");
}

function closeModal() {
  $("#modalBackdrop").classList.remove("open");
}

// ==========================================================
// 18. OPPORTUNITY DETAILS AND APPLY
// ==========================================================

function showOpportunity(id) {

  const o = db.opportunities.find(x => x.id === id);

  if (!o) return;

  const alreadyApplied = db.studentApplications.some(
    a => a.opportunityId === id
  );

  $("#modalBody").innerHTML = `

    <div class="eyebrow">
      ${escapeHTML(o.type)} · ${escapeHTML(o.category || "")}
    </div>

    <div class="company-row">
      ${companyLogo(o)}
      <div class="company-meta">
        <b>${escapeHTML(o.company)}</b>
        <small>${escapeHTML(o.location)} · ${escapeHTML(o.mode)}</small>
      </div>
    </div>

    <h2>${escapeHTML(o.title)}</h2>

    <p>${escapeHTML(o.description)}</p>

    <div class="stats-grid" style="grid-template-columns:repeat(2,1fr);margin:18px 0">

      <div class="stat-card">
        <div class="stat-top">Compensation</div>
        <b>${escapeHTML(o.stipend)}</b>
      </div>

      <div class="stat-card">
        <div class="stat-top">Duration</div>
        <b>${escapeHTML(o.duration)}</b>
      </div>

    </div>

    <p><b>Required skills:</b> ${escapeHTML(o.skills)}</p>
    <p><b>Deadline:</b> ${escapeHTML(o.deadline)}</p>

    <div class="modal-actions">

      <button
        class="btn btn-primary"
        id="applyBtn"
        ${alreadyApplied ? "disabled" : ""}
      >
        ${alreadyApplied ? "Already applied" : "Apply now ↗"}
      </button>

      <button class="btn btn-outline" id="modalSave">
        ♡ Save
      </button>

    </div>
  `;

  openModal();

  $("#applyBtn").onclick = () => {

    if (currentUser?.role !== "Student") {
      toast("Sign in with a student account to apply.");
      return;
    }

    if (db.studentApplications.some(a => a.opportunityId === id)) {
      toast("You have already applied.");
      return;
    }

    const date = new Date().toLocaleDateString("en-IN");

    db.studentApplications.push({
      id: Date.now(),
      opportunityId: id,
      status: "Under review",
      date
    });

    // The application also appears in the recruiter's applicant list.
    db.applications.push({
      id: Date.now() + 1,
      opportunityId: id,
      studentName: db.studentProfile.name,
      email: db.studentProfile.email,
      role: o.title,
      skills: db.studentProfile.skills,
      appliedOn: date,
      status: "New"
    });

    db.notifications.unshift({
      title: "Application submitted",
      text: `Your application for ${o.title} has been recorded.`,
      time: "Just now",
      unread: true
    });

    saveDB();
    closeModal();

    toast("Application submitted successfully.");
  };

  $("#modalSave").onclick = () => {

    if (!db.saved.includes(id)) {
      db.saved.push(id);
    }

    saveDB();
    closeModal();

    toast("Opportunity saved.");
  };
}

// ==========================================================
// 19. CREATE AND EDIT JOB LISTINGS
// ==========================================================

function opportunityForm(id = null) {

  const o = id
    ? db.opportunities.find(x => x.id === id)
    : {};

  if (
    id &&
    (!o || o.ownerEmail !== getActiveEmail())
  ) {
    toast("You can only edit your own listings.");
    return;
  }

  $("#modalBody").innerHTML = `

    <div class="eyebrow">RECRUITER WORKSPACE</div>

    <h2>${id ? "Edit job listing" : "Post a new job"}</h2>

    <p>Provide clear information so candidates can assess the role.</p>

    <form id="oppForm">

      <div class="form-grid">

        <div class="field full">
          <label>Job title</label>
          <input
            name="title"
            required
            value="${escapeHTML(o.title || "")}"
            placeholder="e.g. Software Engineering Intern"
          >
        </div>

        <div class="field">
          <label>Company</label>
          <input
            name="company"
            required
            value="${escapeHTML(o.company || db.company.name)}"
          >
        </div>

        <div class="field">
          <label>Opportunity type</label>
          <select name="type">
            ${
              ["Internship", "Full-time", "Part-time", "Contract"]
                .map(x => `<option ${o.type === x ? "selected" : ""}>${x}</option>`)
                .join("")
            }
          </select>
        </div>

        <div class="field">
          <label>Work mode</label>
          <select name="mode">
            ${
              ["Remote", "Hybrid", "On-site"]
                .map(x => `<option ${o.mode === x ? "selected" : ""}>${x}</option>`)
                .join("")
            }
          </select>
        </div>

        <div class="field">
          <label>Location</label>
          <input name="location" value="${escapeHTML(o.location || "Pune, India")}">
        </div>

        <div class="field">
          <label>Salary / Stipend</label>
          <input
            name="stipend"
            value="${escapeHTML(o.stipend || "")}"
            placeholder="e.g. ₹25,000 / month"
          >
        </div>

        <div class="field">
          <label>Duration</label>
          <input name="duration" value="${escapeHTML(o.duration || "3 months")}">
        </div>

        <div class="field">
          <label>Application deadline</label>
          <input
            name="deadline"
            type="date"
            required
            value="${escapeHTML(o.deadline || "2026-12-31")}"
          >
        </div>

        <div class="field full">
          <label>Required skills</label>
          <input name="skills" value="${escapeHTML(o.skills || "")}">
        </div>

        <div class="field full">
          <label>Job description and responsibilities</label>
          <textarea name="description" required>${escapeHTML(o.description || "")}</textarea>
        </div>

      </div>

      <button class="btn btn-primary" type="submit">
        ${id ? "Save changes" : "Publish job listing"}
      </button>

    </form>
  `;

  openModal();

  $("#oppForm").onsubmit = event => {

    event.preventDefault();

    const values = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    if (id) {

      Object.assign(o, values);

    } else {

      db.opportunities.unshift({
        id: Date.now(),
        ...values,
        logo: values.company.charAt(0).toUpperCase(),
        color: "",
        category: "Technology",
        posted: "Just now",
        ownerEmail: getActiveEmail(),
        status: "Active"
      });

    }

    saveDB();
    closeModal();

    page = "listings";
    render();

    toast(id ? "Job listing updated." : "Job listing published.");
  };
}

// ==========================================================
// 20. MAIN RENDER FUNCTION
// ==========================================================

function render() {

  const isRecruiter = currentUser?.role === "Recruiter";

  const navItems = isRecruiter
    ? [
        ["home", "⌂", "Overview"],
        ["listings", "▤", "My job listings"],
        ["applicants", "♙", "Applicants"],
        ["company", "▣", "Company profile"]
      ]
    : [
        ["home", "⌂", "Overview"],
        ["discover", "⌕", "Discover opportunities"],
        ["applications", "▤", "My applications"],
        ["saved", "♡", "Saved opportunities"],
        ["competitions", "♜", "Hackathons & contests"],
        ["events", "◷", "Events & workshops"],
        ["learning", "▱", "Learning hub"],
        ["profile", "◎", "My profile"],
        ["notifications", "♧", "Notifications"]
      ];

  $("#mainNav").innerHTML = `
    <div class="workspace-label">
      ${isRecruiter ? "HIRING WORKSPACE" : "WORKSPACE"}
    </div>

    ${
      navItems.map(([p, icon, label]) => `
        <button
          class="nav-link ${page === p ? "active" : ""}"
          data-page="${p}"
        >
          <span>${icon}</span>
          ${label}
        </button>
      `).join("")
    }
  `;

  const studentViews = {
    home: renderStudentHome,
    discover: renderDiscover,
    applications: renderStudentApplications,
    saved: renderSaved,
    profile: renderStudentProfile,
    notifications: renderNotifications,

    competitions: () => {
      discoveryType = "Hackathon";
      return renderDiscover();
    },

    events: () => {
      discoveryType = "Event";
      return renderDiscover();
    },

    learning: () => {
      discoveryType = "Course";
      return renderDiscover();
    }
  };

  const recruiterViews = {
    home: renderRecruiterOverview,
    listings: renderRecruiterListings,
    applicants: renderRecruiterApplicants,
    company: renderCompanyProfile
  };

  const views = isRecruiter ? recruiterViews : studentViews;

  if (!views[page]) {
    page = "home";
  }

  $("#content").innerHTML = views[page]();

  const labels = {
    home: isRecruiter ? "Recruiter overview" : "Overview",
    discover: "Discover opportunities",
    applications: "My applications",
    saved: "Saved opportunities",
    profile: "My profile",
    notifications: "Notifications",
    competitions: "Competitions",
    events: "Events",
    learning: "Learning hub",
    listings: "My job listings",
    applicants: "Applicants",
    company: "Company profile"
  };

  $("#pageCrumb").textContent = labels[page] || "Overview";

  $("#sideUser").textContent = currentUser?.name || "User";

  $("#sideRole").textContent = isRecruiter
    ? "Recruiter account"
    : "Student account";

  // Navigation
  $$(".nav-link, [data-page]").forEach(button => {
    button.onclick = () => setPage(button.dataset.page);
  });

  // Save opportunity
  $$("[data-save]").forEach(button => {
    button.onclick = () => {

      const id = Number(button.dataset.save);

      db.saved = db.saved.includes(id)
        ? db.saved.filter(x => x !== id)
        : [...db.saved, id];

      saveDB();
      render();
    };
  });

  // View opportunity
  $$("[data-view]").forEach(button => {
    button.onclick = () => showOpportunity(Number(button.dataset.view));
  });

  // Discovery categories
  $$("[data-type]").forEach(button => {
    button.onclick = () => {
      discoveryType = button.dataset.type;
      render();
    };
  });

  // Search
  if ($("#oppSearch")) {
    $("#oppSearch").oninput = () => {

      const value = $("#oppSearch").value;
      const category = $("#catFilter").value;
      const mode = $("#modeFilter").value;

      render();

      $("#oppSearch").value = value;
      $("#catFilter").value = category;
      $("#modeFilter").value = mode;

      $("#oppSearch").focus();
      $("#oppSearch").setSelectionRange(value.length, value.length);
    };
  }

  if ($("#catFilter")) $("#catFilter").onchange = render;
  if ($("#modeFilter")) $("#modeFilter").onchange = render;

  // Create job
  if ($("#createOpp")) {
    $("#createOpp").onclick = () => opportunityForm();
  }

  // Student profile
  if ($("#profileForm")) {
    $("#profileForm").onsubmit = event => {

      event.preventDefault();

      Object.assign(
        db.studentProfile,
        Object.fromEntries(new FormData(event.currentTarget))
      );

      saveDB();
      render();

      toast("Profile updated.");
    };
  }

  // Resume upload demonstration
  if ($("#resumeBtn")) {
    $("#resumeBtn").onclick = () => {

      const input = document.createElement("input");

      input.type = "file";
      input.accept = ".pdf,.doc,.docx";

      input.onchange = () => {

        if (input.files[0]) {
          $("#resumeName").textContent = input.files[0].name;
          toast("Resume selected for this demo.");
        }

      };

      input.click();
    };
  }

  // Notifications
  $$("[data-read]").forEach(button => {
    button.onclick = () => {

      db.notifications[Number(button.dataset.read)].unread = false;

      saveDB();
      render();
    };
  });

  // Edit job
  $$("[data-edit]").forEach(button => {
    button.onclick = () => opportunityForm(Number(button.dataset.edit));
  });

  // Close or reopen job
  $$("[data-toggle-listing]").forEach(button => {
    button.onclick = () => {

      const opportunity = db.opportunities.find(
        x => x.id === Number(button.dataset.toggleListing)
      );

      if (
        opportunity &&
        opportunity.ownerEmail === getActiveEmail()
      ) {

        opportunity.status =
          opportunity.status === "Closed" ? "Active" : "Closed";

        saveDB();
        render();

        toast(`Listing ${opportunity.status.toLowerCase()}.`);
      }
    };
  });

  // Update candidate status
  $$("[data-applicant-status]").forEach(select => {
    select.onchange = () => {

      const applicant = db.applications.find(
        x => x.id === Number(select.dataset.applicantStatus)
      );

      if (applicant) {

        applicant.status = select.value;

        saveDB();
        render();

        toast("Candidate status updated.");
      }
    };
  });

  // Company profile
  if ($("#companyForm")) {
    $("#companyForm").onsubmit = event => {

      event.preventDefault();

      Object.assign(
        db.company,
        Object.fromEntries(new FormData(event.currentTarget))
      );

      saveDB();

      toast("Company profile saved.");
    };
  }
}

// ==========================================================
// 21. NAVIGATION AND HEADER BUTTONS
// ==========================================================

function setPage(nextPage) {

  page = nextPage;

  $("#sidebar")?.classList.remove("open");

  render();
}

// Switch account and Logout are separate controls.
$("#switchAccountBtn")?.addEventListener("click", switchAccount);

$("#logoutButton")?.addEventListener("click", logout);

// Mobile navigation
$("#mobileMenu")?.addEventListener("click", () => {
  $("#sidebar")?.classList.toggle("open");
});

// Modal close
$("#modalClose")?.addEventListener("click", closeModal);

$("#modalBackdrop")?.addEventListener("click", event => {
  if (event.target.id === "modalBackdrop") {
    closeModal();
  }
});

// Global search
$("#globalSearch")?.addEventListener("keydown", event => {

  if (event.key === "Enter" && currentUser?.role === "Student") {

    const searchValue = event.currentTarget.value;

    page = "discover";
    render();

    if ($("#oppSearch")) {
      $("#oppSearch").value = searchValue;
      $("#oppSearch").dispatchEvent(new Event("input"));
    }
  }
});

// ==========================================================
// 22. RESTORE LOGIN SESSION
// ==========================================================

(function init() {

  let session = null;

  try {
    session = JSON.parse(
      localStorage.getItem("cb_session") || "null"
    );
  } catch (error) {
    session = null;
  }

  // Only Student and Recruiter accounts are accepted.
  if (
    session &&
    ["Student", "Recruiter"].includes(session.role)
  ) {

    const account = getAccounts().find(
      a => a.email.toLowerCase() === session.email.toLowerCase()
    );

    if (account) {

      currentUser = account;

      $("#authScreen").style.display = "none";
      $("#appShell").classList.remove("auth-locked");

      page = "home";

      render();

      return;
    }
  }

  // Invalid or Admin session: return to login.
  localStorage.removeItem("cb_session");

  currentUser = null;

  showAuth("login");

})();

// ==========================================================
// END OF CAREERBRIDGE
// ==========================================================
