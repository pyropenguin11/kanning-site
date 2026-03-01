import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/utilities.css';
import '../../styles/shared.css';
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container flex">
            <Link to="/"><h1>Nick Kanning </h1></Link>
            <nav>
                <ul>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Navbar;
