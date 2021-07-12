import React from "react";
import Header from "./components/header/Header";

import { mainRouts } from "./routs/mainRouter";
import { Switch } from "react-router-dom";
import PrivateRoute from "./routs/PrivateRoute";
import PublicRoute from "./routs/PublicRoute";

import { useSelector } from "react-redux";
import { authTokenSelector } from "./redux/auth/authSelector";

const App = () => {
 const authToken = useSelector(authTokenSelector);
 return (
  <>
   <Header />
   <Switch>
    {mainRouts.map((route) =>
     route.isPrivate ? (
      <PrivateRoute
       path={route.path}
       exact={route.exact}
       isRegistered={route.isRegistered}
       component={route.component}
       key={route.path}
       authToken={authToken}
      />
     ) : (
      <PublicRoute
       path={route.path}
       exact={route.exact}
       component={route.component}
       isRegistered={route.isRegistered}
       key={route.path}
       authToken={authToken}
      />
     )
    )}
   </Switch>
  </>
 );
};

export default App;
