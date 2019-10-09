import React from "react";
import Product from "../product/Product";

const ProductCategoryList = props => {
  return (
    <>
      <article>
        {props.products
          .filter(
            product =>
              product.product_category.split("").reverse()[0] ===
              String(sessionStorage.getItem("category"))
          )
          .reverse()
          .map(product => (
            <Product key={product.id} product={product} />
          ))}
      </article>
    </>
  );
};

export default ProductCategoryList;
