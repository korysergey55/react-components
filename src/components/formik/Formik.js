import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { getFormikValue } from "../../redux/formik/FormikActions";
import { useDispatch } from "react-redux";
import { validShema } from "./validationShema";
import { useMemo } from "react";

export const FormControl = ({ label, ...props }) => {
    
 const id = useMemo(() => Math.floor(Math.random() * 99999).toString(), []);
 const [field, meta] = useField(props);

 return (
  <div className="mt-3">
   <label htmlFor={id}>{label}</label>
   <input
    id={id}
    className={meta.error && meta.touched ? "border border-1 text-red-500" : ""}
    {...field}
    {...props}
   />
   {/*<ErrorMessage name={field.name} component="p" className="text-red-500" />*/}
   {meta.error && meta.touched && <p className="text-red-500">{meta.error}</p>}
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
