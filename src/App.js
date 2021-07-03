import React, { Component } from "react";
import Clock from "./components/clock/Clock";
import Modal from "./components/modal/Modal";
import ButtonSVG from "./components/buttonSVG/ButtonSVG";
import { ReactComponent as IconApple } from "./icons/iconmac.svg";
import ContactForm from "./components/formAdd/FormAdd";
import MarkupItems from "./components/markup/MarkupItems";
import Loader from "./components/loader/Loader";
import Filter from "./components/filter/filter";

import { connect } from "react-redux";
import { taggleModal } from "./redux/modal/ModalActions";

class App extends Component {
 render() {
  return (
   <>
    <button type="button" onClick={this.props.taggleModal}>
     Add-markup
     <IconApple width="20" height="20" fill="blue" />
    </button>

    {this.props.isModalOpen && (
     <Modal>
      <ContactForm />
     </Modal>
    )}

    <Clock />
    <ButtonSVG />
    <IconApple width="40" height="40" fill="blue" display="block" />
    <MarkupItems />
    <Loader />
    <Filter />
   </>
  );
 }
}

const mapStateToProps = (state, ownProps) => ({
 isModalOpen: state.modal.isModalOpen,
});

const mapDispatchToProps = {
 taggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
