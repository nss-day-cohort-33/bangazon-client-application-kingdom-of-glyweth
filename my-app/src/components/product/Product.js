import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Product = props => {
  
  return (
    <>
      <section>
        <ul>
          <li>
            <Link to={`/products/${props.product.id}`}>
              {props.product.name}
            </Link>
          </li>
          <li>${props.product.price}</li>
          <li>{props.product.description}</li>
        </ul>
        {props.thismodule === "myProducts" &&
        <button className={`btn btn-primary product-delete-${props.product.id}`}>Delete</button>
        }
      </section>
    </>
  );
};

export default Product;
