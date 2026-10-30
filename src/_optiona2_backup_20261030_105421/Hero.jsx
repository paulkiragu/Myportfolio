import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import paul from '../assets/paul.webp';

const Hero = () => (
  <section className='ahero' id='home'>
    <div className='ahero-inner'>
      <div className='ahero-photo'>
        <img src={paul} alt='Portrait of Paul Mburu' />
      </div>
      <div className='ahero-copy'>
        <span className='ahero-kicker'>Full Stack Developer &middot; Kenya</span>
        <h1>Who is Paul Mburu?</h1>
        <p>
          I am a Full Stack Developer who builds web applications with React,
          Node.js, Python and machine learning. My work focuses on clean
          engineering, thoughtful design and dependable delivery, from
          e-commerce platforms with M-Pesa payments to AI-powered systems in
          agriculture and healthcare.
        </p>
        <div className='ahero-cta'>
          <AnchorLink href='#projects1' className='abtn abtn-solid'>View Projects</AnchorLink>
          <AnchorLink href='#contact1' className='abtn abtn-outline'>Contact Me</AnchorLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
