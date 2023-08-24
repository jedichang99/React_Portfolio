import React from "react";
import "./styles.css";

const Portfolio = () => {
  return (
    <section>
      <div className="portfoilo-img" id="projects">
        <div className="por-img">
          <div className="photo project">
            <a href="https://jedidiahchang.github.io/index.html">
              <img
                src="assets/img/portfoilo/photographywebsite.jpg"
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
                    src="assets/img/portfoilo/MamaChangWebsite.jpg"
                    class="border"
                    alt="Mama Chang's Website"
                  />
                </a>
              </div>
              <div class="web project">
                <a href="https://jedidiahch.github.io/JedidiahChang">
                  <img
                    src="assets/img/portfoilo/Screenshot 2023-04-12 at 12.33.41 PM.png"
                    class="border"
                    alt="Portfoilo Website"
                  />
                </a>
              </div>
              <div class="web project">
                <a href="https://jedichang99.github.io/Bo-Bear/">
                  <img
                    src="assets/img/portfoilo/bo-bear.png"
                    class="border"
                    alt="food truck website"
                  />
                </a>
              </div>
              <div class="web project">
                <a href="https://jedichang99.github.io/Horiseon/">
                  <img
                    src="assets/img/portfoilo/Screenshot 2023-04-13 at 12.51.15 AM.png"
                    class="border"
                    alt="first Assignment"
                  />
                </a>
              </div>
              <div class="web project">
                <a href="https://github.com/jedichang99/FitnessNotetracker">
                  <img
                    src="assets/img/portfoilo/Screenshot 2023-07-20 at 9.30.30 PM.png"
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
