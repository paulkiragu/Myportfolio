import React, { useState } from 'react';
import './theme.css';
import './Contact.css';

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
    <section className='contact-section' id='contact1'>
      <div className='contact-container'>
        <div className='eyebrow contact-eyebrow'>(04) Contact</div>

        <div className='contact-grid'>
          <div className='contact-info'>
            <h2 className='contact-title'>
              Let's work <em>together.</em>
            </h2>
            <p className='contact-description'>
              Have a project in mind? Tell me about it and I'll get back to you
              with how I'd approach it.
            </p>

            <dl className='contact-details'>
              <div>
                <dt>Email</dt>
                <dd><a href='mailto:paulkiragumburu@gmail.com'>paulkiragumburu@gmail.com</a></dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd><a href='tel:+254798465147'>+254 798 465 147</a></dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Nairobi, Kenya</dd>
              </div>
              <div>
                <dt>Elsewhere</dt>
                <dd className='social-links'>
                  <a href='https://linkedin.com/in/paul-mburu-088264373' target='_blank' rel='noopener noreferrer'>LinkedIn &#8599;</a>
                  <a href='https://github.com/paulkiragu' target='_blank' rel='noopener noreferrer'>GitHub &#8599;</a>
                </dd>
              </div>
            </dl>
          </div>

          <form onSubmit={onSubmit} className='contact-form'>
            <div className='form-group'>
              <label htmlFor='name'>01 &mdash; Your name</label>
              <input type='text' id='name' name='name' placeholder='Enter name' required />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>02 &mdash; Your email</label>
              <input type='email' id='email' name='email' placeholder='Enter email' required />
            </div>

            <div className='form-group'>
              <label htmlFor='subject'>03 &mdash; Subject</label>
              <input type='text' id='subject' name='subject' placeholder='Project inquiry' />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>04 &mdash; Message</label>
              <textarea id='message' name='message' rows='4' placeholder='Tell me about your project...' required></textarea>
            </div>

            <button type='submit' className='submit-btn' disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
              <span aria-hidden='true'>&rarr;</span>
            </button>

            {result && (
              <div className={`form-result ${result.includes('success') ? 'success' : ''}`} role='status'>
                {result}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
