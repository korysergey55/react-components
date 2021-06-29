
 componentDidMount() {
  const items = localStorage.getItem("contacts");
  const parsedContacts = JSON.parse(items);
  
  if (parsedContacts) {
   this.setState({ contacts: parsedContacts });
  }
 }

 componentDidUpdate(prevProps, prevState) {
  if (prevState.contacts !== this.state.contacts) {
   localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
 }

//  ============================findDuplicate=====================================//

handleSubmitForm = (evt) => {
  evt.preventDefault();

  if (this.findDuplicate(this.state.name)) {
   this.props.submitNewContact({ ...this.state, id: uuid() });
   this.resetForm();
  }
 };

 findDuplicate = (newContactName) => {
  if (!newContactName) {
   alert("The field cannot be empty!");
   return false;
  }
  const isDublicate = this.props.contacts.some(
   (contact) => contact.name === newContactName
  );

  if (isDublicate) {
   alert("This Name already exist!" + newContactName);
   return false;
  }
  return true;
 };

 //  ============================NormolizeContacts=====================================//

const getNormolizeContacts = (state) => {
 const formattedContacts = state.contacts.filter.toLowerCase().trim();
 const filteredContacts = state.contacts.items.filter((contact) =>
  contact.name.toLowerCase().includes(formattedContacts)
 );
 return filteredContacts;
};
const mapStateToProps = (state, ownProps) => ({
 contacts: getNormolizeContacts(state),
});
