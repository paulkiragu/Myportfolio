import React, { useState } from 'react';
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

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className='testimonials-section' id='testimonials1'>
      <div className='testimonials-container'>
        <span className='section-label'>Testimonials</span>
        <h2 className='testimonials-title'>What Clients Say</h2>
        <p className='testimonials-subtitle'>
          Feedback from businesses I've had the pleasure of working with
        </p>

        <div className='testimonials-wrapper'>
          <button className='testimonial-nav prev' onClick={prevTestimonial} aria-label="Previous testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className='testimonial-card'>
            <div className='quote-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
              </svg>
            </div>
            
            <div className='rating'>
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>

            <p className='testimonial-content'>{testimonials[activeIndex].content}</p>
            
            <div className='testimonial-author'>
              <div className='author-avatar'>
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div className='author-info'>
                <h4>{testimonials[activeIndex].name}</h4>
                <p>{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <button className='testimonial-nav next' onClick={nextTestimonial} aria-label="Next testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className='testimonial-dots'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
