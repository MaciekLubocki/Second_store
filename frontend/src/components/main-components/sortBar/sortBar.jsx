import React, { useState } from "react";
import style from "./sortBar.module.scss";
import { Link } from "react-router-dom";
import { address_sort } from "./address_sort/address_sort";



export const sortBar = () => {
  return (
    <div className={style.sortAll}>

      {address_sort.address()}
      {address_sort.sort}

      {/* <div className={style.lineHorizontal} /> */}
      
      </div>
  );
};

export default sortBar;
