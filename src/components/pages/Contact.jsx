import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import '../../styles/shared.css';
import '../../styles/contact.css';

const Contact = () => {
  const contactDetails = [
    { label: 'Location', value: 'Minneapolis, MN' },
    { label: 'Availability', value: 'Open to new conversations — please use the form to get in touch.' },
  ];

  return (
    <>
      <div className="wrapper">
        <Navbar/>
        <div className="main-container contact-page">
          <div className="content-container contact-content">
            <h1>Let’s connect</h1>
            <div className="contact-grid">
              <section className="contact-card contact-details">
                <h2>Open to new conversations</h2>
                <p>
                  Whether you have a question about recent work, want to compare notes on a project,
                  or just want to say hi, drop a line and I’ll respond as soon as I can.
                </p>
                <ul className="contact-info-list">
                  {contactDetails.map((detail) => (
                    <li key={detail.label}>
                      <span className="contact-info-label">{detail.label}</span>
                      {detail.href ? (
                        <a href={detail.href}>{detail.value}</a>
                      ) : (
                        <span>{detail.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="contact-card contact-form-card">
                <h2>Send a message</h2>
                <form
                  className="contact-form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden-field">
                    <label htmlFor="bot-field">Don’t fill this out if you’re human:</label>
                    <input id="bot-field" name="bot-field" />
                  </div>

                  <label className="contact-field">
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Jane Doe" required autoComplete="name" />
                  </label>
                  <label className="contact-field">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="jane@example.com" required autoComplete="email" />
                  </label>
                  <label className="contact-field">
                    <span>Message</span>
                    <textarea name="message" placeholder="Share a bit about what’s on your mind…" required rows="5" />
                  </label>
                  <button type="submit" className="contact-submit">Send message</button>
                </form>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
