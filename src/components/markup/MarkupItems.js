import React from "react";
import { MarkupItemStyledContainer } from "./MarkupItemsStyled";
import { connect } from "react-redux";

import { getfilteredSelector } from "../../redux/filter/FilterSelectors";
import { deleteContactOperation } from "../../redux/formAdd/FormAddOperations";

const MarkupItem = ({ newItems, deleteContactOperation }) => {
 return (
  <MarkupItemStyledContainer>
   <ul>
    {newItems?.map((item) => (
     <li className="newContact" key={item.id}>
      <p className="newContactName">
       {item.name} : {item.number}
      </p>
      <button
       type="button"
       className="btn"
       onClick={() => deleteContactOperation(item.id)}
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
 deleteContactOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkupItem);
