// These imports are for CLASSIC REDUX code prior to using Redux Toolkit
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//this is CLASSIC REDUX code prior to using Redux Toolkit

//combineReducers is a function that takes an object of reducers and returns a new reducer
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// //store is a place to store the state of the application
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

export default store;
