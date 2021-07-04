import React from "react";
import { mainRouts } from "../../routs/mainRouter";
import { NavLink, withRouter } from "react-router-dom";
import { HeaderConteinerStyled } from "./HeaderStyled";

const Header = ({ location }) => {
 return (
  <>
   <HeaderConteinerStyled>
    {mainRouts.map(
     ({ name, path, exact, isLink }) =>
      isLink && (
       <li  key ={path}>
        <NavLink
         to={path}
         exact={exact}
         className="NavLink"
         activeClassName="NavLinkActiv"
        >
         {name}
        </NavLink>
       </li>
      )
    )}
   </HeaderConteinerStyled>
  </>
 );
};

export default withRouter(Header);
