import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
 registrationUserOperation,
 loginUserOperation,
} from "../../redux/auth/authOperations";

import { connect } from "react-redux";

class AuthForm extends Component {
 state = {
  email: "",
  password: "",
 };
 onHandleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
 };
 onHandleSubmit = (event) => {
  event.preventDefault();

  this.props.location.pathname === "/registration"
   ? this.props.registrationUserOperation(this.state)
   : this.props.loginUserOperation({
      email: this.state.email,
      password: this.state.password,
     });
 };
 render() {
  return (
   <form className="formAuth" onSubmit={this.onHandleSubmit}>
    {this.props.location.pathname === "/registration" && (
     <label className="labelName">
      Name
      <input
       onChange={this.onHandleChange}
       className="inputName"
       type="text"
       name="name"
       value={this.state.name}
      />
     </label>
    )}
    <label className="labelName">
     Email
     <input
      onChange={this.onHandleChange}
      className="inputName"
      type="text"
      name="email"
      value={this.state.email}
     />
    </label>
    <label className="labelName">
     Password
     <input
      onChange={this.onHandleChange}
      className="inputName"
      type="text"
      name="password"
      value={this.state.password}
     />
    </label>
    <button className="buttonGo" type="submit">
     {this.props.location.pathname === "/registration"
      ? "Registration"
      : "Login"}
    </button>
   </form>
  );
 }
}
const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = {
 registrationUserOperation,
 loginUserOperation,
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(withRouter(AuthForm));
