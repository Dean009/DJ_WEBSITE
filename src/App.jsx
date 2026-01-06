// src/App.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./About";
import { wrapGWx } from "./utils/animateGWx";

/* =========================
   WORD-BY-WORD TEXT (GWx POPS)
========================= */
function AnimatedText({ text, trigger, baseDelay = 0, step = 70 }) {
  const tokens = useMemo(() => text.split(/(\s+)/g).filter(Boolean), [text]);

  return (
    <span className={`wordflow ${trigger ? "play" : ""}`}>
      {tokens.map((tok, i) => {
        const isSpace = /^\s+$/.test(tok);
        const isGWx = tok === "GWx";
        if (isSpace) return <span key={i}>{tok}</span>;

        return (
          <span
            key={i}
            className={`wf-word ${isGWx ? "gwx-pop" : ""}`}
            style={{ "--d": `${baseDelay + i * step}ms` }}
          >
            {tok}
          </span>
        );
      })}
    </span>
  );
}

/* =========================
   CAPABILITIES (NO BOOTSTRAP JS REQUIRED)
========================= */
function Capabilities() {
  const groups = [
    {
      id: "pm",
      title: "Project Management & Governance",
      items: [
        "Project management support",
        "Project governance frameworks and role clarity",
        "Stakeholder and interface management",
        "Change management and controlled decision-making",
        "Assurance of planning, sequencing, and execution strategies",
        "Support to duty holders and senior management",
      ],
    },
    {
      id: "tender",
      title: "Tendering & Pre-Construction Support",
      items: [
        "Tender strategy and technical input",
        "Scope, assumptions, and exclusions review",
        "Risk identification and mitigation at tender stage",
        "Input to methodologies, programmes, and sequencing",
        "Technical clarifications and bid support",
      ],
    },
    {
      id: "risk",
      title: "Risk Management & Risk Analysis",
      items: [
        "Project risk identification and analysis",
        "Risk registers and mitigation strategies",
        "Temporary Works and access risk reviews",
        "Early-stage risk workshops and reviews",
        "Alignment of risk controls with RAMS and delivery strategy",
      ],
    },
    {
      id: "planning",
      title: "Planning, Scheduling & Programming Support",
      items: [
        "Review and challenge of construction programmes",
        "Sequencing and constructability input",
        "Interface planning between trades and work fronts",
        "Integration of Temporary Works and access into programmes",
        "Support to planners and project teams",
      ],
    },
    {
      id: "tw",
      title: "Temporary Works Management & Governance",
      items: [
        "Temporary Works management frameworks",
        "Acting as Temporary Works Coordinator (TWC)",
        "TWC support and advisory roles",
        "Temporary Works Design Brief preparation and coordination",
        "Design route selection (TG20 / standard systems / bespoke design)",
        "Design review, acceptance, and change control",
        "Technical query management",
        "Permit to load / modify / dismantle coordination",
      ],
    },
    {
      id: "scaffold",
      title: "Scaffolding & Access Consultancy",
      items: [
        "Scaffold and access planning strategies",
        "TG20 compliance assessments and design route decisions",
        "System scaffold compliance reviews (manufacturer-based)",
        "Scaffold design coordination and technical review",
        "Access feasibility and constraint assessments",
        "Interface management with permanent works and other trades",
      ],
    },
    {
      id: "rams",
      title: "Construction Planning, RAMS & Work Packs",
      items: [
        "Risk Assessments and Method Statements (RAMS)",
        "Review and assurance of RAMS prepared by others",
        "Development and review of work packs",
        "Integration of Temporary Works controls into work packs",
        "Support with permits and control documentation",
      ],
    },
    {
      id: "surveys",
      title: "Site Surveys & Scope Definition",
      items: [
        "Site surveys and walkdowns",
        "Scope definition and clarification",
        "Identification of constraints and interfaces",
        "Access and logistics planning",
        "Early feasibility and constructability reviews",
      ],
    },
    {
      id: "assurance",
      title: "Technical Assurance & Independent Review",
      items: [
        "Independent review of designs, calculations, and proposals",
        "Constructability and buildability reviews",
        "Risk-based assurance of Temporary Works arrangements",
        "Compliance checks against standards, guidance, and client requirements",
        "Second-line assurance for clients lacking in-house capability",
      ],
    },
    {
      id: "ims",
      title: "IMS, Compliance & Governance Systems",
      items: [
        "Integrated Management System (IMS) development",
        "Policies, procedures, forms, and registers",
        "Temporary Works procedures and form suites",
        "Audit-ready governance frameworks",
        "Support with PQQs, audits, and assurance requirements",
      ],
    },
  ];

  const [openId, setOpenId] = useState(groups[0].id);

  return (
    <div className="cap-accordion">
      {groups.map((g) => {
        const isOpen = openId === g.id;
        return (
          <div className="cap-acc-item" key={g.id}>
            <button
              type="button"
              className={`cap-acc-btn ${isOpen ? "open" : ""}`}
              onClick={() => setOpenId(isOpen ? "" : g.id)}
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span>{g.title}</span>
              <span className="cap-acc-icon">{isOpen ? "–" : "+"}</span>
            </button>

            <div className={`cap-acc-panel ${isOpen ? "open" : ""}`}>
              <div className="cap-card cap-card-lite">
                <ul className="mb-0" style={{ paddingLeft: 18 }}>
                  {g.items.map((it) => (
                    <li key={it} style={{ marginBottom: 6 }}>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* =========================
   HOME
========================= */
function Home() {
  const [heroTitleReady, setHeroTitleReady] = useState(false);
  const [heroTagsReady, setHeroTagsReady] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);
  const [overviewInView, setOverviewInView] = useState(false);

  // ✅ HashRouter-safe scroll helper (works in dev + GH Pages)
  const safeScroll = (id) => {
    if (!window.location.hash.startsWith("#/")) window.location.hash = "#/";
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  useEffect(() => {
    const t1 = setTimeout(() => setHeroTitleReady(true), 450);
    const t2 = setTimeout(() => setHeroTagsReady(true), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // About intro trigger (word-by-word)
  useEffect(() => {
    const el = document.getElementById("about-intro");
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ✅ One observer to add "in-view" on key sections + set overview trigger
  useEffect(() => {
    const ids = ["about-intro", "overview", "what", "contact"];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (entry.target.id === "overview") setOverviewInView(true);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  // Scroll-driven hero collapse: writes --hero-progress (0..1)
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroH = hero.offsetHeight || window.innerHeight;
      const y = window.scrollY || 0;
      const p = Math.min(1, Math.max(0, y / (heroH * 0.7)));

      document.documentElement.style.setProperty("--hero-progress", String(p));
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const HERO_BG = import.meta.env.BASE_URL + "hero-bg.png";

  const aboutPara1 =
    "GWx is an independent consultancy formed by experienced construction and Temporary Works professionals with extensive hands-on delivery experience in high-risk and heavily regulated environments.";

  const aboutPara2 =
    "We specialise in strengthening project delivery where complexity, risk, or regulatory pressure demands clarity, control, and defensible decision-making — bridging the gap between design, construction, and assurance.";

  const aboutPara3 =
    "Our focus is proportionate, defensible governance that supports safe delivery while remaining practical, commercially aware and aligned with programme pressures.";

  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        className="hero hero-bg"
        style={{ "--hero-bg": `url("${HERO_BG}")` }}
      >
        <div className={`hero-title-screen ${heroTitleReady ? "show" : ""}`}>
          <div
            className="hero-kicker"
            style={{
              opacity: heroTagsReady ? 1 : 0,
              transition: "opacity 900ms ease",
            }}
          >
            GWx Consultancy Services Ltd
          </div>

          <h1 className="hero-title-big">GWx</h1>

          <div
            className="hero-kicker"
            style={{
              opacity: heroTagsReady ? 1 : 0,
              transition: "opacity 1200ms ease",
            }}
          >
            PROJECT MANAGEMENT • TEMPORARY WORKS • GOVERNANCE &amp; ASSURANCE
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section id="about-intro" className="section-panel about-intro">
        <div className="container">
          <div className="about-intro-inner">
            <div className="overview-kicker">About GWx</div>

            <h2 className="overview-title">
              <AnimatedText
                text="Independent governance-led consultancy for complex, high-risk delivery."
                trigger={aboutInView}
                baseDelay={0}
                step={55}
              />
            </h2>

            <p className="overview-lead">
              <AnimatedText text={aboutPara1} trigger={aboutInView} baseDelay={380} step={42} />
            </p>

            <p className="overview-lead about-intro-lead2">
              <AnimatedText text={aboutPara2} trigger={aboutInView} baseDelay={820} step={42} />
            </p>

            <p className="overview-lead about-intro-lead2">
              <AnimatedText text={aboutPara3} trigger={aboutInView} baseDelay={1220} step={42} />
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="section-panel overview overview-scene">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-left">
              <div className="overview-kicker">Overview</div>

              {/* ✅ GWx pops in the title */}
              <h2 className="overview-title">
                <AnimatedText
                  text="GWx delivers clarity, control and defensible decision-making — without bureaucracy."
                  trigger={overviewInView}
                  baseDelay={0}
                  step={55}
                />
              </h2>

              {/* ✅ GWx pops in THIS paragraph too */}
              <p className="overview-lead">
                <AnimatedText
                  text="GWx provides independent project management, Temporary Works and governance-led assurance support across construction, industrial, infrastructure and regulated environments. Our work is grounded in real site delivery and stakeholder-level experience — aligned to audit, scrutiny and programme pressure."
                  trigger={overviewInView}
                  baseDelay={320}
                  step={30}
                />
              </p>

              <div className="overview-checklist">
                <div className="overview-split">
                  <div className="check-group">
                    <div className="check-title" style={{ "--d": "0ms" }}>
                      What you get
                    </div>
                    <ul className="check-list">
                      <li className="check-item" style={{ "--d": "250ms" }}>
                        Clear oversight
                      </li>
                      <li className="check-item" style={{ "--d": "500ms" }}>
                        Defensible systems
                      </li>
                      <li className="check-item" style={{ "--d": "750ms" }}>
                        Confident delivery support
                      </li>
                    </ul>
                  </div>

                  <div className="overview-facts">
                    <div className="fact">
                      <div className="fact-k">Operating level</div>
                      <div className="fact-v">Tier 1 / Tier 2 delivery environments</div>
                    </div>

                    <div className="fact">
                      <div className="fact-k">Focus</div>
                      <div className="fact-v">Temporary Works • Governance • Assurance</div>
                    </div>

                    <div className="fact">
                      <div className="fact-k">Outputs</div>
                      <div className="fact-v">
                        Audit-ready evidence • Clear actions • Governance clarity
                      </div>
                    </div>
                  </div>
                </div>

                <div className="check-group">
                  <div className="check-title" style={{ "--d": "1050ms" }}>
                    How we work
                  </div>
                  <ul className="check-list">
                    <li className="check-item" style={{ "--d": "1300ms" }}>
                      Embedded alongside your team
                    </li>
                    <li className="check-item" style={{ "--d": "1550ms" }}>
                      Risk-based, proportionate controls
                    </li>
                    <li className="check-item" style={{ "--d": "1800ms" }}>
                      Value first, process second
                    </li>
                  </ul>
                </div>

                <div className="check-group">
                  <div className="check-title" style={{ "--d": "2050ms" }}>
                    Where it matters
                  </div>
                  <ul className="check-list">
                    <li className="check-item" style={{ "--d": "2300ms" }}>
                      Regulated sites
                    </li>
                    <li className="check-item" style={{ "--d": "2550ms" }}>
                      Complex interfaces
                    </li>
                    <li className="check-item" style={{ "--d": "2800ms" }}>
                      Programme pressure
                    </li>
                  </ul>
                </div>

               <div className="overview-ctas">
  <button
    type="button"
    className="btn btn-outline-light btn-sm"
    onClick={() => safeScroll("contact")}
  >
    Make an enquiry
  </button>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="what" className="py-5 section-panel">
        <div className="container">
          <div className="mb-3">
            <div className="overview-kicker">Core capability overview</div>
            <h2 className="overview-title">Capabilities</h2>
            <p className="overview-lead">
              Governance-led support across delivery, Temporary Works, assurance and documentation —
              aligned to regulated environments and high-risk projects.
            </p>
          </div>

          <Capabilities />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="mb-3">
            <div className="overview-kicker">Contact</div>
            <h2 className="overview-title">Make an enquiry</h2>
            <p className="overview-lead">
              For enquiries relating to project management support, Temporary Works governance, tendering,
              assurance or documentation — use the form below.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-5">
              <div className="contact-card">
                <div className="contact-line">
                  <div className="contact-k">Email</div>
                  <div className="contact-v">
                    <a href="mailto:info@gwxconsultants.co.uk">info@gwxconsultants.co.uk</a>
                  </div>
                </div>

                <div className="contact-line">
                  <div className="contact-k">Operating</div>
                  <div className="contact-v">Construction • Industrial • Infrastructure • Regulated</div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="form-card" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-2">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="6" placeholder="Write a message..." />
                </div>
                <button className="btn btn-outline-light btn-sm mt-2">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================
   APPSHELL
========================= */
function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const rootRef = useRef(null);

  useEffect(() => {
    wrapGWx(rootRef.current);
  }, [location.pathname]);

  // ✅ nav: hidden on hero only (home), always visible on /about
  useEffect(() => {
    const nav = document.querySelector(".nav-panel");
    if (!nav) return;

    if (location.pathname !== "/") {
      nav.classList.add("is-visible");
      return;
    }

    const hero = document.querySelector(".hero");
    if (!hero) {
      nav.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) nav.classList.add("is-visible");
        else nav.classList.remove("is-visible");
      },
      { threshold: 0.15 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  const goHomeAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="site-card" ref={rootRef}>
      <header>
        <div className="nav-panel">
          <nav className="navbar">
            <div className="nav-inline">
              <span className="navbar-brand" onClick={() => navigate("/")}>
                GWx
              </span>

              <ul className="navbar-nav">
                <li><a onClick={() => goHomeAndScroll("overview")}>Overview</a></li>
                <li><a onClick={() => goHomeAndScroll("what")}>Capabilities</a></li>
                <li><a onClick={() => goHomeAndScroll("contact")}>Contact</a></li>
                <li><a onClick={() => navigate("/about")}>About</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return <AppShell />;
}
