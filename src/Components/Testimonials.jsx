import React, { useState } from 'react';
import './theme.css';
import './Testimonials.css';

const testimonials = [
  {
    name: "James Mwangi",
    role: "CEO, TechStart Kenya",
    content: "Paul delivered our e-commerce platform ahead of schedule with exceptional quality. His attention to detail and proactive communication made the entire process smooth. Highly recommended!",
    rating: 5
  },
  {
    name: "Sarah Ochieng",
    role: "Product Manager, EduTech Solutions",
    content: "Working with Paul on our LMS was a fantastic experience. He understood our complex requirements and translated them into an intuitive, user-friendly platform that our students love.",
    rating: 5
  },
  {
    name: "Michael Kiprotich",
    role: "Director, AgriInnovate",
    content: "The AI crop recommendation system Paul built has transformed how our farmers make decisions. His innovative approach and technical expertise exceeded our expectations.",
    rating: 5
  }
];

const pad = (n) => String(n).padStart(2, '0');

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[activeIndex];

  const next = () => setActiveIndex((p) => (p + 1) % total);
  const prev = () => setActiveIndex((p) => (p - 1 + total) % total);

  return (
    <section className='testimonials-section' id='testimonials1'>
      <div className='testimonials-container'>
        <div className='eyebrow'>(04) Kind words</div>

        <div className='t-grid'>
          <h2 className='t-title'>
            What clients <em>say</em> after the launch.
          </h2>

          <div className='t-stage' key={activeIndex}>
            <span className='t-mark' aria-hidden='true'>&ldquo;</span>
            <blockquote className='t-quote'>{t.content}</blockquote>

            <div className='t-author'>
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
              <span className='t-rating'>{t.rating}/5</span>
            </div>
          </div>
        </div>

        <div className='t-controls'>
          <span className='t-count'>
            {pad(activeIndex + 1)} <i>/</i> {pad(total)}
          </span>
          <div className='t-buttons'>
            <button onClick={prev} aria-label='Previous testimonial'>&larr;</button>
            <button onClick={next} aria-label='Next testimonial'>&rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
