import React from "react";
import Product from "./Product";

const ProductList = props => {
    console.log(props.products)
  return (
    <>
      <article>
        {props.products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </article>
    </>
  );
};

export default ProductList;
