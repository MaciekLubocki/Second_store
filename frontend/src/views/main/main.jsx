import React from "react";
import Footer from "../../components/main-components/footer/footer";
import HeroPhoto from "../../components/main-components/hero-photo/hero-photo";
import ProductConfig from "../../components/main-components/product-config/product-config";
import Products from "../../components/main-components/products/products";
export const MainView = () => {
 
  return (
    <div>
      <HeroPhoto />
      <ProductConfig />
      <Products />
      <Footer />
    </div>
  );
};

export default MainView