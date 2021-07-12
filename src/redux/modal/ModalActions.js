//=======================Redux===============================
// const TAGGLE_MODAL = "modal/taggleModal";
// const taggleModal = () => ({
//  type: TAGGLE_MODAL,
//  });
// export { TAGGLE_MODAL };
// export {taggleModal}
//=======================Redux-Toolkit===============================

import { createAction } from "@reduxjs/toolkit";

const taggleModal = createAction("modal/taggleModal");

export { taggleModal };

