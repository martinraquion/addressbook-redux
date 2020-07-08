import React, { useState } from "react";
import { addContact } from "../redux/actions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
function NewContact() {
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const dispatch = useDispatch();
  const handleNewContact = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(newContact));
    setNewContact({ name: "", number: "" });
  };

  console.log(newContact);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            padding: 10,
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 10,
          }}
        >
          <span>New Contact</span>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleNewContact}
          />
          <span>Number</span>
          <input
            type="text"
            name="number"
            value={newContact.number}
            onChange={handleNewContact}
          />
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default NewContact;
