import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Category = props => {
  return (
    <>
      <section>
        <ul>
          <li>
            <Link to={`/products/${props.category.id}`}>
              {props.category.name}
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Category;