import { v4 as uuidv4 } from "uuid";
const initialState = {
  user: [
    {
      id: uuidv4(),
      name: "Martin Raquion",
      number: 1,
    },
  ],

  selectedContact: {},
};
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADD_CONTACT`:
      return { ...state, user: [...state.user, action.payload] };
    case `SELECT_CONTACT`:
      return { ...state, selectedContact: action.payload };
    case `DELETE_CONTACT`:
      const filteredContact = state.user.filter(
        (contact) => contact.id !== action.payload.id
      );

      return {
        ...state,
        user: filteredContact,
        selectedContact: {},
      };
    default:
      return state;
  }
};

export default contactReducer;
