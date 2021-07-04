import React, { Component } from "react";
import Clock from "./components/clock/Clock";
import Modal from "./components/modal/Modal";
import ButtonSVG from "./components/buttonSVG/ButtonSVG";
import IconSVG from './components/iconSVG/IconSVG';
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
     open-modal
     <IconSVG/>
    </button>

    {this.props.isModalOpen && (
     <Modal>
      <ContactForm />
     </Modal>
    )}

    <Clock />
    <ButtonSVG />
    <IconSVG/>
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
