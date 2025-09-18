import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <Link to="/">Yash Patel</Link>
        </div>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="container" style={{ paddingBottom: 12 }}>
          <div
            className="nav-links"
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
