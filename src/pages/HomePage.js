import { Component } from "react";
import styles from "./module/HomePageStyled.module.css";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import { homeRouts } from "../routs/homeRouts";

class HomePage extends Component {
 state = {
  from: "",
 };

 componentDidMount() {
  if (this.props.location.from) {
   this.setState({ from: this.props.location.from });
  }
 }

 getGoBack = () => {
  this.props.history.push({ pathname: this.props.location.from });
 };

 render() {
  console.log(this.props.location);
  return (
   <>
    <div className={styles.homePageContainer}>
     <h2 className={styles.title}>Home Page</h2>

     <NavLink
      exact
      to={{
       pathname: `${this.props.match.url}/egept`,
       from: this.props.location.pathname,
      }}
      className={styles.NavLink}
      activeClassName={styles.NavLinkActiv}
     >
      Egept
     </NavLink>
     <NavLink
      exact
      to={{
       pathname: `${this.props.match.url}/turkish`,
       from: this.props.location.pathname,
      }}
      className={styles.NavLink}
      activeClassName={styles.NavLinkActiv}
     >
      Turkish
     </NavLink>
     <NavLink
      exact
      to={{
       pathname: `${this.props.match.url}/grece`,
       from: this.props.location.pathname,
      }}
      className={styles.NavLink}
      activeClassName={styles.NavLinkActiv}
     >
      Grece
     </NavLink>

     <button
      type="button"
      className={styles.goBack}
      onClick={this.getGoBack}
      //   disabled={!this.state.from}
     >
      Go back
     </button>

     <Switch>
      {homeRouts.map((route) => (
       <Route
        to={this.props.match.url + route.path}
        path={this.props.match.path + route.path}
        exact={route.exact}
        component={route.component}
        key={route.path}
       />
      ))}
     </Switch>
    </div>
   </>
  );
 }
}

export default withRouter(HomePage);
