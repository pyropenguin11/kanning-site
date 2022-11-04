import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import '../../styles/shared.css';
import '../../styles/contact.css';

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className="body">
        <h3>Contact me! </h3>
          <div className="main-body">
          <form>
            <div>
              <input type="text" name="name" placeholder="Name" required></input>
            </div>
            <div>
              <input type="text" name="email" placeholder="Email" required></input>
            </div>
            <div>
              <input type="text" name="subject" placeholder="Subject" required></input>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
