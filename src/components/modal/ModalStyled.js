import styled from "styled-components";
export const ModalStyled = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: rgba(0, 0, 0, 0.8);
 z-index: 1200;

 .Modal {
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  margin: 0 auto;
  padding: 15px;
  background-color: white;
 }
 .closeModal {
  margin-top: 20px;

  :hover {
   color: white;
   background-color: red;
  }
 }
`;
