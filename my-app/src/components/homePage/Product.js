import React from "react";

const Product = props => {
  return (
    <>
      <section>
        <ul>
          <li>
            <a href={props.product.url}>{props.product.name}</a>
          </li>
          <li>{props.product.price}</li>
          <li>{props.product.description}</li>
          <li>
            <img src={props.product.image}></img>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Product;
