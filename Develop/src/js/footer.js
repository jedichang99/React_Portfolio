import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer id="footer">
      {
        <>
          <div class="socialfoot">
            <a href="https://www.instagram.com/jedichang/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/jedidiah.chang.9/">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/jedichang99">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jedidiah-chang/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <ul class="list">
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
