import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import paul from '../assets/paul.webp';

const Hero = () => (
  <section className='ah' id='home'>
    <div className='ah-inner'>
      <div className='ah-photo'>
        <img src={paul} alt='Paul Mburu' />
      </div>
      <div className='ah-copy'>
        <h1>Hi, I&rsquo;m Paul Mburu.</h1>
        <p className='ah-sub'>Full stack developer based in Kenya.</p>
        <p>
          I work mostly with React, Node.js and Python. I have built an online
          store with M-Pesa payments, a crop recommendation tool for farmers and
          a community health monitoring system, and I enjoy taking an idea all
          the way from a rough sketch to a live product.
        </p>
        <div className='ah-cta'>
          <AnchorLink href='#projects1' className='ah-btn ah-btn-solid'>See my projects</AnchorLink>
          <AnchorLink href='#contact1' className='ah-btn ah-btn-line'>Get in touch</AnchorLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
