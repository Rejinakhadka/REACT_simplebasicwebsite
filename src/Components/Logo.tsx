import React from "react";
import layers from "../assets/images/layers.png";
import quotient from "../assets/images/quotient.png";
import sisyphus from "../assets/images/susyphus.png";
import hourglass from "../assets/images/hourglass.png";
import circooles from "../assets/images/circooles.png";
import "../Logo.css";

const LogoCarousel = () => {
  return (
    <div className="logo-container">
         <div className="arrow left-arrow">◀</div>
      <div className="logo-slide">
     
        <img src={layers} alt="Logo 1" />
      </div>
      <div className="logo-slide">
        <img src={quotient} alt="Logo 2" />
      </div>
      <div className="logo-slide">
        <img src={sisyphus} alt="Logo 3" />
      </div>
      <div className="logo-slide">
        <img src={hourglass} alt="Logo 4" />
      </div>
      <div className="logo-slide">
        <img src={circooles} alt="Logo 5" />
      </div>
      <div className="arrow right-arrow">▶</div>
    </div>
  );
};

export default LogoCarousel;
