import React, { Component } from "react";
import { FormAddStyledContainer } from "./FormAddStuled";

import { connect } from "react-redux";
import {
 getAllContactsOperation,
 addNewContactOperation,
} from "../../redux/formAdd/FormAddOperations";

class FormAdd extends Component {
 state = {
  name: "",
  number: "",
 };

 handleChange = (evt) => {
  this.setState({
   [evt.target.name]: evt.target.value,
  });
 };

 findDuplicate = (item) => {
  const isDublicate = this.props.newItems.find(
   (contact) => contact?.name === item
  );
  if (!item) {
   alert("The field cannot be empty!");
   return false;
  }
  if (isDublicate) {
   alert("This Name already exist!" + item);
   return false;
  }
  return true;
 };

 handleSubmitForm = (evt) => {
  evt.preventDefault();
  if (this.findDuplicate(this.state.name)) {
   this.props.addNewContactOperation({ ...this.state });
   this.resetForm();
  }
 };

 resetForm = () => {
  this.setState({ name: "", number: "" });
 };

 render() {
  return (
   <FormAddStyledContainer>
    <form className="mainForm" onSubmit={this.handleSubmitForm}>
     <div className="inputContainer">
      <label className="labelName">Name</label>
      <input
       onChange={this.handleChange}
       type="text"
       name="name"
       value={this.state.name}
       className="inputName"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
       required
       placeholder="Enter Name"
      ></input>
     </div>

     <div className="inputContainer">
      <label className="labelName">Number</label>
      <input
       onChange={this.handleChange}
       type="tel"
       name="number"
       value={this.state.number}
       className="inputName"
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
       required
      />
     </div>
     <button type="submit" className="buttonAddContact">
      Add contact
     </button>
     <p className="qantytyContacts">
      My contacts: {this.props.newItems.length}
     </p>
    </form>
   </FormAddStyledContainer>
  );
 }
}
const mapStateToProps = (state, ownProps) => ({
 newItems: state.form.items,
 token: state.auth.token,
});

const mapDispatchToProps = {
 getAllContactsOperation,
 addNewContactOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
