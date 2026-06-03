import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <a href="#" className='logo-text'>
          <span className='logo-highlight'>P</span>aul<span className='logo-dot'>.</span>
        </a>
        <div className='hamburger' onClick={toggleMenu}>
          <span className={`line ${isOpen ? 'active' : ''}`}></span>
          <span className={`line ${isOpen ? 'active' : ''}`}></span>
          <span className={`line ${isOpen ? 'active' : ''}`}></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li onClick={closeMenu}>
            <AnchorLink href="#about1">About</AnchorLink>
          </li>
          <li onClick={closeMenu}>
            <AnchorLink href="#services1">Services</AnchorLink>
          </li>
          <li onClick={closeMenu}>
            <AnchorLink href="#projects1">Projects</AnchorLink>
          </li>
          <li onClick={closeMenu}>
            <AnchorLink href="#contact1" className='nav-cta'>Contact Me</AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
