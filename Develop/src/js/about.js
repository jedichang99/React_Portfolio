import React from 'react';
import './styles.css';

const About = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      {<section id="about" class="about">
        <div class="container">
  
          <div class="section-title">
            <h2>About</h2>
            <p>Hello! I recently graduated from Dunwoody College of Technology with a degree in Computer Networking Systems. I recently got a Network Operations Administrator role at US Bank. I work with Cisco equipment. Now I am looking to further my knowledge and grow in my strengths.</p>
          </div>
  
          <div class="row">
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>UI/UX Designer &amp; Web Developer.</h3>
              <p class="fst-italic">
                This is a shortened version of my resume. I will leave a link to the full version of my resume. 
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class=""></i> <strong>Birthday:</strong> <span>23 March 1999</span></li>
                    <li><i class=""></i> <strong>Linked In:</strong>
                      <span> <a
                          href="https://www.linkedin.com/in/jedidiah-chang/">linkedin.com/in/jedidiah-chang/</a></span>
                    </li>
                    <li><i class=""></i> <strong>Phone:</strong> <span>+612 386 1168</span></li>
                    <li><i class=""></i> <strong>City:</strong> <span>Minneapolis, USA</span></li>
                  </ul>
                </div>
                <div class="">
                  <ul>
                    <li><i class=""></i> <strong>Age:</strong> <span>23</span></li>
                    <li><i class=""></i> <strong>Degree:</strong> <span>Computer Networking</span></li>
                    <li><i class=""></i> <strong>Email:</strong> <span>Jedichang99@gmail.com</span>
                    </li>
                    <li><i class=""></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>}
    </section>
  );
}

export default About;
