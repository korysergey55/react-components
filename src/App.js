import React, { Component } from "react";
import Clock from "./components/clock/Clock";
import Modal from "./components/modal/Modal";
import ButtonSVG from "./components/buttonSVG/ButtonSVG";
import { ReactComponent as IconApple } from "./icons/iconmac.svg";

import { connect } from "react-redux";
import { taggleModal } from "./redux/modal/ModalActions";

class App extends Component {
 render() {
  return (
   <>
    <button type="button" onClick={this.props.taggleModal}>
     Open-modal
     <IconApple width="20" height="20" fill="blue" />
    </button>

    {this.props.isModalOpen && (
     <Modal>
      <h2>Content-Modal</h2>
     </Modal>
    )}
    <Clock />
    <IconApple width="40" height="40" fill="blue" display="block" />
    <ButtonSVG />
   </>
  );
 }
}

const mapStateToProps = (state, ownProps) => ({
 isModalOpen: state.taggleModalReducer.modal,
});

const mapDispatchToProps = {
 taggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
