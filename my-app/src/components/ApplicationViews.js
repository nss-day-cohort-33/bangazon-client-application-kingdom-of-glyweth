import React, { useEffect, useState } from "react"
import { withRouter, Route } from "react-router-dom"
import Login from "./auth/Login"
import Register from "./auth/Register"
import useSimpleAuth from "../hooks/ui/userSimpleAuth"
import SellProductForm from "./home/SellProductForm"
import Product from "./product/ProductDetail"
import APImanager from "../modules/APImanager"
import HomePage from "./homePage/HomePage";

const ApplicationViews = () => {
  const [products, setProducts] = useState([])
  const [product_categories, setProductCategories] = useState([])
  const { isAuthenticated } = useSimpleAuth()

  const getProducts = () => {
    APImanager.getAll("products").then(setProducts);
  };
  const getProductCategories = () => {
    APImanager.getAll("product_category")
    .then(setProductCategories)
  }
  const addProduct = (newProduct) => {
    APImanager.post("product", newProduct)
  }
 
  useEffect(() => {
    getProducts();
    getProductCategories();
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
            path="/login" render={props => {
                return <Login {...props} />
            }}
        />
        <Route
            path="/register"
            render={props => {
            return <Register {...props} />
            }}
        />
        <Route
          exact path="/products/:each(\d+)"
          render={props => {
            let product = products.find(each =>
              each.id === parseInt(props.match.params.each)
              )
              if (!product) {
                product = {id:404, name:"404"}
              }
              return <Product product={product} product_categories={product_categories} />
          }}
          />
        <Route path="/sellproducts" render={props => {
            if(isAuthenticated()){
              return <SellProductForm product_categories={product_categories} {...props} />
            }
            else {
              return <Login {...props} />
            }
          }}
        />

      </React.Fragment>
    )
}

export default withRouter(ApplicationViews);
