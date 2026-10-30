#!/usr/bin/env bash
# Option A v3: gives About, Projects, Services, Contact and Footer the same calm, plain
# style as the hero and "Where to start". Run AFTER optiona-v2-redesign.sh.
#   bash optiona-v3-sections.sh
# Undo with:  bash optiona-v3-sections.sh --undo
set -e

if [ ! -f package.json ] || [ ! -d src/Components ]; then
  echo "Run this from your project root (the folder with package.json and src/)."
  exit 1
fi

# ---------- UNDO ----------
if [ "$1" = "--undo" ]; then
  B=$(ls -d src/_optiona3_backup_* 2>/dev/null | tail -1)
  if [ -z "$B" ]; then echo "No v3 backup found."; exit 1; fi
  cp "$B"/main.jsx src/main.jsx
  cp "$B"/About.jsx "$B"/Projects.jsx "$B"/Services.jsx "$B"/Contact.jsx "$B"/Footer.jsx src/Components/
  rm -f src/academic3.css
  echo "Restored from $B"
  exit 0
fi

if [ ! -f src/academic2.css ]; then
  echo "Please run optiona-v2-redesign.sh first (it sets up the hero, menu and base styles)."
  exit 1
fi

# ---------- BACKUP ----------
TS=$(date +%Y%m%d_%H%M%S)
B="src/_optiona3_backup_$TS"
mkdir -p "$B"
cp src/main.jsx "$B"/
cp src/Components/About.jsx src/Components/Projects.jsx src/Components/Services.jsx src/Components/Contact.jsx src/Components/Footer.jsx "$B"/
echo "Backup saved in $B"

# ---------- load the new stylesheet last ----------
if ! grep -q "academic3.css" src/main.jsx; then
  sed -i "/academic2.css/a import './academic3.css'" src/main.jsx
fi

# ---------- About.jsx ----------
cat > src/Components/About.jsx << 'EOF'
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
EOF

# ---------- Projects.jsx ----------
cat > src/Components/Projects.jsx << 'EOF'
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
EOF

# ---------- Services.jsx ----------
cat > src/Components/Services.jsx << 'EOF'
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
EOF

# ---------- Contact.jsx (same form logic as before) ----------
cat > src/Components/Contact.jsx << 'EOF'
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(form);
    formData.append("access_key", "1daa90f9-b263-428e-bf6e-9df7ab76ea44");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        form.reset();
      } else {
        setResult(data.message || "An error occurred, please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='pg' id='contact1'>
      <div className='pg-inner'>
        <h2>Contact</h2>
        <p className='pg-intro'>
          Have a project in mind? Tell me about it and I will get back to you
          with how I would approach it.
        </p>

        <div className='pg-contact'>
          <dl className='pg-details'>
            <div><dt>Email</dt><dd><a href='mailto:paulkiragumburu@gmail.com'>paulkiragumburu@gmail.com</a></dd></div>
            <div><dt>Phone</dt><dd><a href='tel:+254798465147'>+254 798 465 147</a></dd></div>
            <div><dt>Location</dt><dd>Nairobi, Kenya</dd></div>
            <div>
              <dt>Elsewhere</dt>
              <dd>
                <a href='https://linkedin.com/in/paul-mburu-088264373' target='_blank' rel='noopener noreferrer'>LinkedIn &#8599;</a>
                {' '}
                <a href='https://github.com/paulkiragu' target='_blank' rel='noopener noreferrer'>GitHub &#8599;</a>
              </dd>
            </div>
          </dl>

          <form onSubmit={onSubmit} className='pg-form'>
            <label htmlFor='name'>Your name</label>
            <input type='text' id='name' name='name' placeholder='Jane Doe' required />

            <label htmlFor='email'>Your email</label>
            <input type='email' id='email' name='email' placeholder='jane@company.com' required />

            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' name='subject' placeholder='Project inquiry' />

            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows='5' placeholder='Tell me about your project...' required></textarea>

            <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send message'}</button>

            {result && (
              <p className={`pg-result ${result.includes('success') ? 'ok' : ''}`} role='status'>{result}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
EOF

# ---------- Footer.jsx ----------
cat > src/Components/Footer.jsx << 'EOF'
import React from 'react';

const Footer = () => (
  <footer className='pgf'>
    <div className='pgf-inner'>
      <div className='pgf-cols'>
        <div>
          <div className='pgf-logo'>Paul Mburu</div>
          <p>Full stack developer based in Kenya.</p>
          <a href='/Paul Mburu resume.pdf' download className='pgf-cv'>Download CV</a>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about1'>About</a></li>
            <li><a href='#projects1'>Projects</a></li>
            <li><a href='#services1'>Services</a></li>
            <li><a href='#contact1'>Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>paulkiragumburu@gmail.com</li>
            <li>+254 798 465 147</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <p className='pgf-copy'>&copy; {new Date().getFullYear()} Paul Mburu. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
EOF

# ---------- academic3.css ----------
cat > src/academic3.css << 'EOF'
/* Same calm style as the hero and "Where to start": plain cards, thin borders, serif headings. */
.academic .pg { padding: 72px 24px; border-top: 1px solid #DDE2EB; }
.academic .pg-inner { max-width: 1160px; margin: 0 auto; }
.academic .pg h2 { font-size: clamp(1.7rem, 3.4vw, 2.2rem); margin-bottom: 10px; text-align: left; }
.academic .pg-intro { color: var(--ink-2); font-size: 1.05rem; line-height: 1.7; max-width: 620px; margin-bottom: 32px; }
.academic .pg-sub { font-size: 1.35rem; margin: 48px 0 18px; }

/* Cards: identical to the "Where to start" cards */
.academic .pg-cards { display: grid; gap: 16px; }
.academic .pg-cards-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.academic .pg-cards-3 { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
.academic .pg-card {
  display: flex; flex-direction: column; gap: 8px; background: #fff;
  border: 1px solid #DDE2EB; border-radius: 6px; padding: 24px; text-decoration: none; color: inherit;
  transition: border-color 0.2s ease;
}
.academic .pg-link:hover { border-color: var(--ink); }
.academic .pg-card h3, .academic .pg-card h4 { font-family: var(--font-display); font-size: 1.25rem; color: var(--ink); font-weight: 600; }
.academic .pg-card p { color: var(--ink-2); font-size: 0.95rem; line-height: 1.65; }
.academic .pg-meta { font-size: 0.85rem; font-weight: 600; color: var(--gold-text); }
.academic .pg-tech { font-size: 0.85rem; color: #5A6678; margin-top: auto; padding-top: 6px; }
.academic .pg-visit { font-size: 0.9rem; font-weight: 600; color: var(--ink); }
.academic .pg-link:hover .pg-visit { text-decoration: underline; }

/* About */
.academic .pg-about { display: grid; grid-template-columns: minmax(0, 4fr) minmax(0, 8fr); gap: 48px; align-items: start; margin-top: 24px; }
.academic .pg-portrait { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; object-position: center top; border-radius: 6px; border: 1px solid #D5DCE8; display: block; }
.academic .pg-about-text p { font-size: 1.05rem; line-height: 1.8; color: var(--ink-2); max-width: 620px; margin-bottom: 16px; }
.academic .pg-rows { list-style: none; border-top: 1px solid #DDE2EB; }
.academic .pg-rows li { display: grid; grid-template-columns: 130px 1fr; gap: 16px; padding: 14px 0; border-bottom: 1px solid #DDE2EB; font-size: 0.98rem; }
.academic .pg-year { color: #5A6678; font-size: 0.9rem; }

/* Contact */
.academic .pg-contact { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 48px; align-items: start; }
.academic .pg-details { display: flex; flex-direction: column; gap: 20px; }
.academic .pg-details dt { font-size: 0.85rem; font-weight: 600; color: var(--gold-text); margin-bottom: 2px; }
.academic .pg-details dd { font-size: 1.02rem; color: var(--ink); }
.academic .pg-details a { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; margin-right: 14px; word-break: break-word; }
.academic .pg-details a:hover { color: var(--gold-text); }
.academic .pg-form { background: #fff; border: 1px solid #DDE2EB; border-radius: 6px; padding: 28px; display: flex; flex-direction: column; gap: 6px; }
.academic .pg-form label { font-size: 0.9rem; font-weight: 600; color: var(--ink); margin-top: 10px; }
.academic .pg-form input, .academic .pg-form textarea {
  font: inherit; font-size: 1rem; padding: 12px 14px; border: 1px solid #C9D1DE; border-radius: 6px;
  background: #fff; color: #1E2A3D; width: 100%; box-sizing: border-box;
}
.academic .pg-form input:focus, .academic .pg-form textarea:focus { outline: 2px solid var(--ink); outline-offset: 1px; border-color: var(--ink); }
.academic .pg-form button {
  margin-top: 18px; padding: 14px 26px; border-radius: 6px; border: 2px solid var(--ink);
  background: var(--ink); color: #fff; font: inherit; font-weight: 600; cursor: pointer; align-self: flex-start;
}
.academic .pg-form button:hover:not(:disabled) { background: #0F1D38; }
.academic .pg-form button:disabled { opacity: 0.6; cursor: not-allowed; }
.academic .pg-result { margin-top: 12px; font-size: 0.95rem; color: #9B2C2C; }
.academic .pg-result.ok { color: #1F6B3A; }

/* Footer */
.academic .pgf { background: #101E3A; color: #C5CFE2; padding: 56px 24px 28px; }
.academic .pgf-inner { max-width: 1160px; margin: 0 auto; }
.academic .pgf-cols { display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 40px; }
.academic .pgf-logo { font-family: var(--font-display); font-size: 1.5rem; color: #fff; font-weight: 700; margin-bottom: 10px; }
.academic .pgf p { font-size: 0.95rem; line-height: 1.6; }
.academic .pgf h4 { color: #fff; font-size: 1rem; font-family: var(--font-body); font-weight: 600; margin-bottom: 14px; }
.academic .pgf ul { list-style: none; display: flex; flex-direction: column; gap: 9px; font-size: 0.95rem; }
.academic .pgf a { color: #C5CFE2; text-decoration: none; }
.academic .pgf a:hover { color: #fff; text-decoration: underline; }
.academic .pgf-cv { display: inline-block; margin-top: 16px; padding: 10px 20px; border: 1px solid #5A6C92; border-radius: 6px; font-weight: 600; font-size: 0.9rem; }
.academic .pgf-copy { margin-top: 40px; padding-top: 20px; border-top: 1px solid #2A3A5E; font-size: 0.85rem; }

/* Tablet and phone */
@media (max-width: 800px) {
  .academic .pg { padding: 52px 20px; }
  .academic .pg-about, .academic .pg-contact { grid-template-columns: 1fr; gap: 28px; }
  .academic .pg-portrait { max-width: 420px; aspect-ratio: 4 / 3; }
  .academic .pg-rows li { grid-template-columns: 1fr; gap: 2px; }
  .academic .pgf-cols { grid-template-columns: 1fr; gap: 28px; }
  .academic .pg-form { padding: 20px; }
}
@media (max-width: 480px) {
  .academic .pg-cards-2, .academic .pg-cards-3 { grid-template-columns: 1fr; }
  .academic .pg-form button { align-self: stretch; }
}
EOF

echo ""
echo "Done. Now run:"
echo "  npm run dev"
echo "To undo this step:  bash optiona-v3-sections.sh --undo"
