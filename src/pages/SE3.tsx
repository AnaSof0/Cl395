import React from 'react';
import './SE2.css';
import h1 from "../images/high/h1.png";
import h2 from "../images/high/h2.png";
import h3 from "../images/high/h3.png";
import h4 from "../images/high/h4.png";
import h5 from "../images/high/h5.png";
import h6 from "../images/high/h6.png";
import h7 from "../images/high/h7.png";
import h8 from "../images/high/h8.png";

const SE3: React.FC = () => {
  // Array of image imports
  const images = [
    h1, h2, h3, h4, h5, h6, h7, h8
  ];

  return (
    <div className="essay-page">
      <h1>High Life</h1>
      <div className="content">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Beauty and the Beast ${index + 1}`} className="stacked-image" />
        ))}
      </div>
    </div>
  );
};

export default SE3;