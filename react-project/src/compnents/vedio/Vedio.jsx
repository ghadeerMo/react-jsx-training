import React, { useRef } from "react";
import "./Vedio.css";
import video from "../../assets/video.mp4";

export default function Vedio({ playState, setPlayState }) {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}
