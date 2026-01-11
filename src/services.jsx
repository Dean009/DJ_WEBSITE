// src/Services.jsx
import React, { useState } from "react";

function CapabilitiesAccordion() {
  const groups = [
    {
      id: "pmgov",
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

export default function Services() {
  return (
    <main className="doc-page">
      <section className="doc-hero">
        <div className="container">
          <div className="doc-meta">SERVICES</div>
          <h1 className="doc-title">Services</h1>

          <div className="doc-lead">
            <p>
              GWx provides governance-led support across project delivery, Temporary Works and assurance
              in complex construction, industrial and regulated environments.
            </p>
            <p>
              Our approach is proportionate and delivery-focused — designed to produce clear controls,
              auditable evidence and confident decision-making without unnecessary bureaucracy.
            </p>
          </div>

          <div style={{ marginTop: 14 }}>
            <a href="#/" className="btn btn-outline-light btn-sm">
              Back to home
            </a>
            <a href="#/?#contact" className="btn btn-outline-light btn-sm" style={{ marginLeft: 10 }}>
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="doc-body">
        <div className="container">
          {/* Services list */}
          <div style={{ marginBottom: 18 }}>
            <div className="overview-kicker">Service overview</div>

            <div className="bio-grid">
              <article className="bio-block">
                <h2 className="bio-name">Project Management</h2>
                <div className="bio-text">
                  <p>
                    GWx provides experienced project management support across complex construction and
                    industrial environments. We work client-side or alongside delivery teams to manage scope,
                    programme, cost, risk, and interfaces, ensuring delivery is controlled, compliant and well governed.
                  </p>
                </div>
              </article>

              <article className="bio-block">
                <h2 className="bio-name">Temporary Works Management &amp; Coordination</h2>
                <div className="bio-text">
                  <p>
                    Provision of Temporary Works Coordinator (TWC) and Temporary Works Supervisor (TWS) support
                    in line with BS 5975. This includes planning, classification, design brief preparation, design
                    management, coordination, and control from concept through to dismantle.
                  </p>
                </div>
              </article>

              <article className="bio-block">
                <h2 className="bio-name">Temporary Works Governance &amp; Assurance</h2>
                <div className="bio-text">
                  <p>
                    Independent governance and assurance of Temporary Works systems, including reviews of processes,
                    documentation, roles, and compliance. The aim is to ensure risks are properly controlled and assurance
                    arrangements are robust, auditable, and defensible.
                  </p>
                </div>
              </article>

              <article className="bio-block">
                <h2 className="bio-name">Scaffolding &amp; Access Strategy</h2>
                <div className="bio-text">
                  <p>
                    Strategic support for scaffolding and access solutions, focusing on buildability, efficiency, sequencing,
                    and compliance. This includes early engagement, access planning, constructability input, and delivery support.
                  </p>
                </div>
              </article>

              <article className="bio-block">
                <h2 className="bio-name">Risk, Methodology &amp; Buildability Reviews</h2>
                <div className="bio-text">
                  <p>
                    Structured reviews of risk assessments, method statements and construction methodologies to identify gaps,
                    challenge assumptions and improve buildability, with a strong focus on practical site delivery.
                  </p>
                </div>
              </article>

              <article className="bio-block">
                <h2 className="bio-name">Construction Assurance &amp; Compliance Support</h2>
                <div className="bio-text">
                  <p>
                    Support to help clients demonstrate compliance with internal standards, contractual requirements and regulatory
                    expectations through audits, inspections, and assurance reviews.
                  </p>
                </div>
              </article>

              <article className="bio-block">
                <h2 className="bio-name">Interface &amp; Stakeholder Management</h2>
                <div className="bio-text">
                  <p>
                    Support with managing technical, organisational and contractor interfaces so responsibilities are clear,
                    information flows correctly and risks don’t fall between parties.
                  </p>
                </div>
              </article>

              <article className="bio-block">
                <h2 className="bio-name">Integrated Management System (IMS) Development &amp; Support</h2>
                <div className="bio-text">
                  <p>
                    Development and improvement of Integrated Management Systems aligned to ISO standards, including policies,
                    procedures, document control, and governance structures that work in live construction environments.
                  </p>
                </div>
              </article>

              <article className="bio-block">
                <h2 className="bio-name">Independent Technical &amp; Delivery Reviews</h2>
                <div className="bio-text">
                  <p>
                    Independent, senior-level reviews of projects, Temporary Works arrangements and delivery strategies to provide
                    clarity, challenge, and confidence on complex or high-risk scopes.
                  </p>
                </div>
              </article>

              <article className="bio-block">
                <h2 className="bio-name">Tendering Support &amp; Pricing / Commercial Structuring</h2>
                <div className="bio-text">
                  <p>
                    Support with tender responses, pricing structures, and commercial pack development to present a clear,
                    professional offer. This includes scope clarification, pricing breakdown, assumptions/exclusions, and helping
                    shape a tender submission so it’s easy for clients to evaluate and award.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Capabilities accordion moved here */}
          <div style={{ marginTop: 22 }}>
            <div className="overview-kicker">Core capability overview</div>
            <h2 className="overview-title" style={{ marginBottom: 10 }}>
              Capabilities
            </h2>
            <p className="overview-lead">
              Detailed capability areas aligned to regulated environments and high-risk delivery.
            </p>

            <CapabilitiesAccordion />
          </div>
        </div>
      </section>
    </main>
  );
}
