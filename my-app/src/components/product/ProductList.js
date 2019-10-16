import React from "react";
import Product from "./Product";

const ProductList = props => {
 
  return (
    <>
      <article>
        {props.products
          .reverse()
          .slice(0, 20)
          .map(product => (
            <Product key={product.id} thismodule={props.thismodule} product={product} getUserProducts={props.getUserProducts} />
          ))}
      </article>
    </>
  );
};

export default ProductList;
