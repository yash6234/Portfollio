import React from "react";
import abVideo from "../assets/Ab video.mov";
import wwVideo from "../assets/ww video.mov";

const projects = [
  {
    title: "Atomic Blogs",
    tags: ["HTML", "CSS", "Javascript"],
    desc: "Used components of React to implement basic data structures through the Blogs of the Atomic.",
    video: abVideo,
    github: "https://github.com/yash6234/Atomic-Blogs.git",
    live: "#",
  },
  {
    title: "WorldWise",
    tags: ["HTML", "CSS", "Javascript", "API", "Version control"],
    desc: "Uses a public movie API to build a collection movie list that sorts from A to Z or vice versa and counts how many movies in each container.",
    video: wwVideo,
    github: "https://github.com/yash6234/worldwise.git",
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
                  {/* <a className="btn-link" href={p.live}>
                    View project ↗
                  </a> */}
                </div>
              </div>
              <div className="proj-media">
                <div className="imgBox">
                  <video
                    className="proj-video"
                    src={p.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={p.video} type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
