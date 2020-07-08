import { v4 as uuidv4 } from "uuid";
const initialState = [
  {
    id: uuidv4(),
    name: "Martin Raquion",
    number: 1,
  },
];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADD_CONTACT`:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default contactReducer;
