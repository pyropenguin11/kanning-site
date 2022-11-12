import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import '../../styles/home.css';
import '../../styles/shared.css';
const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="home-container">
        <div className="panel">
          Blorp
        </div>
        <div className="panel">
          Blorp
        </div>
      </div>
      <Footer />
    </>
  );

};

export default Home;
