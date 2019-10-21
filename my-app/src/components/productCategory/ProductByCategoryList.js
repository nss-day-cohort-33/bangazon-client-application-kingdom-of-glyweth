import React, { useState, useEffect } from "react";
import ProductByCategory from "./ProductByCategory";

const ProductByCategoryList = props => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(`http://localhost:8000/products?product_category=${props.category.id}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(setProducts);
  };

  useEffect(getProducts, []);

  return (
    <>
      <article>
        {products.map(product => (
          <ProductByCategory key={product.id} product={product} />
        ))}
      </article>
    </>
  );
};

export default ProductByCategoryList;
