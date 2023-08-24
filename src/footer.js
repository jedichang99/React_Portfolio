import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer id="footer">
      {
        <>
          <div className="socialfoot">
            <a href="https://www.instagram.com/jedichang/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/jedidiah.chang.9/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/jedichang99">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jedidiah-chang/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <ul className="list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </>
      }
    </footer>
  );
};

export default Footer;
