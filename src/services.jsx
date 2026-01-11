// src/Services.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  // HashRouter-safe: go Home, then scroll to #contact once DOM exists
  const scrollToContact = () => {
    // 1) ensure we are on the Home route
    navigate("/");

    // 2) wait a tick for Home to render, then scroll
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback: if for any reason the element isn't there yet, try again shortly
        setTimeout(() => {
          const el2 = document.getElementById("contact");
          if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    }, 80);
  };

  return (
    <main className="doc-page">
      {/* HERO */}
      <section className="doc-hero">
        <div className="container">
          <div className="doc-meta">SERVICES</div>
          <h1 className="doc-title">Services</h1>

          <div className="doc-lead">
            <p>
              GWx provides governance-led project, Temporary Works and assurance
              support across complex construction, industrial and regulated
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="doc-body">
        <div className="container">
          <div className="cap-card cap-card-lite mb-3">
            <h3 className="bio-name">Project Management</h3>
            <p>
              GWx provides experienced project management support across complex
              construction and industrial environments. We work client-side or
              alongside delivery teams to manage scope, programme, cost, risk,
              and interfaces, ensuring delivery is controlled, compliant and
              well governed.
            </p>
          </div>

          <div className="cap-card cap-card-lite mb-3">
            <h3 className="bio-name">Temporary Works Management &amp; Coordination</h3>
            <p>
              Provision of Temporary Works Coordinator (TWC) and Temporary Works
              Supervisor (TWS) support in line with BS 5975. This includes
              planning, classification, design brief preparation, design
              management, coordination, and control from concept through to
              dismantle.
            </p>
          </div>

          <div className="cap-card cap-card-lite mb-3">
            <h3 className="bio-name">Temporary Works Governance &amp; Assurance</h3>
            <p>
              Independent governance and assurance of Temporary Works systems,
              including reviews of processes, documentation, roles, and
              compliance. The aim is to ensure risks are properly controlled and
              assurance arrangements are robust, auditable, and defensible.
            </p>
          </div>

          <div className="cap-card cap-card-lite mb-3">
            <h3 className="bio-name">Scaffolding &amp; Access Strategy</h3>
            <p>
              Strategic support for scaffolding and access solutions, focusing on
              buildability, efficiency, sequencing, and compliance. This
              includes early engagement, access planning, constructability
              input, and delivery support.
            </p>
          </div>

          <div className="cap-card cap-card-lite mb-3">
            <h3 className="bio-name">Risk, Methodology &amp; Buildability Reviews</h3>
            <p>
              Structured reviews of risk assessments, method statements and
              construction methodologies to identify gaps, challenge assumptions
              and improve buildability, with a strong focus on practical site
              delivery.
            </p>
          </div>

          <div className="cap-card cap-card-lite mb-3">
            <h3 className="bio-name">Construction Assurance &amp; Compliance Support</h3>
            <p>
              Support to help clients demonstrate compliance with internal
              standards, contractual requirements and regulatory expectations
              through audits, inspections, and assurance reviews.
            </p>
          </div>

          <div className="cap-card cap-card-lite mb-3">
            <h3 className="bio-name">Interface &amp; Stakeholder Management</h3>
            <p>
              Support with managing technical, organisational and contractor
              interfaces so responsibilities are clear, information flows
              correctly and risks don’t fall between parties.
            </p>
          </div>

          <div className="cap-card cap-card-lite mb-3">
            <h3 className="bio-name">Integrated Management System (IMS) Development &amp; Support</h3>
            <p>
              Development and improvement of Integrated Management Systems aligned
              to ISO standards, including policies, procedures, document control,
              and governance structures that work in live construction
              environments.
            </p>
          </div>

          <div className="cap-card cap-card-lite mb-4">
            <h3 className="bio-name">Independent Technical &amp; Delivery Reviews</h3>
            <p>
              Independent, senior-level reviews of projects, Temporary Works
              arrangements and delivery strategies to provide clarity,
              challenge, and confidence on complex or high-risk scopes.
            </p>
          </div>

          <div className="cap-card cap-card-lite mb-4">
            <h3 className="bio-name">Tendering Support &amp; Pricing / Commercial Structuring</h3>
            <p>
              Support with tender responses, pricing structures, and commercial
              pack development to present a clear, professional offer. This
              includes scope clarification, pricing breakdown,
              assumptions/exclusions, and helping shape a tender submission so it’s
              easy for clients to evaluate and award.
            </p>
          </div>

          {/* ENGAGEMENT */}
          <div>
            <div className="overview-kicker">Engagement</div>
            <p className="overview-lead" style={{ marginBottom: 10 }}>
              We operate proportionately and risk-based, embedded alongside
              delivery teams or as independent assurance.
            </p>

            <button
              type="button"
              className="btn btn-outline-light btn-sm"
              onClick={scrollToContact}
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
