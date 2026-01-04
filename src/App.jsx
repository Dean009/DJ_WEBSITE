import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./About";

/* =========================
   HOME
========================= */
function Home() {
  const [titleReady, setTitleReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTitleReady(true), 650);
    return () => clearTimeout(t);
  }, []);

  /* Reveal Overview on scroll */
  useEffect(() => {
    const el = document.getElementById("intro-content");
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("in-view");
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const HERO_BG = import.meta.env.BASE_URL + "hero-bg.png";

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="hero hero-bg"
        style={{ "--hero-bg": `url("${HERO_BG}")` }}
      >
        <div className={`hero-title-screen ${titleReady ? "show" : ""}`}>
          <div className="hero-title-inner">
            <div className="hero-kicker delayed">GWx Consultancy Services Ltd</div>
            <h1 className="hero-title-big">GWx</h1>
            <div className="hero-kicker delayed">
              TECHNICAL • TEMPORARY WORKS • COMPLIANCE
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section id="intro-content" className="section-panel overview overview-scene">
        <div className="container">
          <div className="overview-grid">
            {/* LEFT */}
            <div className="overview-left">
              <div className="overview-kicker">Overview</div>

              <h2 className="overview-title">
                Practical governance and assurance for high-risk delivery.
              </h2>

              <p className="overview-lead">
                GWx supports Tier 1 and Tier 2 contractors with proportionate Temporary Works
                governance, technical coordination, and compliance assurance — designed to stand
                up to audit, scrutiny, and real site pressures.
              </p>

              {/* ✅ Checklist-style points (staggered + ticks) */}
              <div className="overview-checklist">
                {/* Group 1 */}
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

                {/* Group 2 */}
                <div className="check-group">
                  <div className="check-title" style={{ "--d": "1050ms" }}>
                    How we work
                  </div>
                  <ul className="check-list">
                    <li className="check-item" style={{ "--d": "1300ms" }}>
                      Embedded alongside your team
                    </li>
                    <li className="check-item" style={{ "--d": "1550ms" }}>
                      Value first, process second
                    </li>
                  </ul>
                </div>

                {/* Group 3 */}
                <div className="check-group">
                  <div className="check-title" style={{ "--d": "1850ms" }}>
                    Where it matters
                  </div>
                  <ul className="check-list">
                    <li className="check-item" style={{ "--d": "2100ms" }}>
                      Regulated sites
                    </li>
                    <li className="check-item" style={{ "--d": "2350ms" }}>
                      Complex interfaces
                    </li>
                    <li className="check-item" style={{ "--d": "2600ms" }}>
                      Programme pressure
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <aside className="overview-right">
              <div className="overview-card">
                <div className="fact">
                  <div className="fact-k">Operating level</div>
                  <div className="fact-v">Tier 1 / Tier 2 delivery environments</div>
                </div>

                <div className="fact">
                  <div className="fact-k">Focus</div>
                  <div className="fact-v">Temporary Works • Assurance • Compliance</div>
                </div>

                <div className="fact">
                  <div className="fact-k">Outputs</div>
                  <div className="fact-v">
                    Audit-ready evidence • Clear actions • Governance clarity
                  </div>
                </div>

                <div className="overview-actions">
                  <a href="#contact" className="btn btn-outline-light btn-sm">
                    Make an enquiry
                  </a>
                  <a href="#/about" className="btn btn-outline-light btn-sm">
                    About GWx
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section id="what" className="py-5 section-panel">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">What we do</h2>
            <p className="section-sub">
              Clear, proportionate support aligned to delivery and regulatory scrutiny.
            </p>
          </div>

          <div className="row g-3">
            {[
              [
                "Temporary Works governance & coordination",
                "Proportionate systems aligned with recognised standards and PC expectations.",
              ],
              [
                "Scaffold design management",
                "Brief development, interface control and assurance across scaffold delivery.",
              ],
              [
                "Scheduling & sequencing",
                "Constructability input and Temporary Works integration into programmes.",
              ],
              [
                "RAMS & Integrated Management Systems",
                "Audit-ready documentation reflecting site reality.",
              ],
              [
                "Tender & technical submissions",
                "Scope clarity, governance alignment and risk visibility.",
              ],
              [
                "Embedded project support",
                "Capability uplift where delivery teams are stretched.",
              ],
            ].map(([title, text]) => (
              <div className="col-md-6 col-lg-4" key={title}>
                <div className="cap-card">
                  <h5>{title}</h5>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Contact</h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-5">
              <div className="contact-card">
                <div className="contact-line">
                  <div className="contact-k">Email</div>
                  <div className="contact-v">
                    <a href="mailto:info@gwxconsultancy.co.uk">
                      info@gwxconsultancy.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="form-card" onSubmit={(e) => e.preventDefault()}>
                <label className="form-label">Message</label>
                <textarea className="form-control form-control-dark" rows="4" />
                <button className="btn btn-outline-light btn-sm mt-3">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================
   APP SHELL
========================= */
function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hero = document.getElementById("hero");
    const nav = document.querySelector(".nav-panel");
    if (!hero || !nav) return;

    const onScroll = () => {
      if (hero.getBoundingClientRect().bottom <= 0) {
        nav.classList.add("is-visible");
      } else {
        nav.classList.remove("is-visible");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <div className="site-card">
      <header>
        <div className="nav-panel">
          <nav className="navbar">
            <div className="nav-inline">
              <a className="navbar-brand" onClick={() => navigate("/")}>
                GWx
              </a>

              <ul className="navbar-nav">
                <li><a onClick={() => navigate("/")}>Home</a></li>
                <li><a onClick={() => navigate("/about")}>About</a></li>
                <li><a href="#contact">Contact</a></li>
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
