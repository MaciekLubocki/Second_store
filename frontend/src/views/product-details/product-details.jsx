import React, { useEffect } from "react";
import style from "../../views/product-details/product-details.module.scss";
// import div from "@material-ui/core/div";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import div from "@material-ui/core/div";
// import ButtonBase from "@material-ui/core/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { addProduct } from "../../components/main-components/products/product/product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { faHeart, faCompress, faEye } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import {
  deleteCurrentProductData,
  getProductByIdAsync,
  currentProduct,
} from "../../components/main-components/products/productsSlice";
// import { spacing } from "@material-ui/system";
import ImageGallery from "react-image-gallery";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";
import SortBar from "../../components/main-components/sortBar/sortBar"



// const useStyles = makeStyles((theme) => ({
//   root: {
//     // flexGrow: 1,
//     height: "100vh",
//     display: "flex",
//     justify: "center",
//     // alignItems: "center",
//     border: "1px red solid",
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 50,
//     // margin: "9rem",
//     // maxWidth: "100vh",
//     // alignItems: "center",
//     display: "flex",
//     justify: "center",
//     border: "1px yellow solid",
//   },
//   image: {
//     width: 428,
//     height: "auto",
//     // border: "1px green solid"
//   },
//   img: {
//     margin: "auto",
//     display: "block",
//     maxWidth: "100%",
//     maxHeight: "100%",
//   },
// }));


export const Product = () => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const {
    location: { pathname },
  } = useHistory();
  const id = pathname.split("/")[2];
  const productData = useSelector(currentProduct);

  const addToCard = () => {
    dispatch(addProduct(productData));
  };

  useEffect(() => {
    dispatch(getProductByIdAsync(id));
    return () => {
      dispatch(deleteCurrentProductData());
    };
  }, []);

  if (!productData) {
    return <></>;
  }

  return (
    <>
      <div className={style.wrap} >
      
      
        
        
        <div className={style.ImageGallery}>
        <div className={style.imageMiniature}>
        <div className={style.img}>
                <img
                  className={style.img}
                  alt={productData.photo}
                  src={`/photos/${productData.photo}`}
                  />

<img
                  className={style.img}
                  alt={productData.photo}
                  src={`/photos/${productData.photo}`}
                  />

<img
                  className={style.img}
                  alt={productData.photo}
                  src={`/photos/${productData.photo}`}
                  />
<img
                  className={style.img}
                  alt={productData.photo}
                  src={`/photos/${productData.photo}`}
                  />
              </div>

        </div>
        <div className={style.imageOryginal}>
              <div className={style.img1}>
                <img
                  className={style.img1}
                  alt={productData.photo}
                  src={`/photos/${productData.photo}`}
                  />
              </div>
              </div>

        </div>
        <div className={style.boxSection}>
        <SortBar />
              
            {/* Sekcja opisowa wrap */}
            <div>
                 
              {/* Sekcja opisowa*/}
                  
                <div className={style.productAll}>
                
                {/* sekcja opisowa: name, id, description */}
                <div className={style.productToLeft}>

                  {/* nazwa produktu */}
                  <div
                    className={style.name}
                    gutterBottom
                    variant="subtitle1"
                    >
                    {productData.name}
                  </div>



              {/* product price  */}
              
              
                <div variant="subtitle1" className={style.wholeLink}>
              
              <div>
                <div className={style.price}>${productData.cost}</div>
              </div>
              
              <div>
                <div className={style.price}>★★★★★</div>
              </div>

                  
              </div>
                  
                  {/* products description */}
                  <div
                    className={style.desc}
                    variant="body2"
                    color="textSecondary"
                  >
                    {productData.desc}
                  </div>
                                
                </div>
                
                {/* buttony */}
                
                  
                
                </div>
            </div>

            <div className={style.iconProduct}>
                
                
           <div className={style.verticalSection}>
           
            <button
                    className={style.eliconProduct}
                    onClick={addToCard}
                    variant="body2"
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faShoppingBag} />
                  Buy me
                  </button>
                  
                <button className={style.eliconProduct}>
                  <FontAwesomeIcon
                    className={style.iconM}
                    icon={faHeart}
                    />
                
                Add to wishlist
                </button>
            </div>
            
            <div className={style.verticalSection}>

                < button className={style.eliconProduct}>
                  <FontAwesomeIcon
                    className={style.iconM}
                    icon={faCompress}
                    />
Resize image
                </button>
                <button className={style.eliconProduct}>
                  <FontAwesomeIcon
                    className={style.iconM}
                    icon={faEye}
                  />
            Compare 
                </button>
              </div>
              </div>

                  {/* products id */}
                  <div
                    className={style.id}
                    variant="body2"
                    color="textSecondary"
                    >
                    Product id: {productData.id}
                  </div>


                  <div className={style.mediaLeft}>
              
<>Share</>

              <div>              <FontAwesomeIcon
              icon={faFacebook}
              />
              </div>
              <div>
              <FontAwesomeIcon
              
              icon={faTwitter}
              />
              </div>
              <div>
              <FontAwesomeIcon
              
              icon={faInstagram}
              />
              </div>
              </div>




        </div>
      </div>

<div className={style.descProduct} >
<div className={style.descProductLeft} >

<div className={style.lineTitle}>

<div className={style.lineVertical}></div>

<div
  
                    
           className={style.nameTitle}
                    variant="body2"
                    color="textSecondary"
                  >
                    How I made {productData.name}.
                  </div>

                  </div>
<div
                    className={style.desc}
                    variant="body2"
                    color="textSecondary"
                  >
                    {productData.desc}
                  </div>
                 
</div>

<div className={style.descProductRight} >
</div>

<img
                  className={style.img3}
                  alt={productData.photo}
                  src={`/photos/${productData.photo}`}
                  />

</div>

<div className={style.descProduct} >


<img
                  className={style.img3}
                  alt={productData.photo}
                  src={`/photos/${productData.photo}`}
                  />



<div className={style.descProductLeft} >

<div className={style.lineTitle}>

<div className={style.lineVertical}></div>

<div
  
                    
           className={style.nameTitle}
                    variant="body2"
                    color="textSecondary"
                  >
                    Concept of {productData.name}.
                  </div>

                  </div>
<div
                    className={style.desc}
                    variant="body2"
                    color="textSecondary"
                  >
                    {productData.desc}
                  </div>
                 
</div>

<div className={style.descProductRight} >
</div>

</div>


    </>
  );
};

export default Product;
