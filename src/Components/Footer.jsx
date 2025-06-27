import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Syam Sai Kumar Arava. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/SyamSai45" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/syam-sai-arava/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:syamarava30@gmail.com">Gmail</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
