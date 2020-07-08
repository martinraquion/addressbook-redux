import React from "react";
import NewContact from "./NewContact";
import { useSelector, useDispatch } from "react-redux";
import { selectContact } from "../redux/actions";
function ContactContainer() {
  const contacts = useSelector((state) => state.contact.user);
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1px solid black", padding: 10, width: 350 }}>
      <h2>CONTACT LIST</h2>
      <NewContact />
      {contacts.map((contact) => (
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            padding: 10,
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 4,
            cursor: "pointer",
          }}
          key={contact.id}
          onClick={() => dispatch(selectContact(contact))}
        >
          <span>Name: {contact.name}</span>
          <span>#: {contact.number} </span>
        </div>
      ))}
    </div>
  );
}

export default ContactContainer;
