//=======================Redux===============================
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from './rootReducer';
// const store = createStore(rootReducer, composeWithDevTools());
// export default store;

//=======================Redux-Toolkit===============================
import rootReducer from "./rootReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import {
 FLUSH,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
 REHYDRATE,
} from "redux-persist/es/constants";

const middleware = [
 ...getDefaultMiddleware({
  serializableCheck: {
   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
 }),
];

const store = configureStore({ reducer: rootReducer, middleware });
const persistor = persistStore(store);

export { store, persistor };
