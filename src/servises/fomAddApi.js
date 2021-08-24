import axios from "axios";
const BASE_URL = "https://connections-api.herokuapp.com";

export const getAllFormAddContacts = async (token) => {
 axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
 try {
  const responce = await axios.get(`${BASE_URL}/contacts`);
  return responce;
 } catch (error) {
  console.log(error);
 }
};

export const getFormAddContactApi = async (formState, token) => {
 axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
 try {
  const responce = await axios.post(`${BASE_URL}/contacts`, formState);
  return responce;
 } catch (error) {
  console.log(error);
 }
};

export const getDeliteFormAddContactApi = async (id, token) => {
 axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
 try {
  const responce = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return responce;
 } catch (error) {
  console.log(error);
 }
};
