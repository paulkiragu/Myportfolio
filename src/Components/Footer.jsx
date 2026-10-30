import React from 'react';

const Footer = () => (
  <footer className='pgf'>
    <div className='pgf-inner'>
      <div className='pgf-cols'>
        <div>
          <div className='pgf-logo'>Paul Mburu</div>
          <p>Full stack developer based in Kenya.</p>
          <a href='/Paul Mburu resume.pdf' download className='pgf-cv'>Download CV</a>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about1'>About</a></li>
            <li><a href='#projects1'>Projects</a></li>
            <li><a href='#services1'>Services</a></li>
            <li><a href='#contact1'>Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>paulkiragumburu@gmail.com</li>
            <li>+254 798 465 147</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <p className='pgf-copy'>&copy; {new Date().getFullYear()} Paul Mburu. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
