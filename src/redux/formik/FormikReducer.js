import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getFormikValue, getFormikValueError } from "./FormikActions";


const itemFormikReducer = createReducer(null, {
 [getFormikValue]: (state, action) => action.payload,
});
const itemFormikReducerError = createReducer(null, {
    [getFormikValueError] : (state, action) => action.payload,
    
})

const formikReducer = combineReducers({
 item: itemFormikReducer,
 error: itemFormikReducerError,
});

export default formikReducer;