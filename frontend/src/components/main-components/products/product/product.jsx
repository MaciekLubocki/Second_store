import React, { Components } from "react";
import style from "./product.module.scss";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { addProduct } from "../../card/cardSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { faHeart, faCompress, faEye } from "@fortawesome/free-solid-svg-icons";

export const Product = ({
  product: { name, cost, id, _id, desc, photo },
  product,
}) => {
  // const style = useStyles();
  const dispatch = useDispatch();
  const addToCard = () => {
    dispatch(addProduct(product));
  };
  return (
    <>
      <div className={style.root}>
        <div className={style.paper}>
          <div>
            <div item>
              {/* <Grid item>
                  <Typography className={style.cost} variant="subtitle1">${cost}</Typography>
                </Grid> */}

              <div className={style.imgFrame}>
                
                
                <div className={style.photoEdition}>
                <img
                  className={style.img}
                  alt={photo}
                  src={`/photos/${photo}`}
                />
            </div>

                <div className={style.boxPresentation}>
                  <div className={style.name}>{name}</div>
                  
                  
                  
                <div className={style.boxProdDesc}>
                  <div className={style.id}>ID:{id}</div>

                  <div className={style.iconProduct}>
                  
                    <div className={style.eliconProduct}>
                      <FontAwesomeIcon
                        className="brandIcon brandIcon-facebook"
                        icon={faHeart}
                      />
                    </div>

                    <div className={style.eliconProduct}>
                      <FontAwesomeIcon
                        className="brandIcon brandIcon-facebook"
                        icon={faCompress}
                      />
                    </div>

                    <div className={style.eliconProduct}>
                      <FontAwesomeIcon
                        className="brandIcon brandIcon-facebook"
                        icon={faEye}
                      />
                    </div>
              
                    <div className={style.eliconProduct}>
                      <Link
                                                onClick={addToCard}
                        style={{ cursor: "pointer" }}
                        >
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </Link>
</div>
              
                    <div className={style.eliconProduct}>
                      <Link to={`product/${_id}`} className={style.eliconProduct}>
                        Details
                      </Link>
                                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                  </>
  );
};

export default Product;
