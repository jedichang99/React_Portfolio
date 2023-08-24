import React from "react";
import "./styles.css";
import project1Pic from "./img/portfoilo/Screenshot 2023-04-12 at 12.33.41 PM.png"
import project2Pic from "./img/portfoilo/MamaChangWebsite.jpg"
import project3Pic from "./img/portfoilo/photographywebsite.jpg"
import project4Pic from "./img/portfoilo/Screenshot 2023-07-20 at 9.30.30 PM.png"
import project5Pic from "./img/portfoilo/Screenshot 2023-04-13 at 12.51.15 AM.png"
import project6Pic from "./img/portfoilo/bo-bear.png"

const Portfolio = () => {
  return (
    <section>
      <div className="portfoilo-img" id="projects">
        <div className="por-img">
          <div className="photo project">
            <a href="https://jedidiahchang.github.io/index.html">
              <img
                src={project3Pic}
                className="border"
                alt="My Photography Website"
                width="100px"
              />
            </a>
          </div>
          <div className="sight">
            <div class="sight">
              <div class="web project">
                <a href="https://mamachang.github.io/MAMACHANG">
                  <img
                    src={project2Pic}
                    class="border"
                    alt="Mama Chang's Website"
                  />
                </a>
              </div>
              <div class="web project">
                <a href="https://jedidiahch.github.io/JedidiahChang">
                  <img
                    src={project1Pic}
                    class="border"
                    alt="Portfoilo Website"
                  />
                </a>
              </div>
              <div class="web project">
                <a href="https://jedichang99.github.io/Bo-Bear/">
                  <img
                    src={project6Pic}
                    class="border"
                    alt="food truck website"
                  />
                </a>
              </div>
              <div class="web project">
                <a href="https://jedichang99.github.io/Horiseon/">
                  <img
                    src={project5Pic}
                    class="border"
                    alt="first Assignment"
                  />
                </a>
              </div>
              <div class="web project">
                <a href="https://github.com/jedichang99/FitnessNotetracker">
                  <img
                    src={project4Pic}
                    class="border"
                    alt="first Assignment"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
