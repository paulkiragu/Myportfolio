import React, { useEffect, useState, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Precision Farming",
    category: "AgriTech / AI",
    description: "AI powered precision agriculture system for location-based intelligent crop recommendation using machine learning and real-time weather analytics.",
    tech: ["React", "Python", "FastAPI"],
    liveUrl: "https://precision-farming-ihij.onrender.com",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Afya Bora AI",
    category: "AI / Healthcare",
    description: "Community health monitoring system that provides alerts and prediction to doctors on arising health issues.",
    tech: ["IoT", "Machine Learning", "Python", "Flask", "React", "Vite"],
    liveUrl: "https://afyaboraai.vercel.app/",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Smart Waste Management System",
    category: "Computer Vision / IoT",
    description: "Uses computer vision to detect accumulating waste using CCTV cameras, enabling efficient waste management and environmental monitoring.",
    tech: ["Computer Vision", "Python", "Flask", "React", "Vite"],
    liveUrl: "https://garbage-nu.vercel.app/",
    githubUrl: "#",
    featured: true
  },
  {
    title: "OrbitShop",
    category: "E-Commerce",
    description: "A full-featured e-commerce platform with product management, secure checkout, payment integration, and order tracking. Built for seamless online shopping experience.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://orbitshop.co.ke",
    githubUrl: "#",
    featured: true
  },
  {
    title: "ProWriter",
    category: "Writing Services",
    description: "A platform empowering individuals and organizations with reliable, affordable, and high-quality writing services. Every word crafted to help clients succeed in their goals.",
    tech: ["HTML", "JavaScript", "Express", "MySQL"],
    liveUrl: "https://prowriter.me",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Bylin",
    category: "Event Management",
    description: "Event and management organisation website created for a client. A comprehensive platform for managing events and organizational operations.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://bylin.works/",
    githubUrl: "#",
    featured: true
  }
];

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(Array(projects.length).fill(false));
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const updatedVisibleItems = [...visibleItems];

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
            updatedVisibleItems[index] = true;
          }
        }
      });

      setVisibleItems(updatedVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems]);

  return (
    <section className='projects-section' id='projects1'>
      <div className='projects-container'>
        <h2 className='projects-title'>Featured Projects</h2>
        <p className='projects-subtitle'>
          A selection of my recent work showcasing expertise in full-stack development
        </p>
        
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${visibleItems[index] ? 'visible' : ''} ${project.featured ? 'featured' : ''}`}
              ref={el => itemRefs.current[index] = el}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className='project-header'>
                <span className='project-category'>{project.category}</span>
                <div className='project-links'>
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='project-link' title="Live Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='project-link' title="View Code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              
              <div className='project-tech'>
                {project.tech.map((tech, i) => (
                  <span key={i} className='tech-tag'>{tech}</span>
                ))}
              </div>
              
              {project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='project-cta'>
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
