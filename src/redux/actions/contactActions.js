export const addContact = (newContact) => {
  return {
    type: `ADD_CONTACT`,
    payload: newContact,
  };
};

export const selectContact = (selected) => {
  return {
    type: `SELECT_CONTACT`,
    payload: selected,
  };
};

export const deleteContact = (contact) => {
  return {
    type: `DELETE_CONTACT`,
    payload: contact,
  };
};
