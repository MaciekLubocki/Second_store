import React from "react";
import style from "./../../../navigation/navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  changeQuantity as changeQuantityDispach,
  removeProduct,
} from "./../cardSlice";
import Product from "../../products/product/product";
const { photo } = Product;

export const CardItem = ({ el }) => {
  const dispach = useDispatch();
  const changeQuantity = (type) => (event) => {
    let number;
    switch (type) {
      case "add":
        number = el.quantity + 1;
        dispach(changeQuantityDispach({ id: el._id, quantity: number }));
        break;
      case "remove":
        number = el.quantity > 1 ? el.quantity - 1 : el.quantity;
        dispach(changeQuantityDispach({ id: el._id, quantity: number }));
    }
  };

  const removeFromCard = () => {
    dispach(removeProduct(el._id));
  };
  return (
    <>
      <div className={style.itemSection}>
        <div className={style.img}>
          <img alt={el.photo} src={`/photos/${el.photo}`} />
        </div>
        <div className={style.number}>
          <div className={style.minus} onClick={changeQuantity("remove")}>
            -
          </div>
          <div className={style.inputPM}>{el.quantity}</div>
          <div className={style.plus} onClick={changeQuantity("add")}>
            +
          </div>
        </div>
        <div className={style.cardItemName}>{el.name}</div>
        <div className={style.cardItemCloseIcon}>
          {" "}
          <FontAwesomeIcon
            className="brandIcon brandIcon-facebook"
            icon={faWindowClose}
            onClick={removeFromCard}
          />
        </div>
        <div className={style.cardItemCost}>${el.cost * el.quantity}</div>
      </div>
    </>
  );
};

export default CardItem;
