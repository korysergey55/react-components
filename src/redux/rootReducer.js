//=======================Redux===============================
import { combineReducers } from "redux";
import taggleModalReducer from "./modal/ModalReducer";
import formAddReducer from './formAdd/FormAddReducer';
import filterReducer from "./filter/FilterReducer";

const rootReducer = combineReducers({
 modal: taggleModalReducer,
 form: formAddReducer,
 filter: filterReducer,
});

export default rootReducer;
