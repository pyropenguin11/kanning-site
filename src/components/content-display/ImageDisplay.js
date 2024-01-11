import React from 'react';
import '../../styles/components/imageDisplay.css';
const ImageDisplay = ({name, format}) => {
  const imagePath = `images/${name}.${format}`;

  return (
    <div
      className="imageDisplayContainer">
      <img 
        src={imagePath}
        className="imageDisplayImage"
      />
    </div>
  );
};

export default ImageDisplay;
