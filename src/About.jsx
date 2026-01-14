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
          <h1 className="doc-title">About <img src={logo} alt="GWx" style={{ height: '1.2em', verticalAlign: 'middle', marginTop: '-0.15em' }} /></h1>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
            <div className="doc-lead">
              <p>
                <AnimatedText text="GWx is an independent consultancy formed by experienced construction and Temporary Works professionals with extensive hands-on delivery experience in high-risk and heavily regulated environments." />
              </p>
              <p>
                <AnimatedText text="We focus on proportionate, defensible governance that supports safe delivery while remaining practical, commercially aware and aligned with programme pressures." baseDelay={800} />
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src={GWX2} alt="GWx Technical" style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} />
            </div>
          </div>

          <div className="about-buttons" style={{ marginTop: 14 }}>
            <a href="#/" className="btn btn-outline-light btn-sm">
              Back to home
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
                  Dave Garside is an experienced Construction Manager, Project Manager, Temporary Works and Health &amp; Safety
                  professional specialising in technical assurance, design coordination, and governance across complex construction
                  environments.
                </p>
                <p>
                  He has extensive experience supporting the development, review, and implementation of Temporary Works systems,
                  ensuring alignment with recognised standards, principal contractor requirements, and client frameworks.
                </p>
                <p>
                  Dave is a member of IOSH and is known for his methodical, detail-driven approach and his ability to provide calm,
                  clear technical oversight where risk, complexity or scrutiny is high.
                </p>
              </div>
            </article>

            <div className="bio-logo" style={{ gridColumn: "1 / -1", marginTop: "2rem", textAlign: "center" }}>
              <img src={logo} alt="GWx Logo" style={{ maxWidth: "100%", maxHeight: "250px", height: "auto" }} />
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
          </div>
        </div>
      </section>
    </main>
  );
}
