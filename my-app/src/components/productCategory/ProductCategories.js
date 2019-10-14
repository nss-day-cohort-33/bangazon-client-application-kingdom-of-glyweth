import React from "react";
import { useEffect, useState } from "react";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import ProductCategory from "./ProductCategory";

// Created By: Alex Rumsey
// Gets categories, then maps over them.

const ProductCategories = props => {
  return (
    <>
      <article className="categoryList">
        {props.categories.map(category => (
          <ProductCategory key={category.id} category={category} />
        ))}
      </article>
    </>
  );
};

export default ProductCategories;
