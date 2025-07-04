import React from "react";
import "./About.css";
import aboutimg from "../../assets/about.webp";
import playicon from "../../assets/play-icon.png";

function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutimg} alt="" className="about-img" />
        <img
          src={playicon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>

      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>To plant a garden is to dream of tomorrow</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus atque,
          quibusdam libero illum accusantium, vel omnis voluptatem dolorem
          tempora sint harum laudantium minima incidunt enim eius reiciendis
          repellendus, delectus repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus atque,
          quibusdam libero illum accusantium, vel omnis voluptatem dolorem
          tempora sint harum laudantium minima incidunt enim eius reiciendis
          repellendus, delectus repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus atque,
          quibusdam libero illum accusantium, vel omnis voluptatem dolorem
          tempora sint harum laudantium minima incidunt enim eius reiciendis
          repellendus, delectus repudiandae!
        </p>
      </div>
    </div>
  );
}

export default About;
