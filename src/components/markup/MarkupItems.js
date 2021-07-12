import React from "react";
import { MarkupItemStyledContainer } from "./MarkupItemsStyled";
import { connect } from "react-redux";

import { handleDelete } from "../../redux/formAdd/FormAddActions";
import { getfilteredSelector } from "../../redux/filter/FilterSelectors";

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

const mapStateToProps = (state, ownProps) => ({
 newItems: getfilteredSelector(state),
});

const mapDispatchToProps = {
 handleDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkupItem);
