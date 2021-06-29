//=======================Redux===============================
import { combineReducers } from "redux";
import taggleModalReducer from "./modal/ModalReducer";

const rootReducer = combineReducers({
 taggleModalReducer,
});

export default rootReducer;
