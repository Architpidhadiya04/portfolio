import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Download,
  Cloud
} from "lucide-react";
import Profile from "./pages/Profile.jsx";
import Contact from "./pages/Contact.jsx";
import LampSwitch from "./components/LampSwitch.jsx";

const projects = [
  {
    title: "Hotel Management System",
    type: "React Application",
    description:
      "A web application designed to view available rooms categorized by amenities (such as AC or non-AC) and book them seamlessly from anywhere.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    demo: "#",
  },
  {
    title: "Food Ordering System",
    type: "Fullstack Web App",
    description:
      "A dynamic ordering site enabling users to browse food selections by categories (veg, non-veg) and place orders online.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: "#",
  },
];

const skills = [
  { icon: Code2, label: "Frontend", value: "Vue.js, React.js, Vuetify" },
  { icon: Server, label: "Backend", value: "Node.js" },
  { icon: Cloud, label: "AWS Cloud", value: "Lambda, S3, Cloudfront" },
  { icon: ShieldCheck, label: "Monitoring", value: "Sentry" },
];

const timeline = [
  {
    year: "May 2024 – June 2024",
    role: "Web Developer Intern — CodSoft",
    text: "Developed practical skills in HTML, CSS, and JavaScript. Created portfolio layouts, landing pages, and interactive calculator projects.",
  },
  {
    year: "May 2023 – June 2023",
    role: "Web Developer Intern — Adis Technologies",
    text: "Created web applications including a customized music player and an interactive quiz interface.",
  },
  {
    year: "2022 – 2026",
    role: "B.Tech Computer Science & Engineering",
    text: "CSPIT – Charusat University, Changa, Anand. Focused on software development and computer science core courses. CGPA: 7.22",
  },
  {
    year: "2019 – 2022",
    role: "Diploma in Computer Engineering",
    text: "Tapi Diploma Engineering College, Surat. CGPA: 8.87",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true); // Dark mode by default for premium feel
  const [activeTab, setActiveTab] = useState("home");
  const [time, setTime] = useState(new Date());
  const [navState, setNavState] = useState("greeting");

  // Clock tick
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Trigger floating nav greeting-to-links morph animation
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash && currentHash !== "home") {
      setNavState("links");
      return;
    }

    const timer = setTimeout(() => {
      setNavState("links");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Sync state with hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const validTabs = ["home", "projects", "about", "contact"];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      } else {
        // Default to home if empty or invalid
        setActiveTab("home");
        window.history.replaceState(null, "", "#home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);


  // Get time-based greeting
  const getGreeting = () => {
    const hour = time.getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 22) return "Good evening";
    return "Good night";
  };

  // Get time-based greeting emoji
  const getGreetingEmoji = () => {
    const hour = time.getHours();
    if (hour >= 5 && hour < 12) return "☀️";
    if (hour >= 12 && hour < 17) return "☕";
    if (hour >= 17 && hour < 22) return "🌆";
    return "🌙";
  };

  const changeTab = (tab) => {
    window.location.hash = tab;
  };

  return (
    <main className={darkMode ? "dark-mode" : ""}>
      <LampSwitch darkMode={darkMode} toggleTheme={() => setDarkMode((prev) => !prev)} />
      {/* Dynamic Header */}
      <header className="portfolio-header">

        {/* Navigation Tabs (Floating Morphing Pill) */}
        <nav className={`tab-navigation nav-state-${navState}`}>
          {/* Greeting State */}
          <div className="nav-greeting-container">
            <span className="nav-greeting-text">
              {getGreeting()} {getGreetingEmoji()}
            </span>
          </div>

          {/* Navigation Tabs State */}
          <div className="nav-tabs">
            {["home", "projects", "about", "contact"].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => changeTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        {/* Static Hero Presentation (similar style to Aayush's landing hero) */}
        <div className="header-hero">
          <h1 className="hero-primary-text">
            Code that <span className="highlight-text italic-serif">feels</span> designed.
            <br />
            Engineering that actually ships.
          </h1>
          <p className="subtitle-text">
            Hello, I'm <strong className="bold-name">Archit Pidhadiya</strong> — a web developer focused on building clean frontend systems with Vue and React, robust backend logic with Node.js, and deploying cloud services with AWS.
          </p>
        </div>
      </header>

      {/* Main Content Areas with Switch */}
      <div className="content-container">
        {activeTab === "home" && (
          <div className="tab-pane fade-in">
            {/* Brief Introduction Grid */}
            <div className="intro-grid">
              <div className="intro-main">
                <div className="section-label">Introduction</div>
                <h2 className="serif-title">Building reliable digital systems.</h2>
                <p className="paragraph-text">
                  I engineer responsive products from base schema definitions through to interactive interfaces. My coding style emphasizes clean architecture, scalability, and satisfying interactive micro-details.
                </p>
                <div className="action-row">
                  <button className="btn btn-primary" onClick={() => changeTab("projects")}>
                    Explore Work <ChevronRight size={16} />
                  </button>
                  <button className="btn btn-secondary" onClick={() => changeTab("contact")}>
                    Get in touch
                  </button>
                  <a href="/resume.pdf" download="Archit_Pidhadiya_Resume.pdf" className="btn btn-secondary btn-resume-accent">
                    Resume <Download size={16} />
                  </a>
                </div>
              </div>

              <div className="intro-highlight-cards">
                <div className="mini-card">
                  <Sparkles size={20} className="icon-orange" />
                  <h4>Product-Driven</h4>
                  <p>Designed with user flows and seamless performance in mind.</p>
                </div>
                <div className="mini-card">
                  <Server size={20} className="icon-violet" />
                  <h4>API-First Flow</h4>
                  <p>Reliable RESTful API contracts built to handle high volume cleanly.</p>
                </div>
              </div>
            </div>

            {/* Metrics Panel */}
            <section className="metrics-banner">
              <div className="metric-box">
                <span className="metric-num">15+</span>
                <span className="metric-label">Completed Projects</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">4+</span>
                <span className="metric-label">Years of Development</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">100%</span>
                <span className="metric-label">Fullstack Passion</span>
              </div>
            </section>

            {/* Featured Projects Highlight */}
            <section className="featured-section">
              <div className="section-header-flex">
                <div>
                  <div className="section-label">Selected Projects</div>
                  <h3 className="section-title">A glance at some featured work.</h3>
                </div>
                <button className="text-link" onClick={() => changeTab("projects")}>
                  View all projects <ArrowUpRight size={16} />
                </button>
              </div>
              <div className="project-grid">
                {projects.slice(0, 2).map((project) => (
                  <article className="project-card-v2" key={project.title}>
                    <div className="card-header">
                      <span className="project-type">{project.type}</span>
                      <h4 className="project-title-text">{project.title}</h4>
                    </div>
                    <p className="project-desc">{project.description}</p>
                    <div className="card-footer">
                      <ul className="tech-tags">
                        {project.stack.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                      <a href={project.demo} className="project-link">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="tab-pane fade-in">
            <section className="projects-page">
              <div className="section-header-simple">
                <div className="section-label">Portfolio</div>
                <h2 className="serif-title">Complete products & architectures.</h2>
                <p className="subtitle-desc">
                  Explore fullstack builds designed for speed, fluid interfaces, and modular backend deployment.
                </p>
              </div>

              <div className="project-grid-full">
                {projects.map((project) => (
                  <article className="project-card-v2" key={project.title}>
                    <div className="card-header">
                      <span className="project-type">{project.type}</span>
                      <h4 className="project-title-text">{project.title}</h4>
                    </div>
                    <p className="project-desc">{project.description}</p>
                    <div className="card-footer">
                      <ul className="tech-tags">
                        {project.stack.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                      <a href={project.demo} className="project-link">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "about" && (
          <div className="tab-pane fade-in">
            {/* Import Profile and add core details */}
            <Profile />

            {/* Core Capabilities */}
            <section className="skills-sub-section">
              <div className="section-label">Capabilities</div>
              <h3 className="section-title">Modern tools used to ship.</h3>
              <div className="skills-grid-v2">
                {skills.map(({ icon: Icon, label, value }) => (
                  <article className="skill-card-v2" key={label}>
                    <div className="skill-head">
                      <Icon size={20} className="skill-icon" />
                      <h4>{label}</h4>
                    </div>
                    <p>{value}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Timeline Experience */}
            <section className="timeline-sub-section">
              <div className="section-label">Experience</div>
              <h3 className="section-title">A progressive history.</h3>
              <div className="timeline-list-v2">
                {timeline.map((item) => (
                  <article className="timeline-item-v2" key={item.role}>
                    <div className="timeline-date">{item.year}</div>
                    <div className="timeline-info">
                      <h4>{item.role}</h4>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="tab-pane fade-in">
            <Contact />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} Archit Pidhadiya. Crafted in React.
        </p>
        <div className="footer-links">
          <a href="https://github.com/Architpidhadiya04" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/archit-pidhadiya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:architpidhadiya04@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
