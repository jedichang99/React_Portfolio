import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <section>
      <div className="contact-me" id="contact-me">
        <div className="title">
          <h1>Contact Me</h1>
        </div>
        <div className="form">
          <div className="form-items">
            <input type="text" className="input" placeholder="Name" />
            <i className="fas fa-user"></i>
          </div>
          <div className="form-items">
            <input type="text" className="input" placeholder="Email" />
            <i className="fas fa-envelope"></i>
          </div>
          <div className="form-items">
            <textarea
              className="input message"
              cols="30"
              rows="10"
              placeholder="Message....."
            ></textarea>
          </div>
        </div>

        <div className="btn">
          Submit
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Contact;
