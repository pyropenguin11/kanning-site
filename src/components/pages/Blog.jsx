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
        <div className="main-container blog-page">
          <div className="content-container blog-content">
            <header className="blog-hero">
              <span className="blog-hero-kicker">Blog</span>
              <h1>Coming soon</h1>
            </header>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
