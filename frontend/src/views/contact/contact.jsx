import React from "react";
import HeroPhoto from "../../components/main-components/hero-photo/hero-photo";
import style from "./contact.module.scss";
import SortBar from "../../components/main-components/sortBar/sortBar"
import { Link } from "react-router-dom";

export const ContactView = () => {
  return (
    <>
      <HeroPhoto />
      <SortBar />
      
      <>
        <div className={style.header}>
          <div className={style.slogan}>
            <h4>Get in touch</h4>
            <div className={style.headerStyle}>I would love to hear from you</div>
          </div>
          <div className={style.main}>
            <div className={style.leftSide}>
              <div className={style.gMap}></div>
              <div className={style.contact}>
                <div className={style.address}>
                  <div className={style.headerStyle}>Address</div>
                  <p>3-Chome</p>
                  <p>Tokyo, Japan</p>
                  <p>+81 589 125 287</p>
                </div>
                <div className={style.touch}>
                  <div className={style.headerStyle}>Get in Touch</div>
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

            <div className={style.rightSide}>
              <div className={style.sendForms}>
                <div className={style.headerStyle}>Send your message</div>
                <p>Name *</p>
                <input type="text" />
                <p>Email *</p>
                <input type="text" />
                <p>Message *</p>
                <textarea type="message" />
                <div className={style.btn}>
                  <button>Submit</button>
                </div>
                <p>Fields marked with and * are required</p>
              </div>
            </div>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6845062899347!2d139.30060582096783!3d35.733976910283054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokio%2C%20Japonia!5e0!3m2!1spl!2spl!4v1612104636466!5m2!1spl!2spl"></iframe>
        </div>
      </>
    </>
  );
};

export default ContactView;
