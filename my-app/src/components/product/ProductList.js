import React from "react";
import Product from "./Product";

const ProductList = props => {
 
  return (
    <>
      <article>
        {props.products
          .slice(0, 20)
          .reverse()
          .map(product => (
            <Product key={product.id} product={product} />
          ))}
      </article>
    </>
  );
};

export default ProductList;
