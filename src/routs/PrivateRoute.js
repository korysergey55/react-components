import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ path, exact, component, authToken }) => {
 return !authToken ? (
  <Redirect to="/login" />
 ) : (
  <Route path={path} exact={exact} component={component} />
 );
};

export default PrivateRoute;
