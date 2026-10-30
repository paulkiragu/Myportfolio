import React from 'react';

const services = [
  { title: 'Web development',
    text: 'Full-stack web applications built with React, Node.js and cloud services. Scalable, secure and fast.',
    points: ['Responsive design', 'API integration', 'Database management'] },
  { title: 'UI/UX design',
    text: 'Interfaces that look good and are easy to use, designed around the people who will use them.',
    points: ['Wireframing', 'Prototyping', 'User research'] },
  { title: 'Mobile apps',
    text: 'Cross-platform mobile apps for iOS and Android, built with React Native.',
    points: ['Cross-platform', 'Native performance', 'App store ready'] },
  { title: 'Technical consulting',
    text: 'Practical technology guidance to help you make informed decisions.',
    points: ['Tech strategy', 'Code review', 'Team training'] },
];

const Services = () => (
  <section className='pg' id='services1'>
    <div className='pg-inner'>
      <h2>Services</h2>
      <p className='pg-intro'>What I can build for you and how I can help.</p>

      <div className='pg-cards pg-cards-2'>
        {services.map((s) => (
          <div className='pg-card' key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className='pg-tech'>{s.points.join(' · ')}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
