import React from "react";
import style from "./hero-photo.module.scss";


const HeroPhoto = () => {
 
  return (
    <div >
       <img className={style.heroAdjust} src="/photos/hero.jpg" alt=""/>
    </div>
  );
};

export default HeroPhoto