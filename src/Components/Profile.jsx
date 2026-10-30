import React from 'react';

const projects = [
  { title: 'Precision Farming', category: 'AgriTech / AI', url: 'https://precision-farming-ihij.onrender.com',
    text: 'AI-powered precision agriculture for location-based crop recommendation using machine learning and real-time weather analytics.',
    tech: ['React', 'Python', 'FastAPI'] },
  { title: 'Afya Bora AI', category: 'AI / Healthcare', url: 'https://afyaboraai.vercel.app/',
    text: 'Community health monitoring that alerts doctors and predicts emerging health issues.',
    tech: ['IoT', 'Machine Learning', 'Python', 'Flask', 'React', 'Vite'] },
  { title: 'Smart Waste Management System', category: 'Computer Vision / IoT', url: 'https://garbage-nu.vercel.app/',
    text: 'Detects accumulating waste from CCTV cameras for efficient waste management and environmental monitoring.',
    tech: ['Computer Vision', 'Python', 'Flask', 'React', 'Vite'] },
  { title: 'OrbitShop', category: 'E-Commerce', url: 'https://orbitshop.co.ke',
    text: 'Full e-commerce platform with product management, secure checkout, payments and order tracking.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'] },
  { title: 'ProWriter', category: 'Writing Services', url: 'https://prowriter.me',
    text: 'A platform offering reliable, affordable, high-quality writing services to individuals and organizations.',
    tech: ['HTML', 'JavaScript', 'Express', 'MySQL'] },
  { title: 'Bylin', category: 'Event Management', url: 'https://bylin.works/',
    text: 'Event and organization management website built for a client.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'] },
];

const skills = [
  { label: 'Frontend', items: ['React.js', 'UI/UX Design'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'Python', 'API Integration'] },
  { label: 'AI / ML', items: ['Machine Learning'] },
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

const Profile = () => (
  <>
    <section id='about' className='optb-section'>
      <div className='optb-label'>About</div>
      <h2 className='optb-hero-title'>Full stack developer, curious about AI.</h2>
      <p className='optb-lead'>
        I build web applications with React, Node.js, Python and machine learning,
        aiming for things that are fast, maintainable and useful to the people using them.
      </p>
      <p className='optb-lead'>
        From e-commerce platforms with M-Pesa payments to AI-powered recommendation
        systems, I take a project from the first sketch to a deployed product.
      </p>
    </section>

    <section id='projects' className='optb-section'>
      <div className='optb-label'>Selected Projects</div>
      <div className='optb-list'>
        {projects.map((p, i) => (
          <a key={p.title} className='optb-project' href={p.url} target='_blank' rel='noopener noreferrer'>
            <span className='optb-num'>0{i + 1}</span>
            <span>
              <span className='optb-ptitle'>{p.title} <i aria-hidden='true'>&#8599;</i></span>
              <span className='optb-cat'>{p.category}</span>
              <span className='optb-ptext'>{p.text}</span>
              <span className='optb-tech'>{p.tech.join(' · ')}</span>
            </span>
          </a>
        ))}
      </div>
    </section>

    <section id='skills' className='optb-section'>
      <div className='optb-label'>Skills</div>
      <div className='optb-skills'>
        {skills.map((g) => (
          <div key={g.label} className='optb-skillbox'>
            <h3>{g.label}</h3>
            <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>

    <section id='education' className='optb-section'>
      <div className='optb-label'>Education &amp; Certifications</div>
      <div className='optb-list'>
        {education.map((e) => (
          <div key={e.title} className='optb-edu-row'>
            <span className='optb-year'>{e.year}</span>
            <span><strong>{e.title}</strong> <em>&middot; {e.by}</em></span>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Profile;
