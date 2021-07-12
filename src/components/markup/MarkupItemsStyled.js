import styled from "styled-components";

export const MarkupItemStyledContainer = styled.div`
 width: 500px;
 margin: 0 auto;
 padding: 10px;

 .ulContainer {
  padding: 0;
 }
 .newContact {
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  list-style: none;
  border: 1px solid black;
  border-radius: 5px;

  background-color: rgb(111, 111, 250);
 }
 .newContactName {
  display: inline-block;
  color: white;
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
