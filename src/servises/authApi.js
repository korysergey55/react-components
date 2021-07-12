import axios from "axios";

const BASE_URL = "https://connections-api.herokuapp.com";

export const registrationUserApi = async (inputFormState) => {
 try {
  const response = await axios.post(`${BASE_URL}/users/signup`, {
   ...inputFormState,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const loginUserApi = async (inputFormState) => {
 try {
  const response = await axios.post(`${BASE_URL}/users/login`, {
   ...inputFormState,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const logoutApi = async (inputFormState) => {
 try {
  axios.defaults.headers.Authorization = ``;
  const response = await axios.post(`${BASE_URL}/users/logout`, {
   inputFormState,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};
