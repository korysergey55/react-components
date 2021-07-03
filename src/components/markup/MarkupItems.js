import React from "react";
import { MarkupItemStyledContainer } from "./MarkupItemsStyled";
import { connect } from "react-redux";

import { handleDelete } from "../../redux/formAdd/FormAddActions";

const MarkupItem = ({ newItems, handleDelete }) => {
 return (
  <MarkupItemStyledContainer>
   <ul>
    {newItems.map((item) => (
     <li className="newContact" key={item.id}>
      <p className="newContactName">
       {item.name} : {item.number}
      </p>
      <button
       type="button"
       className="btn"
       onClick={() => handleDelete(item.id)}
      >
       Delete
      </button>
     </li>
    ))}
   </ul>
  </MarkupItemStyledContainer>
 );
};

// const getNormolize = (state) => {
//  const formattedContacts = state.contacts.filter.toLowerCase().trim();
//  const filteredContacts = state.contacts.items.filter((contact) =>
//   contact.name.toLowerCase().includes(formattedContacts)
//  );
//  return filteredContacts;
// };

const mapStateToProps = (state, ownProps) => ({
 //  newItems: getNormolize(state.formAddItems.items),
 newItems: state.formAddItems.items,
});

const mapDispatchToProps = {
 handleDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkupItem);
