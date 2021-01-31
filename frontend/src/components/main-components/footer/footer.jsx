import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// library.add(fab)

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerMain">
          <div className="footerWraper">
            <div className="footerColumn">
              <ul>
                <li>
                  <Link className="footerHeader" to="/">
                    Company
                  </Link>
                </li>
                <li>
                  <Link className="liFooter" to="/product">
                    About me
                  </Link>
                </li>
                <li>
                  <Link className="liFooter" to="/order">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footerColumn">
              <ul>
                <li>
                  <Link className="footerHeader" to="/">
                    HELP
                  </Link>
                </li>
                <li>
                  <Link className="liFooter" to="/product">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link className="liFooter" to="/order">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link className="liFooter" to="/contact">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footerColumn">
              <ul>
                <li>
                  <Link className="footerHeader" to="/">
                    STORE
                  </Link>
                </li>
                <li>
                  <Link className="liFooter" to="/product">
                    Hand Paintings
                  </Link>
                </li>
                <li>
                  <Link className="liFooter" to="/order">
                    Sculptures
                  </Link>
                </li>
                <li>
                  <Link className="liFooter" to="/contact">
                    Jewelery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="columnLast">
              <ul>
                <li>
                  <Link className="footerHeader" to="/">
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
                <li>
                  <button>Go!</button>
                  <input type="text" placeholder="Your e-mail address here" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerSocial">
          <div className="footerLine">
            <div className="socialFooter">
              <div className="currencyFooter">
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
                             <div className="mediaFooter">
                <FontAwesomeIcon
                  className="brandIcon brandIcon-facebook"
                  icon={faFacebook}
                />
                <FontAwesomeIcon
                  className="brandIcon brandIcon-twitter"
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  className="brandIcon brandIcon-instagram"
                  icon={faInstagram}
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
