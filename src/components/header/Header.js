import React from "react";
import { mainRouts } from "../../routs/mainRouter";
import { NavLink, withRouter } from "react-router-dom";
import { HeaderConteinerStyled } from "./HeaderStyled";

const Header = ({ location }) => {
 return (
  <>
   <HeaderConteinerStyled>
    <ul className="NavLinkUl">
     {mainRouts.map(
      (route) =>
       route.isLink && (
        <li key={route.path}>
         <NavLink
          to={route.path}
          exact={route.exact}
          route={route}
          className="NavLink"
          activeClassName="NavLinkActiv"
         >
          {route.name}
         </NavLink>
        </li>
       )
     )}
    </ul>
   </HeaderConteinerStyled>
  </>
 );
};

export default withRouter(Header);
