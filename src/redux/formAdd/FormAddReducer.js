import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { submitNewItem } from "./FormAddActions";

const formItemReducer = createReducer([],{
    [submitNewItem]:(state, action) => [...state, action.payload],
})

const formAddReducer = combineReducers({
 items: formItemReducer,
});

export default formAddReducer