import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const items = [
  { title: 'Featured Projects', text: 'Web and AI applications I have designed and built.', href: '#projects1' },
  { title: 'Services', text: 'Web development, UI/UX design, mobile apps and consulting.', href: '#services1' },
  { title: 'Technical Skills', text: 'React, Node.js, Express, MongoDB, Python and APIs.', href: '#about1' },
  { title: 'Education & Certifications', text: 'BSc. Computer Science and professional certifications.', href: '#about1' },
  { title: 'Contact', text: 'Start a project or ask a question.', href: '#contact1' },
  { title: 'Resume', text: 'Download my CV.', href: '/Paul Mburu resume.pdf', download: true },
];

const Explore = () => (
  <section className='explore' id='explore'>
    <div className='explore-inner'>
      <h2 className='a-heading'>Explore</h2>
      <div className='a-rule'></div>
      <div className='explore-grid'>
        {items.map((it) =>
          it.download ? (
            <a key={it.title} href={it.href} download className='explore-card'>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </a>
          ) : (
            <AnchorLink key={it.title} href={it.href} className='explore-card'>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </AnchorLink>
          )
        )}
      </div>
    </div>
  </section>
);

export default Explore;
