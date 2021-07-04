import styled from "styled-components";

export const HeaderConteinerStyled = styled.ul`
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
 border-bottom: 2px solid black;

 .NavLink {
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  color: black;

 }
 .NavLinkActiv{
     color: red;
 }
`;