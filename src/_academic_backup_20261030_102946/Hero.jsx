import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './theme.css';
import './Hero.css';
import paul from '../assets/paul.webp';

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '6+', label: 'Live projects' },
  { value: '2026', label: 'BSc. Computer Science' },
];

const Hero = () => (
  <section className='hero' id='home'>
    <div className='hero-inner'>
      <div className='hero-copy'>
        <p className='hero-status'>
          <span className='status-dot' aria-hidden='true'></span>
          Available for work
        </p>

        <h1 className='hero-title'>
          Hi, I'm Paul.
          <br />
          I build <em>Impactiful Systems</em> that solve business problems for you.
        </h1>

        <p className='hero-roles'>
          Full Stack Developer <i aria-hidden='true'>/</i> Python &amp; ML{' '}
          <i aria-hidden='true'>/</i> UI&#8209;UX
        </p>

        <p className='hero-description'>
          I take a project from the first sketch to a
          deployed product people can actually use. React, Node.js and Python, machine learning  with payments like M-Pesa are
          on top. 
        </p>

        <div className='hero-cta'>
          <AnchorLink href='#projects1' className='btn-solid'>
            View my work <span aria-hidden='true'>&rarr;</span>
          </AnchorLink>
          <AnchorLink href='#contact1' className='btn-link'>
            Or just say hello
          </AnchorLink>
        </div>

        <dl className='hero-stats'>
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className='hero-figure'>
        <div className='hero-arch'>
          <img src={paul} alt='Portrait of Paul Mburu' width='758' height='1077' />
        </div>
        <figcaption className='hero-caption'>
          <span>Paul Mburu</span>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Hero;
