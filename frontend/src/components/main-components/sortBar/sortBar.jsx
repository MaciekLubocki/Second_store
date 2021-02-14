import React, { useState } from "react";
import style from "./sortBar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faFilter, faSort, faList } from "@fortawesome/free-solid-svg-icons";



export const sortBar = () => {
  return (
    <div className={style.sortAll}>
      <div className={style.headerSort}>main/page/1</div>

      <div className={style.sortSection}>
        <div className="linkNav">
          <FontAwesomeIcon
            className="brandIcon brandIcon-facebook"
            icon={faFilter}
          />
        </div>
        <div className={style.linkNav}>
          <FontAwesomeIcon
            className="brandIcon brandIcon-facebook"
            icon={faSort}
          />
        </div>
        <div className={style.linkNav}>
          <FontAwesomeIcon
            className="brandIcon brandIcon-facebook"
            icon={faList}
          />
        </div>
        <div className={style.linkNav}>
          <FontAwesomeIcon
            className="brandIcon brandIcon-facebook"
            icon={faBorderAll}
          />
        </div>
      </div>
    </div>
  );
};

export default sortBar;
