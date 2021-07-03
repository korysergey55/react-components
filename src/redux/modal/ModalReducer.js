//=======================Redux===============================
// import { combineReducers } from "redux";
// import { TAGGLE_MODAL } from "./ModalActions";
// const taggleReducer = (state = { isModalOpen: false }, action) => {
//  switch (action.payload) {
//   case TAGGLE_MODAL:
//    return { ...state, isModalOpen: !state.isModalOpen };

//   default:
//    return state;
//  }
// };
// const taggleModalReducer = combineReducers({
//  taggleReducer,
// });
// export default taggleModalReducer;

//=======================Redux-Toolkit===============================
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { taggleModal } from "./ModalActions";

const modalReducer = createReducer(
 false ,
 {
  [taggleModal]: (state, action) => !state,
 }
);
const taggleModalReducer = combineReducers({
 isModalOpen: modalReducer,
});
export default taggleModalReducer;
