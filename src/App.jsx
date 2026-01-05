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
   HOME (kept inside App.jsx)
========================= */
function Home() {
  const [heroTitleReady, setHeroTitleReady] = useState(false);   // GWx
  const [heroTagsReady, setHeroTagsReady] = useState(false);     // taglines
  const [aboutInView, setAboutInView] = useState(false);

  // ✅ Hero staged load: GWx first, taglines later
  useEffect(() => {
    const t1 = setTimeout(() => setHeroTitleReady(true), 450);    // GWx appears
    const t2 = setTimeout(() => setHeroTagsReady(true), 1200);    // taglines appear later
    return () => { clearTimeout(t1); clearTimeout(t2); };
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

  // Overview reveal (adds class to the SECTION, matches CSS)
  useEffect(() => {
    const el = document.getElementById("overview");
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

  // Scroll-driven hero collapse: writes --hero-progress (0..1)
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroH = hero.offsetHeight || window.innerHeight;
      const y = window.scrollY || 0;

      // progress 0..1 over first ~70% of hero height
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
    "Our focus is on proportionate, defensible governance that supports safe delivery while remaining practical, commercially aware and aligned with programme pressures.";

  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        className="hero hero-bg"
        style={{ "--hero-bg": `url("${HERO_BG}")` }}
      >
        <div
          className={[
            "hero-title-screen",
            heroTitleReady ? "show" : "",
            heroTagsReady ? "tags-show" : "",
          ].join(" ")}
        >
          <div className="hero-kicker hero-tag hero-tag-top">
            GWx Consultancy Services Ltd
          </div>

          <h1 className="hero-title-big">GWx</h1>

          <div className="hero-kicker hero-tag hero-tag-bottom">
            TECHNICAL • TEMPORARY WORKS • COMPLIANCE
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
                text="Independent support built for high-risk delivery."
                trigger={aboutInView}
                baseDelay={0}
                step={55}
              />
            </h2>

            <p className="overview-lead">
              <AnimatedText
                text={aboutPara1}
                trigger={aboutInView}
                baseDelay={380}
                step={42}
              />
            </p>

            <p className="overview-lead about-intro-lead2">
              <AnimatedText
                text={aboutPara2}
                trigger={aboutInView}
                baseDelay={820}
                step={42}
              />
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

              <h2 className="overview-title">
                Practical governance and assurance for high-risk delivery.
              </h2>

              <p className="overview-lead">
                GWx supports Tier 1 and Tier 2 contractors with proportionate Temporary Works
                governance, technical coordination, and compliance assurance — designed to stand
                up to audit, scrutiny, and real site pressures.
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
                      <div className="fact-v">Temporary Works • Assurance • Compliance</div>
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
                      Value first, process second
                    </li>
                  </ul>
                </div>

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

                <div className="overview-ctas">
                  <a href="#contact" className="btn btn-outline-light btn-sm">
                    Make an enquiry
                  </a>
                  <a href="#/about" className="btn btn-outline-light btn-sm">
                    About GWx
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
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

      {/* CONTACT */}
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
                <textarea
  className="form-control gwx-textarea"
  rows="5"
  placeholder="Write a message..."
/>

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
   APPSHELL
========================= */
function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const rootRef = useRef(null);

  useEffect(() => {
    wrapGWx(rootRef.current);
  }, [location.pathname]);

  useEffect(() => {
    const nav = document.querySelector(".nav-panel");
    const hero = document.querySelector(".hero");
    if (!nav || !hero) return;

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
      }, 60);
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
                <li><a onClick={() => goHomeAndScroll("what")}>What we do</a></li>
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
