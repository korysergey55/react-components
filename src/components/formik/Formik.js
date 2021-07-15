import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getFormikValue } from "../../redux/formik/FormikActions";
import { useDispatch } from "react-redux";
import { validShema } from "./validationShema";

const FormikComponent = () => {
 const dispatch = useDispatch();
 return (
  <div>
   <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={validShema}
    onSubmit={(value) => dispatch(getFormikValue(value))}
   >
    <Form>
     <div>
      <label>Enter-email</label>
      <Field name="email" type="email" />
      <ErrorMessage name="email" component="p" />
     </div>
     <div>
      <label>Enter-password</label>
      <Field name="password" type="password" />
      <ErrorMessage name="password" component="p" />
     </div>
     <button type="submit">SentForm</button>
    </Form>
   </Formik>
  </div>
 );
};

export default FormikComponent;
