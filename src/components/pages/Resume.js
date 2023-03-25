import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import ImageDisplay from '../resumePage/imageDisplay';
import '../../styles/resume.css';

const Resume = () => {
  return (
    <>
      <Navbar/>
      <div className="main-body">
        <ImageDisplay
          name="homer"
          format="png"
        />
      </div>
      <Footer />
    </>
  );
};

export default Resume;
