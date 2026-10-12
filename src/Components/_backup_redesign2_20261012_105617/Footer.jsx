import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-main'>
          <div className='footer-brand'>
            <a href="#" className='footer-logo'>
              <span className='logo-highlight'>P</span>aul<span className='logo-dot'>.</span>
            </a>
            <p className='footer-tagline'>
              Building exceptional digital experiences that drive business growth.
            </p>
            <a href="/Paul Mburu resume.pdf" download className='resume-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </div>

          <div className='footer-links'>
            <div className='footer-column'>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about1">About</a></li>
                <li><a href="#services1">Services</a></li>
                <li><a href="#projects1">Projects</a></li>
              </ul>
            </div>

            <div className='footer-column'>
              <h4>Services</h4>
              <ul>
                <li><a href="#services1">Web Development</a></li>
                <li><a href="#services1">UI/UX Design</a></li>
                <li><a href="#services1">Mobile Apps</a></li>
                <li><a href="#services1">Consulting</a></li>
              </ul>
            </div>

            <div className='footer-column'>
              <h4>Contact</h4>
              <ul>
                <li>paulkiragumburu@gmail.com</li>
                <li>+254 798 465 147</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <p className='footer-copyright'>&copy; {currentYear} Paul Mburu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
