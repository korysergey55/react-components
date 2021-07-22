import {
 getFormAddContactApi,
 getAllFormAddContacts,
 getDeliteFormAddContactApi,
} from "../../servises/fomAddApi";
import {
 submitNewItem,
 submitNewItemError,
 getAllContacts,
 getAllContnactsError,
 handleDelete,
 handleDeleteError,
} from "./FormAddActions";

export const getAllContactsOperation = () => async (dispatch, getState) => {
 const token = getState().auth.token;
 try {
  const responce = await getAllFormAddContacts(token);
  dispatch(getAllContacts(responce.data));
 } catch (error) {
  dispatch(getAllContnactsError(error));
 }
};

export const addNewContactOperation = (state) => async (dispatch, getState) => {
 const token = getState().auth.token;
 try {
  const responce = await getFormAddContactApi(state, token);
  dispatch(submitNewItem(responce.data));
 } catch (error) {
  dispatch(submitNewItemError(error));
 }
};

export const deleteContactOperation = (id) => async (dispatch, getState) => {
 const token = getState().auth.token;
 try {
  await getDeliteFormAddContactApi(id, token);
  dispatch(handleDelete(id));
 } catch (error) {
  dispatch(handleDeleteError(error));
 }
};
