import React, { useEffect, useState, useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    title: 'Web Development',
    description: 'Full-stack web applications built with modern technologies like React, Node.js, and cloud services. Scalable, secure, and performant solutions.',
    features: ['Responsive Design', 'API Integration', 'Database Management']
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality. Creating intuitive interfaces that users love to interact with.',
    features: ['Wireframing', 'Prototyping', 'User Research']
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that deliver native-like experiences. Built with React Native for iOS and Android.',
    features: ['Cross-Platform', 'Native Performance', 'App Store Ready']
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    title: 'Technical Consulting',
    description: 'Strategic technology guidance to help businesses make informed decisions. Architecture planning, code reviews, and best practices.',
    features: ['Tech Strategy', 'Code Review', 'Team Training']
  }
];

const Services = () => {
  const [visibleItems, setVisibleItems] = useState(Array(services.length).fill(false));
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
    <section className='services-section' id='services1'>
      <div className='services-container'>
        <span className='section-label'>What I Offer</span>
        <h2 className='services-title'>Services & Expertise</h2>
        <p className='services-subtitle'>
          Comprehensive digital solutions tailored to your business needs
        </p>
        
        <div className='services-grid'>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${visibleItems[index] ? 'visible' : ''}`}
              ref={el => itemRefs.current[index] = el}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className='service-icon'>{service.icon}</div>
              <h3 className='service-title'>{service.title}</h3>
              <p className='service-description'>{service.description}</p>
              <ul className='service-features'>
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
