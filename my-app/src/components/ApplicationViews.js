import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import SellProductForm from "./home/SellProductForm"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

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
  </React.Fragment>
  )
}

export default withRouter(ApplicationViews)