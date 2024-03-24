import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts: {
    items: 0,
  },
};

export default function add(value) {
  return {
    type: "contacts/add",
    payload: value,
  };
}
console.log(initialState);
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/add":
      return {
        contacts: {
          items: state.contacts.items + action.payload,
        },
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: "",
//   },
// });
