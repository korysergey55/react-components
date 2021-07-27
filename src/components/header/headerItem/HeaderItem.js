import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HeaderItem = ({ route, authToken }) => {
 return (
  <>
   {!route.isPrivate && !route.isRegistered && (
    <li>
     <NavLink
      to={route.path}
      exact={route.exact}
      className="NavLink"
      activeClassName="NavLinkActiv"
     >
      {route.name}
     </NavLink>
    </li>
   )}

   {!route.isPrivate && route.isRegistered && !authToken && (
    <li key={route.path}>
     <NavLink
      to={route.path}
      exact={route.exact}
      className="NavLink"
      activeClassName="NavLinkActiv"
     >
      {route.name}
     </NavLink>
    </li>
   )}
   {route.isPrivate && !route.isRegistered && authToken && (
    <li key={route.path}>
     <NavLink
      to={route.path}
      exact={route.exact}
      className="NavLink"
      activeClassName="NavLinkActiv"
     >
      {route.name}
     </NavLink>
    </li>
   )}
  </>
 );
};

export default withRouter(HeaderItem);
