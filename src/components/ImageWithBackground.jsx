import React from "react";
import "./ImageWithBackground.css";
import profileImg from "../assets/ig.jpeg";

function ImageWithBackground() {
  return (
    <div className="imgbg-container" aria-label="Hero portrait">
      <div className="imgbg-image-container">
        <img className="imgbg-profile-image" src={profileImg} alt="Profile" />
      </div>
      <div className="imgbg-background-circle" />
      <div className="imgbg-arrows" aria-hidden>
        {/* <span className="imgbg-left-arrow">&lt;</span>
        <span className="imgbg-right-arrow">&gt;</span> */}
      </div>
    </div>
  );
}
export default ImageWithBackground;
