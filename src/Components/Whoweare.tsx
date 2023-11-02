import React from "react";
import "../whoweare.css";
import capguy from "../assets/images/capguy.png";
import cap2guy from "../assets/images/cap2guy.png";
import chefgirl from "../assets/images/chefgirl.png";
import hijabgirl from "../assets/images/hijabgirl.png";

const Whoweare = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>Who We Are</h2>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum quaerat numquam ipsam maiores dolorum velit laudantium reiciendis debitis. Doloribus incidunt officiis tempore at iure assumenda voluptatum. Obcaecati, temporibus perspiciatis?
        </div>
      </div>
      <div className="image-column1">
      <div className="image1">
  <img src={capguy} alt="Campaign 1" />
  <h3>Adriana Homolova</h3>
</div>
<div className="image2">
  <img src={cap2guy} alt="Campaign 2" />
  <h3>Karolis Granickas</h3>
  </div>
</div>
<div className="image-column2">
<div className="image3">
  <img src={chefgirl} alt="Campaign 3" />
  <h3>Sandor Lederer</h3>
</div>
<div className="image4">
  <img src={hijabgirl} alt="Campaign 4" />
  
</div>
</div>
</div>
  );
};

export default Whoweare;
