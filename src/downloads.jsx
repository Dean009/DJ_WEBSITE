import React from "react";

const downloads = [
  {
    title: "GWx Capability Statement",
    desc: "Company profile & capability overview (PDF).",
    href: "downloads/GWx-Capability-Statement.pdf"
  },
  {
    title: "Temporary Works Documentation Suite (Sample)",
    desc: "Example template pack (placeholder).",
    href: "downloads/GWx-TW-Template-Pack.pdf"
  },
  {
    title: "Audit / Inspection Pack (Sample)",
    desc: "Example audit sheet / inspection pack (placeholder).",
    href: "downloads/GWx-Audit-Inspection-Pack.pdf"
  }
];

export default function Downloads() {
  return (
    <main className="doc-page">
      <section className="doc-hero">
        <div className="container">
          <div className="doc-meta">DOWNLOADS</div>
          <h1 className="doc-title">Documents</h1>
          <div className="doc-lead">
            <p>
              Download key GWx documents and capability information.
            </p>
          </div>
        </div>
      </section>

      <section className="doc-body">
        <div className="container">
          <div className="row g-3">
            {downloads.map((d) => (
              <div className="col-md-6 col-lg-4" key={d.title}>
                <div className="post-card">
                  <div className="post-kicker">PDF</div>
                  <div className="post-title">{d.title}</div>
                  <p className="post-excerpt">{d.desc}</p>

                  <div className="mt-3">
                    <a
                      className="btn btn-outline-light btn-sm"
                      href={import.meta.env.BASE_URL + d.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4" style={{ color: "var(--subtle)", fontSize: 12, letterSpacing: "1.2px", textTransform: "uppercase" }}>
            Note: Add your real PDFs into <code>/public/downloads/</code> so these links work on GitHub Pages.
          </p>
        </div>
      </section>
    </main>
  );
}
