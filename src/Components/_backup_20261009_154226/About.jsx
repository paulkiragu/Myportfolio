import React, { useEffect, useRef } from 'react';
import './About.css';
import image from '../assets/paul2.webp';

const skills = [
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'Machine Learning', level: 70, category: 'ai' },
  { name: 'API Integration', level: 90, category: 'backend' },
  { name: 'UI/UX Design', level: 85, category: 'design' },
];

const techStack = [
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'M-Pesa API', icon: '💳' },
];

const certifications = [
  { title: 'Full Stack Software Engineering', provider: 'PLP Academy', year: '2025' },
  { title: 'Advanced React', provider: 'Coursera', year: '2024' },
  { title: 'React Basics', provider: 'Coursera', year: '2023' },
  { title: 'UI/UX Design Specialization', provider: 'Coursera', year: '2023' },
  { title: 'Version Control with Git', provider: 'Coursera', year: '2023' },
  { title: 'Introduction to Web Development', provider: 'Coursera', year: '2022' },
];

const About = () => {
  const aboutRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutRef.current?.getBoundingClientRect().top;
      const imageTop = imageRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (aboutTop < windowHeight * 0.8) {
        aboutRef.current?.classList.add('animate-in');
      }
      if (imageTop < windowHeight * 0.8) {
        imageRef.current?.classList.add('animate-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='about-section' id='about1'>
      <div className='about-container'>
        <div className='about-image-wrapper' ref={imageRef}>
          <div className='about-image-bg'></div>
          <img src={image} alt="Paul" className='about-image' />
          <div className='experience-badge'>
            <span className='exp-number'>3+</span>
            <span className='exp-text'>Years of Experience</span>
          </div>
        </div>
        
        <div className='about-content' ref={aboutRef}>
          <span className='section-label'>About Me</span>
          <h2 className='about-title'>
            Full Stack Developer & 
            <span className='highlight'> AI Enthusiast</span>
          </h2>
          <p className='about-description'>
            I'm a passionate full-stack developer with expertise in modern web 
            technologies including React, Node.js, Python, and Machine Learning. 
            I build scalable, high-performance web applications that solve 
            real-world problems.
          </p>
          <p className='about-description'>
            From e-commerce platforms with M-Pesa integration to AI-powered 
            recommendation systems, I deliver end-to-end solutions that drive 
            business growth and exceptional user experiences.
          </p>
        </div>
      </div>

      {/* Skills and Education Row - Side by Side */}
      <div className='about-subsections'>
        <div>
          <div className='skills-section'>
            <h3 className='skills-title'>Technical Expertise</h3>
            <div className='skills-grid'>
            {skills.map((skill, index) => (
              <div key={index} className='skill-item'>
                <div className='skill-header'>
                  <span className='skill-name'>{skill.name}</span>
                  <span className='skill-percent'>{skill.level}%</span>
                </div>
                <div className='skill-bar'>
                  <div 
                    className='skill-progress' 
                    style={{ '--progress-width': `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
            </div>
          </div>
          
          {/* Tech Stack - Below Technical Expertise */}
          <h3 className='stack-title'>Tech Stack</h3>
          <div className='tech-stack-banner'>
            <div className='stack-icons'>
              {techStack.map((tech, index) => (
                <div key={index} className='stack-item'>
                  <span className='stack-icon'>{tech.icon}</span>
                  <span className='stack-name'>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='education-section'>
          <h3 className='edu-section-title'>Education & Certifications</h3>
          <div className='education-card main-edu'>
            <div className='edu-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className='edu-content'>
              <h4>BSc. Computer Science</h4>
              <p>University of Embu</p>
              <span className='edu-year'>2022 - 2026</span>
            </div>
          </div>
          <div className='certifications-grid'>
            {certifications.map((cert, index) => (
              <div key={index} className='cert-card'>
                <div className='cert-badge'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <div className='cert-info'>
                  <h5>{cert.title}</h5>
                  <p>{cert.provider}</p>
                  <span className='cert-year'>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
