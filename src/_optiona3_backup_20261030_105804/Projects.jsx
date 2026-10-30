import React from 'react';
import useReveal from './useReveal';
import './theme.css';
import './Projects.css';

const projects = [
  {
    title: 'Precision Farming',
    category: 'AgriTech / AI',
    description:
      'AI-powered precision agriculture that recommends crops by location, using machine learning and real-time weather analytics.',
    tech: ['React', 'Python', 'FastAPI'],
    liveUrl: 'https://precision-farming-ihij.onrender.com',
  },
  {
    title: 'Afya Bora AI',
    category: 'AI / Healthcare',
    description:
      'Community health monitoring that alerts doctors to emerging health issues and predicts where attention is needed next.',
    tech: ['IoT', 'Machine Learning', 'Python', 'Flask', 'React'],
    liveUrl: 'https://afyaboraai.vercel.app/',
  },
  {
    title: 'Smart Waste Management',
    category: 'Computer Vision / IoT',
    description:
      'Computer vision on CCTV feeds spots accumulating waste, so collection and environmental monitoring can be far more efficient.',
    tech: ['Computer Vision', 'Python', 'Flask', 'React'],
    liveUrl: 'https://garbage-nu.vercel.app/',
  },
  {
    title: 'OrbitShop',
    category: 'E-Commerce',
    description:
      'A full e-commerce platform: product management, secure checkout, payment integration and order tracking.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveUrl: 'https://orbitshop.co.ke',
  },
  {
    title: 'ProWriter',
    category: 'Writing Services',
    description:
      'A platform offering reliable, affordable and high-quality writing services to individuals and organisations.',
    tech: ['HTML', 'JavaScript', 'Express', 'MySQL'],
    liveUrl: 'https://prowriter.me',
  },
  {
    title: 'Bylin',
    category: 'Event Management',
    description:
      'Website for an events and management organisation, built for a client to run their events and day-to-day operations.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveUrl: 'https://bylin.works/',
  },
];

const pad = (n) => String(n).padStart(2, '0');

const Projects = () => {
  const rootRef = useReveal();

  return (
    <section className='projects-section' id='projects1' ref={rootRef}>
      <div className='projects-container'>
        <div className='eyebrow reveal'>(02) Selected work</div>

        <header className='projects-head reveal'>
          <h2 className='projects-title'>
            Things I've built, <em>and shipped.</em>
          </h2>
          <p className='projects-subtitle'>
            Every one of these is live. Click through and have a poke around.
          </p>
        </header>

        <ul className='projects-grid'>
          {projects.map((p, i) => (
            <li key={p.title} className='project-card reveal'>
              <div className='project-top'>
                <span className='project-num'>{pad(i + 1)}</span>
                <span className='project-category'>{p.category}</span>
              </div>

              <div className='project-head'>
                <h3 className='project-title'>
                  <a
                    href={p.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${p.title} (opens in a new tab)`}
                  >
                    {p.title}
                  </a>
                </h3>
                <span className='project-arrow' aria-hidden='true'>&#8599;</span>
              </div>

              <p className='project-description'>{p.description}</p>

              <ul className='project-tech' aria-label='Built with'>
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
