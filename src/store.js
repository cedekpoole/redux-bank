import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//combineReducers is a function that takes an object of reducers and returns a new reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//store is a place to store the state of the application
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
