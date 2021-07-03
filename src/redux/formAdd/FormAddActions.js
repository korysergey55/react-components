import { createAction } from "@reduxjs/toolkit";
const submitNewItem = createAction("formAdd/submitNewItem");
const handleDelete = createAction("contact/handleDelete");
export { submitNewItem, handleDelete };