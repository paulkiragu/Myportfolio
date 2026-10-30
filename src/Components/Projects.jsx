import React from 'react';

const projects = [
  { title: 'Precision Farming', category: 'Agriculture and AI', url: 'https://precision-farming-ihij.onrender.com',
    text: 'An AI-powered system that recommends crops for a location using machine learning and real-time weather data.',
    tech: ['React', 'Python', 'FastAPI'] },
  { title: 'Afya Bora AI', category: 'Healthcare and AI', url: 'https://afyaboraai.vercel.app/',
    text: 'A community health monitoring system that alerts doctors and predicts emerging health issues.',
    tech: ['IoT', 'Machine Learning', 'Python', 'Flask', 'React', 'Vite'] },
  { title: 'Smart Waste Management System', category: 'Computer vision and IoT', url: 'https://garbage-nu.vercel.app/',
    text: 'Uses CCTV cameras and computer vision to spot accumulating waste, supporting cleaner and better monitored areas.',
    tech: ['Computer Vision', 'Python', 'Flask', 'React', 'Vite'] },
  { title: 'OrbitShop', category: 'E-commerce', url: 'https://orbitshop.co.ke',
    text: 'A full online store with product management, secure checkout, payments and order tracking.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'] },
  { title: 'ProWriter', category: 'Writing services', url: 'https://prowriter.me',
    text: 'A platform offering reliable, affordable, high-quality writing services to individuals and organizations.',
    tech: ['HTML', 'JavaScript', 'Express', 'MySQL'] },
  { title: 'Bylin', category: 'Event management', url: 'https://bylin.works/',
    text: 'A website for managing events and operations, built for a client.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'] },
];

const Projects = () => (
  <section className='pg' id='projects1'>
    <div className='pg-inner'>
      <h2>Projects</h2>
      <p className='pg-intro'>A selection of things I have built. Each one links to the live site.</p>

      <div className='pg-cards pg-cards-2'>
        {projects.map((p) => (
          <a key={p.title} className='pg-card pg-link' href={p.url} target='_blank' rel='noopener noreferrer'>
            <span className='pg-meta'>{p.category}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <span className='pg-tech'>{p.tech.join(' · ')}</span>
            <span className='pg-visit'>Visit site &#8599;</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
