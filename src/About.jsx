// src/About.jsx
import React, { useMemo } from "react";
import logo from "/GWXLOGO/logo-02-png.png";

const GWX2 = import.meta.env.BASE_URL + "GWx2.png";

function AnimatedText({ text, trigger = true, baseDelay = 0, step = 55 }) {
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

export default function About() {
  return (
    <main className="doc-page">
      <section className="doc-hero">
        <div className="container">
          <h1 className="doc-title">About</h1>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
            <div className="doc-lead">
              <p>
                <AnimatedText text="GWx Consultancy Services Ltd is an independent, governance‑led consultancy built on senior construction, Project Management and Temporary Works expertise, shaped by extensive hands‑on delivery across high‑risk and heavily regulated environments. Our background spans major infrastructure, industrial and complex access projects, giving us a clear understanding of how real‑world pressures, interfaces and regulatory demands influence project outcomes." />
              </p>
              <p>
                <AnimatedText text="We operate at the points where Temporary Works, access, design intent, programme pressure and site reality converge. Our experience covers both permanent and temporary works, from early planning and design coordination through to live construction, modification, maintenance and dismantling activities across nuclear, petrochemical, offshore, heavy industrial, infrastructure and major new‑build environments." />
              </p>
              <p>
                <AnimatedText text="GWx provides proportionate, defensible governance that strengthens project delivery while remaining practical, commercially aware and aligned with programme requirements. Our role is to strengthen systems, support decision‑making, and bring clarity to complex environments." />
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src={GWX2} alt="GWx Technical" style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} />
            </div>
          </div>

          <div className="about-buttons" style={{ marginTop: 14 }}>
            <a href="#/" className="btn btn-outline-light btn-sm">
              Home
            </a>
            <a href="#/services" className="btn btn-outline-light btn-sm" style={{ marginLeft: 10 }}>
              Our services
            </a>
            <a href="#/?#contact" className="btn btn-outline-light btn-sm" style={{ marginLeft: 10 }}>
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="doc-body">
        <div className="container">
          <div className="bio-grid">
            <article className="bio-block">
              <div className="bio-head">
                <h2 className="bio-name">Jamie Wright</h2>
              </div>

              <div className="bio-text">
                <p>
                  Jamie Wright is a construction, Project Management and Temporary Works professional with senior experience in
                  Temporary Works governance, scaffolding operations, compliance systems, and project assurance across complex,
                  high-risk projects.
                </p>
                <p>
                  He has operated within Tier 1 contractor environments and heavily regulated sites, with direct responsibility
                  for Project Management functions, Temporary Works coordination, interface management, and the development of
                  robust, auditable systems.
                </p>
                <p>
                  Jamie brings a practical, delivery-focused approach shaped by real project pressures, regulatory scrutiny, and
                  the need to balance safety, programme and commercial realities.
                </p>
              </div>
            </article>

            <article className="bio-block">
              <div className="bio-head">
                <h2 className="bio-name">Dave Garside</h2>
              </div>

              <div className="bio-text">
                <p>
                  Dave Garside is an experienced Construction Manager, Temporary Works and Access professional with over 30 years' delivery experience across nuclear, oil and gas, heavy industry, marine, civils, and major stadium projects. He specialises in technical assurance, design coordination, and proportionate governance across complex, high‑risk construction environments.
                </p>
                <p>
                  He has extensive experience developing, reviewing, and implementing Temporary Works and access systems, ensuring alignment with recognised standards, principal contractor procedures, and client frameworks.
                </p>
                <p>
                  Dave is a Certified Member of IOSH and is known for his methodical, detail‑driven approach and his ability to provide calm, clear technical oversight where risk, complexity, or scrutiny is high.
                </p>
              </div>
            </article>
          </div>

          <div style={{ marginTop: "3rem" }}>
          </div>
        </div>
      </section>
    </main>
  );
}
