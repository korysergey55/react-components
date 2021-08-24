import React from "react";
import FormAdd from "../components/formAdd/FormAdd";
import MarkupItems from "../components/markup/MarkupItems";
import Filter from "../components/filter/Filter";
import styles from "./module/FormAddPageStyled.module.css";
import { authTokenSelector } from "../redux/auth/authSelector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllContactsOperation } from "../redux/formAdd/FormAddOperations";

const FormAddPage = () => {
 const dispatch = useDispatch();
 const token = useSelector(authTokenSelector);

 useEffect(() => {
  token && dispatch(getAllContactsOperation());
 }, [token, dispatch]);

 return (
  <div className={styles.containerFormAddPage}>
   <FormAdd />
   <Filter />
   <MarkupItems />
  </div>
 );
};

export default FormAddPage;

