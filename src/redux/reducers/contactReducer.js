import { v4 as uuidv4 } from "uuid";
const initialState = [
  {
    id: uuidv4(),
    name: "Martin Raquion",
  },
];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactReducer;
