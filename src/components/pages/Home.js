import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import ContentCard from '../content-display/ContentCard';
import '../../styles/shared.css';
const Home = () => {
  const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu orci eget dolor ultrices tincidunt vitae non ex. Donec malesuada lacus enim, et cursus est egestas vitae. Vivamus sodales neque.';
  const cards = [
    {
      imageName: "homer",
      imageFormat: "png",
      text: loremIpsumText,
      imageSide: "left"
    },
    {
      imageName: "homer",
      imageFormat: "png",
      text: loremIpsumText,
      imageSide: "right"
    },
    {
      imageName: "homer",
      imageFormat: "png",
      text: loremIpsumText,
      imageSide: "left"
    },
    {
      imageName: "homer",
      imageFormat: "png",
      text: loremIpsumText,
      imageSide: "right"
    }
  ];
  return (
    <>
      <Navbar/>
      <div className="main-container">
        <div className="content-container">
        <h1>
          Welcome to my website!
        </h1>
        <div>
          {cards.map((c) => {
            return (
              <ContentCard
                imageName={c.imageName}
                imageFormat={c.imageFormat}
                text={c.text}
                imageSide={c.imageSide}
              />
            );
          })}
        </div>
        </div>
      </div>
      <Footer />
    </>
  );

};

export default Home;
