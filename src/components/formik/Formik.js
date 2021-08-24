import React from "react";
import styles from "./FormikStyled.module.css";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { validShema } from "./validationShema";
import { getFormikValue } from "../../redux/formik/FormikActions";

export const FormControl = ({ label, ...props }) => {
 const id = useMemo(() => Math.floor(Math.random() * 99999).toString(), []);
 const [field, meta] = useField(props);

 return (
  <div className={styles.FormControlContainer}>
   <label className={styles.FormControlLabel} htmlFor={id}>
    {label}
   </label>

   <input
    name="formControl"
    id={id}
    className={meta.error && meta.touched ? styles.FormControlInput : ""}
    {...field}
    {...props}
   />

   <ErrorMessage
    name={field.name}
    component="p"
    className={styles.ErrorMessage}
   />
   {/* {meta.error && meta.touched && (<p className={styles.ErrorMessage}>{meta.error}</p>)} */}
  </div>
 );
};

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
     {/* <FormControl label="label" /> */}
     <div className={styles.emailContainer}>
      <label className={styles.emailLabel}>email</label>
      <Field name="email" type="email" className={styles.emailField} />
      <ErrorMessage
       name="email"
       component="p"
       className={styles.ErrorMessage}
      />
     </div>
     <div className={styles.passwordContainer}>
      <label className={styles.passwordLabel}>password</label>
      <Field name="password" type="password" className={styles.passwordField} />
      <ErrorMessage
       name="password"
       component="p"
       className={styles.ErrorMessage}
      />
     </div>

     <button type="submit" className={styles.buttonSubmit}>
      Register
     </button>
    </Form>
   </Formik>
  </div>
 );
};

export default FormikComponent;
