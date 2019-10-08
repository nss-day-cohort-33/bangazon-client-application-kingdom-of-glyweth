import { Route } from "react-router-dom";
import React from "react";
import HomePage from "./homePage/HomePage"
import { withRouter } from "react-router-dom";

const ApplicationViews = () => {
  return (
    // <h1>YoYo!</h1>
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <HomePage {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
