import React from "react";
import resumePdf from "../assets/PatelYashResume.pdf";
import ssitLogo from "../assets/image copy 3.png";
import gpgLogo from "../assets/image copy 2.png";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="edu-card">
          <div className="edu-list">
            <div className="edu-item">
              <div className="edu-avatar"><img src={ssitLogo} alt="SSIT logo" /></div>
              <div className="edu-body">
                <div className="edu-school">
                  Shree Swaminarayan Institute Of Technology(GTU)
                </div>
                <div className="edu-degree">
                  Bachelor's in Computer Engineering
                </div>
                <div className="edu-dates">Sept 2023 — July 2025</div>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-avatar"><img src={gpgLogo} alt="GPG logo" /></div>
              <div className="edu-body">
                <div className="edu-school">
                  Government Polytechnic Gandhinagar
                </div>
                <div className="edu-degree">
                  Diploma in Computer Engineering
                </div>
                <div className="edu-dates">2017 — 2021</div>
              </div>
            </div>
          </div>
          <a
            className="btn-dark"
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}
