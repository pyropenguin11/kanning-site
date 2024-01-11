import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import '../../styles/shared.css';
import '../../styles/blog.css';

const Blog = () => {
  return (
    <>
    <div className="wrapper">
      <Navbar/>
      <div className="main-container">
        <h1>
          In Progress
        </h1>
      </div>
      <Footer />
    </div>
    </>   
  );
};

export default Blog;
