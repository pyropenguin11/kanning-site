import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import ContentCard from '../content-display/ContentCard';
import '../../styles/shared.css';
const Home = () => {
  const cards = [
    {
      imageName: "homer",
      imageFormat: "png",
      imageAlt: "Portrait of Homer Simpson",
      text: 'My name is Nick. I created this website to share more about my professional background and personal interests.',
      imageSide: "left"
    },
    {
      imageName: "umn",
      imageFormat: "png",
      imageAlt: "University of Minnesota logo",
      text: 'Most of my work is with C#/.NET in the Microsoft ecosystem. My educational background is in computer science, with an emphasis on networking and software design.',
      imageSide: "right"
    },
    {
      imageName: "biking",
      imageFormat: "avif",
      imageAlt: "Cycling-themed photo",
      text: 'Outside of work, my favorite activities are running, biking, reading books, and following international soccer.',
      imageSide: "left"
    },
    {
      imageName: "heat",
      imageFormat: "jpg",
      imageAlt: "Poster art for the film Heat",
      text: 'My favorite movie is the 1995 action-thriller Heat, starring Al Pacino, Robert De Niro, and Val Kilmer. I appreciate how the film portrays a truly kaleidoscopic view of the human experience.',
      imageSide: "right"
    }
  ];
  return (
    <>
      <div className="wrapper">
      <Navbar/>
      <div className="main-container">
        <div className="content-container">
        <h1>Welcome to my website!</h1>
        <div className="cards-container">
          {cards.map((c, index) => {
            return (
              <ContentCard
                key={`${c.imageSide}-${index}`}
                imageName={c.imageName}
                imageFormat={c.imageFormat}
                imageAlt={c.imageAlt}
                text={c.text}
                imageSide={c.imageSide}
              />
            );
          })}
        </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );

};

export default Home;
