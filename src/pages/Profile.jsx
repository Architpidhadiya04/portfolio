import React from "react";

const highlights = [
  {
    label: "Product-led engineering",
    text: "I build interfaces and backend services with clear ownership, user focus, and long-term maintainability in mind.",
  },
  {
    label: "API-first mindset",
    text: "I design RESTful and data-aware APIs that connect frontends, automation, and analytics cleanly.",
  },
  {
    label: "Collaborative delivery",
    text: "I work best in cross-functional teams, keeping communication tight while shipping incremental value.",
  },
];

const values = [
  "Readable code that teammates can extend.",
  "Performance and accessibility as default expectations.",
  "Reliable deployments with repeatable tooling.",
];

function Profile() {
  return (
    <section className="section profile-section" id="profile">
      <div className="section-header">
        <p className="eyebrow">Profile</p>
        <h2>About me and how I work.</h2>
      </div>

      <div className="profile-grid">
        <div className="profile-copy">
          <p>
            I am a fullstack developer who enjoys translating product goals into
            dependable software. My work focuses on strong interfaces, clean API
            contracts, and systems that can evolve without friction.
          </p>
          <p>
            I prefer a balanced stack: modern frontend experiences backed by
            stable server architecture, data pipelines, and automated delivery.
          </p>

          <ul>
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>

        <div className="profile-highlights">
          {highlights.map((item) => (
            <article key={item.label} className="highlight-card">
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;
