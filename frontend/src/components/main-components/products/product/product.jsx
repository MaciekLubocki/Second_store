import React from "react";
export const Product = ({product: {name, cost}}) => {
 
  return (
    <>
        <div>
            <p>Name - {name}</p>
            <p>Cost - {cost}</p>
        </div>
    </>
  );
};

export default Product