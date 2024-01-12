import React from 'react';
import '../../styles/components/contentCard.css';
import CardText from './CardText';
import ImageDisplay from './ImageDisplay';
const ContentCard = ({text, imageName, imageFormat, imageSide}) => {
  return (
    <div className="content-card">
      {imageSide === 'left' &&
      (<div className="image left-image">
        <ImageDisplay
          name={imageName}
          format={imageFormat}
        />
      </div>
      )}
      <div className="inner-text">
        <CardText
          text={text}
        />
      </div>
      {imageSide === 'right' &&
      (<div className="image right-image">
        <ImageDisplay
          name={imageName}
          format={imageFormat}
        />
      </div>
      )}
    </div>
  );
};

export default ContentCard;
