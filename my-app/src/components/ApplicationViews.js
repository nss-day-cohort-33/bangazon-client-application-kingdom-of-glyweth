import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"

const ApplicationViews = () => {
    return (
      <h1>YoYo!</h1>
    )
}

const getSingleProduct = (productId) => {
  if (isAuthenticated()) {
      fetch(`http://localhost:8000/products?product=${productId}`, {
          "method": "GET",
          "headers": {
              "Accept": "application/json",
              "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
          }
      })
          .then(response => response.json())
          // .then((allAttractions) => {
          //     setAttractions(allAttractions)
          // })
  }
}

  <Route exact path="/products/:each(\d+)" render={(props) => {
              // Find the product with the id of the route parameter
              let product = this.state.products.find(product =>
                  product.id === parseInt(props.match.params.each)
              )
              // If the product wasn't found, create a default one
              if (!product) {
                  product = {id:404, name:"404", breed: "Dog not found"}
              }

              return <ProductDetail product={getSingleProduct} />
            }} />

export default withRouter(ApplicationViews)