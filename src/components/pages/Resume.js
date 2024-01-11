import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import '../../styles/shared.css';
const Resume = () => {
  return (
    <>
    <div className="wrapper">
      <Navbar/>
      <div className="main-container">
        <embed src='files/nick_kanning_resume.pdf' type='application/pdf' width='100%' height='100%'>
        </embed>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Resume;
