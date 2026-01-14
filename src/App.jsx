// src/App.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import About from "./About";
import Services from "./services"; // matches services.jsx
import { wrapGWx } from "./utils/animateGWx";
import logo from "/GWXLOGO/logo-02-png.png";

/* =========================
   COOKIE CONSENT BANNER
========================= */
function CookieConsent({ onAccept, onDecline }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay appearance slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-banner">
        <div className="cookie-content">
          <h3 className="cookie-title">Cookie Notice</h3>
          <p className="cookie-text">
            We use essential cookies to enable our contact form functionality. By clicking "Accept", 
            you consent to our use of cookies for this purpose. No tracking or analytics cookies are used.
          </p>
        </div>
        <div className="cookie-actions">
          <button onClick={handleDecline} className="cookie-btn cookie-btn-decline">
            Decline
          </button>
          <button onClick={handleAccept} className="cookie-btn cookie-btn-accept">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   WORD-BY-WORD TEXT (GWx POPS)
========================= */
function AnimatedText({ text, trigger, baseDelay = 0, step = 70 }) {
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

/* =========================
   HOME
========================= */
function Home() {
  const [heroTitleReady, setHeroTitleReady] = useState(false);
  const [heroTagsReady, setHeroTagsReady] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [emailJsReady, setEmailJsReady] = useState(false);

  // Initialize EmailJS only if user has consented
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      emailjs.init("YOUR_PUBLIC_KEY_HERE");
      setEmailJsReady(true);
    }
  }, []);

  const handleCookieAccept = () => {
    emailjs.init("YOUR_PUBLIC_KEY_HERE");
    setEmailJsReady(true);
  };

  const handleCookieDecline = () => {
    setEmailJsReady(false);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) {
      alert("Please write a message");
      return;
    }

    if (!emailJsReady) {
      alert("Please accept cookies to enable the contact form.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID_HERE", // Replace with your service ID
        "YOUR_TEMPLATE_ID_HERE", // Replace with your template ID
        {
          to_email: "info@gwxconsultants.co.uk",
          from_name: "GWx Website",
          message: message,
        }
      );
      alert("Message sent successfully!");
      setMessage("");
    } catch (error) {
      console.error("Email error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  // HashRouter-safe scroll helper
  const safeScroll = (id) => {
    if (!window.location.hash.startsWith("#/")) window.location.hash = "#/";
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  useEffect(() => {
    const t1 = setTimeout(() => setHeroTitleReady(true), 450);
    const t2 = setTimeout(() => setHeroTagsReady(true), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // About intro wordflow trigger
  useEffect(() => {
    const el = document.getElementById("about-intro");
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Overview reveal trigger
  useEffect(() => {
    const el = document.getElementById("overview");
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("in-view");
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // About-intro rise/fade trigger (uses your CSS #about-intro.in-view)
  useEffect(() => {
    const el = document.getElementById("about-intro");
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("in-view");
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll-driven hero collapse
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroH = hero.offsetHeight || window.innerHeight;
      const y = window.scrollY || 0;
      const p = Math.min(1, Math.max(0, y / (heroH * 0.7)));

      document.documentElement.style.setProperty("--hero-progress", String(p));
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const HERO_BG = import.meta.env.BASE_URL + "newhero.png";

  // ✅ GWx2 image for subtle use near contact
  const GWX2 = import.meta.env.BASE_URL + "GWx2.png";
  const LOGOANI = import.meta.env.BASE_URL + "logoani.webm";

  const aboutPara1 =
    "GWx is an independent consultancy formed by experienced construction and Temporary Works professionals with extensive hands-on delivery experience in high-risk and heavily regulated environments.";

  const aboutPara2 =
    "We specialise in strengthening project delivery where complexity, risk, or regulatory pressure demands clarity, control, and defensible decision-making — bridging the gap between design, construction, and assurance.";

  const aboutPara3 =
    "Our focus is proportionate, defensible governance that supports safe delivery while remaining practical, commercially aware and aligned with programme pressures.";

  return (
    <>
      <CookieConsent onAccept={handleCookieAccept} onDecline={handleCookieDecline} />
      
      {/* HERO */}
      <section
        id="hero"
        className="hero hero-bg"
        style={{ "--hero-bg": `url("${HERO_BG}")` }}
      >
        <div className={`hero-title-screen ${heroTitleReady ? "show" : ""}`}>
          <h1 className="hero-title-big">
            <img 
              src={logo} 
              alt="GWx Logo" 
              style={{ width: "100%", height: "auto", maxWidth: "500px", cursor: "pointer" }}
              onClick={() => window.location.reload()}
            />
          </h1>

          <div
            className="hero-kicker"
            style={{
              opacity: heroTagsReady ? 1 : 0,
              transition: "opacity 1200ms ease",
              marginTop: "3rem",
            }}
          >
            WE HAVE YOU COVERED
          </div>

          <div
            className="hero-kicker"
            style={{
              opacity: heroTagsReady ? 1 : 0,
              transition: "opacity 1200ms ease",
              marginTop: "0.75rem",
            }}
          >
            PROJECT MANAGEMENT • TEMPORARY WORKS • GOVERNANCE &amp; ASSURANCE
          </div>

          <div
            className="hero-nav-links"
            style={{
              opacity: heroTagsReady ? 1 : 0,
              transition: "opacity 1200ms ease",
              marginTop: "2rem",
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              onClick={() => {
                const el = document.getElementById("overview");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ cursor: "pointer", fontSize: "14px", textDecoration: "none", color: "inherit", textTransform: "uppercase" }}
            >
              Overview
            </a>
            <a
              onClick={() => {
                window.location.hash = "#/services";
                setTimeout(() => window.scrollTo(0, 0), 50);
              }}
              style={{ cursor: "pointer", fontSize: "14px", textDecoration: "none", color: "inherit", textTransform: "uppercase" }}
            >
              Services
            </a>
            <a
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ cursor: "pointer", fontSize: "14px", textDecoration: "none", color: "inherit", textTransform: "uppercase" }}
            >
              Contact
            </a>
            <a
              onClick={() => {
                window.location.hash = "#/about";
                setTimeout(() => window.scrollTo(0, 0), 50);
              }}
              style={{ cursor: "pointer", fontSize: "14px", textDecoration: "none", color: "inherit", textTransform: "uppercase" }}
            >
              About
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section id="about-intro" className="section-panel about-intro">
        <div className="container">
          <div className="about-intro-inner">
            <h2 className="overview-title">
              Independent governance-led consultancy for
              {" "}
              <span className="stagger-words">
                <span className="word seq1">complex,</span>{" "}
                <span className="word seq2">high-risk</span>{" "}
                <span className="word seq3">delivery.</span>
              </span>
            </h2>

            <p className="overview-lead">
              <AnimatedText text={aboutPara1} trigger={aboutInView} baseDelay={380} step={42} />
            </p>

            <p className="overview-lead about-intro-lead2">
              <AnimatedText text={aboutPara2} trigger={aboutInView} baseDelay={820} step={42} />
            </p>

            <p className="overview-lead about-intro-lead2">
              <AnimatedText text={aboutPara3} trigger={aboutInView} baseDelay={1220} step={42} />
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="section-panel overview overview-scene">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-left">

              <h2 className="overview-title">
                Clarity, control and defensible decision-making — <span className="underline-loop">without bureaucracy.</span>
              </h2>

              <p className="overview-lead">
                <AnimatedText
                  text="GWx provides independent project management, Temporary Works and governance-led assurance support across construction, industrial, infrastructure and regulated environments. Our work is grounded in real site delivery and stakeholder-level experience — aligned to audit, scrutiny and programme pressure."
                  trigger={true}
                  baseDelay={0}
                  step={22}
                />
              </p>

              <div className="overview-checklist">
                <div className="overview-split">
                  <div className="check-group">
                    <div className="check-title" style={{ "--d": "0ms" }}>
                      What you get
                    </div>
                    <ul className="check-list">
                      <li className="check-item" style={{ "--d": "250ms" }}>
                        Clear oversight
                      </li>
                      <li className="check-item" style={{ "--d": "500ms" }}>
                        Defensible systems
                      </li>
                      <li className="check-item" style={{ "--d": "750ms" }}>
                        Confident delivery support
                      </li>
                    </ul>
                  </div>

                  <div className="overview-facts">
                    <div className="fact">
                      <div className="fact-k">Operating level</div>
                      <div className="fact-v">Tier 1 / Tier 2 delivery environments</div>
                    </div>

                    <div className="fact">
                      <div className="fact-k">Focus</div>
                      <div className="fact-v">Temporary Works • Governance • Assurance</div>
                    </div>

                    <div className="fact">
                      <div className="fact-k">Outputs</div>
                      <div className="fact-v">Audit-ready evidence • Clear actions • Governance clarity</div>
                    </div>
                  </div>
                </div>

                <div className="overview-ctas">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-sm"
                    onClick={() => {
                      window.location.hash = "#/services";
                      setTimeout(() => window.scrollTo(0, 0), 50);
                    }}
                  >
                    Our services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-panel">
        <div className="container">
          <div className="mb-3">
            <h2 className="overview-title">
              Get in touch <span className="bang-bounce">!</span>
            </h2>
            <p className="overview-lead">
              For enquiries relating to project management support, Temporary Works governance, tendering,
              assurance or documentation — use the form below.
            </p>
          </div>

          {/* ✅ NEW: 2-col layout on desktop (Contact details + image | Form) */}
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-3 h-100">
                <div className="contact-card">
                  <div className="contact-line">
                    <div className="contact-k">Email</div>
                    <div className="contact-v">
                      <a href="mailto:info@gwxconsultants.co.uk">info@gwxconsultants.co.uk</a>
                    </div>
                  </div>

                  <div className="contact-line">
                    <div className="contact-k">Operating</div>
                    <div className="contact-v">Construction • Industrial • Infrastructure • Regulated</div>
                  </div>
                </div>

                <div className="contact-sideimg flex-grow-1">
                  <video 
                    src={LOGOANI}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="auto"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form className="form-card h-100" onSubmit={handleSendEmail}>
                <div className="mb-2 h-100 d-flex flex-column">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <label className="form-label" style={{ margin: 0 }}>Message</label>
                    <button type="submit" className="btn btn-outline-light btn-sm" disabled={isSending}>
                      {isSending ? "Sending..." : "Send"}
                    </button>
                  </div>
                  <textarea 
                    className="form-control flex-grow-1" 
                    placeholder="Write a message to us here, remember to include contact details!" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================
   APPSHELL
========================= */
function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const rootRef = useRef(null);

  useEffect(() => {
    wrapGWx(rootRef.current);
  }, [location.pathname]);

  // nav: always visible
  useEffect(() => {
    const nav = document.querySelector(".nav-panel");
    if (!nav) return;
    nav.classList.add("is-visible");
  }, [location.pathname]);

  // Update nav text color based on section background
  useEffect(() => {
    const updateNavColor = () => {
      const nav = document.querySelector(".nav-panel");
      if (!nav) return;

      const navRect = nav.getBoundingClientRect();
      const checkPoint = navRect.bottom; // Check at navbar bottom
      let isOverLightSection = false;

      // Get all elements with light backgrounds
      const allElements = document.querySelectorAll("#about-intro, #contact, .doc-hero, .bio-block, .svc-card, .svc-engage-card");
      
      allElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const bgColor = window.getComputedStyle(el).backgroundColor;
        
        // Check if element is under navbar and has light background
        if (rect.top < checkPoint && rect.bottom > navRect.top) {
          // Check for light background color (#e4e4e4)
          if (bgColor.includes("228") || bgColor.includes("e4e4e4")) {
            isOverLightSection = true;
          }
        }
      });

      if (isOverLightSection) {
        nav.classList.add("over-light-bg");
      } else {
        nav.classList.remove("over-light-bg");
      }
    };

    updateNavColor();
    window.addEventListener("scroll", updateNavColor, { passive: true });
    window.addEventListener("resize", updateNavColor, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateNavColor);
      window.removeEventListener("resize", updateNavColor);
    };
  }, [location.pathname]);

  const goHomeAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 90);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="site-card" ref={rootRef}>
      <header>
        <div className="nav-panel">
          <nav className="navbar">
            <div className="nav-inline">
              <img 
                src={logo}
                alt="GWx Logo"
                className="navbar-logo"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => window.scrollTo(0, 0), 50);
                }}
                style={{ 
                  cursor: "pointer",
                  opacity: location.pathname === "/" ? undefined : 1
                }}
              />

              <ul className="navbar-nav">
                <li><a onClick={() => goHomeAndScroll("overview")}>Overview</a></li>
                <li><a onClick={() => {
                  window.location.hash = "#/services";
                  setTimeout(() => window.scrollTo(0, 0), 50);
                }}>Services</a></li>
                <li><a onClick={() => goHomeAndScroll("contact")}>Contact</a></li>
                <li><a onClick={() => {
                  window.location.hash = "#/about";
                  setTimeout(() => window.scrollTo(0, 0), 50);
                }}>About</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <div className="footer-panel">
          <div className="footer-inline">
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} GWx Consultancy Services Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return <AppShell />;
}
