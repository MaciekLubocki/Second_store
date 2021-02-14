import React, {useState} from "react";
import style from "./navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

export const LeftBar = ({closeBarLeft}) => {
const [isInCloseMode, setCloseMode] = useState(false);

const closeBarWrapperLeftFunction = () => {
    setCloseMode(true);
    setTimeout(() => {
        closeBarLeft()
    }, 2000)
}

return (
<>
        <nav role="navigation">
            <div className={style.menuToggleLeft}>  
                      
            <div className={`${style.menuLeft} ${isInCloseMode ? style.close : '' }`}>

                      <div className={style.cardCloseLeft}>
                          <FontAwesomeIcon
                            className="brandIcon brandIcon-facebook"
                            icon={faWindowClose}
                            onClick = {closeBarWrapperLeftFunction}
                        />
                    </div>
                    </div>
              
                    
                <div className={style.menuLeft}>
                    
                    <div className={style.menuLeftWrap}>
                    <a href="#">
                        <li>Main</li>
                    </a>
                    <a href="#">
                        <li>Product info</li>
                    </a>
                    <a href="#">
                        <li>Order</li>
                    </a>
                    <a href="#">
                        <li>Contact</li>
                    </a>
                </div>
            </div>
            </div>
        </nav>
</>
)
};
  export default LeftBar;