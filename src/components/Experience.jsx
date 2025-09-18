import React from "react";

export default function Experience({ hideTitle = false }) {
  return (
    <section id="experience" className="experience container">
      {!hideTitle && <h2 className="section-title">Experience</h2>}
      <div className="experience-list">
        <div className="experience-item">
          <h3>Summer Intern – Infolabz</h3>
          <span className="experience-duration">June 2024 – August 2024</span>
          <p className="experience-desc">
            Completed a hands-on internship focused on web development and MERN
            stack. Contributed to building and debugging real-world applications
            while learning industry best practices for clean code and version
            control.
          </p>
          <ul className="experience-highlights">
            <li>
              Worked on <strong>React</strong> components and API integration.
            </li>
            <li>
              Collaborated with mentors using <strong>Git & GitHub</strong>.
            </li>
            <li>
              Improved understanding of {""}
              <strong>REST APIs, Node.js, and Express.js</strong>.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
