import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import SellProductForm from "./home/SellProductForm"

const ApplicationViews = () => {
  return(
  <React.Fragment>
      <Route path="/sellproducts" render={props => {
          return <SellProductForm {...props} />
      }}
    />
  </React.Fragment>
  )
}

export default withRouter(ApplicationViews)