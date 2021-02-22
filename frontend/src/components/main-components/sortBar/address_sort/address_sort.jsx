import React from "react";
import style from "../../../main-components/sortBar/sortBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faFilter, faSort, faList } from "@fortawesome/free-solid-svg-icons";

export const address_sort = {
  address: () => {
    return <div className={style.headerSort}>main/page/1</div>;
  },

  sort:  (
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
    )
};
