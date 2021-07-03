import { createReducer, combineReducers } from "@reduxjs/toolkit";

import { getFilter } from "./FilterActions";

const getFilterReducer = createReducer("", {
 [getFilter]: (state, action) => action.payload,
});

const filterReducer = combineReducers({
 query: getFilterReducer,
});

export default  filterReducer ;