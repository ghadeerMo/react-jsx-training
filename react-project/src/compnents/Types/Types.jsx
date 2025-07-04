import React from "react";
import "./Type.css";
import indoor from "../../assets/type-1.webp";
import outdoor from "../../assets/type-2.jpg";
import f from "../../assets/type-3.jpg";
import planticom from "../../assets/plant-icon.png";

function Types() {
  return (
    <div className="types">
      <div className="type">
        <img src={indoor} alt="" />
        <div className="caption">
          <img src={planticom} alt="" />
          <p>Indoor Plants</p>
        </div>
      </div>

      <div className="type">
        <img src={outdoor} alt="" />
        <div className="caption">
          <img src={planticom} alt="" />
          <p>Outdoor Plants</p>
        </div>
      </div>

      <div className="type">
        <img src={f} alt="" />
        <div className="caption">
          <img src={planticom} alt="" />
          <p>Fertilizer</p>
        </div>
      </div>
    </div>
  );
}

export default Types;
