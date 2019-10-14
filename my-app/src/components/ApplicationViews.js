import React, { useEffect, useState } from "react";
import { withRouter, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import MyProfile from "./profile/MyProfile";
import AddPaymentForm from "./profile/AddPayment";
import Product from "./product/ProductDetail";
import APImanager from "../modules/APImanager";
import useSimpleAuth from "../hooks/ui/useSimpleAuth";
import SellProductForm from "./home/SellProductForm";
import HomePage from "./homePage/HomePage";
// import CategoryPage from "./productCategory/CategoryPage";
import ProductCategory from "./productCategory/ProductCategory";
import ProductCategoryList from "./productCategory/ProductCategoryList";
import isAuthenticated from "../hooks/ui/useSimpleAuth";

const ApplicationViews = () => {
  const [products, setProducts] = useState([]);
  const [product_categories, setProductCategories] = useState([]);
  const [customers, setCustomers] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getProducts = () => {
    APImanager.getAll("products").then(setProducts);
  };
  const getProductCategories = () => {
    APImanager.getAll("product_category").then(setProductCategories);
  };

  const getCustomers = () => {
    APImanager.getAll("customer").then(setCustomers);
  };
  //     useEffect(() => {
  //     APImanager.getAll("product_category")
  //     .then(setProductCategories)
  //   }
  const addProduct = newProduct => {
    return APImanager.post("products", newProduct);
  };

  useEffect(() => {
    getProducts();
    getProductCategories();
    getCustomers();
  }, []);

  return (
    <React.Fragment>
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
          return (
            <ProductCategory
              {...props}
              product_categories={product_categories}
            />
          );
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
        path="/myprofile"
        render={props => {
          return <MyProfile customers={customers} {...props} />;
        }}
      />
      <Route
        path="/paymentform"
        render={props => {
          return <AddPaymentForm customers={customers} {...props} />;
        }}
      />
      <Route
        path="/sellproducts"
        render={props => {
          if (isAuthenticated()) {
            return (
              <SellProductForm
                product_categories={product_categories}
                addProduct={addProduct}
                {...props}
              />
            );
          } else {
            return <Login {...props} />;
          }
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
      <Route
        exact
        path="/types/:categoryId(\d+)"
        render={props => {
          console.log("params", props.match.params.categoryId, product_categories);
          let category = product_categories.find(
            category => category.id === +props.match.params.categoryId
          );
          console.log(category);
          if (!category) {
            category = { id: 404, name: "Category Not Found." };
          }
          return <ProductCategoryList {...props} category={category} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
