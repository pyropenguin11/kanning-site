import React from 'react';
import '../../styles/components/imageDisplay.css';
const ImageDisplay = ({name, format}) => {
  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/';
  const imagePath = `${baseUrl}images/${name}.${format}`;

  return (
    <div
      className="imageDisplayContainer">
      <img 
        src={imagePath}
        alt={`${name}`}
        className="imageDisplayImage"
      />
    </div>
  );
};

export default ImageDisplay;
