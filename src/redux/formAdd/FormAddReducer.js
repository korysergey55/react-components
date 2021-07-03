import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { submitNewItem, handleDelete } from "./FormAddActions";

const formItemReducer = createReducer([], {
 [submitNewItem]: (state, action) => [...state, action.payload],
 [handleDelete]: (state, action) =>
  state.filter((contact) => contact.id !== action.payload),
});

const formAddReducer = combineReducers({
 items: formItemReducer,
});

export default formAddReducer