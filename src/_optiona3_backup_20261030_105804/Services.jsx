import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useReveal from './useReveal';
import './theme.css';
import './Services.css';

const services = [
  {
    title: 'Web Development',
    description:
      'Full-stack web applications built with React, Node.js and cloud services. Scalable, secure and quick to load.',
    features: ['Responsive design', 'API integration', 'Database management'],
  },
  {
    title: 'UI/UX Design',
    description:
      'Interfaces that look good and make sense. I design around how people actually use a product, not how it looks in a mockup.',
    features: ['Wireframing', 'Prototyping', 'User research'],
  },
  {
    title: 'Mobile Apps',
    description:
      'Cross-platform apps for iOS and Android with React Native, built to feel native rather than like a website in a frame.',
    features: ['Cross-platform', 'Native performance', 'App Store ready'],
  },
  {
    title: 'Technical Consulting',
    description:
      'Practical guidance for teams making technology decisions: architecture planning, code reviews and best practices.',
    features: ['Tech strategy', 'Code review', 'Team training'],
  },
];

const pad = (n) => String(n).padStart(2, '0');

const Services = () => {
  const rootRef = useReveal();

  return (
    <section className='services-section' id='services1' ref={rootRef}>
      <div className='services-container'>
        <div className='eyebrow reveal'>(03) Services</div>

        <div className='services-layout'>
          <header className='services-intro reveal'>
            <h2 className='services-title'>
              How I can <em>help.</em>
            </h2>
            <p className='services-subtitle'>
              Digital solutions shaped around what your business actually needs,
              not a one-size-fits-all package.
            </p>
            <AnchorLink href='#contact1' className='services-link'>
              Start a conversation <span aria-hidden='true'>&rarr;</span>
            </AnchorLink>
          </header>

          <ol className='services-list'>
            {services.map((s, i) => (
              <li key={s.title} className='service-row reveal'>
                <span className='service-num'>{pad(i + 1)}</span>
                <div className='service-body'>
                  <h3 className='service-title'>{s.title}</h3>
                  <p className='service-description'>{s.description}</p>
                  <ul className='service-features'>
                    {s.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Services;
