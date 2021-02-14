import React from "react";
import style from "./navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "../main-components/card/card";
import LeftBar from "../navigation/navigationLeftSide";

export const elements = {
    right: (closeBar) => <Card closeBar={closeBar} />,
    left: (closeBarLeft) => <LeftBar closeBar={closeBarLeft} />,
    

        renderList: (detailsPanelType, openDetailsBox) => {
        switch (detailsPanelType) {
            case "main":
                return (
                    <div className={style.leftMenu}>
                        <ul>
                            MAIN
                          <li>
                                <Link
                                    className={style.linkAnimation }
                                    to="/product"
                                    
                                >
                                    About this project
                            </Link>
                            </li>
                            <li>
                                <Link
                                    className={style.linkAnimation}
                                    to="/product"
                                    
                                >
                                    About me
                            </Link>
                            </li>
                        </ul>
                    </div>
                );
            case "product":
                return (
                    <div className={style.leftMenu}>
                        <ul>
                            PRODUCT DETAILS
                          <li>
                                <Link
                                    className={style.linkAnimation}
                                    to="/product"
                                    
                                >
                                    Hand Painting
                            </Link>
                            </li>
                            <li>
                                <Link
                                    className={style.linkAnimation}
                                    to="/product"
                                    
                                >
                                    Sculptures
                            </Link>
                            </li>
                            <li>
                                <Link
                                    className={style.linkAnimation}
                                    to="/product"
                                    
                                >
                                    Jewelery
                            </Link>
                            </li>
                        </ul>
                    </div>
                );
            case "order":
                return (
                    <div className={style.leftMenu}>
                        <ul>
                            {/* ORDER
                          <li>About this project</li>
                          <li>About me</li>
                          <li>al2</li>
                          <li>al3</li> */}
                        </ul>
                    </div>
                );
            case "contact":
                return (
                    <div className={style.leftMenu}>
                        <ul></ul>
                    </div>
                );
            case "search":
                return (
                    <div className={style.centerMenuSearch}>
                        <input type="text" placeholder="Search by word" />
                    </div>
                );
            case "login":
                return (
                    <div className={style.centerMenu}>
                       
     
                        <input type="text" placeholder="your Login" />
                        
                        <div></div>
                        
                        <input type="text" placeholder="your Password" />
                        
                    </div>
                );
            default:
                return <p>It's work</p>;
        }
    }
}
