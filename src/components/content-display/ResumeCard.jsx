import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/components/resumeCard.css';

const ResumeCard = ({header, icon, fragment}) => {
  return (
    <div className="resume-card">
      <div className="resume-card-header">
        <FontAwesomeIcon icon={icon} />
        <h2>{header}</h2>
      </div>
      <div className="inner-text">
        {fragment}
      </div>
    </div>
  );
};

export default ResumeCard;
