import React from 'react';
import './Hero.css';
import paul from '../assets/paul.webp';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ['Full Stack Developer', 'Python & ML Enthusiast', 'UI/UX Designer', 'API Integration Expert'],
    loop: true, 
    typeSpeed: 80,
    deleteSpeed: 40,
  });

  return (
    <section className='hero' id='home'>
      <div className='hero-bg-pattern'></div>
      <div className='hero-container'>
        <div className='hero-content'>
          <div className='hero-badge'>Available for Work</div>
          <h1 className='hero-title'>
            Hi, I'm <span className='hero-name'>Paul</span>
            <br />
            <span className='hero-role'>{typeEffect}</span>
            <Cursor cursorStyle='|' cursorColor='#2563EB' />
          </h1>
          <p className='hero-description'>
            I build powerful web applications with expertise in modern frameworks, 
            Python, Machine Learning, and payment integrations like M-Pesa. 
            Let's create scalable solutions that drive your business forward.
          </p>
          <div className='hero-cta'>
            <AnchorLink href="#projects1" className='btn-primary'>
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </AnchorLink>
            <AnchorLink href="#contact1" className='btn-secondary'>
              Let's Talk
            </AnchorLink>
          </div>
          <div className='hero-stats'>
            <div className='stat-item'>
              <span className='stat-number'>3+</span>
              <span className='stat-label'>Years Experience</span>
            </div>
            <div className='stat-divider'></div>
            <div className='stat-item'>
              <span className='stat-number'>15+</span>
              <span className='stat-label'>Projects Completed</span>
            </div>
            <div className='stat-divider'></div>
            <div className='stat-item'>
              <span className='stat-number'>100%</span>
              <span className='stat-label'>Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div className='hero-image-wrapper'>
          <img src={paul} alt="Paul - Full-Stack Developer" className='hero-image' />
        </div>
      </div>
      <div className='scroll-indicator'>
        <AnchorLink href="#about1">
          <span>Scroll</span>
          <div className='scroll-arrow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </AnchorLink>
      </div>
    </section>
  );
};

export default Hero;
