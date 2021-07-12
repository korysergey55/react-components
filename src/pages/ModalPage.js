import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../components/modal/Modal";
import { taggleModal } from "../redux/modal/ModalActions";
import { modalSelector } from "../redux/modal/ModalSelector";

const ModalPage = () => {
 const isModalOpen = useSelector(modalSelector);
 const dispatch = useDispatch();
 return (
  <>
   <button type="button" onClick={dispatch(taggleModal)}>
    Open-modal
   </button>
   {!isModalOpen && <Modal></Modal>}
  </>
 );
};

export default ModalPage;
