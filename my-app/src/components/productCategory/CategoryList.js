import React from "react";
import Category from "./Category";

const CategoryList = props => {
  
  
  return (
    <>
      <article>
        {props.categories.map(category => (
          <Category key={category.id} category={category} {...props} />
        ))}
      </article>
    </>
  );
};

export default CategoryList;
