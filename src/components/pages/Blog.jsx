import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import '../../styles/shared.css';
import '../../styles/blog.css';

const Blog = () => {
  const placeholderParagraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi ligula, tristique eu cursus non, suscipit in ipsum. Etiam nec mauris vitae augue fringilla rhoncus. Donec ut urna erat. Sed euismod tellus ut feugiat vulputate. Integer bibendum velit at lorem efficitur, sed elementum tellus rhoncus.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id justo eget nulla hendrerit ornare. Integer in luctus neque. Nulla euismod, tellus non fermentum aliquet, libero lorem vestibulum nibh, eget consectetur arcu urna in erat.',
    'Morbi porta, ipsum nec volutpat lobortis, dui tortor vehicula purus, vitae faucibus lacus mauris et magna. In sit amet dignissim ipsum, non posuere felis. Praesent tempor, metus id rutrum egestas, elit risus tristique ligula, et vehicula massa orci ac ipsum.',
  ];

  const placeholderList = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  ];

  return (
    <>
      <div className="wrapper">
        <Navbar/>
        <div className="main-container blog-page">
          <div className="content-container blog-content">
            <header className="blog-hero">
              <span className="blog-hero-kicker">Blog</span>
              <h1>Updates coming soon</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus at ante interdum laoreet.
                Nulla facilisi. Integer sed elit nec odio malesuada scelerisque sit amet in leo.
              </p>
            </header>

            <section className="blog-placeholder">
              {placeholderParagraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <div className="blog-placeholder-card">
                <h2>In the meantime</h2>
                <ul>
                  {placeholderList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
