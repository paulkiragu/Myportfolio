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
