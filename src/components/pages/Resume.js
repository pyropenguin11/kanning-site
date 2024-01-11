import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Resume = () => {
  return (
    <>
      <Navbar/>
      <div className="main-container">
        <embed src='files/nick_kanning_resume.pdf' type='application/pdf' width='100%' height='100%'>

        </embed>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
