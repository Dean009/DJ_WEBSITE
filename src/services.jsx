// src/services.jsx
import React, { useEffect, useMemo, useState } from "react";
import logo from "/GWXLOGO/logo-02-png.png";

function AnimatedText({ text, trigger, baseDelay = 0, step = 55 }) {
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

export default function Services() {
  const [play, setPlay] = useState(false);

  // Trigger animations + make svc-cards visible (your CSS expects .in-view)
  useEffect(() => {
    const t = setTimeout(() => setPlay(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Assets (GH Pages safe)
  const IMG_1 = import.meta.env.BASE_URL + "GWx2.png";
  const IMG_2 = import.meta.env.BASE_URL + "GWx3.png";
  const LOGO = import.meta.env.BASE_URL + "GWXLOGO/logo-02-png.png";

  // ✅ swapped: show GWx3 first, then GWx2
  const TOP_IMAGE = IMG_2;
  const SECOND_IMAGE = IMG_1;

  const services = [
    {
      title: "Project Management",
      desc:
        "GWx provides experienced project management support across complex construction and industrial environments. We work client-side or alongside delivery teams to manage scope, programme, cost, risk, and interfaces, ensuring delivery is controlled, compliant and well governed.",
    },
    {
      title: "Temporary Works Management & Coordination",
      desc:
        "Provision of Temporary Works Coordinator (TWC) and Temporary Works Supervisor (TWS) support in line with BS 5975. This includes planning, classification, design brief preparation, design management, coordination, and control from concept through to dismantle.",
    },
    {
      title: "Temporary Works Governance & Assurance",
      desc:
        "Independent governance and assurance of Temporary Works systems, including reviews of processes, documentation, roles, and compliance. The aim is to ensure risks are properly controlled and assurance arrangements are robust, auditable, and defensible.",
    },
    {
      title: "Scaffolding & Access Strategy",
      desc:
        "Strategic support for scaffolding and access solutions, focusing on buildability, efficiency, sequencing, and compliance. This includes early engagement, access planning, constructability input, and delivery support.",
    },
    {
      title: "Risk, Methodology & Buildability Reviews",
      desc:
        "Structured reviews of risk assessments, method statements and construction methodologies to identify gaps, challenge assumptions and improve buildability, with a strong focus on practical site delivery.",
    },
    {
      title: "Construction Assurance & Compliance Support",
      desc:
        "Support to help clients demonstrate compliance with internal standards, contractual requirements and regulatory expectations through audits, inspections, and assurance reviews.",
    },
    {
      title: "Interface & Stakeholder Management",
      desc:
        "Support with managing technical, organisational and contractor interfaces so responsibilities are clear, information flows correctly and risks don’t fall between parties.",
    },
    {
      title: "Integrated Management System (IMS) Development & Support",
      desc:
        "Development and improvement of Integrated Management Systems aligned to ISO standards, including policies, procedures, document control, and governance structures that work in live construction environments.",
    },
    {
      title: "Independent Technical & Delivery Reviews",
      desc:
        "Independent, senior-level reviews of projects, Temporary Works arrangements and delivery strategies to provide clarity, challenge, and confidence on complex or high-risk scopes.",
    },
    {
      title: "Tendering Support & Pricing / Commercial Structuring",
      desc:
        "Support with tender responses, pricing structures, and commercial pack development to present a clear, professional offer. This includes scope clarification, pricing breakdown, assumptions/exclusions, and helping shape a tender submission so it’s easy for clients to evaluate and award.",
    },
  ];

  const goToContact = () => {
    // HashRouter-safe: go home and jump to the contact form section
    window.location.hash = "#/";
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="doc-page services-page">
      <section className="doc-hero">
        <div className="container">
          <h1 className="doc-title">
            <img src={logo} alt="GWx" style={{ height: '1.2em', verticalAlign: 'middle', marginTop: '-0.15em' }} /> Services
          </h1>

          <div className="doc-lead">
            <p>
              <AnimatedText
                text="GWx provides governance-led support across project delivery, Temporary Works, assurance and documentation — aligned to regulated environments and high-risk scopes."
                trigger={play}
                baseDelay={0}
                step={35}
              />
            </p>
          </div>
        </div>
      </section>

      <section className="doc-body">
        <div className="container">
          {/* IMAGE BAND 1 */}
          <div className="image-band" style={{ marginBottom: 14 }}>
            <img src={TOP_IMAGE} alt="GWx technical image band" />
          </div>

          {/* SERVICES GRID */}
          <div className="svc-groups">
            <div className="svc-group">
              <div className="svc-group-head">
                <h2 className="overview-title svc-h2">What we provide</h2>
              </div>

              <div className="svc-grid">
                {services.map((s, idx) => {
                  // Original behaviour: last tile spans full width when odd count
                  const isLastOdd = idx === services.length - 1 && services.length % 2 === 1;

                  // ✅ NEW: force Tendering tile to span full width (even if list changes later)
                  const isTendering =
                    s.title === "Tendering Support & Pricing / Commercial Structuring";

                  const spanFull = isTendering || isLastOdd;

                  return (
                    <div
                      key={s.title}
                      className={[
                        "svc-card",
                        play ? "in-view" : "",
                        spanFull ? "svc-span-full" : "",
                      ].join(" ")}
                    >
                      <h3 className="svc-title">
                        <AnimatedText
                          text={s.title}
                          trigger={play}
                          baseDelay={180 + idx * 80}
                          step={24}
                        />
                      </h3>

                      <p className="svc-desc">
                        <AnimatedText
                          text={s.desc}
                          trigger={play}
                          baseDelay={260 + idx * 80}
                          step={18}
                        />
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ENGAGEMENT (FULL WIDTH) */}
            <div
              className="svc-engage-card"
              style={{
                marginTop: 18,
              }}
            >
              <p className="overview-lead" style={{ marginBottom: 0 }}>
                <AnimatedText
                  text="We operate proportionately and risk-based, embedded alongside delivery teams or as independent assurance."
                  trigger={play}
                  baseDelay={180}
                  step={22}
                />
              </p>

              <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={goToContact}
                >
                  Get in touch
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={() => {
                    window.location.hash = "#/about";
                    setTimeout(() => window.scrollTo(0, 0), 50);
                  }}
                >
                  About us
                </button>
              </div>
            </div>

            {/* LOGO UNDER ENGAGEMENT (BRIGHTER) */}
            <div
              style={{
                marginTop: 14,
                padding: 14,
              }}
            >
              <img
                src={LOGO}
                alt="GWx logo"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
