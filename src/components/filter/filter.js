import React from 'react';

import { connect } from "react-redux";
import { getFilter } from '../../redux/filter/FilterActions';


const Filter = ({ filter, getFilter }) => {
    
 const onHandleChange = (event) => {
  getFilter(event.target.value);
 };

 return (
  <div className="mainContainer">
   <div className="inputContainer">
    <label className="labelName" htmlFor="filter">
     Find contact by name
    </label>
    <input
     onChange={onHandleChange}
     type="text"
     name="filter"
     id="filter"
     value={filter}
     className="inputName"
    ></input>
   </div>
  </div>
 );
};
// const filterItems = (state) => {
//  const formattedState = state.filter.query.toLowerCase().trim();
//  const filtered = state.form.items.filter((contact) =>
//   contact.name.toLowerCase().includes(formattedState)
//  );
//  return filtered;
// };

const mapStateToProps = (state, ownProps) => ({
 filter: state.filter.query
});

const mapDispatchToProps = {
 getFilter,
};



export default connect(mapStateToProps, mapDispatchToProps)(Filter);