import styled from "styled-components";

export const HeaderConteinerStyled = styled.div`
 .NavLinkUl {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  border-bottom: 2px solid black;
 }

 .NavLink {
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  text-shadow: 2px 2px 3px #606657;
 }
 .NavLinkActiv {
  color: red;
  text-shadow: 2px 2px 3px rgba(71, 76, 64, 1);
 }
 .userName {
  font-size: 20px;
  font-weight: 500;
  color: green;
 }
`;