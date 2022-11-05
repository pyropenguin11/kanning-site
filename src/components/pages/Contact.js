import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import '../../styles/shared.css';
import '../../styles/contact.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className="body">
        <div className="main-body center">
          <h3>Contact Me! </h3>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <input type="hidden" name="form-name" value="contact" />
            </p>
            <p>
              <input type="text" name="name" placeholder="Name" required></input>
            </p>
            <p>
              <input type="email" name="email" placeholder="Email" required></input>
            </p>
            <p>
              <textarea name="message" placeholder="Message" required></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
