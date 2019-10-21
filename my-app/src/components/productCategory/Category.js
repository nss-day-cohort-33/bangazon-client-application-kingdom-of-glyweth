import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Product from "../product/Product";

const Category = props => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = () => {
    fetch(
      // `http://localhost:8000/categoryList?category=${props.category.id}`,
      "http://localhost:8000/product_category?limit",
      // 'http://localhost:8000/categoryList?quantity=3',

      {
        method: "GET",
        headers: {
          Authorization: `Token ${localStorage.getItem("bangazon_token")}`
        }
      }
    )
      .then(response => response.json())
      .then(category => {
        setCategoryList(category);
      });
  };

  useEffect(getCategoryList, []);

  return (
    <>
      <h2>
        <strong>Products by Category</strong>
      </h2>
      {/* Maps through categories, if more than one product in category, it shows the category */}
      {categoryList
        .filter(
          item =>
            item.products.map(item => {
              return <div>{item.name}</div>;
            }).length >= 1
        )
        .map(item => {
          return (
            <div className="category-name">
              {/* Maps through products and get the number of products in each category */}
              <h4>
                <Link to={`/categoryDetail/${item.id}`}>{item.name}</Link>(
                {
                  item.products.map(item => {
                    return <div>{item.name}</div>;
                  }).length
                }
                )
              </h4>
              {/* Only shows the first three products in each category */}
              {item.products.map(item => {
                let itemId = +item.url.split("s/")[1];
                return (
                  <div className="product-name">
                    <Link className="text-info" to={`/productDetail/${itemId}`}>
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
};

export default Category;
