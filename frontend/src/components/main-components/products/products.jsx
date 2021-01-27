import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./product/product";
import {
  products,
  getAllProductsAsync,
} from "./productsSlice";
const Products = () => {
  const productsData = useSelector(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  return (
    <div>
      {productsData.map((product, index) => <Product key={index} product={product} />)}
    </div>
  );
};

export default Products;
