import React from "react";
import { Link } from "react-router-dom";
import { withRouter, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

const Product = props => {
  return (
    <>
      <section>
        <ul>
          <li>
            <img src={props.product.image}></img>
          </li>
          <li>
            <Link to={`/products/${props.product.id}`}>
              {props.product.name}
            </Link>
          </li>
          <li>{props.product.price}</li>
          <li>{props.product.description}</li>
        </ul>
      </section>
    </>
  );
};

export default Product;
