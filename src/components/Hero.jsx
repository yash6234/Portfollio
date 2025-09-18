import React from "react";
import resumePdf from "../assets/yashresume1.pdf";
import ImageWithBackground from "./ImageWithBackground.jsx";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container row" style={{ alignItems: "center" }}>
        <div className="left">
          <div className="kicker" style={{ marginBottom: 12 }}>
            <div className="dot" />
            <span>Hello</span>
          </div>
          <h1 className="title-xl" style={{ marginTop: 0 }}>
            I’m Yash Patel
          </h1>
          <div className="title-xl" style={{ fontWeight: 800 }}>
            Web Developer
          </div>
          <p className="title-sub">
            Passionate about building modern, responsive websites using React
            and MERN stack.
          </p>
          <div className="actions" style={{ marginTop: 24 }}>
            {/* <a className="btn btn-primary" href="#contact">
              Got a project?
            </a> */}
            <a
              className="btn btn-outline"
              href={resumePdf}
              target="_blank"
              rel="noopener"
            >
              My resume
            </a>
          </div>
        </div>
        <div className="right">
          <ImageWithBackground />
        </div>
      </div>
    </section>
  );
}
