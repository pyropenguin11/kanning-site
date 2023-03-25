import React from 'react';
import '../../styles/utilities.css';
import '../../styles/shared.css';
const ContentCard = () => {
  return (
    <div className="footer">
        <div className="container flex">
            <div>
                <FontAwesomeIcon className="icon" icon={faUser} />
                Created By Nick Kanning 
            </div>

        </div>
    </div>
  );
};

export default ContentCard;
