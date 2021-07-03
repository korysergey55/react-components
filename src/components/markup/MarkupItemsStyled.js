import styled from "styled-components";

export const MarkupItemStyledContainer = styled.div`
 width: 500px;
 margin: 0 auto;
 padding: 10px;

 .newContact {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  border: 1px solid black;
  list-style: none;
 }
 .newContactName {
  display: inline-block;
  color: blue;
  margin-right: 20px;
 }
 .btn {
  display: inline-block;
 }
 .btn:hover {
  cursor: pointer;
  background-color: crimson;
  color: white;
 }
`;
