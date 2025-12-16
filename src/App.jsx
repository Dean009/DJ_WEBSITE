import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="hero">
        <div className="container hero-container">
          <div className="row hero-card">
            <div className="col-12">
              <div className="hero-header">
                <div className="hero-logo">
                  <img
                    src={import.meta.env.BASE_URL + "logo.svg"}
                    alt="GWx logo"
                  />
                </div>
                <div className="hero-meta">
                  TECHNICAL | TEMPORARY WORKS | COMPLIANCE
                </div>
              </div>
            </div>

            {/* LEFT COLUMN */}
            <div className="col-lg-8">
              <h1 className="hero-title">GWx Consultancy Services Ltd</h1>

              <p className="hero-lead">
                Independent technical and compliance support for complex,
                high-risk projects.
                <br />
                <span className="hero-lead-strong">We’ve got you covered.</span>
              </p>

              <div className="hero-approach hero-approach-balanced">
                <p>
                  GWx works alongside client teams as an extension of their
                  technical leadership.
                </p>
                <p>
                  We provide oversight, structure, and assurance where
                  governance, capability or capacity is stretched — without
                  taking ownership away from the client.
                </p>
                <p>
                  Our focus is proportionate, defensible governance that
                  supports safe delivery while remaining practical,
                  commercially aware and aligned with programme pressures.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-4">
              <div className="hero-side">
                <div className="hero-side-line">
                  <span className="hero-side-k">Operating level</span>
                  <span className="hero-side-v">
                    Tier 1 / Tier 2 delivery environments
                  </span>
                </div>

                <div className="hero-side-line">
                  <span className="hero-side-k">Focus</span>
                  <span className="hero-side-v">
                    Governance • Assurance • Practical Delivery
                  </span>
                </div>

                <div className="hero-side-line">
                  <span className="hero-side-k">Pressure</span>
                  <span className="hero-side-v">
                    Audit Scrutiny • Programme Risk • Compliance Gaps
                  </span>
                </div>

                <div className="hero-actions">
                  <a
                    href="#contact"
                    className="btn btn-outline-light btn-sm hero-contact"
                  >
                    Contact
                  </a>
                  <a
                    href="#/about"
                    className="btn btn-outline-light btn-sm hero-contact"
                  >
                    About
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
              Clear capability support — structured, defensible, aligned to real
              delivery and regulatory scrutiny.
            </p>
          </div>

          <div className="row g-3">
            {[
              [
                "Temporary Works governance & coordination",
                "Proportionate systems and coordination support aligned with recognised standards and PC expectations.",
              ],
              [
                "Scaffold design management coordination & design brief support",
                "Structured brief development, interface control, and assurance across scaffold design and delivery.",
              ],
              [
                "Scheduling & sequencing for programme preparation",
                "Sequencing logic, constructability input, and Temporary Works integration into programme planning.",
              ],
              [
                "RAMS and Integrated Management Systems",
                "Development, review, and assurance of RAMS/IMS that withstand audit and site reality.",
              ],
              [
                "Tender quotations",
                "Technical input to tender submissions: scope clarity, governance alignment, and risk visibility.",
              ],
              [
                "Project support",
                "Embedded support where capability or capacity is stretched — planning through delivery and assurance.",
              ],
              [
                "Risk analysis",
                "Identification, assessment, and mitigation of technical, compliance, and programme risk.",
              ],
              [
                "Audit readiness, compliance, and assurance",
                "Preparation for internal, client, and regulatory scrutiny with clear, auditable evidence trails.",
              ],
              [
                "GAP analysis",
                "Targeted reviews to identify governance gaps and prioritised actions to close them.",
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

      {/* SUPPORT */}
      <section id="support" className="py-5 section-panel">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">How we support clients</h2>
            <p className="section-sub">
              Outcome-focused support — value first, process second.
            </p>
          </div>

          <div className="support-ledger">
            {[
              [
                "Reduced risk exposure",
                "Control of technical and Temporary Works risk before it drives disruption, rework or programme impact.",
              ],
              [
                "Stronger governance",
                "Clear ownership, escalation routes and assurance points without unnecessary bureaucracy or duplication.",
              ],
              [
                "Closed compliance gaps",
                "Targeted gap closure before issues become audit findings or regulatory challenge.",
              ],
              [
                "Contractor and client alignment",
                "Alignment between Tier 1 / Tier 2 delivery expectations and practical site implementation.",
              ],
              [
                "Defensible assurance",
                "Evidence-led governance that stands up to audits, scrutiny and independent review.",
              ],
            ].map(([title, text]) => (
              <div className="support-row" key={title}>
                <h5>{title}</h5>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="py-5 section-panel">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Sectors & experience</h2>
            <p className="section-sub">
              Operating experience across regulated, high-risk and complex
              delivery environments.
            </p>
          </div>

          <div className="row g-3">
            {[
              ["Nuclear", "Highly regulated sites with intense assurance, audit and compliance scrutiny."],
              ["Infrastructure", "Major civil and infrastructure works with complex interfaces and programme pressure."],
              ["Industrial & process environments", "Live operational environments requiring tight control of Temporary Works and access."],
              ["Complex construction projects", "Multi-discipline projects where sequencing, coordination and governance are critical."],
            ].map(([title, text]) => (
              <div className="col-md-6 col-lg-3" key={title}>
                <div className="sector-card">
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
            <h2 className="section-title">Contact Us</h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-5">
<div className="contact-card">
  <p>
    For enquiries relating to technical support, Temporary Works
    governance, or compliance assurance:
  </p>

  <div className="contact-line">
    <div className="contact-k">Email</div>
    <div className="contact-v">
      <a href="mailto:info@gwxconsultancy.co.uk">
        info@gwxconsultancy.co.uk
      </a>
    </div>
  </div>

  <div className="mt-3">
    <a
      href="#/about"
      className="btn btn-outline-light btn-sm"
    >
      About us
    </a>
  </div>
</div>

            </div>

            <div className="col-lg-7">
              <form className="form-card" onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input className="form-control form-control-dark" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Organisation</label>
                    <input className="form-control form-control-dark" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input className="form-control form-control-dark" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control form-control-dark"
                      rows="5"
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-light btn-sm">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();

  const goHomeAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="site-card">
      <header>
        <div className="nav-panel">
          <nav className="navbar">
            <div className="container">
              <a
                className="navbar-brand"
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                <img
                  src={import.meta.env.BASE_URL + "logo.svg"}
                  alt="GWx Logo"
                  height="28"
                  className="me-2 logo-swap"
                />
                GWx Consultancy Services Ltd
              </a>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#what" onClick={(e) => { e.preventDefault(); goHomeAndScroll("what"); }}>
                    What we do
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#support" onClick={(e) => { e.preventDefault(); goHomeAndScroll("support"); }}>
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sectors" onClick={(e) => { e.preventDefault(); goHomeAndScroll("sectors"); }}>
                    Sectors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-cta" href="#contact" onClick={(e) => { e.preventDefault(); goHomeAndScroll("contact"); }}>
                    Contact
                  </a>
                </li>
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
