import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './theme.css';
import './nav.css';

const links = [
  { href: '#about1', label: 'About' },
  { href: '#projects1', label: 'Projects' },
  { href: '#services1', label: 'Services' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close with the Escape key, and when the window grows to desktop size
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Stop the page behind the menu from scrolling while it is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nv ${scrolled ? 'nv-scrolled' : ''}`}>
      <div className='nv-bar'>
        <a href='#home' className='nv-logo' onClick={close}>Paul Mburu</a>

        <button
          type='button'
          className={`nv-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='nv-menu'
        >
          <span></span><span></span><span></span>
        </button>

        <nav id='nv-menu' className={`nv-menu ${open ? 'is-open' : ''}`} aria-label='Main'>
          <ul>
            {links.map((l) => (
              <li key={l.href} onClick={close}>
                <AnchorLink href={l.href} offset={72}>{l.label}</AnchorLink>
              </li>
            ))}
          </ul>
          <div onClick={close}>
            <AnchorLink href='#contact1' offset={72} className='nv-cta'>Contact me</AnchorLink>
          </div>
        </nav>
      </div>

      {open && <div className='nv-backdrop' onClick={close} aria-hidden='true'></div>}
    </header>
  );
};

export default Navbar;
