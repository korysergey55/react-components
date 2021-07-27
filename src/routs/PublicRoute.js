import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ path, isRegistered, exact, component, authToken }) => {
 return authToken && isRegistered ? (
  <Redirect to="/home" />
 ) : (
  <Route path={path} exact={exact} component={component} />
 );
};

export default PublicRoute;
