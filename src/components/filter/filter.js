import React from "react";
import { FilterConteinerStyled } from "./FilterStyled";

import { connect } from "react-redux";
import { getFilter } from "../../redux/filter/FilterActions";
import { filterSelector } from "../../redux/filter/FilterSelectors";

const Filter = ({ filter, getFilter }) => {
 const onHandleChange = (event) => {
  getFilter(event.target.value);
 };

 return (
  <FilterConteinerStyled>
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
  </FilterConteinerStyled>
 );
};

const mapStateToProps = (state, ownProps) => ({
 filter: filterSelector(state),
});

const mapDispatchToProps = {
 getFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
