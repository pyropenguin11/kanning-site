import React from 'react';
import '../../styles/components/cardText.css';
const CardText = ({text}) => {

    return (
        <div className="text-container">
            <p>{text}</p>
        </div>

    );
}

export default CardText;