import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalStyled } from "./ModalStyled";
import { createPortal } from "react-dom";

import { connect } from "react-redux";
import { taggleModal } from "../../redux/modal/ModalActions";

class Modal extends Component {
 static propTypes = {
  taggleModal: PropTypes.func.isRequired,
 };

 componentDidMount() {
  window.addEventListener("keydown", this.handleEsc);
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
 }
 componentWillUnmount() {
  window.removeEventListener("keydown", this.handleEsc);
  const body = document.querySelector("body");
  body.style.overflow = "auto";
 }

 handleEsc = (e) => {
  if (e.code === "Escape") {
   this.props.taggleModal();
  }
 };

 handleBackdropClick = (e) => {
  if (e.target !== e.currentTarget) return;
  this.props.taggleModal();
 };

 //  state = { isModalOpen: false };
 //  taggleModal = () => {
 //   this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
 //  };
 render() {
  console.log(this.props);
  const modalRoot = document.querySelector("#modal-root");
  return createPortal(
   <ModalStyled className="Overlay" onClick={this.handleBackdropClick}>
    <div className="Modal">
     {this.props.children}
     <button type="button" onClick={this.props.taggleModal}>
      Close-modal
     </button>
    </div>
   </ModalStyled>,
   modalRoot
  );
 }
}

const mapDispatchToProps = {
 taggleModal,
};

export default connect(null, mapDispatchToProps)(Modal);
