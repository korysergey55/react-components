//=======================Redux===============================
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from './rootReducer';
// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
//=======================Redux-Toolkit===============================

import rootReducer from './rootReducer';
import { configureStore } from "@reduxjs/toolkit";

// ----------persist-----------------//
import { persistStore } from 'redux-persist';
// ---------------------------//

const store = configureStore({ reducer: rootReducer });
export default store;

// ----------persist-----------------//
persistStore(store);
