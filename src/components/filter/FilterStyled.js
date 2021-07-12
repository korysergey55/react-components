import styled from "styled-components";
export const FilterConteinerStyled = styled.div`
 .mainContainer {
  width: 500px;
  margin: 0 auto;
  padding: 10px;
  background-color: rgb(131, 131, 130);
  border: 7px solid #2196f3;
 }
 .inputContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
 }
 .labelName {
  display: block;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 500;
 }
 .inputName {
  display: block;
  max-width: 200px;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid rgba(33, 33, 33, 0.2);
 }
 .inputName:focus {
  outline: 4px solid #2196f3;
  cursor: pointer;
 }
 .buttonAddContact {
  margin-bottom: 20px;
 }
 .buttonAddContact:hover {
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(79, 79, 243);
 }
`;
