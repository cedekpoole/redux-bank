const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

//reducer is a function that takes the current state and an action and returns a new state
export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
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
    case "account/convertingCurrency":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

// store.dispatch({ type: "account/deposit", payload: 100 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "pay off debt" },
// });
// console.log(store.getState());

//action creators are functions that return actions
//they are used to avoid typos and to make the code more readable

export function deposit(amount, currency) {
  if (currency === "GBP") return { type: "account/deposit", payload: amount };
  return async (dispatch, getState) => {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?base=${currency}&symbols=GBP`
    );
    const data = await res.json();
    const converted = (amount * data.rates.GBP).toFixed(2);
    dispatch({ type: "account/deposit", payload: +converted });
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

export function payLoan() {
  return { type: "account/payLoan" };
}
