import React, {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import style from "./../../navigation/navigation.module.scss";
import { card } from "./cardSlice";
import { useSelector } from "react-redux";
import CardItem from "./card-item/card-item";
export const Card = ({closeBar}) => {

const [isInCloseMode, setCloseMode] = useState(false);

const closeBarWrapperFunction = () => {
    setCloseMode(true);
    setTimeout(() => {
        closeBar()
    }, 2000)
}

  const cardData = useSelector(card);
  return (
    <>
        
        <div>
            <div className={style.menuToggle}>
                {/* <input type="checkbox" /> */}
                <div className={`${style.menu} ${isInCloseMode ? style.close : '' }`}>
                    {/* <div className={`style.cardClose ${isDetailsPanelOpen ? "testBox" : ""}`}> */}
                    <div className={style.cardClose} >
                        {/* <div className={style.cardClose} onMouseEnter={openBarBox("menu")}> */}
                        <FontAwesomeIcon
                            className="brandIcon brandIcon-facebook"
                            icon={faWindowClose}
                            onClick={closeBarWrapperFunction}
                        />
                    </div>
                    <div className={style.cartHeading}>
                        <div className={style.cartLabel}>Cart</div>
                        <div className={style.circle}>{cardData.length}</div>
                    </div>

                    <div className={style.labelUnder}>items in cart:</div>
                    {cardData.map(el => (
                       <CardItem el={el} />
                    ))}

                    <div className={style.line}></div>
                    <div className={style.itemSection}>
                        <p>Total to pay:</p>
                        <li className={style.fontBold}>${cardData.reduce((collector, el) => collector + el.cost * el.quantity, 0)}</li>
                    </div>
                    <div className={style.line}></div>

                    <button>Checkout</button>
                </div>
            </div>

        </div>
    
    </>
  );
};

export default Card