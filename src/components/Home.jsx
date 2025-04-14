import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import './Home.css';
import { ProjectList } from './Project';

const Portfolio = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenu(!isMenu);





  const projects = [
    {
      name: "Mindful Journal",
      image : "../assets/mindful-journal.jpeg",
      deployed: 'https://aaru5h.github.io/journal/',
      code: 'https://github.com/Aaru5h/journal'
    }
  ]




  return (
    <div className="portfolio-container">
      <header className={`header ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            DEV<span className="accent">PORTFOLIO</span>
          </div>
          <nav className="desktop-nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          <button onClick={toggleMenu} className="mobile-menu-button">
            {isMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenu && (
          <div className="mobile-menu">
            <div className="mobile-menu-container">
              <a href="#" className="mobile-nav-link">Home</a>
              <a href="#" className="mobile-nav-link">About</a>
              <a href="#" className="mobile-nav-link">Contact</a>
            </div>
          </div>
        )}
      </header>

      <section className="hero-section">
        <div className="grid-backdrop"></div>
        <div className="gradient-backdrop"></div>

        <div className="hero-content">
          <div className="developer-tag">Developer</div>
          <div className="job-title">Front-End Developer</div>
          <h1 className="hero-heading">
            <span>Hello, I am </span>
            <span className="gradient-text">Aarush Gupta</span>
          </h1>
          <p className="hero-description">
            Aspiring front-end developer with hands-on experience in HTML, CSS, JavaScript, React, and Python. Comfortable working with data libraries such as Pandas and SciPy. Currently focused on building real-world projects and strengthening core development skills through continuous learning.
          </p>
          <div className="contact-button-wrapper">
            <a href="#" className="contact-button">Contact Me</a>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              <Github size={24} />
            </a>
            <a href="#" className="social-link linkedin">
              <Linkedin size={24} />
            </a>
            <a href="#" className="social-link mail">
              <Mail size={24} />
            </a>
          </div>

          <div className="profile-picture-container">
            <div className="profile-picture-wrapper">
              <div className="profile-glow-outer"></div>
              <div className="profile-glow-inner"></div>
              <div className="profile-image-container">
                <img src="../assets/dummy.jpg" alt="Profile" className="profile-image" />
                <div className="profile-overlay"></div>
              </div>
              <div className="profile-accent-cyan"></div>
              <div className="profile-accent-purple"></div>
            </div>
          </div>

          <div className="scroll-indicator">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="radial-gradient-bg"></div>
        <div className="section-container">
          <h2 className="section-heading">
            <span className="gradient-text">Skills and Technologies</span>
          </h2>
          <p className="section-description">
            I specialize in frontend development, with a focus on crafting responsive, high-performance, and visually engaging user interfaces using modern web technologies.
          </p>
          <div className="skills-grid">
            {[
              { name: "React", level: "Confident" },
              { name: "JavaScript", level: "Confident" },
              { name: "HTML", level: "Confident" },
              { name: "CSS", level: "Confident" },
              { name: "Next.js", level: "Familiar" },
              { name: "Python", level: "Familiar" },
              { name: "Pandas", level: "Familiar" },
              { name: "SciPy", level: "Familiar" },
              { name: "Matplotlib", level: "Familiar" },
              { name: "Git", level: "Familiar" }
            ].map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level-container">
                  <div className="skill-progress-bar">
                    <div className={`skill-progress ${skill.level === 'Confident' ? 'confident' : 'familiar'}`}></div>
                  </div>
                  <div className={`skill-badge ${skill.level === 'Confident' ? 'confident' : 'familiar'}`}>
                    {skill.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-heading">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="section-description">Check out some of my works</p>

          <div className="project-card">
            <div className="project-content">
              <div className="project-image-container">
                <img src="../assets/bot.avif" alt="Project Preview" className="project-image" />
                <div className="project-image-overlay"></div>
              </div>

              <div className="project-details">
                <h3 className="project-title">Project Name</h3>
                <p className="project-description">A brief description of the project and technologies used. Replace this with details of your actual project.</p>
                <div className="project-tech-stack">
                  {['React', 'JavaScript', 'CSS'].map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="demo-link">
                    <span>Live Demo</span>
                  </a>
                  <a href="#" className="github-link">
                    <span>GitHub</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="view-all-button">
            View All Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;