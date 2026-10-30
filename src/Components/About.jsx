import React from 'react';
import image from '../assets/paul2.webp';

const skills = [
  { label: 'Frontend', items: ['React.js', 'UI/UX design'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'Python', 'API integration'] },
  { label: 'AI and machine learning', items: ['Machine learning'] },
];

const education = [
  { year: '2022 – 2026', title: 'BSc. Computer Science', by: 'University of Embu' },
  { year: '2025', title: 'Full Stack Software Engineering', by: 'PLP Academy' },
  { year: '2024', title: 'Advanced React', by: 'Coursera' },
  { year: '2023', title: 'React Basics', by: 'Coursera' },
  { year: '2023', title: 'UI/UX Design Specialization', by: 'Coursera' },
  { year: '2023', title: 'Version Control with Git', by: 'Coursera' },
  { year: '2022', title: 'Introduction to Web Development', by: 'Coursera' },
];

const About = () => (
  <section className='pg' id='about1'>
    <div className='pg-inner'>
      <h2>About me</h2>

      <div className='pg-about'>
        <img className='pg-portrait' src={image} alt='Paul Mburu' />
        <div className='pg-about-text'>
          <p>
            I build web applications with React, Node.js, Python and machine
            learning. I care about making things that are fast, easy to
            maintain and useful to the people who use them.
          </p>
          <p>
            From e-commerce platforms with M-Pesa payments to AI-powered
            recommendation systems, I take a project from the first sketch to
            a deployed product.
          </p>
        </div>
      </div>

      <h3 className='pg-sub'>Skills</h3>
      <div className='pg-cards pg-cards-3'>
        {skills.map((g) => (
          <div className='pg-card' key={g.label}>
            <h4>{g.label}</h4>
            <p>{g.items.join(', ')}</p>
          </div>
        ))}
      </div>

      <h3 className='pg-sub'>Education and certifications</h3>
      <ul className='pg-rows'>
        {education.map((e) => (
          <li key={e.title}>
            <span className='pg-year'>{e.year}</span>
            <span><strong>{e.title}</strong>, {e.by}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
