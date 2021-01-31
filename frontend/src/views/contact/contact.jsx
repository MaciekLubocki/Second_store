import React from "react";
import HeroPhoto from "../../components/main-components/hero-photo/hero-photo";
import "./contact.scss";

import { Link } from "react-router-dom";

export const ContactView = () => {
  return (
    <>
      <HeroPhoto />
      <>
        <header className="header">
          <div className="slogan">
            <h4>Get in touch</h4>
            <div className="headerStyle">I would love to hear from you</div>
          </div>
          <div className="main">
            <div className="leftSide">
              <div className="gMap"></div>
              <div className="contact">
                <div className="address">
                  <div className="headerStyle">Address</div>
                  <p>3-Chome</p>
                  <p>Tokyo, Japan</p>
                  <p>+81 589 125 287</p>
                </div>
                <div className="touch">
                  <div className="headerStyle">Get in Touch</div>
                  <p>
                    You are welcomed to write me at any topic.
                    <br />
                    Suggestions, feedback, comments I will be <br /> happy to
                    response to your message.
                  </p>
                  <p>
                    <i>handcraft@handcraft.com</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="rightSide">
              <div className="sendForms">
                <div className="headerStyle">Send your message</div>
                <p>Name *</p>
                <input type="text" />
                <p>Email *</p>
                <input type="text" />
                <p>Message *</p>
                <textarea type="message" />
                <div className="btn">
                  <button>Submit</button>
                </div>
                <p>Fields marked with and * are required</p>
              </div>
            </div>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6845062899347!2d139.30060582096783!3d35.733976910283054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokio%2C%20Japonia!5e0!3m2!1spl!2spl!4v1612104636466!5m2!1spl!2spl"></iframe>
        </header>
      </>
    </>
  );
};

export default ContactView;
