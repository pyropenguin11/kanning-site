import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../../styles/utilities.css';
import '../../styles/shared.css';
const Footer = () => {
  return (
    <div className="footer">
        <div className="container flex">
            <div>
                <FontAwesomeIcon className="icon" icon={faUser} />
                Created By Nick Kanning 
            </div>
            <nav>
                <ul>
                    <li><a href="https://www.linkedin.com/in/nick-kanning">LinkedIn</a></li>
                    <li><a href="https://github.com/pyropenguin11">GitHub</a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Footer;
