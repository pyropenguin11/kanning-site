import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import '../../styles/shared.css';
import '../../styles/contact.css';

const Contact = () => {
  return (
    <>
      <div className="wrapper">
        <Navbar/>
        <div className="main-container contact-page">
          <div className="content-container contact-content">
            <h1>Let’s connect</h1>
            <div className="contact-grid">
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
                    <input type="text" name="name" required autoComplete="name" />
                  </label>
                  <label className="contact-field">
                    <span>Email</span>
                    <input type="email" name="email" required autoComplete="email" />
                  </label>
                  <label className="contact-field">
                    <span>Message</span>
                    <textarea name="message" required rows="5" />
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
