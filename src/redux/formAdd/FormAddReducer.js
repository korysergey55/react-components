import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
 getAllContacts,
 getAllContnactsError,
 submitNewItem,
 submitNewItemError,
 handleDelete,
 handleDeleteError,
} from "./FormAddActions";

const formItemReducer = createReducer([], {
 [getAllContacts]: (state, action) =>  action.payload,
 [submitNewItem]: (state, action) => [...state, action.payload],
 [handleDelete]: (state, action) =>
  state.filter((contact) => contact.id !== action.payload),
});

const formErorrReducer = createReducer([], {
 [getAllContnactsError]: (state, action) => action.payload,
 [submitNewItemError]: (state, action) => action.payload,
 [handleDeleteError]: (state, action) => action.payload,
});

const formAddReducer = combineReducers({
 items: formItemReducer,
 itemsError: formErorrReducer,
});

export default formAddReducer;
