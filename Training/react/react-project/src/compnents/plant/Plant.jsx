import React from "react";
import "./Plant.css";
import plant1 from "../../assets/plant-1.webp";
import plant2 from "../../assets/plant-2.jpg";
import plant3 from "../../assets/plant-3.webp";
import plant4 from "../../assets/plant-4.jpg";
import arrow from "../../assets/arrow.jpg";

function Plant() {
  return (
    <div className="plant">
      <div className="gallery">
        <img src={plant1} alt="" />
        <img src={plant2} alt="" />
        <img src={plant3} alt="" />
        <img src={plant4} alt="" />
      </div>
      <button className="btn">
        See more <img src={arrow} alt="" />
      </button>
    </div>
  );
}

export default Plant;
