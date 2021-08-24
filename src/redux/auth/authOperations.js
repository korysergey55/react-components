import {
 registrationUserApi,
 loginUserApi,
 logoutApi,
} from "../../servises/authApi";
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
 logoutUserAction,
 logoutUserActionError,
} from "./authActions";

export const registrationUserOperation =
 (formState, history) => async (dispatch) => {
  try {
   const response = await registrationUserApi(formState);
   dispatch(registerUserAction(response));
   alert("You was secsesful Registrated. Login please");
   history.push("/login");
  } catch (error) {
   dispatch(registerUserActionError(error));
  }
 };

export const loginUserOperation = (formState, history) => async (dispatch) => {
 try {
  const response = await loginUserApi(formState);
  dispatch(loginUserAction(response.data));
  history.push("/formAdd");
 } catch (error) {
  dispatch(loginUserActionError(error));
 }
};

export const logoutUserOperation = () => async (dispatch, getState) => {
 const authToken = getState().auth.token;
 try {
  const response = await logoutApi(authToken);
  dispatch(logoutUserAction(response.data));
 } catch (error) {
  dispatch(logoutUserActionError(error));
 }
};
