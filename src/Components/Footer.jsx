import React from 'react';
import './theme.css';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-main'>
          <div className='footer-brand'>
            <a href='#home' className='footer-logo' aria-label='Back to top'>
              Paul<span className='logo-dot'>.</span>
            </a>
            <p className='footer-tagline'>
              Building thoughtful digital products that help businesses grow.
            </p>
            <a href='/Paul Mburu resume.pdf' download className='resume-btn'>
              Download resume <span aria-hidden='true'>&darr;</span>
            </a>
          </div>

          <nav className='footer-links' aria-label='Footer'>
            <div className='footer-column'>
              <h4>Navigate</h4>
              <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about1'>About</a></li>
                <li><a href='#projects1'>Projects</a></li>
                <li><a href='#services1'>Services</a></li>
              </ul>
            </div>

            <div className='footer-column'>
              <h4>Elsewhere</h4>
              <ul>
                <li>
                  <a href='https://github.com/paulkiragu' target='_blank' rel='noopener noreferrer'>GitHub &#8599;</a>
                </li>
                <li>
                  <a href='https://linkedin.com/in/paul-mburu-088264373' target='_blank' rel='noopener noreferrer'>LinkedIn &#8599;</a>
                </li>
              </ul>
            </div>

            <div className='footer-column'>
              <h4>Say hello</h4>
              <ul>
                <li><a href='mailto:paulkiragumburu@gmail.com'>paulkiragumburu@gmail.com</a></li>
                <li><a href='tel:+254798465147'>+254 798 465 147</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className='footer-bottom'>
          <p>&copy; {year} Paul Mburu</p>
          <a href='#home'>Back to top &uarr;</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
