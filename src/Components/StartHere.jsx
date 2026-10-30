import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const items = [
  { title: 'Projects', text: 'Things I have built, with links to the live sites.', href: '#projects1' },
  { title: 'Services', text: 'What I can build for you and how I work.', href: '#services1' },
  { title: 'Skills and education', text: 'The tools I use, where I studied and my certificates.', href: '#about1' },
  { title: 'Contact', text: 'Have a project in mind? Send me a message.', href: '#contact1' },
  { title: 'CV', text: 'Download my CV as a PDF.', href: '/Paul Mburu resume.pdf', download: true },
];

const StartHere = () => (
  <section className='sh' id='start'>
    <div className='sh-inner'>
      <h2>Where to start</h2>
      <div className='sh-grid'>
        {items.map((it) =>
          it.download ? (
            <a key={it.title} href={it.href} download className='sh-card'>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </a>
          ) : (
            <AnchorLink key={it.title} href={it.href} className='sh-card'>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </AnchorLink>
          )
        )}
      </div>
    </div>
  </section>
);

export default StartHere;
