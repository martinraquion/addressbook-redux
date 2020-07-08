import React from "react";
import { useSelector } from "react-redux";
function UserPreview() {
  const { name, number, id } = useSelector(
    (state) => state.contact.selectedContact
  );
  return (
    <div style={{ border: "1px solid black", padding: 10, width: 420 }}>
      <h2>PREVIEW</h2>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          padding: 10,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span>Name: {name}</span>
        <span>#: {number} </span>
      </div>
    </div>
  );
}

export default UserPreview;
