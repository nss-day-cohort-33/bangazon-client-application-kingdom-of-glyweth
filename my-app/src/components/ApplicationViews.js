import React from "react"
import { withRouter, Route } from "react-router-dom"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Blank from "./blank"
import MyProfile from "./profile/MyProfile"
import AddPaymentForm from "./profile/AddPayment"

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
            <Route
                path="/register"
                render={props => {
                return <Register {...props} />
                }}
            />
            <Route
                path="/myprofile"
                render={props => {
                    return <MyProfile {...props} />
                }}
            />
            <Route
                path="/paymentform"
                render={props => {
                    return <AddPaymentForm {...props} />
                }}
            />
      </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
