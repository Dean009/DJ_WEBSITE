import React from 'react'

export default function App() {
  return (
    <div className="site-card">
      <header>
        <div className="nav-panel">
          <nav className="navbar">
            <div className="container">
              <a className="navbar-brand" href="#hero" aria-label="GWx Consultancy Services">
                <img
                  src={import.meta.env.BASE_URL + 'logo.svg'}
                  alt="GWx Logo"
                  height="28"
                  className="d-inline-block align-text-top me-2 logo-swap"
                />
                GWx Consultancy Services
              </a>

              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#what">What we do</a></li>
                <li className="nav-item"><a className="nav-link" href="#support">Support</a></li>
                <li className="nav-item"><a className="nav-link" href="#sectors">Sectors</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link nav-link-cta" href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="container hero-container py-5">
            <div className="row hero-card">
              <div className="col-12">
                <div className="hero-meta">TECHNICAL | TEMPORARY WORKS | COMPLIANCE</div>
              </div>

              <div className="col-lg-8">
                <h1 className="hero-title">GWx Consultancy Services Ltd</h1>
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
                    <span className="hero-side-v">Governance • Assurance • Practical delivery</span>
                  </div>
                  <div className="hero-side-line">
                    <span className="hero-side-k">Pressure</span>
                    <span className="hero-side-v">Audit scrutiny • programme risk • compliance gaps</span>
                  </div>

                  <a href="#contact" className="btn btn-outline-light btn-sm hero-contact">
                    Contact
                  </a>
                </div>
              </div>

              {/* APPROACH (inside hero panel, full width) */}
              <div className="col-12 mt-4">
                <div className="hero-approach">
                  <p>
                    GWx works alongside client teams as an extension of their technical leadership.
                  </p>
                  <p>
                    We provide oversight, structure, and assurance where governance, capability or capacity is stretched — without taking ownership away from the client.
                  </p>
                  <p>
                    Our focus is proportionate, defensible governance that supports safe delivery while remaining practical, commercially aware and aligned with programme pressures.
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
                ['Temporary Works governance & coordination','Proportionate systems and coordination support aligned with recognised standards and PC expectations.'],
                ['Scaffold design management coordination & design brief support','Structured brief development, interface control, and assurance across scaffold design and delivery.'],
                ['Scheduling & sequencing for programme preparation','Sequencing logic, constructability input, and Temporary Works integration into programme planning.'],
                ['RAMS and Integrated Management Systems','Development, review, and assurance of RAMS/IMS that withstand audit and site reality.'],
                ['Tender quotations','Technical input to tender submissions: scope clarity, governance alignment, and risk visibility.'],
                ['Project support','Embedded support where capability or capacity is stretched — planning through delivery and assurance.'],
                ['Risk analysis','Identification, assessment, and mitigation of technical, compliance, and programme risk.'],
                ['Audit readiness, compliance, and assurance','Preparation for internal, client, and regulatory scrutiny with clear, auditable evidence trails.'],
                ['GAP analysis','Targeted reviews to identify governance gaps and prioritised actions to close them.']
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

            <ul className="support-list">
              <li>Reducing risk exposure across technical and Temporary Works activities</li>
              <li>Strengthening governance without unnecessary bureaucracy</li>
              <li>Closing compliance gaps before they become audit findings</li>
              <li>Helping contractors meet Tier 1 / Tier 2 and client expectations</li>
              <li>Standing up to audits and scrutiny with defensible evidence</li>
            </ul>
          </div>
        </section>

        {/* SECTORS */}
        <section id="sectors" className="py-5 section-panel">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">Sectors & experience</h2>
              <p className="section-sub">Simple, factual coverage across regulated and complex environments.</p>
            </div>

            <div className="sector-chips">
              <span className="chip">Nuclear</span>
              <span className="chip">Infrastructure</span>
              <span className="chip">Industrial & process environments</span>
              <span className="chip">Complex construction projects</span>
            </div>
          </div>
        </section>

        {/* ABOUT + BIOS */}
        <section id="about" className="py-5 section-panel">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">About GWx</h2>
              <p className="section-sub">
                GWx is an independent consultancy formed by experienced construction and Temporary Works professionals with extensive hands-on delivery experience in high-risk and heavily regulated environments.
              </p>
            </div>

            <div className="prose-block mb-4">
              <p>
                Our focus is on proportionate, defensible governance that supports safe delivery while remaining practical, commercially aware and aligned with programme pressures.
              </p>
            </div>

            <div className="row g-3">
              <div className="col-lg-6">
                <div className="bio-card">
                  <h3>Jamie Wright</h3>
                  <p>
                    Jamie Wright is a construction, Project Management and Temporary Works professional with senior experience in Temporary Works governance, scaffolding operations, compliance systems, and project assurance across complex, high-risk projects.
                  </p>
                  <p>
                    He has operated within Tier 1 contractor environments and heavily regulated sites, with direct responsibility for Project Management functions, Temporary Works coordination, interface management, and the development of robust, auditable systems. Jamie brings a practical, delivery-focused approach shaped by real project pressures, regulatory scrutiny, and the need to balance safety, programme and commercial realities.
                  </p>
                  <p>
                    His work focuses on building proportionate, defensible governance that supports safe delivery without unnecessary complication.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="bio-card">
                  <h3>Dave Garside</h3>
                  <p>
                    Dave Garside is an experienced Construction Manager, Project Manager, Temporary Works and Health & Safety professional specialising in technical assurance, design coordination, and governance across complex construction environments.
                  </p>
                  <p>
                    He has extensive experience supporting the development, review, and implementation of Temporary Works systems, ensuring alignment with recognised standards, principal contractor requirements, and client frameworks.
                  </p>
                  <p>
                    Dave is a member of IOSH and is known for his methodical, detail-driven approach and his ability to provide calm, clear technical oversight where risk, complexity or scrutiny is high.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT (restore the proper form layout) */}
        <section id="contact" className="py-5">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">Contact</h2>
              <p className="section-sub">Direct communication to our team</p>
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
                      <button type="submit" className="btn btn-outline-light btn-sm">
                        Send
                      </button>
                      <span className="form-note">Form wiring can be added later.</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="py-4">
        <div className="container footer-line">
          <div className="footer-left">
            <div className="footer-brand">GWx Consultancy Services</div>
            <div className="footer-meta">Technical | Temporary Works | Compliance</div>
          </div>
          <div className="footer-right">
            <a href="#contact">Contact</a>
            <span className="footer-sep">/</span>
            <a href="#hero">Top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
