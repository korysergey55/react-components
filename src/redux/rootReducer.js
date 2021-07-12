//=======================Redux===============================
import { combineReducers } from "redux";

import taggleModalReducer from "./modal/ModalReducer";
import formAddReducer from "./formAdd/FormAddReducer";
import filterReducer from "./filter/FilterReducer";
import authReducer from "./auth/authReducer";

// ----------persist-----------------//
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistItemConfig = {
 key: "item",
 storage,
 whitelist: ["item"],
};

const persistAuthConfig = {
 key: "auth",
 storage,
 whitelist: ["auth"],
};

const rootReducer = combineReducers({
 modal: taggleModalReducer,
 form: persistReducer(persistItemConfig, formAddReducer),
 filter: filterReducer,
 auth: persistReducer(persistAuthConfig, authReducer),
});

export default rootReducer;
