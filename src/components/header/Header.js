import React from "react";
import { HeaderConteinerStyled } from "./HeaderStyled";
import { ReactComponent as Icon } from "../../icons/avatar.svg";

import HeaderItem from "./headerItem/HeaderItem";
import { mainRouts } from "../../routs/mainRouter";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authTokenSelector, userSelector } from "../../redux/auth/authSelector";
import { logoutUserOperation } from "../../redux/auth/authOperations";

const Header = () => {
 const authToken = useSelector(authTokenSelector);
 const user = useSelector(userSelector);
 const dispatch = useDispatch();

 return (
  <>
   <HeaderConteinerStyled>
    <ul className="NavLinkUl">
     {mainRouts.map(
      (route) =>
       route.isLink && (
        <HeaderItem route={route} authToken={authToken} key={route.path} />
       )
     )}
     {authToken && (
      <>
       <li className="nawLink" onClick={() => dispatch(logoutUserOperation())}>
        <NavLink to="/home" className="NavLink">
         <span className="userName">{user.name}</span>
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
