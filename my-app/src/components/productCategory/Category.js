import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Category = props => {
  const clearAndReset = () => {
    console.log("clicked");
    sessionStorage.clear();
    sessionStorage.setItem("category", props.category.id);
  };
  return (
    <>
      <section>
        <ul>
          <li>
            <Link onClick={clearAndReset()} to={"/products_by_category"}>
              {props.category.name}
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Category;
