import React from "react"
import { withRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import Register from "./auth/Register"

const ApplicationViews = () => {
  return (
    <>
      <Route
        path="/register"
        render={props => {
          return <Register {...props} />
        }}
      />
    </>
  )
}

export default withRouter(ApplicationViews)
