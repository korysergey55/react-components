import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import styles from './ContactForm.module.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { submitNewContact } from "../../redux/contactForm/contactFormActions";

class ContactForm extends Component {
 static propTypes = {
  submitNewContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
 };

 state = {
  name: "",
  number: "",
 };

 saveInputValueToState = (evt) => {
  this.setState({
   [evt.target.name]: evt.target.value,
  });
 };

 handleSubmitForm = (evt) => {
  evt.preventDefault();

  if (this.findDuplicate(this.state.name)) {
   this.props.submitNewContact({ ...this.state, id: uuid() });
   this.resetForm();
  }
 };

 resetForm = () => {
  this.setState({ name: "", number: "" });
 };

 findDuplicate = (newContactName) => {

  const isDublicate = this.props.contacts.some(
   (contact) => contact.name === newContactName
  );

  if (!newContactName) {
   alert("The field cannot be empty!");
   return false;
  }

  if (isDublicate) {
   alert("This Name already exist!" + newContactName);
   return false;
  }
  return true;
 };

 render() {
  return (
   <>
    <form className={styles.mainForm} onSubmit={this.handleSubmitForm}>
     <div className={styles.inputContainer}>
      <label className={styles.labelName}>Name</label>
      <input
       onChange={this.saveInputValueToState}
       type="text"
       name="name"
       className={styles.inputName}
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
       required
       placeholder="Enter Name"
      ></input>
     </div>

     <div className={styles.inputContainer}>
      <label className={styles.labelName}>Number</label>
      <input
       onChange={this.saveInputValueToState}
       type="tel"
       name="number"
       className={styles.inputName}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
       required
      />
     </div>
     <button type="submit" className={styles.buttonAddContact}>
      Add contact
     </button>
    </form>
   </>
  );
 }
}

const mapStateToProps = (state, ownProps) => ({
 contacts: state.contacts.items,
});

const mapDispatchToProps = {
 submitNewContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
