import React, { useState } from "react";
import {
    Link
} from "react-router-dom";
import style from './secondNavigation.module.scss'
    

export const SecondNavigation = () => {
    
    return (
        <>
            <div className={style.headerSN}>
                <nav className={style.navi}>
                            <div className={style.navBarSN}>
                            <div className={style.logoStyleSN} to="/" >Shop</div>
                    <ul>                        
                        
                        <li>
                            <Link className={style.linkAnimation} to="/product" >Hand Painting</Link>
                        </li>
                        <li>
                            <Link className={style.linkAnimation} to="/order" >Sculpture</Link>
                        </li>
                        <li>
                            <Link className={style.linkAnimation} to="/contact" >Jewelery</Link>

                        </li>
                    </ul>
                    </div>
                </nav>
            </div>

            
        </>
    );
};

export default SecondNavigation