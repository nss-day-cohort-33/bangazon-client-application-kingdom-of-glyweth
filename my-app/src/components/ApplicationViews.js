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
import HomePage from "./homePage/HomePage";
// import CategoryPage from "./productCategory/CategoryPage";
// import ProductCategory from "./productCategory/ProductCategory";
// import ProdCatList from "./productCategory/ProdCatList";
// import isAuthenticated from "../hooks/ui/useSimpleAuth";
// import ProductCategories from "./productCategory/ProductCategories";
import CategoryPage from "./productCategory/CategoryPage";
import ProductCategoryList from "./productCategory/ProductCategoryList";
import PaymentOptions from "./profile/PaymentOptions";

const ApplicationViews = () => {
  const [products, setProducts] = useState([])
  const [product_categories, setProductCategories] = useState([])
  const [customers, setCustomers] = useState([])
  const { isAuthenticated } = useSimpleAuth()

  const getProducts = () => {
    APImanager.getAllUnauthorized("products").then(setProducts);
  };
  const getProductCategories = () => {
    APImanager.getAllUnauthorized("product_category").then(setProductCategories);
  };
  const getCustomers = () => {
    APImanager.getAll("customer").then(setCustomers)
  }
  //     useEffect(() => {
  //     APImanager.getAll("product_category")
  //     .then(setProductCategories)
  //   }
  const addProduct = newProduct => {
    return APImanager.post("products", newProduct)
  }

  useEffect(() => {
    getProducts()
    getProductCategories()
    getCustomers()
  }, [])

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <HomePage products={products} {...props} />
        }}
      />
      <Route
        path="/login"
        render={props => {
          return <Login {...props} />
        }}
      />

      <Route
        exact
        path="/product_category"
        render={props => {
          if (isAuthenticated()) {
            return (
              <CategoryPage {...props}
              />
            )
          } else {
            return <Login {...props} />
          }
        }}
      />

      <Route
        exact
        path="/products_by_category"
        render={props => {
          if (isAuthenticated()) {
            return (
              <ProductCategoryList
                products={products}
                product_categories={product_categories}
                {...props}
              />
            )
          } else {
            return <Login {...props} />
          }
        }}
      />

      <Route
        path="/register"
        render={props => {
          return <Register {...props} />
        }}
      />

      <Route
        path="/myprofile"
        render={props => {
          return <MyProfile customers={customers} {...props} />
        }}
      />
      <Route
        path="/paymentform"
        render={props => {
          return <AddPaymentForm customers={customers} {...props} />
        }}
      />
      <Route
        path="/paymentoptions"
        render={props => {
          if (isAuthenticated()) {
            return <PaymentOptions {...props} />
          } else {
            return <Redirect to="/login" />
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
            )
          } else {
            return <Login {...props} />
          }
        }}
      />
      <Route
        exact
        path="/products/:each(\d+)"
        render={props => {
          let product = products.find(
            each => each.id === parseInt(props.match.params.each)
          )
          if (!product) {
            product = { id: 404, name: "404" }
          }
          return (
            <Product
              product={product}
              product_categories={product_categories}
            />
          )
        }}
      />

      <Route
        exact
        path="/product_category"
        render={props => {
          return <CategoryPage {...props} />;
        }}
      />

      {/* <Route
        exact
        path="/types"
        render={props => {
          console.log("types cats", categories);
          return <ProductCategories {...props} categories={categories} />;
        }}
      />

      <Route
        exact
        path="/types/:categoryId(\d+)"
        render={props => {
          console.log("params", props.match.params.categoryId, categories);
          let category = categories.find(
            category => category.id === +props.match.params.categoryId
          );
          console.log(category);
          if (!category) {
            category = { id: 404, name: "Category Not Found." };
          }
          return <ProductCategoryList {...props} category={category} />;
        }}
      /> */}
    </React.Fragment>
  )
}

export default withRouter(ApplicationViews)
