import { Route } from "react-router-dom";
import React from "react";
import HomePage from "./homePage/HomePage";
import { withRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Blank from "./blank";

const ApplicationViews = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={props => {
          return <HomePage {...props} />;
        }}
      />
      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <Blank {...props} />;
        }}
      />
      '
    </>
  );
};

export default withRouter(ApplicationViews);
