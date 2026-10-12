#!/usr/bin/env bash
# Portfolio redesign: overwrites Navbar, About, Testimonials, Contact (+ theme.css)
# Usage (from your project root):  bash redesign.sh [path/to/components]
set -e

DIR="${1:-src/components}"
if [ ! -d "$DIR" ]; then
  echo "Folder '$DIR' not found. Run from your project root or pass the components folder: bash redesign.sh path/to/components"
  exit 1
fi

BACKUP="$DIR/_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP"
for f in Navbar About Testimonials Contact; do
  [ -f "$DIR/$f.jsx" ] && cp "$DIR/$f.jsx" "$BACKUP/"
  [ -f "$DIR/$f.css" ] && cp "$DIR/$f.css" "$BACKUP/"
done
echo "Backed up originals to $BACKUP"

# ---------------------------------------------------------------- theme.css
cat > "$DIR/theme.css" <<'EOF'
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --paper: #f2efe8;
  --paper-2: #e8e4d9;
  --ink: #14120f;
  --ink-2: #55504a;
  --line: rgba(20, 18, 15, 0.16);
  --accent: #ff4d1c;
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
}

html { scroll-behavior: smooth; }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

::selection { background: var(--accent); color: var(--ink); }

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-2);
}
.eyebrow::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--line);
}
EOF

# ---------------------------------------------------------------- Navbar
cat > "$DIR/Navbar.jsx" <<'EOF'
import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './theme.css';
import './Navbar.css';

const links = [
  { href: '#about1', label: 'About' },
  { href: '#services1', label: 'Services' },
  { href: '#projects1', label: 'Projects' },
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
        <a href='#' className='logo-text' aria-label='Paul, home'>
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
                <span className='nav-num'>0{i + 1}</span>
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
EOF

cat > "$DIR/Navbar.css" <<'EOF'
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.15rem 2rem;
  background: rgba(242, 239, 232, 0.96);
  border-bottom: 1px solid transparent;
  transition: padding 0.3s ease, border-color 0.3s ease;
}

.navbar.scrolled {
  padding: 0.7rem 2rem;
  border-bottom-color: var(--line);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-text {
  position: relative;
  z-index: 1002;
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1;
  color: var(--ink);
  text-decoration: none;
}
.logo-dot { color: var(--accent); }
.navbar.menu-open .logo-text { color: var(--paper); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  padding: 0.35rem 0;
  background: linear-gradient(var(--accent), var(--accent)) left bottom / 0 2px no-repeat;
  transition: background-size 0.3s ease;
}
.nav-links li a:hover { background-size: 100% 2px; }

.nav-num { color: var(--accent); font-size: 0.68rem; }

.nav-links li a.nav-cta {
  background: var(--ink);
  color: var(--paper);
  padding: 0.7rem 1.2rem;
  border-radius: 2px;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}
.nav-links li a.nav-cta:hover {
  background: var(--accent);
  color: var(--ink);
  transform: translateY(-2px);
}

.hamburger {
  display: none;
  position: relative;
  z-index: 1002;
  width: 44px;
  height: 44px;
  padding: 0;
  background: none;
  border: 1px solid var(--ink);
  border-radius: 50%;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.hamburger .line {
  width: 18px;
  height: 1.5px;
  background: var(--ink);
  transition: transform 0.3s ease, background 0.3s ease;
}
.hamburger.active { border-color: var(--paper); }
.hamburger.active .line { background: var(--paper); }
.hamburger.active .line:nth-child(1) { transform: translateY(3.75px) rotate(45deg); }
.hamburger.active .line:nth-child(2) { transform: translateY(-3.75px) rotate(-45deg); }

@media (max-width: 900px) {
  .navbar { padding: 0.9rem 1.25rem; }
  .navbar.scrolled { padding: 0.7rem 1.25rem; }
  .hamburger { display: flex; }

  .nav-links {
    position: fixed;
    inset: 0;
    z-index: 1001;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.2rem;
    padding: 2rem 1.75rem;
    background: var(--ink);
    transform: translateY(-100%);
    visibility: hidden;
    transition: transform 0.55s cubic-bezier(0.7, 0, 0.2, 1), visibility 0s 0.55s;
  }
  .nav-links.active {
    transform: translateY(0);
    visibility: visible;
    transition: transform 0.55s cubic-bezier(0.7, 0, 0.2, 1), visibility 0s;
  }

  .nav-links li a {
    font-family: var(--font-display);
    font-size: clamp(2.6rem, 11vw, 4rem);
    text-transform: none;
    letter-spacing: -0.01em;
    color: var(--paper);
    gap: 1rem;
  }
  .nav-num { font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.08em; }

  .nav-links li a.nav-cta {
    margin-top: 1rem;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: var(--accent);
    color: var(--ink);
    padding: 1rem 1.6rem;
  }
}
EOF

# ---------------------------------------------------------------- About
cat > "$DIR/About.jsx" <<'EOF'
import React, { useEffect, useRef } from 'react';
import './theme.css';
import './About.css';
import image from '../assets/paul2.webp';

const skillGroups = [
  { label: 'Frontend', items: ['React.js', 'UI/UX Design'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'Python', 'API Integration'] },
  { label: 'AI / ML', items: ['Machine Learning'] },
];

const techStack = ['MongoDB', 'Express', 'React', 'Node.js', 'Python', 'M-Pesa API'];

const certifications = [
  { title: 'Full Stack Software Engineering', provider: 'PLP Academy', year: '2025' },
  { title: 'Advanced React', provider: 'Coursera', year: '2024' },
  { title: 'React Basics', provider: 'Coursera', year: '2023' },
  { title: 'UI/UX Design Specialization', provider: 'Coursera', year: '2023' },
  { title: 'Version Control with Git', provider: 'Coursera', year: '2023' },
  { title: 'Introduction to Web Development', provider: 'Coursera', year: '2022' },
];

const About = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll('.reveal') || [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const marquee = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <section className='about' id='about1' ref={rootRef}>
      <div className='about-inner'>
        <div className='eyebrow reveal'>(01) About</div>

        <div className='about-hero'>
          <figure className='about-figure reveal'>
            <div className='about-frame'>
              <img src={image} alt='Portrait of Paul' />
            </div>
            <figcaption className='about-sticker'>
              <strong>3+</strong>
              <span>years building</span>
            </figcaption>
          </figure>

          <div className='about-copy reveal'>
            <h2 className='about-title'>
              Full stack developer, <em>curious about AI.</em>
            </h2>
            <p>
              I build web applications with React, Node.js, Python and machine
              learning, aiming for things that are fast, maintainable and
              actually useful to the people using them.
            </p>
            <p>
              From e-commerce platforms with M-Pesa payments to AI-powered
              recommendation systems, I take a project from the first sketch to
              a deployed product.
            </p>
          </div>
        </div>
      </div>

      <div className='marquee' aria-label='Tech stack'>
        <div className='marquee-track'>
          {marquee.map((t, i) => (
            <span key={i}>
              {t}
              <i aria-hidden='true'>/</i>
            </span>
          ))}
        </div>
      </div>

      <div className='about-inner about-details'>
        <div className='reveal'>
          <h3 className='block-title'>Toolkit</h3>
          <div className='skill-groups'>
            {skillGroups.map((g) => (
              <div className='skill-group' key={g.label}>
                <span className='skill-label'>{g.label}</span>
                <ul>
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='reveal'>
          <h3 className='block-title'>Education</h3>
          <div className='edu-row'>
            <span className='row-year'>2022 &ndash; 2026</span>
            <div>
              <h4>BSc. Computer Science</h4>
              <p>University of Embu</p>
            </div>
          </div>

          <h3 className='block-title block-title--spaced'>Certifications</h3>
          <ul className='cert-list'>
            {certifications.map((c) => (
              <li key={c.title}>
                <span className='row-year'>{c.year}</span>
                <span className='cert-title'>{c.title}</span>
                <span className='cert-provider'>{c.provider}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
EOF

cat > "$DIR/About.css" <<'EOF'
.about {
  background: var(--paper);
  color: var(--ink);
  padding: 8.5rem 0 0;
  overflow: hidden;
}

.about-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.reveal.in { opacity: 1; transform: none; }

.about-hero {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 5rem;
  align-items: center;
  margin-top: 3.5rem;
  padding-bottom: 6rem;
}

.about-figure { position: relative; margin: 0; }

.about-frame {
  position: relative;
  border: 1px solid var(--ink);
  padding: 0.75rem;
  background: var(--paper-2);
  transform: rotate(-1.5deg);
}
.about-frame img {
  display: block;
  width: 100%;
  height: auto;
}

.about-sticker {
  position: absolute;
  right: -1.25rem;
  bottom: -1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--ink);
  transform: rotate(8deg);
  text-align: center;
}
.about-sticker strong {
  font-family: var(--font-display);
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 0.9;
}
.about-sticker span {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.6rem, 5.2vw, 4.7rem);
  line-height: 1;
  letter-spacing: -0.02em;
  margin: 0 0 2rem;
}
.about-title em { color: var(--accent); }

.about-copy p {
  max-width: 34rem;
  font-size: 1.08rem;
  line-height: 1.7;
  color: var(--ink-2);
  margin: 0 0 1.1rem;
}

/* Marquee */
.marquee {
  background: var(--ink);
  color: var(--paper);
  overflow: hidden;
  padding: 1.1rem 0;
  border-block: 1px solid var(--ink);
}
.marquee-track {
  display: flex;
  width: max-content;
  gap: 2rem;
  animation: marquee 28s linear infinite;
}
.marquee-track span {
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  white-space: nowrap;
}
.marquee-track i {
  font-style: normal;
  font-family: var(--font-mono);
  color: var(--accent);
}
@keyframes marquee {
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
  .reveal { opacity: 1; transform: none; transition: none; }
}

/* Details */
.about-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  padding-top: 6rem;
  padding-bottom: 7rem;
}

.block-title {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-2);
  margin: 0 0 1.5rem;
}
.block-title--spaced { margin-top: 3.5rem; }

.skill-group {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 1.5rem;
  padding: 1.4rem 0;
  border-top: 1px solid var(--line);
}
.skill-group:last-child { border-bottom: 1px solid var(--line); }
.skill-label {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
  padding-top: 0.4rem;
}
.skill-group ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem 1.4rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.skill-group li {
  font-family: var(--font-display);
  font-size: 1.8rem;
  line-height: 1.25;
}

.row-year {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--ink-2);
  white-space: nowrap;
}

.edu-row {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1.5rem;
  padding: 1.4rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.edu-row h4 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.1;
  margin: 0 0 0.3rem;
}
.edu-row p { margin: 0; color: var(--ink-2); }

.cert-list { list-style: none; margin: 0; padding: 0; }
.cert-list li {
  display: grid;
  grid-template-columns: 4rem 1fr auto;
  gap: 1.2rem;
  align-items: baseline;
  padding: 0.95rem 0;
  border-top: 1px solid var(--line);
  transition: padding-left 0.25s ease, color 0.25s ease;
}
.cert-list li:last-child { border-bottom: 1px solid var(--line); }
.cert-list li:hover { padding-left: 0.6rem; color: var(--accent); }
.cert-title { font-weight: 500; }
.cert-provider { font-family: var(--font-mono); font-size: 0.74rem; color: var(--ink-2); }

@media (max-width: 960px) {
  .about { padding-top: 7rem; }
  .about-hero { grid-template-columns: 1fr; gap: 3.5rem; padding-bottom: 4rem; }
  .about-figure { max-width: 360px; margin: 0 auto; width: 100%; }
  .about-details { grid-template-columns: 1fr; gap: 4rem; padding-top: 4rem; padding-bottom: 5rem; }
}

@media (max-width: 560px) {
  .about-inner { padding: 0 1.25rem; }
  .skill-group { grid-template-columns: 1fr; gap: 0.5rem; }
  .skill-group li { font-size: 1.5rem; }
  .edu-row { grid-template-columns: 1fr; gap: 0.4rem; }
  .cert-list li { grid-template-columns: 3.2rem 1fr; }
  .cert-provider { grid-column: 2; }
  .about-sticker { right: -0.5rem; width: 100px; height: 100px; }
}
EOF

# ---------------------------------------------------------------- Testimonials
cat > "$DIR/Testimonials.jsx" <<'EOF'
import React, { useState } from 'react';
import './theme.css';
import './Testimonials.css';

const testimonials = [
  {
    name: "James Mwangi",
    role: "CEO, TechStart Kenya",
    content: "Paul delivered our e-commerce platform ahead of schedule with exceptional quality. His attention to detail and proactive communication made the entire process smooth. Highly recommended!",
    rating: 5
  },
  {
    name: "Sarah Ochieng",
    role: "Product Manager, EduTech Solutions",
    content: "Working with Paul on our LMS was a fantastic experience. He understood our complex requirements and translated them into an intuitive, user-friendly platform that our students love.",
    rating: 5
  },
  {
    name: "Michael Kiprotich",
    role: "Director, AgriInnovate",
    content: "The AI crop recommendation system Paul built has transformed how our farmers make decisions. His innovative approach and technical expertise exceeded our expectations.",
    rating: 5
  }
];

const pad = (n) => String(n).padStart(2, '0');

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[activeIndex];

  const next = () => setActiveIndex((p) => (p + 1) % total);
  const prev = () => setActiveIndex((p) => (p - 1 + total) % total);

  return (
    <section className='testimonials-section' id='testimonials1'>
      <div className='testimonials-container'>
        <div className='eyebrow'>(04) Kind words</div>

        <div className='t-grid'>
          <h2 className='t-title'>
            What clients <em>say</em> after the launch.
          </h2>

          <div className='t-stage' key={activeIndex}>
            <span className='t-mark' aria-hidden='true'>&ldquo;</span>
            <blockquote className='t-quote'>{t.content}</blockquote>

            <div className='t-author'>
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
              <span className='t-rating'>{t.rating}/5</span>
            </div>
          </div>
        </div>

        <div className='t-controls'>
          <span className='t-count'>
            {pad(activeIndex + 1)} <i>/</i> {pad(total)}
          </span>
          <div className='t-buttons'>
            <button onClick={prev} aria-label='Previous testimonial'>&larr;</button>
            <button onClick={next} aria-label='Next testimonial'>&rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
EOF

cat > "$DIR/Testimonials.css" <<'EOF'
.testimonials-section {
  background: var(--paper-2);
  color: var(--ink);
  padding: 7rem 2rem;
  border-top: 1px solid var(--line);
}

.testimonials-container { max-width: 1200px; margin: 0 auto; }

.t-grid {
  display: grid;
  grid-template-columns: 4fr 7fr;
  gap: 5rem;
  margin-top: 3.5rem;
  align-items: start;
}

.t-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  margin: 0;
}
.t-title em { color: var(--accent); }

.t-stage {
  position: relative;
  animation: tIn 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}
@keyframes tIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}

.t-mark {
  display: block;
  font-family: var(--font-display);
  font-size: 7rem;
  line-height: 0.6;
  height: 3.2rem;
  color: var(--accent);
}

.t-quote {
  margin: 0 0 2.5rem;
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.7vw, 2.35rem);
  line-height: 1.25;
}

.t-author {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--ink);
}
.t-author strong { display: block; font-weight: 600; }
.t-author span:not(.t-rating) {
  display: block;
  margin-top: 0.2rem;
  font-size: 0.9rem;
  color: var(--ink-2);
}
.t-rating {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--ink-2);
}

.t-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
}
.t-count {
  font-family: var(--font-mono);
  font-size: 0.85rem;
}
.t-count i { font-style: normal; color: var(--accent); }

.t-buttons { display: flex; gap: 0.6rem; }
.t-buttons button {
  width: 52px;
  height: 52px;
  border: 1px solid var(--ink);
  background: transparent;
  color: var(--ink);
  border-radius: 50%;
  font-size: 1.15rem;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}
.t-buttons button:hover {
  background: var(--ink);
  color: var(--paper);
  transform: scale(1.06);
}

@media (max-width: 860px) {
  .testimonials-section { padding: 5rem 1.25rem; }
  .t-grid { grid-template-columns: 1fr; gap: 2.5rem; margin-top: 2.5rem; }
  .t-controls { margin-top: 2.5rem; }
}
@media (prefers-reduced-motion: reduce) {
  .t-stage { animation: none; }
}
EOF

# ---------------------------------------------------------------- Contact
cat > "$DIR/Contact.jsx" <<'EOF'
import React, { useState } from 'react';
import './theme.css';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(form);
    formData.append("access_key", "1daa90f9-b263-428e-bf6e-9df7ab76ea44");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        form.reset();
      } else {
        setResult(data.message || "An error occurred, please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='contact-section' id='contact1'>
      <div className='contact-container'>
        <div className='eyebrow contact-eyebrow'>(05) Contact</div>

        <div className='contact-grid'>
          <div className='contact-info'>
            <h2 className='contact-title'>
              Let's work <em>together.</em>
            </h2>
            <p className='contact-description'>
              Have a project in mind? Tell me about it and I'll get back to you
              with how I'd approach it.
            </p>

            <dl className='contact-details'>
              <div>
                <dt>Email</dt>
                <dd><a href='mailto:paulkiragumburu@gmail.com'>paulkiragumburu@gmail.com</a></dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd><a href='tel:+254798465147'>+254 798 465 147</a></dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Nairobi, Kenya</dd>
              </div>
              <div>
                <dt>Elsewhere</dt>
                <dd className='social-links'>
                  <a href='https://linkedin.com/in/paul-mburu-088264373' target='_blank' rel='noopener noreferrer'>LinkedIn &#8599;</a>
                  <a href='https://github.com/paulkiragu' target='_blank' rel='noopener noreferrer'>GitHub &#8599;</a>
                </dd>
              </div>
            </dl>
          </div>

          <form onSubmit={onSubmit} className='contact-form'>
            <div className='form-group'>
              <label htmlFor='name'>01 &mdash; Your name</label>
              <input type='text' id='name' name='name' placeholder='Jane Doe' required />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>02 &mdash; Your email</label>
              <input type='email' id='email' name='email' placeholder='jane@company.com' required />
            </div>

            <div className='form-group'>
              <label htmlFor='subject'>03 &mdash; Subject</label>
              <input type='text' id='subject' name='subject' placeholder='Project inquiry' />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>04 &mdash; Message</label>
              <textarea id='message' name='message' rows='4' placeholder='Tell me about your project...' required></textarea>
            </div>

            <button type='submit' className='submit-btn' disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
              <span aria-hidden='true'>&rarr;</span>
            </button>

            {result && (
              <div className={`form-result ${result.includes('success') ? 'success' : ''}`} role='status'>
                {result}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
EOF

cat > "$DIR/Contact.css" <<'EOF'
.contact-section {
  background: var(--ink);
  color: var(--paper);
  padding: 7rem 2rem 6rem;
}

.contact-container { max-width: 1200px; margin: 0 auto; }

.contact-eyebrow { color: rgba(242, 239, 232, 0.6); }
.contact-eyebrow::after { background: rgba(242, 239, 232, 0.18); }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  margin-top: 3.5rem;
}

.contact-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(3rem, 6.5vw, 5.8rem);
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin: 0 0 1.75rem;
}
.contact-title em { color: var(--accent); }

.contact-description {
  max-width: 28rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(242, 239, 232, 0.7);
  margin: 0 0 3rem;
}

.contact-details { margin: 0; }
.contact-details > div {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(242, 239, 232, 0.16);
}
.contact-details > div:last-child { border-bottom: 1px solid rgba(242, 239, 232, 0.16); }
.contact-details dt {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(242, 239, 232, 0.5);
  padding-top: 0.25rem;
}
.contact-details dd { margin: 0; font-size: 1.05rem; }
.contact-details a {
  color: var(--paper);
  text-decoration: none;
  background: linear-gradient(var(--accent), var(--accent)) left bottom / 0 1px no-repeat;
  transition: background-size 0.3s ease, color 0.2s ease;
}
.contact-details a:hover { background-size: 100% 1px; color: var(--accent); }
.social-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }

/* Form */
.contact-form { padding-top: 0.5rem; }

.form-group { margin-bottom: 2rem; }
.form-group label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(242, 239, 232, 0.55);
  margin-bottom: 0.4rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 0.6rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(242, 239, 232, 0.3);
  border-radius: 0;
  color: var(--paper);
  font-family: var(--font-display);
  font-size: 1.6rem;
  transition: border-color 0.25s ease;
}
.form-group textarea { resize: none; line-height: 1.3; }
.form-group input::placeholder,
.form-group textarea::placeholder { color: rgba(242, 239, 232, 0.25); }
.form-group input:focus,
.form-group textarea:focus { outline: none; border-bottom-color: var(--accent); }

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem 1.6rem;
  background: var(--accent);
  color: var(--ink);
  border: 1px solid var(--accent);
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
}
.submit-btn:hover:not(:disabled) { background: var(--paper); border-color: var(--paper); }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.form-result {
  margin-top: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: #ff8a6b;
}
.form-result.success { color: #b7f08a; }

@media (max-width: 900px) {
  .contact-section { padding: 5rem 1.25rem 4rem; }
  .contact-grid { grid-template-columns: 1fr; gap: 4rem; margin-top: 2.5rem; }
}
@media (max-width: 480px) {
  .contact-details > div { grid-template-columns: 1fr; gap: 0.2rem; }
  .form-group input, .form-group textarea { font-size: 1.35rem; }
}
EOF

echo ""
echo "Done. Updated: Navbar, About, Testimonials, Contact (+ theme.css)."
echo "Run your dev server (npm run dev / npm start) to see it."
echo "To undo: copy the files from $BACKUP back into $DIR"
