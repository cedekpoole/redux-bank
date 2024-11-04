import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initalStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

//reducer is a function that takes the current state and an action and returns a new state

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initalStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    case "customer/updateNationalId":
      return {
        ...state,
        nationalId: action.payload,
      };
    default:
      return state;
  }
}

//combineReducers is a function that takes an object of reducers and returns a new reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//store is a place to store the state of the application
const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 100 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "pay off debt" },
// });
// console.log(store.getState());

//action creators are functions that return actions
//they are used to avoid typos and to make the code more readable

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(100));
store.dispatch(withdraw(50));
store.dispatch(requestLoan(1000, "pay off debt"));
store.dispatch(payLoan());

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

function updateNationalId(nationalId) {
  return {
    type: "customer/updateNationalId",
    payload: nationalId,
  };
}

store.dispatch(createCustomer("Cam E", "1234567"));
store.dispatch(updateName("Cam E."));
store.dispatch(updateNationalId("7654321"));

console.log(store.getState());
