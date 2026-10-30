import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './theme.css';
import './Navbar.css';

const links = [
  { href: '#about1', label: 'About' },
  { href: '#projects1', label: 'Projects' },
  { href: '#services1', label: 'Services' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className='navbar-container'>
        <a href='#home' className='logo-text' aria-label='Paul, home'>
          Paul<span className='logo-dot'>.</span>
        </a>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
          aria-expanded={isOpen}
        >
          <span className='line'></span>
          <span className='line'></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {links.map((l, i) => (
            <li key={l.href} onClick={close}>
              <AnchorLink href={l.href}>
                {l.label}
              </AnchorLink>
            </li>
          ))}
          <li onClick={close}>
            <AnchorLink href='#contact1' className='nav-cta'>
              Contact me <span aria-hidden='true'>&rarr;</span>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
