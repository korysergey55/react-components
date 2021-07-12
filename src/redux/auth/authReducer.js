import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
 logoutUserAction,
} from "./authActions";

const tokenReducer = createReducer(null, {
 [registerUserAction]: (state, action) => action.payload.token,
 [loginUserAction]: (state, action) => action.payload.token,
 [logoutUserAction]: (state, action) => null,
});

const userReducer = createReducer(null, {
 [registerUserAction]: (state, action) => action.payload.user,
 [loginUserAction]: (state, action) => action.payload.user,
 [logoutUserAction]: (state, action) => null,
});

const errorReducer = createReducer(null, {
 [registerUserActionError]: (state, action) => action.payload,
 [loginUserActionError]: (state, action) => action.payload,
 [logoutUserAction]: (state, action) => action.payload,
});

const authReducer = combineReducers({
 token: tokenReducer,
 user: userReducer,
 error: errorReducer,
});

export default authReducer;
