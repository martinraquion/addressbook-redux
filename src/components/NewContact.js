import React from "react";

function NewContact() {
  return (
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
        <input type="text" />
        <span>Number</span>
        <input type="text" />
      </div>
    </div>
  );
}

export default NewContact;
