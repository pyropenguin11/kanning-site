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
        <h3>Contact me! </h3>
          <div className="main-body">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="name" placeholder="Name" required></input>
              <input type="email" name="email" placeholder="Email" required></input>
              <textarea name="message" placeholder="Message" required></textarea>
              <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
