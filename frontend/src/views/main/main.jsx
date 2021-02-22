import React from "react";
import HeroPhoto from "../../components/main-components/hero-photo/hero-photo";
import ProductConfig from "../../components/main-components/product-config/product-config";
import Products from "../../components/main-components/products/products";
import SortBar from "../../components/main-components/sortBar/sortBar"
import SecondNavigation from "../../components/secondNavigation/secondNavigation"
export const MainView = () => {
 
  return (
    <div>
      <SecondNavigation />
      <HeroPhoto />
      <SortBar />
      <ProductConfig />
      <Products />
    </div>
  );
};

export default MainView