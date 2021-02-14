import React, { useState } from "react";
import style from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClosedCaptioning,
  faHamburger,
  faHammer,
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faUserMinus,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
// import left from './navigation.left'
import { elements } from "./navigation.elements";
import { card } from "../main-components/card/cardSlice";
import { LeftBar } from "../navigation/navigationLeftSide";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const cardData = useSelector(card);

  const [isDetailsPanelOpen, setDetailsPanelOpen] = useState(false);
  const [isLeftBarPanelOpen, setLeftBarPanelOpen] = useState(false);
  const [isRightBarPanelOpen, setRightBarPanelOpen] = useState(false);
  // const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const [detailsPanelType, setDetailsPanelType] = useState(null);

  const openDetailsBox = (type) => () => {
    setDetailsPanelOpen(true);
    setDetailsPanelType(type);
  };

  const closeDetailsBox = () => {
    setDetailsPanelOpen(false);
    setDetailsPanelType(null);
  };

  const openRightBar = () => {
    setRightBarPanelOpen(true);
  };

  const closeRightBar = () => {
    setRightBarPanelOpen(false);
  };

  const openLeftBar = () => {
    setLeftBarPanelOpen(true);
  };

  const closeLeftBar = () => {
    setLeftBarPanelOpen(false);
  };
  // const openSubMenu = () => {
  //   setSubMenuOpen(true)
  // }

  // const closeSubMenu = () => {
  //   setSubMenuOpen(false)
  // }

  return (
    <>
      <header
        className={`header ${isDetailsPanelOpen ? style.toggleColor : ""}`}
      >
        <div className={style.navContainer}>
          <div className={style.leftIcon}>
            <div className="linkNav">
              <FontAwesomeIcon
                className="brandIcon brandIcon-facebook"
                icon={faHamburger}
                onClick={openLeftBar}
              />
            </div>

            <div className="linkNav">
              <Link
                className={style.linkAnimation}
                to="/"
                onMouseOver={openDetailsBox("search")}
              >
                <FontAwesomeIcon
                  className="brandIcon brandIcon-facebook"
                  icon={faSearch}
                />
              </Link>
            </div>
          </div>

          <nav>
            <ul className={style.navBar}>
              <li>
                <Link
                  className={style.linkAnimation}
                  to="/"
                  onMouseOver={openDetailsBox("main")}
                  // onMouseOver={openSubMenu("main")}
                >
                  Main
                </Link>
              </li>

              <li>
                <Link
                  className={style.linkAnimation}
                  to="/product"
                  onMouseOver={openDetailsBox("product")}
                >
                  Product details
                </Link>
              </li>
              <li>
                <Link
                  className={style.logoStyle}
                  to="/"
                  onMouseOver={closeDetailsBox}
                >
                  HandCraft
                </Link>
              </li>
              <li>
                <Link
                  className={style.linkAnimation}
                  to="/order"
                  onMouseOver={openDetailsBox("order")}
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  className={style.linkAnimation}
                  to="/contact"
                  onMouseOver={openDetailsBox("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className={style.rightIcon}>
            <div className="linkNav">
              <div className="logInIcon">
                <Link to="/" onMouseOver={openDetailsBox("login")}>
                  <FontAwesomeIcon
                    className="brandIcon brandIcon-facebook"
                    icon={faSignInAlt}
                  />
                </Link>
              </div>
            </div>

            <div className="linkNav">
              <div className={style.shopCount}>
                <FontAwesomeIcon
                  className="brandIcon brandIcon-facebook"
                  icon={faShoppingCart}
                  onClick={openRightBar}
                />
                <div className={style.circleItem}>{cardData.length}</div>
              </div>
            </div>
          </div>

          {isLeftBarPanelOpen && (
            <div className="SideBarLeft">{elements.left(closeLeftBar)}</div>
          )}

        </div>
        
        
        {isRightBarPanelOpen && (
            <div className="SideBarRight">{elements.right(closeRightBar)}</div>
          )}
        
        
        {isDetailsPanelOpen && (
          <div className={style.SubMenuBox} onMouseLeave={closeDetailsBox}>
            {elements.renderList(detailsPanelType, openDetailsBox)}
          </div>
        
        
        
        )}
      </header>
    </>
  );
};
// };

export default Navigation;
