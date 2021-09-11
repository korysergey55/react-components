import React from "react";
import styles from "./FormikStyled.module.css";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { validShema } from "./validationShema";
import { getFormikValue } from "../../redux/formik/FormikActions";

export const FormControl = (props) => {
 const id = useMemo(() => Math.floor(Math.random() * 99999).toString(), []);
 const [field, meta] = useField(props);

 return (
  <div className={styles.FormControlContainer}>
   <label className={styles.FormControlLabel} htmlFor={id}>
    {props.label}
   </label>

   <input
    id={id}
    className={meta.error && meta.touched ? styles.FormControlInput : ""}
    {...field}
    {...props}
   />

   {meta.error && meta.touched && (
    <p className={styles.ErrorMessage}>{meta.error}</p>
   )}
  </div>
 );
};

const FormikComponent = () => {
 const dispatch = useDispatch();
 return (
  <div>
   <Formik
    initialValues={{ email: "", password: "", tel: "" }}
    validationSchema={validShema}
    onSubmit={(value) => dispatch(getFormikValue(value))}
    submitText="Register"
   >
    <Form>
     <div className={styles.emailContainer}>
      <FormControl name="tel" type="tel" label="FormControl" />
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
