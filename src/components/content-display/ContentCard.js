import React from 'react';
import '../../styles/components/contentCard.css';
import CardText from './CardText';
import ImageDisplay from './ImageDisplay';
const ContentCard = ({text, imageName, imageFormat}) => {
  return (
    <div className="content-card">
      <div className="image">
        <ImageDisplay
          name={imageName}
          format={imageFormat}
        />
      </div>
      <div className="inner-text">
        <CardText
          text={text}
        />
      </div>
    </div>
  );
};

export default ContentCard;
