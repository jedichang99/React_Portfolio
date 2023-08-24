import React from "react";
import "./styles.css";
import profilePic from "./img/Jedidiah.png"
const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      {
        <div className="hero-container" data-aos="fade-in">
          <img src={profilePic} className=
"jedidiah-pic" alt="" />
          <h1>
            Jedidiah <br /> Chang
          </h1>
        </div>
      }
    </section>
  );
};

export default Hero;
