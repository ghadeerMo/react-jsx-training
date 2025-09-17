import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.jpg";

function Hero() {
  return (
    <div className="hero container">
      <div className="h-text">
        <h1>All you Need is a Plant Therapy</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          saepe, dolor deleniti doloribus sequi quam assumenda vero
          reprehenderit quibusdam tempora voluptate laudantium nisi deserunt,
          harum ut culpa expedita est molestiae.
        </p>
        <button className="btn">
          Explore more <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
