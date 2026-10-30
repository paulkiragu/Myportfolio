#!/usr/bin/env bash
# Replaces the navbar with a cleaner mobile menu (dropdown under the header, not full-screen).
# Run from the project root:   bash optiona-v4-menu.sh
# Undo with:                   bash optiona-v4-menu.sh --undo
set -e

if [ ! -f package.json ] || [ ! -d src/Components ]; then
  echo "Run this from your project root (the folder with package.json and src/)."
  exit 1
fi

# ---------- UNDO ----------
if [ "$1" = "--undo" ]; then
  B=$(ls -d src/_optiona4_backup_* 2>/dev/null | tail -1)
  if [ -z "$B" ]; then echo "No menu backup found."; exit 1; fi
  cp "$B"/Navbar.jsx src/Components/Navbar.jsx
  rm -f src/Components/nav.css
  echo "Restored from $B"
  exit 0
fi

# ---------- BACKUP ----------
TS=$(date +%Y%m%d_%H%M%S)
B="src/_optiona4_backup_$TS"
mkdir -p "$B"
cp src/Components/Navbar.jsx "$B"/
echo "Backup saved in $B"

# ---------- Navbar.jsx ----------
cat > src/Components/Navbar.jsx << 'EOF'
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
EOF

# ---------- nav.css ----------
cat > src/Components/nav.css << 'EOF'
/* Header and menu. Desktop: one row. Phone: simple dropdown under the header. */
.nv {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: #fff; border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}
.nv-scrolled { border-bottom-color: #DDE2EB; }
.nv-bar {
  max-width: 1160px; margin: 0 auto; padding: 0 24px; height: 68px;
  display: flex; align-items: center; justify-content: space-between; position: relative;
}
.nv-logo {
  font-family: 'Source Serif 4', Georgia, serif; font-weight: 700; font-size: 1.4rem;
  color: #16294D; text-decoration: none;
}
.nv-toggle { display: none; }

/* Desktop */
.nv-menu { display: flex; align-items: center; gap: 36px; }
.nv-menu ul { list-style: none; display: flex; gap: 32px; margin: 0; padding: 0; }
.nv-menu a {
  font-family: 'Inter', system-ui, sans-serif; font-size: 0.95rem; font-weight: 500;
  color: #16294D; text-decoration: none;
}
.nv-menu ul a:hover { color: #8A6A1F; }
.nv-menu a.nv-cta {
  background: #16294D; color: #fff; padding: 11px 22px; border-radius: 6px; font-weight: 600;
  display: inline-block;
}
.nv-menu a.nv-cta:hover { background: #0F1D38; color: #fff; }
.nv-backdrop { display: none; }

/* Phone and small tablet */
@media (max-width: 900px) {
  .nv-bar { height: 60px; padding: 0 16px 0 20px; }
  .nv-logo { font-size: 1.25rem; }

  .nv-toggle {
    display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px;
    width: 44px; height: 44px; padding: 0; background: transparent;
    border: 1px solid #C9D1DE; border-radius: 6px; cursor: pointer;
  }
  .nv-toggle span {
    display: block; width: 20px; height: 2px; background: #16294D; border-radius: 1px;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  .nv-toggle.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nv-toggle.is-open span:nth-child(2) { opacity: 0; }
  .nv-toggle.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .nv-menu {
    position: absolute; top: 100%; left: 0; right: 0;
    flex-direction: column; align-items: stretch; gap: 0;
    background: #fff; border-bottom: 1px solid #DDE2EB; box-shadow: 0 12px 24px rgba(22, 41, 77, 0.1);
    padding: 4px 20px 20px; z-index: 1001;
    opacity: 0; visibility: hidden; transform: translateY(-8px);
    transition: opacity 0.18s ease, transform 0.18s ease, visibility 0s 0.18s;
  }
  .nv-menu.is-open {
    opacity: 1; visibility: visible; transform: translateY(0);
    transition: opacity 0.18s ease, transform 0.18s ease, visibility 0s;
  }
  .nv-menu ul { flex-direction: column; gap: 0; }
  .nv-menu li { border-bottom: 1px solid #E6EAF1; }
  .nv-menu ul a { display: block; padding: 16px 2px; font-size: 1.05rem; }
  .nv-menu a.nv-cta { display: block; text-align: center; margin-top: 18px; padding: 14px 20px; font-size: 1rem; }

  .nv-backdrop {
    display: block; position: fixed; left: 0; right: 0; bottom: 0; top: 60px;
    background: rgba(16, 30, 58, 0.35); z-index: 999;
  }
}
EOF

echo ""
echo "Done. Now run:"
echo "  npm run dev"
echo "Then open your browser's phone view (F12, then the device icon) to check the menu."
echo "To undo:  bash optiona-v4-menu.sh --undo"
