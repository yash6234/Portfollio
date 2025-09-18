import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-brand">Yash Patel</div>
        <div className="foot-copy">
          Designed with love, all rights reserved for Yash Patel.
        </div>
        <div className="foot-icons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yash-patel-666aa3217"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
