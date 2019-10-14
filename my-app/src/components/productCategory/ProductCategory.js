import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import Product from "../product/Product";
import "./ProductCategory.css";

// Created By: Alex Rumsey
// Gets products by category ID, then displays products in the DOM by category in lists of three.

const ProductCategory = props => {
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
      {products.length > 0 ? (
        <article className="categoryList">
          <Link
            className="nav-link"
            to={`/product_category/${props.product_category.id}`}
          >
            <h3>
              {props.product_category.name}({products.length})
            </h3>
          </Link>
          <div className={`productDiv category-${props.product_category.id}`}>
            {products.slice(0, 3).map(product => (
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

export default ProductCategory;
