import React, { useEffect, useState } from "react"
import { withRouter, Route } from "react-router-dom"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Blank from "./blank"
import Product from "./product/ProductDetail"
import APImanager from "../modules/APImanager"

const ApplicationViews = () => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    APImanager.getAll("products")
    .then(setProducts)
  }
  useEffect(getProducts, [])

    return (
      <React.Fragment>
      {/* <h1>YoYo!</h1> */}
            <Route
                path="/login" render={props => {
                    return <Login {...props} />
                }}
            />

            <Route
                exact path="/" render={props => {
                    return <Blank {...props} />
                }}
            />'
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
                  return <Product product={product} />
              }}
              />

      </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
