import { Route } from "react-router-dom";
import React from "react";
import HomePage from "./homePage/HomePage";
import { withRouter } from "react-router-dom";
import Register from "./auth/Register";

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
    </>
  );
};

export default withRouter(ApplicationViews);
