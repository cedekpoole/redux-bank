const initalStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
  hasAccount: false,
};

//reducer is a function that takes the current state and an action and returns a new state

export default function customerReducer(state = initalStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
        hasAccount: true,
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

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

export function updateNationalId(nationalId) {
  return {
    type: "customer/updateNationalId",
    payload: nationalId,
  };
}
