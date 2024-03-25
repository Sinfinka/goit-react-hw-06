//action
export const filterContacts = (newFilter) => {
  return {
    type: "filters/filterContacts",
    payload: newFilter,
  };
};

// reducer
export const filterReducer = (state = { name: "" }, action) => {
  switch (action.type) {
    case "filters/filterContacts":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
