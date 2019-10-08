import React from "react";
import Product from "./Product";

const ProductList = props => {
  console.log(props.products);
  let first20 = [];
  for (let i = 0; i < 20; i++) {
    first20.push(props.products);
  }
  console.log(first20);
  return (
    <>
      <article>
        {first20.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </article>
    </>
  );
};

export default ProductList;
