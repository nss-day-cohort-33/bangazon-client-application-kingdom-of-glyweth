import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import Product from "..product/Product";
import "./ProductCategory.css";

// Created By: Alex Rumsey
// Gets products by category ID, then displays products in the DOM by category.

const ProductCategoryList = props => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(`http://localhost:8000/products?category=${props.category.id}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(setProducts);
  };

  useEffect(getProducts, []);

  return (
    <>
      {products.length > 0 ? (
        <article className="categoryList">
          <Link className="nav-link" to={`/types/${props.category.id}`}>
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

export default ProductCategoryList;
