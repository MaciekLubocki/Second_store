import React from "react";
import style from  "./footer.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";



const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};

export const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.footerMain}>
          <div className={style.footerWraper}>
            <div className={style.footerColumn}>
              <ul>
                <li>
                  <Link className={style.footerHeader} to="/">
                    Company
                  </Link>
                </li>
                <li>
                  <Link className={style.liFooter} to="/product">
                    About me
                  </Link>
                </li>
                <li>
                  <Link className={style.liFooter} to="/order">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.footerColumn}>
              <ul>
                <li>
                  <Link className={style.footerHeader} to="/">
                    HELP
                  </Link>
                </li>
                <li>
                  <Link className={style.liFooter} to="/product">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link className={style.liFooter} to="/order">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link className={style.liFooter} to="/contact">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.footerColumn}>
              <ul>
                <li>
                  <Link className={style.footerHeader} to="/">
                    STORE
                  </Link>
                </li>
                <li>
                  <Link className={style.liFooter} to="/product">
                    Hand Paintings
                  </Link>
                </li>
                <li>
                  <Link className={style.liFooter} to="/order">
                    Sculptures
                  </Link>
                </li>
                <li>
                  <Link className={style.liFooter} to="/contact">
                    Jewelery
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.columnLast}>
              <ul>
                <li>
                  <Link className={style.footerHeader} to="/">
                    HandCraft
                  </Link>
                </li>
                <li>
                  <p>
                    This store is created to promote hand manufacture of things
                    made with love. Get info when new item is made. You want be
                    dissipointed. To get your notification please provide your
                    email address.{" "}
                  </p>
                </li>
                <li className={style.butPut}>
                  <input  className={style.butPutInput} type="text" placeholder="Your e-mail address here" />
                  <button className={style.butPutButton} >Go!</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={style.footerSocial}>
          <div className={style.footerLine}>
            
            <div className={style.socialFooter}>
              
              <div className={style.currencyFooter}>
              <p>Select currency:</p>
              <select name="currency" id="currency">
              <option value="English">USD</option>
              <option value="日本語">EUR</option>
              <option value="Polski">PLN</option>
              <option value="François">JPY</option>
              </select>
              <p>Select language:</p>
              <select name="language" id="language">
              <option value="English">English</option>
              <option value="日本語">日本語</option>
              <option value="Polski">Polski</option>
              <option value="François">François</option>
              </select>
              </div>
              
              <div className={style.mediaFooter}>
              
              <div>              <FontAwesomeIcon
              icon={faFacebook}
              />
              </div>
              <div>
              <FontAwesomeIcon
              
              icon={faTwitter}
              />
              </div>
              <div>
              <FontAwesomeIcon
              
              icon={faInstagram}
              />
              </div>
              </div>
                
                
              <div className={style.upFooter}>
              <FontAwesomeIcon
              className="brandIcon brandIcon-facebook"
              icon={faArrowAltCircleUp}
              onClick={scrollTop} 
              />
              </div>
            
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
