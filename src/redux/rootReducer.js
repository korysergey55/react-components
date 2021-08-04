//=======================Redux===============================
import { combineReducers } from "redux";

import taggleModalReducer from "./modal/ModalReducer";
import formAddReducer from "./formAdd/FormAddReducer";
import filterReducer from "./filter/FilterReducer";
import authReducer from "./auth/authReducer";
import formikReducer from "./formik/FormikReducer";

// ----------persist-----------------//
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistAuthConfig = {
 key: "auth",
 storage,
 whitelist: ["token","user"],
};
const persistItemConfig = {
 key: "items",
 storage,
 whitelist: ["items"],
};
const persistFormikConfig = {
 key: "formik",
 storage,
 whitelist: "formik",
};
const rootReducer = combineReducers({
 modal: taggleModalReducer,
 form: persistReducer(persistItemConfig, formAddReducer),
 filter: filterReducer,
 auth: persistReducer(persistAuthConfig, authReducer),
 formik: persistReducer(persistFormikConfig, formikReducer),
});

export default rootReducer;
