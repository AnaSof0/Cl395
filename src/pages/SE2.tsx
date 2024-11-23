import React from 'react';
import bb1 from "../images/beauty/bb1.png";
import bb2 from "../images/beauty/bb2.png";
import bb3 from "../images/beauty/bb3.png";
import bb4 from "../images/beauty/bb4.png";
import bb5 from "../images/beauty/bb5.png";
import bb6 from "../images/beauty/bb6.png";
import bb7 from "../images/beauty/bb7.png";
import bb8 from "../images/beauty/bb8.png";
import bb9 from "../images/beauty/bb9.png";
import bb10 from "../images/beauty/bb10.png";
import bb11 from "../images/beauty/bb11.png";
import bb12 from "../images/beauty/bb12.png";
import bb13 from "../images/beauty/bb13.png";

import './SE2.css';

const SE2: React.FC = () => {
  // Array of image imports
  const images = [
    bb1, bb2, bb3, bb4, bb5, bb6, bb7, bb8, bb9, bb10, bb11, bb12, bb13
  ];

  return (
    <div className="essay-page">
      <h1>Beauty and the Beast</h1>
      <div className="content">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Beauty and the Beast ${index + 1}`} className="stacked-image" />
        ))}
      </div>
    </div>
  );
};

export default SE2;


