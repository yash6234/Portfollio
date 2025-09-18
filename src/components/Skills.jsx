import React from "react";

const skills = [
  "HTML5",
  "CSS",
  "Javascript",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "API Integration",
  "Node.js",
  "React",
  "Git",
  "Github",
];

export default function Skills() {
  return (
    <div className="skills-bar">
      <div className="container skills-wrap">
        {skills.map((s) => (
          <span key={s} className="skill-pill">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
