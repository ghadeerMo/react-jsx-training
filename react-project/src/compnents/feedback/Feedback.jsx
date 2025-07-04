import React, { useRef } from "react";
import "./Feedback.css";
import next_arrow from "../../assets/next-arrow.png";
import back_arrow from "../../assets/back-arrow.png";
import user_icon from "../../assets/user-logo.png";

function Feedback() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };

  return (
    <div className="feedback">
      <img
        src={next_arrow}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_arrow}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_icon} alt="" />
                <div>
                  <h3>User Name</h3>
                  <p>Saudi Arabia</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                animi necessitatibus blanditiis corporis temporibus possimus
                voluptatem laudantium, incidunt voluptat
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_icon} alt="" />
                <div>
                  <h3>User Name</h3>
                  <p>Saudi Arabia</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                animi necessitatibus blanditiis corporis temporibus possimus
                voluptatem laudantium, incidunt voluptat
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_icon} alt="" />
                <div>
                  <h3>User Name</h3>
                  <p>Saudi Arabia</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                animi necessitatibus blanditiis corporis temporibus possimus
                voluptatem laudantium, incidunt voluptat
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_icon} alt="" />
                <div>
                  <h3>User Name</h3>
                  <p>Saudi Arabia</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                animi necessitatibus blanditiis corporis temporibus possimus
                voluptatem laudantium, incidunt voluptat
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Feedback;
