import React, { Component } from "react";
import Header from "./components/header/Header";

import { mainRouts } from "./routs/mainRouter";
import { Route, Switch } from "react-router-dom";

class App extends Component {
 render() {
  return (
   <>
    <Header />
    <Switch>
     {mainRouts.map((route) => (
      <Route
       path={route.path}
       exact={route.exact}
       component={route.component}
       isRegistered={route.isRegistered}
       isPrivate={route.isPrivate}
       key={route.name}
      />
     ))}
    </Switch>
   </>
  );
 }
}

export default App;
