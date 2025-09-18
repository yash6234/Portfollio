import React from "react";
import shot1 from "../assets/image.png";
import shot2 from "../assets/image copy.png";

const projects = [
  {
    title: "Atomic Blogs",
    tags: ["HTML", "CSS", "Javascript", "Node.js"],
    desc: "Used components of React to implement basic data structures through the Blogs of the Atomic. ",
    image: shot1,
    github: "#",
    live: "#",
  },
  {
    title: "WorldWise",
    tags: ["HTML", "CSS", "Javascript", "API", "Version control"],
    desc: "Uses a public movie API to build a collection movie list that sorts from A to Z or vice versa and counts how many movies in each container.",
    image: shot2,
    github: "#",
    live: "#",
  },
];

export default function Projects({ hideTitle = false }) {
  return (
    <section id="projects" className="projects">
      <div className="container">
        {!hideTitle && <h2 className="projects-title center">Projects</h2>}
        <div className="projects-list">
          {projects.map((p, i) => (
            <article key={p.title} className={`proj ${i % 2 ? "reverse" : ""}`}>
              <div className="proj-copy">
                <h3>{p.title}</h3>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="chip pill">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-actions">
                  <a className="btn btn-primary" href={p.github}>
                    View Github
                  </a>
                  <a className="btn-link" href={p.live}>
                    View project ↗
                  </a>
                </div>
              </div>
              <div className="proj-media">
                <div className="imgBox">
                  <img src={p.image} alt="Project" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
