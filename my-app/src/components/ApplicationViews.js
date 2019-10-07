import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Login from "./auth/Login"
import Blank from "./blank"

const ApplicationViews = () => {
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
            />
      </React.Fragment>
    )
}

export default withRouter(ApplicationViews)