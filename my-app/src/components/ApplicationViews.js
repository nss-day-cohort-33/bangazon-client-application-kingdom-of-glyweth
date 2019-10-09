import React, { useEffect, useState } from "react";
import { withRouter, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Product from "./product/ProductDetail";
import APImanager from "../modules/APImanager";
import HomePage from "./homePage/HomePage";
import CategoryPage from "./productCategory/CategoryPage";
import ProductCategoryList from "./productCategory/ProductCategoryList";

const ApplicationViews = () => {
  const [products, setProducts] = useState([]);
  const [product_categories, setProductCategories] = useState([]);

  const getProducts = () => {
    APImanager.getAll("products").then(setProducts);
  };
  const getProductCategories = () => {
    APImanager.getAll("product_category").then(setProductCategories);
  };
  useEffect(() => {
    getProducts();
    getProductCategories();
  }, []);

  return (
    <React.Fragment>
      {/* <h1>YoYo!</h1> */}
      <Route
        exact
        path="/"
        render={props => {
          return <HomePage products={products} {...props} />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />

      <Route
        exact
        path="/product_category"
        render={props => {
          return <CategoryPage {...props} />;
        }}
      />

      <Route
        exact
        path="/products_by_category"
        render={props => {
          return (
            <ProductCategoryList
              products={products}
              product_categories={product_categories}
              {...props}
            />
          );
        }}
      />

      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route
        exact
        path="/products/:each(\d+)"
        render={props => {
          let product = products.find(
            each => each.id === parseInt(props.match.params.each)
          );
          if (!product) {
            product = { id: 404, name: "404" };
          }
          return (
            <Product
              product={product}
              product_categories={product_categories}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
