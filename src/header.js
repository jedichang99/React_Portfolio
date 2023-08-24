import React from "react";
import "./styles.css";
import logoPic from "./img/logo.png"
const Header = () => {
  return (
    <header>
      <img
        className="jedidiah"
        src={logoPic}
        alt="Jedidiah's logo"
      />

      <div>
        <div className="social">
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

        <nav>
          <a href="#home">
            {" "}
            <span>Home</span>
          </a>
          <a href="#about">
            {" "}
            <span>About</span>
          </a>
          <a href="#projects">
            {" "}
            <span>Projects</span>
          </a>
          <a href="#contact-me">
            {" "}
            <span>Contact Me</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
