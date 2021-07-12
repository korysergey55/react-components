import React from "react";
import FormAdd from "../components/formAdd/FormAdd";
import MarkupItems from "../components/markup/MarkupItems";
import Filter from "../components/filter/Filter";

const FormAddPage = () => {
 return (
  <>
   <FormAdd />
   <Filter />
   <MarkupItems />
  </>
 );
};

export default FormAddPage;
