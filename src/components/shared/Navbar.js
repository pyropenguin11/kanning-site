import React from 'react';
import '../../styles/utilities.css'
import '../../styles/styles.css';
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container flex">
            <a href="/"><h1>Nick Kanning </h1></a>
            <nav>
                <ul>
                    <li><a href ="/blog">Blog</a></li>
                    <li><a href ="/resume">Resume</a></li>
                    <li><a href ="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Navbar;
