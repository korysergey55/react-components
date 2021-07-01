//=======================Redux===============================
import { combineReducers } from "redux";
import taggleModalReducer from "./modal/ModalReducer";
import formAddReducer from './formAdd/FormAddReducer';

const rootReducer = combineReducers({
 taggleModal: taggleModalReducer,
 formAddItems: formAddReducer,
});

export default rootReducer;
