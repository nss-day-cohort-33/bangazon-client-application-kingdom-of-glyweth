import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Category = props => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(
      `http://localhost:8000/products?product_category="http://127.0.0.1:8000/product_category/${props.category.id}`,
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(setProducts);
  };

  useEffect(getProducts, []);
  return (
    <>
      <section>
        <ul>
          <li>
            <Link to={"/products_by_category"}>
              {props.category.name} {products.length}
            </Link>

            <ul>
              {products.forEach(product => {
                <li><Link to={`/products/${product.id}`}></Link></li>
              })}
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Category;
