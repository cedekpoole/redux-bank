import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
  hasAccount: false,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
        state.hasAccount = true;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
    updateNationalId(state, action) {
      state.nationalId = action.payload;
    },
  },
});

export const { createCustomer, updateName, updateNationalId } =
  customerSlice.actions;

export default customerSlice.reducer;

//reducer is a function that takes the current state and an action and returns a new state

// export default function customerReducer(state = initalStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//         hasAccount: true,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };
//     case "customer/updateNationalId":
//       return {
//         ...state,
//         nationalId: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalId, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return {
//     type: "customer/updateName",
//     payload: fullName,
//   };
// }

// export function updateNationalId(nationalId) {
//   return {
//     type: "customer/updateNationalId",
//     payload: nationalId,
//   };
// }
