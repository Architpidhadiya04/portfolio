import React from "react";
import { Sparkles, Shield, Heart, Download } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    label: "Product-led engineering",
    text: "I build interfaces and backend services with clear ownership, user focus, and long-term maintainability in mind.",
  },
  {
    icon: Shield,
    label: "API-first mindset",
    text: "I design RESTful and data-aware APIs that connect frontends, automation, and analytics cleanly.",
  },
  {
    icon: Heart,
    label: "Collaborative delivery",
    text: "I work best in cross-functional teams, keeping communication tight while shipping incremental value.",
  },
];

const values = [
  { title: "Maintainability", desc: "Readable, well-documented code that teammates can extend easily." },
  { title: "Access & Speed", desc: "Performance and accessibility as default requirements, not afterthoughts." },
  { title: "Repeatability", desc: "Reliable deployments utilizing automated pipelines and consistent tooling." },
];

function Profile() {
  return (
    <div className="about-bio-container">
      <div className="about-grid">
        <div className="bio-rich-text">
          <div className="section-label">Biography</div>
          <h3 className="bio-title">Translating business targets into dependable software.</h3>
          <p className="bio-p">
            I am a fullstack developer who enjoys building solid infrastructures and fluent interfaces. My work focuses on strong architectural consistency, clean API contracts, and systems that can scale and adapt.
          </p>
          <p className="bio-p">
            I prefer a balanced stack: modern frontend systems backed by stable server-side engines, optimized data pipelines, and automated delivery tooling.
          </p>

          <div className="core-values-list">
            <h4 className="values-title">Core Philosophy</h4>
            <div className="values-grid">
              {values.map((v) => (
                <div className="value-item" key={v.title}>
                  <strong className="value-name">{v.title} —</strong>{" "}
                  <span className="value-desc">{v.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-cta-card">
            <div className="resume-info">
              <h4 className="resume-cta-title">Looking for my resume?</h4>
              <p className="resume-cta-desc">Get a copy of my detailed background, experience, and tech capabilities.</p>
            </div>
            <a href="/resume.pdf" download="Archit_Pidhadiya_Resume.pdf" className="btn btn-primary btn-resume-download">
              Download CV <Download size={16} />
            </a>
          </div>
        </div>

        <div className="bio-highlights">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="highlight-card-v2">
                <div className="card-icon-wrapper">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="highlight-label">{item.label}</h4>
                  <p className="highlight-text">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
