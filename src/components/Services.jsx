import React from "react";
import iconFrontend from "../assets/image.png";
import iconMern from "../assets/image copy.png";

const items = [
  {
    title: "Frontend Developer",
    icon: <img width="22" height="22" src={iconFrontend} alt="Frontend" />,
  },
  {
    title: "MERN Stack Developer",
    icon: <img width="22" height="22" src={iconMern} alt="MERN" />,
  },
  // {
  //   title: "Website Hosting",
  //   icon: (
  //     <svg
  //       width="22"
  //       height="22"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect
  //         x="3"
  //         y="5"
  //         width="18"
  //         height="6"
  //         rx="1.5"
  //         stroke="#ff6b5b"
  //         strokeWidth="1.5"
  //       />
  //       <rect
  //         x="3"
  //         y="13"
  //         width="18"
  //         height="6"
  //         rx="1.5"
  //         stroke="#ff6b5b"
  //         strokeWidth="1.5"
  //       />
  //       <circle cx="7" cy="8" r="1" fill="#ff6b5b" />
  //       <circle cx="7" cy="16" r="1" fill="#ff6b5b" />
  //     </svg>
  //   ),
  // },
];

export default function Services() {
  return (
    <aside className="services col">
      <div className="services-grid">
        {items.map((i) => (
          <React.Fragment key={i.title}>
            <span className="services-dot" aria-hidden />
            <div className="service-row">
              <div className="service-icon">{i.icon}</div>
              <div className="service-title">{i.title}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
}
