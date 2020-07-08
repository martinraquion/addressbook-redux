import React from "react";
import { v1 as uuidv1 } from "uuid";
import NewContact from "./NewContact";
import { useSelector, useDispatch } from "react-redux";
function ContactContainer() {
  const contacts = useSelector((state) => state.contact);
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
          }}
          key={contact.id}
        >
          <span>Name: {contact.name}</span>
          <span>#: {contact.id} </span>
        </div>
      ))}
    </div>
  );
}

export default ContactContainer;