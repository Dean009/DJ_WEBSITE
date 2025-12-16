import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="hero">
        <div className="container hero-container py-5">
          <div className="row hero-card">
            <div className="col-12">
              <div className="hero-meta">TECHNICAL | TEMPORARY WORKS | COMPLIANCE</div>
            </div>

            <div className="col-lg-8">
              <h1 className="hero-title">GWx Consultancy Services</h1>
              <p className="hero-lead">
                Independent technical and compliance support for complex, high-risk projects.
                <span className="hero-lead-strong"> We’ve got you covered.</span>
              </p>
            </div>

            <div className="col-lg-4">
              <div className="hero-side">
                <div className="hero-side-line">
                  <span className="hero-side-k">Operating level</span>
                  <span className="hero-side-v">Tier 1 / Tier 2 delivery environments</span>
                </div>
                <div className="hero-side-line">
                  <span className="hero-side-k">Focus</span>
                  <span className="hero-side-v">Governance • Assurance • Practical Delivery</span>
                </div>
                <div className="hero-side-line">
                  <span className="hero-side-k">Pressure</span>
                  <span className="hero-side-v">Audit Scrutiny • Programme Risk • Compliance Gaps</span>
                </div>

              <div className="hero-actions">
  <a href="#contact" className="btn btn-outline-light btn-sm hero-contact">
    Contact
  </a>

  <a href="#/about" className="btn btn-outline-light btn-sm hero-contact">
    About
  </a>
</div>

              </div>
            </div>

            {/* APPROACH INSIDE HERO */}
            <div className="col-12 mt-4">
              <div className="hero-approach">
                <p>GWx works alongside client teams as an extension of their technical leadership.</p>
                <p>
                  We provide oversight, structure, and assurance where governance, capability or capacity is stretched — without
                  taking ownership away from the client.
                </p>
                <p>
                  Our focus is proportionate, defensible governance that supports safe delivery while remaining practical,
                  commercially aware and aligned with programme pressures.
                </p>
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
              Clear capability support — structured, defensible, aligned to real delivery and regulatory scrutiny.
            </p>
          </div>

          <div className="row g-3">
            {[
              ["Temporary Works governance & coordination", "Proportionate systems and coordination support aligned with recognised standards and PC expectations."],
              ["Scaffold design management coordination & design brief support", "Structured brief development, interface control, and assurance across scaffold design and delivery."],
              ["Scheduling & sequencing for programme preparation", "Sequencing logic, constructability input, and Temporary Works integration into programme planning."],
              ["RAMS and Integrated Management Systems", "Development, review, and assurance of RAMS/IMS that withstand audit and site reality."],
              ["Tender quotations", "Technical input to tender submissions: scope clarity, governance alignment, and risk visibility."],
              ["Project support", "Embedded support where capability or capacity is stretched — planning through delivery and assurance."],
              ["Risk analysis", "Identification, assessment, and mitigation of technical, compliance, and programme risk."],
              ["Audit readiness, compliance, and assurance", "Preparation for internal, client, and regulatory scrutiny with clear, auditable evidence trails."],
              ["GAP analysis", "Targeted reviews to identify governance gaps and prioritised actions to close them."],
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
<section id="support" className="py-5">
  <div className="container">
    <div className="section-head">
      <h2 className="section-title">How we support clients</h2>
      <p className="section-sub">Outcome-focused support — value first, process second.</p>
    </div>

    <div className="row g-3">
      <div className="col-md-6 col-lg-4">
        <div className="support-card">
          <div className="support-kicker"></div>
          <h5>Reduced risk exposure</h5>
          <p>Control of technical and Temporary Works risk before it drives disruption or rework.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="support-card">
          <div className="support-kicker"></div>
          <h5>Stronger governance</h5>
          <p>Clear ownership, escalation routes and assurance points without unnecessary bureaucracy.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="support-card">
          <div className="support-kicker"></div>
          <h5>Closed compliance gaps</h5>
          <p>Targeted gap closure before issues become audit findings or regulatory challenge.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-6">
        <div className="support-card">
          <div className="support-kicker"></div>
          <h5>Contractor and client alignment</h5>
          <p>Support that aligns Tier 1 / Tier 2 delivery expectations with practical site implementation.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-6">
        <div className="support-card">
          <div className="support-kicker"></div>
          <h5>Defensible assurance</h5>
          <p>Evidence and governance that stands up to audits and scrutiny — consistent on paper and in practice.</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* SECTORS */}
<section id="sectors" className="py-5 section-panel">
  <div className="container">
    <div className="section-head">
      <h2 className="section-title">Sectors & experience</h2>
      <p className="section-sub">
        Operating experience across regulated, high-risk and complex delivery environments.
      </p>
    </div>

    <div className="row g-3">
      <div className="col-md-6 col-lg-3">
        <div className="sector-card">
          <h5>Nuclear</h5>
          <p>Highly regulated sites with intense assurance, audit and compliance scrutiny.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="sector-card">
          <h5>Infrastructure</h5>
          <p>Major civil and infrastructure works with complex interfaces and programme pressure.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="sector-card">
          <h5>Industrial &amp; process environments</h5>
          <p>Live operational environments requiring tight control of Temporary Works and access.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="sector-card">
          <h5>Complex construction projects</h5>
          <p>Multi-discipline projects where sequencing, coordination and governance are critical.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Contact</h2>
            <p className="section-sub"></p>
          </div>

          <div className="row g-4">
            <div className="col-lg-5">
              <div className="contact-card">
                <p className="mb-3">
                  For enquiries relating to technical support, Temporary Works governance, or compliance assurance:
                </p>

                <div className="contact-line">
                  <div className="contact-k">Email</div>
                  <div className="contact-v">
                    <a href="mailto:info@gwxconsultancy.co.uk">info@gwxconsultancy.co.uk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="form-card" onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control form-control-dark" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Organisation</label>
                    <input type="text" className="form-control form-control-dark" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-control-dark" />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea className="form-control form-control-dark" rows="5"></textarea>
                  </div>

                  <div className="col-12 d-flex align-items-center justify-content-between gap-3">
                    <button type="submit" className="btn btn-outline-light btn-sm">Send</button>
                    <span className="form-note">Form wiring can be added later.</span>
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
      // allow route render, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="site-card">
      <header>
        <div className="nav-panel">
          <nav className="navbar">
            <div className="container">
              <a className="navbar-brand" href="#/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                <img
                  src={import.meta.env.BASE_URL + "logo.svg"}
                  alt="GWx Logo"
                  height="28"
                  className="d-inline-block align-text-top me-2 logo-swap"
                />
                GWx Consultancy Services
              </a>

              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#what" onClick={(e) => { e.preventDefault(); goHomeAndScroll("what"); }}>What we do</a></li>
                <li className="nav-item"><a className="nav-link" href="#support" onClick={(e) => { e.preventDefault(); goHomeAndScroll("support"); }}>Support</a></li>
                <li className="nav-item"><a className="nav-link" href="#sectors" onClick={(e) => { e.preventDefault(); goHomeAndScroll("sectors"); }}>Sectors</a></li>
                <li className="nav-item"><a className="nav-link" href="#/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>About</a></li>
                <li className="nav-item"><a className="nav-link nav-link-cta" href="#contact" onClick={(e) => { e.preventDefault(); goHomeAndScroll("contact"); }}>Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="py-4">
        <div className="container footer-line">
          <div className="footer-left">
            <div className="footer-brand">GWx Consultancy Services</div>
            <div className="footer-meta">Technical | Temporary Works | Compliance</div>
          </div>
          <div className="footer-right">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</a>
            <span className="footer-sep">/</span>
            <a href="#/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return <AppShell />;
}
