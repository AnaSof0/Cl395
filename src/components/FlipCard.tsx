import React from 'react';
import './FlipCard.css';

interface FlipCardProps {
  frontImage: string; // URL or path to the front image
  backImage: string;  // URL or path to the back image
}

const FlipCard: React.FC<FlipCardProps> = ({ frontImage, backImage }) => {
  return (
    <div className="flip-container">
      <div className="flip-card">
        <div
          className="flip-card-front"
          style={{ backgroundImage: `url(${frontImage})` }}
        ></div>
        <div
          className="flip-card-back"
          style={{ backgroundImage: `url(${backImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default FlipCard;
