import React,{useState,useEffect} from 'raect'
import { Github, Mail, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import { use } from 'react';

export default Portfolio = ()=>{
    const [isMenu, setIsMenu] = useState(false)
    const [scroll, setScroll] = useState(0)

    useEffect(()=>{
        function handleScroll(){
            setScroll(window.scrollY)
        }

        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])

    const toggleMenu = () => setIsMenu(!isMenu);
    return(
        <div className = "portfolio-container">
            <header className={`site-header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
                <div className = "header-content">

                    <div className = "logo">
                        DEV<span className="logo-bold">FOLIO</span>
                    </div>

                    <nav className="desktop-nav">
                        <a href = '#' className="nav-link active">Home</a>
                        <a href = '#' className="nav-link">About</a>
                        <a href = '#' className="nav-link">Contact</a>
                    </nav>
                    
                    <button onClick={toggleMenu} className="mobile-menu-button" aria-label="Toggle menu">{isMenu?<X size={20} /> : <Menu size={20} />}</button>

                </div>

                {isMenu &&(
                    <div className="mobile-menu">
                        <div className="mobile-menu-content">
                            <a href="#" className="mobile-nav-link active">Home</a>
                            <a href="#" className="mobile-nav-link">About</a>
                            <a href="#" className="mobile-nav-link">Contact</a>
                        </div>
                    </div>
                )}
                <section className="hero-section">
                    <div className="hero-content">
                        <div>Developer</div>

                    </div>

                    <div className="hero-content">
                        <div className="job-title">
                            Front-End Developer
                        </div>
                        <h1 className="hero-heading">
                            <span>Hello, I am</span>
                            <span className="gradient-text">Aarush Gupta</span>
                        </h1>

                        <p className="hero-description">
                            Aspiring front-end developer with hands-on experience in HTML, CSS, JavaScript, React, and Python. Comfortable working with data libraries such as Pandas and SciPy. Currently focused on building real-world projects and strengthening core development skills through continuous learning.
                        </p>

                        <div className = "cta-buttons">
                            <a href = "#" className="cta-secondary">
                                Contact Me
                            </a>
                        </div>

                        <div className="social-links">
                            <a href = "#" className="social-link github">
                                <Github size = {24} />
                            </a>

                            <a href="#" className="social-link linkedin">
                                <Linkedin size = {24} />
                            </a>

                            <a href="#" className="social-link mail">
                                <Mail size = {24} />
                            </a>
                        </div>
                    

                        <div className="hero-image-conatainer">
                            <div className="profile-image-wrapper">
                                <div className="outer-glow"></div>
                                <div className="inner-glow"></div>

                                <div className="profile-image">
                                    <img src="./../assets/dummy.JPG" alt = "Profile Picture"/>
                                    <div className="image-shine"></div>
                                </div>

                                <div className="decoration-circle cyan"></div>
                                <div className="decoration-circle purple"></div>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-indicator">
                        <ChevronDown size={32} />
                    </div>
                </section>

                <section className="skills-set">
                    <div className="skills-background"></div>

                    <div className="section-container">
                        <h2 className="section-title">
                            <span className="gradient-text">
                                Skills and Technologies
                            </span>
                        </h2>

                        <p className = "section-description">
                            I specialize in frontend development, with a focus on crafting responsive, high-performance, and visually engaging user interfaces using modern web technologies. 
                        </p>

                        <div className="skills-grid">
                            {[
                                { name: 'React', level: 'Familiar' },
                                { name: 'JavaScript', level: 'Confident' },
                                { name: 'HTML', level: 'Confident' },
                                { name: 'CSS', level: 'Confident' },
                                { name: 'Next.js', level: 'Beginner' },
                                { name: 'Python', level: 'Familiar' },
                                { name: 'Pandas', level: 'Familiar' },
                                { name: 'SciPy', level: 'Familiar' },
                                { name: 'Matplotlib', level: 'Familiar' },
                                { name: 'Git', level: 'Familiar' }
                            ].map((skill,index)=>(
                                <div key={index} className="skill-card">
                                    <div className="skill-name">{skill.name}</div>

                                    <div className="skill-progress-container">
                                        <div className="skill-progress">{skill.level}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>

                <section className="projects-section">
                    <div className="section-container">
                        <h2 className="section-title">
                            <span className="gradient-text">
                                Featured Projects
                            </span>
                        </h2>

                        <p className="section-description">
                            Check out some of my works
                        </p>

                        
                    </div>
                </section>
            </header>
        </div>
    )
}