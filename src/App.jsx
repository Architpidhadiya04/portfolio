import React, { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Profile from "./pages/Profile.jsx";
import Contact from "./pages/Contact.jsx";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    type: "Product Engineering",
    description:
      "A real-time insights platform with role-based access, interactive charts, and export-ready reporting.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Commerce Operations API",
    type: "Backend Systems",
    description:
      "Order, payment, and inventory services designed for reliable fulfillment and clean admin workflows.",
    stack: ["Express", "MongoDB", "Stripe", "Docker"],
  },
  {
    title: "Collaboration Workspace",
    type: "Fullstack App",
    description:
      "A shared project hub with authentication, file activity, notifications, and responsive team views.",
    stack: ["React", "TypeScript", "Firebase", "Tailwind"],
  },
];

const skills = [
  { icon: Code2, label: "Frontend", value: "React, TypeScript, UI systems, accessibility" },
  { icon: Server, label: "Backend", value: "Node.js, REST APIs, auth, services" },
  { icon: Database, label: "Data", value: "PostgreSQL, MongoDB, schema design" },
  { icon: ShieldCheck, label: "Delivery", value: "Testing, deployment, performance, security" },
];

const timeline = [
  {
    year: "2024 - Present",
    role: "Fullstack Developer",
    text: "Building scalable web applications from database design through polished user interfaces.",
  },
  {
    year: "2022 - 2024",
    role: "Frontend Developer",
    text: "Created responsive product experiences, dashboards, and reusable component libraries.",
  },
  {
    year: "Always",
    role: "Continuous Learner",
    text: "Exploring better architecture, cleaner APIs, and thoughtful product details.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={darkMode ? "dark-mode" : ""}>
      <nav className={`${menuOpen ? "nav nav-open" : "nav"} ${scrolled ? "nav-scrolled" : ""}`}>
        <div
          className={`nav-links${menuOpen ? " open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <div className="nav-drawer-header">
            <span>Menu</span>
            <button
              type="button"
              className="nav-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <a href="#profile" onClick={() => setMenuOpen(false)}>
            Profile
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="menu-text">Menu</span>
          <span className="sr-only">Toggle navigation</span>
        </button>
        <div
          className={`nav-overlay${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      </nav>
      <button
        type="button"
        className="dark-mode-toggle"
        onClick={() => setDarkMode((current) => !current)}
        aria-label="Toggle dark mode"
      >
        <span className="toggle-icon">{darkMode ? "☀️" : "🌙"}</span>
      </button>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Fullstack Developer</p>
          <h1>Building reliable web products from first idea to production.</h1>
          <p className="hero-copy">
            I create fast, clean, and maintainable applications with React, Node.js,
            modern databases, and a product-minded approach to engineering.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Work <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href="mailto:hello@example.com">
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="hero-panels" aria-label="Highlights of working style">
            <article className="hero-panel">
              <h3>Built for products</h3>
              <p>Interactive UI details, smooth motion, and meaningful feedback at every step.</p>
            </article>
            <article className="hero-panel">
              <h3>End-to-end flow</h3>
              <p>Design, API, and deployment align to create polished experiences that feel modern.</p>
            </article>
            <article className="hero-panel">
              <h3>Responsive ready</h3>
              <p>Layouts reshape gracefully for phones, tablets, and widescreen viewing.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Highlights">
        <div>
          <strong>15+</strong>
          <span>Completed builds</span>
        </div>
        <div>
          <strong>4+</strong>
          <span>Years coding</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Fullstack focus</span>
        </div>
      </section>

      <Profile />

      <section className="section" id="projects">
        <div className="section-header">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects that show the full stack.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ul>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section skill-section" id="skills">
        <div className="section-header">
          <p className="eyebrow">Capabilities</p>
          <h2>Tools I use to ship complete products.</h2>
        </div>
        <div className="skill-grid">
          {skills.map(({ icon: Icon, label, value }) => (
            <article className="skill-card" key={label}>
              <Icon size={24} />
              <h3>{label}</h3>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>A steady path through modern web development.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.role}>
              <span>{item.year}</span>
              <div>
                <h3>{item.role}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}

export default App;
