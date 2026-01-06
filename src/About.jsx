// src/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    // home route mounts immediately; small delay lets DOM paint
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  const goContact = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <main className="doc-page">
      <section className="doc-hero">
        <div className="container">
          <div className="doc-meta">ABOUT</div>
          <h1 className="doc-title">About GWx</h1>

          <div className="doc-lead">
            <p>
              GWx is an independent consultancy formed by experienced construction and Temporary Works professionals with
              extensive hands-on delivery experience in high-risk and heavily regulated environments.
            </p>
            <p>
              We focus on proportionate, defensible governance that supports safe delivery while remaining practical,
              commercially aware and aligned with programme pressures.
            </p>
          </div>

          <div style={{ marginTop: 14 }}>
            <button type="button" className="btn btn-outline-light btn-sm" onClick={goHome}>
              Back to home
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-sm"
              style={{ marginLeft: 10 }}
              onClick={goContact}
            >
              Contact
            </button>
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
          </div>
        </div>
      </section>
    </main>
  );
}
