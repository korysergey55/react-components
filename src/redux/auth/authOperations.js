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

export const registrationUserOperation = (formState) => async (dispatch) => {
 try {
  const response = await registrationUserApi(formState);

  dispatch(registerUserAction(response));
  alert("You was secsesful Registrated. Login please");
 } catch (error) {
  dispatch(registerUserActionError(error));
 }
};

export const loginUserOperation = (formState) => async (dispatch) => {
 try {
  const response = await loginUserApi(formState);
  dispatch(loginUserAction(response.data));
 } catch (error) {
  dispatch(loginUserActionError(error));
 }
};

export const logoutUserOperation = (formState) => async (dispatch) => {
 try {
  const response = await logoutApi(formState);
  dispatch(logoutUserAction(response.data));
 } catch (error) {
  dispatch(logoutUserActionError(error));
 }
};
