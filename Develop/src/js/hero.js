import React from "react";
import "./styles.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      {
        <div class="hero-container" data-aos="fade-in">
          <img src="assets/img/Jedidiah.png" class="jedidiah-pic" alt="" />
          <h1>
            Jedidiah <br /> Chang
          </h1>
        </div>
      }
    </section>
  );
};

export default Hero;
