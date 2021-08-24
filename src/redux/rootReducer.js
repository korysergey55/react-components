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
 whitelist: ["token", "user"],
};

const persistItemConfig = {
 key: "items",
 storage,
 whitelist: ["items"],
};

const persistedFormikReducer = persistReducer(
 {
  key: "formik",
  storage,
  whitelist: "formik",
 },
 formikReducer
);

const rootReducer = combineReducers({
 auth: persistReducer(persistAuthConfig, authReducer),
 form: persistReducer(persistItemConfig, formAddReducer),
 formik: persistedFormikReducer,
 modal: taggleModalReducer,
 filter: filterReducer,
});

export default rootReducer;
