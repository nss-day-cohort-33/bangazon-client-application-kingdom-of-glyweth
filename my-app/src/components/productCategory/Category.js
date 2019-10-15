import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Product from "../product/Product";

const Category = props => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(
      `http://localhost:8000/products?product_category_id=${props.category.id}`,
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(setProducts);
  };

  useEffect(getProducts, []);
  console.log(products);

  return (
    <>
      {products.length > 0 ? (
        <article className="categoryList">
          <Link
            className="nav-link"
            to={`/product_category/${props.category.id}`}
          >
            <h3>
              {props.category.name}({products.length})
            </h3>
          </Link>
          <div className={`productDiv category-${props.category.id}`}>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </article>
      ) : (
        ""
      )}
    </>
  );
};

export default Category;
