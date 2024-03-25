//reducer
export const contactsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return { ...state, items: [state.items, action.payload] };
    default:
      return state;
  }
};

//action
export function addContact(value) {
  return {
    type: "contacts/addContact",
    payload: value,
  };
}
