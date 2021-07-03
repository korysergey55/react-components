import React from "react";
import PropTypes from "prop-types";
import { SectionStyledContainer } from "./SectionStyled";


const Section = ({ title, children }) => {
 return (
  <SectionStyledContainer>
   <h2 className='sectionTitle'>{title}</h2>
   {children}
  </SectionStyledContainer>
 );
};

Section.defaultProps = {
 title: "",
};

Section.propTypes = {
 title: PropTypes.string,
 children: PropTypes.node.isRequired,
};
export default Section;
