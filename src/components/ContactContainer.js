import React from "react";
import { v1 as uuidv1 } from "uuid";
import NewContact from "./NewContact";
function ContactContainer() {
  return (
    <div style={{ border: "1px solid black", padding: 10, width: 350 }}>
      <h2>CONTACT LIST</h2>
      <NewContact />
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          padding: 10,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span>Name: Martin Raquion</span>
        <span>#: {uuidv1()} </span>
      </div>
    </div>
  );
}

export default ContactContainer;
