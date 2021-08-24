import { createAction } from "@reduxjs/toolkit";

export const submitNewItem = createAction("formAdd/submitNewItem", (item) => {
 return {
  payload: item,
 };
});
export const submitNewItemError = createAction("formAdd/submitNewItemError");

export const getAllContacts = createAction("formAdd/getAllContacts");
export const getAllContnactsError = createAction(
 "formAdd/getAllContnactsError"
);

export const handleDelete = createAction("contact/handleDelete");
export const handleDeleteError = createAction("formAdd/handleDeleteError");
