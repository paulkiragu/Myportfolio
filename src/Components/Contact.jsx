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
            <input type='text' id='name' name='name' placeholder='Paul' required />

            <label htmlFor='email'>Your email</label>
            <input type='email' id='email' name='email' placeholder='Your email' required />

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
