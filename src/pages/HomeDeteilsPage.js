import React, { Component, Suspense } from "react";
import styles from "./module/HomePageStyled.module.css";
import Loader from "../components/loader/Loader";
import { homeRouts } from "../routs/homeRouts";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";

class HomeDeteilsPage extends Component {
 state = { from: "" };

 componentDidMount() {
  if (this.props.location.from) {
   this.setState({ from: this.props.location.from });
  }
 }

 getGoBack = () => {
  if (this.props.location?.from)
   this.props.history.push({ pathname: this.props.location.from });
 };
 render() {
  return (
   <>
    {homeRouts.map((route) => (
     <NavLink
      exact
      to={{
       pathname: this.props.match.url + route.path, // `/home${route.path}`
       from: this.props.location.pathname,
      }}
      key={route.path}
      className={styles.NavLink}
      activeClassName={styles.NavLinkActiv}
     >
      {route.name}
     </NavLink>
    ))}
    <button
     type="button"
     className={styles.goBack}
     onClick={this.getGoBack}
     disabled={!this.props.location.from}
    >
     Go back
    </button>
    <Suspense fallback={<Loader />}>
     <Switch>
      {homeRouts.map((route) => (
       <Route
        path={this.props.match.path + route.path}
        exact={route.exact}
        component={route.component}
        key={route.path}
       />
      ))}
     </Switch>
    </Suspense>
   </>
  );
 }
}

export default withRouter(HomeDeteilsPage);
