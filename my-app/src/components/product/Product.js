import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

/* SN- Added the ability to use this component for the homepage list as well as the my category list. Delete button below dynamically renders based on the thismodule prop being passed down from myproducts component. That delete button can be clicked to soft delete the category*/

const Product = props => {
  const deleteProduct = () => {
    fetch(
      `http://localhost:8000/products/${props.product.product_category_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.getItem("bangazon_token")}`
        }
      }
    ).then(() => {
      props.getUserProducts();
    });
  };

  return (
    <>
      <section>
        <ul>
          <li>
            <Link to={`/products/${props.product.product_category_id}`}>
              {props.product.name}
            </Link>
          </li>
          <li>${props.product.price}</li>
          <li>{props.product.description}</li>
        </ul>
        {props.thismodule === "myProducts" && (
          <button
            onClick={deleteProduct}
            className={`btn btn-primary category-delete-${props.product.product_category_id}`}
          >
            Delete
          </button>
        )}
      </section>
    </>
  );
};

export default Product;
