import React from 'react';
import portrait from '../assets/paul2.webp';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education & Certifications' },
  { href: '#contact1', label: 'Contact' },
];

const Sidebar = () => (
  <aside className='optb-side'>
    <img className='optb-photo' src={portrait} alt='Portrait of Paul Mburu' />
    <div>
      <h1 className='optb-name'>Paul Mburu</h1>
      <p className='optb-role'>Full Stack Developer &middot; AI &amp; ML</p>
      <p className='optb-edu'>BSc. Computer Science, University of Embu</p>
    </div>

    <nav className='optb-nav' aria-label='Sections'>
      {links.map((l) => (
        <a key={l.href} href={l.href}>{l.label}</a>
      ))}
    </nav>

    <div className='optb-contact-links'>
      <a href='mailto:paulkiragumburu@gmail.com'>paulkiragumburu@gmail.com</a>
      <a href='https://linkedin.com/in/paul-mburu-088264373' target='_blank' rel='noopener noreferrer'>LinkedIn &#8599;</a>
      <a href='https://github.com/paulkiragu' target='_blank' rel='noopener noreferrer'>GitHub &#8599;</a>
    </div>

    <a className='optb-cv' href='/Paul Mburu resume.pdf' download>Download CV</a>
  </aside>
);

export default Sidebar;
