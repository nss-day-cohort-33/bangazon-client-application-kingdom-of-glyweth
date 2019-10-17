import React, { useEffect, useState } from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import MyProfile from "./profile/MyProfile";
import AddPaymentForm from "./profile/AddPayment";
import Product from "./product/ProductDetail";
import APImanager from "../modules/APImanager";
import useSimpleAuth from "../hooks/ui/useSimpleAuth";
import SellProductForm from "./home/SellProductForm";
// import isAuthenticated from "../hooks/ui/useSimpleAuth";
import PaymentOptions from "./profile/PaymentOptions";
import MyProducts from "./myProducts/MyProducts";
import Cart from "./cart/Cart"
import ProductByCategoryList from "./productCategory/ProductByCategoryList";
import CategoryList from "./productCategory/CategoryList"
import ProductList from "./product/ProductList";

const ApplicationViews = () => {
  const [products, setProducts] = useState([]);
  const [product_categories, setProductCategories] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [order, setOrders] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getProducts = () => {
    APImanager.getAllUnauthorized("products").then(setProducts);
  };
  const getProductCategories = () => {
    APImanager.getAllUnauthorized("product_category").then(
      setProductCategories
    );
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

  const getOrder = () => {
    APImanager.getAllUnauthorized("order").then(
      setOrders
    );
  };

  useEffect(() => {
    getProducts();
    getProductCategories();
    getCustomers();
    getOrder();
  }, []);

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <ProductList products={products} {...props} />;
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
          if (isAuthenticated()) {
            return <CategoryList {...props} categories={product_categories} />;
          } else {
            return <Login {...props} />;
          }
        }}
      />

      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />

      <Route
        exact path="/cart"
        render={props => {
          if (isAuthenticated()) {
            return (
              <Cart {...props} />
            )
          } else {
            return <Redirect to="/login" />
          }
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
        path="/paymentoptions"
        render={props => {
          if (isAuthenticated()) {
            return <PaymentOptions {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
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
                getProducts={getProducts}
                {...props}
              />
            );
          } else {
            return <Login {...props} />;
          }
        }}
      />
      <Route
        path="/myproducts"
        render={props => {
          if (isAuthenticated()) {
            return (
              <MyProducts getProducts={getProducts}
                {...props}
              />
            )
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
        path="/product_by_category/:categoryId(\d+)"
        render={props => {
          let category = product_categories.find(
            category => category.id === Number(props.match.params.categoryId)
          );
          if (!category) {
            category = { id: 404, name: "Category Not Found." };
          }
          return <ProductByCategoryList {...props} category={category} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
