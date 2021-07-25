import React, { Component } from "react";
import styles from "./AuthFormStyled.module.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
 registrationUserOperation,
 loginUserOperation,
} from "../../redux/auth/authOperations";
import formOptions from "./options";

class AuthForm extends Component {
 state = {
  email: "",
  password: "",
  gender: "female",
  licence: true,
  country: null,
 };

 nameInputId = uuidv4();
 emailInputId = uuidv4();
 passwordInputId = uuidv4();

 onHandleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
 };

 handleLicenceChange = (evt) => {
  const isCheckbox = evt.target.type === "checkbox";
  //  this.setState({
  //   licence: isCheckbox ? evt.target.checked : evt.target.value,
  //  });
  this.setState({
   licence: evt.target.checked,
  });
 };

 onHandleSubmit = (event) => {
  event.preventDefault();
  this.props.location.pathname === "/registration"
   ? this.props.registrationUserOperation({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
     })
   : this.props.loginUserOperation({
      email: this.state.email,
      password: this.state.password,
     });
  this.reset();
  this.props.history.push("/login");
 };

 reset = () => {
  this.setState({ email: "", password: "" });
 };

 render() {
  return (
   <form className={styles.formAuth} onSubmit={this.onHandleSubmit}>
    <h2 className="title">
     {this.props.location.pathname === "/registration"
      ? "Registration Page"
      : "Login Page"}
    </h2>
    {this.props.location.pathname === "/registration" && (
     <label className={styles.labelName} htmlFor={this.nameInputId}>
      Name
      <input
       onChange={this.onHandleChange}
       className={styles.inputName}
       type="text"
       name="name"
       value={this.state.name}
       required
       placeholder="Enter Name"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
       id={this.nameInputId}
      />
     </label>
    )}
    <label className={styles.labelName} htmlFor={this.emailInputId}>
     Email
     <input
      onChange={this.onHandleChange}
      className={styles.inputName}
      type="email"
      name="email"
      value={this.state.email}
      required
      placeholder="Enter email"
      id={this.emailInputId}
     />
    </label>
    <label className={styles.labelName} htmlFor={this.passwordInputId}>
     Password
     <input
      onChange={this.onHandleChange}
      className={styles.inputName}
      type="password"
      name="password"
      value={this.state.password}
      required
      placeholder="Enter Password"
      id={this.passwordInputId}
     />
    </label>
    {this.props.location.pathname === "/registration" && (
     <>
      <div className={styles.radioContainer}>
       <label className={styles.labelName}>
        <input
         className={styles.inputName}
         type="radio"
         name="gender"
         value="male"
         onChange={this.onHandleChange}
         checked={this.state.gender === "male"}
        />
        Мужчина
       </label>
       <label className={styles.labelName}>
        <input
         className={styles.inputName}
         type="radio"
         name="gender"
         value="female"
         onChange={this.onHandleChange}
         checked={this.state.gender === "female"}
        />
        Женщина
       </label>
      </div>
      <select
       className={styles.select}
       name="country"
       value={this.state.country}
       onChange={this.onHandleChange}
       required
      >
       {formOptions.map((option) => (
        <option
         value={option.value}
         name={option.name}
         checked={this.state.country === option.value}
        >
         {option.countryName}
        </option>
       ))}
       {/* <option value="Ukraine">Ukraine</option>
       <option value="Poland">Poland</option> */}
      </select>
      <label className={styles.labelName}>
       <input
        type="checkbox"
        name="licence"
        onChange={this.handleLicenceChange}
        checked={this.state.licence}
       />
       Соглашаюсь с условиями
      </label>
     </>
    )}
    <button
     className={styles.buttonGo}
     type="submit"
     disabled={!this.state.licence}
    >
     {this.props.location.pathname === "/registration"
      ? "Registration"
      : "Login"}
    </button>
   </form>
  );
 }
}
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
 registrationUserOperation,
 loginUserOperation,
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(withRouter(AuthForm));
