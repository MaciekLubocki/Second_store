import React, { useState } from "react";
import "./navigation.scss"
import {
    Link
} from "react-router-dom";
export const Navigation = () => {

    const [isDetailsPanelOpen, setDetailsPanelOpen] = useState(false);
    const [detailsPanelType, setDetailsPanelType] = useState(null);

    const openDetailsBox = (type) => () => {
        setDetailsPanelOpen(true);
        setDetailsPanelType(type);
    }

    const closeDetailsBox = () => {
        setDetailsPanelOpen(false);
        setDetailsPanelType(null);
    }

    const renderList = () => {
        switch(detailsPanelType){
            
            
            case 'main':
                return <div className="leftMenu">
                    <ul>MAIN
                    <li>About this project</li>
                    <li>About me</li>
                    <li>al2</li>
                    <li>al3</li>
                    </ul>
                </div> 
            case 'product':
                return <div className="leftMenu">
                <ul>CRAFTS
                <li>Hand Painting</li>
                <li>Sculptures</li>
                <li>Jewelery</li>
                </ul>
            </div> 
            case 'order':
                return <div className="leftMenu">
                <ul>ORDER
                <li>About this project</li>
                <li>About me</li>
                <li>al2</li>
                <li>al3</li>
                </ul>
            </div>  
            case 'contact':
                return <div className="leftMenu">
                <ul>CONTACT
                <li>About this project</li>
                <li>About me</li>
                <li>al2</li>
                <li>al3</li>
                </ul>
            </div>  
            default:
                return <p>It's work</p> 
        }
    }

    return (
        <>
            <header className='header'>
                <nav>
                    <ul className="navBar">
                        <li>
                            <Link className="linkAnimation" to="/" onMouseOver={openDetailsBox('main')}>Main</Link>
                        </li>
                        <li>
                            <Link className="linkAnimation" to="/product" onMouseOver={openDetailsBox('product')}>Product details</Link>
                        </li>
                        <li>
                            <Link className='logoStyle' to="/" onMouseOver={closeDetailsBox}>HandCraft</Link>
                        </li>
                        <li>
                            <Link className="linkAnimation" to="/order" onMouseOver={openDetailsBox('order')}>Order</Link>
                        </li>
                        <li>
                            <Link className="linkAnimation" to="/contact" onMouseOver={openDetailsBox('contact')}>Contact</Link>

                        </li>
                    </ul>
                </nav>
            </header>

            {isDetailsPanelOpen && (
                <div className='detailsBox' onMouseLeave={closeDetailsBox}>
                   {renderList()}
                </div>
            )}
            
        </>
    );
};

export default Navigation