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

const filterItems = (state) => {
 const formattedState = state.filter.query.toLowerCase().trim();
 const filtered = state.form.items.filter((contact) =>
  contact.name.toLowerCase().includes(formattedState)
 );
 return filtered;
};

const mapStateToProps = (state, ownProps) => ({
 newItems: filterItems(state),
 });

const mapDispatchToProps = {
 handleDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkupItem);
