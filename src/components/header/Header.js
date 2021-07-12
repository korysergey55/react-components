import React from "react";
import { HeaderConteinerStyled } from "./HeaderStyled";
import { ReactComponent as Icon } from "../../icons/avatar.svg";

import HeaderItem from "./headerItem/HeaderItem";
import { mainRouts } from "../../routs/mainRouter";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authTokenSelector } from "../../redux/auth/authSelector";
import { logoutUserOperation } from "../../redux/auth/authOperations";

const Header = () => {
 const authToken = useSelector(authTokenSelector);
 const dispatch = useDispatch();

 return (
  <>
   <HeaderConteinerStyled>
    <ul className="NavLinkUl">
     {mainRouts.map(
      (route) =>
       route.isLink && <HeaderItem route={route} authToken={authToken} />
     )}
     {authToken && (
      <>
       <li className="nawLink" onClick={logoutUserOperation}>
        <NavLink to="/logout" className="NavLink">
         <Icon width="40" height="40" />
         <span>LogOut</span>
        </NavLink>
       </li>
      </>
     )}
    </ul>
   </HeaderConteinerStyled>
  </>
 );
};

export default Header;
