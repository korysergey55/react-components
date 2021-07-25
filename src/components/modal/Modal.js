import React, { Component } from "react";
import { ModalStyled } from "./ModalStyled";
import { createPortal } from "react-dom";

import { connect } from "react-redux";
import { taggleModal } from "../../redux/modal/ModalActions";

class Modal extends Component {
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

 handleEsc = (evt) => {
  if (evt.code === "Escape") {
   this.props.taggleModal();
  }
 };

 handleBackdropClick = (evt) => {
     if (evt.target !== evt.currentTarget)
         return;
  this.props.taggleModal();
 };

 render() {
  const modalRoot = document.querySelector("#modal-root");
  return createPortal(
   <ModalStyled className="Overlay" onClick={this.handleBackdropClick}>
    <div className="Modal">
     {this.props.children}
     <button
      type="button"
      className="closeModal"
      onClick={this.props.taggleModal}
     >
      Close-modal
     </button>
    </div>
   </ModalStyled>,
   modalRoot
  );
 }
}
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
 taggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

//=================insert-in-component========================//

// import Modal from "./components/modal/Modal";
// import { connect } from "react-redux";
// import { taggleModal } from "./redux/modal/ModalActions";

//<button type="button" onClick={this.props.taggleModal}>
// Open-modal
//</button>;
//{ this.props.isModalOpen && <Modal />}

// const mapStateToProps = (state, ownProps) => ({
//  isModalOpen: state.modal.isModalOpen,
// });

// const mapDispatchToProps = {
//  taggleModal,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(....);

//=================Withaut-Redax-App========================//
//  state = { isModalOpen: false };
//  taggleModal = () => {
//   this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
//  };
