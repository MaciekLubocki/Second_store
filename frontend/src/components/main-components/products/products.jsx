import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import Product from "./product/product";
import {
  products,
  getAllProductsAsync,
} from "./productsSlice";

// Material UI
import Grid from '@material-ui/core/Grid';


const Products = () => {
  const productsData = useSelector(products);
  const dispatch = useDispatch();
  


  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  return (

    <Grid container xs={12} direction={'row'} >
      {productsData.map((product, index) => (
        <Grid xs={12} md={6} lg={4}>
          <Product key={index} product={product} />
        </Grid>
      ))}
    </Grid>    
    
  );};

export default Products;
