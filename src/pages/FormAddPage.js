import React from "react";
import FormAdd from "../components/formAdd/FormAdd";
import MarkupItems from "../components/markup/MarkupItems";
import Filter from "../components/filter/Filter";
import styles from "./module/FormAddPageStyled.module.css";
const FormAddPage = () => {
 return (
  <div className={styles.containerFormAddPage}>
   <FormAdd />
   <Filter />
   <MarkupItems />
  </div>
 );
};

export default FormAddPage;
