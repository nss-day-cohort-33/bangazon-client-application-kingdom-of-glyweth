import React from "react"
import { withRouter } from "react-router-dom"
import SellProductForm from "./home/SellProductForm"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Blank from "./blank"

const ApplicationViews = () => {
  const { isAuthenticated } = useSimpleAuth()

  return(
  <React.Fragment>
      <Route path="/sellproducts" render={props => {
        if(isAuthenticated()){
          return <SellProductForm {...props} />
        }
        else {
          return <Login {...props} />
        }
      }}
    />
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
  </React.Fragment>
  )
}

export default withRouter(ApplicationViews)
